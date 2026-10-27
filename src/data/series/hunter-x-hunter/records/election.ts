import type { HunterSaga } from './saga'

/**
 * The election: episodes 137–148 of the 2011 anime, the last it adapts, and
 * chapters 319–339, as the English Hunter x Hunter Wiki's arc page gives
 * them (the 13th Hunter Chairman Election arc). An arc's name is shown at
 * every bookmark (`sagaLabels`), and that title says the chairman has gone,
 * which the Chimera Ant arc tells; "Election" alone says only that one is
 * coming (owner, 2026-10-24). Owner's #796 check: the Zodiacs' meeting opens
 * chapter 319, from page 1 (page references follow the owner's digital
 * edition).
 */
export const election: HunterSaga = {
  name: { it: 'Elezione', en: 'Election' },
  dossiers: {},
  entries: [
    {
      id: 'election-arc',
      kind: 'arc',
      revealedAtEpisode: 137,
      revealedAtChapter: 319,
      name: { it: 'Elezione', en: 'Election' },
      summary: {
        it: 'L’Associazione Hunter non ha più un presidente. I dodici membri dello Zodiaco si riuniscono per decidere come eleggere il prossimo.',
        en: 'The Hunter Association has lost its chairman. The twelve Zodiacs meet to decide how the next one is elected.',
      },
      visual: { art: 'election-arc', tint: 'lavender' },
    },
  ],
}
