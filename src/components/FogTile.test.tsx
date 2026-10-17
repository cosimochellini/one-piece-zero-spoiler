import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import {
  at,
  coveredRecord,
  peekFails,
  peekPending,
  peekTo,
  spyPeek,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { FogTile } from './FogTile'

interface Secret {
  name: string
}

const SECRET: Secret = { name: 'Spoiler body' }

/** What the fog hides: a link, built from the record and never before it. */
function body(shown: Secret): ReactElement {
  return <a href="/secret">{shown.name}</a>
}

function tile(peek: (handle: string) => Promise<Secret>): ReactElement {
  return (
    <FogTile
      covered={coveredRecord({ handle: 'zz', ...at(462) })}
      lines={['Fruit 03 · Zoan', 'First named in episode 462']}
      peek={peek}
    >
      {body}
    </FogTile>
  )
}

describe('FogTile', () => {
  it('prints its lines, names the threshold, and hides the fog from assistive technology', () => {
    const { container } = renderWithProviders(tile(peekPending()), {
      bookmark: ep(100),
    })

    expect(screen.getByText('Fruit 03 · Zoan')).toBeInTheDocument()
    expect(screen.getByText('First named in episode 462')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: 'Under fog until episode 462. Show anyway',
      }),
    ).toBeInTheDocument()
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(1)
    expect(container.querySelector('[style]')).toBeNull()
  })

  it('never builds what it covers before the record arrives', () => {
    expect(() => {
      renderWithProviders(
        <FogTile
          covered={coveredRecord()}
          lines={['Fruit 01']}
          peek={peekPending<Secret>()}
        >
          {() => {
            throw new Error('the covered children were built')
          }}
        </FogTile>,
      )
    }).not.toThrow()
  })

  it('asks on the first Enter, sends on the second, and moves focus into the record', async () => {
    const user = userEvent.setup()
    const { asked, peek } = spyPeek(SECRET)
    renderWithProviders(tile(peek), { bookmark: ep(100) })

    await user.tab()

    expect(screen.getByRole('button')).toHaveFocus()

    await user.keyboard('{Enter}')

    expect(screen.getByRole('button')).toHaveTextContent(
      'Show it anyway?Yes, show',
    )
    expect(asked).toStrictEqual([])

    await user.keyboard('{Enter}')
    await settle()

    // The opaque handle, passed through untouched.
    expect(asked).toStrictEqual(['zz'])
    expect(screen.getByRole('link', { name: 'Spoiler body' })).toHaveFocus()
  })

  it('takes Space as well as Enter', async () => {
    const user = userEvent.setup()
    renderWithProviders(tile(peekTo(SECRET)), { bookmark: ep(100) })

    await user.tab()
    await user.keyboard(' ')
    await user.keyboard(' ')

    const link = await screen.findByRole('link', { name: 'Spoiler body' })

    expect(link).toBeInTheDocument()
  })

  it('cancels the question on Escape and when the reader leaves the tile', async () => {
    const user = userEvent.setup()
    const { asked, peek } = spyPeek(SECRET)
    renderWithProviders(tile(peek), { bookmark: ep(100) })

    await user.tab()
    await user.keyboard('{Enter}')
    await user.keyboard('{Escape}')

    expect(screen.getByRole('button')).not.toHaveTextContent('Show it anyway?')

    await user.keyboard('{Enter}')
    await user.tab()

    expect(
      screen.getByRole('button', {
        name: 'Under fog until episode 462. Show anyway',
      }),
    ).toBeInTheDocument()
    expect(asked).toStrictEqual([])
  })

  it('says it is working while the record is on its way', async () => {
    const user = userEvent.setup()
    renderWithProviders(tile(peekPending()), { bookmark: ep(100) })

    await user.click(screen.getByRole('button'))
    await user.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByRole('button')).toHaveTextContent('Loading')
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('says so when the record does not come, and the next press tries again', async () => {
    const user = userEvent.setup()
    const failing = peekFails<Secret>()
    let calls = 0
    renderWithProviders(
      tile(async (handle) => {
        calls += 1
        return failing(handle)
      }),
      { bookmark: ep(100) },
    )

    await user.click(screen.getByRole('button'))
    await user.click(screen.getByRole('button'))
    await settle()

    expect(screen.getByRole('button')).toHaveTextContent(
      'Could not load it. Try again.',
    )

    // Already answered: the next press sends again, without asking twice.
    await user.click(screen.getByRole('button'))
    await settle()

    expect(calls).toBe(2)
  })
})
