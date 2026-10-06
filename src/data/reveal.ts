import {
  absoluteEpisodeOf,
  type Bookmark,
  type BookmarkMode,
  modeOf,
} from '~/lib/progress/episode'
import { type Gated, thresholdIn } from '~/lib/progress/spoiler'

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
  /** The unit the reader counts in, and so the one thresholds are printed in. */
  mode: BookmarkMode
  /**
   * Whether a record may be shown. A chapter bookmark is read against the
   * chapter threshold and nothing else; an episode or season bookmark against
   * the episode one.
   */
  sees: (gated: Gated) => boolean
  /** A record's threshold in the reader's unit. */
  threshold: (gated: Gated) => number
}

/** Whether a record may be shown at this bookmark; see `Reveal.sees`. */
function isRevealed(gated: Gated, bookmark: Bookmark): boolean {
  if (bookmark === null) {
    return false
  }
  if (bookmark.mode === 'chapter') {
    return bookmark.chapter >= gated.revealedAtChapter
  }

  const episode = absoluteEpisodeOf(bookmark)
  return episode !== null && episode >= gated.revealedAtEpisode
}

/** The reader at this bookmark. */
export function reveal(bookmark: Bookmark): Reveal {
  const mode = modeOf(bookmark)

  return {
    mode,
    sees: (gated) => isRevealed(gated, bookmark),
    threshold: (gated) => thresholdIn(gated, mode),
  }
}
