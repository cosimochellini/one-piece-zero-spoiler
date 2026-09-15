import { createIsomorphicFn } from '@tanstack/react-start'
import { getCookie, getRequestHeader } from '@tanstack/react-start/server'

import { parseCookieHeader } from '~/lib/cookies'
import { isCrawlerAgent } from '~/lib/crawler'

import { EPISODE_CEILING } from './bounds'
import { type Bookmark, EPISODE_COOKIE, parseBookmark } from './episode'

// A crawler sends no bookmark, and a request with no bookmark sees nothing.
// Indexing the site as several hundred copies of the same fogged placeholder
// helps no one, so a known crawler is read as a reader at the end of the
// route. Nothing else in the app learns what a crawler is: this is the one
// place a bookmark is decided.
const CRAWLER_BOOKMARK: Bookmark = { mode: 'episode', episode: EPISODE_CEILING }

function serverBookmark(): Bookmark {
  const bookmark = parseBookmark(getCookie(EPISODE_COOKIE))
  if (bookmark !== null) {
    return bookmark
  }

  return isCrawlerAgent(getRequestHeader('user-agent')) ? CRAWLER_BOOKMARK : (
      null
    )
}

/**
 * Reads the bookmark on whichever side is asking.
 *
 * `createIsomorphicFn` keeps the two implementations in one place and lets the
 * bundler delete the branch that does not apply, which is what allows this
 * module to import `@tanstack/react-start/server` without dragging the server
 * runtime into the browser bundle.
 *
 * The server branch is the one that matters: it runs before the first byte of
 * HTML, so a covered record is already covered in the markup. A reader with
 * scripts disabled, or on a slow connection, never sees an uncovered flash.
 */
export const readBookmark: () => Bookmark = createIsomorphicFn()
  .server(serverBookmark)
  .client((): Bookmark =>
    parseBookmark(parseCookieHeader(document.cookie).get(EPISODE_COOKIE)),
  )
