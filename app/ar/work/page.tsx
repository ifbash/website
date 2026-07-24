import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.work.title,
  description: ar.work.description,
  alternates: alternatesForAr('/ar/work'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.work.eyebrow}
        headline={ar.work.headline}
        accent={ar.work.accent}
        sub={ar.work.sub}
    />
  );
}
