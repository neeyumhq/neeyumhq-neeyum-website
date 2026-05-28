import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">Neeyum</div>
          <p>India&apos;s complete trading discipline ecosystem. Simulate crypto. Track real NSE/BSE trades. Ranked by behaviour &#8212; not profit.</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.sleepyclassics.neeyum"
            target="_blank" rel="noopener noreferrer"
            className="btn-nav-fill"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", width: "fit-content" }}>
            &#128242; Download Android App
          </a>
        </div>

        {/* Products — NEW column */}
        <div className="footer-col">
          <h4>Products</h4>
          <a href="/journal" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--purple2)", fontWeight: 600 }}>
            Journal &#8212; Multi-Asset &#8599;
          </a>
          <Link href="/#page-home">Neeyum Lab &#8212; Crypto Sim</Link>
          <span style={{ color: "var(--sub)", cursor: "default" }}>Neeyum Analyse &#8212; Soon</span>
        </div>

        {/* Platform */}
        <div className="footer-col">
          <h4>Platform</h4>
          <Link href="/#what">What is Neeyum Lab?</Link>
          <Link href="/#how">How It Works</Link>
          <Link href="/#engine">Behaviour Score</Link>
          <Link href="/#levels">Level Structure</Link>
          <Link href="/#leaderboard">Leaderboard</Link>
          <Link href="/#pricing">Pricing</Link>
        </div>

        {/* Legal — ALL original links preserved */}
        <div className="footer-col">
          <h4>Legal &amp; Support</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/delete-account">Delete Account</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          <strong>&#9888; Disclaimer:</strong> Neeyum Lab is a simulation-based platform.
          We do not execute trades, provide brokerage services, or offer financial advice.
          &#169; 2026 Neeyum Lab / Neeyum.in &#183; All rights reserved.
        </p>
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-use">Terms</Link>
          <Link href="/refund-policy">Refunds</Link>
          <Link href="/delete-account">Delete Account</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
