'use client';

import React from 'react';

/**
 * A "Trusted by" strip with abstract company logos as SVGs.
 * These are geometric wordmarks that read as real brands without
 * being any specific company — safe to ship as placeholders.
 */
const LOGOS = [
  {
    name: 'Vertex',
    svg: (
      <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <path d="M12 4L4 28H10L14 14L18 28H24L16 4H12Z" fill="currentColor" />
        <text x="32" y="22" fontSize="16" fontWeight="600" fontFamily="system-ui" fill="currentColor">Vertex</text>
      </svg>
    ),
  },
  {
    name: 'Nexora',
    svg: (
      <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <circle cx="14" cy="16" r="10" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="14" cy="16" r="4" fill="currentColor" />
        <text x="32" y="22" fontSize="16" fontWeight="600" fontFamily="system-ui" fill="currentColor">Nexora</text>
      </svg>
    ),
  },
  {
    name: 'Stratum',
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <rect x="4" y="8" width="16" height="16" rx="3" fill="currentColor" />
        <rect x="8" y="12" width="8" height="8" rx="1" fill="white" />
        <text x="28" y="22" fontSize="16" fontWeight="600" fontFamily="system-ui" fill="currentColor">Stratum</text>
      </svg>
    ),
  },
  {
    name: 'Axiom',
    svg: (
      <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <polygon points="14,4 24,28 4,28" fill="currentColor" />
        <text x="32" y="22" fontSize="16" fontWeight="600" fontFamily="system-ui" fill="currentColor">Axiom</text>
      </svg>
    ),
  },
  {
    name: 'Cypher',
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <path d="M14 4C8 4 4 9 4 16C4 23 8 28 14 28C18 28 21 26 22 23L18 21C17.2 22.5 15.8 23.5 14 23.5C10.5 23.5 8.5 20 8.5 16C8.5 12 10.5 8.5 14 8.5C15.8 8.5 17.2 9.5 18 11L22 9C21 6 18 4 14 4Z" fill="currentColor" />
        <text x="32" y="22" fontSize="16" fontWeight="600" fontFamily="system-ui" fill="currentColor">Cypher</text>
      </svg>
    ),
  },
  {
    name: 'Helix',
    svg: (
      <svg viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <path d="M4 28C4 28 10 4 14 4C18 4 18 28 22 28C26 28 26 4 30 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <text x="38" y="22" fontSize="16" fontWeight="600" fontFamily="system-ui" fill="currentColor">Helix</text>
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <div className="w-full border-y border-hairline-soft bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-slate-light mb-6">
          Trusted by teams at
        </p>
        {/* Infinite marquee — two identical halves translate -50% for a seamless
            loop. Pauses on hover; disabled entirely under reduced motion. */}
        <div
          className="group relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={half === 1}>
                {LOGOS.map(({ name, svg }) => (
                  <div
                    key={name}
                    className="text-slate-faint hover:text-slate transition-colors duration-300"
                    title={name}
                  >
                    {svg}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
