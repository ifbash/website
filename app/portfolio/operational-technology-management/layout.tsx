import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow OT Management — Industrial Operations Security | ifBash',
  description: 'Gain visibility and context into your OT environment. 85% reduction in downtime. 90% security posture improvement.',
  keywords: [
    'ServiceNow OT management',
    'operational technology',
    'industrial security',
    'OT asset management',
    'OT vulnerability response',
    'IT-OT convergence'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow OT Management — Industrial Operations Security | ifBash',
    description: 'Gain visibility and context into your OT environment. 85% reduction in downtime. 90% security posture improvement.',
    url: 'https://ifbash.com/portfolio/operational-technology-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/operational-technology-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
