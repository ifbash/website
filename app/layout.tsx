import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import { LocaleDirection } from '@/components/locale-direction';

/**
 * One superfamily across the whole site: IBM Plex.
 *
 * /ar already loads IBM Plex Sans Arabic (app/ar/layout.tsx), so the Latin and
 * Arabic surfaces now share a type system instead of running three unrelated
 * families. Plex was drawn for enterprise software, which is the posture we
 * want — precise and systems-minded rather than editorial.
 *
 * Replaced Libre Baskerville (a *body* face pressed into display work, which
 * forced the display scale down ~18%) and Geist (Vercel's default; reads as a
 * framework default rather than a choice).
 *
 * --font-display is deliberately kept as the variable name so the 16 files
 * using `.font-display` need no change — only the family behind it moved.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ifbash.com'),
  title: {
    default: 'ifBash | ServiceNow Delivery, and the AI Layer On Top',
    template: '%s | ifBash',
  },
  description:
    'ifBash implements and runs ServiceNow — then builds the AI layer on top of it: agents, virtual assistants, and Now Assist work engineered on Claude. We build the web and mobile surfaces those agents live in. A written plan back within two working days.',
  keywords: [
    // ServiceNow practice. 'ServiceNow partner' is here as a SEARCH TERM we
    // want to be found for — buyers type it. It is NOT a claim: the FAQ on
    // /services/servicenow-implementation answers it with a plain "no", which
    // is what actually earns the ranking. Never put it in visible copy.
    'ServiceNow partner', 'ServiceNow specialists', 'ServiceNow consulting',
    'ServiceNow implementation', 'ServiceNow managed services',
    'ITSM implementation', 'ServiceNow CRM', 'ServiceNow Now Assist',
    // AI & agents practice
    'AI agents', 'agentic AI', 'voice AI agents', 'AI engineering', 'Claude AI development',
    'AI consulting', 'RAG knowledge assistant', 'workflow automation',
    // Web & mobile practice
    'web development agency', 'Next.js development', 'mobile app development',
    'iOS app development', 'Android app development', 'AI-native product development',
  ],
  authors: [{ name: 'ifBash', url: 'https://ifbash.com' }],
  creator: 'ifBash',
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    locale: 'en_US',
    url: 'https://ifbash.com',
    title: 'ifBash | ServiceNow Delivery, and the AI Layer On Top',
    description:
      'A technology consultancy across three practices: ServiceNow delivery, AI agents engineered on Claude, and web & mobile product development.',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow, AI Agents, Web & Mobile' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ifbashx',
    creator: '@ifbashx',
    title: 'ifBash | ServiceNow Delivery, and the AI Layer On Top',
    description:
      'We implement and run ServiceNow, then build the AI layer on top — agents and assistants engineered on Claude. One team, start to finish.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${plexSans.variable} ${plexMono.variable} font-sans h-full`}
      >
        {/* The leadsy.ai visitor-identification tag was removed 2026-07-25.
            Verified broken on the LIVE domain, not just locally: it threw
            `TypeError: Failed to fetch` from r2.leadsy.ai/tag.js on every page
            load at https://ifbash.com, so it was collecting nothing while
            being the site's only console error — and the only third party that
            could set cookies, which made a consent banner necessary for no
            benefit. Restore only if the vendor confirms the tag works:
            <Script id="vtag-ai-js" src="https://r2.leadsy.ai/tag.js"
              data-pid="fBDjy1VonTY1EGcO" data-version="062024"
              strategy="afterInteractive" />
            ...re-add `import Script from 'next/script'`, and put r2.leadsy.ai back
            into script-src/connect-src in next.config.js. */}
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="relative min-h-screen flex flex-col">
          <LocaleDirection />
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          <main id="main" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
