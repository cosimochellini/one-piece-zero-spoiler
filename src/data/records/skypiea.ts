import type { Saga } from './saga'

/**
 * The Sky Island saga, episodes 136 to 206: a fallen ship from the clouds,
 * a town that laughs at dreams, and an island above the sea.
 */

const SHANDIA = { it: 'Guerrieri shandia', en: 'Shandia warriors' }
const SHANDIA_WARRIOR = { it: 'Guerriero shandia', en: 'Shandia warrior' }
const SKY_ISLAND = { it: 'Skypiea', en: 'Skypiea' }
const ENEL_PRIESTS = { it: 'Sacerdoti di Ener', en: 'Enel’s priests' }
const ENEL_PRIEST = {
  it: 'Sacerdote di Ener',
  en: 'One of Enel’s priests',
}

export const skypiea: Saga = {
  entries: [
    {
      id: 'skypiea',
      kind: 'arc',
      revealedAtEpisode: 144,
      name: { it: 'Saga di Skypiea', en: 'Skypiea Saga' },
      summary: {
        it: 'Un’isola sospesa sopra il mare, raggiunta da una corrente che spara le navi verso l’alto.',
        en: 'An island suspended above the sea, reached by a current that fires ships upward.',
      },
      visual: { art: 'skypiea', tint: 'azure' },
    },
    {
      id: 'jaya',
      kind: 'place',
      revealedAtEpisode: 144,
      name: { it: 'Jaya', en: 'Jaya' },
      summary: {
        it: 'Un’isola della Rotta Maggiore con una città di pirati senza legge da una parte e un uomo che ride dei sogni dall’altra.',
        en: 'A Grand Line island with a lawless pirate town on one side and a man who laughs at dreams on the other.',
      },
      visual: { art: 'jaya', tint: 'ocher' },
    },
    {
      id: 'masira',
      kind: 'character',
      revealedAtEpisode: 144,
      name: { it: 'Masira', en: 'Masira' },
      summary: {
        it: 'Il Re dei Recuperi: un gigante con il casco da palombaro che tira su dal fondo del mare i relitti affondati, cantando a squarciagola.',
        en: 'The Salvage King, a giant in a diving helmet who hauls sunken wrecks up off the sea floor, singing at the top of his voice.',
      },
      visual: { art: 'masira', tint: 'orange' },
    },
    {
      id: 'shoujou',
      kind: 'character',
      revealedAtEpisode: 145,
      name: { it: 'Shojo', en: 'Shoujou' },
      summary: {
        it: 'Il Re del Sonar: un colosso che ascolta il fondo del mare con le onde sonore e beve rum dalla botte mentre la sua nave batte le secche di Jaya.',
        en: 'The Sonar King, a giant who searches the sea floor with sound waves and drinks rum by the barrel while his ship sweeps the shallows of Jaya.',
      },
      visual: { art: 'shoujou', tint: 'violet' },
    },
    {
      id: 'bellamy',
      kind: 'character',
      revealedAtEpisode: 146,
      name: { it: 'Bellamy', en: 'Bellamy' },
      summary: {
        it: 'Il pirata che tiene Mock Town in pugno: ha delle molle al posto delle gambe, rimbalza sui tetti e ride di chiunque parli ancora di isole d’oro.',
        en: 'The pirate who runs Mock Town: he has springs for legs, bounces across the rooftops and laughs at anyone who still talks about islands of gold.',
      },
      visual: { art: 'bellamy', tint: 'azure' },
    },
    {
      id: 'montblanc-cricket',
      kind: 'character',
      revealedAtEpisode: 148,
      name: { it: 'Montblanc Cricket', en: 'Montblanc Cricket' },
      summary: {
        it: 'Un sub che vive da solo su Jaya in una casa piena di reperti, con i capelli a forma di castagna, e che si immerge ogni giorno per il nome di un antenato.',
        en: 'A diver living alone on Jaya in a house full of finds, his hair shaped like a chestnut, who goes down every day for an ancestor’s name.',
      },
      visual: { art: 'montblanc-cricket', tint: 'ocher' },
    },
    {
      id: 'marshall-d-teach',
      kind: 'character',
      revealedAtEpisode: 151,
      name: { it: 'Marshall D. Teach', en: 'Marshall D. Teach' },
      summary: {
        it: 'L’uomo che a Mock Town rideva davanti a una torta di ciliegie dicendo che i sogni degli uomini non finiscono mai, e che un tempo navigava con Barbabianca.',
        en: 'The man who laughed in Mock Town over a cherry pie and said that the dreams of men never end, and who once sailed under Whitebeard.',
      },
      visual: { art: 'marshall-d-teach', tint: 'violet' },
    },
    {
      id: 'bartholomew-kuma',
      kind: 'character',
      revealedAtEpisode: 151,
      name: { it: 'Orso Bartholomew', en: 'Bartholomew Kuma' },
      summary: {
        it: 'Un gigante silenzioso della Flotta dei Sette, seduto alla riunione con una bibbia aperta in mano mentre tutti gli altri si punzecchiano.',
        en: 'A silent giant among the Seven Warlords, who sits through the meeting with an open Bible in his hands while the others needle each other.',
      },
      visual: { art: 'bartholomew-kuma', tint: 'sand' },
    },
    {
      id: 'sengoku',
      kind: 'character',
      revealedAtEpisode: 151,
      name: { it: 'Sengoku', en: 'Sengoku' },
      summary: {
        it: 'Il grand’ammiraglio della Marina, che presiede la riunione della Flotta dei Sette con una capra al fianco che si mangia i documenti.',
        en: 'The fleet admiral of the Marines, who presides over the Warlords’ meeting with a goat at his side that eats the paperwork.',
      },
      visual: { art: 'sengoku', tint: 'yellow' },
    },
    {
      id: 'edward-newgate',
      kind: 'character',
      revealedAtEpisode: 152,
      name: { it: 'Edward Newgate', en: 'Edward Newgate' },
      summary: {
        it: 'Barbabianca: un gigante attaccato alle flebo che beve sakè dalla botte, l’uomo più vicino al trono dei pirati da vent’anni, con una ciurma che chiama i suoi uomini figli.',
        en: 'Whitebeard: a giant on a drip who drinks sake from the barrel, the man closest to the pirate throne for twenty years, with a crew whose men he calls his sons.',
      },
      visual: { art: 'edward-newgate', tint: 'ivory' },
    },
    {
      id: 'donquixote-doflamingo',
      kind: 'character',
      revealedAtEpisode: 152,
      name: { it: 'Donquijote Do Flamingo', en: 'Donquixote Doflamingo' },
      summary: {
        it: 'Un membro della Flotta dei Sette con un cappotto di piume rosa e occhiali da sole, che si presenta alle riunioni del Governo Mondiale per divertimento e fa muovere gli altri come marionette.',
        en: 'A member of the Seven Warlords in a pink feather coat and sunglasses, who attends World Government meetings for the fun of it and moves other people like puppets.',
      },
      visual: { art: 'donquixote-doflamingo', tint: 'flamingo' },
    },
    {
      id: 'marco',
      kind: 'character',
      revealedAtEpisode: 152,
      name: { it: 'Marco', en: 'Marco' },
      summary: {
        it: 'Un comandante dei Pirati di Barbabianca, il primo a parlare quando il vecchio alza la voce, con l’aria di chi si annoia anche in mezzo a una tempesta.',
        en: 'A commander of the Whitebeard Pirates, the first to speak when the old man raises his voice, with the air of someone bored even in a storm.',
      },
      visual: { art: 'marco', tint: 'cyan' },
    },
    {
      id: 'gan-fall',
      kind: 'character',
      revealedAtEpisode: 153,
      name: { it: 'Gan Fall', en: 'Gan Fall' },
      summary: {
        it: 'Un vecchio cavaliere che gira le nuvole con una lancia e un elmo a forma di zucca, in sella a un cavallo alato, e soccorre chi trova nei guai.',
        en: 'An old knight who rides the clouds with a lance and a pumpkin-shaped helmet, on a winged horse, and helps whoever he finds in trouble.',
      },
      visual: { art: 'gan-fall', tint: 'ivory' },
    },
    {
      id: 'wyper',
      kind: 'character',
      revealedAtEpisode: 154,
      name: { it: 'Wiper', en: 'Wyper' },
      summary: {
        it: 'Il capo dei guerrieri shandia, che piomba sulle nuvole con i pattini ai piedi e un bazooka che brucia, e non tratta con nessuno.',
        en: 'The leader of the Shandia warriors, who comes in over the clouds on skates with a burn bazooka on his shoulder and treats with nobody.',
      },
      visual: { art: 'wyper', tint: 'wine' },
    },
    {
      id: 'kamakiri',
      kind: 'character',
      revealedAtEpisode: 154,
      name: { it: 'Kamakiri', en: 'Kamakiri' },
      summary: {
        it: 'Un guerriero shandia dalla cresta alta, che attraversa la foresta di nuvole con una lama che brucia, tenuta bassa come un insetto in agguato.',
        en: 'A Shandia warrior with a high crest who crosses the cloud forest with a burning blade held low, like an insect waiting to strike.',
      },
      visual: { art: 'kamakiri', tint: 'green' },
    },
    {
      id: 'braham',
      kind: 'character',
      revealedAtEpisode: 154,
      name: { it: 'Braham', en: 'Braham' },
      summary: {
        it: 'Un guerriero shandia con gli occhiali calati sugli occhi, che apre il fuoco con due pistole capaci di accecare chiunque le guardi.',
        en: 'A Shandia warrior with goggles down over his eyes, who opens fire with two pistols that blind anyone who looks at them.',
      },
      visual: { art: 'braham', tint: 'ocher' },
    },
    {
      id: 'genbo',
      kind: 'character',
      revealedAtEpisode: 154,
      name: { it: 'Genbo', en: 'Genbo' },
      summary: {
        it: 'Un guerriero shandia grosso il doppio dei suoi compagni, che si carica sulle spalle un bazooka incendiario e lo maneggia come un fucile.',
        en: 'A Shandia warrior twice the size of his companions, who shoulders an incendiary bazooka and handles it like a rifle.',
      },
      visual: { art: 'genbo', tint: 'sand' },
    },
    {
      id: 'laki',
      kind: 'character',
      revealedAtEpisode: 154,
      name: { it: 'Laki', en: 'Laki' },
      summary: {
        it: 'Una guerriera shandia che tiene il fucile puntato da lontano, con una piuma infilata nella canna e l’occhio fermo sul mirino.',
        en: 'A Shandia warrior who works from a distance, a feather tucked into the barrel of her rifle and her eye steady at the scope.',
      },
      visual: { art: 'laki', tint: 'lavender' },
    },
    {
      id: 'aisa',
      kind: 'character',
      revealedAtEpisode: 154,
      name: { it: 'Aisa', en: 'Aisa' },
      summary: {
        it: 'Una bambina shandia che sente le voci di tutto ciò che vive, e sa dire quante persone ci sono su un’isola senza averle mai viste.',
        en: 'A Shandia child who hears the voices of everything alive, and can say how many people are on an island without ever having seen them.',
      },
      visual: { art: 'aisa', tint: 'pink' },
    },
    {
      id: 'conis',
      kind: 'character',
      revealedAtEpisode: 155,
      name: { it: 'Conis', en: 'Conis' },
      summary: {
        it: 'Una ragazza con le ali di Angel Beach, che accoglie gli stranieri con un’arpa e una volpe delle nuvole addormentata ai suoi piedi.',
        en: 'A winged girl from Angel Beach who greets strangers with a harp and a cloud fox asleep at her feet.',
      },
      visual: { art: 'conis', tint: 'ice' },
    },
    {
      id: 'pagaya',
      kind: 'character',
      revealedAtEpisode: 155,
      name: { it: 'Pagaya', en: 'Pagaya' },
      summary: {
        it: 'Il padre di Conis, un artigiano mite che monta conchiglie a un banco da lavoro e ne ricava barche, lampade e tutto il resto.',
        en: 'Conis’s father, a mild craftsman who fits shells together at a workbench and makes boats, lamps and everything else out of them.',
      },
      visual: { art: 'pagaya', tint: 'teal' },
    },
    {
      id: 'enel',
      kind: 'character',
      revealedAtEpisode: 158,
      name: { it: 'Ener', en: 'Enel' },
      summary: {
        it: 'Il Dio di Skypiea, seduto sopra un tamburo d’oro con altri quattro alle spalle, che sa che cosa dicono i suoi sudditi senza doverli ascoltare.',
        en: 'The God of Skypiea, sitting above a golden drum with four more at his back, who knows what his subjects are saying without having to listen.',
      },
      visual: { art: 'enel', tint: 'yellow' },
    },
    {
      id: 'satori',
      kind: 'character',
      revealedAtEpisode: 160,
      name: { it: 'Satori', en: 'Satori' },
      summary: {
        it: 'Un sacerdote di Ener che aspetta gli intrusi in mezzo a sfere di nuvola identiche fra loro, una delle quali nasconde sempre qualcosa.',
        en: 'One of Enel’s priests, waiting for intruders among identical cloud spheres, one of which is always hiding something.',
      },
      visual: { art: 'satori', tint: 'flamingo' },
    },
    {
      id: 'shura',
      kind: 'character',
      revealedAtEpisode: 162,
      name: { it: 'Shura', en: 'Shura' },
      summary: {
        it: 'Un sacerdote di Ener che pattuglia il cielo in sella a un uccello in fiamme, con una lancia che scalda l’aria attorno alla punta.',
        en: 'One of Enel’s priests, who patrols the sky on a bird wreathed in flame, with a lance that heats the air around its point.',
      },
      visual: { art: 'shura', tint: 'red' },
    },
    {
      id: 'gedatsu',
      kind: 'character',
      revealedAtEpisode: 166,
      name: { it: 'Gedatsu', en: 'Gedatsu' },
      summary: {
        it: 'Un sacerdote di Ener che apre una nuvola di palude sotto i piedi degli intrusi, e nel frattempo dimentica regolarmente quello che stava facendo.',
        en: 'One of Enel’s priests, who opens a swamp cloud under an intruder’s feet and meanwhile keeps forgetting what he was doing.',
      },
      visual: { art: 'gedatsu', tint: 'acid' },
    },
    {
      id: 'ohm',
      kind: 'character',
      revealedAtEpisode: 169,
      name: { it: 'Om', en: 'Ohm' },
      summary: {
        it: 'Un sacerdote di Ener che combatte con una spada capace di indurire la nuvola in ferro, con un enorme cane bianco al fianco.',
        en: 'One of Enel’s priests, who fights with a sword that hardens cloud into iron, an enormous white dog at his side.',
      },
      visual: { art: 'ohm', tint: 'ivory' },
    },
    {
      id: 'montblanc-noland',
      kind: 'character',
      revealedAtEpisode: 187,
      name: { it: 'Montblanc Noland', en: 'Montblanc Noland' },
      summary: {
        it: 'L’esploratore che quattrocento anni fa torna dal mare parlando di una città d’oro e finisce giustiziato come bugiardo perché non sa mostrarla.',
        en: 'The explorer who comes back from the sea four hundred years ago with a tale of a city of gold, and is executed as a liar when he cannot show it.',
      },
      visual: { art: 'montblanc-noland', tint: 'green' },
    },
    {
      id: 'kalgara',
      kind: 'character',
      revealedAtEpisode: 187,
      name: { it: 'Kalgara', en: 'Kalgara' },
      summary: {
        it: 'Il capo dei guerrieri shandia di quattrocento anni fa, che difende la sua città con una lancia più alta di lui e la voce di una grande campana.',
        en: 'The chief of the Shandia warriors four hundred years ago, who defends his city with a spear taller than himself and the voice of a great bell.',
      },
      visual: { art: 'kalgara', tint: 'vermilion' },
    },
  ],

  dossiers: {
    masira: {
      role: {
        it: 'Capitano e recuperatore di relitti',
        en: 'Captain and salvager',
      },
      log: {
        it: 'Comanda una ciurma che lo acclama a ogni parola e lavora sulle secche attorno a Jaya, tirando su i relitti dal fondo con gru e catene. Quando un galeone affiora sotto la Going Merry si presenta come il Re dei Recuperi e pretende che quel tratto di mare sia suo. Piange con la stessa facilità con cui urla.',
        en: 'He commands a crew that cheers every word he says, and works the shallows around Jaya, hauling wrecks off the bottom with cranes and chains. When a galleon surfaces under the Going Merry he introduces himself as the Salvage King and claims that stretch of sea as his own. He weeps as easily as he shouts.',
      },
      affiliation: [
        {
          episode: 144,
          value: {
            it: 'Pirati di Masira, capitano; recuperatore di relitti',
            en: 'Masira Pirates, captain; salvager',
          },
        },
      ],
      epithet: [
        {
          episode: 144,
          value: { it: 'Il Re dei Recuperi', en: 'Salvage King' },
        },
      ],
    },
    shoujou: {
      role: {
        it: 'Capitano e cercatore dei fondali',
        en: 'Captain and sea searcher',
      },
      log: {
        it: 'Batte le stesse acque di Masira, e i due si contendono ogni relitto a colpi di insulti senza che nessuno dei due sembri volerne davvero all’altro. La sua nave ascolta il fondo del mare con le onde sonore e trova quello che nessun occhio vedrebbe. Beve dalla mattina e ha una risata che si sente da un’isola all’altra.',
        en: 'He works the same water as Masira, and the two of them squabble over every wreck with insults that neither of them seems to mean. His ship listens to the sea floor with sound waves and finds what no eye would ever see. He drinks from morning on, and his laugh carries from one island to the next.',
      },
      affiliation: [
        {
          episode: 145,
          value: {
            it: 'Pirati di Shojo, capitano; cercatore dei fondali',
            en: 'Shoujou Pirates, captain; sea searcher',
          },
        },
      ],
      epithet: [
        { episode: 145, value: { it: 'Il Re del Sonar', en: 'Sonar King' } },
      ],
    },
    bellamy: {
      role: {
        it: 'Capitano dei Pirati di Bellamy',
        en: 'Captain of the Bellamy Pirates',
      },
      log: {
        it: 'La sua ciurma occupa la taverna di Mock Town e in città nessuno osa contraddirla. Chiama nuova era quella in cui i sogni non esistono più, e si diverte a pestare chi non sta al gioco. Rufy e Zoro incassano tutto senza alzare un dito e se ne vanno in silenzio, e questo lo fa infuriare più di una rissa.',
        en: 'His crew holds the tavern in Mock Town and nobody in the town dares contradict them. He calls it the new age, the one where dreams no longer exist, and enjoys beating anyone who will not play along. Luffy and Zoro take all of it without lifting a hand and walk out in silence, which angers him more than a brawl would.',
      },
      affiliation: [
        {
          episode: 146,
          value: {
            it: 'Pirati di Bellamy, capitano',
            en: 'Bellamy Pirates, captain',
          },
        },
        {
          episode: 632,
          value: {
            it: 'Gladiatore del Colosseo sotto la bandiera di Do Flamingo',
            en: 'Colosseum gladiator under Doflamingo’s flag',
          },
        },
      ],
      origin: [{ episode: 146, value: { it: 'North Blue', en: 'North Blue' } }],
      epithet: [{ episode: 146, value: { it: 'La Iena', en: 'the Hyena' } }],
      devilFruit: [
        {
          episode: 146,
          value: { it: 'Frutto Bane Bane', en: 'Spring-Spring Fruit' },
        },
      ],
      bounty: [
        { episode: 146, value: 55_000_000 },
        { episode: 632, value: 195_000_000 },
      ],
    },
    'montblanc-cricket': {
      role: { it: 'Sub di Jaya', en: 'Diver of Jaya' },
      log: {
        it: 'È l’ultimo discendente di Noland, l’esploratore che quattrocento anni fa fu giustiziato per aver raccontato di una città d’oro che nessuno riuscì a trovare. Ha lasciato tutto per immergersi ogni giorno sulle secche di Jaya, e il male dei fondali gli ha rovinato il corpo. Giura di non credere a quella storia: vuole soltanto arrivare in fondo.',
        en: 'He is the last descendant of Noland, the explorer executed four hundred years ago for telling of a city of gold that nobody could find. He gave up everything to dive the shallows off Jaya day after day, and the diving sickness has wrecked his body. He swears he does not believe the story: he only wants to see it finished.',
      },
      affiliation: [
        {
          episode: 148,
          value: {
            it: 'Nessuna: sub di Jaya, discendente di Noland',
            en: 'None: diver of Jaya, descendant of Noland',
          },
        },
      ],
      origin: [
        {
          episode: 148,
          value: { it: 'Jaya, Rotta Maggiore', en: 'Jaya, Grand Line' },
        },
      ],
    },
    'marshall-d-teach': {
      role: {
        it: 'Capitano dei Pirati di Barbanera',
        en: 'Captain of the Blackbeard Pirates',
      },
      log: {
        it: 'A Mock Town beve, mangia a quattro palmenti e ride di tutto, e quando qualcuno gli dice che i sogni sono morti è lui a rispondere che i sogni degli uomini non finiscono mai. Ha navigato sotto Barbabianca, poi ha ucciso un compagno di ciurma ed è scappato, e da allora un comandante di quella ciurma lo insegue per il mare. Dove sia diretto non lo sa nessuno.',
        en: 'In Mock Town he drinks, eats his fill and laughs at everything, and when somebody tells him dreams are dead he is the one who answers that the dreams of men never end. He sailed under Whitebeard, then killed a crewmate and ran, and a commander of that crew has been hunting him across the sea ever since. Where he is heading, nobody knows.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati di Barbanera, capitano; un tempo dei Pirati di Barbabianca',
            en: 'Blackbeard Pirates, captain; formerly of the Whitebeard Pirates',
          },
        },
        {
          episode: 430,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        { episode: 486, value: { it: 'Imperatore', en: 'Emperor' } },
      ],
      epithet: [{ episode: 151, value: { it: 'Barbanera', en: 'Blackbeard' } }],
      devilFruit: [
        {
          episode: 462,
          value: { it: 'Frutto Yami Yami', en: 'Dark-Dark Fruit' },
        },
        {
          episode: 485,
          value: {
            it: 'Frutto Yami Yami e Frutto Gura Gura',
            en: 'Dark-Dark Fruit and Tremor-Tremor Fruit',
          },
        },
      ],
      bounty: [{ episode: 958, value: 2_247_600_000 }],
    },
    'bartholomew-kuma': {
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Alla convocazione del Governo Mondiale è l’unico a non alzare mai la voce: resta seduto con un libro aperto in mano mentre gli altri si punzecchiano su una poltrona rimasta vuota. In piedi supera di una testa abbondante chiunque altro nella stanza. Della sua vita prima dell’accordo con il Governo non si dice una parola.',
        en: 'At the World Government’s summons he is the only one who never raises his voice: he sits with a book open in his hands while the others trade jabs about a chair left empty. Standing, he is a full head and more above anyone else in the room. Of his life before the deal with the Government, not a word is said.',
      },
      affiliation: [
        {
          episode: 151,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        {
          episode: 1109,
          value: {
            it: 'Ex membro della Flotta dei Sette; schiavo dei Nobili Mondiali, liberato',
            en: 'Former Warlord; slave of the World Nobles, freed',
          },
        },
      ],
      origin: [
        {
          episode: 1109,
          value: {
            it: 'Regno di Sorbet, South Blue',
            en: 'Sorbet Kingdom, South Blue',
          },
        },
      ],
      epithet: [
        { episode: 151, value: { it: 'Il Tiranno', en: 'the Tyrant' } },
      ],
      devilFruit: [
        {
          episode: 372,
          value: { it: 'Frutto Nikyu Nikyu', en: 'Paw-Paw Fruit' },
        },
      ],
      bounty: [{ episode: 151, value: 296_000_000 }],
    },
    sengoku: {
      role: {
        it: 'Grand’ammiraglio della Marina',
        en: 'Fleet admiral of the Marines',
      },
      log: {
        it: 'Convoca i Sette a nome del Governo Mondiale e li tiene a bada senza perdere la calma nemmeno quando la riunione degenera. Uno dei posti al tavolo è vuoto, e quel posto vuoto lo preoccupa più di tutti quelli occupati. Si porta dietro una capra che si mangia le carte, e nessuno dei presenti se ne stupisce.',
        en: 'He calls the Warlords together for the World Government and keeps them in order without once losing his temper, even when the meeting turns ugly. One seat at the table is empty, and that empty seat worries him more than all the occupied ones. He brings a goat with him that eats the paperwork, and nobody in the room finds it odd.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Marina, grand’ammiraglio',
            en: 'Marines, fleet admiral',
          },
        },
        {
          episode: 517,
          value: {
            it: 'Marina, ispettore generale',
            en: 'Marines, inspector general',
          },
        },
      ],
      epithet: [{ episode: 151, value: { it: 'Il Buddha', en: 'the Buddha' } }],
      devilFruit: [
        {
          episode: 469,
          value: {
            it: 'Frutto Hito Hito, modello Daibutsu',
            en: 'Human-Human Fruit, Model: Daibutsu',
          },
        },
      ],
    },
    'edward-newgate': {
      role: {
        it: 'Capitano dei Pirati di Barbabianca',
        en: 'Captain of the Whitebeard Pirates',
      },
      log: {
        it: 'È uno dei quattro Imperatori che si dividono il Nuovo Mondo, e l’unico ad aver combattuto il Re dei Pirati alla pari. Riceve la notizia che Shanks vuole vederlo come si riceve la visita di un vecchio conoscente, cioè male. Un suo comandante è partito da solo per inseguire un traditore, e lui ha lasciato fare.',
        en: 'He is one of the four Emperors who divide the New World between them, and the only man to have fought the Pirate King as an equal. He takes the news that Shanks wants to see him the way one takes a call from an old acquaintance, which is badly. One of his commanders has gone off alone after a traitor, and he let him go.',
      },
      affiliation: [
        {
          episode: 152,
          value: {
            it: 'Pirati di Barbabianca, capitano; Imperatore',
            en: 'Whitebeard Pirates, captain; Emperor',
          },
        },
      ],
      epithet: [
        { episode: 152, value: { it: 'Barbabianca', en: 'Whitebeard' } },
      ],
      devilFruit: [
        {
          episode: 466,
          value: { it: 'Frutto Gura Gura', en: 'Tremor-Tremor Fruit' },
        },
      ],
      bounty: [{ episode: 958, value: 5_046_000_000 }],
    },
    'donquixote-doflamingo': {
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Alla riunione dei Sette ride di tutto e di tutti, e nel frattempo due marinai nella stanza sguainano le spade l’uno contro l’altro senza volerlo. Nessuno dei presenti lo prende alla leggera, nemmeno quelli che non lo sopportano. Il cappotto rosa è l’unica cosa di lui che non fa paura.',
        en: 'At the Warlords’ meeting he laughs at everything and everyone, and meanwhile two Marines in the room draw their swords on each other without meaning to. Nobody present takes him lightly, not even the ones who cannot stand him. The pink coat is the only thing about him that is not frightening.',
      },
      affiliation: [
        {
          episode: 152,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        {
          episode: 632,
          value: {
            it: 'Flotta dei Sette; re di Dressrosa',
            en: 'Seven Warlords; king of Dressrosa',
          },
        },
        {
          episode: 746,
          value: {
            it: 'Ex membro della Flotta dei Sette, in arresto',
            en: 'Former Warlord, under arrest',
          },
        },
      ],
      epithet: [
        { episode: 586, value: { it: 'Joker', en: 'Joker' } },
        {
          episode: 632,
          value: { it: 'Il Demone Celeste', en: 'Heavenly Demon' },
        },
      ],
      devilFruit: [
        {
          episode: 700,
          value: { it: 'Frutto Ito Ito', en: 'String-String Fruit' },
        },
      ],
      bounty: [{ episode: 700, value: 340_000_000 }],
    },
    marco: {
      role: {
        it: 'Comandante della prima divisione',
        en: 'First division commander',
      },
      log: {
        it: 'Sul ponte della Moby Dick è quello che porta le notizie al capitano e che prova a farlo ragionare, senza illudersi di riuscirci. È lui a ricordare che Ace è partito da solo dietro a un traditore e che nessuno lo ha fermato. Chiama padre il vecchio come tutti gli altri a bordo, e lo dice senza abbassare la voce.',
        en: 'On the deck of the Moby Dick he is the one who brings the captain his news and tries to talk sense into him, without much hope of managing it. He is the one who points out that Ace went off alone after a traitor and that nobody stopped him. He calls the old man father, as everyone aboard does, and says it without lowering his voice.',
      },
      affiliation: [
        {
          episode: 152,
          value: {
            it: 'Pirati di Barbabianca, comandante della prima divisione',
            en: 'Whitebeard Pirates, first division commander',
          },
        },
        {
          episode: 517,
          value: {
            it: 'Pirati di Barbabianca, capitano ad interim',
            en: 'Whitebeard Pirates, acting captain',
          },
        },
        {
          episode: 958,
          value: {
            it: 'Medico dell’isola di Sphinx',
            en: 'Doctor of Sphinx Island',
          },
        },
      ],
      epithet: [
        { episode: 461, value: { it: 'La Fenice', en: 'the Phoenix' } },
      ],
      devilFruit: [
        {
          episode: 461,
          value: {
            it: 'Frutto Tori Tori, modello Fenice',
            en: 'Bird-Bird Fruit, Model: Phoenix',
          },
        },
      ],
      bounty: [{ episode: 958, value: 1_374_000_000 }],
    },
    'gan-fall': {
      role: { it: 'Cavaliere del Cielo', en: 'Knight of the Sky' },
      log: {
        it: 'Si presenta come il Cavaliere del Cielo e arriva dove qualcuno è nei guai, senza chiedere chi sia. Vola in sella a un cavallo alato e conosce le regole di Skypiea meglio di chiunque altro: su quest’isola tutto appartiene a Dio, e chi non paga viene dichiarato criminale. Di quel Dio parla con una durezza che non spiega a nessuno.',
        en: 'He introduces himself as the Knight of the Sky and turns up wherever somebody is in trouble, without asking who they are. He flies a winged horse and knows the rules of Skypiea better than anyone: on this island everything belongs to God, and whoever does not pay is declared a criminal. He speaks of that God with a hardness he explains to nobody.',
      },
      affiliation: [
        {
          episode: 153,
          value: { it: 'Cavaliere del Cielo', en: 'Knight of the Sky' },
        },
        {
          episode: 178,
          value: {
            it: 'Dio di Skypiea, restituito al trono',
            en: 'God of Skypiea, restored',
          },
        },
      ],
      origin: [{ episode: 153, value: SKY_ISLAND }],
      epithet: [
        {
          episode: 153,
          value: { it: 'Il Cavaliere del Cielo', en: 'Knight of the Sky' },
        },
      ],
    },
    wyper: {
      role: {
        it: 'Capo dei guerrieri shandia',
        en: 'Leader of the Shandia warriors',
      },
      log: {
        it: 'Guida i guerrieri che attaccano la terra del cielo senza preavviso, e nel suo racconto quel suolo è stato rubato ai suoi. Combatte con i pattini ai piedi e un’arma che spara fuoco, e non aspetta ordini da nessuno, nemmeno dai propri. Chi gli si mette davanti, straniero o no, viene trattato come parte della guerra.',
        en: 'He leads the warriors who strike at the sky land without warning, and in his telling that ground was stolen from his people. He fights on skates with a weapon that fires flame, and takes orders from nobody, his own kin included. Whoever stands in front of him, stranger or not, is treated as part of the war.',
      },
      affiliation: [
        {
          episode: 154,
          value: {
            it: 'Guerrieri shandia, capo',
            en: 'Shandia warriors, leader',
          },
        },
      ],
      origin: [
        {
          episode: 154,
          value: { it: 'Skypiea, un tempo Jaya', en: 'Skypiea, once Jaya' },
        },
      ],
      epithet: [
        { episode: 154, value: { it: 'Il Berserker', en: 'the Berserker' } },
      ],
    },
    kamakiri: {
      role: SHANDIA_WARRIOR,
      log: {
        it: 'Combatte accanto a Wiper e porta una lama che lascia il segno sul cielo stesso. È fra i primi a passare la frontiera di Dio e fra i pochi che dopo l’assalto vengono contati ancora vivi. Dei quattro stranieri saliti dal mare azzurro non sa cosa pensare, e per prudenza li tratta da nemici.',
        en: 'He fights alongside Wyper and carries a blade that scars the sky itself. He is among the first across God’s frontier and among the few counted alive once the raid is over. He does not know what to make of the four strangers up from the blue sea, and to be safe he treats them as enemies.',
      },
      affiliation: [{ episode: 154, value: SHANDIA }],
      origin: [{ episode: 154, value: SKY_ISLAND }],
    },
    braham: {
      role: SHANDIA_WARRIOR,
      log: {
        it: 'Copre l’avanzata dei suoi con due pistole a lampo che non feriscono nessuno ma tolgono la vista, e nella foresta di nuvole questo basta a vincere. Si muove veloce, parla poco e si fida solo di chi è cresciuto con lui. La guerra per quella terra dura da più tempo di quanto chiunque a Skypiea abbia voglia di raccontare.',
        en: 'He covers his people’s advance with two flash pistols that wound nobody and take away sight, which in the cloud forest is enough to win. He moves fast, says little, and trusts only the people he grew up with. The war over that ground has run longer than anyone on Skypiea cares to say out loud.',
      },
      affiliation: [{ episode: 154, value: SHANDIA }],
      origin: [{ episode: 154, value: SKY_ISLAND }],
    },
    genbo: {
      role: SHANDIA_WARRIOR,
      log: {
        it: 'Porta da solo l’arma più pesante della banda e apre la strada agli altri fra le nuvole. Nell’assalto alla terra del cielo è la voce che chiama i compagni per nome e li tiene insieme. Della gente di Skypiea non vuole sapere niente: per lui quel suolo ha un solo proprietario, e non è chi ci abita adesso.',
        en: 'He carries the heaviest weapon in the band on his own and clears the way for the rest through the clouds. In the raid on the sky land his is the voice that calls the others by name and holds them together. He wants nothing to do with the people of Skypiea: to him that ground has one owner, and it is not whoever lives on it now.',
      },
      affiliation: [{ episode: 154, value: SHANDIA }],
      origin: [{ episode: 154, value: SKY_ISLAND }],
    },
    laki: {
      role: { it: 'Guerriera shandia', en: 'Shandia warrior' },
      log: {
        it: 'Resta indietro rispetto agli altri e colpisce da lontano, e nella foresta di nuvole è la prima ad accorgersi di chi si avvicina. Combatte per la stessa terra per cui combattono tutti i suoi, e non ne parla mai. Quando un assalto finisce, conta i sopravvissuti a voce alta perché nessuno se ne dimentichi.',
        en: 'She hangs back from the others and shoots from a distance, and in the cloud forest she is the first to notice anyone coming. She fights for the same ground all her people fight for, and never talks about it. When a raid is over she counts the survivors out loud, so that nobody forgets them.',
      },
      affiliation: [{ episode: 154, value: SHANDIA }],
      origin: [{ episode: 154, value: SKY_ISLAND }],
    },
    aisa: {
      role: { it: 'Bambina shandia', en: 'Shandia child' },
      log: {
        it: 'Vive al villaggio con gli altri bambini ma non sta ferma un momento: scappa verso la guerra ogni volta che può, perché dice di sentire quello che succede laggiù. Sente le vite accendersi e spegnersi una a una, e nessuno degli adulti sa come consolarla. Dei guerrieri parla come si parla dei fratelli maggiori.',
        en: 'She lives in the village with the other children and never stays put: she slips away toward the war whenever she can, because she says she can feel what happens out there. She feels lives flare up and go out one by one, and none of the grown-ups knows how to comfort her. She speaks of the warriors the way one speaks of older brothers.',
      },
      affiliation: [
        {
          episode: 154,
          value: {
            it: 'Shandia, una bambina del villaggio',
            en: 'Shandia, a child of the village',
          },
        },
      ],
      origin: [{ episode: 154, value: SKY_ISLAND }],
    },
    conis: {
      role: { it: 'Abitante di Angel Beach', en: 'Resident of Angel Beach' },
      log: {
        it: 'Vive con il padre in una casetta sulla spiaggia degli angeli e dà da mangiare a quattro sconosciuti saliti dal mare azzurro come se li aspettasse da sempre. Spiega con pazienza come funziona il cielo: le nuvole su cui si cammina, le conchiglie che fanno ogni cosa, il denaro che qui si chiama extol. Quando il discorso arriva a Dio, la voce le si incrina.',
        en: 'She lives with her father in a small house on Angel Beach and feeds four strangers up from the blue sea as though she had been expecting them all along. She explains the sky patiently: the clouds you can walk on, the shells that do everything, the money they call extol here. When the talk turns to God, her voice catches.',
      },
      affiliation: [
        {
          episode: 155,
          value: { it: 'Angel Beach, Skypiea', en: 'Angel Beach, Skypiea' },
        },
      ],
      origin: [
        {
          episode: 155,
          value: {
            it: 'Isola degli angeli, Skypiea',
            en: 'Angel Island, Skypiea',
          },
        },
      ],
    },
    pagaya: {
      role: { it: 'Artigiano di dial', en: 'Dial craftsman' },
      log: {
        it: 'Costruisce e ripara i dial, le conchiglie in cui resta chiuso un pezzo di cielo: una soffia vento, una scalda, una restituisce il suono che ha sentito. Accoglie in casa quattro pirati e serve loro il pranzo senza fare domande. Dell’isola parla volentieri, di Dio il meno possibile.',
        en: 'He builds and mends dials, the shells with a piece of the sky shut inside them: one blows wind, one gives heat, one gives back the sound it heard. He takes four pirates into his house and serves them lunch without asking a single question. He will talk about the island gladly, and about God as little as he can.',
      },
      affiliation: [
        {
          episode: 155,
          value: {
            it: 'Angel Beach, Skypiea; artigiano di dial',
            en: 'Angel Beach, Skypiea; dial craftsman',
          },
        },
      ],
      origin: [
        {
          episode: 155,
          value: {
            it: 'Isola degli angeli, Skypiea',
            en: 'Angel Island, Skypiea',
          },
        },
      ],
    },
    enel: {
      role: { it: 'Dio di Skypiea', en: 'God of Skypiea' },
      log: {
        it: 'Regna sulle nuvole come un dio e ne ha i modi: parla piano, non alza mai la testa e decide chi vive senza spiegare perché. Sente ogni voce dell’isola ovunque si trovi, e chi lo nomina male se ne accorge troppo tardi. I sacerdoti che lo servono tengono le prove che quasi nessuno riesce a superare.',
        en: 'He rules the clouds as a god and has the manner of one: he speaks softly, never lifts his head and decides who lives without explaining himself. He hears every voice on the island wherever it is, and anyone who speaks his name badly finds out too late. The priests who serve him keep the ordeals that almost nobody gets past.',
      },
      affiliation: [
        {
          episode: 158,
          value: { it: 'Dio di Skypiea', en: 'God of Skypiea' },
        },
        {
          episode: 193,
          value: { it: 'Fuggito sulla luna', en: 'Fled to the moon' },
        },
      ],
      origin: [
        {
          episode: 158,
          value: { it: 'Birka, isole del cielo', en: 'Birka, sky islands' },
        },
      ],
      epithet: [{ episode: 158, value: { it: 'Dio', en: 'God' } }],
      devilFruit: [
        {
          episode: 158,
          value: { it: 'Frutto Goro Goro', en: 'Rumble-Rumble Fruit' },
        },
      ],
    },
    satori: {
      role: ENEL_PRIEST,
      log: {
        it: 'Tiene la prova delle sfere, dove ogni nuvola può contenere un premio o una bestia, e ride mentre chi è entrato deve scegliere. Prevede i colpi prima che partano, come se leggesse le intenzioni nell’aria. Dice che nessuno degli stranieri arrivati fin lassù ha mai raggiunto l’altare.',
        en: 'He keeps the ordeal of balls, where every cloud may hold a prize or a beast, and laughs while whoever entered has to choose. He sees blows coming before they are thrown, as though he read intentions straight out of the air. He says that none of the strangers who got that far has ever reached the altar.',
      },
      affiliation: [{ episode: 160, value: ENEL_PRIESTS }],
      origin: [{ episode: 160, value: SKY_ISLAND }],
    },
    shura: {
      role: ENEL_PRIEST,
      log: {
        it: 'Tiene la prova del filo, dove un passo fuori dalla nuvola giusta vale la caduta e nient’altro. Vola su un uccello di fuoco e brucia quello che trova, comprese le case di chi non c’entra niente. Della gente di Skypiea parla come di roba di Dio, sua da amministrare.',
        en: 'He keeps the ordeal of string, where one step off the right cloud is a fall and nothing else. He flies a bird of fire and burns whatever he finds, the houses of people who had no part in it included. He speaks of the people of Skypiea as God’s property, his to administer.',
      },
      affiliation: [{ episode: 162, value: ENEL_PRIESTS }],
      origin: [{ episode: 162, value: SKY_ISLAND }],
    },
    gedatsu: {
      role: ENEL_PRIEST,
      log: {
        it: 'Tiene la prova della palude, dove il cielo si apre e chi ci cade dentro non torna su. Ha una forza spaventosa nelle braccia e una distrazione che gli fa perdere il filo a metà di ogni frase. I suoi stessi sottoposti aspettano in silenzio che si ricordi di dare un ordine.',
        en: 'He keeps the ordeal of swamp, where the sky opens up and whoever falls into it does not come back. His arms are frighteningly strong and his mind wanders so badly that he loses the thread halfway through every sentence. His own underlings wait in silence for him to remember to give an order.',
      },
      affiliation: [
        { episode: 166, value: ENEL_PRIESTS },
        {
          episode: 178,
          value: {
            it: 'Addetto alle terme, sottoterra ad Alabasta',
            en: 'Hot spring worker underground on Alabasta',
          },
        },
      ],
      origin: [{ episode: 166, value: SKY_ISLAND }],
    },
    ohm: {
      role: ENEL_PRIEST,
      log: {
        it: 'Tiene la prova del ferro, la più dura delle quattro, e la considera un atto di misericordia verso chi non dovrebbe trovarsi lassù. La sua spada trasforma la nuvola in una frusta di metallo lunga quanto vuole lui. Combatte insieme a un cane enorme che porta un’armatura come la sua.',
        en: 'He keeps the ordeal of iron, the hardest of the four, and thinks of it as an act of mercy toward people who should not be up there at all. His sword turns cloud into a whip of metal as long as he wants it. He fights beside an enormous dog wearing armour of the same make as his own.',
      },
      affiliation: [{ episode: 169, value: ENEL_PRIESTS }],
      origin: [{ episode: 169, value: SKY_ISLAND }],
    },
    'montblanc-noland': {
      role: {
        it: 'Esploratore e capitano di nave',
        en: 'Explorer and ship’s captain',
      },
      log: {
        it: 'Sbarcò su Jaya con il suo equipaggio e vi trovò una città piena d’oro e un popolo che lo prese per nemico. Guarì il capo di quella gente da una febbre che lo stava uccidendo, e i due finirono per intendersi senza avere una lingua in comune. Tornato in patria raccontò tutto al suo re, e nessuno gli credette.',
        en: 'He put in at Jaya with his crew and found a city full of gold and a people who took him for an enemy. He cured their chief of a fever that was killing him, and the two of them came to understand each other with no language in common. Back home he told his king everything, and nobody believed a word of it.',
      },
      affiliation: [
        {
          episode: 187,
          value: {
            it: 'Esploratore del Regno di Lvneel, giustiziato quattrocento anni fa',
            en: 'Explorer of the Lvneel Kingdom, executed four hundred years ago',
          },
        },
      ],
      origin: [
        {
          episode: 187,
          value: {
            it: 'Regno di Lvneel, North Blue',
            en: 'Lvneel Kingdom, North Blue',
          },
        },
      ],
      epithet: [{ episode: 187, value: { it: 'Il Bugiardo', en: 'the Liar' } }],
    },
    kalgara: {
      role: {
        it: 'Capo dei guerrieri shandia',
        en: 'Chief of the Shandia warriors',
      },
      log: {
        it: 'Prese gli stranieri sbarcati sull’isola per dei ladri e li combatté finché una febbre non lo mise a terra. Fu uno di loro a curarlo, e da lì nacque un’amicizia che né l’uno né l’altro avrebbe saputo spiegare a parole. Prima che l’esploratore ripartisse gli promise che avrebbe suonato la grande campana, perché la ritrovasse.',
        en: 'He took the foreigners who landed on the island for thieves and fought them until a fever put him on his back. One of them cured him, and out of that came a friendship neither man could have explained in words. Before the explorer sailed he promised him he would ring the great bell, so that it could be found again.',
      },
      affiliation: [
        {
          episode: 187,
          value: {
            it: 'Guerrieri shandia, capo, quattrocento anni fa',
            en: 'Shandia warriors, chief, four hundred years ago',
          },
        },
      ],
      origin: [
        {
          episode: 187,
          value: { it: 'Jaya, Rotta Maggiore', en: 'Jaya, Grand Line' },
        },
      ],
    },
  },
}
