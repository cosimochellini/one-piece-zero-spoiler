import { absoluteEpisodeOf, type Bookmark } from './episode'

/**
 * Anything the archive can hide carries the episode and the chapter from
 * which it is safe to read. Both thresholds are inclusive: a character who
 * first appears in episode 45 is readable by someone who has watched episode
 * 45, and one who first appears in chapter 8 by someone who has read it.
 */
export type Gated = {
  readonly revealedAtChapter: number
  readonly revealedAtEpisode: number
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
  if (bookmark === null) {
    return false
  }

  if (bookmark.mode === 'chapter') {
    return bookmark.chapter >= gated.revealedAtChapter
  }

  const episode = absoluteEpisodeOf(bookmark)
  return episode !== null && episode >= gated.revealedAtEpisode
}

/**
 * One entry of a timeline: a fact as it stands from `episode` on. Structurally
 * the same as `Dated<T>` in `~/data/types`; declared here so the spoiler
 * module owes the data module nothing.
 */
export type DatedEntry<T> = { readonly episode: number; readonly value: T }

/**
 * The anime episode a bookmark stands at, or `null` when it stands nowhere
 * the timelines can measure: no bookmark, a season code the table cannot
 * resolve, or a chapter. Timelines count in episodes only, so a reader who
 * counts in chapters reaches none of their entries; that fails closed, which
 * is the safe direction.
 */
export function episodeOf(bookmark: Bookmark): null | number {
  return bookmark === null ? null : absoluteEpisodeOf(bookmark)
}

/**
 * The latest fact the reader has reached, or `undefined` when they have
 * reached none. Same asymmetry as `isRevealed`: a `null` bookmark knows
 * nothing, and so does a chapter one. Entries are expected in ascending
 * episode order.
 */
export function latestAt<T>(
  timeline: readonly DatedEntry<T>[],
  bookmark: Bookmark,
): T | undefined {
  const progress = episodeOf(bookmark)
  if (progress === null) {
    return undefined
  }

  let latest: T | undefined
  for (const entry of timeline) {
    if (entry.episode > progress) {
      break
    }
    latest = entry.value
  }
  return latest
}
