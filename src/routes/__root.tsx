import * as stylex from '@stylexjs/stylex'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useParams,
} from '@tanstack/react-router'
import { useEffect, type ReactNode } from 'react'

import { DEFAULT_LOCALE, isLocale } from '~/i18n/locales'
import { EpisodeProvider } from '~/lib/progress/EpisodeContext'
import { readProgress } from '~/lib/progress/readProgress'
import { createSecurityHeaders } from '~/security-headers'
import { color, font, leading, text } from '~/styles/tokens.stylex'
// A plain side-effect import, deliberately not `?url`. Vite folds it into the
// client entry chunk's `viteMetadata.importedCss`, which is the only source
// TanStack Start reads when it builds the route manifest, so the <link> is
// emitted on every document automatically. It is also the CSS asset
// @stylexjs/unplugin appends its compiled output to. `?url` would break both:
// Vite classifies `url` as a side-effect-free param, so the import would land
// in neither the manifest nor Start's dev-mode style collector.
import '~/styles/global.css'

export const Route = createRootRoute({
  // Runs on the server for a document request and on the client for a
  // navigation, and `readProgress` has a branch for each. Reading the bookmark
  // this early is what makes the first painted HTML already correct.
  beforeLoad: () => ({ initialProgress: readProgress() }),
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      // The display and body faces are needed by the masthead and the first
      // paragraph, so they are fetched in parallel with the stylesheet rather
      // than after it. The mono face is not preloaded: it sets a stamp and an
      // edition line, and arriving a moment late costs nothing.
      {
        rel: 'preload',
        href: '/fonts/tanker-400.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/newsreader-var-latin.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      // Dev only. In a production build the compiled StyleX CSS lives inside
      // the hashed asset imported above and needs no link of its own, and
      // `import.meta.env.DEV` is replaced with `false` so this entry is dead
      // code. In dev the plugin serves the aggregated sheet from an in-memory
      // middleware instead, because nothing has been emitted to disk yet.
      ...(import.meta.env.DEV
        ? [{ rel: 'stylesheet', href: '/virtual:stylex.css' }]
        : []),
    ],
  }),
  // Netlify does not apply netlify.toml headers to function responses, and
  // every document here is server-rendered by the SSR function, so the
  // security headers have to be part of the response the app itself returns.
  headers: ({ ssr }) => createSecurityHeaders(ssr?.nonce),
  component: RootComponent,
})

function RootComponent() {
  const { initialProgress } = Route.useRouteContext()

  return (
    <RootDocument>
      <EpisodeProvider initialProgress={initialProgress}>
        <Outlet />
      </EpisodeProvider>
    </RootDocument>
  )
}

// The default client entry hydrates the whole document, so the root route has
// to render <html> itself.
function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  // Read loosely because the root route has no params of its own; the locale
  // belongs to the `$locale` layout below it. Anything unrecognised falls back
  // to the site default rather than emitting an invalid `lang`.
  const params = useParams({ strict: false })
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE

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
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      {/*
        The document colours and the body face are set once here and inherit
        everywhere. src/styles/global.css is a reset plus @font-face only, so
        every value the page renders still comes from tokens.stylex.ts.
      */}
      <body {...stylex.props(styles.body)}>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

const styles = stylex.create({
  body: {
    backgroundColor: color.paper,
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    // Hinting off is wrong for a serif at reading size; optical sizing on is
    // what makes Newsreader's variable `opsz` axis do its job.
    fontOpticalSizing: 'auto',
    textRendering: 'optimizeLegibility',
  },
})
