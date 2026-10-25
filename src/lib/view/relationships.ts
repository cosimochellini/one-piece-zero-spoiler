/** One reached change; dates say when this stage becomes available in the wiki. */
export interface RelationshipStageView {
  /** Original reached snapshot pair/source, independent of a later endpoint gate. */
  key: string
  revealedAtChapter: number
  revealedAtEpisode: number
  summary: string
  type: string
}

/** A reached connection to another person; no covered relation is sent. */
export interface RelationshipView {
  history: RelationshipStageView[]
  person: { id: string; name: string }
  summary: string
  type: string
}
