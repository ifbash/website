import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.aiAgents.title,
  description: ar.aiAgents.description,
  alternates: alternatesForAr('/ar/services/ai-agents'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.aiAgents.eyebrow}
        headline={ar.aiAgents.headline}
        accent={ar.aiAgents.accent}
        sub={ar.aiAgents.sub}
        items={ar.aiAgents.offerings}
        itemsEyebrow={ar.aiAgents.offeringsEyebrow}
    />
  );
}
