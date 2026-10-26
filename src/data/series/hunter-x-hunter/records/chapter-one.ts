import { chapterOneChronicles } from './chapter-one.chronicle'
import type { HunterSaga } from './saga'

/** Chapter 1's two characters the 2011 anime introduces much later (#760). */
export const chapterOne: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'kite',
      kind: 'character',
      // Episode 75 only shows an unidentified figure; 76 names him.
      revealedAtEpisode: 76,
      revealedAtChapter: 1,
      unanchored: true,
      name: { it: 'Kaito', en: 'Kite' },
      summary: {
        it: 'Un Hunter allievo di Ging che salva Gon da un orso-volpe sull’Isola Balena e gli dice che suo padre è ancora vivo.',
        en: 'A Hunter trained by Ging who saves Gon from a foxbear on Whale Island and tells him that his father is still alive.',
      },
      visual: { art: 'kite', tint: 'azure' },
    },
    {
      id: 'kon',
      kind: 'character',
      revealedAtEpisode: 76,
      revealedAtChapter: 1,
      unanchored: true,
      name: { it: 'Kon', en: 'Kon' },
      summary: {
        it: 'Un orso-volpe dell’Isola Balena che Gon decide di allevare dopo la morte della madre.',
        en: 'A foxbear from Whale Island whom Gon decides to raise after its mother is killed.',
      },
      visual: { art: 'kon', tint: 'ocher' },
    },
  ],
  dossiers: {
    kite: {
      chronicle: chapterOneChronicles.kite,
      role: { it: 'Hunter', en: 'Hunter' },
      log: {
        it: 'Arriva sull’Isola Balena in cerca di indizi su Ging, il suo maestro, che gli ha assegnato come ultima prova il compito di trovarlo. Salva Gon da un orso-volpe e lo rimprovera per essersi avvicinato al suo territorio. Quando scopre che è il figlio di Ging, gli racconta che suo padre è un Hunter ed è ancora vivo.',
        en: 'He comes to Whale Island looking for clues about Ging, his teacher, whose final test is to find him. He saves Gon from a foxbear and rebukes him for entering its territory. When he learns that Gon is Ging’s son, he tells him that his father is a Hunter and is still alive.',
      },
      status: [{ episode: 76, chapter: 1, value: 'alive' }],
      affiliation: [
        {
          episode: 76,
          chapter: 1,
          value: {
            it: 'Allievo di Ging Freecss',
            en: 'Ging Freecss’s student',
          },
        },
      ],
    },
    kon: {
      chronicle: chapterOneChronicles.kon,
      role: { it: 'Orso-volpe', en: 'Foxbear' },
      log: {
        it: 'È ancora un cucciolo quando Kaito uccide sua madre per salvare Gon. Kaito vuole abbattere anche lui, ma Gon lo prende in braccio e insiste per allevarlo, anche mentre il cucciolo gli graffia il braccio.',
        en: 'He is still a cub when Kite kills his mother to save Gon. Kite intends to put him down too, but Gon holds him and insists on raising him, even as the cub scratches his arm.',
      },
      status: [{ episode: 76, chapter: 1, value: 'alive' }],
      affiliation: [
        {
          episode: 76,
          chapter: 1,
          value: { it: 'Isola Balena', en: 'Whale Island' },
        },
      ],
      origin: [
        {
          episode: 76,
          chapter: 1,
          place: 'whale-island',
          value: { it: 'Isola Balena', en: 'Whale Island' },
        },
      ],
    },
  },
}
