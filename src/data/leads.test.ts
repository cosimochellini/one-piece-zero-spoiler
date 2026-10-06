import { describe, expect, it } from 'vitest'

import { markedIds } from '~/lib/prose/markers'

import { arcs, getCharacter, stories } from './characters'
import { ARC_LEADS } from './leads'

/** The episode the arc after this one opens at, or past the last story. */
function endOf(start: number): number {
  return (
    arcs.find((arc) => arc.revealedAtEpisode > start)?.revealedAtEpisode
    ?? Infinity
  )
}

/** Every character a story of the arc names, its subject included. */
function namedIn(arcId: string): Set<string> {
  const arc = arcs.find((candidate) => candidate.id === arcId)
  const start = arc?.revealedAtEpisode ?? Infinity
  const end = endOf(start)
  const named = new Set<string>()
  for (const { character, episode, story } of stories) {
    if (episode >= start && episode < end) {
      for (const id of [character.id, ...markedIds(story.body.en)]) {
        named.add(id)
      }
    }
  }

  return named
}

describe('the leads of each arc', () => {
  const entries = Object.entries(ARC_LEADS)

  it('are listed under arcs, and only once each', () => {
    const arcIds = new Set(arcs.map((arc) => arc.id))
    const repeated = entries.filter(([, leads]) => {
      const distinct = new Set(leads)
      return distinct.size !== leads.length
    })

    expect(entries.filter(([arc]) => !arcIds.has(arc))).toStrictEqual([])
    expect(repeated).toStrictEqual([])
  })

  it('are characters a story of that arc names', () => {
    const unnamed: string[] = []
    for (const [arc, leads] of entries) {
      const named = namedIn(arc)
      for (const id of leads) {
        if (getCharacter(id) === undefined || !named.has(id)) {
          unnamed.push(`${id} @ ${arc}`)
        }
      }
    }

    expect(unnamed).toStrictEqual([])
  })
})
