import type { Translate } from '~/i18n/types'

import {
  type Bookmark,
  type BookmarkMode,
  bookmarkValue,
  thresholdValue,
} from './episode'
import type { BookmarkSeries } from './series'
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
  | 'character.relationshipAt'
  | 'characters.sectionOpensAt'
  | 'chart.opensAt'
  | 'fruit.foggedDescription'
  | 'fruit.opensAt'
  | 'fruits.lastFruit'
  | 'home.storyAt'
  | 'places.firstSeen'
  | 'places.foggedDescription'
  | 'ship.foggedDescription'
  | 'veil.locked'

/** What a threshold sentence needs to name a record's threshold. */
export interface ThresholdDescription {
  gated: Gated
  mode: BookmarkMode
  sentence: ThresholdSentence
  series: BookmarkSeries
  t: Translate
}

/** A record's threshold, said in the reader's unit. */
export function describeThreshold({
  t,
  sentence,
  gated,
  mode,
  series,
}: ThresholdDescription): string {
  return t(`${sentence}.${mode}`, {
    threshold: thresholdValue(gated, mode, series),
  })
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

/**
 * The reader's point, in the unit they chose: "Episode 650", "Chapter 1044"
 * or "Season 2 · episode 3". Spelled out per mode rather than through
 * `describeBookmark`, because the season form carries two numbers.
 */
export function bookmarkPoint(
  t: Translate,
  bookmark: NonNullable<Bookmark>,
): string {
  switch (bookmark.mode) {
    case 'chapter': {
      return t('home.point.chapter', { threshold: bookmark.chapter })
    }
    case 'episode': {
      return t('home.point.episode', { threshold: bookmark.episode })
    }
    case 'season': {
      return t('home.point.season', {
        season: bookmark.season,
        episode: bookmark.episode,
      })
    }
  }
}
