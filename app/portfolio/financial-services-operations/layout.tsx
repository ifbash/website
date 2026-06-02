import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow FSO — Financial Services Operations | ifBash',
  description: 'Connect your entire financial institution. Disputes built with Visa. AI-powered risk and compliance.',
  keywords: [
    'ServiceNow FSO',
    'financial services operations',
    'banking operations',
    'disputes management',
    'Visa compliance',
    'payment operations'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow FSO — Financial Services Operations | ifBash',
    description: 'Connect your entire financial institution. Disputes built with Visa. AI-powered risk and compliance.',
    url: 'https://ifbash.com/portfolio/financial-services-operations',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/financial-services-operations' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
