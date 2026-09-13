import { createContext, useCallback, useContext } from 'react'

import { useT } from '~/i18n/LocaleContext'

import { type Bookmark, modeOf } from './episode'
import type { Gated } from './spoiler'
import { describeThreshold, type ThresholdSentence } from './threshold'

/** What the provider puts on the context: the bookmark, and how to move it. */
export type BookmarkContextValue = {
  readonly bookmark: Bookmark
  readonly setBookmark: (next: Bookmark) => void
}

export const BookmarkContext = createContext<BookmarkContextValue | null>(null)

/**
 * The reader's bookmark and the setter that moves it. Throws outside the
 * provider rather than defaulting to "nothing read yet", because a silent
 * default would uncover the whole archive.
 */
export function useBookmark(): BookmarkContextValue {
  const value = useContext(BookmarkContext)

  if (value === null) {
    throw new Error('useBookmark must be used inside a BookmarkProvider')
  }

  return value
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
  const mode = modeOf(useBookmark().bookmark)

  return useCallback(
    (sentence: ThresholdSentence, gated: Gated) =>
      describeThreshold(t, sentence, gated, mode),
    [t, mode],
  )
}
