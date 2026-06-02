import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow PSDS — Public Sector Digital Services | ifBash',
  description: 'Consumer-grade constituent experiences. FedRAMP High authorized. 62 services automated in 2 months.',
  keywords: [
    'ServiceNow PSDS',
    'public sector',
    'government digital services',
    'FedRAMP',
    'citizen engagement',
    'government transformation'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow PSDS — Public Sector Digital Services | ifBash',
    description: 'Consumer-grade constituent experiences. FedRAMP High authorized. 62 services automated in 2 months.',
    url: 'https://ifbash.com/portfolio/public-sector-digital-services',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/public-sector-digital-services' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
