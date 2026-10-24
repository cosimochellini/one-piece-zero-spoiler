// The record shapes and the archive contract every series fills in. Nothing
// here is taken from a series: a series narrows these shapes for its own
// records (One Piece's `Saga` holds its drawing and fruit ids to the ones it
// files) and hands its archive to the server through `SeriesArchive`.
import type { Reveal } from '~/data/reveal'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Series } from '~/lib/progress/series'
import type { Gated, Source } from '~/lib/progress/spoiler'
import type { ChartPoint } from '~/lib/view/chart'
import type { FillerKind } from '~/lib/view/filler'
import type {
  CharacterStatus,
  EntityKind,
  Faction,
  FruitForm,
  FruitLook,
  PlaceForm,
  Sea,
  Stroke,
  TintId,
} from '~/lib/view/records'

/**
 * A string in every published locale. Total over `Locale` on purpose: a record
 * that is missing a translation is a typecheck failure rather than a page with
 * a blank line on it.
 */
export type LocalizedText = Record<Locale, string>

/**
 * What a record shows: a line drawing and the one colour its main stroke
 * takes. No photographs and no official artwork appear anywhere on the site.
 * `art` is the id of the record's drawing in its series' `art` folder; a
 * series narrows it to the ids it draws, so a record cannot point at a
 * drawing that does not exist.
 */
export interface Visual {
  art: string
  tint: TintId
}

/**
 * One archive record.
 *
 * `revealedAtEpisode` and `revealedAtChapter` are the whole spoiler system:
 * the earliest anime episode, and the earliest manga chapter, from which this
 * record is safe to read. Both are inclusive, and both are stored on the
 * record rather than derived, because "when does this become safe" is an
 * editorial judgement, not something a script can work out. A devil fruit is
 * the exception: its judgement is made once, on the dossier entry that names
 * it, and `~/data/series/one-piece/entities` reads both thresholds off that
 * (`OnePieceFruit` in its `records/saga`). A reader who counts in seasons is filed at an absolute episode
 * through `~/lib/progress/seasons`, so no third threshold is kept.
 *
 * The two thresholds are independent: the anime and the manga do not always
 * introduce a record in the same order, so a list is sorted by whichever
 * one the reader counts in (`orderByMode` in `~/data/series/one-piece/characters`).
 *
 * The shape satisfies `Gated` from `~/lib/progress/spoiler` structurally, so
 * entities can be passed straight to `reveal(bookmark).sees` (`~/data/reveal`).
 */
export interface Entity {
  id: string
  kind: EntityKind
  name: LocalizedText
  revealedAtChapter: number
  revealedAtEpisode: number
  /**
   * Set on a record one source alone tells: `anime` for an anime-original
   * character, `manga` for one the anime never shows. Absent means both. A
   * reader who counts in the other source never receives it: no open card,
   * no covered one, no count, no handle (`~/data/source`). Both thresholds
   * are still filed, the other one only to order and shelve the record.
   */
  source?: Source
  summary: LocalizedText
  /**
   * Set on a record whose two thresholds are too far out of step to say how
   * far a chapter reaches into the anime: Shiki is episode 425 but chapter
   * 962, and as an anchor of `~/data/series/one-piece/chapter-table` he held every chapter
   * from 599 to 961 at episode 424. The table leaves such a record out, and
   * a data test holds that nothing dated names it before its own chapter.
   */
  unanchored?: true
  visual: Visual
  /**
   * The episode from which the show says this record's name before the
   * record itself opens: Fish-Man Island is a destination at 320 and a
   * heading at 526. Text dated at or after it may name the record in plain
   * words; text before it may not. Below `revealedAtEpisode` by definition,
   * which a data test holds, and read by the leak scan alone.
   */
  nameSaidAt?: number
  /**
   * Set on a record whose name is an ordinary word of the prose — "King" is
   * in "King of the Pirates" from episode 1 — so plain text is never scanned
   * for it. A marker naming it is still held to the marker rules.
   */
  commonWord?: true
}

