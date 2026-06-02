import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow EA — Enterprise Architecture Consulting | ifBash',
  description: 'Data-driven insights to assess, monitor, and align your application portfolio to business capabilities. 30% average cost reduction.',
  keywords: [
    'ServiceNow enterprise architecture',
    'EA',
    'application rationalization',
    'technology portfolio management',
    'APM',
    'business capability management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow EA — Enterprise Architecture Consulting | ifBash',
    description: 'Data-driven insights to assess, monitor, and align your application portfolio to business capabilities. 30% average cost reduction.',
    url: 'https://ifbash.com/portfolio/enterprise-architecture',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/enterprise-architecture' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
