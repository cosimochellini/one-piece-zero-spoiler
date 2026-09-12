import type { Saga } from './saga'

/**
 * The Dressrosa saga, episodes 575 to 746: an island half frozen and half on
 * fire, then a kingdom of living toys and a colosseum.
 */

export const dressrosa: Saga = {
  entries: [
    {
      id: 'bartolomeo',
      kind: 'character',
      revealedAtEpisode: 632,
      name: { it: 'Bartolomeo', en: 'Bartolomeo' },
      summary: {
        it: 'Un pirata con la cresta verde e i modi da teppista, che si iscrive a un torneo nel colosseo di Dressrosa e getta il pubblico nel panico solo salendo sul ring.',
        en: 'A green-crested pirate with a thug’s manners who enters a tournament in the colosseum of Dressrosa and sends the crowd into a panic just by stepping into the ring.',
      },
      visual: { art: 'bartolomeo', tint: 'acid' },
    },
  ],

  dossiers: {
    bartolomeo: {
      role: { it: 'Capitano pirata', en: 'Pirate captain' },
      log: {
        it: 'Il pubblico lo fischia e lui risponde con la lingua di fuori. Nel blocco B del torneo nessun colpo lo raggiunge: qualcosa di invisibile li ferma tutti a un palmo da lui. Combatte per il premio del colosseo come tutti gli altri, ma quello che vuole davvero è un’altra cosa, e la tiene per sé.',
        en: 'The crowd boos him and he answers with his tongue out. In block B of the tournament no blow reaches him: something invisible stops every one a hand’s breadth away. He fights for the colosseum’s prize like everyone else, but what he really wants is something else, and he keeps it to himself.',
      },
      affiliation: [
        {
          episode: 632,
          value: { it: 'Barto Club, capitano', en: 'Barto Club, captain' },
        },
        {
          episode: 746,
          value: {
            it: 'Grande Flotta di Cappello di Paglia; Barto Club',
            en: 'Straw Hat Grand Fleet; Barto Club',
          },
        },
      ],
      origin: [
        {
          episode: 726,
          value: { it: 'Loguetown, East Blue', en: 'Loguetown, East Blue' },
        },
      ],
      epithet: [
        { episode: 632, value: { it: 'Il Cannibale', en: 'the Cannibal' } },
      ],
      devilFruit: [
        {
          episode: 660,
          value: { it: 'Frutto Bari Bari', en: 'Barrier-Barrier Fruit' },
        },
      ],
      bounty: [{ episode: 632, value: 150_000_000 }],
    },
  },
}
