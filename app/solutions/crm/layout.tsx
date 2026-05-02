import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow CRM Solutions — Sales, Order & AI',
  description: 'Build a unified CRM on ServiceNow. ifBash delivers Sales & Order Management, configure-price-quote, Now Assist for CRM, and AI-assisted selling workflows for technology and telecom providers.',
  keywords: [
    'ServiceNow CRM solutions', 'ServiceNow sales order management', 'ServiceNow CPQ',
    'ServiceNow configure price quote', 'ServiceNow Now Assist CRM', 'AI CRM ServiceNow',
    'ServiceNow sales automation', 'ServiceNow revenue management',
  ],
  openGraph: {
    title: 'ServiceNow CRM Solutions | ifBash',
    description: 'Unified CRM on ServiceNow. Sales & Order Management, CPQ, and AI-assisted selling workflows.',
    url: 'https://ifbash.com/solutions/crm',
  },
  alternates: { canonical: 'https://ifbash.com/solutions/crm' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
