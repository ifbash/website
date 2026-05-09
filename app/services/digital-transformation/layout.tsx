import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Digital Transformation — Stop Managing Silos, Start Running Your Business',
  description: 'The average enterprise wastes 40% of its capacity on manual handoffs. ifBash unifies operations onto a single ServiceNow platform in 20–28 weeks with measurable ROI from week 8.',
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
    description: 'The average enterprise wastes 40% of its capacity on manual handoffs. ifBash unifies operations onto ServiceNow in 20–28 weeks.',
    url: 'https://ifbash.com/services/digital-transformation',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/digital-transformation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
