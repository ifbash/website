import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Privacy Management — Data Privacy Compliance | ifBash',
  description: 'Identify and manage privacy risks across the enterprise with workflow automation.',
  keywords: [
    'ServiceNow privacy management',
    'GDPR',
    'CCPA',
    'HIPAA',
    'privacy compliance',
    'data protection',
    'ROPA',
    'PIA'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Privacy Management — Data Privacy Compliance | ifBash',
    description: 'Identify and manage privacy risks across the enterprise with workflow automation.',
    url: 'https://ifbash.com/portfolio/privacy-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/privacy-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
