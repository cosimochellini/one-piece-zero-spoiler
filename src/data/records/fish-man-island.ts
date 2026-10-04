import { fishManIslandChronicles } from './fish-man-island.chronicle'
import type { Saga } from './saga'

/**
 * The Fish-Man Island saga, episodes 517 to 574: two years later, ten
 * thousand metres down.
 */

const FISH_MAN_ISLAND = {
  it: 'Isola degli Uomini-Pesce',
  en: 'Fish-Man Island',
}

const NEW_FISH_MAN_OFFICER = {
  it: 'Nuovi Pirati Uomini-Pesce, ufficiale',
  en: 'New Fish-Man Pirates, officer',
}

export const fishManIsland: Saga = {
  entries: [
    {
      id: 'return-to-sabaody',
      kind: 'arc',
      revealedAtEpisode: 517,
      revealedAtChapter: 598,
      name: { it: 'Ritorno a Sabaody', en: 'Return to Sabaody' },
      summary: {
        it: 'Due anni dopo essere stata dispersa, la ciurma torna all’arcipelago un membro alla volta, e ci trova già un’altra ciurma che usa il suo nome.',
        en: 'Two years after it was scattered, the crew comes back to the archipelago one by one, and finds another crew already using its name.',
      },
      visual: { art: 'return-to-sabaody', tint: 'acid' },
    },
    // Filed at 523, where the arc itself opens, rather than at 517 with the
    // saga: the Return to Sabaody opens the saga now, and the island is not
    // reached until the descent. The summary no longer says the city hangs
    // from a tree's roots, which is not learned until 531.
    {
      id: 'fish-man-island-arc',
      kind: 'arc',
      revealedAtEpisode: 523,
      revealedAtChapter: 603,
      // Sanji and Yosaku explain the island of the fish-men at 31, long before the crew reaches it.
      nameSaidAt: 31,
      name: { it: 'Isola degli Uomini-Pesce', en: 'Fish-Man Island' },
      summary: {
        it: 'Diecimila metri sotto l’arcipelago, la rotta scende verso un’isola di uomini-pesce e sirene, ultima tappa prima del Nuovo Mondo.',
        en: 'Ten thousand metres down, beneath the archipelago, the route sinks toward an island of fish-men and merfolk, the last stop before the New World.',
      },
      visual: { art: 'fish-man-island-arc', tint: 'cyan' },
    },
    {
      id: 'caribou',
      kind: 'character',
      revealedAtEpisode: 517,
      revealedAtChapter: 602,
      name: { it: 'Caribou', en: 'Caribou' },
      summary: {
        it: 'Un pirata dai capelli bagnati che si inginocchia e implora pietà, poi taglia la gola ai marine con la falce e li fa seppellire al fratello.',
        en: 'A wet-haired pirate who kneels and begs for mercy, then cuts the Marines down with his scythe and has his brother bury them.',
      },
      visual: { art: 'caribou', tint: 'wine' },
    },
    {
      id: 'coribou',
      kind: 'character',
      revealedAtEpisode: 517,
      revealedAtChapter: 602,
      name: { it: 'Coribou', en: 'Coribou' },
      summary: {
        it: 'Un gigante con la vanga in spalla che scava una fossa dietro l’altra e pianta una croce su ognuna, mentre il fratello capitano continua a parlare.',
        en: 'A huge man with a spade who digs one grave after another and plants a cross on each, while his brother the captain keeps talking.',
      },
      visual: { art: 'coribou', tint: 'ocher' },
    },
    {
      id: 'demalo-black',
      kind: 'character',
      revealedAtEpisode: 521,
      revealedAtChapter: 601,
      name: { it: 'Demaro Black', en: 'Demalo Black' },
      summary: {
        it: 'Un pirata grasso con un cappello di paglia sfilacciato e una cicatrice finta sotto l’occhio, che a Sabaody si spaccia per Rufy per arruolare capitani, finché un Pacifista non legge ad alta voce il suo vero nome.',
        en: 'A heavy-set pirate with a frayed straw hat and a fake scar under one eye, passing himself off as Luffy on Sabaody to recruit captains, until a Pacifista reads out his real name.',
      },
      visual: { art: 'demalo-black', tint: 'ocher' },
    },
    {
      id: 'hammond',
      kind: 'character',
      revealedAtEpisode: 527,
      revealedAtChapter: 610,
      name: { it: 'Hammond', en: 'Hammond' },
      summary: {
        it: 'Un uomo-pesce con un arpione uncinato che ferma i nuovi arrivati all’ingresso dell’isola e li invita a schierarsi o a tornare da dove sono venuti.',
        en: 'A fish-man with a barbed harpoon who stops newcomers at the island’s gate and invites them to pick a side or go back where they came from.',
      },
      visual: { art: 'hammond', tint: 'sand' },
    },
    {
      id: 'shyarly',
      kind: 'character',
      revealedAtEpisode: 529,
      revealedAtChapter: 612,
      name: { it: 'Sharley', en: 'Shyarly' },
      summary: {
        it: 'La proprietaria del Caffè delle Sirene, una sirena con la coda da squalo le cui visioni nella sfera di cristallo hanno previsto l’era dei pirati e la morte di Barbabianca.',
        en: 'The owner of the Mermaid Café, a mermaid with a shark’s tail whose visions in a crystal ball foretold the age of pirates and Whitebeard’s death.',
      },
      visual: { art: 'shyarly', tint: 'violet' },
    },
    {
      id: 'ankoro',
      kind: 'character',
      revealedAtEpisode: 525,
      revealedAtChapter: 606,
      name: { it: 'Lucetto', en: 'Ankoro' },
      summary: {
        it: 'Una rana pescatrice gigante la cui esca luminosa, nel buio, passa per le luci di un’isola, e che un gigante sgrida come un animale di casa per aver provato, ancora una volta, a inghiottire una nave.',
        en: 'A giant anglerfish whose glowing lure passes for an island’s lights in the dark, and whom a giant scolds like a pet for trying, once again, to swallow a ship whole.',
      },
      visual: { art: 'ankoro', tint: 'yellow' },
    },
    {
      id: 'vander-decken-ix',
      kind: 'character',
      revealedAtEpisode: 526,
      revealedAtChapter: 615,
      name: { it: 'Vander Decken IX', en: 'Vander Decken IX' },
      summary: {
        it: 'Il capitano dell’Olandese Volante, che tocca un bersaglio una volta sola e da quel momento qualunque cosa lanci lo insegue finché non lo colpisce.',
        en: 'The captain of the Flying Dutchman, who touches a target once and from then on anything he throws chases it down until it lands.',
      },
      visual: { art: 'vander-decken-ix', tint: 'acid' },
    },
    {
      id: 'surume',
      kind: 'character',
      revealedAtEpisode: 526,
      revealedAtChapter: 615,
      // The chapter is Vander Decken IX's: the text names Vander Decken IX, who the manga files at 615.
      name: { it: 'Seppy', en: 'Surume' },
      summary: {
        it: 'Un kraken così enorme che la Thousand Sunny gli sta in testa come un cappello, battuto da tre pirati all’imbocco della corrente e ora pronto a trascinarla ovunque Rufy indichi.',
        en: 'A kraken so huge the Thousand Sunny sits on his head like a hat, beaten by three pirates at the mouth of the current and now ready to haul it wherever Luffy points.',
      },
      visual: { art: 'surume', tint: 'vermilion' },
    },
    {
      id: 'wadatsumi',
      kind: 'character',
      revealedAtEpisode: 526,
      revealedAtChapter: 615,
      // The chapter is Vander Decken IX's: the text names Vander Decken IX, who the manga files at 615.
      name: { it: 'Wadatsumi', en: 'Wadatsumi' },
      summary: {
        it: 'Un gigante grande quanto un kraken al servizio del capitano dell’Olandese Volante, che allontana a pugni una rana pescatrice da una nave che il capitano vuole depredare, finché un kraken addomesticato non lo stende.',
        en: 'A giant as big as a kraken who serves the captain of the Flying Dutchman, punching an anglerfish off a ship his captain means to rob, until a tamed kraken beats him senseless.',
      },
      visual: { art: 'wadatsumi', tint: 'ocher' },
    },
    {
      id: 'fish-man-island',
      kind: 'place',
      revealedAtEpisode: 526,
      revealedAtChapter: 607,
      // Sanji and Yosaku explain the island of the fish-men at 31, long before the crew reaches it.
      nameSaidAt: 31,
      name: { it: 'Isola degli Uomini-Pesce', en: 'Fish-Man Island' },
      summary: {
        it: 'Un’isola a diecimila metri sotto il mare, in fondo a una fossa, chiusa in un’enorme bolla d’aria e illuminata da una luce che scende dall’alto.',
        en: 'An island ten thousand metres under the sea, at the bottom of a trench, wrapped in a huge bubble of air and lit by a light from above.',
      },
      visual: { art: 'fish-man-island', tint: 'azure' },
    },
    {
      id: 'hody-jones',
      kind: 'character',
      revealedAtEpisode: 527,
      revealedAtChapter: 615,
      name: { it: 'Hody Jones', en: 'Hody Jones' },
      summary: {
        it: 'Un uomo-pesce squalo bianco con un tridente, capitano dei Nuovi Pirati Uomini-Pesce, che promette di prendersi l’isola e di strappare la pace firmata con gli umani.',
        en: 'A great white fish-man with a trident, captain of the New Fish-Man Pirates, who promises to take the island and tear up the peace signed with the humans.',
      },
      visual: { art: 'hody-jones', tint: 'teal' },
    },
    {
      id: 'fish-man-district',
      kind: 'place',
      revealedAtEpisode: 527,
      revealedAtChapter: 608,
      name: { it: 'Quartiere degli Uomini-Pesce', en: 'Fish-Man District' },
      summary: {
        it: 'Un quartiere malfamato di uomini-pesce, quello da cui viene Octy, dove una nuova ciurma pirata fa rapporto al suo capo a bordo di un’enorme nave chiamata Noah.',
        en: 'A rough district of fish-men, the one Hatchan comes from, where a new pirate crew reports to its boss aboard an enormous ship called Noah.',
      },
      visual: { art: 'fish-man-district', tint: 'wine' },
    },
    {
      id: 'neptune',
      kind: 'character',
      revealedAtEpisode: 530,
      revealedAtChapter: 611,
      name: { it: 'Nettuno', en: 'Neptune' },
      summary: {
        it: 'Il re del Regno di Ryugu, un tritone enorme con la barba bianca e un tridente, che scende dal suo palazzo in groppa a una balena per invitarvi i Cappello di Paglia.',
        en: 'The king of the Ryugu Kingdom, an enormous white-bearded merman with a trident, who rides down from his palace on a whale to invite the Straw Hats there.',
      },
      visual: { art: 'neptune', tint: 'blue' },
    },
    {
      id: 'fukaboshi',
      kind: 'character',
      revealedAtEpisode: 529,
      revealedAtChapter: 616,
      name: { it: 'Fukaboshi', en: 'Fukaboshi' },
      summary: {
        it: 'Il primogenito del re, un tritone squalo che comanda l’armata del regno con una lancia e parla a nome del padre.',
        en: 'The king’s eldest son, a shark merman who commands the kingdom’s army with a lance and speaks in his father’s name.',
      },
      visual: { art: 'fukaboshi', tint: 'azure' },
    },
    {
      id: 'ryuboshi',
      kind: 'character',
      revealedAtEpisode: 529,
      revealedAtChapter: 616,
      name: { it: 'Ryuboshi', en: 'Ryuboshi' },
      summary: {
        it: 'Il secondo dei principi di Ryugu, un tritone che canta in lirica la metà di quello che dice e tiene la sciabola al fianco.',
        en: 'The second of the Ryugu princes, a merman who sings half of what he says in opera and keeps a sabre at his side.',
      },
      visual: { art: 'ryuboshi', tint: 'yellow' },
    },
    {
      id: 'manboshi',
      kind: 'character',
      revealedAtEpisode: 529,
      revealedAtChapter: 616,
      name: { it: 'Manboshi', en: 'Manboshi' },
      summary: {
        it: 'Il terzo principe di Ryugu, un tritone pesce luna che balla mentre parla e impugna la sciabola senza mai smettere di muoversi.',
        en: 'The third Ryugu prince, a sunfish merman who dances while he talks and takes up a sabre without ever standing still.',
      },
      visual: { art: 'manboshi', tint: 'orange' },
    },
    {
      id: 'shirahoshi',
      kind: 'character',
      revealedAtEpisode: 531,
      revealedAtChapter: 618,
      name: { it: 'Shirahoshi', en: 'Shirahoshi' },
      summary: {
        it: 'La principessa sirena del Regno di Ryugu, alta quanto una torre e spaventata da tutto, chiusa nella stessa stanza da dieci anni.',
        en: 'The mermaid princess of the Ryugu Kingdom, as tall as a tower and frightened of everything, shut in one room for ten years.',
      },
      visual: { art: 'shirahoshi', tint: 'pink' },
    },
    {
      id: 'hyouzou',
      kind: 'character',
      revealedAtEpisode: 530,
      revealedAtChapter: 620,
      name: { it: 'Hyouzou', en: 'Hyouzou' },
      summary: {
        it: 'Un uomo-pesce polpo con una sciabola avvelenata in ognuna delle otto braccia, venduto ai Nuovi Pirati Uomini-Pesce come spadaccino.',
        en: 'An octopus fish-man with a poisoned sabre in each of his eight arms, sold to the New Fish-Man Pirates as their swordsman.',
      },
      visual: { art: 'hyouzou', tint: 'violet' },
    },
    {
      id: 'zeo',
      kind: 'character',
      revealedAtEpisode: 530,
      revealedAtChapter: 620,
      name: { it: 'Zeo', en: 'Zeo' },
      summary: {
        it: 'Un ufficiale dei Nuovi Pirati Uomini-Pesce che si confonde con il corallo e con la pietra finché non è troppo tardi per accorgersene.',
        en: 'An officer of the New Fish-Man Pirates who blends into coral and stone until it is far too late to notice him.',
      },
      visual: { art: 'zeo', tint: 'green' },
    },
    {
      id: 'daruma',
      kind: 'character',
      revealedAtEpisode: 530,
      revealedAtChapter: 620,
      name: { it: 'Daruma', en: 'Daruma' },
      summary: {
        it: 'Il più piccolo degli ufficiali dei Nuovi Pirati Uomini-Pesce, un pesce dai denti a sega che scava sotto il pavimento e morde da sotto.',
        en: 'The smallest of the New Fish-Man Pirates officers, a saw-toothed fish who tunnels under the floor and bites things from below.',
      },
      visual: { art: 'daruma', tint: 'red' },
    },
    {
      id: 'ikaros-much',
      kind: 'character',
      revealedAtEpisode: 530,
      revealedAtChapter: 620,
      name: { it: 'Ikaros Much', en: 'Ikaros Much' },
      summary: {
        it: 'Un ufficiale calamaro alto il doppio degli altri, che tiene in ogni braccio una lancia a forma di calamaro messo a seccare.',
        en: 'A squid officer twice the height of the others, holding in each arm a lance shaped like a squid left out to dry.',
      },
      visual: { art: 'ikaros-much', tint: 'ivory' },
    },
    {
      id: 'dosun',
      kind: 'character',
      revealedAtEpisode: 530,
      revealedAtChapter: 620,
      name: { it: 'Dosun', en: 'Dosun' },
      summary: {
        it: 'Un ufficiale dalla testa a martello che scandisce ogni frase con una mazza più alta di un uomo e rompe il pavimento per farsi capire.',
        en: 'A hammerhead officer who punctuates every sentence with a mallet taller than a man and breaks the floor to make his point.',
      },
      visual: { art: 'dosun', tint: 'sand' },
    },
    {
      id: 'megalo',
      kind: 'character',
      revealedAtEpisode: 530,
      revealedAtChapter: 611,
      name: { it: 'Megalo', en: 'Megalo' },
      summary: {
        it: 'Uno squalo enorme con la maglietta, lo stesso che il kraken teneva stretto, che compare accanto al re dell’Isola degli Uomini-Pesce per confermare che sono quelli i pirati giusti, poi se li carica sul dorso per portarli a palazzo.',
        en: 'A huge shark in a T-shirt, the one the kraken had been holding, who turns up beside the king of Fish-Man Island to confirm these are the right pirates, then sets off to carry them to the palace.',
      },
      visual: { art: 'megalo', tint: 'ice' },
    },
    {
      id: 'den',
      kind: 'character',
      revealedAtEpisode: 535,
      revealedAtChapter: 620,
      name: { it: 'Den', en: 'Den' },
      summary: {
        it: 'Un tritone carpentiere che studia la Foresta Marina, dove la corrente porta le navi che affondano intorno all’isola, e che dice di essere il fratello minore di Tom.',
        en: 'A merman shipwright who studies the Sea Forest, where the tide carries the ships that sink around the island, and who says he is Tom’s younger brother.',
      },
      visual: { art: 'den', tint: 'cyan' },
    },
    // Filed at 532, not at his 531 debut: in 531 he scolds the king but
    // nobody calls him by his title, and the first spoken 右大臣 is the
    // soldier in the princess's tower at 532.
    {
      id: 'minister-of-the-right',
      kind: 'character',
      revealedAtEpisode: 532,
      revealedAtChapter: 613,
      name: { it: 'Ministro della Destra', en: 'Minister of the Right' },
      summary: {
        it: 'Un tritone cavalluccio marino con tridente e spada al fianco che rimprovera re Nettuno come un ragazzino, poi irrompe nella torre della principessa, parla cinque minuti e fa chiudere la porta a chiave.',
        en: 'A seahorse merman with a trident and a sword at his hip who scolds King Neptune like a boy, then bursts into the princess’s tower, talks for five minutes and has the door locked.',
      },
      visual: { art: 'minister-of-the-right', tint: 'orange' },
    },
    {
      id: 'otohime',
      kind: 'character',
      revealedAtEpisode: 539,
      revealedAtChapter: 626,
      name: { it: 'Otohime', en: 'Otohime' },
      summary: {
        it: 'La regina del Regno di Ryugu, che gira l’isola con un foglio di firme per chiedere al mondo di lasciare la sua gente uscire al sole.',
        en: 'The queen of the Ryugu Kingdom, going about the island with a petition sheet, asking the world to let her people up into the sun.',
      },
      visual: { art: 'otohime', tint: 'lavender' },
    },
    {
      id: 'fisher-tiger',
      kind: 'character',
      revealedAtEpisode: 539,
      revealedAtChapter: 626,
      name: { it: 'Fisher Tiger', en: 'Fisher Tiger' },
      summary: {
        it: 'Un uomo-pesce che scala la Red Line fino alla città dei Nobili Mondiali, apre le celle degli schiavi e li riporta giù dietro di sé.',
        en: 'A fish-man who climbs the Red Line up to the city of the World Nobles, opens the slave cells and brings everyone down behind him.',
      },
      visual: { art: 'fisher-tiger', tint: 'orange' },
    },
    {
      id: 'aladine',
      kind: 'character',
      revealedAtEpisode: 541,
      revealedAtChapter: 628,
      name: { it: 'Aladine', en: 'Aladine' },
      summary: {
        it: 'Il medico dei Pirati del Sole, un uomo-pesce squalo che tiene in piedi con la borsa da dottore una ciurma nata da una liberazione di schiavi.',
        en: 'The doctor of the Sun Pirates, a shark fish-man who keeps a crew born out of a slave rescue standing with a medical bag.',
      },
      visual: { art: 'aladine', tint: 'teal' },
    },
    // Filed at 544, well after his 531 debut: nobody says 左大臣 aloud
    // until the drunk queen shouts it at him in the flashback of 544.
    {
      id: 'minister-of-the-left',
      kind: 'character',
      revealedAtEpisode: 544,
      revealedAtChapter: 626,
      // The chapter is Otohime's: the text names Otohime, who the manga files at 626.
      name: { it: 'Ministro della Sinistra', en: 'Minister of the Left' },
      summary: {
        it: 'Un tritone pesce gatto basso e tondo, con monocolo, cilindro e bastone, che fa arrestare i Cappello di Paglia e che anni prima corse ad avvertire la regina ubriaca che tutto il regno la stava ascoltando.',
        en: 'A short, round catfish merman with monocle, top hat and cane who has the Straw Hats arrested, and who years ago ran to warn a drunken queen that the whole kingdom could hear her.',
      },
      visual: { art: 'minister-of-the-left', tint: 'sand' },
    },
    {
      id: 'pekoms',
      kind: 'character',
      revealedAtEpisode: 571,
      revealedAtChapter: 653,
      name: { it: 'Pekoms', en: 'Pekoms' },
      summary: {
        it: 'Un pirata con gli occhiali scuri e la criniera da leone, che scende sull’isola per ritirare le caramelle dovute ogni mese a Big Mom.',
        en: 'A pirate in dark glasses with a lion’s mane, who comes down to the island to collect the sweets owed to Big Mom every month.',
      },
      visual: { art: 'pekoms', tint: 'yellow' },
    },
    {
      id: 'baron-tamago',
      kind: 'character',
      revealedAtEpisode: 571,
      revealedAtChapter: 653,
      name: { it: 'Baron Tamago', en: 'Baron Tamago' },
      summary: {
        it: 'Un cavaliere con il corpo a forma di uovo, cilindro e bastone, che accompagna il ritiro delle caramelle e misura ogni cosa in minuti.',
        en: 'A knight with the body of an egg, a top hat and a cane, along for the sweets collection and measuring everything in minutes.',
      },
      visual: { art: 'baron-tamago', tint: 'ivory' },
    },
    {
      id: 'bobbin',
      kind: 'character',
      revealedAtEpisode: 571,
      revealedAtChapter: 653,
      // The chapter is Pekoms's: the text names Pekoms, who the manga files at 653.
      name: { it: 'Bobbin', en: 'Bobbin' },
      summary: {
        it: 'Un pirata basso e largo, con una maschera bianca, un gran sorriso e una spada più alta di lui, che torna da Big Mom dopo aver bruciato un paese che non le aveva sfornato i dolci promessi.',
        en: 'A short, broad pirate with a white mask, a wide grin and a sword taller than he is, who comes home to Big Mom after burning a country that failed to bake her promised sweets.',
      },
      visual: { art: 'bobbin', tint: 'flamingo' },
    },
  ],

  dossiers: {
    'caribou': {
      role: {
        it: 'Capitano dei Pirati di Caribou',
        en: 'Captain of the Caribou Pirates',
      },
      log: {
        it: 'Arriva all’arcipelago Sabaody con una taglia da duecento milioni e le lacrime già pronte: si inginocchia, supplica, e appena l’avversario abbassa la guardia lo uccide. Il fratello gli scava le fosse dietro, una croce per ciascuna. Ha una taglia da duecentodieci milioni e una ciurma che lo teme più di quanto tema chi insegue.',
        en: 'He reaches the Sabaody Archipelago with a two hundred million bounty and his tears ready: he kneels, he begs, and the moment his opponent drops their guard he kills them. His brother digs the graves behind him, one cross each. He carries a bounty of two hundred and ten million and a crew that fears him more than it fears anyone he hunts.',
      },
      status: [
        { episode: 517, value: 'alive' },
        { episode: 525, value: 'captured' },
        { episode: 531, value: 'alive' },
        { episode: 919, value: 'imprisoned' },
        { episode: 949, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 517,
          value: {
            it: 'Pirati di Caribou, capitano',
            en: 'Caribou Pirates, captain',
          },
        },
        {
          episode: 919,
          value: {
            it: 'Prigioniero nella miniera di Udon',
            en: 'Prisoner in the Udon mine',
          },
        },
      ],
      epithet: [
        { episode: 517, value: { it: 'Capelli Bagnati', en: 'Wet-Haired' } },
      ],
      devilFruit: [{ episode: 519, value: ['swamp-swamp-fruit'] }],
      bounty: [{ episode: 517, value: 210_000_000 }],
    },
    'coribou': {
      role: { it: 'Fratello del capitano', en: 'The captain’s brother' },
      log: {
        it: 'Segue il fratello con la vanga in spalla e il lavoro sporco già assegnato: quando Caribou ha finito, lui interra i corpi e pianta le croci. Ha una taglia quasi pari a quella del capitano e nessuna voglia di comandare. Parla poco, e quasi sempre per dire al fratello che sta esagerando.',
        en: 'He follows his brother with a spade over his shoulder and the dirty work already assigned: when Caribou has finished, he buries the bodies and plants the crosses. His bounty is nearly the captain’s and he has no wish to give orders. He says little, and almost always to tell his brother he has gone too far.',
      },
      affiliation: [
        {
          episode: 517,
          value: {
            it: 'Pirati di Caribou, fratello del capitano',
            en: 'Caribou Pirates, captain’s brother',
          },
        },
      ],
      epithet: [
        {
          episode: 517,
          value: { it: 'Schizzasangue', en: 'Blood-Splatterer' },
        },
      ],
      bounty: [{ episode: 517, value: 190_000_000 }],
    },
    'demalo-black': {
      chronicle: fishManIslandChronicles['demalo-black'],
      role: {
        it: 'Capitano dei Finti Pirati di Cappello di Paglia',
        en: 'Captain of the Fake Straw Hats',
      },
      log: {
        it: 'A Sabaody porta un cappello di paglia sfilacciato e una cicatrice finta, si fa chiamare Rufy e arruola soltanto capitani con una taglia da settanta milioni in su; a chi gli risponde male spara. Si vanta di un padre rivoluzionario, di un nonno eroe e di una taglia da quattrocento milioni, e niente di tutto questo è suo. Il resto della sua ciurma è fatto di impostori travestiti da Cappello di Paglia. Quando un marine che ha già affrontato il vero Rufy lo stende con un colpo solo, un Pacifista legge ad alta voce la sua taglia vera: ventisei milioni.',
        en: 'On Sabaody he wears a frayed straw hat and a fake scar, calls himself Luffy, and signs up only captains worth seventy million or more; anyone who talks back gets shot at. He boasts of a revolutionary father, a hero for a grandfather and a four-hundred-million bounty, and none of it is his. The rest of his crew are impostors dressed as the other Straw Hats. When a Marine who has already fought the real Luffy flattens him with one blow, a Pacifista reads out his true bounty: twenty-six million.',
      },
      status: [
        { episode: 521, value: 'alive' },
        { episode: 523, value: 'captured' },
      ],
      affiliation: [
        {
          episode: 521,
          value: {
            it: 'Finti Pirati di Cappello di Paglia, capitano',
            en: 'Fake Straw Hat Crew, captain',
          },
        },
      ],
      epithet: [
        { episode: 521, value: { it: 'Tre Lingue', en: 'Three-Tongued' } },
      ],
      bounty: [{ episode: 521, value: 26_000_000 }],
    },
    'hammond': {
      role: {
        it: 'Uomo-pesce dei Nuovi Pirati',
        en: 'Fish-man of the New Pirates',
      },
      log: {
        it: 'Aspetta i pirati che scendono dalla superficie con l’arpione in mano e un discorso già pronto: l’isola sta cambiando padrone, e chi vuole restare deve scegliere da che parte stare. Appartiene a una ciurma di uomini-pesce che parla di un futuro in cui gli umani non contano più nulla. A chi risponde di no fa subito capire come funziona.',
        en: 'He waits for the pirates coming down from the surface with his harpoon ready and a speech already written: the island is changing hands, and anyone who means to stay has to pick a side. He belongs to a crew of fish-men who talk about a future in which humans count for nothing. Anyone who says no is shown at once how it works.',
      },
      affiliation: [
        {
          episode: 527,
          value: {
            it: 'Nuovi Pirati Uomini-Pesce',
            en: 'New Fish-Man Pirates',
          },
        },
      ],
      origin: [{ episode: 527, value: FISH_MAN_ISLAND }],
    },
    'shyarly': {
      role: {
        it: 'Proprietaria del Caffè delle Sirene',
        en: 'Owner of the Mermaid Café',
      },
      log: {
        it: 'Gestisce il Caffè delle Sirene e presta il retro del locale alla ciurma mentre il suo cuoco si riprende. Le sue visioni nella sfera di cristallo sono famose sull’isola: da bambina previde l’arrivo dei pirati, e di recente la guerra di Marineford e la morte di Barbabianca. Dice di aver smesso, perché il futuro è meglio non conoscerlo. Dopo aver incontrato il ragazzo con il cappello di paglia guarda di nuovo, e quello che vede la manda in strada a gridare che va cacciato dall’isola.',
        en: 'She runs the Mermaid Café and lends its back room to the crew while their cook recovers. Her visions in a crystal ball are famous on the island: as a child she foresaw the pirates who would come, and more recently the war at Marineford and Whitebeard’s death. She says she has given it up, because the future is better not known. After meeting the boy in the straw hat she looks again, and what she sees sends her into the street shouting that he must be thrown off the island.',
      },
      affiliation: [
        {
          episode: 529,
          value: {
            it: 'Caffè delle Sirene, proprietaria; veggente',
            en: 'Mermaid Café, owner; fortune teller',
          },
        },
      ],
      origin: [{ episode: 529, value: FISH_MAN_ISLAND }],
    },
    'ankoro': {
      chronicle: fishManIslandChronicles.ankoro,
      role: {
        it: 'Rana pescatrice degli abissi',
        en: 'Giant anglerfish of the deep',
      },
      log: {
        it: 'A meno di tremila metri di profondità, in un buio dove non brilla nulla, tiene accesa la sua esca luminosa e aspetta che una nave venga a cercare la luce. Una ciurma in cerca dei compagni dispersi la scambia per le luci dell’Isola degli Uomini-Pesce e ci punta dritta, finché dietro la luce non si spalancano le fauci. Risponde a un gigante che la stacca a pugni dalla preda e la sgrida come un animale di casa: le navi non si mangiano, quante volte deve ripeterlo, il capitano si arrabbierà.',
        en: 'Less than three thousand metres down, in a dark where nothing shines, it hangs out its glowing lure and waits for a ship to come looking for the light. A crew searching for their lost friends takes it for the lights of Fish-Man Island and sails straight at it, until the jaws open behind the glow. It answers to a giant who punches it off its prey and scolds it like a pet: ships are not for eating, how many times must he say it, the captain will be angry.',
      },
      affiliation: [
        {
          episode: 525,
          value: {
            it: 'Bestia al servizio di un capitano',
            en: 'Beast in a captain’s service',
          },
        },
        {
          episode: 526,
          value: {
            it: 'Olandese Volante, bestia di Vander Decken IX',
            en: 'Flying Dutchman, Vander Decken IX’s beast',
          },
        },
      ],
    },
    'vander-decken-ix': {
      role: {
        it: 'Capitano dell’Olandese Volante',
        en: 'Captain of the Flying Dutchman',
      },
      log: {
        it: 'Vive su una nave che nessuno vede arrivare e manda lettere a chi non le ha chieste. Il frutto del diavolo che ha mangiato gli permette di marchiare con la mano una persona o una cosa: da quel momento tutto ciò che lancia, un’ascia come una casa, vola dritto verso il marchio finché non lo raggiunge. Non gli serve mirare e non ha alcuna fretta.',
        en: 'He lives on a ship nobody sees coming and sends letters to people who never asked for them. The devil fruit he ate lets him mark a person or a thing with his hand: after that everything he throws, an axe or a house, flies straight at the mark until it arrives. He needs no aim, and he is in no hurry at all.',
      },
      affiliation: [
        {
          episode: 526,
          value: {
            it: 'Olandese Volante, capitano',
            en: 'Flying Dutchman, captain',
          },
        },
      ],
      origin: [{ episode: 526, value: FISH_MAN_ISLAND }],
      devilFruit: [{ episode: 526, value: ['mark-mark-fruit'] }],
    },
    'surume': {
      chronicle: fishManIslandChronicles.surume,
      role: { it: 'Kraken addomesticato da Rufy', en: 'Kraken tamed by Luffy' },
      log: {
        it: 'Viveva all’imbocco della corrente che scende verso l’Isola degli Uomini-Pesce e afferrava con i tentacoli le navi che la attraversavano, finché tre dei Cappello di Paglia non lo hanno messo al tappeto. Poi tempesta di colpi un gigante finché non sviene e si porta la Sunny in testa, e Rufy gli dà il nome di Seppy, un nome da seppia per un polpo. Vander Decken IX lo conosce di fama come il mostro dell’Artico. Il vulcano sottomarino lo terrorizza: scappa a tutta velocità e si butta nella fossa appena Rufy glielo dice.',
        en: 'He lived at the mouth of the current that runs down to Fish-Man Island, grabbing the ships that came through it in his tentacles, until three of the Straw Hats knocked him out. Then he beats a giant senseless with a flurry of blows and carries the Sunny on his head, and Luffy names him Surume, a squid’s name for an octopus. Vander Decken IX knows him by reputation as the monster of the Arctic. The undersea volcano terrifies him: he bolts flat out, and dives into the trench the moment Luffy tells him to.',
      },
      status: [{ episode: 526, value: 'alive' }],
      affiliation: [
        {
          episode: 526,
          value: {
            it: 'Pirati di Cappello di Paglia, addomesticato da Rufy',
            en: 'Straw Hat Pirates, tamed by Luffy',
          },
        },
        {
          episode: 556,
          value: {
            it: 'Pirati di Cappello di Paglia, animale domestico; già schiavo di Hody Jones',
            en: 'Straw Hat Pirates, pet; formerly Hody Jones’s slave',
          },
        },
      ],
      origin: [{ episode: 556, value: { it: 'Polo Nord', en: 'North Pole' } }],
      epithet: [
        {
          episode: 526,
          value: {
            it: 'il Mostro dell’Artico',
            en: 'the Monster of the Arctic',
          },
        },
      ],
    },
    'wadatsumi': {
      chronicle: fishManIslandChronicles.wadatsumi,
      role: {
        it: 'Il gigante di Vander Decken IX',
        en: 'Vander Decken IX’s giant',
      },
      log: {
        it: 'Emerge dalle rocce degli abissi, una sagoma d’uomo grande quanto un kraken, e la ciurma che sorprende lo prende per un mostro marino. Obbedisce al capitano Vander Decken, a cui si rivolge con tutto il rispetto, e bada alla rana pescatrice Lucetto come a un animale di casa, ricordandole ogni volta che le navi non si mangiano, se no il capitano si arrabbia. Quando il capitano dice di abbattere una nave, carica il pugno; quando dice di tirare, si mette a trainare l’Olandese Volante lontano dal pericolo.',
        en: 'He rises out of the rocks of the deep, a man-shaped figure the size of a kraken, and the crew he surprises take him for a sea monster. He obeys Captain Vander Decken, whom he never names without a respectful “sir”, and minds the anglerfish Ankoro like a pet, forever reminding it that ships are not for eating, or the captain will be angry. When his captain says knock a ship down, he winds up his fist; when the captain says pull, he tows the Flying Dutchman out of harm’s way.',
      },
      status: [{ episode: 526, value: 'alive' }],
      affiliation: [
        {
          episode: 526,
          value: {
            it: 'Olandese Volante, sottoposto di Vander Decken IX',
            en: 'Flying Dutchman, Vander Decken IX’s underling',
          },
        },
        { episode: 790, value: { it: 'Pirati del Sole', en: 'Sun Pirates' } },
      ],
      epithet: [
        { episode: 537, value: { it: 'il Gigante', en: 'the Large Monk' } },
      ],
    },
    'hody-jones': {
      role: {
        it: 'Capitano dei Nuovi Pirati Uomini-Pesce',
        en: 'Captain of the New Fish-Man Pirates',
      },
      log: {
        it: 'Comanda dal Quartiere degli Uomini-Pesce, il fondo dell’isola dove nessuno scende volentieri, una ciurma che cresce di giorno in giorno. Dice che il regno ha tradito la propria gente inchinandosi agli umani e che il trono va rovesciato. Manda giù pastiglie di steroidi energetici come fossero caramelle, e la forza che gli danno gli basta.',
        en: 'He commands a crew that grows by the day from the Fish-Man District, the bottom of the island where nobody goes willingly. He says the kingdom betrayed its own people by bowing to the humans, and that the throne has to come down. He swallows energy steroids like sweets, and the strength they hand him is enough for him.',
      },
      status: [
        { episode: 527, value: 'alive' },
        { episode: 569, value: 'imprisoned' },
      ],
      affiliation: [
        {
          episode: 527,
          value: {
            it: 'Nuovi Pirati Uomini-Pesce, capitano',
            en: 'New Fish-Man Pirates, captain',
          },
        },
        { episode: 574, value: { it: 'Imprigionato', en: 'Imprisoned' } },
      ],
      origin: [
        {
          episode: 527,
          value: {
            it: 'Quartiere degli Uomini-Pesce',
            en: 'Fish-Man District',
          },
        },
      ],
    },
    'neptune': {
      role: { it: 'Re del Regno di Ryugu', en: 'King of the Ryugu Kingdom' },
      log: {
        it: 'Scende dal palazzo in groppa alla sua balena, senza guardie, e nella piazza la gente non lo ha mai visto di persona. Arrivando grida il proprio nome. È venuto per gli umani che lo squalo Megalo gli indica, e li invita al Palazzo di Ryugu.',
        en: 'He rides down from the palace on his whale with no guards, and in the square below people have never seen him in person. He shouts his own name as he arrives. He has come for the humans the shark Megalo points out, and he invites them to the Ryugu Palace.',
      },
      affiliation: [
        {
          episode: 530,
          value: { it: 'Regno di Ryugu, re', en: 'Ryugu Kingdom, king' },
        },
      ],
      origin: [{ episode: 530, value: FISH_MAN_ISLAND }],
      epithet: [
        {
          episode: 533,
          value: {
            it: 'il Grande Cavaliere del Mare',
            en: 'the Great Knight of the Sea',
          },
        },
      ],
    },
    'fukaboshi': {
      role: { it: 'Principe ereditario di Ryugu', en: 'Crown prince of Ryugu' },
      log: {
        it: 'Guida i ministri e l’armata del regno ed è il più misurato dei tre fratelli: ascolta prima di alzare la voce e non promette nulla che non possa mantenere. Porta una lancia con la punta a forma di squalo ed è il primo a rendersi conto di quanto sia grave quello che sta montando nel Quartiere degli Uomini-Pesce.',
        en: 'He leads the ministers and the kingdom’s army and is the steadiest of the three brothers: he listens before raising his voice and promises nothing he cannot deliver. He carries a lance with a shark-shaped head, and he is the first to work out how serious the thing rising in the Fish-Man District really is.',
      },
      affiliation: [
        {
          episode: 529,
          value: {
            it: 'Regno di Ryugu, principe ereditario',
            en: 'Ryugu Kingdom, crown prince',
          },
        },
        {
          episode: 530,
          value: {
            it: 'Regno di Ryugu, principe ereditario; Armata di Nettuno',
            en: 'Ryugu Kingdom, crown prince; Neptune Army',
          },
        },
      ],
      origin: [{ episode: 529, value: FISH_MAN_ISLAND }],
    },
    'ryuboshi': {
      role: { it: 'Principe di Ryugu', en: 'Prince of Ryugu' },
      log: {
        it: 'Finisce quasi ogni frase su un acuto, con la bocca spalancata come se fosse sempre a teatro, e i fratelli hanno smesso da un pezzo di farci caso. Sotto la posa c’è un principe che si batte con la sciabola e che non lascia il palazzo quando le cose si mettono male. Le sue note si sentono da un capo all’altro del salone.',
        en: 'He ends nearly every sentence on a high note, mouth wide open as if he were always on stage, and his brothers gave up noticing years ago. Behind the pose is a prince who fights with a sabre and does not leave the palace when things turn bad. His singing carries from one end of the hall to the other.',
      },
      affiliation: [
        {
          episode: 529,
          value: {
            it: 'Regno di Ryugu, principe',
            en: 'Ryugu Kingdom, prince',
          },
        },
      ],
      origin: [{ episode: 529, value: FISH_MAN_ISLAND }],
    },
    'manboshi': {
      role: { it: 'Principe di Ryugu', en: 'Prince of Ryugu' },
      log: {
        it: 'È il più tondo e il più rumoroso dei tre, un pesce luna che accompagna ogni discorso con un passo di danza e tiene il ritmo anche quando nessuno canta. Sta al fianco dei fratelli nell’armata del padre e prende la sciabola quando serve. Nel salone del palazzo lo si sente arrivare molto prima di vederlo.',
        en: 'He is the roundest and the loudest of the three, a sunfish who sets every sentence to a dance step and keeps time even when nobody is singing. He stands with his brothers in his father’s army and takes up a sabre when he has to. In the palace hall you hear him coming long before you see him.',
      },
      affiliation: [
        {
          episode: 529,
          value: {
            it: 'Regno di Ryugu, principe',
            en: 'Ryugu Kingdom, prince',
          },
        },
      ],
      origin: [{ episode: 529, value: FISH_MAN_ISLAND }],
    },
    'shirahoshi': {
      role: {
        it: 'Principessa del Regno di Ryugu',
        en: 'Princess of the Ryugu Kingdom',
      },
      log: {
        it: 'È la figlia più piccola del re e l’unica femmina, una sirena alta quanto il salone che la ospita e pronta a piangere per un nonnulla. Da dieci anni non esce dalla torre in cui vive: le hanno detto che là fuori c’è qualcuno che la vuole morta e lei ha smesso di chiedere perché. Dalla finestra guarda un mare che non le è mai stato concesso.',
        en: 'She is the king’s youngest child and his only daughter, a mermaid as tall as the hall that holds her and ready to cry at nothing at all. She has not left her tower in ten years: she was told that somebody out there wants her dead and she stopped asking why. From the window she watches a sea she has never been allowed into.',
      },
      affiliation: [
        {
          episode: 531,
          value: {
            it: 'Regno di Ryugu, principessa',
            en: 'Ryugu Kingdom, princess',
          },
        },
        {
          episode: 878,
          value: {
            it: 'Regno di Ryugu, principessa, al Consiglio dei Re',
            en: 'Ryugu Kingdom, princess, at the Reverie',
          },
        },
      ],
      origin: [{ episode: 531, value: FISH_MAN_ISLAND }],
      epithet: [
        {
          episode: 531,
          value: { it: 'Principessa Sirena', en: 'Mermaid Princess' },
        },
      ],
    },
    'hyouzou': {
      role: { it: 'Spadaccino prezzolato', en: 'Sword for hire' },
      log: {
        it: 'Tiene una sciabola per braccio e passa il veleno su ogni lama prima di muoversi, perché gli basta un graffio. Si vende a chi paga, e adesso paga la ciurma del Quartiere degli Uomini-Pesce, che lo presenta come il proprio spadaccino. Chiede più soldi a metà lavoro e nessuno dei suoi nuovi compagni se ne stupisce.',
        en: 'He holds a sabre in every arm and runs poison along each blade before he moves, because one scratch is all he needs. He sells himself to whoever pays, and what pays now is the crew from the Fish-Man District, who introduce him as their swordsman. He asks for more money halfway through a job and none of his new companions looks surprised.',
      },
      affiliation: [
        {
          episode: 530,
          value: {
            it: 'Nuovi Pirati Uomini-Pesce, assassino',
            en: 'New Fish-Man Pirates, assassin',
          },
        },
      ],
      origin: [{ episode: 530, value: FISH_MAN_ISLAND }],
    },
    'zeo': {
      role: {
        it: 'Ufficiale dei Nuovi Pirati Uomini-Pesce',
        en: 'Officer of the New Fish-Man Pirates',
      },
      log: {
        it: 'È uno dei quattro ufficiali intorno al capitano e si muove come se l’isola lo nascondesse: sparisce contro il corallo e contro la pietra e riappare a un passo da chi lo stava cercando. Parla dei tempi in cui gli uomini-pesce facevano paura alla superficie e vuole riportarli indietro con le armi.',
        en: 'He is one of the four officers around the captain, and he moves as though the island itself hid him: he disappears against coral and stone and turns up a step away from whoever was looking for him. He talks about the days when fish-men frightened the surface, and means to bring them back by force.',
      },
      affiliation: [{ episode: 530, value: NEW_FISH_MAN_OFFICER }],
      origin: [{ episode: 530, value: FISH_MAN_ISLAND }],
    },
    'daruma': {
      role: {
        it: 'Ufficiale dei Nuovi Pirati Uomini-Pesce',
        en: 'Officer of the New Fish-Man Pirates',
      },
      log: {
        it: 'Non arriva alla cintura degli altri ufficiali e non gli serve: sparisce sotto il pavimento e riemerge dove nessuno lo aspetta, lasciando un buco con il bordo pieno di segni di denti. Mastica la pietra come fosse pane e ride mentre lo fa. Gli altri tre lo trattano da bambino e lo mandano avanti lo stesso.',
        en: 'He does not reach the other officers’ belts and does not need to: he vanishes under the floor and comes up where nobody expects him, leaving a hole rimmed with tooth marks. He chews stone as if it were bread and laughs while he does it. The other three treat him like a child and send him in first anyway.',
      },
      affiliation: [{ episode: 530, value: NEW_FISH_MAN_OFFICER }],
      origin: [{ episode: 530, value: FISH_MAN_ISLAND }],
    },
    'ikaros-much': {
      role: {
        it: 'Ufficiale dei Nuovi Pirati Uomini-Pesce',
        en: 'Officer of the New Fish-Man Pirates',
      },
      log: {
        it: 'È il più grosso dei quattro ufficiali e il più lento, con sei braccia e in ognuna una lancia che sembra un calamaro messo a seccare. Quando colpisce lascia il segno su una parete di pietra. Parla poco, esegue quello che il capitano gli dice ed è l’unico del gruppo che non alza mai la voce.',
        en: 'He is the biggest of the four officers and the slowest, with six arms and a lance in every one of them, each shaped like a squid left out to dry. One blow leaves its mark on a stone wall. He says little, does what his captain tells him, and is the only one of the group who never raises his voice.',
      },
      affiliation: [{ episode: 530, value: NEW_FISH_MAN_OFFICER }],
      origin: [{ episode: 530, value: FISH_MAN_ISLAND }],
    },
    'dosun': {
      role: {
        it: 'Ufficiale dei Nuovi Pirati Uomini-Pesce',
        en: 'Officer of the New Fish-Man Pirates',
      },
      log: {
        it: 'Ha la testa a martello e in mano una mazza più alta di un uomo, e usa tutte e due allo stesso modo. Ogni volta che apre bocca accompagna le parole con un colpo, e il pavimento sotto di lui non resta mai intero. È il quarto degli ufficiali intorno al capitano e non ha mai discusso un ordine.',
        en: 'He has a hammerhead and carries a mallet taller than a man, and he uses the two of them the same way. Every time he opens his mouth he lands a blow with it, and the floor under him never stays whole. He is the fourth of the officers around the captain and has never once argued with an order.',
      },
      affiliation: [{ episode: 530, value: NEW_FISH_MAN_OFFICER }],
      origin: [{ episode: 530, value: FISH_MAN_ISLAND }],
    },
    'megalo': {
      chronicle: fishManIslandChronicles.megalo,
      role: {
        it: 'Squalo del Palazzo di Ryugu',
        en: 'Shark of the Ryugu Palace',
      },
      log: {
        it: 'Nelle profondità, i Cappello di Paglia mettono al tappeto il kraken che lo teneva stretto, e lui si ferma davanti a loro come per ringraziarli. Ricompare sull’Isola degli Uomini-Pesce accanto al re, che gli chiede se sono davvero quelli giusti. Quando gli ordina di portarli, risponde con un verso allegro e parte con tutto il gruppo sul dorso verso il Palazzo di Ryugu, dove li aspetta un banchetto.',
        en: 'Down in the deep, the Straw Hats knock out the kraken that had him in its grip, and he stops in front of them as if to say thank you. He turns up again on Fish-Man Island beside the king, who asks him whether these are really the right people. Told to carry them, he answers with a cheerful sound and sets off with the whole group on his back for the Ryugu Palace, where a feast is ready.',
      },
      affiliation: [
        { episode: 530, value: { it: 'Regno di Ryugu', en: 'Ryugu Kingdom' } },
        {
          episode: 531,
          value: {
            it: 'Regno di Ryugu, animale della principessa',
            en: 'Ryugu Kingdom, the princess’s pet',
          },
        },
        {
          episode: 553,
          value: {
            it: 'Regno di Ryugu, animale della principessa; un tempo dell’Armata di Nettuno',
            en: 'Ryugu Kingdom, the princess’s pet; formerly the Neptune Army’s',
          },
        },
      ],
    },
    'den': {
      role: { it: 'Carpentiere dell’isola', en: 'Shipwright of the island' },
      log: {
        it: 'Studia la Foresta Marina, dove la corrente porta le navi che affondano intorno all’isola, ed è carpentiere come il fratello maggiore Tom. Dalle lettere di Kokoro sa che cosa è stato di Tom, e ha già sentito parlare di Franky e Iceburg. A Tom non somiglia per niente, e spiega che sull’Isola degli Uomini-Pesce i figli prendono spesso da un antenato lontano invece che dai genitori. Si offre di rivestire lui stesso la Thousand Sunny.',
        en: 'He studies the Sea Forest, where the tide carries the ships that sink around the island, and he is a shipwright like his elder brother Tom. Kokoro’s letters have told him what became of Tom, and about Franky and Iceburg. He looks nothing like Tom, and he explains that on Fish-Man Island children often take after a distant ancestor rather than their parents. He offers to coat the Thousand Sunny himself.',
      },
      affiliation: [
        {
          episode: 535,
          value: {
            it: 'Carpentiere dell’Isola degli Uomini-Pesce; fratello minore di Tom',
            en: 'Shipwright of Fish-Man Island; Tom’s younger brother',
          },
        },
      ],
      origin: [{ episode: 535, value: FISH_MAN_ISLAND }],
    },
    'minister-of-the-right': {
      chronicle: fishManIslandChronicles['minister-of-the-right'],
      role: { it: 'Ministro di re Nettuno', en: 'Minister of King Neptune' },
      log: {
        it: 'Rimprovera il re come si fa con un ragazzino: è uscito dal palazzo da solo, senza scorta, proprio mentre il paese attraversa un momento delicato. Quando la principessa grida corre alla torre con le guardie, è sicuro di aver sentito una voce che non dovrebbe esserci e lascia perdere quando lei gli dice che era la sua pancia. Le spiega che i Cappello di Paglia verranno arrestati, sospettati di aver rapito le sirene scomparse e indicati da una predizione di madame Sharley, e gli dispiace mettere le corde a chi ha salvato Megalo. Allo scadere dei cinque minuti se ne va e ordina di chiudere la porta a doppia mandata.',
        en: 'He scolds the king the way one scolds a boy: he left the palace alone, with no escort, at the very moment the country is on edge. When the princess cries out he runs to her tower with the guards, is sure he heard a voice that should not be there, and lets it go when she tells him it was her stomach. He explains that the Straw Hats are to be arrested, suspected of carrying off the missing mermaids and named by a prediction of Madam Shyarly, and he is sorry to put ropes on the people who saved Megalo. When his five minutes are up he leaves, and orders the door locked tight.',
      },
      status: [{ episode: 532, value: 'alive' }],
      affiliation: [
        {
          episode: 532,
          value: {
            it: 'Regno di Ryugu, ministro',
            en: 'Ryugu Kingdom, minister',
          },
        },
        {
          episode: 539,
          value: {
            it: 'Regno di Ryugu, ministro; Armata di Nettuno',
            en: 'Ryugu Kingdom, minister; Neptune Army',
          },
        },
      ],
    },
    'otohime': {
      role: {
        it: 'Regina del Regno di Ryugu',
        en: 'Queen of the Ryugu Kingdom',
      },
      log: {
        it: 'Piccola, fragile e incapace di alzare le mani su chiunque, ha deciso che l’isola deve smettere di odiare la superficie e raccoglie le firme una per una, in mezzo a chi le sputa addosso. Vuole portare gli uomini-pesce a vivere sotto il sole e ripete che nessuno cambia idea per paura. Il marito la lascia fare e la ascolta.',
        en: 'Small, frail and unable to raise a hand against anyone, she decided the island had to stop hating the surface and gathers signatures one at a time, among people who spit at her. She wants fish-men living under the sun, and repeats that nobody ever changes their mind out of fear. Her husband lets her go, and listens.',
      },
      status: [{ episode: 539, value: 'deceased' }],
      affiliation: [
        {
          episode: 539,
          value: { it: 'Regno di Ryugu, regina', en: 'Ryugu Kingdom, queen' },
        },
      ],
      origin: [{ episode: 539, value: FISH_MAN_ISLAND }],
    },
    'fisher-tiger': {
      role: {
        it: 'Capitano dei Pirati del Sole',
        en: 'Captain of the Sun Pirates',
      },
      log: {
        it: 'Lascia l’Isola degli Uomini-Pesce per vedere il mondo e ne torna con i segni delle catene ai polsi. Poi risale la Red Line da solo, apre le celle di Mary Geoise e porta giù chiunque riesca a camminare, di qualunque razza sia. Sulla pelle dei liberati fa marchiare un sole che copre il marchio dei Nobili, e con loro fonda una ciurma.',
        en: 'He leaves Fish-Man Island to see the world and comes back with chain marks on his wrists. Then he climbs the Red Line alone, opens the cells of Mary Geoise and brings down everyone who can still walk, of whatever race. On the freed he has a sun burned over the Nobles’ brand, and with them he founds a crew.',
      },
      status: [
        { episode: 539, value: 'alive' },
        { episode: 543, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 539,
          value: {
            it: 'Pirati del Sole, capitano',
            en: 'Sun Pirates, captain',
          },
        },
      ],
      origin: [{ episode: 539, value: FISH_MAN_ISLAND }],
      epithet: [
        { episode: 539, value: { it: 'l’Avventuriero', en: 'the Adventurer' } },
      ],
      bounty: [{ episode: 541, value: 230_000_000 }],
    },
    'aladine': {
      role: { it: 'Medico di bordo', en: 'Ship’s doctor' },
      log: {
        it: 'Naviga con la ciurma nata dalla liberazione degli schiavi e ne è il medico: cura le ferite dei compagni e, quando serve, anche quelle di chi hanno appena affrontato. Porta il sole marchiato sulla pelle come tutti gli altri a bordo. È fra i più pacati della nave e uno dei pochi che dice al capitano quando ha esagerato.',
        en: 'He sails with the crew born out of the slave rescue and he is its doctor: he treats his companions’ wounds and, when it comes to that, the wounds of the people they have just fought. He carries the sun burned into his skin like everyone else aboard. He is among the calmest on the ship and one of the few who tells the captain when he has gone too far.',
      },
      affiliation: [
        {
          episode: 541,
          value: { it: 'Pirati del Sole, medico', en: 'Sun Pirates, doctor' },
        },
        {
          episode: 785,
          value: {
            it: 'Pirati del Sole, capitano, sotto Big Mom',
            en: 'Sun Pirates, captain, under Big Mom',
          },
        },
      ],
      origin: [{ episode: 541, value: FISH_MAN_ISLAND }],
    },
    'minister-of-the-left': {
      chronicle: fishManIslandChronicles['minister-of-the-left'],
      role: { it: 'Ministro di re Nettuno', en: 'Minister of King Neptune' },
      log: {
        it: 'Sbuffa mentre il re viene rimproverato per le sue uscite senza scorta, e quando arriva la notizia della predizione è lui a dichiarare in arresto i Cappello di Paglia: la loro resistenza, dice, è il prologo del futuro annunciato. Legato dopo la sconfitta, spiega a Nami che con un Log Pose così semplice il Nuovo Mondo non si attraversa, e concede a Zoro che offrire un tè e parlare sarebbe forse stata una strada. Quando nel palazzo compaiono Vander Decken e Hody, accusa la ciurma di essere loro complice. Anni prima avrebbe voluto che la regina Otohime facesse i suoi discorsi in video, e il giorno in cui lei parlò ubriaca a tutto il regno fu lui a correre ad avvertirla.',
        en: 'He groans along while the king is scolded for slipping out without an escort, and when word of the prediction arrives it is he who declares the Straw Hats under arrest: their resistance, he says, is the prologue of the future foretold. Tied up after the defeat, he tells Nami that a Log Pose that simple will never cross the New World, and grants Zoro that offering tea and talking might have been one way. When Vander Decken and Hody turn up in the palace, he accuses the crew of being in league with them. Years before, he wished the queen, Otohime, would give her speeches by video, and on the day she spoke drunk to the whole kingdom it was he who ran to warn her.',
      },
      status: [{ episode: 544, value: 'alive' }],
      affiliation: [
        {
          episode: 544,
          value: {
            it: 'Regno di Ryugu, ministro',
            en: 'Ryugu Kingdom, minister',
          },
        },
      ],
    },
    'pekoms': {
      role: {
        it: 'Combattente dei Pirati di Big Mom',
        en: 'Combatant of the Big Mom Pirates',
      },
      log: {
        it: 'Arriva sull’isola a nome di un Imperatore e non ha bisogno di alzare la voce: si presenta, chiede la cassa di caramelle che il regno consegna ogni mese e aspetta che gliela portino. Quando il tributo non è pronto la cortesia finisce e lui si chiude dentro un guscio da tartaruga. Dice che l’isola è protetta finché la consegna arriva puntuale.',
        en: 'He arrives on the island in the name of an Emperor and has no need to raise his voice: he introduces himself, asks for the crate of sweets the kingdom hands over every month, and waits for it to be brought. When the tribute is not ready the courtesy stops and he shuts himself inside a turtle shell. He says the island is protected as long as the delivery is on time.',
      },
      affiliation: [
        {
          episode: 571,
          value: {
            it: 'Pirati di Big Mom, combattente',
            en: 'Big Mom Pirates, combatant',
          },
        },
      ],
      origin: [{ episode: 762, value: { it: 'Zou', en: 'Zou' } }],
      devilFruit: [{ episode: 571, value: ['turtle-turtle-fruit'] }],
      bounty: [{ episode: 572, value: 330_000_000 }],
    },
    'baron-tamago': {
      role: {
        it: 'Combattente dei Pirati di Big Mom',
        en: 'Combatant of the Big Mom Pirates',
      },
      log: {
        it: 'Ha il corpo di un uovo, il cilindro in testa e un bastone che non usa quasi mai per camminare. Scende sull’isola insieme al compagno venuto a ritirare il tributo di caramelle dovuto a Big Mom e lascia parlare lui. Misura ogni cosa in minuti, e quando qualcosa va per le lunghe lo fa notare con garbo.',
        en: 'He has the body of an egg, a top hat above it and a cane he almost never walks with. He comes down to the island beside the companion collecting the tribute of sweets owed to Big Mom, and lets him do the talking. He measures everything in minutes, and when something drags on he points it out politely.',
      },
      affiliation: [
        {
          episode: 571,
          value: {
            it: 'Pirati di Big Mom, combattente',
            en: 'Big Mom Pirates, combatant',
          },
        },
      ],
      devilFruit: [{ episode: 571, value: ['egg-egg-fruit'] }],
      bounty: [{ episode: 816, value: 429_000_000 }],
    },
    'bobbin': {
      chronicle: fishManIslandChronicles.bobbin,
      role: {
        it: 'Combattente dei Pirati di Big Mom',
        en: 'Combatant of the Big Mom Pirates',
      },
      log: {
        it: 'Chiama Mama l’Imperatrice che serve e torna da lei a lavoro finito: il paese che le aveva promesso dei dolci senza riuscire a sfornarli è stato battuto e dato alle fiamme. A lei dispiace soltanto per i suoi biscotti. La prima cosa che lui chiede, dopo, è se c’è qualcosa da mangiare. Poi riferisce una chiamata di Pekoms e domanda, con la stessa leggerezza, se deve bruciare anche l’Isola degli Uomini-Pesce.',
        en: 'He calls the Emperor he serves Mama, and comes home to her with the job done: the country that promised her sweets and failed to bake them has been beaten and burned. She only regrets its pastries. The first thing he asks afterwards is whether there are any snacks. Then he passes on a call from Pekoms and asks, just as lightly, whether Fish-Man Island should burn too.',
      },
      affiliation: [
        {
          episode: 571,
          value: {
            it: 'Pirati di Big Mom, combattente',
            en: 'Big Mom Pirates, combatant',
          },
        },
      ],
      epithet: [
        { episode: 809, value: { it: 'il Taccagno', en: 'the Sweeper' } },
      ],
      bounty: [{ episode: 823, value: 105_500_000 }],
    },
  },
}
