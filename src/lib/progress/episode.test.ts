import {
  clampEpisode,
  EPISODE_CEILING,
  FIRST_EPISODE,
  gradeEpisodeDraft,
  parseEpisode,
} from './episode'

describe('parseEpisode', () => {
  it('accepts an integer inside the range', () => {
    expect(parseEpisode('1089')).toBe(1089)
    expect(parseEpisode(String(FIRST_EPISODE))).toBe(FIRST_EPISODE)
    expect(parseEpisode(String(EPISODE_CEILING))).toBe(EPISODE_CEILING)
  })

  it('fails closed on anything missing', () => {
    expect(parseEpisode(undefined)).toBeNull()
    expect(parseEpisode(null)).toBeNull()
    expect(parseEpisode('')).toBeNull()
    expect(parseEpisode('   ')).toBeNull()
  })

  it('fails closed on anything that is not a whole number', () => {
    expect(parseEpisode('twelve')).toBeNull()
    expect(parseEpisode('10.5')).toBeNull()
    expect(parseEpisode('NaN')).toBeNull()
    expect(parseEpisode('Infinity')).toBeNull()
  })

  it('fails closed outside the range rather than clamping', () => {
    // A cookie holding 99999 must hide everything, not reveal everything.
    expect(parseEpisode(String(EPISODE_CEILING + 1))).toBeNull()
    expect(parseEpisode('0')).toBeNull()
    expect(parseEpisode('-5')).toBeNull()
  })
})

describe('clampEpisode', () => {
  it('leaves a value inside the range alone', () => {
    expect(clampEpisode(890)).toBe(890)
  })

  it('pulls a value back to the nearest bound', () => {
    expect(clampEpisode(0)).toBe(FIRST_EPISODE)
    expect(clampEpisode(EPISODE_CEILING + 500)).toBe(EPISODE_CEILING)
  })

  it('truncates a fraction and survives a non-finite number', () => {
    expect(clampEpisode(12.9)).toBe(12)
    expect(clampEpisode(Number.NaN)).toBe(FIRST_EPISODE)
  })
})

describe('gradeEpisodeDraft', () => {
  it('reports an empty draft separately from an out-of-range one', () => {
    expect(gradeEpisodeDraft('')).toEqual({ episode: null, problem: 'empty' })
    expect(gradeEpisodeDraft('  ')).toEqual({ episode: null, problem: 'empty' })
    expect(gradeEpisodeDraft('9999')).toEqual({
      episode: null,
      problem: 'range',
    })
    expect(gradeEpisodeDraft('abc')).toEqual({
      episode: null,
      problem: 'range',
    })
  })

  it('reports no problem for a usable draft', () => {
    expect(gradeEpisodeDraft('92')).toEqual({ episode: 92, problem: null })
  })
})
