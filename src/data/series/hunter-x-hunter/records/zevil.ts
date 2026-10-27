import type { HunterSaga } from './saga'
import { zevilChronicles } from './zevil.chronicle'

/**
 * Named scenes of the Fourth Phase and its final bracket. Wiki debut floors
 * and episode 14's roster do not prove a name, so each gate is a later named
 * scene. Gittarackur's disguise withholds the true identity: the unmasked
 * face is chapter 26 and the chapter-25 caller is anonymous, neither a
 * naming gate. Tonpa, Ponzu and the brothers fail the phase at 18 / 32;
 * Pokkle's pass belongs to the Final Phase update. Bourbon opens already
 * dead, so he has no death redrawing; Bodoro's death (20 / 36) does.
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
    // Gate is the brothers addressing one another against Killua, not Tonpa's
    // introduction (names there unchecked); same for Umori and Imori.
    {
      id: 'amori',
      kind: 'character',
      revealedAtEpisode: 17,
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
      revealedAtEpisode: 17,
      revealedAtChapter: 29,
      name: { it: 'Umori', en: 'Umori' },
      summary: {
        it: 'Un aspirante Hunter che affronta la quarta prova insieme ai due fratelli.',
        en: 'A Hunter Exam applicant taking the Fourth Phase with his two brothers.',
      },
      visual: { art: 'umori', tint: 'sand' },
    },
    {
      id: 'imori',
      kind: 'character',
      revealedAtEpisode: 17,
      revealedAtChapter: 29,
      name: { it: 'Imori', en: 'Imori' },
      summary: {
        it: 'Il più giovane di tre fratelli che partecipano all’Esame Hunter.',
        en: 'The youngest of three brothers taking the Hunter Exam.',
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
    {
      id: 'bourbon',
      kind: 'character',
      revealedAtEpisode: 17,
      revealedAtChapter: 30,
      name: { it: 'Burbon', en: 'Bourbon' },
      summary: {
        it: 'Un aspirante Hunter che controlla i serpenti di una grotta.',
        en: 'A Hunter Exam applicant controlling the snakes in a cave.',
      },
      visual: { art: 'bourbon', tint: 'orange' },
    },
    // Gate is the Final Phase bracket; Bodoro too.
    {
      id: 'pokkle',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 33,
      name: { it: 'Pockul', en: 'Pokkle' },
      summary: {
        it: 'Un arciere che arriva all’ultima prova dell’Esame Hunter.',
        en: 'An archer who reaches the Final Phase of the Hunter Exam.',
      },
      visual: { art: 'pokkle', tint: 'wine' },
    },
    {
      id: 'bodoro',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 33,
      name: { it: 'Bodoro', en: 'Bodoro' },
      summary: {
        it: 'Un anziano esperto di arti marziali che arriva all’ultima prova dell’Esame Hunter.',
        en: 'An elderly martial artist who reaches the Final Phase of the Hunter Exam.',
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
        it: 'Raggiunge i suoi fratelli nella foresta e rimprovera il più giovane, che non ha ancora preso la targhetta di Killua. Quando i tre lo circondano, Killua gli arriva alle spalle e lo usa per farsi consegnare la targhetta che cerca.',
        en: 'He rejoins his brothers in the forest and scolds the youngest for failing to take Killua’s badge. When the three surround him, Killua gets behind Amori and uses him to demand the badge he needs.',
      },
      affiliation: [
        {
          episode: 17,
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
      status: [{ episode: 17, chapter: 29, value: 'alive' }],
    },
    umori: {
      chronicle: zevilChronicles.umori,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Aiuta i fratelli nella caccia alle targhette. Quando Killua immobilizza uno di loro, gli consegna la propria: è la numero 199, quella che Killua cercava.',
        en: 'He helps his brothers hunt for badges. When Killua restrains one of them, he hands over his own: number 199, the badge Killua was seeking.',
      },
      affiliation: [
        {
          episode: 17,
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
      status: [{ episode: 17, chapter: 29, value: 'alive' }],
    },
    imori: {
      chronicle: zevilChronicles.imori,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Segue Killua nella foresta senza decidersi ad attaccarlo. All’arrivo dei fratelli prova a colpirlo, ma Killua gli sottrae la targhetta senza che se ne accorga.',
        en: 'He follows Killua through the forest without daring to attack. When his brothers arrive he tries to strike, but Killua takes his badge without him noticing.',
      },
      affiliation: [
        {
          episode: 17,
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
      status: [{ episode: 17, chapter: 29, value: 'alive' }],
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
        it: 'Nella quarta prova prepara una trappola: i serpenti attaccano chi tenta di uscire dalla grotta. Quando Gon e Kurapika vi entrano, lui è già morto, ma la trappola continua a funzionare.',
        en: 'In the Fourth Phase he sets a trap: snakes attack anyone trying to leave the cave. When Gon and Kurapika enter he is already dead, but the trap still works.',
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
      ],
      status: [{ episode: 17, chapter: 30, value: 'deceased' }],
    },
    pokkle: {
      chronicle: zevilChronicles.pokkle,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Supera la caccia alle targhette dell’isola e raggiunge gli altri finalisti. L’ultima prova consiste in duelli: per superarla bisogna convincere l’avversario ad arrendersi.',
        en: 'He passes the island’s badge hunt and joins the other finalists. The Final Phase consists of duels: passing requires making an opponent surrender.',
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
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
      ],
      status: [{ episode: 19, chapter: 33, value: 'alive' }],
    },
    bodoro: {
      chronicle: zevilChronicles.bodoro,
      role: { it: 'Aspirante Hunter', en: 'Hunter Exam applicant' },
      log: {
        it: 'Raggiunge l’ultima prova, ma dice a Netero di non voler combattere contro i bambini. Il tabellone stabilisce gli incontri: basta una vittoria per superare l’esame, mentre è vietato uccidere.',
        en: 'He reaches the Final Phase but tells Netero that he does not want to fight children. The bracket sets the matches: one victory is enough to pass, and killing is forbidden.',
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
      ],
      status: [
        { episode: 19, chapter: 33, value: 'alive' },
        { episode: 20, chapter: 36, value: 'deceased' },
      ],
    },
  },
}
