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
  // Anime-only wording: in the 2011 anime Kite tells Gon nothing about his
  // father on Whale Island and learns from Ging later that the boy was his son.
  kiteGonEpisode: {
    character: 'gon-freecss',
    type: { en: 'Teacher’s son he saves', it: 'Figlio del maestro che salva' },
    summary: {
      en: 'Kite saves Gon from a foxbear and hits him for going near it, and only later learns from Ging that the boy is his son.',
      it: 'Kaito salva Gon da un orso-volpe e lo colpisce per essersi avvicinato, e solo più tardi scopre da Ging che quel bambino è suo figlio.',
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
      en: 'Kite’s teacher Ging set him the task of finding him, and the search brings Kite to Whale Island.',
      it: 'Ging, il maestro di Kaito, gli ha dato il compito di trovarlo, e la ricerca porta Kaito sull’Isola Balena.',
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
  // Anime wording: the cub scene is cited to chapter 1 only (Kon and Kite
  // pages), so anime readers get only what Kon's record says.
  konGonEpisode: {
    character: 'gon-freecss',
    type: { en: 'Boy who raises him', it: 'Ragazzino che lo alleva' },
    summary: {
      en: 'After Kon’s mother is killed, Gon decides to raise him.',
      it: 'Dopo la morte della madre di Kon, Gon decide di allevarlo.',
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
    // Anime-only: Ging (episode 37) is already open at episode 76; the cub
    // scene is not on the episode page, so Kon waits for the manga.
    {
      episode: 76,
      chapter: 1,
      source: 'episode',
      value: [links.kiteGing, links.kiteGonEpisode],
    },
  ],
  kon: [
    // Manga-only: the cub scene is chapter 1's.
    {
      episode: 76,
      chapter: 1,
      source: 'chapter',
      value: [links.konGon, links.konKite],
    },
    {
      episode: 76,
      chapter: 1,
      source: 'episode',
      value: [links.konGonEpisode],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
