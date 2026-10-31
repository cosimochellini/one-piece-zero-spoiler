import type { PlaceDossier } from '~/data/types'

import { heavensArenaChronicles } from './heavens-arena.chronicle'
import type { HunterSaga, HunterVocabulary } from './saga'

/** The fighters' floor, as the dossiers of the arena's own fighters say it. */
const FLOOR_200 = {
  it: 'Arena Celeste, lottatore del 200º piano',
  en: 'Heavens Arena, 200th-floor fighter',
}

/**
 * Heavens Arena: episodes 27–36 of the 2011 anime and chapters 44–63, as the
 * English Hunter x Hunter Wiki's arc page gives them. Owner's #796 check: the
 * 251 floors are told in chapter 44, pages 15–16 (page references follow the
 * owner's digital edition).
 *
 * Each character opens where the name is said (#896), not at the earlier
 * unnamed appearance: Zushi bows at the arena in chapter 44 and gives his
 * name in 45; Gido, Sadaso and Riehlvelt watch Gon and Killua from chapter 48
 * / episode 29. The announcer (Cocco), Machi, the clerk and Kurapika's
 * anime-only teacher stay unfiled: either never named here or named in one
 * source by credits alone. Maita and Chibaba are names over an intercom.
 */
export const heavensArena: HunterSaga = {
  name: { it: 'Arena Celeste', en: 'Heavens Arena' },
  entries: [
    {
      id: 'heavens-arena-arc',
      kind: 'arc',
      revealedAtEpisode: 27,
      revealedAtChapter: 44,
      name: { it: 'Arena Celeste', en: 'Heavens Arena' },
      summary: {
        it: 'Una torre di 251 piani dove si combatte, e per entrare basta battere un avversario. Gon e Killua, rimasti senza soldi, ci vengono per guadagnarne e per allenarsi.',
        en: 'A fighting tower of 251 floors that anyone can enter by beating an opponent. Gon and Killua, out of money, come here to earn some and to train.',
      },
      visual: { art: 'heavens-arena-arc', tint: 'azure' },
    },
    // Opens with the arc it names: both are the tower Gon and Killua enter.
    {
      id: 'heavens-arena',
      kind: 'place',
      revealedAtEpisode: 27,
      revealedAtChapter: 44,
      name: { it: 'Arena Celeste', en: 'Heavens Arena' },
      summary: {
        it: 'La torre dei combattimenti dove Gon e Killua salgono di piano in piano vincendo un incontro dopo l’altro.',
        en: 'The fighting tower where Gon and Killua climb floor by floor, winning one match after another.',
      },
      visual: { art: 'heavens-arena', tint: 'lavender' },
    },
    // Chapter 44 shows him unnamed beside Gon and Killua; he introduces
    // himself on the 50th floor in chapter 45 and episode 27.
    {
      id: 'zushi',
      kind: 'character',
      revealedAtEpisode: 27,
      revealedAtChapter: 45,
      name: { it: 'Zooci', en: 'Zushi' },
      summary: {
        it: 'Un ragazzo che studia il kung fu Shingen-ryu e combatte all’Arena Celeste per migliorarsi.',
        en: 'A boy who studies Shingen-ryu kung fu and fights at Heavens Arena to improve.',
      },
      visual: { art: 'zushi', tint: 'vermilion' },
    },
    // Introduces himself to Gon and Killua after Zushi's match is called,
    // chapter 45 and episode 27.
    {
      id: 'wing',
      kind: 'character',
      revealedAtEpisode: 27,
      revealedAtChapter: 45,
      name: { it: 'Wing', en: 'Wing' },
      summary: {
        it: 'Il maestro di Zooci, che lo segue dagli spalti durante i suoi incontri.',
        en: 'Zushi’s teacher, who watches his matches from the stands.',
      },
      visual: { art: 'wing', tint: 'sand' },
    },
    // Seen unnamed on the 200th floor in chapter 48; the announcer names him
    // before his match with Gon in chapter 49 and episode 29.
    {
      id: 'gido',
      kind: 'character',
      revealedAtEpisode: 29,
      revealedAtChapter: 49,
      name: { it: 'Ghido', en: 'Gido' },
      summary: {
        it: 'Un lottatore del 200º piano che combatte con le trottole ed è il primo avversario di Gon a quel piano.',
        en: 'A 200th-floor fighter who fights with spinning tops and is Gon’s first opponent on that floor.',
      },
      visual: { art: 'gido', tint: 'violet' },
    },
    // Named by Killua's ticket seller in chapter 57. Episode 33 is the
    // episode of the same scenes; its exact naming line is not viewed (#896).
    {
      id: 'sadaso',
      kind: 'character',
      revealedAtEpisode: 33,
      revealedAtChapter: 57,
      name: { it: 'Sadaso', en: 'Sadaso' },
      summary: {
        it: 'Un lottatore del 200º piano con un braccio solo, che punta sui nuovi arrivati per vincere facile.',
        en: 'A one-armed 200th-floor fighter who goes after newcomers for easy wins.',
      },
      visual: { art: 'sadaso', tint: 'wine' },
    },
    // Named when the announcer calls his match with Killua, chapter 59 and
    // episode 34; Sadaso's call in chapter 58 does not print the name.
    {
      id: 'riehlvelt',
      kind: 'character',
      revealedAtEpisode: 34,
      revealedAtChapter: 59,
      name: { it: 'Liroubert', en: 'Riehlvelt' },
      summary: {
        it: 'Un lottatore del 200º piano in sedia a rotelle, che sfida Killua e poi Gon.',
        en: 'A 200th-floor fighter in a wheelchair who takes on Killua and then Gon.',
      },
      visual: { art: 'riehlvelt', tint: 'cyan' },
    },
    {
      id: 'kastro',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 52,
      name: { it: 'Kastro', en: 'Kastro' },
      summary: {
        it: 'Un lottatore del 200º piano che ha già affrontato Hisoka e ora lo sfida di nuovo.',
        en: 'A 200th-floor fighter who has fought Hisoka before and now challenges him again.',
      },
      visual: { art: 'kastro', tint: 'ocher' },
    },
  ],
  dossiers: {
    zushi: {
      chronicle: heavensArenaChronicles.zushi,
      role: { it: 'Lottatore, allievo di Wing', en: 'Fighter, Wing’s pupil' },
      log: {
        it: 'Sale con Gon e Killua fino al 50º piano e si presenta con un inchino. Studia il kung fu Shingen-ryu sotto la guida di un maestro. Nell’incontro con Killua finisce a terra più volte e ogni volta si rialza; il suo maestro, dagli spalti, grida il suo nome.',
        en: 'He rides up to the 50th floor with Gon and Killua and introduces himself with a bow. He studies Shingen-ryu kung fu under a teacher. In his match with Killua he is knocked down again and again and gets up every time; his teacher shouts his name from the stands.',
      },
      status: [{ episode: 27, chapter: 45, value: 'alive' }],
      affiliation: [
        {
          episode: 27,
          chapter: 45,
          value: {
            it: 'Shingen-ryu, allievo di Wing',
            en: 'Shingen-ryu, Wing’s pupil',
          },
        },
      ],
    },
    wing: {
      chronicle: heavensArenaChronicles.wing,
      role: { it: 'Maestro di arti marziali', en: 'Martial arts teacher' },
      log: {
        it: 'Insegna il kung fu Shingen-ryu a Zooci e lo segue all’Arena Celeste. Porta la camicia fuori dai pantaloni, e Zooci glielo fa notare. Si presenta a Gon e Killua, sorpreso di trovare lì altri ragazzi oltre a Zooci. Durante l’incontro con Killua grida il nome del suo allievo così forte che gli spettatori intorno si coprono le orecchie.',
        en: 'He teaches Shingen-ryu kung fu to Zushi and follows him to Heavens Arena. His shirttail hangs out of his trousers, and Zushi points it out. He introduces himself to Gon and Killua, surprised to find other boys there besides Zushi. During the match with Killua he shouts his pupil’s name so loudly that the spectators around him cover their ears.',
      },
      status: [{ episode: 27, chapter: 45, value: 'alive' }],
      affiliation: [
        {
          episode: 27,
          chapter: 45,
          value: { it: 'Shingen-ryu, maestro', en: 'Shingen-ryu, teacher' },
        },
      ],
    },
    gido: {
      chronicle: heavensArenaChronicles.gido,
      role: { it: 'Lottatore', en: 'Fighter' },
      log: {
        it: 'Con altri due lottatori si presenta a Gon e Killua appena arrivati al 200º piano per chiedere un incontro. Cammina con un bastone, e lungo il bastone fa girare dieci trottole che rimbalzano da ogni parte; girano per ore, e nemmeno lui sa dove andranno. Nel primo incontro di Gon a quel piano, una lo colpisce alla schiena.',
        en: 'With two other fighters he comes to Gon and Killua, just arrived on the 200th floor, to ask for a match. He walks with a cane, and along the cane he spins ten tops that bounce in every direction; they spin for hours, and even he cannot tell where they will go. In Gon’s first match on that floor, one strikes him in the back.',
      },
      status: [{ episode: 29, chapter: 49, value: 'alive' }],
      affiliation: [{ episode: 29, chapter: 49, value: FLOOR_200 }],
    },
    sadaso: {
      chronicle: heavensArenaChronicles.sadaso,
      role: { it: 'Lottatore', en: 'Fighter' },
      log: {
        it: 'Con Ghido e un terzo lottatore cerca vittorie facili contro chi è appena arrivato al 200º piano. Per costringere Killua a combattere afferra Zooci con una grande mano fatta della sua forza; Killua promette loro vittorie a tavolino in cambio del ragazzo. È noto come il cacciatore di novellini. Poco prima del suo incontro con Killua se lo ritrova alle spalle con un coltello, avvertito di non farsi più vedere.',
        en: 'With Gido and a third fighter he seeks easy wins against anyone new to the 200th floor. To make Killua fight he seizes Zushi in a giant hand made of his own power; Killua promises them wins by default in exchange for the boy. He is known as the newbie hunter. Shortly before his match with Killua he finds Killua behind him with a knife, warning him never to show his face again.',
      },
      status: [{ episode: 33, chapter: 57, value: 'alive' }],
      affiliation: [{ episode: 33, chapter: 57, value: FLOOR_200 }],
    },
    riehlvelt: {
      chronicle: heavensArenaChronicles.riehlvelt,
      role: { it: 'Lottatore', en: 'Fighter' },
      log: {
        it: 'Si muove in sedia a rotelle e combatte con due fruste elettriche. Con Sadaso e Ghido punta a diventare Maestro di piano. Nell’incontro principale contro Killua, Killua afferra le fruste nonostante la scossa e lo scaraventa fuori dalla sedia; lui sviene tra le sue braccia. Contro Gon perde di nuovo.',
        en: 'He gets around in a wheelchair and fights with two electric whips. With Sadaso and Gido he aims to become a Floor Master. In the main event against Killua, Killua seizes the whips despite the shock and throws him out of his chair; he passes out in Killua’s arms. Against Gon he loses again.',
      },
      status: [{ episode: 34, chapter: 59, value: 'alive' }],
      affiliation: [{ episode: 34, chapter: 59, value: FLOOR_200 }],
    },
    kastro: {
      chronicle: heavensArenaChronicles.kastro,
      role: { it: 'Lottatore', en: 'Fighter' },
      log: {
        it: 'È l’unico che sia riuscito a mandare Hisoka al tappeto e gli ha tolto tre dei quattro punti che Hisoka ha concesso. Ha già perso una volta contro di lui; da allora ha vinto nove incontri di fila e gliene manca uno per sfidare un Maestro di piano. Lui e Hisoka hanno scelto insieme la data della rivincita.',
        en: 'He is the only fighter to have knocked Hisoka down, and he scored three of the four points Hisoka has conceded. He has lost to him once; since then he has won nine matches in a row and is one win from challenging a Floor Master. He and Hisoka agreed the date of the rematch together.',
      },
      status: [
        { episode: 31, chapter: 52, value: 'alive' },
        // Hisoka's cards pierce him at the end of the match.
        { episode: 32, chapter: 54, value: 'deceased' },
      ],
      affiliation: [{ episode: 31, chapter: 52, value: FLOOR_200 }],
    },
  },
}

