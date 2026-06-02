import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow AP Operations — Accounts Payable Automation | ifBash',
  description: 'Streamline accounts payable processes. Pay suppliers confidently and accurately with AI-powered automation.',
  keywords: [
    'ServiceNow AP operations',
    'accounts payable',
    'invoice automation',
    'document intelligence',
    'payment operations',
    'supplier management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow AP Operations — Accounts Payable Automation | ifBash',
    description: 'Streamline accounts payable processes. Pay suppliers confidently and accurately with AI-powered automation.',
    url: 'https://ifbash.com/portfolio/accounts-payable-operations',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/accounts-payable-operations' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
