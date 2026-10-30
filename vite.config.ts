import { cloudflare } from '@cloudflare/vite-plugin'
import stylex, { type UserOptions } from '@stylexjs/unplugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'

// @stylexjs/unplugin declares every bundler factory as `(options?) => any`, so
// an unannotated call turns the whole `plugins` array into `any[]`. This is the
// one place the untyped upstream factory is touched; naming its return type
// here keeps the rest of the file, and the array, checked.
const stylexVite: (options?: Partial<UserOptions>) => Plugin = stylex.vite

const CHUNK_URL = '?chunk-url'
const CHUNK_URL_TOKEN = /__chunk_url_\d+__/gu

/**
 * `import { url } from './module?chunk-url'` is the address of the chunk the
 * client build makes for that module, the same one `import('./module')`
 * loads, so a failed load can be retried under a query of its own (#930):
 * Safari and older browsers remember a failed `import()` by its URL and fail
 * the same URL again without asking the network. Outside a build (dev,
 * Vitest) it is the module's own root-relative path. Shared with
 * vitest.config.ts.
 *
 * The build writes a token and swaps in the chunk's file name once the chunks
 * are named. Not `emitFile`: an emitted chunk is an entry, and Start allows
 * one. The importing chunk's hash already covers the name, since it imports
 * that chunk by name too. The server build, where the module is no chunk of
 * its own, keeps the token, and never reads it.
 */
export function chunkUrl(): Plugin {
  let root = ''
  let base = '/'
  let build = false
  const tokens = new Map<string, string>()
  return {
    name: 'zero-spoiler:chunk-url',
    configResolved(resolved) {
      root = resolved.root
      base = resolved.base
      build = resolved.command === 'build'
    },
    load(id) {
      if (!id.endsWith(CHUNK_URL)) {
        return null
      }
      const file = id.slice(0, -CHUNK_URL.length)
      const token = `__chunk_url_${String(tokens.size)}__`
      tokens.set(token, file)
      const url = build ? token : `/${path.relative(root, file)}`
      return `export const url = ${JSON.stringify(url)}`
    },
    generateBundle(_options, bundle) {
      const chunks = Object.values(bundle).filter(
        (output) => output.type === 'chunk',
      )
      const urls = new Map(
        chunks.map((chunk) => [chunk.facadeModuleId, base + chunk.fileName]),
      )
      for (const chunk of chunks) {
        chunk.code = chunk.code.replaceAll(
          CHUNK_URL_TOKEN,
          (token) => urls.get(tokens.get(token) ?? null) ?? token,
        )
      }
    },
  }
}

const config = defineConfig(({ command }) => ({
  server: { port: 3000 },
  build: { manifest: true },
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
    stylexVite({
      // Wrap the output in `@layer` so src/styles/global.css can sit in a
      // layer underneath it. Unlayered CSS beats layered CSS, so the reset
      // has to be layered too -- see the comment in that file.
      useCSSLayers: true,
      // StyleX appends its CSS after Vite has minified the stylesheet, so it
      // has to be minified here or it ships indented, one declaration a line.
      // Build only, so the dev stylesheet stays readable.
      lightningcssOptions: { minify: command === 'build' },
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
      runtimeInjection: false,
      // The StyleX compiler resolves `defineVars` imports itself and knows
      // nothing about tsconfig `paths`, so the `~/` alias has to be repeated
      // here or every `~/styles/tokens.stylex` import fails to compile with
      // "Could not resolve the path to the imported file".
      aliases: { '~/*': [path.join(import.meta.dirname, 'src', '*')] },
    }),
    chunkUrl(),
    tanstackStart(),
    // React's Vite plugin MUST come after Start's Vite plugin. Start no longer
    // auto-configures the React plugin, and the old `customViteReactPlugin`
    // option no longer exists.
    viteReact(),
    // Dev and preview run the server inside workerd, the same runtime as
    // production. The plugin bundles every dependency into the Worker, so
    // Vite writes React's production build in at build time.
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
  ],
}))

export default config
