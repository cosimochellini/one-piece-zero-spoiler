import { hunterExamChronicles } from './hunter-exam.chronicle'
import { hunterExamRelationships } from './hunter-exam.relationships'
import { type HunterSaga, passedExam } from './saga'
import { trickTower } from './trick-tower'
import { zevil } from './zevil'

/**
 * The Hunter Exam, Zoldyck Family included: episodes 1–26 of the 2011 anime
 * and chapters 1–43 (owner, 2026-10-24). It is the demo span. The English
 * Hunter x Hunter Wiki's arc page gives both ranges.
 *
 * Filed so far: episodes 1–6 and chapters 1–12 (#760), from Whale Island
 * through the first two phases of the exam. Every pair below is the wiki's
 * `manga debut` and its `Episode N (2011)` debut, the episode's `Adapted`
 * chapters agreeing. The unnamed (the captain, the old woman of the quiz,
 * Gon's great-grandmother, the applicant who answers the quiz first) are not
 * records, and Noko is named only in chapter 64.
 *
 * Coverage ends at chapter 43: episode 25's chapter-44 departure plans are
 * out, and the recap episodes (13, 26) add no records. Named animals
 * qualify; species, unnamed extras, unvisited places and names known only
 * from supplemental material do not. Beans is out: his name is chapter 319
 * (Mamen is 1999 credits and a databook). The shared logs omit the
 * manga-only sushi test and the anime-only updraft method.
 *
 * Silva is filed unanchored in zoldyck.ts (#834); Kikyo is never named in
 * the story, and Hishita waits for #912.
 */

const APPLICANT = {
  it: 'Esame Hunter, aspirante',
  en: 'Hunter Exam, applicant',
}

const WHALE_ISLAND = { it: 'Isola Balena', en: 'Whale Island' }

