import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow HCLS — Healthcare & Life Sciences | ifBash',
  description: 'Patient 360. EMR integration. AI-powered healthcare workflows. 90% first-contact resolution.',
  keywords: [
    'ServiceNow HCLS',
    'healthcare service management',
    'life sciences',
    'Patient 360',
    'EMR integration',
    'HL7 FHIR',
    'HIPAA compliance'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow HCLS — Healthcare & Life Sciences | ifBash',
    description: 'Patient 360. EMR integration. AI-powered healthcare workflows. 90% first-contact resolution.',
    url: 'https://ifbash.com/portfolio/healthcare-and-life-sciences-service-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/healthcare-and-life-sciences-service-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
