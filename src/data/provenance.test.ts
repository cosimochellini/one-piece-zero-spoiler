import { describe, expect, it } from 'vitest'

import { eggheadRelationshipOmissions } from '~/data/series/one-piece/records/egghead.relationships'
import { thrillerBarkRelationshipOmissions } from '~/data/series/one-piece/records/thriller-bark.relationships'
import { CHARACTER_DOSSIERS, sagas } from '~/data/series/one-piece/sagas'
import { LOADED_SERIES } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import elbafEvidence from '../../docs/content-provenance/elbaf-relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import hunterRelationshipEvidence from '../../docs/content-provenance/hunter-x-hunter-relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import hunterEvidence from '../../docs/content-provenance/hunter-x-hunter.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import relationshipEvidence from '../../docs/content-provenance/relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import manifest from '../../docs/content-provenance/sources.json' with { type: 'json' }

const byId = (a: string, b: string): number => a.localeCompare(b)

function hostOf(url: string): string {
  const parsed = new URL(url)
  return parsed.host
}

/** The page titles pinned from one series' wiki: a same-titled page elsewhere is no evidence. */
function titlesOn(host: string): Set<string> {
  return new Set(
    Object.values(manifest.sources)
      .filter(({ url }) => hostOf(url) === host)
      .map(({ title }) => title),
  )
}

const titles = titlesOn('onepiece.fandom.com')
const hunterTitles = titlesOn('hunterxhunter.fandom.com')
const characters: Partial<Record<string, null | string>> = relationshipEvidence
const hunter: Record<
  string,
  { pending?: boolean; sources?: string[]; unverified?: string[] }
> = hunterEvidence
const hunterArchive = LOADED_SERIES.find(
  ({ slug }) => slug === 'hunter-x-hunter',
)?.archive
const hunterIds = hunterArchive?.entities.map(({ id }) => id)
const hunterRelationships: {
  authored: Record<string, string[]>
  omitted: Record<string, string>
} = hunterRelationshipEvidence
const hunterCharacters =
  hunterArchive?.entities.filter(({ kind }) => kind === 'character') ?? []
const hunterOwners = hunterCharacters
  .map((entity) => ({
    id: entity.id,
    relationships: hunterArchive?.datedOf(entity, 'relationships') ?? [],
  }))
  .filter(({ relationships }) => relationships.length > 0)

const owners = Object.entries(CHARACTER_DOSSIERS)
  .filter(([, { relationships }]) => relationships !== undefined)
  .map(([id, { relationships = [] }]) => ({ id, relationships }))

const cohortIds = sagas.flatMap(({ entries }) =>
  entries.filter(({ kind }) => kind === 'character').map(({ id }) => id),
)

describe('relationship provenance', () => {
  it('accounts for every debut cohort with authored selections or explicit omissions', () => {
    const authored = new Set(owners.map(({ id }) => id))
    const omitted: Record<string, string> = {
      ...elbafEvidence.omitted,
      ...eggheadRelationshipOmissions,
      ...thrillerBarkRelationshipOmissions,
    }

    expect([...authored, ...Object.keys(omitted)].toSorted(byId)).toStrictEqual(
      cohortIds.toSorted(byId),
    )

    for (const [id, reason] of Object.entries(omitted)) {
      expect(authored.has(id), id).toBe(false)
      expect(reason.trim().length, id).toBeGreaterThan(0)
    }
    for (const { id, relationships } of owners) {
      expect(
        relationships.some(({ value }) => value.length > 0),
        id,
      ).toBe(true)
    }
  })

  it('lists exactly the characters that have relationships', () => {
    expect(Object.keys(characters).toSorted(byId)).toStrictEqual(
      owners.map(({ id }) => id).toSorted(byId),
    )
  })

  it.each(owners)('pins the character revision of $id', ({ id }) => {
    expect([null, ...Object.keys(manifest.sources)]).toContain(characters[id])
  })

  it.each(owners)(
    'pins every episode and chapter gate of $id',
    ({ relationships }) => {
      // A one-source entry's other number only orders it: nothing to cite.
      const pages = relationships.flatMap(({ episode, chapter, source }) => [
        ...(source === 'chapter' ? [] : [`Episode ${String(episode)}`]),
        ...(source === 'episode' ? [] : [`Chapter ${String(chapter)}`]),
      ])

      expect(pages.filter((page) => !titles.has(page))).toStrictEqual([])
    },
  )
})

describe('Hunter x Hunter provenance', () => {
  it.each(Object.entries(hunter))(
    'records what was read or is still open for %s',
    (id, { sources: read = [], unverified = [] }) => {
      expect(read.length + unverified.length, id).toBeGreaterThan(0)
    },
  )

  it.each(Object.entries(hunter).filter(([, { pending }]) => pending !== true))(
    'keeps filed research attached to the archive for %s',
    (id) => {
      expect(hunterIds).toContain(id)
    },
  )

  it.each(Object.entries(hunter).filter(([, { pending }]) => pending === true))(
    'keeps pending research outside the archive with open checks for %s',
    (id, { unverified = [] }) => {
      expect(hunterIds).not.toContain(id)
      expect(unverified.length).toBeGreaterThan(0)
    },
  )
})

describe('Hunter x Hunter relationship provenance', () => {
  const { authored, omitted } = hunterRelationships

  it('accounts for every archived character exactly once', () => {
    expect(
      [...Object.keys(authored), ...Object.keys(omitted)].toSorted(byId),
    ).toStrictEqual(hunterCharacters.map(({ id }) => id).toSorted(byId))
  })

  it('lists as authored exactly the characters that have relationships', () => {
    expect(Object.keys(authored).toSorted(byId)).toStrictEqual(
      hunterOwners.map(({ id }) => id).toSorted(byId),
    )

    for (const { id, relationships } of hunterOwners) {
      expect(
        relationships.some(({ value }) => value.length > 0),
        id,
      ).toBe(true)
    }
  })

  it.each(Object.entries(omitted))(
    'gives a reason to omit %s',
    (id, reason) => {
      expect(hunterOwners.map((owner) => owner.id)).not.toContain(id)
      expect(reason.trim().length).toBeGreaterThan(0)
    },
  )

  it.each(Object.entries(authored))(
    'pins the wiki revisions read for %s on the series wiki',
    (id, keys) => {
      const sources: Partial<Record<string, { url: string }>> = manifest.sources

      expect(keys.length, id).toBeGreaterThan(0)

      for (const key of keys) {
        expect(key, id).toMatch(/^hxh-/u)
        expect(hostOf(sources[key]?.url ?? 'missing:'), key).toBe(
          'hunterxhunter.fandom.com',
        )
      }
    },
  )

  it.each(hunterOwners)(
    'pins every episode and chapter gate of $id on the series wiki',
    ({ relationships }) => {
      // A one-source entry's other number only orders it: nothing to cite.
      const pages = relationships.flatMap(({ episode, chapter, source }) => [
        ...(source === 'chapter' ? [] : [`Episode ${String(episode)} (2011)`]),
        ...(source === 'episode' ? [] : [`Chapter ${String(chapter)}`]),
      ])

      expect(pages.filter((page) => !hunterTitles.has(page))).toStrictEqual([])
    },
  )
})
