import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Automotive & Manufacturing',
  description: 'Transform automotive operations with ServiceNow. Connected vehicle workflows, supplier lifecycle management, AI-powered production monitoring, and EV transition support for automotive leaders.',
  keywords: [
    'ServiceNow automotive', 'ServiceNow for automotive industry', 'automotive ServiceNow implementation',
    'ServiceNow vehicle management', 'automotive AI automation', 'ServiceNow supplier management automotive',
    'connected vehicle ServiceNow', 'automotive digital transformation',
  ],
  openGraph: {
    title: 'ServiceNow for Automotive & Manufacturing | ifBash',
    description: 'Transform automotive operations with ServiceNow. Connected vehicle workflows, supplier management, and AI-powered production monitoring.',
    url: 'https://ifbash.com/industries/automotive-manufacturing',
  },
  alternates: { canonical: 'https://ifbash.com/industries/automotive-manufacturing' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
