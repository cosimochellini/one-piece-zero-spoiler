import { render } from '@testing-library/react'

import { entities } from '~/data/entities'

import { ChartArt } from './ChartArt'

describe('ChartArt', () => {
  it('has a drawing for every record, and every drawing has strokes', () => {
    for (const entity of entities) {
      const { container, unmount } = render(
        <ChartArt art={entity.visual.art} tint={entity.visual.tint} />,
      )

      const svg = container.querySelector('svg')
      expect(svg).not.toBeNull()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      // Fewer than four strokes is an icon, not a drawing.
      expect(container.querySelectorAll('path').length).toBeGreaterThan(3)
      unmount()
    }
  })

  it('never fills a shape and never scales a stroke', () => {
    const { container } = render(<ChartArt art="monkey-d-luffy" tint="red" />)

    for (const path of container.querySelectorAll('path')) {
      expect(path).toHaveAttribute('vector-effect', 'non-scaling-stroke')
      expect(path.getAttribute('d')).toBeTruthy()
    }
  })
})
