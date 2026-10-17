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

/** The first of these eaters whose name, as the tile prints it, the query finds. */
function namedMatch(
  fruit: SpecimenView,
  needle: string,
  among: number[],
): EaterMatch | undefined {
  for (const at of among) {
    const name = fruit.eaters[at]?.name
    const match =
      name === undefined ? undefined : (
        matchFolded({ name, folded: foldName(name), aliases: [] }, needle)
      )
    if (match?.matches === true) {
      return { at, highlight: match.highlight }
    }
  }

  return undefined
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
  const found =
    needle === '' || fruit.folded.includes(needle) ?
      undefined
    : namedMatch(
        fruit,
        needle,
        fruit.eaters.map((_, at) => at),
      )

  return found ?? { at: 0, highlight: null }
}

/**
 * The same for a tile in one faction's group, which may show only the eaters
 * that put it there (`among`, earliest first): the one the query found, or
 * the first. `null` when the query found the fruit through an eater of
 * another group only, so the tile stays in that eater's group. A match on the
 * fruit's own name, or on a name only the other locale uses, keeps it in
 * every group.
 */
export function groupEaterMatch(
  fruit: SpecimenView,
  needle: string,
  among: number[],
): EaterMatch | null {
  const first = { at: among[0] ?? 0, highlight: null }
  if (needle === '' || fruit.folded.includes(needle)) {
    return first
  }

  return (
    namedMatch(fruit, needle, among)
    ?? ((
      namedMatch(
        fruit,
        needle,
        fruit.eaters.map((_, at) => at),
      ) === undefined
    ) ?
      first
    : null)
  )
}
