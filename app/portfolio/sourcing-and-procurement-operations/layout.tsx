import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SPO — Sourcing & Procurement Operations | ifBash',
  description: 'Deliver a streamlined buying experience with self-service procurement and intelligent automation.',
  keywords: [
    'ServiceNow SPO',
    'sourcing procurement',
    'ShoppingHub',
    'procurement automation',
    'purchase requests',
    'supplier management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SPO — Sourcing & Procurement Operations | ifBash',
    description: 'Deliver a streamlined buying experience with self-service procurement and intelligent automation.',
    url: 'https://ifbash.com/portfolio/sourcing-and-procurement-operations',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/sourcing-and-procurement-operations' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
