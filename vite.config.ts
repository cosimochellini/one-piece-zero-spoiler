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
  ],
})
