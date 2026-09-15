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

/**
 * The configured origin with its trailing slashes taken off, or the default
 * when nothing is configured. Exported rather than inlined so the branches can
 * be fed a value: the real one is frozen at import time from the build's env,
 * which a test cannot vary.
 */
export function normaliseOrigin(configured: string | undefined): string {
  if (configured === undefined || configured === '') {
    return FALLBACK_ORIGIN
  }

  return configured.endsWith('/') ?
      normaliseOrigin(configured.slice(0, -1))
    : configured
}

/** The origin every absolute URL on the site is built from, without a trailing slash. */
export const SITE_ORIGIN = normaliseOrigin(import.meta.env.VITE_SITE_ORIGIN)

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
