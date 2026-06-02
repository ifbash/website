import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SPM — Strategic Portfolio Management | ifBash',
  description: 'Align your organization on a single platform with 360-degree visibility from strategy to business outcomes. ifBash delivers SPM.',
  keywords: [
    'ServiceNow SPM',
    'strategic portfolio management',
    'ITBM',
    'project portfolio management',
    'agile development',
    'demand management',
    'innovation management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SPM — Strategic Portfolio Management | ifBash',
    description: 'Align your organization on a single platform with 360-degree visibility from strategy to business outcomes. ifBash delivers SPM.',
    url: 'https://ifbash.com/portfolio/strategic-portfolio-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/strategic-portfolio-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
