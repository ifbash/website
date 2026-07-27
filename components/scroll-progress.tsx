'use client';

import React, { useEffect, useState } from 'react';

/**
 * A thin scroll progress bar fixed at the top of the viewport.
 * Uses CSS scroll-driven animation when supported, falls back to
 * a scroll listener for older browsers.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If CSS scroll-driven animations are supported, let CSS handle it
    if (CSS.supports('animation-timeline', 'scroll()')) return;

    // Fallback for Safari / older browsers
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, Math.max(0, pct)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // During SSR and initial hydration, render the JS fallback so the
  // tree matches exactly. After mount, switch to the CSS-driven version
  // when the browser supports it.
  if (mounted && typeof window !== 'undefined' && CSS.supports('animation-timeline', 'scroll()')) {
    return (
      <div
        className="scroll-progress"
        style={{ width: '100%' }}
        aria-hidden="true"
      />
    );
  }

  // JS fallback (always rendered on SSR, and on clients without CSS support)
  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9999]"
      style={{
        width: `${progress * 100}%`,
        background: 'linear-gradient(90deg, #4338CA, #818CF8)',
        transition: 'width 0.1s linear',
      }}
      aria-hidden="true"
    />
  );
}
