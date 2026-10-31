import { describe, expect, it } from 'vitest'

import type { LocalizedText } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterOf } from './project.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'one-piece')
if (series === undefined) {
  throw new Error('The role tests need the filed One Piece archive')
}
const { archive } = series

const UNITS = ['episode', 'chapter'] as const
type Unit = (typeof UNITS)[number]

/**
 * One change of role: the role before it, the role from it, and its gate in
 * each unit. A change one source alone tells names that unit. A change on
 * the record's own chapter opens it for a chapter reader, who never sees the
 * role before it: the first step is the anime's alone.
 */
interface Change {
  chapter: number
  episode: number
  from: LocalizedText
  only?: Unit
  onRecordChapter?: true
  to: LocalizedText
}

const role = (italian: string, english: string): LocalizedText => ({
  it: italian,
  en: english,
})

const MARINE = role('Soldato della Marina', 'Marine')
const FORMER_WARLORD = role(
  'Ex membro della Flotta dei Sette',
  'Former Warlord',
)
const CROSS_GUILD = role('Membro della Cross Guild', 'Cross Guild member')
const CP9_AGENT = role('Agente del Cipher Pol 9', 'Cipher Pol 9 agent')
const CP0_AGENT = role('Agente del Cipher Pol 0', 'Cipher Pol 0 agent')
const BLACKBEARD = role('Pirata di Barbanera', 'Blackbeard pirate')
const FORMER_LIEUTENANT = role(
  'Ex tenente della Marina',
  'Former Marine lieutenant',
)

