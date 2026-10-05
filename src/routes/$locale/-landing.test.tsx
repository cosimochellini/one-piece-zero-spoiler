import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { coveredRecord, peekPending, waypoint } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { LandingPage } from './-landing'

const saga = waypoint({ name: 'Dressrosa', summary: 'The toy kingdom.' })

describe('LandingPage', () => {
  it('draws the fogged chart for a reader with no bookmark', () => {
    renderWithProviders(
      <LandingPage
        landing={{ chart: { covered: [coveredRecord()], filed: 1, open: [] } }}
        peek={peekPending()}
      />,
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'The One Piece wiki without spoilers',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'The main entries, in story order' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Anime or manga?')).toBeInTheDocument()
  })

  it('draws the reader’s arc for a reader with a bookmark', () => {
    renderWithProviders(
      <LandingPage
        landing={{
          home: {
            before: false,
            cast: [],
            point: { mode: 'episode', episode: 650 },
            saga,
            stories: [],
          },
        }}
        peek={peekPending()}
      />,
      { bookmark: { mode: 'episode', episode: 650 } },
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'Dressrosa' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Episode 650')).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', {
        name: 'The main entries, in story order',
      }),
    ).not.toBeInTheDocument()
  })
})
