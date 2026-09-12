import type { Locale } from '~/i18n/locales'

/**
 * The kinds of record the archive files. The list grows with the wiki;
 * `kind` exists so a generic list can label a record without a lookup table
 * per page.
 */
export type EntityKind = 'character' | 'arc' | 'place' | 'ship'

export type LocalizedText = Readonly<Record<Locale, string>>

/**
 * The drawings, one per record, each drawn once in `~/components/ChartArt`.
 * The ids match the records they were drawn for; the type exists so a record
 * cannot point at a drawing that does not exist.
 */
export type ArtId =
  | 'east-blue'
  | 'monkey-d-luffy'
  | 'roronoa-zoro'
  | 'shells-town'
  | 'shanks'
  | 'foosha-village'
  | 'buggy'
  | 'nami'
  | 'orange-town'
  | 'usopp'
  | 'syrup-village'
  | 'going-merry'
  | 'sanji'
  | 'baratie'
  | 'dracule-mihawk'
  | 'smoker'
  | 'nefertari-vivi'
  | 'tony-tony-chopper'
  | 'alabasta'
  | 'crocodile'
  | 'portgas-d-ace'
  | 'nico-robin'
  | 'skypiea'
  | 'jaya'
  | 'edward-newgate'
  | 'donquixote-doflamingo'
  | 'water-seven'
  | 'franky'
  | 'brook'
  | 'perona'
  | 'trafalgar-law'
  | 'eustass-kid'
  | 'boa-hancock'
  | 'jinbe'
  | 'marineford'
  | 'bartolomeo'
  | 'wano'
  | 'yamato'
  | 'egghead'
  | 'egghead-island'

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
export type Visual = {
  readonly art: ArtId
  readonly tint: TintId
}

/**
 * One archive record.
 *
 * `revealedAtEpisode` is the whole spoiler system: the earliest anime episode
 * from which this record is safe to read. It is inclusive, and it is stored on
 * the record rather than derived, because "when does this become safe" is an
 * editorial judgement, not something a script can work out.
 *
 * The shape satisfies `Gated` from `~/lib/progress/spoiler` structurally, so
 * entities can be passed straight to `isRevealed`.
 */
export type Entity = {
  readonly id: string
  readonly kind: EntityKind
  readonly revealedAtEpisode: number
  readonly name: LocalizedText
  readonly summary: LocalizedText
  readonly visual: Visual
}
