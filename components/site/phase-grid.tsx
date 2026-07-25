import * as React from 'react';
import { cn } from '@/lib/utils';

export type Phase = {
  phase: string;
  items: string[];
  /** Optional — only include when the timing is a real commitment. */
  duration?: string;
};

/**
 * The "how we work" numbered phase grid. Rendered on ink so it reads as a
 * deliberate break between paper sections.
 */
export function PhaseGrid({
  phases,
  onInk = true,
  className,
}: {
  phases: Phase[];
  onInk?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('grid gap-5 sm:grid-cols-2', phases.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3', className)}>
      {phases.map(({ phase, items, duration }, i) => (
        <div
          key={phase}
          className={cn(
            'rounded-2xl p-6 border',
            onInk ? 'border-onink-line bg-[rgba(255,255,255,0.03)]' : 'border-hairline bg-surface',
          )}
        >
          <div className={cn('text-xs font-semibold mb-3', onInk ? 'text-sea-soft' : 'text-sea')}>
            0{i + 1}
          </div>
          <h3 className={cn('font-semibold mb-1', onInk ? 'text-onink' : 'text-ink-body')}>{phase}</h3>
          {duration && (
            <div className={cn('text-xs mb-3', onInk ? 'text-onink-faint' : 'text-slate-light')}>
              {duration}
            </div>
          )}
          <ul className={cn('space-y-2', !duration && 'mt-3')}>
            {items.map((item) => (
              <li
                key={item}
                className={cn('text-sm leading-relaxed', onInk ? 'text-onink-muted' : 'text-slate')}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
