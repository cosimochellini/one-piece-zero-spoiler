import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { HubSeries } from '~/lib/view/hub'

/** A series' card on the hub, at the reader's saved bookmark on it. */
export function hubSeries(
  { entities, series }: SeriesArchive,
  bookmark: Bookmark,
): HubSeries {
  return {
    slug: series.slug,
    name: series.name,
    theme: series.theme,
    count: entities.length,
    bookmark,
  }
}
