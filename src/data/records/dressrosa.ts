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

// The family's ranks are told late: Wicca gives Diamante's and Pica's rank at
// 652 (chapter 722), and the three armies and who serves in each are laid out
// at 664 (chapter 732). A member filed before then has a plain role, and the
// rank is a dated affiliation (#225, #277).
const DONQUIXOTE_MEMBER_ROLE = {
  it: 'Membro della famiglia Donquijote',
  en: 'Member of the Donquixote family',
}

const DONQUIXOTE_PIRATES = {
  it: 'Pirati di Donquijote',
  en: 'Donquixote Pirates',
}

const TREBOL_ARMY = {
  it: 'Pirati di Donquijote, ufficiale dell’Armata Trebol',
  en: 'Donquixote Pirates, Trebol Army officer',
}

const WANO = { it: 'Paese di Wano', en: 'Wano Country' }

const DRESSROSA = { it: 'Dressrosa', en: 'Dressrosa' }

export const dressrosa: Saga = {
  entries: [
    {
      id: 'koala',
      kind: 'character',
      revealedAtEpisode: 541,
      revealedAtChapter: 626,
      // Rounded up to 626, the chapter that files Fisher Tiger, whom the text names.
      name: { it: 'Koala', en: 'Koala' },
      summary: {
        it: 'Una bambina fuggita da Mary Geoise quando Fisher Tiger ha liberato gli schiavi, che i Pirati del Sole prendono a bordo per riportarla a casa.',
        en: 'A little girl who escaped Mary Geoise when Fisher Tiger freed the slaves, and whom the Sun Pirates take aboard to bring home.',
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
        it: 'Il primo tratto del Nuovo Mondo per la ciurma di Cappello di Paglia, che riemerge su un mare rosso che sembra in fiamme.',
        en: 'The Straw Hats’ first stretch of the New World, where they surface onto a red sea that seems to be on fire.',
      },
      visual: { art: 'punk-hazard-arc', tint: 'vermilion' },
    },
    {
      id: 'kinemon',
      kind: 'character',
      revealedAtEpisode: 598,
      revealedAtChapter: 672,
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
      revealedAtEpisode: 584,
      revealedAtChapter: 661,
      name: { it: 'Barbabruna', en: 'Brownbeard' },
      summary: {
        it: 'Un ex pirata con il corpo di alligatore dalla vita in giù, a capo di una banda di centauri che sorveglia l’isola.',
        en: 'A former pirate with an alligator’s body from the waist down, at the head of a band of centaurs that guards the island.',
      },
      visual: { art: 'brownbeard', tint: 'ocher' },
    },
    {
      id: 'caesar-clown',
      kind: 'character',
      // Only "the Master", a shape of gas, from 584. Smoker names him at the
      // end of 588 (chapter 663); he is shown in full at 589 (#148, #384).
      revealedAtEpisode: 588,
      revealedAtChapter: 663,
      name: { it: 'Caesar Clown', en: 'Caesar Clown' },
      summary: {
        it: 'Uno scienziato fatto di gas, padrone di un laboratorio su un’isola vietata, che Smoker riconosce come un ex collega di Vegapunk.',
        en: 'A scientist made of gas, master of a laboratory on a forbidden island, whom Smoker names as a former colleague of Vegapunk.',
      },
      visual: { art: 'caesar-clown', tint: 'acid' },
    },
    {
      id: 'monet',
      kind: 'character',
      // Named at 587 (chapter 662). The chapter stays at 664, later than it
      // needs to be (#384).
      revealedAtEpisode: 587,
      revealedAtChapter: 664,
      name: { it: 'Monet', en: 'Monet' },
      summary: {
        it: 'Una donna con le ali al posto delle braccia e le zampe da uccello, che torna in volo al laboratorio per dire al suo padrone che i pirati sull’isola sono i Cappello di Paglia.',
        en: 'A woman with wings for arms and a bird’s legs who flies back to the laboratory to tell its master that the pirates on the island are the Straw Hats.',
      },
      visual: { art: 'monet', tint: 'ice' },
    },
    {
      id: 'vergo',
      kind: 'character',
      revealedAtEpisode: 598,
      revealedAtChapter: 672,
      name: { it: 'Vergo', en: 'Vergo' },
      summary: {
        it: 'Un uomo alto con un pezzo di cibo incollato alla guancia, che compare nel laboratorio senza preavviso e mette a terra Law come se non gli costasse nulla.',
        en: 'A tall man with a scrap of food stuck to his cheek, who turns up in the laboratory without warning and knocks Law down as though it cost him nothing.',
      },
      visual: { art: 'vergo', tint: 'sand' },
    },
    {
      id: 'momonosuke',
      kind: 'character',
      revealedAtEpisode: 609,
      revealedAtChapter: 685,
      name: { it: 'Momonosuke', en: 'Momonosuke' },
      summary: {
        it: 'Un bambino arrivato sull’isola insieme agli altri bambini, che si è infilato in una stanza dove nessuno può entrare e si è trasformato in un piccolo drago.',
        en: 'A boy who came to the island with the other children, slipped into a room nobody may enter and turned into a small dragon.',
      },
      visual: { art: 'momonosuke', tint: 'pink' },
    },
    {
      id: 'baby-5',
      kind: 'character',
      revealedAtEpisode: 608,
      revealedAtChapter: 682,
      name: { it: 'Baby 5', en: 'Baby 5' },
      summary: {
        it: 'Una ragazza della cerchia di Do Flamingo che trasforma il braccio in un cannone e giura che questa volta non lo perdonerà.',
        en: 'A young woman in Doflamingo’s household who turns her arm into a cannon and swears she will not forgive him this time.',
      },
      visual: { art: 'baby-5', tint: 'wine' },
    },
    {
      id: 'buffalo',
      kind: 'character',
      revealedAtEpisode: 618,
      revealedAtChapter: 692,
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
        it: 'Un regno del Nuovo Mondo che dal mare appare come una muraglia di rocce enormi, governato da un pirata che loda uno dei suoi per come manda avanti il colosseo.',
        en: 'A New World kingdom that looks like a wall of huge rocks from the sea, ruled by a pirate who praises one of his men for running its colosseum.',
      },
      visual: { art: 'dressrosa-arc', tint: 'flamingo' },
    },
    {
      id: 'rebecca',
      kind: 'character',
      revealedAtEpisode: 634,
      revealedAtChapter: 706,
      name: { it: 'Rebecca', en: 'Rebecca' },
      summary: {
        it: 'Una gladiatrice del colosseo delle corride con l’armatura leggera e una lunga treccia: non ha mai perso un incontro, e gli altri combattenti le dicono che tutti aspettano di vederla battuta.',
        en: 'A gladiator of the Corrida Colosseum in light armour with a long braid: she has never lost a match, and the other fighters tell her everyone is waiting to see her beaten.',
      },
      visual: { art: 'rebecca', tint: 'pink' },
    },
    {
      id: 'issho',
      kind: 'character',
      // Unnamed at the roulette table (630, 631); an aide says his name at 634.
      revealedAtEpisode: 634,
      revealedAtChapter: 706,
      name: { it: 'Issho', en: 'Issho' },
      summary: {
        it: 'Un cieco in serie vincente alla roulette che, quando gli uomini della casa lo imbrogliano, li schiaccia sotto un peso improvviso. Poi si scopre che è un ammiraglio della Marina.',
        en: 'A blind man on a winning streak at roulette who, when the house’s men cheat him, crushes them under a sudden weight. He turns out to be a Marine admiral.',
      },
      visual: { art: 'issho', tint: 'violet' },
    },
    {
      id: 'bartolomeo',
      kind: 'character',
      // Only a silhouette when Dagama names him at 633, and not fully seen at
      // 634. He walks into the ring, named and shown, at the end of 635; the
      // manga shows him only as a shadow in chapter 705 and in full at 706
      // (#257).
      revealedAtEpisode: 635,
      revealedAtChapter: 706,
      nameSaidAt: 633,
      name: { it: 'Bartolomeo', en: 'Bartolomeo' },
      summary: {
        it: 'Un pirata con la cresta verde, diventato famigerato in un solo anno, che l’annunciatore del colosseo presenta come brutale e folle mentre lui entra nel ring del blocco B e manda tutti all’inferno.',
        en: 'A green-crested pirate who became infamous in a single year, whom the colosseum’s announcer calls brutal and crazy as he walks into the ring for Block B and tells everyone to go to hell.',
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
      revealedAtEpisode: 633,
      revealedAtChapter: 708,
      name: { it: 'Cavendish', en: 'Cavendish' },
      summary: {
        it: 'Un pirata così bello che le addette del colosseo svengono quando entra, che avverte Lucy che la sua armatura supera il limite di peso e dice che il Frutto Foco Foco sarà soltanto suo.',
        en: 'A pirate so beautiful that the colosseum’s female staff faint when he walks in, who warns Lucy that his armour is over the weight limit and says the Flame-Flame Fruit will be his alone.',
      },
      visual: { art: 'cavendish', tint: 'ivory' },
    },
    {
      id: 'sai',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 708,
      name: { it: 'Sai', en: 'Sai' },
      summary: {
        it: 'Un giovane della famiglia Chinjao, una banda del Regno di Kano, che al colosseo prende le difese di Lucy davanti allo staff e poi si infuria quando Lucy lo ringrazia.',
        en: 'A young man of the Chinjao family, a gang from the Kano Kingdom, who stands up for Lucy against the colosseum staff, then flies into a rage when Lucy thanks him.',
      },
      visual: { art: 'sai', tint: 'blue' },
    },
    {
      id: 'don-chinjao',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 708,
      name: { it: 'Don Chinjao', en: 'Don Chinjao' },
      summary: {
        it: 'Un vecchio calvo con la testa ammaccata, a capo della famiglia Chinjao, una banda del Regno di Kano, che si iscrive al torneo del colosseo.',
        en: 'An old man with a dented bald head who leads the Chinjao family, a gang from the Kano Kingdom, and enters the colosseum tournament.',
      },
      visual: { art: 'don-chinjao', tint: 'teal' },
    },
    {
      id: 'ideo',
      kind: 'character',
      // The anime moves Gatz's introduction of Block C up to 639, which
      // adapts chapter 710; the manga gives his epithet and titles in
      // chapter 715. The pair says nothing about the chapters between, so
      // the record stays out of the chapter table (#386).
      revealedAtEpisode: 639,
      revealedAtChapter: 715,
      unanchored: true,
      name: { it: 'Ideo', en: 'Ideo' },
      summary: {
        it: 'Un combattente dalle braccia lunghe, due volte campione del Torneo Centrale di Lotta del Nuovo Mondo, che il colosseo presenta come Cannone Distruttore fra i combattenti del blocco C.',
        en: 'A fighter with long arms, twice champion of the New World Central Fighting Tournament, whom the colosseum announces as Destruction Cannon among the fighters of Block C.',
      },
      visual: { art: 'ideo', tint: 'orange' },
    },
    {
      id: 'blue-gilly',
      kind: 'character',
      revealedAtEpisode: 636,
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
      revealedAtEpisode: 633,
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
      // Gatz announces him at 639, which adapts chapter 710; the manga makes
      // the same announcement in chapter 714. Like Ideo, kept out of the
      // chapter table (#386).
      revealedAtEpisode: 639,
      revealedAtChapter: 714,
      unanchored: true,
      name: { it: 'Hajrudin', en: 'Hajrudin' },
      summary: {
        it: 'Un gigante di Elbaf, presentato al colosseo come il più temibile dei mercenari pirati, tra i combattenti del blocco C.',
        en: 'A giant from Elbaph, announced at the colosseum as the most formidable pirate mercenary, among the fighters of Block C.',
      },
      visual: { art: 'hajrudin', tint: 'sand' },
    },
    {
      id: 'bastille',
      kind: 'character',
      // He comes back into the story outside the colosseum in chapter 717,
      // which 647 adapts; until then he is a face in the Marineford line.
      revealedAtEpisode: 647,
      revealedAtChapter: 717,
      name: { it: 'Bastille', en: 'Bastille' },
      summary: {
        it: 'Un viceammiraglio con una maschera di metallo cornuta e una spada enorme, che aspetta fuori dal colosseo con i suoi marine e non capisce perché nessuno degli sconfitti sia ancora uscito.',
        en: 'A vice admiral in a horned metal mask carrying a huge sword, who waits outside the colosseum with his Marines and cannot see why none of the losers has come out.',
      },
      visual: { art: 'bastille', tint: 'teal' },
    },
    {
      id: 'maynard',
      kind: 'character',
      revealedAtEpisode: 634,
      revealedAtChapter: 708,
      name: { it: 'Maynard', en: 'Maynard' },
      summary: {
        it: 'Un viceammiraglio della Marina che combatte nel torneo del colosseo e studia da vicino chi combatte davvero a Dressrosa.',
        en: 'A Marine vice admiral who fights in the colosseum tournament and gets a close look at who is really fighting in Dressrosa.',
      },
      visual: { art: 'maynard', tint: 'ivory' },
    },
    {
      id: 'hack',
      kind: 'character',
      revealedAtEpisode: 636,
      revealedAtChapter: 708,
      name: { it: 'Hack', en: 'Hack' },
      summary: {
        it: 'Un uomo-pesce che il colosseo presenta fra i combattenti del blocco B come maestro di karate degli uomini-pesce ed esperto di jujitsu degli uomini-pesce.',
        en: 'A fish-man whom the colosseum introduces among the fighters of Block B as a master of fish-man karate and a martial artist of fish-man jujutsu.',
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
      // Named with a picture of her by Kyros at 663 (chapter 731). Cotton says
      // the name at 648 without showing her (#277).
      revealedAtEpisode: 663,
      revealedAtChapter: 731,
      name: { it: 'Sugar', en: 'Sugar' },
      summary: {
        it: 'Una bambina della famiglia Donquijote che siede accanto a Do Flamingo mangiando uva, e non batte ciglio quando Baby 5 lo attacca.',
        en: 'A small girl of the Donquixote family who sits beside Doflamingo eating grapes, and does not react when Baby 5 attacks him.',
      },
      visual: { art: 'sugar', tint: 'lavender' },
    },
    {
      id: 'diamante',
      kind: 'character',
      revealedAtEpisode: 633,
      revealedAtChapter: 709,
      // "Diamante" is Italian for diamond, which is Jozu’s epithet from 461.
      commonWord: true,
      name: { it: 'Diamante', en: 'Diamante' },
      summary: {
        it: 'Un uomo altissimo e magro della famiglia Donquijote, con un cappello chiaro, che il colosseo presenta come il suo eroe.',
        en: 'A very tall, thin man of the Donquixote family in a light-coloured hat, whom the colosseum presents as its hero.',
      },
      visual: { art: 'diamante', tint: 'red' },
    },
    {
      id: 'pica',
      kind: 'character',
      // Until 651 he is only a shape in shadow. Wicca names him with a picture
      // of him at 652 (chapter 722) (#277).
      revealedAtEpisode: 652,
      revealedAtChapter: 722,
      name: { it: 'Pica', en: 'Pica' },
      summary: {
        it: 'Un uomo enorme della famiglia Donquijote che siede sul seggio di picche a palazzo, con il volto nell’ombra.',
        en: 'A huge man of the Donquixote family who sits in the spade seat in the palace, his face in shadow.',
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
        it: 'Un omone della famiglia Donquijote con la cuffietta da neonato, gli occhiali da sole, il bavaglino e il ciuccio in bocca, che la famiglia schiera nel torneo del colosseo.',
        en: 'A big man of the Donquixote family in a baby’s bonnet, sunglasses and a bib, with a dummy in his mouth, whom the family puts forward for the colosseum tournament.',
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
        it: 'Un ragazzino della famiglia Donquijote con un berretto bianco a corna, che il colosseo mostra sul suo schermo tra i combattenti che affronteranno i vincitori di ogni blocco.',
        en: 'A boy of the Donquixote family in a white cap with horns, whom the colosseum shows on its screen among the fighters the winner of each block will face.',
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
        it: 'Un vecchio basso e calvo della famiglia Donquijote, con la barba, gli occhi ridotti a due fessure, una tuta blu con una freccia bianca e i guanti bianchi.',
        en: 'A short, bald old man of the Donquixote family, with a beard, eyes narrowed to slits, a blue jumpsuit with a white arrow and white gloves.',
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
        it: 'Un uomo enorme e tondo della famiglia Donquijote, con un alto berretto rosso a visiera, che il colosseo mostra sul suo schermo tra i combattenti che affronteranno i vincitori di ogni blocco.',
        en: 'A huge round man of the Donquixote family in a tall red peaked cap, whom the colosseum shows on its screen among the fighters the winner of each block will face.',
      },
      visual: { art: 'machvise', tint: 'ocher' },
    },
    {
      id: 'jora',
      kind: 'character',
      // At 635 she is only a voice on the Sunny. She names herself on board
      // at 644 (chapter 714) (#277).
      revealedAtEpisode: 644,
      revealedAtChapter: 714,
      name: { it: 'Jora', en: 'Jora' },
      summary: {
        it: 'Una donna grossa della famiglia Donquijote, con un vestito viola a fiori e gli occhiali rosa a punta, che passa il tempo a palazzo giocando a carte con Lao G.',
        en: 'A large woman of the Donquixote family in a flowered purple dress and pointed pink glasses, who passes her time at the palace playing cards with Lao G.',
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
      // First named, and captioned, at 653 (chapter 723) (#277).
      revealedAtEpisode: 653,
      revealedAtChapter: 723,
      name: { it: 'Gladius', en: 'Gladius' },
      summary: {
        it: 'Un uomo della famiglia Donquijote con il cilindro nero, gli occhialoni e una maschera borchiata sulla bocca, che spara a Baby 5 quando lei si scaglia contro Do Flamingo.',
        en: 'A man of the Donquixote family in a black top hat, goggles and a studded mask over his mouth, who shoots Baby 5 when she turns on Doflamingo.',
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
        it: 'Una voce nascosta nel bosco di Green Bit, che chiede ai marine se sono buoni o cattivi e pretende le loro armi. Quando rifiutano, piccoli esseri troppo veloci per essere visti li spogliano di fucili, mantelli e cappelli.',
        en: 'A hidden voice in the Green Bit forest that asks the Marines whether they are good people or bad and demands their weapons. When they refuse, little people too fast to see strip them of guns, capes and hats.',
      },
      visual: { art: 'leo', tint: 'green' },
    },
    {
      id: 'kyros',
      kind: 'character',
      // His name is said at 673, but his past, as the colosseum's champion
      // and then the king's captain of the guard, is 675, which adapts
      // chapter 742 (#386).
      revealedAtEpisode: 675,
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
        it: 'La principessa del Regno di Tontatta, che Leo chiama egoista e irascibile, e che i Tontatta partono per liberare dalla fabbrica insieme ai loro compagni.',
        en: 'The princess of the Tontatta Kingdom, whom Leo calls selfish and short-tempered, and whom the Tontatta set out to free from the factory along with their friends.',
      },
      visual: { art: 'mansherry', tint: 'pink' },
    },
    {
      id: 'kanjuro',
      kind: 'character',
      // Until episode 691 he is only Kin’emon’s comrade caught in Dressrosa:
      // nobody sees him, his brush or his power. He appears in chapter 754,
      // but 691 runs on into chapter 755 (the ladders), so 755 is the chapter
      // that reaches all of it, and no other entry opens earlier.
      revealedAtEpisode: 691,
      revealedAtChapter: 755,
      name: { it: 'Kanjuro', en: 'Kanjuro' },
      summary: {
        it: 'Un samurai con un pennello grande quanto un remo, che disegna male qualunque cosa e poi la fa prendere vita.',
        en: 'A samurai with a brush as big as an oar, who draws everything badly and then brings it to life.',
      },
      visual: { art: 'kanjuro', tint: 'ocher' },
    },
    {
      id: 'donquixote-rosinante',
      kind: 'character',
      // Episode 704 adapts chapter 765. The chapter stays at 768: later than
      // it needs to be, and nothing here needs it lower (#390).
      revealedAtEpisode: 704,
      revealedAtChapter: 768,
      name: { it: 'Donquijote Rosinante', en: 'Donquixote Rosinante' },
      summary: {
        it: 'Un uomo altissimo travestito da clown che la famiglia crede muto, e che in realtà è un comandante della Marina.',
        en: 'A very tall man dressed as a clown whom the family takes for mute, and who is in truth a Marine commander.',
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
        it: 'Tre anni dopo essere fuggita da Mary Geoise vive su un’isola lontana da casa, e gli abitanti chiedono ai Pirati del Sole di riportarla dai genitori. A bordo ringrazia Fisher Tiger, sorride sempre e pulisce il ponte senza fermarsi, perché ha paura che la uccidano se smette. Tiger copre il marchio da schiava sulla sua schiena con il simbolo del sole, le dice che può piangere e promette che la porteranno a casa.',
        en: 'Three years after escaping Mary Geoise she lives on an island far from home, and the islanders ask the Sun Pirates to take her back to her parents. Aboard she thanks Fisher Tiger, keeps smiling and scrubs the deck without a break, because she is afraid they will kill her if she stops. Tiger covers the slave mark on her back with the sun, tells her she may cry and promises they will take her home.',
      },
      affiliation: [
        {
          episode: 541,
          value: {
            it: 'Ex schiava, a bordo della nave dei Pirati del Sole',
            en: 'Former slave, aboard the Sun Pirates’ ship',
          },
        },
        {
          // Shown grown up and captioned as a revolutionary at 663 (chapter
          // 731). The officer rank is only in a magazine.
          episode: 663,
          chapter: 731,
          value: {
            it: 'Armata Rivoluzionaria, assistente maestra di karate degli uomini-pesce',
            en: 'Revolutionary Army, assistant Fish-Man Karate instructor',
          },
        },
      ],
      origin: [
        {
          // Named, with the caption "THE GRAND LINE - FOOLSHOUT ISLAND", when
          // the Sun Pirates reach it at 543.
          episode: 543,
          value: {
            it: 'Isola di Foolshout, Rotta Maggiore',
            en: 'Foolshout Island, Grand Line',
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
        it: 'È stato tagliato in tre, e la testa, il busto e le gambe finiscono in angoli diversi dell’isola. Non sopporta i pirati e glielo dice in faccia, poi si inginocchia per ringraziare chi gli riporta il busto. Con la spada taglia anche le fiamme, ed è venuto sull’isola per suo figlio, senza il quale non intende ripartire.',
        en: 'He has been cut into three, and his head, his torso and his legs end up in different corners of the island. He cannot stand pirates and says so to their faces, then kneels to thank the one who brings back his torso. He cuts flame itself with his sword, and he came to the island for his son, whom he will not leave without.',
      },
      affiliation: [
        {
          episode: 598,
          value: {
            it: 'Samurai di Wano, in cerca di suo figlio',
            en: 'Samurai of Wano, in search of his son',
          },
        },
        {
          episode: 927,
          value: { it: 'Nove Foderi Rossi', en: 'Nine Red Scabbards' },
        },
      ],
      origin: [{ episode: 598, value: WANO }],
      epithet: [
        { episode: 598, value: { it: 'Volpe di Fuoco', en: 'Foxfire' } },
      ],
    },
    'brownbeard': {
      role: {
        it: 'Capo dei centauri di Punk Hazard',
        en: 'Boss of the Punk Hazard centaurs',
      },
      log: {
        it: 'Comanda i centauri che sorvegliano l’isola, e ha una taglia che risale ai suoi anni da pirata. Scambia ogni straniero per un complice del samurai che sta facendo a pezzi i suoi uomini, e ordina di sparare prima che qualcuno possa spiegarsi.',
        en: 'He commands the centaurs who guard the island, and he has a bounty from his years as a pirate. He takes every stranger for an accomplice of the samurai who has been cutting down his men, and gives the order to shoot before anyone can explain.',
      },
      affiliation: [
        {
          episode: 584,
          value: {
            it: 'Punk Hazard, capo dei centauri',
            en: 'Punk Hazard, boss of the centaurs',
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
        it: 'I suoi uomini lo chiamano Maestro, e lui dà gli ordini dal laboratorio sotto forma di gas. Voleva che i marine se ne andassero prima di vedere qualcosa, e quando sente che hanno visto i bambini manda in pezzi il bicchiere. Smoker trova le lettere CC su una nave nascosta accanto al laboratorio e fa il suo nome: uno scienziato che un tempo lavorava con Vegapunk.',
        en: 'His men call him the Master, and he gives his orders from the laboratory as a shape of gas. He wanted the Marines sent away before they saw anything, and when he hears that they have seen the children he smashes his glass. Smoker finds the letters CC on a ship hidden beside the laboratory and names him: a scientist who once worked with Vegapunk.',
      },
      affiliation: [
        {
          episode: 588,
          value: {
            it: 'Punk Hazard, padrone del laboratorio',
            en: 'Punk Hazard, master of the laboratory',
          },
        },
        {
          // Law names Joker, the man Caesar answers to, as Doflamingo.
          episode: 599,
          chapter: 673,
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
      epithet: [{ episode: 588, value: { it: 'Maestro', en: 'Master' } }],
      devilFruit: [{ episode: 594, chapter: 664, value: ['gas-gas-fruit'] }],
      bounty: [{ episode: 589, value: 300_000_000 }],
    },
    'monet': {
      role: { it: 'Assistente del laboratorio', en: 'Laboratory assistant' },
      log: {
        it: 'Sorvola l’isola prima che qualcuno sappia il suo nome, poi fa rapporto al padrone del laboratorio: il drago che sorvegliava l’isola e i centauri sono stati battuti, e i pirati presi con la loro nave avevano dei compagni sul lato in fiamme, che arriveranno fra pochi minuti. Li ha riconosciuti: gli mostra il giornale con le foto dei Cappello di Paglia.',
        en: 'She flies over the island before anyone knows her name, then reports to the master of the laboratory: the dragon that guarded the island and the centaurs are beaten, and the pirates taken with their ship had friends on the burning side, who will be there in minutes. She knows who they are: she shows him the newspaper with the Straw Hats’ pictures.',
      },
      status: [
        { episode: 587, value: 'alive' },
        { episode: 620, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 587,
          value: {
            it: 'Punk Hazard, assistente del laboratorio',
            en: 'Punk Hazard, laboratory assistant',
          },
        },
        {
          // Vergo says at 598 that Monet is the agent watching Caesar; at 599
          // Law names the man behind them as Doflamingo.
          episode: 599,
          chapter: 673,
          value: {
            it: 'Agente di Do Flamingo al fianco di Caesar',
            en: 'Doflamingo’s agent at Caesar’s side',
          },
        },
      ],
      devilFruit: [{ episode: 611, chapter: 685, value: ['snow-snow-fruit'] }],
    },
    'vergo': {
      role: { it: 'Vecchia conoscenza di Law', en: 'Law’s old acquaintance' },
      log: {
        it: 'Arriva al laboratorio a bordo di una petroliera con un pezzo di cibo attaccato alla guancia, e Law lo riconosce subito. Lo mette a terra senza sforzo e pretende che lo chiami Vergo-san, non Vergo. Sa che Monet è stata mandata sull’isola per tenere d’occhio Caesar.',
        en: 'He arrives at the laboratory on a tanker with a scrap of food stuck to his cheek, and Law recognises him at once. He knocks Law down without effort and tells him to say Vergo-san, not Vergo. He knows that Monet was sent to the island to keep an eye on Caesar.',
      },
      status: [
        { episode: 598, value: 'alive' },
        { episode: 620, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 599,
          value: {
            it: 'Marina, viceammiraglio della G-5, in segreto uomo di Do Flamingo',
            en: 'Marines, vice admiral of G-5, secretly Doflamingo’s man',
          },
        },
        { episode: 613, value: { it: 'Smascherato', en: 'Exposed' } },
      ],
      epithet: [
        { episode: 606, value: { it: 'Bambù Demoniaco', en: 'Demon Bamboo' } },
      ],
    },
    'momonosuke': {
      role: {
        it: 'Bambino trasformato in drago',
        en: 'Child turned into a dragon',
      },
      log: {
        it: 'Una bambina arrivata sulla stessa nave lo ha visto infilarsi nella stanza segreta del laboratorio e trasformarsi in un piccolo drago, e non lo ha detto a nessuno. Kinemon cerca per tutta l’isola un figlio con lo stesso nome.',
        en: 'A girl who came on the same ship saw him slip into the laboratory’s secret room and turn into a small dragon, and kept it to herself. Kin’emon is searching the island for a son with the same name.',
      },
      affiliation: [
        {
          episode: 620,
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
      origin: [{ episode: 620, value: WANO }],
      devilFruit: [{ episode: 611, value: ['artificial-dragon-dragon-fruit'] }],
    },
    'baby-5': {
      role: { it: 'Sottoposta di Do Flamingo', en: 'Doflamingo’s subordinate' },
      log: {
        it: 'Piomba davanti a Do Flamingo con il braccio trasformato in un cannone e giura che questa volta non lo perdonerà. Le sparano, si rialza e lo attacca con un’ascia, e lui la schiva senza interrompere la telefonata. La chiama una testa calda e la manda sull’isola per i suoi affari.',
        en: 'She bursts in on Doflamingo with her arm turned into a cannon and swears she will not forgive him this time. She is shot down, gets up again and swings an axe at him, and he dodges without breaking off his phone call. He calls her hot-blooded and sends her to the island on his business.',
      },
      affiliation: [
        {
          episode: 618,
          value: {
            it: 'Pirati di Donquijote, assassina e domestica',
            en: 'Donquixote Pirates, assassin and servant',
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
      devilFruit: [{ episode: 620, chapter: 692, value: ['arms-arms-fruit'] }],
    },
    'buffalo': {
      role: {
        it: 'Combattente dei Pirati di Donquijote',
        en: 'Donquixote Pirates combatant',
      },
      log: {
        it: 'Porta in volo Baby 5 fino all’isola girando su sé stesso come un’elica, e chiude quasi ogni frase con lo stesso intercalare. Le dice che deve imparare a dire di no, e un attimo dopo le chiede dei soldi in prestito. Girando solleva un vento abbastanza forte da spazzare via parte del gas sull’isola.',
        en: 'He flies Baby 5 to the island by spinning like a propeller, and ends almost every sentence with the same verbal tic. He tells her she has to learn to say no, then asks to borrow money from her in the same breath. His spinning raises a wind strong enough to blow back the gas over the island.',
      },
      affiliation: [
        {
          episode: 618,
          value: {
            it: 'Pirati di Donquijote, combattente',
            en: 'Donquixote Pirates, combatant',
          },
        },
      ],
      devilFruit: [{ episode: 618, value: ['spin-spin-fruit'] }],
    },
    'rebecca': {
      role: { it: 'Gladiatrice del colosseo', en: 'Colosseum gladiator' },
      log: {
        it: 'Nel colosseo non ha mai perso un incontro, e altri due combattenti la prendono in giro dicendo che tutti aspettano di vederla battuta. Ringrazia il nuovo arrivato che ha messo al tappeto Spartan, un gladiatore che l’ha tormentata per anni, e gli racconta della statua di un campione che nel paese nessuno ricorda. Questo torneo sarà il suo ultimo, dice: vuole vincere il Frutto Foco Foco e uccidere Do Flamingo.',
        en: 'She has never lost a match in the colosseum, and two other fighters tease her that everyone is waiting to see her beaten. She thanks the newcomer who knocked out Spartan, a gladiator who bullied her for years, and tells him about the statue of a champion nobody in the country remembers. This tournament will be her last, she says: she means to win the Flame-Flame Fruit and kill Doflamingo.',
      },
      affiliation: [
        {
          episode: 634,
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
      origin: [{ episode: 651, value: DRESSROSA }],
      epithet: [
        {
          episode: 634,
          value: { it: 'La Donna Invitta', en: 'the Undefeated Woman' },
        },
        {
          episode: 651,
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
        it: 'Al tavolo della roulette i croupier continuano a dire nero e lui continua a perdere, perché non può vedere la ruota. Quando i loro uomini gli si rivoltano contro chiede a un ragazzo di spostarsi, li schiaccia sotto un peso che lascia un buco nel pavimento, dice che certe brutture è meglio non vederle e si offre di pagare i danni. Più tardi un aiutante gli porge il mantello, e lui chiede navi e medici e vuole contare prima le persone da proteggere che i nemici.',
        en: 'At the roulette table the croupiers keep calling black and he keeps losing, because he cannot see the wheel. When their men turn on him he asks a young man to step aside, crushes them under a weight that leaves a hole in the floor, says some ugly things are better unseen and offers to pay for the repairs. Later an aide hands him his coat, and he asks for ships and medics and wants to count the people he has to protect before the enemy.',
      },
      affiliation: [
        {
          episode: 634,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
      ],
      epithet: [{ episode: 634, value: { it: 'Fujitora', en: 'Fujitora' } }],
      devilFruit: [{ episode: 634, value: ['press-press-fruit'] }],
    },
    'bartolomeo': {
      role: { it: 'Capitano pirata', en: 'Pirate captain' },
      log: {
        it: 'Nel colosseo un viceammiraglio sotto copertura mette fuori combattimento Gambia, uno dei suoi uomini, e Bartolomeo lo stende a sua volta. Quando entra nel ring per il blocco B, l’annunciatore racconta che ha infilzato dei pirati e ha diffuso il video, che ha attaccato dei civili innocenti e che è primo nella classifica dei pirati che la gente vorrebbe veder sparire. Lui alza le braccia e manda tutti all’inferno.',
        en: 'In the colosseum a vice admiral undercover takes out Gambia, one of his men, and Bartolomeo floors the vice admiral in return. As he walks into the ring for Block B, the announcer tells how he skewered pirates and broadcast it, attacked innocent civilians and came first in a ranking of the pirates people most want gone. He raises his arms and tells everyone to go to hell.',
      },
      affiliation: [
        {
          episode: 636,
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
        { episode: 636, value: { it: 'Il Cannibale', en: 'the Cannibal' } },
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
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'Non si stacca mai dal fianco del suo capo e lo asseconda in tutto, con una risata che somiglia a un raschio. Il suo corpo produce un muco che invischia chiunque lo tocchi e che indurisce fino a diventare una gabbia. Agli altri della famiglia parla come un vecchio zio, e non è chiaro quanto di quella bonarietà sia recitato.',
        en: 'He never leaves his boss’s side and agrees with everything he says, laughing a laugh that sounds like a scrape. His body makes a mucus that mires whoever touches it and hardens into a cage. He speaks to the rest of the family like an old uncle, and how much of that good humour is an act is not clear.',
      },
      affiliation: [
        { episode: 632, value: DONQUIXOTE_PIRATES },
        {
          episode: 652,
          chapter: 722,
          value: {
            it: 'Pirati di Donquijote, ufficiale supremo',
            en: 'Donquixote Pirates, elite officer',
          },
        },
      ],
      devilFruit: [{ episode: 669, value: ['stick-stick-fruit'] }],
    },
    'cavendish': {
      role: {
        it: 'Pirata iscritto al torneo del colosseo',
        en: 'Pirate in the colosseum tournament',
      },
      log: {
        it: 'Quando entra nella sala d’attesa le addette svengono, e i combattenti lo riconoscono subito, stupiti che sia ancora vivo. Ferma Lucy, che sta provando un’armatura e una grossa spada, per avvertirlo che c’è un limite di peso per l’equipaggiamento. Poi dice che vincerà il Frutto Foco Foco, un potere bellissimo che spetta soltanto a lui.',
        en: 'When he walks into the waiting room the women of the staff faint, and the fighters know him at once, surprised that he is still alive. He stops Lucy, who is trying on armour and a big sword, to warn him that there is a weight limit on gear. Then he says he will win the Flame-Flame Fruit, a beautiful power that belongs to him alone.',
      },
      affiliation: [
        {
          episode: 634,
          value: {
            it: 'Pirati Beautiful, capitano',
            en: 'Beautiful Pirates, captain',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      epithet: [
        {
          episode: 634,
          value: {
            it: 'Il Principe Pirata; Cavallo Bianco',
            en: 'the Pirate Prince; White Horse',
          },
        },
      ],
      bounty: [{ episode: 634, value: 280_000_000 }],
    },
    'sai': {
      role: {
        it: 'Giovane della famiglia Chinjao',
        en: 'Young man of the Chinjao family',
      },
      log: {
        it: 'Arriva al colosseo con il fratello Boo e con Don Chinjao, con un mantello scuro dal grande colletto bianco a gorgiera. Quando un addetto vuole squalificare Lucy, gli dice che la rissa l’ha cominciata Spartan e che è lui quello da cacciare. Poi Lucy lo ringrazia e lui si infuria, finché Boo non lo trascina via scusandosi: si scalda facilmente.',
        en: 'He comes to the colosseum with his brother Boo and Don Chinjao, in a dark cape with a great white ruff. When a member of the staff moves to disqualify Lucy, he says Spartan started the fight and is the one to throw out. Then Lucy thanks him and he flies into a rage, until Boo drags him off with an apology: he gets worked up easily.',
      },
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Famiglia Chinjao, Regno di Kano',
            en: 'Chinjao family, Kano Kingdom',
          },
        },
        {
          episode: 645,
          value: {
            it: 'Flotta Happo, tredicesimo capo',
            en: 'Happo Navy, thirteenth leader',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        { episode: 633, value: { it: 'Paese di Kano', en: 'Kano Country' } },
      ],
    },
    'don-chinjao': {
      role: {
        it: 'Capo della famiglia Chinjao',
        en: 'Leader of the Chinjao family',
      },
      log: {
        it: 'Arriva al colosseo con Sai e Boo della famiglia Chinjao, e i combattenti nella sala d’attesa conoscono il suo nome e lo chiamano una leggenda. Non dice una parola mentre Sai difende Lucy davanti allo staff del colosseo.',
        en: 'He comes to the colosseum with Sai and Boo of the Chinjao family, and the fighters in the waiting room know his name and call him a legend. He says nothing while Sai stands up for Lucy against the colosseum staff.',
      },
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Famiglia Chinjao, Regno di Kano',
            en: 'Chinjao family, Kano Kingdom',
          },
        },
        {
          episode: 645,
          value: {
            it: 'Flotta Happo, dodicesimo capo, in pensione',
            en: 'Happo Navy, twelfth leader, retired',
          },
        },
      ],
      origin: [
        { episode: 633, value: { it: 'Paese di Kano', en: 'Kano Country' } },
      ],
      // The epithet is told in chapter 717, which 647 adapts (#277).
      epithet: [
        {
          episode: 647,
          chapter: 717,
          value: { it: 'La Trivella', en: 'the Drill' },
        },
      ],
      bounty: [{ episode: 645, value: 500_000_000 }],
    },
    'ideo': {
      role: { it: 'Combattente del colosseo', en: 'Colosseum fighter' },
      log: {
        it: 'Prima che cominci il blocco C, Gats lo nomina per primo fra i combattenti da tenere d’occhio: Cannone Distruttore, due volte campione del Torneo Centrale di Lotta del Nuovo Mondo.',
        en: 'Before Block C begins, Gatz names him first among the fighters to watch: Destruction Cannon, twice champion of the New World Central Fighting Tournament.',
      },
      affiliation: [
        {
          // The alliance is formed on Orlumbus's ship, chapter 799.
          episode: 744,
          chapter: 799,
          value: {
            it: 'Alleanza di arti marziali della palestra XXX',
            en: 'XXX Gym Martial Arts Alliance',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      epithet: [
        {
          episode: 639,
          value: { it: 'Cannone Distruttore', en: 'Destruction Cannon' },
        },
      ],
    },
    'blue-gilly': {
      role: { it: 'Combattente del colosseo', en: 'Colosseum fighter' },
      log: {
        it: 'Ha gambe lunghe il doppio delle nostre e ha fatto dei calci una disciplina con un nome preciso. Nell’arena non usa mai le mani e si sposta a scatti, comparendo dove nessuno lo aspetta. Del premio in palio dice soltanto che gli serve, e non aggiunge altro.',
        en: 'His legs are twice the length of ours, and he has made kicking a discipline with a name of its own. In the arena he never uses his hands and moves in bursts, appearing where nobody expects him. Of the prize he says only that he needs it, and nothing more.',
      },
      affiliation: [
        {
          episode: 636,
          value: { it: 'Combattente del colosseo', en: 'Colosseum fighter' },
        },
        {
          episode: 690,
          value: {
            it: 'Combattente della Tribù dalle Gambe Lunghe',
            en: 'Longleg Tribe fighter',
          },
        },
        { episode: 746, value: GRAND_FLEET },
      ],
      origin: [
        {
          episode: 690,
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
          episode: 633,
          value: { it: 'Re di Prodence', en: 'King of Prodence' },
        },
      ],
      origin: [
        {
          episode: 633,
          value: { it: 'Regno di Prodence', en: 'Prodence Kingdom' },
        },
      ],
      epithet: [
        {
          episode: 633,
          value: { it: 'Il Re Combattente', en: 'the Fighting King' },
        },
      ],
    },
    'hajrudin': {
      role: { it: 'Mercenario gigante', en: 'Giant mercenary' },
      log: {
        it: 'Viene da Elbaf, il celebre paese dei giganti. Al Colosseo Corrida l’annunciatore lo presenta tra i combattenti del blocco C come il più temibile dei mercenari pirati.',
        en: 'He comes from Elbaph, the famous country of the giants. At the Corrida Colosseum the announcer presents him among the fighters of Block C as the most formidable pirate mercenary of all.',
      },
      affiliation: [
        {
          episode: 639,
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
      origin: [{ episode: 639, value: { it: 'Elbaf', en: 'Elbaph' } }],
    },
    'bastille': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'Aspetta fuori dal Colosseo Corrida con una folla di marine, pronto ad arrestare i criminali man mano che escono, ma centinaia di combattenti hanno perso nei blocchi A e B e nessuno è uscito. È furioso con il viceammiraglio Maynard, che si è infiltrato fra i combattenti di testa sua e da allora non si è più fatto sentire, e comincia a sospettare che dentro stia succedendo qualcosa.',
        en: 'He waits outside the Corrida Colosseum with a crowd of Marines, ready to arrest the criminals as they come out, but hundreds of fighters have lost in Blocks A and B and not one has left. He is angry with Vice Admiral Maynard, who went undercover as a fighter on his own and has not been heard from since, and he begins to suspect that something is going on inside.',
      },
      affiliation: [
        {
          episode: 647,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      // The epithet is told in chapter 717, which 647 adapts (#277).
      epithet: [
        {
          episode: 647,
          chapter: 717,
          value: { it: 'Tagliasqualo', en: 'Shark Cutter' },
        },
      ],
    },
    'maynard': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È un istruttore della Marina noto per aver messo in riga generazioni di reclute, e ha la fama di non perdere mai di vista una preda. Si mescola ai gladiatori e studia i favoriti del torneo uno per uno. Quello che vede nell’arena lo preoccupa più di quanto si aspettasse, e non riesce a farlo sapere a nessuno.',
        en: 'He is a Marine instructor known for straightening out generations of recruits, with a name for never losing sight of his quarry. He mixes with the gladiators and studies the tournament favourites one by one. What he sees in the arena worries him more than he expected, and he cannot get word of it to anybody.',
      },
      affiliation: [
        {
          episode: 634,
          value: {
            it: 'Marina, viceammiraglio, nel colosseo',
            en: 'Marines, vice admiral, in the colosseum',
          },
        },
        {
          episode: 647,
          value: {
            it: 'Marina, viceammiraglio, sotto copertura nel colosseo',
            en: 'Marines, vice admiral, undercover in the colosseum',
          },
        },
      ],
      epithet: [
        { episode: 634, value: { it: 'Il Cacciatore', en: 'the Pursuer' } },
      ],
    },
    'hack': {
      role: {
        it: 'Maestro di karate degli uomini-pesce',
        en: 'Fish-man karate master',
      },
      log: {
        it: 'Quando l’annunciatore presenta i combattenti del blocco B, lo chiama maestro di karate degli uomini-pesce ed esperto di jujitsu degli uomini-pesce.',
        en: 'When the announcer introduces the fighters of Block B, he calls him a master of fish-man karate and a martial artist of fish-man jujutsu.',
      },
      affiliation: [
        {
          episode: 636,
          value: { it: 'Gladiatore del colosseo', en: 'Colosseum gladiator' },
        },
        {
          episode: 679,
          value: {
            it: 'Gladiatore del colosseo; Armata Rivoluzionaria',
            en: 'Colosseum gladiator; Revolutionary Army',
          },
        },
      ],
      origin: [
        {
          episode: 636,
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
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'Siede accanto a Do Flamingo fuori dal palazzo e mangia acini d’uva dalle dita mentre Baby 5 lo attacca. Quando lui lascia il palazzo, va a cercarlo e dice a Lao G che la sua stanza è vuota e la finestra spalancata.',
        en: 'She sits beside Doflamingo outside the palace and eats grapes off her fingers while Baby 5 attacks him. When he leaves the palace, she goes looking for him and tells Lao G that his room is empty and the window wide open.',
      },
      affiliation: [
        { episode: 663, value: DONQUIXOTE_PIRATES },
        { episode: 664, chapter: 732, value: TREBOL_ARMY },
      ],
      devilFruit: [
        { episode: 663, chapter: 731, value: ['hobby-hobby-fruit'] },
      ],
    },
    'diamante': {
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'Do Flamingo gli lascia in custodia il frutto del diavolo che è il premio del torneo del colosseo. Quando il torneo va in onda, l’annunciatore lo presenta per ultimo, dopo altri quattro membri della famiglia, come l’eroe del colosseo.',
        en: 'Doflamingo leaves in his keeping the devil fruit that is the prize of the colosseum tournament. When the tournament is broadcast, the announcer presents him last, after four other members of the family, as the hero of the colosseum.',
      },
      affiliation: [
        {
          episode: 633,
          value: {
            it: 'Pirati di Donquijote; eroe del colosseo',
            en: 'Donquixote Pirates; colosseum hero',
          },
        },
        {
          episode: 652,
          chapter: 722,
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
      devilFruit: [
        { episode: 668, chapter: 736, value: ['ripple-ripple-fruit'] },
      ],
    },
    'pica': {
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'Siede a palazzo con Diamante e Trebol mentre Do Flamingo affida a Diamante il premio del colosseo. I seggi dei membri più vicini della famiglia sono segnati con i semi delle carte, e il suo è quello di picche. Resta nell’ombra e non dice niente.',
        en: 'He sits in the palace with Diamante and Trebol while Doflamingo leaves the colosseum’s prize with Diamante. The seats of the family’s closest members are marked with card suits, and his is the spade. He stays in shadow and says nothing.',
      },
      affiliation: [
        {
          episode: 652,
          chapter: 722,
          value: {
            it: 'Pirati di Donquijote, ufficiale supremo',
            en: 'Donquixote Pirates, elite officer',
          },
        },
      ],
      devilFruit: [
        { episode: 669, chapter: 737, value: ['stone-stone-fruit'] },
      ],
    },
    'senor-pink': {
      role: {
        it: 'Gangster della famiglia Donquijote',
        en: 'Gangster of the Donquixote family',
      },
      log: {
        it: 'Porta una cuffietta rosa, occhiali da aviatore, una sciarpa a pois e un bavaglino, con il ciuccio in bocca. Quando il colosseo trasmette il torneo, è il primo membro della famiglia a essere presentato, prima di Diamante.',
        en: 'He wears a pink bonnet, aviator sunglasses, a polka-dot scarf and a bib, with a dummy in his mouth. When the colosseum broadcasts the tournament, he is the first member of the family it presents, before Diamante.',
      },
      affiliation: [
        { episode: 635, value: DONQUIXOTE_PIRATES },
        { episode: 664, chapter: 732, value: DIAMANTE_ARMY },
      ],
      devilFruit: [{ episode: 667, chapter: 735, value: ['swim-swim-fruit'] }],
    },
    'dellinger': {
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'Quando il colosseo apre il torneo, l’annunciatore lo presenta sullo schermo come uno dei quattro membri della famiglia Donquijote che affronteranno il vincitore di ogni blocco, dopo Señor Pink e prima di Lao G. Sullo schermo porta un berretto bianco con un corno per lato.',
        en: 'When the colosseum opens the tournament, the announcer presents him on the screen as one of the four members of the Donquixote family who will face the winner of each block, after Señor Pink and before Lao G. On the screen he wears a white cap with a horn on each side.',
      },
      affiliation: [
        { episode: 635, value: DONQUIXOTE_PIRATES },
        { episode: 664, chapter: 732, value: DIAMANTE_ARMY },
      ],
    },
    'lao-g': {
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'A palazzo gioca a carte con altri della famiglia. Quando Do Flamingo non si trova, pensa alla stanza al quarto piano, poi dice che è uscito di nuovo da solo. Quando i giornali riportano che Do Flamingo ha lasciato la Flotta dei Sette, risponde che la famiglia farà ciò che decide il suo capo. Al colosseo lo schermo lo presenta tra i combattenti della famiglia nel torneo, dopo Dellinger e prima di Machvise.',
        en: 'At the palace he plays cards with others of the family. When Doflamingo cannot be found, he guesses the room on the fourth floor, then says he has gone out on his own again. When the papers report that Doflamingo has quit the Seven Warlords, he answers that the family does as the Young Master decides. At the colosseum the screen presents him among the family’s fighters in the tournament, after Dellinger and before Machvise.',
      },
      affiliation: [
        { episode: 635, value: DONQUIXOTE_PIRATES },
        { episode: 664, chapter: 732, value: DIAMANTE_ARMY },
      ],
    },
    'machvise': {
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'È a palazzo alle spalle di Do Flamingo quando Baby 5 lo attacca, e le dice di calmarsi. Quando Do Flamingo annuncia di aver lasciato la Flotta dei Sette, dice che se la Marina viene ad attaccare vuole combattere anche lui. Al torneo del colosseo l’annunciatore lo presenta sullo schermo come uno dei quattro membri della famiglia che affronteranno il vincitore di ogni blocco.',
        en: 'He is at the palace behind Doflamingo when Baby 5 attacks him, and tells her to calm down. When Doflamingo announces he has left the Seven Warlords, he says that if the Navy comes to attack, he wants to fight too. At the colosseum tournament the announcer presents him on the screen as one of the four members of the family the winner of each block will face.',
      },
      affiliation: [
        { episode: 635, value: DONQUIXOTE_PIRATES },
        { episode: 664, chapter: 732, value: DIAMANTE_ARMY },
      ],
      devilFruit: [{ episode: 682, chapter: 747, value: ['ton-ton-fruit'] }],
    },
    'jora': {
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'Gioca a carte con Lao G a palazzo. Quando Trebol chiede per scherzo a Baby 5 di sposarlo e lei si domanda se lui abbia davvero bisogno di lei, lei e Lao G le dicono di lasciar perdere.',
        en: 'She plays cards with Lao G at the palace. When Trebol proposes to Baby 5 as a joke and she wonders whether he really needs her, she and Lao G tell her to leave it alone.',
      },
      affiliation: [
        { episode: 644, value: DONQUIXOTE_PIRATES },
        { episode: 664, chapter: 732, value: TREBOL_ARMY },
      ],
      devilFruit: [{ episode: 648, chapter: 718, value: ['art-art-fruit'] }],
    },
    'orlumbus': {
      role: {
        it: 'Ammiraglio della Grande Flotta Yonta Maria',
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
      role: DONQUIXOTE_MEMBER_ROLE,
      log: {
        it: 'Porta un lungo cappotto nero con le borchie dorate, gli occhialoni e una maschera bianca sulla metà inferiore del viso. Quando Baby 5 attacca Do Flamingo fuori dal palazzo, le spara per calmarla.',
        en: 'He wears a long black coat studded with gold, goggles and a white mask over the lower half of his face. When Baby 5 attacks Doflamingo outside the palace, he shoots her to calm her down.',
      },
      affiliation: [
        { episode: 653, value: DONQUIXOTE_PIRATES },
        {
          episode: 664,
          chapter: 732,
          value: {
            it: 'Pirati di Donquijote, ufficiale dell’Armata Pica',
            en: 'Donquixote Pirates, Pica Army officer',
          },
        },
      ],
      devilFruit: [{ episode: 673, chapter: 740, value: ['pop-pop-fruit'] }],
    },
    'leo': {
      role: {
        it: 'Voce nascosta di Green Bit',
        en: 'Hidden voice of Green Bit',
      },
      log: {
        it: 'Si nasconde nel bosco di Green Bit e chiama una squadra di marine a caccia dei Cappello di Paglia: sono buoni o cattivi? Rispondono buoni, e lui ordina di consegnare le armi. Quando rifiutano, fucili, mantelli e cappelli spariscono loro di dosso più in fretta di quanto l’occhio riesca a seguire, e una vocina dice che così imparano.',
        en: 'He hides in the Green Bit forest and calls out to a squad of Marines hunting the Straw Hats: are they good people or bad? They say good, and he tells them to hand over their weapons. When they refuse, guns, capes and hats vanish off them faster than the eye can follow, and a little voice says that will teach them.',
      },
      affiliation: [
        {
          episode: 641,
          value: {
            it: 'Regno di Tontatta, guerriero',
            en: 'Tontatta Kingdom, warrior',
          },
        },
        {
          episode: 744,
          value: {
            it: 'Regno di Tontatta, capo del Corpo Tonta',
            en: 'Tontatta Kingdom, Tonta Corps leader',
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
      devilFruit: [{ episode: 641, value: ['stitch-stitch-fruit'] }],
    },
    'kyros': {
      role: {
        it: 'Soldatino di legno di Dressrosa',
        en: 'Wooden soldier of Dressrosa',
      },
      log: {
        it: 'Per tutti è il Soldatino, un soldatino giocattolo con una gamba sola, un pattino a rotelle e un fucile giocattolo, che guida la lotta contro il re. Il suo vero nome è Kyros: ha vinto tremila incontri nel colosseo, poi lo ha lasciato su richiesta del re per diventare capitano della guardia. Nessuno se lo ricorda, e lui combatte lo stesso per una famiglia che non sa più chi sia.',
        en: 'To everyone he is the Thunder Soldier, a one-legged toy soldier on a roller skate with a toy rifle, who leads the fight against the king. His real name is Kyros: he won three thousand bouts in the colosseum, then left it at the king’s wish to become captain of the guard. Nobody remembers him, and he fights all the same for a family that no longer knows who he is.',
      },
      affiliation: [
        {
          episode: 675,
          value: {
            it: 'Famiglia reale Riku, ex comandante dell’esercito; un tempo campione imbattuto del colosseo',
            en: 'Riku royal family, former army commander; once the colosseum’s undefeated champion',
          },
        },
      ],
      origin: [{ episode: 675, value: DRESSROSA }],
      epithet: [
        { episode: 675, value: { it: 'Soldatino', en: 'Thunder Soldier' } },
      ],
    },
    'mansherry': {
      role: {
        it: 'Principessa del Regno di Tontatta',
        en: 'Princess of the Tontatta Kingdom',
      },
      log: {
        it: 'Leo la chiama antipatica, egoista, cattiva, lunatica e irascibile, ma i Tontatta vogliono salvarla lo stesso, perché è una di loro. Credono che sia tenuta nella fabbrica insieme ai loro compagni. Lì chi comanda dice ai Tontatta che è malata, che solo gli SMILE che coltivano possono guarirla e che non possono vederla: una bugia che li tiene al lavoro.',
        en: 'Leo calls her obnoxious, selfish, mean, moody and short-tempered, and still the Tontatta mean to save her, because she is one of them. They believe she is held at the factory with their friends. There the men in charge tell the Tontatta that she is ill, that only the SMILEs they grow can cure her and that they may not see her: a lie that keeps them at work.',
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
      devilFruit: [{ episode: 714, chapter: 774, value: ['heal-heal-fruit'] }],
    },
    'kanjuro': {
      role: { it: 'Samurai di Wano', en: 'Samurai of Wano' },
      log: {
        it: 'È il compagno che i soldati di Dressrosa hanno catturato mentre copriva la fuga di Kinemon. Kinemon lo ritrova nella discarica sotto la città, nascosto dentro un muro, dove si è sfamato con i cavoli che disegna e fa prendere vita. Porta sulle spalle un pennello grande quanto un remo. Per uscire disegna un uccello sul muro e lo fa prendere vita, ma è disegnato così male che sembra a malapena in grado di volare.',
        en: 'He is the comrade Dressrosa’s soldiers caught while he covered Kin’emon’s escape. Kin’emon finds him in the scrap heap under the town, hiding inside a wall, where he has fed himself on cabbages he draws and brings to life. He carries a brush as big as an oar on his back. To get out he draws a bird on the wall and brings it to life, but it is drawn so badly that it hardly looks able to fly.',
      },
      status: [
        { episode: 691, value: 'alive' },
        { episode: 1055, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 691,
          value: {
            it: 'Samurai di Wano, compagno di Kin’emon',
            en: 'Samurai of Wano, Kin’emon’s companion',
          },
        },
        {
          episode: 955,
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
      origin: [{ episode: 691, value: WANO }],
      epithet: [
        {
          episode: 691,
          value: { it: 'Acquazzone della Sera', en: 'Evening Shower' },
        },
      ],
      // Filed at 985 and not at 691: the drawings come alive long before the
      // story says what the fruit is called, and the field carries fruit ids
      // now, so an entry at 691 would print the name early.
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
        it: 'Si butta da un’isola del cielo in cerca di un posto dove morire, cade sul rifugio dei Pirati di Kid aprendo una buca nel terreno e ne risale imprecando perché è ancora vivo. È uno dei quattro Imperatori che si dividono il Nuovo Mondo, e ha una ciurma che prende il nome dalle bestie. È stato sconfitto, catturato e condannato a morte molte volte, ma ogni esecuzione è fallita, e nessuno è mai riuscito a ucciderlo, nemmeno lui stesso.',
        en: 'He jumps off a sky island looking for a place to die, lands on the Kid Pirates’ hideout, leaving a hole in the ground, and climbs out of it cursing that he is still alive. He is one of the four Emperors who divide the New World between them, and his crew takes its name from beasts. He has been defeated, captured and sentenced to death many times, but every execution failed, and nobody has managed to kill him, not even himself.',
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
          episode: 1014,
          chapter: 999,
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
      // The fruit is told in chapter 716, which 646 adapts whole.
      devilFruit: [
        { episode: 646, chapter: 716, value: ['jacket-jacket-fruit'] },
      ],
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
