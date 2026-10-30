import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type { Entity, Opened, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The omissions live beside the factual evidence.
import coverage from '../../../docs/content-provenance/hunter-x-hunter-relationships.json' with { type: 'json' }
import { relationshipsPage } from './pages.server'
import { payloadsFor } from './payloads.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Hunter x Hunter is not registered')
}
const { archive } = series

const characterPayload = payloadsFor(archive).find(
  ({ name }) => name === 'loadRelationships',
)
const leaksIn = leaksOf(series)

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const characters = archive.entities.filter(({ kind }) => kind === 'character')
const owners = characters.filter(
  (owner) => archive.datedOf(owner, 'relationships').length > 0,
)

type Mode = 'chapter' | 'episode'
const MODES: Mode[] = ['episode', 'chapter']
interface BoundaryCase {
  after: Relationship[]
  at: Relationship[]
  before: Relationship[]
  date: number
  mode: Mode
  owner: string
}
interface Card {
  character: string
  summary: string
  type: string
}

/** The page projection a reader at this bookmark receives. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return relationshipsPage(id, readerFor(archive, bookmark, locale))
}

/** Where an entry opens in one unit: the later of the entry and its owner. */
function dateOf({ gate }: Opened<Relationship[]>, mode: Mode): number {
  return mode === 'episode' ? gate.revealedAtEpisode : gate.revealedAtChapter
}

/** Each source resolves its own selections. */
function casesOf(owner: Entity, mode: Mode): BoundaryCase[] {
  const applicable = archive
    .datedOf(owner, 'relationships')
    .filter((entry) => toldIn(entry, mode))
  return applicable.map((entry, index) => {
    const date = dateOf(entry, mode)
    const next = applicable[index + 1]
    const after =
      next !== undefined && dateOf(next, mode) === date + 1 ?
        next.value
      : entry.value
    return {
      owner: owner.id,
      mode,
      date,
      before: applicable[index - 1]?.value ?? [],
      at: entry.value,
      after,
    }
  })
}

const cases = owners.flatMap((owner) =>
  MODES.flatMap((mode) => (toldIn(owner, mode) ? casesOf(owner, mode) : [])),
)

/** Compare only the current cards; separate assertions cover history gates. */
function localized(relations: Relationship[], locale: Locale): Card[] {
  return relations.map(({ character, type, summary }) => ({
    character,
    type: type[locale],
    summary: summary[locale],
  }))
}

function hasCurrentHistory({
  history,
  summary,
  type,
}: RelationshipView): boolean {
  const current = history.at(-1)
  return (
    current?.summary === summary
    && current.type === type
    && history.every((stage, index) => {
      const previous = history[index - 1]
      return (
        previous === undefined
        || previous.type !== stage.type
        || previous.summary !== stage.summary
      )
    })
  )
}

describe('Hunter x Hunter relationship coverage', () => {
  it('authors or omits every archived character', () => {
    expect(owners.length + Object.keys(coverage.omitted).length).toBe(
      characters.length,
    )
  })

  it.each(Object.keys(coverage.omitted))('omits relationships for %s', (id) => {
    for (const bookmark of [
      ep(archive.series.episodeCeiling),
      ch(archive.series.chapterCeiling),
    ]) {
      expect(projected(id, bookmark, 'en')).toStrictEqual([])
    }
  })

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap((owner) =>
        archive.datedOf(owner, 'relationships'),
      )
      for (const selection of selections) {
        expect(selection.value.length).toBeGreaterThan(0)

        for (const relation of selection.value) {
          expect(relation.type[locale].trim()).not.toBe('')
          expect(relation.summary[locale].trim()).not.toBe('')
        }
      }
    },
  )
})

describe.each(LOCALES)('Hunter x Hunter payload boundaries in %s', (locale) => {
  it.each(cases)(
    '$owner at $mode $date restores exact current words on backwards movement',
    ({ owner, mode, date, before, at, after }) => {
      const expected = new Map([
        [date - 1, before],
        [date, at],
        [date + 1, after],
      ])

      expect(Number.isSafeInteger(date)).toBe(true)

      // Revisit the earlier bookmark after the future one to catch retained state.
      for (const count of [date - 1, date, date + 1, date - 1]) {
        const bookmark = mode === 'episode' ? ep(count) : ch(count)
        const sent = projected(owner, bookmark, locale)
        const payload = characterPayload?.run(bookmark, locale, owner)

        expect(payload).toStrictEqual(sent)
        expect(leaksIn(payload, bookmark)).toStrictEqual([])
        expect(
          sent.map(({ person, type, summary }) => ({
            character: person.id,
            type,
            summary,
          })),
        ).toStrictEqual(localized(expected.get(count) ?? [], locale))

        const stages = sent.flatMap(({ history }) => history)

        expect(
          stages.every(
            (stage) =>
              (mode === 'episode' ?
                stage.revealedAtEpisode
              : stage.revealedAtChapter) <= count,
          ),
        ).toBe(true)
        expect(sent.every((relation) => hasCurrentHistory(relation))).toBe(true)
      }
    },
  )
})

