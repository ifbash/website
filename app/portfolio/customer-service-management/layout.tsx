import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow CSM — AI-Powered Customer Service | ifBash',
  description: 'AI agents operate 24/7. Journey mapping reveals every friction point. 95% CSAT. 80% faster response.',
  keywords: [
    'ServiceNow CSM',
    'customer service management',
    'AI agents',
    'customer journey mapping',
    'omnichannel',
    'NPS',
    'virtual agent'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow CSM — AI-Powered Customer Service | ifBash',
    description: 'AI agents operate 24/7. Journey mapping reveals every friction point. 95% CSAT. 80% faster response.',
    url: 'https://ifbash.com/portfolio/customer-service-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/customer-service-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
