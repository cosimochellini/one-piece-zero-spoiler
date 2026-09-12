import type { Saga } from './saga'

/**
 * The Summit War saga, episodes 385 to 516: an archipelago of bubbles, an
 * island of women, the deepest prison in the world, and a war in a harbour.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}
const WARLORDS = { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' }

export const summitWar: Saga = {
  entries: [
    {
      id: 'trafalgar-law',
      kind: 'character',
      revealedAtEpisode: 392,
      name: { it: 'Trafalgar Law', en: 'Trafalgar Law' },
      summary: {
        it: 'Un capitano-chirurgo con un cappello a macchie e un orso polare in tuta nella ciurma, arrivato all’arcipelago con una taglia da duecento milioni e nessuna fretta.',
        en: 'A surgeon-captain in a spotted hat, a polar bear in a boiler suit in his crew, arrived at the archipelago with a two-hundred-million bounty and no hurry at all.',
      },
      visual: { art: 'trafalgar-law', tint: 'yellow' },
    },
    {
      id: 'eustass-kid',
      kind: 'character',
      revealedAtEpisode: 392,
      name: { it: 'Eustass Kid', en: 'Eustass Kid' },
      summary: {
        it: 'Un capitano dai capelli rossi con una taglia più alta di quella di Rufy, che attira il metallo verso di sé e non sopporta di essere guardato dall’alto.',
        en: 'A red-haired captain with a bounty higher than Luffy’s, who pulls metal toward him and cannot stand being looked down on.',
      },
      visual: { art: 'eustass-kid', tint: 'wine' },
    },
    {
      id: 'boa-hancock',
      kind: 'character',
      revealedAtEpisode: 410,
      name: { it: 'Boa Hancock', en: 'Boa Hancock' },
      summary: {
        it: 'L’imperatrice di un’isola di sole donne, la più bella del mondo per sua stessa ammissione, che trasforma in pietra chi la desidera e viene perdonata di tutto perché è bella.',
        en: 'The empress of an island of women only, the most beautiful in the world by her own account, who turns those who desire her to stone and is forgiven everything because she is beautiful.',
      },
      visual: { art: 'boa-hancock', tint: 'magenta' },
    },
    {
      id: 'jinbe',
      kind: 'character',
      revealedAtEpisode: 430,
      name: { it: 'Jinbe', en: 'Jinbe' },
      summary: {
        it: 'Un uomo-pesce della Flotta dei Sette, incatenato al livello più profondo della prigione più profonda del mondo per aver rifiutato di combattere una guerra contro Barbabianca.',
        en: 'A fish-man of the Seven Warlords, chained on the deepest level of the deepest prison in the world for refusing to fight a war against Whitebeard.',
      },
      visual: { art: 'jinbe', tint: 'blue' },
    },
    {
      id: 'marineford',
      kind: 'arc',
      revealedAtEpisode: 457,
      name: { it: 'Saga di Marineford', en: 'Marineford Saga' },
      summary: {
        it: 'La Marina e i pirati più forti del mondo si trovano nello stesso porto, nello stesso giorno.',
        en: 'The Marines and the strongest pirates in the world end up in the same harbour on the same day.',
      },
      visual: { art: 'marineford', tint: 'blue' },
    },
  ],

  dossiers: {
    'trafalgar-law': {
      role: { it: 'Capitano e chirurgo', en: 'Captain and surgeon' },
      log: {
        it: 'Uno degli undici pirati con una taglia sopra i cento milioni approdati a Sabaody nello stesso mese. Siede in un bar con la ciurma, guarda Rufy prendere a pugni un Nobile Mondiale e sorride, cosa che nessun altro nella stanza fa. Porta una spada lunga quanto lui e la usa poco, perché le mani gli bastano.',
        en: 'One of eleven pirates with a bounty above a hundred million to reach Sabaody in the same month. He sits in a bar with his crew, watches Luffy punch a World Noble and smiles, which nobody else in the room does. He carries a sword as long as himself and rarely uses it, because his hands are enough.',
      },
      affiliation: [
        {
          episode: 392,
          value: { it: 'Pirati Heart, capitano', en: 'Heart Pirates, captain' },
        },
        {
          episode: 517,
          value: {
            it: 'Flotta dei Sette; Pirati Heart, capitano',
            en: 'Seven Warlords; Heart Pirates, captain',
          },
        },
        {
          episode: 700,
          value: {
            it: 'Ex membro della Flotta dei Sette; Pirati Heart',
            en: 'Former Warlord; Heart Pirates',
          },
        },
      ],
      origin: [
        {
          episode: 704,
          value: { it: 'Flevance, North Blue', en: 'Flevance, North Blue' },
        },
      ],
      epithet: [
        {
          episode: 392,
          value: { it: 'Chirurgo della Morte', en: 'Surgeon of Death' },
        },
      ],
      devilFruit: [
        { episode: 590, value: { it: 'Frutto Ope Ope', en: 'Op-Op Fruit' } },
      ],
      bounty: [
        { episode: 392, value: 200_000_000 },
        { episode: 517, value: 440_000_000 },
        { episode: 746, value: 500_000_000 },
        { episode: 1086, value: 3_000_000_000 },
      ],
    },
    'eustass-kid': {
      role: {
        it: 'Capitano dei Pirati di Kid',
        en: 'Captain of the Kid Pirates',
      },
      log: {
        it: 'La taglia più alta della sua generazione, e la reputazione di aver ucciso civili per una parola di troppo. A Sabaody guarda gli altri capitani come concorrenti da eliminare, poi un ragazzo di gomma prende a pugni un Nobile e lui decide che almeno quello vale la pena di vederlo di nuovo. Il metallo gli si attacca al braccio quando lo chiama.',
        en: 'The highest bounty of his generation, and a reputation for killing civilians over a word too many. At Sabaody he sizes up the other captains as rivals to be removed, then a rubber boy punches a Noble and he decides that one, at least, is worth seeing again. Metal flies to his arm when he calls it.',
      },
      affiliation: [
        {
          episode: 392,
          value: { it: 'Pirati di Kid, capitano', en: 'Kid Pirates, captain' },
        },
      ],
      origin: [{ episode: 392, value: { it: 'South Blue', en: 'South Blue' } }],
      epithet: [
        { episode: 392, value: { it: 'Capitan Kid', en: 'Captain Kid' } },
      ],
      devilFruit: [
        {
          episode: 1040,
          value: { it: 'Frutto Jiki Jiki', en: 'Magnet-Magnet Fruit' },
        },
      ],
      bounty: [
        { episode: 392, value: 315_000_000 },
        { episode: 517, value: 470_000_000 },
        { episode: 1086, value: 3_000_000_000 },
      ],
    },
    'boa-hancock': {
      role: { it: 'Imperatrice di Amazon Lily', en: 'Empress of Amazon Lily' },
      log: {
        it: 'Governa un’isola dove nessun uomo ha mai messo piede, e comanda le Pirate Kuja come membro della Flotta dei Sette. Sputa sui suoi sudditi e si china per farsi perdonare, e le viene perdonato. Ha un ragazzo di gomma rinchiuso in gabbia nell’arena, e non riesce a trasformarlo in pietra.',
        en: 'She rules an island where no man has ever set foot, and captains the Kuja Pirates as one of the Seven Warlords. She spits on her subjects and bows to be forgiven, and is forgiven. She has a rubber boy caged in her arena, and cannot turn him to stone.',
      },
      affiliation: [
        {
          episode: 410,
          value: {
            it: 'Flotta dei Sette; Pirate Kuja, capitana',
            en: 'Seven Warlords; Kuja Pirates, captain',
          },
        },
        {
          episode: 958,
          value: {
            it: 'Ex membro della Flotta dei Sette; Pirate Kuja',
            en: 'Former Warlord; Kuja Pirates',
          },
        },
      ],
      origin: [
        { episode: 410, value: { it: 'Amazon Lily', en: 'Amazon Lily' } },
      ],
      epithet: [
        {
          episode: 410,
          value: { it: 'Imperatrice Pirata', en: 'Pirate Empress' },
        },
      ],
      devilFruit: [
        {
          episode: 412,
          value: { it: 'Frutto Mero Mero', en: 'Love-Love Fruit' },
        },
      ],
    },
    jinbe: {
      role: {
        it: 'Uomo-pesce della Flotta dei Sette',
        en: 'Fish-man of the Seven Warlords',
      },
      log: {
        it: 'Il Governo gli ha chiesto di schierarsi contro Barbabianca, e lui ha preferito la cella. Nel livello più basso di Impel Down condivide la prigionia con Ace, e ha smesso di mangiare per protesta. Rufy lo libera perché gli serve un braccio in più; Jinbe lo segue perché quel braccio vuole salvare la stessa persona.',
        en: 'The Government asked him to take arms against Whitebeard, and he chose the cell instead. On the lowest level of Impel Down he shares his imprisonment with Ace, and has stopped eating in protest. Luffy frees him because he needs another pair of hands; Jinbe follows because those hands want to save the same man.',
      },
      affiliation: [
        { episode: 430, value: WARLORDS },
        {
          episode: 486,
          value: {
            it: 'Ex membro della Flotta dei Sette',
            en: 'Former Warlord',
          },
        },
        { episode: 977, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 430,
          value: { it: 'Isola degli Uomini-Pesce', en: 'Fish-Man Island' },
        },
      ],
      epithet: [
        {
          episode: 430,
          value: { it: 'Cavaliere del Mare', en: 'Knight of the Sea' },
        },
      ],
      bounty: [{ episode: 1086, value: 1_100_000_000 }],
    },
  },
}
