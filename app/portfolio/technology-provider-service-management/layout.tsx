import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow TPSM — Technology Provider Service Management | ifBash',
  description: 'Elevate XaaS customer experience with AI-powered platform. Service Bridge connects your ecosystem.',
  keywords: [
    'ServiceNow TPSM',
    'technology provider',
    'XaaS',
    'Service Bridge',
    'customer success',
    'proactive service',
    'technology service management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow TPSM — Technology Provider Service Management | ifBash',
    description: 'Elevate XaaS customer experience with AI-powered platform. Service Bridge connects your ecosystem.',
    url: 'https://ifbash.com/portfolio/technology-provider-service-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/technology-provider-service-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
