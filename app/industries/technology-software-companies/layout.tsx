import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Technology & Software Companies',
  description: 'Accelerate tech operations with ServiceNow and agentic AI. ifBash implements ITSM, DevOps, Now Assist, and AI-powered workflows that scale with high-growth SaaS and software companies.',
  keywords: [
    'ServiceNow for technology companies', 'ServiceNow SaaS', 'ServiceNow software company',
    'ServiceNow DevOps', 'tech company ServiceNow implementation', 'ServiceNow ITSM tech',
    'agentic AI for software companies', 'ServiceNow high-growth companies',
  ],
  openGraph: {
    title: 'ServiceNow for Technology & Software Companies | ifBash',
    description: 'Scale tech operations with ServiceNow and agentic AI. ITSM, DevOps, and Now Assist for high-growth software companies.',
    url: 'https://ifbash.com/industries/technology-software-companies',
  },
  alternates: { canonical: 'https://ifbash.com/industries/technology-software-companies' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
