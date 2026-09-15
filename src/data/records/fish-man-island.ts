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
      id: 'fish-man-island',
      kind: 'arc',
      revealedAtEpisode: 517,
      revealedAtChapter: 598,
      name: {
        it: 'Saga dell’Isola degli Uomini-Pesce',
        en: 'Fish-Man Island Saga',
      },
      summary: {
        it: 'Una città chiusa in una bolla d’aria a diecimila metri sotto il mare, appesa alle radici di un albero enorme, ultima tappa prima del Nuovo Mondo.',
        en: 'A city inside an air bubble ten thousand metres down, hung from the roots of an enormous tree, the last stop before the New World.',
      },
      visual: { art: 'fish-man-island', tint: 'cyan' },
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
      id: 'hammond',
      kind: 'character',
      revealedAtEpisode: 523,
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
      revealedAtEpisode: 524,
      revealedAtChapter: 612,
      name: { it: 'Sharley', en: 'Shyarly' },
      summary: {
        it: 'La proprietaria del Caffè delle Sirene, una sirena con la coda da squalo che legge il futuro in una sfera di cristallo e non ha mai sbagliato.',
        en: 'The owner of the Mermaid Café, a mermaid with a shark’s tail who reads the future in a crystal ball and has never once been wrong.',
      },
      visual: { art: 'shyarly', tint: 'violet' },
    },
    {
      id: 'vander-decken-ix',
      kind: 'character',
      revealedAtEpisode: 526,
      revealedAtChapter: 615,
      name: { it: 'Vander Decken IX', en: 'Vander Decken IX' },
      summary: {
        it: 'Il capitano dei Pirati Volanti, che tocca un bersaglio una volta sola e da quel momento qualunque cosa lanci lo insegue finché non lo colpisce.',
        en: 'The captain of the Flying Pirates, who touches a target once and from then on anything he throws chases it down until it lands.',
      },
      visual: { art: 'vander-decken-ix', tint: 'acid' },
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
      id: 'neptune',
      kind: 'character',
      revealedAtEpisode: 528,
      revealedAtChapter: 615,
      name: { it: 'Nettuno', en: 'Neptune' },
      summary: {
        it: 'Il re del Regno di Ryugu, un tritone enorme con la barba bianca e un tridente, che governa dal palazzo di corallo in fondo all’isola.',
        en: 'The king of the Ryugu Kingdom, an enormous white-bearded merman with a trident, ruling from the coral palace at the bottom of the island.',
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
        it: 'Il primogenito di Nettuno, un tritone squalo che comanda l’armata del regno con una lancia e parla a nome del padre.',
        en: 'Neptune’s eldest son, a shark merman who commands the kingdom’s army with a lance and speaks in his father’s name.',
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
      revealedAtEpisode: 530,
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
      id: 'den',
      kind: 'character',
      revealedAtEpisode: 531,
      revealedAtChapter: 620,
      name: { it: 'Den', en: 'Den' },
      summary: {
        it: 'Il carpentiere dell’Isola degli Uomini-Pesce, che rimette a posto gli scafi scesi dalla superficie e dice di essere il fratello minore di Tom.',
        en: 'The shipwright of Fish-Man Island, who puts right the hulls that come down from the surface and says he is Tom’s younger brother.',
      },
      visual: { art: 'den', tint: 'cyan' },
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
      affiliation: [
        {
          episode: 517,
          value: {
            it: 'Pirati di Caribou, capitano',
            en: 'Caribou Pirates, captain',
          },
        },
        {
          episode: 574,
          value: {
            it: 'Catturato, poi prigioniero di Kid',
            en: 'Captured, later Kid’s prisoner',
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
          episode: 523,
          value: {
            it: 'Nuovi Pirati Uomini-Pesce',
            en: 'New Fish-Man Pirates',
          },
        },
      ],
      origin: [{ episode: 523, value: FISH_MAN_ISLAND }],
    },
    'shyarly': {
      role: {
        it: 'Proprietaria del Caffè delle Sirene',
        en: 'Owner of the Mermaid Café',
      },
      log: {
        it: 'Tiene il caffè dove le sirene vanno a farsi dire che cosa le aspetta, e sull’isola nessuno prende le sue parole alla leggera: quello che vede nella sfera è sempre accaduto. Non sceglie che cosa vedere e non spiega come funzioni, e quando una visione le pesa preferisce non dire niente a nessuno.',
        en: 'She keeps the café where mermaids come to be told what is waiting for them, and nobody on the island takes her word lightly: what she sees in the ball has always happened. She does not choose what she sees and does not explain how it works, and when a vision weighs on her she says nothing at all.',
      },
      affiliation: [
        {
          episode: 524,
          value: {
            it: 'Caffè delle Sirene, proprietaria; veggente',
            en: 'Mermaid Café, owner; fortune teller',
          },
        },
      ],
      origin: [{ episode: 524, value: FISH_MAN_ISLAND }],
    },
    'vander-decken-ix': {
      role: {
        it: 'Capitano dei Pirati Volanti',
        en: 'Captain of the Flying Pirates',
      },
      log: {
        it: 'Vive su una nave che nessuno vede arrivare e manda lettere a chi non le ha chieste. Il frutto del diavolo che ha mangiato gli permette di marchiare con la mano una persona o una cosa: da quel momento tutto ciò che lancia, un’ascia come una casa, vola dritto verso il marchio finché non lo raggiunge. Non gli serve mirare e non ha alcuna fretta.',
        en: 'He lives on a ship nobody sees coming and sends letters to people who never asked for them. The devil fruit he ate lets him mark a person or a thing with his hand: after that everything he throws, an axe or a house, flies straight at the mark until it arrives. He needs no aim, and he is in no hurry at all.',
      },
      affiliation: [
        {
          episode: 526,
          value: {
            it: 'Pirati Volanti, capitano',
            en: 'Flying Pirates, captain',
          },
        },
      ],
      origin: [{ episode: 526, value: FISH_MAN_ISLAND }],
      devilFruit: [{ episode: 526, value: ['mark-mark-fruit'] }],
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
        it: 'Siede su un trono di corallo in un palazzo pieno d’acqua e si muove con la lentezza allegra di chi ha già visto tutto. È forte abbastanza da essere chiamato il Grande Cavaliere del Mare e mite abbastanza da ridere di sé stesso davanti alla corte. Vuole che la sua gente possa vivere sotto il sole e non perde occasione per ripeterlo.',
        en: 'He sits on a coral throne in a palace full of water and moves with the cheerful slowness of a man who has seen everything already. He is strong enough to be called the Great Knight of the Sea and mild enough to laugh at himself in front of his court. He wants his people living under the sun, and he says so at every chance.',
      },
      affiliation: [
        {
          episode: 528,
          value: { it: 'Regno di Ryugu, re', en: 'Ryugu Kingdom, king' },
        },
      ],
      origin: [{ episode: 528, value: FISH_MAN_ISLAND }],
      epithet: [
        {
          episode: 528,
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
        it: 'Guida i ministri e l’armata di Nettuno ed è il più misurato dei tre fratelli: ascolta prima di alzare la voce e non promette nulla che non possa mantenere. Porta una lancia con la punta a forma di squalo ed è il primo a rendersi conto di quanto sia grave quello che sta montando nel Quartiere degli Uomini-Pesce.',
        en: 'He leads the ministers and the Neptune Army and is the steadiest of the three brothers: he listens before raising his voice and promises nothing he cannot deliver. He carries a lance with a shark-shaped head, and he is the first to work out how serious the thing rising in the Fish-Man District really is.',
      },
      affiliation: [
        {
          episode: 529,
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
          episode: 530,
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
      origin: [{ episode: 530, value: FISH_MAN_ISLAND }],
      epithet: [
        {
          episode: 530,
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
    'den': {
      role: { it: 'Carpentiere dell’isola', en: 'Shipwright of the island' },
      log: {
        it: 'Tiene il cantiere dell’isola e lavora sugli scafi che scendono dalla superficie coperti di resina, con il martello in mano e le bolle che gli salgono intorno. Dice di essere il fratello minore di Tom, il carpentiere di cui si parla ancora a Water Seven, e a chi lo ha conosciuto basta guardarlo. Per il lavoro non chiede niente.',
        en: 'He runs the island’s yard and works on the hulls that come down from the surface under their coating, mallet in hand and bubbles rising around him. He says he is the younger brother of Tom, the shipwright people still talk about in Water Seven, and anyone who knew him only has to look. He asks nothing for the work.',
      },
      affiliation: [
        {
          episode: 531,
          value: {
            it: 'Carpentiere dell’Isola degli Uomini-Pesce; fratello minore di Tom',
            en: 'Shipwright of Fish-Man Island; Tom’s younger brother',
          },
        },
      ],
      origin: [{ episode: 531, value: FISH_MAN_ISLAND }],
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
      affiliation: [
        {
          episode: 539,
          value: {
            it: 'Regno di Ryugu, regina, defunta',
            en: 'Ryugu Kingdom, queen, deceased',
          },
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
      affiliation: [
        {
          episode: 539,
          value: {
            it: 'Pirati del Sole, capitano, defunto',
            en: 'Sun Pirates, captain, deceased',
          },
        },
      ],
      origin: [{ episode: 539, value: FISH_MAN_ISLAND }],
      epithet: [
        { episode: 539, value: { it: 'l’Avventuriero', en: 'the Adventurer' } },
      ],
      bounty: [{ episode: 539, value: 230_000_000 }],
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
      origin: [{ episode: 571, value: { it: 'Zou', en: 'Zou' } }],
      devilFruit: [{ episode: 571, value: ['turtle-turtle-fruit'] }],
      bounty: [{ episode: 571, value: 330_000_000 }],
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
      bounty: [{ episode: 571, value: 429_000_000 }],
    },
  },
}
