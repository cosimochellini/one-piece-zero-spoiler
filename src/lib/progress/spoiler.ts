import type { Progress } from './episode'

/**
 * Anything the archive can hide carries the episode from which it is safe to
 * read. The threshold is inclusive: a character who first appears in episode
 * 45 is readable by someone who has watched episode 45.
 */
export type Gated = {
  readonly revealedAtEpisode: number
}

/**
 * Decides whether a record may be shown.
 *
 * A `null` progress hides everything. That asymmetry is the product: a reader
 * who has not told the site where they are must not be shown anything, whereas
 * a reader who has is shown exactly as much as they asked for.
 */
export function isRevealed(gated: Gated, progress: Progress): boolean {
  if (progress === null) return false

  return progress >= gated.revealedAtEpisode
}

/**
 * One entry of a timeline: a fact as it stands from `episode` on. Structurally
 * the same as `Dated<T>` in `~/data/types`; declared here so the spoiler
 * module owes the data module nothing.
 */
export type DatedEntry<T> = {
  readonly episode: number
  readonly value: T
}

/**
 * The latest fact the reader has reached, or `undefined` when they have
 * reached none. Same asymmetry as `isRevealed`: a `null` progress knows
 * nothing. Entries are expected in ascending episode order.
 */
export function latestAt<T>(
  timeline: readonly DatedEntry<T>[],
  progress: Progress,
): T | undefined {
  if (progress === null) return undefined

  let latest: T | undefined
  for (const entry of timeline) {
    if (entry.episode > progress) break
    latest = entry.value
  }
  return latest
}
