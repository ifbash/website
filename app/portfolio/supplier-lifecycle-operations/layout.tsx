import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow SLO — Supplier Lifecycle Operations | ifBash',
  description: 'Create a unified digital experience for teams and suppliers from onboarding to ongoing engagement.',
  keywords: [
    'ServiceNow SLO',
    'supplier lifecycle',
    'supplier onboarding',
    'supplier portal',
    'supplier collaboration',
    'vendor management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow SLO — Supplier Lifecycle Operations | ifBash',
    description: 'Create a unified digital experience for teams and suppliers from onboarding to ongoing engagement.',
    url: 'https://ifbash.com/portfolio/supplier-lifecycle-operations',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/supplier-lifecycle-operations' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
