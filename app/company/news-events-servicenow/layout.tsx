import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Events | ServiceNow Insights, Webinars & Industry Updates',
  description: 'Stay ahead with ServiceNow news, AI trends, webinars, and event coverage from ifBash. Expert analysis, platform updates, and industry insights for enterprise leaders.',
  keywords: [
    'ServiceNow news', 'ServiceNow events', 'ServiceNow webinars',
    'ServiceNow industry insights', 'digital transformation news', 'ifBash events',
    'ServiceNow platform updates', 'AI automation news',
  ],
  openGraph: {
    title: 'News & Events | ServiceNow Insights & Webinars | ifBash',
    description: 'ServiceNow news, AI trends, webinars, and event coverage. Expert analysis for enterprise leaders.',
    url: 'https://ifbash.com/company/news-events-servicenow',
  },
  alternates: { canonical: 'https://ifbash.com/company/news-events-servicenow' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
