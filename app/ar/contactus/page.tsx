import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.contact.title,
  description: ar.contact.description,
  alternates: alternatesForAr('/ar/contactus'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.contact.eyebrow}
        headline={ar.contact.headline}
        accent={ar.contact.accent}
        sub={ar.contact.sub}
    />
  );
}
