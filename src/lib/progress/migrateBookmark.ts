import {
  COOKIE_MAX_AGE_SECONDS,
  parseCookieHeader,
  serializeCookie,
} from '~/lib/cookies'

import { parseBookmark, serialiseBookmark } from './episode'
import { parseTrial } from './requestBookmark'
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

/** Moves old One Piece cookies before loaders read this same request. */
export function migrateBookmark(request: Request): string[] {
  const jar = parseCookieHeader(request.headers.get('cookie'))
  const cookies: string[] = []

  for (const { old, name, parse, age } of MIGRATIONS) {
    if (!jar.has(old)) {
      continue
    }
    const bookmark = parse(jar.get(old))
    if (bookmark !== null && !jar.has(name)) {
      const value = serialiseBookmark(bookmark)
      jar.set(name, value)
      cookies.push(serializeCookie(name, value, age))
    }
    jar.delete(old)
    cookies.push(serializeCookie(old, '', 0))
  }
  if (cookies.length > 0) {
    request.headers.set(
      'cookie',
      [...jar]
        .map(([name, value]) => `${name}=${encodeURIComponent(value)}`)
        .join('; '),
    )
  }
  return cookies
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
