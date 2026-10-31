import { describe, expect, it } from 'vitest'

import { getEntity } from '~/data/series/one-piece/entities'
import type { Entity } from '~/data/types'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import {
  type LoadedSeries as ListedSeries,
  LOADED_SERIES,
  ONE_PIECE_LOADED as ONE_PIECE,
} from '~/test/series'

import { leaksOf } from './fog'

/** A record of One Piece's, to dress up as another series' own. */
function onePieceRecord(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

const STROKES = [{ d: 'M1 2L3 4', role: 'accent' as const }]

/**
 * A record of a second series, named as the given strings say, shaped and
 * drawn under the id of the One Piece record it is made from.
 */
function foreignRecord(id: string, name: string, from: string): Entity {
  return { ...onePieceRecord(from), id, name: { en: name, it: name } }
}

/** A test's own second series, one record of which shares a One Piece name. */
const DUMMY: ListedSeries = {
  ...ONE_PIECE,
  slug: 'dummy',
  folder: 'dummy',
  archive: {
    ...ONE_PIECE.archive,
    drawings: {
      ...ONE_PIECE.archive.drawings,
      'nami': STROKES,
      'roronoa-zoro': [],
    },
    entities: [
      foreignRecord('gon-freecss', 'Gon Freecss', 'nami'),
      foreignRecord('dummy-nami', 'Nami', 'roronoa-zoro'),
    ],
    redrawn: () => [],
    sagas: [],
    timelines: [],
  },
  bookmarks: [null],
}

const LIST = [ONE_PIECE, DUMMY]

/** A reader who has reached everything One Piece files. */
const ALL: { chapter: number; mode: 'chapter' } = {
  mode: 'chapter',
  chapter: ONE_PIECE_BOOKMARK.chapterCeiling,
}

describe('the leak check of one series against another', () => {
  const leaksIn = leaksOf(ONE_PIECE, LIST)

  it.each([
    ['an id', { id: 'gon-freecss' }],
    ['a name', { name: 'Gon Freecss' }],
    ['a key', { 'gon-freecss': 1 }],
    ['a search alias', { aliases: ['gon freecss'] }],
    ['a drawing', { strokes: STROKES }],
  ])('finds the other series’ record in %s', (_, payload) => {
    expect(leaksIn(payload, ALL)).toStrictEqual(['dummy/gon-freecss'])
  })

  it('leaves a word both series use to the series’ own fog', () => {
    expect(leaksIn({ name: 'Nami' }, ALL)).toStrictEqual([])
  })

  it('excuses nothing of another series, whatever the page says by design', () => {
    expect(leaksIn({ id: 'gon-freecss' }, ALL, () => true)).toStrictEqual([
      'dummy/gon-freecss',
    ])
  })

  it('holds the other series to One Piece the same way', () => {
    expect(leaksOf(DUMMY, LIST)({ id: 'monkey-d-luffy' }, null)).toStrictEqual([
      'one-piece/monkey-d-luffy',
    ])
  })

  it('finds nothing foreign with one series listed', () => {
    expect(
      leaksOf(ONE_PIECE, [ONE_PIECE])({ id: 'gon-freecss' }, ALL),
    ).toStrictEqual([])
  })
})

describe('the place words of a series that labels its own', () => {
  const HUNTER = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
  if (HUNTER === undefined) {
    throw new Error('Hunter x Hunter is not filed')
  }
  const leaksIn = leaksOf(HUNTER)
  const FIRST = { mode: 'episode' as const, episode: 1 }

  it.each([
    ['its id', { forms: { port: 'x' } }, ['dolle-harbor']],
    ['its label', { forms: { x: 'Port town' } }, ['dolle-harbor']],
    ['its country label', { forms: { x: 'Country' } }, ['republic-of-padokea']],
    ['its tower label', { forms: { x: 'Tower' } }, ['heavens-arena']],
    ['its Italian tower label', { forms: { x: 'Torre' } }, ['heavens-arena']],
    ['its airport label', { forms: { x: 'Airport' } }, ['lingon-airport']],
    [
      'its Italian airport label',
      { forms: { x: 'Aeroporto' } },
      ['lingon-airport'],
    ],
    [
      'its building label',
      { forms: { x: 'Building' } },
      ['cemetery-building', 'southernpiece-auction-house', 'hotel-beitacle'],
    ],
    [
      'its Italian building label',
      { forms: { x: 'Edificio' } },
      ['cemetery-building', 'southernpiece-auction-house', 'hotel-beitacle'],
    ],
    [
      'its Italian country label',
      { forms: { x: 'Paese' } },
      ['republic-of-padokea'],
    ],
    [
      'its Italian label',
      { regions: { x: 'Terraferma' } },
      [
        'dolle-harbor',
        'zaban-city',
        'milsy-wetlands',
        'visca-forest-preserve',
        'split-mountain',
        'trick-tower',
        'republic-of-padokea',
        'kukuroo-mountain',
        'heavens-arena',
        'yorknew-city',
        'lingon-airport',
        'cemetery-building',
        'southernpiece-auction-house',
        'hotel-beitacle',
      ],
    ],
  ])(
    'names the places under a word no open place uses, by %s',
    (_, words, expected) => {
      expect(leaksIn({ words }, FIRST)).toStrictEqual(expected)
    },
  )

  it('holds a word no place is filed under at every bookmark', () => {
    const unfiled: ListedSeries = {
      ...HUNTER,
      placeWords: {
        ...HUNTER.placeWords,
        dictionary: false,
        allRegions: { en: 'All regions', it: 'Tutte le regioni' },
        region: { en: 'Region', it: 'Regione' },
        regions: { nowhere: { en: 'Nowhere Sea', it: 'Mare di Nessuno' } },
        forms: {},
      },
    }
    const last = { mode: 'episode' as const, episode: 148 }

    expect(
      leaksOf(unfiled)({ words: { regions: { x: 'Nowhere Sea' } } }, last),
    ).toStrictEqual(['place-words/nowhere'])
  })

  it('opens a word with the first open place filed under it', () => {
    expect(
      leaksIn(
        { words: { forms: { port: 'Port town' } } },
        { mode: 'episode', episode: 2 },
      ),
    ).toStrictEqual([])
    expect(
      leaksIn({ words: { forms: { island: 'Island' } } }, FIRST),
    ).toStrictEqual([])
  })
})
