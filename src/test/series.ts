import { filedArchiveOf, type ListedSeries, SERIES } from '~/data/series'
import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'

/** A loaded registry entry for synchronous spoiler assertions. */
export interface LoadedSeries extends ListedSeries {
  archive: SeriesArchive
  bookmarks: Bookmark[]
}

export const LOADED_SERIES: LoadedSeries[] = await Promise.all(
  SERIES.map(async (entry) => {
    const archive = await filedArchiveOf(entry.slug)
    return { ...entry, archive, bookmarks: archive.bookmarks }
  }),
)

function onePiece(): LoadedSeries {
  const found = LOADED_SERIES.find(({ slug }) => slug === 'one-piece')
  if (found === undefined) {
    throw new Error('One Piece fixture is not registered')
  }
  return found
}
export const ONE_PIECE_LOADED = onePiece()

/**
 * What a filed series is known to hold: the kinds of text its leak scan
 * reads (`~/data/leaks.test.ts`), whether a record says its name before it
 * opens, and the least it files of what the shared data rules read
 * (`~/data/archive.test.ts`), near the real counts, so a rule over a series
 * that files content cannot pass on nothing or on a reader that lost most of
 * it. A new series needs a row here.
 */
export interface Expected {
  kinds: string[]
  least: Least
  namesSaidEarly: boolean
}

/** The least a series files of each thing the shared rules read. */
export interface Least {
  affiliations: number
  arcs: number
  characters: number
  chronicles: number
  linkedOrigins: number
  places: number
  statuses: number
  timelines: number
  visits: number
}

const EXPECTED: Record<string, Expected> = {
  // About nine tenths of what it files on 2026-10-25.
  'one-piece': {
    kinds: [
      'affiliation',
      'builder',
      'chronicle',
      'epithet',
      'faction',
      'fate',
      'landmark',
      'log',
      'origin',
      'role',
      'summary',
      'title',
      'visit',
    ],
    least: {
      affiliations: 720,
      arcs: 30,
      characters: 480,
      chronicles: 680,
      linkedOrigins: 100,
      places: 35,
      statuses: 720,
      timelines: 1850,
      visits: 12,
    },
    namesSaidEarly: true,
  },
  // Its arcs alone, until #760 files the Hunter Exam's characters and places.
  'hunter-x-hunter': {
    kinds: ['summary'],
    least: {
      affiliations: 0,
      arcs: 7,
      characters: 0,
      chronicles: 0,
      linkedOrigins: 0,
      places: 0,
      statuses: 0,
      timelines: 0,
      visits: 0,
    },
    namesSaidEarly: false,
  },
}

/** A series' row, or the test is wrong: a series filed needs one. */
export function expectedOf(slug: string): Expected {
  const row = EXPECTED[slug]
  if (row === undefined) {
    throw new Error(`no EXPECTED row for ${slug}`)
  }

  return row
}
