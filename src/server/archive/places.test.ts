import { describe, expect, it } from 'vitest'

import { chartPointOf } from '~/data/series/one-piece/chart'
import type { Bookmark } from '~/lib/progress/episode'
import {
  opHandleOf as handleOf,
  opPeekPort as peekPort,
  opPlacesPage as placesPage,
} from '~/test/archive'
import { ONE_PIECE_LOADED as ONE_PIECE } from '~/test/series'

const BOOKMARKS = ONE_PIECE.bookmarks

describe('the sea chart in the places payload', () => {
  it.each(BOOKMARKS.map((bookmark) => [JSON.stringify(bookmark), bookmark]))(
    'places only the open stops at %s',
    (_, bookmark: Bookmark) => {
      const { covered, open } = placesPage(bookmark, 'en')

      for (const port of open) {
        expect(port.chart, port.id).toStrictEqual(chartPointOf(port.id))
      }
      // A covered stop is its handle, its kind and its two thresholds: no
      // point, so where it lies is not in the page.
      for (const entry of covered) {
        expect(
          Object.keys(entry).toSorted((a, b) => a.localeCompare(b)),
        ).toStrictEqual([
          'handle',
          'kind',
          'revealedAtChapter',
          'revealedAtEpisode',
        ])
      }
    },
  )

  it.each(BOOKMARKS.map((bookmark) => [JSON.stringify(bookmark), bookmark]))(
    'sends an open stop for the chart and the index only at %s',
    (_, bookmark: Bookmark) => {
      const { open, sagas } = placesPage(bookmark, 'en')

      // Its sentence, facts and log are its own page's.
      for (const stop of open) {
        expect(
          Object.keys(stop).toSorted((a, b) => a.localeCompare(b)),
        ).toStrictEqual([
          'aliases',
          'chart',
          'folded',
          'form',
          'id',
          'kind',
          'name',
          'revealedAtChapter',
          'revealedAtEpisode',
          'saga',
          'sea',
          'visual',
        ])
      }

      // The sagas of the open stops, and no other, in route order.
      expect(sagas.map(({ number }) => number)).toStrictEqual(
        [...new Set(open.map(({ saga }) => saga))].toSorted((a, b) => a - b),
      )
    },
  )

  it('files each stop under its saga, and names the saga in the locale', () => {
    const { open, sagas } = placesPage({ mode: 'episode', episode: 650 }, 'it')

    expect(open.find(({ id }) => id === 'dressrosa')).toMatchObject({
      sea: 'new-world',
      form: 'island',
      saga: 8,
      name: 'Dressrosa',
    })
    expect(sagas.at(-1)).toStrictEqual({
      number: 8,
      title: 'Saga di Dressrosa',
    })
  })

  it('has no point for a record that is not a place', () => {
    expect(peekPort(handleOf('monkey-d-luffy'), 'en', null)?.chart).toBeNull()
  })
})
