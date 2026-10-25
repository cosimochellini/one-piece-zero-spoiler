import type { Locale } from '~/i18n/locales'
import type { SeriesCopy } from '~/i18n/types'
import type { Series } from '~/lib/progress/series'
import { loadSeriesCopy } from '~/server/api'
import { loadSeriesDescription } from '~/server/series'

const descriptions = new Map<string, Series>()

/** Cache public descriptions only; unknown slugs never occupy the cache. */
export async function seriesDescription(slug: string): Promise<null | Series> {
  const cached = descriptions.get(slug)
  if (cached !== undefined) {
    return cached
  }
  const found = await loadSeriesDescription({ data: slug })
  if (found !== null) {
    descriptions.set(slug, found)
  }
  return found
}

/**
 * What a series and language answered, reused for the page's lifetime. A
 * failed call is asked again; the server's answers here are public and the
 * same for every reader.
 */
export async function remembered<T>(
  cache: Map<string, Promise<T>>,
  key: string,
  load: () => Promise<T>,
): Promise<T> {
  const cached = cache.get(key)
  if (cached !== undefined) {
    return cached
  }
  const loading = load()
  cache.set(key, loading)
  try {
    return await loading
  } catch (error) {
    cache.delete(key)
    throw error
  }
}

const copies = new Map<string, Promise<SeriesCopy>>()

/**
 * The series' own copy: the server sends it with the first page, inside the
 * page, and a page of another series never has it.
 */
export async function seriesCopy(
  series: string,
  locale: Locale,
): Promise<SeriesCopy> {
  return remembered(copies, `${series}:${locale}`, async () =>
    loadSeriesCopy({ data: { series, locale } }),
  )
}
