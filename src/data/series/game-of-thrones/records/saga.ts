import type { ArtId } from '~/data/series/game-of-thrones/art'
import type { Entity, Saga, Visual, Vocabulary } from '~/data/types'

/**
 * A Game of Thrones record, drawn by one of its own drawings: `art` is the
 * id of a drawing filed in `../art`.
 */
export interface ThronesEntity extends Entity {
  visual: Visual & { art: ArtId }
}

/**
 * Game of Thrones' words, labelled in `../placeWords`: what kind of place a
 * place is, and whether it lies in the Seven Kingdoms, beyond the Wall or
 * across the sea in Essos. Coarse on purpose: the first season's places
 * (#853) add what they need. It has no groups: a house is prose for now,
 * and houses come later as a kind of their own (#844).
 */
export interface ThronesVocabulary extends Vocabulary {
  form: 'castle' | 'city' | 'forest' | 'fortress'
  group: never
  region: 'beyond-the-wall' | 'essos' | 'seven-kingdoms'
}

/**
 * One show season as a module (`Saga` in `~/data/types`): Game of Thrones
 * files no arcs, so each season is a stretch of its own, named "Season N",
 * and later holds the records first met along it, headed by `heading`.
 */
export interface ThronesSaga extends Saga<ThronesVocabulary> {
  entries: ThronesEntity[]
}
