import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Life Sciences & Pharma',
  description: 'Advance pharmaceutical and life sciences operations with ServiceNow and AI. FDA-compliant workflows, clinical trial management, pharmacovigilance automation, and GxP process control.',
  keywords: [
    'ServiceNow life sciences', 'ServiceNow pharma', 'ServiceNow pharmaceutical',
    'FDA compliant ServiceNow', 'ServiceNow clinical trials', 'pharma AI automation',
    'ServiceNow GxP', 'life sciences digital transformation ServiceNow',
  ],
  openGraph: {
    title: 'ServiceNow for Life Sciences & Pharma | ifBash',
    description: 'FDA-compliant ServiceNow for pharma. Clinical trial management, pharmacovigilance, and AI-powered GxP workflows.',
    url: 'https://ifbash.com/industries/life-sciences-pharma',
  },
  alternates: { canonical: 'https://ifbash.com/industries/life-sciences-pharma' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
