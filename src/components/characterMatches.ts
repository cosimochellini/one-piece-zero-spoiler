import { matchFolded } from '~/lib/search/fold'
import type { NameMatch, SearchableCharacter } from '~/lib/view/records'

/** A record the query answered for, with the span of its name that matched. */
export type Match = {
  readonly entry: SearchableCharacter
  readonly match: NameMatch
}

/**
 * The records a folded query answers for.
 *
 * Only open records are ever passed in, and now by construction rather than
 * by discipline: a covered character is not on the page to be searched. One
 * that surfaced when its name was typed would confirm the name, which is the
 * one thing the fog exists to prevent.
 *
 * The names arrive folded from the server, so a keystroke costs one folded
 * query and a few hundred `indexOf` calls rather than an NFD pass and a
 * dossier lookup per record.
 */
export function matchesIn(
  entries: readonly SearchableCharacter[],
  needle: string,
): readonly Match[] {
  return entries.flatMap((entry) => {
    const match = matchFolded(entry, needle)
    return match.matches ? [{ entry, match }] : []
  })
}
