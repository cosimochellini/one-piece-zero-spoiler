import { createRouter } from '@tanstack/react-router'

import { DEFAULT_LOCALE, isLocale, type Locale } from '~/i18n/locales'
import { loadDictionaryOrReload } from '~/i18n/translate'

import { routeTree } from './routeTree.gen'

// Required entry point: the Start plugin resolves src/router.{ts,tsx} and the
// server handler calls getRouter(). Keep exactly one router module.
export function getRouter(): ReturnType<typeof createRouter<typeof routeTree>> {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
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
