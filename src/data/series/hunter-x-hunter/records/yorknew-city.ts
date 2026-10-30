import type { HunterSaga } from './saga'
import { yorknewCityRelationships } from './yorknew-city.relationships'

/**
 * Yorknew City: episodes 37–58 of the 2011 anime and chapters 64–119, as the
 * English Hunter x Hunter Wiki's arc page gives them. Italian Wikipedia calls
 * the city York Shin City. Owner's #796 check: the 1 September meeting is told
 * in chapter 44, pages 3–5 (page references follow the owner's digital
 * edition).
 */
export const yorknewCity: HunterSaga = {
  name: { it: 'York Shin City', en: 'Yorknew City' },
  entries: [
    {
      id: 'yorknew-city-arc',
      kind: 'arc',
      revealedAtEpisode: 37,
      revealedAtChapter: 64,
      name: { it: 'York Shin City', en: 'Yorknew City' },
      summary: {
        it: 'Gon torna a casa con Killua prima dell’appuntamento con gli amici: York Shin City, il primo settembre, durante l’asta più grande del mondo.',
        en: 'Gon goes home with Killua before the meeting the friends agreed on: Yorknew City, on the first of September, during the largest auction in the world.',
      },
      visual: { art: 'yorknew-city-arc', tint: 'wine' },
    },
    {
      id: 'ging-freecss',
      kind: 'character',
      // The wiki's official debuts: episode 37, where Mito and her
      // grandmother tell Gon about him over flashbacks and the tape speaks in
      // his voice, and chapter 66, the first page that draws him. Episode 1
      // names him (Mito's cousin, who caught the swamp's fish twenty years
      // ago) and shows only a photograph; chapter 1 names him too.
      revealedAtEpisode: 37,
      revealedAtChapter: 66,
      nameSaidAt: 1,
      name: { it: 'Ging Freecss', en: 'Ging Freecss' },
      summary: {
        it: 'Il padre di Gon, un Hunter che ha lasciato l’Isola Balena alla sua età ed è tornato dieci anni dopo con il figlio in braccio, che ha lasciato lì.',
        en: 'Gon’s father, a Hunter who left Whale Island at Gon’s age and came back ten years later carrying his son, whom he left there.',
      },
      visual: { art: 'ging-freecss', tint: 'sand' },
    },
  ],
  dossiers: {
    'ging-freecss': {
      relationships: yorknewCityRelationships['ging-freecss'],
      role: { it: 'Hunter, padre di Gon', en: 'Hunter, Gon’s father' },
      log: {
        it: 'Da ragazzo è partito dall’Isola Balena. Dieci anni dopo è tornato con Gon in braccio e ha chiesto alla nonna di occuparsene, dicendo che lui e la madre si erano lasciati. A Gon ha lasciato una scatola con dentro un anello, una scheda di memoria e una cassetta: sul nastro chiede a Gon se vuole incontrarlo.',
        en: 'He left Whale Island as a boy. Ten years later he came back carrying Gon and asked his grandmother to look after him, saying that he and the mother had separated. He left Gon a box holding a ring, a memory card and a cassette: on the tape he asks Gon whether he wants to see him.',
      },
      status: [{ episode: 37, value: 'alive' }],
      affiliation: [
        {
          episode: 37,
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
      // Chapter 65 tells it; pinned at the record's chapter (#459).
      origin: [
        {
          episode: 37,
          chapter: 66,
          place: 'whale-island',
          value: { it: 'Isola Balena', en: 'Whale Island' },
        },
      ],
    },
  },
}
