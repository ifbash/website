import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Implementation — Go-Live in Weeks, Not Quarters',
  description: 'Pre-built accelerators, parallel workstreams, and phase gates that catch scope creep. ServiceNow implementations scoped in writing within two working days of the first call.',
  keywords: [
    // 'ServiceNow partner' is a query we target, not a badge we claim — the
    // page's FAQ answers it honestly, which is what makes ranking for it fair.
    'ServiceNow partner', 'ServiceNow specialists',
    'ServiceNow implementation', 'ServiceNow consulting',
    'ServiceNow implementation services', 'ServiceNow ITSM implementation',
    'ServiceNow consulting firm', 'ServiceNow implementation partner',
    'ServiceNow digital transformation', 'ServiceNow platform specialists',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Implementation — Go-Live in Weeks, Not Quarters | ifBash',
    description: 'Pre-built accelerators, parallel workstreams, and phase gates that catch scope creep. The team that scopes it builds it.',
    url: 'https://ifbash.com/services/servicenow-implementation',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/servicenow-implementation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
