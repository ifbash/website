import Image from 'next/image';
import * as React from 'react';

/**
 * BrowserFrame — presents a real product screenshot as a browser window.
 * Chrome bar (dots + URL pill) on top, image below, optional caption.
 * Used only for REAL captures of our own product (public/images/screenshots)
 * — never for stock or mock imagery.
 */
export function BrowserFrame({
  src,
  alt,
  url = 'ifbash.com',
  caption,
  priority = false,
  onInk = false,
  className = '',
}: {
  src: string;
  alt: string;
  url?: string;
  caption?: string;
  priority?: boolean;
  onInk?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_8px_40px_rgba(24,19,18,0.10)]">
        <div className="flex items-center gap-3 border-b border-hairline bg-paper px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
            <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
            <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          </span>
          <span className="flex-1 max-w-sm mx-auto truncate rounded-md bg-wash px-3 py-1 text-center font-mono text-[11px] text-slate-light">
            {url}
          </span>
          <span className="w-10" />
        </div>
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          className="w-full h-auto block"
          priority={priority}
          // animated WebP captures must skip optimization or they freeze on frame 1
          unoptimized={src.endsWith('.webp')}
        />
      </div>
      {caption && (
        <figcaption className={`mt-3 text-center text-[13px] ${onInk ? 'text-onink-muted' : 'text-slate-light'}`}>{caption}</figcaption>
      )}
    </figure>
  );
}
