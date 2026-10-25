/** A reached connection to another person; no covered relation is sent. */
export interface RelationshipView {
  person: { id: string; name: string }
  summary: string
  type: string
}
