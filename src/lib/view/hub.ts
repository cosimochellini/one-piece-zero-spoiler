import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Book } from '~/lib/progress/series'
import type { SeriesTheme } from '~/styles/themes'

/**
 * One series on the hub: its name, its colours, how many entries it holds
 * and the reader's own bookmark on it. A count says how many, never which,
 * so the hub names no record of any series.
 */
export interface HubSeries {
  bookmark: Bookmark
  /** The series' books, so a chapter bookmark is said as book and chapter. */
  books?: Book[]
  count: number
  name: Record<Locale, string>
  slug: string
  theme: SeriesTheme
}

/** A series filed but not open: the hub says its name, and nothing else. */
export type ComingSeries = Pick<HubSeries, 'name' | 'slug'>
