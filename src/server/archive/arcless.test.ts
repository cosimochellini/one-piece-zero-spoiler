import { describe, expect, it } from 'vitest'

import { castOf } from '~/data/shelves'
import { sweepOf } from '~/data/sweep'
import type { Entity, Saga, SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { Source } from '~/lib/progress/spoiler'
import { OP_ARCHIVE } from '~/test/archive'

import { homePage } from './home.server'
import { shelvesPage } from './pages.server'
import { type Reader, readerFor } from './reader.server'
import { sagaLabels, sagaStarts } from './sagaLabels.server'

/**
 * A series that files no arcs, its records grouped by season as Game of
 * Thrones' are (#844): each season is shelved, swept and named on the home
 * page and in the saga dialog under its own heading.
 */

const text = (en: string): { en: string; it: string } => ({ en, it: en })

function record(
  id: string,
  kind: Entity['kind'],
  [revealedAtEpisode, revealedAtChapter, source]: [number, number, Source?],
): Entity {
  return {
    id,
    kind,
    name: text(id),
    revealedAtEpisode,
    revealedAtChapter,
    summary: text(id),
    visual: { art: id, tint: 'red' },
    ...(source !== undefined && { source }),
  }
}

function season(number: number, entries: Entity[]): Saga {
  return {
    dossiers: {},
    entries,
    heading: {
      id: `season-${String(number)}`,
      summary: text(`What season ${String(number)} tells.`),
      visual: { art: `season-${String(number)}`, tint: 'red' },
    },
    name: text(`Season ${String(number)}`),
  }
}

// Season 2's book chapters start at the book-only record (70), not at the
// show-only one filed against chapter 5. Benjen is met in season 2's
// episodes but in chapter 3, so a chapter reader finds him under season 1.
const SEASON_1 = season(1, [
  record('winterfell', 'place', [1, 1]),
  record('ned', 'character', [1, 2]),
  record('tyrion', 'character', [2, 9]),
  record('benjen', 'character', [14, 3]),
])

const SAGAS = [
  SEASON_1,
  season(2, [
    record('stannis', 'character', [11, 80]),
    record('dragonstone', 'place', [11, 81]),
    record('jeyne', 'character', [12, 70, 'chapter']),
    record('ros', 'character', [13, 5, 'episode']),
  ]),
]

const ENTITIES = SAGAS.flatMap((saga) => saga.entries)

const SERIES = {
  ...OP_ARCHIVE.series,
  slug: 'arcless',
  cookie: 'zs_arcless',
  trialCookie: 'zs_arcless_try',
  episodeCeiling: 20,
  chapterCeiling: 100,
  seasons: [
    { number: 1, first: 1, last: 10 },
    { number: 2, first: 11, last: 20 },
  ],
}

/** No character of the fixture has a dossier. */
const NO_DOSSIERS: Saga['dossiers'] = {}

const CAST = castOf({
  dossiers: NO_DOSSIERS,
  entities: ENTITIES,
  featured: [],
  sagas: SAGAS,
})

const ARCHIVE: SeriesArchive = {
  ...OP_ARCHIVE,
  ...CAST,
  series: SERIES,
  bookmarks: sweepOf(SAGAS, SERIES, []),
  entities: ENTITIES,
  sagas: SAGAS,
  places: ENTITIES.filter((entity) => entity.kind === 'place'),
  leads: { 'season-2': ['stannis', 'jeyne'] },
  stories: [],
  timelines: [],
  features: {},
  drawings: {},
  getEntity: (id) => ENTITIES.find((entity) => entity.id === id),
}

const ids = (entities: Entity[]): string[] => entities.map(({ id }) => id)

const at = (bookmark: Bookmark): Reader => readerFor(ARCHIVE, bookmark, 'en')

describe('a series that files no arcs', () => {
  it('heads each season with its own name and start in each unit', () => {
    expect(
      CAST.arcs.map((arc) => [
        arc.id,
        arc.kind,
        arc.name.en,
        arc.revealedAtEpisode,
        arc.revealedAtChapter,
      ]),
    ).toStrictEqual([
      ['season-1', 'arc', 'Season 1', 1, 1],
      ['season-2', 'arc', 'Season 2', 11, 70],
    ])
  })

  it('shelves each season’s characters under it', () => {
    expect(
      CAST.bookSections.map((section) => [
        section.arc.name.en,
        ids(section.characters),
      ]),
    ).toStrictEqual([
      ['Season 1', ['ned', 'tyrion']],
      ['Season 2', ['stannis', 'jeyne', 'ros', 'benjen']],
    ])
  })

  it('sweeps both sides of each season’s start in episodes and chapters', () => {
    expect(ARCHIVE.bookmarks).toStrictEqual([
      null,
      { mode: 'episode', episode: 1 },
      { mode: 'episode', episode: 10 },
      { mode: 'episode', episode: 11 },
      { mode: 'chapter', chapter: 1 },
      { mode: 'chapter', chapter: 69 },
      { mode: 'chapter', chapter: 70 },
      { mode: 'episode', episode: 20 },
      { mode: 'chapter', chapter: 100 },
    ])
  })

  it('sends a season’s heading open before the reader reaches it', () => {
    const [first, second] = shelvesPage(at({ mode: 'episode', episode: 2 }))

    expect(first?.arc).toMatchObject({ open: true, record: { id: 'season-1' } })
    expect(second?.arc).toMatchObject({
      open: true,
      record: { id: 'season-2', name: 'Season 2' },
    })
    expect(second?.open).toStrictEqual([])
    expect(second?.covered).toHaveLength(3)
  })

  it('re-shelves a chapter reader’s characters under the books’ seasons', () => {
    const reader = at({ mode: 'chapter', chapter: 75 })

    expect(
      reader.archive.bookSections.map((section) => ids(section.characters)),
    ).toStrictEqual([
      ['ned', 'tyrion', 'benjen'],
      ['stannis', 'jeyne'],
    ])
  })

  it('puts the reader’s season on the home page, with its leads', () => {
    const home = homePage(at({ mode: 'chapter', chapter: 75 }))

    expect(home.saga).toMatchObject({
      id: 'season-2',
      name: 'Season 2',
      summary: 'What season 2 tells.',
    })
    expect(home.cast.map(({ id }) => id)).toStrictEqual(['jeyne'])
    expect(homePage(at({ mode: 'episode', episode: 10 })).saga.id).toBe(
      'season-1',
    )
  })

  it('names each season from its start in the saga dialog', () => {
    const reader = at({ mode: 'episode', episode: 12 })

    expect(sagaLabels(reader).episode).toStrictEqual([
      { from: 1, name: 'Season 1' },
      { from: 11, name: 'Season 2' },
    ])
    expect(sagaStarts('episode', reader)).toStrictEqual([
      { from: 1, name: text('Season 1') },
      { from: 11, name: text('Season 2') },
    ])
    expect(
      sagaStarts('chapter', at({ mode: 'chapter', chapter: 75 })),
    ).toStrictEqual([
      { from: 1, name: text('Season 1') },
      { from: 70, name: text('Season 2') },
    ])
  })
})

/** Builds the cast of these sagas alone, for what it throws. */
function castFrom(sagas: Saga[]): void {
  castOf({ dossiers: NO_DOSSIERS, entities: ENTITIES, featured: [], sagas })
}

describe('refuses to build', () => {
  it('a saga with no arc record and no heading', () => {
    const bare: Saga = {
      dossiers: {},
      entries: SEASON_1.entries,
      name: SEASON_1.name,
    }

    expect(() => {
      castFrom([bare])
    }).toThrow('Season 1 files no arc record, so it needs a heading')
    expect(() => sweepOf([bare], SERIES, [])).toThrow(
      'Season 1 files no arc record, so it needs a heading',
    )
  })

  it('a heading whose id a record already has', () => {
    const named: Saga = {
      ...SEASON_1,
      heading: {
        id: 'ned',
        summary: text('Ned'),
        visual: { art: 'ned', tint: 'red' },
      },
    }

    expect(() => {
      castFrom([named])
    }).toThrow('ned heads a saga but is filed as a record')
  })
})
