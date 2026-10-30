import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json. */
const links = {
  kiteGon: {
    character: 'gon-freecss',
    type: { en: 'Teacher’s son he saves', it: 'Figlio del maestro che salva' },
    summary: {
      en: 'Kite saves Gon from a foxbear, scolds him for entering its territory and tells him that his father is a Hunter and still alive.',
      it: 'Kaito salva Gon da un orso-volpe, lo rimprovera per essere entrato nel suo territorio e gli dice che suo padre è un Hunter ed è ancora vivo.',
    },
  },
  kiteKon: {
    character: 'kon',
    type: {
      en: 'Cub he meant to put down',
      it: 'Cucciolo che voleva abbattere',
    },
    summary: {
      en: 'Kite kills Kon’s mother to save Gon and wants to put the cub down too, until Gon stops him.',
      it: 'Kaito uccide la madre di Kon per salvare Gon e vorrebbe abbattere anche il cucciolo, finché Gon non lo ferma.',
    },
  },
  // Kite
  kiteGing: {
    character: 'ging-freecss',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'Kite’s final test from his teacher Ging is to find him, and the search brings him to Whale Island.',
      it: 'L’ultima prova che Ging, il suo maestro, ha dato a Kaito è trovarlo, e la ricerca lo porta sull’Isola Balena.',
    },
  },
  // Kon
  konGon: {
    character: 'gon-freecss',
    type: { en: 'Boy who raises him', it: 'Ragazzino che lo alleva' },
    summary: {
      en: 'After Kon’s mother is killed, Gon stops Kite from putting Kon down and promises to raise him.',
      it: 'Dopo la morte della madre di Kon, Gon impedisce a Kaito di abbatterlo e promette di allevarlo.',
    },
  },
  konKite: {
    character: 'kite',
    type: {
      en: 'Hunter who killed his mother',
      it: 'Hunter che ha ucciso sua madre',
    },
    summary: {
      en: 'Kite kills Kon’s mother to save Gon, then wants to put Kon down as well.',
      it: 'Kaito uccide la madre di Kon per salvare Gon, poi vorrebbe abbattere anche lui.',
    },
  },
} satisfies Record<string, Relationship>

export const chapterOneRelationships = {
  // Unanchored: 76 / 1 vouches for nothing in the chapter table.
  kite: [
    // Manga-only: Ging's record opens at chapter 66, so he waits.
    {
      episode: 76,
      chapter: 1,
      source: 'chapter',
      value: [links.kiteGon, links.kiteKon],
    },
    // Manga-only, delayed to Ging's record (chapter 66).
    {
      episode: 76,
      chapter: 66,
      source: 'chapter',
      value: [links.kiteGing, links.kiteGon, links.kiteKon],
    },
    // Anime-only: Ging (episode 37) is already open at episode 76.
    {
      episode: 76,
      chapter: 1,
      source: 'episode',
      value: [links.kiteGing, links.kiteGon, links.kiteKon],
    },
  ],
  kon: [{ episode: 76, chapter: 1, value: [links.konGon, links.konKite] }],
} satisfies Record<string, Timeline<Relationship[]>>
