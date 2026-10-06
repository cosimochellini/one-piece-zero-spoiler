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

import type { Bookmark } from '~/lib/progress/episode'

/** The ink a stroke takes. Structurally `Role` from `~/data/art/stroke`. */
export type StrokeRole = 'accent' | 'ambient' | 'soft'

/** One stroke of a drawing. Structurally `Stroke` from `~/data/art/stroke`. */
export interface Stroke {
  d: string
  dashed?: boolean
  role?: StrokeRole
  transform?: string
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
export type EntityKind = 'arc' | 'character' | 'fruit' | 'place' | 'ship'

/**
 * Where a character stands the last time the story said so.
 *
 * A closed vocabulary rather than prose, because the row is the same sentence
 * on every page and the reader's language decides how it is written: the
 * labels live in the dictionaries, so Italian can say `In vita` without
 * agreeing with a gender the archive does not file.
 *
 * `captured` is held by someone right now, `imprisoned` is serving a
 * sentence, and `missing` is a character the story has lost sight of —
 * distinct from `unknown`, which is a fate nobody on the page can state.
 */
export type CharacterStatus =
  | 'alive'
  | 'captured'
  | 'deceased'
  | 'imprisoned'
  | 'missing'
  | 'presumed-dead'
  | 'unknown'

/**
 * Which of the three kinds a devil fruit is. Declared here rather than in
 * `~/data`, like `PlaceForm`, because the specimen sheet prints it.
 */
export type FruitForm = 'logia' | 'paramecia' | 'zoan'

/**
 * A drawing already resolved: the strokes themselves, never a key into a
 * table. The archive's own test holds that `entity.visual.art === entity.id`
 * (`src/data/entities.test.ts`), so the drawing keys *are* the name slugs —
 * a keyed map could not be shipped even with the records left behind.
 */
export interface Drawing {
  strokes: Stroke[]
  tint: TintId
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
export interface CoveredRecord {
  handle: string
  kind: EntityKind
  revealedAtChapter: number
  revealedAtEpisode: number
}

/**
 * One place on a page where a record may or may not be shown. The server has
 * already decided; a component never decides again, which is what keeps the
 * fog from disagreeing with itself for a frame after the bookmark moves.
 */
export type Slot<T> =
  { covered: CoveredRecord; open: false } | { open: true; record: T }

/** A record the reader has reached. */
export interface RecordView {
  id: string
  kind: EntityKind
  /** The route locale's name, as displayed. */
  name: string
  revealedAtChapter: number
  revealedAtEpisode: number
  visual: Drawing
}

/** A character, as a crest or a tile draws it. No summary: neither prints one. */
export interface CharacterView extends RecordView {
  role?: string
}

/** A waypoint on the landing chart, which does print a summary. */
export interface WaypointView extends RecordView {
  summary: string
}

/**
 * A record whose searchable surface the server has already folded: what is
 * shown, and what is only ever matched against.
 *
 * Folding on the server is not only about the work: a character's epithets are
 * gated there too, so an epithet the reader has not reached is not in the
 * payload at all — where the archive used to be in the browser whole and the
 * search merely declined to match the entries above the reader.
 */
export interface Searchable {
  /**
   * The displayed name, folded. A match is only marked when this is the same
   * length as the name it was folded from, so an index into it can never
   * point at the wrong letters.
   */
  folded: string
  name: string
  /**
   * The other locale's name, and for a character the epithets the reader has
   * reached. Searched, never shown, so only the folded form travels.
   */
  aliases: string[]
}

/** A character the search field can answer for. */
export type SearchableCharacter = CharacterView & Searchable

/** Where in a displayed name a search matched. */
export interface NameMatch {
  highlight: [number, number] | null
  matches: boolean
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
export interface CharacterFacts {
  affiliation?: string
  /**
   * The fruits the reader has been told this character ate, each with the
   * id of its own page. A row is only ever built from a timeline entry the
   * reader has reached, and a fruit opens no later than the entry that
   * names it, so a link here always leads somewhere the reader may go.
   */
  devilFruit?: FruitLink[]
  epithet?: string
  mode: 'facts'
  origin?: string
  /** Where the character stands at the last entry the reader has reached. */
  status?: CharacterStatus
  /** In Berry, ungrouped. */
  bounty?: number
}

/** A fruit named on another record's page, and the page it leads to. */
export interface FruitLink {
  id: string
  name: string
}

/**
 * One run of a story's paragraph: plain words, or a character's name that
 * leads to their page.
 *
 * The link is safe to print by construction: a story is only in the payload
 * once the reader has reached its episode, and a story may only name a
 * character filed no later than that episode, so the linked page is one the
 * reader is already allowed to open.
 */
export type ProseSegment =
  { id: string; kind: 'link'; name: string } | { kind: 'text'; text: string }

/**
 * One story the reader has reached, resolved to their language. Its two
 * thresholds are the story's gate (`gateOf` in `~/data/reveal`): its episode,
 * and the chapter it declares or else the first one that reaches the episode,
 * never before the character's own, so a manga reader's mark reads in
 * chapters. Structurally satisfies `Gated`
 * (`~/lib/progress/spoiler`), so its mark is named by `useThreshold`.
 */
export interface ChronicleEntry {
  body: ProseSegment[]
  revealedAtChapter: number
  revealedAtEpisode: number
  title: string
}

/**
 * A character's chronicle as it stands at the reader's bookmark: every story
 * they have reached, in episode order, and none they have not. A story above
 * the reader's episode is not in the payload — there is no placeholder and
 * no count, because "three more stories under fog" is itself the news that
 * something happens.
 */
export interface CharacterChronicle {
  entries: ChronicleEntry[]
  mode: 'chronicle'
}

/**
 * A devil fruit as the specimen sheet draws it: a record, its kind, the
 * sentence that says what the power does, and its folded searchable surface.
 */
export interface FruitView extends RecordView, Searchable {
  form: FruitForm
  summary: string
}

/**
 * One plate of the specimen sheet: the fruits of one kind, open first and
 * covered after, and how many the archive files of that kind either way.
 */
export interface FruitBandView {
  covered: CoveredRecord[]
  form: FruitForm
  open: FruitView[]
  total: number
}

/** The specimen sheet: the three plates, and how many fruits are filed. */
export interface FruitSheetView {
  bands: FruitBandView[]
  filed: number
}

/** A devil fruit's own page. */
export interface FruitDetail {
  slot: Slot<FruitView>
}

/** The band that names who ate a fruit, each eater under their own fog. */
export interface FruitEatersView {
  eaters: Slot<CharacterView>[]
  mode: 'eaters'
}

/**
 * The stretches of sea the route crosses, and the two bands that cross the
 * route itself: the Calm Belt either side of the Grand Line, and the Red Line
 * across it.
 */
export type Sea =
  'calm-belt' | 'east-blue' | 'grand-line' | 'new-world' | 'red-line'

/** What kind of place a record is, as the log would put it. */
export type PlaceForm =
  | 'archipelago'
  | 'city'
  | 'fortress'
  | 'island'
  | 'prison'
  | 'region'
  | 'restaurant'
  | 'sea'
  | 'ship'
  | 'town'
  | 'train'
  | 'village'

/**
 * One entry of the ship's log.
 *
 * The dossier fields are nullable because a place may be filed before its
 * dossier is written; the log then shows the name and the sentence and
 * leaves the ledger out, which is what the page did before.
 */
export interface PortView extends RecordView {
  dossier: null | PortDossier
  summary: string
}

/** What the log knows about a port beyond its name and its sentence. */
export interface PortDossier {
  form: PlaceForm
  sea: Sea
  /**
   * The arc this port is filed under, named outright rather than veiled: an
   * arc opens no later than any place filed under it, so an open port always
   * has an open arc.
   */
  arc: null | string
  landmark: string
  log: string
  /** The records filed here, each with its own fog already decided. */
  filedHere: Slot<RecordView>[]
}

/** A ship the crew sails, as the band above the log draws it. */
export interface ShipView extends RecordView {
  dossier: ShipEntry
  summary: string
}

/** What the log knows about a ship beyond its name and its sentence. */
export interface ShipEntry {
  builder: string
  /**
   * The place the crew receives her at, named outright: it opens no later
   * than the ship, which a data test holds.
   */
  launched: null | string
  log: string
  /**
   * The latest fate the reader has reached. Absent rather than `undefined`
   * when there is none, so the row is not drawn.
   */
  fate?: string
  /**
   * The places she has reached by the reader's bookmark, and none past it.
   * There is no covered tile and no count: a place under fog would still
   * print its episode, and that alone would say how long she lasts.
   */
  ports: RecordView[]
}

/** One shelf of the signal book: an arc and the characters first met along it. */
export interface ShelfView {
  arc: Slot<RecordView>
  /** Every character on the shelf, open or not, for the count line. */
  covered: CoveredRecord[]
  open: SearchableCharacter[]
  total: number
}

/** One story on the home page: a reached entry, and whose page it leads to. */
export interface HomeStory extends ChronicleEntry {
  subject: { id: string; name: string }
}

/**
 * The home page at the reader's bookmark, or at the first episode when there
 * is none. Nothing in it is under fog: every story concluded and every
 * character named is one the reader has reached, so there is nothing to
 * cover and no handle to lift.
 */
export interface HomeView {
  /** The stories are the previous arc's, because this one has none yet. */
  before: boolean
  /** The arc's leads the stories name most, most named first, at most six. */
  cast: CharacterView[]
  /** The arc the reader is in: the last one that opens at or before them. */
  saga: WaypointView
  /** The reader's bookmark, which the fold states in the reader's unit. */
  point: NonNullable<Bookmark>
  /** The stories concluded in the arc up to the bookmark, most recent first. */
  stories: HomeStory[]
}

/** The landing chart: the waypoints open to the reader, then the covered. */
export interface ChartView {
  covered: CoveredRecord[]
  filed: number
  open: WaypointView[]
}

/**
 * The landing page: the chart for a reader with no bookmark, the home page
 * for one with a bookmark.
 */
export type LandingView = { chart: ChartView } | { home: HomeView }

/**
 * The document title and description, resolved on the server.
 *
 * A title is set before any component runs, so this is the one place a
 * covered name could leak into a page that is otherwise clean. The route's
 * `head` spells these out and derives nothing.
 */
export interface DocumentHead {
  description: string
  title: string
}

/** Where a record sits on the route, and what lies either side of it. */
export interface RoutePositionView {
  /** Zero-based; the page prints it plus one. */
  index: number
  openCount: number
  total: number
  /** The ring's colour, or `null` while this record is under fog. */
  next: null | Slot<RecordView>
  previous: null | Slot<RecordView>
  tint: null | TintId
}

/** A character's own page. */
export interface CharacterDetail {
  chronicle: CharacterChronicle
  facts: CharacterFacts
  log: null | string
  slot: Slot<CharacterView & { summary: string }>
}
