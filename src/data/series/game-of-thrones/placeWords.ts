import type { PlaceWords } from '~/data/types'

import type { ThronesVocabulary } from './records/saga'

/**
 * Game of Thrones' place words, each in its own words: a page is sent only
 * the labels its open places use (`wordsOf` in
 * `~/server/archive/printed.server.ts`). The Italian follows the Italian
 * dub.
 */
export const GAME_OF_THRONES_PLACE_WORDS: PlaceWords<ThronesVocabulary> = {
  dictionary: false,
  region: { en: 'Region', it: 'Regione' },
  allRegions: { en: 'All regions', it: 'Tutte le regioni' },
  regions: {
    'seven-kingdoms': { en: 'Seven Kingdoms', it: 'Sette Regni' },
    'beyond-the-wall': { en: 'Beyond the Wall', it: 'Oltre la Barriera' },
    'essos': { en: 'Essos', it: 'Essos' },
  },
  forms: {
    castle: { en: 'Castle', it: 'Castello' },
    city: { en: 'City', it: 'Città' },
    forest: { en: 'Forest', it: 'Foresta' },
    fortress: { en: 'Fortress', it: 'Fortezza' },
  },
}
