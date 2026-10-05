import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { record } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { HomeFold } from './HomeFold'

const saga = { ...record({ name: 'East Blue' }), summary: 'Where it starts.' }

describe('HomeFold', () => {
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
