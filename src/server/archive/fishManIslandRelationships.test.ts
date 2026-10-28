import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { fishManIsland } from '~/data/series/one-piece/records/fish-man-island'
import {
  fishManIslandRelationshipOmissions,
  fishManIslandRelationships,
} from '~/data/series/one-piece/records/fish-man-island.relationships'
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

const owners = fishManIsland.entries.filter(({ kind }) => kind === 'character')
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

describe('Fish-Man Island relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(fishManIslandRelationships),
        ...Object.keys(fishManIslandRelationshipOmissions),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(
    owners.filter(
      ({ id }) => !Object.hasOwn(fishManIslandRelationshipOmissions, id),
    ),
  )('authors at least one supported selection for $id', (owner) => {
    expect(
      fishManIsland.dossiers[owner.id]?.relationships?.length,
    ).toBeGreaterThan(0)
  })

  it.each(Object.entries(fishManIslandRelationshipOmissions))(
    'records why %s has no supported relationships',
    (id, reason) => {
      expect(fishManIsland.dossiers[id]?.relationships).toBeUndefined()
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
        (owner) => fishManIsland.dossiers[owner.id]?.relationships ?? [],
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

describe.each(LOCALES)('Fish-Man Island payload boundaries in %s', (locale) => {
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

describe.each(LOCALES)(
  'Fish-Man Island selection persistence in %s',
  (locale) => {
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
  },
)

describe.each(LOCALES)('Fish-Man Island verified events in %s', (locale) => {
  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  it('does not reveal the killer through Shirahoshi before her explanation', () => {
    for (const [before, at] of [
      [ep(552), ep(553)],
      [ch(632), ch(633)],
    ] as const) {
      expect(pair('shirahoshi', 'hody-jones', before)).toBeUndefined()
      expect(pair('shirahoshi', 'hody-jones', at)).toBeDefined()
      expect(pair('shirahoshi', 'hody-jones', before)).toBeUndefined()
    }
  })

  it('keeps the brothers’ cover-story changes out of anime selections', () => {
    expect(pair('coribou', 'caribou', ch(686))?.type).toBe(
      locale === 'en' ? 'Brother he frees' : 'Fratello che libera',
    )
    expect(pair('coribou', 'caribou', ch(687))?.type).toBe(
      locale === 'en' ?
        'Brother who abandons him'
      : 'Fratello che lo abbandona',
    )
    expect(pair('coribou', 'caribou', ch(715))?.history).toHaveLength(4)
    expect(pair('coribou', 'caribou', ep(1300))?.history).toHaveLength(1)
    expect(pair('caribou', 'coribou', ep(572))?.history).toHaveLength(1)
  })

  it('waits for a named archived endpoint before showing Mjosgard or Big Mom', () => {
    expect(pair('otohime', 'donquixote-mjosgard', ep(885))).toBeUndefined()
    expect(pair('otohime', 'donquixote-mjosgard', ep(886))).toBeDefined()
    expect(pair('bobbin', 'charlotte-linlin', ch(830))).toBeUndefined()
    expect(pair('bobbin', 'charlotte-linlin', ch(831))).toBeDefined()
  })

  it('updates Pekoms’s perspective when he honours Pedro’s sacrifice', () => {
    for (const [before, at] of [
      [ep(870), ep(871)],
      [ch(895), ch(896)],
    ] as const) {
      expect(pair('pekoms', 'monkey-d-luffy', before)).toBeUndefined()
      expect(pair('pekoms', 'monkey-d-luffy', at)?.type).toBe(
        locale === 'en' ?
          'Fugitive he helps escape'
        : 'Fuggitivo che aiuta a scappare',
      )
    }
  })

  it('keeps Devon’s decision source-specific until the later shared confirmation', () => {
    const pending = pair('caribou', 'catarina-devon', ch(1108))
    const accepted = pair('caribou', 'catarina-devon', ep(1142))

    expect(pending?.type).toBe(
      locale === 'en' ?
        'Pirate he asks for passage'
      : 'Pirata a cui chiede un passaggio',
    )
    expect(accepted?.type).toBe(
      locale === 'en' ? 'Escort to Blackbeard' : 'Accompagnatrice da Barbanera',
    )
    expect(pair('caribou', 'marshall-d-teach', ch(1121))?.type).not.toBe(
      pair('caribou', 'marshall-d-teach', ch(1122))?.type,
    )
  })

  it('sends no relationship content for an unset bookmark or covered owner', () => {
    expect(projected('shirahoshi', null, locale)).toStrictEqual([])
    expect(projected('shirahoshi', ep(530), locale)).toStrictEqual([])
    expect(projected('shirahoshi', ch(617), locale)).toStrictEqual([])
  })
})
