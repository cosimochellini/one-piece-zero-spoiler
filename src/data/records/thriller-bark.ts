import type { Saga } from './saga'

/**
 * The Thriller Bark saga, episodes 326 to 384: a ghost ship, an island that
 * is a ship, and a skeleton who plays the violin.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

export const thrillerBark: Saga = {
  entries: [
    {
      id: 'brook',
      kind: 'character',
      revealedAtEpisode: 339,
      name: { it: 'Brook', en: 'Brook' },
      summary: {
        it: 'Uno scheletro con la permanente afro che suona il violino, chiede alle signore di mostrargli le mutandine e beve il tè con le buone maniere, cinquant’anni dopo essere morto.',
        en: 'A skeleton with an afro who plays the violin, asks ladies to show him their panties and takes his tea with good manners, fifty years after he died.',
      },
      visual: { art: 'brook', tint: 'lavender' },
    },
    {
      id: 'perona',
      kind: 'character',
      revealedAtEpisode: 340,
      name: { it: 'Perona', en: 'Perona' },
      summary: {
        it: 'La principessa fantasma di una nave-isola, con un ombrello e un orso di peluche al seguito, i cui spettri fanno sentire chiunque tocchino indegno di vivere.',
        en: 'The ghost princess of an island-ship, an umbrella and a stuffed bear in tow, whose spectres leave anyone they touch feeling unworthy of living.',
      },
      visual: { art: 'perona', tint: 'pink' },
    },
  ],

  dossiers: {
    brook: {
      role: { it: 'Musicista', en: 'Musician' },
      log: {
        it: 'Ha vagato per cinquant’anni su una nave fantasma in un mare senza sole, senza compagni e senza ombra. È morto una volta e il suo frutto lo ha riportato indietro, ma il corpo che ha ritrovato era già solo ossa. Accetta l’invito a bordo di Rufy in trenta secondi, poi chiede alla navigatrice di mostrargli le mutandine.',
        en: 'He drifted for fifty years on a ghost ship in a sunless sea, with no crew and no shadow. He died once and his fruit brought him back, but the body he found again was already bare bones. He accepts Luffy’s invitation aboard within thirty seconds, then asks the navigator to show him her panties.',
      },
      affiliation: [
        {
          episode: 339,
          value: {
            it: 'Pirati di Rumbar, un tempo',
            en: 'Rumbar Pirates, once',
          },
        },
        { episode: 381, value: STRAW_HATS },
      ],
      origin: [{ episode: 339, value: { it: 'West Blue', en: 'West Blue' } }],
      epithet: [{ episode: 517, value: { it: 'Soul King', en: 'Soul King' } }],
      devilFruit: [
        {
          episode: 339,
          value: { it: 'Frutto Yomi Yomi', en: 'Revive-Revive Fruit' },
        },
      ],
      bounty: [
        { episode: 339, value: 33_000_000 },
        { episode: 746, value: 83_000_000 },
        { episode: 1086, value: 383_000_000 },
      ],
    },
    perona: {
      role: { it: 'Principessa fantasma', en: 'Ghost princess' },
      log: {
        it: 'Comanda gli zombie animali di Thriller Bark da un giardino pieno di peluche, e trova carino tutto ciò che è morto e tondo. I suoi fantasmi passano attraverso i muri e attraverso le persone, e chi ne viene toccato si accascia a maledire la propria esistenza. Contro un tiratore che non ha nulla da perdere, la tattica funziona meno.',
        en: 'She commands the animal zombies of Thriller Bark from a garden full of stuffed toys, and finds anything dead and round adorable. Her ghosts pass through walls and through people, and whoever they touch slumps to the floor cursing their own existence. Against a marksman with nothing to lose, the tactic works less well.',
      },
      affiliation: [
        {
          episode: 340,
          value: { it: 'Pirati di Thriller Bark', en: 'Thriller Bark Pirates' },
        },
      ],
      epithet: [
        {
          episode: 340,
          value: { it: 'Principessa Fantasma', en: 'Ghost Princess' },
        },
      ],
      devilFruit: [
        {
          episode: 340,
          value: { it: 'Frutto Horo Horo', en: 'Hollow-Hollow Fruit' },
        },
      ],
    },
  },
}
