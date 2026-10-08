import { alabasta } from './records/alabasta'
import { dressrosa } from './records/dressrosa'
import { eastBlue } from './records/east-blue'
import { egghead } from './records/egghead'
import { elbaf } from './records/elbaf'
import { fishManIsland } from './records/fish-man-island'
import { devilFruits } from './records/fruits'
import type { Saga } from './records/saga'
import { skypiea } from './records/skypiea'
import { summitWar } from './records/summit-war'
import { thrillerBark } from './records/thriller-bark'
import { wano } from './records/wano'
import { waterSeven } from './records/water-seven'
import { wholeCake } from './records/whole-cake'
import type { Entity } from './types'

/**
 * The archive.
 *
 * TypeScript modules rather than JSON: the `Entity` annotation typechecks every
 * record at build time and the compiler inlines the data, so there is no parse
 * step and no schema library to keep in sync. The records are filed by saga in
 * `./records`, one module per stretch of the route, each with the dossiers of
 * the characters it files; this module is the concatenation.
 *
 * Every record carries two thresholds: `revealedAtEpisode`, the first
 * canonical anime episode from which the viewer knows the record by name and
 * by sight, and `revealedAtChapter`, the first manga chapter that does the
 * same. A character seen but not named is not yet a record — the hooded man
 * at Loguetown is filed at the episode that names him, not the one that shows
 * him. Filler, films and specials do not count. Where a threshold was not
 * certain, it was rounded up rather than guessed — a wrong threshold in this
 * file is a spoiler, which is the one bug this project cannot ship. The
 * episode numbers came first and the chapters follow them. Both are held to
 * the One Piece Wiki's first chapter and first episode of each record's page
 * by `npm run verify:chapters` (`scripts/verify-chapters.mjs`, run by hand,
 * not in CI), which fails on either filed below that floor, unless a hand
 * check kept the episode (`EPISODE_KEPT`); where the record is named later
 * than it is first seen, the threshold is the editor's call.
 *
 * A name the anime says before the manga does sets only the episode. Where
 * the manga names the record later, the chapter is the one that names it
 * (Shiki, chapter 962, kept unanchored). Where the manga never names it, the
 * chapter is the one the naming episode's scene adapts, the same scene
 * without the name, and never earlier; if the scene spans several chapters,
 * the last. Spoil is named by Lola in episode 375, and chapter 483 shows
 * that scene with him as "the old man". As with a fruit named only outside
 * the story, the name adds nothing the manga reader has not already seen in
 * that chapter.
 *
 * The error is not symmetric, and the editing rule follows from that: a
 * threshold set too low uncovers a record early, which is the bug; one set too
 * high only keeps it covered a little longer, which is not. When a threshold is
 * uncertain, round it up. Summaries, roles and log entries follow the same
 * rule: each one says only what a viewer at the threshold episode already
 * knows. The dossier's timelines are the one place a later fact may be
 * written, because each entry carries the episode it is learned in and the
 * page shows only the entries the reader has reached.
 *
 * Names are the Italian anime dub's in `it` (Rufy, Bagy, Usop) and the
 * English edition's in `en`; the id is an English slug. Where the dub never
 * voiced a character the Star Comics spelling stands in, and where the dub's
 * spelling has not been checked it stands in until it is: the Italian One
 * Piece Wiki's page title, which follows Star Comics, unless the page's
 * "Nome doppiaggio italiano" gives the dub's.
 *
 * A devil fruit is a record only under a name its author gave it. Where the
 * story says the name, in a chapter or an episode, the fruit is filed there,
 * even if an SBS printed it first (the Jiki Jiki no Mi waits for chapter
 * 1031, the Toshi Toshi no Mi for chapter 1099). A name printed only outside
 * the story, on a Vivre Card or in an SBS, still counts, since the story will
 * never say it: the fruit is filed where the story shows the power and who
 * has it, and the name adds nothing that scene has not shown (Tama's Kibi
 * Kibi, Raizo's Maki Maki, Jack's Model: Mammoth). A fruit nobody has named
 * is not a record and no name is made up for it; the eater's dossier says
 * what the power does instead (Bao Huang's flying-squirrel SMILE, issue
 * #174).
 *
 * Arc thresholds are the episode and the chapter the arc opens on, checked
 * against the wiki's chapter range by the same script.
 *
 * Images: no photographs and no official artwork appear anywhere. Every record
 * has a line drawing of an object or a place that stands for it, drawn in
 * `~/data/art`, and one colour for its main stroke. No faces, no logos: a
 * straw hat for the captain, three sheathed swords for the swordsman.
 *
 * Places are filed at the episode that first shows them, and the ship's log
 * (`./places.ts`) adds the rest of what is known about each one at that
 * episode: the sea, what kind of place it is, the arc, and who is met there.
 */

/**
 * The sagas in the order the anime reaches them, and the devil fruits after
 * them.
 *
 * The fruits are a thirteenth module rather than a kind scattered through
 * the twelve, because a fruit belongs to no one stretch of the route:
 * it is filed at the episode a dossier first names it in, whoever names it.
 * They are last in this list and nowhere in it: the archive is sorted by
 * threshold everywhere it is drawn, so the order here decides nothing.
 */
export const sagas: Saga[] = [
  eastBlue,
  alabasta,
  skypiea,
  waterSeven,
  thrillerBark,
  summitWar,
  fishManIsland,
  dressrosa,
  wholeCake,
  wano,
  egghead,
  elbaf,
  devilFruits,
]

export const entities: Entity[] = sagas.flatMap((saga) => saga.entries)

const BY_ID = new Map(entities.map((entity) => [entity.id, entity]))

/**
 * Looks a record up by id. Returns `undefined` for an unknown id rather than
 * throwing, so a stale link renders a not-found page instead of a 500.
 */
export function getEntity(id: string): Entity | undefined {
  return BY_ID.get(id)
}
