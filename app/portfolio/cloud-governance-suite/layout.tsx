import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Cloud Governance — Automated Cloud Compliance | ifBash',
  description: 'Automate cloud governance for compliance, security, and costs. 70% faster compliance reporting. 40% cost optimization.',
  keywords: [
    'ServiceNow cloud governance',
    'cloud compliance',
    'cloud security',
    'cloud cost management',
    'multi-cloud governance',
    'cloud automation'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Cloud Governance — Automated Cloud Compliance | ifBash',
    description: 'Automate cloud governance for compliance, security, and costs. 70% faster compliance reporting. 40% cost optimization.',
    url: 'https://ifbash.com/portfolio/cloud-governance-suite',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/cloud-governance-suite' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
