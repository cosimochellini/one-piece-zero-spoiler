import { createRouter } from '@tanstack/react-router'

import { DEFAULT_LOCALE, isLocale } from '~/i18n/locales'
import { loadDictionary } from '~/i18n/translate'

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
    // a navigation, does not run on hydration (#930). `<html lang>` is that
    // language, or the default on a page outside any locale.
    hydrate: async () => {
      const { lang } = document.documentElement
      await loadDictionary(isLocale(lang) ? lang : DEFAULT_LOCALE)
    },
  })
}
