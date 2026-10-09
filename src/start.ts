import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from '@tanstack/react-start'

import { SERVER_FN_BASE } from '~/lib/endpoints'
import { linkRedirect } from '~/lib/progress/linkBookmark'

/**
 * The Start instance.
 *
 * It exists for two middlewares. The first turns a shared link such as
 * `/?ep=650` into the bookmark cookie and redirects to the same address
 * without it, before routing, so even the bare `/` keeps the link's bookmark
 * through its locale redirect.
 *
 * The second is the CSRF check. Every record the reader has not reached now
 * lives on the server and is fetched by a server function, so those endpoints
 * are the archive's front door: without this, any page anywhere could POST to
 * them from a reader's browser and read out what the fog is hiding.
 *
 * Scoped to the server-function routes on purpose. The same check on a
 * document request would reject an ordinary address-bar navigation, which
 * sends `Sec-Fetch-Site: none`.
 */
export const startInstance = createStart(() => {
  return {
    requestMiddleware: [
      createMiddleware({ type: 'request' }).server(
        async ({ next, request }) => linkRedirect(request) ?? next(),
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
