import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import type { PlaceChartView, PlaceDetail } from '~/lib/view/places'
import type { PortView, RecordView, ShipView, Slot } from '~/lib/view/records'
import {
  at,
  coveredSlot,
  dossier,
  openSlot,
  peekPending,
  peekTo,
  port,
  record,
  ship,
  shipEntry,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { DrawingsBand, MapBand, TurnBand } from './-$id.bands'
import { EntryDiptych, PlaceEntry, ShipBody } from './-$id.entry'

const sanji = openSlot(record({ id: 'sanji', name: 'Sanji', ...at(20) }))
const metLater = coveredSlot<RecordView>({ ...at(24) })

const baratie = port({
  id: 'baratie',
  name: 'Baratie',
  ...at(20),
  summary: 'A restaurant that floats on the sea.',
  dossier: dossier({
    landmark: 'The fish-head prow',
    filedHere: [sanji, metLater],
  }),
})

const map: PlaceChartView = {
  fogged: 2,
  here: 1,
  route: [
    { at: { x: 290, y: 60 }, sea: 'east-blue', saga: 1, ship: 0 },
    { at: { x: 190, y: 130 }, sea: 'east-blue', saga: 1, ship: 0 },
  ],
}

function detailOf(over: Partial<PlaceDetail> = {}): PlaceDetail {
  return {
    chart: map,
    drawings: [],
    index: 4,
    natives: [],
    next: coveredSlot<RecordView>({ kind: 'place', ...at(64) }),
    previous: openSlot(
      record({ id: 'syrup-village', kind: 'place', name: 'Syrup Village' }),
    ),
    slot: openSlot(baratie),
    total: 39,
    visits: [],
    ...over,
  }
}

/** A ship's entry, as the route draws it. */
function ShipEntry({
  peek,
  slot,
}: {
  peek: (handle: string) => Promise<ShipView>
  slot: Slot<ShipView>
}): ReactElement {
  return (
    <EntryDiptych
      Body={ShipBody}
      kind="ship"
      peek={peek}
      peekRecord={peekPending()}
      slot={slot}
    />
  )
}

const merry = ship({
  id: 'going-merry',
  name: 'Going Merry',
  ...at(18),
  dossier: shipEntry({
    builder: 'Merry, Kaya’s butler',
    fate: 'The crew’s ship.',
    ports: [record({ id: 'loguetown', kind: 'place', name: 'Loguetown' })],
  }),
})

const fogged = detailOf({
  chart: null,
  slot: coveredSlot<PortView>({ kind: 'place', ...at(144) }),
})

describe('a place’s entry', () => {
  it('shows the plate, the facts, the log and the records found there', () => {
    renderWithProviders(
      <PlaceEntry
        detail={detailOf()}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'Baratie' }),
    ).toBeVisible()
    expect(screen.getByText('The fish-head prow')).toBeVisible()
    expect(screen.getByText('The ship put in here.')).toBeVisible()
    expect(screen.getByRole('link', { name: 'Sanji' })).toHaveAttribute(
      'href',
      '/one-piece/en/characters/sanji',
    )
    expect(screen.getByText('First seen in episode 20')).toBeVisible()
    expect(screen.queryByText('From here')).not.toBeInTheDocument()
  })

  it('lists the characters who come from it, each a link', () => {
    const zeff = record({ id: 'zeff', name: 'Zeff', ...at(20) })
    renderWithProviders(
      <PlaceEntry
        detail={detailOf({ natives: [zeff] })}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'From here' }),
    ).toBeVisible()
    expect(screen.getByRole('link', { name: 'Zeff' })).toHaveAttribute(
      'href',
      '/one-piece/en/characters/zeff',
    )
  })

  it('carries nothing of a covered place until the reader asks', async () => {
    const user = userEvent.setup()
    const jaya = port({ id: 'jaya', name: 'Jaya', ...at(144) })
    const { container } = renderWithProviders(
      <PlaceEntry
        detail={fogged}
        peek={peekTo(jaya)}
        peekRecord={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    expect(container).not.toHaveTextContent('Jaya')
    expect(container.querySelectorAll(':scope svg svg')).toHaveLength(0)
    expect(screen.getByText('First seen in episode 144')).toBeVisible()

    // The words have their own veil, after the plate's.
    await user.click(screen.getAllByRole('button').at(-1) ?? document.body)
    await settle()

    expect(
      screen.getByRole('heading', { level: 1, name: 'Jaya' }),
    ).toBeVisible()
  })
})

