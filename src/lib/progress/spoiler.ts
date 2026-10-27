import type { BookmarkMode } from './episode'

/**
 * Anything the archive can hide carries the episode and the chapter from
 * which it is safe to read. Both thresholds are inclusive: a character who
 * first appears in episode 45 is readable by someone who has watched episode
 * 45, and one who first appears in chapter 8 by someone who has read it.
 *
 * Whether a reader may see one is decided on the server, by `reveal` in
 * `~/data/reveal`; this side of the seam only says what the thresholds are.
 */
export interface Gated {
  revealedAtChapter: number
  revealedAtEpisode: number
  /**
   * The one source that tells this, for a record or a fact the other source
   * never does: an anime-original character, a scene only the manga draws.
   * Absent means both. A reader who counts in the other source is never told
   * it exists (`~/data/reveal`), and its threshold in that source is kept
   * only to order it, never shown.
   */
  source?: Source
}

/**
 * The unit a reader counts in, and so the source they follow: `episode` for
 * an episode or a season bookmark, `chapter` for a chapter one.
 */
export type Source = 'chapter' | 'episode'

/**
 * A record's threshold in the unit the reader counts in: the chapter for a
 * manga reader, the episode for anyone else.
 */
export function thresholdIn(gated: Gated, mode: BookmarkMode): number {
  return mode === 'chapter' ? gated.revealedAtChapter : gated.revealedAtEpisode
}
