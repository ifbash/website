import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Government & Public Sector',
  description: 'Transform government services with ServiceNow and AI. Citizen experience platforms, compliance automation, AI-powered case management, and secure digital services for public sector agencies.',
  keywords: [
    'ServiceNow government', 'ServiceNow public sector', 'government ServiceNow implementation',
    'ServiceNow citizen experience', 'public sector AI automation', 'ServiceNow compliance government',
    'government digital transformation', 'ServiceNow federal',
  ],
  openGraph: {
    title: 'ServiceNow for Government & Public Sector | ifBash',
    description: 'Transform government with ServiceNow AI. Citizen experience, compliance automation, and AI-powered case management.',
    url: 'https://ifbash.com/industries/public-sector-government',
  },
  alternates: { canonical: 'https://ifbash.com/industries/public-sector-government' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
