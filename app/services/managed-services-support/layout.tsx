import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Managed Services & 24/7 Support',
  description: '24/7 ServiceNow managed services from certified experts. Platform health monitoring, AI-powered optimisation, upgrades, and ongoing support to maximise your ServiceNow investment.',
  keywords: [
    'ServiceNow managed services', 'ServiceNow support', 'ServiceNow managed services provider',
    'ServiceNow 24/7 support', 'ServiceNow platform management', 'ServiceNow optimisation',
    'ServiceNow upgrade support', 'ServiceNow ongoing support',
  ],
  openGraph: {
    title: 'ServiceNow Managed Services & 24/7 Support | ifBash',
    description: '24/7 ServiceNow managed services. Platform health monitoring, upgrades, and continuous optimisation from certified experts.',
    url: 'https://ifbash.com/services/managed-services-support',
  },
  alternates: { canonical: 'https://ifbash.com/services/managed-services-support' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
