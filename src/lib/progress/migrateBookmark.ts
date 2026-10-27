import {
  COOKIE_MAX_AGE_SECONDS,
  parseCookieHeader,
  serializeCookie,
} from '~/lib/cookies'

import { parseBookmark, serialiseBookmark } from './episode'
import { parseTrial } from './requestBookmark'
// eslint-disable-next-line no-restricted-imports -- The legacy `opzs_*` cookies were One Piece's alone.
import { ONE_PIECE_BOOKMARK } from './series'

const MIGRATIONS = [
  {
    old: 'opzs_ep',
    name: ONE_PIECE_BOOKMARK.cookie,
    parse: parseBookmark,
    age: COOKIE_MAX_AGE_SECONDS,
  },
  {
    old: 'opzs_try',
    name: ONE_PIECE_BOOKMARK.trialCookie,
    parse: parseTrial,
    age: undefined,
  },
]

/**
 * Moves old One Piece cookies to their new names inside a parsed jar, and
 * returns the `Set-Cookie` headers that make the move stick in the browser.
 */
function migrateJar(jar: Map<string, string>): string[] {
  const cookies: string[] = []

  for (const { old, name, parse, age } of MIGRATIONS) {
    if (!jar.has(old)) {
      continue
    }
    const bookmark = parse(jar.get(old), ONE_PIECE_BOOKMARK)
    if (bookmark !== null && !jar.has(name)) {
      const value = serialiseBookmark(bookmark)
      jar.set(name, value)
      cookies.push(serializeCookie(name, value, age))
    }
    jar.delete(old)
    cookies.push(serializeCookie(old, '', 0))
  }
  return cookies
}

/**
 * The `Set-Cookie` headers that move a request's old cookies. The request is
 * left as it came: on Workers its headers are immutable and a write throws,
 * so the server readers migrate their own copy through `migratedCookies`.
 */
export function migrateBookmark(request: Request): string[] {
  return migrateJar(parseCookieHeader(request.headers.get('cookie')))
}

/** A request's cookies as the loaders read them, old names already moved. */
export function migratedCookies(
  header: null | string | undefined,
): Map<string, string> {
  const jar = parseCookieHeader(header)
  migrateJar(jar)
  return jar
}

/** Keeps an explicit link's cookie ahead of a migrated value. */
export function withMigratedCookies(
  response: Response,
  cookies: string[],
): Response {
  if (cookies.length === 0) {
    return response
  }
  const copy = new Response(response.body, response)
  const written = new Set(
    response.headers.getSetCookie().map((cookie) => cookie.split('=', 1)[0]),
  )
  for (const cookie of cookies) {
    if (!written.has(cookie.split('=', 1)[0])) {
      copy.headers.append('Set-Cookie', cookie)
    }
  }
  copy.headers.set('Cache-Control', 'no-store')
  return copy
}
