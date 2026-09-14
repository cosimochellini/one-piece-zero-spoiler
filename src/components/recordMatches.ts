import { matchFolded } from '~/lib/search/fold'
import type { NameMatch, Searchable } from '~/lib/view/records'

/** A record the query answered for, with the span of its name that matched. */
export type Match<T extends Searchable> = {
  readonly entry: T
  readonly match: NameMatch
}

/**
 * The records a folded query answers for.
 *
 * Only open records are ever passed in, and now by construction rather than
 * by discipline: a covered record is not on the page to be searched. One
 * that surfaced when its name was typed would confirm the name, which is the
 * one thing the fog exists to prevent.
 *
 * The names arrive folded from the server, so a keystroke costs one folded
 * query and a few hundred `indexOf` calls rather than an NFD pass and a
 * dossier lookup per record.
 */
export function matchesIn<T extends Searchable>(
  entries: readonly T[],
  needle: string,
): readonly Match<T>[] {
  return entries.flatMap((entry) => {
    const match = matchFolded(entry, needle)
    return match.matches ? [{ entry, match }] : []
  })
}
