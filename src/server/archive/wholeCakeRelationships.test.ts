import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { wholeCake } from '~/data/series/one-piece/records/whole-cake'
import { wholeCakeRelationships } from '~/data/series/one-piece/records/whole-cake.relationships'
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

const owners = wholeCake.entries.filter(({ kind }) => kind === 'character')
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

describe('Whole Cake Island relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      Object.keys(wholeCakeRelationships).toSorted((a, b) =>
        a.localeCompare(b),
      ),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      expect(
        wholeCake.dossiers[owner.id]?.relationships?.length,
      ).toBeGreaterThan(0)
    },
  )

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap(
        (owner) => wholeCake.dossiers[owner.id]?.relationships ?? [],
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

describe.each(LOCALES)(
  'Whole Cake Island payload boundaries in %s',
  (locale) => {
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

          expect(sent.every((relation) => hasCurrentHistory(relation))).toBe(
            true,
          )
        }
      },
    )
  },
)

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
  'Whole Cake Island selection persistence in %s',
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

describe.each(LOCALES)('Whole Cake Island verified events in %s', (locale) => {
  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  function puddingType(bookmark: Bookmark): string | undefined {
    return pair('charlotte-pudding', 'sanji', bookmark)?.type
  }

  it('changes Katakuri’s view of Luffy only when he rejects Flampe’s interference', () => {
    const opponent = locale === 'en' ? 'Opponent' : 'Avversario'
    const respected =
      locale === 'en' ? 'Respected opponent' : 'Avversario rispettato'
    for (const [before, at] of [
      [ep(867), ep(868)],
      [ch(892), ch(893)],
    ] as const) {
      expect(pair('charlotte-katakuri', 'monkey-d-luffy', before)?.type).toBe(
        opponent,
      )
      expect(pair('charlotte-katakuri', 'monkey-d-luffy', at)?.type).toBe(
        respected,
      )
      expect(
        pair('charlotte-katakuri', 'monkey-d-luffy', at)?.history.map(
          ({ type }) => type,
        ),
      ).toStrictEqual([opponent, respected])
      expect(pair('charlotte-katakuri', 'monkey-d-luffy', before)?.type).toBe(
        opponent,
      )
    }
  })

  it('keeps Pudding’s assassination plan and farewell memory behind separate revelations', () => {
    const arranged = locale === 'en' ? 'Arranged fiancé' : 'Promesso sposo'
    const victim = locale === 'en' ? 'Intended victim' : 'Vittima designata'
    const love =
      locale === 'en' ? 'Man she falls for' : 'Uomo di cui si innamora'
    const farewell =
      locale === 'en' ?
        'Man whose farewell memory she removes'
      : 'Uomo a cui cancella il ricordo dell’addio'
    for (const [before, plot, wedding, beforeFarewell, afterFarewell] of [
      [ep(816), ep(817), ep(832), ep(876), ep(877)],
      [ch(849), ch(850), ch(862), ch(901), ch(902)],
    ] as const) {
      expect(puddingType(before)).toBe(arranged)
      expect(puddingType(plot)).toBe(victim)
      expect(puddingType(wedding)).toBe(love)
      expect(puddingType(beforeFarewell)).toBe(love)
      expect(puddingType(afterFarewell)).toBe(farewell)
      expect(pair('charlotte-pudding', 'sanji', before)?.history).toHaveLength(
        1,
      )
    }
  })

  it('keeps Stussy’s identity and betrayal separate from her CP0 colleagues', () => {
    const colleague = locale === 'en' ? 'CP0 colleague' : 'Collega della CP0'
    const incapacitated =
      locale === 'en' ?
        'Colleague she incapacitates'
      : 'Collega che neutralizza'
    for (const [before, kaku, lucci] of [
      [ep(1103), ep(1104), ep(1105)],
      [ch(1071), ch(1072), ch(1073)],
    ] as const) {
      expect(pair('stussy', 'kaku', before)?.type).toBe(colleague)
      expect(pair('stussy', 'bakkin', before)).toBeUndefined()
      expect(pair('stussy', 'kaku', kaku)?.type).toBe(incapacitated)
      expect(pair('stussy', 'rob-lucci', kaku)?.type).toBe(colleague)
      expect(pair('stussy', 'bakkin', kaku)).toBeUndefined()
      expect(pair('stussy', 'bakkin', lucci)).toBeDefined()
      expect(pair('stussy', 'rob-lucci', lucci)?.type).toBe(incapacitated)
      expect(pair('stussy', 'bakkin', before)).toBeUndefined()
    }
  })

  it('respects existing endpoint delays independently from the earlier events', () => {
    expect(projected('raizo', ch(823), locale)).toStrictEqual([])
    expect(
      projected('raizo', ch(824), locale).map(({ person }) => person.id),
    ).toStrictEqual(['inuarashi', 'nekomamushi', 'kinemon'])
    expect(projected('raizo', ep(767), locale)).toStrictEqual([])
    expect(projected('raizo', ep(768), locale)).toHaveLength(3)
    expect(pair('jack', 'nekomamushi', ch(812))).toBeUndefined()
    expect(pair('jack', 'nekomamushi', ch(813))).toBeDefined()
  })

  it('preserves Weevil’s disputed parentage instead of claiming a proven father', () => {
    const claimed = locale === 'en' ? 'Claimed father' : 'Padre dichiarato'

    expect(pair('edward-weevil', 'edward-newgate', ep(751))?.type).toBe(claimed)
    expect(pair('edward-weevil', 'bakkin', ep(751))).toBeUndefined()
    expect(pair('edward-weevil', 'bakkin', ep(752))).toBeDefined()
    expect(pair('edward-weevil', 'bakkin', ch(802))).toBeDefined()
    expect(pair('edward-weevil', 'edward-newgate', ch(1150))?.type).toBe(
      claimed,
    )
  })

  it('keeps the cover-story marriage and family reunion out of anime', () => {
    const wife = locale === 'en' ? 'Wife' : 'Moglie'
    const reunited =
      locale === 'en' ? 'Daughter he reunites with' : 'Figlia che ritrova'

    expect(pair('gotti', 'lola', ch(992))).toBeUndefined()
    expect(pair('gotti', 'lola', ch(993))?.type).toBe(wife)
    expect(pair('gotti', 'lola', ep(1180))).toBeUndefined()
    expect(pair('pound', 'charlotte-chiffon', ch(990))?.type).not.toBe(reunited)
    expect(pair('pound', 'charlotte-chiffon', ch(991))?.type).toBe(reunited)
    expect(pair('pound', 'charlotte-chiffon', ep(1180))?.type).not.toBe(
      reunited,
    )
  })

  it('replaces Carrot’s selection at the succession without erasing reached history', () => {
    for (const [before, at] of [
      [ep(1082), ep(1083)],
      [ch(1055), ch(1056)],
    ] as const) {
      expect(
        projected('carrot', before, locale).map(({ person }) => person.id),
      ).toStrictEqual([
        'pedro',
        'wanda',
        'tony-tony-chopper',
        'charlotte-perospero',
      ])
      expect(
        projected('carrot', at, locale).map(({ person }) => person.id),
      ).toStrictEqual([
        'pedro',
        'wanda',
        'inuarashi',
        'nekomamushi',
        'tony-tony-chopper',
      ])
      expect(pair('carrot', 'pedro', at)?.history).toHaveLength(2)
      expect(pair('carrot', 'charlotte-perospero', at)).toBeUndefined()
      expect(projected('carrot', before, locale)).toHaveLength(4)
    }
  })

  it('never turns an anime-only scene into manga content', () => {
    expect(projected('charlotte-nusstorte', ep(854), locale)).toStrictEqual([])
    expect(pair('charlotte-nusstorte', 'vinsmoke-niji', ep(855))).toBeDefined()
    expect(projected('charlotte-nusstorte', ch(1150), locale)).toStrictEqual([])
  })

  it('updates Im’s selection at the archived Elbaph possession and transformation', () => {
    for (const [before, possession, transformation] of [
      [ep(1178), ep(1179), ep(1180)],
      [ch(1148), ch(1149), ch(1150)],
    ] as const) {
      expect(pair('im', 'manmayer-gunko', before)).toBeUndefined()
      expect(pair('im', 'manmayer-gunko', possession)).toBeDefined()
      expect(pair('im', 'dorry', possession)).toBeUndefined()
      expect(
        projected('im', transformation, locale).map(({ person }) => person.id),
      ).toStrictEqual([
        'manmayer-gunko',
        'dorry',
        'brogy',
        'figarland-garling',
        'sabo',
      ])
      expect(pair('im', 'dorry', before)).toBeUndefined()
    }
  })

  it('changes Stussy’s view of Kaku when she releases him', () => {
    const released =
      locale === 'en' ? 'Colleague she releases' : 'Collega che libera'
    for (const [before, at] of [
      [ep(1150), ep(1151)],
      [ch(1118), ch(1119)],
    ] as const) {
      expect(pair('stussy', 'kaku', before)?.type).not.toBe(released)
      expect(pair('stussy', 'kaku', at)?.type).toBe(released)
      expect(pair('stussy', 'kaku', at)?.history).toHaveLength(3)
      expect(pair('stussy', 'kaku', before)?.history).toHaveLength(2)
    }
  })
})
