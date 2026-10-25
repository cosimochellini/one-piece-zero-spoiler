import type { PlaceDossier } from '~/data/types'

import type { HunterVocabulary } from './records/saga'

/**
 * The log entry of every Hunter x Hunter place, by the place's id, in its own
 * words (`../placeWords`). The Hunter Exam through its second phase (#760).
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
      it: 'L’albero solitario sulla collina dietro la città',
      en: 'The lone tree on the hill behind the town',
    },
    log: {
      it: 'Il capitano fa sbarcare qui Gon, Kurapika e Leorio e indica a Gon un albero solitario sulla collina, dalla parte opposta alla città dell’esame. Quasi tutti gli aspiranti prendono l’autobus, che però non arriva mai. Sulla strada per l’albero, in una via deserta, una vecchia li ferma con un quiz che non ha una risposta giusta.',
      en: 'The captain sets Gon, Kurapika and Leorio ashore here and points Gon to a lone tree on the hill, away from the exam city. Most applicants take the bus, which never gets there. On the way to the tree an old woman stops them in an empty street with a quiz that has no right answer.',
    },
    // The Kiriko live in a house under the tree outside the town (ch 4).
    filedHere: ['kiriko'],
  },
  'zaban-city': {
    form: 'city',
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'Il piccolo ristorante accanto al grattacielo',
      en: 'The small restaurant beside the high-rise',
    },
    log: {
      it: 'Il navigatore porta Gon e i suoi compagni in un piccolo ristorante. Un ordine convenuto apre l’accesso a una sala che scende come un ascensore: sotto la città, un lungo tunnel ospita gli aspiranti in attesa dell’esame.',
      en: 'The navigator takes Gon and his companions to a small restaurant. An agreed order gives access to a room that descends as an elevator: beneath the city, a long tunnel holds the applicants waiting for the exam.',
    },
    filedHere: ['tonpa', 'hisoka', 'hanzo', 'nicholas', 'satotz', 'killua'],
  },
  'milsy-wetlands': {
    form: 'wetland',
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'La palude avvolta nella nebbia oltre l’uscita del tunnel',
      en: 'The foggy wetlands beyond the tunnel exit',
    },
    log: {
      it: 'Dopo la corsa sotterranea, gli aspiranti escono nella palude. Satoshi li avverte che gli animali che ci vivono ingannano le prede: per arrivare alla seconda prova devono continuare a seguirlo senza farsi separare.',
      en: 'After the underground run, the applicants emerge into the wetlands. Satotz warns that the animals living there deceive their prey: to reach the Second Phase they must keep following him without becoming separated.',
    },
    filedHere: [],
  },
  'visca-forest-preserve': {
    form: 'forest',
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'L’edificio con le postazioni di cucina davanti alla foresta',
      en: 'The building with cooking stations before the forest',
    },
    log: {
      it: 'La prima prova finisce qui, davanti all’edificio dove aspettano Menci e Buhara. La seconda è una prova di cucina: gli aspiranti devono cercare nella foresta i cinghiali da arrostire.',
      en: 'The First Phase ends here, outside the building where Menchi and Buhara wait. The second is a cooking test: the applicants must search the forest for boars to roast.',
    },
    filedHere: ['menchi', 'buhara', 'netero'],
  },
  'split-mountain': {
    form: 'mountain',
    region: 'mainland',
    arc: 'hunter-exam-arc',
    landmark: {
      it: 'Le uova sospese sulle tele nella gola',
      en: 'The eggs hanging from webs in the ravine',
    },
    log: {
      it: 'Menci sceglie questa gola per ripetere la seconda prova. Gli aspiranti devono scendere fino alle tele tese tra le pareti, prendere le uova e tornare su per cucinarle.',
      en: 'Menchi chooses this ravine for the Second Phase retest. The applicants must descend to the webs stretched between the cliffs, take the eggs and return to cook them.',
    },
    filedHere: [],
  },
}
