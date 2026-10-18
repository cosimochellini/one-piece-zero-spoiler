import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import type { StopView } from '~/lib/view/places'
import type { CoveredRecord, ShipView } from '~/lib/view/records'
import { at, coveredRecord, ship, stop } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { SeaChart } from './SeaChart'

const eastBlue = [
  stop({
    id: 'shells-town',
    name: 'Shells Town',
    ...at(2),
    chart: { x: 470, y: 140 },
  }),
  stop({
    id: 'syrup-village',
    name: 'Syrup Village',
    ...at(9),
    chart: { x: 290, y: 60 },
  }),
  stop({
    id: 'baratie',
    name: 'Baratie',
    ...at(20),
    chart: { x: 190, y: 130 },
  }),
]

const grandLine = [
  stop({
    id: 'whisky-peak',
    name: 'Whisky Peak',
    ...at(64),
    chart: { x: 50, y: 255 },
    sea: 'grand-line',
  }),
  stop({
    id: 'enies-lobby',
    name: 'Enies Lobby',
    ...at(264),
    chart: { x: 410, y: 255 },
    sea: 'grand-line',
  }),
  stop({
    id: 'amazon-lily',
    name: 'Amazon Lily',
    ...at(410),
    chart: { x: 540, y: 205, detour: true },
    sea: 'calm-belt',
  }),
]

const merry = ship({ id: 'going-merry', name: 'Going Merry', ...at(18) })
const sunny = ship({ id: 'thousand-sunny', name: 'Thousand Sunny', ...at(324) })

const fogged = [
  coveredRecord({ kind: 'place', handle: 'h1', ...at(64) }),
  coveredRecord({ kind: 'place', handle: 'h2', ...at(70) }),
]

/** Draws the chart; the first of its two orientations is the one checked. */
function draw({
  bookmark,
  covered = [],
  open = [],
  ships = [],
}: {
  bookmark: Bookmark
  covered?: CoveredRecord[]
  open?: StopView[]
  ships?: ShipView[]
}): ReturnType<typeof renderWithProviders> {
  return renderWithProviders(
    <SeaChart
      bookmark={bookmark}
      covered={covered}
      open={open}
      ships={ships}
    />,
    { bookmark },
  )
}

/** The stops of the chart drawn across. */
function stops(): HTMLElement {
  const [across] = screen.getAllByRole('list', { name: 'Map of the places' })
  if (across === undefined) {
    throw new Error('no chart')
  }

  return across
}

describe('SeaChart', () => {
  it('draws it twice, across and upright, for the stylesheet to pick', () => {
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged })

    expect(
      screen.getAllByRole('list', { name: 'Map of the places' }),
    ).toHaveLength(2)
  })

  it('shows only the origin and fog with no bookmark, and asks for one', () => {
    const { container } = draw({ bookmark: null, covered: fogged })

    expect(within(stops()).queryAllByRole('link')).toHaveLength(0)
    expect(within(stops()).getAllByRole('button')).toHaveLength(2)
    expect(
      screen.getAllByRole('img', {
        name: 'Map of the places. 2 stops under fog',
      }),
    ).toHaveLength(2)
    expect(screen.getByText('2 stops under fog')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Set your bookmark' }),
    ).toBeInTheDocument()
    // No sea is drawn or named, and nothing in the fog has a name.
    expect(container).not.toHaveTextContent('East Blue')
    expect(container.querySelectorAll('rect[x]')).toHaveLength(0)
  })

  it('links every open stop to its page and marks where the reader is', () => {
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged, ships: [merry] })

    const links = within(stops()).getAllByRole('link')

    expect(links.map((link) => link.getAttribute('href'))).toStrictEqual([
      '/en/places/shells-town',
      '/en/places/syrup-village',
      '/en/places/baratie',
    ])
    expect(links.map((link) => link.getAttribute('aria-label'))).toStrictEqual([
      'Stop 1 of 5. Shells Town',
      'Stop 2 of 5. Syrup Village',
      'Stop 3 of 5. Baratie',
    ])
    expect(links.at(-1)).toHaveAttribute('aria-current', 'location')
    expect(
      screen.getAllByRole('img', {
        name: 'Map of the places. Stop 3 of 5. Baratie. 2 stops under fog',
      }),
    ).toHaveLength(2)
  })

  it('says a fogged stop’s number and episode, and nothing it would do', () => {
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged })

    const buttons = within(stops()).getAllByRole('button')

    expect(
      buttons.map((button) => button.getAttribute('aria-label')),
    ).toStrictEqual([
      'Stop 4 of 5. A place under fog. Episode 64',
      'Stop 5 of 5. A place under fog. Episode 70',
    ])

    for (const button of buttons) {
      expect(button).toHaveAttribute('aria-disabled', 'true')
    }
  })

  it('names East Blue alone until the Grand Line is entered', () => {
    const { container, unmount } = draw({ bookmark: ep(30), open: eastBlue })

    expect(container).toHaveTextContent('East Blue')
    expect(container).not.toHaveTextContent('Grand Line')
    expect(container).not.toHaveTextContent('North Blue')

    unmount()

    const view = draw({ bookmark: ep(410), open: [...eastBlue, ...grandLine] })

    for (const sea of ['Grand Line', 'Calm Belt', 'Red Line', 'North Blue']) {
      expect(view.container).toHaveTextContent(sea)
    }

    expect(view.container).not.toHaveTextContent('New World')
  })

  it('moves between the stops with the arrow keys, one tab stop for all', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged })

    const targets = [
      ...within(stops()).getAllByRole('link'),
      ...within(stops()).getAllByRole('button'),
    ]

    expect(targets.map((target) => target.tabIndex)).toStrictEqual([
      -1, -1, 0, -1, -1,
    ])

    targets[2]?.focus()
    await user.keyboard('{ArrowRight}')

    expect(targets[3]).toHaveFocus()

    await user.keyboard('{Home}')

    expect(targets[0]).toHaveFocus()
    expect(targets[0]).toHaveAttribute('tabindex', '0')
  })

  it('stands the latest ship at the last stop she sails to, not on a detour', () => {
    const { container } = draw({
      bookmark: ep(410),
      open: [...eastBlue, ...grandLine],
      ships: [merry, sunny],
    })

    // The Sunny stands at Enies Lobby; the Merry, whose stretch ends there
    // too, is left out while the Sunny covers her.
    expect(container.querySelectorAll(':scope span > svg')).toHaveLength(2)

    const here = within(stops()).getByRole('link', { current: 'location' })

    expect(here).toHaveAttribute('href', '/en/places/amazon-lily')
  })

  it('leaves an earlier ship small at the end of her own stretch', () => {
    const florian = stop({
      id: 'florian-triangle',
      name: 'Florian Triangle',
      ...at(337),
      chart: { x: 446, y: 345 },
      sea: 'grand-line',
    })
    const { container } = draw({
      bookmark: ep(340),
      open: [...eastBlue, ...grandLine.slice(0, 2), florian],
      ships: [merry, sunny],
    })

    // One ship mark per orientation for each of the two ships.
    expect(container.querySelectorAll(':scope span > svg')).toHaveLength(4)
  })

  it('draws no ship before the crew has one', () => {
    const { container } = draw({ bookmark: ep(9), open: eastBlue.slice(0, 2) })

    expect(container.querySelectorAll(':scope span > svg')).toHaveLength(0)
  })
})
