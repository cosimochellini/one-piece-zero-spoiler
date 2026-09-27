import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { at, character, openSlot, peekPending } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { CharacterCard } from './CharacterCard'

const nami = character({ id: 'test-navigator', name: 'Nami', ...at(5) })

describe('CharacterCard', () => {
  it('names the crest and the name that travel to the page', () => {
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
      container.querySelector('[style*="character-test-navigator-art"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[style*="character-test-navigator-name"]'),
    ).toBeInTheDocument()
  })

  it('takes the names only when clicked on a record page', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(
      <ul>
        <CharacterCard
          morph="onClick"
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
