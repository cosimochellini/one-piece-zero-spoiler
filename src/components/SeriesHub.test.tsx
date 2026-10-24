import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { HubSeries } from '~/lib/view/hub'
import { ep, renderWithProviders } from '~/test/providers'

import { SeriesHub } from './SeriesHub'

const onePiece = (bookmark: HubSeries['bookmark']): HubSeries => ({
  slug: 'one-piece',
  name: { en: 'One Piece', it: 'One Piece' },
  theme: 'one-piece',
  count: 737,
  bookmark,
})

describe('SeriesHub', () => {
  it('links a series to its own home, with its count and the bookmark', () => {
    renderWithProviders(<SeriesHub series={[onePiece(ep(650))]} />, {
      locale: 'it',
      path: '/it',
    })

    const card = screen.getByRole('link', { name: /One Piece/u })

    expect(card).toHaveAttribute('href', '/one-piece/it')
    expect(card).toHaveTextContent('Episodio 650')
    expect(card).toHaveTextContent('737 voci')
  })

  it.each([
    {
      bookmark: { mode: 'chapter', chapter: 1044 } as const,
      said: 'Chapter 1044',
    },
    {
      bookmark: { mode: 'season', season: 14, episode: 3 } as const,
      said: 'Season 14 · episode 3',
    },
    { bookmark: null, said: 'No bookmark yet' },
  ])('says where the reader stands: $said', ({ bookmark, said }) => {
    renderWithProviders(<SeriesHub series={[onePiece(bookmark)]} />, {
      path: '/en',
    })

    expect(screen.getByRole('link', { name: /One Piece/u })).toHaveTextContent(
      said,
    )
  })

  it('announces a series still to come with no link and no count', () => {
    renderWithProviders(<SeriesHub series={[onePiece(null)]} />, {
      path: '/en',
    })

    const coming = screen.getByRole('heading', { name: 'Hunter x Hunter' })

    expect(coming.closest('a')).not.toBeInTheDocument()
    expect(coming.parentElement).toHaveTextContent('Coming')
    expect(screen.getAllByText(/entries/u)).toHaveLength(1)
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
})
