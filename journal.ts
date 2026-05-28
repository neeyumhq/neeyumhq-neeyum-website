@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #08080e;
  --bg2: #0d0d15;
  --bg3: #111120;
  --card: #13131f;
  --card2: #1a1a2a;
  --border: rgba(255, 255, 255, 0.06);
  --border2: rgba(255, 255, 255, 0.11);
  --purple: #7c5cfc;
  --purple2: #9b7dff;
  --pink: #f0508a;
  --gold: #f5c842;
  --green: #00e5a0;
  --red: #ff4d6d;
  --orange: #ff8c42;
  --blue: #3b9eff;
  --text: #eeeef6;
  --sub: #606080;
  --sub2: #9090b0;
  --max: 1180px;
  --r: 20px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-dm-sans), var(--font-syne), sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ═══════════════════════════ NOISE TEXTURE ═══════════════════════════ */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.4;
}

/* ═══════════════════════════ NAV ═══════════════════════════ */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  height: 64px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(8, 8, 14, 0.88);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 0.3s;
}

.nav-logo {
  font-family: var(--font-syne), sans-serif;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.nav-logo .lab {
  color: var(--purple);
  font-size: 13px;
  font-weight: 600;
  background: rgba(124, 92, 252, 0.12);
  border: 1px solid rgba(124, 92, 252, 0.25);
  padding: 2px 8px;
  border-radius: 6px;
  margin-left: 6px;
  vertical-align: middle;
  font-family: var(--font-jetbrains), monospace;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--sub2);
  transition: color 0.2s;
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-nav-outline {
  font-family: var(--font-dm-sans), sans-serif;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 10px;
  border: 1px solid var(--border2);
  color: var(--text);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-nav-outline:hover {
  border-color: var(--purple);
  color: var(--purple);
}

.btn-nav-fill {
  font-family: var(--font-dm-sans), sans-serif;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-nav-fill:hover {
  opacity: 0.85;
}

.hamburger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  flex-direction: column;
  gap: 5px;
}

.hline {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(8, 8, 14, 0.97);
  backdrop-filter: blur(24px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  z-index: 199;
}

.mobile-nav.open {
  display: flex;
}

.mobile-nav a {
  font-size: 24px;
  font-weight: 700;
  font-family: var(--font-syne), sans-serif;
}

/* ═══════════════════════════ HERO ═══════════════════════════ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 110px 5% 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-mesh {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124, 92, 252, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse 40% 30% at 20% 80%, rgba(240, 80, 138, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 40% 30% at 80% 70%, rgba(59, 158, 255, 0.06) 0%, transparent 50%);
}

.hero-grid-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image:
    linear-gradient(rgba(124, 92, 252, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124, 92, 252, 1) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-inner {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(124, 92, 252, 0.1);
  border: 1px solid rgba(124, 92, 252, 0.25);
  border-radius: 40px;
  padding: 7px 18px;
  margin-bottom: 32px;
  font-family: var(--font-jetbrains), monospace;
  font-size: 11px;
  font-weight: 500;
  color: var(--purple2);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.hero-pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.5)
  }

  50% {
    box-shadow: 0 0 0 6px rgba(0, 229, 160, 0)
  }
}

.hero h1 {
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(40px, 6.5vw, 84px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -2.5px;
  margin-bottom: 28px;
}

.hero h1 .accent {
  background: linear-gradient(135deg, var(--purple2), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: clamp(15px, 2vw, 18px);
  color: var(--sub2);
  max-width: 580px;
  margin: 0 auto 44px;
  line-height: 1.75;
  font-weight: 400;
}

.hero-ctas {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: #fff;
  font-family: var(--font-syne), sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 16px 34px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 8px 32px rgba(124, 92, 252, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 48px rgba(124, 92, 252, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-family: var(--font-syne), sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 16px 34px;
  border-radius: 14px;
  border: 1px solid var(--border2);
  cursor: pointer;
  transition: all 0.25s;
}

.btn-secondary:hover {
  border-color: var(--purple2);
  color: var(--purple2);
}

.hero-disclaimer {
  margin-top: 20px;
  font-family: var(--font-jetbrains), monospace;
  font-size: 11px;
  color: var(--sub2);
  opacity: 0.6;
  letter-spacing: 0.3px;
}

.hero-markets {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 52px;
  flex-wrap: wrap;
}

.market-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 40px;
  padding: 10px 20px;
}

.market-icon {
  font-size: 20px;
}

.market-info {
  text-align: left;
}

.market-name {
  font-size: 13px;
  font-weight: 700;
  font-family: var(--font-syne), sans-serif;
}

.market-sub {
  font-size: 10px;
  color: var(--sub2);
  font-family: var(--font-jetbrains), monospace;
}

/* ═══════════════════════════ SECTION BASE ═══════════════════════════ */
section {
  padding: 96px 5%;
  position: relative;
}

.container {
  max-width: var(--max);
  margin: 0 auto;
}

.alt-bg {
  background: var(--bg2);
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-jetbrains), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--purple2);
  background: rgba(124, 92, 252, 0.08);
  border: 1px solid rgba(124, 92, 252, 0.18);
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 18px;
}

.section-title {
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(28px, 4vw, 52px);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 16px;
}

.section-sub {
  font-size: 17px;
  color: var(--sub2);
  line-height: 1.7;
  max-width: 560px;
}

/* ═══════════════════════════ WHAT IS IT ═══════════════════════════ */
.what-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-top: 0;
}

