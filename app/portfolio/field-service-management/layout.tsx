import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow FSM — Intelligent Field Service Management | ifBash',
  description: 'AI-powered scheduling. Mobile-first operations. 70% scheduling efficiency. 60% productivity improvement.',
  keywords: [
    'ServiceNow FSM',
    'field service management',
    'dynamic scheduling',
    'mobile workforce',
    'route optimization',
    'dispatcher workspace',
    'preventive maintenance'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow FSM — Intelligent Field Service Management | ifBash',
    description: 'AI-powered scheduling. Mobile-first operations. 70% scheduling efficiency. 60% productivity improvement.',
    url: 'https://ifbash.com/portfolio/field-service-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/field-service-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
