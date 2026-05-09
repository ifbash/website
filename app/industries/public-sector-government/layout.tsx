import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Government & Public Sector — Respond in Hours, Not Weeks',
  description: 'Phone lines. Paper forms. Weeks of waiting. ifBash delivers FedRAMP-authorised ServiceNow that digitises citizen services, connects legacy systems, and makes government actually responsive.',
  keywords: [
    'ServiceNow government', 'ServiceNow public sector', 'government ServiceNow implementation',
    'ServiceNow citizen experience', 'FedRAMP ServiceNow', 'ServiceNow compliance government',
    'government digital transformation', 'ServiceNow federal',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Government — Respond in Hours, Not Weeks | ifBash',
    description: 'Phone lines. Paper forms. Weeks of waiting. ifBash delivers FedRAMP-authorised ServiceNow that digitises citizen services and connects legacy systems.',
    url: 'https://ifbash.com/industries/public-sector-government',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/public-sector-government' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
