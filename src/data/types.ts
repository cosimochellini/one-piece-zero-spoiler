import type { Locale } from '~/i18n/locales'

/**
 * The kinds of record the archive files. The list grows with the wiki;
 * `kind` exists so a generic list can label a record without a lookup table
 * per page.
 */
export type EntityKind = 'character' | 'arc' | 'place'

export type LocalizedText = Readonly<Record<Locale, string>>

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
}
