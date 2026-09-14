import { describe, expect, it } from 'vitest'

import { drawing, strokes } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { FruitFrame } from './FruitFrame'

describe('FruitFrame', () => {
  it('draws the fruit it is given, in the archive’s own box', () => {
    const { container } = renderWithProviders(<FruitFrame visual={drawing()} />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('viewBox', '0 0 160 200')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelectorAll('path')).toHaveLength(strokes.length)
  })

  it('draws an empty frame with no fruit, and no stroke at all', () => {
    // The fogged state. Nothing of a covered fruit is in the served HTML, so
    // there is nothing here to blur and nothing to read out of the source.
    const { container } = renderWithProviders(<FruitFrame />)

    expect(container.querySelector('svg')).toBeNull()
    expect(container.querySelectorAll('path')).toHaveLength(0)
    expect(container.firstElementChild).toBeInTheDocument()
  })
})
