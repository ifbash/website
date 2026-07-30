import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | ifBash",
  description: "How ifBash uses cookies and similar tracking technologies on its website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-wash">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sea hover:text-sea-deep text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-sea-tint">
              <Cookie className="h-6 w-6 text-sea" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink">Cookie Policy</h1>
          </div>
          <p className="text-slate-light text-sm">Last updated: May 1, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <p className="text-slate text-lg leading-relaxed">
              This Cookie Policy explains what cookies are, how ifBash uses them on this website,
              and how you can control your cookie preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">1. What Are Cookies?</h2>
            <p className="text-slate">
              Cookies are small text files placed on your device when you visit a website. They are
              widely used to make websites work more efficiently and to provide information to the
              site owners. Cookies can be &ldquo;session&rdquo; cookies (deleted when you close your
              browser) or &ldquo;persistent&rdquo; cookies (remaining on your device for a set period).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">2. How We Use Cookies</h2>
            <p className="text-slate mb-4">We use the following categories of cookies:</p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-hairline p-5">
                <h3 className="font-semibold text-ink mb-2">Strictly Necessary Cookies</h3>
                <p className="text-slate text-sm">
                  These cookies are essential for the website to function correctly. They enable core
                  functionality such as security and page navigation. You cannot opt out of these
                  cookies as the website cannot function without them.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-hairline p-5">
                <h3 className="font-semibold text-ink mb-2">Analytics Cookies</h3>
                <p className="text-slate text-sm">
                  We use analytics tools (such as Google Analytics) to understand how visitors
                  interact with our website — which pages are visited, how long users stay, and how
                  they arrived. This helps us improve our content and user experience. The data
                  collected is aggregated and anonymised.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-hairline p-5">
                <h3 className="font-semibold text-ink mb-2">Functional Cookies</h3>
                <p className="text-slate text-sm">
                  These cookies remember your preferences (such as language or region) to provide
                  an enhanced, personalised experience on return visits.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-hairline p-5">
                <h3 className="font-semibold text-ink mb-2">Marketing Cookies</h3>
                <p className="text-slate text-sm">
                  These cookies may be set by our advertising partners to build a profile of your
                  interests and show you relevant adverts on other sites. They do not directly store
                  personal information but uniquely identify your browser and device.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">3. Managing Your Cookie Preferences</h2>
            <p className="text-slate mb-3">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate">
              <li>
                <strong>Browser settings</strong> — Most browsers allow you to refuse cookies or
                delete existing ones. Refer to your browser&rsquo;s help documentation for instructions.
              </li>
              <li>
                <strong>Opt-out tools</strong> — For analytics cookies, you can install the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sea hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
            </ul>
            <p className="text-slate mt-3">
              Please note that disabling certain cookies may affect the functionality and
              performance of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">4. Third-Party Cookies</h2>
            <p className="text-slate">
              Some cookies on this site are set by third-party services that appear on our pages
              (for example, embedded videos or social media share buttons). We do not control
              these third-party cookies; please refer to the relevant third party&rsquo;s privacy and
              cookie policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">5. Changes to This Policy</h2>
            <p className="text-slate">
              We may update this Cookie Policy periodically. The date at the top of this page
              reflects the most recent revision. We encourage you to check this page occasionally
              for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">6. Contact Us</h2>
            <p className="text-slate">
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="mailto:connect@ifbash.com" className="text-sea hover:underline">
                connect@ifbash.com
              </a>.
            </p>
          </section>
        </div>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-hairline flex flex-wrap gap-4 text-sm text-slate-light">
          <Link href="/privacy" className="hover:text-sea transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-sea transition-colors">Terms of Service</Link>
          <Link href="/contactus" className="hover:text-sea transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
