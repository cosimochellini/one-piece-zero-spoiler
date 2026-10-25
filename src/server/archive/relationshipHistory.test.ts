import { describe, expect, it } from 'vitest'

import type { Relationship, SeriesArchive, Timeline } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { relationshipArchive } from '~/test/relationships'

import { readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

/** These invented people and turning points exist only in test fixtures. */
function connection(
  type: string,
  summary: string,
  character = 'target',
): Relationship {
  return {
    character,
    type: { en: type, it: `IT ${type}` },
    summary: { en: summary, it: `IT ${summary}` },
  }
}

const FRIEND = connection('Ally', 'Offers help.')
const ENEMY = connection('Enemy', 'Attacks them.')
const OTHER = connection('Acquaintance', 'They meet.', 'other')
const OTHER_CHANGED = connection('Rival', 'They compete.', 'other')
const CHANGES: Timeline<Relationship[]> = [
  { episode: 5, chapter: 7, value: [FRIEND, OTHER] },
  { episode: 6, chapter: 8, value: [FRIEND, OTHER_CHANGED] },
  { episode: 7, chapter: 9, value: [ENEMY, OTHER_CHANGED] },
  { episode: 8, chapter: 10, value: [FRIEND, OTHER_CHANGED] },
]

/** Exercise the actual source-filtered reader, with both directed perspectives. */
function page(
  archive: SeriesArchive,
  bookmark: Bookmark,
  {
    locale = 'en',
    ownerId = 'owner',
  }: { locale?: Locale; ownerId?: string } = {},
): RelationshipView[] {
  const r = readerFor(archive, bookmark, locale)
  const owner = r.archive.getCharacter(ownerId)
  if (owner === undefined) {
    throw new Error('The fixture person is absent')
  }
  return relationshipsOf(owner, r)
}

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

describe('each pair’s reached relationship history', () => {
  const archive = relationshipArchive({ snapshots: CHANGES })

  it('deduplicates unchanged consecutive pair states while retaining A→B→A', () => {
    const [target, other] = page(archive, ep(8))

    expect(target?.history.map(({ type }) => type)).toStrictEqual([
      'Ally',
      'Enemy',
      'Ally',
    ])
    expect(
      target?.history.map(({ revealedAtEpisode }) => revealedAtEpisode),
    ).toStrictEqual([5, 7, 8])
    expect(other?.history.map(({ type }) => type)).toStrictEqual([
      'Acquaintance',
      'Rival',
    ])
    expect(target?.type).toBe('Ally')
    expect(target?.summary).toBe('Offers help.')
  })

  it('never sends an eventual type or history stage before its own gate', () => {
    const early = page(archive, ep(6))

    expect(early[0]?.history).toHaveLength(1)
    expect(JSON.stringify(early)).not.toContain('Enemy')
    expect(JSON.stringify(early)).not.toContain('Attacks them.')
    expect(page(archive, ep(7))[0]?.type).toBe('Enemy')
    expect(page(archive, ch(8))[0]?.history).toHaveLength(1)
    expect(page(archive, ch(9))[0]?.type).toBe('Enemy')
    expect(page(archive, ch(10))[0]?.history).toHaveLength(3)
    expect(page(archive, ep(6))).toStrictEqual(early)
  })

  it('localises every reached stage rather than just the current card', () => {
    expect(
      page(archive, ch(10), { locale: 'it' })[0]?.history.map(
        ({ type, summary }) => [type, summary],
      ),
    ).toStrictEqual([
      ['IT Ally', 'IT Offers help.'],
      ['IT Enemy', 'IT Attacks them.'],
      ['IT Ally', 'IT Offers help.'],
    ])
  })

  it('does not infer a reciprocal connection from a directed relationship', () => {
    expect(page(archive, ep(8))).toHaveLength(2)
    expect(page(archive, ep(8), { ownerId: 'target' })).toStrictEqual([])
  })

  it('clamps historical availability labels to the later endpoint in both units', () => {
    const laterTarget = relationshipArchive({
      targetOpens: 9,
      snapshots: CHANGES,
    })

    expect(
      page(laterTarget, ep(8)).map(({ person }) => person.id),
    ).not.toContain('target')

    const target = page(laterTarget, ep(9)).find(
      ({ person }) => person.id === 'target',
    )

    expect(target?.history.map(({ key }) => key)).toStrictEqual([
      '5:7:both',
      '7:9:both',
      '8:10:both',
    ])
    expect(
      target?.history.map(({ revealedAtEpisode, revealedAtChapter }) => [
        revealedAtEpisode,
        revealedAtChapter,
      ]),
    ).toStrictEqual([
      [9, 9],
      [9, 9],
      [9, 10],
    ])
  })

  it('source-filters later changes without replacing the other source’s current state', () => {
    const sourceOnly = relationshipArchive({
      snapshots: [
        { episode: 5, chapter: 7, value: [FRIEND, OTHER] },
        { episode: 7, chapter: 9, source: 'anime', value: [ENEMY] },
      ],
    })

    expect(page(sourceOnly, ep(7))[0]?.type).toBe('Enemy')

    const manga = page(sourceOnly, ch(10))[0]

    expect(manga?.type).toBe('Ally')
    expect(manga?.history).toHaveLength(1)
    expect(JSON.stringify(manga)).not.toContain('Enemy')
  })
})
