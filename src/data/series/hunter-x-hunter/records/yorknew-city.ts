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
 * Neon's bodyguards, from the chapter and episode where Neon arrives in the
 * city with them and is shown as the boss they guard (chapter 71, episode
 * 41).
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

/** One of the Shadow Beasts, as the role line and the affiliation. */
const SHADOW_BEAST = { it: 'Bestia dell’Ombra', en: 'Shadow Beast' }
const SHADOW_BEASTS = { it: 'Bestie dell’Ombra', en: 'Shadow Beasts' }

/**
 * The two plants among the applicants at their gate, chapter 68 and episode
 * 40, who then ride with Neon's bodyguards into the city: chapter 71 and
 * episode 41 both list them in the escort.
 */
const PLANT = [
  {
    episode: 40,
    chapter: 68,
    value: {
      it: 'Infiltrato tra i candidati',
      en: 'Plant among the applicants',
    },
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
 * Each character opens where the name is said (#900), filed in three
 * phases: episodes 37–42 / chapters 64–72, then 43–47 / 73–84, then 48–58 /
 * 85–119. Where the wiki gives no naming line, the gate is the chapter where
 * its synopsis stops describing the character and uses the name, and the
 * episode that adapts that scene, the latest safe point (owner, #900). A
 * text says only what both the chapter and the episode pages show by its
 * gate. Surnames from the databook stay out.
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
        it: 'Uno dei candidati come guardia del corpo, che si rivela un infiltrato.',
        en: 'One of the applicants for a bodyguard job, who turns out to be a plant.',
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
        it: 'Un uomo che mette alla prova i candidati con figure vestite di nero fatte della sua aura.',
        en: 'A man who tests the applicants with figures in black made of his aura.',
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
        it: 'Il capo delle guardie del corpo, che assume Kurapika e altri tre candidati.',
        en: 'The head bodyguard, who hires Kurapika and three other applicants.',
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
        it: 'La ragazza che Kurapika e le altre guardie del corpo devono proteggere. Scrive le profezie per gli amici di suo padre.',
        en: 'The girl Kurapika and the other bodyguards are hired to protect. She writes fortunes for her father’s friends.',
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
        it: 'Una guardia del corpo della famiglia Nostrad, mandata all’asta sotterranea.',
        en: 'A bodyguard of the Nostrade family, sent to attend the Underground Auction.',
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
    // Named by the leader on the phone as the Troupe flees the auction,
    // chapter 74 and episode 43; disguised and unnamed in chapter 73.
    {
      id: 'uvogin',
      kind: 'character',
      revealedAtEpisode: 43,
      revealedAtChapter: 74,
      name: { it: 'Uborghin', en: 'Uvogin' },
      summary: {
        it: 'Un membro della Brigata Fantasma che trova già vuoto il caveau dell’asta e sospetta un traditore.',
        en: 'A member of the Phantom Troupe who finds the auction vault already empty and suspects a traitor.',
      },
      visual: { art: 'uvogin', tint: 'ocher' },
    },
    // On the auction stage, unnamed, in chapter 73; named in chapter 74 and
    // in episode 43.
    {
      id: 'feitan',
      kind: 'character',
      revealedAtEpisode: 43,
      revealedAtChapter: 74,
      name: { it: 'Feitan', en: 'Feitan' },
      summary: {
        it: 'Un membro della Brigata Fantasma che prende parte all’attacco all’asta sotterranea.',
        en: 'A member of the Phantom Troupe who takes part in the attack on the Underground Auction.',
      },
      visual: { art: 'feitan', tint: 'ice' },
    },
    // "The larger one" in chapter 73; named in chapter 76, and in episode
    // 43, so the gate is the episode of chapter 76's scenes.
    {
      id: 'franklin',
      kind: 'character',
      revealedAtEpisode: 44,
      revealedAtChapter: 76,
      name: { it: 'Franklin', en: 'Franklin' },
      summary: {
        it: 'Un membro della Brigata Fantasma che spara proiettili di aura.',
        en: 'A member of the Phantom Troupe who fires bullets of aura.',
      },
      visual: { art: 'franklin', tint: 'sand' },
    },
    // Named in chapter 77 and episode 45, when a Shadow Beast's cloth traps
    // him alone.
    {
      id: 'nobunaga',
      kind: 'character',
      revealedAtEpisode: 45,
      revealedAtChapter: 77,
      name: { it: 'Nobunaga', en: 'Nobunaga' },
      summary: {
        it: 'Un membro della Brigata Fantasma che resta intrappolato nel telo di una Bestia dell’Ombra.',
        en: 'A member of the Phantom Troupe who is caught in a Shadow Beast’s cloth.',
      },
      visual: { art: 'nobunaga', tint: 'violet' },
    },
    {
      id: 'phinks',
      kind: 'character',
      revealedAtEpisode: 45,
      revealedAtChapter: 78,
      name: { it: 'Phinks', en: 'Phinks' },
      summary: {
        it: 'Un membro della Brigata Fantasma che libera Uborghin.',
        en: 'A member of the Phantom Troupe who frees Uvogin.',
      },
      visual: { art: 'phinks', tint: 'orange' },
    },
    // Named in chapter 75; the episodes use his name only from 46, which
    // adapts chapter 79, where he searches for the chain user.
    {
      id: 'shalnark',
      kind: 'character',
      revealedAtEpisode: 46,
      revealedAtChapter: 79,
      name: { it: 'Shalnark', en: 'Shalnark' },
      summary: {
        it: 'Un membro della Brigata Fantasma che cerca la famiglia Nostrad sul sito degli Hunter.',
        en: 'A member of the Phantom Troupe who searches the Hunter website for the Nostrade family.',
      },
      visual: { art: 'shalnark', tint: 'lavender' },
    },
    // Neon's father on the phone, unnamed, from chapter 71 and episode 41;
    // Squala names him in chapter 79 and episode 46.
    {
      id: 'light-nostrade',
      kind: 'character',
      revealedAtEpisode: 46,
      revealedAtChapter: 79,
      name: { it: 'Light Nostrad', en: 'Light Nostrade' },
      summary: {
        it: 'Il padre di Neon, che ha assunto le sue guardie del corpo.',
        en: 'Neon’s father, who hired her bodyguards.',
      },
      visual: { art: 'light-nostrade', tint: 'cyan' },
    },
    // Named by Uvogin in chapter 74, but in the episodes only from 45: the
    // gate is the car chase of chapter 77 and episode 45.
    {
      id: 'owl',
      kind: 'character',
      revealedAtEpisode: 45,
      revealedAtChapter: 77,
      name: { it: 'Civetta', en: 'Owl' },
      summary: {
        it: 'Una Bestia dell’Ombra che intrappola in un telo l’auto di alcuni membri della Brigata Fantasma.',
        en: 'A Shadow Beast who traps a car of Phantom Troupe members in a cloth.',
      },
      visual: { art: 'owl', tint: 'azure' },
    },
    // Introduces himself, chapter 75 and episode 43.
    {
      id: 'worm',
      kind: 'character',
      revealedAtEpisode: 43,
      revealedAtChapter: 75,
      name: { it: 'Lombrico', en: 'Worm' },
      summary: {
        it: 'Una Bestia dell’Ombra che si muove sotto terra.',
        en: 'A Shadow Beast who moves under the ground.',
      },
      visual: { art: 'worm', tint: 'vermilion' },
    },
    {
      id: 'rabid-dog',
      kind: 'character',
      revealedAtEpisode: 43,
      revealedAtChapter: 75,
      name: { it: 'Cane selvatico', en: 'Rabid Dog' },
      summary: {
        it: 'Una delle Bestie dell’Ombra mandate contro la Brigata Fantasma.',
        en: 'One of the Shadow Beasts sent after the Phantom Troupe.',
      },
      visual: { art: 'rabid-dog', tint: 'wine' },
    },
    // Named in chapter 76, where Uvogin's scream kills him; the record opens
    // with his death in the manga (owner, #900) and with his fate unknown in
    // the episodes.
    {
      id: 'porcupine',
      kind: 'character',
      revealedAtEpisode: 44,
      revealedAtChapter: 76,
      name: { it: 'Porcospino', en: 'Porcupine' },
      summary: {
        it: 'Una Bestia dell’Ombra i cui peli diventano aghi.',
        en: 'A Shadow Beast whose body hair turns into needles.',
      },
      visual: { art: 'porcupine', tint: 'lavender' },
    },
    {
      id: 'leech',
      kind: 'character',
      revealedAtEpisode: 44,
      revealedAtChapter: 76,
      name: { it: 'Sanguisuga', en: 'Leech' },
      summary: {
        it: 'Una Bestia dell’Ombra che mette sanguisughe nel corpo delle sue vittime.',
        en: 'A Shadow Beast who puts leeches into his victims’ bodies.',
      },
      visual: { art: 'leech', tint: 'pink' },
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
        it: 'L’edificio di York Shin City dove si tiene l’asta sotterranea.',
        en: 'The building in Yorknew City where the Underground Auction is held.',
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
        it: 'Si candida come guardia del corpo con Kurapika. Abbatte a mani nude una delle figure vestite di nero e capisce che sono fatte di aura. Scrive haiku che si avverano: il primo dà fuoco a una sedia, il secondo dice che chi mente alla sua domanda brucerà.',
        en: 'He applies for a bodyguard job with Kurapika. He knocks down one of the figures in black bare-handed and realizes they are made of aura. He writes haiku that come true: the first sets a chair on fire, the second says that whoever lies to his question will burn.',
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
      status: [
        { episode: 40, chapter: 68, value: 'alive' },
        // Killed in the attack on the Underground Auction, chapter 73 and
        // episode 43.
        { episode: 43, chapter: 73, value: 'deceased' },
      ],
      affiliation: [NEON_GUARD],
    },
    'squala': {
      role: PLANT,
      log: {
        it: 'La catena di Kurapika oscilla davanti a lui, e Melody sente il suo cuore accelerare. Nega di essere un infiltrato finché l’haiku di Basho non lo costringe a confessare. Dopo il bacio di Versé parla.',
        en: 'Kurapika’s chain swings in front of him, and Melody hears his heart speed up. He denies being a plant until Basho’s haiku makes him confess. He talks after Baise kisses him.',
      },
      status: [{ episode: 40, chapter: 68, value: 'alive' }],
      affiliation: [NEON_GUARD],
    },
    'shachmono-tocino': {
      role: PLANT,
      log: {
        it: 'Mette alla prova i candidati con figure vestite di nero fatte della sua aura. Kurapika lo scopre notando che è l’unico che le figure non attaccano.',
        en: 'He tests the applicants with figures in black made of his aura. Kurapika finds him out by noticing that he is the only one the figures never attack.',
      },
      status: [
        { episode: 40, chapter: 68, value: 'alive' },
        // Killed in the attack on the Underground Auction, chapter 73 and
        // episode 43.
        { episode: 43, chapter: 73, value: 'deceased' },
      ],
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
      status: [
        { episode: 41, chapter: 70, value: 'alive' },
        // Killed when the Troupe frees Uvogin, chapter 78 and episode 45.
        { episode: 45, chapter: 78, value: 'deceased' },
      ],
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
        it: 'Arriva a York Shin City con le sue guardie del corpo. Con il suo potere scrive le profezie per gli amici di suo padre.',
        en: 'She arrives in Yorknew City with her bodyguards. With her power she writes fortunes for her father’s friends.',
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
        it: 'Guardia del corpo della famiglia, è uno dei tre che Dalzorne manda all’asta sotterranea.',
        en: 'A bodyguard of the family, he is one of the three Dalzollene sends to attend the Underground Auction.',
      },
      status: [
        { episode: 42, chapter: 72, value: 'alive' },
        // Killed in the attack on the Underground Auction, chapter 73 and
        // episode 43.
        { episode: 43, chapter: 73, value: 'deceased' },
      ],
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
    'uvogin': {
      role: TROUPE_MEMBER,
      log: {
        it: 'Fugge dall’asta in mongolfiera con altri membri della Brigata. Al telefono dice al capo che il caveau era già vuoto e che tra loro potrebbe esserci un traditore; il capo lo convince che non c’è. Il capo vuole che attirino le Bestie dell’Ombra.',
        en: 'He flees the auction in a hot-air balloon with other Troupe members. On the phone he tells the leader that the vault was already empty and that there may be a traitor among them; the leader convinces him there is none. The leader wants them to draw out the Shadow Beasts.',
      },
      status: [
        { episode: 43, chapter: 74, value: 'alive' },
        // Kurapika's chain binds him and the bodyguards drive him away,
        // chapter 77 and episode 44.
        { episode: 44, chapter: 77, value: 'captured' },
        // The Troupe frees him, chapter 78 and episode 45.
        { episode: 45, chapter: 78, value: 'alive' },
        // Bound by the chain again in the fight with Kurapika, chapter 82,
        // and killed by it in chapter 84. Episode 47 tells both, so only a
        // chapter reader can stand between them: the capture is theirs.
        { episode: 47, chapter: 82, value: 'captured', source: 'chapter' },
        { episode: 47, chapter: 84, value: 'deceased' },
      ],
      affiliation: [{ episode: 43, chapter: 74, value: TROUPE }],
    },
    'feitan': {
      role: TROUPE_MEMBER,
      log: {
        it: 'Sale sul palco dell’asta sotterranea con un altro membro della Brigata e dà il benvenuto agli ospiti; subito dopo vengono uccisi quasi tutti i presenti.',
        en: 'He walks onto the stage of the Underground Auction with another Troupe member and welcomes the guests; straight after, nearly everyone in the hall is killed.',
      },
      status: [{ episode: 43, chapter: 74, value: 'alive' }],
      affiliation: [{ episode: 43, chapter: 74, value: TROUPE }],
    },
    'franklin': {
      role: TROUPE_MEMBER,
      log: {
        it: 'All’asta sotterranea, sul palco con Feitan, uccide quasi tutti gli ospiti con proiettili fatti di aura. Poi gioca a carte con gli altri membri mentre Uborghin affronta da solo le Bestie dell’Ombra.',
        en: 'At the Underground Auction, on the stage with Feitan, he kills nearly all the guests with bullets made of aura. Later he and the other members play cards while Uvogin takes on the Shadow Beasts alone.',
      },
      status: [{ episode: 44, chapter: 76, value: 'alive' }],
      affiliation: [{ episode: 44, chapter: 76, value: TROUPE }],
    },
    'nobunaga': {
      role: TROUPE_MEMBER,
      log: {
        it: 'Con altri membri della Brigata insegue l’auto che porta via Uborghin. Civetta atterra sulla loro auto e la avvolge in un telo: gli altri riescono a uscire, lui, per il posto in cui è seduto, resta intrappolato.',
        en: 'With other Troupe members he chases the car taking Uvogin away. Owl lands on their car and wraps it in a cloth: the others get out, but he, because of where he sits, is trapped inside.',
      },
      // Trapped in chapter 77 and free again among the members who come for
      // Uvogin in chapter 78. Episode 45 tells both, so only a chapter reader
      // can stand between them: the trap is theirs.
      status: [
        { episode: 45, chapter: 77, value: 'captured', source: 'chapter' },
        { episode: 45, chapter: 78, value: 'alive' },
      ],
      affiliation: [{ episode: 45, chapter: 77, value: TROUPE }],
    },
    'phinks': {
      role: TROUPE_MEMBER,
      log: {
        it: 'Con altri membri della Brigata, travestiti da mafiosi, raggiunge il posto dove le guardie del corpo tengono Uborghin, uccide Dalzorne e libera il compagno.',
        en: 'With other Troupe members, disguised as Mafia men, he reaches the place where the bodyguards hold Uvogin, kills Dalzollene and frees his comrade.',
      },
      status: [{ episode: 45, chapter: 78, value: 'alive' }],
      affiliation: [{ episode: 45, chapter: 78, value: TROUPE }],
    },
    'shalnark': {
      role: TROUPE_MEMBER,
      log: {
        it: 'Mentre Uborghin beve birra, cerca la famiglia Nostrad sul sito degli Hunter, così che Uborghin possa scovare l’utilizzatore di catene.',
        en: 'While Uvogin drinks beer, he searches the Hunter website for the Nostrade family, so that Uvogin can track down the chain user.',
      },
      status: [{ episode: 46, chapter: 79, value: 'alive' }],
      affiliation: [{ episode: 46, chapter: 79, value: TROUPE }],
    },
    'light-nostrade': {
      role: { it: 'Padre di Neon', en: 'Neon’s father' },
      log: {
        it: 'Le guardie del corpo scoprono da Squala che è lui ad averle assunte. Al telefono Kurapika gli dice che Dalzorne è probabilmente morto, e lui lo mette a capo delle guardie.',
        en: 'The bodyguards learn from Squala that he is the one who hired them. On the phone Kurapika tells him that Dalzollene is probably dead, and he puts Kurapika in charge of the bodyguards.',
      },
      status: [{ episode: 46, chapter: 79, value: 'alive' }],
      affiliation: [
        {
          episode: 46,
          chapter: 79,
          value: { it: 'Famiglia Nostrad', en: 'Nostrade family' },
        },
      ],
    },
    'owl': {
      role: SHADOW_BEAST,
      log: {
        it: 'Atterra sull’auto dei membri della Brigata che inseguono Uborghin e la avvolge nel suo telo: tutti riescono a uscire tranne Nobunaga, che resta intrappolato. Poi arrivano le altre Bestie dell’Ombra.',
        en: 'He lands on the car of the Troupe members chasing Uvogin and wraps it in his cloth: all get out but Nobunaga, who is trapped inside. Then the other Shadow Beasts arrive.',
      },
      // Episode 45 shows the Troupe holding and torturing him; the manga
      // first shows him held at the hideout in chapter 84 (episode 47). An
      // anime reader meets him captured, a manga reader free until then.
      status: [
        { episode: 45, chapter: 77, value: 'alive', source: 'chapter' },
        { episode: 45, chapter: 77, value: 'captured', source: 'episode' },
        { episode: 47, chapter: 84, value: 'captured', source: 'chapter' },
      ],
      affiliation: [{ episode: 45, chapter: 77, value: SHADOW_BEASTS }],
    },
    'worm': {
      role: SHADOW_BEAST,
      log: {
        it: 'Sbuca da sotto terra vicino alle guardie del corpo dei Nostrad e si presenta. Con altre tre Bestie dell’Ombra va ad affrontare Uborghin.',
        en: 'He comes up out of the ground near the Nostrade bodyguards and introduces himself. With three other Shadow Beasts he goes to take on Uvogin.',
      },
      status: [
        { episode: 43, chapter: 75, value: 'alive' },
        // Badly wounded by Uvogin's blast, he crawls out of the ground and
        // calls for the other Shadow Beasts (chapter 76, episode 44). The
        // death of every Shadow Beast but Owl is told in chapter 78 and
        // episode 45.
        { episode: 45, chapter: 78, value: 'deceased' },
      ],
      affiliation: [{ episode: 43, chapter: 75, value: SHADOW_BEASTS }],
    },
    'rabid-dog': {
      role: SHADOW_BEAST,
      log: {
        it: 'Arriva con altre tre Bestie dell’Ombra per affrontare Uborghin.',
        en: 'He arrives with three other Shadow Beasts to take on Uvogin.',
      },
      status: [
        { episode: 43, chapter: 75, value: 'alive' },
        // Uvogin spits a piece of Leech's skull through his head, chapter 76
        // and episode 44.
        { episode: 44, chapter: 76, value: 'deceased' },
      ],
      affiliation: [{ episode: 43, chapter: 75, value: SHADOW_BEASTS }],
    },
    'porcupine': {
      role: SHADOW_BEAST,
      log: {
        it: 'I suoi peli trattengono il pugno di Uborghin e non lo lasciano andare. Uborghin se ne libera con un urlo.',
        en: 'His hairs catch Uvogin’s fist and hold it. Uvogin frees himself with a scream.',
      },
      // Chapter 76 kills him with Uvogin's scream; episode 44 only knocks him
      // out, "perhaps killing him", and episode 45 kills every Shadow Beast
      // but Owl. An anime reader sees his fate as unknown until then.
      status: [
        { episode: 44, chapter: 76, value: 'unknown', source: 'episode' },
        { episode: 44, chapter: 76, value: 'deceased', source: 'chapter' },
        { episode: 45, chapter: 78, value: 'deceased', source: 'episode' },
      ],
      affiliation: [{ episode: 44, chapter: 76, value: SHADOW_BEASTS }],
    },
    'leech': {
      role: SHADOW_BEAST,
      log: {
        it: 'Riempie di sanguisughe il corpo di Uborghin, paralizzato dal veleno. Uborghin gli affonda i denti nella testa.',
        en: 'He fills Uvogin’s body with leeches while Uvogin is paralyzed by poison. Uvogin bites into his head.',
      },
      status: [{ episode: 44, chapter: 76, value: 'deceased' }],
      affiliation: [{ episode: 44, chapter: 76, value: SHADOW_BEASTS }],
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
    filedHere: ['shizuku'],
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
    filedHere: ['ivlenkov', 'linssen'],
  },
  'cemetery-building': {
    form: 'building',
    region: 'mainland',
    arc: 'yorknew-city-arc',
    landmark: { it: 'L’ingresso sorvegliato', en: 'The guarded entrance' },
    log: {
      it: 'Qui si tiene l’asta sotterranea. Dalzorne manda tre guardie del corpo all’asta e ne mette due all’ingresso principale e due a quello posteriore.',
      en: 'The Underground Auction is held here. Dalzollene sends three bodyguards in to attend it and posts two at the front entrance and two at the back.',
    },
    filedHere: [],
  },
}
