import {
  afterEach,
  describe,
  expect,
  it,
  type Mock,
  type MockInstance,
  vi,
} from 'vitest'

import { type Locale, LOCALES } from './i18n/locales'
import type * as Translate from './i18n/translate'

const FLAG = 'zs-copy-reloaded:'

/**
 * The router and the dictionary registry, from fresh modules: the test setup
 * has already loaded every locale, which would hide a locale the hook forgot
 * to load. With `failing`, every import of the English copy fails, as it
 * does for a chunk a deploy has replaced.
 */
async function fresh(
  path: string,
  failing = false,
): Promise<{
  failedImports: () => number
  hydrate: () => Promise<void>
  loaded: (locale: Locale) => boolean
  routes: { locale: Guarded; seriesLocale: Guarded }
  translate: typeof Translate
}> {
  let failedImports = 0
  vi.resetModules()
  globalThis.history.replaceState(null, '', path)
  const { getRouter } = await import('./router')
  const translate = await import('./i18n/translate')
  const { Route: localeRoute } = await import('./routes/$locale')
  const { Route: seriesLocale } = await import('./routes/$series/$locale')
  // The series' own copy, as the page it came from keeps it.
  const { keepSeriesCopy } = await import('./routes/-series')
  keepSeriesCopy({ slug: 'one-piece', name: 'One Piece', words: {} }, 'en')
  // After the router: the server half of the route tree imports the English
  // copy too, and only the hook's own import should meet the mock.
  if (failing) {
    vi.doMock(import('./i18n/dictionaries/en'), () => {
      failedImports += 1
      throw new TypeError('Importing a module script failed.')
    })
  }
  return {
    failedImports: () => failedImports,
    hydrate: async () => getRouter().options.hydrate?.({}),
    loaded: (locale) => {
      try {
        return translate.getDictionary(locale)['site.name'] === 'Zero Spoiler'
      } catch {
        return false
      }
    },
    routes: { locale: localeRoute, seriesLocale },
    translate,
  }
}

interface Guarded {
  options: { beforeLoad?: unknown }
}

/** Runs a route's real `beforeLoad` on a client navigation to `/…/en`. */
async function enter(
  route: Guarded,
  navigation: { abortController?: AbortController; preload?: boolean },
): Promise<unknown> {
  const guard: unknown = route.options.beforeLoad
  if (typeof guard !== 'function') {
    throw new TypeError('A locale route needs its guard')
  }
  const result: unknown = await Reflect.apply(guard, undefined, [
    {
      abortController: new AbortController(),
      context: { series: { slug: 'one-piece' } },
      params: { locale: 'en' },
      preload: false,
      ...navigation,
    },
  ])
  return result
}

/** A stand-in for `location`, whose own methods jsdom will not let a spy on. */
function stubLocation(pathname: string): Mock<() => void> {
  const reload = vi.fn<() => void>()
  vi.stubGlobal('location', { reload, pathname, search: '' })
  return reload
}

/** Whether a promise has not settled; it fails the test if it rejected. */
async function stillPending(promise: Promise<unknown>): Promise<boolean> {
  const pending = Symbol('pending')
  return (await Promise.race([promise, Promise.resolve(pending)])) === pending
}

function silenceErrors(): MockInstance<typeof console.error> {
  return vi.spyOn(console, 'error').mockImplementation(() => {
    // Silenced: the test reads it.
  })
}

// Each case imports the whole route tree afresh, which the first time, under
// a full parallel run, can take longer than the default 5 s. No case waits on
// a clock.
describe('getRouter', { timeout: 15_000 }, () => {
  afterEach(() => {
    vi.doUnmock('./i18n/dictionaries/en')
    vi.unstubAllGlobals()
    sessionStorage.clear()
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
      const { hydrate, loaded } = await fresh(path)

      await hydrate()

      expect(LOCALES.filter((locale) => loaded(locale))).toStrictEqual([wanted])
    },
  )

  it('forgets an earlier reload once the copy arrives', async () => {
    sessionStorage.setItem(`${FLAG}/en`, '1')
    const { hydrate } = await fresh('/en')

    await hydrate()

    expect(sessionStorage.getItem(`${FLAG}/en`)).toBeNull()
  })

  it('reloads the page once when the copy does not arrive', async () => {
    const { hydrate, failedImports } = await fresh('/en', true)
    const reload = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(reload).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(failedImports()).toBe(1)
    expect(sessionStorage.getItem(`${FLAG}/en`)).toBe('1')
    expect(error).not.toHaveBeenCalled()
  })

  it('after a reload that did not help, leaves the page unhydrated and says why', async () => {
    sessionStorage.setItem(`${FLAG}/en`, '1')
    const { hydrate } = await fresh('/en', true)
    const reload = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(error).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(reload).not.toHaveBeenCalled()
  })

  it('does not reload where storage is out of reach, so it cannot loop', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError')
    })
    const { hydrate } = await fresh('/en', true)
    const reload = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(error).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(reload).not.toHaveBeenCalled()
  })
})

// A navigation has pushed its address before the routes' `beforeLoad` runs,
// so the stubbed address bar shows the page being opened.
describe(
  'the locale routes on a client navigation',
  { timeout: 15_000 },
  () => {
    afterEach(() => {
      vi.doUnmock('./i18n/dictionaries/en')
      vi.unstubAllGlobals()
      sessionStorage.clear()
    })

    it.each(['locale', 'seriesLocale'] as const)(
      '%s: a preload never reloads, the navigation itself reloads once',
      async (name) => {
        const { routes } = await fresh('/it', true)
        const reload = stubLocation('/one-piece/en')

        await expect(enter(routes[name], { preload: true })).rejects.toThrow(
          Error,
        )
        expect(reload).not.toHaveBeenCalled()
        expect(sessionStorage).toHaveLength(0)

        const entering = enter(routes[name], {})
        await vi.waitFor(() => {
          expect(reload).toHaveBeenCalledTimes(1)
        })

        await expect(stillPending(entering)).resolves.toBe(true)
        expect(sessionStorage.getItem(`${FLAG}/one-piece/en`)).toBe('1')
      },
    )

    it('throws for the route to show its error when the reload did not help', async () => {
      sessionStorage.setItem(`${FLAG}/one-piece/en`, '1')
      const { routes } = await fresh('/it', true)
      const reload = stubLocation('/one-piece/en')
      const error = silenceErrors()

      await expect(enter(routes.seriesLocale, {})).rejects.toThrow(Error)
      expect(reload).not.toHaveBeenCalled()
      expect(error).toHaveBeenCalledTimes(1)
    })

    it.each(['locale', 'seriesLocale'] as const)(
      '%s: leaves the page alone when a newer navigation superseded this one',
      async (name) => {
        const { routes } = await fresh('/it', true)
        // Back to the page the reader came from, before the import failed.
        const reload = stubLocation('/it')
        const error = silenceErrors()
        const abortController = new AbortController()
        abortController.abort()

        await expect(enter(routes[name], { abortController })).rejects.toThrow(
          Error,
        )
        expect(reload).not.toHaveBeenCalled()
        expect(sessionStorage).toHaveLength(0)
        expect(error).not.toHaveBeenCalled()
      },
    )
  },
)
