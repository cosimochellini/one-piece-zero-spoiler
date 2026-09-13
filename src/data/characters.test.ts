import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { type Bookmark, EPISODE_CEILING } from '~/lib/progress/episode'

import {
  bookSections,
  CHARACTER_DOSSIERS,
  characters,
  chart,
  chartWith,
  dossierOf,
  FEATURED_CHARACTER_IDS,
  featuredCharacters,
  foldName,
  getCharacter,
  matchName,
  nearbyCharacters,
  routePositionOf,
} from './characters'
import { entities, sagas } from './entities'
import type { Entity, LocalizedText, Timeline } from './types'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

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

const TEXT_TIMELINES: readonly TimelineCase<LocalizedText>[] =
  characters.flatMap((character) => {
    const dossier = dossierOf(character)

    return dossier === undefined ?
        []
      : [
          ...timelineCases(character, 'affiliation', dossier.affiliation),
          ...timelineCases(character, 'origin', dossier.origin),
          ...timelineCases(character, 'epithet', dossier.epithet),
          ...timelineCases(character, 'devilFruit', dossier.devilFruit),
        ]
  })

const BOUNTY_TIMELINES: readonly TimelineCase<number>[] = characters.flatMap(
  (character) =>
    timelineCases(character, 'bounty', dossierOf(character)?.bounty),
)

const ALL_TIMELINES: readonly TimelineCase<unknown>[] = [
  ...TEXT_TIMELINES,
  ...BOUNTY_TIMELINES,
]

/** The first record on the chart, which the route tests read either side of. */
const FIRST_CHARTED = chart[0]
if (FIRST_CHARTED === undefined) {
  throw new Error('empty chart')
}

const NOT_CHARACTERS = entities.filter((entity) => entity.kind !== 'character')

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

    for (const other of NOT_CHARACTERS) {
      expect(chartedIds, other.id).toContain(other.id)
    }

    const drawn = chart
      .filter((entity) => entity.kind === 'character')
      .map((entity) => entity.id)

    expect(drawn.toSorted(byName)).toStrictEqual(
      FEATURED_CHARACTER_IDS.toSorted(byName),
    )
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

describe('search', () => {
  const luffy = must('monkey-d-luffy')

  it('folds case and diacritics', () => {
    expect(foldName('Rùfy')).toBe('rufy')
    expect(foldName('NAMI')).toBe('nami')
  })

  it('matches everything on an empty query and marks nothing', () => {
    expect(
      matchName({
        bookmark: ep(1),
        entity: luffy,
        locale: 'en',
        query: ' '.repeat(3),
      }),
    ).toStrictEqual({ matches: true, highlight: null })
  })

  it('finds a name in the shown locale and says where to mark it', () => {
    expect(
      matchName({ bookmark: ep(1), entity: luffy, locale: 'en', query: 'luf' }),
    ).toStrictEqual({ matches: true, highlight: [10, 13] })
  })

  it('finds a name written in the other locale but marks nothing', () => {
    // An Italian reader who knows him as Luffy still finds Rufy.
    expect(
      matchName({
        bookmark: ep(1),
        entity: luffy,
        locale: 'it',
        query: 'luffy',
      }),
    ).toStrictEqual({ matches: true, highlight: null })
  })

  it('does not match a name that is not there', () => {
    expect(
      matchName({ bookmark: ep(1), entity: luffy, locale: 'en', query: 'zoro' })
        .matches,
    ).toBe(false)
  })

  it('finds an epithet only once the reader has reached it', () => {
    const newgate = must('edward-newgate')

    expect(
      matchName({
        bookmark: ep(152),
        entity: newgate,
        locale: 'en',
        query: 'barbabianca',
      }).matches,
    ).toBe(true)
    expect(
      matchName({
        bookmark: ep(1200),
        entity: newgate,
        locale: 'it',
        query: 'whitebeard',
      }).matches,
    ).toBe(true)
    expect(
      matchName({
        bookmark: ep(151),
        entity: newgate,
        locale: 'en',
        query: 'whitebeard',
      }).matches,
    ).toBe(false)
    expect(
      matchName({
        bookmark: null,
        entity: newgate,
        locale: 'en',
        query: 'whitebeard',
      }).matches,
    ).toBe(false)
    // Epithets are dated in episodes: a chapter bookmark searches names only.
    expect(
      matchName({
        bookmark: ch(1000),
        entity: newgate,
        locale: 'en',
        query: 'whitebeard',
      }).matches,
    ).toBe(false)
    expect(
      matchName({
        bookmark: ch(1000),
        entity: newgate,
        locale: 'en',
        query: 'newgate',
      }).matches,
    ).toBe(true)
  })
})
