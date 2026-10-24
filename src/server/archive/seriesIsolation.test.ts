import { describe, expect, it } from 'vitest'

import { withFeatures } from '~/data/features'
import type { Entity, SeriesArchive } from '~/data/types'
import { OP_ARCHIVE as ONE_PIECE_ARCHIVE } from '~/test/archive'

import { fillerPage, peekFiller } from './filler.server'
import { entityForHandle, handleOf } from './handle.server'
import { headFor } from './head.server'
import { readerFor } from './reader.server'
import { sagaLabels } from './sagaLabels.server'

const original = ONE_PIECE_ARCHIVE.entities[0]
if (original === undefined) {
  throw new Error('The One Piece fixture is empty')
}
const foreign: Entity = {
  ...original,
  id: 'other-record',
  name: { en: 'Other record', it: 'Altro record' },
  revealedAtEpisode: 4,
  revealedAtChapter: 4,
}

function otherArchive(): SeriesArchive {
  const entities = [foreign]
  return {
    ...ONE_PIECE_ARCHIVE,
    series: {
      ...ONE_PIECE_ARCHIVE.series,
      slug: 'other-series',
      cookie: 'zs_other-series',
      trialCookie: 'zs_other-series_try',
      episodeCeiling: 20,
      chapterCeiling: 20,
      seasons: [
        { number: 1, first: 1, last: 2 },
        { number: 2, first: 3, last: 20 },
      ],
    },
    entities,
    characters: entities,
    featuredCharacters: entities,
    arcs: [],
    places: [],
    sagas: [],
    bookSections: [],
    stories: [],
    features: {},
    timelines: [],
    drawings: {},
    getEntity: (id) => entities.find((entity) => entity.id === id),
    getCharacter: (id) => entities.find((entity) => entity.id === id),
  }
}

/** An independent nonempty guide, retaining the same index in each series. */
function fillerArchive(slug: string): SeriesArchive {
  const archive = otherArchive()
  const entry = withFeatures(ONE_PIECE_ARCHIVE).filler[0]
  if (entry === undefined) {
    throw new Error('The filler fixture is empty')
  }
  return {
    ...archive,
    series: { ...archive.series, slug },
    features: {
      filler: {
        filler: [{ ...entry, title: { en: slug, it: slug } }],
        fillerArcs: [],
        lastAired: 20,
      },
    },
  }
}

describe('one loaded archive per reader', () => {
  it('rejects handles minted for any other series while retaining One Piece ordinals', () => {
    const other = otherArchive()
    const own = handleOf(
      ONE_PIECE_ARCHIVE.entities[0]?.id ?? '',
      ONE_PIECE_ARCHIVE,
    )
    const theirs = handleOf(foreign.id, other)

    expect(own).toMatch(/^[\da-z]+$/u)
    expect(theirs).toMatch(/^other-series:/u)
    expect(entityForHandle(own, other)).toBeUndefined()
    expect(entityForHandle(theirs, ONE_PIECE_ARCHIVE)).toBeUndefined()
    expect(entityForHandle(theirs, other)).toBe(foreign)
  })

  it('keys handle tables by archive identity, including independent instances of the same series', () => {
    const first = otherArchive()
    const second = {
      ...otherArchive(),
      entities: [{ ...foreign, id: 'second-record' }],
    }

    expect(handleOf(foreign.id, first)).toBe('other-series:0')
    expect(handleOf('second-record', second)).toBe('other-series:0')
    expect(entityForHandle('other-series:0', second)?.id).toBe('second-record')
    expect(() => handleOf(foreign.id, second)).toThrow(/no handle/u)
  })

  it('resolves seasons and covered records using its selected archive', () => {
    const other = otherArchive()
    const reader = readerFor(
      other,
      { mode: 'season', season: 2, episode: 1 },
      'en',
    )

    expect(reader.sees(foreign)).toBe(false)
    expect(
      headFor(
        foreign,
        {
          foggedDescription: 'character.foggedDescription',
          foggedTitle: 'character.foggedTitle',
          pageTitle: 'character.pageTitle',
        },
        reader,
      ).description,
    ).toContain('S02E02')
    expect(reader.slot(foreign, (entity) => entity.id)).toStrictEqual({
      open: false,
      covered: {
        handle: 'other-series:0',
        kind: foreign.kind,
        revealedAtEpisode: 4,
        revealedAtChapter: 4,
      },
    })
    expect(
      readerFor(other, { mode: 'season', season: 2, episode: 2 }, 'en').sees(
        foreign,
      ),
    ).toBe(true)
  })

  it('does not reuse another series filler rows, ranges or saga tables', () => {
    const own = readerFor(ONE_PIECE_ARCHIVE, null, 'en')

    expect(sagaLabels(own).episode.length).toBeGreaterThan(0)

    const other = readerFor(otherArchive(), null, 'en')

    expect(sagaLabels(other)).toStrictEqual({
      chapter: [],
      episode: [],
      filler: [],
    })
    expect(fillerPage(other)).toMatchObject({
      groups: [],
      marks: [],
      skipGroups: [],
      unnumbered: 0,
    })
    expect(peekFiller('0', other)).toBeUndefined()
    expect(peekFiller('other-series:0', own)).toBeUndefined()
  })

  it('namespaces nonempty filler guides and refuses every foreign token', () => {
    const alpha = readerFor(fillerArchive('alpha-series'), null, 'en')
    const beta = readerFor(fillerArchive('beta-series'), null, 'en')
    const row = fillerPage(alpha).groups[0]?.runs[0]?.rows[0]

    expect(row).toMatchObject({
      open: false,
      covered: { handle: 'alpha-series:0' },
    })
    expect(peekFiller('alpha-series:0', alpha)?.title).toBe('alpha-series')
    expect(peekFiller('beta-series:0', beta)?.title).toBe('beta-series')
    expect(peekFiller('0', alpha)).toBeUndefined()
    expect(peekFiller('alpha-series:0', beta)).toBeUndefined()
    expect(peekFiller('beta-series:0', alpha)).toBeUndefined()
    expect(
      peekFiller('alpha-series:0', readerFor(ONE_PIECE_ARCHIVE, null, 'en')),
    ).toBeUndefined()
  })
})
