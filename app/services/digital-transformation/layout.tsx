import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Digital Transformation Consulting',
  description: 'End-to-end digital transformation with ServiceNow and AI. ifBash delivers AI-powered workflow modernisation, process automation, and enterprise platform strategy for global organisations.',
  keywords: [
    'ServiceNow digital transformation', 'digital transformation consulting',
    'ServiceNow process automation', 'AI digital transformation',
    'enterprise digital transformation ServiceNow', 'ServiceNow workflow automation',
    'digital strategy ServiceNow', 'ServiceNow modernisation',
  ],
  openGraph: {
    title: 'ServiceNow Digital Transformation Consulting | ifBash',
    description: 'End-to-end digital transformation with ServiceNow and AI. Workflow modernisation, process automation, and enterprise platform strategy.',
    url: 'https://ifbash.com/services/digital-transformation',
  },
  alternates: { canonical: 'https://ifbash.com/services/digital-transformation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
