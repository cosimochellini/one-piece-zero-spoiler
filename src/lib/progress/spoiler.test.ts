import { isRevealed, latestAt } from './spoiler'

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

describe('latestAt', () => {
  const bounty = [
    { episode: 45, value: 30_000_000 },
    { episode: 130, value: 100_000_000 },
    { episode: 320, value: 300_000_000 },
  ]

  it('knows nothing when no bookmark has been set', () => {
    expect(latestAt(bounty, null)).toBeUndefined()
  })

  it('knows nothing before the first entry', () => {
    expect(latestAt(bounty, 44)).toBeUndefined()
  })

  it('treats an entry as reached on its own episode', () => {
    expect(latestAt(bounty, 45)).toBe(30_000_000)
    expect(latestAt(bounty, 130)).toBe(100_000_000)
  })

  it('holds the last entry reached between two entries', () => {
    expect(latestAt(bounty, 200)).toBe(100_000_000)
  })

  it('keeps the last entry past the end of the timeline', () => {
    expect(latestAt(bounty, 1200)).toBe(300_000_000)
  })

  it('is empty for an empty timeline', () => {
    expect(latestAt([], 500)).toBeUndefined()
  })
})