/** The one place the arc visits: the arena itself, on the mainland. */
export const HEAVENS_ARENA_PLACES: Record<
  string,
  PlaceDossier<HunterVocabulary>
> = {
  'heavens-arena': {
    form: 'tower',
    region: 'mainland',
    arc: 'heavens-arena-arc',
    landmark: {
      it: 'La grande sala dei sedici ring dove combattono i nuovi iscritti',
      en: 'The great hall of sixteen platforms where newcomers fight',
    },
    log: {
      it: 'Gon e Killua si mettono nella lunga fila di chi aspetta di combattere: per entrare basta battere un avversario, e più si sale di piano più si guadagna. I nuovi iscritti combattono su sedici piccoli ring in un’unica grande sala. Killua c’è già stato: suo padre ce lo ha lasciato a sei anni senza soldi, e gli ci sono voluti due anni per arrivare al 200º piano.',
      en: 'Gon and Killua join the long line of people waiting to fight: beating an opponent is all it takes to get in, and the higher the floor, the more a fight pays. Newcomers fight on sixteen small platforms in one great hall. Killua has been here before: his father left him here with no money at six, and it took him two years to reach the 200th floor.',
    },
    filedHere: ['zushi', 'wing', 'gido', 'sadaso', 'riehlvelt', 'kastro'],
  },
}
