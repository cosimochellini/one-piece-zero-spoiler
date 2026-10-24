import type { ArtId } from '~/data/series/hunter-x-hunter/art'
import type { Entity, Saga, Visual } from '~/data/types'

/**
 * A Hunter x Hunter record, drawn by one of its own drawings: `art` is the id
 * of a drawing filed in `../art`.
 */
export interface HunterEntity extends Entity {
  visual: Visual & { art: ArtId }
}

/**
 * One arc as a module (`Saga` in `~/data/types`): Hunter x Hunter has no
 * grouping above its arcs, so each arc is a stretch of its own, named after
 * the arc, and later holds the records first met along it. No place forms,
 * regions or groups yet: Hunter x Hunter's words, and the pages that print
 * them, come with #795, before #760 files its places and groups.
 */
export interface HunterSaga extends Saga<{
  form: never
  group: never
  region: never
}> {
  entries: HunterEntity[]
}
