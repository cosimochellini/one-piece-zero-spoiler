import type { Saga } from './saga'

/**
 * The Egghead arc, episodes 1086 to 1122: the first island of the final
 * saga, a laboratory that lives in the future.
 */

export const egghead: Saga = {
  entries: [
    {
      id: 'egghead',
      kind: 'arc',
      revealedAtEpisode: 1089,
      name: { it: 'Saga di Egghead', en: 'Egghead Saga' },
      summary: {
        it: 'La ciurma approda su un’isola che vive centinaia di anni nel futuro, costruita attorno al laboratorio di uno scienziato del Governo Mondiale.',
        en: 'The crew lands on an island living hundreds of years in the future, built around the laboratory of a World Government scientist.',
      },
      visual: { art: 'egghead', tint: 'cyan' },
    },
    {
      id: 'egghead-island',
      kind: 'place',
      revealedAtEpisode: 1089,
      name: { it: 'Isola di Egghead', en: 'Egghead Island' },
      summary: {
        it: 'Un’isola-laboratorio nel Nuovo Mondo, tenuta calda da un vulcano sottomarino e piena di macchine che non dovrebbero esistere ancora.',
        en: 'A laboratory island in the New World, kept warm by an undersea volcano and full of machines that should not exist yet.',
      },
      visual: { art: 'egghead-island', tint: 'orange' },
    },
  ],

  dossiers: {},
}
