import { createIsomorphicFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'

import { parseCookieHeader } from '~/lib/cookies'

import { EPISODE_COOKIE, parseEpisode, type Progress } from './episode'

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
export const readProgress: () => Progress = createIsomorphicFn()
  .server((): Progress => parseEpisode(getCookie(EPISODE_COOKIE)))
  .client((): Progress =>
    parseEpisode(parseCookieHeader(document.cookie).get(EPISODE_COOKIE)),
  )
