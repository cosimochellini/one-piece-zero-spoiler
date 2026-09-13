import type { NameMatch, SearchableCharacter } from '~/lib/view/records'

/**
 * Name folding and matching, with nothing behind it.
 *
 * The rules were `~/data/characters`' and are unchanged; they live here now
 * because the search field runs in the browser and the archive does not. What
 * the browser gets is a name and a short list of folded aliases, so the only
 * folding left on the client is one query string per keystroke.
 */

// Every nonspacing mark, which is what decomposing a letter leaves behind.
// Written as a property escape rather than as a range of code points: a
// literal range of invisible marks is unreadable in a diff and easy to widen
// by accident.
const COMBINING_MARKS = /\p{Mn}/gu

/**
 * Lower-cased and stripped of diacritics, so "Rufy", "rufy" and "Rùfy" are
 * the same search. Returns the same length as its input whenever the input
 * has no combining marks, which is what lets a match be highlighted by index.
 */
export function foldName(value: string): string {
  return value.normalize('NFD').replaceAll(COMBINING_MARKS, '').toLowerCase()
}

/**
 * Whether a folded query matches a character, and where in the displayed name
 * to mark it.
 *
 * The displayed name is tried first, and is the only one that can be
 * highlighted — and only when folding did not change its length, so the
 * indices still point at the right letters. The aliases carry the other
 * locale's name, because an Italian reader who knows the character as Luffy
 * should still find Rufy, and the epithets the reader has already reached,
 * because "Barbabianca" should find Edward Newgate once the story has said
 * so. A match on either is a match without a highlight: the mark would have
 * to point at letters that are not on the card.
 *
 * `needle` is already folded. An empty one matches everything.
 */
export function matchFolded(
  entry: SearchableCharacter,
  needle: string,
): NameMatch {
  if (needle === '') {
    return { matches: true, highlight: null }
  }

  const at = entry.folded.indexOf(needle)
  if (at !== -1) {
    return {
      matches: true,
      highlight:
        entry.folded.length === entry.name.length ?
          [at, at + needle.length]
        : null,
    }
  }

  const alias = entry.aliases.some((value) => value.includes(needle))
  return { matches: alias, highlight: null }
}
