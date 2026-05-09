import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Managed Services & 24/7 Support — While You Sleep, We Watch',
  description: 'Your ServiceNow platform — monitored, managed, and continuously optimised by 50+ certified experts. 99.97% uptime, 15-min P1 response, zero missed SLAs. Proactive support that stops incidents before your users notice.',
  keywords: [
    'ServiceNow managed services', 'ServiceNow support', 'ServiceNow managed services provider',
    'ServiceNow 24/7 support', 'ServiceNow platform management', 'ServiceNow optimisation',
    'ServiceNow upgrade support', 'ServiceNow ongoing support',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Managed Services — While You Sleep, We Watch | ifBash',
    description: 'Your ServiceNow platform — monitored, managed, and continuously optimised. 99.97% uptime, 15-min P1 response, zero missed SLAs.',
    url: 'https://ifbash.com/services/managed-services-support',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/managed-services-support' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
