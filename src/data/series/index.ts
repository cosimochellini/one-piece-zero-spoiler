import type { SeriesArchive } from '~/data/types'
import {
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_SERIES,
  type Series,
} from '~/lib/progress/series'

/** The single registry consumed by runtime, scripts and spoiler gates. */
export interface ListedSeries {
  description: Series
  folder: string
  load: () => Promise<SeriesArchive>
  /**
   * Whether readers can reach it. A series filed but not opened yet is in
   * every gate, test and script, and nowhere a reader goes: its addresses
   * answer 404, the hub lists it as coming, and the sitemap leaves it out.
   */
  open: boolean
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
 * Filed, not opened (#763 opens it). Its thresholds are checked on the
 * English Hunter x Hunter Wiki. There is no Italian Hunter x Hunter wiki, so
 * the Italian names, which follow the 2011 dub, come from Italian Wikipedia
 * (owner, 2026-10-24).
 */
const HUNTER_X_HUNTER: ListedSeries = {
  description: HUNTER_X_HUNTER_SERIES,
  slug: HUNTER_X_HUNTER_SERIES.slug,
  folder: 'hunter-x-hunter',
  open: false,
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
 * Nothing a reader reaches imports it (`registry.test.ts`).
 */
export const SERIES: ListedSeries[] = [ONE_PIECE, HUNTER_X_HUNTER]

/** The series readers can reach: what every page and the sitemap go through. */
export const OPEN_SERIES: ListedSeries[] = SERIES.filter(({ open }) => open)

const loaded = new Map<string, Promise<SeriesArchive>>()

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
 * reaches imports it (`registry.test.ts`).
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
