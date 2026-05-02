import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Customer Workflow Solutions',
  description: 'Deliver exceptional customer experiences with ServiceNow and AI. ifBash implements Customer Service Management, Field Service Management, and AI-powered service platforms that drive loyalty.',
  keywords: [
    'ServiceNow customer workflows', 'ServiceNow CSM', 'ServiceNow field service',
    'ServiceNow customer service management', 'ServiceNow AI customer service',
    'ServiceNow Now Assist customer', 'customer experience ServiceNow', 'FSM ServiceNow',
  ],
  openGraph: {
    title: 'ServiceNow Customer Workflow Solutions | ifBash',
    description: 'Exceptional customer experiences with ServiceNow CSM, FSM, and AI-powered service platforms.',
    url: 'https://ifbash.com/solutions/customer',
  },
  alternates: { canonical: 'https://ifbash.com/solutions/customer' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
