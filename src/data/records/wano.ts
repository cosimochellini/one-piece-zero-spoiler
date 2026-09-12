import type { Saga } from './saga'

/**
 * The Wano Country saga, episodes 890 to 1085: a country closed to the
 * world, its samurai, its shogun, and the Emperor who owns it.
 */

export const wano: Saga = {
  entries: [
    {
      id: 'wano',
      kind: 'arc',
      revealedAtEpisode: 890,
      name: { it: 'Saga del Paese di Wano', en: 'Wano Country Saga' },
      summary: {
        it: 'Un paese chiuso al resto del mondo, con le sue regole, i suoi spadaccini e i suoi conti in sospeso.',
        en: 'A country closed to the rest of the world, with its own rules, its own swordsmen and its own unsettled debts.',
      },
      visual: { art: 'wano', tint: 'vermilion' },
    },
    {
      id: 'yamato',
      kind: 'character',
      revealedAtEpisode: 992,
      name: { it: 'Yamato', en: 'Yamato' },
      summary: {
        it: 'Il figlio dell’Imperatore che governa Wano, con una mazza chiodata e manette esplosive ai polsi, incatenato sull’isola da vent’anni, che si presenta con il nome di un samurai morto.',
        en: 'The child of the Emperor who rules Wano, a studded club in hand and explosive cuffs on both wrists, chained on the island for twenty years, who introduces himself by a dead samurai’s name.',
      },
      visual: { art: 'yamato', tint: 'ice' },
    },
  ],

  dossiers: {
    yamato: {
      role: { it: 'Figlio di Kaido', en: 'Kaido’s child' },
      log: {
        it: 'Dice di essere Kozuki Oden, il samurai che vent’anni fa sfidò Kaido e perse, e ne porta il diario e le abitudini. Suo padre lo tiene a Onigashima con due manette che esplodono se lascia l’isola. Aspettava Ace, che gli aveva promesso di tornare; al suo posto arriva il fratello di Ace, e per Yamato è abbastanza.',
        en: 'He says he is Kozuki Oden, the samurai who challenged Kaido twenty years ago and lost, and carries Oden’s journal and Oden’s habits. His father keeps him on Onigashima with two cuffs that explode if he leaves the island. He was waiting for Ace, who promised to come back; Ace’s brother arrives instead, and for Yamato that is enough.',
      },
      affiliation: [
        {
          episode: 992,
          value: {
            it: 'Nessuna: prigioniero di Kaido a Onigashima',
            en: 'None: Kaido’s prisoner on Onigashima',
          },
        },
      ],
      origin: [
        { episode: 992, value: { it: 'Paese di Wano', en: 'Wano Country' } },
      ],
      devilFruit: [
        {
          episode: 1040,
          value: {
            it: 'Frutto Inu Inu, modello Okuchi no Makami',
            en: 'Dog-Dog Fruit, Model: Okuchi no Makami',
          },
        },
      ],
    },
  },
}
