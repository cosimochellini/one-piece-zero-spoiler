import {
  type AnyRouteMatch,
  type AnyRouter,
  createRouter,
} from '@tanstack/react-router'

import { DEFAULT_LOCALE, isLocale, type Locale } from '~/i18n/locales'
import { loadDictionaryOrReload } from '~/i18n/translate'

import { routeTree } from './routeTree.gen'

// Required entry point: the Start plugin resolves src/router.{ts,tsx} and the
// server handler calls getRouter(). Keep exactly one router module.
export function getRouter(): ReturnType<typeof createRouter<typeof routeTree>> {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    // A page read once is kept as read: Back to the characters re-rendered
    // its few thousand nodes a second time when an identical background
    // re-read landed, mid-crossfade (#939). What a page shows is its URL,
    // the build and the cookies, so a cookie change clears the cache
    // (below), and a bookmark move's `invalidate` still re-reads what is on
    // screen. (The places loader also measures the screen's orientation, but
    // only as a first guess the page measures again.)
    defaultStaleTime: Infinity,
    // A hover or touch on a link to a page read earlier reuses it as well. A
    // preload that read it again would hand its call to the click, and the
    // click would wait on the network for the page it already has.
    defaultPreloadStaleTime: Infinity,
    // With nothing stale on its own, only `invalidate` reloads a page that
    // has been read. It waits for the new records, so a bookmark move keeps
    // the old page until they land, never marks it read in the meantime.
    defaultStaleReloadMode: 'blocking',
    scrollRestoration: true,
    // A new page crossfades in rather than cutting (the timing is on <html>,
    // in the root route). Only a new path counts: a hash jump stays a jump,
    // and a bookmark move re-reads the records through `invalidate`, which
    // never starts a view transition. Browsers that cannot tell the two
    // apart fade on every navigation; browsers without view transitions cut.
    defaultViewTransition: { types: ({ pathChanged }) => pathChanged && [] },
    // The server handler calls getRouter() once per request, so this is a
    // per-request nonce. <Scripts> stamps it onto every script tag it renders,
    // and the root route puts the same value in the Content-Security-Policy,
    // which is what lets the policy enforce a nonce instead of blanket
    // 'unsafe-inline'. On the client the value is unused: browsers hide the
    // nonce attribute from the DOM, and Start marks script tags with
    // suppressHydrationWarning.
    ssr: { nonce: crypto.randomUUID() },
    // The shared copy of the language the server rendered, fetched before
    // the page hydrates: the locale routes' `beforeLoad`, which loads it on
    // a navigation, does not run on hydration (#930).
    //
    // When the copy cannot be fetched (a flaky network, or a deploy that
    // replaced the chunk this page was built with), the page reloads once
    // (`loadDictionaryOrReload`). If that fails too, the page is never
    // hydrated: a hook that rejected would make the router throw and React
    // blank the whole document. A promise that never settles keeps the
    // hydration suspended instead, so the page stays as the server rendered
    // it, readable, its links ordinary page loads.
    hydrate: async () => {
      try {
        await loadDictionaryOrReload(localeOfPath(location.pathname))
      } catch {
        await new Promise<never>(() => {
          // Never settles, on purpose.
        })
      }
    },
  })

  if (typeof document !== 'undefined') {
    dropCacheOnCookieMove(router)
  }

  return router
}

/**
 * Drops the pages read under the old cookies once they have moved, by this
 * tab's bookmark or another tab's. Kept, a page read at a later bookmark
 * would come back without a re-read, and that is a spoiler (#939).
 *
 * Before the load picks pages from the cache, the cache goes. Once the load
 * has committed, it goes again, since committing files the page that was on
 * screen into it. Once it has finished, a page it kept on screen without
 * reading it (a filter on the same page, after another tab moved the
 * bookmark) is read again. A load that stops short leaves the rest to the
 * next one.
 *
 * It reads the cookies when a load starts, not when each answer was asked
 * for, so a move in another tab that races a call in flight, or lands
 * before this page hydrates, is not caught here.
 */
export function dropCacheOnCookieMove(router: AnyRouter): void {
  let cookies = document.cookie
  // What the pages on screen had read when the cookies moved; a page still
  // holding it after the load commits was kept without a re-read.
  let readBefore: null | Set<unknown> = null

  router.subscribe('onBeforeLoad', () => {
    if (document.cookie !== cookies) {
      cookies = document.cookie
      readBefore ??= new Set(router.state.matches.map((m) => m.loaderData))
      // A layout route reads nothing.
      readBefore.delete(undefined)
      readBefore.delete(null)
    }
    if (readBefore !== null) {
      router.clearCache()
    }
  })
  // The re-read waits for the load to finish: started inside its commit, it
  // would cut the commit's own last steps short.
  let reread: null | Set<unknown> = null
  router.subscribe('onLoad', () => {
    if (readBefore === null) {
      return
    }
    reread = readBefore
    readBefore = null
    router.clearCache()
  })
  router.subscribe('onResolved', () => {
    if (reread === null) {
      return
    }
    const old = reread
    reread = null
    const kept = (match: AnyRouteMatch): boolean => old.has(match.loaderData)
    if (router.state.matches.some((match) => kept(match))) {
      void router.invalidate({ filter: kept })
    }
  })
}

/**
 * The locale a page is in, read from its address as the routes match it:
 * `/$locale/…` or `/$series/$locale/…` (a series slug is never a locale), or
 * the default on a page outside any locale. Not `<html lang>`, which browser
 * translation and extensions rewrite.
 */
function localeOfPath(pathname: string): Locale {
  const [first, second] = pathname.split('/').slice(1)
  if (isLocale(first)) {
    return first
  }
  return isLocale(second) ? second : DEFAULT_LOCALE
}
