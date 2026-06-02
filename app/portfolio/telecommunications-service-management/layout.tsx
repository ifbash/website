import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow TSM — Telecom Service Management | ifBash',
  description: 'Connect telecom operations from network to customer on a single AI-powered platform. NVIDIA-powered AI.',
  keywords: [
    'ServiceNow TSM',
    'telecom service management',
    'CSP',
    '5G service orchestration',
    'NVIDIA AI',
    'OSS/BSS',
    'telecom operations'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow TSM — Telecom Service Management | ifBash',
    description: 'Connect telecom operations from network to customer on a single AI-powered platform. NVIDIA-powered AI.',
    url: 'https://ifbash.com/portfolio/telecommunications-service-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/telecommunications-service-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
