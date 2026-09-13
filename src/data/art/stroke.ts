/**
 * One stroke of a line drawing: an SVG path and how it is inked.
 *
 * `accent` takes the drawing's one colour, `soft` the second ink like an
 * unmarked stroke, `ambient` the muted rule ink for ground, water and other
 * things that are merely there. `dashed` is for the ambient lines that mark
 * a course or a shadow.
 */
export type Role = 'accent' | 'ambient' | 'soft'

/**
 * `transform` is for a stroke that repeats around a centre — the four blades
 * of a windmill are one path rotated — so the shape is written once.
 */
export type Stroke = {
  readonly d: string
  readonly dashed?: boolean
  readonly role?: Role
  readonly transform?: string
}

/** A set of drawings keyed by the id of the record each was drawn for. */
export type Drawings = Readonly<Record<string, readonly Stroke[]>>
