import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

type Tone = 'paper' | 'surface' | 'ink' | 'wash';
type Pad = 'default' | 'tight' | 'loose' | 'none';

const TONES: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  surface: 'bg-surface text-ink',
  ink: 'bg-ink text-onink',
  wash: 'bg-wash text-ink',
};

const PADS: Record<Pad, string> = {
  default: 'py-20 lg:py-24',
  tight: 'py-14 lg:py-16',
  loose: 'py-24 lg:py-32',
  none: '',
};

/**
 * A full-bleed page section with the standard container inside.
 * Pass `bare` to skip the container when a section needs custom layout.
 *
 * Content reveals on scroll via the `.reveal` class (pure CSS — see
 * globals.css). This component stays a SERVER component; doing the reveal with
 * an observer hook would have pulled every page that uses a Section into the
 * client bundle. Pass `still` for anything above the fold.
 */
export function Section({
  tone = 'paper',
  pad = 'default',
  divide = false,
  bare = false,
  still = false,
  width,
  id,
  className,
  innerClassName,
  children,
}: {
  tone?: Tone;
  pad?: Pad;
  /** Hairline rule along the top edge — used between same-tone sections. */
  divide?: boolean;
  bare?: boolean;
  /** Opt out of the scroll reveal — for content visible on first paint. */
  still?: boolean;
  width?: React.ComponentProps<typeof Container>['width'];
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        TONES[tone],
        PADS[pad],
        divide && (tone === 'ink' ? 'border-t border-onink-line' : 'border-t border-hairline'),
        className,
      )}
    >
      {bare ? (
        children
      ) : (
        <Container width={width} className={cn(!still && 'reveal', innerClassName)}>
          {children}
        </Container>
      )}
    </section>
  );
}
