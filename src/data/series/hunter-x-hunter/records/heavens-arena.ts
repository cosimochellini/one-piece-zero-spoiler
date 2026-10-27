import type { HunterSaga } from './saga'

/**
 * Heavens Arena: episodes 27–36 of the 2011 anime and chapters 44–63, as the
 * English Hunter x Hunter Wiki's arc page gives them. Owner's #796 check: the
 * 251 floors are told in chapter 44, pages 15–16 (page references follow the
 * owner's digital edition).
 */
export const heavensArena: HunterSaga = {
  name: { it: 'Arena Celeste', en: 'Heavens Arena' },
  dossiers: {},
  entries: [
    {
      id: 'heavens-arena-arc',
      kind: 'arc',
      revealedAtEpisode: 27,
      revealedAtChapter: 44,
      name: { it: 'Arena Celeste', en: 'Heavens Arena' },
      summary: {
        it: 'Una torre di 251 piani dove si combatte, e per entrare basta battere un avversario. Gon e Killua, rimasti senza soldi, ci vengono per guadagnarne e per allenarsi.',
        en: 'A fighting tower of 251 floors that anyone can enter by beating an opponent. Gon and Killua, out of money, come here to earn some and to train.',
      },
      visual: { art: 'heavens-arena-arc', tint: 'azure' },
    },
  ],
}
