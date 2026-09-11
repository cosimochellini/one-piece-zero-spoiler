/**
 * Cookie parsing shared by the locale negotiator and the episode bookmark.
 *
 * Both need to read a value out of a `Cookie:` request header during SSR and
 * out of `document.cookie` during hydration, and those two strings have the
 * same shape, so one parser serves both.
 */

/**
 * Splits a `Cookie:` header into a map.
 *
 * Values are `decodeURIComponent`-ed, and a value that is not valid percent
 * encoding is returned verbatim rather than throwing: a malformed cookie is
 * someone else's bug, and it must not take the page down with it.
 */
export function parseCookieHeader(
  header: string | null | undefined,
): ReadonlyMap<string, string> {
  const jar = new Map<string, string>()
  if (header === null || header === undefined || header === '') return jar

  for (const pair of header.split(';')) {
    const eq = pair.indexOf('=')
    if (eq < 1) continue

    const name = pair.slice(0, eq).trim()
    if (name === '') continue

    jar.set(name, decodeCookieValue(pair.slice(eq + 1).trim()))
  }

  return jar
}

/**
 * Serialises one cookie for `document.cookie`.
 *
 * `HttpOnly` is deliberately absent. Both cookies this app writes are set by
 * the browser when the reader changes a control, and a round trip to the
 * server to store a number the server does not trust anyway would only add
 * latency. `SameSite=Lax` still keeps them off cross-site requests.
 */
function serializeCookie(
  name: string,
  value: string,
  maxAgeSeconds: number,
): string {
  return [
    `${name}=${encodeURIComponent(value)}`,
    'Path=/',
    'SameSite=Lax',
    `Max-Age=${String(maxAgeSeconds)}`,
  ].join('; ')
}

/**
 * Writes a cookie from the browser, and does nothing anywhere else.
 *
 * The assignment lives here rather than at each call site for two reasons: the
 * `typeof document` guard is written once, and `react-hooks/immutability`
 * rejects a write to a module-scope binding from inside a component, which is
 * what `document.cookie = …` is.
 */
export function writeCookie(
  name: string,
  value: string,
  maxAgeSeconds: number,
): void {
  if (typeof document === 'undefined') return

  document.cookie = serializeCookie(name, value, maxAgeSeconds)
}

/** Expires a cookie immediately. */
export function expireCookie(name: string): void {
  writeCookie(name, '', 0)
}

/** One year. Long enough that a reader never has to set their episode twice. */
export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

function decodeCookieValue(raw: string): string {
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}
