import type { PlaceDossier } from '~/data/types'

import type { HunterVocabulary } from './records/saga'

/** The visited country and mountain; smaller estate locations stay landmarks. */
export const ZOLDYCK_PLACES: Record<string, PlaceDossier<HunterVocabulary>> = {
  'republic-of-padokea': {
    form: 'country',
    filedHere: ['coco-loo'],
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: { it: 'Il monte Kukruu', en: 'Kukuroo Mountain' },
    log: {
      it: 'Gon, Kurapika e Leorio arrivano nel paese in dirigibile e proseguono in treno verso il monte dove vive Killua. In una cittadina una negoziante consiglia loro il giro in autobus che passa ogni giorno dalla tenuta della famiglia.',
      en: 'Gon, Kurapika and Leorio arrive in the country by airship and continue by train towards the mountain where Killua lives. In a small town a shopkeeper recommends the daily bus tour to the family estate.',
    },
  },
  'kukuroo-mountain': {
    form: 'mountain',
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'Il grande cancello e il muro che circonda la foresta',
      en: 'The great gate and the wall surrounding the forest',
    },
    log: {
      it: 'La famiglia Zoldick possiede il vulcano spento e tutta la foresta attorno. Il giro turistico si ferma al muro esterno: il cancello principale richiede una grande forza per essere aperto, mentre la porta di servizio espone gli intrusi al cane da guardia. La casa della famiglia si trova più in alto sulla montagna.',
      en: 'The Zoldyck family owns the dormant volcano and all the forest around it. The tour stops at the outer wall: opening the main gate requires great strength, while the service door exposes intruders to the guard dog. The family house stands farther up the mountain.',
    },
    filedHere: [
      'zebro',
      'mike',
      'seaquant',
      'canary',
      'milluki',
      'zeno',
      'kalluto',
      'gotoh',
    ],
  },
}
