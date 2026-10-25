import { describe, expect, it } from 'vitest'

import {
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_BOOKMARK,
} from '~/lib/progress/series'

import {
  dialBookmark,
  dialLast,
  dialSees,
  dialStart,
  latestStep,
  switchUnit,
} from './dial'

// Episodes 1–4 reach chapters 2, 5, 7 and 7.
const CHAPTER_AT = [2, 5, 7, 7]

describe('the onboarding dial', () => {
  it("stops at the end of the series' own demo span", () => {
    expect(dialLast('episode', ONE_PIECE_BOOKMARK)).toBe(61)
    expect(dialLast('chapter', ONE_PIECE_BOOKMARK)).toBe(100)
    expect(dialLast('episode', HUNTER_X_HUNTER_SERIES)).toBe(26)
    expect(dialLast('chapter', HUNTER_X_HUNTER_SERIES)).toBe(43)
  })

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
    // Episodes 3 and 4 both reach chapter 7: a round trip from 3 stays at 3.
    expect(switchUnit({ mode: 'chapter', value: 7 }, CHAPTER_AT)).toStrictEqual(
      { mode: 'episode', value: 3 },
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
