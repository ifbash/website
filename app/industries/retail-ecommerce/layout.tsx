import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Retail & E-Commerce',
  description: 'Elevate retail operations with ServiceNow and AI. Omnichannel service management, AI-powered customer experience, order fulfilment automation, and supply chain optimisation for retailers.',
  keywords: [
    'ServiceNow retail', 'ServiceNow e-commerce', 'retail ServiceNow implementation',
    'ServiceNow omnichannel', 'retail AI automation', 'ServiceNow order management retail',
    'e-commerce customer experience ServiceNow', 'retail digital transformation',
  ],
  openGraph: {
    title: 'ServiceNow for Retail & E-Commerce | ifBash',
    description: 'Elevate retail with ServiceNow AI. Omnichannel service management, AI customer experience, and supply chain automation.',
    url: 'https://ifbash.com/industries/retail-ecommerce',
  },
  alternates: { canonical: 'https://ifbash.com/industries/retail-ecommerce' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