/**
 * One fact as it stands from a given episode. A timeline of them is what a
 * dossier field holds: the reader's dial picks the last entry it has reached,
 * so a bounty raised at episode 500 is not on the page of a reader at 300.
 *
 * `chapter` is the manga chapter that tells the fact, set only where it has
 * been checked against a source. Without it a chapter reader reaches the
 * entry at the first chapter that reaches its episode (`~/data/series/one-piece/dated`);
 * with it, at that chapter, and the chapter table then holds every earlier
 * chapter below the episode, so the fix sits on the datum rather than in a
 * list far from it.
 */
export interface Dated<T> {
  chapter?: number
  episode: number
  /**
   * Set on a fact of a record both sources tell that one of them alone tells,
   * as on a record (`Entity.source`): its gate carries it, and a reader of
   * the other source never reaches it. On a record of one source only it
   * may only repeat the record's.
   */
  source?: Source
  value: T
}

/** Entries in ascending episode order; the first no earlier than the record's threshold. */
export type Timeline<T> = Dated<T>[]

/**
 * One affiliation entry: the prose, and the groups it names as `Faction` ids
 * the pages can sort by. The tags change exactly when the prose does, because
 * they sit on the same entry, and say no more than it: a group the prose has
 * not named is not a tag. Every fruit eater's entries carry them (a data test
 * holds it); a character who never ate a fruit may leave them out for now.
 */
export interface Affiliation extends Dated<LocalizedText> {
  factions?: Faction[]
}

/**
 * One origin entry: the prose, and the filed place it names, as a place
 * record's id, so the place's page can say who comes from it. Set only where
 * the prose names one of the filed places, or clearly means it ("Drum
 * Kingdom" is Drum Island); a sea or an island the archive does not file
 * names none. An entry that names a place carries the chapter that tells it,
 * checked like the episode, because the place's page opens it at that pair.
 * Data tests hold both.
 */
export interface Origin extends Dated<LocalizedText> {
  place?: string
}

/**
 * One story of a character's chronicle: a short title and one paragraph, each
 * in every locale.
 *
 * The body may name another character with a marker — `[[roronoa-zoro]]`
 * prints that record's name in the page's language, `[[roronoa-zoro|Zoro]]`
 * prints the text after the bar — and the server turns each into a link to
 * the character's own page. The title carries no markers. A marker may only
 * name a character filed no later than the story's episode, which the data
 * tests hold: a story is read by a viewer who has reached its episode, and
 * must not introduce them to anyone they have not met.
 */
export interface Story {
  body: LocalizedText
  title: LocalizedText
}

/**
 * What the archive knows about a character beyond the name and the sentence.
 *
 * `role` and `log` are frozen at the threshold, like the summary: they say
 * what a viewer who has just met the character could say. The timelines are
 * not frozen. Each entry is a fact from the episode it is learned in, and the
 * page shows the latest one the reader has reached, so Robin's affiliation
 * changes when she changes it and a bounty rises when the poster is printed.
 * A fact with no entry yet is simply not on the page.
 */
export interface CharacterDossier {
  affiliation: Affiliation[]
  /**
   * What has happened to the character, one story per turning point, each
   * filed at the first episode by whose end a viewer knows all of it. Unlike
   * the other timelines the page prints every story the reader has reached,
   * not only the last, and opens at the character's own threshold so the band
   * itself never announces that something is about to happen.
   *
   * Absent means no chronicle has been written yet, and the page then draws
   * no band at all.
   */
  chronicle?: Timeline<Story>
  /**
   * The fruits the story has said this character ate, by id rather than by
   * name: one entry may carry two, because one episode may say two. The name
   * the page prints is the fruit record's own, so the two can never drift.
   * One Piece's alone (`features.fruits`), which narrows the ids to the
   * fruits it files.
   */
  devilFruit?: Timeline<string[]>
  epithet?: Timeline<LocalizedText>
  log: LocalizedText
  origin?: Origin[]
  role: LocalizedText
  /**
   * Where the character stands, and from which episode. A vocabulary rather
   * than prose so the page can say it in the reader's language: the labels
   * are in the dictionaries, not here.
   *
   * Absent means the archive has not filed a fate for this character, and the
   * page then prints no row at all — an empty "Status" line would say that
   * something is coming, which is the spoiler itself.
   */
  status?: Timeline<CharacterStatus>
  /** In Berry. One Piece's alone (`features.bounty`). */
  bounty?: Timeline<number>
}

