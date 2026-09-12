import { entities } from '~/data/entities'

import { DRAWINGS } from './index'

describe('the drawings', () => {
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
