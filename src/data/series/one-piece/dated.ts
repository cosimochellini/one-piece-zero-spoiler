import { byNumber, byValues } from 'sort-es'

import { datedArchive, earliestOf } from '~/data/dated'
import type { Eater } from '~/data/features'
import type { Reveal } from '~/data/reveal'
import type { Entity, Opened } from '~/data/types'
import type { Faction } from '~/lib/view/records'

import { FILED, gateOf } from './chapter-table'
import { characters, getCharacter } from './characters'
import { entities } from './entities'
import { CHARACTER_DOSSIERS } from './sagas'

/**
 * One Piece's dated facts, as one reader may read them (`~/data/dated`), and
 * the two its features add: a character's factions and a fruit's eaters,
 * gated the same way.
 */
export const {
  datedOf,
  latestOf,
  nativesOf,
  reachedOf,
  redrawn,
  stories,
  timelines,
} = datedArchive({
  characters,
  dossiers: CHARACTER_DOSSIERS,
  entities,
  filed: FILED,
  gateOf,
})

/**
 * The factions a character stands with for this reader: the tags of the
 * latest affiliation entry they have reached, the same entry `latestOf`
 * prints. Its own function because `Fields` reads an affiliation as its prose
 * alone; `undefined` with no entry reached yet.
 */
export function factionsOf(at: Reveal, owner: Entity): Faction[] | undefined {
  return CHARACTER_DOSSIERS[owner.id]?.affiliation.findLast((entry) =>
    at.sees(gateOf(entry, owner)),
  )?.factions
}

/**
 * A character the dossiers say ate a fruit, and the gate of the entry that
 * says so: the later of that entry and the character, because a character
 * filed long before the story says what they ate must not be named as an
 * eater the moment the reader meets them.
 */
export type { Eater } from '~/data/features'

/**
 * The entries each character's dossier names each fruit in, in order.
 *
 * The relation is read backwards on purpose. It is written once, on the
 * character, as a fruit id on a dated dossier entry; the fruit derives its
 * eaters from those entries rather than keeping a list of its own, so the two
 * sides of the reference cannot disagree.
 */
type Found = Map<string, Map<string, Opened<string[]>[]>>

/** Files one dossier entry under every fruit it names. */
function file(found: Found, character: string, entry: Opened<string[]>): void {
  for (const fruitId of entry.value) {
    const byCharacter =
      found.get(fruitId) ?? new Map<string, Opened<string[]>[]>()
    byCharacter.set(character, [...(byCharacter.get(character) ?? []), entry])
    found.set(fruitId, byCharacter)
  }
}

/**
 * Every fruit's eaters, read once out of the dossiers, in the order the
 * dossiers are filed: ties in the sort below keep it.
 */
function readEaters(): Map<string, Eater[]> {
  const found: Found = new Map()

  for (const id of Object.keys(CHARACTER_DOSSIERS)) {
    const character = getCharacter(id)
    if (character === undefined) {
      continue
    }

    for (const entry of datedOf(character, 'devilFruit')) {
      file(found, id, entry)
    }
  }

  return new Map(
    [...found].map(([fruitId, byCharacter]) => [fruitId, listed(byCharacter)]),
  )
}

/**
 * One fruit's eaters, earliest first, ties broken by the archive's own order,
 * each at the gate its entries give it (`earliestOf`).
 */
function listed(byCharacter: Map<string, Opened<string[]>[]>): Eater[] {
  return [...byCharacter]
    .flatMap(([character, entries]) => {
      const entity = getCharacter(character)
      const [named] = entries

      return entity === undefined || named === undefined ?
          []
        : { entity, gate: earliestOf(entries.map(({ gate }) => gate)), named }
    })
    .toSorted(
      byValues([
        [(eater) => eater.named.episode, byNumber()],
        [(eater) => eater.entity.revealedAtEpisode, byNumber()],
      ]),
    )
    .map(({ entity, gate }) => ({ entity, gate }))
}

const EATERS = readEaters()

/**
 * Every character the dossiers say ate this fruit, earliest first. Empty for
 * an id the archive does not file, which is the same answer a fruit nobody
 * has eaten would give — and a data test holds that there is no such fruit.
 */
export function eatersOf(id: string): Eater[] {
  return EATERS.get(id) ?? []
}
