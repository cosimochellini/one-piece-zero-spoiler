import { describe, expect, it } from 'vitest'

import { featuredCharacters } from '~/data/characters'
import { entities, getEntity } from '~/data/entities'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'

import { handleOf } from './handle.server'
import { readerFor } from './reader.server'

/** A record the archive is known to file, or the test is wrong. */
function must(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

/** One bookmark of each kind, and none. */
const MARKS: Bookmark[] = [
  null,
  { mode: 'episode', episode: 92 },
  { mode: 'season', season: 4, episode: 1 },
  { mode: 'chapter', chapter: 155 },
]

describe('readerFor', () => {
  it.each(MARKS)('keeps the open rows a prefix of the order, at %j', (mark) => {
    // Every list page draws one horizon between two runs, which only works
    // when nothing open comes after something covered in the reader's unit.
    const r = readerFor(mark, 'en')
    const split = r.split(entities, (entity) => entity)
    const ordered = r.order(entities)
    const open = ordered.filter((entity) => r.sees(entity))

    expect(split.total).toBe(entities.length)
    expect(split.open).toStrictEqual(ordered.slice(0, open.length))
    expect(split.covered.map((covered) => covered.handle)).toStrictEqual(
      ordered.slice(open.length).map((entity) => handleOf(entity.id)),
    )
  })

  it('covers a record with its handle and thresholds, and nothing else', () => {
    const robin = must('nico-robin')
    const slot = readerFor({ mode: 'episode', episode: 129 }, 'en').slot(
      robin,
      () => {
        throw new Error('a covered record is not projected')
      },
    )

    expect(slot).toStrictEqual({
      open: false,
      covered: {
        handle: handleOf(robin.id),
        kind: 'character',
        revealedAtEpisode: robin.revealedAtEpisode,
        revealedAtChapter: robin.revealedAtChapter,
      },
    })
  })

  it('projects a reached record with the reader it was read by', () => {
    const r = readerFor({ mode: 'episode', episode: 130 }, 'it')
    const slot = r.slot(
      must('nico-robin'),
      (entity, reader) => `${entity.id} ${reader.locale}`,
    )

    expect(slot).toStrictEqual({ open: true, record: 'nico-robin it' })
  })

  it('orders by the reader’s own unit', () => {
    // Shanks is on the first page of the manga and in the fourth episode.
    const shanks = must('shanks')
    const byChapter = readerFor({ mode: 'chapter', chapter: 1 }, 'en').order(
      entities,
    )
    const byEpisode = readerFor(null, 'en').order(entities)

    expect(byChapter.indexOf(shanks)).toBeLessThan(byEpisode.indexOf(shanks))
  })

  it('finds the nearest records in the reader’s own unit, never the record', () => {
    // Luffy is episode 1 and chapter 1; Shanks is episode 4 but chapter 1.
    const luffy = must('monkey-d-luffy')
    const near = (mark: Bookmark): string[] => {
      return readerFor(mark, 'en')
        .nearest(luffy, featuredCharacters, 3)
        .map((entity) => entity.id)
    }

    expect(near(null)).toStrictEqual(['koby', 'roronoa-zoro', 'shanks'])
    expect(near({ mode: 'chapter', chapter: 1 })).toStrictEqual([
      'shanks',
      'koby',
      'roronoa-zoro',
    ])
  })

  it('breaks a tie by whoever the reader’s route reaches first', () => {
    const here = {
      ...must('nami'),
      revealedAtEpisode: 10,
      revealedAtChapter: 10,
    }
    const early = {
      ...here,
      id: 'early',
      revealedAtEpisode: 8,
      revealedAtChapter: 12,
    }
    const late = {
      ...here,
      id: 'late',
      revealedAtEpisode: 12,
      revealedAtChapter: 8,
    }
    const near = (mark: Bookmark): string[] => {
      return readerFor(mark, 'en')
        .nearest(here, [early, late], 2)
        .map((entity) => entity.id)
    }

    expect(near({ mode: 'episode', episode: 1 })).toStrictEqual([
      'early',
      'late',
    ])
    expect(near({ mode: 'chapter', chapter: 1 })).toStrictEqual([
      'late',
      'early',
    ])
  })
})
