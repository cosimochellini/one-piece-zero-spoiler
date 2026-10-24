import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import type { SagaPick, StopView } from '~/lib/view/places'
import type { CoveredRecord, PortView, ShipView } from '~/lib/view/records'
import { at, coveredRecord, peekTo, port, ship, stop } from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { SeaChart } from './SeaChart'
import { useChartOrientation } from './useChartOrientation'

const eastBlue = [
  stop({
    id: 'shells-town',
    name: 'Shells Town',
    ...at(2),
    chart: { x: 930, y: 185 },
  }),
  stop({
    id: 'syrup-village',
    name: 'Syrup Village',
    ...at(9),
    chart: { x: 1210, y: 70 },
  }),
  stop({
    id: 'baratie',
    name: 'Baratie',
    ...at(20),
    chart: { x: 1360, y: 175 },
  }),
]

const grandLine = [
  stop({
    id: 'whisky-peak',
    name: 'Whisky Peak',
    ...at(64),
    chart: { x: 1520, y: 365 },
    sea: 'grand-line',
  }),
  stop({
    id: 'enies-lobby',
    name: 'Enies Lobby',
    ...at(264),
    chart: { x: 1010, y: 414 },
    sea: 'grand-line',
  }),
  stop({
    id: 'amazon-lily',
    name: 'Amazon Lily',
    ...at(410),
    chart: { x: 930, y: 530, line: 'luffy' },
    sea: 'calm-belt',
  }),
]

const merry = ship({ id: 'going-merry', name: 'Going Merry', ...at(18) })
const sunny = ship({ id: 'thousand-sunny', name: 'Thousand Sunny', ...at(324) })

const fogged = [
  coveredRecord({ kind: 'place', handle: 'h1', ...at(64) }),
  coveredRecord({ kind: 'place', handle: 'h2', ...at(70) }),
]

/** Draws the chart in a wide window, so across. */
function draw({
  bookmark,
  covered = [],
  open = [],
  peekPort = peekTo(port()),
  sagas = [],
  ships = [],
}: {
  bookmark: Bookmark
  covered?: CoveredRecord[]
  open?: StopView[]
  peekPort?: (handle: string) => Promise<PortView>
  sagas?: SagaPick[]
  ships?: ShipView[]
}): ReturnType<typeof renderWithProviders> {
  return renderWithProviders(
    <SeaChart
      bookmark={bookmark}
      covered={covered}
      open={open}
      peekPort={peekPort}
      sagas={sagas}
      served="across"
      ships={ships}
    />,
    { bookmark },
  )
}

