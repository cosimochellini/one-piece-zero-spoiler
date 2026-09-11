import path from 'node:path'

import stylex from '@stylexjs/unplugin'
import viteReact from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vitest/config'

// NOTE: this config intentionally does NOT include tanstackStart().
// That plugin unconditionally sets `optimizeDeps.include` for react and
// react-dom on the client environment, which prebundles a second copy of React
// under Vitest. The renderer dispatcher is then null and every test fails with:
//   TypeError: Cannot read properties of null (reading 'useState')
// See https://github.com/TanStack/router/issues/6246
// Vitest gives this file full priority: vite.config.ts is ignored, not merged.

// StyleX is not optional here. `stylex.create` and `stylex.defineVars` are
// throwing stubs at runtime by design, so a component that calls them has to
// be compiled under Vitest too, or it throws on import and every test in the
// file fails.
//
// The options are duplicated from vite.config.ts rather than shared, because
// this file deliberately does not import that one. Two of them differ, both on
// purpose:
//   - `devMode: 'off'` would be wrong. The plugin's `apply` hook returns false
//     for `devMode: 'off'` under `command: 'serve'`, and Vitest runs as
//     'serve', so the transform would silently disappear.
//   - `devPersistToDisk` is left out. `buildStart` deletes
//     node_modules/.stylex/rules.json, which would stomp a dev server running
//     next to the test watcher.
const stylexPlugin = stylex.vite({
  useCSSLayers: true,
  devMode: 'css-only',
  runtimeInjection: false,
  // The StyleX compiler resolves `defineVars` imports itself and knows
  // nothing about tsconfig `paths`, so the `~/` alias has to be repeated here
  // or every `~/styles/tokens.stylex` import fails to compile with
  // "Could not resolve the path to the imported file".
  aliases: {
    '~/*': [path.join(import.meta.dirname, 'src', '*')],
  },
}) as Plugin

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    {
      ...stylexPlugin,
      // Dropped on purpose. `configureServer` serves /virtual:stylex.css and
      // starts a 150ms `setInterval` that polls for style changes, cleared
      // only on an httpServer 'close' event. Vitest has no httpServer, so the
      // interval outlives the run and every `vitest run` waits out the full
      // 10s "something prevents 2 Vite servers from exiting" timeout. Neither
      // the CSS endpoint nor the poller has a job in a test run.
      configureServer: undefined,
    },
    viteReact(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // scripts/ holds the CI gate scripts as plain .mjs, outside the TS
    // program. They still need tests, so the glob covers them too.
    include: ['src/**/*.{test,spec}.{ts,tsx}', 'scripts/**/*.{test,spec}.mjs'],
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
        // A defineVars module is a compile-time artifact: StyleX inlines the
        // values at build time, so there is no runtime behaviour to cover.
        'src/**/*.stylex.ts',
        'src/**/*.d.ts',
        'src/**/*.{test,spec}.{ts,tsx}',
      ],
    },
  },
})
