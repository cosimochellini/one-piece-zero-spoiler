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
import type { ChartPoint } from '~/lib/view/chart'
import type { FillerAhead } from '~/lib/view/filler'

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
 * Who a character stands with, as a group the pages can sort by: the closed
 * vocabulary behind the prose of an affiliation entry, which says the same
 * thing in its own words. Like `CharacterStatus`, the labels live in the
 * dictionaries.
 *
 * A group has an id when at least two fruit eaters stand in it; a crew or a
 * kingdom of one, a former member, a prisoner and a vague line are
 * `independent`, which never sits next to another id. A tag is never more
 * specific than the prose of its entry: Teach's "Former Warlord" is
 * `independent`, even though the reader knows his crew.
 */
export type Faction =
  | 'alabasta'
  | 'baroque-works'
  | 'beasts-pirates'
  | 'big-mom-pirates'
  | 'blackbeard-pirates'
  | 'buggy-pirates'
  | 'cp0'
  | 'cp9'
  | 'cross-guild'
  | 'donquixote-pirates'
  | 'emperors'
  | 'galley-la'
  | 'independent'
  | 'knights-of-god'
  | 'kozuki-alliance'
  | 'kozuki-family'
  | 'kuja-pirates'
  | 'kurozumi-family'
  | 'marines'
  | 'nine-red-scabbards'
  | 'punk-hazard'
  | 'revolutionary-army'
  | 'straw-hat-grand-fleet'
  | 'straw-hat-pirates'
  | 'thriller-bark-pirates'
  | 'tontatta'
  | 'warlords'
  | 'whitebeard-pirates'
  | 'world-government'

/**
 * Which of the three kinds a devil fruit is. Declared here rather than in
 * `~/data`, like `PlaceForm`, because the specimen sheet prints it.
 */
export type FruitForm = 'logia' | 'paramecia' | 'zoan'

/**
 * A drawing already resolved: the strokes themselves, never a key into a
 * table. The archive's own test holds that `entity.visual.art === entity.id`
 * (`src/data/series/one-piece/entities.test.ts`), so the drawing keys *are* the name slugs —
 * a keyed map could not be shipped even with the records left behind.
 */
export interface Drawing {
  strokes: Stroke[]
  tint: TintId
  /**
   * Set when the strokes were left behind: a long list sends the tint alone
   * for the records far down it, and the page asks for their strokes by id
   * once they near the screen (`loadDrawings`). The strokes are then empty.
   */
  deferred?: true
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
 * thresholds are the story's gate (`~/data/series/one-piece/dated`): its episode,
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
 * they have reached, latest first, and none they have not. A story above
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
 * Someone who ate a fruit, as its tile prints them: a crest and a name that
 * lead to their page. Only an eater the reader has reached is ever sent; a
 * covered one is dropped, not slotted, so a tile cannot count them.
 */
export type EaterView = Pick<RecordView, 'id' | 'name' | 'visual'>

/**
 * A fruit as its tile in the album draws it: the fruit, and the eaters the
 * reader has reached, earliest first. Their names in both locales are among
 * the fruit's aliases too, so a search for an eater finds the fruit.
 */
export interface SpecimenView extends FruitView {
  eaters: EaterView[]
}

/**
 * One plate of the specimen sheet: the fruits of one kind, open first and
 * covered after, and how many the archive files of that kind either way.
 */
export interface FruitBandView {
  covered: CoveredRecord[]
  form: FruitForm
  open: SpecimenView[]
  total: number
}

/** A fruit a group points at: the id of its open tile in the album. */
export interface FruitRef {
  id: string
}

/**
 * The marquee over the album: the saga the bookmark falls in, and the open
 * fruits whose reveal falls inside it, newest last. Only open fruits, so the
 * count is the saga so far and never the saga's total. With none yet, the
 * latest open fruit before the saga, to point back to. Records rather than
 * refs: the marquee is in the page's first answer, and the album is not.
 */
export interface FruitMarqueeView {
  fruits: FruitView[]
  /** Its saga's place among the sagas reached: the saga view's last group. */
  group: number
  last: FruitView | null
  saga: string
}

/**
 * One saga the bookmark has reached, as the saga view groups it: its name,
 * its open fruits by id and its covered ones by handle, each in the reader's
 * order. The records themselves are the plates'.
 */
export interface FruitSagaView {
  covered: string[]
  open: FruitRef[]
  saga: string
}

/**
 * An open fruit in one faction's group: its id, and which of its tile's open
 * eaters put it there, as places in that tile's `eaters`, earliest first.
 */
export interface FruitFactionRef extends FruitRef {
  eaters: number[]
}

/**
 * One faction as the faction view groups it: the faction (`null` for the
 * open eaters with no affiliation reached yet) and its open fruits, in the
 * reader's order. Only open eaters and the entries the reader has reached
 * count, so a group no open eater fills is not sent at all.
 */
export interface FruitFactionView {
  faction: Faction | null
  open: FruitFactionRef[]
}

/**
 * One line of a fruit's history: the story names it, someone eats it, or
 * someone who ate it dies or is presumed dead. Its two thresholds are its
 * gate, so it satisfies `Gated` and `useThreshold` prints its mark.
 */
export interface FruitHistoryEntry {
  event: 'deceased' | 'eaten' | 'named' | 'presumed-dead'
  revealedAtChapter: number
  revealedAtEpisode: number
  /** The eater, for every event but `named`. Always one the reader has met. */
  who?: Pick<RecordView, 'id' | 'name'>
}

/**
 * What one of a fruit's drawings shows: the fruit and its power, the real
 * fruit once the story shows it, or the power as an awakening changes it.
 */
export type FruitLook = 'awakening' | 'power' | 'real'

/** One of the drawings a fruit has had, named by what it shows. */
export interface FruitDrawing {
  look: FruitLook
  strokes: Stroke[]
}

/** A devil fruit's own page. */
export interface FruitDetail {
  /**
   * Every drawing of the fruit the reader has reached, oldest first; the
   * last is the one the stage draws. Empty under fog and while only one is
   * reached, so a drawing past the bookmark is never sent and the page has
   * nothing to switch between.
   */
  drawings: FruitDrawing[]
  /**
   * The history the reader has reached, oldest first: nothing past the
   * bookmark, and no count of it. Empty under fog.
   */
  history: FruitHistoryEntry[]
  /** The saga the story first names it in; `null` under fog. */
  saga: null | string
  /**
   * The open fruits of the same saga nearest this one, this one left out.
   * Empty under fog, and when fewer than two would be on it.
   */
  sagaRail: Slot<FruitView>[]
  slot: Slot<FruitView>
}

/** The band that names who ate a fruit, each eater under their own fog. */
export interface FruitEatersView {
  eaters: Slot<CharacterView>[]
  mode: 'eaters'
}

/**
 * One Piece's regions: the stretches of sea the route crosses, and the two
 * bands that cross the route itself: the Calm Belt either side of the Grand
 * Line, and the Red Line across it. A page takes a region as a word of the
 * series' own (`PlaceWords` in `./placeWords`).
 */
export type Sea =
  'calm-belt' | 'east-blue' | 'grand-line' | 'new-world' | 'red-line'

/** What kind of place a One Piece record is, as the log would put it. */
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
  /** Where the port sits on the sea chart; `null` for a record not a place. */
  chart: ChartPoint | null
  dossier: null | PortDossier
  summary: string
}

