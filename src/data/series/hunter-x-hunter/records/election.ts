import type { HunterSaga } from './saga'

/**
 * The 13th Hunter Chairman Election: episodes 137–148 of the 2011 anime, the
 * last it adapts, and chapters 319–339, as the English Hunter x Hunter Wiki's
 * arc page gives them.
 */
export const election: HunterSaga = {
  name: { it: 'Elezione del presidente', en: '13th Hunter Chairman Election' },
  dossiers: {},
  entries: [
    {
      id: '13th-hunter-chairman-election-arc',
      kind: 'arc',
      revealedAtEpisode: 137,
      revealedAtChapter: 319,
      name: {
        it: 'Elezione del presidente',
        en: '13th Hunter Chairman Election',
      },
      summary: {
        it: 'L’Associazione Hunter non ha più un presidente. I dodici membri dello Zodiaco si riuniscono per decidere come eleggere il prossimo.',
        en: 'The Hunter Association has lost its chairman. The twelve Zodiacs meet to decide how the next one is elected.',
      },
      visual: { art: '13th-hunter-chairman-election-arc', tint: 'lavender' },
    },
  ],
}
