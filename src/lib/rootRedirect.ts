import { negotiateLocale } from '~/i18n/negotiate'

/**
 * Cloudflare's guess at the visitor's country, from `request.cf` on Workers.
 * Absent in `vite dev`, in tests and on any other host, which leaves the
 * other signals to decide.
 */
function countryOf(request: Request): string | undefined {
  const cf: unknown = Reflect.get(request, 'cf')
  if (typeof cf !== 'object' || cf === null) {
    return undefined
  }
  const country: unknown = Reflect.get(cf, 'country')
  return typeof country === 'string' ? country : undefined
}

/**
 * Sends a request for the bare root to the hub in the reader's language,
 * before routing, so nothing renders first. A 302 kept out of every cache:
 * the target is a guess about this reader, not a fact about the URL.
 */
export function rootRedirect(request: Request): Response | undefined {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return undefined
  }
  const url = new URL(request.url)
  if (url.pathname !== '/') {
    return undefined
  }
  const locale = negotiateLocale(
    request.headers.get('cookie'),
    request.headers.get('accept-language'),
    countryOf(request),
  )
  return new Response(null, {
    status: 302,
    headers: {
      'Location': `/${locale}${url.search}`,
      'Cache-Control': 'private, no-store',
    },
  })
}
