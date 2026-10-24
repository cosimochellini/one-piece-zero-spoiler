import type { SeriesArchive } from '~/data/types'
import { ONE_PIECE_SERIES, type Series } from '~/lib/progress/series'

/** The single registry consumed by runtime, scripts and spoiler gates. */
export interface ListedSeries {
  description: Series
  folder: string
  load: () => Promise<SeriesArchive>
  slug: string
  wiki: { en: string; it: string }
}

export const ONE_PIECE: ListedSeries = {
  description: ONE_PIECE_SERIES,
  slug: ONE_PIECE_SERIES.slug,
  folder: 'one-piece',
  wiki: {
    en: 'https://onepiece.fandom.com/api.php',
    it: 'https://onepiece.fandom.com/it/api.php',
  },
  load: async () => {
    const { ONE_PIECE_ARCHIVE } = await import('./one-piece/archive')
    return ONE_PIECE_ARCHIVE
  },
}

export const SERIES: ListedSeries[] = [ONE_PIECE]
const loaded = new Map<string, Promise<SeriesArchive>>()

/** Public metadata only, with unknown slugs rejected before any archive loads. */
export function descriptionOf(slug: string): null | Series {
  return SERIES.find((series) => series.slug === slug)?.description ?? null
}

/** Loads only a registered series and reuses the archive for this server instance. */
export async function archiveOf(slug: string): Promise<SeriesArchive> {
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
