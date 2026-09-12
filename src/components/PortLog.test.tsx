import { screen, within } from '@testing-library/react'

import { places } from '~/data/places'
import { renderWithProviders } from '~/test/providers'

import { PortLog } from './PortLog'

// The real log: five East Blue ports, then Jaya at 144 and Egghead at 1089.
const entries = places

describe('PortLog', () => {
  it('numbers every port in the order the ship reaches them', () => {
    renderWithProviders(<PortLog entries={entries} progress={20} />, {
      progress: 20,
    })

    const stages = screen.getAllByText(/^Port of call \d of 7$/u)
    expect(stages.map((node) => node.textContent)).toEqual(
      entries.map((_, i) => `Port of call ${String(i + 1)} of 7`),
    )
  })

  it('opens the ports the reader has reached with their dossier, and fogs the rest', () => {
    const { container } = renderWithProviders(
      <PortLog entries={entries} progress={20} />,
      { progress: 20 },
    )

    // Baratie is open at 20: name, facts, log entry, and an anchor to land on.
    const baratie = screen.getByRole('heading', { level: 2, name: 'Baratie' })
    expect(baratie.closest('li')).toHaveAttribute('id', 'baratie')
    expect(screen.getByText('Floating restaurant')).toBeInTheDocument()
    expect(screen.getByText('The fish-head prow')).toBeInTheDocument()
    expect(screen.getAllByText('East Blue Saga').length).toBeGreaterThan(0)

    // Jaya is not: no name, no anchor, no drawing, and its episode still shows.
    expect(screen.queryByText('Jaya')).not.toBeInTheDocument()
    expect(container.querySelector('#jaya')).toBeNull()
    // Fogged headings sit inside an `aria-hidden` wrapper, so they are found
    // by text, not by role: they have no accessible role by design.
    expect(screen.getAllByText('A place under fog')).toHaveLength(2)
    expect(screen.getByText('First seen in episode 144')).toBeVisible()
    // Every drawing on the page belongs to an open port or an open record.
    expect(container.querySelectorAll('svg svg')).toHaveLength(5)
  })

  it('files the records met at a port, each behind its own fog', () => {
    renderWithProviders(<PortLog entries={entries} progress={20} />, {
      progress: 20,
    })

    const baratie = screen
      .getByRole('heading', { level: 2, name: 'Baratie' })
      .closest('li')
    if (baratie === null) throw new Error('no Baratie row')

    // Sanji is met at 20 and is a link; Mihawk arrives at 24 and is covered.
    expect(
      within(baratie).getByRole('link', { name: 'Sanji' }),
    ).toHaveAttribute('href', '/en/characters/sanji')
    expect(
      within(baratie).queryByText('Dracule Mihawk'),
    ).not.toBeInTheDocument()
    expect(within(baratie).getByText('Episode 24')).toBeVisible()
  })

  it('draws the horizon where the reader is', () => {
    renderWithProviders(<PortLog entries={entries} progress={20} />, {
      progress: 20,
    })

    const horizon = screen.getByText('You are here · episode 20').closest('li')
    expect(horizon).toHaveAttribute('aria-current', 'step')
    // Five open ports above the horizon, two covered below it.
    const rows = screen
      .getAllByRole('listitem')
      .filter((item) => item.parentElement?.tagName === 'OL')
    expect(rows.indexOf(horizon as HTMLLIElement)).toBe(5)
  })

  it('puts the horizon first and fogs everything with no bookmark', () => {
    renderWithProviders(<PortLog entries={entries} progress={null} />)

    expect(
      screen.getByText('No episode set · the whole route is under fog'),
    ).toBeInTheDocument()
    expect(screen.getAllByText('A place under fog')).toHaveLength(
      entries.length,
    )
    expect(screen.queryByText('Baratie')).not.toBeInTheDocument()
  })
})
