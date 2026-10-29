import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { wano } from '~/data/series/one-piece/records/wano'
import { wanoRelationships } from '~/data/series/one-piece/records/wano.relationships'
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

const owners = wano.entries.filter(({ kind }) => kind === 'character')
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

describe('Wano relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      Object.keys(wanoRelationships).toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      expect(wano.dossiers[owner.id]?.relationships?.length).toBeGreaterThan(0)
    },
  )

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap(
        (owner) => wano.dossiers[owner.id]?.relationships ?? [],
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

describe.each(LOCALES)('Wano payload boundaries in %s', (locale) => {
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

describe.each(LOCALES)('Wano selection persistence in %s', (locale) => {
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

describe.each(LOCALES)('Wano verified revelations in %s', (locale) => {
  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  it('does not reveal the guardians behind the concealed identities early', () => {
    for (const [before, at] of [
      [ep(975), ep(976)],
      [ch(972), ch(973)],
    ] as const) {
      expect(pair('komurasaki', 'denjiro', before)).toBeUndefined()
      expect(pair('komurasaki', 'denjiro', at)).toBeDefined()
      expect(pair('kyoshiro', 'kozuki-oden', before)).toBeUndefined()
      expect(pair('kyoshiro', 'kozuki-oden', at)).toBeDefined()
      expect(pair('kyoshiro', 'kozuki-oden', before)).toBeUndefined()
    }
    for (const [before, at] of [
      [ep(1079), ep(1080)],
      [ch(1052), ch(1053)],
    ] as const) {
      expect(pair('tenguyama-hitetsu', 'kozuki-oden', before)).toBeUndefined()
      expect(pair('kozuki-sukiyaki', 'tama', before)).toBeUndefined()
      expect(pair('tenguyama-hitetsu', 'kozuki-oden', at)).toBeDefined()
      expect(pair('kozuki-sukiyaki', 'tama', at)).toBeDefined()
      expect(pair('tenguyama-hitetsu', 'kozuki-oden', before)).toBeUndefined()
    }
  })

  it('respects the later filed endpoints for Kawamatsu and Izo', () => {
    expect(pair('kozuki-hiyori', 'kawamatsu', ch(945))).toBeUndefined()
    expect(pair('kozuki-hiyori', 'kawamatsu', ch(946))).toBeDefined()
    expect(pair('kiku', 'izo', ch(970))).toBeUndefined()
    expect(pair('kiku', 'izo', ch(971))?.type).toBe(
      locale === 'en' ? 'Older brother' : 'Fratello maggiore',
    )
    expect(pair('kiku', 'izo', ep(969))).toBeUndefined()
    expect(pair('kiku', 'izo', ep(970))).toBeDefined()
  })

  it('reveals the Hiyori link only after her adult identity and the target gates', () => {
    expect(pair('komurasaki', 'momonosuke', ep(935))).toBeUndefined()
    expect(pair('komurasaki', 'momonosuke', ep(936))).toBeDefined()
    expect(pair('komurasaki', 'momonosuke', ch(945))).toBeUndefined()
    expect(pair('komurasaki', 'momonosuke', ch(946))).toBeDefined()
    expect(pair('toko', 'shimotsuki-yasuie', ch(942))).toBeUndefined()
    expect(pair('toko', 'shimotsuki-yasuie', ch(943))).toBeDefined()
  })

  it('updates the Kaido alliance and the final Orochi confrontation at reached events', () => {
    const ally = locale === 'en' ? 'Ally' : 'Alleato'
    const betrayed =
      locale === 'en' ? 'Ally who betrays him' : 'Alleato che lo tradisce'
    for (const [before, at] of [
      [ep(993), ep(994)],
      [ch(984), ch(985)],
    ] as const) {
      expect(pair('kurozumi-orochi', 'kaido', before)?.type).toBe(ally)
      expect(pair('kurozumi-orochi', 'kaido', at)?.type).toBe(betrayed)
      expect(pair('kurozumi-orochi', 'kaido', at)?.history).toHaveLength(2)
      expect(pair('kurozumi-orochi', 'kaido', before)?.type).toBe(ally)
    }
  })

  it('reveals Denjiro’s final confrontation with Orochi at the reached event', () => {
    for (const [before, at] of [
      [ep(1074), ep(1075)],
      [ch(1047), ch(1048)],
    ] as const) {
      expect(pair('kurozumi-orochi', 'denjiro', before)).toBeUndefined()
      expect(pair('kurozumi-orochi', 'denjiro', at)?.type).toBe(
        locale === 'en' ? 'Killer' : 'Uccisore',
      )
    }
  })

  it('keeps taming distinct from Tama asking Speed to stay as a mother', () => {
    for (const [before, at] of [
      [ep(1077), ep(1078)],
      [ch(1050), ch(1051)],
    ] as const) {
      expect(pair('tama', 'speed', before)?.type).toBe(
        locale === 'en' ? 'Protector she tames' : 'Protettrice che addomestica',
      )
      expect(pair('tama', 'speed', at)?.type).toBe(
        locale === 'en' ?
          'Woman she wants as her mother'
        : 'Donna che vorrebbe come madre',
      )
      expect(pair('tama', 'speed', at)?.history).toHaveLength(2)
    }
  })

  it('separates King’s rescue flashback and his defeat from his earlier allegiance', () => {
    for (const [before, at] of [
      [ep(1061), ep(1062)],
      [ch(1034), ch(1035)],
    ] as const) {
      expect(pair('king', 'kaido', before)?.type).toBe(
        locale === 'en' ? 'Captain' : 'Capitano',
      )
      expect(pair('king', 'kaido', at)?.type).toBe(
        locale === 'en' ?
          'Captain who freed him'
        : 'Capitano che lo ha liberato',
      )
      expect(pair('king', 'roronoa-zoro', at)?.type).toBe(
        locale === 'en' ?
          'Opponent who defeats him'
        : 'Avversario che lo sconfigge',
      )
    }
  })

  it('keeps the unadapted cover-story changes out of anime', () => {
    const attacked = locale === 'en' ? 'Attacker' : 'Aggressore'
    const follows =
      locale === 'en' ?
        'Rescuer she pledges to follow'
      : 'Salvatore che promette di seguire'

    expect(pair('ulti', 'yamato', ch(1145))?.type).toBe(attacked)
    expect(pair('ulti', 'yamato', ch(1146))?.type).toBe(follows)
    expect(pair('ulti', 'yamato', ep(1300))?.type).toBe(attacked)
    expect(pair('tsurujo', 'yamato', ch(1115))).toBeUndefined()
    expect(pair('tsurujo', 'yamato', ch(1116))).toBeDefined()
    expect(pair('tsurujo', 'yamato', ep(1300))).toBeUndefined()
    expect(pair('kawamatsu', 'yamato', ch(1151))).toBeUndefined()
    expect(pair('kawamatsu', 'yamato', ch(1152))).toBeDefined()
    expect(pair('kawamatsu', 'yamato', ep(1300))).toBeUndefined()
  })

  it('does not confuse Hatcha with the other Numbers defeated by Franky', () => {
    for (const [before, at] of [
      [ep(1008), ep(1009)],
      [ch(995), ch(996)],
    ] as const) {
      expect(pair('hatcha', 'yamato', before)).toBeUndefined()
      expect(pair('hatcha', 'yamato', at)?.type).toBe(
        locale === 'en' ?
          'Opponent who defeats him'
        : 'Avversario che lo sconfigge',
      )
      expect(pair('hatcha', 'franky', at)?.type).toBe(
        locale === 'en' ? 'Opponent he pursues' : 'Avversario che insegue',
      )
    }
  })

  it('keeps Fukurokuju’s loss behind the end of the endurance contest', () => {
    const rival = locale === 'en' ? 'Ninja rival' : 'Ninja rivale'
    const defeated =
      locale === 'en' ?
        'Opponent who outlasts him'
      : 'Avversario che resiste più a lungo'
    for (const [before, at] of [
      [ep(1068), ep(1069)],
      [ch(1040), ch(1041)],
    ] as const) {
      expect(pair('fukurokuju', 'raizo', before)?.type).toBe(rival)
      expect(pair('fukurokuju', 'raizo', at)?.type).toBe(defeated)
    }
  })

  it('keeps Rocks’s later family and God Valley revelations behind manga gates', () => {
    expect(pair('rocks-d-xebec', 'marshall-d-teach', ch(1153))).toBeUndefined()
    expect(pair('rocks-d-xebec', 'marshall-d-teach', ch(1154))?.type).toBe(
      locale === 'en' ? 'Son' : 'Figlio',
    )
    expect(pair('rocks-d-xebec', 'im', ch(1163))).toBeUndefined()
    expect(pair('rocks-d-xebec', 'im', ch(1164))).toBeDefined()
    expect(pair('rocks-d-xebec', 'figarland-garling', ch(1165))).toBeUndefined()
    expect(pair('rocks-d-xebec', 'figarland-garling', ch(1166))).toBeDefined()

    for (const target of ['marshall-d-teach', 'im', 'figarland-garling']) {
      expect(pair('rocks-d-xebec', target, ep(1300))).toBeUndefined()
    }

    expect(pair('rocks-d-xebec', 'marshall-d-teach', ch(1153))).toBeUndefined()
  })
})
