import { describe, expectTypeOf, it } from 'vitest'

import type { ListedSeries } from '~/data/series'
import type {
  OnePieceAffiliation,
  OnePieceDossier,
  OnePiecePlace,
  OnePieceVocabulary,
} from '~/data/series/one-piece/records/saga'
import type {
  Affiliation,
  PlaceDossier,
  SeriesArchive,
  Vocabulary,
} from '~/data/types'

/** A series' own words, none of them One Piece's. */
interface OtherWords extends Vocabulary {
  form: 'tower'
  group: 'phantom-troupe'
  region: 'yorbia'
}

// Checked by `tsc`, which runs over the tests: `expectTypeOf` does nothing at
// run time.
describe('a series filed in its own words', () => {
  it('registers as it is', () => {
    expectTypeOf<SeriesArchive<OtherWords>>().toExtend<SeriesArchive>()
    expectTypeOf<SeriesArchive<OnePieceVocabulary>>().toExtend<SeriesArchive>()
    expectTypeOf<() => Promise<SeriesArchive<OtherWords>>>().toExtend<
      ListedSeries['load']
    >()
  })

  it('is not taken in One Piece’s words, nor One Piece’s in its', () => {
    expectTypeOf<PlaceDossier<OtherWords>>().not.toExtend<OnePiecePlace>()
    expectTypeOf<Affiliation<OtherWords>>().not.toExtend<OnePieceAffiliation>()
    expectTypeOf<OtherWords['group']>().not.toExtend<
      NonNullable<OnePieceDossier['affiliation'][number]['factions']>[number]
    >()
    expectTypeOf<OnePiecePlace>().not.toExtend<PlaceDossier<OtherWords>>()
  })
})