/**
 * A series' own words for the places a page prints, in the reader's locale:
 * only the regions and forms its open places use, so a page never names one
 * the reader has not reached. One Piece's pages carry none: its dictionaries
 * label its words (`sea.*`, `form.*`).
 */
export interface PlaceWordsView {
  /** The region picker's first option: every region. */
  allRegions: string
  forms: Partial<Record<string, string>>
  /** What a region is called: the picker's name, and a place's fact. */
  region: string
  regions: Partial<Record<string, string>>
}

/** What the log knows about a port beyond its name and its sentence. */
export interface PortDossier {
  /** Its form, one of the series' own words (`PlaceWords`). */
  form: string
  /** Its region, one of the series' own words: a sea in One Piece. */
  sea: string
  /**
   * The labels of its region and its form, for a series that labels its
   * words itself; absent for One Piece, whose dictionaries label them.
   */
  words?: PlaceWordsView
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
  /** Filler in the reader's next few episodes, or `null` with none. */
  filler: FillerAhead | null
  /** The arc the reader is in: the last one that opens at or before them. */
  saga: WaypointView
  /** The reader's bookmark, which the fold states in the reader's unit. */
  point: NonNullable<Bookmark>
  /** The stories concluded in the arc up to the bookmark, most recent first. */
  stories: HomeStory[]
}

/**
 * A value that holds from one point of the story on, gated like a record:
 * the onboarding's dial picks the latest step it has reached.
 */
export interface Step<T> {
  revealedAtChapter: number
  revealedAtEpisode: number
  value: T
}

/**
 * One East Blue record as the onboarding's dial wakes it: its thresholds,
 * and every dated fact about it up to the end of East Blue. Its artwork
 * arrives separately when the preview enters the viewport.
 */
export interface DemoEntry {
  /** Who the character is in the story's own words, on every step. */
  affiliation: Step<string>[]
  bounty: Step<number>[]
  epithet: Step<string>[]
  id: string
  kind: EntityKind
  name: string
  revealedAtChapter: number
  revealedAtEpisode: number
  role?: string
}

/** Each demo record's drawing and redrawings, bounded in both story units. */
export type DemoDrawings = Record<string, Step<Drawing>[]>

/**
 * The landing page for a visitor with no bookmark: East Blue, which the dial
 * wakes up point by point, and a tail of covered records past it.
 *
 * Nothing in it is past the end of East Blue in either unit. The tail says
 * only what a covered record may, and `fogged` is a count.
 */
export interface OnboardingView {
  /** The arcs of East Blue, in route order. */
  arcs: DemoEntry[]
  /** Their leads, in the order they first appear. */
  cast: DemoEntry[]
  /** The chapter each East Blue episode reaches, index 0 for episode 1. */
  chapterAt: number[]
  /** How many entries of the wiki lie past East Blue. */
  fogged: number
  /** East Blue's places and its ship, in the order they first appear. */
  places: DemoEntry[]
  /** Where the dial starts: the trial point, if the visitor is on one. */
  start: Bookmark
  /** The first few covered records past East Blue, as silhouettes. */
  tail: CoveredRecord[]
}

/**
 * The landing page: the onboarding for a visitor with no bookmark, the home
 * page for a reader with one.
 */
export type LandingView = { home: HomeView } | { onboarding: OnboardingView }

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

/** A character's own page. */
export interface CharacterDetail {
  chronicle: CharacterChronicle
  facts: CharacterFacts
  log: null | string
  slot: Slot<CharacterView & { summary: string }>
}
