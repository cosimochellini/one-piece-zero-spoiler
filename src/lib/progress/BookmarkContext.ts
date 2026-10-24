import { createContext, use, useCallback } from 'react'

import { useLocale, useT } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'

import { type Bookmark, modeOf } from './episode'
import { type BookmarkSeries, ONE_PIECE_BOOKMARK } from './series'
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

/** The selected series and language for content links. */
export function useSeriesParams(): { locale: Locale; series: string } {
  const { series } = useBookmark()
  const { locale } = useLocale()
  if (series === null) {
    throw new Error('A series link needs a selected series')
  }
  return { locale, series: series.slug }
}

/**
 * Names a record's threshold in the unit the reader counts in, so a card
 * says "Chapter 218" to a manga reader and "Episode 130" to everyone else.
 */
export function useThreshold(): (
  sentence: ThresholdSentence,
  gated: Gated,
) => string {
  const t = useT()
  const { bookmark, series } = useBookmark()
  const mode = modeOf(bookmark)

  return useCallback(
    (sentence: ThresholdSentence, gated: Gated) =>
      describeThreshold({
        gated,
        mode,
        sentence,
        t,
        series: series ?? ONE_PIECE_BOOKMARK,
      }),
    [t, mode, series],
  )
}