.what-text p {
  font-size: 16px;
  color: var(--sub2);
  line-height: 1.8;
  margin-bottom: 14px;
}

.what-text strong {
  color: var(--text);
  font-weight: 700;
}

.not-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
}

.not-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 77, 109, 0.05);
  border: 1px solid rgba(255, 77, 109, 0.12);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
}

.is-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(124, 92, 252, 0.06);
  border: 1px solid rgba(124, 92, 252, 0.15);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
}

.what-visual {
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}

.what-visual::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 92, 252, 0.15), transparent 70%);
  pointer-events: none;
}

.wv-title {
  font-family: var(--font-jetbrains), monospace;
  font-size: 10px;
  color: var(--sub2);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.wv-stat-row {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.wv-stat {
  flex: 1;
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
}

.wv-stat-val {
  font-size: 22px;
  font-weight: 900;
  font-family: var(--font-syne), sans-serif;
  color: var(--purple2);
}

.wv-stat-key {
  font-size: 10px;
  color: var(--sub2);
  font-family: var(--font-jetbrains), monospace;
  margin-top: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wv-bars {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.wv-bar-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wv-bar-name {
  font-size: 11px;
  color: var(--sub2);
  width: 120px;
  flex-shrink: 0;
}

.wv-bar-bg {
  flex: 1;
  height: 6px;
  background: var(--border);
  border-radius: 3px;
  overflow: hidden;
}

.wv-bar-fill {
  height: 100%;
  border-radius: 3px;
}

.wv-bar-pct {
  font-size: 10px;
  font-family: var(--font-jetbrains), monospace;
  color: var(--sub2);
  width: 28px;
  text-align: right;
  font-weight: 500;
}

/* ═══════════════════════════ HOW IT WORKS ═══════════════════════════ */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 56px;
  position: relative;
}

.steps-grid::before {
  content: '';
  position: absolute;
  top: 32px;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border2), var(--purple), var(--border2), transparent);
  pointer-events: none;
}

.step-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px 22px;
  text-align: center;
  position: relative;
  transition: border-color 0.3s;
}

.step-card:not(:last-child) {
  margin-right: 8px;
}

.step-card:hover {
  border-color: rgba(124, 92, 252, 0.3);
}

.step-num {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin: 0 auto 18px;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-jetbrains), monospace;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  position: relative;
  z-index: 1;
}

.step-card h3 {
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 8px;
  font-family: var(--font-syne), sans-serif;
}

