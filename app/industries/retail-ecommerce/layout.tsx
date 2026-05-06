import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Retail & E-Commerce | Omnichannel Order Management',
  description: 'Real-time inventory sync, BOPIS workflows, unified order management, and AI-powered customer service — built on ServiceNow. 60-second inventory updates, 98.5% BOPIS accuracy, 3-day return processing.',
  keywords: [
    'ServiceNow retail', 'ServiceNow order management', 'retail ServiceNow implementation',
    'ServiceNow omnichannel', 'BOPIS ServiceNow', 'ServiceNow inventory management',
    'ecommerce customer service ServiceNow', 'retail digital transformation ServiceNow',
  ],
  openGraph: {
    title: 'ServiceNow for Retail & E-Commerce | Omnichannel Order Management | ifBash',
    description: 'Real-time inventory, BOPIS, unified orders, AI customer service. Built on ServiceNow for retail speed.',
    url: 'https://ifbash.com/industries/retail-ecommerce',
  },
  alternates: { canonical: 'https://ifbash.com/industries/retail-ecommerce' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
