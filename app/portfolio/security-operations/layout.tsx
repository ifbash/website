import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SecOps — Security Operations Consulting | ifBash',
  description: 'Simplify and automate threat and vulnerability management with AI-powered security operations.',
  keywords: [
    'ServiceNow SecOps',
    'security operations',
    'SIR',
    'vulnerability response',
    'threat intelligence',
    'MITRE ATT&CK',
    'security automation'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SecOps — Security Operations Consulting | ifBash',
    description: 'Simplify and automate threat and vulnerability management with AI-powered security operations.',
    url: 'https://ifbash.com/portfolio/security-operations',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/security-operations' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
