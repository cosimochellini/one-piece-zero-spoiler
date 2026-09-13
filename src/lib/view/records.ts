/**
 * What a page is allowed to know about a record.
 *
 * The archive is 800 KB of TypeScript and it must not reach the browser, so
 * no component may name `~/data` (issue #12). Everything a page draws arrives
 * through these shapes instead: strings already resolved to the route locale,
 * drawings already resolved to their strokes, and — for a record the reader
 * has not reached — nothing but the two thresholds the page prints out loud.
 *
 * The vocabulary both sides share — a stroke, a tint, a kind, a sea — is
 * declared here and imported by `~/data`, rather than the other way round.
 * `ArtId` is `keyof typeof DRAWINGS`, so `~/data/types` carries a type derived
 * from a 195 KB value, and one careless edit turning an `import type` into an
 * inline `import { type … }` is enough, under `isolatedModules`, to make that
 * a live module edge and put the archive back in the bundle. Declaring it
 * here means no client module ever has cause to name `~/data` at all.
 */

/** The ink a stroke takes. Structurally `Role` from `~/data/art/stroke`. */
export type StrokeRole = 'accent' | 'ambient' | 'soft'

/** One stroke of a drawing. Structurally `Stroke` from `~/data/art/stroke`. */
export type Stroke = {
  readonly d: string
  readonly dashed?: boolean
  readonly role?: StrokeRole
  readonly transform?: string
}

/* eslint-disable perfectionist/sort-union-types -- the hue wheel is the order `tint` is written in, and it is the point: alphabetising hides which hues sit next to each other. */
/** The hue a drawing's main stroke takes. One per record, from `tint` in the tokens. */
export type TintId =
  | 'red'
  | 'vermilion'
  | 'orange'
  | 'ocher'
  | 'yellow'
  | 'acid'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'azure'
  | 'blue'
  | 'ice'
  | 'lavender'
  | 'violet'
  | 'magenta'
  | 'pink'
  | 'flamingo'
  | 'sand'
  | 'wine'
  | 'ivory'
/* eslint-enable perfectionist/sort-union-types -- back to alphabetical for every other union. */

/**
 * The kinds of record the archive files. `kind` exists so a generic list can
 * label a record without a lookup table per page.
 */
export type EntityKind = 'arc' | 'character' | 'place' | 'ship'

/**
 * A drawing already resolved: the strokes themselves, never a key into a
 * table. The archive's own test holds that `entity.visual.art === entity.id`
 * (`src/data/entities.test.ts`), so the drawing keys *are* the name slugs —
 * a keyed map could not be shipped even with the records left behind.
 */
export type Drawing = {
  readonly strokes: readonly Stroke[]
  readonly tint: TintId
}

/**
 * Everything a record under fog is allowed to say about itself.
 *
 * The two thresholds, because the page already prints them — "opens at
 * episode 392" is the promise, not the spoiler — and the kind, because it is
 * already printed outside the veil on the chart and on a record tile.
 *
 * No id. The id is the name slug, so an id in a `key`, an `href` or a DOM
 * `id` spells the name the fog is for. `handle` is the opaque address the
 * peek server function answers to; see `~/server/archive/handle`.
 *
 * Structurally satisfies `Gated` (`~/lib/progress/spoiler`), so it can be
 * handed to `useThreshold` exactly as a record could.
 */
export type CoveredRecord = {
  readonly handle: string
  readonly kind: EntityKind
  readonly revealedAtChapter: number
  readonly revealedAtEpisode: number
}

/**
 * One place on a page where a record may or may not be shown. The server has
 * already decided; a component never decides again, which is what keeps the
 * fog from disagreeing with itself for a frame after the bookmark moves.
 */
export type Slot<T> =
  | { readonly covered: CoveredRecord; readonly open: false }
  | { readonly open: true; readonly record: T }

/** A record the reader has reached. */
export type RecordView = {
  readonly id: string
  readonly kind: EntityKind
  /** The route locale's name, as displayed. */
  readonly name: string
  readonly revealedAtChapter: number
  readonly revealedAtEpisode: number
  readonly visual: Drawing
}

/** A character, as a crest or a tile draws it. No summary: neither prints one. */
export type CharacterView = RecordView & { readonly role?: string }