const persistenceCases = owners.flatMap((owner) =>
  MODES.filter((mode) => toldIn(owner, mode)).flatMap((mode) =>
    archive
      .datedOf(owner, 'relationships')
      .filter((entry) => toldIn(entry, mode))
      .slice(-1)
      .map((last) => ({ owner: owner.id, mode, date: dateOf(last, mode) })),
  ),
)

describe.each(LOCALES)(
  'Hunter x Hunter selection persistence in %s',
  (locale) => {
    it.each(persistenceCases)(
      'carries $owner’s last $mode selection to the end of the dial',
      ({ owner, mode, date }) => {
        const at = mode === 'episode' ? ep(date) : ch(date)
        const later =
          mode === 'episode' ?
            ep(archive.series.episodeCeiling)
          : ch(archive.series.chapterCeiling)

        expect(projected(owner, later, locale)).toStrictEqual(
          projected(owner, at, locale),
        )
      },
    )
  },
)

describe.each(LOCALES)(
  'Hunter x Hunter verified revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)

    it('keeps a pair hidden until its event, although both people are known', () => {
      for (const [before, at] of [
        [ep(6), ep(7)],
        [ch(13), ch(14)],
      ] as const) {
        expect(projected('gon-freecss', before, locale)).not.toStrictEqual([])
        expect(people('netero', before)).toStrictEqual(['menchi'])
        expect(people('netero', at)).toContain('gon-freecss')
      }
    })

    it('opens Gon’s father only with Ging’s record, although he is named from the start', () => {
      for (const [before, at] of [
        [ep(36), ep(37)],
        [ch(65), ch(66)],
      ] as const) {
        expect(people('gon-freecss', before)).not.toContain('ging-freecss')
        expect(people('gon-freecss', at)).toContain('ging-freecss')
        expect(people('mito-freecss', before)).not.toContain('ging-freecss')
        expect(people('mito-freecss', at)).toContain('ging-freecss')
      }
    })

    it('gives Kite to manga readers from chapter 1 and to anime readers from episode 76', () => {
      expect(people('gon-freecss', ch(1))).toContain('kite')
      expect(people('gon-freecss', ep(75))).not.toContain('kite')
      expect(people('gon-freecss', ep(76))).toContain('kite')
      expect(projected('kite', ep(75), locale)).toStrictEqual([])
      expect(people('kite', ep(76))).toContain('gon-freecss')
    })

    it('keeps the manga-only roster out of anime pages', () => {
      for (const id of ['goz', 'agon', 'siper', 'sommy', 'cherry']) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
        ).toStrictEqual([])
        expect(projected(id, ch(43), locale)).not.toStrictEqual([])
      }

      expect(people('tonpa', ep(archive.series.episodeCeiling))).not.toContain(
        'sommy',
      )
      expect(people('tonpa', ch(43))).toContain('sommy')
    })

    it('swaps the disguise for Illumi only at the unmasking', () => {
      for (const [before, at] of [
        [ep(19), ep(20)],
        [ch(34), ch(35)],
      ] as const) {
        expect(people('hisoka', before)).toContain('gittarackur')
        expect(people('hisoka', before)).not.toContain('illumi')
        expect(people('hisoka', at)).toContain('illumi')
        expect(people('hisoka', at)).not.toContain('gittarackur')
      }

      // The manga-only roster he wounded or killed swaps with the same chapter.
      for (const id of ['goz', 'siper']) {
        expect(people(id, ch(34))).toContain('gittarackur')
        expect(people(id, ch(35))).toContain('illumi')
        expect(people(id, ch(35))).not.toContain('gittarackur')
      }

      expect(people('killua', ep(19))).not.toContain('illumi')
      expect(people('killua', ep(20))).toContain('illumi')
      expect(people('killua', ch(35))).not.toContain('illumi')
      expect(people('killua', ch(36))).toContain('illumi')
    })

    it('never ties Gittarackur’s own page to Illumi or his family', () => {
      for (const bookmark of [
        ep(19),
        ep(archive.series.episodeCeiling),
        ch(33),
        ch(archive.series.chapterCeiling),
      ]) {
        const sent = projected('gittarackur', bookmark, locale)

        expect(sent).not.toStrictEqual([])
        expect(JSON.stringify(sent)).not.toMatch(
          /illumi|zoldyck|zoldick|killua/iu,
        )
      }
    })
  },
)
