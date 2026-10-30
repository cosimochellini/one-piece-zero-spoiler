import type { Story, Timeline } from '~/data/types'

/** The dated stories for the characters of the Yorknew City arc. */
export const yorknewCityChronicles = {
  // Episode 37 tells it from chapters 64–65; pinned at the record's chapter.
  // Manga-only lines (Mito taking the boy in, the steel rods' markings, the
  // tape's later minutes) stay out.
  'ging-freecss': [
    {
      episode: 37,
      chapter: 66,
      value: {
        title: { it: 'La scatola per Gon', en: 'The box for Gon' },
        body: {
          it: 'Ging e [[mito-freecss|Myto]] crescono sull’Isola Balena, dove sono gli unici bambini. Quando Myto lo segue sui monti e si perde, tutto il villaggio la cerca, ed è Ging a trovarla. Alla stessa età di [[gon-freecss|Gon]] lascia l’isola per diventare Hunter. Dieci anni dopo torna con Gon in braccio, chiede alla nonna di occuparsene e della madre dice che si sono lasciati. Lascia a Gon una scatola. Anni dopo Gon la apre con l’aiuto di [[killua|Killua]]: con il Nen si stacca l’involucro esterno e la licenza da Hunter apre la scatola interna. Dentro ci sono un anello, una scheda di memoria e una cassetta. Sul nastro Ging chiede a Gon se vuole vederlo.',
          en: 'Ging and [[mito-freecss|Mito]] grow up on Whale Island, where they are the only children. When Mito follows him into the mountains and gets lost, the whole village searches for her, and Ging is the one who finds her. At [[gon-freecss|Gon]]’s age he leaves the island to become a Hunter. Ten years later he comes back carrying Gon, asks his grandmother to look after him and says that he and the mother have split up. He leaves Gon a box. Years later Gon opens it with [[killua|Killua]]’s help: Nen makes the outer casing come off and the Hunter license opens the box inside. Inside are a ring, a memory card and a cassette. On the tape Ging asks Gon whether he wants to see him.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
