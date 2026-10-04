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
export type Gated = {
  readonly revealedAtChapter: number
  readonly revealedAtEpisode: number
}

/**
 * A record's threshold in the unit the reader counts in: the chapter for a
 * manga reader, the episode for anyone else.
 */
export function thresholdIn(gated: Gated, mode: BookmarkMode): number {
  return mode === 'chapter' ? gated.revealedAtChapter : gated.revealedAtEpisode
}
