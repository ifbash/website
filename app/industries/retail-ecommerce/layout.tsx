import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Retail & E-Commerce — Unify Every Channel in Real Time',
  description: 'Orders from six places. Inventory four hours stale. Returns taking two weeks. ifBash delivers ServiceNow that unifies every channel — online, in-store, and marketplace — in real time.',
  keywords: [
    'ServiceNow retail', 'ServiceNow order management', 'retail ServiceNow implementation',
    'ServiceNow omnichannel', 'BOPIS ServiceNow', 'ServiceNow inventory management',
    'ecommerce ServiceNow', 'retail digital transformation ServiceNow',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Retail & E-Commerce — Unify Every Channel | ifBash',
    description: 'Orders from six places. Inventory four hours stale. ifBash delivers ServiceNow that unifies every channel in real time.',
    url: 'https://ifbash.com/industries/retail-ecommerce',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/retail-ecommerce' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
