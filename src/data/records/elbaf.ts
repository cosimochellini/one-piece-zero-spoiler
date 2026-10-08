import type { LocalizedText } from '~/data/types'

import type { Saga } from './saga'

/**
 * The Elbaph arc, episodes 1156 to 1179 as aired: the giants’ homeland at
 * last, a world-sized tree with a school in its branches, a chained prince
 * at its roots and the Knights of God on their way in.
 */

// The origin the archive gives every giant, Dorry and Brogy first.
const ELBAF = { it: 'Elbaf', en: 'Elbaph' }

const KNIGHTS = { it: 'Cavalieri di Dio', en: 'Knights of God' }

const KNIGHT_ROLE = { it: 'Cavaliere di Dio', en: 'Knight of God' }

function NEW_GIANTS(it: string, en: string): LocalizedText {
  return {
    it: `Nuovi Pirati Guerrieri Giganti, ${it}`,
    en: `New Giant Warrior Pirates, ${en}`,
  }
}

function WALRUS_SCHOOL(it: string, en: string): LocalizedText {
  return { it: `Scuola Walrus, ${it}`, en: `Walrus School, ${en}` }
}

export const elbaf: Saga = {
  entries: [
    // Elbaph, not Elbaf, in English: the anime (Crunchyroll), VIZ and the
    // wiki all spell it with the ph. The Italian edition writes Elbaf, which
    // is what the Italian names here and in the ELBAF origin above keep.
    {
      id: 'elbaf',
      kind: 'arc',
      revealedAtEpisode: 1156,
      revealedAtChapter: 1126,
      // The giants’ homeland from 71, where Brogy calls himself its strongest warrior.
      nameSaidAt: 71,
      name: { it: 'Elbaf', en: 'Elbaph' },
      summary: {
        it: 'La ciurma riprende il mare insieme ai giganti dei Pirati Guerrieri Giganti, diretta verso Elbaf, la patria dei guerrieri di cui parlavano Dori e Brogi.',
        en: 'The crew sails on with the giants of the Giant Warrior Pirates, bound for Elbaph, the warriors’ homeland Dorry and Brogy spoke of long ago.',
      },
      visual: { art: 'elbaf', tint: 'green' },
    },
    {
      id: 'iscat',
      kind: 'character',
      revealedAtEpisode: 1158,
      revealedAtChapter: 1128,
      name: { it: 'Iskat', en: 'Iscat' },
      summary: {
        it: 'Un gatto enorme, con corona e mantello, che regna sul Castello di Bigstein nella Terra degli Dei, un regno di mattoncini dove ogni animale è un gigante.',
        en: 'An enormous crowned and robed cat reigning over Bigstein Castle in the Land of Gods, a block-built kingdom where every animal is a giant.',
      },
      visual: { art: 'iscat', tint: 'orange' },
    },
    {
      id: 'road',
      kind: 'character',
      revealedAtEpisode: 1159,
      revealedAtChapter: 1129,
      // "Road" is in "Road Poneglyph" long before the teacher is met.
      commonWord: true,
      name: { it: 'Lord', en: 'Road' },
      summary: {
        it: 'Il Dio del Sole della Terra degli Dei si rivela un gigante in carne e ossa, navigatore della ciurma di Hajrudin, chino su un plastico che finge di governare.',
        en: 'The Sun God of the Land of Gods turns out to be a flesh-and-blood giant, navigator of Hajrudin’s crew, bent over a diorama he pretends to rule.',
      },
      visual: { art: 'road', tint: 'yellow' },
    },
    {
      id: 'elbaf-island',
      kind: 'place',
      revealedAtEpisode: 1160,
      revealedAtChapter: 1130,
      // The giants’ homeland from 71, where Brogy calls himself its strongest warrior.
      nameSaidAt: 71,
      name: { it: 'Elbaf', en: 'Elbaph' },
      summary: {
        it: 'L’isola dei giganti nel Nuovo Mondo, dominata da un albero così alto che la chioma sparisce tra le nuvole e le navi sembrano giocattoli ai suoi piedi.',
        en: 'The giants’ island in the New World, ruled by a tree so tall its crown vanishes into the clouds and ships look like toys at its feet.',
      },
      visual: { art: 'elbaf-island', tint: 'teal' },
    },
    {
      id: 'warland',
      kind: 'place',
      revealedAtEpisode: 1160,
      revealedAtChapter: 1130,
      name: { it: 'Warland', en: 'Warland' },
      summary: {
        it: 'Il regno guerriero dei giganti su Elbaf, che Loki chiama la terra da cui nascono le guerre.',
        en: 'The giants’ warrior kingdom on Elbaph, which Loki calls the land where wars come from.',
      },
      visual: { art: 'warland', tint: 'red' },
    },
    {
      id: 'loki',
      kind: 'character',
      revealedAtEpisode: 1160,
      revealedAtChapter: 1130,
      name: { it: 'Loki', en: 'Loki' },
      summary: {
        it: 'Un principe gigante incatenato e bendato ai piedi di un albero colossale, nel gelo sotto il villaggio, che si proclama il Dio del Sole che porterà la fine del mondo.',
        en: 'A giant prince chained and blindfolded at the foot of a colossal tree in the frozen dark below, who names himself the Sun God who will bring the world’s end.',
      },
      visual: { art: 'loki', tint: 'wine' },
    },
    {
      id: 'goldberg',
      kind: 'character',
      // Seen with Gerd at 1160, but the crew they sail with is only named at
      // 1161, so he is filed where his summary is first true.
      revealedAtEpisode: 1161,
      revealedAtChapter: 1131,
      name: { it: 'Goldberg', en: 'Goldberg' },
      summary: {
        it: 'Il cuoco dei Nuovi Pirati Guerrieri Giganti, un gigante che attraversa il ponte di corda insieme a Gerd con l’ordine di arrestare gli intrusi.',
        en: 'The cook of the New Giant Warrior Pirates, a giant crossing the rope bridge with Gerd under orders to arrest any intruder.',
      },
      visual: { art: 'goldberg', tint: 'ocher' },
    },
    {
      id: 'sun-world',
      kind: 'place',
      revealedAtEpisode: 1162,
      revealedAtChapter: 1132,
      name: { it: 'Mondo del Sole', en: 'Sun World' },
      summary: {
        it: 'Il piano di mezzo di Elbaf, in alto sull’albero colossale dell’isola, dove vivono i giganti e sotto il quale si apre il Mondo Sotterraneo.',
        en: 'Elbaph’s middle layer, high up the island’s colossal tree, where the giants make their homes and beneath which the Underworld opens.',
      },
      visual: { art: 'sun-world', tint: 'yellow' },
    },
    {
      id: 'ange',
      kind: 'character',
      revealedAtEpisode: 1164,
      revealedAtChapter: 1134,
      name: { it: 'Ange', en: 'Ange' },
      summary: {
        it: 'Una giovane insegnante della Scuola Walrus, una pila di libri tra le braccia, assistente di Sauro, che insegna le lingue e tiene la biblioteca.',
        en: 'A young teacher at the Walrus School, books stacked in her arms, Saul’s assistant, who teaches languages and keeps the library.',
      },
      visual: { art: 'ange', tint: 'pink' },
    },
    {
      id: 'ripley',
      kind: 'character',
      revealedAtEpisode: 1164,
      revealedAtChapter: 1134,
      name: { it: 'Ripley', en: 'Ripley' },
      summary: {
        it: 'Una gigante che insegna biologia alla Scuola Walrus, una delle guerriere dell’ultima generazione di Elbaf, che spiega alla ciurma come il defunto re ha cambiato i giganti.',
        en: 'A giantess teaching biology at the Walrus School, one of Elbaph’s last generation of warriors, who tells the crew how the late king changed the giants.',
      },
      visual: { art: 'ripley', tint: 'vermilion' },
    },
    {
      id: 'stansen',
      kind: 'character',
      revealedAtEpisode: 1165,
      revealedAtChapter: 1135,
      name: { it: 'Stansen', en: 'Stansen' },
      summary: {
        it: 'Un gigante della ciurma di Hajrudin, i Nuovi Pirati Guerrieri Giganti, che Rufy ricorda in catene alla Casa d’Aste di Sabaody, oggi libero.',
        en: 'A giant of Hajrudin’s crew, the New Giant Warrior Pirates, whom Luffy remembers in chains at the Sabaody Human Auctioning House, free now.',
      },
      visual: { art: 'stansen', tint: 'sand' },
    },
    {
      id: 'colon',
      kind: 'character',
      revealedAtEpisode: 1165,
      revealedAtChapter: 1135,
      name: { it: 'Collon', en: 'Colon' },
      summary: {
        it: 'Un ragazzo mezzo gigante, il teppista della Scuola Walrus, che attacca briga mentre i compagni rifiutano la violenza e vuole a tutti i costi diventare un guerriero.',
        en: 'A half-giant boy, the Walrus School’s delinquent, who picks fights while his classmates shun violence and wants more than anything to become a warrior.',
      },
      visual: { art: 'colon', tint: 'acid' },
    },
    {
      id: 'biblo',
      kind: 'character',
      revealedAtEpisode: 1165,
      revealedAtChapter: 1135,
      name: { it: 'Bibelot', en: 'Biblo' },
      summary: {
        it: 'Un gufo antichissimo, bibliotecario capo della Biblioteca del Gufo, che fa crescere i libri fino alla misura dei giganti col potere di un frutto del diavolo.',
        en: 'An ancient owl, chief librarian of the Owl Library, who makes books grow to the size giants read them at with the power of a devil fruit.',
      },
      visual: { art: 'biblo', tint: 'lavender' },
    },
    {
      id: 'manmayer-gunko',
      kind: 'character',
      revealedAtEpisode: 1166,
      // Chapter rounded up to the one that names this knight’s fruit.
      revealedAtChapter: 1137,
      name: { it: 'Manmayer Gunko', en: 'Manmayer Gunko' },
      summary: {
        it: 'Una donna incappucciata sbarcata su Elbaf accanto a un altro intruso incappucciato, che ferisce le guardie con strisce di stoffa simili a bende ed è venuta come Cavaliere di Dio a reclutare Loki.',
        en: 'A hooded woman who lands on Elbaph beside another hooded intruder, cuts down the guards with bandage-like strips of cloth, and has come as a Knight of God to recruit Loki.',
      },
      visual: { art: 'manmayer-gunko', tint: 'violet' },
    },
    {
      id: 'harald',
      kind: 'character',
      revealedAtEpisode: 1167,
      revealedAtChapter: 1137,
      name: { it: 'Harald', en: 'Harald' },
      summary: {
        it: 'Il re di Elbaf che non c’è più, un gigante dal volto severo che la ciurma conosce da un ritratto, e che l’isola dice ucciso da suo figlio Loki.',
        en: 'The late King of Elbaph, a stern-faced giant the crew knows from a portrait, whom the island says was killed by his own son Loki.',
      },
      visual: { art: 'harald', tint: 'ivory' },
    },
    {
      id: 'figarland-shamrock',
      kind: 'character',
      revealedAtEpisode: 1167,
      revealedAtChapter: 1137,
      name: { it: 'Figarland Shamrock', en: 'Figarland Shamrock' },
      summary: {
        it: 'San Figarland Shamrock, comandante dei Cavalieri di Dio, un Drago Celeste con una spada al fianco, che dà gli ordini agli altri cavalieri.',
        en: 'Saint Figarland Shamrock, Commander of the Knights of God, a Celestial Dragon with a sword at his hip, who gives the other knights their orders.',
      },
      visual: { art: 'figarland-shamrock', tint: 'red' },
    },
    {
      id: 'cerberus',
      kind: 'character',
      revealedAtEpisode: 1168,
      revealedAtChapter: 1138,
      name: { it: 'Cerbero', en: 'Cerberus' },
      summary: {
        it: 'La spada di Figarland Shamrock, che nel mezzo di uno scontro smette di essere una lama e diventa un cane a tre teste pronto a mordere.',
        en: 'Figarland Shamrock’s sword, which in the middle of a fight stops being a blade and becomes a three-headed dog ready to bite.',
      },
      visual: { art: 'cerberus', tint: 'magenta' },
    },
    {
      id: 'scopper-gaban',
      kind: 'character',
      revealedAtEpisode: 1169,
      revealedAtChapter: 1139,
      name: { it: 'Scopper Gabin', en: 'Scopper Gaban' },
      summary: {
        it: 'Un vecchio umano con due asce, che su Elbaf si faceva chiamare Mr. Ya e si rivela Scopper Gabin, la Mano Sinistra del Re dei Pirati.',
        en: 'An old human with two axes, who went by Mr. Ya on Elbaph and turns out to be Scopper Gaban, the Left Hand of the Pirate King.',
      },
      visual: { art: 'scopper-gaban', tint: 'azure' },
    },
    {
      id: 'shepherd-sommers',
      kind: 'character',
      revealedAtEpisode: 1170,
      // Chapter rounded up to the one that names this knight’s fruit.
      revealedAtChapter: 1143,
      name: { it: 'Shepherd Sommers', en: 'Shepherd Sommers' },
      summary: {
        it: 'Un Cavaliere di Dio evocato su Elbaf ancora in mutande, un Drago Celeste che si lamenta della fame a Marijoa e chiede se Shamrock è venuto per la tomba di Harald.',
        en: 'A Knight of God summoned to Elbaph still in his underwear, a Celestial Dragon grumbling about Mary Geoise going hungry and asking if Shamrock came for Harald’s grave.',
      },
      visual: { art: 'shepherd-sommers', tint: 'green' },
    },
    {
      id: 'rimoshifu-killingham',
      kind: 'character',
      revealedAtEpisode: 1170,
      // Chapter rounded up to the one that names this knight’s fruit.
      revealedAtChapter: 1143,
      name: { it: 'Rimoshifu Killingham', en: 'Rimoshifu Killingham' },
      summary: {
        it: 'Un Cavaliere di Dio evocato su Elbaf nella forma di una bestia, un kirin cornuto, metà cervo e metà cavallo, e di fretta perché è in ritardo.',
        en: 'A Knight of God summoned to Elbaph in the shape of a beast, a horned kirin, half deer and half horse, and in a hurry because he is late.',
      },
      visual: { art: 'rimoshifu-killingham', tint: 'ice' },
    },
    {
      id: 'ragnir',
      kind: 'character',
      revealedAtEpisode: 1171,
      revealedAtChapter: 1141,
      name: { it: 'Ragnir', en: 'Ragnir' },
      summary: {
        it: 'Il martello da guerra di Loki, un maglio enorme a cui il principe resta aggrappato, e che Hajrudin gli chiede di lasciar andare.',
        en: 'Loki’s warhammer, an enormous maul the prince keeps a grip on, and which Hajrudin asks him to let go of.',
      },
      visual: { art: 'ragnir', tint: 'blue' },
    },
    {
      id: 'kiba',
      kind: 'character',
      revealedAtEpisode: 1172,
      revealedAtChapter: 1142,
      name: { it: 'Kiba', en: 'Kiba' },
      summary: {
        it: 'Il preside della Scuola Walrus, un vecchio gigante che un tempo navigava con i Pirati Guerrieri Giganti e oggi veglia sui bambini del villaggio.',
        en: 'The principal of the Walrus School, an old giant who once sailed with the Giant Warrior Pirates and now watches over the village children.',
      },
      visual: { art: 'kiba', tint: 'sand' },
    },
    {
      id: 'wolf-elbaph',
      kind: 'character',
      revealedAtEpisode: 1172,
      revealedAtChapter: 1142,
      // "Wolf" is the Dog-Dog Fruit’s wolf form long before the navigator is met.
      commonWord: true,
      name: { it: 'Wolf', en: 'Wolf' },
      summary: {
        it: 'L’insegnante di ginnastica della Scuola Walrus, un gigante robusto che viene trovato gravemente ferito e chiede prima di tutto dei bambini.',
        en: 'The Walrus School’s gym teacher, a sturdy giant who is found badly hurt and asks first about the children.',
      },
      visual: { art: 'wolf-elbaph', tint: 'cyan' },
    },
    {
      id: 'blade',
      kind: 'character',
      revealedAtEpisode: 1172,
      revealedAtChapter: 1142,
      name: { it: 'Blade', en: 'Blade' },
      summary: {
        it: 'L’insegnante di matematica della Scuola Walrus, il gigante che corre in sala professori ad avvertire che un serpente del Mondo Sotterraneo è arrivato alla scuola.',
        en: 'The Walrus School’s maths teacher, the giant who runs into the staff room to warn that a serpent from the Underworld has reached the school.',
      },
      visual: { art: 'blade', tint: 'flamingo' },
    },
  ],
  dossiers: {
    'iscat': {
      role: {
        it: 'Sovrano del Castello di Bigstein',
        en: 'Ruler of Bigstein Castle',
      },
      log: {
        it: 'Nella Terra degli Dei, un regno fatto di mattoncini, gli animali sono grandi come mostri e gli abitanti li venerano come dèi. Iskat, con corona e mantello, è il signore del Castello di Bigstein, e butta giù dal castello Nami e Usop prima di trasformarsi in un leone. Alla fine è Rufy a costringerlo a portare la ciurma in groppa.',
        en: 'In the Land of Gods, a kingdom built of toy blocks, the animals are as big as monsters and the locals worship them as gods. Iscat, crowned and robed, is lord of Bigstein Castle, and knocks Nami and Usopp off its walls before turning into a lion. In the end it is Luffy who forces it to carry the crew on its back.',
      },
      status: [{ episode: 1158, value: 'alive' }],
      affiliation: [
        {
          episode: 1158,
          value: {
            it: 'Terra degli Dei, Castello di Bigstein',
            en: 'Land of Gods, Bigstein Castle',
          },
        },
      ],
    },
    'road': {
      role: {
        it: 'Navigatore dei Nuovi Pirati Guerrieri Giganti',
        en: 'New Giant Warrior Pirates navigator',
      },
      log: {
        it: 'Per gli abitanti della Terra degli Dei è il Dio del Sole, un gigante mascherato da un teschio di cervo che regna dall’alto sul loro piccolo regno. Quando la ciurma alza gli occhi lo trova curvo su un plastico, che si diverte a giocare al dio con un mondo grande quanto un tavolo. Si chiama Lord, e governa la rotta della nave di Hajrudin.',
        en: 'To the people of the Land of Gods he is the Sun God, a giant masked in a deer skull who rules their small kingdom from above. When the crew looks up they find him hunched over a diorama, enjoying playing god to a world the size of a table. His name is Road, and he steers the course of Hajrudin’s ship.',
      },
      status: [{ episode: 1159, value: 'alive' }],
      affiliation: [
        { episode: 1159, value: NEW_GIANTS('navigatore', 'navigator') },
      ],
      origin: [{ episode: 1159, value: ELBAF }],
    },
    'loki': {
      role: { it: 'Principe di Elbaf', en: 'Prince of Elbaph' },
      log: {
        it: 'Da anni è incatenato ai piedi di un albero colossale, bendato, nel buio gelido sotto il villaggio. Lo chiamano il Principe Maledetto e la Vergogna di Elbaf, perché l’isola dice che ha ucciso il re suo padre per il frutto del diavolo della famiglia reale. A Rufy si presenta come il Dio del Sole che porterà la fine del mondo.',
        en: 'For years he has been chained, blindfolded, at the foot of a colossal tree in the cold dark below the village. They call him the Accursed Prince and the Shame of Elbaph, because the island says he killed the king his father for the royal family’s devil fruit. To Luffy he introduces himself as the Sun God who will bring the end of the world.',
      },
      status: [{ episode: 1160, value: 'imprisoned' }],
      affiliation: [
        {
          episode: 1160,
          value: {
            it: 'Famiglia reale di Elbaf, principe',
            en: 'Elbaph royal family, prince',
          },
        },
      ],
      origin: [{ episode: 1160, value: ELBAF }],
      epithet: [
        {
          episode: 1160,
          value: { it: 'Principe Maledetto', en: 'Accursed Prince' },
        },
      ],
      bounty: [{ episode: 1161, value: 2_600_000_000 }],
    },
    'goldberg': {
      role: {
        it: 'Cuoco dei Nuovi Pirati Guerrieri Giganti',
        en: 'New Giant Warrior Pirates cook',
      },
      log: {
        it: 'È il cuoco della ciurma di Hajrudin, e la ciurma di Cappello di Paglia lo incontra sul ponte di corda che sale lungo l’albero, mentre parla con Gerd. Dice che gli intrusi vanno arrestati e consegnati a Jarl, e che Lord continua a portarne di nascosto sull’isola. Nemmeno a lui Lord va molto a genio.',
        en: 'He is the cook of Hajrudin’s crew, and the Straw Hats first see him on the rope bridge climbing the tree, deep in talk with Gerd. He says intruders are to be arrested and reported to Jarul, and that Road keeps smuggling them onto the island. He has little love for Road either.',
      },
      status: [{ episode: 1161, value: 'alive' }],
      affiliation: [{ episode: 1161, value: NEW_GIANTS('cuoco', 'cook') }],
      origin: [{ episode: 1161, value: ELBAF }],
    },
    'ange': {
      role: {
        it: 'Insegnante di lingue della Scuola Walrus',
        en: 'Walrus School language teacher',
      },
      log: {
        it: 'Alla Scuola Walrus fa da assistente a Sauro, e tra una lezione e l’altra insegna le lingue ai bambini del villaggio. È lei che corre a gridare che Sauro è crollato, ed era d’accordo con lui fin dall’inizio per lo scherzo. Poi si offre di guidare la ciurma per il villaggio.',
        en: 'At the Walrus School she assists Saul, and between lessons she teaches languages to the village children. She is the one who runs shouting that Saul has collapsed, and she was in on his prank from the start. Then she offers to show the crew around the village.',
      },
      status: [{ episode: 1164, value: 'alive' }],
      affiliation: [
        {
          episode: 1164,
          value: WALRUS_SCHOOL(
            'insegnante di lingue e bibliotecaria',
            'language teacher and librarian',
          ),
        },
      ],
    },
    'ripley': {
      role: {
        it: 'Insegnante di biologia della Scuola Walrus',
        en: 'Walrus School biology teacher',
      },
      log: {
        it: 'Insegna biologia alla Scuola Walrus, e la ciurma la incontra standole in piedi sopra senza accorgersene. Racconta che le leggende sui giganti pirati hanno cent’anni, e che il defunto re voleva un’Elbaf che commerciasse invece di saccheggiare. È dell’ultima generazione di guerrieri, e la trasformazione di Rufy le ricorda un eroe delle vecchie storie.',
        en: 'She teaches biology at the Walrus School, and the Straw Hats meet her while standing on her without realising. She tells them the tales of fearsome giant pirates are a century old, and that the late king wanted Elbaph to trade rather than plunder. She is of the last generation of warriors, and Luffy’s transformation reminds her of a hero from the old stories.',
      },
      status: [{ episode: 1164, value: 'alive' }],
      affiliation: [
        {
          episode: 1164,
          value: WALRUS_SCHOOL('insegnante di biologia', 'biology teacher'),
        },
      ],
      origin: [{ episode: 1164, value: ELBAF }],
    },
    'stansen': {
      role: {
        it: 'Membro dei Nuovi Pirati Guerrieri Giganti',
        en: 'New Giant Warrior Pirates member',
      },
      log: {
        it: 'Anni fa era uno schiavo in vendita alla Casa d’Aste di Sabaody, il giorno in cui Rufy prese a pugni un Drago Celeste davanti a tutta la sala. Oggi è libero, un gigante della ciurma di Hajrudin, e Rufy si ricorda di lui dalla casa d’aste. Non ha dimenticato quel giorno e non ha dimenticato chi lo ha cambiato.',
        en: 'Years ago he was a slave up for sale at the Sabaody Human Auctioning House, the day Luffy punched a Celestial Dragon in front of the whole hall. Today he is free, a giant of Hajrudin’s crew, and Luffy remembers him from the auction house. He has not forgotten that day, nor who changed it.',
      },
      status: [{ episode: 1165, value: 'alive' }],
      affiliation: [
        {
          episode: 1165,
          value: {
            it: 'Nuovi Pirati Guerrieri Giganti',
            en: 'New Giant Warrior Pirates',
          },
        },
      ],
      origin: [{ episode: 1165, value: ELBAF }],
    },
    'colon': {
      role: { it: 'Alunno della Scuola Walrus', en: 'Walrus School pupil' },
      log: {
        it: 'È mezzo gigante, più rissoso di tutti i compagni, e alla Scuola Walrus lo conoscono come il teppista. Colpisce Rufy in testa con una spada di legno, che si spezza, ed è entusiasta quando Rufy risponde con un pugno nel terreno; sua madre Ripley lo sgrida ma loda il colpo, e suo padre è un ex pirata umano. Vuole diventare un guerriero di Elbaf, e non gli importa quanti pugni deve prendere per arrivarci.',
        en: 'He is half giant, quicker to fight than any of his classmates, and at the Walrus School he is known as the delinquent. He swings a wooden sword at Luffy’s head, which snaps, and is thrilled when Luffy answers with a punch into the ground; his mother Ripley scolds him but praises the strike, and his father is a human former pirate. He wants to become a warrior of Elbaph, and does not care how many punches it takes.',
      },
      status: [{ episode: 1165, value: 'alive' }],
      affiliation: [{ episode: 1165, value: WALRUS_SCHOOL('alunno', 'pupil') }],
      origin: [{ episode: 1165, value: ELBAF }],
    },
    'biblo': {
      role: {
        it: 'Bibliotecario capo della Biblioteca del Gufo',
        en: 'Chief librarian of the Owl Library',
      },
      log: {
        it: 'È un gufo vecchio di secoli, e custodisce la Biblioteca del Gufo, dove i libri del mondo arrivano piccoli come quelli degli uomini. Con il suo potere li fa crescere fino alla misura dei giganti, e tornano piccoli quando escono dalla biblioteca. Se ne sta appollaiato tra gli scaffali, e ogni tanto emette un verso.',
        en: 'He is an owl centuries old, and he keeps the Owl Library, where the world’s books arrive as small as human ones. With his power he makes them grow to the size giants read them at, and they shrink again once they leave the library. He stays perched among the shelves, and every so often he hoots.',
      },
      status: [{ episode: 1165, value: 'alive' }],
      affiliation: [
        {
          episode: 1165,
          value: {
            it: 'Biblioteca del Gufo, bibliotecario capo',
            en: 'Owl Library, chief librarian',
          },
        },
      ],
      devilFruit: [{ episode: 1165, value: ['grow-grow-fruit'] }],
    },
    'manmayer-gunko': {
      role: KNIGHT_ROLE,
      log: {
        it: 'Arriva su Elbaf dentro un cerchio magico, avvolta in un mantello col cappuccio calato sul viso, e mette fuori combattimento due guardie giganti del castello. Con le bende dei suoi vestiti solleva per il collo perfino un lupo del Mondo Sotterraneo. Dice di essere un Cavaliere di Dio, e di essere venuta a cercare Loki.',
        en: 'She arrives on Elbaph inside a magic circle, wrapped in a cloak with its hood pulled over her face, and puts two giant castle guards out of action. With the bandages of her clothes she hoists even an Underworld wolf by the neck. She says she is a Knight of God, and that she has come looking for Loki.',
      },
      status: [{ episode: 1166, value: 'alive' }],
      affiliation: [{ episode: 1166, value: KNIGHTS }],
      devilFruit: [{ episode: 1167, value: ['arrow-arrow-fruit'] }],
    },
    'harald': {
      role: { it: 'Re di Elbaf', en: 'King of Elbaph' },
      log: {
        it: 'Era il re di Elbaf, e oggi di lui resta un grande ritratto che i giganti guardano ancora con rispetto. Nel dipinto ha il volto severo e due grandi cicatrici dove un tempo aveva le corna, strappate da lui stesso, e i giganti ne parlano abbassando la voce. Tutta Elbaf dice che a ucciderlo è stato suo figlio Loki.',
        en: 'He was the King of Elbaph, and today what remains of him is a great portrait the giants still look at with respect. In the painting his face is stern, with two great scars where his horns once were, torn out by his own hand, and the giants lower their voices when they speak of him. All of Elbaph says it was his son Loki who killed him.',
      },
      status: [{ episode: 1167, value: 'deceased' }],
      affiliation: [
        { episode: 1167, value: { it: 'Elbaf, re', en: 'Elbaph, king' } },
      ],
      origin: [{ episode: 1167, value: ELBAF }],
    },
    'figarland-shamrock': {
      role: {
        it: 'Comandante dei Cavalieri di Dio',
        en: 'Commander of the Knights of God',
      },
      log: {
        it: 'È San Figarland Shamrock, un Drago Celeste che comanda i Cavalieri di Dio, arrivato su Elbaf insieme a Gunko. Porta una spada al fianco e parla con la calma di chi non ha mai dovuto chiedere il permesso. Gli ordini che i cavalieri eseguono su Elbaf vengono da lui.',
        en: 'He is Saint Figarland Shamrock, a Celestial Dragon who commands the Knights of God, come to Elbaph together with Gunko. He wears a sword at his hip and speaks with the calm of someone who has never needed permission. The orders the knights carry out on Elbaph come from him.',
      },
      status: [{ episode: 1167, value: 'alive' }],
      affiliation: [
        {
          episode: 1167,
          value: {
            it: 'Cavalieri di Dio, comandante',
            en: 'Knights of God, commander',
          },
        },
      ],
    },
    'cerberus': {
      role: {
        it: 'Spada di Figarland Shamrock',
        en: 'Figarland Shamrock’s sword',
      },
      log: {
        it: 'Shamrock la porta al fianco come una spada qualunque, finché non decide di usarla. Allora la lama diventa un cane rosso a tre teste con le spade tra le fauci, e anche dopo che Shamrock è volato via le teste continuano a tornare indietro per colpire Loki. Shamrock lo lascia lì a finire il lavoro.',
        en: 'Shamrock wears it at his hip like any other sword, until he decides to use it. Then the blade becomes a red three-headed dog with swords in its jaws, and even after Shamrock has flown off its heads keep circling back to strike Loki. Shamrock leaves it there to finish the job.',
      },
      status: [{ episode: 1168, value: 'alive' }],
      affiliation: [
        {
          episode: 1168,
          value: {
            it: 'Spada di Figarland Shamrock',
            en: 'Figarland Shamrock’s sword',
          },
        },
      ],
    },
    'scopper-gaban': {
      role: { it: 'Ex membro dei Pirati di Roger', en: 'Former Roger Pirate' },
      log: {
        it: 'Su Elbaf viveva da anni come Mr. Ya, un vecchio umano con due asce, ex pirata, che i giganti chiamavano con rispetto Ya-san. Poi si rivela Scopper Gabin, il Mangiamontagne, la Mano Sinistra del Re dei Pirati, che navigò con Roger fino alla fine. È il marito di Ripley e il padre di Collon.',
        en: 'For years he lived on Elbaph as Mr. Ya, an old human with two axes, a former pirate the giants respectfully called Ya-san. Then he is revealed as Scopper Gaban, the Mountain-Eater, the Left Hand of the Pirate King, who sailed with Roger to the end. He is Ripley’s husband and Colon’s father.',
      },
      status: [{ episode: 1169, value: 'alive' }],
      affiliation: [
        {
          episode: 1169,
          value: { it: 'Pirati di Roger, ex', en: 'Roger Pirates, former' },
        },
      ],
      epithet: [
        {
          episode: 1169,
          value: { it: 'Mangiamontagne', en: 'Mountain-Eater' },
        },
      ],
    },
    'shepherd-sommers': {
      role: KNIGHT_ROLE,
      log: {
        it: 'Il cerchio magico lo trascina su Elbaf mentre è ancora in mutande e si lamenta della carenza di cibo a Marijoa. Vestendosi chiede a Shamrock se è lì per visitare la tomba di Harald. Poi ascolta il piano del comandante per rapire i bambini dei giganti.',
        en: 'The magic circle drags him to Elbaph while he is still in his underwear, complaining about the food shortage in Mary Geoise. Getting dressed, he asks Shamrock whether he came to visit Harald’s grave. Then he listens to the commander’s plan to kidnap the giants’ children.',
      },
      status: [{ episode: 1170, value: 'alive' }],
      affiliation: [{ episode: 1170, value: KNIGHTS }],
      // Named a Thorn Human in chapter 1143, which episode 1173 tells.
      devilFruit: [
        { episode: 1173, chapter: 1143, value: ['thorn-thorn-fruit'] },
      ],
    },
    'rimoshifu-killingham': {
      role: KNIGHT_ROLE,
      log: {
        it: 'Il cerchio magico lo evoca su Elbaf quando meno se lo aspetta, e arriva non come un uomo ma come una bestia: un kirin cornuto, metà cervo e metà cavallo, già in ritardo. Porta a Shamrock l’ordine di tornare a Marijoa, dove dopo il Reverie tutto va a pezzi. Poi resta con gli altri per il gioco del comandante.',
        en: 'The magic circle summons him to Elbaph when he least expects it, and he arrives not as a man but as a beast: a horned kirin, half deer and half horse, already late. He brings Shamrock the order to return to Mary Geoise, where everything has been falling apart since the Levely. Then he stays with the others for the commander’s game.',
      },
      status: [{ episode: 1170, value: 'alive' }],
      affiliation: [{ episode: 1170, value: KNIGHTS }],
      // His fruit is named and shown in chapter 1143, as in episode 1173.
      devilFruit: [
        {
          episode: 1173,
          chapter: 1143,
          value: ['dragon-dragon-fruit-mythical-model-kirin'],
        },
      ],
    },
    'ragnir': {
      role: { it: 'Martello da guerra di Loki', en: 'Loki’s warhammer' },
      log: {
        it: 'È il martello da guerra di Loki, un maglio enorme che sta accanto al principe incatenato fin dalla prima volta che Rufy lo trova. Appena le catene si aprono, Loki si rimette in piedi con il martello in mano. Hajrudin, arrivato troppo tardi, lo supplica di lasciarlo andare.',
        en: 'It is Loki’s warhammer, an enormous maul that has stood beside the chained prince since the first time Luffy found him. As soon as the chains come off, Loki gets to his feet with it in hand. Hajrudin, arriving too late, begs him to let it go.',
      },
      status: [{ episode: 1171, value: 'alive' }],
      affiliation: [
        {
          episode: 1171,
          value: { it: 'Martello da guerra di Loki', en: 'Loki’s warhammer' },
        },
      ],
    },
    'kiba': {
      role: {
        it: 'Preside della Scuola Walrus',
        en: 'Walrus School principal',
      },
      log: {
        it: 'È il preside della Scuola Walrus, un vecchio gigante che un tempo navigava con i Pirati Guerrieri Giganti e che ora bada ai bambini. Sonnecchia alla finestra mentre i bambini giocano, ma le voci che lo vogliono ex guerriero si rivelano vere. Quando un serpente gigante devasta la scuola lo carica col martello e fa suonare il corno in tutto il paese.',
        en: 'He is the principal of the Walrus School, an old giant who once sailed with the Giant Warrior Pirates and now looks after the children. He dozes at his window while the children play, but the rumours that he was once a warrior prove true. When a giant serpent tears into the school he charges it with his hammer and has the horn sounded across the country.',
      },
      status: [{ episode: 1172, value: 'alive' }],
      affiliation: [
        { episode: 1172, value: WALRUS_SCHOOL('preside', 'principal') },
      ],
      origin: [{ episode: 1172, value: ELBAF }],
    },
    'wolf-elbaph': {
      role: {
        it: 'Insegnante di ginnastica della Scuola Walrus',
        en: 'Walrus School gym teacher',
      },
      log: {
        it: 'Alla Scuola Walrus insegna ginnastica. Dopo che un serpente gigante attacca la scuola lo trovano gravemente ferito, e quando gli chiedono cosa sia successo parla solo degli alunni. È lui ad avvertire Sauro di non toccare i bambini che camminano nel sonno verso la spiaggia.',
        en: 'At the Walrus School he teaches gym. After a giant serpent attacks the school he is found badly hurt, and when asked what happened he talks only about the pupils. It is he who warns Saul not to touch the children sleepwalking toward the beach.',
      },
      status: [{ episode: 1172, value: 'alive' }],
      affiliation: [
        {
          episode: 1172,
          value: WALRUS_SCHOOL('insegnante di ginnastica', 'gym teacher'),
        },
      ],
      origin: [{ episode: 1172, value: ELBAF }],
    },
    'blade': {
      role: {
        it: 'Insegnante di matematica della Scuola Walrus',
        en: 'Walrus School maths teacher',
      },
      log: {
        it: 'Insegna matematica alla Scuola Walrus, insieme agli altri insegnanti che la ciurma conosce tra i rami dell’albero. È lui a dare l’allarme in sala professori: un serpente gigante, che dovrebbe vivere nel Mondo Sotterraneo, sta distruggendo la scuola. I colleghi si chiedono chi proteggerà i bambini mentre si chiamano i capi.',
        en: 'He teaches maths at the Walrus School, alongside the other teachers the crew meets among the tree’s branches. He is the one who raises the alarm in the staff room: a giant serpent that should live in the Underworld is tearing the school apart. His colleagues ask who will protect the children while the chiefs are called.',
      },
      status: [{ episode: 1172, value: 'alive' }],
      affiliation: [
        {
          episode: 1172,
          value: WALRUS_SCHOOL('insegnante di matematica', 'maths teacher'),
        },
      ],
      origin: [{ episode: 1172, value: ELBAF }],
    },
  },
}