.step-card p {
  font-size: 13px;
  color: var(--sub2);
  line-height: 1.6;
}

/* ═══════════════════════════ MODES ═══════════════════════════ */
.modes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 56px;
}

.mode-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 36px 32px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}

.mode-card:hover {
  transform: translateY(-4px);
}

.mode-card.discipline {
  background: linear-gradient(160deg, rgba(124, 92, 252, 0.08), rgba(240, 80, 138, 0.04));
  border-color: rgba(124, 92, 252, 0.3);
}

.mode-card.discipline::before {
  content: 'RECOMMENDED';
  position: absolute;
  top: 18px;
  right: 18px;
  font-family: var(--font-jetbrains), monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: #fff;
}

.mode-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-jetbrains), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid;
  margin-bottom: 20px;
}

.mode-badge.free {
  color: var(--sub2);
  border-color: var(--border2);
}

.mode-badge.paid {
  color: var(--purple2);
  border-color: rgba(124, 92, 252, 0.3);
  background: rgba(124, 92, 252, 0.08);
}

.mode-card h3 {
  font-family: var(--font-syne), sans-serif;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 6px;
  letter-spacing: -0.5px;
}

.mode-price {
  margin-bottom: 24px;
}

.mode-price .amount {
  font-family: var(--font-syne), sans-serif;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -2px;
}

.mode-price .period {
  font-size: 14px;
  color: var(--sub2);
  margin-left: 4px;
}

.mode-features {
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 28px;
}

.mf-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
}

.mf-check {
  color: var(--green);
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}

.mf-x {
  color: var(--red);
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}

.mf-text {
  color: var(--sub2);
}

.mf-text.on {
  color: var(--text);
}

.mode-note {
  background: rgba(255, 77, 109, 0.06);
  border: 1px solid rgba(255, 77, 109, 0.15);
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 12px;
  color: var(--sub2);
  margin-top: 16px;
  font-style: italic;
  line-height: 1.5;
}

.mode-btn {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  font-family: var(--font-syne), sans-serif;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.mode-btn.outline {
  background: transparent;
  border: 1px solid var(--border2);
  color: var(--text);
}

.mode-btn.outline:hover {
  border-color: var(--purple2);
  color: var(--purple2);
}

.mode-btn.filled {
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: #fff;
}

.mode-btn.filled:hover {
  opacity: 0.88;
}

/* ═══════════════════════════ BEHAVIOUR ENGINE ═══════════════════════════ */
.engine-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  margin-top: 56px;
}

.engine-metrics {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.metric-row {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px 18px;
  transition: border-color 0.3s, background 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.metric-row:hover {
  border-color: rgba(124, 92, 252, 0.4);
  background: rgba(124, 92, 252, 0.02);
}

.metric-header {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
}

.metric-details {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.metric-row.expanded .metric-details {
  grid-template-rows: 1fr;
  opacity: 1;
}

.metric-details-inner {
  overflow: hidden;
  padding-left: 54px;
  padding-top: 2px;
  min-height: 0;
}

.metric-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: var(--card2);
  border: 1px solid var(--border);
}

.metric-info {
  flex: 1;
}

.metric-name {
  font-size: 14px;
  font-weight: 700;
  font-family: var(--font-syne), sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;
}

.metric-weight {
  font-family: var(--font-jetbrains), monospace;
  font-size: 9px;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--card2);
  color: var(--sub2);
  border: 1px solid var(--border);
}

.metric-formula {
  font-family: var(--font-jetbrains), monospace;
  font-size: 10px;
  color: var(--sub2);
  margin-top: 3px;
  line-height: 1.5;
}

.metric-bar-bg {
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
}

.metric-bar {
  height: 100%;
  border-radius: 2px;
}

.metric-score {
  font-family: var(--font-syne), sans-serif;
  font-size: 18px;
  font-weight: 800;
  min-width: 40px;
  text-align: right;
}

.formula-box {
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 20px;
  padding: 28px;
}

.formula-title {
  font-family: var(--font-jetbrains), monospace;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--sub2);
  margin-bottom: 16px;
}

