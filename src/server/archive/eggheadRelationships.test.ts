import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { egghead } from '~/data/series/one-piece/records/egghead'
import {
  eggheadRelationshipOmissions,
  eggheadRelationships,
} from '~/data/series/one-piece/records/egghead.relationships'
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

const owners = egghead.entries.filter(({ kind }) => kind === 'character')
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

/** Every source gets its own authored order, including the reordered flashbacks. */
function casesOf(owner: Entity, mode: Mode): BoundaryCase[] {
  const applicable = OP_ARCHIVE.datedOf(owner, 'relationships').filter(
    (entry) => toldIn(entry, mode),
  )
  return applicable.map((entry, index) => {
    const date = entry[mode] ?? Infinity
    const next = applicable[index + 1]
    return {
      owner: owner.id,
      mode,
      date,
      before: applicable[index - 1]?.value ?? [],
      at: entry.value,
      after: next?.[mode] === date + 1 ? next.value : entry.value,
    }
  })
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

describe('Egghead relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(eggheadRelationships),
        ...Object.keys(eggheadRelationshipOmissions),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(
    owners.filter(({ id }) => !Object.hasOwn(eggheadRelationshipOmissions, id)),
  )('authors at least one supported selection for $id', (owner) => {
    expect(egghead.dossiers[owner.id]?.relationships?.length).toBeGreaterThan(0)
  })

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap(
        (owner) => egghead.dossiers[owner.id]?.relationships ?? [],
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

describe.each(LOCALES)('Egghead payload boundaries in %s', (locale) => {
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

describe.each(LOCALES)('Egghead selection persistence in %s', (locale) => {
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

describe('Egghead deliberate omissions', () => {
  it.each(Object.entries(eggheadRelationshipOmissions))(
    'accounts for %s without inventing a bond',
    (id, reason) => {
      expect(reason.trim()).not.toBe('')
      expect(egghead.dossiers[id]?.relationships).toBeUndefined()

      for (const locale of LOCALES) {
        expect(projected(id, ep(1300), locale)).toStrictEqual([])
        expect(projected(id, ch(1300), locale)).toStrictEqual([])
      }
    },
  )
})

describe.each(LOCALES)(
  'Egghead independently verified revelations in %s',
  (locale) => {
    const pair = (
      owner: string,
      target: string,
      bookmark: Bookmark,
    ): RelationshipView | undefined =>
      projected(owner, bookmark, locale).find(
        ({ person }) => person.id === target,
      )

    it('conceals York as Shaka’s shooter until the culprit is identified at 1111 / 1078', () => {
      for (const [before, at] of [
        [ep(1110), ep(1111)],
        [ch(1077), ch(1078)],
      ] as const) {
        expect(pair('shaka', 'york', before)).toBeUndefined()
        expect(pair('shaka', 'york', at)?.type).toBe(
          locale === 'en' ?
            'Satellite who shoots him'
          : 'Satellite che gli spara',
        )
        expect(pair('shaka', 'york', before)).toBeUndefined()
      }
    })

    it('keeps the escape request behind its anime scene at 1098 while manga reaches it at 1067', () => {
      expect(pair('vegapunk', 'monkey-d-luffy', ep(1097))).toBeUndefined()
      expect(pair('vegapunk', 'monkey-d-luffy', ep(1098))).toBeDefined()
      expect(pair('vegapunk', 'monkey-d-luffy', ch(1066))).toBeUndefined()
      expect(pair('vegapunk', 'monkey-d-luffy', ch(1067))).toBeDefined()
    })

    it('reveals York’s staged petrification only with the secret orders at 1112 / 1079', () => {
      for (const [before, at] of [
        [ep(1111), ep(1112)],
        [ch(1078), ch(1079)],
      ] as const) {
        expect(pair('york', 's-snake', before)).toBeUndefined()
        expect(pair('s-snake', 'york', before)).toBeUndefined()
        expect(pair('york', 's-snake', at)).toBeDefined()
        expect(pair('s-snake', 'york', at)).toBeDefined()
      }
    })

    it('reveals Ginny’s daughter separately from Saturn’s experiments', () => {
      for (const [before, at] of [
        [ep(1131), ep(1132)],
        [ch(1097), ch(1098)],
      ] as const) {
        expect(pair('ginny', 'jewelry-bonney', before)).toBeUndefined()
        expect(pair('ginny', 'jewelry-bonney', at)?.type).toBe(
          locale === 'en' ? 'Daughter' : 'Figlia',
        )
        expect(pair('ginny', 'jaygarcia-saturn', at)).toBeUndefined()
      }
      for (const [before, at] of [
        [ep(1136), ep(1137)],
        [ch(1102), ch(1103)],
      ] as const) {
        expect(pair('ginny', 'jaygarcia-saturn', before)).toBeUndefined()
        expect(pair('ginny', 'jaygarcia-saturn', at)).toBeDefined()
      }
    })

    it('gates both of Garling’s sons at their separate anime and manga revelations', () => {
      for (const [before, at] of [
        [ep(1166), ep(1167)],
        [ch(1136), ch(1137)],
      ] as const) {
        expect(
          pair('figarland-garling', 'figarland-shamrock', before),
        ).toBeUndefined()
        expect(pair('figarland-garling', 'figarland-shamrock', at)?.type).toBe(
          locale === 'en' ? 'Son' : 'Figlio',
        )
        expect(pair('figarland-garling', 'shanks', at)).toBeUndefined()
      }
      for (const [before, at] of [
        [ep(1167), ep(1168)],
        [ch(1137), ch(1138)],
      ] as const) {
        expect(pair('figarland-garling', 'shanks', before)).toBeUndefined()
        expect(pair('figarland-garling', 'shanks', at)?.type).toBe(
          locale === 'en' ? 'Son' : 'Figlio',
        )
      }
    })

    it('keeps late God Valley revelations manga-only and restores the earlier selection', () => {
      expect(
        pair('figarland-garling', 'rocks-d-xebec', ch(1161)),
      ).toBeUndefined()
      expect(pair('figarland-garling', 'rocks-d-xebec', ch(1162))?.type).toBe(
        locale === 'en' ? 'Opponent' : 'Avversario',
      )
      expect(pair('figarland-garling', 'rocks-d-xebec', ch(1166))?.type).toBe(
        locale === 'en' ? 'Man he kills' : 'Uomo che uccide',
      )
      expect(
        pair('figarland-garling', 'rocks-d-xebec', ep(1300)),
      ).toBeUndefined()
      expect(
        pair('figarland-garling', 'rocks-d-xebec', ch(1161)),
      ).toBeUndefined()
    })

    it('keeps the Elders’ recruitment of Harald manga-only', () => {
      expect(pair('marcus-mars', 'harald', ch(1156))).toBeUndefined()
      expect(pair('marcus-mars', 'harald', ch(1157))?.type).toBe(
        locale === 'en' ? 'King he pressures' : 'Re su cui fa pressione',
      )
      expect(pair('marcus-mars', 'harald', ch(1167))?.type).toBe(
        locale === 'en' ? 'King he recruits' : 'Re che recluta',
      )
      expect(pair('marcus-mars', 'harald', ep(1300))).toBeUndefined()
    })

    it('keeps the anime-only Guillotine/Atlas fight out of manga cards', () => {
      expect(pair('guillotine', 'atlas', ep(1145))).toBeUndefined()
      expect(pair('guillotine', 'atlas', ep(1146))).toBeDefined()
      expect(pair('guillotine', 'atlas', ch(1300))).toBeUndefined()
    })

    it('respects Pomsky’s independently delayed manga identity', () => {
      expect(projected('pomsky', ch(1107), locale)).toStrictEqual([])
      expect(pair('pomsky', 'jewelry-bonney', ep(1128))).toBeDefined()
      expect(pair('pomsky', 'jewelry-bonney', ch(1108))).toBeDefined()
    })

    it('waits for Emet’s endpoint and then reveals the Haki knot separately', () => {
      for (const [before, at] of [
        [ep(1150), ep(1151)],
        [ch(1118), ch(1119)],
      ] as const) {
        expect(pair('joy-boy', 'emet', before)).toBeUndefined()
        expect(pair('joy-boy', 'emet', at)).toBeDefined()
      }
      for (const [before, at] of [
        [ep(1152), ep(1153)],
        [ch(1121), ch(1122)],
      ] as const) {
        expect(pair('joy-boy', 'emet', before)?.type).toBe(
          locale === 'en' ? 'Friend' : 'Amico',
        )
        expect(pair('joy-boy', 'emet', at)?.history).toHaveLength(2)
        expect(pair('joy-boy', 'emet', before)?.type).toBe(
          locale === 'en' ? 'Friend' : 'Amico',
        )
      }
    })

    it('does not infer romantic or biological reciprocity', () => {
      expect(pair('hibari', 'koby', ep(1090))?.type).toBe(
        locale === 'en' ?
          'Colleague she wants to rescue'
        : 'Collega che vuole salvare',
      )
      expect(pair('ginny', 'emporio-ivankov', ep(1129))?.type).toBe(
        locale === 'en' ? 'Companion in captivity' : 'Compagno di prigionia',
      )
      expect(pair('s-snake', 'monkey-d-luffy', ep(1124))?.type).toBe(
        locale === 'en' ? 'Person she favours' : 'Persona per cui ha un debole',
      )
    })
  },
)
