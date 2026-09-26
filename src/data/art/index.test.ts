import { describe, expect, it } from 'vitest'

import { entities, getEntity } from '~/data/entities'
import { EPISODE_CEILING } from '~/lib/progress/episode'
import type { Stroke } from '~/lib/view/records'

import { DRAWINGS, REDRAWINGS } from '.'
import { alabastaArt } from './alabasta'
import { dressrosaArt } from './dressrosa'
import { eastBlueArt } from './east-blue'
import { eggheadArt } from './egghead'
import { fishManIslandArt } from './fish-man-island'
import { fruitArt } from './fruits'
import { skypieaArt, skypieaRedrawn } from './skypiea'
import { summitWarArt } from './summit-war'
import { thrillerBarkArt } from './thriller-bark'
import { wanoArt } from './wano'
import { waterSevenArt } from './water-seven'
import { wholeCakeArt } from './whole-cake'

/** The rules every drawing on the site obeys, first or redrawn. */
function isADrawing(id: string, strokes: readonly Stroke[]): void {
  // Fewer than four strokes is an icon, not a drawing.
  expect(strokes.length, id).toBeGreaterThan(3)
  expect(
    strokes.some((stroke) => stroke.role === 'accent'),
    id,
  ).toBe(true)

  for (const stroke of strokes) {
    expect(stroke.d.length, id).toBeGreaterThan(0)
  }
}

describe('the drawings', () => {
  it('never files the same id in two sagas', () => {
    // The sagas are merged by spread, which would keep the last drawing and
    // drop the other without a word; the count is the tell.
    const modules = [
      eastBlueArt,
      alabastaArt,
      skypieaArt,
      waterSevenArt,
      thrillerBarkArt,
      summitWarArt,
      fishManIslandArt,
      dressrosaArt,
      wholeCakeArt,
      wanoArt,
      eggheadArt,
      fruitArt,
    ]
    const total = modules.reduce((sum, m) => sum + Object.keys(m).length, 0)

    expect(Object.keys(DRAWINGS)).toHaveLength(total)
  })

  it('has one for every record, and none that no record uses', () => {
    const ids = new Set(entities.map((entity) => entity.id))
    const drawn = new Set(Object.keys(DRAWINGS))

    for (const id of ids) {
      expect(drawn.has(id), id).toBe(true)
    }
    for (const id of drawn) {
      expect(ids.has(id), id).toBe(true)
    }
  })

  it('draws every record with at least four strokes and one in its colour', () => {
    expect.hasAssertions()

    for (const [id, strokes] of Object.entries(DRAWINGS)) {
      isADrawing(id, strokes)
    }
  })
})

describe('the redrawings', () => {
  it('never file the same id in two sagas', () => {
    // Merged by spread like the drawings, and caught the same way.
    const modules = [skypieaRedrawn]
    const total = modules.reduce((sum, m) => sum + Object.keys(m).length, 0)

    expect(Object.keys(REDRAWINGS)).toHaveLength(total)
  })

  it('redraw a record that exists, by the same rules as the first drawing', () => {
    for (const [id, timeline] of Object.entries(REDRAWINGS)) {
      expect(getEntity(id), id).toBeDefined()
      // The server looks the first drawing up by `visual.art` and the
      // redrawings by id; the two are one key space, and this is the tell.
      expect(Object.keys(DRAWINGS), id).toContain(id)
      expect(timeline.length, id).toBeGreaterThan(0)

      for (const entry of timeline) {
        isADrawing(id, entry.value)
      }
    }
  })

  it('are filed in order, after the threshold, within the dial', () => {
    for (const [id, timeline] of Object.entries(REDRAWINGS)) {
      const episodes = timeline.map((entry) => entry.episode)
      const distinct = new Set(episodes)
      const threshold = getEntity(id)?.revealedAtEpisode ?? Infinity

      // Sorted and all distinct is the same statement as strictly ascending.
      expect(episodes, id).toStrictEqual(episodes.toSorted((a, b) => a - b))
      expect(distinct.size, id).toBe(episodes.length)

      for (const episode of episodes) {
        // Strictly after: a redrawing at the threshold would be the first
        // drawing, which belongs in `DRAWINGS`.
        expect(episode, id).toBeGreaterThan(threshold)
        expect(episode, id).toBeLessThanOrEqual(EPISODE_CEILING)
      }
    }
  })
})
