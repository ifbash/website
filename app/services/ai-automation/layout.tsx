import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Agentic AI & Automation — Agents That Think, Decide, Act',
  description: 'Now Assist, virtual agents, and predictive intelligence wired into the workflows that already carry your work — with guardrails and human approval where consequences are real.',
  keywords: [
    'agentic AI ServiceNow', 'ServiceNow AI consulting', 'ServiceNow AI partner',
    'ServiceNow Now Assist', 'generative AI ServiceNow', 'AI automation ServiceNow',
    'ServiceNow agentic AI implementation', 'AI agents ServiceNow',
    'ServiceNow AI consulting partner', 'enterprise agentic AI',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Agentic AI — Agents That Think, Decide, Act | ifBash',
    description: 'Now Assist, virtual agents, and predictive intelligence wired into real ServiceNow workflows.',
    url: 'https://ifbash.com/services/ai-automation',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/ai-automation' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
