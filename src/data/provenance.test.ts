import { describe, expect, it } from 'vitest'

import { eggheadRelationshipOmissions } from '~/data/series/one-piece/records/egghead.relationships'
import { thrillerBarkRelationshipOmissions } from '~/data/series/one-piece/records/thriller-bark.relationships'
import { CHARACTER_DOSSIERS, sagas } from '~/data/series/one-piece/sagas'
import { LOADED_SERIES } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import elbafEvidence from '../../docs/content-provenance/elbaf-relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import hunterEvidence from '../../docs/content-provenance/hunter-x-hunter.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import relationshipEvidence from '../../docs/content-provenance/relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import manifest from '../../docs/content-provenance/sources.json' with { type: 'json' }

const byId = (a: string, b: string): number => a.localeCompare(b)

const titles = new Set(
  Object.values(manifest.sources).map(({ title }) => title),
)
const characters: Partial<Record<string, null | string>> = relationshipEvidence
const hunter: Record<
  string,
  { pending?: boolean; sources?: string[]; unverified?: string[] }
> = hunterEvidence
const hunterIds = LOADED_SERIES.find(
  ({ slug }) => slug === 'hunter-x-hunter',
)?.archive.entities.map(({ id }) => id)

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
