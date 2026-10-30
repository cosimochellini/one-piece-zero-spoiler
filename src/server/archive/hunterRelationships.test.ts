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
