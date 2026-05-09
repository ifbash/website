import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LenisProvider } from '@/components/lenis-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ifbash.com'),
  title: {
    default: 'ifBash | ServiceNow & Agentic AI Consulting Partner',
    template: '%s | ifBash',
  },
  description: 'ifBash is a ServiceNow and agentic AI consulting partner delivering implementations, AI automation, CRM, and digital transformation for enterprises worldwide. 1,500+ successful projects.',
  keywords: [
    'ServiceNow consulting', 'ServiceNow implementation', 'ServiceNow partner',
    'agentic AI', 'ServiceNow AI', 'ServiceNow AI consulting', 'AI automation',
    'ServiceNow Now Assist', 'generative AI ServiceNow', 'ServiceNow CRM',
    'digital transformation', 'ITSM implementation', 'ServiceNow managed services',
  ],
  authors: [{ name: 'ifBash', url: 'https://ifbash.com' }],
  creator: 'ifBash',
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    locale: 'en_US',
    url: 'https://ifbash.com',
    title: 'ifBash | ServiceNow & Agentic AI Consulting Partner',
    description: 'ifBash is a ServiceNow and agentic AI consulting partner delivering implementations, AI automation, CRM, and digital transformation for enterprises worldwide.',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ifbashx',
    creator: '@ifbashx',
    title: 'ifBash | ServiceNow & Agentic AI Consulting Partner',
    description: 'ServiceNow and agentic AI consulting. 1,500+ implementations. AI automation, CRM, and digital transformation for enterprises worldwide.',
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
      <body className={`${inter.className} h-full`}>
        <div className="relative min-h-screen flex flex-col">
          <LenisProvider />
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
