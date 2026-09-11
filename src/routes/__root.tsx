import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import { useEffect, type ReactNode } from 'react'

import { createSecurityHeaders } from '~/security-headers'
// A plain side-effect import, deliberately not `?url`. Vite folds it into the
// client entry chunk's `viteMetadata.importedCss`, which is the only source
// TanStack Start reads when it builds the route manifest, so the <link> is
// emitted on every document automatically. It is also the CSS asset
// @stylexjs/unplugin appends its compiled output to. `?url` would break both:
// Vite classifies `url` as a side-effect-free param, so the import would land
// in neither the manifest nor Start's dev-mode style collector.
import '~/styles/global.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'One Piece Zero Spoiler' },
    ],
    // Dev only. In a production build the compiled StyleX CSS lives inside the
    // hashed asset imported above and needs no link of its own, and
    // `import.meta.env.DEV` is replaced with `false` so this array is dead
    // code. In dev the plugin serves the aggregated sheet from an in-memory
    // middleware instead, because nothing has been emitted to disk yet.
    links: import.meta.env.DEV
      ? [{ rel: 'stylesheet', href: '/virtual:stylex.css' }]
      : [],
  }),
  // Netlify does not apply netlify.toml headers to function responses, and
  // every document here is server-rendered by the SSR function, so the
  // security headers have to be part of the response the app itself returns.
  headers: ({ ssr }) => createSecurityHeaders(ssr?.nonce),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

// The default client entry hydrates the whole document, so the root route has
// to render <html> itself.
function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  // The dev stylesheet above is a static URL, so the browser never refetches
  // it after an edit. `virtual:stylex:css-only` is the shim the plugin ships
  // for exactly that: it listens for `stylex:css-update` and rewrites the
  // link's cache-busting query. It touches `document` at module scope, so the
  // import has to be dynamic and inside an effect rather than a top-level
  // import the SSR pass would evaluate. Note the module id: under
  // `devMode: 'css-only'` the plugin resolves this one and never
  // `virtual:stylex:runtime`.
  useEffect(() => {
    if (!import.meta.env.DEV) return
    void import('virtual:stylex:css-only')
  }, [])

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
