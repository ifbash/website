import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Engineering on Claude — Agents, Voice & Knowledge Systems',
  description:
    'ifBash builds production AI on Anthropic\'s Claude: autonomous agents, voice and chat assistants, RAG knowledge systems, and workflow automation — with guardrails and measurable outcomes.',
  alternates: { canonical: 'https://ifbash.com/services/claude-ai-engineering' },
  keywords: [
    'Claude AI consulting', 'Anthropic Claude development', 'AI agents', 'voice AI agent',
    'RAG knowledge assistant', 'AI workflow automation', 'Claude API integration', 'agentic AI consultancy',
  ],
};

export default function ClaudeAiEngineeringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
