import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import {
  at,
  coveredSlot,
  openSlot,
  peekPending,
  searchable,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { CharacterTile } from './CharacterTile'

const nami = searchable({ id: 'test-navigator', name: 'Nami', ...at(5) })

describe('CharacterTile', () => {
  it('links an open character with their drawing and name', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          highlight={[0, 3]}
          peek={peekPending()}
          slot={openSlot(nami)}
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
          peek={peekPending()}
          slot={coveredSlot({ ...at(5) })}
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
