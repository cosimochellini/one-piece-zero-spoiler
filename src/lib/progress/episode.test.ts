import {
  absoluteEpisodeOf,
  bookmarkValue,
  CHAPTER_CEILING,
  ceilingOf,
  clampIndex,
  draftOf,
  EPISODE_CEILING,
  FIRST_EPISODE,
  gradeDraft,
  modeOf,
  parseBookmark,
  serialiseBookmark,
  stepperOf,
  thresholdValue,
  type Bookmark,
} from './episode'

describe('parseBookmark', () => {
  it('reads a bare integer as an anime episode, as older cookies hold it', () => {
    expect(parseBookmark('1089')).toEqual({ mode: 'episode', episode: 1089 })
    expect(parseBookmark(String(FIRST_EPISODE))).toEqual({
      mode: 'episode',
      episode: FIRST_EPISODE,
    })
    expect(parseBookmark(String(EPISODE_CEILING))).toEqual({
      mode: 'episode',
      episode: EPISODE_CEILING,
    })
  })

  it('reads a season and an episode within it', () => {
    expect(parseBookmark('s2e3')).toEqual({
      mode: 'season',
      season: 2,
      episode: 3,
    })
    expect(parseBookmark('s22e1')).toEqual({
      mode: 'season',
      season: 22,
      episode: 1,
    })
  })

  it('reads a chapter', () => {
    expect(parseBookmark('c1044')).toEqual({ mode: 'chapter', chapter: 1044 })
    expect(parseBookmark(`c${String(CHAPTER_CEILING)}`)).toEqual({
      mode: 'chapter',
      chapter: CHAPTER_CEILING,
    })
  })

  it('fails closed on anything missing', () => {
    expect(parseBookmark(undefined)).toBeNull()
    expect(parseBookmark(null)).toBeNull()
    expect(parseBookmark('')).toBeNull()
    expect(parseBookmark('   ')).toBeNull()
  })

  it('fails closed on anything that is not in the grammar', () => {
    expect(parseBookmark('twelve')).toBeNull()
    expect(parseBookmark('10.5')).toBeNull()
    expect(parseBookmark(' 650')).toBeNull()
    expect(parseBookmark('e650')).toBeNull()
    expect(parseBookmark('S2E3')).toBeNull()
    expect(parseBookmark('s2')).toBeNull()
    expect(parseBookmark('c')).toBeNull()
    expect(parseBookmark('NaN')).toBeNull()
    expect(parseBookmark('Infinity')).toBeNull()
  })

  it('fails closed outside the range rather than clamping', () => {
    // A cookie holding 99999 must hide everything, not reveal everything.
    expect(parseBookmark(String(EPISODE_CEILING + 1))).toBeNull()
    expect(parseBookmark('0')).toBeNull()
    expect(parseBookmark('-5')).toBeNull()
    expect(parseBookmark('c0')).toBeNull()
    expect(parseBookmark(`c${String(CHAPTER_CEILING + 1)}`)).toBeNull()
    // Season 2 has sixteen episodes; there is no season 23.
    expect(parseBookmark('s2e17')).toBeNull()
    expect(parseBookmark('s23e1')).toBeNull()
    expect(parseBookmark('s0e1')).toBeNull()
    expect(parseBookmark('s2e0')).toBeNull()
  })
})

describe('serialiseBookmark', () => {
  const episode: NonNullable<Bookmark> = { mode: 'episode', episode: 650 }
  const season: NonNullable<Bookmark> = {
    mode: 'season',
    season: 2,
    episode: 3,
  }
  const chapter: NonNullable<Bookmark> = { mode: 'chapter', chapter: 1044 }
  const bookmarks = [episode, season, chapter]

  it('writes what parseBookmark reads', () => {
    expect(serialiseBookmark(episode)).toBe('650')
    expect(serialiseBookmark(season)).toBe('s2e3')
    expect(serialiseBookmark(chapter)).toBe('c1044')
  })

  it('round-trips', () => {
    for (const bookmark of bookmarks) {
      expect(parseBookmark(serialiseBookmark(bookmark))).toEqual(bookmark)
    }
  })
})

describe('absoluteEpisodeOf', () => {
  it('resolves a season through the table and leaves a chapter alone', () => {
    expect(absoluteEpisodeOf({ mode: 'episode', episode: 650 })).toBe(650)
    expect(absoluteEpisodeOf({ mode: 'season', season: 2, episode: 3 })).toBe(
      64,
    )
    expect(absoluteEpisodeOf({ mode: 'chapter', chapter: 1044 })).toBeNull()
  })
})

describe('modeOf', () => {
  it('counts in episodes when nothing is set', () => {
    expect(modeOf(null)).toBe('episode')
    expect(modeOf({ mode: 'chapter', chapter: 1 })).toBe('chapter')
  })
})

describe('bookmarkValue and thresholdValue', () => {
  const robin = { revealedAtEpisode: 130, revealedAtChapter: 218 }

  it('spell the bookmark the way the chip shows it', () => {
    expect(bookmarkValue({ mode: 'episode', episode: 650 })).toBe('650')
    expect(bookmarkValue({ mode: 'season', season: 2, episode: 3 })).toBe(
      'S02E03',
    )
    expect(bookmarkValue({ mode: 'chapter', chapter: 1044 })).toBe('1044')
  })

  it('spell a threshold in the reader’s unit', () => {
    expect(thresholdValue(robin, 'episode')).toBe('130')
    expect(thresholdValue(robin, 'season')).toBe('S04E38')
    expect(thresholdValue(robin, 'chapter')).toBe('218')
  })
})

