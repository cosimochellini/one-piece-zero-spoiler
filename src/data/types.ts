import type { Locale } from '~/i18n/locales'
import type { CharacterStatus, EntityKind, TintId } from '~/lib/view/records'

import type { ArtId } from './art'
import type { FruitId } from './fruit-forms'

/**
 * A string in every published locale. Total over `Locale` on purpose: a record
 * that is missing a translation is a typecheck failure rather than a page with
 * a blank line on it.
 */
export type LocalizedText = Record<Locale, string>

/**
 * The drawings, one per record, each drawn once in `~/data/art` and rendered
 * by `~/components/ChartArt`. The ids match the records they were drawn for;
 * the type is derived from the drawings, so a record cannot point at a
 * drawing that does not exist.
 */
export type { ArtId } from './art'

/**
 * The devil fruits, filed as records of their own in `~/data/records/fruits`
 * and keyed in `~/data/fruit-forms`. The type is derived from that table, so
 * a dossier cannot say a character ate a fruit the archive never filed.
 *
 * Imported as `import type`, never as an inline `import { type … }`: under
 * `isolatedModules` the inline form is a live module edge, and this module is
 * imported by every saga. See the note at the head of `~/lib/view/records`.
 */
export type { FruitId } from './fruit-forms'

/**
 * What a record shows: a line drawing and the one colour its main stroke
 * takes. No photographs and no official artwork appear anywhere on the site.
 */
export interface Visual {
  art: ArtId
  tint: TintId
}

/**
 * One archive record.
 *
 * `revealedAtEpisode` and `revealedAtChapter` are the whole spoiler system:
 * the earliest anime episode, and the earliest manga chapter, from which this
 * record is safe to read. Both are inclusive, and both are stored on the
 * record rather than derived, because "when does this become safe" is an
 * editorial judgement, not something a script can work out. A reader who
 * counts in seasons is filed at an absolute episode through
 * `~/lib/progress/seasons`, so no third threshold is kept.
 *
 * The two thresholds are independent: the anime and the manga do not always
 * introduce a record in the same order, so a list is sorted by whichever
 * one the reader counts in (`orderByMode` in `~/data/characters`).
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
  summary: LocalizedText
  /**
   * Set on a record whose two thresholds are too far out of step to say how
   * far a chapter reaches into the anime: Shiki is episode 425 but chapter
   * 962, and as an anchor of `~/data/chapters` he held every chapter from 599
   * to 961 at episode 424. The table leaves such a record out, and a data
   * test holds that nothing dated names it before its own chapter.
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
 * entry at the first chapter that reaches its episode (`gateOf` in
 * `~/data/reveal`); with it, at that chapter, and the chapter table then
 * holds every earlier chapter below the episode, so the fix sits on the
 * datum rather than in a list far from it.
 */
export interface Dated<T> {
  chapter?: number
  episode: number
  value: T
}

/** Entries in ascending episode order; the first no earlier than the record's threshold. */
export type Timeline<T> = Dated<T>[]

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
  affiliation: Timeline<LocalizedText>
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
   */
  devilFruit?: Timeline<FruitId[]>
  epithet?: Timeline<LocalizedText>
  log: LocalizedText
  origin?: Timeline<LocalizedText>
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
  /** In Berry. */
  bounty?: Timeline<number>
}
