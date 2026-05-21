import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as crypto from 'crypto';
import * as https from 'https';

const ENC_KEY = process.env.ENCRYPTION_KEY!;

function decrypt(text: string): string {
  const [ivHex, encHex] = text.split(':');
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(ENC_KEY, 'hex'),
    Buffer.from(ivHex, 'hex')
  );
  return Buffer.concat([
    decipher.update(Buffer.from(encHex, 'hex')),
    decipher.final()
  ]).toString();
}

function dhanReq(path: string, method: string, body: object | null, token: string, clientId: string): Promise<unknown> {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.dhan.co',
      path: `/v2${path}`,
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access-token': token,
        'dhanClientId': clientId,
      },
    }, (res) => {
      let d = '';
      res.on('data', (c) => d += c);
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch { resolve([]); } });
    });
    req.on('error', () => resolve([]));
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function parseTime(str: string | undefined): Date | null {
  if (!str) return null;
  const d = new Date(str.replace(' ', 'T'));
  return isNaN(d.getTime()) ? null : d;
}

function fmtHold(mins: number): string {
  if (!mins || mins <= 0) return '';
  return mins < 60 ? `${mins}m` : `${Math.floor(mins / 60)}h ${mins % 60}m`;
}

async function getUserBroker(authHeader: string | null) {
  const sb = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
  const jwt = (authHeader || '').replace('Bearer ', '');
  const { data: { user }, error } = await sb.auth.getUser(jwt);
  if (error || !user) throw new Error('Unauthorized');
  const { data: conn, error: connErr } = await sb
    .from('broker_connections')
    .select('access_token, client_id')
    .eq('user_id', user.id)
    .eq('broker', 'dhan')
    .eq('is_active', true)
    .single();
  if (connErr || !conn) throw new Error('Broker not connected');
  return { token: decrypt(conn.access_token), clientId: conn.client_id, userId: user.id };
}

