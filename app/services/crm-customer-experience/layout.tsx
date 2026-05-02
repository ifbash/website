import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow CRM & Customer Experience Consulting',
  description: 'Transform customer and employee experiences with ServiceNow CRM. ifBash delivers CSM, FSM, and AI-powered experience platforms with 89% satisfaction improvement and 78% faster response times.',
  keywords: [
    'ServiceNow CRM', 'ServiceNow customer experience', 'ServiceNow CSM',
    'ServiceNow CRM consulting', 'ServiceNow AI CRM', 'customer service management ServiceNow',
    'ServiceNow field service management', 'ServiceNow experience platform',
  ],
  openGraph: {
    title: 'ServiceNow CRM & Customer Experience Consulting | ifBash',
    description: 'Transform customer and employee experiences with ServiceNow CRM. CSM, FSM, and AI-powered experience platforms with 89% satisfaction improvement.',
    url: 'https://ifbash.com/services/crm-customer-experience',
  },
  alternates: { canonical: 'https://ifbash.com/services/crm-customer-experience' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
