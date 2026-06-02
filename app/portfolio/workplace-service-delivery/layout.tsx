import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow WSD — Workplace Service Delivery | ifBash',
  description: 'Make it easy for employees to reserve, navigate, and request service for any space.',
  keywords: [
    'ServiceNow WSD',
    'workplace service delivery',
    'space management',
    'facilities management',
    'workplace reservation',
    'intelligent building',
    'hybrid work'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow WSD — Workplace Service Delivery | ifBash',
    description: 'Make it easy for employees to reserve, navigate, and request service for any space.',
    url: 'https://ifbash.com/portfolio/workplace-service-delivery',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/workplace-service-delivery' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
