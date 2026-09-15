import type { Saga } from './saga'

/**
 * The Egghead arc, episodes 1086 to 1122: the first island of the final
 * saga, a laboratory that lives in the future.
 */

const EGGHEAD = { it: 'Egghead', en: 'Egghead' }

const MARY_GEOISE = { it: 'Mary Geoise', en: 'Mary Geoise' }

const DESTROYED = { it: 'Distrutto', en: 'Destroyed' }

const SERAPHIM = {
  it: 'Serafino, arma del Governo Mondiale',
  en: 'Seraphim, World Government weapon',
}

const SERAPHIM_ROLE = { it: 'Serafino', en: 'Seraphim' }

const ELDER_ROLE = {
  it: 'Uno dei Cinque Astri di Saggezza',
  en: 'One of the Five Elders',
}

export const egghead: Saga = {
  entries: [
    {
      id: 'egghead',
      kind: 'arc',
      revealedAtEpisode: 1089,
      revealedAtChapter: 1061,
      name: { it: 'Saga di Egghead', en: 'Egghead Saga' },
      summary: {
        it: 'La ciurma approda su un’isola che vive centinaia di anni nel futuro, costruita attorno al laboratorio di uno scienziato del Governo Mondiale.',
        en: 'The crew lands on an island living hundreds of years in the future, built around the laboratory of a World Government scientist.',
      },
      visual: { art: 'egghead', tint: 'cyan' },
    },
    {
      id: 'egghead-island',
      kind: 'place',
      revealedAtEpisode: 1089,
      revealedAtChapter: 1061,
      name: { it: 'Isola di Egghead', en: 'Egghead Island' },
      summary: {
        it: 'Un’isola-laboratorio nel Nuovo Mondo, tenuta calda da un vulcano sottomarino e piena di macchine che non dovrebbero esistere ancora.',
        en: 'A laboratory island in the New World, kept warm by an undersea volcano and full of machines that should not exist yet.',
      },
      visual: { art: 'egghead-island', tint: 'orange' },
    },
    {
      id: 'vegapunk',
      kind: 'character',
      revealedAtEpisode: 1090,
      revealedAtChapter: 1068,
      name: { it: 'Vegapunk', en: 'Vegapunk' },
      summary: {
        it: 'Lo scienziato che il mondo insegue da cinquecento anni, un vecchio dalla testa enorme a forma di lampadina che vive dentro il suo laboratorio.',
        en: 'The scientist the world is five hundred years behind, an old man with a huge bulb-shaped head who lives inside his own laboratory.',
      },
      visual: { art: 'vegapunk', tint: 'cyan' },
    },
    {
      id: 'shaka',
      kind: 'character',
      revealedAtEpisode: 1091,
      revealedAtChapter: 1065,
      name: { it: 'Shaka', en: 'Shaka' },
      summary: {
        it: 'Il primo dei satelliti di Vegapunk, un uomo in tuta corazzata e elmo a cupola, che parla piano e decide per tutto il laboratorio.',
        en: 'The first of Vegapunk’s satellites, a man in an armoured suit and a domed helmet who speaks quietly and decides for the whole laboratory.',
      },
      visual: { art: 'shaka', tint: 'ivory' },
    },
    {
      id: 'lilith',
      kind: 'character',
      revealedAtEpisode: 1091,
      revealedAtChapter: 1065,
      name: { it: 'Lilith', en: 'Lilith' },
      summary: {
        it: 'Il satellite che rappresenta il male, una donna con le corna e un fucile laser, che spara agli ospiti prima ancora di chiedere un nome.',
        en: 'The satellite that stands for evil, a horned woman with a laser rifle, who shoots at guests well before she asks anyone for a name.',
      },
      visual: { art: 'lilith', tint: 'magenta' },
    },
    {
      id: 's-snake',
      kind: 'character',
      revealedAtEpisode: 1092,
      revealedAtChapter: 1071,
      name: { it: 'S-Snake', en: 'S-Snake' },
      summary: {
        it: 'Un’arma del Governo Mondiale con l’aspetto di una bambina, ali alla schiena e berretto della Marina, che pietrifica chi la guarda troppo.',
        en: 'A World Government weapon shaped like a small girl, wings at her back and a Marine cap, who turns to stone anyone who looks too long.',
      },
      visual: { art: 's-snake', tint: 'magenta' },
    },
    {
      id: 's-hawk',
      kind: 'character',
      revealedAtEpisode: 1092,
      revealedAtChapter: 1071,
      name: { it: 'S-Hawk', en: 'S-Hawk' },
      summary: {
        it: 'Un serafino dal volto di bambino, con una spada nera enorme sulla schiena, costruito sul modello del più grande spadaccino del mondo.',
        en: 'A Seraphim with a child’s face and an enormous black sword on his back, built on the pattern of the greatest swordsman in the world.',
      },
      visual: { art: 's-hawk', tint: 'ocher' },
    },
    {
      id: 's-bear',
      kind: 'character',
      revealedAtEpisode: 1092,
      revealedAtChapter: 1071,
      name: { it: 'S-Bear', en: 'S-Bear' },
      summary: {
        it: 'Un serafino costruito sul modello di Bartholomew Kuma, con i cuscinetti sui palmi che respingono qualsiasi cosa li tocchi.',
        en: 'A Seraphim built on the pattern of Bartholomew Kuma, with paw pads on its palms that push away anything that touches them.',
      },
      visual: { art: 's-bear', tint: 'sand' },
    },
    {
      id: 's-shark',
      kind: 'character',
      revealedAtEpisode: 1092,
      revealedAtChapter: 1071,
      name: { it: 'S-Shark', en: 'S-Shark' },
      summary: {
        it: 'Un serafino dai tratti di uomo-pesce, che solleva l’acqua intorno a Egghead e la usa come una frusta contro chi difende il laboratorio.',
        en: 'A Seraphim with fish-man features, who lifts the sea around Egghead and drives it like a whip at whoever defends the laboratory.',
      },
      visual: { art: 's-shark', tint: 'blue' },
    },
    {
      id: 'edison',
      kind: 'character',
      revealedAtEpisode: 1094,
      revealedAtChapter: 1070,
      name: { it: 'Edison', en: 'Edison' },
      summary: {
        it: 'Il satellite che pensa, un uomo enorme con una lampadina accesa al posto della testa, che invita gli ospiti a sedersi e continua a progettare.',
        en: 'The satellite that thinks, a huge man with a lit bulb where a head should be, who sits his guests down and keeps on designing.',
      },
      visual: { art: 'edison', tint: 'yellow' },
    },
    {
      id: 'pythagoras',
      kind: 'character',
      revealedAtEpisode: 1094,
      revealedAtChapter: 1070,
      name: { it: 'Pythagoras', en: 'Pythagoras' },
      summary: {
        it: 'Il satellite che sa, una testa geometrica con uno schermo al posto del viso, che tiene sotto controllo ogni misura del laboratorio.',
        en: 'The satellite that knows, a geometric head with a screen for a face, keeping watch over every reading the laboratory produces.',
      },
      visual: { art: 'pythagoras', tint: 'teal' },
    },
    {
      id: 'atlas',
      kind: 'character',
      revealedAtEpisode: 1094,
      revealedAtChapter: 1070,
      name: { it: 'Atlas', en: 'Atlas' },
      summary: {
        it: 'Il satellite della forza, una donna che si infila due guanti d’acciaio grandi quanto lei e apre le porte a pugni invece che con la chiave.',
        en: 'The satellite of force, a woman who pulls on two steel gauntlets as big as she is and opens doors with her fists instead of a key.',
      },
      visual: { art: 'atlas', tint: 'orange' },
    },
    {
      id: 'york',
      kind: 'character',
      revealedAtEpisode: 1094,
      revealedAtChapter: 1070,
      name: { it: 'York', en: 'York' },
      summary: {
        it: 'Il satellite dell’avidità, una donna che dorme, mangia e si fa servire, e che si occupa delle scorte dell’isola quando le va di alzarsi.',
        en: 'The satellite of greed, a woman who sleeps, eats and has herself waited on, and who handles the island’s stores when she feels like it.',
      },
      visual: { art: 'york', tint: 'acid' },
    },
    {
      id: 'jaygarcia-saturn',
      kind: 'character',
      revealedAtEpisode: 1105,
      revealedAtChapter: 1095,
      name: { it: 'Jaygarcia Saturn', en: 'Jaygarcia Saturn' },
      summary: {
        it: 'Uno dei cinque uomini che stanno sopra il Governo Mondiale, arrivato su Egghead di persona, con il cilindro in testa e il bastone in mano.',
        en: 'One of the five men who sit above the World Government, come to Egghead in person, a top hat on his head and a cane in his hand.',
      },
      visual: { art: 'jaygarcia-saturn', tint: 'violet' },
    },
    {
      id: 'ginny',
      kind: 'character',
      revealedAtEpisode: 1112,
      revealedAtChapter: 1102,
      name: { it: 'Ginny', en: 'Ginny' },
      summary: {
        it: 'Una ragazzina del Regno di Sorbet cresciuta accanto a Kuma, che canta per i malati della chiesa e porta un fazzoletto annodato sui capelli.',
        en: 'A girl of the Sorbet Kingdom who grows up beside Kuma, singing for the sick at the church, a kerchief knotted over her hair.',
      },
      visual: { art: 'ginny', tint: 'orange' },
    },
    {
      id: 'marcus-mars',
      kind: 'character',
      revealedAtEpisode: 1122,
      revealedAtChapter: 1125,
      name: { it: 'Marcus Mars', en: 'Marcus Mars' },
      summary: {
        it: 'Uno dei cinque che comandano il Governo Mondiale, sceso su Egghead con gli altri e capace di aprirsi in una forma enorme e piumata.',
        en: 'One of the five who command the World Government, down on Egghead with the others and able to open out into a huge feathered shape.',
      },
      visual: { art: 'marcus-mars', tint: 'ice' },
    },
    {
      id: 'topman-warcury',
      kind: 'character',
      revealedAtEpisode: 1122,
      revealedAtChapter: 1125,
      name: { it: 'Topman Warcury', en: 'Topman Warcury' },
      summary: {
        it: 'Uno dei Cinque Astri di Saggezza, arrivato su Egghead con l’elmo allacciato sotto il mento e una forma che sfonda i muri come un cinghiale.',
        en: 'One of the Five Elders, arrived on Egghead with a helmet strapped under his chin and a shape that goes through walls like a boar.',
      },
      visual: { art: 'topman-warcury', tint: 'wine' },
    },
    {
      id: 'ethanbaron-v-nusjuro',
      kind: 'character',
      revealedAtEpisode: 1122,
      revealedAtChapter: 1125,
      name: { it: 'Ethanbaron V. Nusjuro', en: 'Ethanbaron V. Nusjuro' },
      summary: {
        it: 'Uno dei Cinque Astri di Saggezza, sbarcato su Egghead con una katana lunghissima che taglia quello che ha davanti quasi senza muoversi.',
        en: 'One of the Five Elders, ashore on Egghead with a very long katana that cuts what stands in front of him almost without his moving.',
      },
      visual: { art: 'ethanbaron-v-nusjuro', tint: 'ivory' },
    },
    {
      id: 'shepherd-ju-peter',
      kind: 'character',
      revealedAtEpisode: 1122,
      revealedAtChapter: 1125,
      name: { it: 'Shepherd Ju Peter', en: 'Shepherd Ju Peter' },
      summary: {
        it: 'Uno dei Cinque Astri di Saggezza, sceso su Egghead con un cappello a tesa larga e una forma che scava nel terreno e inghiotte ciò che trova.',
        en: 'One of the Five Elders, down on Egghead in a wide-brimmed hat, with a shape that burrows through the ground and swallows what it finds.',
      },
      visual: { art: 'shepherd-ju-peter', tint: 'sand' },
    },
  ],

  dossiers: {
    'vegapunk': {
      role: {
        it: 'Scienziato capo del Governo Mondiale',
        en: 'World Government chief scientist',
      },
      log: {
        it: 'Il Governo Mondiale lo tiene su un’isola sola in mezzo al Nuovo Mondo, e da lì escono le navi, le armi e i Pacifista che la Marina usa da anni. Chi approda su Egghead trova un vecchio dalla testa enorme, gentile e distratto, che parla della propria ricerca come di una cosa che appartiene a tutti. Dice di essere lui lo scienziato di cui il mondo parla da sempre.',
        en: 'The World Government keeps him on a single island in the middle of the New World, and out of it come the ships, the weapons and the Pacifista the Marines have used for years. Whoever lands on Egghead finds a kindly, distracted old man with an enormous head who talks about his research as something that belongs to everyone. He says he is the scientist the world has been discussing for decades.',
      },
      status: [
        { episode: 1090, value: 'alive' },
        { episode: 1116, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1090,
          value: {
            it: 'Governo Mondiale, scienziato capo',
            en: 'World Government, chief scientist',
          },
        },
      ],
      origin: [
        {
          episode: 1090,
          value: {
            it: 'Baldimore, Isola di Karakuri',
            en: 'Baldimore, Karakuri Island',
          },
        },
      ],
      epithet: [
        { episode: 1090, value: { it: 'Dr. Vegapunk', en: 'Dr. Vegapunk' } },
      ],
      devilFruit: [{ episode: 1090, value: ['brain-brain-fruit'] }],
    },
    'shaka': {
      role: {
        it: 'Satellite di Vegapunk, Punk-01',
        en: 'Vegapunk satellite, Punk-01',
      },
      log: {
        it: 'Vegapunk si è diviso in sei, e lui è la parte che rappresenta il bene: quando lo scienziato non c’è, è Shaka a rispondere per il laboratorio e a decidere chi entra e chi resta fuori. Porta un elmo a cupola che non toglie mai e ha una voce calma che non alza mai. Agli ospiti arrivati per caso offre un riparo prima ancora di chiedere chi siano.',
        en: 'Vegapunk split himself into six, and this one is the part that stands for good: when the scientist is elsewhere it is Shaka who answers for the laboratory and decides who comes in and who stays outside. He wears a domed helmet he never takes off and has a calm voice he never raises. He offers shelter to guests who arrived by accident before asking them who they are.',
      },
      affiliation: [
        {
          episode: 1091,
          value: {
            it: 'Satellite di Vegapunk, Punk-01 Good',
            en: 'Vegapunk satellite, Punk-01 Good',
          },
        },
        { episode: 1108, value: DESTROYED },
      ],
      origin: [{ episode: 1091, value: EGGHEAD }],
      epithet: [{ episode: 1091, value: { it: 'Good', en: 'Good' } }],
    },
    'lilith': {
      role: {
        it: 'Satellite di Vegapunk, Punk-02',
        en: 'Vegapunk satellite, Punk-02',
      },
      log: {
        it: 'La seconda delle sei parti in cui Vegapunk si è diviso è quella cattiva, e non fa nulla per nasconderlo. Accoglie chi approda su Egghead con un fucile laser e un conto da pagare, perché il laboratorio costa e i conti li tiene lei. Le corna che porta in testa non sono un travestimento, e chi la prende per una padrona di casa se ne accorge subito.',
        en: 'The second of the six parts Vegapunk divided himself into is the evil one, and she does nothing to hide it. She greets anyone landing on Egghead with a laser rifle and a bill to settle, because the laboratory costs money and she is the one keeping the accounts. The horns on her head are not a costume, and anyone mistaking her for a host learns it quickly.',
      },
      affiliation: [
        {
          episode: 1091,
          value: {
            it: 'Satellite di Vegapunk, Punk-02 Evil',
            en: 'Vegapunk satellite, Punk-02 Evil',
          },
        },
      ],
      origin: [{ episode: 1091, value: EGGHEAD }],
      epithet: [{ episode: 1091, value: { it: 'Evil', en: 'Evil' } }],
    },
    // The four Seraphim point at the fruits themselves rather than at a
    // record of their own: what they carry is a copy grown from another
    // body, not a second fruit, and the log above each of them already says
    // they are built on somebody else's pattern. A record per copy would put
    // four near-identical drawings on the sheet and say nothing more.
    //
    // Three of the four point at a fruit the archive already files for the
    // body it was copied from. The fourth, `water-water-fruit`, has nobody
    // else: whoever ate it first is not a record here yet, so its page lists
    // the copy alone. That is the archive being honest about what it holds
    // rather than a hole — the fruit was named on screen and the eater was
    // not.
    's-snake': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'È uno dei serafini che la Marina porta a Egghead: bambini con le ali di fuoco e una pelle che le lame non scalfiscono, costruiti sul modello di membri della Flotta dei Sette. Questa ha lo sguardo che trasforma in pietra e obbedisce agli ordini senza discuterli. Sotto il berretto resta una bambina, che si offende se qualcuno la chiama brutta.',
        en: 'She is one of the Seraphim the Marines bring to Egghead: children with wings of fire and skin no blade marks, built on the pattern of members of the Seven Warlords. This one has the stare that turns people to stone and follows every order without arguing. Under the cap she is still a child, and she takes offence at being called ugly.',
      },
      affiliation: [{ episode: 1092, value: SERAPHIM }],
      origin: [{ episode: 1092, value: EGGHEAD }],
      devilFruit: [{ episode: 1092, value: ['love-love-fruit'] }],
    },
    's-hawk': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'Uno dei quattro serafini schierati su Egghead, alto come un bambino e armato di una lama nera che taglia qualunque cosa gli capiti davanti. Le braccia gli diventano lame quando serve, e le ali di fuoco lo tengono in aria mentre colpisce. Non parla, non esita e non smette finché l’ordine che ha ricevuto non cambia.',
        en: 'One of the four Seraphim deployed on Egghead, no taller than a child and carrying a black blade that cuts whatever is put in front of it. His arms turn into blades when he needs them, and wings of fire hold him up while he strikes. He does not speak, does not hesitate and does not stop until the order he was given changes.',
      },
      affiliation: [{ episode: 1092, value: SERAPHIM }],
      origin: [{ episode: 1092, value: EGGHEAD }],
      devilFruit: [{ episode: 1092, value: ['dice-dice-fruit'] }],
    },
    's-bear': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'Ha la faccia di un bambino e la stazza di un gigante, e la Marina lo porta a Egghead insieme agli altri tre serafini. Sui palmi porta i cuscinetti che respingono tutto: l’aria, il dolore, le persone intere, spedite oltre l’orizzonte con uno schiaffo. Chi lo guarda muovere le mani riconosce subito il gesto di un uomo che la ciurma ha già incontrato.',
        en: 'It has a child’s face and a giant’s build, and the Marines bring it to Egghead along with the other three Seraphim. On its palms are the pads that repel everything: air, pain, whole people, sent past the horizon with a single slap. Anyone who watches those hands move recognises the gesture of a man the crew has met before.',
      },
      affiliation: [{ episode: 1092, value: SERAPHIM }],
      origin: [{ episode: 1092, value: EGGHEAD }],
      devilFruit: [{ episode: 1092, value: ['paw-paw-fruit'] }],
    },
    's-shark': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'Il quarto dei serafini sbarcati su Egghead è costruito sul modello di un uomo-pesce e comanda l’acqua che ha intorno. Nuota nell’aria come farebbe in mare, e il mare gli risponde: lo alza in colonne e lo scaglia contro il laboratorio. Come gli altri ha le ali di fuoco, la faccia di un bambino e nessuna intenzione di fermarsi.',
        en: 'The fourth of the Seraphim put ashore on Egghead is built on the pattern of a fish-man and commands the water around it. It swims through the air as it would through the sea, and the sea answers: it rises in columns and is thrown at the laboratory. Like the others it has wings of fire, a child’s face and no intention of stopping.',
      },
      affiliation: [{ episode: 1092, value: SERAPHIM }],
      origin: [{ episode: 1092, value: EGGHEAD }],
      devilFruit: [{ episode: 1092, value: ['water-water-fruit'] }],
    },
    'edison': {
      role: {
        it: 'Satellite di Vegapunk, Punk-03',
        en: 'Vegapunk satellite, Punk-03',
      },
      log: {
        it: 'La terza delle sei parti di Vegapunk è quella incaricata di avere le idee. È alto il doppio di un uomo, ha una lampadina al posto della testa e la accende quando gli viene in mente qualcosa, il che succede spesso. Accoglie chi arriva nel laboratorio come si accoglie una visita gradita, e intanto continua a disegnare macchine su ogni superficie libera.',
        en: 'The third of Vegapunk’s six parts is the one whose job is having ideas. He stands twice a man’s height, carries a bulb where a head should be, and lights it whenever something occurs to him, which is often. He welcomes arrivals into the laboratory the way one welcomes a guest, and goes on sketching machines across every free surface.',
      },
      affiliation: [
        {
          episode: 1094,
          value: {
            it: 'Satellite di Vegapunk, Punk-03 Think',
            en: 'Vegapunk satellite, Punk-03 Think',
          },
        },
      ],
      origin: [{ episode: 1094, value: EGGHEAD }],
      epithet: [{ episode: 1094, value: { it: 'Think', en: 'Think' } }],
    },
    'pythagoras': {
      role: {
        it: 'Satellite di Vegapunk, Punk-04',
        en: 'Vegapunk satellite, Punk-04',
      },
      log: {
        it: 'La quarta parte di Vegapunk è la memoria: conosce i numeri di ogni macchina dell’isola e li recita senza esitare. Ha un corpo squadrato, un viso che è uno schermo e braccia meccaniche che continuano a lavorare mentre parla. Quando qualcosa non torna nei dati di Egghead, è lui il primo ad accorgersene e a dirlo agli altri satelliti.',
        en: 'The fourth part of Vegapunk is the memory: it knows the numbers of every machine on the island and recites them without pausing. It has a squared-off body, a screen for a face, and mechanical arms that keep working while it speaks. When something in Egghead’s readings does not add up, it is the first to notice and to say so.',
      },
      affiliation: [
        {
          episode: 1094,
          value: {
            it: 'Satellite di Vegapunk, Punk-04 Wisdom',
            en: 'Vegapunk satellite, Punk-04 Wisdom',
          },
        },
        { episode: 1108, value: DESTROYED },
      ],
      origin: [{ episode: 1094, value: EGGHEAD }],
      epithet: [{ episode: 1094, value: { it: 'Wisdom', en: 'Wisdom' } }],
    },
    'atlas': {
      role: {
        it: 'Satellite di Vegapunk, Punk-05',
        en: 'Vegapunk satellite, Punk-05',
      },
      log: {
        it: 'La quinta parte di Vegapunk è quella che perde la pazienza per prima. Combatte con guanti d’acciaio spinti da razzi, che trasformano ogni suo colpo in una carica di ariete, e li usa anche per lavori che chiunque altro farebbe con un cacciavite. Fuori dal laboratorio gira per Egghead in cerca di qualcosa da rompere.',
        en: 'The fifth part of Vegapunk is the one that loses patience first. She fights in rocket-driven steel gauntlets that turn every punch into a battering ram, and she uses them for jobs anyone else would do with a screwdriver. Outside the laboratory she roams Egghead looking for something worth breaking.',
      },
      affiliation: [
        {
          episode: 1094,
          value: {
            it: 'Satellite di Vegapunk, Punk-05 Violence',
            en: 'Vegapunk satellite, Punk-05 Violence',
          },
        },
      ],
      origin: [{ episode: 1094, value: EGGHEAD }],
      epithet: [{ episode: 1094, value: { it: 'Violence', en: 'Violence' } }],
    },
    'york': {
      role: {
        it: 'Satellite di Vegapunk, Punk-06',
        en: 'Vegapunk satellite, Punk-06',
      },
      log: {
        it: 'La sesta e ultima parte di Vegapunk è quella che vuole tutto: dorme quanto può, mangia il doppio degli altri e si fa portare i piatti dove si trova. Sull’isola si occupa delle scorte e della manutenzione, quando qualcuno riesce a svegliarla. Gli altri cinque la trattano come la sorella più piccola e più fastidiosa, e lei non se ne lamenta.',
        en: 'The sixth and last part of Vegapunk is the one that wants everything: she sleeps as much as she can, eats twice what the others do and has the plates brought to wherever she happens to be. On the island she handles stores and maintenance, when somebody manages to wake her. The other five treat her as the smallest and most annoying sister, and she does not mind.',
      },
      affiliation: [
        {
          episode: 1094,
          value: {
            it: 'Satellite di Vegapunk, Punk-06 Greed',
            en: 'Vegapunk satellite, Punk-06 Greed',
          },
        },
        {
          episode: 1108,
          value: {
            it: 'Traditrice, alleata dei Cinque Astri di Saggezza',
            en: 'Traitor, ally of the Five Elders',
          },
        },
      ],
      origin: [{ episode: 1094, value: EGGHEAD }],
      epithet: [{ episode: 1094, value: { it: 'Greed', en: 'Greed' } }],
    },
    'jaygarcia-saturn': {
      role: ELDER_ROLE,
      log: {
        it: 'I cinque che decidono per il mondo non lasciano quasi mai Mary Geoise, e questo scende su Egghead perché la faccenda del laboratorio è troppo grossa per un ordine dato a distanza. Ha la barba lunga, il cilindro e un bastone, e i marine di grado più alto gli parlano a testa bassa. Sotto il cappotto non c’è un vecchio: c’è qualcosa con le zampe.',
        en: 'The five who decide for the world almost never leave Mary Geoise, and this one comes down to Egghead because the matter of the laboratory is too large for an order sent from a distance. He has a long beard, a top hat and a cane, and the highest-ranking Marines speak to him with their heads lowered. Under the coat there is no old man: there is something with legs.',
      },
      affiliation: [
        {
          episode: 1105,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero della Scienza e della Difesa',
            en: 'Five Elders, Warrior God of Science and Defence',
          },
        },
        { episode: 1122, value: DESTROYED },
      ],
      origin: [{ episode: 1105, value: MARY_GEOISE }],
    },
    'ginny': {
      role: { it: 'Amica d’infanzia di Kuma', en: 'Kuma’s childhood friend' },
      log: {
        it: 'Cresce nella stessa chiesa del Regno di Sorbet in cui finisce Kuma, in mezzo a bambini che nessuno è venuto a riprendere. È la più sfacciata di tutti e la prima a difendere chi viene trattato male, e canta per i malati che il prete accoglie. Quando arriva un bambino che non parla con nessuno, decide che a lui ci penserà lei.',
        en: 'She grows up in the same Sorbet Kingdom church that takes Kuma in, among children nobody ever came back for. She is the boldest of them and the first to stand up for anyone treated badly, and she sings for the sick the priest shelters. When a boy arrives who will not speak to anyone, she decides on the spot that he is hers to look after.',
      },
      status: [
        { episode: 1112, value: 'alive' },
        { episode: 1117, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1112,
          value: {
            it: 'Regno di Sorbet, amica d’infanzia di Kuma',
            en: 'Sorbet Kingdom, Kuma’s childhood friend',
          },
        },
        {
          episode: 1117,
          value: {
            it: 'Armata Rivoluzionaria, comandante dell’Armata dell’Est',
            en: 'Revolutionary Army, East Army commander',
          },
        },
      ],
      origin: [
        {
          episode: 1112,
          value: {
            it: 'Regno di Sorbet, South Blue',
            en: 'Sorbet Kingdom, South Blue',
          },
        },
      ],
    },
    'marcus-mars': {
      role: ELDER_ROLE,
      log: {
        it: 'Per anni i cinque sono stati solo sagome sedute in una stanza di Mary Geoise, e su Egghead scendono in carne e ossa per chiudere la faccenda di persona. Questo porta gli occhiali e i capelli lunghi, e quando gli serve si apre in un uccello enorme dagli artigli spropositati. Le ferite che riceve si richiudono mentre chi lo guarda sta ancora guardando.',
        en: 'For years the five were only silhouettes seated in a room at Mary Geoise, and on Egghead they come down in the flesh to settle the matter themselves. This one wears glasses and long hair, and when it suits him he opens out into an enormous bird with outsized talons. The wounds he takes close again while the people watching are still watching.',
      },
      affiliation: [
        {
          episode: 1122,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero dell’Ambiente',
            en: 'Five Elders, Warrior God of Environment',
          },
        },
      ],
      origin: [{ episode: 1122, value: MARY_GEOISE }],
    },
    'topman-warcury': {
      role: ELDER_ROLE,
      log: {
        it: 'Scende su Egghead insieme agli altri quattro e parla poco: per lui la giustizia è quello che decidono loro, e non c’è nulla da discutere. Quando cambia forma diventa una massa di zanne e setole che attraversa le pareti del laboratorio senza rallentare. I colpi che lo prendono in pieno lo lasciano dov’era, in piedi.',
        en: 'He comes down on Egghead with the other four and says little: justice is whatever the five decide, and there is nothing in it to discuss. When he changes shape he becomes a mass of tusks and bristles that goes through the laboratory walls without slowing. Blows that land squarely leave him standing where he was.',
      },
      affiliation: [
        {
          episode: 1122,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero della Giustizia',
            en: 'Five Elders, Warrior God of Justice',
          },
        },
      ],
      origin: [{ episode: 1122, value: MARY_GEOISE }],
    },
    'ethanbaron-v-nusjuro': {
      role: ELDER_ROLE,
      log: {
        it: 'È il più silenzioso dei cinque e il primo a sguainare: porta una katana più alta di un uomo e la usa con un colpo solo, dall’alto verso il basso. Sotto il cappotto la sua forma è quella di un cavallo pallido, e sull’isola nessuno le resta davanti a lungo. Quando apre bocca, parla di quanto costerà rimettere tutto a posto.',
        en: 'He is the quietest of the five and the first to draw: he carries a katana taller than a man and uses it in a single downward stroke. Under the coat his shape is that of a pale horse, and nobody on the island stands in front of it for long. When he does speak, he speaks about what all this will cost to put right.',
      },
      affiliation: [
        {
          episode: 1122,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero della Finanza',
            en: 'Five Elders, Warrior God of Finance',
          },
        },
      ],
      origin: [{ episode: 1122, value: MARY_GEOISE }],
    },
    'shepherd-ju-peter': {
      role: ELDER_ROLE,
      log: {
        it: 'Arriva su Egghead con gli altri quattro e si muove più sotto il pavimento che sopra: la sua forma è un verme enorme, un anello di denti che apre voragini nelle strutture dell’isola. Chi gli passa davanti finisce dentro, e il laboratorio comincia a perdere pezzi interi. Il cappello a tesa larga resta l’unica cosa che lo rende riconoscibile.',
        en: 'He arrives on Egghead with the other four and spends more time under the floor than above it: his shape is an enormous worm, a ring of teeth that opens holes through the island’s structures. Whatever passes in front of it goes inside, and the laboratory starts losing whole sections. The wide-brimmed hat is the one thing that still identifies him.',
      },
      affiliation: [
        {
          episode: 1122,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero dell’Agricoltura',
            en: 'Five Elders, Warrior God of Agriculture',
          },
        },
      ],
      origin: [{ episode: 1122, value: MARY_GEOISE }],
    },
  },
}
