import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import { LocaleDirection } from '@/components/locale-direction';
import { ScrollProgress } from '@/components/scroll-progress';

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
  // The home page is a client component, so it cannot export metadata of its
  // own and this is the only place its canonical can live. Every other route
  // sets its own — the /services/* and /company/* layouts, the [slug] pages via
  // generateMetadata, /ar/* via alternatesForAr — so nothing inherits this by
  // accident. Add a canonical alongside any new page rather than relying on it.
  alternates: { canonical: '/' },
  title: {
    default: 'ifBash | ServiceNow Delivery, and the AI Layer On Top',
    template: '%s | ifBash',
  },
  description:
    'ifBash implements and runs ServiceNow — then builds the AI layer on top of it: agents, virtual assistants, and Now Assist work engineered on Claude. We build the web and mobile surfaces those agents live in. A written plan back within two working days.',
  keywords: [
    'ServiceNow partner', 'ServiceNow specialists', 'ServiceNow consulting',
    'ServiceNow implementation', 'ServiceNow managed services',
    'ITSM implementation', 'ServiceNow CRM', 'ServiceNow Now Assist',
    'AI agents', 'agentic AI', 'voice AI agents', 'AI engineering', 'Claude AI development',
    'AI consulting', 'RAG knowledge assistant', 'workflow automation',
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
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — ServiceNow, AI Agents, Web & Mobile' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ifbashx',
    creator: '@ifbashx',
    title: 'ifBash | ServiceNow Delivery, and the AI Layer On Top',
    description:
      'We implement and run ServiceNow, then build the AI layer on top — agents and assistants engineered on Claude. One team, start to finish.',
    images: ['/images/og-card.png'],
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
        <ScrollProgress />
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
