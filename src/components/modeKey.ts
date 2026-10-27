import type { TranslationKey } from '~/i18n/types'
import type { BookmarkMode } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'

const MODE_KEY: Record<BookmarkMode, TranslationKey> = {
  episode: 'dialog.modeEpisode',
  season: 'dialog.modeSeason',
  chapter: 'dialog.modeChapter',
}

/**
 * A unit's name, which on a series with books is "Book" for chapters: the
 * reader picks a book, then the chapter in it.
 */
export function modeKey(
  mode: BookmarkMode,
  series: BookmarkSeries,
): TranslationKey {
  return mode === 'chapter' && series.books !== undefined ?
      'dialog.modeBook'
    : MODE_KEY[mode]
}
