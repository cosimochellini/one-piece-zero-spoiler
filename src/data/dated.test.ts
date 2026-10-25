import { describe, expect, it } from 'vitest'

import { chapterTable } from './chapterTable'
import {
  anchorsOf,
  datedArchive,
  dossiersOf,
  earliestOf,
  filedTimelines,
} from './dated'
import { type Reveal, reveal } from './reveal'
import { castOf } from './shelves'
import type { CharacterDossier, Entity } from './types'

/** A record of a fixture series, filed at one episode and one chapter. */
function record(
  id: string,
  kind: Entity['kind'],
  [revealedAtEpisode, revealedAtChapter]: [number, number],
): Entity {
  const text = { en: id, it: id }

  return {
    id,
    kind,
    name: text,
    revealedAtChapter,
    revealedAtEpisode,
    summary: text,
    visual: { art: id, tint: 'yellow' },
  }
}

const text = (en: string): { en: string; it: string } => ({ en, it: en })

/**
 * A fixture series: one arc, one place and one character whose dossier dates
 * an affiliation and an origin, the second entry checked against chapter 9.
 */
const ARC = record('first-arc', 'arc', [1, 1])
const HOME = record('home', 'place', [2, 2])
const HERO = record('hero', 'character', [3, 3])
const ENTITIES = [ARC, HOME, HERO]

const DOSSIERS: Record<string, CharacterDossier> = {
  hero: {
    affiliation: [
      { episode: 3, value: text('Alone') },
      { chapter: 9, episode: 5, value: text('A crew') },
    ],
    log: text('A log.'),
    origin: [{ chapter: 9, episode: 5, place: 'home', value: text('Home') }],
    role: text('The hero'),
  },
}

const FILED = filedTimelines(DOSSIERS)

const TABLE = chapterTable({
  anchors: anchorsOf(ENTITIES, FILED),
  chapterCeiling: 20,
  episodeCeiling: 20,
  records: ENTITIES,
})

const CAST = castOf({ dossiers: DOSSIERS, entities: ENTITIES, featured: [] })

const ARCHIVE = datedArchive({
  characters: CAST.characters,
  entities: ENTITIES,
  filed: FILED,
  gateOf: TABLE.gateOf,
})

describe('a fixture series filed through the engine', () => {
  it('gates every entry by its own pair and its record', () => {
    expect(ARCHIVE.datedOf(HERO, 'affiliation')).toStrictEqual([
      {
        episode: 3,
        gate: { revealedAtEpisode: 3, revealedAtChapter: 3 },
        value: text('Alone'),
      },
      {
        chapter: 9,
        episode: 5,
        gate: { revealedAtEpisode: 5, revealedAtChapter: 9 },
        value: text('A crew'),
      },
    ])
  })

  it('reads the latest entry the reader has reached', () => {
    const at = (episode: number): Reveal => reveal({ mode: 'episode', episode })

    expect(ARCHIVE.latestOf(at(2), HERO, 'affiliation')).toBeUndefined()
    expect(ARCHIVE.latestOf(at(4), HERO, 'affiliation')).toStrictEqual(
      text('Alone'),
    )
    expect(ARCHIVE.latestOf(at(5), HERO, 'affiliation')).toStrictEqual(
      text('A crew'),
    )
    expect(
      ARCHIVE.reachedOf(
        reveal({ mode: 'chapter', chapter: 8 }),
        HERO,
        'affiliation',
      ),
    ).toHaveLength(1)
  })

  it('lists the timelines it files, and no field it does not', () => {
    expect(ARCHIVE.timelines.map(({ label }) => label)).toStrictEqual([
      'hero.affiliation',
      'hero.origin',
    ])
    expect(ARCHIVE.datedOf(HERO, 'fate')).toStrictEqual([])
    expect(ARCHIVE.redrawn(HERO)).toStrictEqual([])
    expect(ARCHIVE.stories).toStrictEqual([])
  })

  it('reads a field filed outside the dossiers once a reader names it', () => {
    const filed = filedTimelines(DOSSIERS, {
      fate: (id) =>
        id === 'home' ? [{ episode: 4, value: text('Sunk') }] : undefined,
    })

    expect(filed.fields).toContain('fate')
    expect(filed.timelineOf(HOME, 'fate')).toHaveLength(1)
    expect(FILED.fields).not.toContain('fate')
  })

  it('anchors the chapter table on an entry that names its chapter', () => {
    expect(anchorsOf(ENTITIES, FILED)).toStrictEqual([
      [5, 9],
      [5, 9],
    ])
  })

  it('derives a place’s natives from the origin that names it', () => {
    expect(ARCHIVE.nativesOf('home')).toStrictEqual([
      { entity: HERO, gate: { revealedAtEpisode: 5, revealedAtChapter: 9 } },
    ])
    expect(ARCHIVE.nativesOf('first-arc')).toStrictEqual([])
  })

  it('shelves the character under the arc it is met in', () => {
    expect(CAST.bookSections).toStrictEqual([{ arc: ARC, characters: [HERO] }])
    expect(CAST.chart).toStrictEqual([ARC, HOME])
    expect(CAST.roleOf(HERO)).toStrictEqual(text('The hero'))
  })
})

describe('a fixture origin told by one source first', () => {
  // An anime-only entry names the place at 4; the entry both sources tell
  // names it again at 6, with no chapter of its own, so the table reads its
  // chapter off the record filed at episode 6 and chapter 8.
  const exile = record('exile', 'character', [3, 3])
  const port = record('port', 'place', [6, 8])
  const dossiers: Record<string, CharacterDossier> = {
    exile: {
      affiliation: [],
      log: text('A log.'),
      origin: [
        { episode: 4, place: 'home', source: 'anime', value: text('Home') },
        { episode: 6, place: 'home', value: text('Home, again') },
      ],
      role: text('The exile'),
    },
  }
  const entities = [ARC, HOME, exile, port]
  const filed = filedTimelines(dossiers)
  const table = chapterTable({
    anchors: anchorsOf(entities, filed),
    chapterCeiling: 20,
    episodeCeiling: 20,
    records: entities,
  })
  const archive = datedArchive({
    characters: [exile],
    entities,
    filed,
    gateOf: table.gateOf,
  })

  it('reaches each unit at the first entry its source tells', () => {
    expect(archive.nativesOf('home')).toStrictEqual([
      { entity: exile, gate: { revealedAtEpisode: 4, revealedAtChapter: 8 } },
    ])
  })
})

describe('the engine refuses', () => {
  it('a character filed with a dossier in two sagas', () => {
    const dossier = DOSSIERS['hero']

    expect(() =>
      dossiersOf([
        { dossiers: { hero: dossier } },
        { dossiers: { hero: dossier } },
      ]),
    ).toThrow('hero has a dossier in two sagas')
  })

  it('a featured id that files no character', () => {
    expect(() =>
      castOf({ dossiers: DOSSIERS, entities: ENTITIES, featured: ['home'] }),
    ).toThrow('home is featured but files no character')
  })
})

describe('earliestOf', () => {
  const both = { revealedAtEpisode: 100, revealedAtChapter: 90 }
  const anime = {
    revealedAtEpisode: 50,
    revealedAtChapter: 40,
    source: 'anime' as const,
  }

  it('reaches a link in each unit at the first entry its source tells', () => {
    expect(earliestOf([anime, both])).toStrictEqual({
      revealedAtEpisode: 50,
      revealedAtChapter: 90,
    })
    expect(earliestOf([both, anime])).toBe(both)
  })

  it('keeps a link that one source alone tells to that source', () => {
    expect(earliestOf([anime])).toBe(anime)
  })
})
