import type { Drawings, Redrawings } from '~/data/art/stroke'

/**
 * Game of Thrones' drawings, keyed by the id of the record each was drawn
 * for. None yet: the first season's are #854.
 */
export const DRAWINGS = {} satisfies Drawings

/** A drawing filed in this folder, by the id of its record. */
export type ArtId = keyof typeof DRAWINGS

/** The records drawn again later in the story: none yet. */
export const REDRAWINGS: Redrawings = {}
