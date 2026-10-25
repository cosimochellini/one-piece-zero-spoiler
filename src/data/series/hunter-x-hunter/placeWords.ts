import type { PlaceWords } from '~/data/types'

import type { HunterVocabulary } from './records/saga'

/**
 * Hunter x Hunter's place words, each in its own words: a page is sent only
 * the labels its open places use (`wordsOf` in
 * `~/server/archive/printed.server.ts`). The Italian follows Italian
 * Wikipedia's `Geografia di Hunter × Hunter` ("Isola Balena", "città
 * portuale").
 */
export const HUNTER_X_HUNTER_PLACE_WORDS: PlaceWords<HunterVocabulary> = {
  dictionary: false,
  region: { en: 'Region', it: 'Regione' },
  allRegions: { en: 'All regions', it: 'Tutte le regioni' },
  regions: {
    islands: { en: 'Islands', it: 'Isole' },
    mainland: { en: 'Mainland', it: 'Terraferma' },
  },
  forms: {
    city: { en: 'City', it: 'Città' },
    forest: { en: 'Forest preserve', it: 'Riserva forestale' },
    mountain: { en: 'Mountain', it: 'Montagna' },
    wetland: { en: 'Wetlands', it: 'Palude' },
    island: { en: 'Island', it: 'Isola' },
    port: { en: 'Port town', it: 'Città portuale' },
  },
}
