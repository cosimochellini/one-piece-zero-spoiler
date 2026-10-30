import { afterEach, describe, expect, it, vi } from 'vitest'

import { type Locale, LOCALES } from './i18n/locales'

/**
 * The router's hydrate hook and the dictionary registry, from fresh modules:
 * the test setup has already loaded every locale, which would hide a locale
 * the hook forgot to load.
 */
async function freshHydrate(
  path: string,
  failing?: 'every URL' | 'plain URL',
): Promise<{
  failedImports: () => number
  hydrate: Promise<void>
  loaded: (locale: Locale) => boolean
}> {
  let failedImports = 0
  vi.resetModules()
  globalThis.history.replaceState(null, '', path)
  if (failing === 'every URL') {
    vi.doMock(import('./i18n/dictionaries/en?chunk-url'), () => ({
      url: '/nowhere/en.js',
    }))
  }
  const { getRouter } = await import('./router')
  const { getDictionary } = await import('./i18n/translate')
  // After the router: the server half of the route tree imports the English
  // copy too, and only the hook's own import should meet the mock. It fails
  // every time, as Safari fails a URL whose import failed once.
  if (failing !== undefined) {
    vi.doMock(import('./i18n/dictionaries/en'), () => {
      failedImports += 1
      throw new TypeError('Importing a module script failed.')
    })
  }
  return {
    hydrate: Promise.resolve(getRouter().options.hydrate?.({})),
    failedImports: () => failedImports,
    loaded: (locale) => {
      try {
        return getDictionary(locale)['site.name'] === 'Zero Spoiler'
      } catch {
        return false
      }
    },
  }
}

/** Whether a promise settles within `ms`; it fails the test if it rejects. */
async function settles(
  promise: Promise<unknown>,
  ms: number,
): Promise<boolean> {
  const pending = Symbol('pending')
  const wait = new Promise((resolve) => {
    setTimeout(resolve, ms, pending)
  })
  return (await Promise.race([promise, wait])) !== pending
}

// Each case imports the whole route tree afresh, which the first time, under
// a full parallel run, takes longer than the default 5 s.
describe('getRouter', { timeout: 15_000 }, () => {
  afterEach(() => {
    vi.doUnmock('./i18n/dictionaries/en')
    vi.doUnmock('./i18n/dictionaries/en?chunk-url')
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

  it('asks again for a copy that failed to arrive, at a URL of its own', async () => {
    const { hydrate, loaded, failedImports } = await freshHydrate(
      '/en',
      'plain URL',
    )

    await expect(settles(hydrate, 1000)).resolves.toBe(true)
    expect(failedImports()).toBe(1)
    expect(loaded('en')).toBe(true)
  })

  it('leaves the page unhydrated, says why, and does not throw, when the copy never arrives', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {
      // Silenced: the test reads it.
    })
    const { hydrate, loaded, failedImports } = await freshHydrate(
      '/en',
      'every URL',
    )

    await expect(settles(hydrate, 2000)).resolves.toBe(false)
    expect(failedImports()).toBe(1)
    expect(loaded('en')).toBe(false)
    // Once, naming the last retry, at a URL of its own.
    expect(error.mock.calls.map(([cause]) => String(cause))).toStrictEqual([
      expect.stringContaining('/nowhere/en.js?retry=2'),
    ])
  })
})
