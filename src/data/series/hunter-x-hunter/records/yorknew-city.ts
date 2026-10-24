import type { HunterSaga } from './saga'

/**
 * Yorknew City: episodes 37–58 of the 2011 anime and chapters 64–119, as the
 * English Hunter x Hunter Wiki's arc page gives them. Italian Wikipedia calls
 * the city York Shin City.
 */
export const yorknewCity: HunterSaga = {
  name: { it: 'York Shin City', en: 'Yorknew City' },
  dossiers: {},
  entries: [
    {
      id: 'yorknew-city-arc',
      kind: 'arc',
      revealedAtEpisode: 37,
      revealedAtChapter: 64,
      name: { it: 'York Shin City', en: 'Yorknew City' },
      summary: {
        it: 'Gon torna a casa con Killua prima dell’appuntamento con gli amici: York Shin City, il primo settembre, durante l’asta più grande del mondo.',
        en: 'Gon goes home with Killua before the meeting the friends agreed on: Yorknew City, on the first of September, during the largest auction in the world.',
      },
      visual: { art: 'yorknew-city-arc', tint: 'wine' },
    },
  ],
}
