import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { waterSeven } from '~/data/series/one-piece/records/water-seven'
import { waterSevenRelationships } from '~/data/series/one-piece/records/water-seven.relationships'
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

const owners = waterSeven.entries.filter(({ kind }) => kind === 'character')
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

describe('Water Seven relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      Object.keys(waterSevenRelationships).toSorted((a, b) =>
        a.localeCompare(b),
      ),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      const selections = waterSeven.dossiers[owner.id]?.relationships

      expect(selections?.length).toBeGreaterThan(0)
    },
  )

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap(
        (owner) => waterSeven.dossiers[owner.id]?.relationships ?? [],
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

describe.each(LOCALES)('Water Seven payload boundaries in %s', (locale) => {
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
  'Water Seven independently verified events in %s',
  (locale) => {
    function relationAt(
      owner: string,
      target: string,
      bookmark: Bookmark,
    ): RelationshipView | undefined {
      return projected(owner, bookmark, locale).find(
        ({ person }) => person.id === target,
      )
    }

    it('makes Luffy’s captaincy a reached change when Franky joins', () => {
      const captain = locale === 'en' ? 'Captain' : 'Capitano'
      for (const [before, at] of [
        [ep(321), ep(322)],
        [ch(436), ch(437)],
      ] as const) {
        const earlier = relationAt('franky', 'monkey-d-luffy', before)

        expect(earlier?.type).not.toBe(captain)
        expect(relationAt('franky', 'monkey-d-luffy', at)?.type).toBe(captain)
        expect(relationAt('franky', 'monkey-d-luffy', before)).toStrictEqual(
          earlier,
        )
      }
    })

    it('waits for the final part of chapter 775 before describing Franky’s offer to Pink', () => {
      expect(
        relationAt('franky', 'senor-pink', ep(715))?.summary ?? '',
      ).not.toContain('Russian')
      expect(relationAt('franky', 'senor-pink', ep(716))?.summary).toContain(
        'Russian',
      )
      expect(
        relationAt('franky', 'senor-pink', ch(774))?.summary ?? '',
      ).not.toContain('Russian')
      expect(relationAt('franky', 'senor-pink', ch(775))?.summary).toContain(
        'Russian',
      )
    })

    it('keeps Chopper in Foxy’s anime crew after the manga has already returned him', () => {
      const prize =
        locale === 'en' ? 'Crewmate won in a game' : 'Compagno vinto in gara'
      const returned =
        locale === 'en' ? 'Former prize crewmate' : 'Ex compagno vinto in gara'

      expect(relationAt('porche', 'tony-tony-chopper', ep(212))?.type).toBe(
        prize,
      )
      expect(relationAt('porche', 'tony-tony-chopper', ep(219))?.type).toBe(
        returned,
      )
      expect(relationAt('porche', 'tony-tony-chopper', ch(315))?.type).toBe(
        returned,
      )
      expect(relationAt('porche', 'tony-tony-chopper', ep(212))?.type).toBe(
        prize,
      )
    })

    it('keeps Tonjit’s manga rescue behind Kuzan’s endpoint and out of the anime', () => {
      expect(relationAt('tonjit', 'kuzan', ch(320))).toBeUndefined()
      expect(relationAt('tonjit', 'kuzan', ch(321))).toBeDefined()
      expect(relationAt('tonjit', 'kuzan', ep(1300))).toBeUndefined()
    })

    it('waits for Kuzan’s rescue of Smoker, not his arrival', () => {
      expect(relationAt('kuzan', 'smoker', ch(698))).toBeUndefined()
      expect(relationAt('kuzan', 'smoker', ch(699))).toBeDefined()
      expect(relationAt('kuzan', 'smoker', ep(624))).toBeUndefined()
      expect(relationAt('kuzan', 'smoker', ep(625))).toBeDefined()
    })

    it('distinguishes Saul’s survival from the later reunion with Robin', () => {
      for (const [before, survived, beforeReunion, reunited] of [
        [ep(1096), ep(1097), ep(1162), ep(1163)],
        [ch(1065), ch(1066), ch(1132), ch(1133)],
      ] as const) {
        const earlier = relationAt('jaguar-d-saul', 'nico-robin', before)
        const survival = relationAt('jaguar-d-saul', 'nico-robin', survived)
        const reunion = relationAt('jaguar-d-saul', 'nico-robin', reunited)

        expect(earlier).toBeDefined()
        expect(survival).toBeDefined()
        expect(reunion).toBeDefined()
        expect(survival).not.toStrictEqual(earlier)
        expect(
          relationAt('jaguar-d-saul', 'nico-robin', beforeReunion),
        ).toStrictEqual(survival)
        expect(reunion).not.toStrictEqual(survival)
        expect(relationAt('jaguar-d-saul', 'nico-robin', before)).toStrictEqual(
          earlier,
        )
      }
    })

    it.each([
      ['jerry', 253, 362],
      ['wanze', 261, 372],
      ['thatch', 461, 552],
    ] as const)(
      'retains %s’s last selection without adding history stages',
      (owner, episode, chapter) => {
        expect(projected(owner, ep(1300), locale)).toStrictEqual(
          projected(owner, ep(episode), locale),
        )
        expect(projected(owner, ch(1300), locale)).toStrictEqual(
          projected(owner, ch(chapter), locale),
        )
      },
    )

    it('sends no relationship cards for a covered owner or an unset bookmark', () => {
      expect(projected('franky', null, locale)).toStrictEqual([])
      expect(projected('franky', ep(234), locale)).toStrictEqual([])
      expect(projected('franky', ch(328), locale)).toStrictEqual([])
    })
  },
)
