import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HORIZON, SUNNY_BODY } from '~/components/chrome/night-sea'

import { SeaChartHero } from './SeaChartHero'

// StyleX compiles to opaque atomic classes, so a colour is identified the only
// way a test honestly can: as the class one element carries and another does
// not.
const classesOf = (element: Element | null | undefined): Set<string> =>
  new Set(element?.classList)

// Matched on the attribute rather than through a `path[d="…"]` selector:
// jsdom refuses any selector over 2048 characters, and the hull is longer.
function pathsDrawing(container: HTMLElement, d: string): SVGPathElement[] {
  return [...container.querySelectorAll('path')].filter(
    (path) => path.getAttribute('d') === d,
  )
}

describe('SeaChartHero', () => {
  it('draws the night sea in one hidden box that is cropped, not squashed', () => {
    const { container } = render(<SeaChartHero />)

    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 1600 560')
    expect(svg).toHaveAttribute('preserveAspectRatio', 'xMidYMid slice')
  })

  it('never lets a stroke scale with the crop', () => {
    const { container } = render(<SeaChartHero />)

    const paths = [...container.querySelectorAll('path')]
    const effects = new Set(
      paths.map((path) => path.getAttribute('vector-effect')),
    )
    const blank = paths.filter((path) => path.getAttribute('d') === '')

    expect(paths.length).toBeGreaterThanOrEqual(14)
    expect(effects).toStrictEqual(new Set(['non-scaling-stroke']))
    expect(blank).toHaveLength(0)
  })

  it('places the ship under a group that is never itself animated', () => {
    const { container } = render(<SeaChartHero />)

    const placed = container.querySelector('g[transform]')

    // A CSS transform replaces the attribute rather than composing with it, so
    // the group that positions the ship must carry no class of its own.
    expect(placed).not.toBeNull()
    expect(placed).not.toHaveAttribute('class')
    expect(placed?.querySelector('g')).not.toBeNull()
  })

  it('draws the ship twice: a gold rim behind, the paper fill in front', () => {
    const { container } = render(<SeaChartHero />)

    const [horizon] = pathsDrawing(container, HORIZON)
    // The horizon is gold and the sea rect is not; the fill is what the front
    // copy of the hull has and the horizon has not.
    const goldName = [...classesOf(horizon)].find(
      (name) => !classesOf(container.querySelector('rect')).has(name),
    )
    const [rimBody, fillBody] = pathsDrawing(container, SUNNY_BODY)
    const fillName = [...(fillBody?.classList ?? [])].find(
      (name) => !classesOf(horizon).has(name),
    )

    const parts = [
      ...container.querySelectorAll(':scope g[transform] > g > path'),
    ]
    const rim = parts.slice(0, 3)
    const fill = parts.slice(3)

    expect(goldName).toBeDefined()
    expect(fillName).toBeDefined()
    expect(parts).toHaveLength(6)
    expect(rimBody).toBe(rim[0])
    expect(fillBody).toBe(fill[0])
    // Same three shapes, in the same order, so the fill lands exactly on the
    // stroke and hides its inner half.
    expect(rim.map((path) => path.getAttribute('d'))).toStrictEqual(
      fill.map((path) => path.getAttribute('d')),
    )

    for (const path of rim) {
      expect(path).toHaveClass(goldName ?? '')
    }

    for (const path of fill) {
      expect(path).not.toHaveClass(goldName ?? '')
      expect(path).toHaveClass(fillName ?? '')
    }
  })

  it('paints the sea over the ship, so the swell passes in front of her hull', () => {
    const { container } = render(<SeaChartHero />)

    // Document order is paint order: the placing group first, the sea after.
    const [first, second] = container.querySelectorAll('g[transform], rect')

    expect(first).toHaveAttribute('transform')
    expect(second?.tagName).toBe('rect')
  })
})