/** The orientation a page served upright draws, each render noted. */
function Served({ drawn }: { drawn: string[] }): string {
  const orientation = useChartOrientation('down')
  drawn.push(orientation)
  return orientation
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
  it('draws it once, across in a wide window', () => {
    const { container } = draw({
      bookmark: ep(30),
      open: eastBlue,
      covered: fogged,
    })

    expect(
      screen.getAllByRole('list', { name: 'Map of the places' }),
    ).toHaveLength(1)
    expect(container.querySelector('[data-chart-orientation]')).toHaveAttribute(
      'data-chart-orientation',
      'across',
    )
  })

  it('stands it upright in a narrow window', () => {
    const wide = matchMedia
    const narrow = vi
      .spyOn(globalThis, 'matchMedia')
      .mockImplementation((media) =>
        Object.assign(wide(media), { matches: true }),
      )
    const { container } = draw({ bookmark: ep(30), open: eastBlue })
    narrow.mockRestore()

    expect(container.querySelector('[data-chart-orientation]')).toHaveAttribute(
      'data-chart-orientation',
      'down',
    )
  })

  it('hydrates in the orientation served, then takes the window’s', () => {
    const drawn: string[] = []
    const container = document.createElement('div')
    container.textContent = 'down'
    render(<Served drawn={drawn} />, { container, hydrate: true })

    expect(drawn).toStrictEqual(['down', 'across'])
    expect(container).toHaveTextContent('across')
  })

  it('offers no way back to a saga with no bookmark', () => {
    draw({ bookmark: null })

    expect(screen.getByRole('button', { name: 'Zoom in' })).toBeEnabled()
    expect(
      screen.queryByRole('button', { name: /See all|Your saga/u }),
    ).not.toBeInTheDocument()
  })

  it('shows only the origin and fog with no bookmark, and asks for one', () => {
    const { container } = draw({ bookmark: null, covered: fogged })

    expect(within(stops()).queryAllByRole('link')).toHaveLength(0)
    expect(within(stops()).getAllByRole('button')).toHaveLength(2)
    expect(
      screen.getAllByRole('img', {
        name: 'Map of the places. 2 stops under fog',
      }),
    ).toHaveLength(1)
    expect(screen.getByText('2 stops under fog')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Set your bookmark' }),
    ).toBeInTheDocument()
    // No sea is drawn or named, and nothing in the fog has a name.
    expect(container).not.toHaveTextContent('East Blue')
    expect(container.querySelectorAll('rect[x]')).toHaveLength(0)
    expect(container.querySelectorAll('circle')).toHaveLength(0)
  })

  it('links every open stop to its page and marks where the reader is', () => {
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged, ships: [merry] })

    const links = within(stops()).getAllByRole('link')

    expect(links.map((link) => link.getAttribute('href'))).toStrictEqual([
      '/one-piece/en/places/shells-town',
      '/one-piece/en/places/syrup-village',
      '/one-piece/en/places/baratie',
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
    ).toHaveLength(1)
  })

  it('says a fogged stop’s number and episode, and nothing else', () => {
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged })

    const buttons = within(stops()).getAllByRole('button')

    expect(
      buttons.map((button) => button.getAttribute('aria-label')),
    ).toStrictEqual([
      'Stop 4 of 5. A place under fog. Episode 64',
      'Stop 5 of 5. A place under fog. Episode 70',
    ])

    for (const button of buttons) {
      expect(button).toHaveAttribute('aria-expanded', 'false')
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

  it('writes the names of the open stops and of their saga on the chart', () => {
    const { container } = draw({
      bookmark: ep(30),
      open: eastBlue,
      sagas: [{ number: 1, title: 'East Blue Saga' }],
    })

    expect(container).toHaveTextContent('East Blue Saga')
    expect(container).toHaveTextContent('Shells Town')
    expect(container).not.toHaveTextContent('Alabasta Saga')
  })

  it('keeps every reached name written even when their points overlap', () => {
    const crowded = eastBlue.map((entry) => ({
      ...entry,
      chart: { x: 1000, y: 400 },
    }))
    const { container } = draw({ bookmark: ep(30), open: crowded })

    expect(container.querySelectorAll('[data-chart-name]')).toHaveLength(2)

    for (const entry of crowded) {
      expect(screen.getByText(entry.name)).toBeInTheDocument()
    }
  })

  it('zooms across with its buttons, and between the whole chart and the saga', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue })

    const zoomIn = screen.getByRole('button', { name: 'Zoom in' })
    const whole = screen.getByRole('button', { name: 'See all' })

    await user.click(whole)

    expect(screen.getByRole('button', { name: 'Zoom out' })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Your saga' })).toBeEnabled()

    await user.click(zoomIn)

    expect(screen.getByRole('button', { name: 'Zoom out' })).toHaveAttribute(
      'aria-disabled',
      'false',
    )
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

  it('brings a stop the keys reach into the window, the world moving with it', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue })

    const [drawing] = screen.getAllByRole('img', { name: /Map of the places/u })
    const world = (): null | string =>
      drawing?.parentElement?.getAttribute('style') ?? null
    const zoomIn = screen.getByRole('button', { name: 'Zoom in' })
    await user.click(zoomIn)
    await user.click(zoomIn)
    const opened = world()
    const [first, , last] = within(stops()).getAllByRole('link')

    // jsdom never reports a focus as the keyboard's: say that this one is.
    const visible = vi
      .spyOn(Element.prototype, 'matches')
      .mockImplementation(function keyed(this: Element, selector: string) {
        return selector === ':focus-visible' || this.closest(selector) === this
      })
    last?.focus()
    await user.keyboard('{Home}')
    visible.mockRestore()

    expect(first).toHaveFocus()
    expect(world()).not.toBe(opened)
  })

  it('stands the latest ship at the last stop she sails to, not on a detour', () => {
    const { container } = draw({
      bookmark: ep(410),
      open: [...eastBlue, ...grandLine],
      ships: [merry, sunny],
    })

    // The Sunny stands at Enies Lobby; the Merry, whose stretch ends there
    // too, is left out while the Sunny covers her.
    expect(container.querySelectorAll(':scope button > svg')).toHaveLength(1)

    const here = within(stops()).getByRole('link', { current: 'location' })

    expect(here).toHaveAttribute('href', '/one-piece/en/places/amazon-lily')
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

    // One ship mark for each of the two ships.
    expect(container.querySelectorAll(':scope button > svg')).toHaveLength(2)
  })

  it('draws no ship before the crew has one', () => {
    const { container } = draw({ bookmark: ep(9), open: eastBlue.slice(0, 2) })

    expect(container.querySelectorAll(':scope button > svg')).toHaveLength(0)
  })
})

/** The peek open on the chart, if any. */
function peek(): HTMLElement | null {
  return screen.queryByRole('dialog')
}

