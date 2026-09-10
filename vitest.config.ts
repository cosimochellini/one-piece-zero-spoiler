import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// NOTE: this config intentionally does NOT include tanstackStart().
// That plugin unconditionally sets `optimizeDeps.include` for react and
// react-dom on the client environment, which prebundles a second copy of React
// under Vitest. The renderer dispatcher is then null and every test fails with:
//   TypeError: Cannot read properties of null (reading 'useState')
// See https://github.com/TanStack/router/issues/6246
// Vitest gives this file full priority: vite.config.ts is ignored, not merged.
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [viteReact()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/routeTree.gen.ts',
        'src/router.tsx',
        'src/routes/**',
        'src/test/**',
        'src/**/*.{test,spec}.{ts,tsx}',
      ],
    },
  },
})
