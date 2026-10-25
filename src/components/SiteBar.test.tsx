import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { render, screen, within } from '@testing-library/react'
import { type ReactElement, useMemo } from 'react'
import { describe, expect, it } from 'vitest'

import { LocaleProvider } from '~/i18n/LocaleProvider'
import type { Locale } from '~/i18n/locales'
import { BookmarkContext, useBookmark } from '~/lib/progress/BookmarkContext'
import { BookmarkProvider } from '~/lib/progress/BookmarkProvider'
import {
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_BOOKMARK,
  ONE_PIECE_SERIES,
  type Series,
} from '~/lib/progress/series'
import { ep, renderWithProviders } from '~/test/providers'

import { SiteBar } from './SiteBar'

// The switch is a routed select with its own test; here it only has to be
// there.
function LocaleSwitch(): ReactElement {
  return <select aria-label="Language" />
}

vi.mock(import('~/components/LocaleSwitch'), () => ({ LocaleSwitch }))

const OTHER_SERIES = { ...ONE_PIECE_BOOKMARK, slug: 'other-series' }

function OtherSeriesBar(): ReactElement {
  const bookmark = useBookmark()
  const value = useMemo(
    () => ({ ...bookmark, series: OTHER_SERIES }),
    [bookmark],
  )
  return (
    <BookmarkContext value={value}>
      <SiteBar />
    </BookmarkContext>
  )
}

/** One Piece, its two names apart, to show which language is read. */
const NAMED_APART: Series = {
  ...ONE_PIECE_SERIES,
  name: { en: 'One Piece', it: 'One Piece (it)' },
}

/**
 * Renders the bar under a `/$series` match, as the app does, so the series'
 * name comes from the route's public description. The two names differ only
 * to show which language is read.
 */
async function renderUnderSeries(
  path: string,
  locale: Locale,
  series: Series = NAMED_APART,
): Promise<void> {
  const rootRoute = createRootRoute()
  const seriesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '$series',
    beforeLoad: () => ({ series }),
    component: (): ReactElement => (
      <LocaleProvider locale={locale}>
        <BookmarkProvider
          initialBookmark={null}
          series={series}
        >
          <SiteBar />
        </BookmarkProvider>
      </LocaleProvider>
    ),
  })
  const page = createRoute({ getParentRoute: () => seriesRoute, path: '$' })
  const router = createRouter({
    routeTree: rootRoute.addChildren([seriesRoute.addChildren([page])]),
    history: createMemoryHistory({ initialEntries: [path] }),
  })
  await router.load()
  render(<RouterProvider router={router} />)
}

