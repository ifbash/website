import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow CRM & Customer Experience — CRM That Converts, Relationships That Last',
  description: 'Unify every customer channel on one ServiceNow platform — CSM, sales, and field service in a single thread. AI handles routine conversations; your people handle what matters.',
  keywords: [
    'ServiceNow CRM', 'ServiceNow customer experience', 'ServiceNow CSM',
    'ServiceNow CRM consulting', 'ServiceNow AI CRM', 'customer service management ServiceNow',
    'ServiceNow field service management', 'ServiceNow experience platform',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow CRM — CRM That Converts, Relationships That Last | ifBash',
    description: 'Unify every customer channel on one ServiceNow platform. AI handles routine conversations; your people handle what matters.',
    url: 'https://ifbash.com/services/crm-customer-experience',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/crm-customer-experience' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
