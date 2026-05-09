import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Energy & Utilities — Modernise Your Grid Operations',
  description: 'Aging infrastructure. Renewable integration. Regulatory pressure. ifBash delivers ServiceNow that unifies grid data, automates outage response, and provides the evidence layer for compliance.',
  keywords: [
    'ServiceNow energy utilities', 'ServiceNow for energy companies', 'energy ServiceNow implementation',
    'ServiceNow smart grid', 'utility AI automation', 'ServiceNow asset management energy',
    'NERC CIP ServiceNow', 'utilities digital transformation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Energy & Utilities — Modernise Your Grid | ifBash',
    description: 'Aging infrastructure. Renewable integration. Regulatory pressure. ifBash delivers ServiceNow that unifies grid data and automates outage response.',
    url: 'https://ifbash.com/industries/energy-utilities',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/energy-utilities' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
