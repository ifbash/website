import { defineConfig } from 'vitest/config';
import path from 'node:path';

/**
 * Unit tests for the pure logic in lib/ — no DOM, no React rendering.
 *
 * The `@/` alias is declared here rather than via vite-tsconfig-paths: that
 * plugin conflicts on peer deps with the installed Vite, and one alias line is
 * cheaper than forcing a resolution. If more aliases appear in tsconfig.json,
 * mirror them here.
 */
export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
