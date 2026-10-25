import { createContext, use, useCallback } from 'react'

import { useLocale, useSeriesT } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { SeriesSlug } from '~/i18n/types'

import { type Bookmark, modeOf } from './episode'
import type { BookmarkSeries } from './series'
import type { Gated } from './spoiler'
import { describeThreshold, type ThresholdSentence } from './threshold'

/** What the provider puts on the context: the bookmark, and how to move it. */
export interface BookmarkContextValue {
  /** The series selected by the current route; none on shared site pages. */
  series: BookmarkSeries | null
  /** The point the pages stand at: the saved bookmark, or a trial point. */
  bookmark: Bookmark
  /**
   * Stands at a point for this browser session without saving it. Writes the
   * trial cookie and nothing else: the caller is about to navigate, and the
   * page it lands on reads the cookie.
   */
  enterTrial: (point: NonNullable<Bookmark>) => void
  /** Drops the trial point and re-reads the pages without it. */
  leaveTrial: () => void
  /** True while the pages are being re-read for a bookmark that just moved. */
  pending: boolean
  /** Saves a bookmark, or forgets it with `null`. Ends any trial. */
  setBookmark: (next: Bookmark) => void
  /** True when `bookmark` is a trial point rather than a saved one. */
  trial: boolean
}

export const BookmarkContext = createContext<BookmarkContextValue | null>(null)

/**
 * The reader's bookmark and the setter that moves it. Throws outside the
 * provider rather than defaulting to "nothing read yet", because a silent
 * default would uncover the whole archive.
 */
export function useBookmark(): BookmarkContextValue {
  const value = use(BookmarkContext)

  if (value === null) {
    throw new Error('useBookmark must be used inside a BookmarkProvider')
  }

  return value
}

/**
 * The series the route selected. Throws on a shared site page rather than
 * falling back to One Piece, because a conversion read with another series'
 * table would name the wrong episode.
 */
export function useBookmarkSeries(): BookmarkSeries {
  const { series } = useBookmark()
  if (series === null) {
    throw new Error('A bookmark conversion needs a selected series')
  }
  return series
}

/** The selected series and language for content links. */
export function useSeriesParams(): { locale: Locale; series: string } {
  const { slug } = useBookmarkSeries()
  const { locale } = useLocale()
  return { locale, series: slug }
}

/** A record's threshold in the reader's unit, by sentence. */
export type Threshold<S extends SeriesSlug = never> = (
  sentence: ThresholdSentence<S>,
  gated: Gated,
) => string

/**
 * Names a record's threshold in the unit the reader counts in, so a card
 * says "Chapter 218" to a manga reader and "Episode 130" to everyone else.
 * With a slug, the sentences of that series' own features as well: a
 * fruit's needs `useThreshold('one-piece')`.
 */
export function useThreshold(): Threshold
export function useThreshold<S extends SeriesSlug>(slug: S): Threshold<S>
export function useThreshold(slug?: SeriesSlug): Threshold<SeriesSlug> {
  const t = useSeriesT(slug)
  const { bookmark } = useBookmark()
  const series = useBookmarkSeries()
  const mode = modeOf(bookmark)

  return useCallback(
    (sentence: ThresholdSentence<SeriesSlug>, gated: Gated) =>
      describeThreshold<SeriesSlug>({ gated, mode, sentence, t, series }),
    [t, mode, series],
  )
}
