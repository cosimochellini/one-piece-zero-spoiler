import { describe, expect, it } from 'vitest'

import type { SeriesArchive } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { opCharacterPage as characterPage } from '~/test/archive'
import { relationshipArchive } from '~/test/relationships'
import { LOADED_SERIES } from '~/test/series'

import { readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** Read through the same source-filtered reader as every request. */
function links(archive: SeriesArchive, bookmark: Bookmark): RelationshipView[] {
  const r = readerFor(archive, bookmark, 'en')
  const owner = r.archive.getCharacter('owner')
  if (owner === undefined) {
    throw new Error('The fixture owner is absent')
  }
  return relationshipsOf(owner, r)
}

describe('relationship facts independent of endpoint visibility', () => {
  it('withholds a future connection between two already-known people', () => {
    const archive = relationshipArchive()

    expect(links(archive, ep(4))).toStrictEqual([])
    expect(links(archive, ch(6))).toStrictEqual([])
    expect(links(archive, ep(5))).toHaveLength(1)
    expect(links(archive, ch(7))).toHaveLength(1)
    expect(links(archive, ep(4))).toStrictEqual([])
  })

  it('requires both people to be reached, and never sends a covered placeholder', () => {
    const archive = relationshipArchive({ targetOpens: 9 })

    expect(links(archive, null)).toStrictEqual([])
    expect(links(archive, ep(2))).toStrictEqual([])
    expect(links(archive, ep(8))).toStrictEqual([])
    expect(links(archive, ch(8))).toStrictEqual([])
    expect(links(archive, ep(9))).toHaveLength(1)
    expect(links(archive, ch(9))).toHaveLength(1)
  })

  it.each(['anime', 'manga'] as const)(
    'source-filters a %s relationship before projection',
    (source) => {
      const archive = relationshipArchive({ source })

      expect(links(archive, source === 'anime' ? ep(10) : ch(10))).toHaveLength(
        1,
      )
      expect(
        links(archive, source === 'anime' ? ch(10) : ep(10)),
      ).toStrictEqual([])
    },
  )

  it.each(['anime', 'manga'] as const)(
    'cannot reintroduce a person of the %s alone',
    (source) => {
      const archive = relationshipArchive({ targetSource: source })

      expect(links(archive, source === 'anime' ? ep(10) : ch(10))).toHaveLength(
        1,
      )
      expect(
        links(archive, source === 'anime' ? ch(10) : ep(10)),
      ).toStrictEqual([])
    },
  )
})

/** The requested pilot page, with a failed lookup treated as a broken fixture. */
function pilotAt(bookmark: Bookmark, locale: Locale): RelationshipView[] {
  const page = characterPage('mansherry', bookmark, locale)
  if (page === undefined) {
    throw new Error('The pilot page is absent')
  }
  return page.detail.relationships
}

describe('the pilot at independently verified relationship thresholds', () => {
  it.each(LOCALES)(
    'keeps the initial relation behind the character gate in %s',
    (locale) => {
      for (const bookmark of [null, ep(692), ch(754)]) {
        expect(pilotAt(bookmark, locale)).toStrictEqual([])
      }
    },
  )

  it.each(LOCALES)(
    'localises reached relationships and restores earlier state in %s',
    (locale) => {
      const initial = pilotAt(ep(693), locale)
      const open = pilotAt(ep(714), locale)

      expect(open.map(({ person }) => person.id)).toStrictEqual(['leo', 'jora'])
      expect(open.map(({ type }) => type)).toStrictEqual(
        locale === 'en' ?
          ['Rescuer', 'Hostility']
        : ['Soccorritore', 'Ostilità'],
      )
      expect(pilotAt(ch(774), locale)).toStrictEqual(open)
      expect(pilotAt(ep(1150), locale)).toStrictEqual(open)
      expect(initial.map(({ person }) => person.id)).toStrictEqual(['leo'])
      expect(pilotAt(ch(755), locale)).toStrictEqual(initial)
      expect(pilotAt(ep(713), locale)).toStrictEqual(initial)
      expect(pilotAt(ch(773), locale)).toStrictEqual(initial)
      expect(initial[0]?.history).toHaveLength(1)
      expect(open[0]?.history).toHaveLength(2)
      expect(open[1]?.history).toHaveLength(1)
      expect(
        characterPage('nami', ep(1150), locale)?.detail.relationships,
      ).toStrictEqual([])
    },
  )
})

/** The raw authored field joins the same inventory as every dated fact. */
describe.each(LOADED_SERIES)(
  '$slug relationship date inventory',
  ({ archive }) => {
    const snapshots = archive.characters.flatMap((owner) =>
      archive
        .datedOf(owner, 'relationships')
        .map((entry) => ({ owner, entry })),
    )

    it('holds authored people-only snapshots to a small, unique set of valid targets', () => {
      const dates = snapshots.map(
        ({ owner, entry }) =>
          `${owner.id}:${String(entry.episode)}:${String(entry.chapter)}:${entry.source ?? 'both'}`,
      )
      const distinctDates = new Set(dates)

      expect(distinctDates.size).toBe(dates.length)

      for (const { owner, entry } of snapshots) {
        const ids = entry.value.map(({ character }) => character)

        expect(ids.length, owner.id).toBeLessThanOrEqual(5)

        const distinct = new Set(ids)

        expect(distinct.size, owner.id).toBe(ids.length)
        expect(ids, owner.id).not.toContain(owner.id)

        for (const id of ids) {
          expect(archive.getCharacter(id), id).toBeDefined()
        }

        expect(entry.chapter, owner.id).toBeDefined()
        expect(
          archive.timelines.some(
            ({ owner: filed, field }) =>
              filed.id === owner.id && field === 'relationships',
          ),
        ).toBe(true)
      }
    })
  },
)

describe.each(LOCALES)(
  'Koby’s cross-saga editorial selections in %s',
  (locale) => {
    function at(bookmark: Bookmark): RelationshipView[] {
      const page = characterPage('koby', bookmark, locale)
      if (page === undefined) {
        throw new Error('Koby is absent')
      }
      return page.detail.relationships
    }

    it.each([
      [null, []],
      [ch(1), []],
      [ep(1), ['monkey-d-luffy', 'alvida']],
      [ch(2), ['monkey-d-luffy', 'alvida']],
      [ep(314), ['monkey-d-luffy', 'alvida']],
      [ch(432), ['monkey-d-luffy', 'alvida']],
      [ep(315), ['monkey-d-luffy']],
      [ch(433), ['monkey-d-luffy']],
      [ep(487), ['monkey-d-luffy']],
      [ch(578), ['monkey-d-luffy']],
      [ep(488), ['shanks', 'sakazuki', 'monkey-d-luffy']],
      [ch(579), ['shanks', 'sakazuki', 'monkey-d-luffy']],
    ])(
      'selects only reached people in editorial order at %j',
      (bookmark, expected) => {
        expect(at(bookmark).map(({ person }) => person.id)).toStrictEqual(
          expected,
        )
      },
    )

    it('retains history and localises the changed relationship state', () => {
      const reunion = at(ep(315))
      const war = at(ep(488))

      expect(at(ch(2))).toStrictEqual(at(ep(1)))
      expect(at(ch(433))).toStrictEqual(reunion)
      expect(at(ch(579))).toStrictEqual(war)
      expect(war[2]?.history).toStrictEqual(reunion[0]?.history)
      expect(war[2]?.history).toHaveLength(2)
      expect(reunion[0]?.type).toBe(
        locale === 'en' ?
          'Friend on the opposing side'
        : 'Amico su un fronte opposto',
      )
    })

    it('carries unchanged selections across later sagas and restores earlier bookmarks', () => {
      const initial = at(ep(1))
      const reunion = at(ep(315))
      const war = at(ep(488))

      expect(at(ep(1150))).toStrictEqual(war)
      expect(at(ch(1100))).toStrictEqual(war)
      expect(at(ep(1))).toStrictEqual(initial)
      expect(at(ch(433))).toStrictEqual(reunion)
      expect(pilotAt(ch(1100), locale)).toStrictEqual(pilotAt(ch(774), locale))
    })

    it('withholds future relationship facts even when their people are already known', () => {
      const sent = JSON.stringify(at(ch(578)))

      expect(sent).not.toContain('shanks')
      expect(sent).not.toContain('sakazuki')
      expect(sent).not.toContain('Hostility')
      expect(sent).not.toContain('Ostilità')
      expect(sent).not.toContain('579')
    })
  },
)
