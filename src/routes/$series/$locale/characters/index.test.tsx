import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { Locale } from '~/i18n/locales'
import { type Plain, plain } from '~/lib/plain'
import type { ShelfView } from '~/lib/view/records'
import { loadCharacters, loadShelves } from '~/server/api'
import { shelf } from '~/test/fixtures'

import { Route } from '.'
import { seen, shelvesShown } from './-seen'

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
  context: { locale: Locale; series: { slug: string } }
}) => Promise<{
  page: Awaited<ReturnType<typeof loadCharacters>>
  shelves: null | Promise<ShelfView[]> | ShelfView[]
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

  return loader({ context: { locale, series: { slug: 'one-piece' } } })
}

/** A shelf response whose arrival the test controls independently of the page. */
function delayedShelves(): {
  deliver: () => void
  promise: Promise<Plain<ShelfView[]>>
} {
  const line = new EventTarget()
  const promise = new Promise<Plain<ShelfView[]>>((resolve) => {
    line.addEventListener('deliver', () => {
      resolve(plain(shelves))
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
    seen.shelves = false
    vi.mocked(loadCharacters).mockResolvedValue(page)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('hands over the shelves still on their way on the first visit, so the page opens at once', async () => {
    vi.stubEnv('SSR', false)
    const response = delayedShelves()
    vi.mocked(loadShelves).mockReturnValue(response.promise)

    const data = await load()

    expect(data.page).toBe(page)
    expect(data.shelves).toBeInstanceOf(Promise)

    response.deliver()

    await expect(data.shelves).resolves.toStrictEqual(shelves)
  })

  it('keeps client loader data pending until replacement shelves have arrived', async () => {
    vi.stubEnv('SSR', false)
    shelvesShown()
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
        data: { series: 'one-piece', locale: 'it' },
      })
    })

    expect(returned).not.toHaveBeenCalled()

    response.deliver()
    const data = await result
    await completion

    expect(data.page).toBe(page)
    expect(data.shelves).toStrictEqual(shelves)
    expect(returned).toHaveBeenCalledExactlyOnceWith(data)
    expect(loadCharacters).toHaveBeenCalledExactlyOnceWith({
      data: { series: 'one-piece', locale: 'it' },
    })
  })

  it('serves the page without its shelves, which the browser asks for after', async () => {
    vi.stubEnv('SSR', true)

    const data = await load()

    expect(data.page).toBe(page)
    expect(data.shelves).toBeNull()
    expect(loadShelves).not.toHaveBeenCalled()
  })
})
