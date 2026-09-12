import { screen } from '@testing-library/react'

import type { Entity } from '~/data/types'
import { renderWithProviders } from '~/test/providers'

import { CharacterTile } from './CharacterTile'

const nami: Entity = {
  id: 'nami',
  kind: 'character',
  revealedAtEpisode: 5,
  name: { it: 'Nami', en: 'Nami' },
  summary: { it: 'x', en: 'x' },
  visual: { art: 'nami', tint: 'orange' },
}

describe('CharacterTile', () => {
  it('links an open character with their drawing, name and role', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile entity={nami} revealed highlight={[0, 3]} />
      </ul>,
      { progress: 10 },
    )

    expect(screen.getByRole('link', { name: /Nami/u })).toHaveAttribute(
      'href',
      '/en/characters/nami',
    )
    expect(screen.getByText('Nam').tagName).toBe('MARK')
    expect(screen.getByText('Navigator and thief')).toBeInTheDocument()
    expect(screen.getByText('Episode 5')).toBeVisible()
    expect(container.querySelectorAll('path').length).toBeGreaterThan(3)
  })

  it('keeps a covered character out of the DOM but for the episode', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile entity={nami} revealed={false} />
      </ul>,
      { progress: 1 },
    )

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByText('Nami')).not.toBeInTheDocument()
    expect(screen.queryByText('Navigator and thief')).not.toBeInTheDocument()
    expect(container.querySelectorAll('path')).toHaveLength(0)
    expect(screen.getByText('Spoiler')).toBeInTheDocument()
    expect(screen.getByText('Episode 5')).toBeVisible()
  })
})
