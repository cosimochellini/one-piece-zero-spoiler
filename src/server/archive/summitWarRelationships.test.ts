import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { summitWar } from '~/data/series/one-piece/records/summit-war'
import {
  summitWarRelationshipOmissions,
  summitWarRelationships,
} from '~/data/series/one-piece/records/summit-war.relationships'
import type { Entity, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  OP_ARCHIVE,
  opRelationshipsPage as relationshipsPage,
} from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { ONE_PIECE_LOADED } from '~/test/series'

import { payloadsFor } from './payloads.server'

const characterPayload = payloadsFor(OP_ARCHIVE).find(
  ({ name }) => name === 'loadRelationships',
)
const leaksIn = leaksOf(ONE_PIECE_LOADED)

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = summitWar.entries.filter(({ kind }) => kind === 'character')
type Mode = 'chapter' | 'episode'
const MODES: Mode[] = ['episode', 'chapter']
interface BoundaryCase {
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

/** Every source gets its own authored order, including the reordered flashbacks. */
function casesOf(owner: Entity, mode: Mode): BoundaryCase[] {
  const applicable = OP_ARCHIVE.datedOf(owner, 'relationships').filter(
    (entry) => toldIn(entry, mode),
  )
  return applicable.map((entry, index) => ({
    owner: owner.id,
    mode,
    date: entry[mode] ?? Infinity,
    before: applicable[index - 1]?.value ?? [],
    at: entry.value,
  }))
}

const cases = owners.flatMap((owner) =>
  MODES.flatMap((mode) => casesOf(owner, mode)),
)

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return relationshipsPage(id, bookmark, locale)
}

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

describe('Summit War relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(summitWarRelationships),
        ...Object.keys(summitWarRelationshipOmissions),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(
    owners.filter(
      ({ id }) => !Object.hasOwn(summitWarRelationshipOmissions, id),
    ),
  )('authors at least one supported selection for $id', (owner) => {
    expect(summitWar.dossiers[owner.id]?.relationships?.length).toBeGreaterThan(
      0,
    )
  })

  it.each(Object.entries(summitWarRelationshipOmissions))(
    'records why %s has no supported relationships',
    (id, reason) => {
      expect(summitWar.dossiers[id]?.relationships).toBeUndefined()
      expect(reason.trim()).not.toBe('')

      for (const locale of LOCALES) {
        expect(projected(id, ep(1180), locale)).toStrictEqual([])
        expect(projected(id, ch(1150), locale)).toStrictEqual([])
      }
    },
  )

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap(
        (owner) => summitWar.dossiers[owner.id]?.relationships ?? [],
      )
      const relations = selections.flatMap(({ value }) => value)
      for (const selection of selections) {
        expect(selection.value.length).toBeGreaterThan(0)
      }
      for (const relation of relations) {
        expect(relation.type[locale].trim()).not.toBe('')
        expect(relation.summary[locale].trim()).not.toBe('')
      }
    },
  )
})

describe.each(LOCALES)('Summit War payload boundaries in %s', (locale) => {
  it.each(cases)(
    '$owner at $mode $date restores exact current words on backwards movement',
    ({ owner, mode, date, before, at }) => {
      expect(Number.isSafeInteger(date)).toBe(true)

      // Revisit the earlier bookmark after the future one to catch retained state.
      for (const count of [date - 1, date, date - 1]) {
        const bookmark =
          mode === 'episode' ?
            { mode, episode: count }
          : { mode, chapter: count }
        const sent = projected(owner, bookmark, locale)

        expect(characterPayload).toBeDefined()

        const payload = characterPayload?.run(bookmark, locale, owner)

        expect(payload).toStrictEqual(
          relationshipsPage(owner, bookmark, locale),
        )
        expect(leaksIn(payload, bookmark)).toStrictEqual([])

        expect(
          sent.map(({ person, type, summary }) => ({
            character: person.id,
            type,
            summary,
          })),
        ).toStrictEqual(localized(count === date ? at : before, locale))

        const stages = sent.flatMap(({ history }) => history)

        expect(
          stages.every(
            (stage) =>
              (mode === 'episode' ?
                stage.revealedAtEpisode
              : stage.revealedAtChapter) <= count,
          ),
        ).toBe(true)
        expect(sent.every(({ history }) => history.length > 0)).toBe(true)

        expect(sent.every((relation) => hasCurrentHistory(relation))).toBe(true)
      }
    },
  )
})