/** A waypoint on the landing chart, which does print a summary. */
export type WaypointView = RecordView & { readonly summary: string }

/**
 * A character with its searchable surface already folded.
 *
 * Folding on the server is not only about the work: the epithets are gated
 * there too, so an epithet the reader has not reached is not in the payload
 * at all. Today the whole timeline is on the client and `matchName` merely
 * declines to match the future ones.
 */
export type SearchableCharacter = CharacterView & {
  /**
   * The displayed name, folded. Empty when folding changed its length, so an
   * index into it can never point at the wrong letters.
   */
  readonly folded: string
  /**
   * The other locale's name and the epithets the reader has reached, folded.
   * Searched, never shown, so only the folded form travels.
   */
  readonly aliases: readonly string[]
}

/** Where in a displayed name a search matched. */
export type NameMatch = {
  readonly highlight: null | readonly [number, number]
  readonly matches: boolean
}

/**
 * A character's dossier as it stands at the reader's bookmark.
 *
 * Every fact is a timeline in the archive, and only the latest entry the
 * reader has reached is here. That is stricter than it used to be: the whole
 * timeline used to be in the browser and the component merely declined to
 * draw the future rows, so a bounty the reader had not reached was a
 * devtools panel away.
 *
 * The labels and the digit grouping stay in the component — they are the
 * reader's language, not the archive's.
 */
export type CharacterFacts =
  | {
      readonly affiliation?: string
      readonly devilFruit?: string
      readonly epithet?: string
      readonly mode: 'facts'
      readonly origin?: string
      /** In Berry, ungrouped. */
      readonly bounty?: number
    }
  /** The timelines count in episodes, so a chapter reader reaches none. */
  | { readonly mode: 'chapterNote' }

/** The three stretches of sea the route crosses. */
export type Sea = 'east-blue' | 'grand-line' | 'new-world'

/** What kind of place a record is, as the log would put it. */
export type PlaceForm = 'island' | 'restaurant' | 'town' | 'village'

/**
 * One entry of the ship's log.
 *
 * The dossier fields are nullable because a place may be filed before its
 * dossier is written; the log then shows the name and the sentence and
 * leaves the ledger out, which is what the page did before.
 */
export type PortView = RecordView & {
  readonly dossier: null | PortDossier
  readonly summary: string
}

/** What the log knows about a port beyond its name and its sentence. */
export type PortDossier = {
  readonly form: PlaceForm
  readonly sea: Sea
  /**
   * The arc this port is filed under, named outright rather than veiled: an
   * arc opens no later than any place filed under it, so an open port always
   * has an open arc.
   */
  readonly arc: null | string
  readonly landmark: string
  readonly log: string
  /** The records filed here, each with its own fog already decided. */
  readonly filedHere: readonly Slot<RecordView>[]
}

/** One shelf of the signal book: an arc and the characters first met along it. */
export type ShelfView = {
  readonly arc: Slot<RecordView>
  /** Every character on the shelf, open or not, for the count line. */
  readonly covered: readonly CoveredRecord[]
  readonly open: readonly SearchableCharacter[]
  readonly total: number
}

/**
 * The landing chart. Open first, then covered: the two are a prefix and a
 * suffix of one route, which is what lets the reader's position be a single
 * line across it rather than a marker interpolated along a path.
 */
export type ChartView = {
  readonly covered: readonly CoveredRecord[]
  readonly filed: number
  readonly open: readonly WaypointView[]
}

/**
 * The document title and description, resolved on the server.
 *
 * A title is set before any component runs, so this is the one place a
 * covered name could leak into a page that is otherwise clean. The route's
 * `head` spells these out and derives nothing.
 */
export type CharacterHead = {
  readonly description: string
  readonly title: string
}

/** Where a record sits on the route, and what lies either side of it. */
export type RoutePositionView = {
  /** Zero-based; the page prints it plus one. */
  readonly index: number
  readonly openCount: number
  readonly total: number
  /** The ring's colour, or `null` while this record is under fog. */
  readonly next: null | Slot<RecordView>
  readonly previous: null | Slot<RecordView>
  readonly tint: null | TintId
}

/** A character's own page. */
export type CharacterDetail = {
  readonly facts: CharacterFacts
  readonly log: null | string
  readonly slot: Slot<CharacterView & { readonly summary: string }>
}
