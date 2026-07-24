import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.mobileDev.title,
  description: ar.mobileDev.description,
  alternates: alternatesForAr('/ar/services/mobile-app-development'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.mobileDev.eyebrow}
        headline={ar.mobileDev.headline}
        accent={ar.mobileDev.accent}
        sub={ar.mobileDev.sub}
    />
  );
}
