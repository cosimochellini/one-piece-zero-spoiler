import { render } from '@testing-library/react'
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterContextProvider,
  RouterProvider,
} from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { LocaleProvider } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import { EpisodeProvider } from '~/lib/progress/EpisodeContext'
import type { Progress } from '~/lib/progress/episode'

export type RenderOptions = {
  readonly locale?: Locale
  readonly progress?: Progress
  /** The address the router believes the page is at. Defaults to `/<locale>`. */
  readonly path?: string
}

/**
 * Renders a component inside the three contexts every part of the UI assumes.
 *
 * `progress` stands in for what the server read out of the cookie, which is
 * the only way a test can reproduce the first paint faithfully.
 *
 * The router is context only, not a match: a `<Link>` needs `useRouter` to
 * build its `href` and to compare against the current location, and that is
 * all it gets here. Absolute links resolve; a relative `to="."` cannot,
 * because nothing has been matched. Rendering stays synchronous, which is
 * what every `getBy` in the suite relies on. For a relative link use
 * `renderOnRoute`.
 */
export function renderWithProviders(
  ui: ReactElement,
  { locale = 'en', progress = null, path }: RenderOptions = {},
) {
  const router = createRouter({
    routeTree: createRootRoute(),
    history: createMemoryHistory({ initialEntries: [path ?? `/${locale}`] }),
  })

  return render(
    <RouterContextProvider router={router}>
      <LocaleProvider locale={locale}>
        <EpisodeProvider initialProgress={progress}>{ui}</EpisodeProvider>
      </LocaleProvider>
    </RouterContextProvider>,
  )
}

export type RouteRenderOptions = RenderOptions & {
  /** The route pattern `path` should match, e.g. `/$locale/characters/$id`. */
  readonly pattern: string
}

/**
 * Renders a component as the matched component of one real route, so a
 * relative link and `useParams` behave as they do in the app. Asynchronous,
 * because the router has to load its match before anything can render.
 */
export async function renderOnRoute(
  ui: ReactElement,
  { locale = 'en', progress = null, path, pattern }: RouteRenderOptions,
) {
  const rootRoute = createRootRoute()
  const page = createRoute({
    getParentRoute: () => rootRoute,
    path: pattern,
    component: () => (
      <LocaleProvider locale={locale}>
        <EpisodeProvider initialProgress={progress}>{ui}</EpisodeProvider>
      </LocaleProvider>
    ),
  })
  const router = createRouter({
    routeTree: rootRoute.addChildren([page]),
    history: createMemoryHistory({ initialEntries: [path ?? `/${locale}`] }),
  })
  await router.load()

  return render(<RouterProvider router={router} />)
}
