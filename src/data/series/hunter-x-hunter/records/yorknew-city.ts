import type { PlaceDossier } from '~/data/types'

import type { HunterSaga, HunterVocabulary } from './saga'
import { yorknewCityChronicles } from './yorknew-city.chronicle'
import { yorknewCityRelationships } from './yorknew-city.relationships'

/** One of the family's bodyguards: the role a hire or an assignment dates. */
const BODYGUARD = { it: 'Guardia del corpo', en: 'Bodyguard' }

/** The applicants' role until they are hired. */
const APPLICANT = {
  it: 'Aspirante guardia del corpo',
  en: 'Bodyguard applicant',
}

/**
 * Neon's bodyguards, from the chapter and episode that name the family she
 * belongs to (chapter 71, episode 41).
 */
const NEON_GUARD = {
  episode: 41,
  chapter: 71,
  value: {
    it: 'Famiglia Nostrad, guardia del corpo di Neon',
    en: 'Nostrade family, Neon’s bodyguard',
  },
}

/** A member of the Phantom Troupe, as the role line and the affiliation. */
const TROUPE_MEMBER = {
  it: 'Membro della Brigata Fantasma',
  en: 'Phantom Troupe member',
}
const TROUPE = { it: 'Brigata Fantasma', en: 'Phantom Troupe' }

/**
 * The two employees who test the applicants at their gate, chapter 68 and
 * episode 40, then ride with Neon's bodyguards into the city, chapter 71 and
 * episode 41.
 */
const EMPLOYEE = [
  {
    episode: 40,
    chapter: 68,
    value: { it: 'Dipendente della famiglia', en: 'Employee of the family' },
  },
  { episode: 41, chapter: 71, value: BODYGUARD },
]

/** The role of the applicants hired in chapter 70 and episode 41. */
const HIRED = [
  { episode: 40, chapter: 68, value: APPLICANT },
  { episode: 41, chapter: 70, value: BODYGUARD },
]

