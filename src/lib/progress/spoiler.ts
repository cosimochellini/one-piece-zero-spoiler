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
