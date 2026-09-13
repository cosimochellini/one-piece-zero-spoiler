import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { at, coveredSlot, openSlot, peekPending, record } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { RecordTile } from './RecordTile'

describe('RecordTile', () => {
  it('links an open character to their page', () => {
    renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(record({ id: 'sanji', name: 'Sanji', ...at(20) }))}
      />,
    )

    expect(screen.getByRole('link', { name: 'Sanji' })).toHaveAttribute(
      'href',
      '/en/characters/sanji',
    )
    expect(screen.getByText('Episode 20')).toBeVisible()
  })

  it('links an open place to its entry in the log', () => {
    renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(
          record({ id: 'baratie', kind: 'place', name: 'Baratie' }),
        )}
      />,
    )

    expect(screen.getByRole('link', { name: 'Baratie' })).toHaveAttribute(
      'href',
      '/en/places#baratie',
    )
  })

  it('leaves a ship as a name', () => {
    renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(
          record({ id: 'going-merry', kind: 'ship', name: 'Going Merry' }),
        )}
      />,
    )

    expect(screen.getByText('Going Merry')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('keeps a covered record’s name, drawing and slug out of the DOM', () => {
    const { container } = renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={coveredSlot({ ...at(20) })}
      />,
    )

    expect(screen.queryByText('Sanji')).not.toBeInTheDocument()
    expect(screen.getByText('Spoiler')).toBeInTheDocument()
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('svg')).toBeNull()
    expect(screen.getByText('Episode 20')).toBeVisible()
  })
})
