import {
  type AnyRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { getRouter } from './router'

/** The cache options under test, read from the app's own router. */
function cacheOptions(): object {
  const {
    defaultGcTime,
    defaultPreloadGcTime,
    defaultPreloadStaleTime,
    defaultStaleReloadMode,
    defaultStaleTime,
  } = getRouter().options
  return {
    defaultGcTime,
    defaultPreloadGcTime,
    defaultPreloadStaleTime,
    defaultStaleReloadMode,
    defaultStaleTime,
  }
}

/** Two pages that count their reads and keep the cookie they were read at. */
async function pages(): Promise<{
  reads: { a: number; b: number }
  router: AnyRouter
}> {
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
    history: createMemoryHistory({ initialEntries: ['/a'] }),
    ...cacheOptions(),
  })
  await router.load()
  return { reads, router }
}

/** The cookie the page on screen was read at. */
function shownAt(router: AnyRouter): unknown {
  const shown: unknown = router.state.matches.at(-1)?.loaderData
  return shown
}

/** What `BookmarkProvider.setBookmark` does: the cookie, then `invalidate`. */
async function moveTheBookmark(router: AnyRouter): Promise<void> {
  document.cookie = 'zs_one-piece=10; path=/'
  await router.invalidate()
}

// The route tree imports every page, which under a full parallel run can take
// longer than the default 5 s.
describe('the router keeps a page as read', { timeout: 15_000 }, () => {
  afterEach(() => {
    document.cookie = 'zs_one-piece=; path=/; max-age=0'
    vi.useRealTimers()
  })

  it('across a return to it', async () => {
    const { reads, router } = await pages()
    await router.navigate({ href: '/b' })
    await router.navigate({ href: '/a' })

    expect(reads).toStrictEqual({ a: 1, b: 1 })
  })

  it('across a hover long after it was read', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    const { reads, router } = await pages()
    await router.navigate({ href: '/b' })
    vi.setSystemTime(Date.now() + 60_000)
    await router.preloadRoute({ to: '/a' })
    await router.navigate({ href: '/a' })

    expect(reads).toStrictEqual({ a: 1, b: 1 })
  })

  it('until a bookmark move, after which a return waits for the new read', async () => {
    const { reads, router } = await pages()
    await router.navigate({ href: '/b' })
    await moveTheBookmark(router)
    await router.navigate({ href: '/a' })

    expect(reads).toStrictEqual({ a: 2, b: 2 })
    expect(shownAt(router)).toStrictEqual({ cookie: 'zs_one-piece=10' })
  })

  it('until a bookmark move, even when the reader leaves before the re-read lands', async () => {
    const { reads, router } = await pages()
    document.cookie = 'zs_one-piece=10; path=/'
    void router.invalidate()
    await router.navigate({ href: '/b' })
    await router.navigate({ href: '/a' })

    expect(reads.a).toBe(2)
    expect(shownAt(router)).toStrictEqual({ cookie: 'zs_one-piece=10' })
  })

  it('with the options the app runs', () => {
    expect(cacheOptions()).toStrictEqual({
      defaultGcTime: 1_800_000,
      defaultPreloadGcTime: 1_800_000,
      defaultPreloadStaleTime: Infinity,
      defaultStaleReloadMode: 'blocking',
      defaultStaleTime: Infinity,
    })
  })
})
