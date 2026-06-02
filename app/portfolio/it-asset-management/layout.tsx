import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow ITAM — IT Asset Management Consulting | ifBash',
  description: 'Automate the end-to-end lifecycle for software, hardware, and cloud assets. 30-50% cost reduction. 90% risk reduction. ifBash delivers enterprise ITAM.',
  keywords: [
    'ServiceNow ITAM',
    'IT asset management',
    'software asset management',
    'hardware asset management',
    'SAM',
    'HAM',
    'license optimization'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow ITAM — IT Asset Management Consulting | ifBash',
    description: 'Automate the end-to-end lifecycle for software, hardware, and cloud assets. 30-50% cost reduction. 90% risk reduction. ifBash delivers enterprise ITAM.',
    url: 'https://ifbash.com/portfolio/it-asset-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/it-asset-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