.formula-main {
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 20px;
  font-family: var(--font-jetbrains), monospace;
  font-size: 12px;
  color: var(--purple2);
  line-height: 1.8;
}

.formula-example {
  margin-top: 16px;
}

.formula-ex-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--sub2);
  margin-bottom: 10px;
  font-family: var(--font-jetbrains), monospace;
}

.formula-ex-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-jetbrains), monospace;
}

.formula-ex-row:last-child {
  border-bottom: none;
  font-weight: 700;
  color: var(--purple2);
}

.formula-result {
  background: rgba(124, 92, 252, 0.08);
  border: 1px solid rgba(124, 92, 252, 0.2);
  border-radius: 10px;
  padding: 14px;
  margin-top: 14px;
  text-align: center;
  font-family: var(--font-syne), sans-serif;
}

.formula-result-val {
  font-size: 36px;
  font-weight: 900;
  color: var(--purple2);
  letter-spacing: -2px;
}

.formula-result-label {
  font-size: 11px;
  color: var(--sub2);
  font-family: var(--font-jetbrains), monospace;
  margin-top: 2px;
}

/* ═══════════════════════════ LEVEL STRUCTURE ═══════════════════════════ */
.levels-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin-top: 56px;
}

.level-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px 18px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.level-card:hover {
  transform: translateY(-4px);
  border-color: var(--border2);
}

.level-card.elite {
  background: linear-gradient(160deg, rgba(245, 200, 66, 0.06), rgba(245, 200, 66, 0.02));
  border-color: rgba(245, 200, 66, 0.25);
}

.level-glow {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
}

.level-name {
  font-family: var(--font-syne), sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}

.level-capital {
  font-family: var(--font-jetbrains), monospace;
  font-size: 11px;
  color: var(--sub2);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.level-capital-val {
  font-family: var(--font-syne), sans-serif;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 12px;
}

.level-target-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  font-family: var(--font-syne), sans-serif;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
}

.level-note {
  font-size: 11px;
  color: var(--sub2);
  line-height: 1.5;
}

.level-reset {
  margin-top: 32px;
  background: rgba(59, 158, 255, 0.06);
  border: 1px solid rgba(59, 158, 255, 0.15);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 13px;
  color: var(--sub2);
  line-height: 1.6;
  grid-column: span 5;
  text-align: center;
}

.level-reset strong {
  color: var(--blue);
}

/* ═══════════════════════════ RISK LOCK ═══════════════════════════ */
.lock-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 48px;
}

.lock-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px 24px;
  text-align: center;
  transition: border-color 0.3s;
}

.lock-card:hover {
  border-color: rgba(255, 77, 109, 0.25);
}

.lock-icon {
  font-size: 36px;
  margin-bottom: 16px;
}

.lock-card h3 {
  font-family: var(--font-syne), sans-serif;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 8px;
}

.lock-card p {
  font-size: 13px;
  color: var(--sub2);
  line-height: 1.6;
}

/* ═══════════════════════════ LEADERBOARD ═══════════════════════════ */

