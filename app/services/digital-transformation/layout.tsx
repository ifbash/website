import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Digital Transformation — Stop Managing Silos, Start Running Your Business',
  description: 'Transformation measured in workflows, not slide decks. We unify operations onto a single ServiceNow platform, sequenced so each phase earns the next. A written plan within 48 hours.',
  keywords: [
    'ServiceNow digital transformation', 'digital transformation consulting',
    'ServiceNow process automation', 'AI digital transformation',
    'enterprise digital transformation ServiceNow', 'ServiceNow workflow automation',
    'digital strategy ServiceNow', 'ServiceNow modernisation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Digital Transformation — Stop Managing Silos | ifBash',
    description: 'Transformation measured in workflows, not slide decks. Operations unified onto a single ServiceNow platform.',
    url: 'https://ifbash.com/services/digital-transformation',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/digital-transformation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
