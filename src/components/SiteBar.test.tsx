import { screen, within } from '@testing-library/react'
import { type ReactElement, useMemo } from 'react'
import { describe, expect, it } from 'vitest'

import { BookmarkContext, useBookmark } from '~/lib/progress/BookmarkContext'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
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

describe('SiteBar', () => {
  it('carries the wordmark, three page links, the bookmark and the language control, and nothing else', () => {
    renderWithProviders(<SiteBar />)

    const banner = screen.getByRole('banner')

    expect(
      within(banner).getByRole('link', { name: 'Zero Spoiler' }),
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
    expect(within(banner).getAllByRole('link')).toHaveLength(4)
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
        screen.getByRole('link', { name: 'Zero Spoiler' }),
      ).toHaveAttribute('href', '/en')
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
      expect(
        screen.getByRole('combobox', { name: 'Language' }),
      ).toBeInTheDocument()
    },
  )

  it('takes content link parameters from the selected series', () => {
    renderWithProviders(<OtherSeriesBar />)

    expect(screen.getByRole('link', { name: 'Zero Spoiler' })).toHaveAttribute(
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
})
