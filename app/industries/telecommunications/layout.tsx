import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Telecommunications — Automate Your Network Operations',
  description: 'Field dispatch by printout. Alerts from three NMS with no correlation. 5G rollouts tracked in spreadsheets. ifBash delivers ServiceNow that automates network ops, field service, and deployment.',
  keywords: [
    'ServiceNow telecommunications', 'ServiceNow for telecoms', 'telecom ServiceNow implementation',
    'ServiceNow BSS OSS', 'telecom AI automation', 'ServiceNow network management',
    '5G deployment ServiceNow', 'telco ServiceNow consulting',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Telecommunications — Automate Network Ops | ifBash',
    description: 'Field dispatch by printout. Alerts with no correlation. ifBash delivers ServiceNow that automates network ops, field service, and 5G deployment.',
    url: 'https://ifbash.com/industries/telecommunications',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/telecommunications' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
