'use client';

import React from 'react';

/**
 * Animated mesh-gradient background for the hero section.
 * Pure SVG + CSS — no canvas, no heavy JS.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base warm wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper to-wash/60" />

      {/* Orb 1 — sea-tint top-right */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full opacity-[0.18] animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #F6CDBF 0%, transparent 70%)',
          animationDuration: '12s',
        }}
      />

      {/* Orb 2 — warm accent bottom-left */}
      <div
        className="absolute -bottom-[30%] -left-[15%] w-[60vw] h-[60vw] rounded-full opacity-[0.12] animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #F2A38F 0%, transparent 70%)',
          animationDuration: '16s',
          animationDelay: '-4s',
        }}
      />

      {/* Orb 3 — subtle sky center-left */}
      <div
        className="absolute top-[40%] -left-[5%] w-[35vw] h-[35vw] rounded-full opacity-[0.10] animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #93C5FD 0%, transparent 70%)',
          animationDuration: '14s',
          animationDelay: '-8s',
        }}
      />

      {/* Fine grid overlay for texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#181312" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Decorative rings */}
      <svg
        className="absolute top-[15%] right-[8%] w-[200px] h-[200px] opacity-[0.08] animate-spin-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: '30s' }}
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="#B23A2B" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#B23A2B" strokeWidth="0.5" strokeDasharray="2 8" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#B23A2B" strokeWidth="0.5" />
      </svg>

      <svg
        className="absolute bottom-[20%] left-[5%] w-[140px] h-[140px] opacity-[0.06] animate-spin-slow"
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: '40s', animationDirection: 'reverse' }}
      >
        <circle cx="70" cy="70" r="55" fill="none" stroke="#181312" strokeWidth="0.5" strokeDasharray="6 4" />
        <circle cx="70" cy="70" r="35" fill="none" stroke="#181312" strokeWidth="0.5" strokeDasharray="2 6" />
      </svg>
    </div>
  );
}
