import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SOW — Unified Service Operations Workspace | ifBash',
  description: 'Predict, prevent, and resolve incidents from a single workspace. 67% fewer incidents. 78% faster MTTR. ifBash delivers unified operations.',
  keywords: [
    'ServiceNow SOW',
    'Service Operations Workspace',
    'unified operations',
    'incident management',
    'agent workspace',
    'IT operations'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SOW — Unified Service Operations Workspace | ifBash',
    description: 'Predict, prevent, and resolve incidents from a single workspace. 67% fewer incidents. 78% faster MTTR. ifBash delivers unified operations.',
    url: 'https://ifbash.com/portfolio/service-operations-workspace',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/service-operations-workspace' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
