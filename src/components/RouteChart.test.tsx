import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { Entity } from '~/data/types'
import { renderWithProviders } from '~/test/providers'

import { RouteChart } from './RouteChart'

const entries: readonly Entity[] = [
  {
    id: 'early',
    kind: 'arc',
    revealedAtEpisode: 1,
    name: { it: 'Saga iniziale', en: 'Opening Saga' },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'east-blue', tint: 'ivory' },
  },
  {
    id: 'middle',
    kind: 'character',
    revealedAtEpisode: 457,
    name: { it: 'Volto di mezzo', en: 'Middle Face' },
    summary: { it: 'y', en: 'y' },
    visual: { art: 'monkey-d-luffy', tint: 'red' },
  },
  {
    id: 'late',
    kind: 'place',
    revealedAtEpisode: 1089,
    name: { it: 'Isola tarda', en: 'Late Island' },
    summary: { it: 'z', en: 'z' },
    visual: { art: 'egghead-island', tint: 'orange' },
  },
]

// Waypoint names are looked up by text, not by role: a fogged name sits inside
// an `aria-hidden` wrapper and has no accessible role by design.

/**
 * The wrapper the veil marks `inert`, found from the waypoint's heading:
 * heading → words → card → the veil's content wrapper. From the heading
 * rather than the text node, because a character's name is a link inside it.
 */
function veilAround(name: string): HTMLElement {
  const wrapper =
    waypointOf(name).querySelector('h3')?.parentElement?.parentElement
      ?.parentElement ?? null
  if (wrapper === null) throw new Error(`no veil wrapper around "${name}"`)

  return wrapper
}

function waypointOf(name: string): HTMLElement {
  const item = screen.getByText(name).closest('li')
  if (item === null) throw new Error(`no waypoint for "${name}"`)

  return item
}

function horizon(): HTMLElement {
  const item = screen
    .getAllByRole('listitem')
    .find((li) => li.getAttribute('aria-current') === 'step')
  if (item === undefined) throw new Error('no horizon on the route')

  return item
}

describe('RouteChart', () => {
  it('opens the waypoints the reader has reached and fogs the rest', () => {
    renderWithProviders(<RouteChart entries={entries} progress={500} />, {
      progress: 500,
    })

    expect(veilAround('Opening Saga')).not.toHaveAttribute('inert')
    expect(veilAround('Middle Face')).not.toHaveAttribute('inert')
    expect(veilAround('Late Island')).toHaveAttribute('inert')
  })

  it('draws the horizon between the last open waypoint and the first fogged one', () => {
    renderWithProviders(<RouteChart entries={entries} progress={500} />, {
      progress: 500,
    })

    const items = screen.getAllByRole('listitem')
    expect(items.indexOf(horizon())).toBe(2)
    expect(items.indexOf(waypointOf('Middle Face'))).toBe(1)
    expect(items.indexOf(waypointOf('Late Island'))).toBe(3)
    expect(horizon()).toHaveTextContent('You are here · episode 500')
  })

  it('keeps the episode a waypoint opens at readable under fog', () => {
    // "Something opens at episode 1089" is the promise the page makes. Hiding
    // it would leave the reader with a blurred waypoint and no way to tell how
    // far away it is.
    renderWithProviders(<RouteChart entries={entries} progress={500} />, {
      progress: 500,
    })

    expect(
      within(waypointOf('Late Island')).getByText('Episode 1089'),
    ).toBeVisible()
  })

  it('puts the horizon at the very top and fogs everything when no bookmark is set', () => {
    renderWithProviders(<RouteChart entries={entries} progress={null} />)

    expect(screen.getAllByRole('listitem').indexOf(horizon())).toBe(0)
    expect(horizon()).toHaveTextContent(
      'No episode set · the whole route is under fog',
    )
    expect(veilAround('Opening Saga')).toHaveAttribute('inert')
    expect(veilAround('Late Island')).toHaveAttribute('inert')
  })

  it('lifts the fog on one waypoint without touching the others', async () => {
    const user = userEvent.setup()
    renderWithProviders(<RouteChart entries={entries} progress={null} />)

    await user.click(
      within(waypointOf('Opening Saga')).getByRole('button', {
        name: /Lift the fog anyway/,
      }),
    )

    expect(veilAround('Opening Saga')).not.toHaveAttribute('inert')
    expect(veilAround('Middle Face')).toHaveAttribute('inert')
  })

  it('puts the drawing under the same fog as the words', () => {
    renderWithProviders(<RouteChart entries={entries} progress={null} />)

    const wrapper = veilAround('Middle Face')
    expect(wrapper.querySelector('svg')).not.toBeNull()
    expect(wrapper).toHaveAttribute('inert')
  })

  it('labels the waypoints in the active locale', () => {
    renderWithProviders(<RouteChart entries={entries} progress={1200} />, {
      locale: 'it',
      progress: 1200,
    })

    expect(screen.getByText('Saga')).toBeInTheDocument()
    expect(screen.getByText('Sei qui · episodio 1200')).toBeInTheDocument()
  })

  it('links a character to their page and a place to the log, and leaves an arc as a name', () => {
    renderWithProviders(<RouteChart entries={entries} progress={1200} />, {
      progress: 1200,
    })

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

  it('gives a covered character no link, so the slug stays out of the HTML', () => {
    const { container } = renderWithProviders(
      <RouteChart entries={entries} progress={100} />,
      { progress: 100 },
    )

    expect(container.querySelector('a[href*="/characters/"]')).toBeNull()
    expect(container.querySelector('a[href*="/places"]')).toBeNull()
    expect(screen.getByText('Middle Face')).toBeInTheDocument()
  })
})
