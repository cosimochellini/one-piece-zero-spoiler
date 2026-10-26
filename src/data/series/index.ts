import type { PlaceWords, SeriesArchive } from '~/data/types'
import {
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_SERIES,
  type Series,
} from '~/lib/progress/series'
import type { ComingSeries } from '~/lib/view/hub'

import { HUNTER_X_HUNTER_PLACE_WORDS } from './hunter-x-hunter/placeWords'
import { ONE_PIECE_PLACE_WORDS } from './one-piece/placeWords'

/** The single registry consumed by runtime, scripts and spoiler gates. */
export interface ListedSeries {
  description: Series
  folder: string
  /**
   * The last chapter its anime adapts, once the anime has ended and the
   * manga runs on. A record or a dated fact told above it is the manga's
   * alone and must say so (`source: 'manga'`), or an anime viewer who has
   * finished would be shown it at the last episode.
   */
  lastAdaptedChapter?: number
  load: () => Promise<SeriesArchive>
  /**
   * Whether readers can reach it. A series filed but not opened yet is in
   * every gate, test and script, and nowhere a reader goes: its addresses
   * answer 404, the hub lists it as coming, and the sitemap leaves it out.
   */
  open: boolean
  /**
   * The place words its pages may print, with where their labels come from.
   * Read statically, unlike the archive: a small table, kept off the client
   * and off the description, which the hub is sent (a region's id can be a
   * record's).
   */
  placeWords: PlaceWords
  slug: string
  /**
   * The `api.php` of the wiki the `verify:*` scripts read for its English
   * names, thresholds and pages, and of the source of its Italian names.
   */
  wiki: { en: string; it: string }
}

export const ONE_PIECE: ListedSeries = {
  description: ONE_PIECE_SERIES,
  slug: ONE_PIECE_SERIES.slug,
  folder: 'one-piece',
  open: true,
  placeWords: ONE_PIECE_PLACE_WORDS,
  wiki: {
    en: 'https://onepiece.fandom.com/api.php',
    it: 'https://onepiece.fandom.com/it/api.php',
  },
  load: async () => {
    const { ONE_PIECE_ARCHIVE } = await import('./one-piece/archive')
    return ONE_PIECE_ARCHIVE
  },
}

/**
 * Open to readers. Its thresholds are checked on the
 * English Hunter x Hunter Wiki. There is no Italian Hunter x Hunter wiki, so
 * the Italian names, which follow the 2011 dub, come from Italian Wikipedia
 * (owner, 2026-10-24).
 */
const HUNTER_X_HUNTER: ListedSeries = {
  description: HUNTER_X_HUNTER_SERIES,
  slug: HUNTER_X_HUNTER_SERIES.slug,
  folder: 'hunter-x-hunter',
  open: true,
  // The 2011 anime ends with the Election arc, chapters 319-339 and episodes
  // 137-148 (English Hunter x Hunter Wiki, `13th Hunter Chairman Election
  // arc`, read 2026-10-24).
  lastAdaptedChapter: 339,
  placeWords: HUNTER_X_HUNTER_PLACE_WORDS,
  wiki: {
    en: 'https://hunterxhunter.fandom.com/api.php',
    it: 'https://it.wikipedia.org/w/api.php',
  },
  load: async () => {
    const { HUNTER_X_HUNTER_ARCHIVE } =
      await import('./hunter-x-hunter/archive')
    return HUNTER_X_HUNTER_ARCHIVE
  },
}

/**
 * Every series filed: what the gates, the tests and the scripts go through.
 * Nothing a reader reaches imports it (ESLint `no-restricted-imports`).
 */
export const SERIES: ListedSeries[] = [ONE_PIECE, HUNTER_X_HUNTER]

/** The series readers can reach: what every page and the sitemap go through. */
export const OPEN_SERIES: ListedSeries[] = SERIES.filter(({ open }) => open)

/**
 * The series filed but not open, by slug and name alone: what the hub
 * announces as coming. Built from `open`, so flipping it moves a series from
 * here to `OPEN_SERIES` and the hub can never list it twice.
 */
export const COMING_SERIES: ComingSeries[] = []
for (const { open, description } of SERIES) {
  if (!open) {
    COMING_SERIES.push({ name: description.name, slug: description.slug })
  }
}

const loaded = new Map<string, Promise<SeriesArchive>>()

/**
 * A filed series' place words. Filed rather than open, because the gates and
 * the sweep print the pages of a series before it opens; a reader only ever
 * reaches the server with an open one.
 */
export function placeWordsOf(slug: string): PlaceWords {
  const series = SERIES.find((entry) => entry.slug === slug)
  if (series === undefined) {
    throw new Error(`Unknown series: ${slug}`)
  }
  return series.placeWords
}

/**
 * Public metadata only, with unknown slugs rejected before any archive loads.
 * A series not open yet is unknown here, so its addresses answer 404 and no
 * server function serves it.
 */
export function descriptionOf(slug: string): null | Series {
  return OPEN_SERIES.find((series) => series.slug === slug)?.description ?? null
}

/**
 * The archive of an open series, reused for this server instance: what the
 * server reads. A series filed but not open is as unknown here as a slug
 * nobody filed, so no reader path can load it.
 */
export async function archiveOf(slug: string): Promise<SeriesArchive> {
  if (OPEN_SERIES.every((series) => series.slug !== slug)) {
    throw new Error(`Unknown series: ${slug}`)
  }
  return filedArchiveOf(slug)
}

/**
 * The archive of any filed series, open or not: for the tests, the gates and
 * the scripts alone, which check a series before it opens. Nothing a reader
 * reaches imports it (ESLint `no-restricted-imports`).
 */
export async function filedArchiveOf(slug: string): Promise<SeriesArchive> {
  const series = SERIES.find((entry) => entry.slug === slug)
  if (series === undefined) {
    throw new Error(`Unknown series: ${slug}`)
  }
  const cached = loaded.get(slug)
  if (cached !== undefined) {
    return cached
  }
  const loading = series.load()
  loaded.set(slug, loading)
  try {
    return await loading
  } catch (error) {
    loaded.delete(slug)
    throw error
  }
}
