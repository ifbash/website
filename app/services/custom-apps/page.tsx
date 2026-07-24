import { ServicePage } from '@/components/site';
import { getServiceEntry } from '@/lib/service-data';

export default function Page() {
  const entry = getServiceEntry('custom-apps')!;
  return (
    <ServicePage
      entry={entry}
      headline="Applications that fit your process,"
      accent="not the other way round."
      tags={["App Engine","Low-code","Governed"]}
    />
  );
}
