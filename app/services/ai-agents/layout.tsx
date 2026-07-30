import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents — Chat & Workflow Agents Built on Claude',
  description:
    'We design and ship production AI agents: chat agents that qualify leads and resolve tickets, workflow agents that run multi-step processes, with tool use, guardrails, and human-in-the-loop approvals.',
  keywords: [
    'AI agents', 'agentic AI', 'chat agents', 'workflow automation agents',
    'Claude agents', 'tool use', 'human in the loop', 'AI guardrails',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'AI Agents — Chat & Workflow Agents Built on Claude | ifBash',
    description:
      'Production AI agents with tool use, guardrails, and human approval gates. The agent on this site is one of ours.',
    url: 'https://ifbash.com/services/ai-agents',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — AI Agents' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/ai-agents' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