/**
 * Yorknew City: episodes 37–58 of the 2011 anime and chapters 64–119, as the
 * English Hunter x Hunter Wiki's arc page gives them. Italian Wikipedia calls
 * the city York Shin City. Owner's #796 check: the 1 September meeting is told
 * in chapter 44, pages 3–5 (page references follow the owner's digital
 * edition).
 *
 * Each character opens where the name is said (#900), in three phases: this
 * one files episodes 37–42 / chapters 64–72. Where the wiki gives no naming
 * line, the gate is the chapter where its synopsis stops describing the
 * character and uses the name, and the episode that adapts that scene, the
 * latest safe point (owner, #900). Surnames from the databook stay out.
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
    // Seen unnamed in the room of applicants in chapter 67 / episode 39; the
    // test of chapter 68 / episode 40 names the six.
    {
      id: 'melody',
      kind: 'character',
      revealedAtEpisode: 40,
      revealedAtChapter: 68,
      name: { it: 'Melody', en: 'Melody' },
      summary: {
        it: 'Una donna che si candida con Kurapika come guardia del corpo per un collezionista. Sente il battito del cuore delle persone e capisce quando mentono.',
        en: 'A woman applying with Kurapika for a bodyguard job with a collector. She can hear people’s heartbeats and tell when they lie.',
      },
      visual: { art: 'melody', tint: 'sand' },
    },
    {
      id: 'basho',
      kind: 'character',
      revealedAtEpisode: 40,
      revealedAtChapter: 68,
      name: { it: 'Basho', en: 'Basho' },
      summary: {
        it: 'Un uomo che si candida con Kurapika come guardia del corpo e scrive haiku che si avverano.',
        en: 'A man applying with Kurapika for a bodyguard job, who writes haiku that come true.',
      },
      visual: { art: 'basho', tint: 'ocher' },
    },
    {
      id: 'baise',
      kind: 'character',
      revealedAtEpisode: 40,
      revealedAtChapter: 68,
      name: { it: 'Versé', en: 'Baise' },
      summary: {
        it: 'Una donna che si candida con Kurapika come guardia del corpo. Chi riceve un suo bacio diventa suo servitore.',
        en: 'A woman applying with Kurapika for a bodyguard job. Anyone she kisses becomes her servant.',
      },
      visual: { art: 'baise', tint: 'wine' },
    },
    // Both plants introduce themselves once caught, chapter 68 / episode 40.
    {
      id: 'squala',
      kind: 'character',
      revealedAtEpisode: 40,
      revealedAtChapter: 68,
      name: { it: 'Squala', en: 'Squala' },
      summary: {
        it: 'Un uomo che finge di candidarsi come guardia del corpo per mettere alla prova gli altri. Comanda dei cani.',
        en: 'A man posing as an applicant for a bodyguard job to test the others. He commands dogs.',
      },
      visual: { art: 'squala', tint: 'violet' },
    },
    {
      id: 'shachmono-tocino',
      kind: 'character',
      revealedAtEpisode: 40,
      revealedAtChapter: 68,
      name: { it: 'Shachmono Tocino', en: 'Shachmono Tocino' },
      summary: {
        it: 'Un uomo che lavora già per la famiglia e mette alla prova i candidati con figure vestite di nero fatte della sua aura.',
        en: 'A man already working for the family who tests the applicants with figures in black made of his aura.',
      },
      visual: { art: 'shachmono-tocino', tint: 'ice' },
    },
    // On the screen, unnamed, in chapter 67; named as the head bodyguard who
    // hires the four in chapter 70 and episode 41.
    {
      id: 'dalzollene',
      kind: 'character',
      revealedAtEpisode: 41,
      revealedAtChapter: 70,
      name: { it: 'Dalzorne', en: 'Dalzollene' },
      summary: {
        it: 'Il capo delle guardie del corpo della famiglia, che assume Kurapika e altri tre candidati.',
        en: 'The head of the family’s bodyguards, who hires Kurapika and three other applicants.',
      },
      visual: { art: 'dalzollene', tint: 'cyan' },
    },
    // "The boss" on her bed at the end of chapter 70; named from chapter 71
    // and episode 41.
    {
      id: 'neon-nostrade',
      kind: 'character',
      revealedAtEpisode: 41,
      revealedAtChapter: 71,
      name: { it: 'Neon Nostrad', en: 'Neon Nostrade' },
      summary: {
        it: 'La ragazza che Kurapika e le altre guardie del corpo devono proteggere. Scrive le profezie per gli amici mafiosi di suo padre.',
        en: 'The girl Kurapika and the other bodyguards are hired to protect. She writes fortunes for her father’s friends in the Mafia.',
      },
      visual: { art: 'neon-nostrade', tint: 'pink' },
    },
    // Seen with the family at the airport in chapter 71; named when
    // Dalzollene assigns the bidders, chapter 72 and episode 42.
    {
      id: 'ivlenkov',
      kind: 'character',
      revealedAtEpisode: 42,
      revealedAtChapter: 72,
      name: { it: 'Ivlenkov', en: 'Ivlenkov' },
      summary: {
        it: 'Una guardia del corpo della famiglia Nostrad, mandata a fare offerte all’asta sotterranea.',
        en: 'A bodyguard of the Nostrade family, sent to bid at the Underground Auction.',
      },
      visual: { art: 'ivlenkov', tint: 'lavender' },
    },
    // Named in the same assignment, chapter 72 and episode 42, which posts
    // him at the back entrance.
    {
      id: 'linssen',
      kind: 'character',
      revealedAtEpisode: 42,
      revealedAtChapter: 72,
      name: { it: 'Linssen', en: 'Linssen' },
      summary: {
        it: 'Una guardia del corpo della famiglia Nostrad, messa a sorvegliare l’ingresso posteriore durante l’asta sotterranea.',
        en: 'A bodyguard of the Nostrade family, posted at the back entrance during the Underground Auction.',
      },
      visual: { art: 'linssen', tint: 'ocher' },
    },
    // The woman who sews Hisoka's arms back on, unnamed, in chapter 55 and
    // episode 32; the Troupe walking to the city names her in chapter 71.
    {
      id: 'machi',
      kind: 'character',
      revealedAtEpisode: 41,
      revealedAtChapter: 71,
      name: { it: 'Machi', en: 'Machi' },
      summary: {
        it: 'Un membro della Brigata Fantasma che va a York Shin City per il raduno di tutti i membri.',
        en: 'A member of the Phantom Troupe on her way to Yorknew City for a gathering of all its members.',
      },
      visual: { art: 'machi', tint: 'vermilion' },
    },
    // A Troupe member addresses her by name after the arm-wrestling match,
    // chapter 72 and episode 42.
    {
      id: 'shizuku',
      kind: 'character',
      revealedAtEpisode: 42,
      revealedAtChapter: 72,
      name: { it: 'Shizuku', en: 'Shizuku' },
      summary: {
        it: 'Un membro della Brigata Fantasma che sfida Gon a braccio di ferro.',
        en: 'A member of the Phantom Troupe who challenges Gon at arm wrestling.',
      },
      visual: { art: 'shizuku', tint: 'violet' },
    },
    {
      id: 'yorknew-city',
      kind: 'place',
      revealedAtEpisode: 41,
      revealedAtChapter: 70,
      name: { it: 'York Shin City', en: 'Yorknew City' },
      summary: {
        it: 'La città dell’asta di settembre, dove Gon e Killua vanno a cercare una copia del gioco della scheda di memoria di Ging.',
        en: 'The city of the September auction, where Gon and Killua come for a copy of the game on Ging’s memory card.',
      },
      visual: { art: 'yorknew-city', tint: 'azure' },
    },
    // Named in Dalzollene's briefing in chapter 70; the airship lands there
    // in chapter 71, both in episode 41.
    {
      id: 'lingon-airport',
      kind: 'place',
      revealedAtEpisode: 41,
      revealedAtChapter: 71,
      name: { it: 'Aeroporto di Lingon', en: 'Lingon Airport' },
      summary: {
        it: 'L’aeroporto vicino a York Shin City dove atterra il dirigibile della famiglia Nostrad.',
        en: 'The airport near Yorknew City where the Nostrade family’s airship lands.',
      },
      visual: { art: 'lingon-airport', tint: 'cyan' },
    },
    {
      id: 'cemetery-building',
      kind: 'place',
      revealedAtEpisode: 42,
      revealedAtChapter: 72,
      name: { it: 'Cemetery Building', en: 'Cemetery Building' },
      summary: {
        it: 'L’edificio di York Shin City dove la mafia tiene la sua asta sotterranea.',
        en: 'The building in Yorknew City where the Mafia holds its Underground Auction.',
      },
      visual: { art: 'cemetery-building', tint: 'ivory' },
    },
  ],
  dossiers: {
    'ging-freecss': {
      relationships: yorknewCityRelationships['ging-freecss'],
      chronicle: yorknewCityChronicles['ging-freecss'],
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
    'melody': {
      role: HIRED,
      log: {
        it: 'Si candida con Kurapika come guardia del corpo per un collezionista. Quando uno dei candidati viene accusato di essere un infiltrato, dice di aver sentito il suo cuore accelerare: ha il ritmo tipico di chi mente.',
        en: 'She applies with Kurapika for a bodyguard job with a collector. When one of the applicants is accused of being a plant, she says she heard his heart speed up: it has the typical rhythm of a liar.',
      },
      status: [{ episode: 40, chapter: 68, value: 'alive' }],
      affiliation: [NEON_GUARD],
    },
    'basho': {
      role: HIRED,
      log: {
        it: 'Si candida come guardia del corpo con Kurapika. Abbatte a mani nude una delle figure vestite di nero e capisce che sono fatte di aura. Scrive haiku che si avverano: il primo dà fuoco a una sedia, il secondo promette una morte rapida nel fuoco a chi mente dicendo di non essere un infiltrato.',
        en: 'He applies for a bodyguard job with Kurapika. He knocks down one of the figures in black bare-handed and realizes they are made of aura. He writes haiku that come true: the first sets a chair on fire, the second promises a swift death by fire to anyone who lies about not being a plant.',
      },
      status: [{ episode: 40, chapter: 68, value: 'alive' }],
      affiliation: [NEON_GUARD],
    },
    'baise': {
      role: HIRED,
      log: {
        it: 'Si candida come guardia del corpo con Kurapika. Quando l’infiltrato scoperto si rifiuta di dire quali ordini ha dato, lo bacia: lui diventa il suo servitore e le dice tutto.',
        en: 'She applies for a bodyguard job with Kurapika. When the plant who has been caught refuses to say what orders he has given, she kisses him: he becomes her servant and tells her everything.',
      },
      status: [{ episode: 40, chapter: 68, value: 'alive' }],
      affiliation: [NEON_GUARD],
    },
    'squala': {
      role: EMPLOYEE,
      log: {
        it: 'Lavora già per la famiglia e si mescola ai candidati per metterli alla prova. La catena di Kurapika oscilla davanti a lui; nega finché l’haiku di Basho non lo costringe a confessare. Comanda i cani che ha messo intorno alla villa.',
        en: 'He already works for the family and mixes with the applicants to test them. Kurapika’s chain swings in front of him; he denies it until Basho’s haiku makes him confess. He commands the dogs he has placed around the mansion.',
      },
      status: [{ episode: 40, chapter: 68, value: 'alive' }],
      affiliation: [NEON_GUARD],
    },
    'shachmono-tocino': {
      role: EMPLOYEE,
      log: {
        it: 'Lavora già per la famiglia e mette alla prova i candidati con figure vestite di nero fatte della sua aura. Kurapika lo scopre notando che è l’unico che le figure non attaccano.',
        en: 'He already works for the family, and he tests the applicants with figures in black made of his aura. Kurapika finds him out by noticing that he is the only one the figures never attack.',
      },
      status: [{ episode: 40, chapter: 68, value: 'alive' }],
      affiliation: [NEON_GUARD],
    },
    'dalzollene': {
      role: {
        it: 'Capo delle guardie del corpo',
        en: 'Head of the bodyguards',
      },
      log: {
        it: 'Da uno schermo assegna la prova ai candidati: portare un oggetto da una lista. Poi la porta resta chiusa e figure vestite di nero li attaccano. Assume i quattro che tornano con l’oggetto. Andando dalla loro protetta passano davanti a un uomo trasformato in una figura appesa al muro.',
        en: 'From a screen he sets the applicants their test: bring back one item from a list. Then the door stays locked and figures in black attack them. He hires the four who return with their items. On the way to the boss they pass a man turned into a figure hanging on the wall.',
      },
      status: [{ episode: 41, chapter: 70, value: 'alive' }],
      affiliation: [
        {
          episode: 41,
          chapter: 71,
          value: {
            it: 'Famiglia Nostrad, capo delle guardie del corpo di Neon',
            en: 'Nostrade family, head of Neon’s bodyguards',
          },
        },
      ],
    },
    'neon-nostrade': {
      role: { it: 'Indovina', en: 'Fortune-teller' },
      log: {
        it: 'Arriva a York Shin City con le sue guardie del corpo. Con il suo potere scrive le profezie per gli amici mafiosi di suo padre.',
        en: 'She arrives in Yorknew City with her bodyguards. With her power she writes fortunes for her father’s friends in the Mafia.',
      },
      status: [{ episode: 41, chapter: 71, value: 'alive' }],
      affiliation: [
        {
          episode: 41,
          chapter: 71,
          value: { it: 'Famiglia Nostrad', en: 'Nostrade family' },
        },
      ],
    },
    'ivlenkov': {
      role: BODYGUARD,
      log: {
        it: 'Guardia del corpo della famiglia, è uno dei tre che Dalzorne manda a fare offerte all’asta sotterranea.',
        en: 'A bodyguard of the family, he is one of the three Dalzollene sends to bid at the Underground Auction.',
      },
      status: [{ episode: 42, chapter: 72, value: 'alive' }],
      affiliation: [
        {
          episode: 42,
          chapter: 72,
          value: {
            it: 'Famiglia Nostrad, guardia del corpo',
            en: 'Nostrade family, bodyguard',
          },
        },
      ],
    },
    'linssen': {
      role: BODYGUARD,
      log: {
        it: 'Guardia del corpo della famiglia, Dalzorne lo mette con un altro a sorvegliare l’ingresso posteriore dell’edificio dove si tiene l’asta sotterranea.',
        en: 'A bodyguard of the family, Dalzollene posts him with another at the back entrance of the building where the Underground Auction is held.',
      },
      status: [{ episode: 42, chapter: 72, value: 'alive' }],
      affiliation: [
        {
          episode: 42,
          chapter: 72,
          value: {
            it: 'Famiglia Nostrad, guardia del corpo',
            en: 'Nostrade family, bodyguard',
          },
        },
      ],
    },
    'machi': {
      role: TROUPE_MEMBER,
      log: {
        it: 'I membri della Brigata si riuniscono tutti a York Shin City per la prima volta da più di tre anni, e lei ci va a piedi con altri tre.',
        en: 'The Troupe’s members are all gathering in Yorknew City for the first time in over three years, and she walks there with three others.',
      },
      status: [{ episode: 41, chapter: 71, value: 'alive' }],
      affiliation: [{ episode: 41, chapter: 71, value: TROUPE }],
    },
    'shizuku': {
      role: TROUPE_MEMBER,
      log: {
        it: 'Sfida Gon a braccio di ferro per il premio, un diamante, e perde dopo averlo costretto a usare tutta la sua forza.',
        en: 'She challenges Gon at arm wrestling for the prize, a diamond, and loses after making him use all his strength.',
      },
      status: [{ episode: 42, chapter: 72, value: 'alive' }],
      affiliation: [{ episode: 42, chapter: 72, value: TROUPE }],
    },
  },
}

/** The places of the arc filed so far, all on the mainland. */
export const YORKNEW_CITY_PLACES: Record<
  string,
  PlaceDossier<HunterVocabulary>
