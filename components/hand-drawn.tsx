import * as React from 'react';

/**
 * Hand-drawn SVG accents — the anti-template. Each stroke is authored with
 * slight wobble and a doubled pass, the way a person actually marks a page.
 * Paths carry pathLength=1 so CSS can "draw" them in on scroll (see
 * .draw-in in globals.css); without motion they render fully drawn.
 */

export function Scribble({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 14 C 58 7, 118 19, 176 12 S 268 7, 296 12"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        pathLength={1}
        className="draw-in"
      />
      <path
        d="M14 19 C 80 14, 170 21, 262 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
        pathLength={1}
        className="draw-in draw-in-late"
      />
    </svg>
  );
}

export function CircleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 72"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M112 8 C 172 4, 214 20, 212 36 C 210 56, 148 68, 98 66 C 44 64, 6 52, 8 34 C 10 16, 66 6, 118 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
        className="draw-in"
      />
      <path
        d="M126 10 C 168 10, 200 22, 198 36 C 196 52, 146 62, 104 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
        pathLength={1}
        className="draw-in draw-in-late"
      />
    </svg>
  );
}

export function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 8 C 38 44, 72 54, 104 46"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        pathLength={1}
        className="draw-in"
      />
      <path
        d="M92 36 C 97 40, 101 43, 105 46 C 101 49, 96 53, 91 58"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className="draw-in draw-in-late"
      />
    </svg>
  );
}

/**
 * A margin note — small, tilted, italic. Reads as an annotation a person
 * left on the page, not a styled element a grid placed.
 */
export function MarginNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block italic font-medium tracking-normal rotate-[-2deg] ${className ?? ''}`}
    >
      {children}
    </span>
  );
}
