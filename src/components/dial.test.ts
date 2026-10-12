import { describe, expect, it } from 'vitest'

import {
  dialBookmark,
  dialSees,
  dialStart,
  latestStep,
  switchUnit,
} from './dial'

// Episodes 1–4 reach chapters 2, 5, 7 and 7.
const CHAPTER_AT = [2, 5, 7, 7]

describe('the onboarding dial', () => {
  it('starts at the trial point, or at the first episode', () => {
    expect(dialStart(null)).toStrictEqual({ mode: 'episode', value: 1 })
    expect(dialStart({ mode: 'chapter', chapter: 40 })).toStrictEqual({
      mode: 'chapter',
      value: 40,
    })
    expect(dialBookmark({ mode: 'episode', value: 12 })).toStrictEqual({
      mode: 'episode',
      episode: 12,
    })
  })

  it('switches units without moving the story forward', () => {
    expect(switchUnit({ mode: 'episode', value: 3 }, CHAPTER_AT)).toStrictEqual(
      { mode: 'chapter', value: 7 },
    )
    expect(switchUnit({ mode: 'chapter', value: 6 }, CHAPTER_AT)).toStrictEqual(
      { mode: 'episode', value: 2 },
    )
    expect(switchUnit({ mode: 'chapter', value: 1 }, CHAPTER_AT)).toStrictEqual(
      { mode: 'episode', value: 1 },
    )
  })

  it('reads the latest step it has reached, in its own unit', () => {
    const crew = { revealedAtEpisode: 3, revealedAtChapter: 6, value: 'crew' }
    const steps = [
      { revealedAtEpisode: 2, revealedAtChapter: 3, value: 'hunter' },
      crew,
    ]

    expect(latestStep(steps, { mode: 'episode', value: 1 })).toBeUndefined()
    expect(latestStep(steps, { mode: 'episode', value: 2 })).toBe('hunter')
    expect(latestStep(steps, { mode: 'chapter', value: 5 })).toBe('hunter')
    expect(latestStep(steps, { mode: 'chapter', value: 6 })).toBe('crew')
    expect(dialSees({ mode: 'episode', value: 3 }, crew)).toBe(true)
  })
})
