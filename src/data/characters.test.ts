import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { EPISODE_CEILING } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'

import {
  bookSections,
  CHARACTER_DOSSIERS,
  characters,
  chart,
  chartWith,
  dossierOf,
  FEATURED_CHARACTER_IDS,
  featuredCharacters,
  getCharacter,
  nearbyCharacters,
  routePositionOf,
} from './characters'
import { entities, sagas } from './entities'
import type { Entity, LocalizedText, Timeline } from './types'

function must(id: string): Entity {
  const entity = getCharacter(id)
  if (entity === undefined) {
    throw new Error(`no character ${id}`)
  }
  return entity
}

/** One dossier timeline, named by the character and the field it came from. */
type TimelineCase<T> = {
  readonly character: Entity
  readonly label: string
  readonly timeline: Timeline<T>
}

/**
 * Most dossier fields are optional, so the flattening has to drop the ones a
 * character does not carry. Done here rather than inside a test, where the
 * guard would sit between `expect` and the reader.
 */
function timelineCases<T>(
  character: Entity,
  field: string,
  timeline: Timeline<T> | undefined,
): TimelineCase<T>[] {
  return timeline === undefined ?
      []
    : [{ character, label: `${character.id}.${field}`, timeline }]
}

/**
 * The affiliation timelines on their own, because one test is about them
 * rather than about dated prose in general: an affiliation says who a
 * character belongs to, and what became of them is the status field's to say.
 */
const AFFILIATION_TIMELINES: readonly TimelineCase<LocalizedText>[] =
  characters.flatMap((character) =>
    timelineCases(character, 'affiliation', dossierOf(character)?.affiliation),
  )

const TEXT_TIMELINES: readonly TimelineCase<LocalizedText>[] = [
  ...AFFILIATION_TIMELINES,
  ...characters.flatMap((character) => {
    const dossier = dossierOf(character)

    return dossier === undefined ?
        []
      : [
          ...timelineCases(character, 'origin', dossier.origin),
          ...timelineCases(character, 'epithet', dossier.epithet),
        ]
  }),
]

const BOUNTY_TIMELINES: readonly TimelineCase<number>[] = characters.flatMap(
  (character) =>
    timelineCases(character, 'bounty', dossierOf(character)?.bounty),
)

/**
 * The devil fruit timelines. Their own bucket because they carry fruit ids
 * rather than prose, so the "written in every locale" test does not apply to
 * them; the ordering and threshold tests still do.
 */
const FRUIT_TIMELINES: readonly TimelineCase<readonly string[]>[] =
  characters.flatMap((character) =>
    timelineCases(character, 'devilFruit', dossierOf(character)?.devilFruit),
  )

/**
 * The status timelines. Their own bucket for the same reason the fruits have
 * one — they carry a vocabulary rather than prose — and because three tests
 * below are about this field alone.
 */
const STATUS_TIMELINES: readonly TimelineCase<CharacterStatus>[] =
  characters.flatMap((character) =>
    timelineCases(character, 'status', dossierOf(character)?.status),
  )

const ALL_TIMELINES: readonly TimelineCase<unknown>[] = [
  ...TEXT_TIMELINES,
  ...BOUNTY_TIMELINES,
  ...FRUIT_TIMELINES,
  ...STATUS_TIMELINES,
]

/** The first record on the chart, which the route tests read either side of. */
const FIRST_CHARTED = chart[0]
if (FIRST_CHARTED === undefined) {
  throw new Error('empty chart')
}

const NOT_CHARACTERS = entities.filter((entity) => entity.kind !== 'character')

/** The kinds the chart draws whatever the featured list says. */
const CHARTED_KINDS = new Set(['arc', 'place', 'ship'])
const CHARTED_OTHERS = entities.filter((entity) =>
  CHARTED_KINDS.has(entity.kind),
)

/** A stable alphabetical order, so two id lists can be compared as sets. */
function byName(a: string, b: string): number {
  return a.localeCompare(b)
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

  it('keeps them in route order, not in ranking order', () => {
    const thresholds = featuredCharacters.map(
      (character) => character.revealedAtEpisode,
    )

    expect(thresholds).toStrictEqual(thresholds.toSorted((a, b) => a - b))
  })
})

