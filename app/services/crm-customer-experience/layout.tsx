import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow CRM & Customer Experience — CRM That Converts, Relationships That Last',
  description: 'Unify every customer channel into a single ServiceNow platform. AI handles routine conversations. Agents handle what matters. 89% CSAT, 60% faster handle time, 7 channels unified.',
  keywords: [
    'ServiceNow CRM', 'ServiceNow customer experience', 'ServiceNow CSM',
    'ServiceNow CRM consulting', 'ServiceNow AI CRM', 'customer service management ServiceNow',
    'ServiceNow field service management', 'ServiceNow experience platform',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow CRM — CRM That Converts, Relationships That Last | ifBash',
    description: 'Unify every customer channel into a single ServiceNow platform. AI handles routine conversations. 89% CSAT, 60% faster handle time.',
    url: 'https://ifbash.com/services/crm-customer-experience',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/crm-customer-experience' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
