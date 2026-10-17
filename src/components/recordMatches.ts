import { foldName, matchFolded } from '~/lib/search/fold'
import type { NameMatch, Searchable, SpecimenView } from '~/lib/view/records'

/** A record the query answered for, with the span of its name that matched. */
export interface Match<T extends Searchable> {
  entry: T
  match: NameMatch
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
  entries: T[],
  needle: string,
): Match<T>[] {
  return entries.flatMap((entry) => {
    const match = matchFolded(entry, needle)
    return match.matches ? { entry, match } : []
  })
}

/** Which of a fruit's eaters its tile shows, and the span of their name to mark. */
export interface EaterMatch {
  at: number
  highlight: [number, number] | null
}

/**
 * The eater a fruit's tile shows for a folded query: the first one, unless
 * the query found the fruit through another eater's name, in which case that
 * eater, with the letters marked when they are on the tile.
 *
 * A match on the fruit's own name keeps the first eater, and so does a match
 * on a name only the other locale uses: the mark would point at letters that
 * are not there.
 */
export function eaterMatch(fruit: SpecimenView, needle: string): EaterMatch {
  if (needle !== '' && !fruit.folded.includes(needle)) {
    for (const [at, { name }] of fruit.eaters.entries()) {
      const match = matchFolded(
        { name, folded: foldName(name), aliases: [] },
        needle,
      )
      if (match.matches) {
        return { at, highlight: match.highlight }
      }
    }
  }

  return { at: 0, highlight: null }
}
