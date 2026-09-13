import { screen, within } from '@testing-library/react'

import { ep, renderWithProviders } from '~/test/providers'

import { SiteBar } from './SiteBar'

// The switch is two <Link>s with their own test; here it is only a landmark.
vi.mock('~/components/LocaleSwitch', () => ({
  LocaleSwitch: () => <nav aria-label="Language" />,
}))

describe('SiteBar', () => {
  it('carries the wordmark, two page links, the bookmark and the language control, and nothing else', () => {
    renderWithProviders(<SiteBar />)

    const banner = screen.getByRole('banner')
    expect(
      within(banner).getByRole('link', { name: 'Zero Spoiler' }),
    ).toHaveAttribute('href', '/en')
    expect(
      within(banner).getByRole('navigation', { name: 'Pages' }),
    ).toBeInTheDocument()
    expect(
      within(banner).getByRole('link', { name: 'Characters' }),
    ).toHaveAttribute('href', '/en/characters')
    expect(
      within(banner).getByRole('link', { name: 'Places' }),
    ).toHaveAttribute('href', '/en/places')
    expect(
      within(banner).getByRole('navigation', { name: 'Language' }),
    ).toBeInTheDocument()
    expect(
      within(banner).getByRole('button', { name: 'Set episode' }),
    ).toHaveAttribute('aria-haspopup', 'dialog')
    // No link row filling the middle: the space is the design.
    expect(within(banner).getAllByRole('link')).toHaveLength(3)
    expect(within(banner).getAllByRole('button')).toHaveLength(1)
  })

  it('shows the bookmark as one mark, in the unit the reader counts in', () => {
    const { unmount } = renderWithProviders(<SiteBar />, { bookmark: ep(650) })
    expect(
      screen.getByRole('button', { name: 'Change your bookmark, EP 650' }),
    ).toHaveTextContent('EP 650')
    unmount()

    const second = renderWithProviders(<SiteBar />, {
      bookmark: { mode: 'season', season: 2, episode: 3 },
    })
    expect(screen.getByRole('button')).toHaveTextContent('S02E03')
    second.unmount()

    renderWithProviders(<SiteBar />, {
      bookmark: { mode: 'chapter', chapter: 1044 },
    })
    expect(screen.getByRole('button')).toHaveTextContent('CH 1044')
  })

  it('marks the characters link as the current page when the reader is on it', () => {
    renderWithProviders(<SiteBar />, { path: '/en/characters' })

    expect(screen.getByRole('link', { name: 'Characters' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('marks the places link as the current page when the reader is on it', () => {
    renderWithProviders(<SiteBar />, { path: '/en/places' })

    expect(screen.getByRole('link', { name: 'Places' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(
      screen.getByRole('link', { name: 'Characters' }),
    ).not.toHaveAttribute('aria-current')
  })

  it('does not mark either page link on the landing', () => {
    renderWithProviders(<SiteBar />, { path: '/en' })

    expect(
      screen.getByRole('link', { name: 'Characters' }),
    ).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('link', { name: 'Places' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('links in the active locale', () => {
    renderWithProviders(<SiteBar />, { locale: 'it' })

    expect(screen.getByRole('link', { name: 'Personaggi' })).toHaveAttribute(
      'href',
      '/it/characters',
    )
    expect(screen.getByRole('link', { name: 'Luoghi' })).toHaveAttribute(
      'href',
      '/it/places',
    )
    expect(
      screen.getByRole('button', { name: 'Imposta episodio' }),
    ).toBeInTheDocument()
  })
})
