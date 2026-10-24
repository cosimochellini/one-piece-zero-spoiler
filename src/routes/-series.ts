import type { Series } from '~/lib/progress/series'
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
