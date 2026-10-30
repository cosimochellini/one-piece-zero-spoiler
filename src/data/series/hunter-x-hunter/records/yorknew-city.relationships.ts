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
      en: 'When Ging brought his baby son back to Whale Island, his cousin Mito took the boy in and raised him.',
      it: 'Quando Ging ha riportato il figlio piccolo sull’Isola Balena, sua cugina Myto ha preso con sé il bambino e lo ha cresciuto.',
    },
  },
  // Anime wording: episode 37 has the grandmother asked, not Mito taking
  // the boy in (chapter 65).
  gingMitoEpisode: {
    character: 'mito-freecss',
    type: { en: 'Cousin', it: 'Cugina' },
    summary: {
      en: 'Ging, Mito’s cousin, came back to Whale Island with his baby son and asked his grandmother to look after the boy.',
      it: 'Ging, cugino di Myto, è tornato sull’Isola Balena con il figlio in fasce e ha chiesto a sua nonna di occuparsi del bambino.',
    },
  },
  gingKite: {
    character: 'kite',
    type: { en: 'Student', it: 'Allievo' },
    summary: {
      en: 'Ging trained Kite and then challenged him to track him down.',
      it: 'Ging ha addestrato Kaito e poi lo ha sfidato a trovarlo.',
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
      value: [links.gingGon, links.gingMitoEpisode],
    },
    // Anime-only, delayed to Kite's record (episode 76).
    {
      episode: 76,
      chapter: 185,
      source: 'episode',
      value: [links.gingGon, links.gingKite, links.gingMitoEpisode],
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
