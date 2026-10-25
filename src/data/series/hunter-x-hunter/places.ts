import type { PlaceDossier } from '~/data/types'

import type { HunterVocabulary } from './records/saga'

/**
 * The log entry of every Hunter x Hunter place, by the place's id, in its own
 * words (`../placeWords`). The Hunter Exam's first part (#760): Gon's island
 * and the port the applicants land at.
 */
export const PLACE_DOSSIERS: Record<string, PlaceDossier<HunterVocabulary>> = {
  'whale-island': {
    form: 'island',
    region: 'islands',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'Due montagne e la foresta fra l’una e l’altra',
      en: 'Two mountains with the forest between them',
    },
    log: {
      it: 'Un’isola tranquilla di barche da pesca, con un porto, un paese e alle spalle la foresta dove Gon pesca e gioca. Il giorno in cui parte per l’esame, tutto il paese scende al porto a salutarlo.',
      en: 'A quiet island of fishing boats, with a harbour, a town and the forest behind it where Gon fishes and plays. On the day he leaves for the exam, the whole town comes down to the harbour to see him off.',
    },
    filedHere: ['gon-freecss', 'mito-freecss'],
  },
  'dolle-harbor': {
    form: 'port',
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'Il pino solitario sulla collina dietro la città',
      en: 'The lone pine on the hill behind the town',
    },
    log: {
      it: 'Il capitano fa sbarcare qui Gon, Kurapika e Leorio e indica a Gon un albero solitario sulla collina, dalla parte opposta alla città dell’esame. Quasi tutti gli aspiranti prendono l’autobus, che però non arriva mai. Sulla strada per l’albero, in una via deserta, una vecchia li ferma con un quiz che non ha una risposta giusta.',
      en: 'The captain sets Gon, Kurapika and Leorio ashore here and points Gon to a lone tree on the hill, away from the exam city. Most applicants take the bus, which never gets there. On the way to the tree an old woman stops them in an empty street with a quiz that has no right answer.',
    },
    // The Kiriko live in a house under the tree outside the town (ch 4).
    filedHere: ['kiriko'],
  },
}
