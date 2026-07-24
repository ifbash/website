import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * The small uppercase label above a heading. `rule` draws the short accent
 * dash used on inner pages; the homepage uses the bare label.
 */
export function Eyebrow({
  rule = false,
  centered = false,
  onInk = false,
  className,
  children,
}: {
  rule?: boolean;
  centered?: boolean;
  onInk?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const color = onInk ? 'text-navy-soft' : 'text-navy';
  const dash = onInk ? 'bg-navy-soft' : 'bg-navy';

  if (!rule) {
    return (
      <p
        className={cn(
          'text-[13px] font-semibold tracking-[0.18em] uppercase',
          color,
          centered && 'text-center',
          className,
        )}
      >
        {children}
      </p>
    );
  }

  return (
    <div className={cn('flex items-center gap-3', centered && 'justify-center', className)}>
      <span className={cn('inline-block w-8 h-px', dash)} />
      <span className={cn('text-[13px] font-semibold tracking-[0.18em] uppercase', color)}>
        {children}
      </span>
      {centered && <span className={cn('inline-block w-8 h-px', dash)} />}
    </div>
  );
}
