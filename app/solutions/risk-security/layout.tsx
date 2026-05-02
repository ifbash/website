import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Risk & Security Solutions',
  description: 'Strengthen enterprise security with ServiceNow and AI. ifBash implements SecOps, IRM, GRC, AI-powered threat intelligence, and vulnerability management workflows that protect and maintain compliance.',
  keywords: [
    'ServiceNow SecOps', 'ServiceNow GRC', 'ServiceNow IRM', 'ServiceNow security operations',
    'ServiceNow risk management', 'ServiceNow vulnerability management', 'AI security ServiceNow',
    'ServiceNow compliance automation', 'ServiceNow threat intelligence',
  ],
  openGraph: {
    title: 'ServiceNow Risk & Security Solutions | ifBash',
    description: 'Strengthen security with ServiceNow SecOps, GRC, IRM, and AI-powered threat intelligence.',
    url: 'https://ifbash.com/solutions/risk-security',
  },
  alternates: { canonical: 'https://ifbash.com/solutions/risk-security' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
