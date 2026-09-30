import type { PlaceForm, Sea } from '~/lib/view/records'

import { entities } from './entities'
import { orderByMode } from './order'
import type { Entity, LocalizedText } from './types'

/**
 * The ship's log: the place layer of the archive.
 *
 * `entities.ts` files a place at the episode that first shows it and gives it
 * a name and a sentence. This module adds what a viewer at that episode also
 * knows about it — which sea it lies in, what kind of place it is, which arc
 * it belongs to, its one landmark, a longer entry, and which records the
 * archive files there — and the order the ship puts in at each one.
 *
 * Every field obeys the same rule as the summaries: it says only what a
 * viewer at the threshold episode has already seen. A fact learned later is
 * a spoiler, so Baratie has a sous-chef and not what he turns out to be, and
 * Jaya has a town that laughs and not what lies past it.
 */

/**
 * The sea a place lies in and what kind of place it is are declared with the
 * view models rather than here: the log prints them, and nothing under
 * `~/data` may be named from the browser (issue #12).
 */

/**
 * The log entry for a place, beyond the name and the sentence every record
 * carries. Every field obeys the record's own threshold: it says what a
 * viewer who has just arrived could say, so nothing here has to be veiled
 * separately from the place itself.
 */
export type PlaceDossier = {
  readonly form: PlaceForm
  readonly sea: Sea
  /** The arc the place belongs to: an `arc` record's id. */
  readonly arc: string
  /** The one thing the drawing shows and the eye would look for. */
  readonly landmark: LocalizedText
  /** The log entry proper: two or three sentences, safe at the threshold. */
  readonly log: LocalizedText
  /**
   * Records the archive files at this place: the characters met here, the
   * ship received here. Each keeps its own threshold, so a name filed later
   * than the place stays under fog on the place's own page.
   */
  readonly filedHere: readonly string[]
}

