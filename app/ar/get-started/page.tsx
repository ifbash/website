import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.getStarted.title,
  description: ar.getStarted.description,
  alternates: alternatesForAr('/ar/get-started'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.getStarted.eyebrow}
        headline={ar.getStarted.headline}
        accent={ar.getStarted.accent}
        sub={ar.getStarted.sub}
    />
  );
}
