import { describe, expect, it } from 'vitest'

import { CHART } from '~/data/chart'
import { places } from '~/data/places'
import type { Bookmark } from '~/lib/progress/episode'

import { BOOKMARKS } from './payloads.server'
import { placePage } from './placePage.server'
import { placesPage } from './places.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** The page, which every place has. */
function pageOf(
  id: string,
  bookmark: Bookmark,
): NonNullable<ReturnType<typeof placePage>> {
  const page = placePage(id, bookmark, 'en')
  if (page === undefined) {
    throw new Error(`no page for ${id}`)
  }

  return page
}

/** The episodes Onigashima's drawings are drawn from, at a bookmark. */
function onigashimaAt(bookmark: Bookmark): number[] {
  return pageOf('onigashima', bookmark).detail.drawings.map(
    (drawing) => drawing.revealedAtEpisode,
  )
}

/**
 * What is wrong with one place's page at a bookmark: under fog it must place
 * and draw nothing and keep the name out of the title; open, it must stand on
 * the route at its own point.
 */
function wrongOn(id: string, bookmark: Bookmark): string[] {
  const { detail, head } = pageOf(id, bookmark)
  const name = places.find((place) => place.id === id)?.name.en ?? id

  if (!detail.slot.open) {
    const leaks = {
      chart: detail.chart !== null,
      drawings: detail.drawings.length > 0,
      title: head.title.includes(name),
    }

    return Object.entries(leaks)
      .filter(([, found]) => found)
      .map(([leak]) => `${id}: ${leak}`)
  }

  const here = detail.chart?.route[detail.chart.here]?.at

  return JSON.stringify(here) === JSON.stringify(CHART[id]) ?
      []
    : [`${id}: not at its point`]
}

describe('a place’s own page', () => {
  it('is not there for a record that is not a place', () => {
    expect(placePage('monkey-d-luffy', ep(650), 'en')).toBeUndefined()
    expect(placePage('no-such-place', ep(650), 'en')).toBeUndefined()
  })

  it.each(BOOKMARKS.map((bookmark) => [JSON.stringify(bookmark), bookmark]))(
    'places and draws only what the reader has reached at %s',
    (_, bookmark: Bookmark) => {
      const { covered, open } = placesPage(bookmark, 'en')
      const expected = open.map((port) => CHART[port.id])
      const wrong = places.flatMap((place) => wrongOn(place.id, bookmark))

      expect(wrong).toStrictEqual([])

      // Every page of an open place draws the same route: the open stops'
      // points, and the covered ones as a count.
      for (const port of open) {
        const chart = pageOf(port.id, bookmark).detail.chart

        expect(chart?.route.map((stop) => stop.at)).toStrictEqual(expected)
        expect(chart?.fogged).toBe(covered.length)
      }
    },
  )

  it('sits between the stops either side of it in the reader’s order', () => {
    const { detail } = pageOf('water-seven', ep(650))

    expect(detail.index).toBe(13)
    expect(detail.previous).toMatchObject({ record: { id: 'angel-island' } })
    expect(detail.next).toMatchObject({ record: { id: 'puffing-tom' } })
  })

  it('fogs the next stop the reader has not reached', () => {
    const { detail } = pageOf('alubarna', ep(100))

    expect(detail.next?.open).toBe(false)
    expect(detail.chart?.here).toBe((detail.chart?.route.length ?? 0) - 1)
  })

  it('has nothing before the first stop and nothing after the last', () => {
    expect(pageOf('shells-town', ep(1200)).detail.previous).toBeNull()
    expect(pageOf('sun-world', ep(1200)).detail.next).toBeNull()
  })

  it('draws each stage of its drawing from its own gate, in either unit', () => {
    // Water Seven is drawn again at episode 254, chapter 363.
    expect(pageOf('water-seven', ep(253)).detail.drawings).toStrictEqual([])
    expect(
      pageOf('water-seven', ep(254)).detail.drawings.map(
        (drawing) => drawing.revealedAtEpisode,
      ),
    ).toStrictEqual([229, 254])
    expect(pageOf('water-seven', ch(362)).detail.drawings).toStrictEqual([])
    expect(
      pageOf('water-seven', ch(363)).detail.drawings.map(
        (drawing) => drawing.revealedAtChapter,
      ),
    ).toStrictEqual([323, 363])
  })

  it('stops the strip at the reader’s bookmark, oldest first', () => {
    expect(onigashimaAt(ep(1016))).toStrictEqual([918, 1011])
    expect(onigashimaAt(ep(1200))).toStrictEqual([918, 1011, 1017, 1076])
  })

  it('has no drawings and no map under fog', () => {
    const { detail, head } = pageOf('onigashima', ep(900))

    expect(detail.slot.open).toBe(false)
    expect(detail.chart).toBeNull()
    expect(detail.drawings).toStrictEqual([])
    expect(head.title).toBe('A place under fog | Zero Spoiler')
  })
})
