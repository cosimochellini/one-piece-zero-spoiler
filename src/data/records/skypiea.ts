import type { Saga } from './saga'
import { skypieaChronicles } from './skypiea.chronicle'

/**
 * The Sky Island saga, episodes 136 to 206: a fallen ship from the clouds,
 * a town that laughs at dreams, and an island above the sea.
 */

const SHANDIA = { it: 'Guerrieri shandia', en: 'Shandia warriors' }
const SHANDIA_WARRIOR = { it: 'Guerriero shandia', en: 'Shandia warrior' }
const SKY_ISLAND = { it: 'Skypiea', en: 'Skypiea' }
const ENEL_PRIESTS = { it: 'Sacerdoti di Ener', en: 'Enel’s priests' }
const ENEL_PRIEST = { it: 'Sacerdote di Ener', en: 'One of Enel’s priests' }

export const skypiea: Saga = {
  entries: [
    {
      id: 'jaya-arc',
      kind: 'arc',
      revealedAtEpisode: 144,
      revealedAtChapter: 218,
      name: { it: 'Jaya', en: 'Jaya' },
      summary: {
        it: 'Una nave cade dal cielo, il Log Pose punta dritto verso l’alto, e la ciurma cerca su un’isola di pirati qualcuno che sappia dove porta.',
        en: 'A ship falls out of the sky, the Log Pose points straight up, and the crew looks on an island of pirates for anyone who knows where it leads.',
      },
      visual: { art: 'jaya-arc', tint: 'orange' },
    },
    {
      id: 'jaya',
      kind: 'place',
      revealedAtEpisode: 146,
      revealedAtChapter: 222,
      name: { it: 'Jaya', en: 'Jaya' },
      summary: {
        it: 'Un’isola primaverile della Rotta Maggiore. Il suo porto, Mock Town, è pieno di pirati che sperperano il bottino, e lì le risse e gli omicidi sono normali.',
        en: 'A spring island on the Grand Line. Its port, Mock Town, is full of pirates spending their loot, and brawls and murders there are an everyday thing.',
      },
      visual: { art: 'jaya', tint: 'ocher' },
    },
    {
      id: 'masira',
      kind: 'character',
      revealedAtEpisode: 144,
      revealedAtChapter: 222,
      name: { it: 'Masira', en: 'Masira' },
      summary: {
        it: 'Il Re dei Recuperi: un omone dall’aria da scimmia, con tuta arancione, occhialoni e cuffie, che reclama ogni nave affondata nel suo tratto di mare e la riporta a galla soffiandoci dentro aria.',
        en: 'The Salvage King, a huge ape-like man in an orange jumpsuit, goggles and headphones, who claims every ship that sinks in his stretch of sea and raises it by blowing air into it.',
      },
      visual: { art: 'masira', tint: 'orange' },
    },
    {
      id: 'shoujou',
      kind: 'character',
      revealedAtEpisode: 147,
      revealedAtChapter: 226,
      name: { it: 'Shojo', en: 'Shoujou' },
      summary: {
        it: 'Il Re del Sonar: un colosso che beve rum, pretende una tassa da chi passa nel suo tratto di mare e con la voce manda onde sonore che fanno a pezzi le navi.',
        en: 'The Sonar King, a giant who drinks rum, charges a toll to anyone crossing his stretch of sea, and sends out sound waves with his voice that shake ships to pieces.',
      },
      visual: { art: 'shoujou', tint: 'violet' },
    },
    {
      id: 'bellamy',
      kind: 'character',
      revealedAtEpisode: 146,
      revealedAtChapter: 224,
      name: { it: 'Bellamy', en: 'Bellamy' },
      summary: {
        it: 'Il pirata che tiene Mock Town in pugno: pesta un capitano che lo ha battuto a carte e ride di chiunque creda ancora in un’isola nel cielo.',
        en: 'The pirate who runs Mock Town: he beats up a captain who won a hand of cards against him, and laughs at anyone who still believes in an island in the sky.',
      },
      visual: { art: 'bellamy', tint: 'azure' },
    },
    {
      id: 'roshio',
      kind: 'character',
      revealedAtEpisode: 146,
      revealedAtChapter: 224,
      // Rounded up to 224, the chapter that files Bellamy, whom the text names.
      name: { it: 'Roshio', en: 'Roshio' },
      summary: {
        it: 'Un capitano pirata con lunghi dreadlock bianchi e il simbolo di un impiccato sulla fascia, che a Mock Town vince una mano a carte contro l’uomo sbagliato.',
        en: 'A pirate captain with long white dreadlocks and a hanged-man mark on his headband, who wins a hand of cards in Mock Town against the wrong man.',
      },
      visual: { art: 'roshio', tint: 'red' },
    },
    {
      id: 'sarquiss',
      kind: 'character',
      revealedAtEpisode: 146,
      revealedAtChapter: 224,
      // Rounded up to 224, the chapter that files Bellamy, whom the text names.
      name: { it: 'Cirkeys', en: 'Sarquiss' },
      summary: {
        it: 'Il braccio destro di Bellamy a Mock Town, un uomo alto con una pelliccia bianca e gli occhiali colorati, che getta soldi agli sconosciuti perché si comprino dei vestiti decenti.',
        en: 'Bellamy’s right hand in Mock Town, a tall man in a white fur coat and tinted glasses who throws money at strangers so they can buy themselves some decent clothes.',
      },
      visual: { art: 'sarquiss', tint: 'magenta' },
    },
    {
      id: 'montblanc-cricket',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 229,
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
      revealedAtChapter: 234,
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
      revealedAtChapter: 233,
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
      revealedAtChapter: 234,
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
      revealedAtEpisode: 151,
      revealedAtChapter: 234,
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
      revealedAtEpisode: 151,
      revealedAtChapter: 233,
      name: { it: 'Donquijote Do Flamingo', en: 'Donquixote Doflamingo' },
      summary: {
        it: 'Un membro della Flotta dei Sette con un cappotto di piume rosa e occhiali da sole, che si presenta alle riunioni del Governo Mondiale per divertimento e fa muovere gli altri come marionette.',
        en: 'A member of the Seven Warlords in a pink feather coat and sunglasses, who attends World Government meetings for the fun of it and moves other people like puppets.',
      },
      visual: { art: 'donquixote-doflamingo', tint: 'flamingo' },
    },
    {
      id: 'rockstar',
      kind: 'character',
      revealedAtEpisode: 151,
      revealedAtChapter: 234,
      name: { it: 'Rockstar', en: 'Rockstar' },
      summary: {
        it: 'Un nuovo arrivato fra i Pirati del Rosso, con i capelli rossi a punte e una sciabola al fianco, mandato per mare a consegnare nelle mani di Barbabianca una lettera del suo capitano.',
        en: 'A new man in the Red Hair Pirates, red hair spiked up and a sabre at his hip, sent across the sea to put a letter from his captain into Whitebeard’s hands.',
      },
      visual: { art: 'rockstar', tint: 'vermilion' },
    },
    {
      id: 'marco',
      kind: 'character',
      // Seen on Whitebeard's deck at 151, named only when Shanks greets him at 316.
      revealedAtEpisode: 316,
      revealedAtChapter: 434,
      name: { it: 'Marco', en: 'Marco' },
      summary: {
        it: 'Il comandante della prima divisione dei Pirati di Barbabianca, che resta in piedi quando Shanks sale a bordo e risponde alla sua offerta di unirsi a lui con un “Sta’ zitto”.',
        en: 'The first division commander of the Whitebeard Pirates, who stays on his feet when Shanks comes aboard and answers his offer to join him with “Shut up”.',
      },
      visual: { art: 'marco', tint: 'cyan' },
    },
    {
      id: 'skypiea',
      kind: 'arc',
      revealedAtEpisode: 153,
      revealedAtChapter: 237,
      name: { it: 'Saga di Skypiea', en: 'Skypiea Saga' },
      summary: {
        it: 'Un’isola sospesa sopra il mare, raggiunta da una corrente che spara le navi verso l’alto.',
        en: 'An island suspended above the sea, reached by a current that fires ships upward.',
      },
      visual: { art: 'skypiea', tint: 'azure' },
    },
    {
      id: 'gan-fall',
      kind: 'character',
      revealedAtEpisode: 153,
      revealedAtChapter: 241,
      name: { it: 'Gan Fall', en: 'Gan Fall' },
      summary: {
        it: 'Un vecchio cavaliere che gira le nuvole con una lancia e un elmo a forma di zucca, in sella a un cavallo alato, e soccorre chi trova nei guai.',
        en: 'An old knight who rides the clouds with a lance and a pumpkin-shaped helmet, on a winged horse, and helps whoever he finds in trouble.',
      },
      visual: { art: 'gan-fall', tint: 'ivory' },
    },
    {
      id: 'pierre',
      kind: 'character',
      revealedAtEpisode: 153,
      revealedAtChapter: 241,
      // Rounded up to 241, the chapter that files Gan Fall, whom the text names.
      name: { it: 'Pierre', en: 'Pierre' },
      summary: {
        it: 'La cavalcatura di Gan Fall, un grosso uccello rosa a pois rossi che sa trasformarsi in un cavallo alato, senza stupire granché nessuno.',
        en: 'Gan Fall’s mount, a big pink bird spotted with red that can turn itself into a winged horse, to nobody’s great amazement.',
      },
      visual: { art: 'pierre', tint: 'pink' },
    },
    {
      id: 'wyper',
      kind: 'character',
      revealedAtEpisode: 163,
      revealedAtChapter: 245,
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
      revealedAtEpisode: 163,
      revealedAtChapter: 280,
      name: { it: 'Kamakiri', en: 'Kamakiri' },
      summary: {
        it: 'Un guerriero shandia con la cresta alta e occhiali tondi dalle lenti rosse, che avverte Aisa che, se continua ad andare a Upper Yard, ci lascerà la pelle.',
        en: 'A Shandia warrior with a high crest and round red glasses, who warns Aisa that she will be killed if she keeps going to Upper Yard.',
      },
      visual: { art: 'kamakiri', tint: 'green' },
    },
    {
      id: 'braham',
      kind: 'character',
      revealedAtEpisode: 164,
      revealedAtChapter: 280,
      name: { it: 'Braham', en: 'Braham' },
      summary: {
        it: 'Un guerriero shandia con il cappello calato sulla metà superiore del viso, che alla riunione dei guerrieri pulisce una pistola e poi parte con gli altri all’attacco di Upper Yard.',
        en: 'A Shandia warrior whose hat hides the top half of his face, who cleans a pistol at the warriors’ meeting and then joins the attack on Upper Yard.',
      },
      visual: { art: 'braham', tint: 'ocher' },
    },
    {
      id: 'genbo',
      kind: 'character',
      revealedAtEpisode: 164,
      revealedAtChapter: 280,
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
      // Named at 163, unarmed at the meeting; filed at 165 (chapter 252),
      // where she first fires her rifle, at Holy.
      revealedAtEpisode: 165,
      revealedAtChapter: 280,
      name: { it: 'Laki', en: 'Laki' },
      summary: {
        it: 'Una guerriera shandia con un lungo fucile, che promette ad Aisa di riempirle il sacchetto di terra di Upper Yard e combatte accanto a Wiper nell’attacco alla foresta.',
        en: 'A Shandia warrior with a long rifle, who promises to fill Aisa’s little bag with soil from Upper Yard and fights beside Wyper in the attack on the forest.',
      },
      visual: { art: 'laki', tint: 'lavender' },
    },
    {
      id: 'aisa',
      kind: 'character',
      revealedAtEpisode: 163,
      revealedAtChapter: 250,
      name: { it: 'Aisa', en: 'Aisa' },
      summary: {
        it: 'Una bambina shandia che sente le voci di tutto ciò che vive, e sa dire quante persone ci sono su un’isola senza averle mai viste.',
        en: 'A Shandia child who hears the voices of everything alive, and can say how many people are on an island without ever having seen them.',
      },
      visual: { art: 'aisa', tint: 'pink' },
    },
    {
      id: 'su',
      kind: 'character',
      revealedAtEpisode: 154,
      revealedAtChapter: 239,
      name: { it: 'Suu', en: 'Su' },
      summary: {
        it: 'Una piccola volpe delle nuvole chiara, con gli occhi socchiusi e una lunga coda, che viaggia in braccio a una ragazza con le ali e segue gli stranieri dalla spiaggia fino a cena.',
        en: 'A small pale cloud fox with squinting eyes and a long tail, who rides in a winged girl’s arms and follows the strangers from the beach home to dinner.',
      },
      visual: { art: 'su', tint: 'lavender' },
    },
    {
      id: 'upper-yard',
      kind: 'place',
      revealedAtEpisode: 154,
      revealedAtChapter: 240,
      name: { it: 'Upper Yard', en: 'Upper Yard' },
      summary: {
        it: 'Un’isola di foresta con alberi di cui non si vede la cima, a pochi minuti di waver dalla spiaggia dove sbarca la ciurma, e dove nessuno deve mettere piede.',
        en: 'A forest island of trees too tall to see the tops of, a short Waver ride from the beach where the crew lands, where no one may set foot.',
      },
      visual: { art: 'upper-yard', tint: 'green' },
    },
    {
      id: 'conis',
      kind: 'character',
      revealedAtEpisode: 155,
      revealedAtChapter: 242,
      name: { it: 'Conis', en: 'Conis' },
      summary: {
        it: 'Una ragazza con le ali di Angel Beach, che accoglie gli stranieri con la sua arpa e la sua volpe delle nuvole.',
        en: 'A winged girl from Angel Beach who greets strangers with her harp and her pet cloud fox.',
      },
      visual: { art: 'conis', tint: 'ice' },
    },
    {
      id: 'pagaya',
      kind: 'character',
      revealedAtEpisode: 155,
      revealedAtChapter: 242,
      name: { it: 'Pagaya', en: 'Pagaya' },
      summary: {
        it: 'Il padre di Conis, un uomo mite che costruisce e ripara barche a dial, e lascia provare agli stranieri il suo waver.',
        en: 'Conis’s father, a mild man who builds and repairs dial boats, and lets the strangers try out his Waver.',
      },
      visual: { art: 'pagaya', tint: 'teal' },
    },
    {
      id: 'mckinley',
      kind: 'character',
      revealedAtEpisode: 156,
      revealedAtChapter: 241,
      name: { it: 'McKinley', en: 'McKinley' },
      summary: {
        it: 'Il capitano dei White Berets di Skypiea, un ufficiale alato con un cappotto a mantella che si avvicina agli stranieri strisciando sulla spiaggia e legge loro le multe.',
        en: 'The captain of Skypiea’s White Berets, a winged officer in a caped coat who crawls up to strangers on the beach and reads them their fines.',
      },
      visual: { art: 'mckinley', tint: 'blue' },
    },
    {
      id: 'enel',
      kind: 'character',
      revealedAtEpisode: 167,
      revealedAtChapter: 256,
      // Named as Skypiea’s god at 155, long before he shows himself to his priests at 167.
      nameSaidAt: 155,
      name: { it: 'Ener', en: 'Enel' },
      summary: {
        it: 'Il Dio di Skypiea, seduto sopra un tamburo d’oro con altri quattro alle spalle, che sa che cosa dicono i suoi sudditi senza doverli ascoltare.',
        en: 'The God of Skypiea, sitting above a golden drum with four more at his back, who knows what his subjects are saying without having to listen.',
      },
      visual: { art: 'enel', tint: 'yellow' },
    },
    {
      id: 'angel-island',
      kind: 'place',
      revealedAtEpisode: 158,
      revealedAtChapter: 244,
      name: { it: 'Angel Island', en: 'Angel Island' },
      summary: {
        it: 'L’isola dove vivono gli abitanti di Skypiea, fatta tutta di nuvola, con una spiaggia dove approdano gli stranieri, una sola via di negozi e un molo pieno di barche dalle forme strane.',
        en: 'The island where Skypiea’s people live, made entirely of cloud, with a beach where strangers come ashore, a single shopping street and a wharf full of oddly shaped boats.',
      },
      visual: { art: 'angel-island', tint: 'ice' },
    },
    {
      id: 'satori',
      kind: 'character',
      revealedAtEpisode: 160,
      revealedAtChapter: 256,
      // Rounded up to 256, the chapter that files Enel, whom the text names.
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
      revealedAtChapter: 260,
      name: { it: 'Shura', en: 'Shura' },
      summary: {
        it: 'Un sacerdote di Ener che sorvola Upper Yard in sella a un enorme uccello e combatte con una lancia che dà fuoco a tutto ciò che colpisce.',
        en: 'One of Enel’s priests, who rides a huge bird over Upper Yard and fights with a lance that sets fire to whatever it strikes.',
      },
      visual: { art: 'shura', tint: 'red' },
    },
    {
      id: 'gedatsu',
      kind: 'character',
      revealedAtEpisode: 166,
      revealedAtChapter: 254,
      // The anime captions him at 164, but his texts are true at 166. The
      // manga names him only at 254, in a caption when Enel summons the priests.
      name: { it: 'Gedatsu', en: 'Gedatsu' },
      summary: {
        it: 'Un sacerdote di Ener, un uomo alto con una fila di ciuffi dritti in testa, che combatte contro gli shandia quando attaccano Upper Yard.',
        en: 'One of Enel’s priests, a tall man with a row of tufts standing up on his head, who fights the Shandia when they raid Upper Yard.',
      },
      visual: { art: 'gedatsu', tint: 'acid' },
    },
    {
      id: 'ohm',
      kind: 'character',
      revealedAtEpisode: 169,
      revealedAtChapter: 272,
      name: { it: 'Om', en: 'Ohm' },
      summary: {
        it: 'Un sacerdote di Ener che combatte con una spada capace di indurire la nuvola in ferro, con un enorme cane bianco al fianco.',
        en: 'One of Enel’s priests, who fights with a sword that hardens cloud into iron, an enormous white dog at his side.',
      },
      visual: { art: 'ohm', tint: 'ivory' },
    },
    {
      id: 'fuza',
      kind: 'character',
      revealedAtEpisode: 169,
      revealedAtChapter: 260,
      // Rounded up to 260, the chapter that files Shura, whom the text names.
      name: { it: 'Fuza', en: 'Fuza' },
      summary: {
        it: 'Un enorme uccello viola che porta in groppa un sacerdote di Ener sopra la foresta e sputa fuoco su chiunque lui stia combattendo.',
        en: 'An enormous purple bird that carries one of Enel’s priests over the forest on its back and breathes fire on whoever he is fighting.',
      },
      visual: { art: 'fuza', tint: 'violet' },
    },
    {
      id: 'yama',
      kind: 'character',
      revealedAtEpisode: 172,
      revealedAtChapter: 261,
      name: { it: 'Yama', en: 'Yama' },
      summary: {
        it: 'Il comandante dei guerrieri sacri di Ener, un uomo enorme e tondo dagli arti piccoli ma fortissimi, con una fascia piena di axe dial, che piomba sui nemici con tutto il suo peso.',
        en: 'The commander of Enel’s Divine Soldiers, a huge round man with small but powerful limbs and a sash full of axe dials, who comes down on his enemies with his whole weight.',
      },
      visual: { art: 'yama', tint: 'orange' },
    },
    {
      id: 'holy',
      kind: 'character',
      revealedAtEpisode: 175,
      revealedAtChapter: 272,
      // Rounded up to 272, the chapter that files Ohm, whom the text names.
      name: { it: 'Holy', en: 'Holy' },
      summary: {
        it: 'Un enorme cane dal pelo chiaro al fianco di un sacerdote di Ener, addestrato così bene che non morde nessuno finché il padrone non gliene dà un motivo.',
        en: 'An enormous pale dog at the side of one of Enel’s priests, trained so well that he bites nobody until his master gives him a reason.',
      },
      visual: { art: 'holy', tint: 'sand' },
    },
    {
      id: 'shandia-chief',
      kind: 'character',
      revealedAtEpisode: 181,
      revealedAtChapter: 275,
      name: { it: 'Capo degli Shandia', en: 'Shandia Chief' },
      summary: {
        it: 'Il vecchio capo degli Shandia, con la testa di una bestia per elmo e un bastone in mano, che ai bambini del villaggio ha insegnato che cosa il suo popolo ha perso insieme alla sua terra.',
        en: 'The old chief of the Shandia, a beast’s head worn for a helmet and a staff in his hand, who taught the village children what their people lost along with their land.',
      },
      visual: { art: 'shandia-chief', tint: 'ocher' },
    },
    {
      id: 'montblanc-noland',
      kind: 'character',
      revealedAtEpisode: 187,
      revealedAtChapter: 292,
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
      revealedAtChapter: 292,
      name: { it: 'Kalgara', en: 'Kalgara' },
      summary: {
        it: 'Il capo dei guerrieri shandia di quattrocento anni fa, che difende la sua città con una lancia più alta di lui e la voce di una grande campana.',
        en: 'The chief of the Shandia warriors four hundred years ago, who defends his city with a spear taller than himself and the voice of a great bell.',
      },
      visual: { art: 'kalgara', tint: 'vermilion' },
    },
    {
      id: 'seto',
      kind: 'character',
      revealedAtEpisode: 187,
      revealedAtChapter: 292,
      // Rounded up to 292, the chapter that files Kalgara, whom the text names.
      name: { it: 'Set', en: 'Seto' },
      summary: {
        it: 'Un giovane shandia di quattrocento anni fa che vuole diventare un guerriero come Kalgara, ed è il primo del suo villaggio a incontrare gli stranieri venuti a curarlo.',
        en: 'A young Shandia of four hundred years ago who wants to become a warrior like Kalgara, and is the first of his village to meet the strangers who come to cure it.',
      },
      visual: { art: 'seto', tint: 'acid' },
    },
    {
      id: 'mousse',
      kind: 'character',
      revealedAtEpisode: 187,
      revealedAtChapter: 287,
      name: { it: 'Musse', en: 'Mousse' },
      summary: {
        it: 'Una giovane shandia di quattrocento anni fa, scelta come l’offerta che dovrebbe salvare il suo villaggio dalla febbre.',
        en: 'A young Shandia woman of four hundred years ago, chosen as the offering that is meant to save her village from the fever.',
      },
      visual: { art: 'mousse', tint: 'lavender' },
    },
    {
      id: 'nola',
      kind: 'character',
      revealedAtEpisode: 189,
      revealedAtChapter: 292,
      name: { it: 'Nola', en: 'Nola' },
      summary: {
        it: 'Un serpente gigantesco dell’Upper Yard che inghiotte le persone intere e che, quattrocento anni fa, era un giovane serpente salutato ogni giorno dagli Shandia che venivano a suonare la campana d’oro.',
        en: 'A gigantic snake of Upper Yard that swallows people whole, and that four hundred years ago was a young snake greeted every day by the Shandia who came to ring the golden bell.',
      },
      visual: { art: 'nola', tint: 'azure' },
    },
  ],

  dossiers: {
    'masira': {
      role: {
        it: 'Capitano e recuperatore di relitti',
        en: 'Captain and salvager',
      },
      log: {
        it: 'Comanda una ciurma che canta mentre lavora. Quando una nave cade dal cielo e affonda accanto alla Going Merry, arriva, si presenta come il Re dei Recuperi e dice che tutto ciò che affonda nelle sue acque è suo. Riporta a galla il relitto soffiandoci dentro aria con un tubo, e si tuffa di persona quando qualcuno là sotto attacca i suoi uomini.',
        en: 'He commands a crew that sings while it works. When a ship falls out of the sky and sinks beside the Going Merry, he arrives, introduces himself as the Salvage King and says that anything that sinks in his waters is his. He raises the wreck by blowing air into it through a tube, and dives in himself when something down there attacks his men.',
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
    'shoujou': {
      role: { it: 'Capitano pirata', en: 'Pirate captain' },
      log: {
        it: 'Come Masira, dice che quel tratto di mare è suo, e chi vuole passare deve pagare. Spera di prendere il posto lasciato libero da Crocodile nella Flotta dei Sette. Quando sente che la ciurma ha battuto Masira attacca per vendicarlo, con onde sonore che sfasciano la loro nave e anche la sua.',
        en: 'Like Masira, he says that stretch of sea is his, and anyone who wants to pass has to pay. He hopes to take the seat Crocodile left empty among the Seven Warlords. When he hears the crew beat Masira he attacks to avenge him, with sound waves that wreck their ship and his own as well.',
      },
      affiliation: [
        {
          episode: 147,
          value: {
            it: 'Pirati di Shojo, capitano',
            en: 'Shoujou Pirates, captain',
          },
        },
      ],
      epithet: [
        { episode: 147, value: { it: 'Il Re del Sonar', en: 'Sonar King' } },
      ],
    },
    'bellamy': {
      role: {
        it: 'Capitano dei Pirati di Bellamy',
        en: 'Captain of the Bellamy Pirates',
      },
      log: {
        it: 'A Mock Town nessuno osa contraddire lui o la sua ciurma. Chiama nuova era quella in cui i pirati non sognano più. Offre da bere a Rufy, gli sbatte la testa sul bancone e poi dice che è solo una prova, e Rufy dice a Zoro di non reagire.',
        en: 'Nobody in Mock Town dares contradict him or his crew. He calls it the new age, the one where pirates no longer dream. He buys Luffy a drink, smashes his head into the counter and then says it is only a test, and Luffy tells Zoro not to fight back.',
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
      // Said at 148 (chapter 227), when Bellamy's crew laugh about Noland.
      origin: [
        {
          episode: 148,
          chapter: 227,
          value: { it: 'North Blue', en: 'North Blue' },
        },
      ],
      epithet: [{ episode: 146, value: { it: 'La Iena', en: 'the Hyena' } }],
      devilFruit: [
        { episode: 151, chapter: 232, value: ['spring-spring-fruit'] },
      ],
      bounty: [
        { episode: 146, value: 55_000_000 },
        { episode: 635, value: 195_000_000 },
      ],
    },
    'roshio': {
      chronicle: skypieaChronicles.roshio,
      role: { it: 'Capitano pirata', en: 'Pirate captain' },
      log: {
        it: 'A Mock Town lo chiamano un pazzo, e raccontano che una volta ha ammazzato sul posto un uomo solo perché lo aveva battuto a carte. Stavolta è lui a vincere la mano, e l’uomo seduto di fronte lo accusa di aver barato. Quell’uomo è Bellamy, e in questa città è così che una partita a carte finisce con il vincitore fuori dalla finestra.',
        en: 'In Mock Town they call him a madman, and say he once killed a man on the spot for beating him at cards. This time he is the one who wins the hand, and the man across the table calls it cheating. The man across the table is Bellamy, and in this town that is how a card game ends with its winner going out through a window.',
      },
      affiliation: [
        {
          episode: 146,
          value: {
            it: 'Pirati di Roshio, capitano',
            en: 'Roshio Pirates, captain',
          },
        },
      ],
      bounty: [{ episode: 146, value: 42_000_000 }],
    },
    'sarquiss': {
      chronicle: skypieaChronicles.sarquiss,
      role: {
        it: 'Vicecapitano dei Pirati di Bellamy',
        en: 'First mate of the Bellamy Pirates',
      },
      log: {
        it: 'Dà ragione al suo capitano su tutto, compresa un’accusa di barare fatta per pura convenienza. Crede che una taglia dica quanto è forte un uomo, e secondo quel metro tre straccioni appena sbarcati non meritano uno sguardo. Ride di chiunque a Mock Town parli ancora di sogni.',
        en: 'He backs his captain in everything, a cheating charge made purely for convenience included. He believes a bounty tells you how strong a man is, and by that measure three shabby newcomers are beneath his notice. He laughs at anyone in Mock Town who still talks about dreams.',
      },
      affiliation: [
        {
          episode: 146,
          value: {
            it: 'Pirati di Bellamy, vicecapitano',
            en: 'Bellamy Pirates, first mate',
          },
        },
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
      chronicle: skypieaChronicles['marshall-d-teach'],
      role: {
        it: 'Capitano dei Pirati di Barbanera',
        en: 'Captain of the Blackbeard Pirates',
      },
      log: {
        it: 'A Mock Town beve, mangia a quattro palmenti e ride di tutto, e quando qualcuno gli dice che i sogni sono morti è lui a rispondere che i sogni degli uomini non finiscono mai. Ha navigato sotto Barbabianca, poi ha ucciso un compagno di ciurma ed è scappato, e da allora un comandante di quella ciurma lo insegue per il mare. Dove sia diretto non lo sa nessuno.',
        en: 'In Mock Town he drinks, eats his fill and laughs at everything, and when somebody tells him dreams are dead he is the one who answers that the dreams of men never end. He sailed under Whitebeard, then killed a crewmate and ran, and a commander of that crew has been hunting him across the sea ever since. Where he is heading, nobody knows.',
      },
      status: [{ episode: 151, value: 'alive' }],
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
        // Gives up the title at Marineford at 485 (chapter 576), and is
        // counted among the Four Emperors at 570 (chapter 650).
        {
          episode: 485,
          chapter: 576,
          value: {
            it: 'Ex membro della Flotta dei Sette',
            en: 'Former Warlord',
          },
        },
        {
          episode: 570,
          chapter: 650,
          value: { it: 'Imperatore', en: 'Emperor' },
        },
      ],
      epithet: [{ episode: 151, value: { it: 'Barbanera', en: 'Blackbeard' } }],
      devilFruit: [
        { episode: 462, value: ['dark-dark-fruit'] },
        { episode: 485, value: ['dark-dark-fruit', 'tremor-tremor-fruit'] },
      ],
      bounty: [
        { episode: 917, value: 2_247_600_000 },
        { episode: 1087, value: 3_996_000_000 },
      ],
    },
    'bartholomew-kuma': {
      chronicle: skypieaChronicles['bartholomew-kuma'],
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Alla convocazione del Governo Mondiale è l’unico a non alzare mai la voce: resta seduto con un libro aperto in mano mentre gli altri si punzecchiano su una poltrona rimasta vuota. In piedi supera di una testa abbondante chiunque altro nella stanza. Della sua vita prima dell’accordo con il Governo non si dice una parola.',
        en: 'At the World Government’s summons he is the only one who never raises his voice: he sits with a book open in his hands while the others trade jabs about a chair left empty. Standing, he is a full head and more above anyone else in the room. Of his life before the deal with the Government, not a word is said.',
      },
      status: [{ episode: 151, value: 'alive' }],
      affiliation: [
        {
          episode: 151,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        // At 507 (chapter 591) Rayleigh repeats what Kuma told him at
        // Sabaody: "I work for the Revolutionaries army." No rank yet.
        {
          episode: 507,
          chapter: 591,
          value: {
            it: 'Flotta dei Sette; Armata Rivoluzionaria',
            en: 'Seven Warlords; Revolutionary Army',
          },
        },
        // At the Reverie, 888 (chapter 908), Rosward rides him as a rented
        // slave; the caption still calls him a current Warlord, "a former top
        // officer of the Revolutionary Army" and "former king of the Sorbet
        // Kingdom".
        {
          episode: 888,
          chapter: 908,
          value: {
            it: 'Flotta dei Sette; schiavo dei Nobili Mondiali; un tempo ufficiale dell’Armata Rivoluzionaria e re di Sorbet',
            en: 'Seven Warlords; slave of the World Nobles; once a Revolutionary Army officer and king of Sorbet',
          },
        },
        // The Warlord system is abolished at 957 (chapter 956).
        {
          episode: 957,
          chapter: 956,
          value: {
            it: 'Ex membro della Flotta dei Sette; schiavo dei Nobili Mondiali; un tempo ufficiale dell’Armata Rivoluzionaria e re di Sorbet',
            en: 'Former Warlord; slave of the World Nobles; once a Revolutionary Army officer and king of Sorbet',
          },
        },
        // Kurouma reports his rescue to Sakazuki at 1081 (chapter 1054).
        {
          episode: 1081,
          chapter: 1054,
          value: {
            it: 'Ex membro della Flotta dei Sette; schiavo dei Nobili Mondiali, liberato; un tempo ufficiale dell’Armata Rivoluzionaria e re di Sorbet',
            en: 'Former Warlord; slave of the World Nobles, freed; once a Revolutionary Army officer and king of Sorbet',
          },
        },
      ],
      // Born under the 1129 caption "47 years ago, Sorbet Kingdom, South
      // Blue" (chapter 1095). The kingship at 888 does not say where he was
      // born.
      origin: [
        {
          episode: 1129,
          chapter: 1095,
          value: {
            it: 'Regno di Sorbet, South Blue',
            en: 'Sorbet Kingdom, South Blue',
          },
        },
      ],
      epithet: [
        { episode: 151, value: { it: 'Il Tiranno', en: 'the Tyrant' } },
      ],
      devilFruit: [{ episode: 372, value: ['paw-paw-fruit'] }],
      bounty: [{ episode: 151, value: 296_000_000 }],
    },
    'sengoku': {
      chronicle: skypieaChronicles.sengoku,
      role: {
        it: 'Grand’ammiraglio della Marina',
        en: 'Fleet admiral of the Marines',
      },
      log: {
        it: 'Convoca i Sette a nome del Governo Mondiale e li tiene a bada senza perdere la calma nemmeno quando la riunione degenera. Uno dei posti al tavolo è vuoto, e quel posto vuoto lo preoccupa più di tutti quelli occupati. Si porta dietro una capra che si mangia le carte, e nessuno dei presenti se ne stupisce.',
        en: 'He calls the Warlords together for the World Government and keeps them in order without once losing his temper, even when the meeting turns ugly. One seat at the table is empty, and that empty seat worries him more than all the occupied ones. He brings a goat with him that eats the paperwork, and nobody in the room finds it odd.',
      },
      status: [{ episode: 151, value: 'alive' }],
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Marina, grand’ammiraglio',
            en: 'Marines, fleet admiral',
          },
        },
        // He accepts Kong's offer to step down at 511 (chapter 594).
        {
          episode: 511,
          chapter: 594,
          value: {
            it: 'Marina, ex grand’ammiraglio',
            en: 'Marines, former fleet admiral',
          },
        },
        // Captioned at 740 (chapter 796); at 736 the title goes to an unseen voice.
        {
          episode: 740,
          chapter: 796,
          value: {
            it: 'Marina, ispettore generale',
            en: 'Marines, inspector general',
          },
        },
      ],
      epithet: [{ episode: 151, value: { it: 'Il Buddha', en: 'the Buddha' } }],
      devilFruit: [
        {
          episode: 480,
          chapter: 571,
          value: ['human-human-fruit-model-daibutsu'],
        },
      ],
    },
    'edward-newgate': {
      chronicle: skypieaChronicles['edward-newgate'],
      role: {
        it: 'Capitano dei Pirati di Barbabianca',
        en: 'Captain of the Whitebeard Pirates',
      },
      log: {
        it: 'È l’unico ad aver combattuto il Re dei Pirati alla pari. Riceve la notizia che Shanks vuole vederlo come si riceve la visita di un vecchio conoscente, cioè male. Un suo comandante è partito da solo per inseguire un traditore, e lui ha lasciato fare.',
        en: 'He is the only man to have fought the Pirate King as an equal. He takes the news that Shanks wants to see him the way one takes a call from an old acquaintance, which is badly. One of his commanders has gone off alone after a traitor, and he let him go.',
      },
      status: [
        { episode: 151, value: 'alive' },
        { episode: 485, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati di Barbabianca, capitano',
            en: 'Whitebeard Pirates, captain',
          },
        },
        // Garp names him among the Four Emperors at 314 (chapter 432).
        {
          episode: 314,
          chapter: 432,
          value: {
            it: 'Pirati di Barbabianca, capitano; Imperatore',
            en: 'Whitebeard Pirates, captain; Emperor',
          },
        },
      ],
      epithet: [
        { episode: 151, value: { it: 'Barbabianca', en: 'Whitebeard' } },
      ],
      devilFruit: [{ episode: 466, value: ['tremor-tremor-fruit'] }],
      bounty: [{ episode: 958, value: 5_046_000_000 }],
    },
    'donquixote-doflamingo': {
      chronicle: skypieaChronicles['donquixote-doflamingo'],
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Alla riunione dei Sette ride di tutto e di tutti, e nel frattempo due marinai nella stanza sguainano le spade l’uno contro l’altro senza volerlo. Nessuno dei presenti lo prende alla leggera, nemmeno quelli che non lo sopportano. Il cappotto rosa è l’unica cosa di lui che non fa paura.',
        en: 'At the Warlords’ meeting he laughs at everything and everyone, and meanwhile two Marines in the room draw their swords on each other without meaning to. Nobody present takes him lightly, not even the ones who cannot stand him. The pink coat is the only thing about him that is not frightening.',
      },
      status: [
        { episode: 151, value: 'alive' },
        { episode: 735, value: 'imprisoned' },
      ],
      affiliation: [
        {
          episode: 151,
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
      devilFruit: [{ episode: 700, value: ['string-string-fruit'] }],
      bounty: [{ episode: 151, value: 340_000_000 }],
    },
    'rockstar': {
      chronicle: skypieaChronicles.rockstar,
      role: {
        it: 'Membro dei Pirati del Rosso',
        en: 'Member of the Red Hair Pirates',
      },
      log: {
        it: 'È entrato da poco nella ciurma di Shanks ed è convinto che il suo nome il mondo lo conosca già da prima. Gli uomini di Barbabianca non l’hanno mai sentito nominare, e Barbabianca strappa la lettera che ha portato. Vorrebbe restare a rispondere all’offesa; il suo capitano ride e lo richiama indietro.',
        en: 'He joined Shanks’s crew only recently and is sure the world knows his name from before. Whitebeard’s men have never heard of him, and Whitebeard tears up the letter he brought. He wants to stay and answer the insult; his captain laughs and calls him back.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati del Rosso, nuova recluta',
            en: 'Red Hair Pirates, newcomer',
          },
        },
      ],
      bounty: [{ episode: 151, value: 94_000_000 }],
    },
    'marco': {
      role: {
        it: 'Comandante della prima divisione',
        en: 'First division commander',
      },
      log: {
        it: 'Quando Shanks sale sulla nave di Barbabianca, l’Haki che si porta dietro fa svenire metà dell’equipaggio. Lui resta in piedi e gli grida di smetterla. Shanks lo riconosce come Marco della prima divisione e gli chiede di passare con lui. Marco gli dice di stare zitto e chiede al vecchio che cosa devono fare; Barbabianca risponde che non ci sarà battaglia e che li lascino soli.',
        en: 'When Shanks boards Whitebeard’s ship, the Haki he brings with him knocks out half the crew. He stays on his feet and shouts at him to stop. Shanks recognises him as Marco of the first division and asks him to join his crew. Marco tells him to shut up and asks the old man what they should do; Whitebeard says there will be no battle and tells them to leave the two of them alone.',
      },
      affiliation: [
        {
          episode: 316,
          value: {
            it: 'Pirati di Barbabianca, comandante della prima divisione',
            en: 'Whitebeard Pirates, first division commander',
          },
        },
        // First said at 773 (chapter 820): the remnants "led by Marco".
        {
          episode: 773,
          chapter: 820,
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
        { episode: 463, value: { it: 'La Fenice', en: 'the Phoenix' } },
      ],
      devilFruit: [
        {
          episode: 463,
          chapter: 553,
          value: ['bird-bird-fruit-model-phoenix'],
        },
      ],
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
    'pierre': {
      chronicle: skypieaChronicles.pierre,
      role: { it: 'Destriero di Gan Fall', en: 'Gan Fall’s steed' },
      log: {
        it: 'Porta il Cavaliere del cielo sopra le nuvole e dentro ogni battaglia, con un uomo in armatura e una lancia sul dorso. Ha mangiato un frutto del diavolo che lo trasforma in cavallo, cosa che, visto che volava già, cambia soprattutto il suo aspetto. La ciurma di Cappello di paglia si aspettava un Pegaso più impressionante.',
        en: 'He carries the Knight of the Sky over the clouds and into every fight, a man in armour with a lance on his back. He ate a devil fruit that turns him into a horse, which, since he could already fly, mostly changes how he looks. The Straw Hats were hoping for a more impressive Pegasus.',
      },
      affiliation: [
        {
          episode: 153,
          value: { it: 'Gan Fall, destriero', en: 'Gan Fall, steed' },
        },
      ],
      devilFruit: [{ episode: 153, value: ['horse-horse-fruit'] }],
    },
    'wyper': {
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
          episode: 163,
          value: {
            it: 'Guerrieri shandia, capo',
            en: 'Shandia warriors, leader',
          },
        },
      ],
      origin: [
        {
          episode: 163,
          value: { it: 'Skypiea, un tempo Jaya', en: 'Skypiea, once Jaya' },
        },
      ],
      epithet: [
        { episode: 163, value: { it: 'Il Berserker', en: 'the Berserker' } },
      ],
    },
    'kamakiri': {
      role: SHANDIA_WARRIOR,
      log: {
        it: 'È uno dei guerrieri che seguono Wiper, e porta un lungo coltello con l’elsa a croce. Rimprovera Aisa perché scappa di nascosto a Upper Yard, e perde la calma quando lei gli risponde che lui non è ancora riuscito a battere Dio.',
        en: 'He is one of the warriors who follow Wyper, and carries a long knife with a cross-guard. He scolds Aisa for slipping off to Upper Yard, and loses his temper when she answers that he still has not beaten God.',
      },
      affiliation: [{ episode: 163, value: SHANDIA }],
      origin: [{ episode: 163, value: SKY_ISLAND }],
    },
    'braham': {
      role: SHANDIA_WARRIOR,
      log: {
        it: 'Porta un paio di piccole pistole a due canne, e ne pulisce una mentre Wiper parla alla riunione dei guerrieri. Quando i guerrieri si mettono in marcia, parte con loro all’attacco di Upper Yard.',
        en: 'He carries a pair of small double-barrelled pistols, and cleans one of them while Wyper talks at the warriors’ meeting. When the warriors set out, he goes with them to attack Upper Yard.',
      },
      affiliation: [{ episode: 164, value: SHANDIA }],
      origin: [{ episode: 164, value: SKY_ISLAND }],
    },
    'genbo': {
      role: SHANDIA_WARRIOR,
      log: {
        it: 'Porta da solo l’arma più pesante della banda e apre la strada agli altri fra le nuvole. Nell’assalto alla terra del cielo è la voce che chiama i compagni per nome e li tiene insieme. Della gente di Skypiea non vuole sapere niente: per lui quel suolo ha un solo proprietario, e non è chi ci abita adesso.',
        en: 'He carries the heaviest weapon in the band on his own and clears the way for the rest through the clouds. In the raid on the sky land his is the voice that calls the others by name and holds them together. He wants nothing to do with the people of Skypiea: to him that ground has one owner, and it is not whoever lives on it now.',
      },
      affiliation: [{ episode: 164, value: SHANDIA }],
      origin: [{ episode: 164, value: SKY_ISLAND }],
    },
    'laki': {
      role: { it: 'Guerriera shandia', en: 'Shandia warrior' },
      log: {
        it: 'Alla riunione dei guerrieri sostiene che il nemico del loro nemico è un alleato, come Gan Fall, e Wiper le risponde che lei in battaglia non deve venire. Prende il sacchetto di Aisa per riempirlo di terra di Upper Yard. Nell’attacco alla foresta spara con il fucile su un enorme cane bianco che azzanna i suoi compagni.',
        en: 'At the warriors’ meeting she argues that the enemy of their enemy is a comrade, like Gan Fall, and Wyper answers that she must not join the battle. She takes Aisa’s little bag to fill it with soil from Upper Yard. In the attack on the forest she fires her rifle at a huge white dog that is biting her comrades.',
      },
      affiliation: [{ episode: 165, value: SHANDIA }],
      origin: [{ episode: 165, value: SKY_ISLAND }],
    },
    'aisa': {
      role: { it: 'Bambina shandia', en: 'Shandia child' },
      log: {
        it: 'Vive al villaggio con gli altri bambini ma non sta ferma un momento: scappa verso la guerra ogni volta che può, perché dice di sentire quello che succede laggiù. Sente le vite accendersi e spegnersi una a una, e nessuno degli adulti sa come consolarla. Dei guerrieri parla come si parla dei fratelli maggiori.',
        en: 'She lives in the village with the other children and never stays put: she slips away toward the war whenever she can, because she says she can feel what happens out there. She feels lives flare up and go out one by one, and none of the grown-ups knows how to comfort her. She speaks of the warriors the way one speaks of older brothers.',
      },
      affiliation: [
        {
          episode: 163,
          value: {
            it: 'Shandia, una bambina del villaggio',
            en: 'Shandia, a child of the village',
          },
        },
      ],
      origin: [{ episode: 163, value: SKY_ISLAND }],
    },
    'su': {
      chronicle: skypieaChronicles.su,
      role: { it: 'Volpe delle nuvole', en: 'Cloud fox' },
      log: {
        it: 'È la prima creatura dell’isola ad avvicinarsi agli stranieri e a squadrarli, prima che qualcuno rivolga loro la parola. Sta in braccio alla ragazza che suona sulla spiaggia, e va con loro quando tutta la compagnia torna a casa a mangiare. La bocca non la apre mai.',
        en: 'She is the first creature on the island to come and look the newcomers over, before anyone has said a word to them. She rides in the arms of the girl who plays music on the beach, and goes along when the whole party heads home to eat. She never once opens her mouth.',
      },
      affiliation: [
        {
          episode: 154,
          value: { it: 'Skypiea, animale domestico', en: 'Skypiea, pet' },
        },
      ],
    },
    'conis': {
      role: { it: 'Abitante di Angel Beach', en: 'Resident of Angel Beach' },
      log: {
        it: 'Vive con il padre in una casetta sulla spiaggia degli angeli e porta a mangiare a casa gli stranieri saliti dal mare azzurro. Mostra loro come funzionano i dial, le conchiglie che conservano un suono o un soffio di vento. Quando Nami non si vede più si preoccupa: mettere piede su Upper Yard, spiega, va contro la volontà di Dio.',
        en: 'She lives with her father in a small house on Angel Beach and takes the strangers up from the blue sea home for a meal. She shows them how dials work, the shells that keep a sound or a breath of wind. When Nami goes missing she grows worried: setting foot on Upper Yard, she explains, goes against God’s will.',
      },
      affiliation: [
        {
          episode: 155,
          value: { it: 'Angel Beach, Skypiea', en: 'Angel Beach, Skypiea' },
        },
      ],
      origin: [
        { episode: 155, value: SKY_ISLAND },
        {
          episode: 158,
          value: { it: 'Angel Island, Skypiea', en: 'Angel Island, Skypiea' },
        },
      ],
    },
    'pagaya': {
      role: { it: 'Artigiano di dial', en: 'Dial craftsman' },
      log: {
        it: 'Costruisce e ripara barche a dial, e arriva sulla spiaggia in waver per conoscere gli stranieri trovati dalla figlia. Lascia che lo provino, e resta stupito di quanto in fretta Nami impari a guidarlo. Li porta a casa, cucina per loro insieme a Sanji e dopo pranzo chiede di vedere il vecchio waver che hanno con sé.',
        en: 'He builds and repairs dial boats, and rides a Waver up the beach to meet the strangers his daughter has found. He lets them try it, and is amazed at how fast Nami learns to ride it. He takes them home, cooks for them alongside Sanji, and after the meal asks to see the old Waver they brought with them.',
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
        { episode: 155, value: SKY_ISLAND },
        {
          episode: 158,
          value: { it: 'Angel Island, Skypiea', en: 'Angel Island, Skypiea' },
        },
      ],
    },
    'mckinley': {
      chronicle: skypieaChronicles.mckinley,
      role: {
        it: 'Capitano dei White Berets',
        en: 'Captain of the White Berets',
      },
      log: {
        it: 'Applica la legge di Skypiea alla lettera, e per la ciurma di Cappello di paglia ogni lettera è una multa: entrare senza pagare, possedere un waver, perfino dormire sulla spiaggia. Quando Nami lo investe con un waver, diventa un reato di quinta classe. Battuti i suoi uomini, ride lo stesso: adesso a giudicarli saranno i sacerdoti.',
        en: 'He enforces the law of Skypiea to the letter, and for the Straw Hats every letter carries a fine: coming in without paying, owning a Waver, even sleeping on the beach. When Nami runs him over with a Waver, that is a crime of the fifth class. Once his men are beaten he laughs anyway: the priests will be the ones to judge them now.',
      },
      affiliation: [
        {
          episode: 156,
          value: { it: 'White Berets, capitano', en: 'White Berets, captain' },
        },
      ],
    },
    'enel': {
      chronicle: skypieaChronicles.enel,
      role: { it: 'Dio di Skypiea', en: 'God of Skypiea' },
      log: {
        it: 'Regna sulle nuvole come un dio e ne ha i modi: parla piano, non alza mai la testa e decide chi vive senza spiegare perché. Sente ogni voce dell’isola ovunque si trovi, e chi lo nomina male se ne accorge troppo tardi. I sacerdoti che lo servono tengono le prove che quasi nessuno riesce a superare.',
        en: 'He rules the clouds as a god and has the manner of one: he speaks softly, never lifts his head and decides who lives without explaining himself. He hears every voice on the island wherever it is, and anyone who speaks his name badly finds out too late. The priests who serve him keep the ordeals that almost nobody gets past.',
      },
      status: [{ episode: 167, value: 'alive' }],
      affiliation: [
        { episode: 167, value: { it: 'Dio di Skypiea', en: 'God of Skypiea' } },
        {
          episode: 193,
          value: { it: 'Fuggito sulla luna', en: 'Fled to the moon' },
        },
      ],
      origin: [
        {
          episode: 182,
          value: { it: 'Birka, isole del cielo', en: 'Birka, sky islands' },
        },
      ],
      epithet: [{ episode: 167, value: { it: 'Dio', en: 'God' } }],
      devilFruit: [
        { episode: 175, chapter: 266, value: ['rumble-rumble-fruit'] },
      ],
    },
    'satori': {
      role: ENEL_PRIEST,
      log: {
        it: 'Tiene la prova delle sfere, dove ogni nuvola può contenere un premio o una bestia, e ride mentre chi è entrato deve scegliere. Prevede i colpi prima che partano, come se leggesse le intenzioni nell’aria. Dice che nessuno degli stranieri arrivati fin lassù ha mai raggiunto l’altare.',
        en: 'He keeps the ordeal of balls, where every cloud may hold a prize or a beast, and laughs while whoever entered has to choose. He sees blows coming before they are thrown, as though he read intentions straight out of the air. He says that none of the strangers who got that far has ever reached the altar.',
      },
      affiliation: [{ episode: 160, value: ENEL_PRIESTS }],
      origin: [{ episode: 160, value: SKY_ISLAND }],
    },
    'shura': {
      role: ENEL_PRIEST,
      log: {
        it: 'Vola in groppa a un enorme uccello fino all’altare dove è stata portata la Going Merry, e si irrita di trovarci come offerta soltanto Chopper. Dà fuoco alla nave con la lancia e dice a Chopper che dovrà morire al posto di chi è scappato. Spiega che la foresta è divisa in quattro territori, uno per ogni sacerdote, e che l’altare non appartiene a nessuno di loro.',
        en: 'He flies a huge bird to the altar where the Going Merry has been brought, and is annoyed to find only Chopper there as an offering. He sets the ship on fire with his lance and tells Chopper he must die in place of the ones who escaped. The forest, he explains, is split into four territories, one for each priest, and the altar belongs to none of them.',
      },
      affiliation: [{ episode: 162, value: ENEL_PRIESTS }],
      origin: [{ episode: 162, value: SKY_ISLAND }],
    },
    'gedatsu': {
      role: ENEL_PRIEST,
      log: {
        it: 'Dopo che i sacerdoti hanno inseguito un intruso per Upper Yard, avverte gli altri che sette persone venute dal mare azzurro sono entrate senza permesso. Quando gli shandia attaccano la foresta, li combatte insieme agli altri sacerdoti. Quando i guerrieri ripiegano, porta l’ordine di Ener: i sacerdoti devono presentarsi da lui.',
        en: 'After the priests have chased an intruder across Upper Yard, he tells the others that seven people from the blue sea have come in without leave. When the Shandia raid the forest, he fights them alongside the other priests. Once the warriors fall back, he brings word that Enel has called the priests to him.',
      },
      affiliation: [{ episode: 166, value: ENEL_PRIESTS }],
      origin: [{ episode: 166, value: SKY_ISLAND }],
    },
    'ohm': {
      role: ENEL_PRIEST,
      log: {
        it: 'Tiene la prova del ferro, la più dura delle quattro, e la considera un atto di misericordia verso chi non dovrebbe trovarsi lassù. La sua spada trasforma la nuvola in una frusta di metallo lunga quanto vuole lui. Combatte insieme a un cane enorme che porta un’armatura come la sua.',
        en: 'He keeps the ordeal of iron, the hardest of the four, and thinks of it as an act of mercy toward people who should not be up there at all. His sword turns cloud into a whip of metal as long as he wants it. He fights beside an enormous dog wearing armour of the same make as his own.',
      },
      affiliation: [{ episode: 169, value: ENEL_PRIESTS }],
      origin: [{ episode: 169, value: SKY_ISLAND }],
    },
    'fuza': {
      role: { it: 'Cavalcatura di Shura', en: 'Shura’s mount' },
      log: {
        it: 'Porta Shura ovunque il sacerdote voglia andare, sopra la foresta e sopra i fili della sua prova, dove nessuno a piedi può seguirlo. C’era quando la Going Merry ha preso fuoco all’altare, e ha tenuto in aria il suo padrone per un intero duello con il Cavaliere del Cielo. Quando Shura è caduto davvero, l’uccello non è rimasto a vedere cosa sarebbe successo.',
        en: 'He carries Shura wherever the priest wants to go, over the forest and above the strings of his ordeal, where nobody on foot can follow. He was there when the Going Merry burned at the altar, and he kept his master in the air through a whole duel with the Knight of the Sky. When Shura fell for good, the bird did not stay to see what came next.',
      },
      affiliation: [
        {
          episode: 169,
          value: {
            it: 'Sacerdoti di Ener, cavalcatura di Shura',
            en: 'Enel’s priests, Shura’s mount',
          },
        },
      ],
      chronicle: skypieaChronicles.fuza,
    },
    'yama': {
      chronicle: skypieaChronicles.yama,
      role: {
        it: 'Comandante dei guerrieri sacri',
        en: 'Commander of the Divine Soldiers',
      },
      log: {
        it: 'Sta accanto al trono di Ener e rimprovera i sacerdoti che litigano davanti al dio. Si offende se lo si chiama un semplice membro dell’esercito del dio: lui è il capo dei guerrieri sacri. Per la sua mole salta e calcia come un acrobata, e intende schiacciare gli stranieri di Upper Yard insieme a qualunque cosa si trovi in mezzo.',
        en: 'He stands beside Enel’s throne and scolds the priests for squabbling in God’s presence. He takes offence at being called just one of God’s army: he leads the Divine Soldiers. For a man his size he jumps and kicks like an acrobat, and he means to flatten the strangers in Upper Yard along with whatever else is in the way.',
      },
      affiliation: [
        {
          episode: 172,
          value: {
            it: 'Guerrieri sacri di Ener, comandante',
            en: 'Enel’s Divine Soldiers, commander',
          },
        },
      ],
    },
    'holy': {
      role: { it: 'Cane di Om', en: 'Ohm’s dog' },
      log: {
        it: 'Aspetta al fianco di Om fra le rovine sopra la foresta e si muove solo quando il padrone glielo dice. Quando arriva un piccolo medico il cane gli torreggia sopra, e Om lo rassicura: non morde nessuno senza un motivo. Corre con i sacerdoti almeno dal giorno in cui inseguirono un intruso per l’Upper Yard, e quell’uomo per poco non finì fra le sue fauci.',
        en: 'He waits at Ohm’s side in the ruins above the forest and moves only when his master tells him to. When a small doctor wanders in, the dog looms over him, and Ohm tells the doctor not to worry: he bites nobody without a reason. He has run with the priests at least since the day they chased a trespasser across Upper Yard, and that man very nearly ended up in his jaws.',
      },
      affiliation: [
        {
          episode: 175,
          value: {
            it: 'Sacerdoti di Ener, cane di Om',
            en: 'Enel’s priests, Ohm’s dog',
          },
        },
      ],
      chronicle: skypieaChronicles.holy,
    },
    'shandia-chief': {
      role: { it: 'Capo degli Shandia', en: 'Chief of the Shandia' },
      log: {
        it: 'Anni fa radunò i bambini del villaggio, Wiper fra loro, e raccontò di una pietra antica che i loro antenati avevano difeso a costo di moltissimi uomini. Raccontò anche di come quattrocento anni fa la loro terra fu scagliata nel cielo e tolta al suo popolo, e con lei il fuoco di Shandora. Qualunque cosa i giovani guerrieri abbiano fatto da allora di quella storia, l’hanno imparata da lui.',
        en: 'Years ago he sat the village children down, Wyper among them, and told them of an ancient stone their ancestors defended at the cost of a great many men. He told them too how their land was blasted into the sky four hundred years ago and taken from his people, and with it the fire of Shandora. Whatever the young warriors have made of that story since, they learned it from him.',
      },
      affiliation: [
        { episode: 181, value: { it: 'Shandia, capo', en: 'Shandia, chief' } },
      ],
      chronicle: skypieaChronicles['shandia-chief'],
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
      status: [{ episode: 187, value: 'deceased' }],
      affiliation: [
        {
          episode: 187,
          value: {
            it: 'Esploratore del Regno di Lvneel',
            en: 'Explorer of the Lvneel Kingdom',
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
    'kalgara': {
      role: {
        it: 'Capo dei guerrieri shandia',
        en: 'Chief of the Shandia warriors',
      },
      log: {
        it: 'Prese gli stranieri sbarcati sull’isola per dei ladri e li combatté finché una febbre non lo mise a terra. Fu uno di loro a curarlo, e da lì nacque un’amicizia che né l’uno né l’altro avrebbe saputo spiegare a parole. Prima che l’esploratore ripartisse gli promise che avrebbe suonato la grande campana, perché la ritrovasse.',
        en: 'He took the foreigners who landed on the island for thieves and fought them until a fever put him on his back. One of them cured him, and out of that came a friendship neither man could have explained in words. Before the explorer sailed he promised him he would ring the great bell, so that it could be found again.',
      },
      status: [{ episode: 187, value: 'deceased' }],
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
    'seto': {
      role: { it: 'Giovane shandia', en: 'Young Shandia' },
      log: {
        it: 'Quando le macchie verdi della febbre degli alberi gli comparvero sul braccio, corse sotto la pioggia e provò a raschiarle via con un sasso. Disse a Kalgara che avrebbe voluto diventare come lui, un giorno, e che invece sarebbe morto così. Gli stranieri lo trovarono nella foresta e lo curarono, e una delle prime cose che fece da guarito fu chiedere a Kalgara che cosa intendesse quell’uomo per progresso.',
        en: 'When the green blotches of the tree fever turned up on his arm, he ran out into the rain and tried to scrape them off with a rock. He told Kalgara he had wanted to be like him one day, and now he would die like this instead. The strangers found him in the forest and cured him, and one of the first things he did once he was well was ask Kalgara what their captain meant by progress.',
      },
      status: [{ episode: 187, value: 'deceased' }],
      affiliation: [
        {
          episode: 187,
          value: {
            it: 'Shandia, un giovane del villaggio, quattrocento anni fa',
            en: 'Shandia, a youth of the village, four hundred years ago',
          },
        },
      ],
      origin: [
        {
          episode: 187,
          value: { it: 'Jaya, Rotta Maggiore', en: 'Jaya, Grand Line' },
        },
      ],
      chronicle: skypieaChronicles.seto,
    },
    'mousse': {
      role: { it: 'Fanciulla shandia', en: 'Shandia maiden' },
      log: {
        it: 'Quando il sacerdote morente disse che il villaggio si sarebbe salvato solo offrendo una ragazza agli dèi, lei accettò di andare, e alla madre in lacrime disse che non vedeva l’ora di incontrare il dio. Legata sull’altare, era a un passo dall’essere divorata quando uno straniero si arrampicò fin lassù e tagliò la testa al grande serpente. Chiusa in una gabbia accanto al suo equipaggio, è lei a chiedere che razza di uomo sia il loro capitano.',
        en: 'When the dying priest said the village could only be saved by offering a girl to the gods, she agreed to go, and told her weeping mother she was looking forward to meeting the god. Tied down on the altar, she was a moment from being eaten when a stranger climbed up and cut the great snake’s head off. Locked in a cage beside his crew, she is the one who asks them what kind of man their captain is.',
      },
      status: [{ episode: 187, value: 'deceased' }],
      affiliation: [
        {
          episode: 187,
          value: {
            it: 'Shandia, una giovane del villaggio, quattrocento anni fa',
            en: 'Shandia, a young woman of the village, four hundred years ago',
          },
        },
      ],
      origin: [
        {
          episode: 187,
          value: { it: 'Jaya, Rotta Maggiore', en: 'Jaya, Grand Line' },
        },
      ],
      chronicle: skypieaChronicles.mousse,
    },
    'nola': {
      role: { it: 'Serpente dell’Upper Yard', en: 'Snake of Upper Yard' },
      log: {
        it: 'Ha dato la caccia agli intrusi per tutto l’Upper Yard e ne ha inghiottiti diversi interi, uno dei quali continuava a tempestargli lo stomaco di pugni, convinto di essersi perso in una caverna. Quando un fulmine l’ha fatto precipitare fra le rovine della città d’oro si è guardato attorno cercando qualcuno, non ha trovato nessuno e ha pianto finché Ener non l’ha abbattuto. Quattrocento anni fa era un giovane serpente che viveva fra quelle stesse rovine, e due Shandia lo salutavano ogni giorno andando a suonare la campana.',
        en: 'It hunted the intruders across Upper Yard and swallowed several of them whole, one of whom kept punching its stomach, convinced he was lost in a cave. When lightning dropped it into the ruins of the golden city it looked around for someone, found nobody, and cried until Enel struck it down. Four hundred years ago it was a young snake living in those same ruins, and two Shandia greeted it every day on their way to ring the bell.',
      },
      affiliation: [
        {
          episode: 189,
          value: {
            it: 'Nessuna: il serpente delle rovine di Shandora',
            en: 'None: the snake of the Shandora ruins',
          },
        },
      ],
      origin: [
        {
          episode: 189,
          value: { it: 'Jaya, Rotta Maggiore', en: 'Jaya, Grand Line' },
        },
      ],
      epithet: [
        {
          episode: 189,
          value: { it: 'Il signore del cielo', en: 'Master of the Sky' },
        },
      ],
      chronicle: skypieaChronicles.nola,
    },
  },
}
