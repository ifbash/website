import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow CPQ — AI-Powered Configure Price Quote | ifBash',
  description: 'AI-powered CPQ that drives omnichannel revenue. 40% faster quote processing. Powers 85% of Fortune 500.',
  keywords: [
    'ServiceNow CPQ',
    'configure price quote',
    'guided selling',
    'dynamic pricing',
    'quote automation',
    'subscription management',
    'sales configuration'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow CPQ — AI-Powered Configure Price Quote | ifBash',
    description: 'AI-powered CPQ that drives omnichannel revenue. 40% faster quote processing. Powers 85% of Fortune 500.',
    url: 'https://ifbash.com/portfolio/configure-price-quote',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/configure-price-quote' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
