import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { Locale } from '~/i18n/locales'
import type { ShelfView } from '~/lib/view/records'
import { loadCharacters, loadShelves } from '~/server/api'
import { shelf } from '~/test/fixtures'

import { Route } from '.'

vi.mock(import('~/server/api'), async (importOriginal) => {
  const original = await importOriginal()

  return {
    ...original,
    loadCharacters: vi.fn<typeof original.loadCharacters>(),
    loadShelves: vi.fn<typeof original.loadShelves>(),
  }
})

const page = { featuredCovered: [], featuredOpen: [], filed: 1, shelfCount: 1 }
const shelves = [shelf()]

type Loader = (input: {
  context: { locale: Locale }
}) => Promise<{
  page: Awaited<ReturnType<typeof loadCharacters>>
  shelves: Promise<ShelfView[]> | ShelfView[]
}>

/** Only the locale is read; the generated route context needs a full router. */
function isLoader(value: unknown): value is Loader {
  return typeof value === 'function'
}

async function load(locale: Locale = 'en'): ReturnType<Loader> {
  const loader: unknown = Route.options.loader
  if (!isLoader(loader)) {
    throw new TypeError('the characters route has no loader')
  }

  return loader({ context: { locale } })
}

/** A shelf response whose arrival the test controls independently of the page. */
function delayedShelves(): {
  deliver: () => void
  promise: Promise<ShelfView[]>
} {
  const line = new EventTarget()
  const promise = new Promise<ShelfView[]>((resolve) => {
    line.addEventListener('deliver', () => {
      resolve(shelves)
    })
  })

  return {
    deliver: () => {
      line.dispatchEvent(new Event('deliver'))
    },
    promise,
  }
}

describe('characters route loader', () => {
  beforeEach(() => {
    vi.mocked(loadCharacters).mockResolvedValue(page)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('keeps client loader data pending until replacement shelves have arrived', async () => {
    vi.stubEnv('SSR', false)
    const response = delayedShelves()
    vi.mocked(loadShelves).mockReturnValue(response.promise)
    const returned = vi.fn<(value: Awaited<ReturnType<Loader>>) => void>()
    const result = load('it')
    const observe = async (): Promise<void> => {
      returned(await result)
    }
    const completion = observe()

    await vi.waitFor(() => {
      expect(loadShelves).toHaveBeenCalledExactlyOnceWith({
        data: { locale: 'it' },
      })
    })

    expect(returned).not.toHaveBeenCalled()

    response.deliver()
    const data = await result
    await completion

    expect(data.page).toBe(page)
    expect(data.shelves).toBe(shelves)
    expect(returned).toHaveBeenCalledExactlyOnceWith(data)
    expect(loadCharacters).toHaveBeenCalledExactlyOnceWith({
      data: { locale: 'it' },
    })
  })

  it('returns the page on the server while its shelves remain a streamed promise', async () => {
    vi.stubEnv('SSR', true)
    const response = delayedShelves()
    vi.mocked(loadShelves).mockReturnValue(response.promise)

    const data = await load()

    expect(data.page).toBe(page)
    expect(data.shelves).toBe(response.promise)

    response.deliver()

    await expect(data.shelves).resolves.toBe(shelves)
  })
})
