import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Energy & Utilities',
  description: 'Modernise energy operations with ServiceNow and AI. Smart grid management, regulatory compliance automation, predictive asset maintenance, and sustainability reporting for energy and utility companies.',
  keywords: [
    'ServiceNow energy utilities', 'ServiceNow for energy companies', 'energy ServiceNow implementation',
    'ServiceNow smart grid', 'utility AI automation', 'ServiceNow asset management energy',
    'energy compliance ServiceNow', 'utilities digital transformation',
  ],
  openGraph: {
    title: 'ServiceNow for Energy & Utilities | ifBash',
    description: 'Modernise energy operations with ServiceNow AI. Smart grid management, compliance automation, and predictive asset maintenance.',
    url: 'https://ifbash.com/industries/energy-utilities',
  },
  alternates: { canonical: 'https://ifbash.com/industries/energy-utilities' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
