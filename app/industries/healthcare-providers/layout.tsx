import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Healthcare Providers',
  description: 'Modernise healthcare operations with ServiceNow and AI. HIPAA-compliant ITSM, patient experience platforms, AI-powered care coordination, and clinical workflow automation for hospitals and health networks.',
  keywords: [
    'ServiceNow healthcare', 'ServiceNow for healthcare providers', 'healthcare ServiceNow implementation',
    'HIPAA compliant ServiceNow', 'ServiceNow patient experience', 'healthcare AI automation',
    'ServiceNow clinical workflows', 'hospital ServiceNow consulting',
  ],
  openGraph: {
    title: 'ServiceNow for Healthcare Providers | ifBash',
    description: 'HIPAA-compliant ServiceNow for healthcare. AI-powered care coordination, patient experience, and clinical workflow automation.',
    url: 'https://ifbash.com/industries/healthcare-providers',
  },
  alternates: { canonical: 'https://ifbash.com/industries/healthcare-providers' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
