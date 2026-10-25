import {
  createMemoryHistory,
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import { readPreferredLocale } from '~/i18n/readLocale'
import type { SeriesCopy } from '~/i18n/types'
import { ONE_PIECE_SERIES, type Series } from '~/lib/progress/series'
import { seriesDescription } from '~/routes/-series'
import { themeOf, THEMES } from '~/styles/themes'

import { Route as SharedRoute } from './$locale'
import { Route as SeriesRoute } from './$series'
import { Route as SeriesLocaleRoute } from './$series/$locale'

type PrefixParser<Key extends string> = (
  params: Record<Key, string>,
) => false | Record<Key, string>
interface GuardInput {
  context: { series: null | Series }
  location: { pathname: string }
  params: Record<string, string>
}
type RouteGuard = (input: GuardInput) => unknown

function isParser<Key extends string>(
  value: unknown,
): value is PrefixParser<Key> {
  return typeof value === 'function'
}

function parserOf<Key extends string>(route: {
  options: { params?: { parse?: unknown } }
}): PrefixParser<Key> {
  const parser: unknown = route.options.params?.parse
  if (!isParser<Key>(parser)) {
    throw new TypeError('A prefix parser is required')
  }
  return parser
}

function isGuard(value: unknown): value is RouteGuard {
  return typeof value === 'function'
}

function isSeriesContext(value: unknown): value is { series: Series } {
  return typeof value === 'object' && value !== null && 'series' in value
}

function guardOf(route: { options: { beforeLoad?: unknown } }): RouteGuard {
  const guard: unknown = route.options.beforeLoad
  if (!isGuard(guard)) {
    throw new TypeError('A route guard is required')
  }
  return guard
}

const root = createRootRouteWithContext<{ series: null | Series }>()()
const sharedGuard = guardOf(SharedRoute)
const seriesGuard = guardOf(SeriesRoute)
const localeGuard = guardOf(SeriesLocaleRoute)
const shared = createRoute({
  getParentRoute: () => root,
  path: '$locale',
  params: { parse: parserOf<'locale'>(SharedRoute) },
  beforeLoad: async (input) => {
    await sharedGuard(input)
  },
})
const series = createRoute({
  getParentRoute: () => root,
  path: '$series',
  params: { parse: parserOf<'series'>(SeriesRoute) },
  // The context it returns is what the root reads the series theme from.
  beforeLoad: async (input) => {
    const context = await seriesGuard(input)
    return isSeriesContext(context) ? context : undefined
  },
})
const seriesLocale = createRoute({
  getParentRoute: () => series,
  path: '$locale',
  params: { parse: parserOf<'locale'>(SeriesLocaleRoute) },
  beforeLoad: async (input) => {
    await localeGuard(input)
  },
})
const hub = createRoute({ getParentRoute: () => shared, path: '/' })
const legal = createRoute({ getParentRoute: () => shared, path: 'legal' })
const home = createRoute({ getParentRoute: () => seriesLocale, path: '/' })
const character = createRoute({
  getParentRoute: () => seriesLocale,
  path: 'characters/$id',
})
const tree = root.addChildren([
  shared.addChildren([hub, legal]),
  series.addChildren([seriesLocale.addChildren([home, character])]),
])

vi.mock(import('~/routes/-series'), async () => {
  const { copyOf } = await import('~/server/copy.server')
  const progress = await import('~/lib/progress/series')
  return {
    seriesDescription: vi.fn<(slug: string) => Promise<null | Series>>(),
    // The series' copy is the server's to send; here, One Piece's as it would.
    seriesCopy: vi
      .fn<(slug: string) => Promise<SeriesCopy>>()
      .mockResolvedValue(copyOf(progress.ONE_PIECE_SERIES, 'en')),
  }
})
vi.mock(import('~/i18n/readLocale'), () => ({
  readPreferredLocale: vi.fn<() => Locale>(),
}))

type MatchingRouter = ReturnType<typeof createRouter<typeof tree>>

async function at(path: string): Promise<MatchingRouter> {
  const router = createRouter({
    routeTree: tree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { series: null },
  })
  await router.load()
  return router
}

describe('the shared and series route prefixes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(seriesDescription).mockResolvedValue(ONE_PIECE_SERIES)
    vi.mocked(readPreferredLocale).mockReturnValue('en')
  })

  it.each(['/en', '/it/legal'])(
    'matches %s through the shared locale tree',
    async (path) => {
      const router = await at(path)
      const matched = router.state.matches.map(({ routeId }) => routeId)

      expect(matched).toContain('/$locale')
      expect(matched).not.toContain('/$series')
      expect(
        router.state.matches.every(({ status }) => status === 'success'),
      ).toBe(true)
      expect(seriesDescription).not.toHaveBeenCalled()
    },
  )

  it('matches a series record without letting the locale tree shadow it', async () => {
    const router = await at('/one-piece/en/characters/nami')
    const matched = router.state.matches.map(({ routeId }) => routeId)

    expect(matched).toContain('/$series/$locale/characters/$id')
    expect(matched).not.toContain('/$locale')
    expect(
      router.state.matches.every(({ status }) => status === 'success'),
    ).toBe(true)
    expect(seriesDescription).toHaveBeenCalledWith('one-piece')
  })

  it('rejects an unknown series at the actual series guard', async () => {
    vi.mocked(seriesDescription).mockResolvedValue(null)
    const router = await at('/missing/en/characters/nami')

    expect(
      router.state.matches.some(
        (match) => match.status === 'notFound' || match._notFound === true,
      ),
    ).toBe(true)
    expect(seriesDescription).toHaveBeenCalledWith('missing')
  })

  it.each(['/one-piece/fr/characters/nami', '/fr/legal'])(
    'rejects the unknown locale in %s',
    async (path) => {
      const router = await at(path)

      expect(
        router.state.matches.some(
          (match) => match.status === 'notFound' || match._notFound === true,
        ),
      ).toBe(true)
    },
  )

  it.each(LOCALES)(
    'redirects a bare series to negotiated %s with 302',
    async (locale) => {
      vi.mocked(readPreferredLocale).mockReturnValue(locale)

      await expect(
        seriesGuard({
          params: { series: 'one-piece' },
          context: { series: null },
          location: { pathname: '/one-piece' },
        }),
      ).rejects.toMatchObject({
        status: 302,
        options: {
          statusCode: 302,
          to: '/$series/$locale',
          params: { series: 'one-piece', locale },
        },
      })
    },
  )

  it('rejects an unknown bare series before it can redirect', async () => {
    vi.mocked(seriesDescription).mockResolvedValue(null)

    await expect(
      seriesGuard({
        params: { series: 'missing' },
        context: { series: null },
        location: { pathname: '/missing' },
      }),
    ).rejects.toMatchObject({ isNotFound: true })
    expect(readPreferredLocale).not.toHaveBeenCalled()
  })

  it.each([
    { path: '/one-piece/en/characters/nami', theme: THEMES['one-piece'] },
    { path: '/one-piece/en/nope', theme: THEMES['one-piece'] },
    { path: '/nope/xx', theme: false },
    { path: '/nope/en/whatever', theme: false },
    { path: '/missing/en/characters/nami', theme: false },
    { path: '/en/legal', theme: false },
  ])(
    'paints $path in the theme of its series, if any',
    async ({ path, theme }) => {
      vi.mocked(seriesDescription).mockResolvedValue(
        path.startsWith('/one-piece/') ? ONE_PIECE_SERIES : null,
      )
      const router = await at(path)
      const match = router.state.matches.find(
        ({ routeId }) => routeId === '/$series',
      )

      expect(themeOf(match?.context.series)).toBe(theme)
    },
  )
})
