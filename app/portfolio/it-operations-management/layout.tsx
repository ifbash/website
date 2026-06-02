import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow ITOM — AI-Powered IT Operations Management | ifBash',
  description: 'Gain full visibility across on-premises and cloud infrastructure. AIOps eliminates 99% of false positives. 60% faster cloud adoption. ifBash delivers enterprise ITOM.',
  keywords: [
    'ServiceNow ITOM',
    'IT operations management',
    'ServiceNow Discovery',
    'Service Mapping',
    'AIOps',
    'IT operations visibility',
    'cloud management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow ITOM — AI-Powered IT Operations Management | ifBash',
    description: 'Gain full visibility across on-premises and cloud infrastructure. AIOps eliminates 99% of false positives. 60% faster cloud adoption. ifBash delivers enterprise ITOM.',
    url: 'https://ifbash.com/portfolio/it-operations-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/it-operations-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
