import { absoluteEpisodeOf, type Bookmark } from './episode'

/**
 * Anything the archive can hide carries the episode and the chapter from
 * which it is safe to read. Both thresholds are inclusive: a character who
 * first appears in episode 45 is readable by someone who has watched episode
 * 45, and one who first appears in chapter 8 by someone who has read it.
 */
export type Gated = {
  readonly revealedAtEpisode: number
  readonly revealedAtChapter: number
}

/**
 * Decides whether a record may be shown.
 *
 * A `null` bookmark hides everything. That asymmetry is the product: a reader
 * who has not told the site where they are must not be shown anything,
 * whereas a reader who has is shown exactly as much as they asked for. A
 * chapter bookmark is read against the chapter threshold and nothing else;
 * an episode or season bookmark against the episode one.
 */
export function isRevealed(gated: Gated, bookmark: Bookmark): boolean {
  if (bookmark === null) return false

  if (bookmark.mode === 'chapter') {
    return bookmark.chapter >= gated.revealedAtChapter
  }

  const episode = absoluteEpisodeOf(bookmark)
  return episode !== null && episode >= gated.revealedAtEpisode
}