describe('the peek', () => {
  it('opens at once on focus, and Esc closes it and keeps the focus', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged })

    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })
    act(() => {
      baratie.focus()
    })

    const dialog = screen.getByRole('dialog', { name: 'Stop 3 of 5. Baratie' })

    expect(dialog).toHaveTextContent('East Blue · Floating restaurant')
    expect(dialog).toHaveTextContent('Episode 20')
    expect(
      within(dialog).getByRole('link', { name: 'Open the entry' }),
    ).toHaveAttribute('href', '/one-piece/en/places/baratie')
    expect(baratie).toHaveAttribute('aria-expanded', 'true')
    expect(baratie).toHaveAttribute('aria-controls', dialog.id)

    await user.keyboard('{ArrowLeft}')

    expect(
      screen.getByRole('dialog', { name: 'Stop 2 of 5. Syrup Village' }),
    ).toBeInTheDocument()

    await user.keyboard('{Escape}')

    expect(peek()).toBeNull()
    expect(within(stops()).getByRole('link', { name: /Syrup/u })).toHaveFocus()
  })

  it('walks into the peek with Tab, and Esc gives the focus back to the stop', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue })

    await user.tab()

    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })

    expect(baratie).toHaveFocus()

    await user.tab()

    expect(screen.getByRole('link', { name: 'Open the entry' })).toHaveFocus()

    await user.keyboard('{Escape}')

    expect(peek()).toBeNull()
    expect(baratie).toHaveFocus()
    // Handed back quietly: the stop's focus does not reopen it.
    expect(baratie).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens after a short rest of the pointer, and closes when it leaves', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue })

    const shells = within(stops()).getByRole('link', { name: /Shells Town/u })
    await user.hover(shells)

    expect(peek()).toBeNull()

    // Found, after the rest: `findBy` throws when it is not.
    await screen.findByRole('dialog', { name: 'Stop 1 of 3. Shells Town' })

    await user.unhover(shells)
    await vi.waitFor(() => {
      expect(peek()).toBeNull()
    })
  })

  it('closes on a press elsewhere, and with its ✕', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue })

    act(() => {
      within(stops())
        .getByRole('link', { name: /Baratie/u })
        .focus()
    })

    expect(peek()).not.toBeNull()

    fireEvent.pointerDown(document.body)

    expect(peek()).toBeNull()

    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })
    // The focus never left it, so it comes back to open the peek again.
    act(() => {
      baratie.blur()
      baratie.focus()
    })
    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(peek()).toBeNull()
    expect(baratie).toHaveFocus()
  })

  it('peeks on a tap, where a click follows the link', () => {
    const { router } = draw({ bookmark: ep(30), open: eastBlue })
    const navigate = vi.spyOn(router, 'navigate')
    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })

    fireEvent.pointerDown(baratie, { pointerType: 'touch' })
    fireEvent.click(baratie, { detail: 1 })

    expect(navigate).not.toHaveBeenCalled()
    expect(screen.getByRole('dialog', { name: /Baratie/u })).toBeInTheDocument()

    fireEvent.pointerDown(baratie, { pointerType: 'mouse' })
    fireEvent.click(baratie, { detail: 1 })

    expect(navigate).toHaveBeenCalledTimes(1)
  })

  it('follows the link on a click no press came before', () => {
    const { router } = draw({ bookmark: ep(30), open: eastBlue })
    const navigate = vi.spyOn(router, 'navigate')
    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })

    // A tap, then a click with no press of its own (an assistive technology).
    fireEvent.pointerDown(baratie, { pointerType: 'touch' })
    fireEvent.click(baratie, { detail: 1 })
    fireEvent.click(baratie, { detail: 1 })

    expect(navigate).toHaveBeenCalledTimes(1)

    // A touch that became a scroll leaves its kind; a key's click follows.
    fireEvent.pointerDown(baratie, { pointerType: 'touch' })
    fireEvent.click(baratie, { detail: 0 })

    expect(navigate).toHaveBeenCalledTimes(2)
  })

  it('follows no link at the end of a drag, and a key’s click after a pan', () => {
    // jsdom has no pointer capture; the frame takes the pointer once it drags.
    Object.defineProperty(HTMLElement.prototype, 'setPointerCapture', {
      configurable: true,
      value: vi.fn<() => void>(),
    })
    const { router } = draw({ bookmark: ep(30), open: eastBlue })
    const navigate = vi.spyOn(router, 'navigate')
    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })
    const press = { button: 0, pointerId: 1, pointerType: 'mouse' }

    fireEvent.pointerDown(baratie, { ...press, clientX: 10, clientY: 10 })
    fireEvent.pointerMove(baratie, { ...press, clientX: 60, clientY: 10 })
    fireEvent.pointerUp(baratie, press)
    fireEvent.click(baratie, { detail: 1 })

    expect(navigate).not.toHaveBeenCalled()

    // A touch pan sends no click; the next click from a key still follows.
    const touch = { pointerId: 2, pointerType: 'touch' }
    fireEvent.pointerDown(baratie, { ...touch, clientX: 10, clientY: 10 })
    fireEvent.pointerMove(baratie, { ...touch, clientX: 60, clientY: 10 })
    fireEvent.pointerUp(baratie, touch)
    fireEvent.click(baratie, { detail: 0 })

    expect(navigate).toHaveBeenCalledTimes(1)
  })

  it('follows the peek’s link on the first tap after a touch pan', async () => {
    const { router } = draw({ bookmark: ep(30), open: eastBlue })
    const navigate = vi.spyOn(router, 'navigate')
    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })
    const touch = { pointerId: 3, pointerType: 'touch' }

    // A tap peeks; a pan that starts on the stop sends no click.
    fireEvent.pointerDown(baratie, touch)
    fireEvent.click(baratie, { detail: 1 })
    fireEvent.pointerDown(baratie, { ...touch, clientX: 10, clientY: 10 })
    fireEvent.pointerMove(baratie, { ...touch, clientX: 60, clientY: 10 })
    fireEvent.pointerUp(baratie, touch)

    const dialog = await screen.findByRole('dialog', { name: /Baratie/u })
    const entry = within(dialog).getByRole('link', { name: 'Open the entry' })
    fireEvent.pointerDown(entry, { pointerId: 4, pointerType: 'touch' })
    fireEvent.click(entry, { detail: 1 })

    expect(navigate).toHaveBeenCalledTimes(1)
  })

  it('keeps a held peek when the pointer rests on another stop', async () => {
    const user = userEvent.setup()
    draw({ bookmark: ep(30), open: eastBlue })

    act(() => {
      within(stops())
        .getByRole('link', { name: /Baratie/u })
        .focus()
    })
    const shells = within(stops()).getByRole('link', { name: /Shells Town/u })
    await user.hover(shells)
    await new Promise((resolve) => {
      setTimeout(resolve, 400)
    })
    await user.unhover(shells)

    expect(
      screen.getByRole('dialog', { name: 'Stop 3 of 3. Baratie' }),
    ).toBeInTheDocument()
  })

  it('veils a fogged stop and asks the server only on “Show anyway”', async () => {
    const user = userEvent.setup()
    const whisky = port({ id: 'whisky-peak', name: 'Whisky Peak', ...at(64) })
    const lift = vi.fn<(handle: string) => Promise<PortView>>(peekTo(whisky))
    draw({ bookmark: ep(30), open: eastBlue, covered: fogged, peekPort: lift })

    const [first] = within(stops()).getAllByRole('button')
    await user.click(first!)

    const dialog = screen.getByRole('dialog', {
      name: 'Stop 4 of 5. A place under fog',
    })

    expect(dialog).toHaveTextContent('Under fog until episode 64')
    expect(dialog).not.toHaveTextContent('Whisky Peak')
    expect(within(dialog).queryByRole('link')).not.toBeInTheDocument()
    expect(lift).not.toHaveBeenCalled()

    await user.click(
      within(dialog).getByRole('button', { name: /Show anyway/u }),
    )
    await settle()

    expect(lift).toHaveBeenCalledWith(fogged[0]!.handle)
    expect(dialog).toHaveTextContent('Whisky Peak')
    expect(
      within(dialog).getByRole('link', { name: 'Open the entry' }),
    ).toHaveAttribute('href', '/one-piece/en/places/whisky-peak')
  })

  it('peeks a ship, as her own page has her', async () => {
    const user = userEvent.setup()
    const burnt = ship({
      id: 'going-merry',
      name: 'Going Merry',
      ...at(18),
      dossier: { ...merry.dossier, fate: 'Given a funeral at sea' },
    })
    draw({ bookmark: ep(30), open: eastBlue, ships: [burnt] })

    const [mark] = screen.getAllByRole('button', { name: 'Going Merry' })
    await user.click(mark!)

    const dialog = screen.getByRole('dialog', { name: 'Going Merry' })

    expect(dialog).toHaveTextContent('Ship')
    expect(dialog).toHaveTextContent('Episode 18')
    expect(dialog).toHaveTextContent('Fate: Given a funeral at sea')
    expect(
      within(dialog).getByRole('link', { name: 'Open the entry' }),
    ).toHaveAttribute('href', '/one-piece/en/places/going-merry')
  })
})
