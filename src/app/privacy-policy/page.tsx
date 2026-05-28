import React from "react";

export default function PrivacyPolicy() {
    return (
        <div id="page-legal-privacy" style={{ paddingTop: "64px" }}>
            <section>
                <div className="container">
                    <div className="legal-content">
                        <h2>Privacy Policy</h2>
                        <p><strong>Last updated: March 2026</strong></p>
                        <h3>1. Information We Collect</h3>
                        <p>Neeyum Lab collects the following data to operate the platform:</p>
                        <ul>
                            <li><strong>Account data:</strong> Email address, username, and profile information provided during registration.</li>
                            <li><strong>Trade logs:</strong> Simulated trade entries, exit data, prices, quantities, stop-loss levels, and target levels.</li>
                            <li><strong>Behavioural metrics:</strong> Emotional state tags, journal entries, mistake classifications, and score data.</li>
                            <li><strong>Usage data:</strong> Session timestamps, pages visited, feature interactions, and device/browser information.</li>
                        </ul>
                        <h3>2. How We Use Your Data</h3>
                        <ul>
                            <li>To generate your monthly Behaviour Score and leaderboard ranking.</li>
                            <li>To provide platform features including analytics, heatmaps, and AI behaviour reports.</li>
                            <li>To process subscription payments via our payment partners.</li>
                            <li>To improve the platform based on usage patterns.</li>
                            <li>To send service-related communications (not marketing, unless opted in).</li>
                        </ul>
                        <h3>3. Cookie Usage</h3>
                        <p>We use essential cookies for authentication and session management, and analytics cookies (e.g., Google Analytics) to understand how users interact with the platform. You may disable non-essential cookies through your browser settings.</p>
                        <h3>4. Analytics</h3>
                        <p>We use third-party analytics tools to track platform usage in aggregate. These tools may collect anonymised data about your session. Individual data is never shared with analytics providers.</p>
                        <h3>5. We Do Not Sell Your Data</h3>
                        <p>Neeyum Lab does not sell, rent, or trade personal data to any third party for marketing or commercial purposes. Your trade logs and behavioural data are your private property.</p>
                        <h3>6. Data Security</h3>
                        <p>We implement industry-standard security measures including encrypted connections (HTTPS), secure database storage, and access controls. No system is 100% secure — we encourage users to use strong passwords.</p>
                        <h3>7. Data Retention</h3>
                        <p>We retain your account and trade data while your account is active. Upon account deletion, personal data is purged within 30 days. Anonymised aggregate data may be retained indefinitely.</p>
                        <h3>8. Your Rights</h3>
                        <p>You have the right to access, correct, export, or delete your data. Contact us at support@neeyum.in to exercise any of these rights.</p>
                        <h3>9. Contact</h3>
                        <p>For privacy-related queries: <strong>support@neeyum.in</strong></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