.lb-filters {
  display: flex;
  gap: 10px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.lb-filter {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  color: var(--sub2);
  transition: all 0.2s;
}

.lb-filter.active {
  background: rgba(124, 92, 252, 0.1);
  border-color: rgba(124, 92, 252, 0.3);
  color: var(--purple2);
}

.lb-table {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 16px;
}

.lb-header {
  display: grid;
  grid-template-columns: 60px 1fr 100px 100px 100px 120px;
  padding: 14px 24px;
  background: var(--card2);
  border-bottom: 1px solid var(--border);
  font-family: var(--font-jetbrains), monospace;
  font-size: 10px;
  color: var(--sub2);
  text-transform: uppercase;
  letter-spacing: 1px;
  gap: 8px;
}

.lb-row {
  display: grid;
  grid-template-columns: 60px 1fr 100px 100px 100px 120px;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.lb-row:last-child {
  border-bottom: none;
}

.lb-row:hover {
  background: rgba(124, 92, 252, 0.04);
}

.lb-row.top1 {
  background: linear-gradient(90deg, rgba(245, 200, 66, 0.06), transparent);
}

.lb-row.top2 {
  background: linear-gradient(90deg, rgba(192, 192, 192, 0.04), transparent);
}

.lb-row.top3 {
  background: linear-gradient(90deg, rgba(205, 127, 50, 0.04), transparent);
}

.lb-rank {
  font-family: var(--font-syne), sans-serif;
  font-size: 16px;
  font-weight: 800;
}

.lb-rank.r1 {
  color: var(--gold);
}

.lb-rank.r2 {
  color: #C0C0C0;
}

.lb-rank.r3 {
  color: #CD7F32;
}

.lb-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lb-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
  flex-shrink: 0;
  font-family: var(--font-syne), sans-serif;
}

.lb-username {
  font-size: 14px;
  font-weight: 700;
  font-family: var(--font-syne), sans-serif;
}

.lb-country {
  font-size: 11px;
  color: var(--sub2);
  margin-top: 1px;
  font-family: var(--font-jetbrains), monospace;
}

.lb-cell {
  font-size: 13px;
  font-weight: 600;
  font-family: var(--font-jetbrains), monospace;
}

.lb-score-val {
  font-family: var(--font-syne), sans-serif;
  font-size: 16px;
  font-weight: 800;
}

.lb-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  font-family: var(--font-jetbrains), monospace;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.5px;
}

.badge-elite {
  background: rgba(0, 229, 160, 0.1);
  color: var(--green);
  border: 1px solid rgba(0, 229, 160, 0.25);
}

.badge-strong {
  background: rgba(59, 158, 255, 0.1);
  color: var(--blue);
  border: 1px solid rgba(59, 158, 255, 0.25);
}

.badge-stable {
  background: rgba(245, 200, 66, 0.1);
  color: var(--gold);
  border: 1px solid rgba(245, 200, 66, 0.25);
}

.lb-qualify-note {
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px 18px;
  margin-top: 16px;
  font-size: 13px;
  color: var(--sub2);
  display: flex;
  align-items: center;
  gap: 10px;
}

.lb-qualify-note strong {
  color: var(--text);
}

/* ═══════════════════════════ PRICING ═══════════════════════════ */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 56px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.price-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 36px 30px;
  position: relative;
  overflow: hidden;
}

.price-card.featured {
  background: linear-gradient(160deg, rgba(124, 92, 252, 0.08), rgba(240, 80, 138, 0.04));
  border-color: rgba(124, 92, 252, 0.3);
}

.price-pop {
  position: absolute;
  top: 24px;
  right: 24px;
  background: linear-gradient(135deg, var(--purple2), var(--pink));
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  font-family: var(--font-jetbrains), monospace;
  padding: 6px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.price-card h3 {
  font-family: var(--font-syne), sans-serif;
  font-size: 36px;
  font-weight: 900;
  margin-top: 24px;
  margin-bottom: 12px;
  letter-spacing: -1px;
}

.mode-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-family: var(--font-jetbrains), monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mode-badge.free {
  background: rgba(245, 200, 66, 0.05);
  border: 1px solid rgba(245, 200, 66, 0.2);
  color: var(--gold);
}

.mode-badge.paid {
  background: rgba(124, 92, 252, 0.05);
  border: 1px solid rgba(124, 92, 252, 0.2);
  color: var(--purple2);
}

.mode-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 24px;
}

.mode-price .amount {
  font-family: var(--font-syne), sans-serif;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -2px;
  font-style: italic;
}

.mode-price .period {
  font-size: 13px;
  color: var(--sub2);
}

.price-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--sub2);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: var(--font-jetbrains), monospace;
  margin-bottom: 14px;
}

