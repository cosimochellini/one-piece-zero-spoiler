import type { CharacterDossier, Entity, LocalizedText } from '~/data/types'

/**
 * One stretch of the route as a module: the records filed along it, in the
 * order the anime reaches them, and the dossier of every character among
 * them. The archive is the concatenation of these, saga by saga, so a saga's
 * records and its dossiers are read and reviewed together.
 */
export interface Saga {
  dossiers: Record<string, CharacterDossier>
  entries: Entity[]
  /**
   * The saga's own name, for the fruits page's marquee. Most sagas hold
   * several arcs, so no arc record names the whole of one. Not gated: saga
   * names are not spoilers (owner, 2026-10-17).
   */
  name: LocalizedText
}