/**
 * Every dated field of a record, by what an entry of it holds: the character
 * dossiers' timelines, derived from the dossier so that a new one does not
 * compile until a series reads it, a ship's fate and a redrawing.
 */
export type Fields = {
  [
    K in keyof CharacterDossier as NonNullable<CharacterDossier[K]> extends (
      Timeline<unknown>
    ) ?
      K
    : never
  ]-?: NonNullable<CharacterDossier[K]> extends Timeline<infer V> ? V : never
} & { fate: LocalizedText; redrawing: Stroke[] }

/** The name of a dated field. */
export type Field = keyof Fields

/** One dated entry, with the gate a reader must pass to see it. */
export interface Opened<T> extends Dated<T> {
  gate: Gated
}

/** One timeline of an archive, with the record that owns it and its field. */
export interface OwnedTimeline {
  field: Field
  /** `id.field`, for a failure to name. */
  label: string
  owner: Entity
  timeline: Timeline<unknown>
}

/**
 * A character whose origin names a place, and the gate of the earliest entry
 * that names it: the later of that entry and the character, because the
 * entry is what says where they come from.
 */
export interface Native {
  entity: Entity
  gate: Gated
}

/**
 * Where a record sits on the chart, and what lies either side of it.
 * `index` is zero-based; the page prints it plus one.
 */
export interface RoutePosition {
  index: number
  next: Entity | undefined
  previous: Entity | undefined
  total: number
}

/**
 * One stretch of the story as a module: the records filed along it, in the
 * order the anime reaches them, and the dossier of every character among
 * them. An archive is the concatenation of these, so a stretch's records and
 * its dossiers are read and reviewed together.
 */
export interface Saga {
  dossiers: Record<string, CharacterDossier>
  entries: Entity[]
  /**
   * The stretch's own name. Most of One Piece's sagas hold several arcs, so
   * no arc record names the whole of one. Not gated: saga names are not
   * spoilers (owner, 2026-10-17).
   */
  name: LocalizedText
}

/**
 * The log entry for a place, beyond the name and the sentence every record
 * carries. Every field obeys the record's own threshold: it says what a
 * viewer who has just arrived could say, so nothing here has to be veiled
 * separately from the place itself.
 */
export interface PlaceDossier {
  form: PlaceForm
  sea: Sea
  /** The arc the place belongs to: an `arc` record's id. */
  arc: string
  /** The one thing the drawing shows and the eye would look for. */
  landmark: LocalizedText
  /** The log entry proper: two or three sentences, safe at the threshold. */
  log: LocalizedText
  /**
   * Records the archive files at this place: the characters met here, the
   * ship received here. Each keeps its own threshold, so a name filed later
   * than the place stays under fog on the place's own page.
   */
  filedHere: string[]
  /**
   * The times the story comes back after the place's own arc: the crew, or
   * one of them, on screen there again, or a scene there that moves the
   * story on. Not a flashback, a cover story or a reaction to the news. Each
   * at the episode and the chapter that show it, as checked against the
   * wiki, oldest first, the note saying only what that episode shows. A
   * visit opens at its own pair and the page sends only those the reader
   * has reached, so a later one says nothing ahead of time.
   */
  visits?: Visit[]
}

/**
 * One return to a place: a dated entry whose value is its note, with the
 * chapter always given, because it is checked rather than derived.
 */
export interface Visit extends Dated<LocalizedText> {
  chapter: number
}

/**
 * The log entry for a ship.
 *
 * Its own shape rather than a `PlaceDossier` with `form: 'ship'`. A ship lies
 * in no one sea and has no landmark to look for, so those words would be
 * wrong on it; and unlike a port, a ship has a story of its own, which is
 * what `fate` holds. The other fields obey the ship's threshold, like a
 * port's.
 */
export interface ShipDossier {
  /** Who made her, as a viewer at the threshold has been told it. */
  builder: LocalizedText
  /**
   * The place the crew receives her at: a `place` record's id, named
   * outright, because it opens no later than the ship (a data test holds it).
   */
  launched: string
  /** The log entry proper: two or three sentences, safe at the threshold. */
  log: LocalizedText
  /**
   * Where the ship stands, from her threshold on. The page prints the latest
   * entry the reader has reached, and the first entry is at the threshold,
   * so the row is there from the start and its arrival announces nothing.
   */
  fate: Timeline<LocalizedText>
  /**
   * The places she reaches, each with the episode and the chapter at which
   * she is there or coming in, as checked against the wiki. A place opens
   * no earlier than her arrival in either unit (a data test holds it):
   * opened sooner, the tile would tell a reader where she goes next. The
   * page shows only those the reader has reached, because a covered tile's
   * episode would say how long she lasts.
   */
  ports?: Arrival[]
}

