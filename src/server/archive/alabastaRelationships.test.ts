import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { alabasta } from '~/data/series/one-piece/records/alabasta'
import { alabastaRelationships } from '~/data/series/one-piece/records/alabasta.relationships'
import type { Entity, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { opCharacterPage as characterPage, OP_ARCHIVE } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { ONE_PIECE_LOADED } from '~/test/series'

import { payloadsFor } from './payloads.server'

const characterPayload = payloadsFor(OP_ARCHIVE).find(
  ({ name }) => name === 'loadCharacter',
)
const leaksIn = leaksOf(ONE_PIECE_LOADED)

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = alabasta.entries.filter(({ kind }) => kind === 'character')
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
  const source = mode === 'episode' ? 'anime' : 'manga'
  const applicable = OP_ARCHIVE.datedOf(owner, 'relationships').filter(
    (entry) => toldIn(entry, source),
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
  return characterPage(id, bookmark, locale)?.detail.relationships ?? []
}

/** Compare only the current cards; separate assertions cover history gates. */
function localized(relations: Relationship[], locale: Locale): Card[] {
  return relations.map(({ character, type, summary }) => ({
    character,
    type: type[locale],
    summary: summary[locale],
  }))
}

describe('Alabasta relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      Object.keys(alabastaRelationships).toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it('documents every current character in the provenance inventory', () => {
    const inventory = readFileSync(
      'docs/content-provenance/relationships-814.md',
      'utf8',
    )
    for (const { id } of owners) {
      expect(inventory, id).toContain(`\`${id}\``)
    }
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      const selections = alabasta.dossiers[owner.id]?.relationships

      expect(selections?.length).toBeGreaterThan(0)
    },
  )

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap(
        (owner) => alabasta.dossiers[owner.id]?.relationships ?? [],
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

describe.each(LOCALES)('Alabasta payload boundaries in %s', (locale) => {
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
          characterPage(owner, bookmark, locale) ?? null,
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
      }
    },
  )
})

