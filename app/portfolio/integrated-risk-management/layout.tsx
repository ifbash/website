import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow IRM — Integrated Risk Management | ifBash',
  description: 'Make risk-informed decisions and increase efficiency with integrated risk management.',
  keywords: [
    'ServiceNow IRM',
    'integrated risk management',
    'GRC',
    'policy compliance',
    'operational risk',
    'audit management',
    'regulatory change'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow IRM — Integrated Risk Management | ifBash',
    description: 'Make risk-informed decisions and increase efficiency with integrated risk management.',
    url: 'https://ifbash.com/portfolio/integrated-risk-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/integrated-risk-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
