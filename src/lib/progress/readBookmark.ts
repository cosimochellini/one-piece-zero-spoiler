import { createIsomorphicFn } from '@tanstack/react-start'
import { getCookie, getRequestHeader } from '@tanstack/react-start/server'

import { parseCookieHeader } from '~/lib/cookies'

import { TRIAL_COOKIE } from './bounds'
import { type Bookmark, EPISODE_COOKIE } from './episode'
import { bookmarkForRequest, trialForRequest } from './requestBookmark'

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
 * It reads the cookies and the user agent and hands them to
 * `bookmarkForRequest`, which is where the decision itself lives and where it
 * is tested. A trial point counts as the bookmark everywhere it is read.
 */
function serverBookmark(): Bookmark {
  return bookmarkForRequest(
    getCookie(EPISODE_COOKIE),
    getCookie(TRIAL_COOKIE),
    getRequestHeader('user-agent'),
  )
}

export const readBookmark: () => Bookmark = createIsomorphicFn()
  .server(serverBookmark)
  .client((): Bookmark => {
    const jar = parseCookieHeader(document.cookie)

    return bookmarkForRequest(
      jar.get(EPISODE_COOKIE),
      jar.get(TRIAL_COOKIE),
      undefined,
    )
  })

/**
 * The trial point, when the bookmark the pages stand at is one; `null` when
 * the reader has saved a bookmark of their own or set neither. The landing
 * reads it to keep a visitor on trial in the onboarding.
 */
export const readTrial: () => Bookmark = createIsomorphicFn()
  .server(() =>
    trialForRequest(getCookie(EPISODE_COOKIE), getCookie(TRIAL_COOKIE)),
  )
  .client((): Bookmark => {
    const jar = parseCookieHeader(document.cookie)

    return trialForRequest(jar.get(EPISODE_COOKIE), jar.get(TRIAL_COOKIE))
  })
