import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow ITSM — AI-Powered IT Service Management | ifBash',
  description: 'Transform IT service delivery with AI-powered incident, problem, and change management. 60% faster resolution, 85% fewer recurring issues. ifBash delivers enterprise ITSM.',
  keywords: [
    'ServiceNow ITSM',
    'IT service management',
    'incident management',
    'problem management',
    'change management',
    'ITSM implementation',
    'ITIL ServiceNow'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow ITSM — AI-Powered IT Service Management | ifBash',
    description: 'Transform IT service delivery with AI-powered incident, problem, and change management. 60% faster resolution, 85% fewer recurring issues. ifBash delivers enterprise ITSM.',
    url: 'https://ifbash.com/portfolio/it-service-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/it-service-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
