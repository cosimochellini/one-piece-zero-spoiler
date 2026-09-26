import type { DatedEntry } from '~/lib/progress/spoiler'
import type { Stroke } from '~/lib/view/records'

/**
 * Re-exported under the archive's own name so a saga's drawings read as
 * strokes without naming the view models the browser takes them as.
 */

/**
 * A set of drawings keyed by the id of the record each was drawn for.
 *
 * A stroke itself is declared with the view models rather than here: a
 * drawing crosses the wire as its strokes, so the shape belongs to both
 * sides, and declaring it twice would leave two definitions to drift apart.
 */
export type Drawings = Readonly<Record<string, readonly Stroke[]>>

/**
 * The records drawn again later in the story, keyed by id: each entry is a
 * whole drawing from the episode it is first safe to show, in ascending
 * order, like any other dated fact of a dossier. The drawing in `Drawings`
 * stays the one a reader below the first entry is shown.
 */
export type Redrawings = Readonly<
  Record<string, readonly DatedEntry<readonly Stroke[]>[]>
>

export { type Stroke } from '~/lib/view/records'
