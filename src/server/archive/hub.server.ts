import { sourceOf } from '~/data/reveal'
import { archiveOf, COMING_SERIES, OPEN_SERIES } from '~/data/series'
import { archiveIn } from '~/data/source'
import type { SeriesArchive } from '~/data/types'
import { type Bookmark, parseBookmark } from '~/lib/progress/episode'
import type { Series } from '~/lib/progress/series'
import type { ComingSeries, HubSeries } from '~/lib/view/hub'

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
    ...(series.books !== undefined && { books: series.books }),
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

/**
 * The hub's whole answer: a card for each open series, and the name of each
 * series filed but not open.
 */
export function hubPageFor(
  jar: Map<string, string>,
  archives: SeriesArchive[],
): { coming: ComingSeries[]; series: HubSeries[] } {
  return { series: hubFor(jar, archives), coming: COMING_SERIES }
}

/** The public descriptions of the series readers can reach; loads no archive. */
export function openDescriptions(): Series[] {
  return OPEN_SERIES.map(({ description }) => description)
}

/**
 * The archives of the series readers can reach, for the hub to count. A
 * series filed but not open is not among them: the hub announces it as coming.
 */
export async function openArchives(): Promise<SeriesArchive[]> {
  return Promise.all(OPEN_SERIES.map(async ({ slug }) => archiveOf(slug)))
}
