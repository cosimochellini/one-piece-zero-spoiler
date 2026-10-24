import type { HunterSaga } from './saga'

/**
 * The Dark Continent Expedition, which the English Hunter x Hunter Wiki files
 * as the Succession Contest arc: chapters 340 on, still running. The 2011
 * anime ends before it, so it is the manga's alone (`source: 'manga'`), and
 * its episode, the anime's last, only orders it.
 */
export const darkContinent: HunterSaga = {
  name: {
    it: 'Spedizione nel Continente Oscuro',
    en: 'Dark Continent Expedition',
  },
  dossiers: {},
  entries: [
    {
      id: 'dark-continent-expedition-arc',
      kind: 'arc',
      revealedAtEpisode: 148,
      revealedAtChapter: 340,
      source: 'manga',
      name: {
        it: 'Spedizione nel Continente Oscuro',
        en: 'Dark Continent Expedition',
      },
      summary: {
        it: 'Il re di Cakin annuncia un viaggio verso il Continente Oscuro, una terra che nessuna mappa del mondo riporta.',
        en: 'The King of Kakin announces a voyage to the Dark Continent, a land that no map of the world shows.',
      },
      visual: { art: 'dark-continent-expedition-arc', tint: 'violet' },
    },
  ],
}
