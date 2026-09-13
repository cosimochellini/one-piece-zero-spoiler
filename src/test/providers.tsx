import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  type RootRoute,
  RouterContextProvider,
  RouterProvider,
} from '@tanstack/react-router'
import { act, render, type RenderResult } from '@testing-library/react'
import { type ReactElement, Suspense } from 'react'

import { LocaleProvider } from '~/i18n/LocaleProvider'
import type { Locale } from '~/i18n/locales'
import { BookmarkProvider } from '~/lib/progress/BookmarkProvider'
import type { Bookmark } from '~/lib/progress/episode'

/**
 * The context-only router the render helper stands up, named so the helper
 * can hand it back without widening it to `AnyRoute`.
 */
export type TestRouter = ReturnType<typeof createRouter<RootRoute>>

function contextRouter(initialEntries: readonly string[]): TestRouter {
  return createRouter({
    routeTree: createRootRoute(),
    history: createMemoryHistory({ initialEntries: [...initialEntries] }),
  })
}

/** An anime-episode bookmark, the case most tests need. */
export function ep(episode: number): Bookmark {
  return { mode: 'episode', episode }
}

export type RenderOptions = {
  readonly bookmark?: Bookmark
  readonly locale?: Locale
  /** The address the router believes the page is at. Defaults to `/<locale>`. */
  readonly path?: string
}

/**
 * Renders a component inside the three contexts every part of the UI assumes.
 *
 * `bookmark` stands in for what the server read out of the cookie, which is
 * the only way a test can reproduce the first paint faithfully.
 *
 * The router is context only, not a match: a `<Link>` needs `useRouter` to
 * build its `href` and to compare against the current location, and that is
 * all it gets here. Absolute links resolve; a relative `to="."` cannot,
 * because nothing has been matched. Rendering stays synchronous, which is
 * what every `getBy` in the suite relies on. For a relative link use
 * `renderOnRoute`.
 *
 * The router comes back with the render result so a test can watch it: moving
 * the bookmark is a request to re-read the pages now, and that is the call to
 * hold it to.
 */
export function renderWithProviders(
  ui: ReactElement,
  { locale = 'en', bookmark = null, path }: RenderOptions = {},
): RenderResult & { readonly router: TestRouter } {
  const router = contextRouter([path ?? `/${locale}`])

  return {
    router,
    ...render(
      <RouterContextProvider router={router}>
        <LocaleProvider locale={locale}>
          <BookmarkProvider initialBookmark={bookmark}>
            {/*
              A component that reads a streamed loader slot with `use()`
              suspends once even on a promise that has already resolved, so
              the tree is wrapped in a boundary. It is free for everything
              else — React renders straight through a boundary that nothing
              suspends inside — and `null` rather than a marker, so a test
              that forgets to `settle` fails on a missing element and not on
              a stray one.
            */}
            <Suspense fallback={null}>{ui}</Suspense>
          </BookmarkProvider>
        </LocaleProvider>
      </RouterContextProvider>,
    ),
  }
}

/**
 * Lets a promise handed to `use()` come back, and any state a transition has
 * queued commit, so the assertions after it can stay synchronous `getBy`
 * calls — the property `renderWithProviders` is written to protect.
 */
export async function settle(): Promise<void> {
  // Three passes, because the work comes in stages: the promise resolves,
  // React re-renders the boundary, and the state a peek queued commits. One
  // task is enough for one of those and not for all three.
  for (let pass = 0; pass < 3; pass += 1) {
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 0)
      })
    })
  }
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
  { locale = 'en', bookmark = null, path, pattern }: RouteRenderOptions,
): Promise<RenderResult> {
  const rootRoute = createRootRoute()
  const page = createRoute({
    getParentRoute: () => rootRoute,
    path: pattern,
    component: (): ReactElement => {
      return (
        <LocaleProvider locale={locale}>
          <BookmarkProvider initialBookmark={bookmark}>{ui}</BookmarkProvider>
        </LocaleProvider>
      )
    },
  })
  const router = createRouter({
    routeTree: rootRoute.addChildren([page]),
    history: createMemoryHistory({ initialEntries: [path ?? `/${locale}`] }),
  })
  await router.load()

  return render(<RouterProvider router={router} />)
}
