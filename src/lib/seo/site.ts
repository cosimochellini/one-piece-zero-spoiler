/**
 * Where the site answers from.
 *
 * Canonical links, `hreflang` alternates, `og:url` and every `<loc>` in the
 * sitemap are absolute, so one module has to know the origin. It is a constant
 * rather than something read off the request: a `Host` header is
 * attacker-controlled, and a canonical tag written from one would let another
 * domain nominate itself as the original of this page.
 *
 * `VITE_SITE_ORIGIN` overrides it at build time, which is how a custom domain
 * or a deploy preview gets its own value without an edit here. Vite inlines
 * the variable, so the override costs nothing at runtime and is visible in the
 * built output.
 */
const FALLBACK_ORIGIN = 'https://one-piece-zero-spoiler.netlify.app'

function readOrigin(): string {
  const configured = import.meta.env.VITE_SITE_ORIGIN

  if (configured === undefined || configured === '') {
    return FALLBACK_ORIGIN
  }

  return configured.endsWith('/') ? configured.slice(0, -1) : configured
}

/** The origin every absolute URL on the site is built from, without a trailing slash. */
export const SITE_ORIGIN = readOrigin()

/**
 * An absolute URL for a path that already starts with a slash.
 *
 * Paths come from the router, which spells them with a leading slash and
 * without a trailing one, so this concatenates rather than parses: `new URL`
 * would re-encode the segments a record id is already correctly encoded in.
 */
export function absoluteUrl(path: string): string {
  return `${SITE_ORIGIN}${path}`
}
