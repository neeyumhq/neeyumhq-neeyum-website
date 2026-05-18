"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const BEHAVIOUR_METRICS = [
  { icon: "shield", name: "Risk Control", weight: "30%", formula: "Risk% = 100 - ((MaxLoss - DailyLimit) / DailyLimit x 100)", color: "var(--orange)", bg: "linear-gradient(90deg,var(--red),var(--orange))", width: "80%", score: "80" },
  { icon: "bolt", name: "Discipline", weight: "25%", formula: "Discipline% = (EarnedPoints / 25) x 100 based on Lock Days", color: "var(--purple2)", bg: "linear-gradient(90deg,var(--purple),var(--purple2))", width: "70%", score: "70" },
  { icon: "target", name: "Target Progression", weight: "20%", formula: "TargetProgress% = (NetClosedPnL / MonthlyTarget) x 100", color: "var(--gold)", bg: "linear-gradient(90deg,var(--gold),var(--orange))", width: "60%", score: "60" },
  { icon: "chart", name: "Consistency", weight: "15%", formula: "Consistency% = (EarnedPoints / 15) x 100 based on Active Days", color: "var(--blue)", bg: "linear-gradient(90deg,var(--blue),var(--purple))", width: "90%", score: "90" },
  { icon: "trophy", name: "Win Ratio", weight: "10%", formula: "WinRatio% = (WinningTrades / TotalClosedTrades) x 100", color: "var(--pink)", bg: "linear-gradient(90deg,var(--pink),var(--purple))", width: "50%", score: "50" }
];

