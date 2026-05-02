import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ifBash",
  description: "How ifBash collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
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
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 text-sm">Last updated: May 1, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <p className="text-gray-700 text-lg leading-relaxed">
              At ifBash, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or engage with
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contact information</strong> — name, email address, phone number, and company name when you fill out a form or subscribe to our newsletter.</li>
              <li><strong>Usage data</strong> — pages visited, time spent on pages, referring URLs, and browser/device information collected automatically via cookies and analytics tools.</li>
              <li><strong>Communications</strong> — messages you send us via contact forms, email, or chat.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To respond to your enquiries and provide requested services.</li>
              <li>To send newsletters and marketing communications (only with your consent).</li>
              <li>To analyse website usage and improve our content and user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Sharing of Information</h2>
            <p className="text-gray-700">
              We do not sell your personal data. We may share information with trusted third-party
              service providers (such as email platforms and analytics services) solely to operate our
              website and services. These providers are bound by confidentiality obligations and are
              not permitted to use your data for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies</h2>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to enhance your browsing experience.
              Please see our{" "}
              <Link href="/cookies" className="text-blue-600 hover:underline">
                Cookie Policy
              </Link>{" "}
              for full details and instructions on how to manage your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Retention</h2>
            <p className="text-gray-700">
              We retain personal data only for as long as necessary to fulfil the purposes outlined in
              this policy, or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="text-gray-700 mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
            </ul>
            <p className="text-gray-700 mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:connect@ifbash.com" className="text-blue-600 hover:underline">
                connect@ifbash.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Security</h2>
            <p className="text-gray-700">
              We implement industry-standard technical and organisational measures to protect your
              personal data against unauthorised access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. The date at the top of this page
              reflects the most recent revision. Continued use of the website following any changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:connect@ifbash.com" className="text-blue-600 hover:underline">
                connect@ifbash.com
              </a>.
            </p>
          </section>
        </div>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</Link>
          <Link href="/contactus" className="hover:text-blue-600 transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
