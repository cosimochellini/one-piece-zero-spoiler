import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { skypiea } from '~/data/series/one-piece/records/skypiea'
import {
  skypieaRelationshipOmissions,
  skypieaRelationships,
} from '~/data/series/one-piece/records/skypiea.relationships'
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

const owners = skypiea.entries.filter(({ kind }) => kind === 'character')
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

describe('Skypiea relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(skypieaRelationships),
        ...Object.keys(skypieaRelationshipOmissions),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(
    owners.filter(({ id }) => !Object.hasOwn(skypieaRelationshipOmissions, id)),
  )('authors at least one supported selection for $id', (owner) => {
    expect(skypiea.dossiers[owner.id]?.relationships?.length).toBeGreaterThan(0)
  })

  it.each(Object.entries(skypieaRelationshipOmissions))(
    'records why %s has no supported relationships',
    (id, reason) => {
      expect(skypiea.dossiers[id]?.relationships).toBeUndefined()
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
        (owner) => skypiea.dossiers[owner.id]?.relationships ?? [],
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

describe.each(LOCALES)('Skypiea payload boundaries in %s', (locale) => {
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

describe.each(LOCALES)('Skypiea selection persistence in %s', (locale) => {
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

describe.each(LOCALES)(
  'Skypiea independently pinned revelations in %s',
  (locale) => {
    it('keeps Kuma’s fatherhood hidden even when Bonney is already known', () => {
      for (const [before, at] of [
        [ep(1091), ep(1092)],
        [ch(1062), ch(1063)],
      ] as const) {
        const earlier = projected('bartholomew-kuma', before, locale)

        expect(earlier.map(({ person }) => person.id)).not.toContain(
          'jewelry-bonney',
        )
        expect(
          projected('bartholomew-kuma', at, locale).find(
            ({ person }) => person.id === 'jewelry-bonney',
          )?.type,
        ).toBe(locale === 'en' ? 'Daughter' : 'Figlia')
        expect(projected('bartholomew-kuma', before, locale)).toStrictEqual(
          earlier,
        )
      }
    })

    it('does not expose adoption until Kuma’s history reveals it', () => {
      for (const [before, at] of [
        [ep(1131), ep(1132)],
        [ch(1097), ch(1098)],
      ] as const) {
        const pair = (bookmark: Bookmark): RelationshipView | undefined =>
          projected('bartholomew-kuma', bookmark, locale).find(
            ({ person }) => person.id === 'jewelry-bonney',
          )
        const earlier = pair(before)

        expect(earlier?.type).toBe(locale === 'en' ? 'Daughter' : 'Figlia')
        expect(pair(at)?.type).toBe(
          locale === 'en' ? 'Adopted daughter' : 'Figlia adottiva',
        )
        expect(pair(at)?.history.length).toBeGreaterThan(1)
        expect(pair(before)).toStrictEqual(earlier)
      }
    })

    it('waits for Sengoku’s parental bond with Rosinante to be disclosed', () => {
      for (const [before, at] of [
        [ep(741), ep(742)],
        [ch(797), ch(798)],
      ] as const) {
        const pair = (bookmark: Bookmark): RelationshipView | undefined =>
          projected('sengoku', bookmark, locale).find(
            ({ person }) => person.id === 'donquixote-rosinante',
          )
        const earlier = pair(before)

        expect(earlier?.type).toBe(
          locale === 'en' ? 'Undercover officer' : 'Ufficiale infiltrato',
        )
        expect(pair(at)?.type).toBe(
          locale === 'en' ? 'Son he raised' : 'Figlio che ha cresciuto',
        )
        expect(pair(before)).toStrictEqual(earlier)
      }
    })
  },
)

describe.each(LOCALES)(
  'Skypiea flashback and cover boundaries in %s',
  (locale) => {
    it('delays Noland’s manga history behind his endpoint and separates the anime stages', () => {
      expect(projected('montblanc-noland', ch(291), locale)).toStrictEqual([])
      expect(
        projected('montblanc-noland', ch(292), locale).map(
          ({ person }) => person.id,
        ),
      ).toStrictEqual(['kalgara', 'mousse', 'seto'])

      const pair = (episode: number): RelationshipView | undefined =>
        projected('montblanc-noland', ep(episode), locale).find(
          ({ person }) => person.id === 'kalgara',
        )

      expect(
        [187, 188, 189].map((episode) => pair(episode)?.type),
      ).toStrictEqual(
        {
          en: ['Opponent', 'Estranged friend', 'Friend he promises to revisit'],
          it: [
            'Avversario',
            'Amico allontanato',
            'Amico da cui promette di tornare',
          ],
        }[locale],
      )
      expect(pair(189)?.history).toHaveLength(3)
      expect(pair(188)?.history).toHaveLength(2)
    })

    it('keeps Seto’s marriage behind the flashback’s later revelation', () => {
      for (const [before, at] of [
        [ep(188), ep(189)],
        [ch(291), ch(292)],
      ] as const) {
        expect(
          projected('seto', before, locale).map(({ person }) => person.id),
        ).not.toContain('mousse')
        expect(
          projected('seto', at, locale).find(
            ({ person }) => person.id === 'mousse',
          )?.type,
        ).toBe(locale === 'en' ? 'Wife' : 'Moglie')
      }
    })

    it('keeps the chief’s cover-story wording out of the anime', () => {
      const pair = (bookmark: Bookmark): RelationshipView | undefined =>
        projected('shandia-chief', bookmark, locale).find(
          ({ person }) => person.id === 'gan-fall',
        )

      expect(pair(ch(301))).toBeUndefined()
      expect(pair(ep(194))).toBeUndefined()

      const supported =
        locale === 'en' ? 'Ruler he supports' : 'Governante che sostiene'

      expect(pair(ch(302))?.type).toBe(supported)
      expect(pair(ep(195))?.type).toBe(supported)
      expect(pair(ch(426))?.type).toBe(supported)
      expect(pair(ch(427))?.type).toBe(
        locale === 'en' ? 'Peaceful neighbour' : 'Vicino in pace',
      )
      expect(pair(ep(1180))).toStrictEqual(pair(ep(195)))
    })

    it('keeps Conis’s cafe partnership manga-only after later shared appearances', () => {
      expect(
        projected('conis', ch(646), locale).map(({ person }) => person.id),
      ).not.toContain('laki')
      expect(
        projected('conis', ch(647), locale).map(({ person }) => person.id),
      ).toContain('laki')
      expect(
        projected('conis', ch(1150), locale).map(({ person }) => person.id),
      ).toContain('laki')
      expect(
        projected('conis', ep(1180), locale).map(({ person }) => person.id),
      ).not.toContain('laki')
    })

    it('dates Nola’s grief without changing its earlier companion history', () => {
      const [companion, missed] = {
        en: ['Old companion', 'Companion it misses'],
        it: ['Vecchio amico', 'Amico di cui sente la mancanza'],
      }[locale]

      for (const [before, at] of [
        [ep(190), ep(191)],
        [ch(295), ch(296)],
      ] as const) {
        const earlier = projected('nola', before, locale)
        const later = projected('nola', at, locale)

        expect(earlier.map(({ type }) => type)).toStrictEqual([
          companion,
          companion,
        ])
        expect(later.map(({ type }) => type)).toStrictEqual([missed, missed])
        expect(later.every(({ history }) => history.length === 2)).toBe(true)
        expect(projected('nola', before, locale)).toStrictEqual(earlier)
      }
    })
  },
)
