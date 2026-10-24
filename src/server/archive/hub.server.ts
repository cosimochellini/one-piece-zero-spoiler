import { sourceOf } from '~/data/reveal'
import { archiveIn } from '~/data/source'
import type { SeriesArchive } from '~/data/types'
import { type Bookmark, parseBookmark } from '~/lib/progress/episode'
import type { HubSeries } from '~/lib/view/hub'

/**
 * A series' card on the hub, at the reader's saved bookmark on it. The count
 * is of the entries the reader's source tells (`~/data/source`): a chapter
 * reader's leaves out the anime's own records, and a reader with no bookmark,
 * who counts in neither source, gets only the records both tell.
 */
export function hubSeries(
  archive: SeriesArchive,
  bookmark: Bookmark,
): HubSeries {
  const { series } = archive

  return {
    slug: series.slug,
    name: series.name,
    theme: series.theme,
    count: archiveIn(archive, sourceOf(bookmark)).entities.length,
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
