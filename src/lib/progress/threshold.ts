import type { SeriesSlug, Translate, TranslationParams } from '~/i18n/types'

import { type BookPosition, locateChapter } from './books'
import {
  type Bookmark,
  type BookmarkMode,
  bookmarkValue,
  thresholdValue,
} from './episode'
import type { Book, BookmarkSeries } from './series'
import { type Gated, thresholdIn } from './spoiler'

/**
 * The form a sentence takes: one per bookmark mode, and `book` for a
 * chapter said as a book and the chapter in it.
 */
export type SentenceForm = 'book' | BookmarkMode

/**
 * Every sentence that names a record's threshold. Each has four keys in the
 * dictionary, one per form, because the unit changes the grammar and not
 * only the number: Italian says "nell'episodio 130" and "nel capitolo 218",
 * and a season code stands on its own.
 */
export type ThresholdSentence<S extends SeriesSlug = never> =
  | 'character.foggedDescription'
  | 'character.opensAt'
  | 'character.relationshipAt'
  | 'characters.sectionOpensAt'
  | 'chart.opensAt'
  | 'home.storyAt'
  | 'intro.context'
  | 'places.firstSeen'
  | 'places.foggedDescription'
  | 'veil.locked'
  // The sentences of a series' own features, by series.
  | {
      'game-of-thrones': never
      'hunter-x-hunter': never
      'one-piece':
        | 'fruit.foggedDescription'
        | 'fruit.opensAt'
        | 'fruits.lastFruit'
        | 'ship.foggedDescription'
    }[S]

/**
 * What a threshold sentence needs to name a record's threshold. `S` names
 * the series whose own sentences it may say, and `t` must hold every key of
 * them, so a fruit's sentence needs One Piece's translate.
 */
export interface ThresholdDescription<S extends SeriesSlug = never> {
  gated: Gated
  mode: BookmarkMode
  sentence: ThresholdSentence<S>
  series: BookmarkSeries
  t: (
    key: `${ThresholdSentence<S>}.${SentenceForm}`,
    params?: TranslationParams,
  ) => string
}

/**
 * Where a bookmark's chapter falls among the series' books, or `null` when it
 * is not said as a book: another mode, a series without books, or a chapter
 * past the last book, which keeps the plain chapter form.
 */
export function bookmarkBook(
  bookmark: NonNullable<Bookmark>,
  books: Book[] | undefined,
): BookPosition | null {
  return bookmark.mode === 'chapter' ?
      locateChapter(bookmark.chapter, books)
    : null
}

/** A record's threshold, said in the reader's unit. */
export function describeThreshold<S extends SeriesSlug = never>({
  t,
  sentence,
  gated,
  mode,
  series,
}: ThresholdDescription<S>): string {
  const book =
    mode === 'chapter' ?
      locateChapter(thresholdIn(gated, mode), series.books)
    : null
  return book === null ?
      t(`${sentence}.${mode}`, {
        threshold: thresholdValue(gated, mode, series),
      })
    : t(`${sentence}.book`, { ...book })
}

/** The sentences that name the reader's own bookmark. */
export type BookmarkSentence = 'chart.hereSet' | 'mark'

/**
 * The reader's bookmark, said in its own unit, and a chapter on a series
 * with books as its book and the chapter in it.
 */
export function describeBookmark(
  t: Translate,
  sentence: BookmarkSentence,
  {
    bookmark,
    books,
  }: { bookmark: NonNullable<Bookmark>; books: Book[] | undefined },
): string {
  const book = bookmarkBook(bookmark, books)
  return book === null ?
      t(`${sentence}.${bookmark.mode}`, { threshold: bookmarkValue(bookmark) })
    : t(`${sentence}.book`, { ...book })
}

/**
 * The reader's point, in the unit they chose: "Episode 650", "Chapter 1044",
 * "Season 2 · episode 3" or "Book 2, chapter 30". Spelled out per mode rather
 * than through `describeBookmark`, because the season form carries two
 * numbers.
 */
export function bookmarkPoint(
  t: Translate,
  bookmark: NonNullable<Bookmark>,
  books: Book[] | undefined,
): string {
  switch (bookmark.mode) {
    case 'chapter': {
      const book = bookmarkBook(bookmark, books)
      return book === null ?
          t('home.point.chapter', { threshold: bookmark.chapter })
        : t('home.point.book', { ...book })
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
