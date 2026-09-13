import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import {
  at,
  coveredRecord,
  peekPending,
  peekTo,
  spyPeek,
  waypoint,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { RouteChart } from './RouteChart'

const opening = waypoint({
  id: 'early',
  kind: 'arc',
  name: 'Opening Saga',
  ...at(1),
})
const middle = waypoint({
  id: 'middle',
  kind: 'character',
  name: 'Middle Face',
  revealedAtEpisode: 457,
  revealedAtChapter: 550,
})
const late = waypoint({
  id: 'late',
  kind: 'place',
  name: 'Late Island',
  revealedAtEpisode: 1089,
  revealedAtChapter: 1061,
})

const lateCovered = coveredRecord({
  kind: 'place',
  revealedAtEpisode: 1089,
  revealedAtChapter: 1061,
})

function waypointOf(name: string): HTMLElement {
  const item = screen.getAllByText(name)[0]?.closest('li') ?? null
  if (item === null) {
    throw new Error(`no waypoint for "${name}"`)
  }

  return item
}

/**
 * The wrapper the veil marks `inert`, found from a waypoint's heading:
 * heading → words → card → the veil's content wrapper.
 */
function veilAround(name: string): HTMLElement {
  const wrapper =
    waypointOf(name).querySelector('h3')?.parentElement?.parentElement
      ?.parentElement ?? null
  if (wrapper === null) {
    throw new Error(`no veil wrapper around "${name}"`)
  }

  return wrapper
}

/** Every attribute value on the tree, bar the generated class names. */
function attributesOf(root: HTMLElement): readonly string[] {
  return [...root.querySelectorAll(':scope *')].flatMap((node) => {
    return [...node.attributes]
      .filter((attribute) => attribute.name !== 'class')
      .map((attribute) => attribute.value)
  })
}

function horizon(): HTMLElement {
  const item = screen
    .getAllByRole('listitem')
    .find((li) => li.getAttribute('aria-current') === 'step')
  if (item === undefined) {
    throw new Error('no horizon on the route')
  }

  return item
}

describe('RouteChart', () => {
  it('draws the reached waypoints and stands in for the rest', () => {
    renderWithProviders(
      <RouteChart
        bookmark={ep(500)}
        covered={[lateCovered]}
        open={[opening, middle]}
        peek={peekPending()}
      />,
      { bookmark: ep(500) },
    )

    expect(veilAround('Opening Saga')).not.toHaveAttribute('inert')
    expect(veilAround('Middle Face')).not.toHaveAttribute('inert')
    expect(veilAround('Spoiler')).toHaveAttribute('inert')
    // The covered waypoint's name is not in the document at all — not under a
    // blur, where find-in-page used to walk straight through it.
    expect(screen.queryByText('Late Island')).not.toBeInTheDocument()
  })

  it('draws the horizon between the last open waypoint and the first fogged one', () => {
    renderWithProviders(
      <RouteChart
        bookmark={ep(500)}
        covered={[lateCovered]}
        open={[opening, middle]}
        peek={peekPending()}
      />,
      { bookmark: ep(500) },
    )

    const items = screen.getAllByRole('listitem')

    expect(items.indexOf(horizon())).toBe(2)
    expect(items.indexOf(waypointOf('Middle Face'))).toBe(1)
    expect(items.indexOf(waypointOf('Spoiler'))).toBe(3)
    expect(horizon()).toHaveTextContent('You are here · episode 500')
  })

  it('keeps the episode a waypoint opens at readable under fog', () => {
    // "Something opens at episode 1089" is the promise the page makes. Hiding
    // it would leave the reader with a blurred waypoint and no way to tell how
    // far away it is.
    renderWithProviders(
      <RouteChart
        bookmark={ep(500)}
        covered={[lateCovered]}
        open={[opening, middle]}
        peek={peekPending()}
      />,
      { bookmark: ep(500) },
    )

    expect(
      within(waypointOf('Spoiler')).getByText('Episode 1089'),
    ).toBeVisible()
  })

  it('puts the horizon at the very top when no bookmark is set', () => {
    renderWithProviders(
      <RouteChart
        bookmark={null}
        covered={[coveredRecord({ kind: 'arc' }), lateCovered]}
        open={[]}
        peek={peekPending()}
      />,
    )

    expect(screen.getAllByRole('listitem').indexOf(horizon())).toBe(0)
    expect(horizon()).toHaveTextContent(
      'No bookmark set · the whole route is under fog',
    )
    expect(screen.getAllByText('Spoiler')).toHaveLength(2)
  })

  it('lifts the fog on one waypoint without touching the others', async () => {
    const user = userEvent.setup()
    const first = coveredRecord({ kind: 'arc', handle: 'a1' })
    const { asked, peek } = spyPeek(opening)
    renderWithProviders(
      <RouteChart
        bookmark={null}
        covered={[first, lateCovered]}
        open={[]}
        peek={peek}
      />,
    )

    const target = waypointOf('Spoiler')
    await user.click(
      within(target).getByRole('button', { name: /Lift the fog anyway/u }),
    )
    await settle()

    // The opaque handle went out; the name came back, and only here.
    expect(asked).toStrictEqual(['a1'])
    expect(screen.getByText('Opening Saga')).toBeInTheDocument()
    expect(screen.getAllByText('Spoiler')).toHaveLength(1)
  })

  it('draws no record’s drawing under the fog', () => {
    const { container } = renderWithProviders(
      <RouteChart
        bookmark={null}
        covered={[lateCovered]}
        open={[]}
        peek={peekPending()}
      />,
    )

    // The bare plate a fogged place stands behind has no nested drawing.
    expect(container.querySelectorAll(':scope svg svg')).toHaveLength(0)
  })

  it('labels the waypoints in the active locale', () => {
    renderWithProviders(
      <RouteChart
        bookmark={ep(1200)}
        covered={[]}
        open={[opening, middle, late]}
        peek={peekPending()}
      />,
      { locale: 'it', bookmark: ep(1200) },
    )

    expect(screen.getByText('Saga')).toBeInTheDocument()
    expect(screen.getByText('Sei qui · episodio 1200')).toBeInTheDocument()
  })

  it('links a character to their page and a place to the log, and leaves an arc as a name', () => {
    renderWithProviders(
      <RouteChart
        bookmark={ep(1200)}
        covered={[]}
        open={[opening, middle, late]}
        peek={peekPending()}
      />,
      { bookmark: ep(1200) },
    )

    expect(screen.getByRole('link', { name: 'Middle Face' })).toHaveAttribute(
      'href',
      '/en/characters/middle',
    )
    expect(screen.getByRole('link', { name: 'Late Island' })).toHaveAttribute(
      'href',
      '/en/places#late',
    )
    expect(
      screen.queryByRole('link', { name: 'Opening Saga' }),
    ).not.toBeInTheDocument()
  })

  it('keeps every slug and every handle out of the markup under fog', () => {
    const { container } = renderWithProviders(
      <RouteChart
        bookmark={ep(100)}
        covered={[coveredRecord({ handle: 'h9' })]}
        open={[]}
        peek={peekTo(middle)}
      />,
      { bookmark: ep(100) },
    )

    expect(container.querySelector('a')).toBeNull()
    // A React key never reaches the DOM, and the handle is only ever a key.
    // Checked over the attributes rather than the raw HTML, because StyleX's
    // generated class names are arbitrary short strings and would collide.
    expect(attributesOf(container)).not.toContain('h9')
  })
})
