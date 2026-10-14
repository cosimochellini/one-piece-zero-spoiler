import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { travelWith } from '~/styles/morph'
import { at, character, openSlot, peekPending } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { CharacterCard } from './CharacterCard'

const nami = character({ id: 'test-navigator', name: 'Nami', ...at(5) })

describe('CharacterCard', () => {
  it('names the card the reader comes back to, and no other', () => {
    travelWith('character', 'test-cook')
    const sanji = character({ id: 'test-cook', name: 'Sanji', ...at(20) })
    const { container } = renderWithProviders(
      <ul>
        <CharacterCard
          peek={peekPending()}
          slot={openSlot(sanji)}
        />
        <CharacterCard
          peek={peekPending()}
          slot={openSlot(nami)}
        />
      </ul>,
      { bookmark: ep(30) },
    )

    expect(
      container.querySelector('[style*="character-test-cook-art"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[style*="character-test-cook-name"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[style*="character-test-navigator"]'),
    ).not.toBeInTheDocument()
  })

  it('takes the names only when clicked', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(
      <ul>
        <CharacterCard
          peek={peekPending()}
          slot={openSlot(nami)}
        />
      </ul>,
      { bookmark: ep(10) },
    )

    expect(
      container.querySelector('[style*="character-test-navigator"]'),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: /Nami/u }))

    expect(
      container.querySelector('[style*="character-test-navigator-art"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[style*="character-test-navigator-name"]'),
    ).toBeInTheDocument()
  })
})
