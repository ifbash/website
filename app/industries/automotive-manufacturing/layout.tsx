import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Automotive & Manufacturing — Quality Built In, Not Inspected In',
  description: 'PPAP rejections. Recall delays. Audit scrambles. ifBash delivers ServiceNow that builds quality into production — not inspected in at the end.',
  keywords: [
    'ServiceNow automotive', 'ServiceNow for automotive industry', 'automotive ServiceNow implementation',
    'ServiceNow PPAP', 'automotive AI automation', 'ServiceNow supplier management automotive',
    'IATF 16949 ServiceNow', 'automotive digital transformation',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Automotive & Manufacturing — Quality Built In | ifBash',
    description: 'PPAP rejections. Recall delays. Audit scrambles. ifBash delivers ServiceNow that builds quality into production.',
    url: 'https://ifbash.com/industries/automotive-manufacturing',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/industries/automotive-manufacturing' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
