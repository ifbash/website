import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Implementation — Go-Live in 73 Days, Not 9 Months',
  description: 'Pre-built accelerators. Parallel workstreams. Phase gates that catch scope creep. 1,500+ implementations — we know what breaks and what doesn\'t. ifBash delivers ServiceNow implementations in 73 days average.',
  keywords: [
    'ServiceNow implementation', 'ServiceNow consulting', 'ServiceNow partner',
    'ServiceNow implementation services', 'ServiceNow ITSM implementation',
    'ServiceNow consulting firm', 'ServiceNow implementation partner',
    'ServiceNow digital transformation', 'ServiceNow certified partner',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Implementation — Go-Live in 73 Days | ifBash',
    description: 'Pre-built accelerators. Parallel workstreams. Phase gates that catch scope creep. ifBash delivers ServiceNow implementations in 73 days average.',
    url: 'https://ifbash.com/services/servicenow-implementation',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/servicenow-implementation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
