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
