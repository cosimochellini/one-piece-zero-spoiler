import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { ep, renderWithProviders } from '~/test/providers'

import { CharacterTile } from './CharacterTile'

// A made-up id: `roleOf` reads the live dossiers by id, and the test must
// not depend on what the archive currently says about Nami.
const nami: Entity = {
  id: 'test-navigator',
  kind: 'character',
  revealedAtEpisode: 5,
  revealedAtChapter: 5,
  name: { it: 'Nami', en: 'Nami' },
  summary: { it: 'x', en: 'x' },
  visual: { art: 'nami', tint: 'orange' },
}

describe('CharacterTile', () => {
  it('links an open character with their drawing and name', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          entity={nami}
          highlight={[0, 3]}
          revealed
        />
      </ul>,
      { bookmark: ep(10) },
    )

    expect(screen.getByRole('link', { name: /Nami/u })).toHaveAttribute(
      'href',
      '/en/characters/test-navigator',
    )
    expect(screen.getByText('Nam').tagName).toBe('MARK')
    expect(screen.getByText('Episode 5')).toBeVisible()
    expect(container.querySelectorAll('path').length).toBeGreaterThan(3)
  })

  it('keeps a covered character out of the DOM but for the episode', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          entity={nami}
          revealed={false}
        />
      </ul>,
      { bookmark: ep(1) },
    )

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByText('Nami')).not.toBeInTheDocument()
    expect(container.querySelectorAll('path')).toHaveLength(0)
    expect(screen.getByText('Spoiler')).toBeInTheDocument()
    expect(screen.getByText('Episode 5')).toBeVisible()
  })
})
