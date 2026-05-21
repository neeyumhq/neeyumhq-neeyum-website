import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Delete Account | Neeyum Lab",
    description: "Request deletion of your Neeyum Lab account and all associated data.",
};

export default function DeleteAccountPage() {
    return (
        <>
            <div className="card">
                <div className="icon-wrap">🗑</div>
                <h1>Delete Your Account</h1>
                <p className="subtitle">
                    You can request permanent deletion of your Neeyum Lab account and all associated personal data at any time.
                </p>

                <div className="delete-scope">
                    <div className="delete-scope-title">Data that will be permanently deleted</div>
                    <div className="delete-item">
                        <div className="del-dot"></div>Account credentials (email, username, password hash)
                    </div>
                    <div className="delete-item">
                        <div className="del-dot"></div>All simulated trade logs and journal entries
                    </div>
                    <div className="delete-item">
                        <div className="del-dot"></div>Behaviour scores, metrics, and monthly reports
                    </div>
                    <div className="delete-item">
                        <div className="del-dot"></div>Emotional tags, session history, and preferences
                    </div>
                    <div className="delete-item">
                        <div className="del-dot"></div>Leaderboard rank and level progression data
                    </div>
                    <div className="delete-item">
                        <div className="del-dot"></div>Subscription status and billing records (within 30 days)
                    </div>
                </div>

                <div className="retain-note">
                    <strong>Note:</strong> Anonymised aggregate data (not linked to your identity) may be retained for platform analytics. Active subscription access ends immediately on deletion. <strong>No refund is issued</strong> on account deletion as per our Refund Policy.
                </div>

                <div className="steps-title">How to request deletion</div>
                <div className="step-row">
                    <div className="step-num">1</div>
                    <div className="step-text">
                        Send an email to <strong>support@neeyum.in</strong> with the subject line: <strong>&quot;Account Deletion Request&quot;</strong>
                    </div>
                </div>
                <div className="step-row">
                    <div className="step-num">2</div>
                    <div className="step-text">
                        Include your <strong>registered email address</strong> and username in the email body so we can verify your identity.
                    </div>
                </div>
                <div className="step-row">
                    <div className="step-num">3</div>
                    <div className="step-text">
                        We will confirm and permanently delete your account and data <strong>within 7 business days</strong>.
                    </div>
                </div>

                <a
                    className="email-btn"
                    href="mailto:support@neeyum.in?subject=Account%20Deletion%20Request&body=Hi%20Neeyum%20Lab%20Team%2C%0A%0AI%20would%20like%20to%20permanently%20delete%20my%20account.%0A%0ARegistered%20Email%3A%20%0AUsername%3A%20%0A%0APlease%20confirm%20deletion%20of%20all%20my%20data."
                >
                    📧 Email Us to Delete Account
                </a>

                <p className="timing">
                    support@neeyum.in &middot; Response within 24–48 hours &middot; Deletion within 7 business days
                </p>
            </div>

            <div className="disclaimer">
                Neeyum Lab is a simulation-only platform. No real money is involved. This page exists to fulfil Google Play data deletion requirements under the <strong>Google Play Data Safety policy</strong>.
            </div>
        </>
    );
}