export async function GET(request: NextRequest) {
  const endpoint = request.nextUrl.searchParams.get('endpoint') || '/fundlimit';
  try {
    const { token, clientId } = await getUserBroker(request.headers.get('authorization'));

    if (endpoint === '/allpositions') {
      const [rawPos, rawOrds, rawHold] = await Promise.all([
        dhanReq('/positions', 'GET', null, token, clientId),
        dhanReq('/orders', 'GET', null, token, clientId),
        dhanReq('/holdings', 'GET', null, token, clientId),
      ]);

      const positions = Array.isArray(rawPos) ? rawPos : [];
      const orders    = Array.isArray(rawOrds) ? rawOrds : [];
      const holdings  = Array.isArray(rawHold) ? rawHold : [];
      const today     = new Date().toISOString().split('T')[0];

      const holdMap: Record<string, number> = {};
      holdings.forEach((h: Record<string, string>) => {
        holdMap[h.tradingSymbol || h.securityId] = parseFloat(h.avgCostPrice || '0');
      });

      const ordMap: Record<string, { buys: Record<string, string>[]; sells: Record<string, string>[] }> = {};
      orders.forEach((o: Record<string, string>) => {
        if (!['TRADED', 'PART_TRADED'].includes(o.orderStatus)) return;
        const k = `${o.tradingSymbol}_${o.productType || ''}`;
        if (!ordMap[k]) ordMap[k] = { buys: [], sells: [] };
        (o.transactionType === 'BUY' ? ordMap[k].buys : ordMap[k].sells).push(o);
      });

      const result: unknown[] = [];

      orders.forEach((sell: Record<string, string>) => {
        if (!['TRADED', 'PART_TRADED'].includes(sell.orderStatus)) return;
        if (sell.transactionType !== 'SELL') return;
        const sym = sell.tradingSymbol || '';
        const prod = sell.productType || '';
        const k = `${sym}_${prod}`;
        const qty = parseInt(sell.filledQty || sell.quantity || '0');
        const exitPrice = parseFloat(sell.tradedPrice || sell.price || '0');
        const sellTime = parseTime(sell.exchangeTime || sell.createTime);
        const buyOrd = (ordMap[k]?.buys || []).find((b) => parseInt(b.filledQty || b.quantity) === qty);
        const entryPrice = buyOrd ? parseFloat(buyOrd.tradedPrice || buyOrd.price || '0') : (holdMap[sym] || 0);
        const buyTime = parseTime(buyOrd?.exchangeTime || buyOrd?.createTime);
        const holdMins = buyTime && sellTime ? Math.max(0, Math.round((sellTime.getTime() - buyTime.getTime()) / 60000)) : 0;
        const pnl = entryPrice > 0 ? (exitPrice - entryPrice) * qty : 0;
        result.push({
          id: sell.orderId || `${sym}_${Date.now()}`,
          symbol: sym, date: sellTime ? sellTime.toISOString().split('T')[0] : today,
          type: 'BUY', qty, buyAvg: entryPrice, sellAvg: exitPrice,
          pnl: parseFloat(pnl.toFixed(2)), realizedPnl: parseFloat(pnl.toFixed(2)), unrealizedPnl: 0,
          isClosed: true, product: prod, holdTime: holdMins, holdDisplay: fmtHold(holdMins),
          rr: 0, sl: 0, grade: '', setup: '', emotion: '', lesson: '', confidence: 5, exitType: '',
        });
      });

      positions.forEach((p: Record<string, string>) => {
        const buyQty = parseFloat(p.buyQty || '0');
        const sellQty = parseFloat(p.sellQty || '0');
        const netQty = parseFloat(p.netQty !== undefined ? p.netQty : String(buyQty - sellQty));
        if (netQty === 0) return;
        const sym = p.tradingSymbol || p.securityId || '';
        const prod = p.productType || p.product || '';
        const qty = Math.abs(netQty);
        const buyAvg = parseFloat(p.buyAvg || p.costPrice || String(holdMap[sym] || 0));
        const unrealized = parseFloat(p.unrealizedProfit || p.unrealizedPnl || '0');
        const k = `${sym}_${prod}`;
        const buyOrd = (ordMap[k]?.buys || [])[0];
        const buyTime = parseTime(buyOrd?.exchangeTime || buyOrd?.createTime);
        const holdMins = buyTime ? Math.max(0, Math.round((Date.now() - buyTime.getTime()) / 60000)) : 0;
        result.push({
          id: `${p.securityId}_${prod}_open`,
          symbol: sym, date: today, type: netQty >= 0 ? 'BUY' : 'SELL', qty,
          buyAvg, sellAvg: 0, pnl: parseFloat(unrealized.toFixed(2)),
          realizedPnl: 0, unrealizedPnl: parseFloat(unrealized.toFixed(2)),
          isClosed: false, product: prod, holdTime: holdMins, holdDisplay: fmtHold(holdMins),
          rr: 0, sl: 0, grade: '', setup: '', emotion: '', lesson: '', confidence: 5, exitType: '',
        });
      });

      result.sort((a: unknown, b: unknown) => {
        const ta = a as { isClosed: boolean };
        const tb = b as { isClosed: boolean };
        return ta.isClosed === tb.isClosed ? 0 : ta.isClosed ? 1 : -1;
      });
      return NextResponse.json(result);
    }

    const data = await dhanReq(endpoint, 'GET', null, token, clientId);
    return NextResponse.json(data);

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: msg === 'Unauthorized' ? 401 : 500 });
  }
}

export async function POST(request: NextRequest) {
  const endpoint = request.nextUrl.searchParams.get('endpoint') || '/fundlimit';
  try {
    const { token, clientId } = await getUserBroker(request.headers.get('authorization'));
    const body = await request.json();
    const data = await dhanReq(endpoint, 'POST', body, token, clientId);
    return NextResponse.json(data);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
