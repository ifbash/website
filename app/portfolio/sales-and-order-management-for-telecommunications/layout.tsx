import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SOM for Telecom — Sales & Order Management | ifBash',
  description: 'Streamline lead-to-cash for telecommunications with AI-powered CPQ and intelligent order management.',
  keywords: [
    'ServiceNow SOM',
    'telecom',
    'lead-to-cash',
    'CPQ',
    'order management',
    'CSP',
    'sales automation'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SOM for Telecom — Sales & Order Management | ifBash',
    description: 'Streamline lead-to-cash for telecommunications with AI-powered CPQ and intelligent order management.',
    url: 'https://ifbash.com/portfolio/sales-and-order-management-for-telecommunications',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/sales-and-order-management-for-telecommunications' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
