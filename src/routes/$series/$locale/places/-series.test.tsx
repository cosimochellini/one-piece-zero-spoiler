import { screen, within } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import type { PlaceDetail, StopView } from '~/lib/view/places'
import type { RecordView } from '~/lib/view/records'
import {
  at,
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
import { usePlacePicks } from './-params'

// Imported inside the factory, which runs before this file's imports do.
vi.mock(import('~/lib/view/placeWords'), async (importOriginal) => {
  const { withOtherSeries } = await import('~/test/otherSeries')
  return withOtherSeries(await importOriginal())
})

const open = [
  stop({
    id: 'trick-tower',
    name: 'Trick Tower',
    ...at(3),
    sea: 'yorbia',
    form: 'tower',
  }),
  stop({
    id: 'numere-wetlands',
    name: 'Numere Wetlands',
    ...at(4),
    sea: 'yorbia',
    form: 'swamp',
  }),
  stop({
    id: 'lake-mobius',
    name: 'Lake Mobius',
    ...at(5),
    sea: 'dark-continent',
    form: 'swamp',
  }),
]

function Index({ stops }: { stops: StopView[] }): ReactElement {
  const { needle, onParams, params, shown } = usePlacePicks(stops)

  return (
    <PlaceIndex
      covered={[]}
      needle={needle}
      onParams={onParams}
      open={stops}
      params={params}
      sagas={[{ number: 1, title: 'Hunter Exam' }]}
      shown={shown}
    />
  )
}

/** A picker's options, as they read. */
function options(name: string): string[] {
  return within(screen.getByRole('combobox', { name }))
    .getAllByRole('option')
    .map((option) => option.textContent)
}

describe('a series’ own place words', () => {
  it('group its places index and fill its pickers', async () => {
    await renderOnRoute(<Index stops={open} />, {
      bookmark: ep(5),
      path: '/other-series/en/places',
      pattern: '/$series/$locale/places',
      series: OTHER_BOOKMARK,
    })

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

  it('label a place’s facts on its page, in the page’s locale', () => {
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
          dossier: dossier({ sea: 'yorbia', form: 'tower' }),
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
