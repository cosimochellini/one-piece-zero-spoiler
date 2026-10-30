import {
  type AnyRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { dropCacheOnCookieMove, getRouter } from './router'

/** Two pages that count their reads, on a router that keeps what it read. */
function pages(path = '/a'): {
  reads: { a: number; b: number }
  router: AnyRouter
} {
  const reads = { a: 0, b: 0 }
  const root = createRootRoute()
  const read = (page: 'a' | 'b') => (): { cookie: string } => {
    reads[page] += 1
    return { cookie: document.cookie }
  }
  const a = createRoute({
    getParentRoute: () => root,
    path: '/a',
    loader: read('a'),
  })
  const b = createRoute({
    getParentRoute: () => root,
    path: '/b',
    loader: read('b'),
  })
  const router = createRouter({
    routeTree: root.addChildren([a, b]),
    history: createMemoryHistory({ initialEntries: [path] }),
    defaultStaleTime: Infinity,
    defaultPreloadStaleTime: Infinity,
    defaultStaleReloadMode: 'blocking',
  })
  dropCacheOnCookieMove(router)
  return { reads, router }
}

/** The cookie the page on screen was read with. */
function shownWith(router: AnyRouter): unknown {
  const shown: unknown = router.state.matches.at(-1)?.loaderData
  return shown
}

function moveTheBookmark(): void {
  document.cookie = 'zs_one-piece=10; path=/'
}

// The route tree imports every page, which under a full parallel run can take
// longer than the default 5 s.
describe('the router keeps a page as read', { timeout: 15_000 }, () => {
  it('until something invalidates it, waiting for the re-read', () => {
    const { options } = getRouter()

    expect(options.defaultStaleTime).toBe(Infinity)
    expect(options.defaultPreloadStaleTime).toBe(Infinity)
    expect(options.defaultStaleReloadMode).toBe('blocking')
  })
})

describe('dropCacheOnCookieMove', () => {
  afterEach(() => {
    document.cookie = 'zs_one-piece=; path=/; max-age=0'
  })

  it('keeps a page as read while the cookies stay', async () => {
    const { reads, router } = pages()
    await router.load()
    await router.navigate({ href: '/b' })
    await router.navigate({ href: '/a' })

    expect(reads).toStrictEqual({ a: 1, b: 1 })
  })

  it('reads the page that was on screen again after the cookies moved', async () => {
    const { reads, router } = pages()
    await router.load()
    await router.navigate({ href: '/b' })
    moveTheBookmark()
    await router.navigate({ href: '/a' })
    await router.navigate({ href: '/b' })

    expect(reads).toStrictEqual({ a: 2, b: 2 })
    expect(shownWith(router)).toStrictEqual({ cookie: document.cookie })
  })

  it('reads a page kept on screen through the move once more, and only once', async () => {
    const { reads, router } = pages('/a?x=1')
    await router.load()
    moveTheBookmark()
    await router.navigate({ href: '/a?x=2' })
    await vi.waitFor(() => {
      expect(reads.a).toBe(2)
    })
    await vi.waitFor(() => {
      expect(router.state.status).toBe('idle')
    })

    expect(shownWith(router)).toStrictEqual({ cookie: document.cookie })
    expect(router.state.resolvedLocation?.href).toBe('/a?x=2')

    await router.navigate({ href: '/b' })
    await router.navigate({ href: '/a?x=2' })

    expect(reads).toStrictEqual({ a: 2, b: 1 })
  })

  it('lets a link reuse a page read long ago instead of waiting on a preload', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    try {
      const { reads, router } = pages()
      await router.load()
      await router.navigate({ href: '/b' })
      vi.setSystemTime(Date.now() + 60_000)
      await router.preloadRoute({ to: '/a' })
      await router.navigate({ href: '/a' })

      expect(reads).toStrictEqual({ a: 1, b: 1 })
    } finally {
      vi.useRealTimers()
    }
  })

  it('re-reads nothing twice when invalidate follows the move', async () => {
    const { reads, router } = pages()
    await router.load()
    moveTheBookmark()
    await router.invalidate()
    await router.navigate({ href: '/b' })
    await router.navigate({ href: '/a' })

    expect(reads).toStrictEqual({ a: 2, b: 1 })
  })
})