describe('a ship’s entry', () => {
  it('shows who designed her, her fate and the places she reaches', () => {
    renderWithProviders(
      <ShipEntry
        peek={peekPending()}
        slot={openSlot(merry)}
      />,
      { bookmark: ep(100) },
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'Going Merry' }),
    ).toBeVisible()
    expect(screen.getByText('Ship')).toBeVisible()
    expect(screen.getByText('Episode 18')).toBeVisible()
    expect(screen.getByText('Merry, Kaya’s butler')).toBeVisible()
    expect(screen.getByText('The crew’s ship.')).toBeVisible()
    expect(screen.getByText('Places she reaches')).toBeVisible()
    expect(screen.getByRole('link', { name: 'Loguetown' })).toHaveAttribute(
      'href',
      '/one-piece/en/places/loguetown',
    )
  })

  it('carries nothing of a covered ship until the reader asks', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(
      <ShipEntry
        peek={peekTo(merry)}
        slot={coveredSlot<ShipView>({ kind: 'ship', ...at(18) })}
      />,
      { bookmark: ep(17) },
    )

    expect(container).not.toHaveTextContent('Merry')
    expect(container.querySelectorAll(':scope svg svg')).toHaveLength(0)
    expect(screen.getByText('A ship under fog')).toBeInTheDocument()
    expect(screen.getByText('Episode 18')).toBeVisible()

    await user.click(screen.getAllByRole('button').at(-1) ?? document.body)
    await settle()

    expect(
      screen.getByRole('heading', { level: 1, name: 'Going Merry' }),
    ).toBeVisible()
  })
})

describe('a place on the map', () => {
  it('draws the stretch around it, the reader’s dots and the fog tail', () => {
    const { container } = renderWithProviders(<MapBand detail={detailOf()} />, {
      bookmark: ep(20),
    })

    expect(screen.getByText('Stop 5 of 39')).toBeVisible()
    expect(
      screen.getByRole('img', {
        name: 'Map of the places. Stop 5 of 39. Baratie',
      }),
    ).toBeInTheDocument()
    // The origin, two stops reached and two dots under fog.
    expect(
      container.querySelectorAll(':scope [role=img] > div > span'),
    ).toHaveLength(5)
  })

  it('lists the later visits the reader has reached, in their unit', () => {
    renderWithProviders(
      <MapBand
        detail={detailOf({
          visits: [
            {
              note: 'The crew comes back.',
              revealedAtEpisode: 313,
              revealedAtChapter: 431,
            },
            { note: 'Again.', revealedAtEpisode: 600, revealedAtChapter: 700 },
          ],
        })}
      />,
      { bookmark: { mode: 'chapter', chapter: 800 } },
    )

    expect(screen.getByRole('heading', { name: 'Later visits' })).toBeVisible()
    expect(
      screen.getAllByRole('term').map((term) => term.textContent),
    ).toStrictEqual(['Chapter 431', 'Chapter 700'])
    expect(screen.getByText('The crew comes back.')).toBeVisible()
  })

  it('has no visits heading while none is reached', () => {
    renderWithProviders(<MapBand detail={detailOf()} />, { bookmark: ep(20) })

    expect(screen.queryByText('Later visits')).not.toBeInTheDocument()
  })

  it('has no map at all under fog, only the stop number', () => {
    renderWithProviders(<MapBand detail={fogged} />, { bookmark: ep(20) })

    expect(screen.getByText('Stop 5 of 39')).toBeVisible()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(
      screen.queryByText(/stops just before and after/u),
    ).not.toBeInTheDocument()
  })
})

describe('how a place’s drawing changes', () => {
  it('shows each drawing with the episode it is drawn from', () => {
    renderWithProviders(
      <DrawingsBand
        detail={detailOf({
          drawings: [
            { strokes: [{ d: 'M0 0L1 1' }], ...at(20) },
            { strokes: [{ d: 'M0 0L2 2' }], ...at(254) },
          ],
        })}
      />,
      { bookmark: ep(300) },
    )

    const strip = screen.getByRole('list')

    expect(
      within(strip)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toStrictEqual(['Episode 20', 'Episode 254'])
  })

  it('says it is a ship’s drawing on her page', () => {
    renderWithProviders(
      <DrawingsBand
        detail={{
          drawings: [
            { strokes: [{ d: 'M0 0L1 1' }], ...at(18) },
            { strokes: [{ d: 'M0 0L2 2' }], ...at(312) },
          ],
          slot: openSlot(merry),
        }}
      />,
      { bookmark: ep(400) },
    )

    expect(
      screen.getByText(
        'Every drawing of this ship up to your bookmark, oldest first.',
      ),
    ).toBeVisible()
  })

  it('draws nothing while there is one drawing', () => {
    const { container } = renderWithProviders(
      <DrawingsBand detail={detailOf()} />,
      { bookmark: ep(20) },
    )

    expect(container).toBeEmptyDOMElement()
  })
})

describe('the stops either side', () => {
  it('links an open stop to its page and fogs one the reader has not reached', () => {
    renderWithProviders(
      <TurnBand
        detail={detailOf()}
        peek={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    expect(screen.getByRole('link', { name: 'Syrup Village' })).toHaveAttribute(
      'href',
      '/one-piece/en/places/syrup-village',
    )
    expect(screen.getByText('Episode 64')).toBeVisible()
  })

  it('says so at either end of the route', () => {
    renderWithProviders(
      <TurnBand
        detail={detailOf({ next: null, previous: null })}
        peek={peekPending()}
      />,
      { bookmark: ep(20) },
    )

    expect(screen.getByText('Nothing. This is the first stop.')).toBeVisible()
    expect(
      screen.getByText('Nothing yet. This is the last stop in story order.'),
    ).toBeVisible()
  })
})
