/**
 * What the filler guide is allowed to know.
 *
 * The same seam as `./records`: the entries live in `~/data/filler` on the
 * server, and the page receives these shapes, with the strings already in the
 * route locale. A row the reader has not reached carries its position and
 * its kind, which are what the skip ranges print anyway, and nothing else.
 */

import type { Gated } from '~/lib/progress/spoiler'

/**
 * What an entry is. `filler`, `mixed` and `recap` are numbered episodes;
 * `film` and `special` are not, and neither is a recap special, which is a
 * `recap` with no episode of its own.
 */
export type FillerKind = 'filler' | 'film' | 'mixed' | 'recap' | 'special'

/**
 * Where an entry sits in the run: its own episode, or the episode it is
 * watched after when it has no number.
 */
export type FillerPlace = { after: number } | { episode: number }

/** An entry the reader has reached, or has lifted the fog on. */
export type FillerRowView = FillerPlace
  & Gated & {
    /** The entry's index in the list: public, and stable for one deploy. */
    handle: string
    kind: FillerKind
    summary: string
    title: string
    /** Release or air date, `YYYY-MM-DD`, for an entry with no number. */
    released?: string
  }

/** An entry under fog: its place and kind, and the handle that lifts it. */
export type CoveredFillerRow = FillerPlace
  & Gated & { handle: string; kind: FillerKind }

/** One row of the catalogue, already decided by the server. */
export type FillerSlot =
  | { covered: CoveredFillerRow; open: false }
  | { open: true; record: FillerRowView }

/**
 * A run of rows. A whole filler arc is a run with a name, `null` while its
 * first episode is under fog; anything else is a run with no name at all.
 */
export interface FillerRun {
  name: null | string | undefined
  rows: FillerSlot[]
}

/** The rows that fall inside one canon arc, the arc named once it is open. */
export interface FillerGroup extends Gated {
  name: null | string
  runs: FillerRun[]
}

/** A stretch of episodes that can be skipped whole. Inclusive. */
export interface SkipRange {
  first: number
  last: number
}

/** One numbered episode that is not plain canon, for the strip. */
export interface FillerMark {
  episode: number
  kind: FillerKind
}

/** The whole page. */
export interface FillerPageView {
  /** The last episode the strip draws. */
  aired: number
  groups: FillerGroup[]
  marks: FillerMark[]
  /** How many entries have no episode number: films and specials. */
  ranges: SkipRange[]
  unnumbered: number
}
