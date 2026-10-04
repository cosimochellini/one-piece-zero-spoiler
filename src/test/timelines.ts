import { byNumber } from 'sort-es'
import { expect } from 'vitest'

import type { Timeline } from '~/data/types'
import { EPISODE_CEILING } from '~/lib/progress/episode'

/**
 * What every dossier timeline obeys, a character's or a ship's: at least one
 * entry, in strictly ascending episodes, none before the record's own
 * threshold and none past the dial.
 */
export function expectTimelineInOrder(
  timeline: Timeline<unknown>,
  threshold: number,
  label: string,
): void {
  const episodes = timeline.map((entry) => entry.episode)
  const distinct = new Set(episodes)

  expect(episodes.length, label).toBeGreaterThan(0)
  // Sorted and all distinct is the same statement as strictly ascending,
  // without a look back at the previous entry inside the loop.
  expect(episodes, label).toStrictEqual(episodes.toSorted(byNumber()))
  expect(distinct.size, label).toBe(episodes.length)

  for (const episode of episodes) {
    expect(Number.isSafeInteger(episode), label).toBe(true)
    expect(episode, label).toBeGreaterThanOrEqual(threshold)
    expect(episode, label).toBeLessThanOrEqual(EPISODE_CEILING)
  }
}
