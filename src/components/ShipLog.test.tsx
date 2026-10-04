import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { at, peekPending, record, ship, shipEntry } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { ShipLog } from './ShipLog'

const merry = ship({
  id: 'going-merry',
  name: 'Going Merry',
  ...at(18),
  dossier: shipEntry({
    builder: 'Merry, Kaya’s butler',
    launched: 'Syrup Village',
    fate: 'The crew’s ship.',
  }),
})

const reached = record({
  id: 'florian-triangle',
  kind: 'place',
  name: 'Florian Triangle',
})

const sunny = ship({
  id: 'thousand-sunny',
  name: 'Thousand Sunny',
  ...at(324),
  dossier: shipEntry({ ports: [reached] }),
})

/** The ship one piece of the band belongs to. */
function rowOf(element: HTMLElement): HTMLElement {
  const row = element.closest('li')
  if (row === null) {
    throw new Error('no ship around the element')
  }

  return row
}

describe('ShipLog', () => {
  it('opens a reached ship with her facts, her fate and an anchor', () => {
    renderWithProviders(
      <ShipLog
        peekRecord={peekPending()}
        ships={[merry]}
      />,
      { bookmark: ep(20) },
    )

    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Going Merry',
    })
    const row = rowOf(heading)

    expect(screen.getByRole('region', { name: 'Ships' })).toBeInTheDocument()
    expect(row).toHaveAttribute('id', 'going-merry')
    expect(within(row).getByText('Merry, Kaya’s butler')).toBeInTheDocument()
    expect(within(row).getByText('Syrup Village')).toBeInTheDocument()
    expect(within(row).getByText('Fate')).toBeInTheDocument()
    expect(within(row).getByText('The crew’s ship.')).toBeInTheDocument()
    expect(within(row).getByText('A gift to the crew.')).toBeInTheDocument()
    // No places listed, so no heading announcing them.
    expect(
      within(row).queryByText('Places she reaches'),
    ).not.toBeInTheDocument()
  })

  it('draws no fate row when the reader has reached none', () => {
    renderWithProviders(
      <ShipLog
        peekRecord={peekPending()}
        ships={[ship({ ...at(324), dossier: shipEntry() })]}
      />,
      { bookmark: ep(400) },
    )

    expect(screen.queryByText('Fate')).not.toBeInTheDocument()
  })

  it('lists the places she has reached, each linked to its entry', () => {
    renderWithProviders(
      <ShipLog
        peekRecord={peekPending()}
        ships={[sunny]}
      />,
      { bookmark: ep(400) },
    )

    expect(screen.getByText('Places she reaches')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Florian Triangle' }),
    ).toHaveAttribute('href', '/en/places#florian-triangle')
    expect(screen.queryByText('Spoiler')).not.toBeInTheDocument()
  })

  it('draws no band at all when the reader has reached no ship', () => {
    const { container } = renderWithProviders(
      <ShipLog
        peekRecord={peekPending()}
        ships={[]}
      />,
      { bookmark: ep(10) },
    )

    expect(container).toBeEmptyDOMElement()
  })
})
