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
 * (`~/data/archive.test.ts`), so a rule over a series that files content
 * cannot pass on nothing.
 */
export interface Expected {
  kinds: string[]
  least: {
    characters: number
    linkedOrigins: number
    places: number
    timelines: number
    visits: number
  }
  namesSaidEarly: boolean
}

const EXPECTED: Record<string, Expected> = {
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
      characters: 1,
      linkedOrigins: 1,
      places: 1,
      timelines: 1,
      visits: 1,
    },
    namesSaidEarly: true,
  },
  // Its arcs alone, until #760 files the Hunter Exam's characters and places.
  'hunter-x-hunter': {
    kinds: ['summary'],
    least: {
      characters: 0,
      linkedOrigins: 0,
      places: 0,
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
