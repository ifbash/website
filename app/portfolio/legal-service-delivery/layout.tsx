import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow LSD — Legal Service Delivery | ifBash',
  description: 'Transform legal operations with comprehensive automation and real-time insights.',
  keywords: [
    'ServiceNow LSD',
    'legal service delivery',
    'contract management',
    'matter management',
    'legal operations',
    'legal portal',
    'compliance'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow LSD — Legal Service Delivery | ifBash',
    description: 'Transform legal operations with comprehensive automation and real-time insights.',
    url: 'https://ifbash.com/portfolio/legal-service-delivery',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/legal-service-delivery' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