describe('clampIndex', () => {
  it('leaves a value inside the range alone', () => {
    expect(clampIndex(890, EPISODE_CEILING)).toBe(890)
  })

  it('pulls a value back to the nearest bound', () => {
    expect(clampIndex(0, EPISODE_CEILING)).toBe(1)
    expect(clampIndex(EPISODE_CEILING + 500, EPISODE_CEILING)).toBe(
      EPISODE_CEILING,
    )
  })

  it('truncates a fraction and survives a non-finite number', () => {
    expect(clampIndex(12.9, 100)).toBe(12)
    expect(clampIndex(Number.NaN, 100)).toBe(1)
  })
})

describe('draftOf', () => {
  it('opens empty in episode mode with no bookmark', () => {
    expect(draftOf(null)).toEqual({ mode: 'episode', season: '', number: '' })
  })

  it('spells the bookmark back into the fields', () => {
    expect(draftOf({ mode: 'episode', episode: 650 })).toEqual({
      mode: 'episode',
      season: '',
      number: '650',
    })
    expect(draftOf({ mode: 'season', season: 2, episode: 3 })).toEqual({
      mode: 'season',
      season: '2',
      number: '3',
    })
    expect(draftOf({ mode: 'chapter', chapter: 1044 })).toEqual({
      mode: 'chapter',
      season: '',
      number: '1044',
    })
  })
})

describe('ceilingOf', () => {
  it('is the form range for episodes and chapters', () => {
    expect(ceilingOf({ mode: 'episode', season: '', number: '' })).toBe(
      EPISODE_CEILING,
    )
    expect(ceilingOf({ mode: 'chapter', season: '', number: '' })).toBe(
      CHAPTER_CEILING,
    )
  })

  it('is the season’s length once a season is chosen, and nothing before', () => {
    expect(ceilingOf({ mode: 'season', season: '', number: '' })).toBeNull()
    expect(ceilingOf({ mode: 'season', season: '2', number: '' })).toBe(16)
    expect(ceilingOf({ mode: 'season', season: '99', number: '' })).toBeNull()
  })
})

describe('gradeDraft', () => {
  it('reports an empty draft separately from an out-of-range one', () => {
    expect(gradeDraft({ mode: 'episode', season: '', number: '' })).toEqual({
      bookmark: null,
      problem: 'empty',
    })
    expect(gradeDraft({ mode: 'episode', season: '', number: '  ' })).toEqual({
      bookmark: null,
      problem: 'empty',
    })
    expect(gradeDraft({ mode: 'episode', season: '', number: '9999' })).toEqual(
      { bookmark: null, problem: 'range' },
    )
    expect(gradeDraft({ mode: 'episode', season: '', number: 'abc' })).toEqual({
      bookmark: null,
      problem: 'range',
    })
    expect(gradeDraft({ mode: 'chapter', season: '', number: '0' })).toEqual({
      bookmark: null,
      problem: 'range',
    })
  })

  it('asks for a season before anything else in season mode', () => {
    expect(gradeDraft({ mode: 'season', season: '', number: '3' })).toEqual({
      bookmark: null,
      problem: 'season',
    })
    expect(gradeDraft({ mode: 'season', season: '2', number: '17' })).toEqual({
      bookmark: null,
      problem: 'range',
    })
  })

  it('returns a bookmark for a usable draft', () => {
    expect(gradeDraft({ mode: 'episode', season: '', number: '92' })).toEqual({
      bookmark: { mode: 'episode', episode: 92 },
      problem: null,
    })
    expect(gradeDraft({ mode: 'season', season: '2', number: '3' })).toEqual({
      bookmark: { mode: 'season', season: 2, episode: 3 },
      problem: null,
    })
    expect(gradeDraft({ mode: 'chapter', season: '', number: '1044' })).toEqual(
      { bookmark: { mode: 'chapter', chapter: 1044 }, problem: null },
    )
  })
})

describe('stepperOf', () => {
  it('steps within the range and reports the ends', () => {
    const at = (number: string) =>
      stepperOf({ mode: 'episode', season: '', number })

    expect(at('650').stepped(1)).toBe('651')
    expect(at('650').stepped(-1)).toBe('649')
    expect(at('650').atFloor).toBe(false)
    expect(at('1').atFloor).toBe(true)
    expect(at(String(EPISODE_CEILING)).atCeiling).toBe(true)
    expect(at(String(EPISODE_CEILING)).stepped(1)).toBe(String(EPISODE_CEILING))
  })

  it('steps from zero when the field is empty or unreadable', () => {
    expect(
      stepperOf({ mode: 'chapter', season: '', number: '' }).stepped(1),
    ).toBe('1')
    expect(
      stepperOf({ mode: 'chapter', season: '', number: 'abc' }).stepped(1),
    ).toBe('1')
    expect(stepperOf({ mode: 'chapter', season: '', number: '' }).atFloor).toBe(
      false,
    )
  })

  it('has no range, and does not step, before a season is chosen', () => {
    const stepper = stepperOf({ mode: 'season', season: '', number: '' })
    expect(stepper.ceiling).toBeNull()
    expect(stepper.stepped(1)).toBe('')
    expect(
      stepperOf({ mode: 'season', season: '2', number: '16' }).atCeiling,
    ).toBe(true)
  })
})
