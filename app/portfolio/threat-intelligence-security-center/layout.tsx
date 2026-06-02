import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow TISC — Threat Intelligence Security Center | ifBash',
  description: 'Gain advanced threat intelligence with threat hunting, modeling, and analysis built into ServiceNow.',
  keywords: [
    'ServiceNow TISC',
    'threat intelligence',
    'threat hunting',
    'threat modeling',
    'IOC',
    'MITRE ATT&CK',
    'security analytics'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow TISC — Threat Intelligence Security Center | ifBash',
    description: 'Gain advanced threat intelligence with threat hunting, modeling, and analysis built into ServiceNow.',
    url: 'https://ifbash.com/portfolio/threat-intelligence-security-center',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/threat-intelligence-security-center' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
