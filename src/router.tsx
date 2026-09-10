import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

// Required entry point: the Start plugin resolves src/router.{ts,tsx} and the
// server handler calls getRouter(). Keep exactly one router module.
export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
    // The server handler calls getRouter() once per request, so this is a
    // per-request nonce. <Scripts> stamps it onto every script tag it renders,
    // and the root route puts the same value in the Content-Security-Policy,
    // which is what lets the policy enforce a nonce instead of blanket
    // 'unsafe-inline'. On the client the value is unused: browsers hide the
    // nonce attribute from the DOM, and Start marks script tags with
    // suppressHydrationWarning.
    ssr: { nonce: crypto.randomUUID() },
  })
}
