import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk to Our AI Agent — Live Voice & Chat Demo',
  description:
    'Speak with the ifBash AI agent right now — in your browser or on your phone. Built on Claude, it answers questions about ServiceNow, AI engineering, and web & mobile development.',
  alternates: { canonical: 'https://ifbash.com/agent' },
  openGraph: {
    title: 'Talk to the ifBash AI Agent — Live Demo',
    description: 'A live AI voice agent built on Claude, running on our own site. Try it in your browser or get a call.',
  },
};

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
