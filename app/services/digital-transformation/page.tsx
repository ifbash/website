import { ServicePage } from '@/components/site';
import { getServiceEntry } from '@/lib/service-data';

export default function Page() {
  const entry = getServiceEntry('digital-transformation')!;
  return (
    <ServicePage
      entry={entry}
      headline="Transformation measured in workflows,"
      accent="not slide decks."
      tags={["Strategy","Delivery","Adoption"]}
    />
  );
}
