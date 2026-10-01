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
      id: 'punk-hazard-arc',
      kind: 'arc',
      revealedAtEpisode: 579,
      revealedAtChapter: 654,
      name: { it: 'Punk Hazard', en: 'Punk Hazard' },
      summary: {
        it: 'Un’isola divisa in due da una linea netta, metà in fiamme e metà sepolta nel ghiaccio, su cui il Governo Mondiale vieta di sbarcare.',
        en: 'An island cut in two by a clean line, half of it burning and half buried in ice, which the World Government forbids anyone to land on.',
      },
      visual: { art: 'punk-hazard-arc', tint: 'vermilion' },
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
      id: 'punk-hazard',
      kind: 'place',
      revealedAtEpisode: 579,
      revealedAtChapter: 655,
      name: { it: 'Punk Hazard', en: 'Punk Hazard' },
      summary: {
        it: 'Un’isola in fiamme del Nuovo Mondo, oltre un mare di fuoco, chiusa da una recinzione del Governo Mondiale dietro cui gli edifici si sono fusi.',
        en: 'A burning island in the New World beyond a sea of fire, closed off by a World Government fence behind which the buildings have melted.',
      },
      visual: { art: 'punk-hazard', tint: 'yellow' },
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
      id: 'dressrosa-arc',
      kind: 'arc',
      revealedAtEpisode: 629,
      revealedAtChapter: 700,
      name: { it: 'Dressrosa', en: 'Dressrosa' },
      summary: {
        it: 'Un regno di fiori e giocattoli viventi, con un colosseo al centro e un soldatino di legno con una gamba sola fermo davanti al cancello.',
        en: 'A kingdom of flowers and living toys, a colosseum at its heart and a one-legged wooden soldier standing at the gate.',
      },
      visual: { art: 'dressrosa-arc', tint: 'flamingo' },
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
    {
      id: 'mocha',
      kind: 'character',
      revealedAtEpisode: 591,
      revealedAtChapter: 665,
      name: { it: 'Mocia', en: 'Mocha' },
      summary: {
        it: 'Una bambina grande come una gigante fra quelle tenute nel laboratorio, che chiede ai pirati se guarirà e se potrà rivedere la mamma e il papà.',
        en: 'A little girl grown as big as a giant, one of the children kept in the laboratory, who asks the pirates whether she will get better and see her mother and father again.',
      },
      visual: { art: 'mocha', tint: 'lavender' },
    },
    {
      id: 'rock-and-scotch',
      kind: 'character',
      revealedAtEpisode: 592,
      revealedAtChapter: 666,
      name: { it: 'Rock e Scotch', en: 'Rock and Scotch' },
      summary: {
        it: 'Due sicari giganti e pelosi che nessuno ha mai visto in faccia, noti soltanto per le impronte sulla neve più grandi di un uomo e per le voci profonde.',
        en: 'Two huge furry assassins whom nobody has ever seen face to face, known only by footprints in the snow bigger than a man and by their low voices.',
      },
      visual: { art: 'rock-and-scotch', tint: 'ice' },
    },
    {
      id: 'smiley',
      kind: 'character',
      revealedAtEpisode: 594,
      revealedAtChapter: 673,
      name: { it: 'Smiley', en: 'Smiley' },
      summary: {
        it: 'Una massa di melma velenosa più grande di una montagna, liberata dal lato in fiamme dell’isola, che il padrone del laboratorio chiama il suo animale.',
        en: 'A mass of poisonous slime bigger than a mountain, let loose on the burning half of the island, which the master of the laboratory calls his pet.',
      },
      visual: { art: 'smiley', tint: 'magenta' },
    },
    {
      id: 'dressrosa',
      kind: 'place',
      revealedAtEpisode: 629,
      revealedAtChapter: 700,
      name: { it: 'Dressrosa', en: 'Dressrosa' },
      summary: {
        it: 'Il regno dell’amore e della passione nel Nuovo Mondo, visto dal mare come un’isola rocciosa, di cui il pirata Do Flamingo è il re.',
        en: 'The kingdom of love and passion in the New World, seen from the sea as a rocky island, with the pirate Doflamingo for its king.',
      },
      visual: { art: 'dressrosa', tint: 'red' },
    },
    {
      id: 'spartan',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 704,
      name: { it: 'Spartan', en: 'Spartan' },
      summary: {
        it: 'Un gladiatore enorme, fra le stelle del colosseo, che nella sala d’attesa non sopporta di vedere un ometto venuto a combattere e glielo fa sapere a pugni.',
        en: 'A huge gladiator, one of the colosseum’s stars, who cannot stand the sight of a little man come to fight in the waiting room and tells him so with his fists.',
      },
      visual: { art: 'spartan', tint: 'orange' },
    },
    {
      id: 'kelly-funk',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 704,
      name: { it: 'Kelly Funk', en: 'Kelly Funk' },
      summary: {
        it: 'Un assassino a torso nudo con i guantoni da boxe, il maggiore di due fratelli, che nella sala d’attesa del colosseo attacca briga con un rivale accusandolo di comprarsi gli alleati.',
        en: 'A bare-chested assassin in boxing gloves, the elder of two brothers, who picks a quarrel in the colosseum’s waiting room by accusing a rival of buying himself allies.',
      },
      visual: { art: 'kelly-funk', tint: 'red' },
    },
    {
      id: 'bobby-funk',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 704,
      name: { it: 'Bobby Funk', en: 'Bobby Funk' },
      summary: {
        it: 'Un omone barbuto con un cappello a tesa larga, il minore di due fratelli assassini, che sta alle spalle del fratello più basso e ricorda a tutti che un combattimento è una faccenda personale.',
        en: 'A huge bearded man in a broad-brimmed hat, the younger of two assassin brothers, who stands behind his shorter brother and reminds everyone that a fight is a personal matter.',
      },
      visual: { art: 'bobby-funk', tint: 'ocher' },
    },
    {
      id: 'dagama',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 704,
      name: { it: 'Dagama', en: 'Dagama' },
      summary: {
        it: 'Lo stratega del Regno di Prodence, venuto al torneo del colosseo con il suo re, che accusato di comprarsi gli alleati risponde che nella sala tutti stanno tramando qualcosa.',
        en: 'The tactician of the Prodence Kingdom, come to the colosseum tournament with his king, who is accused of buying himself allies and answers that everyone in the room is plotting something.',
      },
      visual: { art: 'dagama', tint: 'yellow' },
    },
    {
      id: 'suleiman',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 704,
      name: { it: 'Suleiman', en: 'Suleiman' },
      summary: {
        it: 'Un criminale di guerra di prima classe, reduce della battaglia navale di Dias e noto come il tagliatore di teste, tra i nomi famigerati iscritti al torneo del colosseo.',
        en: 'A class-A war criminal who fought in the Sea Battle of Dias, known as the Beheader, one of the notorious names entered in the colosseum tournament.',
      },
      visual: { art: 'suleiman', tint: 'violet' },
    },
    {
      id: 'abdullah',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 704,
      name: { it: 'Abdullah', en: 'Abdullah' },
      summary: {
        it: 'Un ex cacciatore di taglie che insieme al suo compagno ha fatto saltare in aria un’istituzione governativa, e che ora è tra i nomi famigerati iscritti al torneo del colosseo.',
        en: 'A former bounty hunter who, with his partner, bombed a government institution, and who is now one of the notorious names entered in the colosseum tournament.',
      },
      visual: { art: 'abdullah', tint: 'wine' },
    },
    {
      id: 'jeet',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 704,
      name: { it: 'Jeet', en: 'Jeet' },
      summary: {
        it: 'Un ex cacciatore di taglie che con il suo compagno Abdullah ha fatto saltare in aria un’istituzione governativa, e che con lui si è iscritto al torneo del colosseo.',
        en: 'A former bounty hunter who bombed a government institution with his partner Abdullah, and who has entered the colosseum tournament with him.',
      },
      visual: { art: 'jeet', tint: 'teal' },
    },
    {
      id: 'boo',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 708,
      name: { it: 'Boo', en: 'Boo' },
      summary: {
        it: 'Un gladiatore con i capelli arancioni legati in due code, arrivato al colosseo con la sua famiglia dal Paese di Kano, che trattiene il fratello irascibile quando uno sconosciuto li ringrazia per l’aiuto.',
        en: 'A gladiator with his orange hair tied in two ponytails, who comes to the colosseum with his family from Kano Country and holds his hot-headed brother back when a stranger thanks them for their help.',
      },
      visual: { art: 'boo', tint: 'orange' },
    },
    {
      id: 'gambia',
      kind: 'character',
      revealedAtEpisode: 634,
      revealedAtChapter: 705,
      name: { it: 'Gambia', en: 'Gambia' },
      summary: {
        it: 'Un pirata con qualche dente in meno e una croce tatuata sul petto, che nel colosseo sorprende uno sconosciuto a sussurrare i nomi di combattenti famosi in un lumacofono, e fa una domanda di troppo.',
        en: 'A gap-toothed pirate with a cross tattooed on his chest, who catches a stranger in the colosseum whispering the names of famous fighters into a transponder snail, and asks one question too many.',
      },
      visual: { art: 'gambia', tint: 'sand' },
    },
    {
      id: 'tank-lepanto',
      kind: 'character',
      revealedAtEpisode: 636,
      revealedAtChapter: 707,
      name: { it: 'Tank Lepanto', en: 'Tank Lepanto' },
      summary: {
        it: 'Un omone con la barba a punta e due gambe cortissime, che comanda l’esercito di Dressrosa e nel torneo del colosseo combatte per chi lo paga.',
        en: 'A huge man with a pointed beard on legs far too short for him, who commands the army of Dressrosa and fights in the colosseum tournament for whoever pays him.',
      },
      visual: { art: 'tank-lepanto', tint: 'ocher' },
    },
    {
      id: 'gatz',
      kind: 'character',
      revealedAtEpisode: 638,
      revealedAtChapter: 709,
      name: { it: 'Gats', en: 'Gatz' },
      summary: {
        it: 'L’annunciatore del colosseo, con l’elmo piumato e la corazza dorata, che racconta ogni incontro al pubblico e fa una gran fatica a restare imparziale.',
        en: 'The colosseum announcer, in a plumed helmet and a golden breastplate, who calls every bout for the crowd and has a hard time staying impartial.',
      },
      visual: { art: 'gatz', tint: 'yellow' },
    },
    {
      id: 'green-bit',
      kind: 'place',
      revealedAtEpisode: 639,
      revealedAtChapter: 710,
      name: { it: 'Green Bit', en: 'Green Bit' },
      summary: {
        it: 'Un’isoletta a nord di Dressrosa, unita a lei da un lungo ponte di ferro, dove una foresta selvaggia cresce dietro una riva piena di relitti.',
        en: 'A small island north of Dressrosa, joined to it by a long iron bridge, where a wild forest grows behind a shore full of wrecks.',
      },
      visual: { art: 'green-bit', tint: 'green' },
    },
    {
      id: 'wicca',
      kind: 'character',
      revealedAtEpisode: 640,
      revealedAtChapter: 711,
      name: { it: 'Wicca', en: 'Wicca' },
      summary: {
        it: 'Una donnina alta un palmo, con una coda folta e un grande cappello blu, che ruba una spada in una città portuale, si fa acchiappare dal proprietario e poi gli racconta molto più di quanto volesse.',
        en: 'A woman no taller than a hand, with a bushy tail and a big blue hat, who steals a sword in a port town, is caught by its owner, and then tells him far more than she meant to.',
      },
      visual: { art: 'wicca', tint: 'blue' },
    },
    {
      id: 'ucy',
      kind: 'character',
      revealedAtEpisode: 644,
      revealedAtChapter: 714,
      name: { it: 'Ucy', en: 'Ucy' },
      summary: {
        it: 'Un toro da combattimento nero che nel colosseo ha ucciso dei condannati a morte, finché un piccolo gladiatore barbuto non gli salta in groppa e gli dà un nome.',
        en: 'A black fighting bull that has killed condemned prisoners in the colosseum, until a small bearded gladiator jumps on its back and gives it a name.',
      },
      visual: { art: 'ucy', tint: 'vermilion' },
    },
    {
      id: 'jean-ango',
      kind: 'character',
      revealedAtEpisode: 645,
      revealedAtChapter: 715,
      name: { it: 'Jean Ango', en: 'Jean Ango' },
      summary: {
        it: 'Un cacciatore di taglie con un sombrero sormontato da un cactus, che resta in piedi quando i combattenti intorno a lui crollano e raccoglie dal ring le loro armi per rilanciarle come proiettili.',
        en: 'A bounty hunter in a cactus-topped sombrero who stays on his feet when the fighters around him fall, and picks their weapons up off the ring to throw back as his bullets.',
      },
      visual: { art: 'jean-ango', tint: 'green' },
    },
    {
      id: 'scarlett',
      kind: 'character',
      revealedAtEpisode: 651,
      revealedAtChapter: 742,
      name: { it: 'Scarlet', en: 'Scarlett' },
      summary: {
        it: 'La madre di Rebecca, che vendeva fiori in città insieme alla sua bambina finché una notte il palazzo non prese fuoco, e che fuggì con lei prima di uscire da sola a cercare qualcosa da mangiare.',
        en: 'Rebecca’s mother, who sold flowers in town with her little girl until the night the palace caught fire, and fled with her before going out alone to find them something to eat.',
      },
      visual: { art: 'scarlett', tint: 'red' },
    },
    {
      id: 'kyuin',
      kind: 'character',
      revealedAtEpisode: 692,
      revealedAtChapter: 755,
      name: { it: 'Swuuush', en: 'Kyuin' },
      summary: {
        it: 'Una donna enorme con una maschera da lottatore e la scritta SMILE sul vestito, che dirige una fabbrica e risucchia con un aspirapolvere gli operai che provano a scappare.',
        en: 'A huge woman in a wrestler’s mask with the word SMILE across her dress, who runs a factory and sucks up the workers who try to escape it with a vacuum machine.',
      },
      visual: { art: 'kyuin', tint: 'violet' },
    },
    {
      id: 'trafalgar-lami',
      kind: 'character',
      revealedAtEpisode: 701,
      revealedAtChapter: 762,
      name: { it: 'Trafalgar Lami', en: 'Trafalgar Lami' },
      summary: {
        it: 'La sorellina di Law a Flevance, la Città Bianca, che adora le feste e si ammala del veleno del piombo ambrato che sta uccidendo tutta la città.',
        en: 'Law’s little sister in Flevance, the White Town, who loves festivals and falls ill with the amber lead poison that is killing the whole town.',
      },
      visual: { art: 'trafalgar-lami', tint: 'ivory' },
    },
    {
      id: 'donquixote-homing',
      kind: 'character',
      revealedAtEpisode: 702,
      revealedAtChapter: 763,
      name: { it: 'Donquijote Homing', en: 'Donquixote Homing' },
      summary: {
        it: 'Un Nobile Mondiale che a Mary Geoise dichiara di essere un essere umano e rinuncia al proprio rango, e porta moglie e figli a vivere fra la gente comune, dove vengono braccati per quello che erano.',
        en: 'A World Noble who declares at Mary Geoise that he is a human being and gives up his rank, then takes his wife and sons to live among ordinary people, where they are hunted for what they used to be.',
      },
      visual: { art: 'donquixote-homing', tint: 'green' },
    },
    {
      id: 'diez-barrels',
      kind: 'character',
      revealedAtEpisode: 704,
      revealedAtChapter: 765,
      name: { it: 'Diez Barrels', en: 'Diez Barrels' },
      summary: {
        it: 'Un ex ufficiale della Marina passato alla pirateria, che beve con la sua ciurma in una città fantasma in attesa di vendere alla Marina un frutto del diavolo per cinque miliardi di berry.',
        en: 'A former Marine officer turned pirate, drinking with his crew in a ghost town while he waits to sell a Devil Fruit to the Marines for five billion berries.',
      },
      visual: { art: 'diez-barrels', tint: 'ocher' },
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
      bounty: [{ episode: 584, value: 80_060_000 }],
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
      bounty: [{ episode: 589, value: 300_000_000 }],
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
      bounty: [{ episode: 636, value: 150_000_000 }],
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
      bounty: [{ episode: 634, value: 280_000_000 }],
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
        // Learned on Elbaph, where the crew hears whose son he is.
        {
          episode: 1160,
          value: {
            it: 'Nuovi Pirati Guerrieri Giganti, capitano; Grande Flotta di Cappello di Paglia; figlio del re di Elbaf',
            en: 'New Giant Warrior Pirates, captain; Straw Hat Grand Fleet; son of the King of Elbaph',
          },
        },
      ],
      origin: [{ episode: 632, value: { it: 'Elbaf', en: 'Elbaph' } }],
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
    'mocha': {
      chronicle: dressrosaChronicles.mocha,
      role: {
        it: 'Bambina tenuta nel laboratorio di Punk Hazard',
        en: 'Child kept in the Punk Hazard laboratory',
      },
      log: {
        it: 'È una dei bambini del laboratorio cresciuti fino alla taglia di un gigante, anche se sull’isola era arrivata piccola come tutti gli altri. Chiede a Nami se guarirà e se potrà rivedere la mamma e il papà, e Nami le promette di riportarla a casa. Quando i bambini più grandi cominciano a crollare chiedendo la caramella di ogni giorno, si scopre che non li ha mai trattenuti lì nessuna malattia.',
        en: 'She is one of the laboratory children who have grown to a giant’s size, though she came to the island as small as all the others. She asks Nami whether she will get better and see her mother and father again, and Nami promises to take her home. When the biggest children start collapsing and asking for their daily candy, it turns out that no illness was ever what kept them there.',
      },
      status: [{ episode: 591, value: 'alive' }],
      affiliation: [
        {
          episode: 591,
          value: {
            it: 'Bambini rapiti di Punk Hazard',
            en: 'Punk Hazard’s stolen children',
          },
        },
        {
          episode: 622,
          value: {
            it: 'Bambini rapiti di Punk Hazard, affidati alla Marina per tornare a casa',
            en: 'Punk Hazard’s stolen children, in the Marines’ care on the way home',
          },
        },
      ],
    },
    'rock-and-scotch': {
      chronicle: dressrosaChronicles['rock-and-scotch'],
      role: {
        it: 'Sicari al soldo di Caesar Clown',
        en: 'Assassins in Caesar Clown’s pay',
      },
      log: {
        it: 'Nessuno li ha mai visti in faccia: di loro si sa soltanto che hanno impronte enormi e voci profonde, che sono giganti pelosi simili a bestie e che uccidono chiunque per il giusto prezzo. Il padrone del laboratorio li manda a caccia dei pirati sulle montagne innevate, e loro annunciano via radio di averne già lasciati tre morti in fondo a un dirupo. Poi puntano i fucili sul capo delle guardie che aspettava di essere liberato da loro, perché anche il suo nome è sulla loro lista.',
        en: 'Nobody has ever seen their faces: all anyone knows is that their footprints are huge and their voices low, that they are furry, beast-like giants, and that they will kill anyone for the right price. The master of the laboratory sends them after the pirates on the snowy mountains, and they radio in that three are already lying dead at the foot of a cliff. Then they turn their rifles on the guard captain who was waiting for them to set him free, because his name is on their list too.',
      },
      status: [{ episode: 592, value: 'alive' }],
      affiliation: [
        {
          episode: 592,
          value: {
            it: 'Yeti Cool Brothers, sicari al soldo di Caesar Clown',
            en: 'Yeti Cool Brothers, assassins in Caesar Clown’s pay',
          },
        },
      ],
      epithet: [
        {
          episode: 592,
          value: {
            it: 'Gli Assassini dei Monti Innevati',
            en: 'the Snow Mountain Killers',
          },
        },
      ],
    },
    // No `devilFruit` line: the anime shows the slime take an axolotl's
    // shape but never names the fruit that gives it one. The name is only in
    // a caption box of chapter 673 that episode 599 does not adapt.
    'smiley': {
      chronicle: dressrosaChronicles.smiley,
      role: { it: 'Animale di Caesar Clown', en: 'Caesar Clown’s pet' },
      log: {
        it: 'Gli uomini del laboratorio aprono una porta sul lato in fiamme dell’isola, come gli è stato ordinato, e dall’edificio esce qualcosa che uccide quasi tutti e che è più grande di una montagna. Chi riesce a scappare soffoca nel gas che si porta dietro. Il suo padrone lo chiama il suo animale, una creatura rarissima fatta di melma, lo saluta per nome come dopo una lunga separazione e annuncia che da quel momento nessuno potrà più lasciare l’isola.',
        en: 'The laboratory’s men open a door on the burning half of the island, as they were ordered to, and out of the building comes something that kills almost all of them and is bigger than a mountain. Whoever manages to run chokes on the gas it trails. Its master calls it his pet, a very rare slime-type creature, greets it by name as if after a long separation, and announces that from now on nobody can leave the island.',
      },
      status: [
        { episode: 594, value: 'alive' },
        { episode: 602, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 594,
          value: {
            it: 'Punk Hazard, animale di Caesar Clown',
            en: 'Punk Hazard, Caesar Clown’s pet',
          },
        },
      ],
    },
    'spartan': {
      chronicle: dressrosaChronicles.spartan,
      role: { it: 'Gladiatore del colosseo', en: 'Colosseum gladiator' },
      log: {
        it: 'È una delle stelle del colosseo delle corride e ne ha vinto il torneo mensile cinquantuno volte. Nella sala d’attesa prende l’arrivo di un nuovo concorrente piccolo e barbuto come uno scherzo fatto all’arena, dove il pubblico vuole vedere soltanto i forti, e lo attacca a pugni. Finisce piantato nel pavimento dopo una sola proiezione, e dal torneo viene cacciato lui.',
        en: 'He is one of the stars of the Corrida Colosseum and has won its monthly tournament fifty-one times. In the waiting room he takes the arrival of a small, bearded newcomer as a joke played on the arena, where the crowd wants to see only the strong, and goes at him with his fists. He ends up planted in the floor after a single throw, and it is he who is thrown out of the tournament.',
      },
      status: [{ episode: 633, value: 'alive' }],
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Colosseo delle corride, gladiatore',
            en: 'Corrida Colosseum, gladiator',
          },
        },
      ],
    },
    'gatz': {
      chronicle: dressrosaChronicles.gatz,
      role: {
        it: 'Annunciatore del colosseo delle corride',
        en: 'Announcer of the Corrida Colosseum',
      },
      log: {
        it: 'Dalla sua postazione presenta al pubblico il premio del torneo e i combattenti, e racconta ogni blocco colpo per colpo. Dovrebbe restare imparziale, ma quando il suo preferito cade si lamenta ad alta voce, e un collega deve ricordargli il suo ruolo. Ama i grandi nomi e i colpi forti, e quando il re combattente ha ripulito il ring con un pugno solo aveva già cominciato ad annunciarne la vittoria.',
        en: 'From his booth he presents the tournament’s prize and its fighters to the crowd, and calls every block blow by blow. He is supposed to stay impartial, but when his favourite goes down he groans out loud, and a colleague has to remind him of his job. He loves a big name and a hard hit, and when the fighting king cleared the ring with a single punch he had already begun to announce the win.',
      },
      status: [{ episode: 638, value: 'alive' }],
      affiliation: [
        {
          episode: 638,
          value: {
            it: 'Colosseo delle corride, annunciatore',
            en: 'Corrida Colosseum, announcer',
          },
        },
      ],
    },
    'ucy': {
      chronicle: dressrosaChronicles.ucy,
      role: {
        it: 'Toro da combattimento del colosseo',
        en: 'Colosseum fighting bull',
      },
      log: {
        it: 'È un toro da combattimento nero che nel colosseo ha ucciso dei condannati a morte, e l’annunciatore lo chiama il tristo mietitore dell’arena. Nel blocco C un piccolo gladiatore con la barba lo doma, gli sale in groppa e lo chiama Ucy, e insieme travolgono un avversario dopo l’altro fra gli applausi. Poi finiscono contro la gamba di un gigante, e il gigante li schiaccia tutti e due a terra.',
        en: 'He is a black fighting bull who has killed condemned prisoners in the colosseum, and the announcer calls him the arena’s Grim Reaper. In Block C a small bearded gladiator tames him, climbs on his back and names him Ucy, and together they flatten one opponent after another to cheers. Then they run into a giant’s leg, and the giant smashes them both into the ground.',
      },
      status: [{ episode: 644, value: 'alive' }],
      affiliation: [
        {
          episode: 644,
          value: {
            it: 'Colosseo delle corride, toro da combattimento; cavalcatura di Lucy',
            en: 'Corrida Colosseum, fighting bull; Lucy’s mount',
          },
        },
      ],
      epithet: [
        { episode: 644, value: { it: 'Brutal Bull', en: 'Brutal Bull' } },
      ],
    },
    'kelly-funk': {
      chronicle: dressrosaChronicles['kelly-funk'],
      role: {
        it: 'Assassino, il maggiore dei fratelli Funk',
        en: 'Assassin, the elder Funk brother',
      },
      log: {
        it: 'Lui e il fratello minore Bobby sono i fratelli Funk, assassini venuti da un paese vicino per contendersi il Frutto Foco Foco. Nella sala d’attesa accusa Dagama di allearsi con i più forti del suo blocco e di pagare la gente, e dice che la cosa gli fa schifo. Dagama ribatte che anche i due fratelli sono lì per ordine del proprio paese, e chiede se abbiano comprato il posto nello stesso blocco; è una coincidenza, risponde Kelly.',
        en: 'He and his younger brother Bobby are the Funk Brothers, assassins from a neighbouring country come to fight for the Flame-Flame Fruit. In the waiting room he accuses Dagama of ganging up with the strongest fighters in his block and paying people off, and says it makes him sick. Dagama answers that the brothers are here on their country’s orders too, and asks whether they bought their places in the same block; it is a coincidence, Kelly says.',
      },
      status: [{ episode: 633, value: 'unknown' }],
      affiliation: [
        { episode: 633, value: { it: 'Fratelli Funk', en: 'Funk Brothers' } },
      ],
      origin: [
        {
          episode: 645,
          value: { it: 'Regno di Mogaro', en: 'Mogaro Kingdom' },
        },
      ],
      devilFruit: [{ episode: 646, value: ['jacket-jacket-fruit'] }],
    },
    'bobby-funk': {
      chronicle: dressrosaChronicles['bobby-funk'],
      role: {
        it: 'Assassino, il minore dei fratelli Funk',
        en: 'Assassin, the younger Funk brother',
      },
      log: {
        it: 'È il minore dei fratelli Funk, assassini venuti da un paese vicino, e supera di tutta la testa il fratello Kelly. Quando Kelly se la prende con Dagama perché si compra gli alleati, Bobby aggiunge soltanto che un combattimento è una faccenda personale. Alla domanda se i due abbiano pagato qualcuno per finire nello stesso blocco, risponde che è solo una coincidenza.',
        en: 'He is the younger of the Funk Brothers, assassins from a neighbouring country, and stands head and shoulders above his brother Kelly. When Kelly rounds on Dagama for buying allies, Bobby adds only that a fight is a personal matter. Asked whether the two of them paid somebody off to share a block, he says it is just a coincidence.',
      },
      status: [{ episode: 633, value: 'unknown' }],
      affiliation: [
        { episode: 633, value: { it: 'Fratelli Funk', en: 'Funk Brothers' } },
      ],
      origin: [
        {
          episode: 645,
          value: { it: 'Regno di Mogaro', en: 'Mogaro Kingdom' },
        },
      ],
    },
    'dagama': {
      chronicle: dressrosaChronicles.dagama,
      role: {
        it: 'Stratega del Regno di Prodence',
        en: 'Tactician of the Prodence Kingdom',
      },
      log: {
        it: 'Serve il Regno di Prodence come stratega, ed è venuto al colosseo con il suo re per vincere il Frutto Foco Foco, che darebbe a qualunque paese il coltello dalla parte del manico nella diplomazia. Kelly Funk lo accusa di stringere alleanze nel suo blocco e di corrompere i combattenti, e lui liquida l’accusa. Risponde indicando ogni nome famigerato nella sala e chiedendo se qualcuno creda davvero che loro non stiano tramando niente.',
        en: 'He serves the Prodence Kingdom as its tactician, and has come to the colosseum with his king to win the Flame-Flame Fruit, which would give any country the upper hand in diplomacy. Kelly Funk accuses him of forming alliances in his block and bribing fighters, and he brushes it off. He answers by pointing out every notorious name in the room and asking whether anyone really believes they are not plotting something too.',
      },
      status: [{ episode: 633, value: 'unknown' }],
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Regno di Prodence, stratega',
            en: 'Prodence Kingdom, tactician',
          },
        },
      ],
      origin: [
        {
          episode: 633,
          value: { it: 'Regno di Prodence', en: 'Prodence Kingdom' },
        },
      ],
    },
    'suleiman': {
      chronicle: dressrosaChronicles.suleiman,
      role: { it: 'Criminale di guerra', en: 'War criminal' },
      log: {
        it: 'È un criminale di guerra di prima classe che ha combattuto nella battaglia navale di Dias, e lo chiamano il tagliatore di teste. Si è iscritto al torneo del colosseo per il Frutto Foco Foco, insieme agli altri nomi famigerati della sala d’attesa. Dagama lo indica per primo quando vuole dimostrare che lì dentro tutti stanno tramando qualcosa.',
        en: 'He is a class-A war criminal who fought in the Sea Battle of Dias, and he is known as the Beheader. He has entered the colosseum tournament for the Flame-Flame Fruit, along with the other notorious names in the waiting room. Dagama points to him first when he sets out to prove that everyone there is plotting something.',
      },
      status: [
        { episode: 633, value: 'unknown' },
        { episode: 744, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 633,
          value: { it: 'Gladiatore del colosseo', en: 'Colosseum gladiator' },
        },
        {
          episode: 744,
          value: { it: 'Pirati Beautiful', en: 'Beautiful Pirates' },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      epithet: [
        {
          episode: 633,
          value: { it: 'Il tagliatore di teste', en: 'the Beheader' },
        },
      ],
    },
    'abdullah': {
      chronicle: dressrosaChronicles.abdullah,
      role: { it: 'Ex cacciatore di taglie', en: 'Former bounty hunter' },
      log: {
        it: 'Lui e il suo compagno Jeet erano cacciatori di taglie, finché non hanno fatto saltare in aria un’istituzione governativa. Adesso si sono iscritti insieme al torneo del colosseo per il Frutto Foco Foco. Dagama li conta tra i nomi famigerati della sala d’attesa che di sicuro stanno tramando qualcosa.',
        en: 'He and his partner Jeet were bounty hunters until they bombed a government institution. Now the two of them have entered the colosseum tournament together, for the Flame-Flame Fruit. Dagama counts them among the notorious names in the waiting room who must surely be plotting something.',
      },
      status: [
        { episode: 633, value: 'unknown' },
        { episode: 744, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 633,
          value: { it: 'Gladiatore del colosseo', en: 'Colosseum gladiator' },
        },
        {
          episode: 744,
          value: {
            it: 'Alleanza di arti marziali della palestra XXX',
            en: 'XXX Gym Martial Arts Alliance',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
    },
    'jeet': {
      chronicle: dressrosaChronicles.jeet,
      role: { it: 'Ex cacciatore di taglie', en: 'Former bounty hunter' },
      log: {
        it: 'Era un cacciatore di taglie insieme al suo compagno Abdullah, finché i due non hanno fatto saltare in aria un’istituzione governativa. Si sono iscritti insieme al torneo del colosseo, tra i combattenti famigerati radunati per il Frutto Foco Foco. Dagama li nomina tutti e due di fila quando elenca chi, nella sala, di sicuro sta tramando qualcosa.',
        en: 'He was a bounty hunter with his partner Abdullah until the two of them bombed a government institution. They have entered the colosseum tournament together, among the notorious fighters gathered for the Flame-Flame Fruit. Dagama names them in one breath when he lists the people in the room who must be plotting something.',
      },
      status: [
        { episode: 633, value: 'unknown' },
        { episode: 744, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 633,
          value: { it: 'Gladiatore del colosseo', en: 'Colosseum gladiator' },
        },
        {
          episode: 744,
          value: {
            it: 'Alleanza di arti marziali della palestra XXX',
            en: 'XXX Gym Martial Arts Alliance',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
    },
    'boo': {
      chronicle: dressrosaChronicles.boo,
      role: {
        it: 'Gladiatore della famiglia Chinjao',
        en: 'Chinjao Family gladiator',
      },
      log: {
        it: 'Arriva al colosseo con il resto della famiglia Chinjao, un clan del Paese di Kano che il pubblico sembra conoscere per nome. Quando uno sconosciuto con la barba finta stende uno dei beniamini del colosseo e una guardia fa per cacciarlo, Boo e suo fratello dicono che ha cominciato quello grosso. Il fratello si scaglia contro lo sconosciuto solo perché li ha ringraziati, ed è Boo a trattenerlo e a scusarsi: suo fratello, dice, si scalda facilmente.',
        en: 'He arrives at the colosseum with the rest of the Chinjao Family, a clan from Kano Country the crowd seems to know by name. When a stranger in a fake beard knocks down one of the house favourites and a guard moves to throw him out, Boo and his brother say the big man started it. His brother flies at the stranger for thanking them, and Boo is the one who holds him back and apologises: his brother, he says, is easily excited.',
      },
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Famiglia Chinjao, Paese di Kano',
            en: 'Chinjao Family, Kano Country',
          },
        },
        {
          episode: 645,
          value: {
            it: 'Flotta Happo, vicecomandante',
            en: 'Happo Navy, vice-leader',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        { episode: 633, value: { it: 'Paese di Kano', en: 'Kano Country' } },
      ],
    },
    'gambia': {
      chronicle: dressrosaChronicles.gambia,
      role: {
        it: 'Ufficiale di stato maggiore del Barto Club',
        en: 'Barto Club staff officer',
      },
      log: {
        it: 'È l’ufficiale di stato maggiore di una ciurma pirata il cui capitano si è appena iscritto al torneo, e ha una taglia di 67 milioni. In un corridoio del colosseo sorprende un uomo che prende appunti e sussurra nomi famosi, compreso il suo, e ipotizza ad alta voce che sia un marine. L’uomo dice a chi è in linea che richiamerà fra dieci minuti, e un attimo dopo Gambia ha smesso di fare domande.',
        en: 'He is the staff officer of a pirate crew whose captain has just entered the tournament, and he carries a bounty of 67 million. In a corridor of the colosseum he catches a man taking notes and whispering famous names, his own among them, and guesses aloud that he must be a Marine. The man tells his caller he will ring back in ten minutes, and a moment later Gambia has stopped asking.',
      },
      affiliation: [
        {
          episode: 634,
          value: {
            it: 'Barto Club, ufficiale di stato maggiore',
            en: 'Barto Club, staff officer',
          },
        },
        {
          episode: 746,
          value: {
            it: 'Grande Flotta di Cappello di Paglia; Barto Club',
            en: 'Straw Hat Grand Fleet; Barto Club',
          },
        },
      ],
      epithet: [
        { episode: 634, value: { it: 'Il Missionario', en: 'the Missionary' } },
      ],
      bounty: [{ episode: 634, value: 67_000_000 }],
    },
    'tank-lepanto': {
      chronicle: dressrosaChronicles['tank-lepanto'],
      role: {
        it: 'Comandante dell’Esercito di autodifesa di Dressrosa',
        en: 'Captain of Dressrosa’s Self-Defence Army',
      },
      log: {
        it: 'È il comandante dell’Esercito di autodifesa di Dressrosa, e lo mettono fra i nomi da tenere d’occhio nel blocco B. Sul ring si schiera con gli uomini di un re straniero e apre loro la strada verso il pirata che vogliono eliminare per primo. Quando gli chiedono perché il comandante dell’esercito di Dressrosa aiuti degli stranieri, risponde che è il denaro a far girare il mondo, e che preferisce i soldi facili a un grande sogno.',
        en: 'He is the military captain of Dressrosa’s Self-Defence Army, and he is counted among the names to watch in block B. In the ring he sides with a foreign king’s men and clears their way to the pirate they want out first. Asked why the captain of Dressrosa’s army is helping foreigners, he says that money makes the world go round, and that he would rather take easy money than chase a big dream.',
      },
      affiliation: [
        {
          episode: 636,
          value: {
            it: 'Esercito di autodifesa di Dressrosa, comandante',
            en: 'Dressrosa Self-Defence Army, military captain',
          },
        },
        {
          episode: 658,
          value: {
            it: 'Esercito di autodifesa di Dressrosa, comandante; fedele al re deposto',
            en: 'Dressrosa Self-Defence Army, military captain; loyal to the deposed king',
          },
        },
      ],
      origin: [{ episode: 636, value: DRESSROSA }],
    },
    'wicca': {
      chronicle: dressrosaChronicles.wicca,
      role: { it: 'Ricognitrice dei Tontatta', en: 'Tontatta scout' },
      log: {
        it: 'È una delle creature minuscole che gli isolani chiamano fate, che si prendono quello che vogliono e sostengono che sia stato loro regalato. Fa la ricognitrice, e quando un pirata la acchiappa con la sua spada non riesce più a smettere di parlare: che viene dalla tribù dei Tontatta, che la famiglia Donquijote sta andando ad attaccare la nave della sua ciurma. Con una caviglia storta non può correre, e lo supplica di portarla dal suo comandante al campo di fiori.',
        en: 'She is one of the tiny people the islanders call fairies, who take what they please and insist it was given to them. She is a scout, and once a pirate has caught her with his sword she cannot stop telling him things: that she comes from the Tontatta tribe, that the Donquixote Family is on its way to attack his crew’s ship. With a twisted ankle she cannot run, so she begs him to carry her to her commander at the flower field.',
      },
      affiliation: [
        {
          episode: 640,
          value: {
            it: 'Tribù dei Tontatta, squadra dei ricognitori',
            en: 'Tontatta tribe, scouting unit',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        {
          episode: 641,
          value: { it: 'Green Bit, Dressrosa', en: 'Green Bit, Dressrosa' },
        },
      ],
    },
    'jean-ango': {
      chronicle: dressrosaChronicles['jean-ango'],
      role: { it: 'Cacciatore di taglie', en: 'Bounty hunter' },
      log: {
        it: 'I grandi pirati del Nuovo Mondo ce l’hanno tutti con lui, dice il cronista, e lui si definisce un cecchino i cui proiettili sono le armi che trova in giro. Quando un gladiatore lo insegue per avergli mandato in prigione il compagno, gli rivolge contro quelle armi e lo deride: un vero amico avrebbe assaltato la prigione, come ha fatto un idiota due anni fa. Poi strappa l’elmo a un combattente travestito e ripete una voce: Cappello di Paglia Rufy sarebbe nel torneo in incognito.',
        en: 'The big pirates of the New World all bear him a grudge, the announcer says, and he calls himself a sniper whose bullets are whatever weapons he finds lying about. When a gladiator comes after him for sending his partner to prison, he turns those weapons on him and sneers that a real friend would have raided the prison, as some idiot did two years ago. Then he snatches a disguised fighter’s helmet and repeats a rumour: Straw Hat Luffy is secretly in the tournament.',
      },
      affiliation: [
        {
          episode: 645,
          value: {
            it: 'Cacciatore di taglie, gladiatore del colosseo',
            en: 'Bounty hunter, colosseum gladiator',
          },
        },
      ],
      epithet: [
        { episode: 645, value: { it: 'Il Bandito', en: 'the Bandit' } },
      ],
    },
    'kyuin': {
      chronicle: dressrosaChronicles.kyuin,
      role: {
        it: 'Direttrice della fabbrica di Smile',
        en: 'SMILE Factory manager',
      },
      log: {
        it: 'È la direttrice della fabbrica di Smile, e dice ai piccoli operai che sono sempre stati soltanto schiavi per fabbricare Smile. Quando si ribellano e girano la ruota che apre la porta della fabbrica, piomba su di loro con un aspirapolvere e li risucchia a manciate. Non ha intenzione di lasciarne uscire nemmeno uno.',
        en: 'She is the manager of the SMILE Factory, and she tells the little workers they were only ever slaves for making SMILEs. When they rise and turn the wheel that opens the factory door, she comes down on them with a vacuum machine and sucks them up by the handful. She means to let not one of them out.',
      },
      affiliation: [
        {
          episode: 692,
          value: {
            it: 'Direttrice della fabbrica di Smile',
            en: 'SMILE Factory manager',
          },
        },
      ],
    },
    'scarlett': {
      chronicle: dressrosaChronicles.scarlett,
      role: { it: 'Madre di Rebecca', en: 'Rebecca’s mother' },
      log: {
        it: 'Vendeva fiori in città insieme alla sua bambina, e quando i fiori erano finiti mangiavano insieme. La notte in cui il palazzo andò a fuoco fuggì con lei, e dopo due giorni senza cibo uscì da sola a comprare qualcosa e non tornò più viva. Un soldatino giocattolo la riportò alla figlia, e le spiegò che la madre era di nobile famiglia: per questo il nuovo re cerca anche lei.',
        en: 'She sold flowers in town with her little girl, and once the flowers were sold they ate together. The night the palace caught fire she fled with her, and after two days without food she went out alone to buy something and did not come back alive. A toy soldier carried her back to her daughter and told the girl her mother was high-born, which is why the new king is hunting her too.',
      },
      status: [{ episode: 651, value: 'deceased' }],
      affiliation: [
        {
          episode: 651,
          value: {
            it: 'Antica nobiltà di Dressrosa',
            en: 'Former nobility of Dressrosa',
          },
        },
        {
          episode: 667,
          value: {
            it: 'Famiglia reale Riku, principessa',
            en: 'Riku royal family, princess',
          },
        },
        {
          episode: 675,
          value: {
            it: 'Famiglia reale Riku, ex principessa; moglie di Kyros',
            en: 'Riku royal family, former princess; Kyros’ wife',
          },
        },
      ],
      origin: [{ episode: 667, value: DRESSROSA }],
    },
    'trafalgar-lami': {
      chronicle: dressrosaChronicles['trafalgar-lami'],
      role: { it: 'Sorella minore di Law', en: 'Law’s younger sister' },
      log: {
        it: 'Cresce nella Città Bianca, dove il padre fa il medico e il fratello maggiore Law studia per diventarlo. Implora tutti di portarla alla festa, e lungo la strada le compare sulla pelle la prima macchia bianca: è il veleno del piombo ambrato, che colpisce ogni generazione della città nello stesso momento. È ricoverata in ospedale quando i soldati dei paesi vicini arrivano a finire Flevance, e muore lì dentro quando gli danno fuoco.',
        en: 'She grows up in the White Town, where her father is a doctor and her big brother Law is studying to become one. She begs them all to take her to the festival, and on the way the first white patch shows on her skin: the amber lead poison, which strikes every generation of the town at once. She is in the hospital when the soldiers of the neighbouring countries come to finish Flevance, and she dies inside when they set it on fire.',
      },
      status: [{ episode: 701, value: 'deceased' }],
      affiliation: [
        {
          episode: 701,
          value: {
            it: 'Flevance, figlia di un medico',
            en: 'Flevance, a doctor’s daughter',
          },
        },
      ],
      origin: [{ episode: 701, value: { it: 'Flevance', en: 'Flevance' } }],
    },
    'donquixote-homing': {
      chronicle: dressrosaChronicles['donquixote-homing'],
      role: { it: 'Ex Nobile Mondiale', en: 'Former World Noble' },
      log: {
        it: 'È il padre di Do Flamingo, un Drago Celeste che non si è mai creduto più di un essere umano, e un giorno rinuncia al proprio rango e lascia Mary Geoise con la moglie e i due figli. Nel paese dove si stabiliscono la gente scopre che cosa erano, dà fuoco alla loro casa e li bracca per le strade, e Mary Geoise rifiuta di riprenderli. La moglie muore di malattia; anni dopo Do Flamingo racconta a Rufy e a Law di aver ucciso lui stesso suo padre.',
        en: 'He is Doflamingo’s father, a Celestial Dragon who never believed himself more than a human being, and one day he gives up his rank and leaves Mary Geoise with his wife and two sons. In the country where they settle, people find out what the family was, burn their house and hunt them through the streets, and Mary Geoise refuses to take them back. His wife dies of illness; years later Doflamingo tells Luffy and Law that he killed his father himself.',
      },
      status: [{ episode: 702, value: 'deceased' }],
      affiliation: [
        {
          episode: 702,
          value: {
            it: 'Nobili Mondiali, Draghi Celesti (ha rinunciato al rango)',
            en: 'World Nobles, Celestial Dragons (gave up his rank)',
          },
        },
      ],
      origin: [
        { episode: 702, value: { it: 'Mary Geoise', en: 'Mary Geoise' } },
      ],
    },
    'diez-barrels': {
      chronicle: dressrosaChronicles['diez-barrels'],
      role: {
        it: 'Capitano pirata, ex ufficiale della Marina',
        en: 'Pirate captain, former Marine officer',
      },
      log: {
        it: 'Era un ufficiale della Marina e adesso è un pirata, e in qualche modo gli è capitato fra le mani il Frutto Ope Ope. Ha fissato uno scambio con la Marina per cinque miliardi di berry, e aspetta la consegna con la ciurma in una città fantasma su un’isola vicina al luogo dello scambio. Fra un bicchiere e l’altro qualcuno ricorda che un medico, con quel frutto, diventerebbe famoso in tutto il mondo, ma a lui e ai suoi interessano solo i soldi.',
        en: 'He was a Marine officer and is now a pirate, and somehow the Op-Op Fruit has come into his hands. He has set up a trade with the Marines for five billion berries, and he waits for the handoff with his crew in a ghost town on an island near the meeting place. Between drinks one of them points out that a doctor who ate it would be famous all over the world, but he and his men care only for the money.',
      },
      status: [
        { episode: 704, value: 'unknown' },
        { episode: 706, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 704,
          value: {
            it: 'Ciurma di Barrels, capitano; ex ufficiale della Marina',
            en: 'Barrels’ crew, captain; former Marine officer',
          },
        },
      ],
    },
  },
}