// #975: every role a later arc contradicts, with the pair each change is
// pinned at. East Blue, Alabasta and Skypiea first, then parts 2 and 3.
const ROLES: { changes: Change[]; id: string }[] = [
  {
    id: 'koby',
    changes: [
      { episode: 3, chapter: 7, from: role('Mozzo', 'Cabin boy'), to: MARINE },
    ],
  },
  {
    id: 'roronoa-zoro',
    changes: [
      {
        episode: 3,
        chapter: 6,
        from: role(
          'Spadaccino, cacciatore di pirati',
          'Swordsman, pirate hunter',
        ),
        to: role('Spadaccino', 'Swordsman'),
      },
    ],
  },
  {
    id: 'helmeppo',
    changes: [
      {
        episode: 68,
        chapter: 83,
        from: role('Figlio del capitano della base', 'The base captain’s son'),
        to: MARINE,
      },
    ],
  },
  {
    id: 'morgan',
    changes: [
      {
        episode: 3,
        chapter: 7,
        from: role(
          'Capitano della base di Shells Town',
          'Captain of the Shells Town base',
        ),
        to: role(
          'Ex capitano della base di Shells Town',
          'Former captain of the Shells Town base',
        ),
      },
    ],
  },
  {
    id: 'fullbody',
    changes: [
      {
        episode: 45,
        chapter: 96,
        only: 'episode',
        from: role('Tenente della Marina', 'Marine lieutenant'),
        to: FORMER_LIEUTENANT,
      },
      {
        episode: 45,
        chapter: 168,
        only: 'chapter',
        from: role('Tenente della Marina', 'Marine lieutenant'),
        to: FORMER_LIEUTENANT,
      },
    ],
  },
  {
    id: 'gin',
    changes: [
      {
        episode: 27,
        chapter: 59,
        from: role('Naufrago armato', 'Armed castaway'),
        to: role(
          'Comandante in battaglia dei Pirati di Creek',
          'Battle commander of the Krieg Pirates',
        ),
      },
    ],
  },
  {
    id: 'hatchan',
    changes: [
      {
        episode: 386,
        chapter: 491,
        from: role('Membro dei Pirati di Arlong', 'Arlong Pirates crewman'),
        to: role('Venditore di takoyaki', 'Takoyaki seller'),
      },
    ],
  },
  {
    id: 'smoker',
    changes: [
      {
        episode: 324,
        chapter: 439,
        from: role('Capitano della Marina', 'Marine captain'),
        to: role('Commodoro della Marina', 'Marine commodore'),
      },
      {
        episode: 572,
        chapter: 652,
        from: role('Commodoro della Marina', 'Marine commodore'),
        to: role('Viceammiraglio della Marina', 'Marine vice admiral'),
      },
    ],
  },
  {
    id: 'tashigi',
    changes: [
      {
        episode: 324,
        chapter: 439,
        from: role('Sergente della Marina', 'Marine sergeant'),
        to: role('Guardiamarina della Marina', 'Marine ensign'),
      },
      {
        episode: 572,
        chapter: 652,
        from: role('Guardiamarina della Marina', 'Marine ensign'),
        to: role('Capitano della Marina', 'Marine captain'),
      },
    ],
  },
  {
    id: 'mr-9',
    changes: [
      {
        episode: 64,
        chapter: 107,
        onRecordChapter: true,
        from: role('Sedicente re', 'Self-styled king'),
        to: role('Agente di Baroque Works', 'Baroque Works agent'),
      },
    ],
  },
  {
    id: 'igaram',
    changes: [
      {
        episode: 67,
        chapter: 114,
        onRecordChapter: true,
        from: role('Capo di Whisky Peak', 'Head of Whisky Peak'),
        to: role(
          'Capitano della guardia reale di Alabasta',
          'Captain of Alabasta’s royal guard',
        ),
      },
    ],
  },
  {
    id: 'wapol',
    changes: [
      {
        episode: 80,
        chapter: 133,
        onRecordChapter: true,
        from: role('Capitano del Bliking', 'Captain of the Bliking'),
        to: role(
          'Re di Drum che ha abbandonato il regno',
          'King of Drum who abandoned his country',
        ),
      },
      {
        episode: 89,
        chapter: 151,
        from: role(
          'Re di Drum che ha abbandonato il regno',
          'King of Drum who abandoned his country',
        ),
        to: role('Ex re di Drum', 'Former king of Drum'),
      },
      {
        episode: 885,
        chapter: 906,
        from: role('Ex re di Drum', 'Former king of Drum'),
        to: role(
          'Re del Regno di Black Drum',
          'King of the Black Drum Kingdom',
        ),
      },
    ],
  },
  {
    id: 'dalton',
    changes: [
      {
        episode: 324,
        chapter: 440,
        from: role(
          'Capitano della guardia dell’isola di Drum',
          'Captain of Drum Island’s guard',
        ),
        to: role('Re dell’isola di Drum', 'King of Drum Island'),
      },
    ],
  },
  {
    id: 'crocodile',
    changes: [
      {
        episode: 127,
        chapter: 211,
        from: role(
          'Membro della Flotta dei Sette',
          'One of the Seven Warlords',
        ),
        to: FORMER_WARLORD,
      },
      { episode: 1083, chapter: 1056, from: FORMER_WARLORD, to: CROSS_GUILD },
    ],
  },
  {
    id: 'kohza',
    changes: [
      {
        episode: 127,
        chapter: 211,
        from: role('Capo dell’esercito ribelle', 'Leader of the rebel army'),
        to: role(
          'Ex capo dell’esercito ribelle',
          'Former leader of the rebel army',
        ),
      },
    ],
  },
  {
    id: 'mr-3',
    changes: [
      {
        episode: 517,
        chapter: 593,
        from: role('Agente di Baroque Works', 'Baroque Works agent'),
        to: role('Membro della ciurma di Bagy', 'Member of Buggy’s crew'),
      },
    ],
  },
  {
    id: 'mr-1',
    changes: [
      {
        episode: 1086,
        chapter: 1058,
        from: role(
          'Agente ufficiale di Baroque Works',
          'Baroque Works officer agent',
        ),
        to: CROSS_GUILD,
      },
    ],
  },
  {
    id: 'bellamy',
    changes: [
      {
        episode: 635,
        chapter: 706,
        from: role(
          'Capitano dei Pirati di Bellamy',
          'Captain of the Bellamy Pirates',
        ),
        to: role(
          'Ex capitano dei Pirati di Bellamy',
          'Former captain of the Bellamy Pirates',
        ),
      },
    ],
  },
  {
    id: 'bartholomew-kuma',
    changes: [
      {
        episode: 957,
        chapter: 956,
        from: role(
          'Membro della Flotta dei Sette',
          'One of the Seven Warlords',
        ),
        to: FORMER_WARLORD,
      },
    ],
  },
  {
    id: 'sengoku',
    changes: [
      {
        episode: 511,
        chapter: 594,
        from: role(
          'Grand’ammiraglio della Marina',
          'Fleet admiral of the Marines',
        ),
        to: role(
          'Ex grand’ammiraglio della Marina',
          'Former fleet admiral of the Marines',
        ),
      },
      {
        episode: 740,
        chapter: 796,
        from: role(
          'Ex grand’ammiraglio della Marina',
          'Former fleet admiral of the Marines',
        ),
        to: role(
          'Ispettore generale della Marina',
          'Inspector general of the Marines',
        ),
      },
    ],
  },
  {
    id: 'donquixote-doflamingo',
    changes: [
      {
        episode: 746,
        chapter: 801,
        from: role(
          'Membro della Flotta dei Sette',
          'One of the Seven Warlords',
        ),
        to: FORMER_WARLORD,
      },
    ],
  },
  {
    id: 'marco',
    changes: [
      {
        episode: 773,
        chapter: 820,
        from: role(
          'Comandante della prima divisione',
          'First division commander',
        ),
        to: role(
          'Ex capo dei superstiti dei Pirati di Barbabianca',
          'Former leader of the Whitebeard Pirates’ remnants',
        ),
      },
      {
        episode: 958,
        chapter: 909,
        from: role(
          'Ex capo dei superstiti dei Pirati di Barbabianca',
          'Former leader of the Whitebeard Pirates’ remnants',
        ),
        to: role('Medico dell’isola di Sphinx', 'Doctor of Sphinx Island'),
      },
    ],
  },
  {
    id: 'gan-fall',
    changes: [
      {
        episode: 195,
        chapter: 302,
        from: role('Cavaliere del Cielo', 'Knight of the Sky'),
        to: role('Dio di Skypiea', 'God of Skypiea'),
      },
    ],
  },
  {
    id: 'enel',
    changes: [
      {
        episode: 193,
        chapter: 300,
        from: role('Dio di Skypiea', 'God of Skypiea'),
        to: role('Ex dio di Skypiea', 'Former god of Skypiea'),
      },
    ],
  },
  // #975 part 2: Water Seven, Thriller Bark, Summit War and Fish-Man Island.
  {
    id: 'kuzan',
    changes: [
      {
        episode: 570,
        chapter: 650,
        from: role('Ammiraglio della Marina', 'Marine admiral'),
        to: role('Ex ammiraglio della Marina', 'Former Marine admiral'),
      },
      {
        episode: 736,
        chapter: 793,
        from: role('Ex ammiraglio della Marina', 'Former Marine admiral'),
        to: BLACKBEARD,
      },
    ],
  },
  {
    id: 'iceburg',
    changes: [
      {
        episode: 231,
        chapter: 327,
        onRecordChapter: true,
        from: role('Cittadino di Water Seven', 'Citizen of Water Seven'),
        to: role('Sindaco di Water Seven', 'Mayor of Water Seven'),
      },
    ],
  },
  {
    id: 'kaku',
    changes: [
      {
        episode: 244,
        chapter: 345,
        from: role('Caposquadra del Dock 1', 'Foreman of Dock One'),
        to: CP9_AGENT,
      },
      { episode: 886, chapter: 907, from: CP9_AGENT, to: CP0_AGENT },
    ],
  },
  {
    id: 'rob-lucci',
    changes: [
      {
        episode: 244,
        chapter: 345,
        from: role('Carpentiere della Galley-La', 'Galley-La shipwright'),
        to: CP9_AGENT,
      },
      { episode: 746, chapter: 801, from: CP9_AGENT, to: CP0_AGENT },
    ],
  },
  {
    id: 'kalifa',
    changes: [
      {
        episode: 231,
        chapter: 327,
        onRecordChapter: true,
        from: role('Cittadina di Water Seven', 'Citizen of Water Seven'),
        to: role('Segretaria di Iceburg', 'Iceburg’s secretary'),
      },
      {
        episode: 244,
        chapter: 345,
        from: role('Segretaria di Iceburg', 'Iceburg’s secretary'),
        to: CP9_AGENT,
      },
    ],
  },
  {
    id: 'blueno',
    changes: [
      {
        episode: 244,
        chapter: 345,
        from: role('Barista', 'Barkeeper'),
        to: CP9_AGENT,
      },
    ],
  },
  {
    id: 'franky',
    changes: [
      {
        episode: 322,
        chapter: 437,
        from: role('Smantellatore di navi', 'Ship dismantler'),
        to: role('Carpentiere', 'Shipwright'),
      },
    ],
  },
  {
    id: 'spandam',
    changes: [
      {
        episode: 250,
        chapter: 360,
        onRecordChapter: true,
        from: role('Agente del Cipher Pol N. 5', 'Cipher Pol No. 5 agent'),
        to: role('Capo del Cipher Pol 9', 'Chief of Cipher Pol 9'),
      },
      {
        episode: 746,
        chapter: 801,
        from: role('Capo del Cipher Pol 9', 'Chief of Cipher Pol 9'),
        to: CP0_AGENT,
      },
    ],
  },
  {
    id: 'nero',
    changes: [
      {
        episode: 262,
        chapter: 373,
        from: CP9_AGENT,
        to: role('Ex agente del Cipher Pol 9', 'Former Cipher Pol 9 agent'),
      },
    ],
  },
  {
    id: 't-bone',
    changes: [
      {
        episode: 1116,
        chapter: 1082,
        from: role('Capitano della Marina', 'Marine captain'),
        to: role('Viceammiraglio della Marina', 'Marine vice admiral'),
      },
    ],
  },
  {
    id: 'oimo-and-kashi',
    changes: [
      {
        episode: 271,
        chapter: 385,
        onRecordChapter: true,
        from: role('Guardiani del cancello', 'Gatekeepers'),
        to: role(
          'Ex guardiani del cancello di Enies Lobby',
          'Former gatekeepers of Enies Lobby',
        ),
      },
    ],
  },
  {
    id: 'jaguar-d-saul',
    changes: [
      {
        episode: 1164,
        chapter: 1133,
        from: role('Gigante naufragato a Ohara', 'Giant castaway on Ohara'),
        to: role('Insegnante di storia a Elbaf', 'History teacher on Elbaph'),
      },
    ],
  },
  {
    id: 'lola',
    changes: [
      {
        episode: 370,
        chapter: 476,
        from: role('Sposa zombie', 'Zombie bride'),
        to: role(
          'Capitano dei Pirati di Rolling',
          'Captain of the Rolling Pirates',
        ),
      },
    ],
  },
  {
    id: 'jinbe',
    changes: [
      {
        episode: 466,
        chapter: 557,
        from: role(
          'Uomo-pesce della Flotta dei Sette',
          'Fish-man of the Seven Warlords',
        ),
        to: role(
          'Uomo-pesce, ex membro della Flotta dei Sette',
          'Fish-man, former Warlord',
        ),
      },
      {
        episode: 980,
        chapter: 976,
        from: role(
          'Uomo-pesce, ex membro della Flotta dei Sette',
          'Fish-man, former Warlord',
        ),
        to: role('Timoniere', 'Helmsman'),
      },
    ],
  },
  {
    id: 'camie',
    changes: [
      {
        episode: 529,
        chapter: 608,
        from: role('Sirena del Takoyaki 8', 'Mermaid of Takoyaki 8'),
        to: role('Cameriera del Caffè delle Sirene', 'Mermaid Café waitress'),
      },
    ],
  },
  {
    id: 'x-drake',
    changes: [
      {
        episode: 957,
        chapter: 956,
        from: role(
          'Capitano dei Pirati di Drake',
          'Captain of the Drake Pirates',
        ),
        to: role('Capitano dello SWORD della Marina', 'Marine SWORD captain'),
      },
    ],
  },
  {
    id: 'emporio-ivankov',
    changes: [
      {
        episode: 451,
        chapter: 548,
        from: role('Sovrano del livello 5.5', 'Ruler of level 5.5'),
        to: role(
          'Comandante dell’Armata Rivoluzionaria',
          'Revolutionary Army commander',
        ),
      },
    ],
  },
  {
    id: 'shiryu',
    changes: [
      {
        episode: 452,
        chapter: 549,
        from: role('Ex capo dei secondini', 'Former head jailer'),
        to: BLACKBEARD,
      },
    ],
  },
  {
    id: 'sakazuki',
    changes: [
      {
        episode: 570,
        chapter: 650,
        from: role('Ammiraglio della Marina', 'Marine admiral'),
        to: role(
          'Grand’ammiraglio della Marina',
          'Fleet admiral of the Marines',
        ),
      },
    ],
  },
  {
    id: 'wadatsumi',
    changes: [
      {
        episode: 790,
        chapter: 830,
        from: role('Il gigante di Van Der Decken', 'Vander Decken’s giant'),
        to: role('Membro dei Pirati del Sole', 'Sun Pirates member'),
      },
    ],
  },
  {
    id: 'aladine',
    changes: [
      {
        episode: 790,
        chapter: 830,
        from: role('Medico di bordo', 'Ship’s doctor'),
        to: role(
          'Vicecapitano dei Pirati del Sole',
          'Vice captain of the Sun Pirates',
        ),
      },
    ],
  },
  // #975 part 3: Dressrosa, Whole Cake, Wano and Egghead. Elbaph was audited
  // too: none of its roles changes, so it has no rows.
  {
    id: 'koala',
    changes: [
      {
        episode: 663,
        chapter: 731,
        from: role(
          'Bambina liberata dalla schiavitù',
          'Child freed from slavery',
        ),
        to: role(
          'Membro dell’Armata Rivoluzionaria',
          'Revolutionary Army member',
        ),
      },
    ],
  },
  {
    id: 'monet',
    changes: [
      {
        episode: 599,
        chapter: 673,
        from: role('Assistente del laboratorio', 'Laboratory assistant'),
        to: role('Agente di Do Flamingo', 'Doflamingo’s agent'),
      },
    ],
  },
  {
    id: 'vergo',
    changes: [
      {
        episode: 599,
        chapter: 673,
        from: role('Vecchia conoscenza di Law', 'Law’s old acquaintance'),
        to: role(
          'Viceammiraglio della G-5, uomo di Do Flamingo',
          'G-5 vice admiral, Doflamingo’s man',
        ),
      },
    ],
  },
  {
    id: 'momonosuke',
    changes: [
      {
        episode: 768,
        chapter: 817,
        from: role(
          'Bambino trasformato in drago',
          'Child turned into a dragon',
        ),
        to: role('Erede della famiglia Kozuki', 'Heir of the Kozuki family'),
      },
      {
        episode: 1078,
        chapter: 1051,
        from: role('Erede della famiglia Kozuki', 'Heir of the Kozuki family'),
        to: role('Shogun di Wano', 'Shogun of Wano'),
      },
    ],
  },
  {
    id: 'baby-5',
    changes: [
      {
        episode: 710,
        chapter: 771,
        from: role('Sottoposta di Do Flamingo', 'Doflamingo’s subordinate'),
        to: role('Al fianco di Sai', 'At Sai’s side'),
      },
    ],
  },
  {
    id: 'riku-doldo-iii',
    changes: [
      {
        episode: 741,
        chapter: 796,
        from: role('Ex re di Dressrosa', 'Former king of Dressrosa'),
        to: role('Re di Dressrosa', 'King of Dressrosa'),
      },
    ],
  },
  {
    id: 'sai',
    changes: [
      {
        episode: 645,
        chapter: 715,
        from: role(
          'Giovane della famiglia Chinjao',
          'Young man of the Chinjao family',
        ),
        to: role(
          'Tredicesimo capo della Flotta Happo',
          'Thirteenth leader of the Happo Navy',
        ),
      },
    ],
  },
  {
    id: 'hajrudin',
    changes: [
      {
        episode: 746,
        chapter: 800,
        from: role('Mercenario gigante', 'Giant mercenary'),
        to: role(
          'Capitano dei Nuovi Pirati Guerrieri Giganti',
          'Captain of the New Giant Warrior Pirates',
        ),
      },
    ],
  },
  {
    id: 'viola',
    changes: [
      {
        episode: 660,
        chapter: 728,
        from: role('Ballerina e informatrice', 'Dancer and informant'),
        to: role('Principessa di Dressrosa', 'Princess of Dressrosa'),
      },
    ],
  },
  {
    id: 'kyros',
    changes: [
      {
        episode: 677,
        chapter: 743,
        from: role(
          'Soldatino di legno di Dressrosa',
          'Wooden soldier of Dressrosa',
        ),
        to: role(
          'Ex comandante dell’esercito di Dressrosa',
          'Former commander of Dressrosa’s army',
        ),
      },
    ],
  },
  {
    id: 'kanjuro',
    changes: [
      {
        episode: 977,
        chapter: 974,
        from: role('Samurai di Wano', 'Samurai of Wano'),
        to: role('Spia di Orochi', 'Orochi’s spy'),
      },
    ],
  },
  {
    id: 'kaido',
    changes: [
      {
        episode: 1080,
        chapter: 1053,
        from: role('Imperatore del Nuovo Mondo', 'Emperor of the New World'),
        to: role('Ex Imperatore', 'Former Emperor'),
      },
    ],
  },
  {
    id: 'carrot',
    changes: [
      {
        episode: 1083,
        chapter: 1056,
        from: role('Mink di Zou', 'Mink of Zou'),
        to: role('Sovrana del Ducato di Mokomo', 'Ruler of the Mokomo Dukedom'),
      },
    ],
  },
  {
    id: 'inuarashi',
    changes: [
      {
        episode: 1083,
        chapter: 1056,
        from: role(
          'Sovrano del giorno di Mokomo',
          'Ruler of the day of Mokomo',
        ),
        to: role(
          'Ex sovrano del giorno di Mokomo',
          'Former ruler of the day of Mokomo',
        ),
      },
    ],
  },
  {
    id: 'nekomamushi',
    changes: [
      {
        episode: 1083,
        chapter: 1056,
        from: role(
          'Sovrano della notte di Mokomo',
          'Ruler of the night of Mokomo',
        ),
        to: role(
          'Ex sovrano della notte di Mokomo',
          'Former ruler of the night of Mokomo',
        ),
      },
    ],
  },
  {
    id: 'charlotte-linlin',
    changes: [
      {
        episode: 1080,
        chapter: 1053,
        from: role('Imperatore di Totto Land', 'Emperor of Totto Land'),
        to: role('Ex Imperatore', 'Former Emperor'),
      },
    ],
  },
  {
    id: 'stussy',
    changes: [
      {
        episode: 841,
        chapter: 871,
        from: role('Pezzo grosso della malavita', 'Underworld boss'),
        to: role('Agente del Cipher Pol 0', 'Cipher Pol 0 agent'),
      },
      {
        episode: 1105,
        chapter: 1073,
        from: role('Agente del Cipher Pol 0', 'Cipher Pol 0 agent'),
        to: role('Ex agente del Cipher Pol 0', 'Former Cipher Pol 0 agent'),
      },
    ],
  },
  {
    id: 'sheepshead',
    changes: [
      {
        episode: 757,
        chapter: 808,
        from: role(
          'Pirata a capo di una squadra di ricerca',
          'Pirate leading a search party',
        ),
        to: role(
          'Headliner dei Pirati delle Cento Bestie',
          'Beasts Pirates headliner',
        ),
      },
    ],
  },
  {
    id: 'edward-weevil',
    changes: [
      {
        episode: 957,
        chapter: 956,
        from: role(
          'Membro della Flotta dei Sette',
          'One of the Seven Warlords',
        ),
        to: role('Ex membro della Flotta dei Sette', 'Former Warlord'),
      },
    ],
  },
  {
    id: 'zeus',
    changes: [
      {
        episode: 865,
        chapter: 890,
        from: role(
          'Homie nuvola del tuono di Big Mom',
          'Big Mom’s thundercloud homie',
        ),
        to: role(
          'Nuvola del tuono al servizio di Nami',
          'Thundercloud serving Nami',
        ),
      },
      {
        episode: 994,
        chapter: 985,
        from: role(
          'Nuvola del tuono al servizio di Nami',
          'Thundercloud serving Nami',
        ),
        to: role(
          'Homie nuvola del tuono di Big Mom',
          'Big Mom’s thundercloud homie',
        ),
      },
      {
        episode: 1034,
        chapter: 1013,
        from: role(
          'Homie nuvola del tuono di Big Mom',
          'Big Mom’s thundercloud homie',
        ),
        to: role(
          'Nuvola del tuono scartata da Big Mom',
          'Thundercloud cast off by Big Mom',
        ),
      },
      {
        episode: 1040,
        chapter: 1018,
        from: role(
          'Nuvola del tuono scartata da Big Mom',
          'Thundercloud cast off by Big Mom',
        ),
        to: role('Compagno di Nami', 'Nami’s partner'),
      },
    ],
  },
  {
    id: 'kiku',
    changes: [
      {
        episode: 909,
        chapter: 919,
        from: role('Cameriera della casa da tè', 'Tea house waitress'),
        to: role(
          'Compagna di Kin’emon giunta da vent’anni prima',
          'Kin’emon’s companion from twenty years ago',
        ),
      },
    ],
  },
  {
    id: 'ashura-doji',
    changes: [
      {
        episode: 936,
        chapter: 939,
        from: role('Capo dei furfanti di Kuri', 'Leader of the Kuri ruffians'),
        to: role('Uno dei Nove Foderi Rossi', 'One of the Nine Red Scabbards'),
      },
    ],
  },
  {
    id: 'kawamatsu',
    changes: [
      {
        episode: 948,
        chapter: 948,
        from: role(
          'Prigioniero di Udon, uno dei Nove Foderi Rossi',
          'Prisoner of Udon, one of the Nine Red Scabbards',
        ),
        to: role('Uno dei Nove Foderi Rossi', 'One of the Nine Red Scabbards'),
      },
    ],
  },
  {
    id: 'speed',
    changes: [
      {
        episode: 906,
        chapter: 918,
        from: role(
          'Headliner dei Pirati delle Cento Bestie',
          'Beasts Pirates headliner',
        ),
        to: role('Al fianco di O-Tama', 'At Tama’s side'),
      },
    ],
  },
  {
    id: 'daikoku',
    changes: [
      {
        episode: 995,
        chapter: 986,
        from: role(
          'Ninja dell’Oniwabanshu di Orochi',
          'Orochi Oniwabanshu ninja',
        ),
        to: role('Ninja dei Pirati delle Cento Bestie', 'Beasts Pirates ninja'),
      },
    ],
  },
  {
    id: 'raijin',
    changes: [
      {
        episode: 995,
        chapter: 986,
        from: role(
          'Ninja dell’Oniwabanshu di Orochi',
          'Orochi Oniwabanshu ninja',
        ),
        to: role('Ninja dei Pirati delle Cento Bestie', 'Beasts Pirates ninja'),
      },
    ],
  },
  {
    id: 'fujin',
    changes: [
      {
        episode: 995,
        chapter: 986,
        from: role(
          'Ninja dell’Oniwabanshu di Orochi',
          'Orochi Oniwabanshu ninja',
        ),
        to: role('Ninja dei Pirati delle Cento Bestie', 'Beasts Pirates ninja'),
      },
    ],
  },
  {
    id: 'ginny',
    changes: [
      {
        episode: 1130,
        chapter: 1096,
        from: role('Schiava a God Valley', 'Slave at God Valley'),
        to: role(
          'Ex schiava dei Draghi Celesti',
          'Former slave of the Celestial Dragons',
        ),
      },
      {
        episode: 1131,
        chapter: 1097,
        from: role(
          'Ex schiava dei Draghi Celesti',
          'Former slave of the Celestial Dragons',
        ),
        to: role(
          'Capitano dell’armata dell’Est dei rivoluzionari',
          'East Army captain of the Revolutionary Army',
        ),
      },
    ],
  },
  {
    id: 'figarland-garling',
    changes: [
      {
        episode: 1155,
        chapter: 1125,
        from: role(
          'Comandante supremo dei Cavalieri di Dio',
          'Supreme Commander of the Knights of God',
        ),
        to: role('Uno dei Cinque Astri di Saggezza', 'One of the Five Elders'),
      },
    ],
  },
  {
    id: 'bekori',
    changes: [
      {
        episode: 1133,
        chapter: 1099,
        from: role('Re del Regno di Sorbet', 'King of the Sorbet Kingdom'),
        to: role(
          'Re deposto del Regno di Sorbet',
          'Deposed king of the Sorbet Kingdom',
        ),
      },
    ],
  },
  {
    id: 'alpha',
    changes: [
      {
        episode: 1135,
        chapter: 1101,
        from: role('Infermiera di Bonney', 'Bonney’s nurse'),
        to: role('Agente del Governo Mondiale', 'World Government agent'),
      },
    ],
  },
]

