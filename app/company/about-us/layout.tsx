import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ifBash | ServiceNow & Agentic AI Consulting Partner',
  description: 'ifBash is a ServiceNow and agentic AI consulting partner headquartered in Hyderabad, India. 1,500+ implementations, 50+ certified consultants, serving global enterprises since 2016.',
  keywords: [
    'about ifBash', 'ifBash ServiceNow partner', 'ServiceNow consulting firm India',
    'ServiceNow partner Hyderabad', 'agentic AI consulting company', 'ServiceNow implementation company',
    'ServiceNow certified consultants', 'ifBash about',
  ],
  openGraph: {
    title: 'About ifBash | ServiceNow & Agentic AI Consulting Partner',
    description: 'ServiceNow and agentic AI consulting partner. Hyderabad, India. 1,500+ implementations, 50+ certified consultants since 2016.',
    url: 'https://ifbash.com/company/about-us',
  },
  alternates: { canonical: 'https://ifbash.com/company/about-us' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
