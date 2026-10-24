import { expect } from 'vitest'

import type { Stroke } from '~/lib/view/records'

/** The rules every drawing on the site obeys, in every series, first or redrawn. */
export function isADrawing(id: string, strokes: Stroke[]): void {
  // Fewer than four strokes is an icon, not a drawing.
  expect(strokes.length, id).toBeGreaterThan(3)
  expect(
    strokes.some((stroke) => stroke.role === 'accent'),
    id,
  ).toBe(true)

  for (const stroke of strokes) {
    expect(stroke.d.length, id).toBeGreaterThan(0)
  }

  // The renderer keys each path by its `d` and transform, so the same shape
  // may repeat only under another transform; a true duplicate is a React key
  // clash and a line drawn over itself.
  const keys = strokes.map((stroke) => `${stroke.d}|${stroke.transform ?? ''}`)
  const distinct = new Set(keys)

  expect(distinct.size, id).toBe(keys.length)
}
