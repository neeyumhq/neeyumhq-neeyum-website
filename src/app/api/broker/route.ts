import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as crypto from 'crypto';

const ENC_KEY = process.env.ENCRYPTION_KEY!;

function encrypt(text: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENC_KEY, 'hex'), iv);
  const enc = Buffer.concat([cipher.update(text), cipher.final()]);
  return iv.toString('hex') + ':' + enc.toString('hex');
}

async function getUser(authHeader: string | null) {
  const sb = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
  const jwt = (authHeader || '').replace('Bearer ', '');
  const { data: { user }, error } = await sb.auth.getUser(jwt);
  if (error || !user) throw new Error('Unauthorized');
  return { user, sb };
}

export async function GET(request: NextRequest) {
  try {
    const { user, sb } = await getUser(request.headers.get('authorization'));
    const { data } = await sb.from('broker_connections')
      .select('broker, client_id, connected_at, is_active')
      .eq('user_id', user.id).eq('is_active', true);
    return NextResponse.json({ connections: data || [] });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Error';
    return NextResponse.json({ error: msg }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user, sb } = await getUser(request.headers.get('authorization'));
    const { broker, clientId, accessToken } = await request.json();
    if (!broker || !clientId || !accessToken) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const { error } = await sb.from('broker_connections').upsert({
      user_id: user.id, broker, client_id: clientId,
      access_token: encrypt(accessToken), is_active: true,
      connected_at: new Date().toISOString(),
    }, { onConflict: 'user_id,broker' });
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { user, sb } = await getUser(request.headers.get('authorization'));
    const { broker } = await request.json();
    await sb.from('broker_connections').update({ is_active: false })
      .eq('user_id', user.id).eq('broker', broker || 'dhan');
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
