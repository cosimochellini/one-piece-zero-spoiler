import type { HunterSaga } from './saga'

/**
 * The Hunter Exam, Zoldyck Family included: episodes 1–26 of the 2011 anime
 * and chapters 1–43 (owner, 2026-10-24). It is the demo span. The English
 * Hunter x Hunter Wiki's arc page gives both ranges.
 *
 * Filed so far: the road to the exam, episodes 1–2 and chapters 1–4, from
 * Whale Island to the Kiriko's flight (#760). Every pair below is the wiki's
 * `manga debut` and its `Episode N (2011)` debut, the episode's `Adapted`
 * chapters agreeing. The unnamed (the captain, the old woman of the quiz,
 * Gon's great-grandmother, the applicant who answers the quiz first) are not
 * records, and Noko is named only in chapter 64.
 */

const APPLICANT = {
  it: 'Esame Hunter, aspirante',
  en: 'Hunter Exam, applicant',
}

const WHALE_ISLAND = { it: 'Isola Balena', en: 'Whale Island' }

export const hunterExam: HunterSaga = {
  name: { it: 'Esame Hunter', en: 'Hunter Exam' },
  entries: [
    {
      id: 'hunter-exam-arc',
      kind: 'arc',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Esame Hunter', en: 'Hunter Exam' },
      summary: {
        it: 'Gon lascia l’Isola Balena per sostenere l’Esame Hunter e per cercare suo padre, un Hunter che non ha mai conosciuto.',
        en: 'Gon leaves Whale Island to take the Hunter Exam and to look for his father, a Hunter he has never met.',
      },
      visual: { art: 'hunter-exam-arc', tint: 'yellow' },
    },
    {
      id: 'gon-freecss',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Gon Freecss', en: 'Gon Freecss' },
      summary: {
        it: 'Un ragazzino dell’Isola Balena che pesca nella palude un pesce che cinque uomini insieme non riuscivano a tirare fuori, per avere il permesso di sostenere l’Esame Hunter.',
        en: 'A boy from Whale Island who lands a swamp fish that five grown men pulling together could not, to win leave to take the Hunter Exam.',
      },
      visual: { art: 'gon-freecss', tint: 'ocher' },
    },
    {
      id: 'mito-freecss',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Myto Freecss', en: 'Mito Freecss' },
      summary: {
        it: 'La zia di Gon sull’Isola Balena, che lo cresce da quando era in fasce e non vuole che diventi un Hunter come suo padre.',
        en: 'Gon’s aunt on Whale Island, who has raised him since he was a baby and does not want him to become a Hunter like his father.',
      },
      visual: { art: 'mito-freecss', tint: 'orange' },
    },
    {
      id: 'whale-island',
      kind: 'place',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: WHALE_ISLAND,
      summary: {
        it: 'Una piccola isola di pescatori, quasi tutta foresta fra due montagne, dove Gon è cresciuto.',
        en: 'A small island of fishermen, mostly forest between two mountains, where Gon has grown up.',
      },
      visual: { art: 'whale-island', tint: 'teal' },
    },
    {
      id: 'leorio-paradinight',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Leorio', en: 'Leorio Paradinight' },
      summary: {
        it: 'Un uomo alto in giacca e occhiali sulla nave per l’esame, che dice di voler diventare Hunter per i soldi.',
        en: 'A tall man in a suit and glasses on the ship to the exam, who says he wants to be a Hunter for the money.',
      },
      visual: { art: 'leorio-paradinight', tint: 'azure' },
    },
    {
      id: 'kurapika',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Kurapika', en: 'Kurapika' },
      summary: {
        it: 'Un ragazzo con la tunica sulla nave per l’esame, l’ultimo del suo clan, che vuole diventare Hunter per catturare la banda che ha sterminato la sua gente.',
        en: 'A young man in a tabard on the ship to the exam, the last of his clan, who wants to become a Hunter to catch the band that killed his people.',
      },
      visual: { art: 'kurapika', tint: 'blue' },
    },
    {
      id: 'katzo',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Katzo', en: 'Katzo' },
      summary: {
        it: 'Un marinaio della nave per l’esame, che la tempesta scaraventa fuori bordo.',
        en: 'A crewman on the ship to the exam, whom the storm throws over the side.',
      },
      visual: { art: 'katzo', tint: 'ice' },
    },
    {
      id: 'dolle-harbor',
      kind: 'place',
      revealedAtEpisode: 2,
      revealedAtChapter: 3,
      name: { it: 'Dolle Harbor', en: 'Dolle Harbor' },
      summary: {
        it: 'Una città portuale affollata di aspiranti Hunter, dove la nave lascia Gon e i suoi compagni di viaggio.',
        en: 'A port town crowded with would-be Hunters, where the ship leaves Gon and his fellow passengers.',
      },
      visual: { art: 'dolle-harbor', tint: 'cyan' },
    },
    {
      id: 'kiriko',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 4,
      name: { it: 'Kiriko', en: 'Kiriko' },
      summary: {
        it: 'Una famiglia di bestie demoniache capaci di cambiare aspetto, che vive sotto un grande albero fuori da Dolle Harbor e porta all’esame solo gli aspiranti che la convincono.',
        en: 'A family of magical beasts that can change their shape, living under a great tree outside Dolle Harbor and taking to the exam only the applicants who impress them.',
      },
      visual: { art: 'kiriko', tint: 'violet' },
    },
  ],
  dossiers: {
    'gon-freecss': {
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È cresciuto sull’Isola Balena con Myto, che lo cresce da quando era in fasce. Suo padre, Ging Freecss, è un Hunter che non ha mai conosciuto. Myto gli lascia sostenere l’esame solo se pesca il pesce più grosso della palude, sicura che non ci riuscirà; lui ce la fa con la sua canna. Parte con la nave per diventare Hunter e per sapere di più su suo padre.',
        en: 'He has grown up on Whale Island with Mito, who has raised him since he was a baby. His father, Ging Freecss, is a Hunter he has never met. Mito will let him take the exam only if he catches the biggest fish in the swamp, sure that he cannot; he does it with his rod. He sails to become a Hunter and to learn about his father.',
      },
      status: [{ episode: 1, value: 'alive' }],
      affiliation: [{ episode: 1, value: APPLICANT }],
      origin: [
        { episode: 1, chapter: 1, place: 'whale-island', value: WHALE_ISLAND },
      ],
    },
    'mito-freecss': {
      role: { it: 'Zia di Gon', en: 'Gon’s aunt' },
      log: {
        it: 'Ha cresciuto Gon da quando il padre gliel’ha lasciato, e preferirebbe che non ne seguisse le orme. Gli promette di lasciarlo partire per l’Esame Hunter se pescherà il pesce più grosso della palude, convinta che non ci riuscirà. Quando ci riesce, mantiene la parola e lo saluta alla partenza.',
        en: 'She has raised Gon since his father left him in her care, and would rather he did not follow him. She promises to let him take the Hunter Exam if he catches the biggest fish in the swamp, sure that he cannot. When he does, she keeps her word and sees him off.',
      },
      status: [{ episode: 1, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          value: {
            it: 'Isola Balena, tutrice di Gon',
            en: 'Whale Island, Gon’s guardian',
          },
        },
      ],
      origin: [
        { episode: 1, chapter: 1, place: 'whale-island', value: WHALE_ISLAND },
      ],
    },
    'leorio-paradinight': {
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Non vuole dire al capitano perché sostiene l’esame, poi ammette che è per i soldi e per quello che si possono comprare. I modi di Kurapika lo irritano, e quando insulta il suo clan i due salgono in coperta nella tempesta per battersi. Il duello finisce quando Katzo viene sbalzato fuori bordo e Gon si tuffa ad afferrarlo: Leorio e Kurapika prendono Gon per le gambe, e dopo fanno pace.',
        en: 'He will not tell the captain why he is taking the exam, then admits it is for money and what money buys. Kurapika’s manner gets under his skin, and when he insults Kurapika’s clan the two go up on deck in the storm to fight. The duel ends when Katzo is thrown overboard and Gon dives to catch him: Leorio and Kurapika grab Gon by the legs, and afterwards the two make up.',
      },
      status: [{ episode: 1, value: 'alive' }],
      affiliation: [{ episode: 1, value: APPLICANT }],
    },
    'kurapika': {
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Tiene per sé i suoi motivi finché il capitano non minaccia di farlo scendere: la Brigata Fantasma ha ucciso tutto il suo clan, e un Hunter può arrivare in posti e a informazioni che agli altri sono chiusi. Combatte con due spade di legno. Uno scontro con Leorio per una questione di rispetto finisce quasi in duello sul ponte, finché insieme non riprendono Gon e Katzo, sbalzati in mare; dopo i due fanno pace.',
        en: 'He keeps his reasons to himself until the captain threatens to put him off the ship: the Phantom Troupe killed the rest of his clan, and a Hunter can reach places and information closed to everyone else. He fights with two wooden swords. A quarrel with Leorio over manners nearly ends in a duel on deck, until together they pull back Gon and Katzo from the sea; afterwards the two make up.',
      },
      status: [{ episode: 1, value: 'alive' }],
      affiliation: [{ episode: 1, value: APPLICANT }],
      origin: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Clan dei Kurata', en: 'Kurta clan' },
        },
      ],
    },
    'katzo': {
      role: { it: 'Marinaio', en: 'Crewman' },
      log: {
        it: 'Lavora sulla nave che porta gli aspiranti verso l’esame. Durante la tempesta viene sbalzato oltre la murata: Gon si tuffa e lo afferra, mentre Leorio e Kurapika tengono Gon per le gambe. Il giorno dopo ringrazia i tre.',
        en: 'He works on the ship that takes the applicants towards the exam. In the storm he is thrown over the rail: Gon dives and catches him, while Leorio and Kurapika hold Gon by the legs. He thanks the three afterwards.',
      },
      status: [{ episode: 1, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          value: { it: 'Equipaggio della nave', en: 'Ship’s crew' },
        },
      ],
    },
    'kiriko': {
      role: { it: 'Navigatori', en: 'Navigators' },
      log: {
        it: 'Padre, madre, un figlio e una figlia. I navigatori sanno dove si tiene l’esame di ogni anno e ci portano solo chi li convince: inscenano un’aggressione in casa loro, uno ferito a terra e un’altra portata via da una bestia, e guardano come reagisce ognuno. Gon li distingue dal viso e dalla voce, Kurapika riconosce i tatuaggi sul braccio della figlia, Leorio cura il ferito. Di notte portano in volo i tre fino all’esame.',
        en: 'Father, mother, a son and a daughter. The navigators know where each year’s exam is held and take there only those who impress them: they stage an attack in their own house, one of them wounded on the floor and another carried off by a beast, and watch how each applicant acts. Gon tells them apart by their faces and voices, Kurapika knows the tattoos on the daughter’s arm, Leorio tends the wounded man. At night they fly the three to the exam.',
      },
      status: [{ episode: 2, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          value: {
            it: 'Esame Hunter, navigatori',
            en: 'Hunter Exam, navigators',
          },
        },
      ],
      origin: [
        {
          episode: 2,
          chapter: 4,
          place: 'dolle-harbor',
          value: {
            it: 'L’albero solitario fuori da Dolle Harbor',
            en: 'The lone tree outside Dolle Harbor',
          },
        },
      ],
    },
  },
}
