import { toldIn } from '~/data/reveal'
import type { Entity } from '~/data/types'
import type { Gated, Source } from '~/lib/progress/spoiler'

import { gateOf } from './chapter-table'
import { devilFruits } from './records/fruits'
import { CHARACTER_DOSSIERS, sagas } from './sagas'

/**
 * The archive.
 *
 * TypeScript modules rather than JSON: the `Entity` annotation typechecks every
 * record at build time and the compiler inlines the data, so there is no parse
 * step and no schema library to keep in sync. The records are filed by saga in
 * `./records`, one module per stretch of the route, each with the dossiers of
 * the characters it files. This module is their concatenation (`./sagas`),
 * then the devil fruits, in two steps because a fruit's thresholds are not
 * written on it but read off its eaters, through the chapter table that the
 * first step builds (`./chapter-table`).
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
 * "Nome doppiaggio italiano" gives the dub's; where it lists several, the
 * last is the dub's current one (TonyTony Chopper from episode 751). A title
 * that carries a surname or a real name said later gives only the bare name
 * or the alias (Sanji, Mr. Three). `npm run verify:names`
 * (`scripts/verify-names.mjs`, run by hand, like the chapter check) reads
 * every character's page and lists the names that follow neither.
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
 * #174). The scene that names a fruit is dated on the eater's `devilFruit`
 * entry, and the fruit opens with the earliest such entry (`revealOf`
 * below), so the fruit and its eater cannot open apart.
 *
 * Arc thresholds are the episode and the chapter the arc opens on, checked
 * against the wiki's chapter range by the same script.
 *
 * Images: no photographs and no official artwork appear anywhere. Every record
 * has a line drawing of an object or a place that stands for it, drawn in
 * `~/data/series/one-piece/art`, and one colour for its main stroke. No faces, no logos: a
 * straw hat for the captain, three sheathed swords for the swordsman.
 *
 * Places are filed at the episode that first shows them, and the ship's log
 * (`./places.ts`) adds the rest of what is known about each one at that
 * episode: the sea, what kind of place it is, the arc, and who is met there.
 */

/** Every record as it is filed, before the fruits are added to it. */
const FILED: Entity[] = sagas.flatMap((saga) => saga.entries)

const FILED_BY_ID = new Map(FILED.map((entity) => [entity.id, entity]))

/** Every dossier entry that names a fruit, with the gate it opens at. */
const NAMINGS = Object.entries(CHARACTER_DOSSIERS).flatMap(([id, dossier]) => {
  const eater = FILED_BY_ID.get(id)

  return eater === undefined ?
      []
    : (dossier.devilFruit ?? []).map((entry) => ({
        fruitIds: new Set<string>(entry.value),
        gate: gateOf(entry, eater),
      }))
})

/**
 * When a fruit opens, read off the dossier entries that name it: the
 * earliest episode and the earliest chapter any of them opens at (`gateOf`),
 * never before the eater's own in either unit. A fruit no entry names has no
 * threshold and never opens; `fruits.test.ts` holds that every fruit has an
 * eater and opens within the dial, and `~/data/archive.test.ts` that every
 * dossier belongs to a filed character.
 */
function revealOf(id: string): Gated {
  const namings: Gated[] = []
  for (const { fruitIds, gate } of NAMINGS) {
    if (fruitIds.has(id)) {
      namings.push(gate)
    }
  }

  return openedBy(namings)
}

/**
 * The gate the namings of one fruit give it, in each unit by the namings its
 * source tells: an entry, or an eater, of the anime alone opens the fruit for
 * no chapter reader. A fruit that one source alone names is that source's
 * alone (`Entity.source`).
 */
export function openedBy(namings: Gated[]): Gated {
  const episode = namings.filter((gate) => toldIn(gate, 'episode'))
  const chapter = namings.filter((gate) => toldIn(gate, 'chapter'))
  const source = aloneIn({ episode, chapter })

  // A source with no naming takes every naming's, which only orders the
  // fruit: its reader never has it (`source`).
  const fromEpisodes = episode.length === 0 ? namings : episode
  const fromChapters = chapter.length === 0 ? namings : chapter

  return {
    revealedAtEpisode: Math.min(
      ...fromEpisodes.map((gate) => gate.revealedAtEpisode),
    ),
    revealedAtChapter: Math.min(
      ...fromChapters.map((gate) => gate.revealedAtChapter),
    ),
    ...(source !== undefined && { source }),
  }
}

/** The one source that has namings when the other has none, if any. */
function aloneIn(told: Record<Source, Gated[]>): Source | undefined {
  if (told.episode.length === 0) {
    return told.chapter.length === 0 ? undefined : 'chapter'
  }

  return told.chapter.length === 0 ? 'episode' : undefined
}

/**
 * The archive: every record as it is filed, saga by saga, and the devil
 * fruits after them with the thresholds their eaters give them. The fruits
 * are last and nowhere in particular: the archive is sorted by threshold
 * everywhere it is drawn, so the order here decides nothing.
 */
export const entities: Entity[] = [
  ...FILED,
  ...devilFruits.map((fruit) => ({ ...fruit, ...revealOf(fruit.id) })),
]

const BY_ID = new Map(entities.map((entity) => [entity.id, entity]))

/**
 * Looks a record up by id. Returns `undefined` for an unknown id rather than
 * throwing, so a stale link renders a not-found page instead of a 500.
 */
export function getEntity(id: string): Entity | undefined {
  return BY_ID.get(id)
}
