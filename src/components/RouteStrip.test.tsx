import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { ep, renderWithProviders } from '~/test/providers'

import { RouteStrip } from './RouteStrip'

const entries: readonly Entity[] = [1, 50, 400, 1000].map((episode, index) => {
  return {
    id: `e${String(index)}`,
    kind: 'character',
    revealedAtEpisode: episode,
    revealedAtChapter: episode,
    name: { it: `n${String(index)}`, en: `n${String(index)}` },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'nami', tint: 'orange' },
  }
})

describe('RouteStrip', () => {
  it('is one labelled image, not a list of dots', () => {
    const current = entries[2]
    if (current === undefined) {
      throw new Error('fixture')
    }
    renderWithProviders(
      <RouteStrip
        bookmark={ep(500)}
        current={current}
        entries={entries}
        label="Waypoint 3 of 4"
      />,
    )

    const strip = screen.getByRole('img', { name: 'Waypoint 3 of 4' })

    // Four marks, plus the ring around the current one.
    expect(strip.querySelectorAll('circle')).toHaveLength(5)
  })

  it('rings a covered record in the ambient ink, not its own colour', () => {
    const current = entries[3]
    if (current === undefined) {
      throw new Error('fixture')
    }
    const { container, unmount } = renderWithProviders(
      <RouteStrip
        bookmark={ep(500)}
        current={current}
        entries={entries}
        label="Waypoint 4 of 4"
      />,
    )
    const coveredRing = container.querySelector('circle[r="7.5"]')?.className
    unmount()

    renderWithProviders(
      <RouteStrip
        bookmark={ep(1000)}
        current={current}
        entries={entries}
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
    if (current === undefined) {
      throw new Error('fixture')
    }
    renderWithProviders(
      <RouteStrip
        bookmark={null}
        current={current}
        entries={entries}
        label="Waypoint 1 of 4"
      />,
    )

    // The covered stretch and the horizon tick only: no gold line.
    expect(screen.getByRole('img').querySelectorAll('path')).toHaveLength(2)
  })
})
