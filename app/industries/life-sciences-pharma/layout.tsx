import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Life Sciences & Pharma Consulting — From Lab to Patient, Faster',
  description: 'Clinical operations stalled by spreadsheets. Quality systems that fail audits. ifBash delivers FDA-compliant ServiceNow that connects trials, quality, and safety on one validated platform.',
  keywords: [
    'ServiceNow life sciences', 'ServiceNow pharma', 'ServiceNow pharmaceutical',
    'FDA compliant ServiceNow', 'ServiceNow clinical trials', 'pharma AI automation',
    'ServiceNow GxP', 'life sciences digital transformation ServiceNow',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Life Sciences & Pharma — From Lab to Patient, Faster | ifBash',
    description: 'Clinical operations stalled by spreadsheets. Quality systems that fail audits. ifBash delivers FDA-compliant ServiceNow that connects trials, quality, and safety on one validated platform.',
    url: 'https://ifbash.com/industries/life-sciences-pharma',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/life-sciences-pharma' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
