import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SPC — Security Posture Control | ifBash',
  description: 'Get 360-degree visibility into your attack surface. Detect and remediate security control gaps.',
  keywords: [
    'ServiceNow SPC',
    'security posture control',
    'attack surface',
    'security control gaps',
    'CMDB security',
    'vulnerability prioritization'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SPC — Security Posture Control | ifBash',
    description: 'Get 360-degree visibility into your attack surface. Detect and remediate security control gaps.',
    url: 'https://ifbash.com/portfolio/security-posture-control',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/security-posture-control' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
