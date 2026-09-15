import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import {
  coveredSlot,
  fruit,
  openSlot,
  peekPending,
  peekTo,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { FruitSpecimen } from './FruitSpecimen'

describe('FruitSpecimen', () => {
  it('numbers the row, names its plate and links the fruit to its page', () => {
    renderWithProviders(
      <FruitSpecimen
        form="paramecia"
        index={3}
        peek={peekTo(fruit())}
        slot={openSlot(fruit({ id: 'gum-gum-fruit' }))}
      />,
      { bookmark: ep(650) },
    )

    expect(screen.getByText('Specimen 04')).toBeInTheDocument()
    expect(screen.getByText('Paramecia')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gum-Gum Fruit' })).toHaveAttribute(
      'href',
      '/en/fruits/gum-gum-fruit',
    )
    expect(
      screen.getByText('Turns the body of whoever ate it to rubber.'),
    ).toBeInTheDocument()
  })

  it('marks the letters a search matched', () => {
    const { container } = renderWithProviders(
      <FruitSpecimen
        form="paramecia"
        highlight={[0, 3]}
        index={0}
        peek={peekTo(fruit())}
        slot={openSlot(fruit())}
      />,
      { bookmark: ep(650) },
    )

    expect(container.querySelector('mark')).toHaveTextContent('Gum')
  })

  it('keeps the number, the plate and the episode, and nothing else, under fog', () => {
    const { container } = renderWithProviders(
      <FruitSpecimen
        form="logia"
        index={0}
        peek={peekPending()}
        slot={coveredSlot({ kind: 'fruit', revealedAtEpisode: 462 })}
      />,
      { bookmark: ep(100) },
    )

    expect(screen.getByText('Specimen 01')).toBeInTheDocument()
    expect(screen.getByText('Logia')).toBeInTheDocument()
    expect(screen.getByText('First named in episode 462')).toBeInTheDocument()
    expect(screen.getByText('A fruit under fog')).toBeInTheDocument()

    // Neither the drawing nor the slug reaches the served HTML.
    expect(container.querySelectorAll('path')).toHaveLength(0)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
