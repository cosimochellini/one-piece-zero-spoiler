import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json. */
const links = {
  lippoBendot: {
    character: 'bendot',
    type: { en: 'Prisoner he deploys', it: 'Prigioniero che schiera' },
    summary: {
      en: 'Bendot is one of the prisoners Lippo sets against Gon’s group in exchange for a shorter sentence.',
      it: 'Bendot è uno dei prigionieri che Rippo schiera contro il gruppo di Gon in cambio di una pena più breve.',
    },
  },
  lippoSedokan: {
    character: 'sedokan',
    type: { en: 'Prisoner he deploys', it: 'Prigioniero che schiera' },
    summary: {
      en: 'Sedokan is the second prisoner to face Gon’s group under Lippo’s offer of a shorter sentence.',
      it: 'Sedokan è il secondo prigioniero ad affrontare il gruppo di Gon con la promessa di Rippo di ridurgli la pena.',
    },
  },
  // Lippo
  lippoGon: {
    character: 'gon-freecss',
    type: { en: 'Applicant he addresses', it: 'Aspirante a cui si rivolge' },
    summary: {
      en: 'Lippo speaks to Gon’s group over the intercom as they start the path of majority rule.',
      it: 'Rippo parla al gruppo di Gon dall’altoparlante quando inizia il percorso della maggioranza.',
    },
  },
  lippoLeroute: {
    character: 'leroute',
    type: { en: 'Prisoner he deploys', it: 'Prigioniera che schiera' },
    summary: {
      en: 'Leroute is one of the prisoners Lippo sets against Gon’s group, and she wagers hours with Leorio.',
      it: 'Leroute è una delle prigioniere che Rippo schiera contro il gruppo di Gon e scommette ore con Leorio.',
    },
  },
  lippoJohness: {
    character: 'johness',
    type: { en: 'Prisoner he releases', it: 'Prigioniero che libera' },
    summary: {
      en: 'Lippo removes Johness’s handcuffs for the last match against Gon’s group.',
      it: 'Rippo toglie le manette a Johnes per l’ultimo incontro contro il gruppo di Gon.',
    },
  },
  // Bendot
  bendotTonpa: {
    character: 'tonpa',
    type: { en: 'Opponent who surrenders', it: 'Avversario che si arrende' },
    summary: {
      en: 'Tonpa volunteers to fight Bendot and gives up as soon as the fight begins.',
      it: 'Tonpa si offre di combattere contro Bendot e si arrende appena comincia lo scontro.',
    },
  },
  bendotLippo: {
    character: 'lippo',
    type: { en: 'Warden', it: 'Direttore' },
    summary: {
      en: 'Lippo promises the prisoners a year off their sentences for every hour they delay the applicants.',
      it: 'Rippo promette ai prigionieri un anno di pena in meno per ogni ora con cui rallentano gli aspiranti.',
    },
  },
  bendotKillua: {
    character: 'killua',
    type: {
      en: 'Applicant he refuses to fight',
      it: 'Aspirante che rifiuta di affrontare',
    },
    summary: {
      en: 'After Killua kills Johness, Bendot politely turns down Killua’s offer to fight him.',
      it: 'Dopo che Killua ha ucciso Johnes, Bendot rifiuta con educazione la sua proposta di combattere.',
    },
  },
  // Sedokan
  sedokanGon: {
    character: 'gon-freecss',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Gon volunteers to face Sedokan in the second match.',
      it: 'Gon si offre di affrontare Sedokan nel secondo incontro.',
    },
  },
  sedokanLippo: {
    character: 'lippo',
    type: { en: 'Warden', it: 'Direttore' },
    summary: {
      en: 'Lippo promises Sedokan a year off his sentence for every hour he delays the applicants.',
      it: 'Rippo promette a Sedokan un anno di pena in meno per ogni ora con cui rallenta gli aspiranti.',
    },
  },
  sedokanGonWin: {
    character: 'gon-freecss',
    type: { en: 'Opponent who beats him', it: 'Avversario che lo batte' },
    summary: {
      en: 'Gon wins Sedokan’s candle game by running across and blowing out Sedokan’s candle.',
      it: 'Gon vince il gioco delle candele di Sedokan correndogli incontro e spegnendo la sua candela con un soffio.',
    },
  },
  // Majtani
  majtaniKurapika: {
    character: 'kurapika',
    type: {
      en: 'Opponent who knocks him out',
      it: 'Avversario che lo mette al tappeto',
    },
    summary: {
      en: 'Kurapika sees Majtani’s fake Phantom Troupe tattoo and knocks him out with one punch.',
      it: 'Kurapika vede il falso tatuaggio della Brigata Fantasma di Majtani e lo mette fuori combattimento con un pugno.',
    },
  },
  majtaniLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Applicant who exposes him', it: 'Aspirante che lo smaschera' },
    summary: {
      en: 'Leorio threatens to drop Majtani off the platform, and Majtani stops pretending and accepts defeat.',
      it: 'Leorio minaccia di buttare Majtani giù dalla piattaforma, e Majtani smette di fingere e accetta la sconfitta.',
    },
  },
  majtaniLeroute: {
    character: 'leroute',
    type: {
      en: 'Prisoner who bets on him',
      it: 'Prigioniera che scommette su di lui',
    },
    summary: {
      en: 'Leroute claims Majtani is only unconscious and wagers hours with Leorio on his condition.',
      it: 'Leroute sostiene che Majtani è solo svenuto e scommette ore con Leorio sulle sue condizioni.',
    },
  },
  majtaniKillua: {
    character: 'killua',
    type: {
      en: 'Applicant who offers to kill him',
      it: 'Aspirante che si offre di ucciderlo',
    },
    summary: {
      en: 'While Majtani lies on the floor, Killua offers to finish him off for Kurapika.',
      it: 'Mentre Majtani è a terra, Killua si offre di finirlo al posto di Kurapika.',
    },
  },
  // Leroute
  lerouteLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Opponent she bets against',
      it: 'Avversario con cui scommette',
    },
    summary: {
      en: 'Leroute challenges Leorio to bet his group’s remaining hours on a series of wagers.',
      it: 'Leroute sfida Leorio a giocarsi in una serie di scommesse le ore che restano al suo gruppo.',
    },
  },
  lerouteMajtani: {
    character: 'majtani',
    type: {
      en: 'Fellow prisoner she bets on',
      it: 'Compagno di prigionia su cui scommette',
    },
    summary: {
      en: 'Leroute stops the applicants from removing Majtani and wagers hours on whether he is alive and unconscious.',
      it: 'Leroute impedisce agli aspiranti di portare via Majtani e scommette ore sul fatto che sia vivo e svenuto.',
    },
  },
  lerouteLippo: {
    character: 'lippo',
    type: { en: 'Warden', it: 'Direttore' },
    summary: {
      en: 'Lippo sets Leroute and the other prisoners against Gon’s group in exchange for shorter sentences.',
      it: 'Rippo schiera Leroute e gli altri prigionieri contro il gruppo di Gon in cambio di pene più brevi.',
    },
  },
  lerouteLeorioWin: {
    character: 'leorio-paradinight',
    type: { en: 'Opponent she beats', it: 'Avversario che batte' },
    summary: {
      en: 'Leroute wins her wager with Leorio, and his group loses fifty hours.',
      it: 'Leroute vince la sfida con Leorio e il suo gruppo perde cinquanta ore.',
    },
  },
  // Johness
  johnessKillua: {
    character: 'killua',
    type: { en: 'Opponent who kills him', it: 'Avversario che lo uccide' },
    summary: {
      en: 'Killua tears out Johness’s heart before Johness can move.',
      it: 'Killua strappa il cuore a Johnes prima che possa muoversi.',
    },
  },
  johnessLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Applicant who recognizes him',
      it: 'Aspirante che lo riconosce',
    },
    summary: {
      en: 'Leorio recognizes Johness and urges Killua not to fight him.',
      it: 'Leorio riconosce Johnes e insiste perché Killua non lo affronti.',
    },
  },
  johnessLippo: {
    character: 'lippo',
    type: { en: 'Warden', it: 'Direttore' },
    summary: {
      en: 'Lippo removes Johness’s handcuffs before the last match.',
      it: 'Rippo toglie le manette a Johnes prima dell’ultimo incontro.',
    },
  },
  // Togari
  togariHisoka: {
    character: 'hisoka',
    type: {
      en: 'Applicant he seeks revenge on',
      it: 'Aspirante di cui vuole vendicarsi',
    },
    summary: {
      en: 'Togari waits for Hisoka in the tower to avenge the scars from the previous exam, and Hisoka kills him with his own knives.',
      it: 'Togari aspetta Hisoka nella torre per vendicare le cicatrici dell’esame precedente, e Hisoka lo uccide con i suoi stessi coltelli.',
    },
  },
} satisfies Record<string, Relationship>

