import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Learning Center | Free Guides & Tutorials from Practitioners',
  description: 'Practical ServiceNow guides, tutorials, and decision frameworks written by consultants who deliver implementations every day. No theory — just what actually works in the field.',
  keywords: [
    'ServiceNow learning', 'ServiceNow tutorials', 'ServiceNow guides',
    'ServiceNow implementation guide', 'ServiceNow CSA preparation',
    'ServiceNow Flow Designer tutorial', 'ServiceNow best practices',
  ],
  openGraph: {
    title: 'ServiceNow Learning Center | Free Guides from ifBash',
    description: 'Practical ServiceNow knowledge from practitioners. Guides on implementation, AI, security, and more.',
    url: 'https://ifbash.com/learning-center-servicenow',
  },
  alternates: { canonical: 'https://ifbash.com/learning-center-servicenow' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
