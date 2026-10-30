import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { record } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'
import { settleDelay } from '~/test/settle'

import { HomeFold } from './HomeFold'

const saga = { ...record({ name: 'East Blue' }), summary: 'Where it starts.' }

describe('HomeFold', () => {
  it('shows the drawing and the words at once and settles only the control', () => {
    renderWithProviders(
      <HomeFold
        band={2}
        point={{ mode: 'episode', episode: 650 }}
        saga={saga}
      />,
    )

    const fold = screen.getByRole('region', { name: 'East Blue' })
    const settling = [...fold.querySelectorAll('*')]
      .map((band) => settleDelay(band))
      .filter((delay) => delay !== null)

    expect(settleDelay(fold)).toBeNull()
    expect(settling).toStrictEqual(['140ms'])
  })

  it.each<[NonNullable<Bookmark>, string]>([
    [{ mode: 'episode', episode: 650 }, 'Episode 650'],
    [{ mode: 'chapter', chapter: 1044 }, 'Chapter 1044'],
    [{ mode: 'season', season: 2, episode: 3 }, 'Season 2 · episode 3'],
  ])('states the reader point for %o in its own unit', (bookmark, point) => {
    renderWithProviders(
      <HomeFold
        band={0}
        point={bookmark}
        saga={saga}
      />,
    )

    expect(screen.getByText(point)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'East Blue' }),
    ).toBeInTheDocument()
  })
})
