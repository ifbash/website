import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SIR — Security Incident Response | ifBash',
  description: 'Respond rapidly to evolving threats with MITRE ATT&CK integration and AI-powered incident response.',
  keywords: [
    'ServiceNow SIR',
    'security incident response',
    'MITRE ATT&CK',
    'SOC automation',
    'incident management',
    'threat response'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SIR — Security Incident Response | ifBash',
    description: 'Respond rapidly to evolving threats with MITRE ATT&CK integration and AI-powered incident response.',
    url: 'https://ifbash.com/portfolio/security-incident-response',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/security-incident-response' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
