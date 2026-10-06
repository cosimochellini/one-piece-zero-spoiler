import type { FruitForm } from '~/lib/view/records'

import { entities } from './entities'
import { FRUIT_FORMS } from './fruit-forms'
import { orderByMode } from './order'
import type { Entity } from './types'

/**
 * The specimen sheet: the devil fruit layer of the archive.
 *
 * `entities.ts` files a fruit at the episode that first names it and gives it
 * a name, a sentence and a drawing. This module adds what a record cannot
 * carry on its own: which of the three kinds it is. Who the dossiers say ate
 * it is a dated fact of the eater's, read back by `eatersOf` in
 * `~/data/dated`.
 */

/** Every fruit record, in the order the story names them. */
export const fruits: Entity[] = orderByMode(
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
export function fruitsOfForm(form: FruitForm): Entity[] {
  return fruits.filter((fruit) => FORMS.get(fruit.id) === form)
}
