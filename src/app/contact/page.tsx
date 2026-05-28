"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [contactSuccess, setContactSuccess] = useState(false);

    return (
        <div id="page-contact" style={{ paddingTop: "64px" }}>
            <section>
                <div className="container">
                    <div className="section-eyebrow">Contact Us</div>
                    <h2 className="section-title">We're Here to Help.</h2>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Reach Out Anytime</h3>
                            <p>We respond to all support and general queries within <strong>24–48 hours</strong>. For account-specific issues, please include your registered email in the message.</p>
                            <div className="contact-email">
                                <div className="contact-email-icon">📧</div>
                                <div>
                                    <div className="contact-email-text">support@neeyum.in</div>
                                    <div className="contact-email-sub">Response within 24–48 hours</div>
                                </div>
                            </div>
                            <div style={{ marginTop: "20px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "16px 18px" }}>
                                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "10px", color: "var(--sub2)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Before writing, check:</div>
                                <div style={{ fontSize: "13px", color: "var(--sub2)", lineHeight: 1.7 }}>
                                    • <Link href="/privacy-policy" style={{ color: "var(--purple2)" }}>Privacy Policy</Link><br />
                                    • <Link href="/terms-of-use" style={{ color: "var(--purple2)" }}>Terms of Use</Link><br />
                                    • <Link href="/refund-policy" style={{ color: "var(--purple2)" }}>Refund Policy</Link>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="form-row"><label>Your Name</label><input type="text" placeholder="Rahul Sharma" /></div>
                            <div className="form-row"><label>Email Address</label><input type="email" placeholder="you@example.com" /></div>
                            <div className="form-row">
                                <label>Subject</label>
                                <select>
                                    <option>Account Support</option>
                                    <option>Subscription / Billing</option>
                                    <option>Technical Issue</option>
                                    <option>General Enquiry</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-row"><label>Message</label><textarea placeholder="Describe your query in detail..."></textarea></div>
                            <button className="btn-submit" onClick={() => setContactSuccess(true)}>Send Message →</button>
                            {contactSuccess && (
                                <div id="contactSuccess" style={{ marginTop: "12px", background: "rgba(0,229,160,0.08)", border: "1px solid rgba(0,229,160,0.2)", borderRadius: "10px", padding: "12px", textAlign: "center", fontSize: "13px", color: "var(--green)", fontWeight: 600 }}>
                                    ✓ Message sent! We'll reply within 24–48 hours.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
