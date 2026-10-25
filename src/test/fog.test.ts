import { describe, expect, it } from 'vitest'

import { getEntity } from '~/data/series/one-piece/entities'
import type { Entity } from '~/data/types'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import {
  type LoadedSeries as ListedSeries,
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