const earlyExam: HunterSaga = {
  name: { it: 'Esame Hunter', en: 'Hunter Exam' },
  entries: [
    ...zevil.entries,
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
    {
      id: 'tonpa',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 5,
      name: { it: 'Tonpa', en: 'Tonpa' },
      summary: {
        it: 'Un veterano dell’Esame Hunter che si offre di aiutare i nuovi arrivati, dopo trentaquattro tentativi falliti.',
        en: 'A veteran of the Hunter Exam who offers to help the newcomers after thirty-four failed attempts.',
      },
      visual: { art: 'tonpa', tint: 'orange' },
    },
    {
      id: 'hisoka',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 5,
      name: { it: 'Hisoka', en: 'Hisoka' },
      summary: {
        it: 'Un aspirante dell’Esame Hunter che ferisce un uomo dopo che gli è andato addosso senza scusarsi.',
        en: 'A Hunter Exam applicant who wounds a man after he bumps into him without apologizing.',
      },
      visual: { art: 'hisoka', tint: 'vermilion' },
    },
    // Tonpa names the next three among the regulars (chapter 5, episode 3;
    // #833). The 2011 tour never names Cherry, so he is the manga's alone.
    {
      id: 'todo',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 5,
      name: { it: 'Todo', en: 'Todo' },
      summary: {
        it: 'Un lottatore che torna spesso all’Esame Hunter.',
        en: 'A wrestler who often returns to the Hunter Exam.',
      },
      visual: { art: 'todo', tint: 'ocher' },
    },
    {
      id: 'geretta',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 5,
      name: { it: 'Ghereta', en: 'Geretta' },
      summary: {
        it: 'Un aspirante che torna spesso all’Esame Hunter.',
        en: 'An applicant who often returns to the Hunter Exam.',
      },
      visual: { art: 'geretta', tint: 'teal' },
    },
    {
      id: 'cherry',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 3,
      revealedAtChapter: 5,
      name: { it: 'Cherry', en: 'Cherry' },
      summary: {
        it: 'Un esperto di arti marziali che torna spesso all’Esame Hunter, il migliore nel combattimento a mani nude.',
        en: 'A martial artist who often returns to the Hunter Exam, the best of them at unarmed combat.',
      },
      visual: { art: 'cherry', tint: 'blue' },
    },
    {
      id: 'hanzo',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 6,
      name: { it: 'Hanzo', en: 'Hanzo' },
      summary: {
        it: 'Un ninja che sostiene l’Esame Hunter per poter cercare una pergamena.',
        en: 'A ninja taking the Hunter Exam so he can search for a scroll.',
      },
      visual: { art: 'hanzo', tint: 'wine' },
    },
    {
      id: 'nicholas',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 6,
      name: { it: 'Nicole', en: 'Nicholas' },
      summary: {
        it: 'Un aspirante Hunter che raccoglie sul portatile informazioni sugli altri candidati.',
        en: 'A Hunter Exam applicant who gathers information about the other candidates on his laptop.',
      },
      visual: { art: 'nicholas', tint: 'blue' },
    },
    {
      id: 'satotz',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 6,
      name: { it: 'Satoshi', en: 'Satotz' },
      summary: {
        it: 'L’esaminatore della prima prova, che chiede agli aspiranti di seguirlo nel tunnel.',
        en: 'The First Phase examiner, who asks the applicants to follow him through the tunnel.',
      },
      visual: { art: 'satotz', tint: 'violet' },
    },
    {
      id: 'killua',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 6,
      name: { it: 'Killua', en: 'Killua' },
      summary: {
        it: 'Un ragazzino con lo skateboard che fa amicizia con Gon durante la corsa dell’Esame Hunter.',
        en: 'A boy with a skateboard who befriends Gon during the Hunter Exam run.',
      },
      visual: { art: 'killua', tint: 'azure' },
    },
    {
      id: 'menchi',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 10,
      name: { it: 'Menci', en: 'Menchi' },
      summary: {
        it: 'Una Hunter buongustaia che esamina gli aspiranti nella seconda prova.',
        en: 'A Gourmet Hunter examining the applicants in the Second Phase.',
      },
      visual: { art: 'menchi', tint: 'pink' },
    },
    {
      id: 'buhara',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 10,
      name: { it: 'Buhara', en: 'Buhara' },
      summary: {
        it: 'Un Hunter buongustaio che chiede agli aspiranti di preparargli del maiale arrosto.',
        en: 'A Gourmet Hunter who asks the applicants to prepare roast pork for him.',
      },
      visual: { art: 'buhara', tint: 'ocher' },
    },
    {
      id: 'netero',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 12,
      name: { it: 'Netero', en: 'Netero' },
      summary: {
        it: 'Il presidente dell’Associazione Hunter, chiamato a intervenire sulla seconda prova dell’esame.',
        en: 'The chairman of the Hunter Association, called in to intervene in the Second Phase of the exam.',
      },
      visual: { art: 'netero', tint: 'sand' },
    },
    // Mentioned at episode 2 / chapter 3; the record opens on arrival, so it
    // needs no `nameSaidAt`.
    {
      id: 'zaban-city',
      kind: 'place',
      revealedAtEpisode: 3,
      revealedAtChapter: 5,
      name: { it: 'Zapan', en: 'Zaban City' },
      summary: {
        it: 'La città dove Gon, Kurapika e Leorio raggiungono il luogo dell’Esame Hunter.',
        en: 'The city where Gon, Kurapika and Leorio reach the Hunter Exam site.',
      },
      visual: { art: 'zaban-city', tint: 'cyan' },
    },
    {
      id: 'milsy-wetlands',
      kind: 'place',
      revealedAtEpisode: 4,
      revealedAtChapter: 7,
      name: { it: 'Palude di Numere', en: 'Milsy Wetlands' },
      summary: {
        it: 'Una palude oltre il tunnel dell’esame, dove gli animali ingannano le prede.',
        en: 'Wetlands beyond the exam tunnel, where the animals deceive their prey.',
      },
      visual: { art: 'milsy-wetlands', tint: 'teal' },
    },
    {
      id: 'visca-forest-preserve',
      kind: 'place',
      revealedAtEpisode: 6,
      revealedAtChapter: 10,
      name: { it: 'Riserva forestale di Visca', en: 'Visca Forest Preserve' },
      summary: {
        it: 'La riserva forestale dove si svolge la seconda prova dell’Esame Hunter.',
        en: 'The forest preserve where the Second Phase of the Hunter Exam takes place.',
      },
      visual: { art: 'visca-forest-preserve', tint: 'orange' },
    },
    {
      id: 'split-mountain',
      kind: 'place',
      revealedAtEpisode: 6,
      revealedAtChapter: 12,
      name: { it: 'Monte Spaccato', en: 'Split Mountain' },
      summary: {
        it: 'Una montagna divisa da una gola, dove gli aspiranti cercano uova per ripetere la seconda prova.',
        en: 'A mountain divided by a ravine, where applicants seek eggs for the Second Phase retest.',
      },
      visual: { art: 'split-mountain', tint: 'ice' },
    },
  ],
  dossiers: {
    ...zevil.dossiers,
    'gon-freecss': {
      relationships: hunterExamRelationships['gon-freecss'],
      chronicle: hunterExamChronicles['gon-freecss'],
      role: passedExam(1, 1),
      log: {
        it: 'È cresciuto sull’Isola Balena con Myto, che lo cresce da quando era in fasce. Suo padre, Ging Freecss, è un Hunter che non ha mai conosciuto. Myto gli lascia sostenere l’esame solo se pesca il pesce più grosso della palude, sicura che non ci riuscirà; lui ce la fa con la sua canna. Parte con la nave per diventare Hunter e per sapere di più su suo padre.',
        en: 'He has grown up on Whale Island with Mito, who has raised him since he was a baby. His father, Ging Freecss, is a Hunter he has never met. Mito will let him take the exam only if he catches the biggest fish in the swamp, sure that he cannot; he does it with his rod. He sails to become a Hunter and to learn about his father.',
      },
      status: [
        { episode: 1, value: 'alive' },
        // The Troupe takes him and Killua to its hideout, chapter 91 and
        // episode 49; they break out through the walls, chapter 94 and
        // episode 50.
        { episode: 49, chapter: 91, value: 'captured' },
        { episode: 50, chapter: 94, value: 'alive' },
        // Caught again on the way to the hotel, chapter 111 and episode 56,
        // and handed back at the exchange, chapter 118 and episode 58.
        { episode: 56, chapter: 111, value: 'captured' },
        { episode: 58, chapter: 118, value: 'alive' },
      ],
      affiliation: [
        { episode: 1, value: APPLICANT },
        {
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
        // Wing takes them on as pupils and opens their aura in chapter 48 and
        // episode 29; his offer comes the episode before.
        {
          episode: 29,
          chapter: 48,
          value: {
            it: 'Associazione Hunter, Hunter; allievo di Wing',
            en: 'Hunter Association, Hunter; Wing’s pupil',
          },
        },
      ],
      origin: [
        { episode: 1, chapter: 1, place: 'whale-island', value: WHALE_ISLAND },
      ],
    },
    'mito-freecss': {
      relationships: hunterExamRelationships['mito-freecss'],
      chronicle: hunterExamChronicles['mito-freecss'],
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
      relationships: hunterExamRelationships['leorio-paradinight'],
      chronicle: hunterExamChronicles['leorio-paradinight'],
      role: passedExam(1, 2),
      log: {
        it: 'Non vuole dire al capitano perché sostiene l’esame, poi ammette che è per i soldi e per quello che si possono comprare. I modi di Kurapika lo irritano, e quando insulta il suo clan i due salgono in coperta nella tempesta per battersi. Il duello finisce quando Katzo viene sbalzato fuori bordo e Gon si tuffa ad afferrarlo: Leorio e Kurapika prendono Gon per le gambe, e dopo fanno pace.',
        en: 'He will not tell the captain why he is taking the exam, then admits it is for money and what money buys. Kurapika’s manner gets under his skin, and when he insults Kurapika’s clan the two go up on deck in the storm to fight. The duel ends when Katzo is thrown overboard and Gon dives to catch him: Leorio and Kurapika grab Gon by the legs, and afterwards the two make up.',
      },
      status: [{ episode: 1, value: 'alive' }],
      affiliation: [
        { episode: 1, value: APPLICANT },
        {
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
      ],
    },
    'kurapika': {
      relationships: hunterExamRelationships.kurapika,
      chronicle: hunterExamChronicles.kurapika,
      role: [
        ...passedExam(1, 2),
        // Dalzollene hires him with three other applicants, chapter 70 and
        // episode 41.
        {
          episode: 41,
          chapter: 70,
          value: { it: 'Hunter, guardia del corpo', en: 'Hunter, bodyguard' },
        },
        // Neon's father puts him in charge after Dalzollene's death,
        // chapter 79 and episode 46.
        {
          episode: 46,
          chapter: 79,
          value: {
            it: 'Hunter, capo delle guardie del corpo',
            en: 'Hunter, head of the bodyguards',
          },
        },
      ],
      log: {
        it: 'Tiene per sé i suoi motivi finché il capitano non minaccia di farlo scendere: la Brigata Fantasma ha ucciso tutto il suo clan, e un Hunter può arrivare in posti e a informazioni che agli altri sono chiusi. Combatte con due spade di legno. Uno scontro con Leorio per una questione di rispetto finisce quasi in duello sul ponte, finché insieme non riprendono Gon e Katzo, sbalzati in mare; dopo i due fanno pace.',
        en: 'He keeps his reasons to himself until the captain threatens to put him off the ship: the Phantom Troupe killed the rest of his clan, and a Hunter can reach places and information closed to everyone else. He fights with two wooden swords. A quarrel with Leorio over manners nearly ends in a duel on deck, until together they pull back Gon and Katzo from the sea; afterwards the two make up.',
      },
      status: [{ episode: 1, value: 'alive' }],
      affiliation: [
        { episode: 1, value: APPLICANT },
        {
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
        // Pinned at chapter 71 / episode 41, where Neon arrives in the city
        // with her bodyguards and is shown as the boss they guard.
        {
          episode: 41,
          chapter: 71,
          value: {
            en: 'Hunter Association, Hunter; Nostrade family, Neon’s bodyguard',
            it: 'Associazione Hunter, Hunter; famiglia Nostrad, guardia del corpo di Neon',
          },
        },
        {
          episode: 46,
          chapter: 79,
          value: {
            en: 'Hunter Association, Hunter; Nostrade family, head of Neon’s bodyguards',
            it: 'Associazione Hunter, Hunter; famiglia Nostrad, capo delle guardie del corpo di Neon',
          },
        },
      ],
      origin: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Clan dei Kurata', en: 'Kurta clan' },
        },
      ],
    },
    'katzo': {
      relationships: hunterExamRelationships.katzo,
      chronicle: hunterExamChronicles.katzo,
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
      relationships: hunterExamRelationships.kiriko,
      chronicle: hunterExamChronicles.kiriko,
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
    'tonpa': {
      relationships: hunterExamRelationships.tonpa,
      chronicle: hunterExamChronicles.tonpa,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Dice di conoscere bene l’esame e presenta a Gon alcuni aspiranti abituali. Offre ai tre amici del succo con un lassativo per farli ritirare. Gon sente che c’è qualcosa che non va e sputa il primo sorso; anche Kurapika e Leorio rinunciano alla bevanda.',
        en: 'He says he knows the exam well and points out some regular applicants to Gon. He offers the three friends juice containing a laxative to make them drop out. Gon tastes something wrong and spits out his first mouthful; Kurapika and Leorio also turn down the drink.',
      },
      epithet: [
        {
          episode: 3,
          chapter: 5,
          value: { it: 'Il devasta-matricole', en: 'Rookie Crusher' },
        },
      ],
      status: [{ episode: 3, chapter: 5, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 5,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
        {
          episode: 18,
          chapter: 32,
          value: {
            it: 'Esame Hunter, escluso nella quarta prova',
            en: 'Hunter Exam, failed the Fourth Phase',
          },
        },
      ],
    },
    'hisoka': {
      relationships: hunterExamRelationships.hisoka,
      chronicle: hunterExamChronicles.hisoka,
      role: passedExam(3, 5),
      log: {
        it: 'Tonpa lo indica a Gon come un aspirante da evitare: l’anno prima è stato squalificato per aver attaccato un esaminatore. Si presenta di nuovo all’esame e punisce un uomo che gli va addosso senza chiedere scusa.',
        en: 'Tonpa points him out to Gon as an applicant to avoid: the previous year he was disqualified for attacking an examiner. He returns to the exam and punishes a man who bumps into him without apologizing.',
      },
      status: [{ episode: 3, chapter: 5, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 5,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
        {
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
        {
          episode: 28,
          chapter: 47,
          value: {
            it: 'Associazione Hunter, Hunter; lottatore del 200º piano dell’Arena Celeste',
            en: 'Hunter Association, Hunter; 200th-floor fighter at Heavens Arena',
          },
        },
        // The spider tattoo on his back comes off in the mirror, and he means
        // to hunt the Troupe: chapter 55 and episode 32.
        {
          episode: 32,
          chapter: 55,
          value: {
            it: 'Associazione Hunter, Hunter; finto membro della Brigata Fantasma',
            en: 'Hunter Association, Hunter; fake member of the Phantom Troupe',
          },
        },
        // After the exchange he challenges Chrollo openly and leaves the
        // Troupe behind, chapter 119 and episode 58.
        {
          episode: 58,
          chapter: 119,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
      ],
    },
    'todo': {
      relationships: hunterExamRelationships.todo,
      chronicle: hunterExamChronicles.todo,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Tonpa lo indica a Gon tra gli aspiranti abituali: è un lottatore.',
        en: 'Tonpa points him out to Gon among the regular applicants: he is a wrestler.',
      },
      status: [{ episode: 3, chapter: 5, value: 'alive' }],
      affiliation: [
        { episode: 3, chapter: 5, value: APPLICANT },
        {
          episode: 6,
          chapter: 12,
          value: {
            it: 'Esame Hunter, escluso nella seconda prova',
            en: 'Hunter Exam, failed the Second Phase',
          },
        },
      ],
    },
    'geretta': {
      relationships: hunterExamRelationships.geretta,
      chronicle: hunterExamChronicles.geretta,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Tonpa lo indica a Gon tra gli aspiranti che si ripresentano all’esame.',
        en: 'Tonpa points him out to Gon among the applicants who keep coming back to the exam.',
      },
      status: [
        { episode: 3, chapter: 5, value: 'alive' },
        { episode: 16, chapter: 28, value: 'deceased' },
      ],
      affiliation: [{ episode: 3, chapter: 5, value: APPLICANT }],
    },
    'cherry': {
      relationships: hunterExamRelationships.cherry,
      chronicle: hunterExamChronicles.cherry,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Tonpa lo indica a Gon tra gli aspiranti abituali: un esperto di arti marziali che eccelle nel combattimento a mani nude.',
        en: 'Tonpa points him out to Gon among the regular applicants: a martial artist who excels at fighting bare-handed.',
      },
      status: [
        { episode: 3, chapter: 5, source: 'chapter', value: 'alive' },
        { episode: 5, chapter: 10, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        { episode: 3, chapter: 5, source: 'chapter', value: APPLICANT },
      ],
    },
    'hanzo': {
      relationships: hunterExamRelationships.hanzo,
      chronicle: hunterExamChronicles.hanzo,
      role: passedExam(3, 6),
      log: {
        it: 'Parla volentieri con Tonpa e gli racconta della pergamena che cerca. Quando Tonpa gli offre del succo, però, lo rifiuta: un ninja non accetta cibo o bevande da uno sconosciuto.',
        en: 'He readily talks to Tonpa and tells him about the scroll he is looking for. When Tonpa offers him juice, though, he refuses: a ninja does not accept food or drink from a stranger.',
      },
      status: [{ episode: 3, chapter: 6, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 6,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
        {
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
      ],
    },
    'nicholas': {
      relationships: hunterExamRelationships.nicholas,
      chronicle: hunterExamChronicles.nicholas,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Ha già trovato sul portatile i precedenti tentativi di Tonpa e sa che cerca di far ritirare i nuovi arrivati. Rifiuta il succo che gli viene offerto.',
        en: 'He has already found Tonpa’s earlier attempts on his laptop and knows that he tries to make newcomers drop out. He refuses the juice offered to him.',
      },
      status: [{ episode: 3, chapter: 6, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 6,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
      ],
    },
    'satotz': {
      relationships: hunterExamRelationships.satotz,
      chronicle: hunterExamChronicles.satotz,
      role: { it: 'Esaminatore della prima prova', en: 'First Phase examiner' },
      log: {
        it: 'Chiude le iscrizioni e avverte gli aspiranti che l’esame può costare loro la vita. Li guida nel tunnel, accelerando il passo senza dire quanto durerà la prova o dove li porterà. Per passare devono soltanto riuscire a seguirlo.',
        en: 'He closes registration and warns the applicants that the exam can cost them their lives. He leads them through the tunnel, increasing his pace without saying how long the test will last or where it will take them. To pass, they only need to keep up with him.',
      },
      status: [{ episode: 3, chapter: 6, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 6,
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
    },
    'killua': {
      relationships: hunterExamRelationships.killua,
      chronicle: hunterExamChronicles.killua,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Segue l’esaminatore sullo skateboard. Gon lo raggiunge e scopre che hanno quasi la stessa età. Killua prende la tavola in mano e continua a corrergli accanto.',
        en: 'He follows the examiner on his skateboard. Gon catches up with him and learns that they are nearly the same age. Killua picks up his board and keeps running beside him.',
      },
      status: [
        { episode: 4, chapter: 6, value: 'alive' },
        // The Troupe takes him and Killua to its hideout, chapter 91 and
        // episode 49; they break out through the walls, chapter 94 and
        // episode 50.
        { episode: 49, chapter: 91, value: 'captured' },
        { episode: 50, chapter: 94, value: 'alive' },
        // Caught again on the way to the hotel, chapter 111 and episode 56,
        // and handed back at the exchange, chapter 118 and episode 58.
        { episode: 56, chapter: 111, value: 'captured' },
        { episode: 58, chapter: 118, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 4,
          chapter: 6,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
        {
          episode: 7,
          chapter: 13,
          value: {
            it: 'La sua famiglia di assassini',
            en: 'His family of assassins',
          },
        },
        {
          episode: 20,
          chapter: 36,
          value: {
            it: 'Esame Hunter, squalificato',
            en: 'Hunter Exam, disqualified',
          },
        },
        {
          episode: 25,
          chapter: 43,
          value: { it: 'In viaggio con Gon', en: 'Travelling with Gon' },
        },
        // Wing's pupil from the same scene as Gon.
        {
          episode: 29,
          chapter: 48,
          value: {
            it: 'In viaggio con Gon; allievo di Wing',
            en: 'Travelling with Gon; Wing’s pupil',
          },
        },
      ],
      origin: [
        {
          episode: 22,
          chapter: 39,
          place: 'kukuroo-mountain',
          value: {
            it: 'Monte Kukruu, dimora della famiglia',
            en: 'Kukuroo Mountain, family home',
          },
        },
      ],
    },
    'menchi': {
      relationships: hunterExamRelationships.menchi,
      chronicle: hunterExamChronicles.menchi,
      role: {
        it: 'Esaminatrice della seconda prova',
        en: 'Second Phase examiner',
      },
      log: {
        it: 'Aspetta gli aspiranti con Buhara nella riserva forestale di Visca. Si presenta come Hunter buongustaia: la seconda prova riguarda la cucina.',
        en: 'She waits for the applicants with Buhara in the Visca Forest Preserve. She introduces herself as a Gourmet Hunter: the Second Phase is about cooking.',
      },
      status: [{ episode: 6, chapter: 10, value: 'alive' }],
      affiliation: [
        {
          episode: 6,
          chapter: 10,
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
    },
    'buhara': {
      relationships: hunterExamRelationships.buhara,
      chronicle: hunterExamChronicles.buhara,
      role: {
        it: 'Esaminatore della seconda prova',
        en: 'Second Phase examiner',
      },
      log: {
        it: 'Esamina gli aspiranti insieme a Menci. Per il suo piatto chiede del maiale arrosto e li manda nella foresta a catturare i cinghiali che ci vivono.',
        en: 'He examines the applicants alongside Menchi. For his dish he asks for roast pork and sends them into the forest to catch the boars living there.',
      },
      status: [{ episode: 6, chapter: 10, value: 'alive' }],
      affiliation: [
        {
          episode: 6,
          chapter: 10,
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
    },
    'netero': {
      relationships: hunterExamRelationships.netero,
      chronicle: hunterExamChronicles.netero,
      role: {
        it: 'Presidente dell’Associazione Hunter',
        en: 'Chairman of the Hunter Association',
      },
      log: {
        it: 'Arriva in dirigibile dopo che Menci ha bocciato tutti gli aspiranti. Le fa riconoscere di aver perso la calma e le propone di ripetere la prova, mostrando di persona come affrontarla.',
        en: 'He arrives by airship after Menchi has failed every applicant. He gets her to acknowledge that she lost her temper and proposes that she repeat the test, demonstrating how to attempt it herself.',
      },
      status: [{ episode: 6, chapter: 12, value: 'alive' }],
      affiliation: [
        {
          episode: 6,
          chapter: 12,
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
    },
  },
}

/** The exam’s early stages and the named characters of Trick Tower. */
export const hunterExam: HunterSaga = {
  name: earlyExam.name,
  entries: [...earlyExam.entries, ...trickTower.entries],
  dossiers: { ...earlyExam.dossiers, ...trickTower.dossiers },
}