.price-amount {
  font-family: var(--font-syne), sans-serif;
  font-size: 52px;
  font-weight: 900;
  letter-spacing: -3px;
  line-height: 1;
}

.price-amount sup {
  font-size: 22px;
  letter-spacing: 0;
  vertical-align: top;
  margin-top: 10px;
  display: inline-block;
}

.price-period {
  font-size: 13px;
  color: var(--sub2);
  margin-top: 4px;
  margin-bottom: 10px;
}

.price-alt {
  font-size: 13px;
  color: var(--green);
  font-weight: 600;
  margin-bottom: 24px;
  font-family: var(--font-jetbrains), monospace;
}

.price-divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 24px;
}

.price-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}

.pf-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
}

.pf-check {
  color: var(--green);
  font-size: 15px;
  flex-shrink: 0;
}

.pf-x {
  color: var(--sub2);
  font-size: 15px;
  flex-shrink: 0;
  opacity: 0.4;
}

.pf-on {
  color: var(--text);
}

.pf-off {
  color: var(--sub2);
}

.price-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  font-family: var(--font-syne), sans-serif;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.price-btn.outline {
  background: transparent;
  border: 1px solid var(--border2);
  color: var(--text);
}

.price-btn.outline:hover {
  border-color: var(--purple2);
  color: var(--purple2);
}

.price-btn.grad {
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: #fff;
}

.price-btn.grad:hover {
  opacity: 0.88;
}

.refund-note {
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  color: var(--sub2);
  font-family: var(--font-jetbrains), monospace;
}

/* ═══════════════════════════ ABOUT ═══════════════════════════ */
.about-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.about-inner p {
  font-size: 18px;
  color: var(--sub2);
  line-height: 1.8;
  margin-bottom: 18px;
}

.about-inner strong {
  color: var(--text);
  font-weight: 700;
}

.about-values {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
  margin-top: 48px;
}

.av-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px 18px;
  text-align: center;
}

.av-icon {
  font-size: 28px;
  margin-bottom: 10px;
}

.av-card h4 {
  font-family: var(--font-syne), sans-serif;
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 6px;
}

.av-card p {
  font-size: 13px;
  color: var(--sub2);
  line-height: 1.5;
}

/* ═══════════════════════════ CONTACT ═══════════════════════════ */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 48px;
  align-items: start;
  margin-top: 48px;
}

.contact-info h3 {
  font-family: var(--font-syne), sans-serif;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 12px;
}

.contact-info p {
  font-size: 15px;
  color: var(--sub2);
  line-height: 1.7;
  margin-bottom: 24px;
}

.contact-email {
  background: var(--card);
  border: 1px solid var(--border2);
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-email-icon {
  font-size: 22px;
}

.contact-email-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--purple2);
}

.contact-email-sub {
  font-size: 11px;
  color: var(--sub2);
  font-family: var(--font-jetbrains), monospace;
  margin-top: 2px;
}

.contact-form {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.form-row label {
  font-size: 11px;
  color: var(--sub2);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-family: var(--font-jetbrains), monospace;
}

.form-row input,
.form-row textarea,
.form-row select {
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 13px 16px;
  color: var(--text);
  font-family: var(--font-dm-sans), sans-serif;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  -webkit-appearance: none;
}

.form-row input:focus,
.form-row textarea:focus {
  border-color: var(--purple);
}

.form-row textarea {
  resize: none;
  min-height: 110px;
  font-size: 13px;
}

.btn-submit {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: #fff;
  font-family: var(--font-syne), sans-serif;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-submit:hover {
  opacity: 0.88;
}

/* ═══════════════════════════ LEGAL ═══════════════════════════ */
.legal-section {
  display: none;
}

.legal-section.active {
  display: block;
}

.legal-content {
  max-width: 820px;
  margin: 0 auto;
}

.legal-content h2 {
  font-family: var(--font-syne), sans-serif;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 32px;
}

.legal-content h3 {
  font-family: var(--font-syne), sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 10px;
  color: var(--purple2);
}

.legal-content p {
  font-size: 15px;
  color: var(--sub2);
  line-height: 1.8;
  margin-bottom: 12px;
}

.legal-content ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.legal-content ul li {
  font-size: 15px;
  color: var(--sub2);
  line-height: 1.8;
  margin-bottom: 6px;
}

.legal-content strong {
  color: var(--text);
}

/* ═══════════════════════════ FINAL CTA ═══════════════════════════ */
.final-cta {
  text-align: center;
  padding: 120px 5%;
  background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124, 92, 252, 0.08), transparent 70%);
}

