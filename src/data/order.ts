import type { BookmarkMode } from '~/lib/progress/episode'

import type { Entity } from './types'

/**
 * Sorts records by the threshold the reader counts in.
 *
 * The anime and the manga do not introduce every record in the same order
 * (Shanks is on the first page of the manga and in the fourth episode of the
 * anime), and the chart, the log and the strip all rely on the open rows
 * being a prefix of the list. Sorting by the mode's own threshold is what
 * keeps that true in every mode; the other threshold breaks ties, so a list
 * is stable across the three.
 */
export function orderByMode(
  entries: readonly Entity[],
  mode: BookmarkMode,
): readonly Entity[] {
  return [...entries].sort((a, b) =>
    mode === 'chapter'
      ? a.revealedAtChapter - b.revealedAtChapter ||
        a.revealedAtEpisode - b.revealedAtEpisode
      : a.revealedAtEpisode - b.revealedAtEpisode ||
        a.revealedAtChapter - b.revealedAtChapter,
  )
}
