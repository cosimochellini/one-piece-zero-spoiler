import type { ArtId } from '~/data/series/hunter-x-hunter/art'
import type { Entity, Saga, Visual, Vocabulary } from '~/data/types'

/**
 * A Hunter x Hunter record, drawn by one of its own drawings: `art` is the id
 * of a drawing filed in `../art`.
 */
export interface HunterEntity extends Entity {
  visual: Visual & { art: ArtId }
}

/**
 * Hunter x Hunter's words, labelled in `../placeWords`: what kind of place a
 * place is, and whether it lies on an island or on the mainland, the one
 * piece of geography the Hunter Exam tells. It has no groups: an
 * affiliation is prose alone, and the pages sort no one by faction (#760).
 */
export interface HunterVocabulary extends Vocabulary {
  form:
    | 'city'
    | 'country'
    | 'forest'
    | 'island'
    | 'mountain'
    | 'port'
    | 'prison'
    | 'tower'
    | 'wetland'
  group: never
  region: 'islands' | 'mainland'
}

/**
 * One arc as a module (`Saga` in `~/data/types`): Hunter x Hunter has no
 * grouping above its arcs, so each arc is a stretch of its own, named after
 * the arc, and later holds the records first met along it.
 */
export interface HunterSaga extends Saga<HunterVocabulary> {
  entries: HunterEntity[]
}
