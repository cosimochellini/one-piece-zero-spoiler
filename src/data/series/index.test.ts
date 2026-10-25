import { readdirSync } from 'node:fs'
import { byNumber, byString } from 'sort-es'
import { describe, expect, it, vi } from 'vitest'

import type { Redrawings } from '~/data/art/stroke'
import type { Dated, Entity, SeriesArchive } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { FIRST_CHAPTER, FIRST_EPISODE } from '~/lib/progress/episode'
import type { Stroke } from '~/lib/view/records'
import { LOADED_SERIES } from '~/test/series'

import { SERIES } from '.'

/** The folders under `src/data/series/`, one per series. */
const FOLDERS = readdirSync(import.meta.dirname, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)

describe('the series list', () => {
  it('lists every series folder once, and nothing else', () => {
    // A folder left off the list would be swept by nothing below, nor by
    // the payload sweep, the leak scan, the archive gate or the counts.
    const slugs = new Set(SERIES.map(({ slug }) => slug))

    expect(
      SERIES.map(({ folder }) => folder).toSorted(byString()),
    ).toStrictEqual(FOLDERS.toSorted(byString()))
    expect(slugs.size).toBe(SERIES.length)
  })
})

/** The rules every drawing on the site obeys, in every series, first or redrawn. */
function isADrawing(id: string, strokes: Stroke[]): void {
  // Fewer than four strokes is an icon, not a drawing.
  expect(strokes.length, id).toBeGreaterThan(3)
  expect(
    strokes.some((stroke) => stroke.role === 'accent'),
    id,
  ).toBe(true)

  for (const stroke of strokes) {
    expect(stroke.d.length, id).toBeGreaterThan(0)
  }

  // The renderer keys each path by its `d` and transform, so the same shape
  // may repeat only under another transform; a true duplicate is a React key
  // clash and a line drawn over itself.
  const keys = strokes.map((stroke) => `${stroke.d}|${stroke.transform ?? ''}`)
  const distinct = new Set(keys)

  expect(distinct.size, id).toBe(keys.length)
}

/** A dated fact or a later visit, with the record whose gate it shares. */
interface Told {
  entry: Dated<unknown>
  label: string
  owner: Entity
}

/** Everything a page gates on a record: every timeline's entries and every visit. */
function toldOf(archive: SeriesArchive): Told[] {
  const facts = archive.timelines.flatMap(({ label, owner, timeline }) =>
    timeline.map((entry) => ({
      entry,
      label: `${label} @${String(entry.episode)}`,
      owner,
    })),
  )
  const visits = archive.places.flatMap((owner) =>
    (archive.placeDossierOf(owner)?.visits ?? []).map((entry) => ({
      entry,
      label: `${owner.id}.visits @${String(entry.episode)}`,
      owner,
    })),
  )

  return [...facts, ...visits]
}

/**
 * What breaks the manga-only rules of a series whose anime has ended, read
 * on the gate a reader is held to, not on the chapter as written.
 */
function mangaOnlyBreaches(archive: SeriesArchive, last: number): string[] {
  const ceiling = archive.series.episodeCeiling

  return toldOf(archive).flatMap(({ entry, label, owner }) => {
    const gate = archive.gateOf(entry, owner)
    const past = gate.revealedAtChapter > last

    return [
      past && gate.source !== 'manga' && `${label}: no source 'manga'`,
      past && entry.episode !== ceiling && `${label}: not at the last episode`,
      entry.episode === ceiling
        && entry.chapter === undefined
        && gate.source === undefined
        && `${label}: at the last episode with no chapter and no source`,
    ].filter((breach) => breach !== false)
  })
}

/** Whether a record is an arc. */
function isArc(entity: Entity): boolean {
  return entity.kind === 'arc'
}

