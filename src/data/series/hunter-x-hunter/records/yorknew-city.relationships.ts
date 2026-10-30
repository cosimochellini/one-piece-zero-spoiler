import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json. */
const links = {
  // Ging Freecss
  gingGon: {
    character: 'gon-freecss',
    type: { en: 'Son he left', it: 'Figlio che ha lasciato' },
    summary: {
      en: 'Ging left Gon on Whale Island as a baby, and on a tape he left for him he asks Gon whether he wants to see him.',
      it: 'Ging ha lasciato Gon in fasce sull’Isola Balena e, su una cassetta lasciata per lui, gli chiede se vuole vederlo.',
    },
  },
  gingMito: {
    character: 'mito-freecss',
    type: { en: 'Cousin', it: 'Cugina' },
    summary: {
      en: 'When Ging came back with his baby son, Mito took the boy and shouted at him never to come back.',
      it: 'Quando Ging è tornato con il figlio in fasce, Myto si è presa il bambino e gli ha gridato di non tornare più.',
    },
  },
  gingKite: {
    character: 'kite',
    type: { en: 'Student', it: 'Allievo' },
    summary: {
      en: 'Ging trained Kite and set him a final test: to find him.',
      it: 'Ging ha addestrato Kaito e gli ha dato come ultima prova il compito di trovarlo.',
    },
  },
} satisfies Record<string, Relationship>

export const yorknewCityRelationships = {
  // Ging opens at episode 37 but chapter 66, which episode 38 adapts, so no
  // both-source pair is true at his gate; and Kite is open to manga readers
  // here but to anime readers only from episode 76. Every entry is one-source.
  'ging-freecss': [
    // Anime-only: Kite's record opens at episode 76.
    {
      episode: 37,
      chapter: 66,
      source: 'episode',
      value: [links.gingGon, links.gingMito],
    },
    // Anime-only, delayed to Kite's record (episode 76).
    {
      episode: 76,
      chapter: 185,
      source: 'episode',
      value: [links.gingGon, links.gingKite, links.gingMito],
    },
    // Manga-only: Kite is a chapter-1 record, so he is open at Ging's chapter.
    {
      episode: 38,
      chapter: 66,
      source: 'chapter',
      value: [links.gingGon, links.gingKite, links.gingMito],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
