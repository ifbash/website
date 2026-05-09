import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Consumer Goods & Retail — From Supplier to Shelf, Without the Gaps',
  description: 'Stockouts at your biggest retailers. Deductions unresolved for months. Forecasts that miss by miles. ifBash delivers ServiceNow that connects demand planning, order-to-cash, and trade promotion.',
  keywords: [
    'ServiceNow consumer goods', 'ServiceNow CPG', 'consumer goods ServiceNow implementation',
    'ServiceNow demand planning', 'CPG AI automation', 'ServiceNow trade promotion',
    'consumer goods digital transformation', 'ServiceNow FMCG',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Consumer Goods — Supplier to Shelf | ifBash',
    description: 'Stockouts. Unresolved deductions. Missed forecasts. ifBash delivers ServiceNow that connects demand planning, order-to-cash, and trade promotion.',
    url: 'https://ifbash.com/industries/consumer-goods-retail',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/consumer-goods-retail' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
