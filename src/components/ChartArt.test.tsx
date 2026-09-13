import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { drawing, strokes } from '~/test/fixtures'

import { ChartArt } from './ChartArt'

/**
 * The renderer's contract only. That every record has a drawing, and that
 * every drawing has at least four strokes and one in its colour, is asserted
 * over the drawings themselves in `src/data/art/index.test.ts` — where it
 * costs one pass over an object rather than 356 React renders, and where it
 * stays once the archive is no longer something a component can reach.
 */
describe('ChartArt', () => {
  it('draws one path per stroke, inside one hidden box', () => {
    const { container } = render(<ChartArt {...drawing()} />)

    const svg = container.querySelector('svg')

    expect(svg).not.toBeNull()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 160 200')
    expect(container.querySelectorAll('path')).toHaveLength(strokes.length)
  })

  it('never fills a shape and never scales a stroke', () => {
    const { container } = render(
      <ChartArt
        strokes={strokes}
        tint="red"
      />,
    )

    for (const path of container.querySelectorAll('path')) {
      expect(path).toHaveAttribute('vector-effect', 'non-scaling-stroke')
      expect(path).toHaveAttribute('d')
      expect(path.getAttribute('d')).not.toBe('')
    }
  })
})
