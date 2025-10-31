import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

// Privacy & Compliance static page
// React + Tailwind CSS component (single-file)
// Usage: import and render <PrivacyCompliancePage /> in your app

export default function PrivacyCompliancePage() {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState(null); // null = not decided, true = accepted, false = rejected

  useEffect(() => {
    try {
      const stored = localStorage.getItem("marketing_consent");
      if (stored === null) {
        setShowBanner(true);
      } else {
        setConsent(stored === "accepted");
      }
    } catch (e) {
      // localStorage may be unavailable in some environments — silently ignore
      setShowBanner(true);
    }
  }, []);

  function handleConsent(accept) {
    try {
      localStorage.setItem("marketing_consent", accept ? "accepted" : "rejected");
    } catch (e) {
      // ignore
    }
    setConsent(accept);
    setShowBanner(false);
  }

  return (
     <Layout>
        <main className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12">
        <div className="max-w-4xl mx-auto">
            <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy & Compliance</h1>
            <p className="mt-2 text-gray-600">How we handle data for this website — focused on marketing & traffic insights only.</p>
            </header>

            <article className="space-y-8 ">
            <section aria-labelledby="summary">
                <h2 id="summary" className="text-xl font-semibold">Summary</h2>
                <p className="mt-2 text-gray-700">
                This website does <strong>not</strong> collect or store any Personal Health Information (PHI). The site is designed to
                route booking and patient-related actions directly to our clinical booking partner (JaneApp) and to use analytics only for
                marketing and traffic insights.
                </p>
            </section>

            <section aria-labelledby="no-forms">
                <h2 id="no-forms" className="text-xl font-semibold">No Intake or Medical Forms</h2>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>No intake or medical forms are hosted on this website.</li>
                <li>All patient intake forms remain on the clinic's secure systems (e.g., JaneApp) and are not embedded here.</li>
                <li>If a form is required, visitors are directed to the external booking portal via a link/button that opens JaneApp.</li>
                </ul>
            </section>

            <section aria-labelledby="no-phi">
                <h2 id="no-phi" className="text-xl font-semibold">No PHI in Website Forms</h2>
                <p className="mt-2 text-gray-700">
                Website forms (contact, newsletter signup, etc.) must <strong>not</strong> contain any fields that could be considered PHI
                — for example: medical conditions, treatment details, health insurance IDs, or other clinical notes. Only non-sensitive
                marketing/contact fields are permitted (name, email, message limited to non-medical content).
                </p>
            </section>

            <section aria-labelledby="janeapp-routing">
                <h2 id="janeapp-routing" className="text-xl font-semibold">Booking & Patient-Related Forms</h2>
                <p className="mt-2 text-gray-700">
                All booking and patient-related forms route directly to JaneApp. Do not replicate scheduling or intake workflows here.
                Use a prominent link/button that opens the clinic's JaneApp booking portal.
                </p>

                <div className="mt-4">
                {/* <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-block px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Open booking in JaneApp (link placeholder)"
                >
                    Open booking (JaneApp)
                </a>
                <p className="mt-2 text-sm text-gray-500">Replace the above link's href with your clinic's JaneApp booking URL.</p>
                 */}
                
                
                </div>
            </section>

            <section aria-labelledby="analytics">
                <h2 id="analytics" className="text-xl font-semibold">Analytics & Cookies</h2>
                <p className="mt-2 text-gray-700">
                We use analytics and cookies only for marketing and traffic insights. No tracking for clinical purposes is enabled.
                Examples include traffic measurement, campaign performance, and anonymous aggregate reports.
                </p>

                <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Only marketing-related cookies may be used (analytics, ads measurement) — no PHI is collected or associated.</li>
                <li>A standard cookie banner is shown to capture consent for marketing cookies (accept/reject).</li>
                <li>If marketing cookies are rejected, analytics that rely on those cookies will not be loaded.</li>
                </ul>
            </section>

            <section aria-labelledby="cookie-policy">
                <h2 id="cookie-policy" className="text-xl font-semibold">Cookie Banner & Privacy Notice</h2>
                <p className="mt-2 text-gray-700">
                The site includes a concise cookie banner and a privacy notice focused solely on marketing-related data use. The privacy
                notice should state clearly what categories of data are collected for marketing, how long they are retained, and provide
                instructions for opting out (e.g., via the cookie banner or third-party ad settings).
                </p>
            </section>

            <section aria-labelledby="developer-guidance">
                <h2 id="developer-guidance" className="text-xl font-semibold">Developer Implementation Guidance</h2>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                <li>Do not add form fields that could capture PHI anywhere in the codebase for the public site.</li>
                <li>All client-side links to patient workflows must open the external booking system (JaneApp) in a new tab where appropriate.</li>
                <li>Server logs and backups must be reviewed to ensure no PHI is being accidentally written by integrations.</li>
                <li>Document the exact analytics tags you use (e.g., Google Analytics measurement ID) so they can be audited for PHI leakage.</li>
                </ul>
            </section>

            <section aria-labelledby="contact">
                <h2 id="contact" className="text-xl font-semibold">Contact & Auditing</h2>
                <p className="mt-2 text-gray-700">
                For compliance questions, or to request an audit of the site configuration, contact the clinic's Privacy Officer. Keep a
                change-log of any analytics or third-party marketing scripts and update the privacy notice when those change.
                </p>
            </section>
            </article>

            <footer className="mt-8 text-sm text-gray-500">© {new Date().getFullYear()} BlueHaloHealth — Privacy & Compliance</footer>
        </div>

        {/* Cookie banner (simple, accessible) */}
        {/* {showBanner && (
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-50">
            <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 ring-1 ring-black/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <p className="font-semibold">We use cookies for marketing & analytics</p>
                    <p className="mt-1 text-sm text-gray-600">These cookies help us understand site traffic and improve marketing. No PHI is collected.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                    onClick={() => handleConsent(false)}
                    className="px-4 py-2 rounded-md border border-gray-200 bg-white text-sm hover:bg-gray-50 focus:outline-none"
                    >
                    Reject
                    </button>
                    <button
                    onClick={() => handleConsent(true)}
                    className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none"
                    >
                    Accept
                    </button>
                </div>
                </div>

                <p className="mt-3 text-xs text-gray-500">Change your preference later in the footer or via browser settings.</p>
            </div>
            </div>
        )} */}

        {/* Non-intrusive consent status indicator in corner (for demo) */}
        <div className="fixed top-6 right-6 text-xs">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-md shadow-sm">
            <span className="font-medium">Marketing cookies:</span>
            <span className="text-gray-600">{consent === null ? "Not set" : consent ? "Accepted" : "Rejected"}</span>
            </div>
        </div>
        </main>
     </Layout>
  );
}
