import type { CreditSample } from '~/data/types'

/**
 * The bounded source review recorded on 20 October 2026 (#719) and the
 * summary replacement reviewed on 22 October 2026: the entries it covered and
 * the audit files of the revisions it read. Not provenance for the archive.
 */
export const CREDITS: CreditSample = {
  dossiers: [
    {
      id: 'monkey-d-luffy',
      en: 'en-Monkey_D._Luffy.json',
      it: 'it-Monkey_D._Rufy.json',
    },
    { id: 'tama', en: 'en-Tama.json', it: 'it-Tama.json' },
    { id: 'jack', en: 'en-Jack.json', it: 'it-Jack.json' },
  ],
  chronicles: { character: 'monkey-d-luffy', episodes: [1, 126, 869, 916] },
  filler: [54, 55, 56, 196, 197, 198, 1029, 1030],
  film: { after: 1027, en: 'en-Film_Red.json', it: 'it-Film_Red.json' },
  replaced: {
    episode: 1030,
    url: 'https://one-piece.com/anime/o6217/index.html',
  },
  episodeFiles: (episode) => [
    `en-Episode_${String(episode)}.json`,
    `it-Episodio_${String(episode)}.json`,
  ],
}
