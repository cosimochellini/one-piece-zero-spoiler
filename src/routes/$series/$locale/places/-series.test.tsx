import { screen, within } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import type { PlaceDetail, PlacesView, StopView } from '~/lib/view/places'
import type { PlaceWordsView, RecordView } from '~/lib/view/records'
import {
  at,
  coveredRecord,
  coveredSlot,
  dossier,
  openSlot,
  peekPending,
  port,
  stop,
} from '~/test/fixtures'
import { OTHER_BOOKMARK } from '~/test/otherSeries'
import { ep, renderOnRoute, renderWithProviders } from '~/test/providers'

import { PlaceEntry } from './-$id.entry'
import { PlaceIndex } from './-index'
import { PlacesBody } from './-page'
import { usePlacePicks } from './-params'

/** The words a series labels itself, as the server sends them. */
const words: PlaceWordsView = {
  region: 'Continent',
  allRegions: 'All continents',
  regions: { 'yorbia': 'Yorbia', 'dark-continent': 'Dark Continent' },
  forms: { tower: 'Tower', swamp: 'Swamp' },
}

const open = [
  stop({
    id: 'trick-tower',
    name: 'Trick Tower',
    ...at(3),
    sea: 'yorbia',
    form: 'tower',
    chart: null,
  }),
  stop({
    id: 'numere-wetlands',
    name: 'Numere Wetlands',
    ...at(4),
    sea: 'yorbia',
    form: 'swamp',
    chart: null,
  }),
  stop({
    id: 'lake-mobius',
    name: 'Lake Mobius',
    ...at(5),
    sea: 'dark-continent',
    form: 'swamp',
    chart: null,
  }),
]

const onRoute = {
  bookmark: ep(5),
  path: '/other-series/en/places',
  pattern: '/$series/$locale/places',
  series: OTHER_BOOKMARK,
}

function Index({ stops }: { stops: StopView[] }): ReactElement {
  const { needle, onParams, params, shown } = usePlacePicks(stops)

  return (
    <PlaceIndex
      covered={[]}
      mapAbove={false}
      needle={needle}
      onParams={onParams}
      open={stops}
      params={params}
      sagas={[{ number: 1, title: 'Hunter Exam' }]}
      shown={shown}
      words={words}
    />
  )
}

/** A picker's options, as they read. */
function options(name: string): string[] {
  return within(screen.getByRole('combobox', { name }))
    .getAllByRole('option')
    .map((option) => option.textContent)
}

/** A places page without the world map, at this split. */
function page(over: Partial<PlacesView>): PlacesView {
  return {
    covered: [],
    filed: 3,
    open: [],
    sagas: [],
    ships: [],
    words,
    ...over,
  }
}

describe('a series’ own place words', () => {
  it('group its places index and fill its pickers', async () => {
    await renderOnRoute(<Index stops={open} />, onRoute)

    expect(
      screen
        .getAllByRole('heading', { level: 2 })
        .map((heading) => heading.textContent),
    ).toStrictEqual(['Yorbia', 'Dark Continent'])
    expect(options('Continent')).toStrictEqual([
      'All continents',
      'Yorbia · 2',
      'Dark Continent · 1',
    ])
    expect(options('Type')).toStrictEqual([
      'All types',
      'Tower · 1',
      'Swamp · 2',
    ])
    expect(screen.getByRole('link', { name: /Trick Tower/u })).toHaveAttribute(
      'href',
      '/other-series/en/places/trick-tower',
    )
  })

  it('label a place’s facts on its page', () => {
    const detail: PlaceDetail = {
      chart: null,
      drawings: [],
      index: 0,
      natives: [],
      next: coveredSlot<RecordView>({ kind: 'place', ...at(4) }),
      previous: null,
      slot: openSlot(
        port({
          id: 'trick-tower',
          name: 'Torre dei Trucchi',
          chart: null,
          dossier: dossier({
            sea: 'yorbia',
            form: 'tower',
            words: {
              region: 'Continente',
              allRegions: 'Tutti i continenti',
              regions: { yorbia: 'Yorbia' },
              forms: { tower: 'Torre' },
            },
          }),
        }),
      ),
      total: 3,
      visits: [],
    }
    renderWithProviders(
      <PlaceEntry
        detail={detail}
        peek={peekPending()}
        peekRecord={peekPending()}
      />,
      {
        bookmark: ep(5),
        locale: 'it',
        path: '/other-series/it/places/trick-tower',
        series: OTHER_BOOKMARK,
      },
    )

    expect(screen.getByText('Continente')).toBeVisible()
    expect(screen.getByText('Yorbia')).toBeVisible()
    expect(screen.getByText('Torre')).toBeVisible()
  })
})

describe('the places page without the world map', () => {
  it('draws the index in place of the map', async () => {
    const { container } = await renderOnRoute(
      <PlacesBody
        page={page({ open })}
        peekPort={peekPending()}
        served={null}
      />,
      onRoute,
    )

    expect(container.querySelector('[data-chart-orientation]')).toBeNull()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Yorbia' }),
    ).toBeVisible()
  })

  it('says everything is under fog with nothing reached', async () => {
    const { container } = await renderOnRoute(
      <PlacesBody
        page={page({
          covered: [
            coveredRecord({ kind: 'place', handle: 'h1', ...at(3) }),
            coveredRecord({ kind: 'place', handle: 'h2', ...at(4) }),
          ],
        })}
        peekPort={peekPending()}
        served={null}
      />,
      { ...onRoute, bookmark: ep(1) },
    )

    expect(container.querySelector('[data-chart-orientation]')).toBeNull()
    expect(screen.getByText('2 stops under fog')).toBeVisible()
  })
})
