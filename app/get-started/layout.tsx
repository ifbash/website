import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started with ServiceNow & AI Consulting',
  description: 'Tell us what you need — ServiceNow, an AI agent, an app, or a site. You get a written plan within 48 hours: approach, sequence, team, and an estimate you can budget against.',
  keywords: [
    'ServiceNow consulting enquiry', 'ServiceNow implementation quote', 'hire ServiceNow consultant',
    'ServiceNow consultant contact', 'agentic AI consulting contact', 'ServiceNow project start',
  ],
  openGraph: {
    title: 'Get Started with ServiceNow & AI Consulting | ifBash',
    description: 'Tell us what you need. A written plan within 48 hours — approach, sequence, team, and estimate.',
    url: 'https://ifbash.com/get-started',
  },
  alternates: { canonical: 'https://ifbash.com/get-started' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
