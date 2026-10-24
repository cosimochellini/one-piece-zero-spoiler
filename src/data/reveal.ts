import {
  absoluteEpisodeOf,
  type Bookmark,
  type BookmarkMode,
  modeOf,
} from '~/lib/progress/episode'
import { type BookmarkSeries, ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import { type Gated, type Source, thresholdIn } from '~/lib/progress/spoiler'

/**
 * What a reader at one bookmark may see, decided once.
 *
 * Every question the archive asks of a bookmark goes through here: whether a
 * record, or anything gated like one, may be shown, and in which unit its
 * threshold is printed. A dated fact is gated like a record too, by
 * `~/data/dated`, which works out the gate from the entry and the record it
 * belongs to and asks `sees` of it.
 *
 * A `null` bookmark sees nothing. That asymmetry is the product: a reader who
 * has not told the site where they are must not be shown anything, whereas a
 * reader who has is shown exactly as much as they asked for.
 */
export interface Reveal {
  /**
   * Whether a record exists for this reader at all: a record or a fact of one
   * source only (`Gated.source`) does not for a reader of the other, nor for
   * one with no bookmark, who counts in neither. Nothing this answers `false`
   * for is sent, covered, counted or handed a handle (`~/data/source`).
   */
  has: (gated: Gated) => boolean
  /** The unit the reader counts in, and so the one thresholds are printed in. */
  mode: BookmarkMode
  /**
   * Whether a record may be shown. A chapter bookmark is read against the
   * chapter threshold and nothing else; an episode or season bookmark against
   * the episode one. Never a record the reader does not have (`has`).
   */
  sees: (gated: Gated) => boolean
  /** A record's threshold in the reader's unit. */
  threshold: (gated: Gated) => number
}

/** Whether a record may be shown at this bookmark; see `Reveal.sees`. */
function isRevealed(
  gated: Gated,
  bookmark: Bookmark,
  series: BookmarkSeries,
): boolean {
  if (bookmark === null) {
    return false
  }
  if (bookmark.mode === 'chapter') {
    return bookmark.chapter >= gated.revealedAtChapter
  }

  const episode = absoluteEpisodeOf(bookmark, series)
  return episode !== null && episode >= gated.revealedAtEpisode
}

/**
 * The source a bookmark counts in: the manga for a chapter, the anime for an
 * episode or a season. `null` for no bookmark, which counts in neither.
 */
export function sourceOf(bookmark: Bookmark): null | Source {
  if (bookmark === null) {
    return null
  }

  return bookmark.mode === 'chapter' ? 'manga' : 'anime'
}

/** Whether a reader of this source, or of none, has this record at all. */
export function toldIn(
  gated: Pick<Gated, 'source'>,
  source: null | Source,
): boolean {
  return gated.source === undefined || gated.source === source
}

/** The reader at this bookmark. */
export function reveal(
  bookmark: Bookmark,
  series: BookmarkSeries = ONE_PIECE_BOOKMARK,
): Reveal {
  const mode = modeOf(bookmark)
  const source = sourceOf(bookmark)
  const has = (gated: Gated): boolean => toldIn(gated, source)

  return {
    has,
    mode,
    sees: (gated) => has(gated) && isRevealed(gated, bookmark, series),
    threshold: (gated) => thresholdIn(gated, mode),
  }
}
