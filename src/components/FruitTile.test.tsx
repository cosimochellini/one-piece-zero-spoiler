import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import {
  coveredSlot,
  fruit,
  openSlot,
  peekPending,
  peekTo,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { FruitTile } from './FruitTile'

describe('FruitTile', () => {
  it('is one link to the fruit’s page: the drawing, the name and the kind', () => {
    const { container } = renderWithProviders(
      <FruitTile
        form="paramecia"
        index={3}
        peek={peekTo(fruit())}
        slot={openSlot(fruit({ id: 'gum-gum-fruit' }))}
      />,
      { bookmark: ep(650) },
    )

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '/en/fruits/gum-gum-fruit')
    expect(link).toHaveTextContent('Gum-Gum Fruit')
    expect(link).toHaveTextContent('Paramecia')
    expect(link.querySelectorAll('path').length).toBeGreaterThan(0)
    // The sentence is the fruit page's, and an open tile prints no number.
    expect(container).not.toHaveTextContent('Turns the body')
    expect(container).not.toHaveTextContent('Fruit 04')
  })

  it('marks the letters a search matched', () => {
    const { container } = renderWithProviders(
      <FruitTile
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

  it('keeps the number, the kind and the episode, and nothing else, under fog', () => {
    const { container } = renderWithProviders(
      <FruitTile
        form="logia"
        index={0}
        peek={peekPending()}
        slot={coveredSlot({ kind: 'fruit', revealedAtEpisode: 462 })}
      />,
      { bookmark: ep(100) },
    )

    expect(screen.getByText('Fruit 01 · Logia')).toBeInTheDocument()
    expect(screen.getByText('First named in episode 462')).toBeInTheDocument()
    expect(screen.getByText('A fruit under fog')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: 'Under fog until episode 462. Show anyway',
      }),
    ).toBeInTheDocument()

    // No strokes, no tint, no name and no slug reach the served HTML.
    expect(container.querySelector('svg')).toBeNull()
    expect(container.querySelectorAll('path')).toHaveLength(0)
    expect(container.querySelector('[style]')).toBeNull()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('becomes a link once the reader lifts the fog by hand', async () => {
    renderWithProviders(
      <FruitTile
        form="logia"
        index={4}
        peek={peekTo(
          fruit({ id: 'flame-flame-fruit', name: 'Flame-Flame Fruit' }),
        )}
        slot={coveredSlot({ kind: 'fruit', revealedAtEpisode: 462 })}
      />,
      { bookmark: ep(100) },
    )

    await userEvent.click(screen.getByRole('button'))

    const link = await screen.findByRole('link', { name: 'Flame-Flame Fruit' })

    expect(link).toHaveAttribute('href', '/en/fruits/flame-flame-fruit')
    // The kind is already printed under the tile; the lifted link does not
    // print it twice.
    expect(screen.getAllByText(/Logia/u)).toHaveLength(1)
  })
})
