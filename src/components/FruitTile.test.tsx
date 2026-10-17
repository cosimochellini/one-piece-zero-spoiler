import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import {
  coveredSlot,
  drawing,
  fruit,
  openSlot,
  peekPending,
  peekTo,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { FruitTile } from './FruitTile'

const ACE = { id: 'portgas-d-ace', name: 'Portgas D. Ace', visual: drawing() }
const SABO = { id: 'sabo', name: 'Sabo', visual: drawing('blue') }

/** A covered Zoan tile's HTML, its threshold written as N. */
function coveredHtml(revealedAtEpisode: number): string {
  const { container, unmount } = renderWithProviders(
    <FruitTile
      form="zoan"
      index={2}
      peek={peekPending()}
      slot={coveredSlot({ kind: 'fruit', revealedAtEpisode })}
    />,
    { bookmark: ep(100) },
  )
  const out = container.outerHTML.replaceAll(String(revealedAtEpisode), 'N')
  unmount()
  return out
}

describe('FruitTile', () => {
  it('links the drawing and the name to the fruit’s page, and prints the kind', () => {
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
    expect(link.querySelectorAll('path').length).toBeGreaterThan(0)
    expect(container).toHaveTextContent('Paramecia')
    // The sentence is the fruit page's, and an open tile prints no number.
    expect(container).not.toHaveTextContent('Turns the body')
    expect(container).not.toHaveTextContent('Fruit 04')
  })

  it('links the first eater to their page, and counts the others', () => {
    const { container } = renderWithProviders(
      <FruitTile
        eaters={[ACE, SABO]}
        form="logia"
        index={0}
        peek={peekTo(fruit())}
        slot={openSlot(fruit({ id: 'flame-flame-fruit' }))}
      />,
      { bookmark: ep(700) },
    )

    const [fruitLink, eaterLink] = screen.getAllByRole('link')

    expect(fruitLink).toHaveAttribute('href', '/en/fruits/flame-flame-fruit')
    expect(eaterLink).toHaveAttribute('href', '/en/characters/portgas-d-ace')
    expect(eaterLink).toHaveTextContent('Portgas D. Ace')
    expect(eaterLink?.querySelectorAll('path').length).toBeGreaterThan(0)
    expect(
      screen.queryByRole('link', { name: /Sabo/u }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('+1')).toHaveAttribute('aria-hidden', 'true')
    expect(
      screen.getByText('and 1 more character who ate it'),
    ).toBeInTheDocument()
    expect(container).not.toHaveTextContent('Sabo')
  })

  it('draws a left-behind crest only once its strokes arrive', () => {
    renderWithProviders(
      <FruitTile
        eaters={[
          { ...SABO, visual: { strokes: [], tint: 'blue', deferred: true } },
        ]}
        form="logia"
        index={0}
        peek={peekTo(fruit())}
        slot={openSlot(fruit())}
      />,
      { bookmark: ep(700) },
    )

    const eaterLink = screen.getByRole('link', { name: 'Sabo' })

    expect(eaterLink.querySelector('svg')).toBeNull()
  })

  it('shows the eater a search matched, with their name marked', () => {
    renderWithProviders(
      <FruitTile
        eater={{ at: 1, highlight: [0, 3] }}
        eaters={[ACE, SABO]}
        form="logia"
        index={0}
        peek={peekTo(fruit())}
        slot={openSlot(fruit({ id: 'flame-flame-fruit' }))}
      />,
      { bookmark: ep(700) },
    )

    const eaterLink = screen.getByRole('link', { name: 'Sabo' })

    expect(eaterLink).toHaveAttribute('href', '/en/characters/sabo')
    expect(eaterLink.querySelector('mark')).toHaveTextContent('Sab')
    expect(screen.getByText('+1')).toBeInTheDocument()
  })

  it('prints no count for a single eater, and no eater line without one', () => {
    const { unmount } = renderWithProviders(
      <FruitTile
        eaters={[ACE]}
        form="logia"
        index={0}
        peek={peekTo(fruit())}
        slot={openSlot(fruit())}
      />,
      { bookmark: ep(700) },
    )

    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.queryByText(/^\+/u)).not.toBeInTheDocument()

    unmount()
    renderWithProviders(
      <FruitTile
        form="logia"
        index={0}
        peek={peekTo(fruit())}
        slot={openSlot(fruit())}
      />,
      { bookmark: ep(700) },
    )

    expect(screen.getAllByRole('link')).toHaveLength(1)
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
    expect(container).toHaveTextContent(
      /^Fruit 01 · LogiaFirst named in episode 462$/u,
    )
  })

  it('draws the same fog for every fruit', () => {
    // Two different fruits at the same place on a plate: once their two
    // thresholds are set aside, their HTML is one and the same.

    expect(coveredHtml(462)).toBe(coveredHtml(871))
  })

  it('becomes a link once the reader lifts the fog by hand, and draws it in', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(
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

    // The first press only asks; nothing is sent for yet.
    await user.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toHaveTextContent('Show it anyway?')
    expect(screen.queryByRole('link')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button'))

    const link = await screen.findByRole('link', { name: 'Flame-Flame Fruit' })

    expect(link).toHaveAttribute('href', '/en/fruits/flame-flame-fruit')
    // Every drawn line is measured for the pen.
    expect(container.querySelector('path')).toHaveAttribute('pathLength', '1')
    // The kind is already printed under the tile; the lifted link does not
    // print it twice.
    expect(screen.getAllByText(/Logia/u)).toHaveLength(1)
  })
})
