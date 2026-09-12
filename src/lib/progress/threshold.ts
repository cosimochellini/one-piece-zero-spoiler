import type { Translate } from '~/i18n/types'

import {
  bookmarkValue,
  thresholdValue,
  type Bookmark,
  type BookmarkMode,
} from './episode'
import type { Gated } from './spoiler'

/**
 * Every sentence that names a record's threshold. Each has three keys in the
 * dictionary, one per mode, because the unit changes the grammar and not
 * only the number: Italian says "nell'episodio 130" and "nel capitolo 218",
 * and a season code stands on its own.
 */
export type ThresholdSentence =
  | 'veil.locked'
  | 'chart.opensAt'
  | 'character.opensAt'
  | 'character.foggedDescription'
  | 'places.firstSeen'
  | 'places.foggedDescription'

/** A record's threshold, said in the reader's unit. */
export function describeThreshold(
  t: Translate,
  sentence: ThresholdSentence,
  gated: Gated,
  mode: BookmarkMode,
): string {
  return t(`${sentence}.${mode}`, { threshold: thresholdValue(gated, mode) })
}

/** The sentences that name the reader's own bookmark. */
export type BookmarkSentence = 'mark' | 'chart.hereSet'

/** The reader's bookmark, said in its own unit. */
export function describeBookmark(
  t: Translate,
  sentence: BookmarkSentence,
  bookmark: NonNullable<Bookmark>,
): string {
  return t(`${sentence}.${bookmark.mode}`, {
    threshold: bookmarkValue(bookmark),
  })
}
