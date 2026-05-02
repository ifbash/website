import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Implementation Services & Consulting',
  description: 'Expert ServiceNow implementation in 73 days average. 1,500+ successful projects, 50+ certified consultants. ITSM, HR, CSM, AI, and full-platform digital transformation worldwide.',
  keywords: [
    'ServiceNow implementation', 'ServiceNow consulting', 'ServiceNow partner',
    'ServiceNow implementation services', 'ServiceNow ITSM implementation',
    'ServiceNow consulting firm', 'ServiceNow implementation partner',
    'ServiceNow digital transformation', 'ServiceNow certified partner',
  ],
  openGraph: {
    title: 'ServiceNow Implementation Services & Consulting | ifBash',
    description: 'Expert ServiceNow implementation in 73 days average. 1,500+ successful projects. Certified consultants for ITSM, HR, CSM, and AI.',
    url: 'https://ifbash.com/services/servicenow-implementation',
  },
  alternates: { canonical: 'https://ifbash.com/services/servicenow-implementation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
