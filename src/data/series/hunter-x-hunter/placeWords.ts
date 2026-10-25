import type { PlaceWords } from '~/data/types'

import type { HunterVocabulary } from './records/saga'

/**
 * Hunter x Hunter's place words: none yet, as it files no place. #760 lists
 * the Hunter Exam's regions and forms here, each in its own words, as it
 * files them; a page is sent only the ones its open places use.
 */
export const HUNTER_X_HUNTER_PLACE_WORDS: PlaceWords<HunterVocabulary> = {
  dictionary: false,
  region: { en: 'Region', it: 'Regione' },
  allRegions: { en: 'All regions', it: 'Tutte le regioni' },
  regions: {},
  forms: {},
}
