import type { Locale } from '~/i18n/locales'

import type { ArtId } from './art'

/**
 * The kinds of record the archive files. The list grows with the wiki;
 * `kind` exists so a generic list can label a record without a lookup table
 * per page.
 */
export type EntityKind = 'character' | 'arc' | 'place' | 'ship'

export type LocalizedText = Readonly<Record<Locale, string>>

/**
 * The drawings, one per record, each drawn once in `~/data/art` and rendered
 * by `~/components/ChartArt`. The ids match the records they were drawn for;
 * the type is derived from the drawings, so a record cannot point at a
 * drawing that does not exist.
 */
export type { ArtId } from './art'

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

/**
 * What a record shows: a line drawing and the one colour its main stroke
 * takes. No photographs and no official artwork appear anywhere on the site.
 */
export type Visual = { readonly art: ArtId; readonly tint: TintId }

/**
 * One archive record.
 *
 * `revealedAtEpisode` and `revealedAtChapter` are the whole spoiler system:
 * the earliest anime episode, and the earliest manga chapter, from which this
 * record is safe to read. Both are inclusive, and both are stored on the
 * record rather than derived, because "when does this become safe" is an
 * editorial judgement, not something a script can work out. A reader who
 * counts in seasons is filed at an absolute episode through
 * `~/data/seasons`, so no third threshold is kept.
 *
 * The two thresholds are independent: the anime and the manga do not always
 * introduce a record in the same order, so a list is sorted by whichever
 * one the reader counts in (`orderByMode` in `~/data/characters`).
 *
 * The shape satisfies `Gated` from `~/lib/progress/spoiler` structurally, so
 * entities can be passed straight to `isRevealed`.
 */
export type Entity = {
  readonly id: string
  readonly kind: EntityKind
  readonly revealedAtEpisode: number
  readonly revealedAtChapter: number
  readonly name: LocalizedText
  readonly summary: LocalizedText
  readonly visual: Visual
}

/**
 * One fact as it stands from a given episode. A timeline of them is what a
 * dossier field holds: the reader's dial picks the last entry it has reached,
 * so a bounty raised at episode 500 is not on the page of a reader at 300.
 */
export type Dated<T> = { readonly episode: number; readonly value: T }

/** Entries in ascending episode order; the first no earlier than the record's threshold. */
export type Timeline<T> = readonly Dated<T>[]

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
export type CharacterDossier = {
  readonly role: LocalizedText
  readonly log: LocalizedText
  readonly affiliation: Timeline<LocalizedText>
  readonly origin?: Timeline<LocalizedText>
  readonly epithet?: Timeline<LocalizedText>
  readonly devilFruit?: Timeline<LocalizedText>
  /** In Berry. */
  readonly bounty?: Timeline<number>
}
