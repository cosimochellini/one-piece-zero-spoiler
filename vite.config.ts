import path from 'node:path'

import netlify from '@netlify/vite-plugin-tanstack-start'
import stylex from '@stylexjs/unplugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: { port: 3000 },
  resolve: {
    // Native Vite 8 option (ResolveOptions.tsconfigPaths).
    // vite-tsconfig-paths is not needed.
    tsconfigPaths: true,
  },
  plugins: [
    // StyleX carries `enforce: 'pre'` internally, so it transforms before
    // React Refresh and its `generateBundle` runs before Start's
    // `enforce: 'post'` manifest capture. That ordering is load-bearing:
    // StyleX appends the compiled CSS to the emitted stylesheet and re-emits
    // it under a new content hash, and Start must read the new filename.
    // Listed first so the array matches the order the hooks actually run in.
    stylex.vite({
      // Wrap the output in `@layer` so src/styles/global.css can sit in a
      // layer underneath it. Unlayered CSS beats layered CSS, so the reset
      // has to be layered too -- see the comment in that file.
      useCSSLayers: true,
      // Serve only /virtual:stylex.css in dev. 'full' would also install an
      // HTML-rewriting middleware, which has nothing to attach to here: the
      // root route renders the document itself, there is no index.html.
      devMode: 'css-only',
      // Start runs the client and ssr environments in one process, so the
      // in-memory rule store is already shared. Persisting to
      // node_modules/.stylex/rules.json is the belt to that pair of braces.
      devPersistToDisk: true,
      // Required, not cosmetic: the plugin only records rules for the CSS
      // endpoint when runtime injection is off, and an SSR app must not
      // depend on a client-side style injector.
      // The StyleX compiler resolves `defineVars` imports itself and knows
      // nothing about tsconfig `paths`, so the `~/` alias has to be repeated
      // here or every `~/styles/tokens.stylex` import fails to compile with
      // "Could not resolve the path to the imported file".
      aliases: {
        '~/*': [path.join(import.meta.dirname, 'src', '*')],
      },
      runtimeInjection: false,
    }),
    tanstackStart(),
    // React's Vite plugin MUST come after Start's Vite plugin. Start no longer
    // auto-configures the React plugin, and the old `customViteReactPlugin`
    // option no longer exists.
    viteReact(),
    netlify({
      dev: {
        blobs: { enabled: false },
        database: { enabled: false },
      },
    }),
  ],
})
