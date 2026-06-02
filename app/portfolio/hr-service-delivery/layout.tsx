import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow HRSD — HR Service Delivery Consulting | ifBash',
  description: 'Improve productivity with AI-driven self-service and streamlined HR case resolution.',
  keywords: [
    'ServiceNow HRSD',
    'HR service delivery',
    'employee center',
    'employee journey',
    'HR automation',
    'virtual agent',
    'knowledge management'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow HRSD — HR Service Delivery Consulting | ifBash',
    description: 'Improve productivity with AI-driven self-service and streamlined HR case resolution.',
    url: 'https://ifbash.com/portfolio/hr-service-delivery',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/hr-service-delivery' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
