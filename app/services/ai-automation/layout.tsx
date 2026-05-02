import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Agentic AI & AI Automation Consulting',
  description: 'Deploy agentic AI and generative AI on ServiceNow with ifBash. Autonomous AI agents, Now Assist implementation, intelligent automation, and AI-powered workflows — 12-week ROI average.',
  keywords: [
    'agentic AI ServiceNow', 'ServiceNow AI consulting', 'ServiceNow AI partner',
    'ServiceNow Now Assist', 'generative AI ServiceNow', 'AI automation ServiceNow',
    'ServiceNow agentic AI implementation', 'AI agents ServiceNow',
    'ServiceNow AI consulting partner', 'enterprise agentic AI',
  ],
  openGraph: {
    title: 'ServiceNow Agentic AI & AI Automation Consulting | ifBash',
    description: 'Deploy agentic AI and generative AI on ServiceNow. Autonomous AI agents, Now Assist, and intelligent automation with 12-week ROI average.',
    url: 'https://ifbash.com/services/ai-automation',
  },
  alternates: { canonical: 'https://ifbash.com/services/ai-automation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
