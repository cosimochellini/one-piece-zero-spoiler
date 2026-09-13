import type { CharacterDossier, Entity } from '../types'

/**
 * One stretch of the route as a module: the records filed along it, in the
 * order the anime reaches them, and the dossier of every character among
 * them. The archive is the concatenation of these, saga by saga, so a saga's
 * records and its dossiers are read and reviewed together.
 */
export type Saga = {
  readonly dossiers: Readonly<Record<string, CharacterDossier>>
  readonly entries: readonly Entity[]
}
