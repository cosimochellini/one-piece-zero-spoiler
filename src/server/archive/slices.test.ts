import { describe, expect, it } from 'vitest'

import { characters } from '~/data/characters'
import { entities, getEntity } from '~/data/entities'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import { foldName } from '~/lib/search/fold'
import type { RoutePositionView, ShelfView } from '~/lib/view/records'

import {
  charactersPage,
  chartPage,
  nearbyPage,
  placesPage,
  routePosition,
  shelvesPage,
} from './pages.server'
import { searchableOf } from './project.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const handleSpace = new Set(
  entities.flatMap((entity) => {
    return [
      entity.id,
      ...Object.values(entity.name).map((name) => foldName(name)),
    ]
  }),
)

/** The `id` and the `name` an object declares itself, if it declares either. */
function selfNamed(payload: object, found: Set<string>): void {
  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === 'string' && (key === 'id' || key === 'name')) {
      found.add(value)
    }
  }
}

/** Every `id` and `name` anywhere in a payload, however deeply nested. */
function named(payload: unknown, found = new Set<string>()): Set<string> {
  if (payload === null || typeof payload !== 'object') {
    return found
  }
  if (Array.isArray(payload)) {
    for (const item of payload) {
      named(item, found)
    }

    return found
  }

  selfNamed(payload, found)

  for (const value of Object.values(payload)) {
    named(value, found)
  }

  return found
}

/** A record the archive must hold, or a failure naming the one it does not. */
function onFile(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`No record is filed under ${id}`)
  }

  return entity
}

/** Where a record sits on the route, or a failure if it is not on it. */
function positionOf(id: string, bookmark: Bookmark): RoutePositionView {
  const at = routePosition(id, bookmark, 'en')
  if (at === undefined) {
    throw new Error(`No position on the route for ${id}`)
  }

  return at
}

/** Every character a shelf holds: the open ones by id, the rest by handle. */
function shelvedKeys(shelf: ShelfView): readonly string[] {
  return [
    ...shelf.open.map((entry) => entry.id),
    ...shelf.covered.map((entry) => entry.handle),
  ]
}

/**
 * Nothing in a payload may name a record the reader has not reached.
 *
 * Walked rather than grepped: a substring search over the serialised payload
 * finds "den" inside a path command and fails on a clean one.
 */
function saysNothing(payload: unknown, bookmark: Bookmark): void {
  const said = named(payload)

  for (const entity of entities) {
    if (isRevealed(entity, bookmark)) {
      continue
    }

    expect(said.has(entity.id), entity.id).toBe(false)

    for (const name of Object.values(entity.name)) {
      expect(said.has(name), entity.id).toBe(false)
    }
  }
}