/** A place a ship reaches, and when she is first there or coming in. */
export interface Arrival {
  chapter: number
  episode: number
  place: string
}

/**
 * A fruit drawn again, and what the new drawing shows: the real fruit, or
 * the power as an awakening changes it. The fruit's page names each drawing
 * by it; the first drawing is always the fruit and its power.
 */
export interface FruitRedrawing extends Dated<Stroke[]> {
  look: Exclude<FruitLook, 'power'>
}

/**
 * A loaded archive: what the server reads of a series. Every series fills in
 * all of it; a feature its description leaves out (`Series.features`, the
 * `fruit` and `ship` kinds) is empty lists and lookups that find nothing, and
 * `~/data/series/index.test.ts` holds that it files none.
 */
export interface SeriesArchive {
  arcs: Entity[]
  bookmarks: Bookmark[]
  bookSections: BookSection[]
  chapterAtEpisode: (episode: number) => number
  characters: Entity[]
  chart: Entity[]
  chartPointOf: (id: string) => ChartPoint | null
  chartWith: (entity: Entity) => Entity[]
  datedOf: <F extends Field>(owner: Entity, field: F) => Opened<Fields[F]>[]
  dossierOf: (entity: Entity) => CharacterDossier | undefined
  drawings: Record<string, Stroke[]>
  eatersOf: (id: string) => Eater[]
  entities: Entity[]
  factionsOf: (at: Reveal, owner: Entity) => Faction[] | undefined
  featuredCharacters: Entity[]
  filler: FillerEntry[]
  fillerArcs: FillerArc[]
  fruitFormOf: (entity: Entity) => FruitForm | undefined
  fruitRedrawn: Record<string, FruitRedrawing[]>
  fruits: Entity[]
  fruitsOfForm: (form: FruitForm) => Entity[]
  gateOf: (entry: Dated<unknown>, owner: Gated) => Gated
  getCharacter: (id: string) => Entity | undefined
  getEntity: (id: string) => Entity | undefined
  getFruit: (id: string) => Entity | undefined
  getPlace: (id: string) => Entity | undefined
  getShip: (id: string) => Entity | undefined
  lastAired: number
  latestOf: <F extends Field>(
    at: Reveal,
    owner: Entity,
    field: F,
  ) => Fields[F] | undefined
  leads: Record<string, string[]>
  nativesOf: (id: string) => Native[]
  placeDossierOf: (entity: Entity) => PlaceDossier | undefined
  places: Entity[]
  reachedOf: <F extends Field>(
    at: Reveal,
    owner: Entity,
    field: F,
  ) => Opened<Fields[F]>[]
  redrawn: (owner: Entity) => { gate: Gated; value: Stroke[] }[]
  roleOf: (entity: Entity) => LocalizedText | undefined
  routePositionOf: (entity: Entity, drawn: Entity[]) => RoutePosition
  sagas: Saga[]
  series: Series
  shipDossierOf: (entity: Entity) => ShipDossier | undefined
  ships: Entity[]
  stories: FiledStory[]
  timelines: OwnedTimeline[]
}

/** One arc shelf and the characters first met in it. */
export interface BookSection {
  arc: Entity
  characters: Entity[]
}

/** A dated story with its owning character and opening gate. */
export interface FiledStory {
  character: Entity
  episode: number
  gate: Gated
  story: Story
}

/** An eater relation gated by the fact that names it. */
export interface Eater {
  entity: Entity
  gate: Gated
}

/** One numbered episode or unnumbered entry of an optional filler guide. */
export type FillerEntry = (
  { after: number; released: string } | { episode: number }
) & {
  chapter: number
  kind: FillerKind
  summary: LocalizedText
  title: LocalizedText
}

/** A named run of episodes in a filler guide. */
export interface FillerArc {
  first: number
  last: number
  name: LocalizedText
}
