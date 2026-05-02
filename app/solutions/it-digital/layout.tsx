import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow IT & Digital Workflow Solutions',
  description: 'Modernise IT with ServiceNow ITSM, ITOM, ITAM, and AI. ifBash implements intelligent IT service delivery, AIOps, and Now Assist to automate and optimise enterprise technology operations.',
  keywords: [
    'ServiceNow ITSM', 'ServiceNow IT workflows', 'ServiceNow ITOM', 'ServiceNow ITAM',
    'ServiceNow AIOps', 'IT service management ServiceNow', 'ServiceNow IT automation',
    'ServiceNow Now Assist IT', 'enterprise IT ServiceNow',
  ],
  openGraph: {
    title: 'ServiceNow IT & Digital Workflow Solutions | ifBash',
    description: 'Modernise IT with ServiceNow ITSM, AIOps, and Now Assist. Intelligent IT service delivery and automation.',
    url: 'https://ifbash.com/solutions/it-digital',
  },
  alternates: { canonical: 'https://ifbash.com/solutions/it-digital' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
