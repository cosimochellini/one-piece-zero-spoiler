import type { HunterSaga } from './saga'

/**
 * Kakin: chapters 340 on, still running. The English Hunter x Hunter Wiki
 * files it as the Succession Contest arc, but an arc's name is shown at every
 * bookmark (`sagaLabels`), and the succession contest is first told in
 * chapter 349, nine chapters into the arc. The arc is named after Kakin, the
 * empire whose king opens it, which the story names from chapter 186. The
 * 2011 anime ends before it, so it is the manga's alone (`source: 'manga'`),
 * and its episode, the anime's last, only orders it.
 */
export const kakin: HunterSaga = {
  name: { it: 'Cakin', en: 'Kakin' },
  dossiers: {},
  entries: [
    {
      id: 'kakin-arc',
      kind: 'arc',
      revealedAtEpisode: 148,
      revealedAtChapter: 340,
      source: 'manga',
      name: { it: 'Cakin', en: 'Kakin' },
      summary: {
        it: 'Il re di Cakin annuncia un viaggio verso il Continente Oscuro, una terra che nessuna mappa del mondo riporta.',
        en: 'The King of Kakin announces a voyage to the Dark Continent, a land that no map of the world shows.',
      },
      visual: { art: 'kakin-arc', tint: 'violet' },
    },
  ],
}
