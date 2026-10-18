import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import type { PlaceChartView, PlaceDetail } from '~/lib/view/places'
import type { PortView, RecordView } from '~/lib/view/records'
import {
  at,
  coveredRecord,
  coveredSlot,
  dossier,
  openSlot,
  peekPending,
  peekTo,
  port,
  record,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { DrawingsBand, MapBand, TurnBand } from './-$id.bands'
import { EntryDiptych } from './-$id.entry'
import { PlaceLinks } from './-links'

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
    { at: { x: 290, y: 60 }, sea: 'east-blue', ship: 0, tint: 'orange' },
    { at: { x: 190, y: 130 }, sea: 'east-blue', ship: 0, tint: 'teal' },
  ],
}

function detailOf(over: Partial<PlaceDetail> = {}): PlaceDetail {
  return {
    chart: map,
    drawings: [],
    index: 4,
    next: coveredSlot<RecordView>({ kind: 'place', ...at(64) }),
    previous: openSlot(
      record({ id: 'syrup-village', kind: 'place', name: 'Syrup Village' }),
    ),
    slot: openSlot(baratie),
    total: 39,
    ...over,
  }
}

const fogged = detailOf({
  chart: null,
  slot: coveredSlot<PortView>({ kind: 'place', ...at(144) }),
})

describe('a place’s entry', () => {
  it('shows the plate, the facts, the log and the records found there', () => {
    renderWithProviders(
      <EntryDiptych
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
      '/en/characters/sanji',
    )
    expect(screen.getByText('First seen in episode 20')).toBeVisible()
  })

  it('carries nothing of a covered place until the reader asks', async () => {
    const user = userEvent.setup()
    const jaya = port({ id: 'jaya', name: 'Jaya', ...at(144) })
    const { container } = renderWithProviders(
      <EntryDiptych
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
      '/en/places/syrup-village',
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

describe('the list under the chart', () => {
  it('links every open place to its page and counts the rest', () => {
    renderWithProviders(
      <PlaceLinks
        covered={[coveredRecord({ kind: 'place' })]}
        open={[baratie]}
      />,
      { bookmark: ep(20) },
    )

    expect(screen.getByRole('link', { name: 'Baratie' })).toHaveAttribute(
      'href',
      '/en/places/baratie',
    )
    expect(screen.getByText('1 stop under fog')).toBeVisible()
  })

  it('is not there with nothing open', () => {
    const { container } = renderWithProviders(
      <PlaceLinks
        covered={[coveredRecord({ kind: 'place' })]}
        open={[]}
      />,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
