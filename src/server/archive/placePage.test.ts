import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'
import { characters } from '~/data/series/one-piece/characters'
import { chartPointOf } from '~/data/series/one-piece/chart'
import { placeDossierOf, places, ships } from '~/data/series/one-piece/places'
import { CHARACTER_DOSSIERS } from '~/data/series/one-piece/sagas'
import type { Bookmark } from '~/lib/progress/episode'

import { BOOKMARKS } from './payloads.server'
import { type PlacePage, placePage, type ShipPage } from './placePage.server'
import { placesPage } from './places.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** The page, which every place has. */
function pageOf(id: string, bookmark: Bookmark): PlacePage {
  const page = placePage(id, bookmark, 'en')
  if (page === undefined || !('detail' in page)) {
    throw new Error(`no place page for ${id}`)
  }

  return page
}

/** A ship's page, which both ships have. */
function shipPageOf(id: string, bookmark: Bookmark): ShipPage {
  const page = placePage(id, bookmark, 'en')
  if (page === undefined || !('ship' in page)) {
    throw new Error(`no ship page for ${id}`)
  }

  return page
}

/** A ship's fate and drawings at a bookmark: `null` under fog. */
function shipAt(
  id: string,
  bookmark: Bookmark,
): null | { drawings: number[]; fate: string | undefined; ports: string[] } {
  const { ship } = shipPageOf(id, bookmark)
  if (!ship.slot.open) {
    return null
  }

  return {
    drawings: ship.drawings.map((drawing) =>
      bookmark?.mode === 'chapter' ?
        drawing.revealedAtChapter
      : drawing.revealedAtEpisode,
    ),
    fate: ship.slot.record.dossier.fate,
    ports: ship.slot.record.dossier.ports.map((port) => port.id),
  }
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

  return JSON.stringify(here) === JSON.stringify(chartPointOf(id)) ?
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
      const expected = open.map((port) => chartPointOf(port.id))
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

describe('a ship’s own page', () => {
  it.each(BOOKMARKS.map((bookmark) => [JSON.stringify(bookmark), bookmark]))(
    'says of each ship what the places page says, and no more, at %s',
    (_, bookmark: Bookmark) => {
      const reached = new Map(
        placesPage(bookmark, 'en').ships.map((view) => [view.id, view]),
      )
      const covered = 'A ship under fog | Zero Spoiler'

      // What each page sends, and what the places page's ship says of her:
      // the same record once reached, nothing and no drawing before.
      const pages = ships.map((entity) => {
        const { head, ship } = shipPageOf(entity.id, bookmark)
        return {
          slot: ship.slot.open ? ship.slot : null,
          drawings: ship.slot.open ? null : ship.drawings,
          title: head.title,
        }
      })
      const expected = ships.map((entity) => {
        const sent = reached.get(entity.id)
        return sent === undefined ?
            { slot: null, drawings: [], title: covered }
          : {
              slot: { open: true, record: sent },
              drawings: null,
              title: `${entity.name.en} | Zero Spoiler`,
            }
      })

      expect(pages).toStrictEqual(expected)
    },
  )

  it('is a covered page, not a missing one, before the reader reaches her', () => {
    // Ruled for #676: a ship under fog keeps the covered-page contract of a
    // character or a place, and is never linked to before she is reached.
    const { head, ship } = shipPageOf('thousand-sunny', ep(18))

    expect(ship.drawings).toStrictEqual([])
    expect(ship.slot).toMatchObject({
      open: false,
      covered: { kind: 'ship', revealedAtEpisode: 324 },
    })
    expect(head.title).toBe('A ship under fog | Zero Spoiler')
  })

  it('covers the Merry before the crew receives her', () => {
    const { head, ship } = shipPageOf('going-merry', ep(17))

    expect(ship.slot).toMatchObject({
      open: false,
      covered: { kind: 'ship', revealedAtEpisode: 18 },
    })
    expect(head.description).toBe(
      'A One Piece ship, under fog until episode 18. Set your bookmark to read about it.',
    )
    expect(shipAt('going-merry', ep(18))).toStrictEqual({
      drawings: [],
      fate: 'The crew’s ship.',
      ports: [],
    })
  })

  it('burns the Merry at episode 312 and chapter 430, and not before', () => {
    for (const before of [ep(311), ch(429)]) {
      expect(shipAt('going-merry', before)?.drawings).toStrictEqual([])
      expect(shipAt('going-merry', before)?.fate).toMatch(/keel/u)
    }

    expect(shipAt('going-merry', ep(312))?.drawings).toStrictEqual([18, 312])
    expect(shipAt('going-merry', ch(430))?.drawings).toStrictEqual([41, 430])
    expect(shipAt('going-merry', ep(312))?.fate).toMatch(/burn/u)
    expect(shipAt('going-merry', ch(430))?.fate).toMatch(/burn/u)
  })

  it('lists only the places the Sunny has reached', () => {
    expect(shipAt('thousand-sunny', ep(323))).toBeNull()
    expect(shipAt('thousand-sunny', ep(324))?.ports).toStrictEqual([])
    expect(shipAt('thousand-sunny', ep(628))?.ports).not.toContain('dressrosa')
    expect(shipAt('thousand-sunny', ep(629))?.ports.at(-1)).toBe('dressrosa')
    expect(shipAt('thousand-sunny', ch(699))?.ports).not.toContain('dressrosa')
    expect(shipAt('thousand-sunny', ch(700))?.ports.at(-1)).toBe('dressrosa')
  })
})

/** The episodes of the visits Water Seven's page sends at a bookmark. */
function waterSevenVisitsAt(bookmark: Bookmark): number[] {
  return pageOf('water-seven', bookmark).detail.visits.map(
    (visit) => visit.revealedAtEpisode,
  )
}

describe('a place’s later visits', () => {
  it('opens a visit at its own episode and chapter, and not before', () => {
    // The crew is back in Water Seven in chapter 431, episode 313.
    expect(waterSevenVisitsAt(ep(312))).toStrictEqual([])
    expect(waterSevenVisitsAt(ep(313))).toStrictEqual([313])
    expect(waterSevenVisitsAt(ch(430))).toStrictEqual([])
    expect(waterSevenVisitsAt(ch(431))).toStrictEqual([313])
  })

  it.each(BOOKMARKS.map((bookmark) => [JSON.stringify(bookmark), bookmark]))(
    'sends none under fog and none past the bookmark, at %s',
    (_, bookmark: Bookmark) => {
      const { sees } = reveal(bookmark)

      for (const place of places) {
        const { detail } = pageOf(place.id, bookmark)
        // Worked out from the filed pairs, not from the server's gate: the
        // place open, and the visit's own episode or chapter reached.
        const expected =
          detail.slot.open ?
            (placeDossierOf(place)?.visits ?? [])
              .filter((visit) =>
                sees({
                  revealedAtEpisode: visit.episode,
                  revealedAtChapter: visit.chapter,
                }),
              )
              .map((visit) => visit.episode)
          : []

        expect(
          detail.visits.map((visit) => visit.revealedAtEpisode),
          place.id,
        ).toStrictEqual(expected)
      }
    },
  )
})

/** The ids of the natives a place's page sends at a bookmark. */
function nativesAt(id: string, bookmark: Bookmark): string[] {
  return pageOf(id, bookmark).detail.natives.map((native) => native.id)
}

/**
 * The characters a place's page should list at a bookmark, worked out from
 * the filed pairs rather than from the server's gate: the place open, the
 * character met, and an origin entry naming the place reached at its own
 * episode or chapter.
 */
function expectedNatives(id: string, bookmark: Bookmark): string[] {
  const { sees } = reveal(bookmark)
  if (!pageOf(id, bookmark).detail.slot.open) {
    return []
  }

  return characters
    .filter((character) => {
      const origin = CHARACTER_DOSSIERS[character.id]?.origin ?? []
      const told = origin.filter((entry) => entry.place === id)

      return (
        sees(character)
        && told.some((entry) =>
          sees({
            revealedAtEpisode: entry.episode,
            revealedAtChapter: entry.chapter ?? Infinity,
          }),
        )
      )
    })
    .map((character) => character.id)
}

const byId = (a: string, b: string): number => a.localeCompare(b)

describe('a place’s natives', () => {
  it('lists a character from the pair that tells where they come from', () => {
    // Arlong is met at episode 31, chapter 71; Jinbe's flashback ties him to
    // Fish-Man Island in chapter 621, episode 540.
    expect(nativesAt('fish-man-island', ep(539))).not.toContain('arlong')
    expect(nativesAt('fish-man-island', ep(540))).toContain('arlong')
    expect(nativesAt('fish-man-island', ch(620))).not.toContain('arlong')
    expect(nativesAt('fish-man-island', ch(621))).toContain('arlong')
  })

  it('lists nobody under fog, and nobody not met yet', () => {
    // Usopp comes from Syrup Village, which opens with him at chapter 23.
    expect(nativesAt('syrup-village', ep(8))).toStrictEqual([])
    expect(nativesAt('syrup-village', ch(22))).toStrictEqual([])
    expect(nativesAt('syrup-village', ch(23))).toContain('usopp')
    expect(nativesAt('syrup-village', ch(23))).not.toContain('kaya')
  })

  it.each(BOOKMARKS.map((bookmark) => [JSON.stringify(bookmark), bookmark]))(
    'sends only characters met whose origin naming it is reached, at %s',
    (_, bookmark: Bookmark) => {
      for (const place of places) {
        expect(
          nativesAt(place.id, bookmark).toSorted(byId),
          place.id,
        ).toStrictEqual(expectedNatives(place.id, bookmark).toSorted(byId))
      }
    },
  )
})
