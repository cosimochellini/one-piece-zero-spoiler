import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { eastBlue } from '~/data/series/one-piece/records/east-blue'
import { eastBlueRelationships } from '~/data/series/one-piece/records/east-blue.relationships'
import type { Entity, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { opCharacterPage as characterPage, OP_ARCHIVE } from '~/test/archive'

const owners = eastBlue.entries.filter(({ kind }) => kind === 'character')
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

describe('East Blue relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      Object.keys(eastBlueRelationships).toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      expect(
        eastBlue.dossiers[owner.id]?.relationships?.length,
      ).toBeGreaterThan(0)
    },
  )

  it.each(LOCALES)(
    'has original nonempty types and explanations in %s',
    (locale) => {
      const selections = Object.values(eastBlueRelationships).flat()
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

describe.each(LOCALES)('East Blue payload boundaries in %s', (locale) => {
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

  it('carries an inactive character forward with its reached history', () => {
    expect(
      projected('rika', { mode: 'episode', episode: 1168 }, locale),
    ).toStrictEqual(projected('rika', { mode: 'episode', episode: 3 }, locale))
  })

  it('keeps the late family revelation out of Shanks’s earlier payload', () => {
    const bookmarks: Bookmark[] = [
      { mode: 'episode', episode: 1167 },
      { mode: 'chapter', chapter: 1137 },
    ]
    for (const bookmark of bookmarks) {
      const payload = JSON.stringify(projected('shanks', bookmark, locale))

      expect(payload).not.toContain('figarland-shamrock')
      expect(payload).not.toContain('figarland-garling')
      expect(payload).not.toContain('twin')
      expect(payload).not.toContain('gemello')
    }
  })
})
