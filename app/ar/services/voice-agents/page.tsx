import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.voiceAgents.title,
  description: ar.voiceAgents.description,
  alternates: alternatesForAr('/ar/services/voice-agents'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.voiceAgents.eyebrow}
        headline={ar.voiceAgents.headline}
        accent={ar.voiceAgents.accent}
        sub={ar.voiceAgents.sub}
    />
  );
}
