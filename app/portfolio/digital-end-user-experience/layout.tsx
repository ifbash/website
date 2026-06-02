import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow DEX — Digital End-User Experience Management | ifBash',
  description: 'Measure and continuously improve the technology experience for your employees. 90% employee satisfaction. 80% proactive issue resolution.',
  keywords: [
    'ServiceNow DEX',
    'digital end-user experience',
    'employee experience',
    'desktop assistant',
    'DEX score',
    'proactive IT support'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow DEX — Digital End-User Experience Management | ifBash',
    description: 'Measure and continuously improve the technology experience for your employees. 90% employee satisfaction. 80% proactive issue resolution.',
    url: 'https://ifbash.com/portfolio/digital-end-user-experience',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/digital-end-user-experience' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
