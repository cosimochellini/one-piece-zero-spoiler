import { isLocale } from '~/i18n/locales'

const PREFIX_PARTS = 3

/** Old archive URLs keep their path and exact query through one permanent hop. */
export function legacyRedirect(request: Request): Response | undefined {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return undefined
  }
  const url = new URL(request.url)
  const [, locale, page] = url.pathname.split('/', PREFIX_PARTS)
  if (
    page === undefined
    || page === ''
    || page === 'legal'
    || page === 'privacy'
    || !isLocale(locale)
  ) {
    return undefined
  }
  return new Response(null, {
    status: 301,
    headers: {
      'Location': `/one-piece${url.pathname}${url.search}`,
      'Cache-Control': 'private, no-store',
    },
  })
}
