import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Managed Services & 24/7 Support — While You Sleep, We Watch',
  description: 'Your ServiceNow platform monitored, managed, and continuously improved by the engineers who built it — with structured hypercare, a named escalation path, and a notice period rather than a lock-in.',
  keywords: [
    'ServiceNow managed services', 'ServiceNow support', 'ServiceNow managed services provider',
    'ServiceNow 24/7 support', 'ServiceNow platform management', 'ServiceNow optimisation',
    'ServiceNow upgrade support', 'ServiceNow ongoing support',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Managed Services — While You Sleep, We Watch | ifBash',
    description: 'ServiceNow managed by the engineers who built it. Named escalation path, structured hypercare, no lock-in.',
    url: 'https://ifbash.com/services/managed-services-support',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/managed-services-support' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
