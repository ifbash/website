import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Technology & Software — Ship Faster, Ship Smarter',
  description: 'Three-day change approvals. Incidents that take hours to triage. Customers who churn before anyone notices. ifBash delivers ServiceNow that automates DevOps, AIOps, and customer success.',
  keywords: [
    'ServiceNow for technology companies', 'ServiceNow SaaS', 'ServiceNow software company',
    'ServiceNow DevOps', 'tech company ServiceNow implementation', 'ServiceNow ITSM tech',
    'agentic AI for software companies', 'ServiceNow high-growth companies',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Technology & Software — Ship Faster | ifBash',
    description: 'Three-day change approvals. Hours to triage incidents. ifBash delivers ServiceNow that automates DevOps, AIOps, and customer success.',
    url: 'https://ifbash.com/industries/technology-software-companies',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/technology-software-companies' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
