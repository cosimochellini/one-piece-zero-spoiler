import { describe, expect, it, vi } from 'vitest'

import { negotiateLocale } from '~/i18n/negotiate'

import { Route } from '.'

// The request's own headers, as `readPreferredLocale` reads them on the server.
const request = vi.hoisted((): { acceptLanguage: string; cookie?: string } => ({
  acceptLanguage: '',
}))

vi.mock(import('~/i18n/readLocale'), () => ({
  readPreferredLocale: () =>
    negotiateLocale(request.cookie, request.acceptLanguage),
}))

/** What the guard throws: the redirect, as the router would catch it. */
function thrownByGuard(): unknown {
  const beforeLoad: unknown = Route.options.beforeLoad
  if (typeof beforeLoad !== 'function') {
    throw new TypeError('`/` needs a guard')
  }
  try {
    Reflect.apply(beforeLoad, undefined, [{}])
  } catch (error) {
    return error
  }
  return undefined
}

describe('the root address', () => {
  it.each([
    { acceptLanguage: 'it-IT,it;q=0.9,en;q=0.8', locale: 'it' },
    { acceptLanguage: 'en-GB,en;q=0.9', locale: 'en' },
  ])(
    'sends $acceptLanguage to the hub at /$locale with a 302',
    ({ acceptLanguage, locale }) => {
      request.acceptLanguage = acceptLanguage

      expect(thrownByGuard()).toMatchObject({
        status: 302,
        options: { statusCode: 302, to: '/$locale', params: { locale } },
      })
    },
  )
})
