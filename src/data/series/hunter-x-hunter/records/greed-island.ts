import type { HunterSaga } from './saga'

/**
 * Greed Island: episodes 59–75 of the 2011 anime and chapters 120–185, as the
 * English Hunter x Hunter Wiki's arc page gives them.
 */
export const greedIsland: HunterSaga = {
  name: { it: 'Greed Island', en: 'Greed Island' },
  dossiers: {},
  entries: [
    {
      id: 'greed-island-arc',
      kind: 'arc',
      revealedAtEpisode: 59,
      revealedAtChapter: 120,
      name: { it: 'Greed Island', en: 'Greed Island' },
      summary: {
        it: 'Un videogioco rarissimo, messo all’asta a York Shin City, che contiene un indizio per trovare Ging.',
        en: 'A very rare video game, up for sale at the Yorknew auction, that holds a lead to Ging.',
      },
      visual: { art: 'greed-island-arc', tint: 'orange' },
    },
  ],
}
