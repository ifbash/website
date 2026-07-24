import './globals.css';
import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LenisProvider } from '@/components/lenis-provider';
import { ChatWidget } from '@/components/chat-widget';
import { LocaleDirection } from '@/components/locale-direction';

// Display serif — Libre Baskerville. Wide, high x-height, book-like; more
// legible at large sizes than a condensed face. Ships 400 + 700 + 400 italic.
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ifbash.com'),
  title: {
    default: 'ifBash | ServiceNow · AI Agents · Web & Mobile',
    template: '%s | ifBash',
  },
  description:
    'ifBash is a technology consultancy across three practices: ServiceNow delivery, AI agents engineered on Claude, and web & mobile product development. Scoped in 48 hours, senior-led.',
  keywords: [
    // ServiceNow practice
    'ServiceNow consulting', 'ServiceNow implementation', 'ServiceNow managed services',
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
    title: 'ifBash | ServiceNow · AI Agents · Web & Mobile',
    description:
      'A technology consultancy across three practices: ServiceNow delivery, AI agents engineered on Claude, and web & mobile product development.',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow, AI Agents, Web & Mobile' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ifbashx',
    creator: '@ifbashx',
    title: 'ifBash | ServiceNow · AI Agents · Web & Mobile',
    description:
      'ServiceNow delivery, AI agents built on Claude, and web & mobile products. One senior team, scoped in 48 hours.',
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
        className={`${GeistSans.variable} ${GeistMono.variable} ${libreBaskerville.variable} font-sans h-full`}
      >
        <Script id="vtag-ai-js" src="https://r2.leadsy.ai/tag.js" data-pid="fBDjy1VonTY1EGcO" data-version="062024" strategy="afterInteractive" />
        <div className="relative min-h-screen flex flex-col">
          <LenisProvider />
          <LocaleDirection />
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
