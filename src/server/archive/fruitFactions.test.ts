import { describe, expect, it } from 'vitest'

import { type Reveal, reveal } from '~/data/reveal'
import { gateOf } from '~/data/series/one-piece/chapter-table'
import { eatersOf } from '~/data/series/one-piece/dated'
import { fruits } from '~/data/series/one-piece/fruits'
import { CHARACTER_DOSSIERS } from '~/data/series/one-piece/sagas'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import type { Faction, FruitFactionView } from '~/lib/view/records'
import { COPIES } from '~/server/copy.server'
import { opFruitAlbum as fruitAlbum } from '~/test/archive'
import { ONE_PIECE_LOADED as ONE_PIECE } from '~/test/series'

const BOOKMARKS = ONE_PIECE.bookmarks

/**
 * The faction view's groups: a fruit under the faction of each open eater,
 * as the latest affiliation entry the reader has reached tags them. The
 * expectations are worked out here from the dossiers themselves rather than
 * through `factionsOf`, so the two readings check each other.
 */

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** The fruit ids of one faction's group, or `undefined` with no group. */
function groupOf(
  bookmark: Bookmark,
  faction: Faction | null,
): string[] | undefined {
  return fruitAlbum(bookmark, 'en')
    .factions.find((group) => group.faction === faction)
    ?.open.map(({ id }) => id)
}

/** The eaters a reader has reached, in the order a tile lists them. */
function openEatersOf(at: Reveal, fruit: Entity): Entity[] {
  return eatersOf(fruit.id).flatMap((eater) =>
    at.sees({ ...eater.entity, ...eater.gate }) ? [eater.entity] : [],
  )
}

/**
 * The factions of an eater's latest affiliation entry the reader has
 * reached, read straight off the dossier: `[null]` with none reached.
 */
function reachedFactions(at: Reveal, eater: Entity): (Faction | null)[] {
  const entry = (CHARACTER_DOSSIERS[eater.id]?.affiliation ?? []).findLast(
    (affiliation) => at.sees(gateOf(affiliation, eater)),
  )
  const factions = entry?.factions ?? []

  return factions.length === 0 ? [null] : factions
}

/** Every `fruit|faction|eater position` the groups should hold, worked out here. */
function expectedCells(bookmark: Bookmark): string[] {
  const at = reveal(bookmark, ONE_PIECE_BOOKMARK)

  return fruits.flatMap((fruit) => {
    if (!at.sees(fruit)) {
      return []
    }

    return openEatersOf(at, fruit).flatMap((eater, position) =>
      reachedFactions(at, eater).map(
        (faction) => `${fruit.id}|${String(faction)}|${String(position)}`,
      ),
    )
  })
}

/** The same cells, read off the groups the server sent. */
function sentCells(groups: FruitFactionView[]): string[] {
  return groups.flatMap(({ faction, open }) =>
    open.flatMap(({ eaters, id }) =>
      eaters.map((position) => `${id}|${String(faction)}|${String(position)}`),
    ),
  )
}

const byText = (a: string, b: string): number => a.localeCompare(b)

/** Every open fruit some group holds, once. */
function groupedIds(groups: FruitFactionView[]): string[] {
  const ids = groups.flatMap(({ open }) => open.map(({ id }) => id))

  return [...new Set(ids)]
}

/** Whether a group holds each fruit once, in the reader's order. */
function readsInOrder(at: Reveal, group: FruitFactionView): boolean {
  const thresholds = group.open.map(({ id }) => {
    const fruit = fruits.find((entry) => entry.id === id)

    return fruit === undefined ? Infinity : at.threshold(fruit)
  })
  const ids = new Set(group.open.map(({ id }) => id))

  return (
    thresholds.length > 0
    && ids.size === thresholds.length
    && thresholds.every((value, index) => value >= (thresholds[index - 1] ?? 0))
  )
}

