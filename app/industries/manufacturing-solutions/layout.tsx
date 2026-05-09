import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Manufacturing — Eliminate Unplanned Downtime',
  description: 'Downtime isn\'t a cost of doing business — it\'s a failure of visibility. ifBash delivers ServiceNow that connects every machine, every line, and every shift on one platform.',
  keywords: [
    'ServiceNow manufacturing', 'ServiceNow for manufacturers', 'manufacturing ServiceNow implementation',
    'ServiceNow predictive maintenance', 'manufacturing AI automation', 'ServiceNow OEE',
    'ServiceNow factory floor', 'industrial ServiceNow consulting',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Manufacturing — Eliminate Unplanned Downtime | ifBash',
    description: 'Downtime isn\'t a cost of doing business. ifBash delivers ServiceNow that connects every machine, every line, and every shift on one platform.',
    url: 'https://ifbash.com/industries/manufacturing-solutions',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/manufacturing-solutions' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
