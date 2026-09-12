import { alabasta } from './records/alabasta'
import { dressrosa } from './records/dressrosa'
import { eastBlue } from './records/east-blue'
import { egghead } from './records/egghead'
import { fishManIsland } from './records/fish-man-island'
import type { Saga } from './records/saga'
import { skypiea } from './records/skypiea'
import { summitWar } from './records/summit-war'
import { thrillerBark } from './records/thriller-bark'
import { wano } from './records/wano'
import { waterSeven } from './records/water-seven'
import { wholeCake } from './records/whole-cake'
import type { Entity } from './types'

/**
 * The archive.
 *
 * TypeScript modules rather than JSON: the `Entity` annotation typechecks every
 * record at build time and the compiler inlines the data, so there is no parse
 * step and no schema library to keep in sync. The records are filed by saga in
 * `./records`, one module per stretch of the route, each with the dossiers of
 * the characters it files; this module is the concatenation.
 *
 * Every threshold is an anime episode number: the first canonical episode from
 * which the viewer knows the record by name and by sight. A character seen but
 * not named is not yet a record — the hooded man at Loguetown is filed at the
 * episode that names him, not the one that shows him. Filler, films and
 * specials do not count. Where a threshold was not certain, it was rounded up
 * rather than guessed — a wrong threshold in this file is a spoiler, which is
 * the one bug this project cannot ship.
 *
 * The error is not symmetric, and the editing rule follows from that: a
 * threshold set too low uncovers a record early, which is the bug; one set too
 * high only keeps it covered a little longer, which is not. When a threshold is
 * uncertain, round it up. Summaries, roles and log entries follow the same
 * rule: each one says only what a viewer at the threshold episode already
 * knows. The dossier's timelines are the one place a later fact may be
 * written, because each entry carries the episode it is learned in and the
 * page shows only the entries the reader has reached.
 *
 * Names are the Italian anime dub's in `it` (Rufy, Bagy, Usop) and the
 * English edition's in `en`; the id is an English slug. Where the dub never
 * voiced a character the Star Comics spelling stands in.
 *
 * Arc thresholds are the episode the arc opens on. They should be checked
 * against a source before the wiki is published; they are the seed set, not a
 * citation.
 *
 * Images: no photographs and no official artwork appear anywhere. Every record
 * has a line drawing of an object or a place that stands for it, drawn in
 * `~/data/art`, and one colour for its main stroke. No faces, no logos: a
 * straw hat for the captain, three sheathed swords for the swordsman.
 *
 * Places are filed at the episode that first shows them, and the ship's log
 * (`./places.ts`) adds the rest of what is known about each one at that
 * episode: the sea, what kind of place it is, the arc, and who is met there.
 */

/** The sagas in the order the anime reaches them. */
export const sagas: readonly Saga[] = [
  eastBlue,
  alabasta,
  skypiea,
  waterSeven,
  thrillerBark,
  summitWar,
  fishManIsland,
  dressrosa,
  wholeCake,
  wano,
  egghead,
]

export const entities: readonly Entity[] = sagas.flatMap((saga) => saga.entries)

const BY_ID = new Map(entities.map((entity) => [entity.id, entity]))

/**
 * Looks a record up by id. Returns `undefined` for an unknown id rather than
 * throwing, so a stale link renders a not-found page instead of a 500.
 */
export function getEntity(id: string): Entity | undefined {
  return BY_ID.get(id)
}