describe.each(LOADED_SERIES)(
  'the archive of $slug',
  ({ archive, description, folder, lastAdaptedChapter }) => {
    it('uses the same public description as its registry entry', () => {
      expect(archive.series).toBe(description)
    })

    const { drawings, entities, timelines } = archive

    it('gives every record a unique id', () => {
      const ids = entities.map((entity) => entity.id)
      const unique = new Set(ids)

      expect(unique.size).toBe(ids.length)
    })

    it('files every record at an episode the dialog can actually reach', () => {
      // A record filed above the ceiling could never be revealed, and one filed
      // below the first episode would be revealed to a reader who has seen
      // nothing.
      for (const entity of entities) {
        expect(entity.revealedAtEpisode).toBeGreaterThanOrEqual(FIRST_EPISODE)
        expect(entity.revealedAtEpisode).toBeLessThanOrEqual(
          archive.series.episodeCeiling,
        )
        expect(Number.isSafeInteger(entity.revealedAtEpisode)).toBe(true)
      }
    })

    it('files every record at a chapter the dialog can actually reach', () => {
      for (const entity of entities) {
        expect(entity.revealedAtChapter).toBeGreaterThanOrEqual(FIRST_CHAPTER)
        expect(entity.revealedAtChapter).toBeLessThanOrEqual(
          archive.series.chapterCeiling,
        )
        expect(Number.isSafeInteger(entity.revealedAtChapter)).toBe(true)
      }
    })

    it('translates every record into every published locale', () => {
      for (const entity of entities) {
        for (const locale of LOCALES) {
          expect(entity.name[locale].length).toBeGreaterThan(0)
          expect(entity.summary[locale].length).toBeGreaterThan(0)
        }
      }
    })

    it('gives every record the drawing made for it', () => {
      // The drawing ids are the record ids on purpose: a record pointing at
      // another record's drawing would put the wrong object beside a name.
      for (const entity of entities) {
        expect(entity.visual.art).toBe(entity.id)
      }
    })

    it('has a drawing for every record, and none that no record uses', () => {
      const ids = new Set(entities.map((entity) => entity.id))
      const drawn = new Set(Object.keys(drawings))

      for (const id of ids) {
        expect(drawn.has(id), id).toBe(true)
      }
      for (const id of drawn) {
        expect(ids.has(id), id).toBe(true)
      }
    })

    it('draws every record with at least four strokes and one in its colour', () => {
      expect.hasAssertions()

      for (const [id, strokes] of Object.entries(drawings)) {
        isADrawing(id, strokes)
      }
    })

    it('redraws a record as the pages read it: pinned, later, ascending, in the house style', () => {
      // Read the way every page does (`datedOf`, behind `latestOf`,
      // `reachedOf` and `redrawn`). A series that files `REDRAWINGS` without
      // wiring them is caught by the next test but one.
      for (const entity of entities) {
        const stages = archive.datedOf(entity, 'redrawing')
        const episodes = stages.map((stage) => stage.episode)
        const chapters = stages.map((stage) => stage.chapter ?? 0)

        expect(episodes, entity.id).toStrictEqual(
          [...new Set(episodes)].toSorted(byNumber()),
        )
        expect(chapters, entity.id).toStrictEqual(chapters.toSorted(byNumber()))

        // That the pin is within the record's chapter and the dial is held
        // with every declared chapter in `~/data/archive.test.ts`.
        for (const { chapter, episode, value } of stages) {
          expect(chapter, entity.id).toBeDefined()
          expect(episode, entity.id).toBeGreaterThan(entity.revealedAtEpisode)

          isADrawing(entity.id, value)
        }
      }
    })

    it('marks everything told past the last chapter its anime adapts as the manga’s', () => {
      // An anime viewer who has finished reaches the last episode, so a
      // record, a fact or a visit filed there with no source would show them
      // a chapter the anime never adapts. Without a last adapted chapter the
      // dial's own ceiling stands in, and only the last-episode rule bites.
      const last = lastAdaptedChapter ?? archive.series.chapterCeiling
      const records = entities
        .filter((entity) => entity.revealedAtChapter > last)
        .filter(
          (entity) =>
            entity.source !== 'manga'
            || entity.revealedAtEpisode !== archive.series.episodeCeiling,
        )
        .map((entity) => entity.id)
      const mangaOnly = entities.some(
        (entity) =>
          entity.source === 'manga' && entity.revealedAtChapter > last,
      )

      expect(records).toStrictEqual([])
      expect(mangaOnlyBreaches(archive, last)).toStrictEqual([])
      // The rule is alive: it is set below the dial, and some record is past it.
      expect(
        lastAdaptedChapter === undefined
          || (lastAdaptedChapter < archive.series.chapterCeiling && mangaOnly),
      ).toBe(true)
    })

    it('reads every redrawing its art module files', async () => {
      // An exported `REDRAWINGS` the archive does not read would be tested by
      // nothing above and shown to nobody.
      // `importActual` takes a type argument; a bare dynamic import is `any`,
      // and `import.meta.glob` makes fallow read the two art modules as
      // duplicate exports.
      const art = await vi.importActual<{ REDRAWINGS?: Redrawings }>(
        `./${folder}/art/index.ts`,
      )
      const filed = art.REDRAWINGS ?? {}

      for (const [id, timeline] of Object.entries(filed)) {
        const entity = archive.getEntity(id)

        expect(entity, id).toBeDefined()
        expect(Object.keys(drawings), id).toContain(id)
        expect(timeline.length, id).toBeGreaterThan(0)
        expect(
          entity === undefined ? [] : archive.datedOf(entity, 'redrawing'),
          id,
        ).toHaveLength(timeline.length)
      }
    })

    it('files every timeline in order, from the threshold on, within the dial', () => {
      // What every timeline obeys, a character's, a ship's or a drawing's: at
      // least one entry, in strictly ascending episodes, none before the
      // record's own threshold and none past the dial. A series with
      // characters has timelines; one with arcs alone may have none yet.
      expect(timelines.length > 0 || archive.characters.length === 0).toBe(true)

      for (const { label, owner, timeline } of timelines) {
        const episodes = timeline.map((entry) => entry.episode)
        const distinct = new Set(episodes)

        expect(episodes.length, label).toBeGreaterThan(0)
        // Sorted and all distinct is the same statement as strictly ascending,
        // without a look back at the previous entry inside the loop.
        expect(episodes, label).toStrictEqual(episodes.toSorted(byNumber()))
        expect(distinct.size, label).toBe(episodes.length)

        for (const episode of episodes) {
          expect(Number.isSafeInteger(episode), label).toBe(true)
          expect(episode, label).toBeGreaterThanOrEqual(owner.revealedAtEpisode)
          expect(episode, label).toBeLessThanOrEqual(
            archive.series.episodeCeiling,
          )
        }
      }
    })

    it('has a feature slice exactly where its description declares one', () => {
      // `fruit` and `ship`, the bounty, the factions and the filler guide
      // are One Piece's (owner, 2026-10-23). A series' archive carries a
      // slice for each it has (`~/data/features`), and its description says
      // so: the two are one fact, held together here.
      const { features, kinds } = archive.series
      const slices = archive.features
      const dossiers = archive.characters.flatMap(
        (entity) => archive.dossierOf(entity) ?? [],
      )
      const bounties = dossiers.filter(({ bounty }) => bounty !== undefined)
      const eaters = dossiers.filter(
        ({ devilFruit }) => devilFruit !== undefined,
      )

      expect(
        entities.filter((entity) => !kinds.includes(entity.kind)),
      ).toStrictEqual([])
      expect(slices.fruits !== undefined).toBe(features.fruits)
      expect(slices.fruits !== undefined).toBe(kinds.includes('fruit'))
      expect(slices.ships !== undefined).toBe(kinds.includes('ship'))
      expect(slices.filler !== undefined).toBe(features.filler)
      expect(slices.factions !== undefined).toBe(features.factions)
      expect(bounties.length > 0).toBe(features.bounty)
      expect(eaters.length > 0).toBe(features.fruits)
    })

    it('ends its demo the episode and the chapter before its second saga', () => {
      // The demo is the first saga: a visitor with no bookmark is sent all of
      // it and nothing of the next.
      const second =
        archive.sagas[1]?.entries.filter((entry) => isArc(entry)) ?? []
      const opens = (unit: 'revealedAtChapter' | 'revealedAtEpisode'): number =>
        Math.min(...second.map((arc) => arc[unit]))

      expect(opens('revealedAtEpisode')).toBe(
        archive.series.demoLastEpisode + 1,
      )
      expect(opens('revealedAtChapter')).toBe(
        archive.series.demoLastChapter + 1,
      )
    })
  },
)
