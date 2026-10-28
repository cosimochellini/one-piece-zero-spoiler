import { readdirSync } from 'node:fs'
import { byNumber, byString } from 'sort-es'
import { describe, expect, it, vi } from 'vitest'

import type { Redrawings } from '~/data/art/stroke'
import { toldIn } from '~/data/reveal'
import type { Dated, Entity, SeriesArchive } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { FIRST_CHAPTER, FIRST_EPISODE } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
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

  it('draws the world map only for a series the dictionaries label', () => {
    // The map's peeks print a place's sea and form from the dictionaries; a
    // series with words of its own would see their raw ids there.
    const mapped = SERIES.filter(({ description }) => {
      return description.features.worldMap
    })

    for (const { placeWords, slug } of mapped) {
      expect(placeWords.dictionary, slug).toBe(true)
    }
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
  owner: Gated
}

/** Every timeline's entries and every place's later visits, with their records. */
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

/** How a series gates a fact, and where its anime ends. */
interface MangaOnlyRules {
  /** The last episode of the dial. */
  ceiling: number
  gateOf: (entry: Dated<unknown>, owner: Gated) => Gated
  /** The last chapter the anime adapts, for a series whose anime has ended. */
  last?: number
}

/**
 * What breaks the manga-only rules, read on the gate a reader is held to,
 * not on the chapter as written. A fact the manga alone tells declares its
 * chapter wherever it is filed: derived, its chapter would follow the
 * anime's last episode down to the last adapted chapter. At the last
 * episode only an anime-only fact may go without one. With an anime that
 * has ended, a fact past its last chapter is the manga's, at the last
 * episode.
 */
function mangaOnlyBreaches(
  told: Told[],
  { ceiling, gateOf, last = Infinity }: MangaOnlyRules,
): string[] {
  return told.flatMap(({ entry, label, owner }) => {
    const gate = gateOf(entry, owner)
    const breaches = [
      ...(gate.revealedAtChapter > last ?
        pastTheAnime(entry, gate, ceiling)
      : []),
      ...(entry.chapter === undefined ? unpinned(entry, gate, ceiling) : []),
    ]

    return breaches.map((breach) => `${label}: ${breach}`)
  })
}

/** What a fact past the anime's last chapter lacks. */
function pastTheAnime(
  entry: Dated<unknown>,
  gate: Gated,
  ceiling: number,
): string[] {
  return [
    gate.source !== 'chapter' && "past the anime, not the manga's",
    entry.episode !== ceiling && 'past the anime, not at its last episode',
  ].filter((breach) => breach !== false)
}

/** What a fact with no chapter of its own may not be. */
function unpinned(
  entry: Dated<unknown>,
  gate: Gated,
  ceiling: number,
): string[] {
  return [
    gate.source === 'chapter' && "the manga's, with no chapter",
    entry.episode === ceiling
      && gate.source === undefined
      && 'at the last episode with no chapter',
  ].filter((breach) => breach !== false)
}

/** A record as the manga-only rules read it. */
type Filed = Pick<
  Entity,
  'id' | 'revealedAtChapter' | 'revealedAtEpisode' | 'source'
>

/** Where a series' dial ends, and where its anime does. */
interface RecordRules {
  /** The last episode of the dial. */
  ceiling: number
  /** The last chapter of the dial. */
  chapterCeiling: number
  /** The last chapter the anime adapts, for a series whose anime has ended. */
  last?: number
}

/**
 * What breaks the manga-only rules for records: one past the anime's last
 * chapter is the manga's alone, filed at the last episode; and a last
 * adapted chapter, when there is one, sits below the dial with some record
 * past it, or the rule guards nothing.
 */
function recordBreaches(records: Filed[], rules: RecordRules): string[] {
  const { ceiling, last = Infinity } = rules
  const past = records.filter((record) => record.revealedAtChapter > last)

  return [
    ...past.flatMap(({ id, revealedAtEpisode, source }) =>
      [
        source !== 'chapter' && `${id}: past the anime, not the manga's`,
        revealedAtEpisode !== ceiling
          && `${id}: past the anime, not at its last episode`,
      ].filter((breach) => breach !== false),
    ),
    ...deadRule(past, rules),
  ]
}

/** Why a last adapted chapter would guard nothing. */
function deadRule(
  past: Filed[],
  { chapterCeiling, last }: RecordRules,
): string[] {
  if (last === undefined) {
    return []
  }

  return [
    last >= chapterCeiling && 'the last adapted chapter is not below the dial',
    past.every(({ source }) => source !== 'chapter')
      && 'no record of the manga alone past the last adapted chapter',
  ].filter((breach) => breach !== false)
}

describe('the manga-only rules', () => {
  // Episode 10 is the last; the anime adapts up to chapter 5, and a chapter
  // left out follows the episode at half its number.
  const rules: MangaOnlyRules = {
    ceiling: 10,
    last: 5,
    gateOf: (entry, owner) => ({
      revealedAtEpisode: Math.max(owner.revealedAtEpisode, entry.episode),
      revealedAtChapter: Math.max(
        owner.revealedAtChapter,
        entry.chapter ?? entry.episode / 2,
      ),
      ...((owner.source ?? entry.source) !== undefined && {
        source: owner.source ?? entry.source,
      }),
    }),
  }
  const both: Gated = { revealedAtEpisode: 1, revealedAtChapter: 1 }
  const told = (
    label: string,
    entry: Omit<Dated<unknown>, 'value'>,
    owner: Gated = both,
  ): Told => ({ entry: { ...entry, value: null }, label, owner })

  it('names each breach, and nothing in a clean entry', () => {
    expect(
      mangaOnlyBreaches(
        [
          told('visit', { episode: 10, chapter: 7 }),
          told('bare', { episode: 10 }),
          told('early', { episode: 4, chapter: 7, source: 'chapter' }),
          told('unpinned', { episode: 10, source: 'chapter' }),
          told('clean', { episode: 10, chapter: 8, source: 'chapter' }),
          told('episode', { episode: 10, source: 'episode' }),
          told('adapted', { episode: 6, chapter: 3 }),
          told('off', { episode: 4, source: 'chapter' }),
          // The source is the record's, so the gate's, not the entry's.
          told('owned', { episode: 6 }, { ...both, source: 'chapter' }),
        ],
        rules,
      ),
    ).toStrictEqual([
      "visit: past the anime, not the manga's",
      'bare: at the last episode with no chapter',
      'early: past the anime, not at its last episode',
      "unpinned: the manga's, with no chapter",
      "off: the manga's, with no chapter",
      "owned: the manga's, with no chapter",
    ])
  })

  it('holds a series whose anime runs on to the chapter rules alone', () => {
    const { ceiling, gateOf } = rules

    expect(
      mangaOnlyBreaches([told('free', { episode: 4 })], { ceiling, gateOf }),
    ).toStrictEqual([])
  })

  it('names each record that breaks them, and nothing in a clean one', () => {
    expect(
      recordBreaches(
        [
          { id: 'unsourced', revealedAtEpisode: 10, revealedAtChapter: 7 },
          {
            id: 'early',
            revealedAtEpisode: 4,
            revealedAtChapter: 7,
            source: 'chapter',
          },
          {
            id: 'clean',
            revealedAtEpisode: 10,
            revealedAtChapter: 7,
            source: 'chapter',
          },
          { id: 'adapted', revealedAtEpisode: 6, revealedAtChapter: 3 },
        ],
        { ceiling: 10, chapterCeiling: 9, last: 5 },
      ),
    ).toStrictEqual([
      "unsourced: past the anime, not the manga's",
      'early: past the anime, not at its last episode',
    ])
  })

  it('finds a last adapted chapter that guards nothing', () => {
    const adapted = [
      { id: 'adapted', revealedAtEpisode: 6, revealedAtChapter: 3 },
    ]

    expect(
      recordBreaches(adapted, { ceiling: 10, chapterCeiling: 5, last: 5 }),
    ).toStrictEqual([
      'the last adapted chapter is not below the dial',
      'no record of the manga alone past the last adapted chapter',
    ])
    expect(
      recordBreaches(
        [{ id: 'unsourced', revealedAtEpisode: 10, revealedAtChapter: 7 }],
        { ceiling: 10, chapterCeiling: 9, last: 5 },
      ),
    ).toStrictEqual([
      "unsourced: past the anime, not the manga's",
      'no record of the manga alone past the last adapted chapter',
    ])
    expect(
      recordBreaches(adapted, { ceiling: 10, chapterCeiling: 5 }),
    ).toStrictEqual([])
  })
})

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
      // a chapter the anime never adapts. A series whose anime runs on has
      // no last adapted chapter, and only the chapter rules apply to it.
      const { chapterCeiling, episodeCeiling: ceiling } = archive.series
      const last = lastAdaptedChapter !== undefined && {
        last: lastAdaptedChapter,
      }

      expect(
        recordBreaches(entities, { ceiling, chapterCeiling, ...last }),
      ).toStrictEqual([])
      expect(
        mangaOnlyBreaches(toldOf(archive), {
          ceiling,
          gateOf: archive.gateOf,
          ...last,
        }),
      ).toStrictEqual([])
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
      // least one entry, strictly ascending in the anime, none before the
      // record's own threshold and none past the dial. A series with
      // characters has timelines; one with arcs alone may have none yet.
      expect(timelines.length > 0 || archive.characters.length === 0).toBe(true)

      for (const { label, owner, timeline } of timelines) {
        const episodes = timeline
          .filter((entry) => toldIn(entry, 'episode'))
          .map((entry) => entry.episode)
        const distinct = new Set(episodes)

        expect(timeline.length, label).toBeGreaterThan(0)
        // Sorted and all distinct is the same statement as strictly ascending,
        // without a look back at the previous entry inside the loop.
        expect(episodes, label).toStrictEqual(episodes.toSorted(byNumber()))
        expect(distinct.size, label).toBe(episodes.length)

        // The manga-only entries a chapter reader walks obey the same rule in
        // chapters, where one names its chapter.
        const chapters = timeline
          .filter((entry) => entry.source === 'chapter')
          .flatMap((entry) => entry.chapter ?? [])

        expect(chapters, label).toStrictEqual(chapters.toSorted(byNumber()))
        expect(chapters, label).toStrictEqual([...new Set(chapters)])

        for (const { episode } of timeline) {
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

    it('groups its chapters into books without a gap, inside its ceiling', () => {
      // The dialog counts a chapter within its book, so a gap would leave
      // chapters nobody can enter, and a book past the ceiling would save a
      // bookmark the cookie reader refuses.
      const { books = [], chapterCeiling } = archive.series

      for (const [index, book] of books.entries()) {
        expect(book.number).toBe(index + 1)
        expect(book.first).toBe(
          (books[index - 1]?.last ?? FIRST_CHAPTER - 1) + 1,
        )
        expect(book.last).toBeGreaterThanOrEqual(book.first)
        expect(book.last).toBeLessThanOrEqual(chapterCeiling)
      }
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
