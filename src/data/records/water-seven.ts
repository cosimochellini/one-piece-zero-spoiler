import type { Saga } from './saga'

/**
 * The Water Seven saga, episodes 207 to 325: a game on a long thin island,
 * a city of shipwrights, a judicial island, and a new ship.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

export const waterSeven: Saga = {
  entries: [
    {
      id: 'water-seven',
      kind: 'arc',
      revealedAtEpisode: 229,
      name: { it: 'Saga di Water Seven', en: 'Water Seven Saga' },
      summary: {
        it: 'Una città d’acqua di maestri d’ascia, dove la ciurma si scopre meno compatta di quanto credeva.',
        en: 'A city of shipwrights built on water, where the crew turns out to be less united than it thought.',
      },
      visual: { art: 'water-seven', tint: 'teal' },
    },
    {
      id: 'franky',
      kind: 'character',
      revealedAtEpisode: 235,
      name: { it: 'Franky', en: 'Franky' },
      summary: {
        it: 'Un cyborg in mutande e camicia hawaiana, con il ciuffo a pompadour, che smonta navi per vivere e le ricostruisce per passione, e che ha appena rapinato Usop.',
        en: 'A cyborg in swim briefs and a Hawaiian shirt, hair in a pompadour, who strips ships for a living and rebuilds them for love, and who has just robbed Usopp.',
      },
      visual: { art: 'franky', tint: 'cyan' },
    },
  ],

  dossiers: {
    franky: {
      role: { it: 'Smantellatore di navi', en: 'Ship dismantler' },
      log: {
        it: 'Comanda la Franky Family, una banda di smantellatori che vive sotto un ponte di Water Seven e ruba a chi capita. Si è ricostruito il corpo da solo con pezzi di ferro, e funziona a cola: quando è scarico gli cambiano l’acconciatura e l’umore. Sa cosa vuol dire perdere una nave, e non lo racconta.',
        en: 'He runs the Franky Family, a gang of dismantlers who live under a bridge in Water Seven and rob whoever comes along. He rebuilt his own body out of scrap iron, and it runs on cola: when he is empty his hair and his mood both go flat. He knows what it is to lose a ship, and does not talk about it.',
      },
      affiliation: [
        {
          episode: 235,
          value: { it: 'Franky Family, capo', en: 'Franky Family, boss' },
        },
        { episode: 322, value: STRAW_HATS },
      ],
      origin: [{ episode: 248, value: { it: 'South Blue', en: 'South Blue' } }],
      epithet: [{ episode: 320, value: { it: 'Cyborg', en: 'Cyborg' } }],
      bounty: [
        { episode: 320, value: 44_000_000 },
        { episode: 746, value: 94_000_000 },
        { episode: 1086, value: 394_000_000 },
      ],
    },
  },
}
