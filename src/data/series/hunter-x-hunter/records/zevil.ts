import type { HunterSaga } from './saga'
import { zevilChronicles } from './zevil.chronicle'

const APPLICANT = {
  it: 'Esame Hunter, aspirante',
  en: 'Hunter Exam, applicant',
}

const FAILED = {
  it: 'Esame Hunter, escluso nella quarta prova',
  en: 'Hunter Exam, failed the Fourth Phase',
}

/** Where the chapter-23 roster opens the manga's own applicants. */
const ON_ROSTER = { episode: 14, chapter: 23, source: 'chapter' } as const

/**
 * Named scenes of the Fourth Phase and its final bracket. Wiki debut floors
 * and episode 14's roster do not prove a name, so each gate is a named
 * scene, per source (#833). Chapter 23 prints a roster of the applicants
 * with their names, which the 2011 anime never says for eight of them: those
 * are the manga's alone. Gittarackur's disguise withholds the true identity:
 * the unmasked face is chapter 26 and the chapter-25 caller is anonymous,
 * neither a naming gate. Tonpa, Ponzu, the brothers and the unnamed
 * eliminated fail the phase at 18 / 32; Pokkle's pass belongs to the Final
 * Phase update. Bourbon, Goz, Siper, Agon and Bodoro die after they open, so
 * each has a death redrawing, as do Cherry and Geretta in `hunter-exam.ts`.
 * Unnamed species and the final-phase hotel get no record.
 */
