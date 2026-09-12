import type { Saga } from './saga'

/**
 * The Sky Island saga, episodes 136 to 206: a fallen ship from the clouds,
 * a town that laughs at dreams, and an island above the sea.
 */

export const skypiea: Saga = {
  entries: [
    {
      id: 'skypiea',
      kind: 'arc',
      revealedAtEpisode: 144,
      name: { it: 'Saga di Skypiea', en: 'Skypiea Saga' },
      summary: {
        it: 'Un’isola sospesa sopra il mare, raggiunta da una corrente che spara le navi verso l’alto.',
        en: 'An island suspended above the sea, reached by a current that fires ships upward.',
      },
      visual: { art: 'skypiea', tint: 'azure' },
    },
    {
      id: 'jaya',
      kind: 'place',
      revealedAtEpisode: 144,
      name: { it: 'Jaya', en: 'Jaya' },
      summary: {
        it: 'Un’isola della Rotta Maggiore con una città di pirati senza legge da una parte e un uomo che ride dei sogni dall’altra.',
        en: 'A Grand Line island with a lawless pirate town on one side and a man who laughs at dreams on the other.',
      },
      visual: { art: 'jaya', tint: 'ocher' },
    },
    {
      id: 'edward-newgate',
      kind: 'character',
      revealedAtEpisode: 152,
      name: { it: 'Edward Newgate', en: 'Edward Newgate' },
      summary: {
        it: 'Barbabianca: un gigante attaccato alle flebo che beve sakè dalla botte, l’uomo più vicino al trono dei pirati da vent’anni, con una ciurma che chiama i suoi uomini figli.',
        en: 'Whitebeard: a giant on a drip who drinks sake from the barrel, the man closest to the pirate throne for twenty years, with a crew whose men he calls his sons.',
      },
      visual: { art: 'edward-newgate', tint: 'ivory' },
    },
    {
      id: 'donquixote-doflamingo',
      kind: 'character',
      revealedAtEpisode: 152,
      name: { it: 'Donquijote Do Flamingo', en: 'Donquixote Doflamingo' },
      summary: {
        it: 'Un membro della Flotta dei Sette con un cappotto di piume rosa e occhiali da sole, che si presenta alle riunioni del Governo Mondiale per divertimento e fa muovere gli altri come marionette.',
        en: 'A member of the Seven Warlords in a pink feather coat and sunglasses, who attends World Government meetings for the fun of it and moves other people like puppets.',
      },
      visual: { art: 'donquixote-doflamingo', tint: 'flamingo' },
    },
  ],

  dossiers: {
    'edward-newgate': {
      role: {
        it: 'Capitano dei Pirati di Barbabianca',
        en: 'Captain of the Whitebeard Pirates',
      },
      log: {
        it: 'È uno dei quattro Imperatori che si dividono il Nuovo Mondo, e l’unico ad aver combattuto il Re dei Pirati alla pari. Riceve la notizia che Shanks vuole vederlo come si riceve la visita di un vecchio conoscente, cioè male. Un suo comandante è partito da solo per inseguire un traditore, e lui ha lasciato fare.',
        en: 'He is one of the four Emperors who divide the New World between them, and the only man to have fought the Pirate King as an equal. He takes the news that Shanks wants to see him the way one takes a call from an old acquaintance, which is badly. One of his commanders has gone off alone after a traitor, and he let him go.',
      },
      affiliation: [
        {
          episode: 152,
          value: {
            it: 'Pirati di Barbabianca, capitano; Imperatore',
            en: 'Whitebeard Pirates, captain; Emperor',
          },
        },
      ],
      epithet: [
        { episode: 152, value: { it: 'Barbabianca', en: 'Whitebeard' } },
      ],
      devilFruit: [
        {
          episode: 466,
          value: { it: 'Frutto Gura Gura', en: 'Tremor-Tremor Fruit' },
        },
      ],
      bounty: [{ episode: 958, value: 5_046_000_000 }],
    },
    'donquixote-doflamingo': {
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Alla riunione dei Sette ride di tutto e di tutti, e nel frattempo due marinai nella stanza sguainano le spade l’uno contro l’altro senza volerlo. Nessuno dei presenti lo prende alla leggera, nemmeno quelli che non lo sopportano. Il cappotto rosa è l’unica cosa di lui che non fa paura.',
        en: 'At the Warlords’ meeting he laughs at everything and everyone, and meanwhile two Marines in the room draw their swords on each other without meaning to. Nobody present takes him lightly, not even the ones who cannot stand him. The pink coat is the only thing about him that is not frightening.',
      },
      affiliation: [
        {
          episode: 152,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        {
          episode: 632,
          value: {
            it: 'Flotta dei Sette; re di Dressrosa',
            en: 'Seven Warlords; king of Dressrosa',
          },
        },
        {
          episode: 746,
          value: {
            it: 'Ex membro della Flotta dei Sette, in arresto',
            en: 'Former Warlord, under arrest',
          },
        },
      ],
      epithet: [
        { episode: 586, value: { it: 'Joker', en: 'Joker' } },
        {
          episode: 632,
          value: { it: 'Il Demone Celeste', en: 'Heavenly Demon' },
        },
      ],
      devilFruit: [
        {
          episode: 700,
          value: { it: 'Frutto Ito Ito', en: 'String-String Fruit' },
        },
      ],
      bounty: [{ episode: 700, value: 340_000_000 }],
    },
  },
}
