import { createIsomorphicFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'

import { parseCookieHeader } from '~/lib/cookies'

import type { Bookmark } from './episode'
import { bookmarkFromCookies, trialForRequest } from './requestBookmark'
import type { BookmarkSeries } from './series'

/** Reads only the selected series, before the first server-rendered byte. */
function serverBookmark(series: BookmarkSeries | null): Bookmark {
  return series === null ? null : (
      bookmarkFromCookies(
        parseCookieHeader(getRequestHeader('cookie')),
        series,
        getRequestHeader('user-agent'),
      )
    )
}

export const readBookmark = createIsomorphicFn()
  .server(serverBookmark)
  .client((series: BookmarkSeries | null): Bookmark => {
    return series === null ? null : (
        bookmarkFromCookies(parseCookieHeader(document.cookie), series)
      )
  })

/** A trial belongs to one series and gives way to its saved bookmark. */
function trialFromCookies(
  jar: Map<string, string>,
  series: BookmarkSeries | null,
): Bookmark {
  return series === null ? null : (
      trialForRequest(
        jar.get(series.cookie),
        jar.get(series.trialCookie),
        series,
      )
    )
}

export const readTrial = createIsomorphicFn()
  .server((series: BookmarkSeries | null): Bookmark =>
    trialFromCookies(parseCookieHeader(getRequestHeader('cookie')), series),
  )
  .client((series: BookmarkSeries | null): Bookmark =>
    trialFromCookies(parseCookieHeader(document.cookie), series),
  )
