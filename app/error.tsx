'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-paper px-6">
      <div className="max-w-lg text-center">
        <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-sea mb-5">
          Something broke
        </p>
        <h2 className="font-display leading-[1.08] text-ink mb-6" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
          That didn&apos;t work.
        </h2>
        <p className="text-base text-slate mb-9">
          An error stopped this page from rendering. Trying again often clears it — if not, tell us
          and we&apos;ll fix it.
        </p>
        {error.digest && (
          <p className="font-mono text-xs text-slate-light mb-8">Reference: {error.digest}</p>
        )}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-semibold bg-ink text-paper shadow-[0_8px_24px_rgba(14,17,32,0.18)] transition-all duration-200 hover:bg-sea hover:-translate-y-0.5"
          >
            Try again
          </button>
          <Link href="/" className="text-[15px] font-semibold text-slate hover:text-sea transition-colors">
            Back home
          </Link>
          <Link href="/contactus" className="text-[15px] font-semibold text-slate hover:text-sea transition-colors">
            Report it
          </Link>
        </div>
      </div>
    </div>
  );
}
