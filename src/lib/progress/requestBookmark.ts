import { isCrawlerAgent } from '~/lib/crawler'

import { type Bookmark, parseBookmark } from './episode'
import type { BookmarkSeries } from './series'

/**
 * A trial point as the onboarding wrote it, or `null`.
 *
 * Only an episode or a chapter inside East Blue counts. The dial cannot set
 * anything else, so a trial cookie past it was not written by the site, and
 * reading it as a bookmark would turn a session cookie into a way round the
 * one the reader saves.
 */
export function parseTrial(
  raw: string | undefined,
  series: BookmarkSeries,
): Bookmark {
  const point = parseBookmark(raw, series)

  switch (point?.mode) {
    case 'chapter': {
      return point.chapter <= series.demoLastChapter ? point : null
    }
    case 'episode': {
      return point.episode <= series.demoLastEpisode ? point : null
    }
    default: {
      return null
    }
  }
}

/**
 * The trial point a request stands at: the trial cookie's, and only while
 * the reader has no bookmark of their own.
 */
export function trialForRequest(
  cookie: string | undefined,
  trial: string | undefined,
  series: BookmarkSeries,
): Bookmark {
  return parseBookmark(cookie, series) === null ?
      parseTrial(trial, series)
    : null
}

/**
 * Which bookmark a server request stands at.
 *
 * The decision `readBookmark` makes on the server, written as a plain
 * function of the headers it reads so that it can be held to a test. It
 * is the one branch in the app that decides whether a page is served open or
 * covered, and `npm run check` would stay green through an inverted condition
 * if nothing exercised it.
 *
 * The reader's own cookie wins over everything. Without one, a trial point
 * from the onboarding stands in for it until the session ends. Only when there
 * is neither does the user agent get a say: a crawler sends no bookmark, and a
 * request with no bookmark sees nothing, so several hundred pages would be
 * indexed as the same fogged placeholder. A known crawler is therefore read as
 * a reader at the end of the route.
 */
export function bookmarkForRequest(
  cookie: string | undefined,
  trial: string | undefined,
  {
    series,
    userAgent,
  }: { series: BookmarkSeries; userAgent?: string | undefined },
): Bookmark {
  const bookmark = parseBookmark(cookie, series) ?? parseTrial(trial, series)
  if (bookmark !== null) {
    return bookmark
  }

  return isCrawlerAgent(userAgent) ?
      { mode: 'episode', episode: series.episodeCeiling }
    : null
}

/** Reads only this series' cookies; migration happens before rendering. */
export function bookmarkFromCookies(
  jar: Map<string, string>,
  series: BookmarkSeries,
  userAgent?: string,
): Bookmark {
  return bookmarkForRequest(
    jar.get(series.cookie),
    jar.get(series.trialCookie),
    { series, userAgent },
  )
}
