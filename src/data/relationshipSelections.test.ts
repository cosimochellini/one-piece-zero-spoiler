import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type {
  Dated,
  Entity,
  Relationship,
  SeriesArchive,
  Timeline,
} from '~/data/types'
import type { Source } from '~/lib/progress/spoiler'
import { relationshipArchive } from '~/test/relationships'
import { LOADED_SERIES } from '~/test/series'

type Selection = Dated<Relationship[]>

function validDate(
  date: number | undefined,
  floor: number,
  ceiling: number,
): boolean {
  return (
    date !== undefined
    && Number.isSafeInteger(date)
    && date >= floor
    && date <= ceiling
  )
}

function entryErrors(owner: Entity, entry: Selection): string[] {
  const ids = entry.value.map(({ character }) => character)
  const distinct = new Set(ids)
  return [
    ...(ids.length > 5 ? ['cap'] : []),
    ...(distinct.size === ids.length ? [] : ['duplicate']),
    ...(ids.includes(owner.id) ? ['self'] : []),
  ]
}

function endpointErrors(
  archive: SeriesArchive,
  entry: Selection,
  source: Source,
): string[] {
  return entry.value
    .map(({ character }) => {
      const target = archive.getCharacter(character)
      if (target?.kind !== 'character') {
        return 'target'
      }
      const date = source === 'episode' ? entry.episode : entry.chapter
      const opens =
        source === 'episode' ?
          target.revealedAtEpisode
        : target.revealedAtChapter
      return !toldIn(target, source) || (date ?? 0) < opens ?
          'endpoint'
        : undefined
    })
    .filter((error) => error !== undefined)
}

function sourceErrors(
  archive: SeriesArchive,
  { owner, timeline }: { owner: Entity; timeline: Timeline<Relationship[]> },
  source: Source,
): string[] {
  if (!toldIn(owner, source)) {
    return []
  }
  const applicable = timeline.filter((entry) => toldIn(entry, source))
  let previous = 0
  return applicable.flatMap((entry) => {
    const date = source === 'episode' ? entry.episode : entry.chapter
    const floor =
      source === 'episode' ? owner.revealedAtEpisode : owner.revealedAtChapter
    const ceiling =
      source === 'episode' ?
        archive.series.episodeCeiling
      : archive.series.chapterCeiling
    const valid = validDate(date, Math.max(floor, previous + 1), ceiling)
    previous = date ?? previous
    return [
      ...(valid ? [] : ['date']),
      ...endpointErrors(archive, entry, source),
    ]
  })
}

/** Data checks reject authoring errors before defensive server filtering is needed. */
function errors(
  archive: SeriesArchive,
  owner: Entity,
  timeline: Timeline<Relationship[]>,
): string[] {
  const incompatible = timeline.some(
    (entry) =>
      owner.source !== undefined
      && entry.source !== undefined
      && owner.source !== entry.source,
  )
  const unpinned = timeline.some(
    (entry) =>
      !validDate(entry.chapter, 1, archive.series.chapterCeiling)
      || !validDate(entry.episode, 1, archive.series.episodeCeiling),
  )
  return [
    ...(incompatible ? ['source'] : []),
    ...(unpinned ? ['date'] : []),
    ...timeline.flatMap((entry) => entryErrors(owner, entry)),
    ...sourceErrors(archive, { owner, timeline }, 'episode'),
    ...sourceErrors(archive, { owner, timeline }, 'chapter'),
  ]
}

function ownerOf(archive: SeriesArchive): Entity {
  const owner = archive.characters[0]
  if (owner === undefined) {
    throw new Error('Missing fixture owner')
  }
  return owner
}

describe.each(LOADED_SERIES)(
  '$slug editorial selection authoring',
  ({ archive }) => {
    it('files valid directed selections with ordered dates and available people', () => {
      for (const owner of archive.characters) {
        expect(
          errors(archive, owner, archive.datedOf(owner, 'relationships')),
          owner.id,
        ).toStrictEqual([])
      }
    })
  },
)

const TEXT = { en: 'A connection.', it: 'Un legame.' }
const RELATION: Relationship = {
  character: 'target',
  summary: TEXT,
  type: TEXT,
}
const ENTRY = { episode: 5, chapter: 7, value: [RELATION] }

describe('selection authoring rejection cases', () => {
  it.each([
    ['self', [{ ...ENTRY, value: [{ ...RELATION, character: 'owner' }] }]],
    ['duplicate', [{ ...ENTRY, value: [RELATION, RELATION] }]],
    ['cap', [{ ...ENTRY, value: Array.from({ length: 6 }, () => RELATION) }]],
    ['target', [{ ...ENTRY, value: [{ ...RELATION, character: 'missing' }] }]],
    ['date', [{ episode: 5, value: [RELATION] }]],
    ['date', [{ ...ENTRY, episode: NaN }]],
    ['date', [{ ...ENTRY, chapter: 7.5 }]],
    ['date', [{ ...ENTRY, episode: 2 }]],
    ['date', [{ ...ENTRY, chapter: 99_999 }]],
    ['date', [ENTRY, { ...ENTRY, episode: 4, chapter: 6 }]],
    ['date', [ENTRY, ENTRY]],
  ] as const)('rejects %s in %j', (expected, timeline) => {
    const archive = relationshipArchive()

    expect(
      errors(
        archive,
        ownerOf(archive),
        [...timeline].map((entry) => ({ ...entry, value: [...entry.value] })),
      ),
    ).toContain(expected)
  })

  it('rejects a target hidden by its date or source and a non-character target', () => {
    for (const archive of [
      relationshipArchive({ targetOpens: 9 }),
      relationshipArchive({ targetSource: 'episode' }),
    ]) {
      const owner = ownerOf(archive)

      expect(errors(archive, owner, [ENTRY])).toContain('endpoint')

      const nonCharacter = {
        ...archive,
        getCharacter: () => ({ ...owner, kind: 'place' as const }),
      }

      expect(errors(nonCharacter, owner, [ENTRY])).toContain('target')
    }
  })

  it('rejects a source restriction incompatible with its owner', () => {
    const archive = relationshipArchive()
    const owner = { ...ownerOf(archive), source: 'episode' as const }

    expect(errors(archive, owner, [{ ...ENTRY, source: 'chapter' }])).toContain(
      'source',
    )
  })

  it('accepts independently ordered source-only selections and an explicit empty selection', () => {
    const archive = relationshipArchive()

    expect(
      errors(archive, ownerOf(archive), [
        ENTRY,
        { episode: 6, chapter: 9, source: 'episode', value: [] },
        { episode: 6, chapter: 8, source: 'chapter', value: [] },
      ]),
    ).toStrictEqual([])
  })
})
