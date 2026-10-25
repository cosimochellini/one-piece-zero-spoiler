import {
  createMemoryHistory,
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { describe, expect, it, vi } from 'vitest'

import { SERIES } from '~/data/series'
import type { Locale } from '~/i18n/locales'
import type { SeriesCopy } from '~/i18n/types'
import {
  hasPage,
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_SERIES,
  type Series,
  type SeriesPage,
} from '~/lib/progress/series'
import { Route as SeriesRoute } from '~/routes/$series'
import { Route as SeriesLocaleRoute } from '~/routes/$series/$locale'
import { Route as CharacterRoute } from '~/routes/$series/$locale/characters/$id'
import { Route as CharactersRoute } from '~/routes/$series/$locale/characters/index'
import { Route as FillerRoute } from '~/routes/$series/$locale/filler'
import { Route as FruitRoute } from '~/routes/$series/$locale/fruits/$id'
import { Route as FruitsRoute } from '~/routes/$series/$locale/fruits/index'
import { Route as PlaceRoute } from '~/routes/$series/$locale/places/$id'
import { Route as PlacesRoute } from '~/routes/$series/$locale/places/index'
import { seriesCopy, seriesDescription } from '~/routes/-series'
import { routeTree } from '~/routeTree.gen'
import { copyOf } from '~/server/copy.server'

type Guard = (input: unknown) => unknown

function isGuard(value: unknown): value is Guard {
  return typeof value === 'function'
}

function guardOf(route: { options: { beforeLoad?: unknown } }): Guard {
  const guard: unknown = route.options.beforeLoad
  if (!isGuard(guard)) {
    throw new TypeError('A route guard is required')
  }
  return guard
}

function isSeriesContext(value: unknown): value is { series: Series } {
  return typeof value === 'object' && value !== null && 'series' in value
}

/**
 * Every page only some series have, with each of its routes and the address
 * that reaches it. A record id need not exist: the guard answers before the
 * loader would look it up.
 */
const PAGE_ROUTES: {
  page: SeriesPage
  path: string
  route: { id: string; options: { beforeLoad?: unknown } }
}[] = [
  { page: 'characters', path: 'characters', route: CharactersRoute },
  { page: 'characters', path: 'characters/$id', route: CharacterRoute },
  { page: 'places', path: 'places', route: PlacesRoute },
  { page: 'places', path: 'places/$id', route: PlaceRoute },
  { page: 'fruits', path: 'fruits', route: FruitsRoute },
  { page: 'fruits', path: 'fruits/$id', route: FruitRoute },
  { page: 'filler', path: 'filler', route: FillerRoute },
]

const root = createRootRouteWithContext<{ series: null | Series }>()()
const seriesGuard = guardOf(SeriesRoute)
const localeGuard = guardOf(SeriesLocaleRoute)
const series = createRoute({
  getParentRoute: () => root,
  path: '$series',
  beforeLoad: async (input) => {
    const context = await seriesGuard(input)
    return isSeriesContext(context) ? context : undefined
  },
})
const seriesLocale = createRoute({
  getParentRoute: () => series,
  path: '$locale',
  beforeLoad: async (input) => {
    await localeGuard(input)
  },
})
const pages = PAGE_ROUTES.map(({ path, route }) => {
  const guard = guardOf(route)
  return createRoute({
    getParentRoute: () => seriesLocale,
    path,
    beforeLoad: async (input) => {
      await guard(input)
    },
  })
})
const tree = root.addChildren([
  series.addChildren([seriesLocale.addChildren(pages)]),
])

vi.mock(import('~/routes/-series'), () => ({
  seriesDescription: vi.fn<(slug: string) => Promise<null | Series>>(),
  seriesCopy: vi.fn<(slug: string, locale: Locale) => Promise<SeriesCopy>>(),
}))

/** Whether the address answers 404. */
async function isNotFound(path: string): Promise<boolean> {
  const router = createRouter({
    routeTree: tree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { series: null },
  })
  await router.load()
  return router.state.matches.some(
    (match) => match.status === 'notFound' || match._notFound === true,
  )
}

/** Every page route of every filed series, at an address of its own. */
const CASES = SERIES.flatMap(({ description }) =>
  PAGE_ROUTES.map(({ page, path }) => ({
    description,
    page,
    address: `/${description.slug}/en/${path.replace('$id', 'any-id')}`,
  })),
)

describe('the pages a series declares', () => {
  // Each filed series is described as if it were open, Hunter x Hunter
  // included, so the routes are held to what it declares before it opens.
  // The list above is written by hand, so a page route added under a series
  // and left out of it fails here rather than going unguarded.
  it('covers every page route under a series', () => {
    const { routesById } = createRouter({ routeTree })
    const pageIds = Object.keys(routesById).filter(
      (id) => id.startsWith('/$series/$locale/') && id !== '/$series/$locale/',
    )

    expect(new Set(pageIds)).toStrictEqual(
      new Set(PAGE_ROUTES.map(({ route }) => route.id)),
    )
  })

  it.each(CASES)(
    '$address answers by what $description.slug declares',
    async ({ address, description, page }) => {
      vi.mocked(seriesDescription).mockResolvedValue(description)
      vi.mocked(seriesCopy).mockResolvedValue(copyOf(description, 'en'))

      await expect(isNotFound(address)).resolves.toBe(
        !hasPage(description, page),
      )
    },
  )

  it.each(['fruits', 'fruits/any-id', 'filler'])(
    'answers 404 at /hunter-x-hunter/en/%s with Hunter x Hunter open',
    async (path) => {
      vi.mocked(seriesDescription).mockResolvedValue(HUNTER_X_HUNTER_SERIES)
      vi.mocked(seriesCopy).mockResolvedValue(
        copyOf(HUNTER_X_HUNTER_SERIES, 'en'),
      )

      await expect(isNotFound(`/hunter-x-hunter/en/${path}`)).resolves.toBe(
        true,
      )
    },
  )

  it.each(['characters', 'places', 'fruits', 'filler'] as const)(
    'keeps every One Piece page: %s',
    (page) => {
      expect(hasPage(ONE_PIECE_SERIES, page)).toBe(true)
    },
  )

  it('gives Hunter x Hunter its characters and places', () => {
    expect(hasPage(HUNTER_X_HUNTER_SERIES, 'characters')).toBe(true)
    expect(hasPage(HUNTER_X_HUNTER_SERIES, 'places')).toBe(true)
  })
})
