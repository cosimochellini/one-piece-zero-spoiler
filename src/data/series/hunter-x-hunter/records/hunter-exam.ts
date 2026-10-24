import type { HunterSaga } from './saga'

/**
 * The Hunter Exam, Zoldyck Family included: episodes 1–26 of the 2011 anime
 * and chapters 1–43 (owner, 2026-10-24). It is the demo span. The English
 * Hunter x Hunter Wiki's arc page gives both ranges.
 */
export const hunterExam: HunterSaga = {
  name: { it: 'Esame Hunter', en: 'Hunter Exam' },
  dossiers: {},
  entries: [
    {
      id: 'hunter-exam-arc',
      kind: 'arc',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Esame Hunter', en: 'Hunter Exam' },
      summary: {
        it: 'Gon lascia l’Isola Balena per sostenere l’Esame Hunter e per cercare suo padre, un Hunter che non ha mai conosciuto.',
        en: 'Gon leaves Whale Island to take the Hunter Exam and to look for his father, a Hunter he has never met.',
      },
      visual: { art: 'hunter-exam-arc', tint: 'yellow' },
    },
  ],
}
