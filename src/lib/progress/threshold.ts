import type { Translate } from '~/i18n/types'

import {
  type Bookmark,
  type BookmarkMode,
  bookmarkValue,
  thresholdValue,
} from './episode'
import type { Gated } from './spoiler'

/**
 * Every sentence that names a record's threshold. Each has three keys in the
 * dictionary, one per mode, because the unit changes the grammar and not
 * only the number: Italian says "nell'episodio 130" and "nel capitolo 218",
 * and a season code stands on its own.
 */
export type ThresholdSentence =
  | 'character.foggedDescription'
  | 'character.opensAt'
  | 'characters.sectionOpensAt'
  | 'chart.foggedDescription'
  | 'chart.opensAt'
  | 'fruit.foggedDescription'
  | 'fruit.opensAt'
  | 'places.firstSeen'
  | 'places.foggedDescription'
  | 'veil.locked'

/** What a threshold sentence needs to name a record's threshold. */
export type ThresholdDescription = {
  readonly gated: Gated
  readonly mode: BookmarkMode
  readonly sentence: ThresholdSentence
  readonly t: Translate
}

/** A record's threshold, said in the reader's unit. */
export function describeThreshold({
  t,
  sentence,
  gated,
  mode,
}: ThresholdDescription): string {
  return t(`${sentence}.${mode}`, { threshold: thresholdValue(gated, mode) })
}

/** The sentences that name the reader's own bookmark. */
export type BookmarkSentence = 'chart.hereSet' | 'mark'

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
