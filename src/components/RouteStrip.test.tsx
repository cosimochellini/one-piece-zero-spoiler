import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '~/test/providers'

import { RouteStrip } from './RouteStrip'

describe('RouteStrip', () => {
  it('is one labelled image, not a list of dots', () => {
    renderWithProviders(
      <RouteStrip
        at={2}
        label="Waypoint 3 of 4"
        openCount={3}
        tint="orange"
        total={4}
      />,
    )

    const strip = screen.getByRole('img', { name: 'Waypoint 3 of 4' })

    // Four marks, plus the ring around the current one.
    expect(strip.querySelectorAll('circle')).toHaveLength(5)
  })

  it('rings a covered record in the ambient ink, not its own colour', () => {
    const { container, unmount } = renderWithProviders(
      <RouteStrip
        at={3}
        label="Waypoint 4 of 4"
        openCount={3}
        tint={null}
        total={4}
      />,
    )
    const coveredRing = container.querySelector('circle[r="7.5"]')?.className

    unmount()

    renderWithProviders(
      <RouteStrip
        at={3}
        label="Waypoint 4 of 4"
        openCount={4}
        tint="orange"
        total={4}
      />,
    )
    const openRing = screen
      .getByRole('img')
      .querySelector('circle[r="7.5"]')?.className

    expect(coveredRing).toBeDefined()
    expect(coveredRing).not.toBe(openRing)
  })

  it('draws no open stretch when nothing is open', () => {
    renderWithProviders(
      <RouteStrip
        at={0}
        label="Waypoint 1 of 4"
        openCount={0}
        tint={null}
        total={4}
      />,
    )

    // The covered stretch and the horizon tick only: no gold line.
    expect(screen.getByRole('img').querySelectorAll('path')).toHaveLength(2)
  })
})
