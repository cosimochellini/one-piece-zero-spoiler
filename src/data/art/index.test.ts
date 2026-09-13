import { entities } from '~/data/entities'

import { alabastaArt } from './alabasta'
import { dressrosaArt } from './dressrosa'
import { eastBlueArt } from './east-blue'
import { eggheadArt } from './egghead'
import { fishManIslandArt } from './fish-man-island'
import { DRAWINGS } from './index'
import { skypieaArt } from './skypiea'
import { summitWarArt } from './summit-war'
import { thrillerBarkArt } from './thriller-bark'
import { wanoArt } from './wano'
import { waterSevenArt } from './water-seven'
import { wholeCakeArt } from './whole-cake'

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
    ]
    const total = modules.reduce((sum, m) => sum + Object.keys(m).length, 0)

    expect(Object.keys(DRAWINGS)).toHaveLength(total)
  })

  it('has one for every record, and none that no record uses', () => {
    const ids = new Set(entities.map((entity) => entity.id))
    const drawn = new Set(Object.keys(DRAWINGS))

    for (const id of ids) expect(drawn.has(id), id).toBe(true)
    for (const id of drawn) expect(ids.has(id), id).toBe(true)
  })

  it('draws every record with at least four strokes and one in its colour', () => {
    for (const [id, strokes] of Object.entries(DRAWINGS)) {
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
  })
})
