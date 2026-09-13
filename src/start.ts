import { createCsrfMiddleware, createStart } from '@tanstack/react-start'

/**
 * The Start instance.
 *
 * It exists for one middleware. Every record the reader has not reached now
 * lives on the server and is fetched by a server function, so those endpoints
 * are the archive's front door: without this, any page anywhere could POST to
 * them from a reader's browser and read out what the fog is hiding.
 *
 * Scoped to the server-function routes on purpose. The same check on a
 * document request would reject an ordinary address-bar navigation, which
 * sends `Sec-Fetch-Site: none`.
 */
const SERVER_FN_BASE = '/_serverFn'

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [
      createCsrfMiddleware({
        filter: ({ request }) => {
          const asked = new URL(request.url)

          return asked.pathname.startsWith(SERVER_FN_BASE)
        },
      }),
    ],
  }
})