> = {
  'yorknew-city': {
    form: 'city',
    region: 'mainland',
    arc: 'yorknew-city-arc',
    landmark: {
      it: 'La fontana di una piazza affollata',
      en: 'The fountain in a crowded square',
    },
    log: {
      it: 'Gon e Killua arrivano in città e, in un internet café, cercano sul sito degli Hunter il gioco della scheda di memoria di Ging: alcune copie saranno all’asta di York Shin City, con un’offerta minima di 8,9 miliardi di Jenny. Per raccogliere i soldi provano a comprare e rivendere su internet.',
      en: 'Gon and Killua arrive in the city and, in an internet café, look up the game on Ging’s memory card on the Hunter website: copies of it will be at the Yorknew auction, with a minimum bid of 8.9 billion Jenny. To raise the money they try buying and reselling online.',
    },
    filedHere: ['machi', 'ivlenkov', 'linssen', 'shizuku'],
  },
  'lingon-airport': {
    form: 'airport',
    region: 'mainland',
    arc: 'yorknew-city-arc',
    landmark: {
      it: 'La pista dove atterra il dirigibile',
      en: 'The runway where the airship lands',
    },
    log: {
      it: 'Il dirigibile della famiglia Nostrad atterra qui. Le guardie del corpo accompagnano Neon in auto fino all’albergo in città.',
      en: 'The Nostrade family’s airship lands here. The bodyguards drive Neon to her hotel in the city.',
    },
    filedHere: [],
  },
  'cemetery-building': {
    form: 'building',
    region: 'mainland',
    arc: 'yorknew-city-arc',
    landmark: {
      it: 'Il grande ingresso sorvegliato',
      en: 'The large guarded entrance',
    },
    log: {
      it: 'La mafia tiene qui la sua asta sotterranea. Dalzorne manda tre guardie del corpo a fare offerte e mette le altre a sorvegliare gli ingressi.',
      en: 'The Mafia holds its Underground Auction here. Dalzollene sends three bodyguards in to bid and posts the others at the entrances.',
    },
    filedHere: [],
  },
}
