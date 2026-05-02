import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Employee Workflow Solutions',
  description: 'Create seamless employee experiences with ServiceNow. ifBash implements HR Service Delivery, onboarding automation, Now Assist for HR, and AI-powered workplace service platforms.',
  keywords: [
    'ServiceNow employee experience', 'ServiceNow HR service delivery', 'ServiceNow HRSD',
    'ServiceNow onboarding automation', 'ServiceNow Now Assist HR', 'employee experience AI',
    'ServiceNow workplace service delivery', 'HR workflow ServiceNow',
  ],
  openGraph: {
    title: 'ServiceNow Employee Workflow Solutions | ifBash',
    description: 'Seamless employee experiences with ServiceNow HR Service Delivery, onboarding automation, and Now Assist.',
    url: 'https://ifbash.com/solutions/employee',
  },
  alternates: { canonical: 'https://ifbash.com/solutions/employee' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
