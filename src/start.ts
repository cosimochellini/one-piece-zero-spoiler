import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from '@tanstack/react-start'

import { descriptionOf } from '~/data/series'
import { SERVER_FN_BASE } from '~/lib/endpoints'
import { legacyRedirect } from '~/lib/legacyRedirect'
import { linkRedirect } from '~/lib/progress/linkBookmark'
import {
  migrateBookmark,
  withMigratedCookies,
} from '~/lib/progress/migrateBookmark'
import { seriesSlugFromPath } from '~/lib/progress/series'

// Whether this instance has answered a request yet.
const instance = { warm: false }

/**
 * The Start instance.
 *
 * It exists for its middlewares. One turns a shared link such as
 * `/en?ep=650` into the bookmark cookie and redirects to the same address
 * without it, before routing. Links on pages without a series set nothing.
 * The same middleware migrates legacy One Piece cookies before loaders run.
 *
 * Another is the CSRF check. Every record the reader has not reached now
 * lives on the server and is fetched by a server function, so those endpoints
 * are the archive's front door: without this, any page anywhere could POST to
 * them from a reader's browser and read out what the fog is hiding.
 *
 * Scoped to the server-function routes on purpose. The same check on a
 * document request would reject an ordinary address-bar navigation, which
 * sends `Sec-Fetch-Site: none`.
 *
 * The outermost says how long the function took (#610). Production's
 * first byte comes 0.4–1.4 s after the request against a few milliseconds
 * of local render, and from outside the region hop, a cold start and the
 * render all look alike. `Server-Timing: app;dur=` is the time from the
 * request to the response object: the awaited loaders and the shell, not
 * the streamed rest of the body. `cold` marks the first request an instance
 * serves, which pays for loading the archive. Durations only, so it says
 * nothing about the bookmark.
 */
export const startInstance = createStart(() => {
  return {
    requestMiddleware: [
      createMiddleware({ type: 'request' }).server(async ({ next }) => {
        const started = performance.now()
        const cold = !instance.warm
        instance.warm = true
        const { response } = await next()
        // Copied rather than set in place: a response's headers may be
        // immutable, and the copy keeps the body streaming.
        const timed = new Response(response.body, response)
        timed.headers.append(
          'Server-Timing',
          `app;dur=${(performance.now() - started).toFixed(1)}${cold ? ', cold' : ''}`,
        )

        return timed
      }),
      createMiddleware({ type: 'request' }).server(
        async ({ next, request }) => {
          const cookies = migrateBookmark(request)
          const url = new URL(request.url)
          const slug = seriesSlugFromPath(url.pathname)
          const linked =
            legacyRedirect(request)
            ?? linkRedirect(request, slug === null ? null : descriptionOf(slug))
          if (linked !== undefined) {
            return withMigratedCookies(linked, cookies)
          }
          const { response } = await next()
          return withMigratedCookies(response, cookies)
        },
      ),
      createCsrfMiddleware({
        filter: ({ request }) => {
          const asked = new URL(request.url)

          return asked.pathname.startsWith(SERVER_FN_BASE)
        },
      }),
    ],
  }
})
