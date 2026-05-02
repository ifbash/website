import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | ifBash",
  description: "Terms and conditions governing your use of ifBash services and website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-gray-500 text-sm">Last updated: May 1, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <p className="text-gray-700 text-lg leading-relaxed">
              Please read these Terms of Service carefully before using the ifBash website or
              engaging with our consulting and implementation services. By accessing this website
              or using our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Services</h2>
            <p className="text-gray-700">
              ifBash provides ServiceNow consulting, implementation, integration, and managed
              services. The specific scope, deliverables, timelines, and fees for any engagement
              are governed by a separate written Statement of Work or service agreement signed
              between ifBash and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Use of the Website</h2>
            <p className="text-gray-700 mb-3">You agree to use this website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the site in any way that violates applicable local, national, or international law or regulation.</li>
              <li>Transmit unsolicited promotional or advertising material.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems.</li>
              <li>Reproduce, duplicate, or exploit any portion of the website without our express written permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website — including text, graphics, logos, and software — is the
              property of ifBash or its content suppliers and is protected by applicable intellectual
              property laws. You may not use our branding or content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              This website and its content are provided on an "as is" basis without warranties of
              any kind, either express or implied. ifBash does not warrant that the website will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, ifBash shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of, or
              inability to use, this website or its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Third-Party Links</h2>
            <p className="text-gray-700">
              This website may contain links to third-party websites. These links are provided for
              convenience only. ifBash has no control over the content of those sites and accepts
              no responsibility for them or for any loss or damage that may arise from your use
              of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Privacy</h2>
            <p className="text-gray-700">
              Your use of this website is also governed by our{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms of Service by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to These Terms</h2>
            <p className="text-gray-700">
              We reserve the right to update these Terms of Service at any time. The date at the
              top of this page indicates when they were last revised. Continued use of the website
              following any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
            <p className="text-gray-700">
              These Terms of Service shall be governed by and construed in accordance with
              applicable law. Any disputes arising in connection with these terms shall be subject
              to the exclusive jurisdiction of the competent courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:connect@ifbash.com" className="text-blue-600 hover:underline">
                connect@ifbash.com
              </a>.
            </p>
          </section>
        </div>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</Link>
          <Link href="/contactus" className="hover:text-blue-600 transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