describe('the dossiers', () => {
  it('give every character a dossier with a role and a log in every locale', () => {
    for (const character of characters) {
      const dossier = dossierOf(character)

      expect(dossier, character.id).toBeDefined()

      for (const locale of LOCALES) {
        expect(dossier?.role[locale].length, character.id).toBeGreaterThan(0)
        expect(dossier?.log[locale].length, character.id).toBeGreaterThan(0)
      }
    }
  })

  it('never files the same dossier in two sagas', () => {
    // The sagas are merged with Object.fromEntries, which would keep the
    // last dossier and drop the other without a word; the count is the tell.
    const total = sagas.reduce(
      (sum, saga) => sum + Object.keys(saga.dossiers).length,
      0,
    )

    expect(Object.keys(CHARACTER_DOSSIERS)).toHaveLength(total)
  })

  it('has no dossier for a record that is not a character', () => {
    for (const other of NOT_CHARACTERS) {
      expect(CHARACTER_DOSSIERS[other.id]).toBeUndefined()
    }
    for (const id of Object.keys(CHARACTER_DOSSIERS)) {
      expect(getCharacter(id), id).toBeDefined()
    }
  })

  it('files every timeline in order, from the threshold on, within the dial', () => {
    for (const { character, label, timeline } of ALL_TIMELINES) {
      const episodes = timeline.map((entry) => entry.episode)
      const distinct = new Set(episodes)

      expect(episodes.length, label).toBeGreaterThan(0)
      // Sorted and all distinct is the same statement as strictly ascending,
      // without a look back at the previous entry inside the loop.
      expect(episodes, label).toStrictEqual(episodes.toSorted((a, b) => a - b))
      expect(distinct.size, label).toBe(episodes.length)

      for (const episode of episodes) {
        expect(Number.isSafeInteger(episode), label).toBe(true)
        expect(episode, label).toBeGreaterThanOrEqual(
          character.revealedAtEpisode,
        )
        expect(episode, label).toBeLessThanOrEqual(EPISODE_CEILING)
      }
    }
  })

  it('writes every dated text in every locale', () => {
    for (const { label, timeline } of TEXT_TIMELINES) {
      for (const entry of timeline) {
        for (const locale of LOCALES) {
          expect(entry.value[locale].length, label).toBeGreaterThan(0)
        }
      }
    }
  })

  it('opens every status at the episode the character is filed at', () => {
    // The row must not be its own spoiler. If a status timeline could begin
    // at the episode of the death, the mere appearance of the Status row
    // would announce that something had happened; every timeline instead
    // opens at the threshold, in the state the character is introduced in.
    for (const { character, label, timeline } of STATUS_TIMELINES) {
      expect(timeline[0]?.episode, label).toBe(character.revealedAtEpisode)
    }
  })

  it('files a status only where it changes', () => {
    for (const { label, timeline } of STATUS_TIMELINES) {
      const values = timeline.map((entry) => entry.value)
      const restated = values.filter((value, at) => value === values[at - 1])

      expect(restated, label).toStrictEqual([])
    }
  })

  it('brings nobody back from a confirmed death', () => {
    // What `presumed-dead` is for: a character the story drops and picks up
    // again is filed under the doubt, never under the certainty.
    for (const { label, timeline } of STATUS_TIMELINES) {
      const died = timeline.findIndex((entry) => entry.value === 'deceased')

      expect(died === -1 || died === timeline.length - 1, label).toBe(true)
    }
  })

  it('says what became of every featured character', () => {
    for (const character of featuredCharacters) {
      expect(
        dossierOf(character)?.status?.length,
        character.id,
      ).toBeGreaterThan(0)
    }
  })

  it('leaves a fate to the status and out of the affiliation', () => {
    for (const { label, timeline } of AFFILIATION_TIMELINES) {
      for (const entry of timeline) {
        for (const locale of LOCALES) {
          expect(entry.value[locale], label).not.toMatch(
            /decedut|defunt|deceased/iu,
          )
        }
      }
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

describe('getCharacter', () => {
  it('finds a character and refuses an arc', () => {
    expect(getCharacter('nami')?.name.en).toBe('Nami')
    // Exists in the archive, but `/characters/alabasta` is not a page.
    expect(getCharacter('alabasta')).toBeUndefined()
    expect(getCharacter('nobody')).toBeUndefined()
  })
})

describe('the chart', () => {
  it('draws every arc, place and ship and only the featured characters', () => {
    const chartedIds = chart.map((entity) => entity.id)

    for (const other of CHARTED_OTHERS) {
      expect(chartedIds, other.id).toContain(other.id)
    }

    const drawn = chart
      .filter((entity) => entity.kind === 'character')
      .map((entity) => entity.id)

    expect(drawn.toSorted(byName)).toStrictEqual(
      FEATURED_CHARACTER_IDS.toSorted(byName),
    )
  })

  it('draws no devil fruit', () => {
    // The chart is arcs, places, ships and the characters in evidence. A
    // hundred and twenty fruits on it would be a different page, and the
    // filter is an allow-list so that a new kind never arrives on it by
    // default.
    expect(chart.filter((entity) => entity.kind === 'fruit')).toStrictEqual([])
  })

  it('is in threshold order', () => {
    const thresholds = chart.map((entity) => entity.revealedAtEpisode)

    expect(thresholds).toStrictEqual(thresholds.toSorted((a, b) => a - b))
  })

  it('is itself for a record already drawn', () => {
    expect(chartWith(must('nami'))).toBe(chart)
  })

  it('orders the chart by chapter when asked', () => {
    const byChapter = chartWith(must('nami'), 'chapter')
    const chapters = byChapter.map((entity) => entity.revealedAtChapter)

    expect(chapters).toStrictEqual(chapters.toSorted((a, b) => a - b))
    expect(byChapter).toHaveLength(chart.length)
  })

  it('sets an undrawn record in at its threshold, after its contemporaries', () => {
    const perona = must('perona')

    expect(chart.map((entity) => entity.id)).not.toContain('perona')

    const drawn = chartWith(perona)
    const index = drawn.findIndex((entity) => entity.id === 'perona')

    expect(drawn).toHaveLength(chart.length + 1)
    expect(drawn[index - 1]?.revealedAtEpisode).toBeLessThanOrEqual(340)
    expect(drawn[index + 1]?.revealedAtEpisode).toBeGreaterThan(340)
    // Brook is filed at 339, one episode before her, so he comes first.
    expect(drawn[index - 1]?.id).toBe('brook')
  })
})

describe('the shelves', () => {
  it('shelve every character exactly once, in route order', () => {
    const shelved = bookSections
      .flatMap((section) => section.characters)
      .map((character) => character.id)

    expect(shelved.toSorted(byName)).toStrictEqual(
      characters.map((character) => character.id).toSorted(byName),
    )

    const opens = bookSections.map((section) => section.arc.revealedAtEpisode)

    expect(opens).toStrictEqual(opens.toSorted((a, b) => a - b))
  })

  it('never puts a character under a heading that opens after them, in either unit', () => {
    // Shelving goes by episode; a reader who counts in chapters gates the
    // heading by chapter, so the chapter order has to agree or a tile could
    // sit open under a veiled heading.
    for (const section of bookSections) {
      expect(section.arc.kind).toBe('arc')

      for (const character of section.characters) {
        expect(section.arc.revealedAtEpisode, character.id).toBeLessThanOrEqual(
          character.revealedAtEpisode,
        )
        expect(section.arc.revealedAtChapter, character.id).toBeLessThanOrEqual(
          character.revealedAtChapter,
        )
      }
    }
  })

  it('shelves the East Blue crew under the East Blue saga', () => {
    const eastBlue = bookSections.find(
      (section) => section.arc.id === 'east-blue',
    )
    const shelved = eastBlue?.characters.map((character) => character.id)

    expect(shelved).toContain('monkey-d-luffy')
    expect(shelved).toContain('smoker')
    expect(shelved).not.toContain('crocodile')
  })
})

describe('routePositionOf', () => {
  it('places the first record at the start with nothing before it', () => {
    const position = routePositionOf(FIRST_CHARTED)

    expect(position.index).toBe(0)
    expect(position.total).toBe(chart.length)
    expect(position.previous).toBeUndefined()
    expect(position.next).toBe(chart[1])
  })

  it('names the records either side of a waypoint in route order', () => {
    const position = routePositionOf(must('sanji'))

    // Baratie is filed at the same episode as Sanji, right after him.
    expect(position.previous?.id).toBe('going-merry')
    expect(position.next?.id).toBe('baratie')
  })

  it('counts an undrawn character among the chart it is set into', () => {
    const position = routePositionOf(must('perona'))

    expect(position.total).toBe(chart.length + 1)
    expect(position.previous?.id).toBe('brook')
  })

  it('counts along whatever order it is handed', () => {
    const shanks = must('shanks')

    // Fourth episode of the anime, first chapter of the manga: on the manga's
    // route only records filed at chapter 1 come before or beside him.
    const byEpisode = routePositionOf(shanks).index
    const byChapter = routePositionOf(shanks, chartWith(shanks, 'chapter'))

    expect(byChapter.index).toBeLessThan(byEpisode)
    expect(byChapter.total).toBe(chart.length)

    for (const before of chartWith(shanks, 'chapter').slice(
      0,
      byChapter.index,
    )) {
      expect(before.revealedAtChapter).toBeLessThanOrEqual(1)
    }
  })
})

describe('nearbyCharacters', () => {
  it('returns the closest listed characters by episode, never the character itself', () => {
    const near = nearbyCharacters(must('monkey-d-luffy'), 3).map(
      (character) => character.id,
    )

    expect(near).toStrictEqual(['koby', 'roronoa-zoro', 'shanks'])
    expect(near).not.toContain('monkey-d-luffy')
  })

  it('leaves out characters that are not listed', () => {
    // Kid is filed at the same episode as Law but is not featured.
    expect(
      nearbyCharacters(must('trafalgar-law'), 36).map(
        (character) => character.id,
      ),
    ).not.toContain('eustass-kid')
  })
})