describe('SiteBar', () => {
  it('carries the wordmark, three page links, the bookmark and the language control, and nothing else', () => {
    renderWithProviders(<SiteBar />)

    const banner = screen.getByRole('banner')

    expect(
      within(banner).getByRole('link', { name: 'Zero Spoiler. All series' }),
    ).toHaveAttribute('href', '/en')
    // No route has described the series here, so its name falls back to the
    // slug; `names the series` covers the described name.
    expect(
      within(banner).getByRole('link', { name: 'one-piece' }),
    ).toHaveAttribute('href', '/one-piece/en')
    expect(
      within(banner).getByRole('navigation', { name: 'Pages' }),
    ).toBeInTheDocument()
    expect(
      within(banner).getByRole('link', { name: 'Characters' }),
    ).toHaveAttribute('href', '/one-piece/en/characters')
    expect(
      within(banner).getByRole('link', { name: 'Places' }),
    ).toHaveAttribute('href', '/one-piece/en/places')
    expect(
      within(banner).getByRole('link', { name: 'Fruits' }),
    ).toHaveAttribute('href', '/one-piece/en/fruits')
    expect(
      within(banner).getByRole('combobox', { name: 'Language' }),
    ).toBeInTheDocument()
    expect(
      within(banner).getByRole('button', { name: 'Set episode' }),
    ).toHaveAttribute('aria-haspopup', 'dialog')
    // The bar paints the empty slot; the words stay the button's name.
    expect(
      within(banner).getByRole('button', { name: 'Set episode' }),
    ).toHaveTextContent('EP ?')
    // No link row filling the middle: the space is the design.
    expect(within(banner).getAllByRole('link')).toHaveLength(5)
    expect(within(banner).getAllByRole('button')).toHaveLength(1)
  })

  it('shows the bookmark as one mark, in the unit the reader counts in', () => {
    const { unmount } = renderWithProviders(<SiteBar />, { bookmark: ep(650) })

    expect(
      screen.getByRole('button', { name: 'Change bookmark (EP 650)' }),
    ).toHaveTextContent('EP 650')

    unmount()

    const view = renderWithProviders(<SiteBar />, {
      bookmark: { mode: 'season', season: 2, episode: 3 },
    })

    expect(screen.getByRole('button')).toHaveTextContent('S02E03')

    view.unmount()

    renderWithProviders(<SiteBar />, {
      bookmark: { mode: 'chapter', chapter: 1044 },
    })

    expect(screen.getByRole('button')).toHaveTextContent('CH 1044')
  })

  it('marks the characters link as the current page when the reader is on it', () => {
    renderWithProviders(<SiteBar />, { path: '/one-piece/en/characters' })

    expect(screen.getByRole('link', { name: 'Characters' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('marks the places link as the current page when the reader is on it', () => {
    renderWithProviders(<SiteBar />, { path: '/one-piece/en/places' })

    expect(screen.getByRole('link', { name: 'Places' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(
      screen.getByRole('link', { name: 'Characters' }),
    ).not.toHaveAttribute('aria-current')
  })

  it('marks the fruits link as the current page when the reader is on it', () => {
    renderWithProviders(<SiteBar />, { path: '/one-piece/en/fruits' })

    expect(screen.getByRole('link', { name: 'Fruits' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('link', { name: 'Places' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('does not mark any page link on the landing', () => {
    renderWithProviders(<SiteBar />, { path: '/one-piece/en' })

    expect(
      screen.getByRole('link', { name: 'Characters' }),
    ).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('link', { name: 'Places' })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('link', { name: 'Fruits' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('links in the active locale', () => {
    renderWithProviders(<SiteBar />, { locale: 'it' })

    expect(screen.getByRole('link', { name: 'Personaggi' })).toHaveAttribute(
      'href',
      '/one-piece/it/characters',
    )
    expect(screen.getByRole('link', { name: 'Luoghi' })).toHaveAttribute(
      'href',
      '/one-piece/it/places',
    )
    expect(screen.getByRole('link', { name: 'Frutti' })).toHaveAttribute(
      'href',
      '/one-piece/it/fruits',
    )
    expect(
      screen.getByRole('button', { name: 'Imposta episodio' }),
    ).toBeInTheDocument()
  })

  it.each(['/en', '/en/legal'])(
    'keeps %s free of series navigation and bookmark controls',
    (path) => {
      renderWithProviders(<SiteBar />, { path })

      expect(
        screen.getByRole('link', { name: 'Zero Spoiler. All series' }),
      ).toHaveAttribute('href', '/en')
      // The wordmark is the only link: no series to go back to.
      expect(screen.getAllByRole('link')).toHaveLength(1)
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
      expect(
        screen.getByRole('combobox', { name: 'Language' }),
      ).toBeInTheDocument()
    },
  )

  it('marks the wordmark as the current page on the hub only', () => {
    const { unmount } = renderWithProviders(<SiteBar />, { path: '/en' })

    expect(
      screen.getByRole('link', { name: 'Zero Spoiler. All series' }),
    ).toHaveAttribute('aria-current', 'page')

    unmount()
    renderWithProviders(<SiteBar />, { path: '/en/legal' })

    expect(
      screen.getByRole('link', { name: 'Zero Spoiler. All series' }),
    ).not.toHaveAttribute('aria-current')
  })

  it('takes content link parameters from the selected series', () => {
    renderWithProviders(<OtherSeriesBar />)

    expect(
      screen.getByRole('link', { name: 'Zero Spoiler. All series' }),
    ).toHaveAttribute('href', '/en')
    expect(screen.getByRole('link', { name: 'other-series' })).toHaveAttribute(
      'href',
      '/other-series/en',
    )
    expect(screen.getByRole('link', { name: 'Characters' })).toHaveAttribute(
      'href',
      '/other-series/en/characters',
    )
    expect(screen.getByRole('link', { name: 'Fruits' })).toHaveAttribute(
      'href',
      '/other-series/en/fruits',
    )
  })

  it.each([
    ['en', 'Zero Spoiler. All series', 'One Piece'],
    ['it', 'Zero Spoiler. Tutte le serie', 'One Piece (it)'],
  ] as const)(
    'names the hub and the series apart, in %s',
    async (locale, wordmark, name) => {
      await renderUnderSeries(`/one-piece/${locale}/characters`, locale)

      const banner = screen.getByRole('banner')

      expect(
        within(banner).getByRole('link', { name: wordmark }),
      ).toHaveAttribute('href', `/${locale}`)
      expect(within(banner).getByRole('link', { name })).toHaveAttribute(
        'href',
        `/one-piece/${locale}`,
      )
      // Tab order is document order: wordmark, series, then its pages.
      expect(
        within(banner)
          .getAllByRole('link')
          .slice(0, 3)
          .map((link) => link.getAttribute('href')),
      ).toStrictEqual([
        `/${locale}`,
        `/one-piece/${locale}`,
        `/one-piece/${locale}/characters`,
      ])
      // Not the series' home, so the name is a way back, not the current page.
      expect(within(banner).getByRole('link', { name })).not.toHaveAttribute(
        'aria-current',
      )
    },
  )

  it.each([
    { series: ONE_PIECE_SERIES, pages: ['Characters', 'Places', 'Fruits'] },
    { series: HUNTER_X_HUNTER_SERIES, pages: ['Characters', 'Places'] },
  ])(
    'links only the pages $series.slug declares',
    async ({ series, pages }) => {
      await renderUnderSeries(`/${series.slug}/en`, 'en', series)

      expect(
        within(screen.getByRole('navigation', { name: 'Pages' }))
          .getAllByRole('link')
          .map((link) => [link.textContent, link.getAttribute('href')]),
      ).toStrictEqual(
        pages.map((page) => [page, `/${series.slug}/en/${page.toLowerCase()}`]),
      )
    },
  )

  it('marks the series name as the current page on the series home', async () => {
    await renderUnderSeries('/one-piece/en', 'en')

    expect(screen.getByRole('link', { name: 'One Piece' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
