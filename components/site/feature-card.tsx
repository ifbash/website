import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Feature = {
  icon?: LucideIcon;
  title: string;
  desc: string;
  points?: string[];
  href?: string;
};

/**
 * The icon + title + description card used across every practice and
 * product page. Renders as a Link when `href` is present.
 */
export function FeatureCard({
  icon: Icon,
  title,
  desc,
  points,
  href,
  className,
}: Feature & { className?: string }) {
  const body = (
    <>
      {Icon && (
        <div className="w-11 h-11 rounded-xl bg-navy-tint group-hover:bg-navy-strong flex items-center justify-center mb-4 transition-colors">
          <Icon className="h-5 w-5 text-navy" />
        </div>
      )}
      <h3 className="font-semibold text-ink-body mb-2 text-base">{title}</h3>
      <p className="text-sm text-stone leading-relaxed flex-1">{desc}</p>
      {points && points.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[13px] text-stone">
              <span className="mt-[7px] h-1 w-1 rounded-full bg-navy shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <span className="mt-4 flex items-center gap-1.5 text-navy text-sm font-semibold">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      )}
    </>
  );

  const shell = cn(
    'group flex flex-col rounded-2xl border border-hairline bg-surface p-6',
    'transition-all duration-300 hover:border-navy-soft hover:shadow-[0_8px_30px_rgba(20,18,16,0.06)] hover:-translate-y-0.5',
    className,
  );

  return href ? (
    <Link href={href} className={shell}>
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}

export function FeatureGrid({
  features,
  columns = 3,
  className,
}: {
  features: Feature[];
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid gap-5 sm:grid-cols-2',
        columns === 3 ? 'lg:grid-cols-3' : '',
        className,
      )}
    >
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>
  );
}
