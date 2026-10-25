import { describe, expect, it } from 'vitest'

import { dialLast } from '~/components/dial'
import { reveal } from '~/data/reveal'
import type { Translate } from '~/i18n/types'

import {
  absoluteEpisodeOf,
  ceilingOf,
  episodeValue,
  gradeDraft,
  parseBookmark,
  stepperOf,
  thresholdValue,
} from './episode'
import { bookmarkFromSearch } from './linkBookmark'
import {
  bookmarkForRequest,
  parseTrial,
  trialForRequest,
} from './requestBookmark'
import { sagaAt } from './sagaLabel'
import {
  getSeason,
  locateEpisode,
  resolveEpisode,
  seasonLength,
} from './seasons'
import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_BOOKMARK } from './series'
import { describeThreshold } from './threshold'

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

// Each call below leaves the series out. `@ts-expect-error` makes
// `npm run typecheck` fail the day any of them gets a default back, and the
// call itself throws instead of quietly reading One Piece's table.
const SEASON_DRAFT = { mode: 'season', season: '2', number: '12' } as const
const GREED_ISLAND = { revealedAtEpisode: 59, revealedAtChapter: 126 }
const SEASON_TWO = { number: 2, first: 27, last: 38 }
const NO_SAGAS = { episode: [], chapter: [], filler: [] }
const t: Translate = (key) => key

const WITHOUT_SERIES: [string, () => unknown][] = [
  // @ts-expect-error -- every conversion names its series (#793)
  ['reveal', () => reveal(S2E12).sees(GREED_ISLAND)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['parseBookmark', () => parseBookmark('s2e12')],
  // @ts-expect-error -- every conversion names its series (#793)
  ['absoluteEpisodeOf', () => absoluteEpisodeOf(S2E12)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['thresholdValue', () => thresholdValue(GREED_ISLAND, 'season')],
  // @ts-expect-error -- every conversion names its series (#793)
  ['episodeValue', () => episodeValue(38, 'season')],
  // @ts-expect-error -- every conversion names its series (#793)
  ['ceilingOf', () => ceilingOf(SEASON_DRAFT)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['stepperOf', () => stepperOf(SEASON_DRAFT)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['gradeDraft', () => gradeDraft(SEASON_DRAFT)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['getSeason', () => getSeason(2)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['seasonLength', () => seasonLength(SEASON_TWO)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['resolveEpisode', () => resolveEpisode(2, 12)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['locateEpisode', () => locateEpisode(38)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['sagaAt', () => sagaAt(NO_SAGAS, SEASON_DRAFT)],
  // @ts-expect-error -- every conversion names its series (#793)
  ['parseTrial', () => parseTrial('12')],
  // @ts-expect-error -- every conversion names its series (#793)
  ['trialForRequest', () => trialForRequest(undefined, '12')],
  // @ts-expect-error -- every conversion names its series (#793)
  ['bookmarkForRequest', () => bookmarkForRequest('12', undefined, {})],
  [
    'bookmarkFromSearch',
    // @ts-expect-error -- every conversion names its series (#793)
    () => bookmarkFromSearch(new URLSearchParams({ s: '2', ep: '12' })),
  ],
  // @ts-expect-error -- every conversion names its series (#793)
  ['dialLast', () => dialLast('episode')],
  [
    'describeThreshold',
    () =>
      // @ts-expect-error -- every conversion names its series (#793)
      describeThreshold({
        gated: GREED_ISLAND,
        mode: 'season',
        sentence: 'veil.locked',
        t,
      }),
  ],
]

describe.each(WITHOUT_SERIES)('%s without a series', (_name, call) => {
  it('does not typecheck, and fails rather than read One Piece', () => {
    expect(call).toThrow(TypeError)
  })
})