function bookmark(mode: Unit, count: number): Bookmark {
  return mode === 'episode' ?
      { mode, episode: count }
    : { mode, chapter: count }
}

function roleAt(id: string, at: Bookmark, locale: Locale): unknown {
  const entity = archive.getEntity(id)
  if (entity === undefined) {
    throw new Error(`Missing One Piece record: ${id}`)
  }

  return characterOf(entity, readerFor(archive, at, locale)).role
}

interface Case {
  from?: string
  gate: number
  id: string
  locale: Locale
  to: string
  unit: Unit
}

/** A change in each unit that tells it, in both locales. */
function casesOf(id: string, change: Change): Case[] {
  return UNITS.filter((unit) => (change.only ?? unit) === unit).flatMap(
    (unit) =>
      LOCALES.map((locale) => ({
        ...((unit === 'episode' || change.onRecordChapter === undefined) && {
          from: change.from[locale],
        }),
        gate: unit === 'episode' ? change.episode : change.chapter,
        id,
        locale,
        to: change.to[locale],
        unit,
      })),
  )
}

const CASES = ROLES.flatMap(({ changes, id }) =>
  changes.flatMap((change) => casesOf(id, change)),
)

describe('the One Piece roles a later arc changes', () => {
  it.each(CASES.filter(({ from }) => from !== undefined))(
    'dates $id’s role at $unit $gate ($locale)',
    ({ from, gate, id, locale, to, unit }) => {
      expect(roleAt(id, bookmark(unit, gate - 1), locale)).toBe(from)
      expect(roleAt(id, bookmark(unit, gate), locale)).toBe(to)
    },
  )

  it.each(CASES.filter(({ from }) => from === undefined))(
    'opens $id on the later role at chapter $gate ($locale)',
    ({ gate, id, locale, to }) => {
      expect(roleAt(id, bookmark('chapter', gate), locale)).toBe(to)
    },
  )

  it('keeps a change one source tells from the other source’s readers', () => {
    // Fullbody: the anime demotes him in episode 45, which reaches chapter
    // 96; a chapter reader past it waits for the cover of chapter 168.
    expect(roleAt('fullbody', bookmark('chapter', 100), 'en')).toBe(
      'Marine lieutenant',
    )
  })
})
