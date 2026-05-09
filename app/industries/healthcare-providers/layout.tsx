import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Healthcare Consulting — Connect Your Care Network',
  description: 'Every handoff between facilities is where care breaks down. ifBash delivers HIPAA-compliant ServiceNow that connects hospitals, clinics, and providers into a single care network — no gaps, no missed handoffs.',
  keywords: [
    'ServiceNow healthcare', 'ServiceNow healthcare consulting', 'healthcare ServiceNow implementation',
    'HIPAA compliant ServiceNow', 'ServiceNow patient experience', 'hospital ServiceNow partner',
    'ServiceNow clinical workflows', 'healthcare digital transformation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Healthcare Consulting — Connect Your Care Network | ifBash',
    description: 'Every handoff between facilities is where care breaks down. ifBash delivers HIPAA-compliant ServiceNow that connects hospitals, clinics, and providers into a single care network — no gaps, no missed handoffs.',
    url: 'https://ifbash.com/industries/healthcare-providers',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/healthcare-providers' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
