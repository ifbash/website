import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Implementation — Go-Live in Weeks, Not Quarters',
  description: 'Pre-built accelerators, parallel workstreams, and phase gates that catch scope creep. Senior-led ServiceNow implementations, scoped in writing within 48 hours of the first call.',
  keywords: [
    'ServiceNow implementation', 'ServiceNow consulting', 'ServiceNow partner',
    'ServiceNow implementation services', 'ServiceNow ITSM implementation',
    'ServiceNow consulting firm', 'ServiceNow implementation partner',
    'ServiceNow digital transformation', 'ServiceNow platform specialists',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Implementation — Go-Live in Weeks, Not Quarters | ifBash',
    description: 'Pre-built accelerators, parallel workstreams, and phase gates that catch scope creep. Senior-led ServiceNow delivery.',
    url: 'https://ifbash.com/services/servicenow-implementation',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/servicenow-implementation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
