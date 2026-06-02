import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Cloud Observability — Unified Service Visibility | ifBash',
  description: 'Break down monitoring silos and resolve issues faster. 80% faster root cause analysis. 60% reduction in MTTR. ifBash delivers cloud observability.',
  keywords: [
    'ServiceNow cloud observability',
    'service observability',
    'SLO',
    'unified monitoring',
    'MTTR reduction',
    'observability platform'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Cloud Observability — Unified Service Visibility | ifBash',
    description: 'Break down monitoring silos and resolve issues faster. 80% faster root cause analysis. 60% reduction in MTTR. ifBash delivers cloud observability.',
    url: 'https://ifbash.com/portfolio/servicenow-cloud-observability',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/servicenow-cloud-observability' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
