import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SOM for Technology Providers — Sales & Order | ifBash',
  description: 'Streamline lead-to-cash for technology providers with AI-powered CPQ and intelligent order management.',
  keywords: [
    'ServiceNow SOM',
    'technology providers',
    'lead-to-cash',
    'CPQ',
    'order management',
    'sales automation',
    'XaaS'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SOM for Technology Providers — Sales & Order | ifBash',
    description: 'Streamline lead-to-cash for technology providers with AI-powered CPQ and intelligent order management.',
    url: 'https://ifbash.com/portfolio/sales-and-order-management-for-technology-providers',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/sales-and-order-management-for-technology-providers' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