describe.each(LOCALES)(
  'Alabasta independently pinned revelations in %s',
  (locale) => {
    it('keeps the manga cover marriage out of the anime and carries it forward', () => {
      for (const [owner, target, english, italian] of [
        ['mr-9', 'miss-monday', 'Wife', 'Moglie'],
        ['miss-monday', 'mr-9', 'Husband', 'Marito'],
      ] as const) {
        const pair = (bookmark: Bookmark): RelationshipView | undefined =>
          projected(owner, bookmark, locale).find(
            ({ person }) => person.id === target,
          )

        expect(pair(ch(631))?.type).toBe(
          locale === 'en' ? 'Colleague' : 'Collega',
        )
        expect(pair(ch(632))?.type).toBe(locale === 'en' ? english : italian)
        expect(pair(ch(1150))).toStrictEqual(pair(ch(632)))
        expect(pair(ep(1180))?.type).toBe(
          locale === 'en' ? 'Colleague' : 'Collega',
        )
      }
    })

    it('gates a future connection even when both people are already open', () => {
      for (const [before, at] of [
        [ep(352), ep(353)],
        [ch(458), ch(459)],
      ] as const) {
        expect(
          projected('laboon', before, locale).map(({ person }) => person.id),
        ).not.toContain('brook')
        expect(
          projected('laboon', at, locale).map(({ person }) => person.id),
        ).toStrictEqual(['crocus', 'brook', 'monkey-d-luffy'])
      }
    })

    it('does not turn an early association into the later escape explanation', () => {
      const currentType =
        locale === 'en' ? 'Fellow fugitive' : 'Compagno di fuga'
      const laterType =
        locale === 'en' ? 'Escape companion' : 'Compagno di fuga'
      const pair = (bookmark: Bookmark): RelationshipView | undefined =>
        projected('nefertari-vivi', bookmark, locale).find(
          ({ person }) => person.id === 'wapol',
        )
      for (const [before, at] of [
        [ep(1118), ep(1119)],
        [ch(1084), ch(1085)],
      ] as const) {
        const old = pair(before)

        expect(old?.type).toBe(currentType)
        expect(old?.summary).not.toContain('CP0')
        expect(pair(at)?.type).toBe(laterType)
        expect(pair(at)?.summary).toContain('CP0')
        expect(pair(before)).toStrictEqual(old)
      }
    })

    it('distinguishes learning that Saul survived from their actual reunion', () => {
      for (const [before, survived, reunited] of [
        [ep(1096), ep(1097), ep(1163)],
        [ch(1065), ch(1066), ch(1133)],
      ] as const) {
        const pair = (bookmark: Bookmark): RelationshipView | undefined =>
          projected('nico-robin', bookmark, locale).find(
            ({ person }) => person.id === 'jaguar-d-saul',
          )

        expect(pair(before)?.type).toBe(
          locale === 'en' ? 'Friend who protects her' : 'Amico che la protegge',
        )
        expect(pair(survived)?.type).toBe(
          locale === 'en' ?
            'Surviving childhood friend'
          : 'Amico d’infanzia sopravvissuto',
        )
        expect(pair(reunited)?.type).toBe(
          locale === 'en' ? 'Reunited friend' : 'Amico ritrovato',
        )
      }
    })

    it('updates the Cross Guild selection only when its actual leadership is disclosed', () => {
      for (const [before, at] of [
        [ep(1085), ep(1086)],
        [ch(1057), ch(1058)],
      ] as const) {
        expect(
          projected('crocodile', before, locale).map(({ person }) => person.id),
        ).not.toContain('dracule-mihawk')
        expect(
          projected('crocodile', at, locale).map(({ person }) => person.id),
        ).toStrictEqual([
          'dracule-mihawk',
          'buggy',
          'mr-1',
          'monkey-d-luffy',
          'nico-robin',
        ])
      }
    })

    it('does not imply Ace learned that Sabo survived after Ace died', () => {
      const afterBrotherhood = projected('portgas-d-ace', ep(497), locale).find(
        ({ person }) => person.id === 'sabo',
      )

      expect(afterBrotherhood?.type).toBe(
        locale === 'en' ? 'Sworn brother' : 'Fratello per giuramento',
      )
      expect(
        projected('portgas-d-ace', ep(663), locale).find(
          ({ person }) => person.id === 'sabo',
        ),
      ).toStrictEqual(afterBrotherhood)
    })

    it('retains the last selection of inactive characters across later sagas', () => {
      for (const [owner, episode, chapter] of [
        ['terracotta', 129, 215],
        ['tsumegeri-guards', 120, 196],
        ['mr-11', 79, 130],
      ] as const) {
        expect(projected(owner, ep(1180), locale)).toStrictEqual(
          projected(owner, ep(episode), locale),
        )
        expect(projected(owner, ch(1150), locale)).toStrictEqual(
          projected(owner, ch(chapter), locale),
        )
      }
    })

    it('keeps Kohza’s discovery out of the preceding chapter', () => {
      const before = projected('kohza', ch(196), locale).find(
        ({ person }) => person.id === 'nefertari-cobra',
      )
      const after = projected('kohza', ch(197), locale).find(
        ({ person }) => person.id === 'nefertari-cobra',
      )

      expect(before?.type).toBe(
        locale === 'en' ? 'King he opposes' : 'Re a cui si oppone',
      )
      expect(after?.type).toBe(
        locale === 'en' ? 'King he misjudged' : 'Re che ha giudicato male',
      )
    })

    it('keeps forced control behind the archived Elbaf boundary', () => {
      for (const owner of ['dorry', 'brogy']) {
        expect(
          projected(owner, ep(1179), locale).map(({ person }) => person.id),
        ).not.toContain('im')
        expect(
          projected(owner, ch(1149), locale).map(({ person }) => person.id),
        ).not.toContain('im')
        expect(
          projected(owner, ep(1180), locale).map(({ person }) => person.id),
        ).toContain('im')
        expect(
          projected(owner, ch(1150), locale).map(({ person }) => person.id),
        ).toContain('im')
      }
    })
  },
)
