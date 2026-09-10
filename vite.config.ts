import netlify from '@netlify/vite-plugin-tanstack-start'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    // Native Vite 8 option (ResolveOptions.tsconfigPaths).
    // vite-tsconfig-paths is not needed.
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart(),
    // React's Vite plugin MUST come after Start's Vite plugin. Start no longer
    // auto-configures it, and the old `customViteReactPlugin` option is gone.
    viteReact(),
    // Netlify adapter. On `vite build` it writes
    // `.netlify/v1/functions/server.mjs`, a Netlify Function (Node runtime,
    // `preferStatic: true`) that forwards to `dist/server/server.js`. In
    // `vite dev` it emulates the Netlify platform locally. Deliberately absent
    // from vitest.config.ts, which runs no server build.
    netlify(),
  ],
})