describe('the slice of the archive a page is given', () => {
  it('splits the chart at the reader’s bookmark, open first', () => {
    const chart = chartPage(ep(500), 'en')

    expect(chart.open.length).toBeGreaterThan(0)
    expect(chart.covered.length).toBeGreaterThan(0)
    expect(chart.open.length + chart.covered.length).toBe(chart.filed)

    for (const waypoint of chart.open) {
      expect(waypoint.revealedAtEpisode).toBeLessThanOrEqual(500)
    }
    for (const covered of chart.covered) {
      expect(covered.revealedAtEpisode).toBeGreaterThan(500)
      expect(covered).not.toHaveProperty('id')
      expect(covered).not.toHaveProperty('name')
    }
  })

  it('keeps the open waypoints a prefix, whatever the reader counts in', () => {
    // The horizon is one element between two runs rather than a marker
    // interpolated along the route, and that only works on a prefix.
    const marks: readonly NonNullable<Bookmark>[] = [
      { mode: 'episode', episode: 92 },
      { mode: 'season', season: 4, episode: 1 },
      { mode: 'chapter', chapter: 155 },
    ]

    for (const bookmark of marks) {
      const chart = chartPage(bookmark, 'en')
      const thresholds = chart.open.map((entry) => {
        return bookmark.mode === 'chapter' ?
            entry.revealedAtChapter
          : entry.revealedAtEpisode
      })

      expect(thresholds.toSorted((a, b) => a - b)).toStrictEqual(thresholds)
    }
  })

  it('tells a reader with no bookmark nothing but the thresholds', () => {
    const chart = chartPage(null, 'en')

    expect(chart.open).toHaveLength(0)
    expect(chart.covered).toHaveLength(chart.filed)

    saysNothing(chart, null)
  })

  it('shelves every character exactly once, and fogs the right ones', () => {
    const shelves = shelvesPage(ep(200), 'en')
    const shelved = shelves.flatMap((shelf) => shelvedKeys(shelf))
    const distinct = new Set(shelved)

    expect(distinct.size).toBe(characters.length)

    for (const shelf of shelves) {
      expect(shelf.total).toBe(shelf.open.length + shelf.covered.length)
    }
    saysNothing(shelves, ep(200))
  })

  it('sends the crests the reader has reached and counts the rest', () => {
    const page = charactersPage(ep(200), 'en')

    expect(page.filed).toBe(characters.length)
    expect(page.shelfCount).toBeGreaterThan(0)
    expect(page.featuredOpen.length + page.featuredCovered.length).toBe(36)

    saysNothing(page, ep(200))
  })

  it('sends only the epithets the reader has already reached, folded', () => {
    // "Whitebeard" finds Edward Newgate after episode 152 and not before, and
    // before it the word is not in the browser to be matched at all.
    const newgate = onFile('edward-newgate')
    const early = searchableOf(newgate, 'en', ep(151))
    const later = searchableOf(newgate, 'en', ep(500))

    expect(early.folded).toBe(foldName(newgate.name.en))
    expect(early.aliases).not.toContain('whitebeard')
    expect(later.aliases).toContain('whitebeard')
    // A chapter reader reaches none of them: the timelines count in episodes.
    expect(
      searchableOf(newgate, 'en', { mode: 'chapter', chapter: 1000 }).aliases,
    ).not.toContain('whitebeard')
  })

  it('carries the other locale’s name so a reader can search in either', () => {
    const luffy = onFile('monkey-d-luffy')

    expect(searchableOf(luffy, 'en', ep(1)).aliases).toContain(
      foldName(luffy.name.it),
    )
  })

  it('rings a record on the route only once the reader has reached it', () => {
    expect(routePosition('nico-robin', ep(129), 'en')?.tint).toBeNull()
    expect(routePosition('nico-robin', ep(130), 'en')?.tint).not.toBeNull()
    expect(routePosition('nobody', ep(130), 'en')).toBeUndefined()
  })

  it('counts the route the way the page prints it', () => {
    const at = positionOf('nico-robin', ep(500))

    expect(at.index).toBeGreaterThanOrEqual(0)
    expect(at.index).toBeLessThan(at.total)
    expect(at.openCount).toBeLessThanOrEqual(at.total)

    saysNothing(at, ep(500))
  })

  it('files the nearest featured characters, each behind its own fog', () => {
    const near = nearbyPage('nico-robin', ep(130), 'en')

    expect(near).toHaveLength(5)
    expect(near.some((slot) => !slot.open)).toBe(true)

    saysNothing(near, ep(130))

    expect(nearbyPage('nobody', ep(130), 'en')).toStrictEqual([])
  })

  it('opens the ports the ship has put in at and no others', () => {
    const log = placesPage(ep(20), 'en')

    expect(log.open.length + log.covered.length).toBe(log.filed)
    expect(log.open.every((port) => port.revealedAtEpisode <= 20)).toBe(true)

    saysNothing(log, ep(20))
  })

  it('resolves a port’s arc outright, because an arc opens no later', () => {
    const baratie = placesPage(ep(20), 'en').open.find(
      (port) => port.id === 'baratie',
    )

    // The arc is named outright rather than veiled: an arc opens no later
    // than any place filed under it, so an open port always has an open arc.
    expect(baratie?.dossier?.arc).not.toBeNull()
    expect(baratie?.dossier?.arc).not.toBe('')
    expect(baratie?.dossier?.filedHere.length).toBeGreaterThan(0)
  })

  it('never leaks a name through a handle', () => {
    for (const covered of chartPage(null, 'en').covered) {
      expect(handleSpace.has(covered.handle)).toBe(false)
    }
  })
})
