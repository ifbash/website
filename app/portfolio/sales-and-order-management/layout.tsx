import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SOM — Sales & Order Management | ifBash',
  description: 'Streamline lead-to-cash with AI-powered CPQ and intelligent order management. 40% faster sales cycles. 95% quote accuracy.',
  keywords: [
    'ServiceNow SOM',
    'sales order management',
    'lead-to-cash',
    'CPQ',
    'order management',
    'sales automation',
    'omnichannel sales'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SOM — Sales & Order Management | ifBash',
    description: 'Streamline lead-to-cash with AI-powered CPQ and intelligent order management. 40% faster sales cycles. 95% quote accuracy.',
    url: 'https://ifbash.com/portfolio/sales-and-order-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/sales-and-order-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
