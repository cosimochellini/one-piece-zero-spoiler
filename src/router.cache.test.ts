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

/**
 * Two pages that count their reads and keep the cookie each read was asked
 * with. With `hold`, a read of `/a` waits for `release` before it answers.
 */
async function pages(
  start = '/a',
): Promise<{
  hold: () => void
  reads: { a: number; b: number }
  release: () => void
  router: AnyRouter
}> {
  const reads = { a: 0, b: 0 }
  // A held read of `/a` waits on this line for `release`.
  const line = new EventTarget()
  let held = false
  const root = createRootRoute()
  const read = (page: 'a' | 'b') => async (): Promise<{ cookie: string }> => {
    reads[page] += 1
    const cookie = document.cookie
    if (page === 'a' && held) {
      await new Promise<void>((resolve) => {
        line.addEventListener('release', () => {
          resolve()
        })
      })
    }
    return { cookie }
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
    history: createMemoryHistory({ initialEntries: [start] }),
    ...cacheOptions(),
  })
  await router.load()
  return {
    hold: () => {
      held = true
    },
    reads,
    release: () => {
      held = false
      line.dispatchEvent(new Event('release'))
    },
    router,
  }
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

  it('across a return ten minutes later', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    const { reads, router } = await pages()
    await router.navigate({ href: '/b' })
    vi.setSystemTime(Date.now() + 600_000)
    await router.navigate({ href: '/a' })
    await router.navigate({ href: '/b' })
    await router.navigate({ href: '/a' })

    expect(reads).toStrictEqual({ a: 1, b: 1 })
  })

  it('for half an hour, after which a return reads it again', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    const { reads, router } = await pages()
    await router.navigate({ href: '/b' })
    vi.setSystemTime(Date.now() + 1_800_000)
    await router.navigate({ href: '/a' })

    expect(reads.a).toBe(2)
  })

  it('never from a hover read that a bookmark move overtook', async () => {
    const { hold, reads, release, router } = await pages('/b')
    hold()
    const hovered = router.preloadRoute({ to: '/a' })
    await moveTheBookmark(router)
    release()
    await hovered
    await router.navigate({ href: '/a' })

    expect(reads.a).toBe(2)
    expect(shownAt(router)).toStrictEqual({ cookie: 'zs_one-piece=10' })
  })

  it('until a bookmark move, after which a return waits for the new read', async () => {
    const { reads, router } = await pages()
    await router.navigate({ href: '/b' })
    await moveTheBookmark(router)
    await router.navigate({ href: '/a' })

    expect(reads).toStrictEqual({ a: 2, b: 2 })
    expect(shownAt(router)).toStrictEqual({ cookie: 'zs_one-piece=10' })
  })

  it('until a bookmark move, which re-reads the page on screen before it settles', async () => {
    const { reads, router } = await pages()
    await moveTheBookmark(router)

    expect(reads.a).toBe(2)
    expect(shownAt(router)).toStrictEqual({ cookie: 'zs_one-piece=10' })
  })

  it('until a bookmark move, even when the reader leaves before the re-read lands', async () => {
    const { hold, reads, release, router } = await pages()
    hold()
    document.cookie = 'zs_one-piece=10; path=/'
    void router.invalidate()
    // The re-read is out, held, when the reader leaves.
    await vi.waitFor(() => {
      expect(reads.a).toBe(2)
    })
    await router.navigate({ href: '/b' })
    release()
    await router.navigate({ href: '/a' })

    expect(reads.a).toBe(3)
    expect(shownAt(router)).toStrictEqual({ cookie: 'zs_one-piece=10' })
  })

  it('with the options the app runs', () => {
    expect(cacheOptions()).toStrictEqual({
      defaultGcTime: 1_800_000,
      defaultPreloadGcTime: 1_800_000,
      defaultPreloadStaleTime: 1_800_000,
      defaultStaleReloadMode: 'blocking',
      defaultStaleTime: 1_800_000,
    })
  })
})
