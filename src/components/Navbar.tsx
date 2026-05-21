"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToLab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById("page-home")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      window.location.href = "/#page-home";
    }
  };

  if (pathname === "/delete-account") return null;

  return (
    <>
      <nav id="navbar" style={{ boxShadow: scrolled ? "0 4px 48px rgba(0,0,0,0.5)" : "none" }}>
        {/* Logo — Neeyum only */}
        <div className="nav-logo">
          <Link href="/" onClick={() => setMobileOpen(false)}
            style={{ textDecoration: "none", color: "inherit", fontWeight: 800, letterSpacing: "-0.5px" }}>
            Neeyum
          </Link>
        </div>

        {/* Desktop — 3 colored nav items */}
        <div className="nav-links">
          <a href="/#page-home" onClick={scrollToLab}
            style={{ color: "var(--purple2)", fontWeight: 600, fontSize: "14px",
              padding: "8px 16px", borderRadius: "10px", border: "1px solid rgba(124,92,252,0.25)",
              background: "rgba(124,92,252,0.08)", textDecoration: "none", transition: "all 0.2s" }}>
            Neeyum Lab
          </a>
          <a href="/tradeos"
            style={{ color: "var(--green)", fontWeight: 700, fontSize: "14px",
              padding: "8px 16px", borderRadius: "10px", border: "1px solid rgba(0,229,160,0.25)",
              background: "rgba(0,229,160,0.08)", textDecoration: "none", transition: "all 0.2s" }}>
            TradeOS
          </a>
          <Link href="/scorecard"
            style={{ color: "var(--gold)", fontWeight: 600, fontSize: "14px",
              padding: "8px 16px", borderRadius: "10px", border: "1px solid rgba(245,200,66,0.25)",
              background: "rgba(245,200,66,0.08)", textDecoration: "none", transition: "all 0.2s" }}>
            Scorecard
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="hamburger-btn" onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          <div className="hamburger">
            <div className="hline"></div>
            <div className="hline"></div>
            <div className="hline"></div>
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <a href="/#page-home" onClick={scrollToLab}
          style={{ color: "var(--purple2)", fontWeight: 600 }}>
          Neeyum Lab
        </a>
        <a href="/tradeos"
          onClick={() => setMobileOpen(false)}
          style={{ color: "var(--green)", fontWeight: 700 }}>
          TradeOS
        </a>
        <Link href="/scorecard" onClick={() => setMobileOpen(false)}
          style={{ color: "var(--gold)", fontWeight: 600 }}>
          Scorecard
        </Link>
        <a href="https://play.google.com/store/apps/details?id=com.sleepyclassics.neeyum"
          target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
          className="btn-primary" style={{ textAlign: "center", marginTop: "8px" }}>
          &#128242; Download Neeyum App
        </a>
      </div>
    </>
  );
}
