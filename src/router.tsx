import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

// Required entry point: the Start plugin resolves src/router.{ts,tsx} and the
// server handler calls getRouter(). Keep exactly one router module.
export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
  })
}
