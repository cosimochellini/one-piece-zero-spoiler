import { COOKIE_MAX_AGE_SECONDS, serializeCookie } from '~/lib/cookies'
import { SERVER_FN_BASE } from '~/lib/endpoints'

import {
  type Bookmark,
  EPISODE_COOKIE,
  parseBookmark,
  serialiseBookmark,
} from './episode'

/** The query parameters a shared link can carry a bookmark in. */
const LINK_PARAMS = ['ep', 's', 'ch'] as const

const DIGITS = /^\d+$/u

/**
 * One parameter's value: `undefined` when the link leaves it out, `null` when
 * it is given twice or is anything but plain digits.
 */
function linkValue(
  search: URLSearchParams,
  name: string,
): null | string | undefined {
  const [value, ...extra] = search.getAll(name)
  if (value === undefined) {
    return undefined
  }

  return extra.length === 0 && DIGITS.test(value) ? value : null
}

/**
 * The cookie grammar for the parameters a link gave, or `null` when they do
 * not make one bookmark: a season with no episode, or a chapter alongside an
 * episode.
 */
function linkForm(
  ep: string | undefined,
  season: string | undefined,
  chapter: string | undefined,
): null | string {
  if (chapter !== undefined) {
    return ep === undefined && season === undefined ? `c${chapter}` : null
  }
  if (ep === undefined) {
    return null
  }

  return season === undefined ? ep : `s${season}e${ep}`
}

/**
 * The bookmark a link's query string names: `?ep=650`, `?s=2&ep=3` or
 * `?ch=1044`.
 *
 * The three forms are rewritten into the cookie's own grammar and handed to
 * `parseBookmark`, so a link can name exactly the bookmarks the dialog can
 * save and nothing else. Anything ambiguous fails closed with `null`.
 */
export function bookmarkFromSearch(search: URLSearchParams): Bookmark {
  const ep = linkValue(search, 'ep')
  const season = linkValue(search, 's')
  const chapter = linkValue(search, 'ch')
  if (ep === null || season === null || chapter === null) {
    return null
  }

  return parseBookmark(linkForm(ep, season, chapter))
}

/**
 * The redirect that turns a shared link into a bookmark, or `undefined` when
 * the request carries none.
 *
 * Every server function reads the bookmark from the request's cookie, so the
 * link has to become that cookie before anything renders. The reader is sent
 * back to the same address without the link's parameters, with the cookie set
 * when the link named a valid bookmark. Dropping them keeps a reload from
 * undoing a bookmark the reader has moved since, and an invalid link is
 * dropped the same way, leaving the bookmark where it was.
 */
export function linkRedirect(request: Request): Response | undefined {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return undefined
  }

  const url = new URL(request.url)
  if (
    url.pathname.startsWith(SERVER_FN_BASE)
    || LINK_PARAMS.every((name) => !url.searchParams.has(name))
  ) {
    return undefined
  }

  const bookmark = bookmarkFromSearch(url.searchParams)
  for (const name of LINK_PARAMS) {
    url.searchParams.delete(name)
  }

  const headers = new Headers({
    'Cache-Control': 'no-store',
    // A path that opens with `//` would read as another host in `Location`,
    // so the leading slashes collapse to one and the redirect stays here.
    'Location': `${url.pathname.replace(/^\/+/u, '/')}${url.search}`,
  })
  if (bookmark !== null) {
    headers.set(
      'Set-Cookie',
      serializeCookie(
        EPISODE_COOKIE,
        serialiseBookmark(bookmark),
        COOKIE_MAX_AGE_SECONDS,
      ),
    )
  }

  return new Response(null, { status: 302, headers })
}
