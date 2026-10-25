import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'

import {
  absoluteEpisodeOf,
  ceilingOf,
  episodeValue,
  gradeDraft,
  parseBookmark,
} from './episode'
import { bookmarkFromSearch } from './linkBookmark'
import { parseTrial } from './requestBookmark'
import { sagaAt } from './sagaLabel'
import { locateEpisode, resolveEpisode } from './seasons'
import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_BOOKMARK } from './series'

const S2E12 = { mode: 'season', season: 2, episode: 12 } as const

/**
 * Every conversion that reads a season table, for both series. Hunter x
 * Hunter's S2E12 is episode 38; read with One Piece's table it would be 73,
 * past Greed Island's opening at 59 (#793).
 */
const CASES = [
  {
    series: ONE_PIECE_BOOKMARK,
    absolute: 73,
    seasonTwo: 16,
    lastEpisode: 61,
    lastChapter: 100,
  },
  {
    series: HUNTER_X_HUNTER_SERIES,
    absolute: 38,
    seasonTwo: 12,
    lastEpisode: 26,
    lastChapter: 43,
  },
] as const

describe.each(CASES)(
  'bookmark conversions for $series.slug',
  ({ series, absolute, seasonTwo, lastEpisode, lastChapter }) => {
    it('turns S2E12 into its own absolute episode, and back', () => {
      expect(resolveEpisode(2, 12, series)).toBe(absolute)
      expect(absoluteEpisodeOf(S2E12, series)).toBe(absolute)
      expect(locateEpisode(absolute, series)).toStrictEqual({
        season: 2,
        episode: 12,
      })
      expect(episodeValue(absolute, 'season', series)).toBe('S02E12')
    })

    it('ends season 2 where its own table does', () => {
      const draft = { mode: 'season', season: '2', number: '' } as const
      const past = String(seasonTwo + 1)
      const link = new URLSearchParams({ s: '2', ep: past })

      expect(ceilingOf(draft, series)).toBe(seasonTwo)
      expect(resolveEpisode(2, seasonTwo + 1, series)).toBeNull()
      expect(gradeDraft({ ...draft, number: past }, series)).toStrictEqual({
        bookmark: null,
        problem: 'range',
      })
      expect(parseBookmark(`s2e${past}`, series)).toBeNull()
      expect(bookmarkFromSearch(link, series)).toBeNull()
    })

    it('reads a record and a saga at its own absolute episode', () => {
      const at = { revealedAtEpisode: absolute, revealedAtChapter: 1 }
      const after = { revealedAtEpisode: absolute + 1, revealedAtChapter: 1 }

      expect(reveal(S2E12, series).sees(at)).toBe(true)
      expect(reveal(S2E12, series).sees(after)).toBe(false)
      expect(
        sagaAt(
          {
            episode: [
              { from: 1, name: 'before' },
              { from: absolute + 1, name: 'after' },
            ],
            chapter: [],
            filler: [],
          },
          { mode: 'season', season: '2', number: '12' },
          series,
        )?.name,
      ).toBe('before')
    })

    it('takes a trial point only inside its own demo span', () => {
      expect(parseTrial(String(lastEpisode), series)).toStrictEqual({
        mode: 'episode',
        episode: lastEpisode,
      })
      expect(parseTrial(String(lastEpisode + 1), series)).toBeNull()
      expect(parseTrial(`c${String(lastChapter)}`, series)).toStrictEqual({
        mode: 'chapter',
        chapter: lastChapter,
      })
      expect(parseTrial(`c${String(lastChapter + 1)}`, series)).toBeNull()
    })
  },
)

describe('a conversion without a series', () => {
  it('does not typecheck, and fails rather than read One Piece', () => {
    // @ts-expect-error -- every conversion names its series (#793)
    expect(() => resolveEpisode(2, 12)).toThrow(TypeError)
    // @ts-expect-error -- every conversion names its series (#793)
    expect(() => absoluteEpisodeOf(S2E12)).toThrow(TypeError)
    // @ts-expect-error -- every conversion names its series (#793)
    expect(() => locateEpisode(38)).toThrow(TypeError)
    // @ts-expect-error -- every conversion names its series (#793)
    expect(() => parseBookmark('s2e12')).toThrow(TypeError)

    const greedIsland = { revealedAtEpisode: 59, revealedAtChapter: 126 }

    // @ts-expect-error -- every conversion names its series (#793)
    expect(() => reveal(S2E12).sees(greedIsland)).toThrow(TypeError)
  })
})