export default function Home() {
  const [lbFilter, setLbFilter] = useState("global");
  const [expandedMetric, setExpandedMetric] = useState<number | null>(0);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
  }, []);

  return (
    <>
      <Head>
        <title>Neeyum — Trade with Discipline. Not Emotion.</title>
      </Head>

      {/* ═══════════════════════════════════════════════════
           PRODUCT SUITE — 3 products shown at top
      ═══════════════════════════════════════════════════ */}
      <div id="page-suite" style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "linear-gradient(180deg, rgba(124,92,252,0.04) 0%, transparent 100%)",
        paddingTop: "80px",
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "40px 5% 20px", textAlign: "center" }}>

          {/* Headline */}
          <h2 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: "16px",
            lineHeight: 1.1,
          }}>
            Trade with <span style={{ color: "var(--green)" }}>Discipline.</span>
            <br />Not Emotion.
          </h2>

          <p style={{ fontSize: "16px", color: "var(--sub2)", maxWidth: "520px", margin: "0 auto 48px", lineHeight: 1.7 }}>
            From simulating crypto strategies to tracking real NSE/BSE trades &#8212;
            Neeyum is the complete trader discipline ecosystem.
          </p>

          {/* 3 Product Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            marginBottom: "52px",
            textAlign: "left",
          }}>

            {/* 1 — TradeOS */}
            <a
              href="https://app.neeyum.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, rgba(0,229,160,0.06), rgba(0,229,160,0.02))",
                border: "1px solid rgba(0,229,160,0.2)",
                borderRadius: "20px",
                padding: "28px",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column" as const,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div style={{
                  background: "rgba(0,229,160,0.12)", borderRadius: "12px",
                  width: "52px", height: "52px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "11px", fontWeight: 800, color: "var(--green)",
                  letterSpacing: "0.5px",
                }}>NSE</div>
                <span style={{
                  background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.2)",
                  color: "var(--green)", fontSize: "10px", fontWeight: 700,
                  padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}>Live Now</span>
              </div>
              <div style={{ fontSize: "11px", color: "var(--sub)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "8px" }}>01 / 03</div>
              <div style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "24px", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
                Neeyum TradeOS
              </div>
              <p style={{ fontSize: "13px", color: "var(--sub2)", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                Connect your Dhan broker and automatically sync all NSE/BSE trades. Journal every trade, track your emotions, and see your real behaviour score.
              </p>
              {[
                "Live trade sync via Dhan API",
                "Post-trade journal and emotion tracking",
                "Behaviour score + daily discipline rules",
                "P&L breakdown with brokerage charges",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--sub2)", marginBottom: "6px" }}>
                  <span style={{ color: "var(--green)", fontWeight: 700, fontSize: "12px" }}>&#8594;</span> {f}
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "18px", marginTop: "18px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>Connect your broker</span>
                <span style={{ fontSize: "20px", color: "var(--green)" }}>&#8594;</span>
              </div>
            </a>

            {/* 2 — Neeyum Lab */}
            <a
              href="#page-home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("page-home")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "28px",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column" as const,
                transition: "transform 0.2s, border-color 0.2s",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div style={{
                  background: "rgba(124,92,252,0.12)", borderRadius: "12px",
                  width: "52px", height: "52px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "11px", fontWeight: 800, color: "var(--purple2)",
                }}>LAB</div>
                <span style={{
                  background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.2)",
                  color: "var(--purple2)", fontSize: "10px", fontWeight: 700,
                  padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}>Live Now</span>
              </div>
              <div style={{ fontSize: "11px", color: "var(--sub)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "8px" }}>02 / 03</div>
              <div style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "24px", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
                Neeyum Lab
              </div>
              <p style={{ fontSize: "13px", color: "var(--sub2)", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                The only BTC &amp; ETH F&amp;O discipline simulator that ranks you by behaviour, not profit.
                Practice strategies with simulated capital and real market conditions.
              </p>
              {[
                "BTC & ETH F&O simulation",
                "Global behaviour-ranked leaderboard",
                "Gamma to Delta to Theta to Elite levels",
                "5-metric behaviour score system",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--sub2)", marginBottom: "6px" }}>
                  <span style={{ color: "var(--purple2)", fontWeight: 700, fontSize: "12px" }}>&#8594;</span> {f}
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "18px", marginTop: "18px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>Start simulating</span>
                <span style={{ fontSize: "20px", color: "var(--purple2)" }}>&#8594;</span>
              </div>
            </a>

            {/* 3 — Neeyum Analyse (Coming Soon) */}
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "28px",
              opacity: 0.65,
              position: "relative",
              display: "flex",
              flexDirection: "column" as const,
            }}>
              <div style={{
                position: "absolute", top: "16px", right: "16px",
                background: "rgba(124,92,252,0.12)", border: "1px solid rgba(124,92,252,0.25)",
                color: "var(--purple2)", fontSize: "10px", fontWeight: 700,
                padding: "3px 10px", borderRadius: "100px",
                letterSpacing: "0.1em", textTransform: "uppercase" as const,
              }}>Coming Soon</div>
              <div style={{ marginBottom: "16px" }}>
                <div style={{
                  background: "rgba(245,200,66,0.12)", borderRadius: "12px",
                  width: "52px", height: "52px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "11px", fontWeight: 800, color: "var(--gold)",
                }}>ANA</div>
              </div>
              <div style={{ fontSize: "11px", color: "var(--sub)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "8px" }}>03 / 03</div>
              <div style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "24px", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
                Neeyum Analyse
              </div>
              <p style={{ fontSize: "13px", color: "var(--sub2)", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                Deep-dive analysis for any stock, crypto or index. NSE, BSE, NASDAQ and 500+ assets.
                Technicals, fundamentals and behavioural sentiment &#8212; all in one place.
              </p>
              {[
                "NSE, BSE, NASDAQ, NYSE stocks",
                "BTC, ETH and 500+ crypto assets",
                "Technical + fundamental analysis",
                "AI-powered pattern recognition",
              ].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--sub2)", marginBottom: "6px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "12px" }}>&#8594;</span> {f}
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "18px", marginTop: "18px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--sub2)" }}>Join waitlist</span>
                <span style={{ fontSize: "20px", color: "var(--sub2)" }}>&#8594;</span>
              </div>
            </div>

          </div>

          {/* Divider into Lab */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingBottom: "40px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }}></div>
            <div style={{
              background: "rgba(124,92,252,0.1)", border: "1px solid rgba(124,92,252,0.2)",
              color: "var(--purple2)", fontSize: "11px", fontWeight: 700,
              padding: "6px 16px", borderRadius: "100px",
              letterSpacing: "0.1em", textTransform: "uppercase" as const,
              whiteSpace: "nowrap",
            }}>
              &#8595; Neeyum Lab &#8212; Full Platform Details
            </div>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }}></div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           HOME PAGE — Existing Lab content (unchanged)
      ═══════════════════════════════════════════════════ */}
      <div id="page-home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-mesh"></div>
          <div className="hero-grid-lines"></div>
          <div className="hero-inner">
            <div className="hero-pill">
              <div className="hero-pill-dot"></div>
              Live Now &middot; BTC &amp; ETH F&amp;O Simulator
            </div>
            <h1>
              Master BTC &amp; ETH F&amp;O &#8212;<br />
              <span className="accent">Without Real Capital Risk.</span>
            </h1>
            <p className="hero-sub">
              Neeyum Lab is a behaviour-first crypto derivatives simulation platform designed to build discipline, risk control, and structured execution habits.
            </p>
            <div className="hero-ctas">
              <a
                href="https://play.google.com/store/apps/details?id=com.sleepyclassics.neeyum"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Android APK
              </a>
              <Link href="/#how" className="btn-secondary">
                Learn How It Works
              </Link>
            </div>
            <p className="hero-disclaimer">&#9888; Simulation only. No real-money trading. No financial advice.</p>
            <div className="hero-markets">
              <div className="market-chip">
                <div className="market-icon">&#8383;</div>
                <div className="market-info">
                  <div className="market-name">Bitcoin Options</div>
                  <div className="market-sub">BTC F&amp;O &middot; Fixed Leverage</div>
                </div>
              </div>
              <div className="market-chip">
                <div className="market-icon">&#926;</div>
                <div className="market-info">
                  <div className="market-name">Ethereum Options</div>
                  <div className="market-sub">ETH F&amp;O &middot; Fixed Leverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS NEEYUM LAB */}
        <section className="alt-bg" id="what">
          <div className="container">
            <div className="section-eyebrow">What Is Neeyum Lab?</div>
            <div className="what-grid">
              <div className="what-text">
                <h2 className="section-title">
                  Crypto F&amp;O.<br />Behaviour First.
                </h2>
                <p>Neeyum Lab is <strong>not an exchange</strong>, not a signal service, and not a trading tip platform.</p>
                <p>It is a structured BTC &amp; ETH futures and options simulation environment built to improve trading discipline through <strong>rule enforcement and behavioural evaluation</strong>.</p>
                <p>You don&apos;t trade here to make money.<br /><strong>You train here to improve behaviour.</strong></p>
                <div className="not-list">
                  <div className="not-item"><span>&#10007;</span> Not an exchange or broker</div>
                  <div className="not-item"><span>&#10007;</span> Not a signal service or tip platform</div>
                  <div className="not-item"><span>&#10007;</span> Not financial advice</div>
                  <div className="is-item"><span style={{ color: "var(--green)" }}>&#10003;</span> A behaviour intelligence &amp; risk simulation layer</div>
                  <div className="is-item"><span style={{ color: "var(--green)" }}>&#10003;</span> Structured BTC &amp; ETH F&amp;O discipline training</div>
                  <div className="is-item"><span style={{ color: "var(--green)" }}>&#10003;</span> Monthly Behaviour Score that compounds over time</div>
                </div>
              </div>
              <div className="what-visual reveal">
                <div className="wv-title">Live Behaviour Dashboard &middot; Demo</div>
                <div className="wv-stat-row">
                  <div className="wv-stat">
                    <div className="wv-stat-val">72</div>
                    <div className="wv-stat-key">Behaviour Score</div>
                  </div>
                  <div className="wv-stat" style={{ borderColor: "rgba(0,229,160,0.2)" }}>
                    <div className="wv-stat-val" style={{ color: "var(--green)" }}>Stable</div>
                    <div className="wv-stat-key">Monthly Grade</div>
                  </div>
                </div>
                <div className="wv-bars">
                  <div className="wv-bar-row"><div className="wv-bar-name">Risk Control (30%)</div><div className="wv-bar-bg"><div className="wv-bar-fill" style={{ width: "80%", background: "var(--green)" }}></div></div><div className="wv-bar-pct">80</div></div>
                  <div className="wv-bar-row"><div className="wv-bar-name">Discipline (25%)</div><div className="wv-bar-bg"><div className="wv-bar-fill" style={{ width: "70%", background: "#3b9eff" }}></div></div><div className="wv-bar-pct">70</div></div>
                  <div className="wv-bar-row"><div className="wv-bar-name">Target Prog. (20%)</div><div className="wv-bar-bg"><div className="wv-bar-fill" style={{ width: "60%", background: "var(--gold)" }}></div></div><div className="wv-bar-pct">60</div></div>
                  <div className="wv-bar-row"><div className="wv-bar-name">Consistency (15%)</div><div className="wv-bar-bg"><div className="wv-bar-fill" style={{ width: "90%", background: "var(--purple2)" }}></div></div><div className="wv-bar-pct">90</div></div>
                  <div className="wv-bar-row"><div className="wv-bar-name">Win Ratio (10%)</div><div className="wv-bar-bg"><div className="wv-bar-fill" style={{ width: "50%", background: "var(--pink)" }}></div></div><div className="wv-bar-pct">50</div></div>
                </div>
                <div style={{ marginTop: "16px", background: "rgba(245,200,66,0.07)", border: "1px solid rgba(245,200,66,0.18)", borderRadius: "10px", padding: "10px 12px", fontSize: "11px", color: "var(--gold)", fontWeight: 600 }}>
                  &#9888; Daily loss limit at 87% &#8212; consider stopping for today
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how">
          <div className="container">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="section-title">Log. Analyse. Improve.</h2>
            <p className="section-sub">A four-step loop that compounds into real, measurable trading discipline over time.</p>
            <div className="steps-grid">
              <div className="step-card reveal"><div className="step-num">01</div><h3>Enter Simulated Trade</h3><p>Log BTC or ETH option trades manually with full parameters &#8212; entry, exit, SL, target, quantity, and emotion state.</p></div>
              <div className="step-card reveal rd1"><div className="step-num">02</div><h3>Follow Structured Risk Rules</h3><p>Daily loss limits enforced automatically. SL mandatory in Discipline Mode. Fixed leverage prevents emotional sizing.</p></div>
              <div className="step-card reveal rd2"><div className="step-num">03</div><h3>System Evaluates Behaviour</h3><p>The 5-Metric Behaviour Engine scores every trade across Risk Control, Discipline, Target Progression, Consistency, and Win Ratio.</p></div>
              <div className="step-card reveal rd3"><div className="step-num">04</div><h3>Monthly Score Generated</h3><p>Your composite Behaviour Score (0&#8211;100) is calculated monthly. It resets &#8212; but your behaviour history compounds forever.</p></div>
            </div>
          </div>
        </section>

        {/* BEHAVIOUR ENGINE */}
        <section id="engine">
          <div className="container">
            <div className="section-eyebrow">5-Metric Behaviour Framework</div>
            <h2 className="section-title">Your Behaviour Score<br />Is Your Real Edge.</h2>
            <p className="section-sub">Five weighted metrics. One composite score (0&#8211;100). Calculated monthly. Based on your actual trading behaviour &#8212; not luck.</p>
            <div className="engine-grid">
              <div className="engine-metrics">
                {BEHAVIOUR_METRICS.map((m, i) => (
                  <div
                    key={i}
                    className={`metric-row reveal ${expandedMetric === i ? "expanded" : ""} ${i > 0 && i < 4 ? "rd" + i : (i === 4 ? "rd4" : "")}`}
                    onClick={() => setExpandedMetric(expandedMetric === i ? null : i)}
                  >
                    <div className="metric-header">
                      <div className="metric-icon" style={{ width: "28px", height: "28px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: m.color }}>{m.icon.slice(0,3).toUpperCase()}</div>
                      <div className="metric-name" style={{ flex: 1 }}>{m.name} <span className="metric-weight">{m.weight}</span></div>
                      <div className="metric-score" style={{ color: m.color }}>{m.score}</div>
                    </div>
                    <div className="metric-details">
                      <div className="metric-details-inner">
                        <div className="metric-formula">{m.formula}</div>
                        <div className="metric-bar-bg"><div className="metric-bar" style={{ width: m.width, background: m.bg }}></div></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="formula-box reveal rd1">
                <div className="formula-title">Final Score Formula</div>
                <div className="formula-main">
                  Final Score =<br />
                  (Risk &#215; 0.30) +<br />
                  (Discipline &#215; 0.25) +<br />
                  (Target &#215; 0.20) +<br />
                  (Consistency &#215; 0.15) +<br />
                  (WinRatio &#215; 0.10)
                </div>
                <div className="formula-example">
                  <div className="formula-ex-title">Example Calculation</div>
                  <div className="formula-ex-row"><span>Risk: 80 &#215; 0.30</span><span style={{ color: "var(--orange)" }}>= 24.0</span></div>
                  <div className="formula-ex-row"><span>Discipline: 70 &#215; 0.25</span><span style={{ color: "var(--purple2)" }}>= 17.5</span></div>
                  <div className="formula-ex-row"><span>Target: 60 &#215; 0.20</span><span style={{ color: "var(--gold)" }}>= 12.0</span></div>
                  <div className="formula-ex-row"><span>Consistency: 90 &#215; 0.15</span><span style={{ color: "var(--blue)" }}>= 13.5</span></div>
                  <div className="formula-ex-row"><span>Win Ratio: 50 &#215; 0.10</span><span style={{ color: "var(--pink)" }}>= 5.0</span></div>
                  <div className="formula-ex-row"><strong>Final Score</strong><strong style={{ color: "var(--purple2)" }}>72 / 100</strong></div>
                </div>
                <div className="formula-result">
                  <div className="formula-result-val">72</div>
                  <div className="formula-result-label">Stable Trader &middot; Score resets monthly &middot; Behaviour history compounds</div>
                </div>
                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "9px", color: "var(--sub2)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "4px" }}>Behaviour Badge Scale</div>
                  {[
                    { range: "90+", label: "Elite Structured", color: "var(--green)", bg: "rgba(0,229,160,0.07)", border: "rgba(0,229,160,0.15)" },
                    { range: "75&#8211;89", label: "Strong Discipline", color: "var(--blue)", bg: "rgba(59,158,255,0.06)", border: "rgba(59,158,255,0.15)" },
                    { range: "60&#8211;74", label: "Stable Trader", color: "var(--gold)", bg: "rgba(245,200,66,0.06)", border: "rgba(245,200,66,0.15)" },
                    { range: "40&#8211;59", label: "Developing", color: "var(--orange)", bg: "rgba(255,140,66,0.06)", border: "rgba(255,140,66,0.15)" },
                    { range: "0&#8211;39", label: "Unstructured", color: "var(--red)", bg: "rgba(255,77,109,0.06)", border: "rgba(255,77,109,0.15)" },
                  ].map((b) => (
                    <div key={b.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", padding: "6px 10px", background: b.bg, border: `1px solid ${b.border}`, borderRadius: "8px", fontFamily: "var(--font-jetbrains), monospace" }}>
                      <span dangerouslySetInnerHTML={{ __html: `${b.range} &rarr;` }} />
                      <span style={{ color: b.color }}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEVEL STRUCTURE */}
        <section className="alt-bg" id="levels">
          <div className="container">
            <div className="section-eyebrow">Level Structure</div>
            <h2 className="section-title">Progress Through Discipline.<br />Not Just Profit.</h2>
            <p className="section-sub">Five levels from Gamma to Elite. Each unlocks higher simulated capital and target percentages. Levels are earned through behaviour &#8212; not just P&amp;L.</p>
            <div className="levels-grid">
              {[
                { name: "&#915; Gamma", cap: "$30,000", target: "10%", glow: "rgba(100,200,100,0.5)", badgeBg: "rgba(100,200,100,0.1)", badgeBorder: "rgba(100,200,100,0.25)", badgeColor: "#64c864" },
                { name: "&#916; Delta", cap: "$50,000", target: "15%", glow: "rgba(59,158,255,0.5)", badgeBg: "rgba(59,158,255,0.1)", badgeBorder: "rgba(59,158,255,0.25)", badgeColor: "var(--blue)" },
                { name: "&#920; Theta", cap: "$70,000", target: "18%", glow: "rgba(124,92,252,0.5)", badgeBg: "rgba(124,92,252,0.1)", badgeBorder: "rgba(124,92,252,0.25)", badgeColor: "var(--purple2)" },
                { name: "&#913; Alpha", cap: "$1,00,000", target: "20%", glow: "rgba(240,80,138,0.5)", badgeBg: "rgba(240,80,138,0.1)", badgeBorder: "rgba(240,80,138,0.25)", badgeColor: "var(--pink)" },
              ].map((l, i) => (
                <div key={i} className={`level-card reveal${i > 0 ? ` rd${i}` : ""}`}>
                  <div className="level-glow" style={{ background: `radial-gradient(circle,${l.glow},transparent)` }}></div>
                  <div className="level-name" dangerouslySetInnerHTML={{ __html: l.name }} />
                  <div className="level-capital">Trading Capital</div>
                  <div className="level-capital-val">{l.cap}</div>
                  <div className="level-target-badge" style={{ background: l.badgeBg, border: `1px solid ${l.badgeBorder}`, color: l.badgeColor, fontSize: "22px" }}>{l.target}</div>
                  <div className="level-note">Monthly target<br />to progress</div>
                </div>
              ))}
              <div className="level-card elite reveal rd4">
                <div className="level-glow" style={{ background: "radial-gradient(circle,rgba(245,200,66,0.6),transparent)" }}></div>
                <div className="level-name">&#9889; Elite</div>
                <div className="level-capital">Trading Capital</div>
                <div className="level-capital-val">$2,00,000</div>
                <div className="level-target-badge" style={{ background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.35)", color: "var(--gold)" }}>25%</div>
                <div className="level-note">Highest level<br />Master tier</div>
              </div>
              <div className="level-reset reveal">
                <strong>&#9888; Reset Rule:</strong> If a user incurs a loss of 50% of simulated capital at any level, the user is allowed to reset and restart the same level. Behaviour history is retained &#8212; capital and progress reset.
              </div>
            </div>
          </div>
        </section>

        {/* RISK LOCK */}
        <section id="risklock">
          <div className="container">
            <div className="section-eyebrow">Risk Lock System</div>
            <h2 className="section-title">The App Enforces<br />What You Cannot.</h2>
            <p className="section-sub">When your daily loss limit is breached, the app locks trading. No revenge trades. No emotional spirals. Just structure.</p>
            <div className="lock-cards">
              <div className="lock-card reveal"><div className="lock-icon">&#128274;</div><h3>Trading Locks for the Day</h3><p>Once daily loss limit is breached, no further trades can be placed. The app locks automatically at the next trading cycle.</p></div>
              <div className="lock-card reveal rd1"><div className="lock-icon">&#128201;</div><h3>Behaviour Penalty Applied</h3><p>Lock days directly impact your Discipline metric score. More lock days = lower score. The data holds you accountable &#8212; permanently.</p></div>
              <div className="lock-card reveal rd2"><div className="lock-icon">&#128260;</div><h3>Reset Next Trading Cycle</h3><p>Clean slate each day. But lock history compounds into your monthly Discipline metric. Every day of control earns you points.</p></div>
            </div>
            <div style={{ maxWidth: "700px", margin: "32px auto 0", background: "var(--card)", border: "1px solid var(--border2)", borderRadius: "16px", padding: "24px 28px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "10px", color: "var(--sub2)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Lock Days &#8594; Discipline Points</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                {[
                  { pts: "25", days: "0 Lock Days", color: "var(--green)", bg: "rgba(0,229,160,0.07)", border: "rgba(0,229,160,0.2)" },
                  { pts: "20", days: "1 Lock Day", color: "var(--blue)", bg: "rgba(59,158,255,0.06)", border: "rgba(59,158,255,0.15)" },
                  { pts: "15", days: "2 Lock Days", color: "var(--gold)", bg: "rgba(245,200,66,0.06)", border: "rgba(245,200,66,0.15)" },
                  { pts: "8", days: "3 Lock Days", color: "var(--orange)", bg: "rgba(255,140,66,0.06)", border: "rgba(255,140,66,0.15)" },
                  { pts: "0", days: "4+ Lock Days", color: "var(--red)", bg: "rgba(255,77,109,0.06)", border: "rgba(255,77,109,0.15)" },
                ].map((item) => (
                  <div key={item.days} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: "10px", padding: "12px 18px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: 800, fontFamily: "var(--font-syne), sans-serif", color: item.color }}>{item.pts}</div>
                    <div style={{ fontSize: "10px", fontFamily: "var(--font-jetbrains), monospace", color: "var(--sub2)", marginTop: "2px" }}>{item.days}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEADERBOARD */}
        <section className="alt-bg" id="leaderboard">
          <div className="container">
            <div className="section-eyebrow">Global Leaderboard</div>
            <h2 className="section-title">Ranked by Behaviour.<br />Not by Profit.</h2>
            <p className="section-sub">The only leaderboard that measures what actually makes you a better trader &#8212; discipline, consistency, and risk control. Not luck.</p>
            <div className="lb-filters">
              {[["global","🌍 Global"],["india","🇮🇳 India"],["gamma","&#915; Gamma"],["theta","&#920; Theta"],["elite","&#9889; Elite"]].map(([k,l]) => (
                <div key={k} className={`lb-filter ${lbFilter === k ? "active" : ""}`} onClick={() => setLbFilter(k)} dangerouslySetInnerHTML={{ __html: l }} />
              ))}
            </div>
            <div className="lb-table">
              <div className="lb-header"><div>Rank</div><div>Trader</div><div>Level</div><div>Score</div><div>Badge</div><div>Risk Ctrl</div></div>
              <div className="lb-row top1">
                <div className="lb-rank r1">&#129351;</div>
                <div className="lb-user"><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#ffd700,#ff8c00)", color: "#1a0f00" }}>A</div><div><div className="lb-username">AlphaWolf</div><div className="lb-country">&#127470;&#127475; India &middot; Elite</div></div></div>
                <div className="lb-cell" style={{ color: "var(--gold)" }}>&#9889; Elite</div>
                <div className="lb-score-val" style={{ color: "var(--green)" }}>89.4</div>
                <div><span className="lb-badge badge-elite">Elite Structured</span></div>
                <div className="lb-cell" style={{ color: "var(--green)" }}>94%</div>
              </div>
              <div className="lb-row top2">
                <div className="lb-rank r2">&#129352;</div>
                <div className="lb-user"><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#3b9eff,#7c5cfc)", color: "#fff" }}>C</div><div><div className="lb-username">CryptoZen</div><div className="lb-country">&#127482;&#127480; USA &middot; Alpha</div></div></div>
                <div className="lb-cell" style={{ color: "var(--pink)" }}>&#913; Alpha</div>
                <div className="lb-score-val" style={{ color: "var(--blue)" }}>87.1</div>
                <div><span className="lb-badge badge-elite">Elite Structured</span></div>
                <div className="lb-cell" style={{ color: "var(--green)" }}>91%</div>
              </div>
              <div className="lb-row top3">
                <div className="lb-rank r3">&#129353;</div>
                <div className="lb-user"><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#f0508a,#7c5cfc)", color: "#fff" }}>S</div><div><div className="lb-username">SatoshiX</div><div className="lb-country">&#127468;&#127463; UK &middot; Theta</div></div></div>
                <div className="lb-cell" style={{ color: "var(--purple2)" }}>&#920; Theta</div>
                <div className="lb-score-val" style={{ color: "var(--gold)" }}>84.9</div>
                <div><span className="lb-badge badge-strong">Strong Discipline</span></div>
                <div className="lb-cell" style={{ color: "var(--blue)" }}>88%</div>
              </div>
              <div className="lb-row">
                <div className="lb-rank" style={{ color: "var(--sub2)" }}>4</div>
                <div className="lb-user"><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#00e5a0,#0099ff)", color: "#021a0d" }}>N</div><div><div className="lb-username">NightTrader</div><div className="lb-country">&#127470;&#127475; India &middot; Alpha</div></div></div>
                <div className="lb-cell" style={{ color: "var(--pink)" }}>&#913; Alpha</div>
                <div className="lb-score-val" style={{ color: "var(--sub2)" }}>81.2</div>
                <div><span className="lb-badge badge-strong">Strong Discipline</span></div>
                <div className="lb-cell">85%</div>
              </div>
              <div className="lb-row">
                <div className="lb-rank" style={{ color: "var(--sub2)" }}>5</div>
                <div className="lb-user"><div className="lb-avatar" style={{ background: "linear-gradient(135deg,#ffd166,#f0508a)", color: "#1a0f00" }}>D</div><div><div className="lb-username">DeltaForce</div><div className="lb-country">&#127480;&#127468; Singapore &middot; Theta</div></div></div>
                <div className="lb-cell" style={{ color: "var(--purple2)" }}>&#920; Theta</div>
                <div className="lb-score-val" style={{ color: "var(--sub2)" }}>78.5</div>
                <div><span className="lb-badge badge-stable">Stable Trader</span></div>
                <div className="lb-cell">82%</div>
              </div>
            </div>
            <div className="lb-qualify-note">
              <span>&#128274;</span>
              <span>Qualification required: <strong>Minimum 7 active trading days</strong> + <strong>10 closed trades</strong> + no current lock violation abuse. Tie-break: Higher Risk Control &#8594; Fewer Lock Days &#8594; Earlier join date.</span>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="section-eyebrow">Pricing</div>
            <h2 className="section-title">No Ads. No Noise. Pure Discipline.</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>Start free. Upgrade to train like a structured trader.</p>
            <div className="pricing-grid">
              <div className="price-card reveal">
                <div className="mode-badge free">&#128275; EXPLORER MODE</div>
                <h3>Explorer</h3>
                <div className="mode-price flex justify-center align-center">
                  <span className="amount">Free</span>
                  <span className="period">/ Forever</span>
                </div>
                <div className="price-divider"></div>
                <div className="price-features">
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">Start simulation instantly</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">BTC &amp; ETH access</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">5 trades/day, 10% loss limit</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">Basic journal metrics</div></div>
                  <div className="pf-item"><div className="pf-x">&#10007;</div><div className="pf-off">Full behaviour analytics</div></div>
                  <div className="pf-item"><div className="pf-x">&#10007;</div><div className="pf-off">Emotional heatmap</div></div>
                  <div className="pf-item"><div className="pf-x">&#10007;</div><div className="pf-off">AI behaviour report</div></div>
                  <div className="pf-item"><div className="pf-x">&#10007;</div><div className="pf-off">Ad-free experience</div></div>
                </div>
                <button className="price-btn outline">Get Started for Free</button>
              </div>
              <div className="price-card featured reveal rd1">
                <div className="price-pop">3-DAY FREE TRIAL AVAILABLE</div>
                <div className="mode-badge paid">&#9889; DISCIPLINE MODE</div>
                <h3>Discipline</h3>
                <div className="mode-price flex justify-center align-center">
                  <span className="amount">&#8377;99 <span style={{ fontSize: "14px", color: "var(--sub2)" }}>($1.49)</span></span>
                  <span className="period">/ month</span>
                </div>
                <div className="price-alt" style={{ marginBottom: "24px" }}>
                  <span style={{ color: "var(--sub2)", fontSize: "13px" }}>or </span>
                  <span style={{ color: "var(--green)", fontWeight: 700, fontSize: "12px", fontFamily: "var(--font-jetbrains), monospace" }}>&#8377;499 ($6.49)/year &#8212; Save 58%</span>
                  <div style={{ textDecoration: "line-through", color: "var(--sub2)", fontSize: "10px" }}>Regular: &#8377;1,188 ($14.99)</div>
                </div>
                <div className="price-divider"></div>
                <div className="price-features" style={{ textAlign: "left" }}>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on"><strong>3-Day Free Trial</strong> (No payment required)</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">Everything in Explorer</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">Full behaviour analytics</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">Emotional heatmap &amp; AI metrics</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">Priority Level progression</div></div>
                  <div className="pf-item"><div className="pf-check">&#10003;</div><div className="pf-on">No advertisements</div></div>
                </div>
                <button className="price-btn grad">Start 3-Day Free Trial &#8594;</button>
              </div>
            </div>
            <p className="refund-note">&#9888; Trial available once per user. Prices inclusive of all simulation costs. Cancel anytime.</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Stop losing to<br /><span className="acc">your own emotions.</span><br />Start training.</h2>
            <p>BTC &amp; ETH F&amp;O simulation. Behaviour scoring. Real discipline. Zero real risk.</p>
            <div className="hero-ctas">
              <a href="https://play.google.com/store/apps/details?id=com.sleepyclassics.neeyum" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download Android APK
              </a>
              <Link href="/about" className="btn-secondary">Read Our Story</Link>
            </div>
            <p className="hero-disclaimer" style={{ marginTop: "20px" }}>&#9888; Simulation only. No real-money trading. Not financial advice.</p>
          </div>
        </section>
      </div>
    </>
  );
}
