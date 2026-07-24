import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & ServiceNow Jobs | Join Our Remote-First Team',
  description: 'Join ifBash — a remote-first team working across ServiceNow delivery, AI agents, and product engineering. Senior-led work, learning budget, certification support, flexible hours.',
  keywords: [
    'ServiceNow jobs', 'ServiceNow careers', 'ServiceNow developer jobs India',
    'remote ServiceNow jobs', 'ServiceNow consultant careers', 'ifBash careers',
    'ServiceNow architect jobs Hyderabad', 'tech jobs India remote',
  ],
  openGraph: {
    title: 'Careers at ifBash | ServiceNow Jobs & Remote Work',
    description: 'Join a remote-first team across ServiceNow, AI agents, and product engineering. Senior-led work and flexible hours.',
    url: 'https://ifbash.com/company/careers-servicenow-jobs',
  },
  alternates: { canonical: 'https://ifbash.com/company/careers-servicenow-jobs' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
