import type { FruitForm } from '~/lib/view/records'

import { CHARACTER_DOSSIERS, getCharacter } from './characters'
import { entities } from './entities'
import { FRUIT_FORMS } from './fruit-forms'
import { orderByMode } from './order'
import type { Entity } from './types'

/**
 * The specimen sheet: the devil fruit layer of the archive.
 *
 * `entities.ts` files a fruit at the episode that first names it and gives it
 * a name, a sentence and a drawing. This module adds the two things a record
 * cannot carry on its own — which of the three kinds it is, and who the
 * dossiers say ate it.
 *
 * The relation is read backwards on purpose. It is written once, on the
 * character, as a fruit id on a dated dossier entry; the fruit derives its
 * eaters from those entries rather than keeping a list of its own, so the two
 * sides of the reference cannot disagree.
 */

/** A character the dossiers name, and the episode whose entry names them. */
export type Eater = { readonly entity: Entity; readonly namedAtEpisode: number }

/** Every fruit record, in the order the story names them. */
export const fruits: readonly Entity[] = orderByMode(
  entities.filter((entity) => entity.kind === 'fruit'),
  'episode',
)

const BY_ID = new Map(fruits.map((fruit) => [fruit.id, fruit]))

const FORMS = new Map<string, FruitForm>(Object.entries(FRUIT_FORMS))

/**
 * Looks a fruit up by id. A record that exists but is not a fruit is
 * `undefined` here too: `/fruits/nami` is not a page.
 */
export function getFruit(id: string): Entity | undefined {
  return BY_ID.get(id)
}

/** Which of the three kinds a fruit is, or nothing for a record that is not one. */
export function fruitFormOf(entity: Entity): FruitForm | undefined {
  return FORMS.get(entity.id)
}

/** Every fruit of one kind, in the order the story names them. */
export function fruitsOfForm(form: FruitForm): readonly Entity[] {
  return fruits.filter((fruit) => FORMS.get(fruit.id) === form)
}

/** The earliest episode each character's dossier names each fruit in. */
type NamedAt = Map<string, Map<string, number>>

/** Files one dossier entry under every fruit it names, keeping the earliest. */
function file(found: NamedAt, character: string, entry: Dated): void {
  for (const fruitId of entry.value) {
    const byCharacter = found.get(fruitId) ?? new Map<string, number>()
    const seen = byCharacter.get(character)

    if (seen === undefined || entry.episode < seen) {
      byCharacter.set(character, entry.episode)
    }
    found.set(fruitId, byCharacter)
  }
}

/** One dated dossier entry, as this module reads it. */
type Dated = { readonly episode: number; readonly value: readonly string[] }

/** Every fruit's eaters, read once out of the dossiers. */
function readEaters(): ReadonlyMap<string, readonly Eater[]> {
  const found: NamedAt = new Map()

  for (const [character, dossier] of Object.entries(CHARACTER_DOSSIERS)) {
    const named = dossier.devilFruit
    if (named === undefined) {
      continue
    }

    for (const entry of named) {
      file(found, character, entry)
    }
  }

  return new Map(
    [...found].map(([fruitId, byCharacter]) => [fruitId, listed(byCharacter)]),
  )
}

/** One fruit's eaters, earliest first, ties broken by the archive's own order. */
function listed(byCharacter: ReadonlyMap<string, number>): readonly Eater[] {
  return [...byCharacter]
    .flatMap(([character, namedAtEpisode]) => {
      const entity = getCharacter(character)

      return entity === undefined ? [] : [{ entity, namedAtEpisode }]
    })
    .toSorted((a, b) => {
      const byEpisode = a.namedAtEpisode - b.namedAtEpisode

      return byEpisode === 0 ?
          a.entity.revealedAtEpisode - b.entity.revealedAtEpisode
        : byEpisode
    })
}

const EATERS = readEaters()

/**
 * Every character the dossiers say ate this fruit, with the episode that says
 * so. Empty for an id the archive does not file, which is the same answer a
 * fruit nobody has eaten would give — and a data test holds that there is no
 * such fruit.
 */
export function eatersOf(id: string): readonly Eater[] {
  return EATERS.get(id) ?? []
}
