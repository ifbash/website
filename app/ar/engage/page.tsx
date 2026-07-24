import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.engage.title,
  description: ar.engage.description,
  alternates: alternatesForAr('/ar/engage'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.engage.eyebrow}
        headline={ar.engage.headline}
        accent={ar.engage.accent}
        sub={ar.engage.sub}
    />
  );
}
