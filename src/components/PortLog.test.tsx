import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { RecordView } from '~/lib/view/records'
import {
  at,
  coveredRecord,
  coveredSlot,
  dossier,
  openSlot,
  peekPending,
  port,
  record,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { PortLog } from './PortLog'

// Five open East Blue ports, then two the reader has not reached.
const sanji = openSlot(record({ id: 'sanji', name: 'Sanji', ...at(20) }))
const metLater = coveredSlot<RecordView>({ ...at(24) })

const baratie = port({
  id: 'baratie',
  name: 'Baratie',
  ...at(20),
  summary: 'A restaurant that floats on the sea.',
  dossier: dossier({
    arc: 'East Blue Saga',
    landmark: 'The fish-head prow',
    filedHere: [sanji, metLater],
  }),
})

const open = [
  port({ id: 'shells-town', name: 'Shells Town', ...at(3) }),
  port({ id: 'foosha-village', name: 'Foosha Village', ...at(4) }),
  port({ id: 'orange-town', name: 'Orange Town', ...at(6) }),
  port({ id: 'syrup-village', name: 'Syrup Village', ...at(9) }),
  baratie,
]

const covered = [
  coveredRecord({ kind: 'place', ...at(144) }),
  coveredRecord({ kind: 'place', ...at(1089) }),
]

/** The port of call one piece of the page belongs to. */
function rowOf(element: HTMLElement): HTMLElement {
  const row = element.closest('li')
  if (row === null) {
    throw new Error('no port of call around the element')
  }

  return row
}

/** The ports and the horizon, in the order they are logged. */
function rows(): readonly HTMLElement[] {
  return screen
    .getAllByRole('listitem')
    .filter((item) => item.parentElement?.tagName === 'OL')
}

describe('PortLog', () => {
  it('numbers every port in the order the ship reaches them', () => {
    renderWithProviders(
      <PortLog
        bookmark={ep(20)}
        covered={covered}
        open={open}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    const stages = screen.getAllByText(/^Port of call \d of 7$/u)

    expect(stages.map((node) => node.textContent)).toStrictEqual(
      [...open, ...covered].map(
        (_, index) => `Port of call ${String(index + 1)} of 7`,
      ),
    )
  })

  it('opens the ports the reader has reached with their dossier, and fogs the rest', () => {
    const { container } = renderWithProviders(
      <PortLog
        bookmark={ep(20)}
        covered={covered}
        open={open}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    // Baratie is open: name, facts, log entry, and an anchor to land on.
    const heading = screen.getByRole('heading', { level: 2, name: 'Baratie' })

    expect(rowOf(heading)).toHaveAttribute('id', 'baratie')
    expect(
      screen.getByText('A restaurant that floats on the sea.'),
    ).toBeInTheDocument()
    expect(screen.getByText('The fish-head prow')).toBeInTheDocument()
    expect(screen.getAllByText('East Blue Saga').length).toBeGreaterThan(0)

    // The two ports past the reader carry no id and no name of their own.
    // Fogged headings sit inside an `aria-hidden` wrapper, so they are found
    // by text, not by role: they have no accessible role by design.
    expect(screen.getAllByText('A place under fog')).toHaveLength(2)
    expect(screen.getByText('First seen in episode 144')).toBeVisible()
    expect(container.querySelector(':scope #jaya')).toBeNull()
    // Every drawing on the page belongs to an open port or an open record.
    expect(container.querySelectorAll(':scope svg svg')).toHaveLength(5)
  })

  it('files the records met at a port, each behind its own fog', () => {
    renderWithProviders(
      <PortLog
        bookmark={ep(20)}
        covered={covered}
        open={open}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    const row = rowOf(
      screen.getByRole('heading', { level: 2, name: 'Baratie' }),
    )

    // Sanji is met at 20 and is a link; the record filed at 24 is covered.
    expect(within(row).getByRole('link', { name: 'Sanji' })).toHaveAttribute(
      'href',
      '/en/characters/sanji',
    )
    expect(within(row).getByText('Episode 24')).toBeVisible()
    expect(within(row).getAllByText('Spoiler')).toHaveLength(1)
  })

  it('draws the horizon where the reader is', () => {
    renderWithProviders(
      <PortLog
        bookmark={ep(20)}
        covered={covered}
        open={open}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    const horizon = rowOf(screen.getByText('You are here · episode 20'))

    expect(horizon).toHaveAttribute('aria-current', 'step')
    // Five open ports above the horizon, two covered below it.
    expect(rows().indexOf(horizon)).toBe(5)
  })

  it('puts the horizon first and fogs everything with no bookmark', () => {
    renderWithProviders(
      <PortLog
        bookmark={null}
        covered={[
          ...covered,
          ...open.map(() => coveredRecord({ kind: 'place' })),
        ]}
        open={[]}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
    )

    expect(
      screen.getByText('No bookmark set · the whole route is under fog'),
    ).toBeInTheDocument()
    expect(screen.getAllByText('A place under fog')).toHaveLength(7)
    expect(screen.queryByText('Baratie')).not.toBeInTheDocument()
  })
})
