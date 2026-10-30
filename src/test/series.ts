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
 * (`~/data/archive.test.ts`), within nine tenths of the real counts, so a
 * rule over a series that files content cannot pass on nothing or on a
 * reader that lost some of it. A new series needs a row here.
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
  // What it files on 2026-10-30.
  'one-piece': {
    kinds: [
      'affiliation',
      'builder',
      'chronicle',
      'copy',
      'epithet',
      'faction',
      'fate',
      'landmark',
      'log',
      'origin',
      'relationships[].summary',
      'relationships[].type',
      'role',
      'summary',
      'title',
      'visit',
    ],
    least: {
      affiliations: 808,
      arcs: 34,
      characters: 534,
      chronicles: 757,
      linkedOrigins: 118,
      places: 39,
      statuses: 799,
      timelines: 2591,
      visits: 13,
    },
    namesSaidEarly: true,
  },
  // What it files on 2026-10-30: the arcs, the Hunter Exam's road to the
  // exam through the visit to Killua's home, chapter-one characters (#760),
  // and the Heavens Arena characters and place (#896).
  'hunter-x-hunter': {
    kinds: [
      'affiliation',
      'allRegions',
      'chronicle',
      'copy',
      'epithet',
      'form',
      'landmark',
      'log',
      'origin',
      'region',
      'relationships[].summary',
      'relationships[].type',
      'role',
      'summary',
    ],
    least: {
      affiliations: 89,
      arcs: 7,
      characters: 62,
      chronicles: 109,
      linkedOrigins: 7,
      places: 11,
      statuses: 70,
      timelines: 253,
      visits: 0,
    },
    namesSaidEarly: true,
  },
  // Filed closed with no record yet (#849): only its place words' headers,
  // and no floor. The first season's characters and places (#852, #853)
  // raise it.
  'game-of-thrones': {
    kinds: ['allRegions', 'copy', 'region'],
    least: {
      affiliations: 0,
      arcs: 0,
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