export const PLACE_DOSSIERS: Readonly<Record<string, PlaceDossier>> = {
  'shells-town': {
    sea: 'east-blue',
    form: 'town',
    arc: 'romance-dawn',
    landmark: {
      it: 'La torre della base della Marina',
      en: 'The Marine base tower',
    },
    log: {
      it: 'La prima terra su cui la ciurma mette piede, se due persone senza nave si possono chiamare ciurma. La base tiene la città come una caserma, i marinai temono il proprio capitano più dei pirati, e nel cortile un cacciatore di pirati è legato a un palo da giorni, senza mangiare, per una promessa fatta a una bambina.',
      en: 'The first land the crew sets foot on, if two people with no ship can be called a crew. The base runs the town like a barracks, the Marines fear their own captain more than any pirate, and in the yard a pirate hunter has been tied to a post for days, unfed, over a promise made to a little girl.',
    },
    filedHere: ['roronoa-zoro', 'rika'],
  },
  'foosha-village': {
    sea: 'east-blue',
    form: 'village',
    arc: 'romance-dawn',
    landmark: { it: 'Il mulino a vento', en: 'The windmill' },
    log: {
      it: 'Il porto di partenza. Qui un bambino ha passato un anno a chiedere di essere imbarcato dai pirati che avevano preso la taverna per casa, e qui ha ricevuto in prestito il cappello di paglia che porta ancora, con la promessa di restituirlo quando sarà diventato un grande pirata.',
      en: 'The port of departure. Here a boy spent a year asking to be taken aboard by the pirates who had made the tavern their home, and here he was lent the straw hat he still wears, on a promise to give it back once he has become a great pirate.',
    },
    filedHere: ['shanks', 'lord-of-the-coast'],
  },
  'orange-town': {
    sea: 'east-blue',
    form: 'town',
    arc: 'orange-town-arc',
    landmark: { it: 'Il tendone dei pirati', en: 'The pirates’ big top' },
    log: {
      it: 'Il capitano ci è caduto dentro dal cielo, lasciato andare da un uccello, nel mezzo di un inseguimento tra una ladra e tre pirati. Le strade sono vuote, le case ancora intere tranne quelle che i cannoni hanno già raggiunto, e la ciurma che occupa la piazza ha una nave, un tendone e una carta nautica che qualcuno le ha appena rubato.',
      en: 'The captain fell into it from the sky, dropped by a bird, in the middle of a chase between a thief and three pirates. The streets are empty, the houses still whole except where the cannons have already reached, and the crew holding the square has a ship, a big top and a sea chart that somebody has just stolen from it.',
    },
    filedHere: ['nami', 'buggy', 'chouchou', 'richie', 'boodle'],
  },
  'syrup-village': {
    sea: 'east-blue',
    form: 'village',
    arc: 'syrup-village-arc',
    landmark: { it: 'La villa sulla collina', en: 'The mansion on the hill' },
    log: {
      it: 'Tre bambini con una bandiera, il bugiardo che li comanda e una ragazza malata che ascolta le sue storie dalla finestra della villa. Il villaggio ha imparato a non credere a una parola di quello che sente gridare all’alba, il che è un problema il giorno in cui la bugia è vera.',
      en: 'Three children with a flag, the liar who leads them, and a sick girl who listens to his stories from a window of the mansion. The village has learned not to believe a word of what it hears shouted at dawn, which is a problem on the day the lie is true.',
    },
    filedHere: [
      'usopp',
      'going-merry',
      'ninjin-piiman-and-tamanegi',
      'buchi',
      'sham',
    ],
  },
  'baratie': {
    sea: 'east-blue',
    form: 'restaurant',
    arc: 'baratie-arc',
    landmark: { it: 'La prua a testa di pesce', en: 'The fish-head prow' },
    log: {
      it: 'Il primo scalo che non è un’isola. Il proprietario è un vecchio cuoco con una gamba di legno; il suo vice dà da mangiare a chiunque abbia fame e prende a calci chiunque manchi di rispetto alla cucina. La ciurma arriva per cercare un cuoco e il capitano finisce a lavare i piatti per pagare un tetto sfondato.',
      en: 'The first port of call that is not an island. The owner is an old cook with a peg leg; his sous-chef feeds anyone who is hungry and kicks anyone who disrespects the kitchen. The crew comes looking for a cook, and the captain ends up washing dishes to pay for a hole in the roof.',
    },
    filedHere: ['sanji', 'dracule-mihawk', 'fullbody', 'carne', 'patty'],
  },
  'whisky-peak': {
    sea: 'grand-line',
    form: 'town',
    arc: 'whisky-peak-arc',
    landmark: {
      it: 'Le tombe sulle rocce a forma di cactus',
      en: 'The graves on the cactus rocks',
    },
    log: {
      it: 'La ciurma ci arriva dopo una traversata in cui il tempo cambiava ogni pochi minuti. Tutta la città aspetta i pirati lungo il fiume per acclamarli, il sindaco offre liquore e una festa in loro onore, e la festa dura finché gli ospiti non crollano addormentati. Alla luce della luna, le rocce a forma di cactus attorno alla città si rivelano piene di tombe.',
      en: 'The crew arrives after a crossing in which the weather changed every few minutes. The whole town lines the river to cheer the pirates in, the mayor offers liquor and a party in their honour, and the party goes on until the guests fall asleep. By moonlight, the cactus-shaped rocks around the town turn out to be covered in graves.',
    },
    filedHere: [
      'igaram',
      'miss-monday',
      'karoo',
      'mr-5',
      'miss-valentine',
      'nefertari-vivi',
    ],
  },
  'little-garden': {
    sea: 'grand-line',
    form: 'island',
    arc: 'little-garden-arc',
    landmark: {
      it: 'Il dinosauro dal collo lungo sopra la giungla',
      en: 'The long-necked dinosaur above the jungle',
    },
    log: {
      it: 'Mentre la ciurma lasciava Whisky Peak, una sconosciuta le ha detto che per questa rotta non sarebbe mai arrivata ad Alabasta. La giungla è piena di piante che nessuno a bordo riconosce e di animali che dovrebbero essere estinti, e un dinosauro dal collo lungo guarda oltre le cime degli alberi. Il libro di un esploratore spiega il nome: per chi ci abita, l’isola è solo un piccolo giardino.',
      en: 'As the crew left Whisky Peak, a stranger told them they would never reach Alabasta by this route. The jungle is full of plants nobody on board recognises and animals that should be extinct, and a long-necked dinosaur looks out over the treetops. An explorer’s book explains the name: to whoever lives here, the island is only a small garden.',
    },
    filedHere: ['brogy', 'dorry', 'mr-3', 'miss-goldenweek'],
  },
  'drum-island': {
    sea: 'grand-line',
    form: 'island',
    arc: 'drum-island-arc',
    landmark: {
      it: 'Le montagne a forma di tamburo',
      en: 'The drum-shaped mountains',
    },
    log: {
      it: 'La ciurma arriva con la navigatrice malata e trova sulla riva gli abitanti armati di fucili, che sparano per primi e abbassano le armi solo quando Bibi e il capitano si inchinano. Per ora il paese non ha un nome: il suo re è scappato quando sono arrivati i pirati, e l’unica dottoressa, che in paese chiamano strega, vive in un castello in cima alla montagna più alta.',
      en: 'The crew arrives with a sick navigator and finds villagers with rifles on the shore, who shoot first and only lower their guns when Vivi and the captain bow. For now the country has no name: its king ran away when pirates came, and its one doctor, whom the villagers call a witch, lives in a castle on top of the highest mountain.',
    },
    filedHere: [
      'wapol',
      'dalton',
      'kureha',
      'tony-tony-chopper',
      'hiluluk',
      'chess',
      'kuromarimo',
    ],
  },
  'alubarna': {
    sea: 'grand-line',
    form: 'city',
    arc: 'alabasta',
    landmark: {
      it: 'La cupola del palazzo reale',
      en: 'The dome of the royal palace',
    },
    log: {
      it: 'La città del palazzo reale di Alabasta, dove regna il padre di Bibi. La prima notizia che ci arriva è che Crocodile ha di nuovo sconfitto una ciurma di pirati che saccheggiava una città del regno, prima che le truppe reali facessero in tempo ad arrivare, e il re dice che il paese deve essergli grato.',
      en: 'The city of Alabasta’s royal palace, where Vivi’s father reigns as king. The first news heard there is that Crocodile has once again beaten a pirate crew raiding one of its towns before the royal troops could arrive, and the king says the country owes him its thanks.',
    },
    filedHere: [
      'nefertari-cobra',
      'pell',
      'chaka',
      'kohza',
      'lassoo',
      'tsumegeri-guards',
      'mr-7',
      'miss-fathers-day',
      'terracotta',
    ],
  },
  'rainbase': {
    sea: 'grand-line',
    form: 'town',
    arc: 'alabasta',
    landmark: {
      it: 'Il coccodrillo d’oro sul tetto del casinò',
      en: 'The golden crocodile on the casino roof',
    },
    log: {
      it: 'Una città del deserto a un giorno di cammino da Yuba verso nord, che se la passa bene anche con la siccità perché la gente ci viene a giocare d’azzardo. Qui vive Crocodile, e la ciurma arriva trovando la Marina già in città: tutti si separano per ritrovarsi davanti al Rain Dinners, il casinò più grande, una piramide con un coccodrillo d’oro sul tetto.',
      en: 'A desert town a day’s walk north of Yuba that still does well in the drought, because people come here to gamble. Crocodile lives here, and the crew arrives to find the Marines already in town, so everyone scatters to meet again outside Rain Dinners, the biggest casino, a pyramid with a golden crocodile on its roof.',
    },
    filedHere: ['crocodile', 'hasami'],
  },
  'jaya': {
    sea: 'grand-line',
    form: 'island',
    arc: 'jaya-arc',
    landmark: { it: 'Il porto di Mock Town', en: 'Mock Town harbour' },
    log: {
      it: 'La ciurma vi arriva con un Log Pose che punta dritto verso il cielo e nessuna idea di come seguirlo. Mock Town è una città di pirati senza legge, dove nessuno paga il conto e chi parla di un’isola nel cielo viene deriso ad alta voce; l’altra metà dell’isola è foresta, e ci abita chi non ride.',
      en: 'The crew arrives with a Log Pose pointing straight up at the sky and no idea how to follow it. Mock Town is a lawless pirate town where nobody pays their bill and anyone who mentions an island in the sky is laughed at out loud; the other half of the island is forest, and the people who do not laugh live there.',
    },
    filedHere: [
      'bellamy',
      'roshio',
      'sarquiss',
      'montblanc-cricket',
      'marshall-d-teach',
      'jesus-burgess',
      'van-augur',
      'doc-q',
    ],
  },
  'upper-yard': {
    sea: 'grand-line',
    form: 'island',
    arc: 'skypiea',
    landmark: {
      it: 'I tronchi giganti al margine della foresta',
      en: 'The giant trunks at the forest’s edge',
    },
    log: {
      it: 'Nami ci arriva da sola, su un waver che ha appena imparato a guidare, mentre gli altri pranzano nella casa sopra la spiaggia. Dal bordo è un muro di tronchi di cui non si vede la cima. A tavola i padroni di casa spiegano che è la terra di Dio, a pochi minuti di waver, e che nessuno deve mai metterci piede.',
      en: 'Nami gets there alone, on a Waver she has only just learned to ride, while the others are at lunch in the house above the beach. From its edge it is a wall of trunks whose tops she cannot see. At the table their hosts explain that it is the land of God, a short ride away, and that no one is ever to set foot on it.',
    },
    filedHere: [
      'enel',
      'satori',
      'shura',
      'gedatsu',
      'fuza',
      'ohm',
      'yama',
      'holy',
      'nola',
    ],
  },
  'angel-island': {
    sea: 'grand-line',
    form: 'island',
    arc: 'skypiea',
    landmark: { it: 'La spiaggia di nuvola', en: 'The beach made of cloud' },
    log: {
      it: 'La ciurma sbarca su una spiaggia fatta di nuvola, dove una ragazza con le ali e suo padre le offrono il pranzo e le spiegano i dial prima che qualcuno nomini la tassa d’ingresso mai pagata. Poi i White Berets trovano un reato in ogni cosa che fa e dichiarano l’intera ciurma criminale di seconda classe. Quando tre di loro percorrono Lovely Street, l’unica via di negozi dell’isola, la gente si scosta al loro passaggio.',
      en: 'The crew comes ashore on a beach made of cloud, where a winged girl and her father give it lunch and explain dials before anyone mentions the entry fee it never paid. The White Berets then find a crime in everything it does and declare the whole crew criminals of the second class. When three of them walk down Lovely Street, the island’s one shopping street, the residents step out of their way.',
    },
    filedHere: ['su', 'conis', 'pagaya', 'mckinley'],
  },
  'water-seven': {
    sea: 'grand-line',
    form: 'city',
    arc: 'water-seven-arc',
    landmark: {
      it: 'La grande fontana in cima alla città',
      en: 'The great fountain at the top of the city',
    },
    log: {
      it: 'La ciurma arriva con una lettera di presentazione, una mappa disegnata dalla capostazione che non serve a niente e un sacco d’oro da cambiare. La città è stata progettata per stare nel mare, con gli edifici alzati su alte fondamenta, e l’acqua scende dalla grande fontana in cima fino al mare. Qui i pirati non fanno paura: vengono solo mandati ad attraccare in disparte, perché per i cantieri sono clienti.',
      en: 'The crew arrives with a letter of introduction, a map drawn by the station master that is no use at all, and a bag of gold to change. The city was designed to stand in the sea, its buildings raised on tall foundations, and its water runs down from the great fountain at the top into the sea. Pirates are not feared here, only sent to moor out of the way, since to the shipyards they are customers.',
    },
    filedHere: [
      'iceburg',
      'paulie',
      'kaku',
      'rob-lucci',
      'kalifa',
      'blueno',
      'kiwi-and-mozu',
      'zambai',
      'peepley-lulu',
      'franky',
      'tom',
      'thousand-sunny',
    ],
  },
  'puffing-tom': {
    sea: 'grand-line',
    form: 'train',
    arc: 'water-seven-arc',
    landmark: {
      it: 'La locomotiva con la ruota a pale',
      en: 'The locomotive and its paddlewheel',
    },
    log: {
      it: 'La ciurma lo incontra arenandosi sul suo binario mentre insegue una rana, e deve fare marcia indietro mentre lui arriva fischiando. Alla stazione una bambina spiega quello che nessuno di loro ha mai visto: una macchina a vapore che fa girare le ruote a pale e corre su un binario appena sotto le onde, e che non esiste in nessun’altra parte del mondo. La rana, si scopre, si piazza sul binario apposta, per misurarsi con lui.',
      en: 'The crew meets it by running aground on its track while chasing a frog, and has to back away as it comes on whistling. At the station a little girl explains what none of them has seen before: a steam engine that turns paddlewheels and runs on a rail just below the waves, found nowhere else in the world. The frog, it turns out, stands on the track on purpose, to test his strength against it.',
    },
    filedHere: [
      'yokozuna',
      'kokoro',
      'chimney',
      'jerry',
      'wanze',
      'nero',
      't-bone',
    ],
  },
  'enies-lobby': {
    sea: 'grand-line',
    form: 'island',
    arc: 'enies-lobby-arc',
    landmark: { it: 'Le Porte della Giustizia', en: 'The Gates of Justice' },
    log: {
      it: 'Le sue luci si vedono da lontano, perché sull’isola giudiziaria la notte non scende mai. Sta sopra un buco nel mare, con una cascata che si rovescia da ogni lato, e dietro si alzano le Porte della Giustizia: quando i prigionieri le hanno passate, è troppo tardi per riprenderli. Il piano è sfondare il cancello principale e arrivare ai prigionieri prima.',
      en: 'Its lights show from far off, because night never falls on the judicial island. It sits over a hole in the sea with a waterfall pouring off every side, and behind it rise the Gates of Justice: once the prisoners are through them, there is no bringing them back. The plan is to break open the main gate and reach the prisoners first.',
    },
    filedHere: [
      'jabra',
      'kumadori',
      'fukurou',
      'oimo-and-kashi',
      'baskerville',
      'funkfreed',
    ],
  },
  'florian-triangle': {
    sea: 'grand-line',
    form: 'sea',
    arc: 'thriller-bark-arc',
    landmark: {
      it: 'Una nave fantasma nella nebbia',
      en: 'A ghost ship in the fog',
    },
    log: {
      it: 'Il tratto di mare che la rotta non può evitare, e di cui Kokoro aveva avvertito la ciurma: ogni anno ci spariscono più di cento navi, e si dice che lo attraversi una nave fantasma. La ciurma ci entra uscendo da una tempesta, in una nebbia così fitta che a metà giornata sembra notte. Poi sull’acqua arriva una canzone, e passa una nave dalle vele strappate con uno scheletro che beve il tè sul ponte.',
      en: 'The stretch of sea the route cannot avoid, and the one Kokoro warned the crew about: more than a hundred ships vanish in it every year, and a ghost ship is said to sail it. The crew comes into it out of a storm, in a fog so thick that it looks like night in the middle of the day. Then a song comes over the water, and a ship with torn sails drifts by, a skeleton drinking tea on its deck.',
    },
    filedHere: ['brook'],
  },
  'thriller-bark': {
    sea: 'grand-line',
    form: 'ship',
    arc: 'thriller-bark-arc',
    landmark: {
      it: 'Il portale a forma di bocca',
      en: 'The gate shaped like a mouth',
    },
    log: {
      it: 'Il Log Pose la ignora, perché è arrivata fin qui dal West Blue, e il portale si richiude alle spalle della nave come una bocca. Dentro ci sono una villa dove un dottore ricuce cadaveri, un cimitero da cui i morti escono e una foresta dove chi ha perso l’ombra si nasconde dal sole. La vela dietro la villa dice il resto: l’isola è una nave, e il membro della Flotta dei Sette che la possiede abita nell’albero maestro.',
      en: 'The Log Pose ignores it, because it drifted here from the West Blue, and the gate shuts behind the ship like a mouth. Inside are a mansion where a doctor sews corpses together, a graveyard whose dead climb out of the ground, and a forest where people who have lost their shadows hide from the sun. The sail behind the mansion tells the rest: the island is a ship, and the Warlord who owns it lives in the main mast.',
    },
    filedHere: [
      'cerberus-thriller-bark',
      'perona',
      'hogback',
      'lola',
      'absalom',
      'victoria-cindry',
      'gecko-moria',
      'ryuma',
      'oars',
      'spoil',
    ],
  },
  'sabaody-archipelago': {
    sea: 'grand-line',
    form: 'archipelago',
    arc: 'sabaody',
    landmark: {
      it: 'La ruota panoramica del parco',
      en: 'The amusement park’s Ferris wheel',
    },
    log: {
      it: 'Non un’isola ma settantanove mangrovie giganti, ognuna con il suo numero e la sua città, collegate da ponti. Le radici respirano una resina che sale in aria come bolle, e in lontananza c’è un parco divertimenti con la ruota panoramica. La ciurma viene a far rivestire la nave per scendere sott’acqua, a una condizione: qualunque cosa facciano i Nobili Mondiali per strada, fingere di non vedere.',
      en: 'Not an island but seventy-nine giant mangroves, each with its own number and its own town, joined by bridges. The roots breathe out a resin that floats up as bubbles, and in the distance there is an amusement park with a Ferris wheel. The crew comes to have the ship coated for the dive, on one condition: whatever the World Nobles do in the street, pretend to see nothing.',
    },
    filedHere: [
      'shakky',
      'trafalgar-law',
      'eustass-kid',
      'killer',
      'basil-hawkins',
      'x-drake',
      'scratchmen-apoo',
      'urouge',
      'capone-bege',
      'jewelry-bonney',
      'saint-charloss',
      'silvers-rayleigh',
      'borsalino',
    ],
  },
  'amazon-lily': {
    sea: 'calm-belt',
    form: 'island',
    arc: 'amazon-lily-arc',
    landmark: {
      it: 'La montagna con il villaggio dentro',
      en: 'The mountain with the village inside',
    },
    log: {
      it: 'Rufy ci arriva da solo, separato dalla ciurma, e si risveglia nelle mani di guerriere Kuja che non hanno mai visto un uomo. Il loro villaggio è costruito come una fortezza nella cavità di un’alta montagna, in mezzo alla giungla. La Fascia di Bonaccia tiene lontano ogni marinaio, e l’unica nave dell’isola è quella dell’imperatrice, trainata da due serpenti marini velenosi che nemmeno i Re del Mare osano attaccare.',
      en: 'Luffy lands here alone, cut off from his crew, and wakes up in the hands of Kuja warriors who have never seen a man. Their village is built like a fortress in the hollow of a tall mountain, in the middle of the jungle. The Calm Belt keeps every sailor away, and the only ship on the island is the empress’s, pulled by two venomous sea snakes that not even the Sea Kings dare attack.',
    },
    filedHere: [
      'marguerite',
      'aphelandra',
      'sweet-pea',
      'boa-hancock',
      'kikyo',
      'bacura',
      'boa-sandersonia',
      'boa-marigold',
      'nyon',
      'salome',
    ],
  },
  'impel-down': {
    sea: 'calm-belt',
    form: 'prison',
    arc: 'impel-down-arc',
    landmark: {
      it: 'Il grande portone sul mare',
      en: 'The great gate at the waterline',
    },
    log: {
      it: 'Si dice che sia impossibile entrarci di nascosto o evaderne. Le navi pirata non passano la Fascia di Bonaccia per arrivarci; la Marina ci arriva con una corrente tutta sua, attraverso le Porte della Giustizia. Rufy entra nascosto sotto il mantello dell’imperatrice pirata, membro della Flotta dei Sette, che le guardie vogliono ammanettare e perquisire prima di aprirle il portone.',
      en: 'It is said to be impossible to break into or out of. Pirate ships cannot cross the Calm Belt to reach it; the Marines come on a current of their own, through the Gates of Justice. Luffy comes in hidden under the cloak of a Warlord, whom the guards mean to handcuff and search before they open the gate for her.',
    },
    filedHere: [
      'domino',
      'hannyabal',
      'magellan',
      'jinbe',
      'saldeath',
      'sadi',
      'minotaurus',
      'emporio-ivankov',
      'inazuma',
      'shiryu',
    ],
  },
  'marineford': {
    sea: 'grand-line',
    form: 'fortress',
    arc: 'marineford-arc',
    landmark: {
      it: 'Il palazzo del Quartier Generale',
      en: 'The Headquarters building',
    },
    log: {
      it: 'La città delle famiglie dei marine è stata evacuata a Sabaody, dove tutti guardano l’esecuzione sugli schermi. Nella baia aspettano quasi centomila soldati scelti, circondati da navi da guerra e cannoni, con la Flotta dei Sette schierata davanti alle truppe e i tre ammiragli seduti sotto il patibolo. Nessuna delle navi mandate in avanscoperta è tornata indietro.',
      en: 'The town where the Marines’ families live has been evacuated to Sabaody, where everyone watches the execution on screens. Nearly a hundred thousand elite soldiers wait in the bay, ringed by warships and cannons, with the Warlords lined up in front of the troops and the three admirals seated below the scaffold. None of the lookout ships sent out has come back.',
    },
    filedHere: [
      'doma',
      'jozu',
      'vista',
      'tsuru',
      'squard',
      'sakazuki',
      'lacroix',
      'whitey-bay',
      'little-oars-jr',
    ],
  },
  'fish-man-island': {
    sea: 'grand-line',
    form: 'island',
    arc: 'fish-man-island-arc',
    landmark: {
      it: 'La grande bolla illuminata dall’alto',
      en: 'The great bubble lit from above',
    },
    log: {
      it: 'La ciurma la raggiunge in fondo a una fossa, a diecimila metri di profondità, dopo che un vulcano sottomarino ha quasi sepolto la nave lungo la discesa, e l’ago del Log Pose punta dritto su di lei. È il paradiso delle sirene che Sanji sogna fin da bambino, e al solo pensiero gli sanguina ancora il naso. Prima che qualcuno trovi l’ingresso, un branco di mostri marini con qualcuno in groppa sbarra la strada.',
      en: 'The crew reaches it at the bottom of a trench ten thousand metres down, after an undersea volcano nearly buried the ship on the way down, and the Log Pose needle points straight at it. It is the mermaids’ paradise Sanji has dreamed of since he was a boy, and the thought alone still makes his nose bleed. Before anyone finds the way in, a herd of sea monsters with riders on their backs bars the entrance.',
    },
    filedHere: [
      'shyarly',
      'neptune',
      'fukaboshi',
      'ryuboshi',
      'manboshi',
      'shirahoshi',
      'megalo',
      'den',
      'minister-of-the-right',
      'otohime',
      'minister-of-the-left',
    ],
  },
  'fish-man-district': {
    sea: 'grand-line',
    form: 'region',
    arc: 'fish-man-island-arc',
    landmark: { it: 'L’enorme nave Noah', en: 'The enormous ship Noah' },
    log: {
      it: 'Kaimi lo descrive come una zona poco raccomandabile e dice che Octy si sta rimettendo lì, perché è da lì che viene. Gli uomini-pesce che hanno cercato di fermare la ciurma all’ingresso dell’isola ci tornano subito, su un’enorme nave chiamata Noah, per avvertire il loro capo che è arrivato chi ha battuto Arlong. Il capo vuole che glielo portino.',
      en: 'Camie calls it a rough area and says Hatchan is resting there, because it is where he comes from. The fish-men who tried to stop the crew at the island’s entrance head straight back there, to an enormous ship called Noah, to tell their boss that the man who beat Arlong has arrived. The boss wants him brought in.',
    },
    filedHere: [
      'hammond',
      'hody-jones',
      'hyouzou',
      'zeo',
      'dosun',
      'daruma',
      'ikaros-much',
    ],
  },
  'punk-hazard': {
    sea: 'new-world',
    form: 'island',
    arc: 'punk-hazard-arc',
    landmark: {
      it: 'Il cancello con i cartelli di pericolo',
      en: 'The gate with its warning signs',
    },
    log: {
      it: 'Nessuno degli aghi del Log Pose la indica, e per passare sopra il mare di fuoco serve una strada di nuvole che Nami stende sulle fiamme. Il nome arriva da una richiesta d’aiuto, interrotta da un urlo, di un uomo i cui compagni vengono uccisi uno dopo l’altro dai samurai. Dietro una recinzione con gli stemmi del Governo Mondiale e della Marina gli edifici sono fusi, e Robin nota che l’isola non sembra aver bruciato da sempre.',
      en: 'None of the Log Pose needles points at it, and crossing the sea of fire takes a road of cloud that Nami lays over the flames. The name comes from a distress call, cut off by a scream, from a man whose comrades are being killed one after another by samurai. Behind a fence marked with the World Government and Marine emblems the buildings have melted, and Robin notes that the island does not look as if it has always burned.',
    },
    filedHere: [
      'kinemon',
      'brownbeard',
      'caesar-clown',
      'monet',
      'vergo',
      'momonosuke',
      'baby-5',
      'buffalo',
      'mocha',
      'rock-and-scotch',
      'smiley',
    ],
  },
  'dressrosa': {
    sea: 'new-world',
    form: 'island',
    arc: 'dressrosa-arc',
    landmark: {
      it: 'Un’isola rocciosa all’orizzonte',
      en: 'A rocky island on the horizon',
    },
    log: {
      it: 'La ciurma la vede per la prima volta come un’isola rocciosa all’orizzonte: un regno dell’amore e della passione, governato da Do Flamingo, il cui ritiro dalla Flotta dei Sette è la grande notizia del mattino. Il piano è consegnare un prigioniero su un’isoletta a nord e distruggere una fabbrica che nessuno sa dove sia. Kinemon vuole solo riprendersi il compagno catturato lì mentre copriva la sua fuga.',
      en: 'The crew first sees it as a rocky island on the horizon: a kingdom of love and passion, ruled by Doflamingo, whose withdrawal from the Seven Warlords is the morning’s big news. The plan is to hand over a prisoner on a small island to the north and destroy a factory whose whereabouts nobody knows. Kin’emon only wants to get back the comrade who was caught there covering his escape.',
    },
    filedHere: [
      'issho',
      'rebecca',
      'trebol',
      'diamante',
      'pica',
      'viola',
      'wicca',
      'sugar',
      'riku-doldo-iii',
      'kyros',
      'mansherry',
      'kanjuro',
    ],
  },
  'green-bit': {
    sea: 'new-world',
    form: 'island',
    arc: 'dressrosa-arc',
    landmark: {
      it: 'Il ponte di ferro da Dressrosa',
      en: 'The iron bridge from Dressrosa',
    },
    log: {
      it: 'La squadra della consegna ci arriva lungo il ponte di ferro che parte da Dressrosa, mentre i pesci combattenti ne strappano dei pezzi, e fa l’ultimo tratto in volo, portata dal suo stesso prigioniero. L’isola dovrebbe essere deserta, eppure dall’altra parte si sentono voci di qualcuno che scappa in preda al panico alla vista di un umano. Oltre una riva piena di relitti di navi affondate dai pesci c’è una foresta selvaggia.',
      en: 'The handover team reaches it along the iron bridge from Dressrosa while fighting fish tear pieces out of it, and covers the last stretch in the air, carried by its own prisoner. The island is supposed to be deserted, yet voices on the far side run off in a panic at the sight of a human. Past a shore full of the wrecks of ships the fish have sunk stands a very wild forest.',
    },
    filedHere: ['leo'],
  },
  'zou': {
    sea: 'new-world',
    form: 'island',
    arc: 'zou-arc',
    landmark: {
      it: 'La zampa di un elefante che esce dal mare',
      en: 'An elephant’s leg rising out of the sea',
    },
    log: {
      it: 'Il Vivre Card indica quella che la vedetta scambia per una montagna che si muove nella nebbia, e che si rivela un elefante in cammino nel mare con un paese sulla schiena. Nessun Log Pose può trovarla, perché non sta mai ferma; nebbia e correnti contrarie tengono lontani gli estranei, e si dice che la tribù che vive lassù da mille anni odi gli umani. I compagni partiti prima dovrebbero essere già in cima.',
      en: 'The Vivre Card points at what the lookout takes for a mountain moving in the fog, and it turns out to be an elephant walking through the sea with a country on its back. No Log Pose can find it, because it never stays put; fog and adverse currents keep strangers away, and the tribe that has lived up there for a thousand years is said to hate humans. The crewmates who went ahead should be at the top already.',
    },
    filedHere: [
      'wanda',
      'carrot',
      'inuarashi',
      'zunesha',
      'jack',
      'pedro',
      'shishilian',
      'nekomamushi',
      'raizo',
    ],
  },
  'whole-cake-island': {
    sea: 'new-world',
    form: 'island',
    arc: 'whole-cake-island-arc',
    landmark: {
      it: 'Il castello in cima alla torta',
      en: 'The castle on top of the cake',
    },
    log: {
      it: 'La ciurma è ancora a un giorno di navigazione, ma è qui che si trova Big Mom, e Sanji è già arrivato. L’isola sta al centro di quelle che i suoi ministri governano per lei. A tre giorni dal Tea Party lei chiede notizie della torta nuziale, e i suoi uomini chiamano dalle isole dove hanno preso le uova, la farina e la frutta, uccidendo chi le custodiva.',
      en: 'The crew is still a day’s sail away, but this is where Big Mom is, and Sanji has already arrived. The island sits at the centre of the ones her ministers run for her. Three days before the Tea Party she asks after the wedding cake, and her people call in from the islands where they took the eggs, the flour and the fruit, killing whoever guarded them.',
    },
    filedHere: [
      'charlotte-linlin',
      'charlotte-perospero',
      'charlotte-cracker',
      'charlotte-brulee',
      'randolph',
      'vinsmoke-judge',
      'charlotte-katakuri',
      'pound',
      'zeus',
      'prometheus',
      'streusen',
    ],
  },
  'cacao-island': {
    sea: 'new-world',
    form: 'island',
    arc: 'whole-cake-island-arc',
    landmark: {
      it: 'Un tetto di tegole di cioccolato',
      en: 'A roof of chocolate tiles',
    },
    log: {
      it: 'La prima isola di Totto Land su cui la ciurma mette piede, dopo che Pekoms ha convinto le guardie a tenere il segreto. La città è di cioccolato dai muri ai tavoli e se ne può mangiare quanto si vuole, ma la legge vieta di mangiare le tegole, che riparano dalla pioggia. Rufy e Chopper divorano un caffè intero, e la proprietaria li salva dall’arresto, felice che sia piaciuto loro fino a quel punto.',
      en: 'The first island of Totto Land the crew sets foot on, after Pekoms talks the guards into keeping quiet. The town is chocolate from the walls to the tables and anyone may eat it, but the law forbids eating the roof tiles, which keep off the rain. Luffy and Chopper eat a whole cafe, and its owner saves them from arrest, delighted they liked it that much.',
    },
    filedHere: ['charlotte-pudding'],
  },
  'mary-geoise': {
    sea: 'red-line',
    form: 'city',
    arc: 'reverie',
    landmark: {
      it: 'La città in cima alla Red Line',
      en: 'The city on top of the Red Line',
    },
    log: {
      it: 'La Terra Santa, una città costruita in cima alla Red Line, il muro che fa il giro del mondo; una delle due strade per il Nuovo Mondo passa di lassù. Ci vivono i Nobili Mondiali, ci è stata convocata la Flotta dei Sette, e un uomo-pesce una volta ci è salito da solo per liberarne gli schiavi. Ora i re del mondo si mettono in viaggio per la Reverie.',
      en: 'The Holy Land, a city built on top of the Red Line, the wall that runs around the world; one of the two ways into the New World goes over it. The World Nobles live there, the Seven Warlords have been summoned there, and a fish-man once climbed up to it alone to set its slaves free. Now the kings of the world are setting out for the Reverie.',
    },
    filedHere: ['donquixote-mjosgard', 'sterry', 'im', 'gion', 'tokikake'],
  },
  'kuri': {
    sea: 'new-world',
    form: 'region',
    arc: 'wano',
    landmark: {
      it: 'Un pino chino sulla spiaggia',
      en: 'A pine leaning over the beach',
    },
    log: {
      it: 'Rufy ci arriva da solo con la nave, spinto a riva dopo che un vortice lo ha separato dagli altri, senza sapere se sia davvero Wano. Sulla spiaggia una bestia simile a un cane si batte con un babbuino armato di spada, poi arrivano due uomini in sella a un rettile con una bambina rapita per le sue parole. Sistemati loro, la bambina risponde alla sua domanda: questa è Kuri, nel Paese di Wano.',
      en: 'Luffy washes up here alone with the ship, after a whirlpool has separated him from the others, not sure whether this is Wano at all. On the beach a dog-like beast is fighting a baboon with a sword, then two men riding a reptile turn up with a girl they have snatched for what she said. Once they are dealt with, the girl answers his question: this is Kuri, in the Land of Wano.',
    },
    filedHere: [
      'tama',
      'tenguyama-hitetsu',
      'ashura-doji',
      'tsurujo',
      'urashima',
      'kikunojo',
      'holdem',
      'speed',
      'shinobu',
    ],
  },
  'flower-capital': {
    sea: 'new-world',
    form: 'city',
    arc: 'wano',
    landmark: {
      it: 'Una bottega con le lanterne di carta',
      en: 'A shop front hung with paper lanterns',
    },
    log: {
      it: 'L’unico posto di Wano che prospera ancora: qui vive lo shogun, mentre il resto del paese è stato ridotto a una landa senza legge. Una parte della ciurma ne percorre già le strade travestita, e uno spadaccino che lì ha abbattuto un magistrato è ricercato in tutto il paese. A scuola i bambini imparano che tenere chiuso il paese ne mantiene la pace, e ridono dei samurai che volevano aprirlo.',
      en: 'The one place in Wano that still prospers: the shogun lives here, while the rest of the country has been left a lawless wasteland. Part of the crew already walks its streets in disguise, and a swordsman who cut down a magistrate there is wanted across the country. At school the children learn that keeping the country closed keeps the peace, and laugh at the samurai who wanted to open it.',
    },
    filedHere: [
      'kurozumi-orochi',
      'komurasaki',
      'toko',
      'kyoshiro',
      'daikoku',
      'fujin',
      'raijin',
      'fukurokuju',
      'shimotsuki-yasuie',
    ],
  },
  'udon': {
    sea: 'new-world',
    form: 'region',
    arc: 'wano',
    landmark: {
      it: 'L’ingresso sbarrato di una miniera',
      en: 'A barred mine entrance',
    },
    log: {
      it: 'Rufy ci arriva prigioniero dopo lo scontro con Kaido a Kuri. Qui i prigionieri lavorano nelle miniere e battono il ferro per farne armi, e al nuovo arrivato promettono la cella finché non piegherà la testa. Nei sotterranei c’è una cella che nessuno apre: chi ci sta dentro viene nutrito di pesce velenoso, e non ne è mai morto.',
      en: 'Luffy is brought here as a prisoner after his fight with Kaido in Kuri. The prisoners work the mines and beat iron into weapons, and the newcomer is promised a cell until he bends the knee. Down in the cells there is one that nobody opens: whoever is inside is fed poisonous fish, and has never died of it.',
    },
    filedHere: [
      'dobon',
      'alpacaman',
      'daifugo',
      'babanuki',
      'queen',
      'solitaire',
      'hyogoro',
      'kawamatsu',
    ],
  },
  'onigashima': {
    sea: 'new-world',
    form: 'island',
    arc: 'wano',
    landmark: {
      it: 'Una cupola di roccia con due corna',
      en: 'A rock dome with two horns',
    },
    log: {
      it: 'La base dei Pirati delle Cento Bestie, un’isola al largo di Wano così vicina che per arrivarci non serve una grande nave. Nel paese Kaido è venerato come la divinità che lo protegge, e la notte della Festa del Fuoco lo shogun guida fin qui una processione per rendergli omaggio. Qui arrivano anche le offerte di Kuri, e chi comanda si lamenta che sono troppo poche.',
      en: 'The Beasts Pirates’ base, an island off Wano so close that no big ship is needed to reach it. In the country Kaido is worshipped as the deity who protects it, and on the night of the Fire Festival the shogun leads a procession here to pay him homage. The offerings from Kuri come here too, and those in charge complain that they are too few.',
    },
    filedHere: [
      'king',
      'ulti',
      'whos-who',
      'black-maria',
      'sasaki',
      'hatcha',
      'yamato',
      'bao-huang',
      'fuga',
      'kazenbo',
      'maha',
    ],
  },
  'egghead-island': {
    sea: 'new-world',
    form: 'island',
    arc: 'egghead',
    landmark: { it: 'La cupola del laboratorio', en: 'The laboratory dome' },
    log: {
      it: 'Un’isola che vive qualche secolo avanti al resto del mondo, costruita attorno al laboratorio di uno scienziato del Governo Mondiale. Il mare intorno è caldo per il vulcano sul fondo, le macchine che la abitano non dovrebbero esistere ancora, e la ciurma ci approda inseguita.',
      en: 'An island living a few centuries ahead of the rest of the world, built around the laboratory of a World Government scientist. The sea around it is warm because of the volcano on the seabed, the machines that live on it should not exist yet, and the crew lands there with someone on its tail.',
    },
    filedHere: [
      'jewelry-bonney',
      'vegapunk',
      'shaka',
      'lilith',
      's-bear',
      's-hawk',
      's-shark',
      's-snake',
      'atlas',
      'edison',
      'pythagoras',
      'york',
      'emet',
    ],
  },
  'elbaf-island': {
    sea: 'new-world',
    form: 'island',
    arc: 'elbaf',
    landmark: {
      it: 'Un albero più alto delle nuvole',
      en: 'A tree taller than the clouds',
    },
    log: {
      it: 'L’isola dei giganti di cui Dorry e Brogy parlavano, e la ciurma capisce di esserci già arrivata solo dopo aver lasciato un regno in miniatura. Un albero sconfinato la sovrasta, e nel buio gelido ai suoi piedi c’è un principe incatenato da anni.',
      en: 'The island of giants Dorry and Brogy spoke of, and the crew only realises it has already arrived after leaving a miniature kingdom behind. A boundless tree towers over it, and in the freezing dark at its foot a prince has been chained for years.',
    },
    filedHere: ['road', 'iscat', 'goldberg', 'stansen'],
  },
  'warland': {
    sea: 'new-world',
    form: 'region',
    arc: 'elbaf',
    landmark: {
      it: 'Due asce incrociate su uno scudo',
      en: 'Two axes crossed over a shield',
    },
    log: {
      it: 'Il regno dei guerrieri giganti su Elbaf, «la terra da cui vengono le guerre», come la chiama con orgoglio chi ci è nato principe. È la patria dei giganti che la ciurma ha incontrato per mare, da Little Garden a Enies Lobby.',
      en: 'The kingdom of the warrior giants on Elbaph, “the land where wars come from”, as the one born its prince proudly calls it. It is the homeland of the giants the crew has met at sea, from Little Garden to Enies Lobby.',
    },
    filedHere: ['loki', 'ragnir'],
  },
  'sun-world': {
    sea: 'new-world',
    form: 'region',
    arc: 'elbaf',
    landmark: {
      it: 'Le case dei giganti alla luce del sole',
      en: 'The giants’ houses in the sunlight',
    },
    log: {
      it: 'Lo strato di mezzo di Elbaf, in alto sull’albero colossale, dove i giganti vivono alla luce del sole; sopra c’è il Mondo del Cielo. Sotto c’è il Mondo Sotterraneo, buio e freddo.',
      en: 'The middle layer of Elbaph, high up the colossal tree, where the giants live in the sunlight, with the Heaven World above. Below lies the Underworld, dark and cold.',
    },
    filedHere: [
      'ange',
      'ripley',
      'colon',
      'biblo',
      'kiba',
      'wolf-elbaph',
      'blade',
      'scopper-gaban',
    ],
  },
}

/** Every place record, in the order the ship puts in at them. */
export const places: readonly Entity[] = orderByMode(
  entities.filter((entity) => entity.kind === 'place'),
  'episode',
)

/**
 * Looks a place up by id. A record that exists but is not a place is
 * `undefined` here too: the log has no entry for a character.
 */
export function getPlace(id: string): Entity | undefined {
  return places.find((candidate) => candidate.id === id)
}

/**
 * The log entry filed for a record, or `undefined` for one the ship never put
 * in at. A place with no entry still has a name, a drawing and a threshold –
 * the log is the extra the page shows once there is something to say.
 */
export function placeDossierOf(entity: Entity): PlaceDossier | undefined {
  return PLACE_DOSSIERS[entity.id]
}
