import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Integration Hub — Enterprise Workflow Automation | ifBash',
  description: '200+ prebuilt connectors. Zero-code spoke generation. Connect ServiceNow to any system in minutes, not months.',
  keywords: [
    'ServiceNow Integration Hub',
    'workflow automation',
    'enterprise integration',
    'API integration',
    'spoke generator',
    'iPaaS',
    'ServiceNow connectors'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Integration Hub — Enterprise Workflow Automation | ifBash',
    description: '200+ prebuilt connectors. Zero-code spoke generation. Connect ServiceNow to any system in minutes, not months.',
    url: 'https://ifbash.com/portfolio/integration-hub',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/integration-hub' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
