import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & ServiceNow Jobs | Join Our Remote-First Team',
  description: 'Join ifBash — a remote-first ServiceNow consulting firm with 50+ experts across 6 countries. Competitive salary, learning budget, certification sponsorship, flexible hours. View open positions.',
  keywords: [
    'ServiceNow jobs', 'ServiceNow careers', 'ServiceNow developer jobs India',
    'remote ServiceNow jobs', 'ServiceNow consultant careers', 'ifBash careers',
    'ServiceNow architect jobs Hyderabad', 'tech jobs India remote',
  ],
  openGraph: {
    title: 'Careers at ifBash | ServiceNow Jobs & Remote Work',
    description: 'Join a 50+ person remote-first ServiceNow team. Competitive pay, learning budget, flexible hours. View open positions today.',
    url: 'https://ifbash.com/company/careers-servicenow-jobs',
  },
  alternates: { canonical: 'https://ifbash.com/company/careers-servicenow-jobs' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
