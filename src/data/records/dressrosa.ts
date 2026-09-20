import { dressrosaChronicles } from './dressrosa.chronicle'
import type { Saga } from './saga'

/**
 * The Dressrosa saga, episodes 575 to 746: an island half frozen and half on
 * fire, then a kingdom of living toys and a colosseum.
 */

const GRAND_FLEET = {
  it: 'Grande Flotta di Cappello di Paglia',
  en: 'Straw Hat Grand Fleet',
}

const DIAMANTE_ARMY = {
  it: 'Pirati di Donquijote, ufficiale dell’Armata Diamante',
  en: 'Donquixote Pirates, Diamante Army officer',
}

const DONQUIXOTE_ELITE_ROLE = {
  it: 'Ufficiale supremo dei Pirati di Donquijote',
  en: 'Donquixote Pirates elite officer',
}

const WANO = { it: 'Paese di Wano', en: 'Wano Country' }

const DRESSROSA = { it: 'Dressrosa', en: 'Dressrosa' }

export const dressrosa: Saga = {
  entries: [
    {
      id: 'koala',
      kind: 'character',
      revealedAtEpisode: 541,
      revealedAtChapter: 622,
      name: { it: 'Koala', en: 'Koala' },
      summary: {
        it: 'Una bambina liberata dalla schiavitù dai Pirati del Sole, che gli uomini-pesce riportano al suo villaggio con il marchio ancora impresso sulla schiena.',
        en: 'A little girl freed from slavery by the Sun Pirates, carried home to her village by fish-men with the slave brand still on her back.',
      },
      visual: { art: 'koala', tint: 'orange' },
    },
    {
      id: 'punk-hazard',
      kind: 'arc',
      revealedAtEpisode: 579,
      revealedAtChapter: 654,
      name: { it: 'Punk Hazard', en: 'Punk Hazard' },
      summary: {
        it: 'Un’isola divisa in due da una linea netta, metà in fiamme e metà sepolta nel ghiaccio, su cui il Governo Mondiale vieta di sbarcare.',
        en: 'An island cut in two by a clean line, half of it burning and half buried in ice, which the World Government forbids anyone to land on.',
      },
      visual: { art: 'punk-hazard', tint: 'vermilion' },
    },
    {
      id: 'kinemon',
      kind: 'character',
      revealedAtEpisode: 579,
      revealedAtChapter: 657,
      name: { it: 'Kinemon', en: 'Kin’emon' },
      summary: {
        it: 'Un samurai tagliato in pezzi che continua a parlare, trovato nella metà ghiacciata dell’isola mentre cerca il resto del proprio corpo e suo figlio.',
        en: 'A samurai chopped into pieces who goes on talking, found in the frozen half of the island looking for the rest of his body and for his son.',
      },
      visual: { art: 'kinemon', tint: 'red' },
    },
    {
      id: 'brownbeard',
      kind: 'character',
      revealedAtEpisode: 580,
      revealedAtChapter: 658,
      name: { it: 'Barbabruna', en: 'Brownbeard' },
      summary: {
        it: 'Un pirata innestato sul corpo di un coccodrillo, che pattuglia la metà in fiamme dell’isola a capo di una banda di centauri.',
        en: 'A pirate grafted onto a crocodile’s body who patrols the burning half of the island at the head of a band of centaurs.',
      },
      visual: { art: 'brownbeard', tint: 'ocher' },
    },
    {
      id: 'caesar-clown',
      kind: 'character',
      revealedAtEpisode: 584,
      revealedAtChapter: 662,
      name: { it: 'Caesar Clown', en: 'Caesar Clown' },
      summary: {
        it: 'Uno scienziato con le corna e la pelle blu che ride a scatti e si scioglie in gas velenoso, padrone di un laboratorio su un’isola vietata.',
        en: 'A horned, blue-skinned scientist who laughs in fits and dissolves into poison gas, master of a laboratory on a forbidden island.',
      },
      visual: { art: 'caesar-clown', tint: 'acid' },
    },
    {
      id: 'monet',
      kind: 'character',
      revealedAtEpisode: 586,
      revealedAtChapter: 664,
      name: { it: 'Monet', en: 'Monet' },
      summary: {
        it: 'Una donna con le ali e le zampe da uccello che tiene i registri del laboratorio, e che si sfalda in neve quando qualcuno prova a colpirla.',
        en: 'A winged woman with a bird’s legs who keeps the laboratory’s records, and comes apart into snow when anyone tries to hit her.',
      },
      visual: { art: 'monet', tint: 'ice' },
    },
    {
      id: 'vergo',
      kind: 'character',
      revealedAtEpisode: 589,
      revealedAtChapter: 666,
      name: { it: 'Vergo', en: 'Vergo' },
      summary: {
        it: 'Un viceammiraglio della Marina con un pezzo di cibo sempre incollato alla guancia, che arriva sull’isola e non lascia capire da che parte stia.',
        en: 'A Marine vice admiral with a scrap of food forever stuck to his cheek, who arrives on the island and leaves nobody sure whose side he is on.',
      },
      visual: { art: 'vergo', tint: 'sand' },
    },
    {
      id: 'momonosuke',
      kind: 'character',
      revealedAtEpisode: 590,
      revealedAtChapter: 667,
      name: { it: 'Momonosuke', en: 'Momonosuke' },
      summary: {
        it: 'Un bambino trovato nel laboratorio insieme agli altri rapiti, trasformato in un piccolo drago rosa che non riesce a capire come si vola.',
        en: 'A boy found in the laboratory among the other stolen children, turned into a small pink dragon that cannot work out how to fly.',
      },
      visual: { art: 'momonosuke', tint: 'pink' },
    },
    {
      id: 'baby-5',
      kind: 'character',
      revealedAtEpisode: 591,
      revealedAtChapter: 668,
      name: { it: 'Baby 5', en: 'Baby 5' },
      summary: {
        it: 'Una ragazza che non sa dire di no a nessuno e che trasforma le proprie braccia in armi da fuoco per rendersi utile a chi glielo chiede.',
        en: 'A young woman who cannot say no to anybody, turning her own arms into firearms to make herself useful to whoever asks.',
      },
      visual: { art: 'baby-5', tint: 'wine' },
    },
    {
      id: 'buffalo',
      kind: 'character',
      revealedAtEpisode: 591,
      revealedAtChapter: 668,
      name: { it: 'Buffalo', en: 'Buffalo' },
      summary: {
        it: 'Un uomo tondo come una palla che si mette a girare su sé stesso come un’elica e decolla portandosi dietro la compagna di viaggio.',
        en: 'A man as round as a ball who spins himself like a propeller and takes off, carrying his travelling companion along with him.',
      },
      visual: { art: 'buffalo', tint: 'teal' },
    },
    {
      id: 'dressrosa',
      kind: 'arc',
      revealedAtEpisode: 629,
      revealedAtChapter: 700,
      name: { it: 'Dressrosa', en: 'Dressrosa' },
      summary: {
        it: 'Un regno di fiori e giocattoli viventi, con un colosseo al centro e un soldatino di legno con una gamba sola fermo davanti al cancello.',
        en: 'A kingdom of flowers and living toys, a colosseum at its heart and a one-legged wooden soldier standing at the gate.',
      },
      visual: { art: 'dressrosa', tint: 'flamingo' },
    },
    {
      id: 'rebecca',
      kind: 'character',
      revealedAtEpisode: 630,
      revealedAtChapter: 706,
      name: { it: 'Rebecca', en: 'Rebecca' },
      summary: {
        it: 'Una gladiatrice del colosseo con l’armatura leggera e una lunga treccia, che vince ogni incontro senza ferire nessuno e per questo viene fischiata.',
        en: 'A colosseum gladiator in light armour with a long braid, who wins every bout without wounding anyone and is jeered for it.',
      },
      visual: { art: 'rebecca', tint: 'pink' },
    },
    {
      id: 'issho',
      kind: 'character',
      revealedAtEpisode: 630,
      revealedAtChapter: 706,
      name: { it: 'Issho', en: 'Issho' },
      summary: {
        it: 'Un ammiraglio della Marina cieco che gioca a dadi in una bisca e lascia decidere a un lancio se intervenire o no.',
        en: 'A blind Marine admiral who plays dice in a gambling den and lets a throw decide whether he steps in or not.',
      },
      visual: { art: 'issho', tint: 'violet' },
    },
    {
      id: 'bartolomeo',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 705,
      name: { it: 'Bartolomeo', en: 'Bartolomeo' },
      summary: {
        it: 'Un pirata con la cresta verde e i modi da teppista, che si iscrive a un torneo nel colosseo di Dressrosa e getta il pubblico nel panico solo salendo sul ring.',
        en: 'A green-crested pirate with a thug’s manners who enters a tournament in the colosseum of Dressrosa and sends the crowd into a panic just by stepping into the ring.',
      },
      visual: { art: 'bartolomeo', tint: 'acid' },
    },
    {
      id: 'riku-doldo-iii',
      kind: 'character',
      revealedAtEpisode: 662,
      revealedAtChapter: 730,
      name: { it: 'Riku Doldo III', en: 'Riku Doldo III' },
      summary: {
        it: 'Il vecchio re di Dressrosa, cacciato dal trono dieci anni fa, che ora gira per il colosseo con la barba lunga e un altro nome.',
        en: 'The old king of Dressrosa, driven from his throne ten years ago, who now walks the colosseum long-bearded and under another name.',
      },
      visual: { art: 'riku-doldo-iii', tint: 'ivory' },
    },
    {
      id: 'trebol',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Trebol', en: 'Trebol' },
      summary: {
        it: 'Un uomo enorme e appiccicoso che sghignazza alle spalle del re di Dressrosa e lascia muco ovunque si sieda.',
        en: 'An enormous sticky man who sniggers at the king of Dressrosa’s shoulder and leaves mucus wherever he sits down.',
      },
      visual: { art: 'trebol', tint: 'acid' },
    },
    {
      id: 'cavendish',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Cavendish', en: 'Cavendish' },
      summary: {
        it: 'Un capitano bellissimo e vanitoso che arriva al colosseo con la spada in una mano e la criniera del suo cavallo bianco nell’altra.',
        en: 'A beautiful, vain captain who arrives at the colosseum with a sword in one hand and his white horse’s mane in the other.',
      },
      visual: { art: 'cavendish', tint: 'ivory' },
    },
    {
      id: 'sai',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Sai', en: 'Sai' },
      summary: {
        it: 'Il giovane erede della Flotta Happo, che arriva al colosseo con la naginata sulla spalla e il vecchio capo che gli grida dietro.',
        en: 'The young heir of the Happo Navy, who comes to the colosseum with a naginata on his shoulder and the old leader shouting after him.',
      },
      visual: { art: 'sai', tint: 'blue' },
    },
    {
      id: 'don-chinjao',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Don Chinjao', en: 'Don Chinjao' },
      summary: {
        it: 'Un vecchio pirata con il cranio a punta come una trivella, che si iscrive al torneo del colosseo per chiudere un conto rimasto aperto.',
        en: 'An old pirate with a skull pointed like a drill, who enters the colosseum tournament to settle an account left open.',
      },
      visual: { art: 'don-chinjao', tint: 'teal' },
    },
    {
      id: 'ideo',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Ideo', en: 'Ideo' },
      summary: {
        it: 'Un pugile con le braccia lunghe e sottili che chiama cannonate i propri colpi, e nel colosseo non sbaglia un bersaglio.',
        en: 'A boxer with long thin arms who calls his punches cannon shots, and in the colosseum does not miss a target.',
      },
      visual: { art: 'ideo', tint: 'orange' },
    },
    {
      id: 'blue-gilly',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Blue Gilly', en: 'Blue Gilly' },
      summary: {
        it: 'Un combattente dalle gambe lunghissime che nel colosseo usa soltanto i calci, e si muove più in alto della testa degli avversari.',
        en: 'A fighter with enormously long legs who uses nothing but kicks in the colosseum, moving above the heads of his opponents.',
      },
      visual: { art: 'blue-gilly', tint: 'cyan' },
    },
    {
      id: 'elizabello-ii',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Elizabello II', en: 'Elizabello II' },
      summary: {
        it: 'Un re che combatte di persona nel colosseo e passa l’intero incontro a caricare un solo pugno, mentre i suoi sudditi lo proteggono.',
        en: 'A king who fights in the colosseum himself, spending a whole bout charging a single punch while his subjects keep everyone off him.',
      },
      visual: { art: 'elizabello-ii', tint: 'yellow' },
    },
    {
      id: 'hajrudin',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Hajrudin', en: 'Hajrudin' },
      summary: {
        it: 'Un gigante mercenario alto quanto la tribuna, che si presenta al colosseo con l’elmo cornuto e guarda gli avversari dall’alto.',
        en: 'A giant mercenary as tall as the stands, who comes to the colosseum in a horned helmet and looks down on every opponent.',
      },
      visual: { art: 'hajrudin', tint: 'sand' },
    },
    {
      id: 'bastille',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Bastille', en: 'Bastille' },
      summary: {
        it: 'Un viceammiraglio con una maschera da squalo e una spada più alta di lui, che guarda il colosseo da fuori aspettando un ordine.',
        en: 'A vice admiral in a shark mask carrying a sword taller than he is, watching the colosseum from outside and waiting for an order.',
      },
      visual: { art: 'bastille', tint: 'teal' },
    },
    {
      id: 'maynard',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Maynard', en: 'Maynard' },
      summary: {
        it: 'Un viceammiraglio che si iscrive al torneo del colosseo sotto falso nome, per vedere da vicino chi combatte davvero a Dressrosa.',
        en: 'A vice admiral who enters the colosseum tournament under a false name, to get a close look at who is really fighting in Dressrosa.',
      },
      visual: { art: 'maynard', tint: 'ivory' },
    },
    {
      id: 'hack',
      kind: 'character',
      revealedAtEpisode: 632,
      revealedAtChapter: 708,
      name: { it: 'Hack', en: 'Hack' },
      summary: {
        it: 'Un uomo-pesce che nel colosseo combatte con il karate degli uomini-pesce, colpendo l’acqua nell’aria invece del corpo dell’avversario.',
        en: 'A fish-man who fights in the colosseum with fish-man karate, striking the water in the air instead of his opponent’s body.',
      },
      visual: { art: 'hack', tint: 'cyan' },
    },
    {
      id: 'viola',
      kind: 'character',
      revealedAtEpisode: 640,
      revealedAtChapter: 712,
      name: { it: 'Viola', en: 'Viola' },
      summary: {
        it: 'Una ballerina con il ventaglio che lavora per il re di Dressrosa e vede quello che succede in ogni angolo dell’isola senza muoversi.',
        en: 'A fan dancer in the service of the king of Dressrosa who sees what happens in every corner of the island without leaving the room.',
      },
      visual: { art: 'viola', tint: 'violet' },
    },
    {
      id: 'sugar',
      kind: 'character',
      revealedAtEpisode: 641,
      revealedAtChapter: 725,
      name: { it: 'Sugar', en: 'Sugar' },
      summary: {
        it: 'Una bambina che mangia acini d’uva seduta in un salotto del palazzo, e che con un tocco trasforma chiunque in un giocattolo.',
        en: 'A small girl eating grapes in a sitting room of the palace, who turns anyone she touches into a toy.',
      },
      visual: { art: 'sugar', tint: 'lavender' },
    },
    {
      id: 'diamante',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 709,
      name: { it: 'Diamante', en: 'Diamante' },
      summary: {
        it: 'L’organizzatore del torneo del colosseo, un uomo in piume e cappello che rende molle il proprio corpo e la spada un drappo.',
        en: 'The man who runs the colosseum tournament, feathered and hatted, who makes his body go limp and his sword a flapping banner.',
      },
      visual: { art: 'diamante', tint: 'red' },
    },
    {
      id: 'pica',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 709,
      name: { it: 'Pica', en: 'Pica' },
      summary: {
        it: 'Un gigante muscoloso con una voce acuta che stona con il suo corpo, capace di fondersi nella pietra e muovere l’isola come un braccio.',
        en: 'A huge muscled man with a high voice that does not suit him, able to melt into stone and move the island like his own arm.',
      },
      visual: { art: 'pica', tint: 'sand' },
    },
    {
      id: 'senor-pink',
      kind: 'character',
      revealedAtEpisode: 635,
      revealedAtChapter: 711,
      name: { it: 'Señor Pink', en: 'Señor Pink' },
      summary: {
        it: 'Un gangster in giacca e cravatta che gira con la cuffietta da neonato e il ciuccio, e nuota nella pietra come fosse acqua.',
        en: 'A gangster in a suit and tie who goes about in a baby bonnet with a dummy in his mouth, and swims through stone as if it were water.',
      },
      visual: { art: 'senor-pink', tint: 'flamingo' },
    },
    {
      id: 'dellinger',
      kind: 'character',
      revealedAtEpisode: 635,
      revealedAtChapter: 711,
      name: { it: 'Dellinger', en: 'Dellinger' },
      summary: {
        it: 'Un ragazzino con i tacchi alti e i denti aguzzi, che parla come un bambino capriccioso e combatte come una bestia.',
        en: 'A boy in high heels with sharp teeth, who talks like a spoilt child and fights like an animal.',
      },
      visual: { art: 'dellinger', tint: 'magenta' },
    },
    {
      id: 'lao-g',
      kind: 'character',
      revealedAtEpisode: 635,
      revealedAtChapter: 711,
      name: { it: 'Lao G', en: 'Lao G' },
      summary: {
        it: 'Un vecchio curvo che sembra sul punto di cadere a pezzi e che si raddrizza di colpo quando qualcuno mette in dubbio le arti marziali.',
        en: 'A bent old man who looks about to fall apart, and who snaps upright the moment anybody doubts the martial arts.',
      },
      visual: { art: 'lao-g', tint: 'green' },
    },
    {
      id: 'machvise',
      kind: 'character',
      revealedAtEpisode: 635,
      revealedAtChapter: 711,
      name: { it: 'Machvise', en: 'Machvise' },
      summary: {
        it: 'Un uomo enorme e tondo che salta in aria e ricade sugli avversari facendo pesare il proprio corpo quanto una casa.',
        en: 'A huge round man who jumps into the air and drops onto his opponents with his body weighing as much as a house.',
      },
      visual: { art: 'machvise', tint: 'ocher' },
    },
    {
      id: 'jora',
      kind: 'character',
      revealedAtEpisode: 635,
      revealedAtChapter: 711,
      name: { it: 'Jora', en: 'Jora' },
      summary: {
        it: 'Una donna con il pennello che trasforma navi e persone in sculture sghembe e chiama arte moderna quello che ne resta.',
        en: 'A woman with a paintbrush who turns ships and people into lopsided sculptures and calls what is left of them modern art.',
      },
      visual: { art: 'jora', tint: 'violet' },
    },
    {
      id: 'orlumbus',
      kind: 'character',
      revealedAtEpisode: 636,
      revealedAtChapter: 712,
      name: { it: 'Orlumbus', en: 'Orlumbus' },
      summary: {
        it: 'Un esploratore con il mantello da ammiraglio che ha lasciato in rada una flotta di cinquantasei navi per combattere nel colosseo.',
        en: 'An explorer in an admiral’s cloak who has left a fleet of fifty-six ships at anchor in order to fight in the colosseum.',
      },
      visual: { art: 'orlumbus', tint: 'azure' },
    },
    {
      id: 'gladius',
      kind: 'character',
      revealedAtEpisode: 640,
      revealedAtChapter: 716,
      name: { it: 'Gladius', en: 'Gladius' },
      summary: {
        it: 'Un uomo con la maschera e il cappello a punta che fa gonfiare ed esplodere tutto quello che tocca, chiodi della sua giacca compresi.',
        en: 'A masked man in a pointed hat who makes whatever he touches swell up and burst, the studs of his own jacket included.',
      },
      visual: { art: 'gladius', tint: 'wine' },
    },
    {
      id: 'leo',
      kind: 'character',
      revealedAtEpisode: 640,
      revealedAtChapter: 716,
      name: { it: 'Leo', en: 'Leo' },
      summary: {
        it: 'Un ometto alto un palmo con le ali sulla schiena, a capo di una squadra che cuce insieme qualsiasi cosa con ago e filo.',
        en: 'A hand-high little man with wings on his back, leader of a squad that stitches anything to anything with a needle and thread.',
      },
      visual: { art: 'leo', tint: 'green' },
    },
    {
      id: 'kyros',
      kind: 'character',
      revealedAtEpisode: 674,
      revealedAtChapter: 742,
      name: { it: 'Kyros', en: 'Kyros' },
      summary: {
        it: 'Il soldatino di legno con una gamba sola che guida la rivolta contro il re, e che a Dressrosa aveva un nome che nessuno ricorda più.',
        en: 'The one-legged wooden soldier who leads the rising against the king, a man who had a name in Dressrosa that nobody remembers now.',
      },
      visual: { art: 'kyros', tint: 'azure' },
    },
    {
      id: 'mansherry',
      kind: 'character',
      revealedAtEpisode: 675,
      revealedAtChapter: 746,
      name: { it: 'Mansherry', en: 'Mansherry' },
      summary: {
        it: 'La principessa minuscola del popolo del bosco, chiusa in una gabbia perché le sue lacrime rimettono in sesto qualunque ferita.',
        en: 'The tiny princess of the forest people, shut in a cage because her tears put any wound back the way it was.',
      },
      visual: { art: 'mansherry', tint: 'pink' },
    },
    {
      id: 'kanjuro',
      kind: 'character',
      revealedAtEpisode: 676,
      revealedAtChapter: 747,
      name: { it: 'Kanjuro', en: 'Kanjuro' },
      summary: {
        it: 'Un samurai con il pennello al posto della spada, che disegna male qualunque cosa e poi la fa uscire dalla carta.',
        en: 'A samurai who carries a brush instead of a sword, draws everything badly and then brings it up off the paper.',
      },
      visual: { art: 'kanjuro', tint: 'ocher' },
    },
    {
      id: 'donquixote-rosinante',
      kind: 'character',
      revealedAtEpisode: 704,
      revealedAtChapter: 768,
      name: { it: 'Donquijote Rosinante', en: 'Donquixote Rosinante' },
      summary: {
        it: 'Un uomo altissimo travestito da clown che non parla mai, e che sotto il costume nasconde il cappotto di un ufficiale della Marina.',
        en: 'A very tall man dressed as a clown who never speaks, and who hides a Marine officer’s coat underneath the costume.',
      },
      visual: { art: 'donquixote-rosinante', tint: 'red' },
    },
    {
      id: 'kaido',
      kind: 'character',
      revealedAtEpisode: 739,
      revealedAtChapter: 795,
      name: { it: 'Kaido', en: 'Kaido' },
      summary: {
        it: 'Un Imperatore che cade dal cielo sopra una base pirata e si rialza intatto, perché nessuno al mondo è ancora riuscito a ucciderlo.',
        en: 'An Emperor who falls out of the sky onto a pirate base and gets up unhurt, because nobody in the world has managed to kill him yet.',
      },
      visual: { art: 'kaido', tint: 'wine' },
    },
  ],

  dossiers: {
    'koala': {
      role: {
        it: 'Bambina liberata dalla schiavitù',
        en: 'Child freed from slavery',
      },
      log: {
        it: 'Fisher Tiger la trova incatenata a Mary Geoise e la porta via insieme agli altri schiavi. Sulla nave dei Pirati del Sole ringrazia tutti e sorride anche quando ha ancora paura, e agli uomini-pesce che la guardano non sfugge il marchio sulla sua schiena. La ciurma fa rotta verso il suo villaggio nel North Blue per riportarla a casa.',
        en: 'Fisher Tiger finds her chained at Mary Geoise and carries her out along with the other slaves. Aboard the Sun Pirates’ ship she thanks everyone and smiles even while she is still frightened, and the fish-men watching her cannot miss the brand on her back. The crew sets a course for her village in the North Blue to take her home.',
      },
      affiliation: [
        {
          episode: 541,
          value: {
            it: 'Schiava liberata, riportata a casa dai Pirati del Sole',
            en: 'Freed slave, taken home by the Sun Pirates',
          },
        },
        {
          episode: 654,
          value: {
            it: 'Armata Rivoluzionaria, ufficiale',
            en: 'Revolutionary Army, officer',
          },
        },
      ],
      origin: [
        {
          episode: 541,
          value: {
            it: 'Isola di Foolshout, North Blue',
            en: 'Foolshout Island, North Blue',
          },
        },
      ],
    },
    // No `devilFruit` line: the story shows him dress people in whatever he
    // likes long before it ever names the fruit that lets him, and the field
    // holds fruit ids now. Naming one here would print a name the viewer has
    // not been given; the line comes back when the story gives it.
    'kinemon': {
      role: { it: 'Samurai di Wano', en: 'Samurai of Wano' },
      log: {
        it: 'Ha la testa e il busto separati dalle gambe, e le insegue per l’isola come se fosse una seccatura passeggera. Taglia con la spada anche le fiamme, e non tollera che qualcuno tocchi la sua katana. Dice di essere arrivato dal mare con un bambino e di non ripartire senza di lui, ma di sé e del suo paese non racconta quasi nulla.',
        en: 'His head and chest are parted from his legs, and he chases them across the island as though it were a passing inconvenience. He cuts flame itself with his sword and lets nobody touch his katana. He says he came over the sea with a child and will not leave without him, but about himself and his country he says almost nothing.',
      },
      affiliation: [
        {
          episode: 579,
          value: {
            it: 'Samurai di Wano, in cerca di suo figlio',
            en: 'Samurai of Wano, in search of his son',
          },
        },
        {
          episode: 890,
          value: { it: 'Nove Foderi Rossi', en: 'Nine Red Scabbards' },
        },
      ],
      origin: [{ episode: 579, value: WANO }],
      epithet: [
        { episode: 579, value: { it: 'Volpe di Fuoco', en: 'Foxfire' } },
      ],
    },
    'brownbeard': {
      role: {
        it: 'Capo delle guardie di Punk Hazard',
        en: 'Punk Hazard guard captain',
      },
      log: {
        it: 'Comanda i centauri che sorvegliano l’isola e si presenta ridendo, sicuro che nessuno arrivi fin lì per caso. Racconta di quando aveva una ciurma vera e un nome che contava qualcosa, prima di perdere le gambe. Adesso lavora per l’uomo che tiene il laboratorio e ripete le sue parole come se fossero sue.',
        en: 'He commands the centaurs who guard the island and introduces himself laughing, certain that nobody reaches this place by accident. He talks about the days when he had a real crew and a name that counted for something, before he lost his legs. Now he works for the man who keeps the laboratory and repeats his words as though they were his own.',
      },
      affiliation: [
        {
          episode: 580,
          value: {
            it: 'Punk Hazard, capo delle guardie del laboratorio',
            en: 'Punk Hazard, captain of the laboratory guard',
          },
        },
        {
          episode: 625,
          value: {
            it: 'In arresto per mano della Marina',
            en: 'Under Marine arrest',
          },
        },
      ],
    },
    'caesar-clown': {
      role: { it: 'Scienziato di Punk Hazard', en: 'Scientist of Punk Hazard' },
      log: {
        it: 'Tiene decine di bambini rapiti in una stanza piena di dolci e li chiama i suoi ospiti, mentre nell’aria dell’isola cresce qualcosa che non dovrebbe esserci. Il suo corpo diventa gas quando vuole, quindi colpirlo non serve a niente, e lui lo sa benissimo. Si vanta di lavorare per sé, ma prende ordini da qualcuno che non nomina mai per intero.',
        en: 'He keeps dozens of stolen children in a room full of sweets and calls them his guests, while something that should not exist grows in the island’s air. His body turns to gas whenever he likes, so hitting him achieves nothing, and he knows it perfectly well. He boasts of working for himself, yet takes orders from someone whose name he never says in full.',
      },
      affiliation: [
        {
          episode: 584,
          value: {
            it: 'Punk Hazard, padrone del laboratorio; al servizio di Do Flamingo',
            en: 'Punk Hazard, master of the laboratory; Doflamingo’s employee',
          },
        },
        { episode: 625, value: { it: 'Ostaggio di Law', en: 'Law’s hostage' } },
        {
          episode: 795,
          value: { it: 'Prigioniero di Big Mom', en: 'Big Mom’s prisoner' },
        },
      ],
      epithet: [{ episode: 584, value: { it: 'Maestro', en: 'Master' } }],
      devilFruit: [{ episode: 584, value: ['gas-gas-fruit'] }],
      bounty: [{ episode: 584, value: 300_000_000 }],
    },
    'monet': {
      role: {
        it: 'Segretaria del laboratorio',
        en: 'Secretary of the laboratory',
      },
      log: {
        it: 'Siede accanto al padrone del laboratorio, prende appunti e risponde al telefono con la stessa voce gentile con cui minaccia. Il suo corpo è neve: le lame la attraversano e lei si ricompone, e con la neve riempie i corridoi per fermare chi corre. Sorride sempre, anche quando dice cose che non lasciano una via d’uscita.',
        en: 'She sits beside the master of the laboratory, takes notes and answers the phone in the same gentle voice she uses to threaten. Her body is snow: blades pass through her and she puts herself back together, and she fills the corridors with drifts to stop anyone running. She is always smiling, even while saying things that leave no way out.',
      },
      status: [
        { episode: 586, value: 'alive' },
        { episode: 620, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 586,
          value: {
            it: 'Pirati di Donquijote, segretaria di Caesar',
            en: 'Donquixote Pirates, Caesar’s secretary',
          },
        },
      ],
      devilFruit: [{ episode: 586, value: ['snow-snow-fruit'] }],
    },
    'vergo': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'Comanda la base G-5 e i suoi uomini lo temono più del nemico. Ha sempre qualcosa attaccato in faccia, un chicco di riso o una foglia di insalata, e nessuno osa dirglielo. Arriva a Punk Hazard con una calma che non somiglia a quella di un ispettore, e la prima cosa che fa è mettersi fra i prigionieri e chi vorrebbe liberarli.',
        en: 'He commands the G-5 base and his own men fear him more than any enemy. There is always something stuck to his face, a grain of rice or a leaf of salad, and nobody dares tell him. He reaches Punk Hazard with a calm that has nothing of an inspector about it, and the first thing he does is put himself between the prisoners and anyone who would free them.',
      },
      status: [
        { episode: 589, value: 'alive' },
        { episode: 620, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 589,
          value: {
            it: 'Marina, viceammiraglio della G-5, in segreto uomo di Do Flamingo',
            en: 'Marines, vice admiral of G-5, secretly Doflamingo’s man',
          },
        },
        { episode: 613, value: { it: 'Smascherato', en: 'Exposed' } },
      ],
      epithet: [
        { episode: 589, value: { it: 'Bambù Demoniaco', en: 'Demon Bamboo' } },
      ],
    },
    'momonosuke': {
      role: { it: 'Bambino di Wano', en: 'Child from Wano' },
      log: {
        it: 'Lo trovano nel laboratorio, fra bambini giganti tenuti buoni con i dolci, e lui divide il cibo con chi ha più fame. Un frutto artificiale lo ha trasformato in un dragoncello rosa e non sa come tornare indietro. Dice di chiamarsi Momonosuke e di essere il figlio del samurai che gira l’isola cercandolo, e non aggiunge altro.',
        en: 'They find him in the laboratory, among giant children kept quiet with sweets, and he shares his food with whoever is hungriest. An artificial fruit has turned him into a small pink dragon and he has no idea how to change back. He says his name is Momonosuke and that he is the son of the samurai searching the island for him, and will say nothing more.',
      },
      affiliation: [
        {
          episode: 590,
          value: {
            it: 'Figlio di Kin’emon, a sentir lui',
            en: 'Kin’emon’s son, so he says',
          },
        },
        {
          episode: 726,
          value: {
            it: 'Kozuki Momonosuke, erede di Wano',
            en: 'Kozuki Momonosuke, heir of Wano',
          },
        },
      ],
      origin: [{ episode: 590, value: WANO }],
      devilFruit: [{ episode: 590, value: ['artificial-dragon-dragon-fruit'] }],
    },
    'baby-5': {
      role: {
        it: 'Ufficiale dei Pirati di Donquijote',
        en: 'Donquixote Pirates officer',
      },
      log: {
        it: 'Chiunque le dica di avere bisogno di lei ottiene qualsiasi cosa, e lei si commuove ogni volta come fosse la prima. Il suo corpo diventa fucili, lame e cannoni a seconda di quello che serve, e li usa senza esitare un istante. Viaggia insieme a un compagno chiassoso per conto della famiglia a cui appartiene, e litiga con lui per tutto il tragitto.',
        en: 'Anyone who tells her they need her gets whatever they want, and she is moved by it every time as though it were the first. Her body becomes rifles, blades and cannons depending on what is wanted, and she uses them without a moment’s hesitation. She travels with a loud companion on the business of the family she belongs to, arguing with him the whole way.',
      },
      affiliation: [
        {
          episode: 591,
          value: {
            it: 'Pirati di Donquijote, ufficiale',
            en: 'Donquixote Pirates, officer',
          },
        },
        {
          episode: 746,
          value: {
            it: 'Flotta Happo, fidanzata di Sai',
            en: 'Happo Navy, Sai’s fiancée',
          },
        },
      ],
      devilFruit: [{ episode: 591, value: ['arms-arms-fruit'] }],
    },
    'buffalo': {
      role: {
        it: 'Ufficiale dei Pirati di Donquijote',
        en: 'Donquixote Pirates officer',
      },
      log: {
        it: 'Ripete quello che dicono gli altri e aggiunge sempre la stessa risata, e la ragazza che viaggia con lui lo tratta come un fratello insopportabile. Girando su sé stesso vola e taglia, e in aria è molto più svelto di quanto sembri a terra. Arriva sull’isola in fiamme per riportare a casa un carico che qualcuno aspetta con impazienza.',
        en: 'He repeats whatever anyone else says and adds the same laugh each time, and the girl travelling with him treats him like an unbearable brother. Spinning on his own axis he flies and he cuts, and in the air he is far quicker than he looks on the ground. He comes to the burning island to bring home a cargo that somebody is waiting for impatiently.',
      },
      affiliation: [
        {
          episode: 591,
          value: {
            it: 'Pirati di Donquijote, ufficiale',
            en: 'Donquixote Pirates, officer',
          },
        },
      ],
      devilFruit: [{ episode: 591, value: ['spin-spin-fruit'] }],
    },
    'rebecca': {
      role: { it: 'Gladiatrice del colosseo', en: 'Colosseum gladiator' },
      log: {
        it: 'Scende nell’arena con una spada che non usa mai per colpire, e schiva finché l’avversario non cade da solo. Gli spalti la fischiano e le tirano addosso di tutto, e lei continua a combattere lo stesso. Del premio in palio non parla, ma il modo in cui guarda il tabellone dice che non è lì per la gloria.',
        en: 'She steps into the arena with a sword she never uses to strike, dodging until her opponent goes down on his own. The stands jeer her and throw whatever comes to hand, and she keeps fighting all the same. She says nothing about the prize, but the way she looks at the board says she is not there for glory.',
      },
      affiliation: [
        {
          episode: 630,
          value: {
            it: 'Gladiatrice del colosseo di Dressrosa',
            en: 'Colosseum gladiator of Dressrosa',
          },
        },
        {
          episode: 741,
          value: {
            it: 'Famiglia reale Riku, principessa',
            en: 'Riku royal family, princess',
          },
        },
      ],
      origin: [{ episode: 630, value: DRESSROSA }],
      epithet: [
        {
          episode: 630,
          value: {
            it: 'La Donna Invitta; La Principessa Fantasma',
            en: 'the Undefeated Woman; the Phantom Princess',
          },
        },
      ],
    },
    'issho': {
      role: { it: 'Ammiraglio della Marina', en: 'Marine admiral' },
      log: {
        it: 'Si presenta come il nuovo ammiraglio con un bastone da passeggio che è anche una spada, e gira senza scorta. Non ci vede, e dice che è meglio così, perché al mondo ci sono cose che preferisce non guardare. Con un gesto fa cadere a terra tutto quello che gli sta intorno, come se il peso delle cose obbedisse a lui.',
        en: 'He introduces himself as the new admiral with a walking stick that is also a sword, and goes about without an escort. He cannot see, and says he prefers it, because there are things in the world he would rather not look at. With one gesture he brings everything around him down to the ground, as though the weight of things answered to him.',
      },
      affiliation: [
        {
          episode: 630,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
      ],
      epithet: [{ episode: 630, value: { it: 'Fujitora', en: 'Fujitora' } }],
      devilFruit: [{ episode: 630, value: ['press-press-fruit'] }],
    },
    'bartolomeo': {
      role: { it: 'Capitano pirata', en: 'Pirate captain' },
      log: {
        it: 'Il pubblico lo fischia e lui risponde con la lingua di fuori. Nel blocco B del torneo nessun colpo lo raggiunge: qualcosa di invisibile li ferma tutti a un palmo da lui. Combatte per il premio del colosseo come tutti gli altri, ma quello che vuole davvero è un’altra cosa, e la tiene per sé.',
        en: 'The crowd boos him and he answers with his tongue out. In block B of the tournament no blow reaches him: something invisible stops every one a hand’s breadth away. He fights for the colosseum’s prize like everyone else, but what he really wants is something else, and he keeps it to himself.',
      },
      affiliation: [
        {
          episode: 632,
          value: { it: 'Barto Club, capitano', en: 'Barto Club, captain' },
        },
        {
          episode: 746,
          value: {
            it: 'Grande Flotta di Cappello di Paglia; Barto Club',
            en: 'Straw Hat Grand Fleet; Barto Club',
          },
        },
      ],
      origin: [
        {
          episode: 726,
          value: { it: 'Loguetown, East Blue', en: 'Loguetown, East Blue' },
        },
      ],
      epithet: [
        { episode: 632, value: { it: 'Il Cannibale', en: 'the Cannibal' } },
      ],
      devilFruit: [{ episode: 660, value: ['barrier-barrier-fruit'] }],
      bounty: [{ episode: 632, value: 150_000_000 }],
    },
    'riku-doldo-iii': {
      role: { it: 'Ex re di Dressrosa', en: 'Former king of Dressrosa' },
      log: {
        it: 'Regnava su un’isola tranquilla finché una notte il suo stesso esercito ha attaccato la sua gente e lui è stato costretto a lasciare il trono. Da allora in città nessuno pronuncia il suo nome senza sputare. Si iscrive al torneo del colosseo come un gladiatore qualunque, con la barba lunga e il nome di Ricky, e sugli spalti non lo riconosce nessuno.',
        en: 'He ruled a quiet island until the night his own army turned on his own people and he was made to give up the throne. Since then nobody in the city says his name without spitting. He enters the colosseum tournament like any other gladiator, long-bearded and calling himself Ricky, and nobody in the stands knows him.',
      },
      affiliation: [
        {
          episode: 662,
          value: {
            it: 'Ex re di Dressrosa, deposto',
            en: 'Former king of Dressrosa, deposed',
          },
        },
        {
          episode: 741,
          value: {
            it: 'Re di Dressrosa, restaurato',
            en: 'King of Dressrosa, restored',
          },
        },
      ],
      origin: [{ episode: 662, value: DRESSROSA }],
      epithet: [{ episode: 662, value: { it: 'Ricky', en: 'Ricky' } }],
    },
    'trebol': {
      role: DONQUIXOTE_ELITE_ROLE,
      log: {
        it: 'Non si stacca mai dal fianco del suo capo e lo asseconda in tutto, con una risata che somiglia a un raschio. Il suo corpo produce un muco che invischia chiunque lo tocchi e che indurisce fino a diventare una gabbia. Agli altri ufficiali della famiglia parla come un vecchio zio, e non è chiaro quanto di quella bonarietà sia recitato.',
        en: 'He never leaves his boss’s side and agrees with everything he says, laughing a laugh that sounds like a scrape. His body makes a mucus that mires whoever touches it and hardens into a cage. He speaks to the family’s other officers like an old uncle, and how much of that good humour is an act is not clear.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Pirati di Donquijote, ufficiale supremo',
            en: 'Donquixote Pirates, elite officer',
          },
        },
      ],
      devilFruit: [{ episode: 632, value: ['stick-stick-fruit'] }],
    },
    'cavendish': {
      role: {
        it: 'Capitano dei Pirati Beautiful',
        en: 'Captain of the Beautiful Pirates',
      },
      log: {
        it: 'Era il principe di un regno che lo ha cacciato perché tutte le ragazze lo seguivano, e da allora lo racconta a chiunque, anche a chi non ha chiesto. Si presenta a Dressrosa con il suo cavallo e un’eleganza che il colosseo non aveva mai visto. Odia i pirati della nuova generazione più di ogni altra cosa, e ne fa l’elenco ad alta voce.',
        en: 'He was the prince of a kingdom that threw him out because every girl in it followed him about, and he has told everyone since, asked or not. He arrives in Dressrosa with his horse and an elegance the colosseum has never seen. He hates the pirates of the new generation more than anything else, and lists them aloud.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Pirati Beautiful, capitano',
            en: 'Beautiful Pirates, captain',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        {
          episode: 632,
          value: { it: 'Regno di Bourgeois', en: 'Bourgeois Kingdom' },
        },
      ],
      epithet: [
        {
          episode: 632,
          value: {
            it: 'Il Principe Pirata; Cavallo Bianco',
            en: 'the Pirate Prince; White Horse',
          },
        },
      ],
      bounty: [{ episode: 632, value: 280_000_000 }],
    },
    'sai': {
      role: { it: 'Erede della Flotta Happo', en: 'Heir of the Happo Navy' },
      log: {
        it: 'Porta la naginata di famiglia e il nome di una flotta che comanda ottomila uomini. Parla poco e si inchina prima di combattere, anche quando l’avversario non se lo merita. È stato scelto come tredicesimo capo mentre il dodicesimo è ancora vivo e in forma, e la cosa lo mette più a disagio di qualunque incontro nell’arena.',
        en: 'He carries the family naginata and the name of a navy that commands eight thousand men. He says little and bows before a fight, even when his opponent has not earned it. He has been made the thirteenth leader while the twelfth is still alive and in good shape, which unsettles him more than any bout in the arena.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Flotta Happo, tredicesimo capo',
            en: 'Happo Navy, thirteenth leader',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        { episode: 632, value: { it: 'Paese di Kano', en: 'Kano Country' } },
      ],
    },
    'don-chinjao': {
      role: {
        it: 'Ex capo della Flotta Happo',
        en: 'Former leader of the Happo Navy',
      },
      log: {
        it: 'Ha comandato ottomila uomini e in mare aperto apriva il ghiaccio con la testa. Adesso quella punta non c’è più, e lui non racconta a nessuno come l’abbia persa. Ha ceduto il comando al nipote e dice di essersi ritirato, ma nel colosseo scende in campo come se il conto fosse suo.',
        en: 'He led eight thousand men and used to split the ice at sea with his head. That point is gone now, and he tells nobody how he lost it. He has handed command to his grandson and says he is retired, but he walks into the colosseum as if the score were his own.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Flotta Happo, dodicesimo capo, in pensione',
            en: 'Happo Navy, twelfth leader, retired',
          },
        },
      ],
      origin: [
        { episode: 632, value: { it: 'Paese di Kano', en: 'Kano Country' } },
      ],
      epithet: [
        { episode: 632, value: { it: 'La Trivella', en: 'the Drill' } },
      ],
      bounty: [{ episode: 632, value: 500_000_000 }],
    },
    'ideo': {
      role: { it: 'Pugile del colosseo', en: 'Colosseum boxer' },
      log: {
        it: 'Viene da una palestra che ha fatto delle arti marziali un affare di famiglia, e ha imparato a caricare i pugni come si carica un pezzo d’artiglieria. Nel colosseo parla poco e osserva gli avversari uno per uno, calcolando la distanza. Quando colpisce, quello che aveva davanti non è più al suo posto.',
        en: 'He comes from a gym that made a family business of the martial arts, and has learned to load a punch the way a gun is loaded. In the colosseum he says little and looks his opponents over one by one, working out the distance. When he lands a blow, whatever stood in front of him is no longer where it was.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Alleanza di arti marziali della palestra XXX',
            en: 'XXX Gym Martial Arts Alliance',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      epithet: [
        {
          episode: 632,
          value: { it: 'Cannone Distruttore', en: 'Destruction Cannon' },
        },
      ],
    },
    'blue-gilly': {
      role: {
        it: 'Combattente della Tribù dalle Gambe Lunghe',
        en: 'Longleg Tribe fighter',
      },
      log: {
        it: 'Appartiene a un popolo che ha gambe lunghe il doppio delle nostre, e ha fatto dei calci una disciplina con un nome preciso. Nell’arena non usa mai le mani e si sposta a scatti, comparendo dove nessuno lo aspetta. Del premio in palio dice soltanto che gli serve, e non aggiunge altro.',
        en: 'He belongs to a people whose legs are twice the length of ours, and he has made kicking a discipline with a name of its own. In the arena he never uses his hands and moves in bursts, appearing where nobody expects him. Of the prize he says only that he needs it, and nothing more.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Combattente della Tribù dalle Gambe Lunghe',
            en: 'Longleg Tribe fighter',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        {
          episode: 632,
          value: {
            it: 'Terre della Tribù dalle Gambe Lunghe',
            en: 'Longleg Tribe lands',
          },
        },
      ],
    },
    'elizabello-ii': {
      role: { it: 'Re di Prodence', en: 'King of Prodence' },
      log: {
        it: 'Regna su Prodence e scende nell’arena come un gladiatore qualunque, con la corona in testa. Il suo unico colpo richiede un’ora di preparazione e i suoi uomini gli fanno da scudo finché non è pronto. Quando finalmente parte, quel pugno butta giù un muro, e il pubblico del colosseo lo sa e conta i minuti.',
        en: 'He rules Prodence and steps into the arena like any other gladiator, crown and all. His one punch takes an hour to prepare and his men hold the field until it is ready. When it finally comes it knocks a wall down, and the colosseum crowd knows it and counts the minutes.',
      },
      affiliation: [
        {
          episode: 632,
          value: { it: 'Re di Prodence', en: 'King of Prodence' },
        },
      ],
      origin: [
        {
          episode: 632,
          value: { it: 'Regno di Prodence', en: 'Prodence Kingdom' },
        },
      ],
      epithet: [
        {
          episode: 632,
          value: { it: 'Il Re Combattente', en: 'the Fighting King' },
        },
      ],
    },
    'hajrudin': {
      role: { it: 'Mercenario gigante', en: 'Giant mercenary' },
      log: {
        it: 'Viene dall’isola dei giganti e si guadagna da vivere combattendo per chi paga, cosa che al suo paese non è motivo di orgoglio. Nel colosseo la sua ascia arriva dove gli altri non arrivano nemmeno saltando. Dice di volere il premio per una ragione che riguarda la sua gente, e non la spiega a nessuno.',
        en: 'He comes from the island of the giants and earns his living fighting for whoever pays, which back home is nothing to be proud of. In the colosseum his axe reaches where the others cannot get even by jumping. He says he wants the prize for a reason that concerns his own people, and explains it to nobody.',
      },
      affiliation: [
        {
          episode: 632,
          value: { it: 'Gladiatore del colosseo', en: 'Colosseum gladiator' },
        },
        {
          episode: 746,
          value: {
            it: 'Nuovi Pirati Guerrieri Giganti, capitano; Grande Flotta di Cappello di Paglia',
            en: 'New Giant Warrior Pirates, captain; Straw Hat Grand Fleet',
          },
        },
      ],
      origin: [{ episode: 632, value: { it: 'Elbaf', en: 'Elbaf' } }],
    },
    'bastille': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'Arriva a Dressrosa al seguito del nuovo ammiraglio e passa il tempo a ricordargli che la Marina ha delle regole. Porta una maschera che gli copre tutta la testa e una spada enorme che non sguaina quasi mai. Sull’isola non può fare nulla senza il permesso del re, e la cosa lo fa infuriare.',
        en: 'He arrives in Dressrosa in the new admiral’s train and spends his time reminding him that the Marines have rules. He wears a mask that covers his whole head and an enormous sword he almost never draws. On the island he can do nothing without the king’s leave, and it makes him furious.',
      },
      affiliation: [
        {
          episode: 632,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      epithet: [
        { episode: 632, value: { it: 'Tagliasqualo', en: 'Shark Cutter' } },
      ],
    },
    'maynard': {
      role: {
        it: 'Viceammiraglio sotto copertura',
        en: 'Vice admiral undercover',
      },
      log: {
        it: 'È un istruttore della Marina noto per aver messo in riga generazioni di reclute, e ha la fama di non perdere mai di vista una preda. Si mescola ai gladiatori con un altro nome e studia i favoriti del torneo uno per uno. Quello che vede nell’arena lo preoccupa più di quanto si aspettasse, e non riesce a farlo sapere a nessuno.',
        en: 'He is a Marine instructor known for straightening out generations of recruits, with a name for never losing sight of his quarry. He mixes with the gladiators under another name and studies the tournament favourites one by one. What he sees in the arena worries him more than he expected, and he cannot get word of it to anybody.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Marina, viceammiraglio, sotto copertura nel colosseo',
            en: 'Marines, vice admiral, undercover in the colosseum',
          },
        },
      ],
      epithet: [
        { episode: 632, value: { it: 'Il Cacciatore', en: 'the Pursuer' } },
      ],
    },
    'hack': {
      role: {
        it: 'Maestro di karate degli uomini-pesce',
        en: 'Fish-man karate master',
      },
      log: {
        it: 'Insegna il karate degli uomini-pesce e lo pratica come una disciplina, senza rabbia e senza vantarsi. Nell’arena colpisce l’acqua che c’è nell’aria e il colpo arriva a chi ha davanti senza toccarlo. È sceso nel colosseo per il premio in palio, per conto di persone che non nomina, e fra i gladiatori tiene la testa bassa.',
        en: 'He teaches fish-man karate and practises it as a discipline, without anger and without boasting. In the arena he strikes the water in the air and the blow reaches the man opposite without touching him. He came down into the colosseum for the prize, on behalf of people he does not name, and keeps his head down among the gladiators.',
      },
      affiliation: [
        {
          episode: 632,
          value: {
            it: 'Gladiatore del colosseo; Armata Rivoluzionaria',
            en: 'Colosseum gladiator; Revolutionary Army',
          },
        },
      ],
      origin: [
        {
          episode: 632,
          value: { it: 'Isola degli Uomini-Pesce', en: 'Fish-Man Island' },
        },
      ],
    },
    'viola': {
      role: { it: 'Ballerina e informatrice', en: 'Dancer and informant' },
      log: {
        it: 'Balla per la famiglia che comanda l’isola e riferisce tutto quello che i suoi occhi trovano, dai porti alle stanze chiuse a chiave. Con lo sguardo entra anche nei pensieri di chi ha davanti e ne legge le intenzioni. Obbedisce senza discutere, ma c’è qualcosa nel modo in cui parla del re che non somiglia alla fedeltà.',
        en: 'She dances for the family that runs the island and reports whatever her eyes find, from the harbours to the locked rooms. Her gaze goes into the thoughts of the person in front of her and reads what they mean to do. She obeys without argument, though something in the way she speaks of the king does not sound like loyalty.',
      },
      affiliation: [
        {
          episode: 640,
          value: {
            it: 'Pirati di Donquijote, Violet',
            en: 'Donquixote Pirates, Violet',
          },
        },
        {
          episode: 690,
          value: {
            it: 'Famiglia reale Riku, principessa',
            en: 'Riku royal family, princess',
          },
        },
      ],
      origin: [{ episode: 640, value: DRESSROSA }],
      epithet: [{ episode: 640, value: { it: 'Violet', en: 'Violet' } }],
      devilFruit: [{ episode: 640, value: ['glare-glare-fruit'] }],
    },
    'sugar': {
      role: { it: 'Ufficiale dell’Armata Trebol', en: 'Trebol Army officer' },
      log: {
        it: 'Sta quasi sempre seduta con una ciotola d’uva in mano e parla agli adulti come si parla alla servitù. Chi tocca diventa un giocattolo che obbedisce, e da quel momento nessuno ricorda più chi fosse prima, nemmeno i suoi familiari. La famiglia che comanda l’isola la tratta con un riguardo che non riserva a nessun altro.',
        en: 'She sits almost all day with a bowl of grapes in her hand and speaks to grown men the way one speaks to servants. Whoever she touches becomes an obedient toy, and from that moment nobody remembers who they were before, not even their own family. The family that runs the island treats her with a care they show to nobody else.',
      },
      affiliation: [
        {
          episode: 641,
          value: {
            it: 'Pirati di Donquijote, ufficiale dell’Armata Trebol',
            en: 'Donquixote Pirates, Trebol Army officer',
          },
        },
      ],
      devilFruit: [{ episode: 641, value: ['hobby-hobby-fruit'] }],
    },
    'diamante': {
      role: DONQUIXOTE_ELITE_ROLE,
      log: {
        it: 'Presenta gli incontri dagli spalti e decide chi combatte contro chi, con un gusto per lo spettacolo per cui il pubblico gli perdona tutto. Rende molle qualsiasi cosa tocchi, sé stesso compreso, così i colpi lo attraversano come vento in un lenzuolo. A Dressrosa lo chiamano l’eroe del colosseo, e lui si comporta come se fosse vero.',
        en: 'He announces the bouts from the stands and decides who fights whom, with a taste for spectacle the crowd forgives him everything for. He makes anything he touches go limp, himself included, so blows pass through him like wind through a sheet. In Dressrosa they call him the hero of the colosseum, and he behaves as though it were true.',
      },
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Pirati di Donquijote, ufficiale supremo; eroe del colosseo',
            en: 'Donquixote Pirates, elite officer; colosseum hero',
          },
        },
      ],
      epithet: [
        {
          episode: 633,
          value: { it: 'Eroe del Colosseo', en: 'Hero of the Colosseum' },
        },
      ],
      devilFruit: [{ episode: 633, value: ['ripple-ripple-fruit'] }],
    },
    'pica': {
      role: DONQUIXOTE_ELITE_ROLE,
      log: {
        it: 'Sta in piedi dietro il suo capo senza dire quasi niente, e quando parla la sua voce fa ridere chiunque lo senta la prima volta. Entra nella roccia e ne esce dove vuole, e i muri e le strade di Dressrosa si muovono con lui. Chi ride di quella voce di solito non ha il tempo di scusarsi.',
        en: 'He stands behind his boss saying almost nothing, and when he speaks his voice makes anyone hearing it for the first time laugh. He steps into rock and out of it wherever he likes, and the walls and streets of Dressrosa move with him. Whoever laughs at that voice does not usually get the time to apologise.',
      },
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Pirati di Donquijote, ufficiale supremo',
            en: 'Donquixote Pirates, elite officer',
          },
        },
      ],
      devilFruit: [{ episode: 633, value: ['stone-stone-fruit'] }],
    },
    'senor-pink': {
      role: {
        it: 'Gangster della famiglia Donquijote',
        en: 'Gangster of the Donquixote family',
      },
      log: {
        it: 'Si presenta con il completo scuro, gli occhiali da sole e un bavaglino, e nessuno a Dressrosa osa fargli notare il contrasto. Attraversa il terreno a bracciate, sparisce sotto i ciottoli e riemerge alle spalle di chi lo cercava. Le donne della città lo trovano meraviglioso e glielo gridano dietro, e lui non si scompone mai.',
        en: 'He turns up in a dark suit, sunglasses and a bib, and nobody in Dressrosa dares point out the contrast. He crosses the ground with swimming strokes, vanishes under the cobbles and surfaces behind whoever was looking for him. The women of the city find him wonderful and shout so after him, and he never once loses his composure.',
      },
      affiliation: [{ episode: 635, value: DIAMANTE_ARMY }],
      devilFruit: [{ episode: 635, value: ['swim-swim-fruit'] }],
    },
    'dellinger': {
      role: {
        it: 'Ufficiale dell’Armata Diamante',
        en: 'Diamante Army officer',
      },
      log: {
        it: 'Gira per il colosseo annoiato, si lamenta del caldo e chiede quando tocca a lui. Sotto i capelli biondi ha denti da squalo, e quando si arrabbia il suo corpo cambia e non riesce più a fermarsi. Gli ufficiali della famiglia lo trattano come il cucciolo di casa, e lo tengono al guinzaglio finché possono.',
        en: 'He wanders the colosseum bored, complaining about the heat and asking when his turn comes. Under the blond hair are a shark’s teeth, and when his temper goes his body changes and he cannot stop himself. The family’s officers treat him as the pet of the house and keep him leashed as long as they can.',
      },
      affiliation: [{ episode: 635, value: DIAMANTE_ARMY }],
    },
    'lao-g': {
      role: { it: 'Maestro di arti marziali', en: 'Martial arts master' },
      log: {
        it: 'Cammina piegato in due appoggiandosi a un bastone e si lamenta della schiena a ogni passo. Basta però la parola giusta e la sua postura cambia: colpisce con una velocità che non appartiene alla sua età e chiama tutto questo la sua disciplina. Serve la famiglia che comanda l’isola da così tanto tempo che gli altri ufficiali lo chiamano nonno.',
        en: 'He walks folded in half over a stick and complains about his back at every step. But the right word changes his posture: he strikes with a speed that does not belong to his years and calls the whole business his discipline. He has served the family that runs the island so long that the other officers call him grandfather.',
      },
      affiliation: [{ episode: 635, value: DIAMANTE_ARMY }],
    },
    'machvise': {
      role: {
        it: 'Ufficiale dell’Armata Diamante',
        en: 'Diamante Army officer',
      },
      log: {
        it: 'È largo quanto due uomini e si muove con la lentezza di chi non ha fretta, perché nessuno lo evita quando arriva dall’alto. Aumenta il peso del proprio corpo a piacere e schiaccia chi si trova sotto senza nemmeno colpirlo. Fa parte del gruppo di ufficiali che sorveglia il colosseo, e aspetta il suo turno ridendo delle scommesse del pubblico.',
        en: 'He is as wide as two men and moves like someone in no hurry, because nobody dodges him when he comes down from above. He raises the weight of his own body at will and flattens whatever is underneath without even throwing a punch. He is one of the officers watching over the colosseum, and waits his turn laughing at the crowd’s bets.',
      },
      affiliation: [{ episode: 635, value: DIAMANTE_ARMY }],
      devilFruit: [{ episode: 635, value: ['ton-ton-fruit'] }],
    },
    'jora': {
      role: { it: 'Ufficiale dell’Armata Trebol', en: 'Trebol Army officer' },
      log: {
        it: 'Si muove come una signora a una mostra, con il pennello in mano e un gusto tutto suo per le forme. Quello che tocca si deforma in un groviglio di colori e di angoli, e chi ci finisce dentro non riesce più a muoversi come prima. Sostiene che le sue vittime dovrebbero ringraziarla, perché nessuna di loro era bella quanto adesso.',
        en: 'She moves like a lady at a private view, brush in hand, with a taste in shapes entirely her own. Whatever she touches warps into a tangle of colour and angles, and whoever ends up inside one can no longer move as they did. She holds that her victims ought to thank her, since not one of them was as beautiful before.',
      },
      affiliation: [
        {
          episode: 635,
          value: {
            it: 'Pirati di Donquijote, ufficiale dell’Armata Trebol',
            en: 'Donquixote Pirates, Trebol Army officer',
          },
        },
      ],
      devilFruit: [{ episode: 635, value: ['art-art-fruit'] }],
    },
    'orlumbus': {
      role: {
        it: 'Ammiraglio della Flotta Yonta Maria',
        en: 'Yonta Maria Grand Fleet admiral',
      },
      log: {
        it: 'Comanda una flotta intera e parla di sé come di un navigatore, non di un pirata, elencando le isole che ha toccato. Combatte lanciandosi con tutto il corpo, e il colpo che ne esce somiglia più a un abbordaggio che a una mossa di lotta. Nel torneo si muove come uno che sta valutando qualcuno, più che come uno che vuole vincere.',
        en: 'He commands an entire fleet and speaks of himself as a navigator rather than a pirate, listing the islands he has touched. He fights by throwing his whole body forward, and what comes of it looks more like a boarding than a wrestling move. In the tournament he moves like a man sizing somebody up rather than chasing a prize.',
      },
      affiliation: [
        {
          episode: 636,
          value: {
            it: 'Grande Flotta Yonta Maria, ammiraglio',
            en: 'Yonta Maria Grand Fleet, admiral',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        {
          episode: 636,
          value: { it: 'Regno di Standing', en: 'Standing Kingdom' },
        },
      ],
      bounty: [{ episode: 636, value: 148_000_000 }],
    },
    'gladius': {
      role: { it: 'Ufficiale dell’Armata Pica', en: 'Pica Army officer' },
      log: {
        it: 'Sorveglia il palazzo per conto dell’uomo di pietra e parla poco, salvo quando qualcosa lo irrita: allora la sua testa si gonfia e le parole gli escono come uno scoppio. Fa esplodere sassi, pallottole e pezzi della propria armatura, e li usa come una gragnuola. Non discute mai un ordine e non chiede mai a cosa serva.',
        en: 'He guards the palace for the man of stone and says little, except when something irritates him: then his head swells and the words come out like a burst. He detonates stones, bullets and pieces of his own armour, and uses them as a hail. He never argues with an order and never asks what it is for.',
      },
      affiliation: [
        {
          episode: 640,
          value: {
            it: 'Pirati di Donquijote, ufficiale dell’Armata Pica',
            en: 'Donquixote Pirates, Pica Army officer',
          },
        },
      ],
      devilFruit: [{ episode: 640, value: ['pop-pop-fruit'] }],
    },
    'leo': {
      role: { it: 'Capo del Corpo Tonta', en: 'Leader of the Tonta Corps' },
      log: {
        it: 'Appartiene a un popolo minuscolo che vive nel bosco e di cui quasi nessuno a Dressrosa sospetta l’esistenza. Con ago e filo cuce insieme oggetti, vestiti e persone, e la sua squadra si muove così in fretta che gli umani non la vedono passare. Comanda i suoi come un generale in miniatura, e ha una guerra tutta sua da combattere.',
        en: 'He belongs to a tiny people who live in the wood, whose existence almost nobody in Dressrosa suspects. With a needle and thread he sews together objects, clothes and people, and his squad moves so fast that humans never see it pass. He commands his men like a general in miniature, and has a war of his own to fight.',
      },
      affiliation: [
        {
          episode: 640,
          value: {
            it: 'Regno di Tontatta, capo del Corpo Tonta',
            en: 'Tontatta Kingdom, Tonta Corps leader',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        {
          episode: 640,
          value: { it: 'Green Bit, Dressrosa', en: 'Green Bit, Dressrosa' },
        },
      ],
      devilFruit: [{ episode: 640, value: ['stitch-stitch-fruit'] }],
    },
    'kyros': {
      role: {
        it: 'Soldatino di legno di Dressrosa',
        en: 'Wooden soldier of Dressrosa',
      },
      log: {
        it: 'Per tutti è il Soldatino, un giocattolo di legno con la gamba di ricambio e un tamburo, che si batte contro il re dei giocattoli con una spada sola. Il suo vero nome è Kyros, e a Dressrosa era il campione imbattuto del colosseo e il comandante dell’esercito del re. Nessuno se lo ricorda, e lui combatte lo stesso per una famiglia che non sa più chi sia.',
        en: 'To everyone he is the Thunder Soldier, a wooden toy with a spare leg and a drum who fights the king of the toys with a single sword. His real name is Kyros, and in Dressrosa he was the colosseum’s undefeated champion and the commander of the king’s army. Nobody remembers him, and he fights all the same for a family that no longer knows who he is.',
      },
      affiliation: [
        {
          episode: 674,
          value: {
            it: 'Famiglia reale Riku, ex comandante dell’esercito; un tempo campione imbattuto del colosseo',
            en: 'Riku royal family, former army commander; once the colosseum’s undefeated champion',
          },
        },
      ],
      origin: [{ episode: 674, value: DRESSROSA }],
      epithet: [
        { episode: 674, value: { it: 'Soldatino', en: 'Thunder Soldier' } },
      ],
    },
    'mansherry': {
      role: {
        it: 'Principessa del Regno di Tontatta',
        en: 'Princess of the Tontatta Kingdom',
      },
      log: {
        it: 'È alta quanto una mano e porta una corona, e il suo popolo la adora. Le sue lacrime guariscono le ferite, riparano gli oggetti rotti e rimettono in piedi chi non dovrebbe più alzarsi, e per questo qualcuno l’ha chiusa in una gabbia e la tiene addormentata. I suoi la cercano da tempo senza sapere dove sia.',
        en: 'She is the height of a hand and wears a crown, and her people adore her. Her tears heal wounds, mend broken things and put back on their feet those who should not be getting up, which is why somebody has shut her in a cage and keeps her asleep. Her own people have been looking for her for a long time without knowing where she is.',
      },
      affiliation: [
        {
          episode: 675,
          value: {
            it: 'Regno di Tontatta, principessa',
            en: 'Tontatta Kingdom, princess',
          },
        },
      ],
      origin: [
        {
          episode: 675,
          value: { it: 'Green Bit, Dressrosa', en: 'Green Bit, Dressrosa' },
        },
      ],
      devilFruit: [{ episode: 675, value: ['heal-heal-fruit'] }],
    },
    'kanjuro': {
      role: { it: 'Samurai di Wano', en: 'Samurai of Wano' },
      log: {
        it: 'Compare a Dressrosa insieme al samurai che cerca suo figlio, e si presenta con un pennello grande quanto un remo. Quello che disegna prende vita e si muove, anche se i suoi disegni fanno ridere chiunque li guardi. Parla poco, si commuove facilmente e non racconta quasi nulla del paese da cui viene.',
        en: 'He turns up in Dressrosa with the samurai who is searching for his son, carrying a brush the size of an oar. Whatever he draws comes alive and moves about, though his drawings make anyone who sees them laugh. He says little, is easily moved to tears, and tells almost nothing about the country he comes from.',
      },
      status: [
        { episode: 676, value: 'alive' },
        { episode: 1055, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 676,
          value: {
            it: 'Samurai di Wano, compagno di Kin’emon',
            en: 'Samurai of Wano, Kin’emon’s companion',
          },
        },
        {
          episode: 890,
          value: { it: 'Nove Foderi Rossi', en: 'Nine Red Scabbards' },
        },
        {
          episode: 985,
          value: {
            it: 'Spia di Orochi, smascherato',
            en: 'Orochi’s spy, exposed',
          },
        },
      ],
      origin: [{ episode: 676, value: WANO }],
      epithet: [
        {
          episode: 676,
          value: { it: 'Acquazzone della Sera', en: 'Evening Shower' },
        },
      ],
      // Filed at 985 and not at 676: the drawings come alive long before the
      // story says what the fruit is called, and the field carries fruit ids
      // now, so an entry at 676 would print the name early.
      devilFruit: [{ episode: 985, value: ['brush-brush-fruit'] }],
    },
    'donquixote-rosinante': {
      role: {
        it: 'Corazon dei Pirati di Donquijote',
        en: 'Corazon of the Donquixote Pirates',
      },
      log: {
        it: 'Nella famiglia lo chiamano Corazon e lo credono muto, e lui lascia che lo credano. Inciampa, prende fuoco e rovescia tutto quello che tocca, poi porta via da quella casa un bambino malato senza spiegare perché. Quando resta solo con lui parla, e dice di essere il fratello minore dell’uomo che comanda la famiglia e un ufficiale della Marina.',
        en: 'In the family they call him Corazon and take him for mute, and he lets them. He trips, catches fire and knocks over whatever he touches, then carries a sick child away from that house without saying why. Alone with the boy he speaks, and says he is the younger brother of the man who runs the family, and a Marine officer.',
      },
      status: [{ episode: 704, value: 'deceased' }],
      affiliation: [
        {
          episode: 704,
          value: {
            it: 'Pirati di Donquijote, ufficiale supremo Corazon, in segreto comandante della Marina',
            en: 'Donquixote Pirates, elite officer Corazon, secretly a Marine commander',
          },
        },
      ],
      origin: [
        { episode: 704, value: { it: 'Mary Geoise', en: 'Mary Geoise' } },
      ],
      epithet: [{ episode: 704, value: { it: 'Corazon', en: 'Corazon' } }],
      devilFruit: [{ episode: 704, value: ['calm-calm-fruit'] }],
    },
    'kaido': {
      chronicle: dressrosaChronicles.kaido,
      role: {
        it: 'Imperatore del Nuovo Mondo',
        en: 'Emperor of the New World',
      },
      log: {
        it: 'Arriva dall’alto senza nave e senza avvertimento, e quello che resta della base che ha centrato non è più una base. È uno dei quattro Imperatori che si dividono il Nuovo Mondo, e ha una ciurma che prende il nome dalle bestie. Dicono che si sia buttato dal cielo decine di volte senza morire mai, e che sia il suo modo di passare il tempo.',
        en: 'He comes down from above with no ship and no warning, and what is left of the base he lands on is no longer a base. He is one of the four Emperors who divide the New World between them, and his crew takes its name from beasts. They say he has thrown himself out of the sky dozens of times without once dying, and that this is how he passes the time.',
      },
      status: [{ episode: 739, value: 'alive' }],
      affiliation: [
        {
          episode: 739,
          value: {
            it: 'Pirati delle Cento Bestie, governatore generale; Imperatore',
            en: 'Beasts Pirates, governor-general; Emperor',
          },
        },
      ],
      epithet: [
        {
          episode: 739,
          value: {
            it: 'Kaido delle Cento Bestie; La Creatura più Forte',
            en: 'Kaido of the Beasts; the Strongest Creature',
          },
        },
      ],
      devilFruit: [
        {
          episode: 912,
          value: ['fish-fish-fruit-mythical-model-azure-dragon'],
        },
      ],
      bounty: [{ episode: 958, value: 4_611_100_000 }],
    },
  },
}
