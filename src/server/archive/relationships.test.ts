import { describe, expect, it } from 'vitest'

import { chapterTable } from '~/data/chapterTable'
import { anchorsOf, datedArchive, filedTimelines } from '~/data/dated'
import type {
  CharacterDossier,
  Entity,
  Relationship,
  SeriesArchive,
} from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Source } from '~/lib/progress/spoiler'
import type { RelationshipView } from '~/lib/view/relationships'
import { opCharacterPage as characterPage, OP_ARCHIVE } from '~/test/archive'
import { LOADED_SERIES } from '~/test/series'

import { readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** A tiny real dated-field archive, independent of the pilot's cast. */
function fixture(
  source?: Source,
  targetSource?: Source,
  targetOpens = 2,
): SeriesArchive {
  const text = { en: 'A connection.', it: 'Un legame.' }
  const owner: Entity = {
    id: 'owner',
    kind: 'character',
    name: { en: 'Owner', it: 'Persona' },
    revealedAtEpisode: 3,
    revealedAtChapter: 4,
    summary: text,
    visual: { art: 'owner', tint: 'yellow' },
  }
  const target: Entity = {
    ...owner,
    id: 'target',
    name: { en: 'Target', it: 'Altra persona' },
    revealedAtEpisode: targetOpens,
    revealedAtChapter: targetOpens,
    ...(targetSource !== undefined && { source: targetSource }),
  }
  const relationship: Relationship = {
    character: target.id,
    type: text,
    summary: text,
  }
  const dossier: CharacterDossier = {
    affiliation: [],
    log: text,
    role: text,
    relationships: [
      {
        episode: 5,
        chapter: 7,
        ...(source !== undefined && { source }),
        value: [relationship],
      },
    ],
  }
  const entities = [owner, target]
  const filed = filedTimelines({ [owner.id]: dossier })
  const { gateOf } = chapterTable({
    anchors: anchorsOf(entities, filed),
    records: entities,
    chapterCeiling: 20,
    episodeCeiling: 20,
  })
  return {
    ...OP_ARCHIVE,
    ...datedArchive({ characters: entities, entities, filed, gateOf }),
    entities,
    characters: entities,
    getCharacter: (id) => entities.find((entity) => entity.id === id),
    getEntity: (id) => entities.find((entity) => entity.id === id),
    dossierOf: (entity) => (entity.id === owner.id ? dossier : undefined),
  }
}

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
    const archive = fixture()

    expect(links(archive, ep(4))).toStrictEqual([])
    expect(links(archive, ch(6))).toStrictEqual([])
    expect(links(archive, ep(5))).toHaveLength(1)
    expect(links(archive, ch(7))).toHaveLength(1)
    expect(links(archive, ep(4))).toStrictEqual([])
  })

  it('requires both people to be reached, and never sends a covered placeholder', () => {
    const archive = fixture(undefined, undefined, 9)

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
      const archive = fixture(source)

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
      const archive = fixture(undefined, source)

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
    'keeps every relation absent until 714/774 in %s',
    (locale) => {
      for (const bookmark of [
        null,
        ep(692),
        ep(693),
        ep(713),
        ch(754),
        ch(755),
        ch(773),
      ]) {
        expect(pilotAt(bookmark, locale)).toStrictEqual([])
      }
    },
  )

  it.each(LOCALES)(
    'localises reached relationships and restores earlier state in %s',
    (locale) => {
      const open = pilotAt(ep(714), locale)

      expect(open.map(({ person }) => person.id)).toStrictEqual(['leo', 'jora'])
      expect(open.map(({ type }) => type)).toStrictEqual(
        locale === 'en' ?
          ['Rescuer', 'Hostility']
        : ['Soccorritore', 'Ostilità'],
      )
      expect(pilotAt(ch(774), locale)).toStrictEqual(open)
      expect(pilotAt(ep(1150), locale)).toStrictEqual(open)
      expect(pilotAt(ep(713), locale)).toStrictEqual([])
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
