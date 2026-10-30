import { afterEach, describe, expect, it, vi } from 'vitest'

import type * as EnglishModule from './i18n/dictionaries/en'
import { type Locale, LOCALES } from './i18n/locales'

/**
 * The router's hydrate hook and the dictionary registry, from fresh modules:
 * the test setup has already loaded every locale, which would hide a locale
 * the hook forgot to load.
 */
async function freshHydrate(
  path: string,
  mockEnglish?: Parameters<typeof vi.doMock<typeof EnglishModule>>[1],
): Promise<{ hydrate: Promise<void>; loaded: (locale: Locale) => boolean }> {
  vi.resetModules()
  globalThis.history.replaceState(null, '', path)
  const { getRouter } = await import('./router')
  const { getDictionary } = await import('./i18n/translate')
  // After the router: the server half of the route tree imports the English
  // copy too, and only the hook's own import should meet the mock.
  if (mockEnglish !== undefined) {
    vi.doMock(import('./i18n/dictionaries/en'), mockEnglish)
  }
  return {
    hydrate: Promise.resolve(getRouter().options.hydrate?.({})),
    loaded: (locale) => {
      try {
        return getDictionary(locale)['site.name'] === 'Zero Spoiler'
      } catch {
        return false
      }
    },
  }
}

/** Whether a promise settles in a moment; it fails the test if it rejects. */
async function settles(promise: Promise<unknown>): Promise<boolean> {
  const pending = Symbol('pending')
  const wait = new Promise((resolve) => {
    setTimeout(resolve, 50, pending)
  })
  return (await Promise.race([promise, wait])) !== pending
}

describe('getRouter', () => {
  afterEach(() => {
    vi.doUnmock('./i18n/dictionaries/en')
    document.documentElement.lang = ''
    globalThis.history.replaceState(null, '', '/')
  })

  it.each([
    ['/en', 'it', 'en'],
    ['/it/legal', 'en', 'it'],
    ['/one-piece/en/characters', 'it', 'en'],
    ['/hunter-x-hunter/it', 'en', 'it'],
    ['/', 'en', 'it'],
  ] as const)(
    'on %s with <html lang="%s"> loads only the %s copy before it hydrates',
    async (path, lang, wanted) => {
      document.documentElement.lang = lang
      const { hydrate, loaded } = await freshHydrate(path)

      await hydrate

      expect(LOCALES.filter((locale) => loaded(locale))).toStrictEqual([wanted])
    },
  )

  it('asks again for a copy that failed to arrive', async () => {
    let calls = 0
    const { hydrate, loaded } = await freshHydrate('/en', async (original) => {
      calls += 1
      if (calls === 1) {
        throw new TypeError('Failed to fetch dynamically imported module')
      }
      return original()
    })

    await hydrate

    expect(calls).toBe(2)
    expect(loaded('en')).toBe(true)
  })

  it('leaves the page unhydrated, and does not throw, when the copy never arrives', async () => {
    let calls = 0
    const { hydrate, loaded } = await freshHydrate('/en', () => {
      calls += 1
      throw new TypeError('Failed to fetch dynamically imported module')
    })

    await expect(settles(hydrate)).resolves.toBe(false)
    expect(calls).toBe(3)
    expect(loaded('en')).toBe(false)
  })
})
