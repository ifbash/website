import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started with ServiceNow & AI Consulting',
  description: 'Start your ServiceNow or agentic AI transformation with ifBash. Share your project goals and our certified consultants respond within 24 hours with a tailored implementation plan.',
  keywords: [
    'ServiceNow consulting enquiry', 'ServiceNow implementation quote', 'hire ServiceNow consultant',
    'ServiceNow partner contact', 'agentic AI consulting contact', 'ServiceNow project start',
  ],
  openGraph: {
    title: 'Get Started with ServiceNow & AI Consulting | ifBash',
    description: 'Start your ServiceNow or agentic AI project. Our certified consultants respond within 24 hours.',
    url: 'https://ifbash.com/get-started',
  },
  alternates: { canonical: 'https://ifbash.com/get-started' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
