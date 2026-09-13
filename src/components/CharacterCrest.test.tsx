import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { drawing, strokes } from '~/test/fixtures'

import { CharacterCrest } from './CharacterCrest'

/** How many `M` commands one path's `d` is built from. */
function segments(path: Element | undefined): number {
  return (path?.getAttribute('d')?.match(/M/gu) ?? []).length
}

/**
 * The seal's contract only. That every character has a drawing is asserted
 * over the drawings themselves in `src/data/art/index.test.ts`.
 */
describe('CharacterCrest', () => {
  it('sets the drawing inside the seal', () => {
    const { container } = render(<CharacterCrest visual={drawing()} />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('aria-hidden', 'true')
    // Two rings and two bezel paths, then the drawing in a nested box.
    expect(svg?.querySelectorAll(':scope > path')).toHaveLength(4)

    const nested = svg?.querySelector('svg')

    expect(nested).toHaveAttribute('viewBox', '0 0 160 200')
    expect(nested?.querySelectorAll('path')).toHaveLength(strokes.length)
  })

  it('draws all four cardinal ticks and twenty-eight minor ones', () => {
    const { container } = render(<CharacterCrest visual={drawing()} />)
    const paths = container.querySelectorAll(':scope svg > path')

    expect(segments(paths[2])).toBe(28)
    expect(segments(paths[3])).toBe(4)
  })

  it('draws a bare seal with no drawing and no tint when given no visual', () => {
    const { container } = render(<CharacterCrest />)
    const svg = container.querySelector('svg')

    expect(svg?.querySelectorAll(':scope > path')).toHaveLength(4)
    expect(svg?.querySelector('svg')).toBeNull()
  })

  it('keeps every stroke at the same width whatever size it is drawn at', () => {
    const { container } = render(<CharacterCrest visual={drawing()} />)

    for (const path of container.querySelectorAll('path')) {
      expect(path).toHaveAttribute('vector-effect', 'non-scaling-stroke')
    }
  })
})
