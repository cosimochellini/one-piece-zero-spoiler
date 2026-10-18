import { describe, expect, it } from 'vitest'

import { CHART } from '~/data/chart'
import type { Bookmark } from '~/lib/progress/episode'

import { handleOf } from './handle.server'
import { BOOKMARKS } from './payloads.server'
import { peekPort } from './peek.server'
import { placesPage } from './places.server'

describe('the sea chart in the places payload', () => {
  it.each(BOOKMARKS.map((bookmark) => [JSON.stringify(bookmark), bookmark]))(
    'places only the open stops at %s',
    (_, bookmark: Bookmark) => {
      const { covered, open } = placesPage(bookmark, 'en')

      for (const port of open) {
        expect(port.chart, port.id).toStrictEqual(CHART[port.id])
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

  it('has no point for a record that is not a place', () => {
    expect(peekPort(handleOf('monkey-d-luffy'), 'en', null)?.chart).toBeNull()
  })
})
