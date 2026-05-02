import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Case Studies & Client Success Stories',
  description: 'Real results from real ServiceNow and AI implementations. ifBash client success stories: 78% faster incident resolution, 200% CRM uplift, $2.3M operational savings, and 85% patient satisfaction improvements.',
  keywords: [
    'ServiceNow case studies', 'ServiceNow implementation success stories', 'ServiceNow ROI examples',
    'ServiceNow consulting results', 'ServiceNow AI case study', 'ifBash case studies',
    'ServiceNow digital transformation results',
  ],
  openGraph: {
    title: 'ServiceNow Case Studies & Client Success Stories | ifBash',
    description: 'Real ServiceNow results: 78% faster resolution, 200% CRM uplift, $2.3M savings. Explore ifBash client success stories.',
    url: 'https://ifbash.com/company/case-studies-client-success',
  },
  alternates: { canonical: 'https://ifbash.com/company/case-studies-client-success' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
