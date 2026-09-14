import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MOON } from '~/components/chrome/night-sea'

import { SeaChartHero } from './SeaChartHero'

describe('SeaChartHero', () => {
  it('draws the night sea in one hidden box that is cropped, not squashed', () => {
    const { container } = render(<SeaChartHero />)

    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 1600 560')
    expect(svg).toHaveAttribute('preserveAspectRatio', 'xMidYMid slice')
  })

  it('never fills a shape and never lets a stroke scale with the crop', () => {
    const { container } = render(<SeaChartHero />)

    const paths = [...container.querySelectorAll('path')]
    const effects = new Set(
      paths.map((path) => path.getAttribute('vector-effect')),
    )
    const blank = paths.filter((path) => path.getAttribute('d') === '')

    expect(paths.length).toBeGreaterThanOrEqual(25)
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

  it('spends the route gold on the sail and the lion, and nowhere else', () => {
    const { container } = render(<SeaChartHero />)

    // StyleX compiles to opaque atomic classes, so the gold is identified the
    // only way a test honestly can: it is the class the horizon carries and
    // the moon does not.
    const classesOf = (d: string): Set<string> =>
      new Set(container.querySelector(`path[d="${CSS.escape(d)}"]`)?.classList)
    const crescent = classesOf(MOON)
    const goldName = [...classesOf('M0 380 H1600')].find(
      (name) => !crescent.has(name),
    )

    const parts = [
      ...container.querySelectorAll(':scope g[transform] > g > path'),
    ]
    const gilded = parts.filter((path) =>
      path.classList.contains(goldName ?? ''),
    )

    expect(goldName).toBeDefined()
    expect(parts).toHaveLength(8)
    // The sail, the lion and the four rays of its mane.
    expect(gilded).toHaveLength(3)
  })
})
