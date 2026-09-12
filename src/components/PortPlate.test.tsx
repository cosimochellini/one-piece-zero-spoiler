import { render } from '@testing-library/react'

import { PortPlate } from './PortPlate'

describe('PortPlate', () => {
  it('frames the drawing inside a chart plate with a north mark', () => {
    const { container } = render(
      <PortPlate visual={{ art: 'baratie', tint: 'cyan' }} />,
    )

    const outer = container.querySelector('svg')
    expect(outer).toHaveAttribute('aria-hidden', 'true')
    // The nested svg is the drawing; the plate itself is five paths.
    expect(container.querySelectorAll('svg')).toHaveLength(2)
    expect(container.querySelectorAll(':scope > svg > path')).toHaveLength(5)
    for (const path of container.querySelectorAll('path')) {
      expect(path).toHaveAttribute('vector-effect', 'non-scaling-stroke')
    }
  })

  it('is bare without a visual: no drawing, no north mark', () => {
    const { container } = render(<PortPlate />)

    expect(container.querySelectorAll('svg')).toHaveLength(1)
    expect(container.querySelectorAll('path')).toHaveLength(4)
  })
})
