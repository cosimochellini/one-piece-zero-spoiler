import { isCrawlerAgent } from '~/lib/crawler'

import { EPISODE_CEILING } from './bounds'
import { type Bookmark, parseBookmark } from './episode'

/**
 * Which bookmark a server request stands at.
 *
 * The decision `readBookmark` makes on the server, written as a plain
 * function of the two headers it reads so that it can be held to a test. It
 * is the one branch in the app that decides whether a page is served open or
 * covered, and `npm run check` would stay green through an inverted condition
 * if nothing exercised it.
 *
 * The reader's own cookie wins over everything. Only when there is none does
 * the user agent get a say: a crawler sends no bookmark, and a request with
 * no bookmark sees nothing, so several hundred pages would be indexed as the
 * same fogged placeholder. A known crawler is therefore read as a reader at
 * the end of the route.
 */
export function bookmarkForRequest(
  cookie: string | undefined,
  userAgent: string | undefined,
): Bookmark {
  const bookmark = parseBookmark(cookie)
  if (bookmark !== null) {
    return bookmark
  }

  return isCrawlerAgent(userAgent) ?
      { mode: 'episode', episode: EPISODE_CEILING }
    : null
}