.final-cta h2 {
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(34px, 5vw, 68px);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.08;
  margin-bottom: 20px;
}

.final-cta h2 .acc {
  background: linear-gradient(135deg, var(--purple2), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.final-cta p {
  font-size: 17px;
  color: var(--sub2);
  max-width: 460px;
  margin: 0 auto 40px;
}

/* ═══════════════════════════ FOOTER ═══════════════════════════ */
footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  padding: 64px 5% 36px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
  max-width: var(--max);
  margin: 0 auto 48px;
}

.footer-brand .logo {
  font-family: var(--font-syne), sans-serif;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
}

.footer-brand .logo .lab {
  color: var(--purple);
  font-size: 12px;
  font-family: var(--font-jetbrains), monospace;
  background: rgba(124, 92, 252, 0.1);
  border: 1px solid rgba(124, 92, 252, 0.2);
  padding: 2px 7px;
  border-radius: 5px;
  margin-left: 6px;
  vertical-align: middle;
}

.footer-brand p {
  font-size: 13px;
  color: var(--sub2);
  line-height: 1.6;
  max-width: 240px;
  margin-top: 8px;
}

.footer-col h4 {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--sub2);
  margin-bottom: 16px;
  font-family: var(--font-jetbrains), monospace;
}

.footer-col a {
  display: block;
  font-size: 14px;
  color: var(--sub2);
  margin-bottom: 10px;
  transition: color 0.2s;
  cursor: pointer;
}

.footer-col a:hover {
  color: var(--purple2);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  max-width: var(--max);
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-disclaimer {
  font-size: 12px;
  color: var(--sub2);
  line-height: 1.6;
  max-width: 600px;
}

.footer-legal {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-legal a {
  font-size: 12px;
  color: var(--sub2);
  cursor: pointer;
}

.footer-legal a:hover {
  color: var(--text);
}

/* ═══════════════════════════ UTILS ═══════════════════════════ */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

.rd1 {
  transition-delay: 0.1s;
}

.rd2 {
  transition-delay: 0.2s;
}

.rd3 {
  transition-delay: 0.3s;
}

.rd4 {
  transition-delay: 0.4s;
}

/* ═══════════════════════════ RESPONSIVE ═══════════════════════════ */
@media(max-width:960px) {

  .nav-links,
  .nav-actions {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }

  .what-grid {
    grid-template-columns: 1fr;
  }

  .engine-grid {
    grid-template-columns: 1fr;
  }

  .modes-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr 1fr;
  }

  .steps-grid::before {
    display: none;
  }

  .step-card:not(:last-child) {
    margin-right: 0;
  }

  .levels-grid {
    grid-template-columns: 1fr 1fr;
  }

  .level-reset {
    grid-column: span 2;
  }

  .lock-cards {
    grid-template-columns: 1fr;
  }

  .lb-header,
  .lb-row {
    grid-template-columns: 50px 1fr 80px 80px;
  }

  .lb-cell:nth-child(4),
  .lb-cell:nth-child(5) {
    display: none;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .about-values {
    grid-template-columns: 1fr 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;
  }
}

@media(max-width:600px) {
  section {
    padding: 72px 5%;
  }

  .hero {
    padding: 100px 5% 60px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .levels-grid {
    grid-template-columns: 1fr 1fr;
  }

  .about-values {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .lb-header,
  .lb-row {
    grid-template-columns: 40px 1fr 70px 100px;
  }
}