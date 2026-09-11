import { screen } from '@testing-library/react'

import type { Entity } from '~/data/types'
import { renderWithProviders } from '~/test/providers'

import { RouteStrip } from './RouteStrip'

const entries: readonly Entity[] = [1, 50, 400, 1000].map((episode, i) => ({
  id: `e${String(i)}`,
  kind: 'character',
  revealedAtEpisode: episode,
  name: { it: `n${String(i)}`, en: `n${String(i)}` },
  summary: { it: 'x', en: 'x' },
  visual: { art: 'nami', tint: 'orange' },
}))

describe('RouteStrip', () => {
  it('is one labelled image, not a list of dots', () => {
    const current = entries[2]
    if (current === undefined) throw new Error('fixture')
    renderWithProviders(
      <RouteStrip
        entries={entries}
        current={current}
        progress={500}
        label="Waypoint 3 of 4"
      />,
    )

    const strip = screen.getByRole('img', { name: 'Waypoint 3 of 4' })
    // Four marks, plus the ring around the current one.
    expect(strip.querySelectorAll('circle')).toHaveLength(5)
  })

  it('rings a covered record in the ambient ink, not its own colour', () => {
    const current = entries[3]
    if (current === undefined) throw new Error('fixture')
    const { container, unmount } = renderWithProviders(
      <RouteStrip
        entries={entries}
        current={current}
        progress={500}
        label="Waypoint 4 of 4"
      />,
    )
    const coveredRing = container.querySelector('circle[r="7.5"]')?.className
    unmount()

    renderWithProviders(
      <RouteStrip
        entries={entries}
        current={current}
        progress={1000}
        label="Waypoint 4 of 4"
      />,
    )
    const openRing = screen
      .getByRole('img')
      .querySelector('circle[r="7.5"]')?.className

    expect(coveredRing).toBeDefined()
    expect(coveredRing).not.toBe(openRing)
  })

  it('draws no open stretch when nothing is open', () => {
    const current = entries[0]
    if (current === undefined) throw new Error('fixture')
    renderWithProviders(
      <RouteStrip
        entries={entries}
        current={current}
        progress={null}
        label="Waypoint 1 of 4"
      />,
    )

    // The covered stretch and the horizon tick only: no gold line.
    expect(screen.getByRole('img').querySelectorAll('path')).toHaveLength(2)
  })
})
