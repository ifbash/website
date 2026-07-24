import { ServicePage } from '@/components/site';
import { getServiceEntry } from '@/lib/service-data';

export default function Page() {
  const entry = getServiceEntry('ai-automation')!;
  return (
    <ServicePage
      entry={entry}
      headline="Now Assist and virtual agents,"
      accent="wired into real workflows."
      tags={["Now Assist","Virtual Agent","Automation"]}
    />
  );
}