const persistenceCases = owners.flatMap((owner) =>
  MODES.flatMap((mode) => {
    const last = OP_ARCHIVE.datedOf(owner, 'relationships').findLast((entry) =>
      toldIn(entry, mode),
    )
    return last === undefined ?
        []
      : { owner: owner.id, mode, date: last[mode] ?? Infinity }
  }),
)

describe.each(LOCALES)('Summit War selection persistence in %s', (locale) => {
  it.each(persistenceCases)(
    'retains $owner’s last $mode selection',
    ({ owner, mode, date }) => {
      const at = mode === 'episode' ? ep(date) : ch(date)
      const later =
        mode === 'episode' ?
          ep(OP_ARCHIVE.series.episodeCeiling)
        : ch(OP_ARCHIVE.series.chapterCeiling)

      expect(projected(owner, later, locale)).toStrictEqual(
        projected(owner, at, locale),
      )
    },
  )
})

describe.each(LOCALES)('Summit War verified story events in %s', (locale) => {
  const label = (english: string, italian: string): string =>
    locale === 'en' ? english : italian

  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  it('waits for Bepo’s rescue of Law before revealing Chopper’s medicine', () => {
    for (const [before, at] of [
      [ep(1114), ep(1115)],
      [ch(1080), ch(1081)],
    ] as const) {
      expect(pair('bepo', 'tony-tony-chopper', before)).toBeUndefined()
      expect(pair('bepo', 'tony-tony-chopper', at)).toBeDefined()
      expect(pair('bepo', 'tony-tony-chopper', before)).toBeUndefined()
    }
  })

  it('keeps the prison promotions exclusive to manga cover stories', () => {
    expect(pair('hannyabal', 'magellan', ch(660))?.type).toBe(
      label('Superior', 'Superiore'),
    )
    expect(pair('hannyabal', 'magellan', ch(661))?.type).toBe(
      label('Predecessor', 'Predecessore'),
    )
    expect(pair('hannyabal', 'magellan', ep(1300))?.type).toBe(
      label('Superior', 'Superiore'),
    )
    expect(pair('magellan', 'hannyabal', ch(664))?.type).toBe(
      label('Deputy', 'Vice'),
    )
    expect(pair('magellan', 'hannyabal', ch(665))?.type).toBe(
      label('Successor', 'Successore'),
    )
  })

  it('reveals Nyon’s feelings only in the manga flashback', () => {
    expect(pair('nyon', 'gold-roger', ch(1155))).toBeUndefined()
    expect(pair('nyon', 'gold-roger', ch(1156))).toBeDefined()
    expect(pair('nyon', 'gold-roger', ep(1300))).toBeUndefined()
  })

  it('waits for the archived endpoint when Lacroix fights Oars', () => {
    expect(pair('lacroix', 'little-oars-jr', ep(465))).toBeUndefined()
    expect(pair('lacroix', 'little-oars-jr', ep(466))).toBeDefined()
    expect(pair('lacroix', 'little-oars-jr', ch(559))).toBeUndefined()
    expect(pair('lacroix', 'little-oars-jr', ch(560))).toBeDefined()
  })

  it('changes Heracles’s role when Usopp asks for training', () => {
    expect(pair('heracles', 'usopp', ep(514))?.type).toBe(
      label('Castaway he helps', 'Naufrago che aiuta'),
    )
    expect(pair('heracles', 'usopp', ep(515))?.type).toBe(
      label('Pupil', 'Allievo'),
    )
    expect(pair('heracles', 'usopp', ch(595))?.type).toBe(
      label('Castaway he helps', 'Naufrago che aiuta'),
    )
    expect(pair('heracles', 'usopp', ch(596))?.type).toBe(
      label('Pupil', 'Allievo'),
    )
  })

  it('sends no relationship content for an unset bookmark or a covered owner', () => {
    expect(projected('bepo', null, locale)).toStrictEqual([])
    expect(projected('bepo', ep(391), locale)).toStrictEqual([])
    expect(projected('bepo', ch(497), locale)).toStrictEqual([])
  })
})
