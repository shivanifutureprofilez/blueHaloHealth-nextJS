import Layout from "@/components/Layout";
import React from "react";

export default function TermsOfUsePage() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Terms of Use
            </h1>
            <p className="mt-2 text-gray-600">
              Please read these terms carefully before using this website.
            </p>
          </header>

          <article className="space-y-8">
            {/* Acceptance */}
            <section>
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-2 text-gray-700">
                By accessing or using this website, you agree to be bound by
                these Terms of Use. If you do not agree, please do not use this site.
              </p>
            </section>

            {/* No Medical Advice */}
            <section>
              <h2 className="text-xl font-semibold">2. No Medical Advice</h2>
              <p className="mt-2 text-gray-700">
                The content on this website is provided for general informational
                and marketing purposes only. It does not constitute medical advice,
                diagnosis, or treatment. Always consult a qualified healthcare
                provider regarding any medical concerns.
              </p>
            </section>

            {/* Booking & Third Party */}
            <section>
              <h2 className="text-xl font-semibold">
                3. Booking & Third-Party Services
              </h2>
              <p className="mt-2 text-gray-700">
                Appointment booking and patient-related forms are handled through
                a third-party clinical system (e.g., JaneApp). When you click a
                booking link, you will be redirected to that external platform.
                We are not responsible for the content, privacy practices, or
                security of third-party systems.
              </p>
            </section>

            {/* Website Use */}
            <section>
              <h2 className="text-xl font-semibold">4. Permitted Use</h2>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>You agree to use this site for lawful purposes only.</li>
                <li>You may not attempt to interfere with site security or functionality.</li>
                <li>You may not use this website to transmit unlawful or harmful material.</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
              <p className="mt-2 text-gray-700">
                All content on this website, including text, branding, logos,
                and design elements, is the property of BlueHaloHealth unless
                otherwise stated. Unauthorized reproduction or distribution is prohibited.
              </p>
            </section>

            {/* Analytics */}
            <section>
              <h2 className="text-xl font-semibold">6. Analytics & Cookies</h2>
              <p className="mt-2 text-gray-700">
                This website uses analytics and marketing cookies to understand
                traffic and campaign performance. No Personal Health Information
                (PHI) is collected through this site. Please review our Privacy &
                Compliance page for more information.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
              <p className="mt-2 text-gray-700">
                This website is provided "as is" without warranties of any kind.
                BlueHaloHealth is not liable for any direct, indirect, incidental,
                or consequential damages arising from the use of this site.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-xl font-semibold">8. Changes to These Terms</h2>
              <p className="mt-2 text-gray-700">
                We may update these Terms of Use from time to time. Continued
                use of the website after updates constitutes acceptance of the
                revised terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-semibold">9. Governing Law</h2>
              <p className="mt-2 text-gray-700">
                These Terms shall be governed by and interpreted in accordance
                with the laws of the applicable jurisdiction in which the clinic operates.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold">10. Contact</h2>
              <p className="mt-2 text-gray-700">
                For questions regarding these Terms of Use, please contact the clinic
                directly using the contact information provided on this website.
              </p>
            </section>
          </article>

          <footer className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} BlueHaloHealth — Terms of Use
          </footer>
        </div>
      </main>
    </Layout>
  );
}
