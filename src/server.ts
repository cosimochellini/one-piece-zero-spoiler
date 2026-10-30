import {
  createServerEntry,
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'

const handler = createStartHandler(defaultStreamHandler)

/**
 * The Worker's entry: Start's default one, plus a `Link` header (#932).
 *
 * A Worker cannot write a `103 Early Hints` itself. Cloudflare caches the
 * `rel=preload` links of a page's last 200 and sends them as a `103` on the
 * next request to the same address, before the Worker answers, so the
 * stylesheet and the fonts the root route preloads download while a cold
 * start runs.
 * Start collects the links and leaves them off redirects and `vite dev`.
 *
 * Only stylesheets and fonts. They are the same on every page and for
 * every reader, so a hint cached per address can never be someone else's.
 * The route's module preloads stay out: they differ per route and would
 * compete with the fonts at high priority.
 */
const entry = createServerEntry({
  fetch: async (request) =>
    handler(request, {
      responseLinkHeader: {
        filter: ({ hint }) => hint.as === 'style' || hint.as === 'font',
      },
    }),
})

// eslint-disable-next-line import-x/no-default-export -- workerd runs the default export of the module wrangler.jsonc's `main` names.
export default entry