export const zevil: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'khara',
      kind: 'character',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Khara', en: 'Khara' },
      summary: {
        it: 'Un’addetta dell’Associazione Hunter che accompagna gli aspiranti verso la quarta prova.',
        en: 'A Hunter Association official accompanying the applicants to the Fourth Phase.',
      },
      visual: { art: 'khara', tint: 'wine' },
    },
    // Named only on the chapter-23 roster: the 2011 anime shows the next
    // eight but never says their names, so they are the manga's alone and
    // the episode only orders them (#833).
    {
      id: 'goz',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Gozu', en: 'Goz' },
      summary: {
        it: 'Un aspirante armato di lancia che arriva alla quarta prova dell’Esame Hunter.',
        en: 'A spear-wielding applicant who reaches the Fourth Phase of the Hunter Exam.',
      },
      visual: { art: 'goz', tint: 'orange' },
    },
    {
      id: 'agon',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Agon', en: 'Agon' },
      summary: {
        it: 'Un aspirante avvolto in un mantello che arriva alla quarta prova dell’Esame Hunter.',
        en: 'A cloaked applicant who reaches the Fourth Phase of the Hunter Exam.',
      },
      visual: { art: 'agon', tint: 'violet' },
    },
    {
      id: 'siper',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Super', en: 'Siper' },
      summary: {
        it: 'Un’aspirante con occhiali da sole squadrati che arriva alla quarta prova dell’Esame Hunter.',
        en: 'An applicant in square sunglasses who reaches the Fourth Phase of the Hunter Exam.',
      },
      visual: { art: 'siper', tint: 'wine' },
    },
    {
      id: 'ryu',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Ryu', en: 'Ryu' },
      summary: {
        it: 'Un aspirante con uno spadone alla cintura che arriva alla quarta prova dell’Esame Hunter.',
        en: 'An applicant with a broadsword at his belt who reaches the Fourth Phase of the Hunter Exam.',
      },
      visual: { art: 'ryu', tint: 'azure' },
    },
    {
      id: 'kyu',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Kyu', en: 'Kyu' },
      summary: {
        it: 'Un aspirante armato di spada che arriva alla quarta prova dell’Esame Hunter.',
        en: 'A sword-carrying applicant who reaches the Fourth Phase of the Hunter Exam.',
      },
      visual: { art: 'kyu', tint: 'sand' },
    },
    {
      id: 'shishito',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Shishito', en: 'Shishito' },
      summary: {
        it: 'Un aspirante che, sulla barca per l’Isola di Zevil, si chiede chi abbia estratto il suo numero.',
        en: 'An applicant who, on the boat to Zevil Island, wonders who has drawn his number.',
      },
      visual: { art: 'shishito', tint: 'yellow' },
    },
    {
      id: 'kenmi',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Kenmi', en: 'Kenmi' },
      summary: {
        it: 'Un aspirante con la testa rasata che arriva alla quarta prova dell’Esame Hunter.',
        en: 'An applicant with a shaved head who reaches the Fourth Phase of the Hunter Exam.',
      },
      visual: { art: 'kenmi', tint: 'teal' },
    },
    {
      id: 'sommy',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Somy', en: 'Sommy' },
      summary: {
        it: 'Un aspirante che arriva alla quarta prova dell’Esame Hunter.',
        en: 'An applicant who reaches the Fourth Phase of the Hunter Exam.',
      },
      visual: { art: 'sommy', tint: 'ocher' },
    },
    {
      id: 'gittarackur',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 33,
      name: { it: 'Ghitarakur', en: 'Gittarackur' },
      summary: {
        it: 'Un aspirante Hunter dal corpo coperto di aghi, che conosce Hisoka.',
        en: 'A Hunter Exam applicant covered in needles who knows Hisoka.',
      },
      visual: { art: 'gittarackur', tint: 'violet' },
    },
    // Tonpa names each brother on the 2011 tour (episode 3); chapter 5 says
    // only "the Amori brothers", so the manga's gate is their addressing one
    // another against Killua. Same for Umori and Imori.
    {
      id: 'amori',
      kind: 'character',
      unanchored: true,
      revealedAtEpisode: 3,
      revealedAtChapter: 29,
      name: { it: 'Amori', en: 'Amori' },
      summary: {
        it: 'Uno di tre fratelli che collaborano durante l’Esame Hunter.',
        en: 'One of three brothers working together during the Hunter Exam.',
      },
      visual: { art: 'amori', tint: 'ocher' },
    },
    {
      id: 'umori',
      kind: 'character',
      unanchored: true,
      revealedAtEpisode: 3,
      revealedAtChapter: 29,
      name: { it: 'Umori', en: 'Umori' },
      summary: {
        it: 'Un aspirante Hunter che affronta l’esame con i due fratelli.',
        en: 'A Hunter Exam applicant taking the exam with his two brothers.',
      },
      visual: { art: 'umori', tint: 'sand' },
    },
    {
      id: 'imori',
      kind: 'character',
      unanchored: true,
      revealedAtEpisode: 3,
      revealedAtChapter: 29,
      name: { it: 'Imori', en: 'Imori' },
      summary: {
        it: 'Uno di tre fratelli che tornano spesso all’Esame Hunter.',
        en: 'One of three brothers who often return to the Hunter Exam.',
      },
      visual: { art: 'imori', tint: 'blue' },
    },
    // Named when Leorio asks Gon for help; the bees (chapter 31) stay out.
    {
      id: 'ponzu',
      kind: 'character',
      revealedAtEpisode: 17,
      revealedAtChapter: 30,
      name: { it: 'Ponzu', en: 'Ponzu' },
      summary: {
        it: 'Un’aspirante Hunter che usa sostanze chimiche e porta un grande cappello.',
        en: 'A Hunter Exam applicant who uses chemicals and wears a large hat.',
      },
      visual: { art: 'ponzu', tint: 'yellow' },
    },
    // Tonpa names him among the regulars (chapter 5, episode 3).
    {
      id: 'bourbon',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 5,
      name: { it: 'Burbon', en: 'Bourbon' },
      summary: {
        it: 'Un incantatore di serpenti che torna spesso all’Esame Hunter.',
        en: 'A snake charmer who often returns to the Hunter Exam.',
      },
      visual: { art: 'bourbon', tint: 'orange' },
    },
    // The chapter-23 roster names him; the 2011 anime first says his name
    // at the Fourth Phase results (episode 18).
    {
      id: 'pokkle',
      kind: 'character',
      unanchored: true,
      revealedAtEpisode: 18,
      revealedAtChapter: 23,
      name: { it: 'Pockul', en: 'Pokkle' },
      summary: {
        it: 'Un arciere che partecipa all’Esame Hunter.',
        en: 'An archer taking the Hunter Exam.',
      },
      visual: { art: 'pokkle', tint: 'wine' },
    },
    // Tonpa names him on the 2011 tour (episode 3); the manga first names
    // him on the Final Phase bracket.
    {
      id: 'bodoro',
      kind: 'character',
      unanchored: true,
      revealedAtEpisode: 3,
      revealedAtChapter: 33,
      name: { it: 'Bodoro', en: 'Bodoro' },
      summary: {
        it: 'Un anziano esperto di arti marziali che partecipa all’Esame Hunter.',
        en: 'An elderly martial artist taking the Hunter Exam.',
      },
      visual: { art: 'bodoro', tint: 'azure' },
    },
    // Named before the voyage; the record opens on the boat's arrival. The
    // Italian title is an editorial translation, not a checked dub spelling.
    {
      id: 'zevil-island',
      kind: 'place',
      revealedAtEpisode: 14,
      revealedAtChapter: 23,
      name: { it: 'Isola di Zevil', en: 'Zevil Island' },
      summary: {
        it: 'L’isola boscosa dove gli aspiranti Hunter si contendono le targhette nella quarta prova.',
        en: 'The wooded island where Hunter Exam applicants compete for badges in the Fourth Phase.',
      },
      visual: { art: 'zevil-island', tint: 'teal' },
    },
  ],
  dossiers: {
    khara: {
      chronicle: zevilChronicles.khara,
      role: {
        it: 'Addetta dell’Associazione Hunter',
        en: 'Hunter Association official',
      },
      log: {
        it: 'Sulla barca spiega quanto durerà il viaggio e cerca di incoraggiare gli aspiranti. All’arrivo sull’isola scandisce le partenze, separate da due minuti, e ricorda il termine di una settimana.',
        en: 'On the boat she explains how long the voyage will take and tries to encourage the applicants. At the island she sends them ashore at two-minute intervals and reminds them of the one-week deadline.',
      },
      affiliation: [
        {
          episode: 14,
          chapter: 23,
          value: {
            it: 'Associazione Hunter, addetta alle prove',
            en: 'Hunter Association, exam official',
          },
        },
      ],
      status: [{ episode: 14, chapter: 23, value: 'alive' }],
    },
    goz: {
      chronicle: zevilChronicles.goz,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Estrae il numero del suo bersaglio e parte con gli altri per l’Isola di Zevil.',
        en: 'He is one of the twenty-four applicants who leave Trick Tower. He draws his target’s number and sails with the others to Zevil Island.',
      },
      status: [
        { episode: 14, chapter: 23, source: 'chapter', value: 'alive' },
        { episode: 15, chapter: 26, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [{ ...ON_ROSTER, value: APPLICANT }],
    },
    agon: {
      chronicle: zevilChronicles.agon,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Estrae il numero del suo bersaglio e parte con gli altri per l’Isola di Zevil.',
        en: 'He is one of the twenty-four applicants who leave Trick Tower. He draws his target’s number and sails with the others to Zevil Island.',
      },
      status: [
        { episode: 14, chapter: 23, source: 'chapter', value: 'alive' },
        { episode: 16, chapter: 28, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [{ ...ON_ROSTER, value: APPLICANT }],
    },
    siper: {
      chronicle: zevilChronicles.siper,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Estrae il numero del suo bersaglio e parte con gli altri per l’Isola di Zevil.',
        en: 'She is one of the twenty-four applicants who leave Trick Tower. She draws her target’s number and sails with the others to Zevil Island.',
      },
      status: [
        { episode: 14, chapter: 23, source: 'chapter', value: 'alive' },
        { episode: 15, chapter: 26, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [{ ...ON_ROSTER, value: APPLICANT }],
    },
    ryu: {
      chronicle: zevilChronicles.ryu,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Estrae il numero del suo bersaglio e parte con gli altri per l’Isola di Zevil.',
        en: 'He is one of the twenty-four applicants who leave Trick Tower. He draws his target’s number and sails with the others to Zevil Island.',
      },
      status: [{ episode: 14, chapter: 23, source: 'chapter', value: 'alive' }],
      affiliation: [
        { ...ON_ROSTER, value: APPLICANT },
        { episode: 18, chapter: 32, source: 'chapter', value: FAILED },
      ],
    },
    kyu: {
      chronicle: zevilChronicles.kyu,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Estrae il numero del suo bersaglio e parte con gli altri per l’Isola di Zevil.',
        en: 'He is one of the twenty-four applicants who leave Trick Tower. He draws his target’s number and sails with the others to Zevil Island.',
      },
      status: [{ episode: 14, chapter: 23, source: 'chapter', value: 'alive' }],
      affiliation: [
        { ...ON_ROSTER, value: APPLICANT },
        { episode: 18, chapter: 32, source: 'chapter', value: FAILED },
      ],
    },
    shishito: {
      chronicle: zevilChronicles.shishito,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Durante il viaggio verso l’Isola di Zevil si guarda intorno, chiedendosi chi gli darà la caccia.',
        en: 'He is one of the twenty-four applicants who leave Trick Tower. On the voyage to Zevil Island he looks around, wondering who will hunt him.',
      },
      status: [{ episode: 14, chapter: 23, source: 'chapter', value: 'alive' }],
      affiliation: [
        { ...ON_ROSTER, value: APPLICANT },
        { episode: 18, chapter: 32, source: 'chapter', value: FAILED },
      ],
    },
    kenmi: {
      chronicle: zevilChronicles.kenmi,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Estrae il numero del suo bersaglio e parte con gli altri per l’Isola di Zevil.',
        en: 'He is one of the twenty-four applicants who leave Trick Tower. He draws his target’s number and sails with the others to Zevil Island.',
      },
      status: [{ episode: 14, chapter: 23, source: 'chapter', value: 'alive' }],
      affiliation: [
        { ...ON_ROSTER, value: APPLICANT },
        { episode: 18, chapter: 32, source: 'chapter', value: FAILED },
      ],
    },
    sommy: {
      chronicle: zevilChronicles.sommy,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra i ventiquattro aspiranti usciti dalla Torre di Lotta. Estrae il numero del suo bersaglio e parte con gli altri per l’Isola di Zevil.',
        en: 'He is one of the twenty-four applicants who leave Trick Tower. He draws his target’s number and sails with the others to Zevil Island.',
      },
      status: [{ episode: 14, chapter: 23, source: 'chapter', value: 'alive' }],
      affiliation: [
        { ...ON_ROSTER, value: APPLICANT },
        { episode: 18, chapter: 32, source: 'chapter', value: FAILED },
      ],
    },
    gittarackur: {
      chronicle: zevilChronicles.gittarackur,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Partecipa all’esame con il corpo coperto di aghi. Durante la quarta prova incontra Hisoka: i due si conoscono già. Raggiunge il tabellone dell’ultima prova.',
        en: 'He takes the exam with his body covered in needles. During the Fourth Phase he meets Hisoka: the two already know each other. He reaches the Final Phase bracket.',
      },
      affiliation: [
        {
          episode: 19,
          chapter: 33,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
        {
          episode: 20,
          chapter: 35,
          value: {
            en: 'Hunter Exam, applicant; Illumi, Killua’s older brother',
            it: 'Esame Hunter, aspirante; Illumi, fratello maggiore di Killua',
          },
        },
        {
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter; Illumi, Killua’s older brother',
            it: 'Associazione Hunter, Hunter; Illumi, fratello maggiore di Killua',
          },
        },
      ],
      status: [{ episode: 19, chapter: 33, value: 'alive' }],
    },
    amori: {
      chronicle: zevilChronicles.amori,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Tonpa indica a Gon i tre fratelli tra gli aspiranti abituali.',
        en: 'Tonpa points out the three brothers to Gon among the regular applicants.',
      },
      affiliation: [
        {
          episode: 3,
          chapter: 29,
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
      status: [{ episode: 3, chapter: 29, value: 'alive' }],
    },
    umori: {
      chronicle: zevilChronicles.umori,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Si presenta all’esame con i due fratelli. Tonpa li indica a Gon tra gli aspiranti abituali.',
        en: 'He comes to the exam with his two brothers. Tonpa points them out to Gon among the regular applicants.',
      },
      affiliation: [
        {
          episode: 3,
          chapter: 29,
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
      status: [{ episode: 3, chapter: 29, value: 'alive' }],
    },
    imori: {
      chronicle: zevilChronicles.imori,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Insieme ai due fratelli è tra gli aspiranti abituali che Tonpa indica a Gon.',
        en: 'With his two brothers he is among the regular applicants Tonpa points out to Gon.',
      },
      affiliation: [
        {
          episode: 3,
          chapter: 29,
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
      status: [{ episode: 3, chapter: 29, value: 'alive' }],
    },
    ponzu: {
      chronicle: zevilChronicles.ponzu,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È l’obiettivo di Leorio nella quarta prova. Gon ne segue l’odore fino a una grotta, dove lei è rimasta intrappolata: i serpenti attaccano chi cerca di uscire.',
        en: 'She is Leorio’s target in the Fourth Phase. Gon follows her scent to a cave where she is trapped: snakes attack anyone who tries to leave.',
      },
      affiliation: [
        {
          episode: 17,
          chapter: 30,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
        {
          episode: 18,
          chapter: 32,
          value: {
            it: 'Esame Hunter, esclusa nella quarta prova',
            en: 'Hunter Exam, failed the Fourth Phase',
          },
        },
      ],
      status: [{ episode: 17, chapter: 30, value: 'alive' }],
    },
    bourbon: {
      chronicle: zevilChronicles.bourbon,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Tonpa lo indica a Gon tra gli aspiranti abituali: è un incantatore di serpenti.',
        en: 'Tonpa points him out to Gon among the regular applicants: he is a snake charmer.',
      },
      affiliation: [
        {
          episode: 3,
          chapter: 5,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
      ],
      status: [
        { episode: 3, chapter: 5, value: 'alive' },
        { episode: 17, chapter: 30, value: 'deceased' },
      ],
    },
    pokkle: {
      chronicle: zevilChronicles.pokkle,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'È tra gli aspiranti che superano la Torre di Lotta e affrontano la quarta prova sull’Isola di Zevil, armato di arco e frecce.',
        en: 'He is among the applicants who clear Trick Tower and face the Fourth Phase on Zevil Island, armed with a bow and arrows.',
      },
      affiliation: [
        {
          episode: 18,
          chapter: 23,
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
      status: [{ episode: 18, chapter: 23, value: 'alive' }],
    },
    bodoro: {
      chronicle: zevilChronicles.bodoro,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Un anziano esperto di arti marziali tra gli aspiranti dell’Esame Hunter.',
        en: 'An elderly martial artist among the applicants of the Hunter Exam.',
      },
      affiliation: [
        {
          episode: 3,
          chapter: 33,
          value: {
            it: 'Esame Hunter, aspirante',
            en: 'Hunter Exam, applicant',
          },
        },
      ],
      status: [
        { episode: 3, chapter: 33, value: 'alive' },
        { episode: 20, chapter: 36, value: 'deceased' },
      ],
    },
  },
}
