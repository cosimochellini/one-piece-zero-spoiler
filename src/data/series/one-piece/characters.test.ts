import { describe, expect, it } from 'vitest'

import { orderByMode, routePositionOf } from '~/data/order'
import type { Entity, Timeline } from '~/data/types'

import {
  characters,
  chart,
  chartWith,
  dossierOf,
  FEATURED_CHARACTER_IDS,
  featuredCharacters,
  getCharacter,
} from './characters'

/**
 * One Piece's own rules about its characters: its featured list, its
 * bounties, and the chart and route around named records. The rules every
 * series' characters follow (dossiers, statuses, chronicles, shelves) are
 * in `~/data/archive.test.ts`.
 */

function must(id: string): Entity {
  const entity = getCharacter(id)
  if (entity === undefined) {
    throw new Error(`no character ${id}`)
  }
  return entity
}

/** Every bounty timeline, named by the character it came from. */
const BOUNTY_TIMELINES: { label: string; timeline: Timeline<number> }[] =
  characters.flatMap((character) => {
    const timeline = dossierOf(character)?.bounty

    return timeline === undefined ?
        []
      : { label: `${character.id}.bounty`, timeline }
  })

/** The first record on the chart, which the route tests read either side of. */
const FIRST_CHARTED = chart[0]
if (FIRST_CHARTED === undefined) {
  throw new Error('empty chart')
}

describe('the featured list', () => {
  it('lists exactly thirty-six distinct characters that all exist', () => {
    const distinct = new Set(FEATURED_CHARACTER_IDS)

    expect(FEATURED_CHARACTER_IDS).toHaveLength(36)
    expect(distinct.size).toBe(36)

    for (const id of FEATURED_CHARACTER_IDS) {
      expect(getCharacter(id)?.kind, id).toBe('character')
    }

    expect(featuredCharacters).toHaveLength(36)
  })
})

describe('the dossiers', () => {
  it('says what became of every featured character', () => {
    for (const character of featuredCharacters) {
      expect(
        dossierOf(character)?.status?.length,
        character.id,
      ).toBeGreaterThan(0)
    }
  })

  it('files every bounty as a whole number of Berry above zero', () => {
    for (const { label, timeline } of BOUNTY_TIMELINES) {
      for (const entry of timeline) {
        expect(Number.isSafeInteger(entry.value), label).toBe(true)
        expect(entry.value, label).toBeGreaterThan(0)
      }
    }
  })
})

describe('the chronicles', () => {
  it('tells the story of every featured character, in several stories', () => {
    // A character the chart puts in evidence has a chronicle, and one of
    // more than a story or two; a featured character with none is a test
    // failure, so a chronicle cannot be dropped by accident.
    for (const character of featuredCharacters) {
      const chronicle = dossierOf(character)?.chronicle

      expect(chronicle?.length, character.id).toBeGreaterThanOrEqual(4)
    }
  })
})

describe('getCharacter', () => {
  it('finds a character and refuses an arc', () => {
    expect(getCharacter('nami')?.name.en).toBe('Nami')
    // Exists in the archive, but `/characters/alabasta` is not a page.
    expect(getCharacter('alabasta')).toBeUndefined()
    expect(getCharacter('nobody')).toBeUndefined()
  })
})

describe('the chart', () => {
  it('is itself for a record already drawn', () => {
    expect(chartWith(must('nami'))).toBe(chart)
  })

  it('sets an undrawn record in at its threshold, after its contemporaries', () => {
    const perona = must('perona')

    expect(chart.map((entity) => entity.id)).not.toContain('perona')

    const drawn = chartWith(perona)
    const index = drawn.findIndex((entity) => entity.id === 'perona')

    expect(drawn).toHaveLength(chart.length + 1)
    expect(drawn[index - 1]?.revealedAtEpisode).toBeLessThanOrEqual(343)
    expect(drawn[index + 1]?.revealedAtEpisode).toBeGreaterThan(343)
    // Thriller Bark is filed at 343 too, so the island comes first.
    expect(drawn[index - 1]?.id).toBe('thriller-bark')
  })
})

describe('routePositionOf', () => {
  it('places the first record at the start with nothing before it', () => {
    const position = routePositionOf(FIRST_CHARTED, chartWith(FIRST_CHARTED))

    expect(position.index).toBe(0)
    expect(position.total).toBe(chart.length)
    expect(position.previous).toBeUndefined()
    expect(position.next).toBe(chart[1])
  })

  it('names the records either side of a waypoint in route order', () => {
    const position = routePositionOf(must('sanji'), chartWith(must('sanji')))

    // The Baratie arc and the restaurant are filed at the same episode as
    // Sanji, the arc just before him and the place right after.
    expect(position.previous?.id).toBe('baratie-arc')
    expect(position.next?.id).toBe('baratie')
  })

  it('counts an undrawn character among the chart it is set into', () => {
    const position = routePositionOf(must('perona'), chartWith(must('perona')))

    expect(position.total).toBe(chart.length + 1)
    expect(position.previous?.id).toBe('thriller-bark')
  })

  it('counts along whatever order it is handed', () => {
    const shanks = must('shanks')

    // Fourth episode of the anime, first chapter of the manga: on the manga's
    // route only records filed at chapter 1 come before or beside him.
    const byChapter = orderByMode(chartWith(shanks), 'chapter')
    const byEpisode = routePositionOf(shanks, chartWith(shanks)).index
    const position = routePositionOf(shanks, byChapter)

    expect(position.index).toBeLessThan(byEpisode)
    expect(position.total).toBe(chart.length)

    for (const before of byChapter.slice(0, position.index)) {
      expect(before.revealedAtChapter).toBeLessThanOrEqual(1)
    }
  })
})
