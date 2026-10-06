import { byNumber, byValue, byValues } from 'sort-es'

import type { Gated } from '~/lib/progress/spoiler'

import {
  chapterAtEpisode,
  type Field,
  type Fields,
  timelineOf,
} from './chapters'
import { CHARACTER_DOSSIERS, characters, getCharacter } from './characters'
import type { Reveal } from './reveal'
import type { Dated, Entity, Story } from './types'

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

/** One dated entry, with the gate a reader must pass to see it. */
export interface Opened<T> extends Dated<T> {
  gate: Gated
}

/**
 * When a dated entry may be shown: from its episode, and from the chapter it
 * declares or, without one, the first chapter that reaches its episode — and
 * never before its record, whichever is later in each unit.
 */
function gateOf(entry: Dated<unknown>, owner: Gated): Gated {
  const revealedAtEpisode = Math.max(owner.revealedAtEpisode, entry.episode)

  return {
    revealedAtEpisode,
    revealedAtChapter: Math.max(
      owner.revealedAtChapter,
      entry.chapter ?? chapterAtEpisode(revealedAtEpisode),
    ),
  }
}

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

/** One story, with the character whose chronicle it belongs to. */
export interface FiledStory {
  character: Entity
  episode: number
  gate: Gated
  story: Story
}

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

/**
 * A character the dossiers say ate a fruit, and the gate of the entry that
 * says so: the later of that entry and the character, because a character
 * filed long before the story says what they ate must not be named as an
 * eater the moment the reader meets them.
 */
export interface Eater {
  entity: Entity
  gate: Gated
}

/**
 * The earliest entry each character's dossier names each fruit in.
 *
 * The relation is read backwards on purpose. It is written once, on the
 * character, as a fruit id on a dated dossier entry; the fruit derives its
 * eaters from those entries rather than keeping a list of its own, so the two
 * sides of the reference cannot disagree.
 */
type Found = Map<string, Map<string, Opened<string[]>>>

/** Files one dossier entry under every fruit it names, keeping the earliest. */
function file(found: Found, character: string, entry: Opened<string[]>): void {
  for (const fruitId of entry.value) {
    const byCharacter =
      found.get(fruitId) ?? new Map<string, Opened<string[]>>()
    const seen = byCharacter.get(character)

    if (seen === undefined || entry.episode < seen.episode) {
      byCharacter.set(character, entry)
    }
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

/** One fruit's eaters, earliest first, ties broken by the archive's own order. */
function listed(byCharacter: Map<string, Opened<string[]>>): Eater[] {
  return [...byCharacter]
    .flatMap(([character, named]) => {
      const entity = getCharacter(character)

      return entity === undefined ? [] : { entity, named }
    })
    .toSorted(
      byValues([
        [(eater) => eater.named.episode, byNumber()],
        [(eater) => eater.entity.revealedAtEpisode, byNumber()],
      ]),
    )
    .map(({ entity, named }) => ({ entity, gate: named.gate }))
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