/** Whether the groups come most fruits first, then by name, no faction last. */
function inOrder(groups: FruitFactionView[], locale: 'en' | 'it'): boolean {
  const dictionary = COPIES['one-piece'][locale]
  const named = groups.filter(({ faction }) => faction !== null)
  const none = groups.findIndex(({ faction }) => faction === null)

  return (
    (none === -1 || none === groups.length - 1)
    && named.every((group, index) => {
      const next = named[index + 1]
      if (next === undefined || group.faction === null) {
        return true
      }
      if (next.faction === null) {
        return false
      }
      const size = group.open.length - next.open.length
      const name = dictionary[`faction.${group.faction}`].localeCompare(
        dictionary[`faction.${next.faction}`],
        locale,
      )

      return size > 0 || (size === 0 && name < 0)
    })
  )
}

describe('the faction view', () => {
  it('is empty without a bookmark', () => {
    expect(fruitAlbum(null, 'en').factions).toStrictEqual([])
  })

  it('moves the Ice-Ice Fruit out of the Marines when Kuzan leaves them, in episodes', () => {
    expect(groupOf(ep(569), 'marines')).toContain('ice-ice-fruit')
    expect(groupOf(ep(569), 'independent')).not.toContain('ice-ice-fruit')
    expect(groupOf(ep(570), 'marines')).not.toContain('ice-ice-fruit')
    expect(groupOf(ep(570), 'independent')).toContain('ice-ice-fruit')
  })

  it('moves it at the chapter that says so for a manga reader', () => {
    expect(groupOf(ch(649), 'marines')).toContain('ice-ice-fruit')
    expect(groupOf(ch(649), 'independent')).not.toContain('ice-ice-fruit')
    expect(groupOf(ch(650), 'marines')).not.toContain('ice-ice-fruit')
    expect(groupOf(ch(650), 'independent')).toContain('ice-ice-fruit')
  })

  it('puts Momonosuke under no faction yet at episode 615, last', () => {
    const groups = fruitAlbum(ep(615), 'en').factions

    expect(groups.at(-1)?.faction).toBeNull()
    expect(groups.at(-1)?.open.map(({ id }) => id)).toContain(
      'artificial-dragon-dragon-fruit',
    )
    expect(groupOf(ep(620), null)).toBeUndefined()
  })

  it('names both eaters on one tile when they stand in one faction', () => {
    const emperors = fruitAlbum(ep(600), 'en').factions.find(
      ({ faction }) => faction === 'emperors',
    )
    const tremor = emperors?.open.filter(
      ({ id }) => id === 'tremor-tremor-fruit',
    )

    expect(tremor).toStrictEqual([
      { id: 'tremor-tremor-fruit', eaters: [0, 1] },
    ])
  })

  it('holds every open fruit under the reached factions of its open eaters, and nothing else, at every bookmark of the sweep', () => {
    for (const bookmark of BOOKMARKS) {
      const { bands, factions } = fruitAlbum(bookmark, 'en')
      const open = bands.flatMap((band) => band.open).map(({ id }) => id)
      const label = JSON.stringify(bookmark)

      // Each group's faction comes from an open eater's reached entry, and
      // every such entry puts its fruit there: no faction a covered eater or
      // a later entry alone would name.
      expect(sentCells(factions).toSorted(byText), label).toStrictEqual(
        expectedCells(bookmark).toSorted(byText),
      )
      expect(groupedIds(factions).toSorted(byText), label).toStrictEqual(
        open.toSorted(byText),
      )
      expect(
        factions.every((group) =>
          readsInOrder(reveal(bookmark, ONE_PIECE_BOOKMARK), group),
        ),
        label,
      ).toBe(true)
      expect(inOrder(factions, 'en'), label).toBe(true)
    }
  })

  it('orders the groups by the names the reader reads', () => {
    for (const locale of ['en', 'it'] as const) {
      const { factions } = fruitAlbum(ep(1100), locale)

      expect(inOrder(factions, locale)).toBe(true)
    }
  })
})
