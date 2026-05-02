import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Manufacturing',
  description: 'Drive manufacturing efficiency with ServiceNow and AI. Predictive maintenance, asset management, AI-powered production workflows, and supply chain optimisation for global manufacturers.',
  keywords: [
    'ServiceNow manufacturing', 'ServiceNow for manufacturers', 'manufacturing ServiceNow implementation',
    'ServiceNow predictive maintenance', 'manufacturing AI automation', 'ServiceNow asset management manufacturing',
    'ServiceNow supply chain', 'industrial ServiceNow consulting',
  ],
  openGraph: {
    title: 'ServiceNow for Manufacturing | ifBash',
    description: 'Drive manufacturing efficiency with ServiceNow AI. Predictive maintenance, asset management, and intelligent production workflows.',
    url: 'https://ifbash.com/industries/manufacturing-solutions',
  },
  alternates: { canonical: 'https://ifbash.com/industries/manufacturing-solutions' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
