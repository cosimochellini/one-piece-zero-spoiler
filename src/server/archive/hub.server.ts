import type { SeriesArchive } from '~/data/types'
import { type Bookmark, parseBookmark } from '~/lib/progress/episode'
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

/**
 * The hub, from the request's cookies: every series with its count and the
 * reader's saved bookmark on it. Only the saved one: a trial is a visit to
 * one series' demo, and a crawler has no bookmark to be shown, so neither
 * the trial cookie nor the user agent is read.
 */
export function hubFor(
  jar: Map<string, string>,
  archives: SeriesArchive[],
): HubSeries[] {
  return archives.map((archive) =>
    hubSeries(
      archive,
      parseBookmark(jar.get(archive.series.cookie), archive.series),
    ),
  )
}
