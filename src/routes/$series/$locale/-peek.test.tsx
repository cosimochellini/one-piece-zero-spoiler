import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type ReactElement, useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import type { CharacterView } from '~/lib/view/records'
import { at, character } from '~/test/fixtures'
import { renderWithProviders, settle } from '~/test/providers'

import { type Lift, usePeek } from './-peek'

/** Two veils on one slot, in miniature: one press asks twice at once. */
function Probe({ lift }: { lift: Lift<CharacterView> }): ReactElement {
  const peek = usePeek(lift)
  const [names, setNames] = useState<string[]>([])
  const askTwice = async (): Promise<void> => {
    const records = await Promise.all([peek('lead'), peek('lead')])
    setNames(records.map((record) => record.name))
  }

  return (
    <>
      <button
        onClick={() => {
          void askTwice()
        }}
        type="button"
      >
        Ask twice
      </button>
      <p>{names.join(' and ')}</p>
    </>
  )
}

describe('usePeek', () => {
  // A record page's drawing and words are two veils on one slot, and the
  // intro's "Show anyway" lifts both at once (#864).
  it('shares one request between two asks for the same handle at once', async () => {
    const user = userEvent.setup()
    const lift = vi
      .fn<Lift<CharacterView>>()
      .mockResolvedValue(character({ name: 'Orlumbus', ...at(636) }))
    renderWithProviders(<Probe lift={lift} />, {
      path: '/one-piece/en/characters/orlumbus',
    })

    await user.click(screen.getByRole('button', { name: 'Ask twice' }))
    await settle()

    expect(screen.getByText('Orlumbus and Orlumbus')).toBeInTheDocument()
    expect(lift).toHaveBeenCalledTimes(1)

    // Settled, the next ask is a request of its own.
    await user.click(screen.getByRole('button', { name: 'Ask twice' }))
    await settle()

    expect(lift).toHaveBeenCalledTimes(2)
  })
})
