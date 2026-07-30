import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voice AI Agents — Inbound & Outbound Calls',
  description:
    'Voice agents that answer inbound calls, qualify and call back leads, and hand off to humans with context. Browser and telephony, built on Claude — try the live one on this site.',
  keywords: [
    'voice AI agents', 'AI phone agent', 'conversational AI', 'inbound call automation',
    'outbound calling AI', 'voice assistant development', 'speech to text', 'Retell AI',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'Voice AI Agents — Inbound & Outbound Calls | ifBash',
    description:
      'Voice agents that answer, qualify, and hand off with context. Talk to the live one on this site.',
    url: 'https://ifbash.com/services/voice-agents',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — Voice AI Agents' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/voice-agents' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
