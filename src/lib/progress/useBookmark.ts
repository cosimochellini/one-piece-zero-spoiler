import { useCallback, useContext } from 'react'

import { useT } from '~/i18n/useLocale'

import { BookmarkContext, type BookmarkContextValue } from './BookmarkContext'
import { modeOf } from './episode'
import type { Gated } from './spoiler'
import { describeThreshold, type ThresholdSentence } from './threshold'

/**
 * The reader's bookmark and the setter that moves it. Throws outside the
 * provider rather than defaulting to "nothing read yet", because a silent
 * default would uncover the whole archive.
 *
 * Both hooks live beside the provider rather than inside it so that
 * BookmarkContext.tsx exports components only and Vite can refresh it in place.
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
