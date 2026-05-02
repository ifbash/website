import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Consumer Goods & Retail',
  description: 'Optimise consumer goods operations with ServiceNow and AI. Demand planning, supplier lifecycle management, AI-powered customer experience, and ESG compliance for CPG and retail brands.',
  keywords: [
    'ServiceNow consumer goods', 'ServiceNow CPG', 'consumer goods ServiceNow implementation',
    'ServiceNow demand planning', 'CPG AI automation', 'ServiceNow supplier management CPG',
    'consumer goods digital transformation', 'ServiceNow FMCG',
  ],
  openGraph: {
    title: 'ServiceNow for Consumer Goods & Retail | ifBash',
    description: 'Optimise CPG operations with ServiceNow AI. Demand planning, supplier management, and AI-powered customer experience.',
    url: 'https://ifbash.com/industries/consumer-goods-retail',
  },
  alternates: { canonical: 'https://ifbash.com/industries/consumer-goods-retail' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
