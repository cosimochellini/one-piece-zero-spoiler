import { isRevealed } from './spoiler'

const filedAt = (revealedAtEpisode: number) => ({ revealedAtEpisode })

describe('isRevealed', () => {
  it('hides everything when no bookmark has been set', () => {
    // The single most important assertion in the project: a reader who has not
    // said where they are must be shown nothing, including episode 1.
    expect(isRevealed(filedAt(1), null)).toBe(false)
    expect(isRevealed(filedAt(1089), null)).toBe(false)
  })

  it('treats the threshold as inclusive', () => {
    expect(isRevealed(filedAt(92), 92)).toBe(true)
  })

  it('hides a record filed after the bookmark', () => {
    expect(isRevealed(filedAt(1089), 1088)).toBe(false)
  })

  it('shows a record filed before the bookmark', () => {
    expect(isRevealed(filedAt(1), 1088)).toBe(true)
  })
})
