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
  translate: typeof Translate
}> {
  let failedImports = 0
  vi.resetModules()
  globalThis.history.replaceState(null, '', path)
  const { getRouter } = await import('./router')
  const translate = await import('./i18n/translate')
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
    translate,
  }
}

/** A stand-in for `location`, whose own methods jsdom will not let a spy on. */
function stubLocation(pathname: string): {
  assign: Mock<(href: string) => void>
  reload: Mock<() => void>
} {
  const page = {
    assign: vi.fn<(href: string) => void>(),
    reload: vi.fn<() => void>(),
  }
  vi.stubGlobal('location', { ...page, pathname, search: '', hash: '' })
  return page
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
    const page = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(page.reload).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(failedImports()).toBe(1)
    expect(page.assign).not.toHaveBeenCalled()
    expect(sessionStorage.getItem(`${FLAG}/en`)).toBe('1')
    expect(error).not.toHaveBeenCalled()
  })

  it('after a reload that did not help, leaves the page unhydrated and says why', async () => {
    sessionStorage.setItem(`${FLAG}/en`, '1')
    const { hydrate } = await fresh('/en', true)
    const page = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(error).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(page.reload).not.toHaveBeenCalled()
  })

  it('does not reload where storage is out of reach, so it cannot loop', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError')
    })
    const { hydrate } = await fresh('/en', true)
    const page = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(error).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(page.reload).not.toHaveBeenCalled()
  })
})

describe('loadDictionaryOrReload on a navigation', () => {
  afterEach(() => {
    vi.doUnmock('./i18n/dictionaries/en')
    vi.unstubAllGlobals()
    sessionStorage.clear()
  })

  it('opens the page it was going to, from the server, once', async () => {
    const { translate } = await fresh('/it', true)
    const page = stubLocation('/it')

    const loading = translate.loadDictionaryOrReload('en', '/en/legal')
    await vi.waitFor(() => {
      expect(page.assign).toHaveBeenCalledExactlyOnceWith('/en/legal')
    })

    await expect(stillPending(loading)).resolves.toBe(true)
    expect(page.reload).not.toHaveBeenCalled()
  })

  it('throws for the route to show its error when that did not help', async () => {
    sessionStorage.setItem(`${FLAG}/en/legal`, '1')
    const { translate } = await fresh('/it', true)
    const page = stubLocation('/it')
    silenceErrors()

    await expect(
      translate.loadDictionaryOrReload('en', '/en/legal'),
    ).rejects.toThrow(Error)
    expect(page.assign).not.toHaveBeenCalled()
  })
})
