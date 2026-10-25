import { describe, expect, it } from 'vitest'

import { getEntity } from '~/data/series/one-piece/entities'

import { DRAWINGS, REDRAWINGS } from '.'
import { alabastaArt, alabastaRedrawn } from './alabasta'
import { dressrosaArt, dressrosaRedrawn } from './dressrosa'
import { eastBlueArt, eastBlueRedrawn } from './east-blue'
import { eggheadArt, eggheadRedrawn } from './egghead'
import { elbafArt, elbafRedrawn } from './elbaf'
import { fishManIslandArt, fishManIslandRedrawn } from './fish-man-island'
import { fruitArt, fruitRedrawn } from './fruits'
import { skypieaArt, skypieaRedrawn } from './skypiea'
import { summitWarArt, summitWarRedrawn } from './summit-war'
import { thrillerBarkArt, thrillerBarkRedrawn } from './thriller-bark'
import { wanoArt, wanoRedrawn } from './wano'
import { waterSevenArt, waterSevenRedrawn } from './water-seven'
import { wholeCakeArt, wholeCakeRedrawn } from './whole-cake'

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
      elbafArt,
      fruitArt,
    ]
    const total = modules.reduce((sum, m) => sum + Object.keys(m).length, 0)

    expect(Object.keys(DRAWINGS)).toHaveLength(total)
  })
})

describe('the redrawings', () => {
  it('never file the same id in two sagas', () => {
    // Merged by spread like the drawings, and caught the same way.
    const modules = [
      eastBlueRedrawn,
      alabastaRedrawn,
      skypieaRedrawn,
      waterSevenRedrawn,
      thrillerBarkRedrawn,
      summitWarRedrawn,
      fishManIslandRedrawn,
      dressrosaRedrawn,
      wholeCakeRedrawn,
      wanoRedrawn,
      eggheadRedrawn,
      elbafRedrawn,
      fruitRedrawn,
    ]
    const total = modules.reduce((sum, m) => sum + Object.keys(m).length, 0)

    expect(Object.keys(REDRAWINGS)).toHaveLength(total)
  })

  it('redraw a record that exists', () => {
    for (const [id, timeline] of Object.entries(REDRAWINGS)) {
      expect(getEntity(id), id).toBeDefined()
      // The server looks the first drawing up by `visual.art` and the
      // redrawings by id; the two are one key space, and this is the tell.
      expect(Object.keys(DRAWINGS), id).toContain(id)
      expect(timeline.length, id).toBeGreaterThan(0)
    }
  })

  it('pin every redrawing to a chapter', () => {
    for (const [id, timeline] of Object.entries(REDRAWINGS)) {
      const unpinned = timeline
        .filter((entry) => entry.chapter === undefined)
        .map((entry) => entry.episode)

      expect(unpinned, id).toStrictEqual([])
    }
  })

  it('are never filed at the threshold itself', () => {
    // Strictly after: a redrawing at the threshold would be the first
    // drawing, which belongs in `DRAWINGS`. The order and the dial are held
    // with every other timeline, for every series, in
    // `~/data/series/index.test.ts` and `~/data/archive.test.ts`.
    for (const [id, timeline] of Object.entries(REDRAWINGS)) {
      const threshold = getEntity(id)?.revealedAtEpisode ?? Infinity

      for (const entry of timeline) {
        expect(entry.episode, id).toBeGreaterThan(threshold)
      }
    }
  })
})