export const trickTowerRelationships = {
  lippo: [
    {
      episode: 8,
      chapter: 17,
      value: [links.lippoBendot, links.lippoSedokan, links.lippoGon],
    },
    {
      episode: 10,
      chapter: 20,
      value: [
        links.lippoLeroute,
        links.lippoBendot,
        links.lippoSedokan,
        links.lippoGon,
      ],
    },
    // Anime-only: episode 11 shows Lippo removing Johness's handcuffs; the
    // manga's chapter 21 has them fall with no named Lippo.
    {
      episode: 11,
      chapter: 21,
      source: 'episode',
      value: [
        links.lippoJohness,
        links.lippoLeroute,
        links.lippoBendot,
        links.lippoSedokan,
        links.lippoGon,
      ],
    },
  ],
  bendot: [
    { episode: 8, chapter: 17, value: [links.bendotTonpa, links.bendotLippo] },
    // Manga-only: Bendot declining Killua's challenge is on the chapter 21
    // page, not on the episode 11 or 12 pages.
    {
      episode: 11,
      chapter: 21,
      source: 'chapter',
      value: [links.bendotTonpa, links.bendotKillua, links.bendotLippo],
    },
  ],
  sedokan: [
    { episode: 8, chapter: 17, value: [links.sedokanGon, links.sedokanLippo] },
    {
      episode: 9,
      chapter: 18,
      value: [links.sedokanGonWin, links.sedokanLippo],
    },
  ],
  majtani: [
    { episode: 9, chapter: 18, value: [links.majtaniKurapika] },
    {
      episode: 10,
      chapter: 20,
      value: [
        links.majtaniKurapika,
        links.majtaniLeorio,
        links.majtaniLeroute,
        links.majtaniKillua,
      ],
    },
  ],
  leroute: [
    {
      episode: 10,
      chapter: 20,
      value: [links.lerouteLeorio, links.lerouteMajtani, links.lerouteLippo],
    },
    {
      episode: 11,
      chapter: 21,
      value: [links.lerouteLeorioWin, links.lerouteMajtani, links.lerouteLippo],
    },
  ],
  johness: [
    // Anime-only Lippo link: episode 11 names him removing the handcuffs.
    {
      episode: 11,
      chapter: 21,
      source: 'episode',
      value: [links.johnessKillua, links.johnessLeorio, links.johnessLippo],
    },
    {
      episode: 11,
      chapter: 21,
      source: 'chapter',
      value: [links.johnessKillua, links.johnessLeorio],
    },
  ],
  // Anime-only record: every entry repeats its source; the chapter only orders.
  togari: [
    {
      episode: 10,
      chapter: 19,
      source: 'episode',
      value: [links.togariHisoka],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
