import { byNumber, byValue, byValues } from 'sort-es'

import type { Eater } from '~/data/features'
import { type Reveal, toldIn } from '~/data/reveal'
import type {
  Entity,
  Field,
  Fields,
  FiledStory,
  Native,
  Opened,
} from '~/data/types'
import type { Gated } from '~/lib/progress/spoiler'
import type { Faction } from '~/lib/view/records'

import { gateOf, timelineOf } from './chapter-table'
import { characters, getCharacter } from './characters'
import { CHARACTER_DOSSIERS } from './sagas'

/**
 * The dated facts of the archive, as one reader may read them.
 *
 * Every timeline belongs to a record — a dossier's fields, a ship's fate, a
 * redrawing — and a fact about a record the reader has not met would name it.
 * So a fact is asked for by its record and its field, never as a bare
 * timeline, and its gate is the later of its own and its record's: no call
 * site can read a timeline without the record behind it, because none is
 * handed one. The home page's stories and a fruit's eaters are views of the
 * same facts, gated the same way.
 */

/**
 * Every entry of one of a record's timelines, each with its gate, whoever is
 * reading; empty for a record that files none.
 */
export function datedOf<F extends Field>(
  owner: Entity,
  field: F,
): Opened<Fields[F]>[] {
  return (timelineOf(owner, field) ?? []).map((entry) => {
    const gate = gateOf(entry, owner)

    return { ...entry, gate }
  })
}

/** The entries of a record's timeline the reader has reached, in order. */
export function reachedOf<F extends Field>(
  at: Reveal,
  owner: Entity,
  field: F,
): Opened<Fields[F]>[] {
  return datedOf(owner, field).filter((entry) => at.sees(entry.gate))
}

/** The latest entry of a record's timeline the reader has reached, if any. */
export function latestOf<F extends Field>(
  at: Reveal,
  owner: Entity,
  field: F,
): Fields[F] | undefined {
  return reachedOf(at, owner, field).at(-1)?.value
}

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
 * Every story in the archive, ascending by the episode it concludes at; ties
 * keep route order. The chronicles are filed per character, and the home
 * page reads them across characters, by when they happen.
 */
export const stories: FiledStory[] = characters
  .flatMap((character) => {
    return datedOf(character, 'chronicle').map((entry) => {
      const { episode, gate, value } = entry

      return { character, episode, gate, story: value }
    })
  })
  .toSorted(byValue('episode', byNumber()))

/** One story, with the character whose chronicle it belongs to. */
export type { FiledStory } from '~/data/types'

/**
 * The gate of a link several entries tell, given in timeline order: in each
 * unit, the first entry that unit's source tells. A link the anime alone
 * tells first is still reached by a chapter reader, at the first entry the
 * manga tells too; one that a single source tells at all is that source's
 * alone. With no source on any entry it is the first entry's gate.
 */
export function earliestOf(gates: Gated[]): Gated {
  const anime = gates.find((gate) => toldIn(gate, 'anime'))
  const manga = gates.find((gate) => toldIn(gate, 'manga'))
  if (anime !== undefined && manga !== undefined && anime !== manga) {
    return {
      revealedAtEpisode: anime.revealedAtEpisode,
      revealedAtChapter: manga.revealedAtChapter,
    }
  }

  const first = anime ?? manga ?? gates[0]
  if (first === undefined) {
    throw new Error('A link is told by at least one entry')
  }

  return first
}

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

/**
 * The places one character's origin names, each with the gate the entries
 * naming it give it (`earliestOf`): a timeline is in episode order, so the
 * first entry found is the earliest.
 */
function placesOf(entity: Entity): Map<string, Gated> {
  const origin = CHARACTER_DOSSIERS[entity.id]?.origin ?? []
  const named = new Map<string, Gated[]>()

  for (const entry of origin) {
    if (entry.place !== undefined) {
      named.set(entry.place, [
        ...(named.get(entry.place) ?? []),
        gateOf(entry, entity),
      ])
    }
  }

  return new Map([...named].map(([place, gates]) => [place, earliestOf(gates)]))
}

/**
 * Every place's natives, read once out of the origin entries, in the order
 * the characters are filed. Read backwards, as the eaters are: the link is
 * written once, on the character's entry, and the place derives its list.
 */
function readNatives(): Map<string, Native[]> {
  const found = new Map<string, Native[]>()

  for (const entity of characters) {
    for (const [place, gate] of placesOf(entity)) {
      found.set(place, [...(found.get(place) ?? []), { entity, gate }])
    }
  }

  return found
}

const NATIVES = readNatives()

/**
 * Every character whose origin names this place, each with the gate of the
 * entry that says so. Empty for a place nobody comes from, or an id the
 * archive does not file.
 */
export function nativesOf(id: string): Native[] {
  return NATIVES.get(id) ?? []
}
