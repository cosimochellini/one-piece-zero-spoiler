import type { Saga } from './saga'

/**
 * East Blue, episodes 1 to 61: the weakest sea, one crew member per island,
 * and the port the whole route is measured from.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

const EAST_BLUE = { it: 'East Blue', en: 'East Blue' }

const SYRUP_VILLAGE = {
  it: 'Villaggio di Syrup, East Blue',
  en: 'Syrup Village, East Blue',
}

const COCOYASI_VILLAGE = {
  it: 'Villaggio di Cocoyashi, East Blue',
  en: 'Cocoyasi Village, East Blue',
}

const FISH_MAN_ISLAND = {
  it: 'Isola degli Uomini-Pesce',
  en: 'Fish-Man Island',
}

const ARLONG_OFFICER = {
  it: 'Pirati di Arlong, ufficiale',
  en: 'Arlong Pirates, officer',
}

export const eastBlue: Saga = {
  entries: [
    {
      id: 'east-blue',
      kind: 'arc',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Saga del East Blue', en: 'East Blue Saga' },
      summary: {
        it: 'Il mare più debole dei quattro. Qui la ciurma si forma, una persona per isola.',
        en: 'The weakest of the four seas. The crew is assembled here, one person per island.',
      },
      visual: { art: 'east-blue', tint: 'ivory' },
    },
    {
      id: 'monkey-d-luffy',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Monkey D. Rufy', en: 'Monkey D. Luffy' },
      summary: {
        it: 'Un ragazzo di gomma che salpa da solo dentro una botte, con un cappello di paglia che non è suo, e annuncia al primo che incontra che diventerà il Re dei Pirati.',
        en: 'A rubber boy who sets out alone inside a barrel, wearing a straw hat that is not his, and tells the first person he meets that he will be King of the Pirates.',
      },
      visual: { art: 'monkey-d-luffy', tint: 'red' },
    },
    {
      id: 'koby',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Kobi', en: 'Koby' },
      summary: {
        it: 'Un mozzo tondo e spaventato che lucida da due anni il ponte di una nave pirata, salito a bordo per sbaglio e rimasto per paura.',
        en: 'A round, frightened cabin boy who has swabbed a pirate ship’s deck for two years, aboard by mistake and still there out of fear.',
      },
      visual: { art: 'koby', tint: 'pink' },
    },
    {
      id: 'alvida',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Alvida', en: 'Alvida' },
      summary: {
        it: 'La piratessa più temuta delle acque intorno, con una mazza di ferro chiodata sulla spalla e una ciurma che non la contraddice mai.',
        en: 'The most feared pirate in the waters nearby, an iron club spiked on her shoulder and a crew that never disagrees with her.',
      },
      visual: { art: 'alvida', tint: 'wine' },
    },
    {
      id: 'gold-roger',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Gold Roger', en: 'Gold Roger' },
      summary: {
        it: 'L’uomo che aveva tutto e che muore sul patibolo di una piazza gremita, dicendo al mondo che il suo tesoro è là fuori per chi lo troverà.',
        en: 'The man who had everything and dies on a scaffold before a packed square, telling the world his treasure is out there for whoever finds it.',
      },
      visual: { art: 'gold-roger', tint: 'red' },
    },
    {
      id: 'roronoa-zoro',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 3,
      name: { it: 'Roronoa Zoro', en: 'Roronoa Zoro' },
      summary: {
        it: 'Un cacciatore di pirati legato a un palo nel cortile di una base della Marina, che resiste da nove giorni senza mangiare per una promessa fatta a una bambina.',
        en: 'A pirate hunter tied to a post in the yard of a Marine base, nine days without food, over a promise made to a little girl.',
      },
      visual: { art: 'roronoa-zoro', tint: 'green' },
    },
    {
      id: 'shells-town',
      kind: 'place',
      revealedAtEpisode: 2,
      revealedAtChapter: 3,
      name: { it: 'Shells Town', en: 'Shells Town' },
      summary: {
        it: 'Una cittadina dell’East Blue cresciuta attorno a una base della Marina, con un cacciatore di pirati legato a un palo nel cortile.',
        en: 'An East Blue town grown up around a Marine base, with a pirate hunter tied to a post in the yard.',
      },
      visual: { art: 'shells-town', tint: 'azure' },
    },
    {
      id: 'helmeppo',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 3,
      name: { it: 'Hermeppo', en: 'Helmeppo' },
      summary: {
        it: 'Il figlio del capitano della base, che gira la città con due guardie alle spalle e schiaccia sotto il tacco il pranzo di chi lo infastidisce.',
        en: 'The base captain’s son, who walks the town with two guards behind him and grinds the lunch of anyone who annoys him under his heel.',
      },
      visual: { art: 'helmeppo', tint: 'yellow' },
    },
    {
      id: 'morgan',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 4,
      name: { it: 'Morgan', en: 'Morgan' },
      summary: {
        it: 'Il capitano della base di Shells Town, con un’ascia al posto della mano destra e una mascella d’acciaio, temuto dai suoi più dei pirati.',
        en: 'The captain of the Shells Town base, an axe where his right hand should be and a steel jaw, feared by his own men more than any pirate.',
      },
      visual: { art: 'morgan', tint: 'azure' },
    },
    {
      id: 'shanks',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 1,
      name: { it: 'Shanks', en: 'Shanks' },
      summary: {
        it: 'Il capitano dai capelli rossi che per un anno ha fatto della taverna di un villaggio la sua casa, e che ripartendo ha lasciato il suo cappello di paglia a un bambino.',
        en: 'The red-haired captain who made a village tavern his home for a year, and left his straw hat with a small boy when he sailed.',
      },
      visual: { art: 'shanks', tint: 'red' },
    },
    {
      id: 'foosha-village',
      kind: 'place',
      revealedAtEpisode: 4,
      revealedAtChapter: 1,
      name: { it: 'Villaggio Fuschia', en: 'Foosha Village' },
      summary: {
        it: 'Un villaggio di mulini a vento sull’isola da cui Rufy è salpato, con una taverna dove una ciurma pirata è stata di casa per un anno.',
        en: 'A windmill village on the island Luffy sailed from, with a tavern where a pirate crew made itself at home for a year.',
      },
      visual: { art: 'foosha-village', tint: 'green' },
    },
    {
      id: 'makino',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 1,
      name: { it: 'Makino', en: 'Makino' },
      summary: {
        it: 'La proprietaria della taverna del Villaggio Fuschia, che versa da bere ai pirati come a chiunque altro e tiene d’occhio il bambino del paese.',
        en: 'The woman who keeps the Foosha Village tavern, pouring for pirates like anyone else and keeping one eye on the village boy.',
      },
      visual: { art: 'makino', tint: 'green' },
    },
    {
      id: 'benn-beckman',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 1,
      name: { it: 'Benn Beckman', en: 'Benn Beckman' },
      summary: {
        it: 'Il secondo della ciurma del Rosso, un uomo alto con un fucile a tracolla che chiude una rissa senza sparare un colpo.',
        en: 'The Red Hair crew’s second, a tall man with a rifle over his shoulder who ends a brawl without firing a single shot.',
      },
      visual: { art: 'benn-beckman', tint: 'teal' },
    },
    {
      id: 'lucky-roux',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 1,
      name: { it: 'Lucky Roux', en: 'Lucky Roux' },
      summary: {
        it: 'Un pirata rotondo della ciurma del Rosso che non smette mai di mordere un cosciotto di carne, nemmeno mentre spara.',
        en: 'A round pirate of the Red Hair crew who never stops chewing on a joint of meat, not even while he is shooting.',
      },
      visual: { art: 'lucky-roux', tint: 'red' },
    },
    {
      id: 'yasopp',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 41,
      name: { it: 'Yasop', en: 'Yasopp' },
      summary: {
        it: 'Il tiratore della ciurma del Rosso, capace di colpire una formica a cento passi, che parla del figlio lasciato a casa a chiunque passi.',
        en: 'The Red Hair crew’s marksman, able to hit an ant at a hundred paces, who tells anyone standing near him about the son he left at home.',
      },
      visual: { art: 'yasopp', tint: 'ocher' },
    },
    {
      id: 'higuma',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 1,
      name: { it: 'Higuma', en: 'Higuma' },
      summary: {
        it: 'Il capo dei banditi di montagna, con una taglia di otto milioni sulla testa, che entra in taverna e versa il vino in testa a un pirata.',
        en: 'The mountain bandit boss, eight million on his head, who walks into the tavern and empties a bottle of wine over a pirate’s head.',
      },
      visual: { art: 'higuma', tint: 'sand' },
    },
    {
      id: 'buggy',
      kind: 'character',
      revealedAtEpisode: 5,
      revealedAtChapter: 9,
      name: { it: 'Bagy', en: 'Buggy' },
      summary: {
        it: 'Un capitano pirata con il naso rosso da clown, pronto a far saltare in aria chiunque lo nomini, che tiene una città svuotata sotto il tiro dei suoi cannoni.',
        en: 'A pirate captain with a red clown’s nose, ready to blow up anyone who mentions it, who keeps an emptied town under his cannons.',
      },
      visual: { art: 'buggy', tint: 'red' },
    },
    {
      id: 'nami',
      kind: 'character',
      revealedAtEpisode: 5,
      revealedAtChapter: 8,
      name: { it: 'Nami', en: 'Nami' },
      summary: {
        it: 'Una ladra che ruba solo ai pirati, appena scappata con la carta nautica di un capitano, e che sa leggere una mappa meglio di chiunque abbia mai incontrato.',
        en: 'A thief who steals only from pirates, fresh from running off with a captain’s sea chart, and who reads a map better than anyone she has met.',
      },
      visual: { art: 'nami', tint: 'orange' },
    },
    {
      id: 'orange-town',
      kind: 'place',
      revealedAtEpisode: 5,
      revealedAtChapter: 8,
      name: { it: 'Orange Town', en: 'Orange Town' },
      summary: {
        it: 'Una cittadina dell’East Blue svuotata dai suoi abitanti, occupata da una ciurma di pirati con un tendone da circo e i cannoni puntati sui tetti.',
        en: 'An East Blue town its people have fled, occupied by a pirate crew with a circus tent and cannons trained on the roofs.',
      },
      visual: { art: 'orange-town', tint: 'orange' },
    },
    {
      id: 'mohji',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 21,
      name: { it: 'Mohji', en: 'Mohji' },
      summary: {
        it: 'Il domatore dei Pirati di Bagy, che perlustra Orange Town in groppa a un leone e comanda ogni animale che incontra.',
        en: 'The Buggy Pirates’ beast tamer, who sweeps Orange Town on the back of a lion and commands any animal he meets.',
      },
      visual: { art: 'mohji', tint: 'yellow' },
    },
    {
      id: 'cabaji',
      kind: 'character',
      revealedAtEpisode: 7,
      revealedAtChapter: 21,
      name: { it: 'Cabaji', en: 'Cabaji' },
      summary: {
        it: 'L’acrobata dei Pirati di Bagy, che combatte in equilibrio su un monociclo e sputa fuoco fra un colpo di sciabola e l’altro.',
        en: 'The Buggy Pirates’ acrobat, who fights balanced on a unicycle and breathes fire between one stroke of his sabre and the next.',
      },
      visual: { art: 'cabaji', tint: 'teal' },
    },
    {
      id: 'usopp',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 23,
      name: { it: 'Usop', en: 'Usopp' },
      summary: {
        it: 'Il bugiardo del villaggio, con un naso lungo e una fionda, che ogni mattina corre in spiaggia a gridare che i pirati stanno arrivando.',
        en: 'The village liar, long of nose and quick with a slingshot, who runs to the shore every morning shouting that pirates are coming.',
      },
      visual: { art: 'usopp', tint: 'ocher' },
    },
    {
      id: 'syrup-village',
      kind: 'place',
      revealedAtEpisode: 9,
      revealedAtChapter: 23,
      name: { it: 'Villaggio di Syrup', en: 'Syrup Village' },
      summary: {
        it: 'Un villaggio tranquillo delle isole Gecko, con una villa sulla collina e un ragazzo che ogni mattina grida che i pirati stanno arrivando.',
        en: 'A quiet village in the Gecko Islands, with a mansion on the hill and a boy who shouts every morning that pirates are coming.',
      },
      visual: { art: 'syrup-village', tint: 'yellow' },
    },
    {
      id: 'kaya',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 41,
      name: { it: 'Kaya', en: 'Kaya' },
      summary: {
        it: 'La ragazza malata della villa sulla collina, sola da quando i genitori sono morti, che ogni mattina ascolta le bugie di un ragazzo dal naso lungo.',
        en: 'The sick girl in the mansion on the hill, alone since her parents died, who listens every morning to a long-nosed boy’s lies.',
      },
      visual: { art: 'kaya', tint: 'lavender' },
    },
    {
      id: 'kuro',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 41,
      name: { it: 'Kuro', en: 'Kuro' },
      summary: {
        it: 'Un maggiordomo impeccabile con gli occhiali sempre storti, che di notte infila la mano in un guanto con cinque lame lunghe come dita.',
        en: 'An impeccable butler whose glasses are always crooked, who slips a hand at night into a glove with five blades as long as fingers.',
      },
      visual: { art: 'kuro', tint: 'violet' },
    },
    {
      id: 'jango',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 41,
      name: { it: 'Jango', en: 'Jango' },
      summary: {
        it: 'Un ipnotizzatore con gli occhiali a forma di cuore, che fa oscillare un anello davanti agli occhi di chiunque e spesso addormenta anche sé stesso.',
        en: 'A hypnotist in heart-shaped glasses who swings a ring in front of anyone’s eyes and regularly puts himself to sleep along with them.',
      },
      visual: { art: 'jango', tint: 'magenta' },
    },
    {
      id: 'merry',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 41,
      name: { it: 'Merry', en: 'Merry' },
      summary: {
        it: 'Il maggiordomo della villa, con un vassoio sempre in mano e una testa a forma di pecora, che tiene i conti della famiglia da una vita.',
        en: 'The mansion’s butler, a tray always in his hands and a head shaped like a sheep, who has kept the family’s accounts for a lifetime.',
      },
      visual: { art: 'merry', tint: 'ivory' },
    },
    {
      id: 'going-merry',
      kind: 'ship',
      revealedAtEpisode: 18,
      revealedAtChapter: 41,
      name: { it: 'Going Merry', en: 'Going Merry' },
      summary: {
        it: 'Una caravella con una testa di pecora a prua, regalata a una ciurma di quattro persone che non aveva ancora una nave.',
        en: 'A caravel with a sheep’s head on the prow, given to a crew of four who did not yet have a ship.',
      },
      visual: { art: 'going-merry', tint: 'ivory' },
    },
    {
      id: 'gaimon',
      kind: 'character',
      revealedAtEpisode: 18,
      revealedAtChapter: 22,
      name: { it: 'Gaimon', en: 'Gaimon' },
      summary: {
        it: 'Un uomo incastrato da vent’anni dentro un baule del tesoro, con un cespuglio in testa, che fa la guardia a un’isola di animali impossibili.',
        en: 'A man stuck inside a treasure chest for twenty years, a shrub growing out of his head, standing guard over an island of impossible animals.',
      },
      visual: { art: 'gaimon', tint: 'green' },
    },
    {
      id: 'kuina',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 53,
      name: { it: 'Kuina', en: 'Kuina' },
      summary: {
        it: 'La figlia del maestro di un dojo dell’East Blue, l’unica spadaccina che un bambino testardo non riesce a battere in duemila duelli.',
        en: 'The daughter of an East Blue dojo master, the one fencer a stubborn boy cannot beat in two thousand bouts.',
      },
      visual: { art: 'kuina', tint: 'ice' },
    },
    {
      id: 'johnny',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 43,
      name: { it: 'Johnny', en: 'Johnny' },
      summary: {
        it: 'Un cacciatore di taglie magro con gli occhiali scuri, che batte l’East Blue insieme a un socio e a un fascio di manifesti arrotolati.',
        en: 'A thin bounty hunter in dark glasses, working the East Blue with a partner and a bundle of rolled-up wanted posters.',
      },
      visual: { art: 'johnny', tint: 'blue' },
    },
    {
      id: 'yosaku',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 43,
      name: { it: 'Yosaku', en: 'Yosaku' },
      summary: {
        it: 'Un cacciatore di taglie robusto con la bandana, che crolla sul ponte con i denti che si muovono e le vecchie ferite riaperte.',
        en: 'A burly bounty hunter in a bandana, who collapses on deck with his teeth loose and his old wounds opening again.',
      },
      visual: { art: 'yosaku', tint: 'acid' },
    },
    {
      id: 'sanji',
      kind: 'character',
      revealedAtEpisode: 20,
      revealedAtChapter: 43,
      name: { it: 'Sanji', en: 'Sanji' },
      summary: {
        it: 'Il vice-cuoco di un ristorante galleggiante, con una sigaretta accesa e un sopracciglio a spirale, che dà da mangiare a chiunque abbia fame e combatte solo con le gambe.',
        en: 'The sous-chef of a floating restaurant, a cigarette lit and one eyebrow curled, who feeds anyone who is hungry and fights only with his legs.',
      },
      visual: { art: 'sanji', tint: 'blue' },
    },
    {
      id: 'baratie',
      kind: 'place',
      revealedAtEpisode: 20,
      revealedAtChapter: 43,
      name: { it: 'Baratie', en: 'Baratie' },
      summary: {
        it: 'Un ristorante galleggiante a forma di pesce, in mare aperto, dove i cuochi prendono a calci i clienti che non pagano.',
        en: 'A floating restaurant shaped like a fish, in open sea, where the cooks kick the customers who do not pay.',
      },
      visual: { art: 'baratie', tint: 'cyan' },
    },
    {
      id: 'zeff',
      kind: 'character',
      revealedAtEpisode: 20,
      revealedAtChapter: 46,
      name: { it: 'Zeff', en: 'Zeff' },
      summary: {
        it: 'Il proprietario del Baratie, un vecchio con una gamba di legno e un cappello altissimo, che prende a calci i suoi cuochi dentro la cucina.',
        en: 'The owner of the Baratie, an old man with a peg leg and a very tall hat, who kicks his own cooks around the kitchen.',
      },
      visual: { art: 'zeff', tint: 'cyan' },
    },
    {
      id: 'gin',
      kind: 'character',
      revealedAtEpisode: 20,
      revealedAtChapter: 47,
      name: { it: 'Gin', en: 'Gin' },
      summary: {
        it: 'Un naufrago che si trascina dentro il Baratie con la pistola in pugno e chiede da mangiare, e poi piange davanti al piatto.',
        en: 'A castaway who drags himself into the Baratie with a pistol drawn and asks for food, then weeps over the plate he is given.',
      },
      visual: { art: 'gin', tint: 'wine' },
    },
    {
      id: 'don-krieg',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 50,
      name: { it: 'Don Creek', en: 'Don Krieg' },
      summary: {
        it: 'Il capo di una flotta di cinquanta navi tornato dalla Rotta Maggiore con una sola, che sale sul Baratie in armatura dorata a chiedere da mangiare.',
        en: 'The head of a fifty-ship fleet who came back from the Grand Line with one, boarding the Baratie in gilded armour to demand food.',
      },
      visual: { art: 'don-krieg', tint: 'ocher' },
    },
    {
      id: 'pearl',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 58,
      name: { it: 'Pearl', en: 'Pearl' },
      summary: {
        it: 'Un pirata coperto di piastre d’acciaio che dice di non aver mai sanguinato, e che al primo graffio prende fuoco per il panico.',
        en: 'A pirate armoured in steel plates who says he has never bled, and who bursts into flame out of panic at the first scratch.',
      },
      visual: { art: 'pearl', tint: 'pink' },
    },
    {
      id: 'dracule-mihawk',
      kind: 'character',
      revealedAtEpisode: 24,
      revealedAtChapter: 50,
      name: { it: 'Drakul Mihawk', en: 'Dracule Mihawk' },
      summary: {
        it: 'Lo spadaccino più forte del mondo, arrivato su una barca a forma di bara con una spada nera larga quanto lui, che taglia un galeone in due per passare il tempo.',
        en: 'The strongest swordsman in the world, arrived in a coffin-shaped boat with a black sword as broad as himself, who cuts a galleon in half to pass the time.',
      },
      visual: { art: 'dracule-mihawk', tint: 'ocher' },
    },
    {
      id: 'arlong',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 70,
      name: { it: 'Arlong', en: 'Arlong' },
      summary: {
        it: 'Un uomo-pesce squalo che tiene un intero villaggio a tributo, con una spada seghettata sulla schiena e un naso lungo come una lama.',
        en: 'A shark fish-man holding an entire village to tribute, a saw-toothed sword across his back and a nose as long as a blade.',
      },
      visual: { art: 'arlong', tint: 'teal' },
    },
    {
      id: 'hatchan',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 74,
      name: { it: 'Octy', en: 'Hatchan' },
      summary: {
        it: 'Un uomo-pesce polpo con sei braccia e sei spade, che combatte come se ballasse e si distrae ogni volta che qualcuno nomina il cibo.',
        en: 'An octopus fish-man with six arms and six swords, who fights as though he were dancing and loses focus whenever food is mentioned.',
      },
      visual: { art: 'hatchan', tint: 'pink' },
    },
    {
      id: 'kuroobi',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 74,
      name: { it: 'Kuroobi', en: 'Kuroobi' },
      summary: {
        it: 'Un uomo-pesce razza che combatte a mani nude con il karate degli uomini-pesce, la cintura nera annodata stretta sopra la veste.',
        en: 'A ray fish-man who fights bare-handed with fish-man karate, the black belt knotted tight over his robe.',
      },
      visual: { art: 'kuroobi', tint: 'violet' },
    },
    {
      id: 'chew',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 74,
      name: { it: 'Chu', en: 'Chew' },
      summary: {
        it: 'Un uomo-pesce dalle labbra enormi, che si riempie la bocca d’acqua e la sputa attraverso i muri come una cannonata.',
        en: 'A fish-man with enormous lips, who fills his mouth with seawater and spits it through walls like a cannon shot.',
      },
      visual: { art: 'chew', tint: 'blue' },
    },
    {
      id: 'nojiko',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 77,
      name: { it: 'Nojiko', en: 'Nojiko' },
      summary: {
        it: 'Una coltivatrice di mandarini con i capelli azzurri e un tatuaggio sulla spalla, che cura il frutteto di famiglia e non nomina mai sua sorella.',
        en: 'A blue-haired mandarin grower with a tattoo across her shoulder, who tends the family orchard and never talks about her sister.',
      },
      visual: { art: 'nojiko', tint: 'azure' },
    },
    {
      id: 'genzo',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 77,
      name: { it: 'Genzo', en: 'Genzo' },
      summary: {
        it: 'Il poliziotto del villaggio, con una girandola infilata nel cappello, che ha giurato di non impugnare mai più un’arma contro gli uomini-pesce.',
        en: 'The village sheriff, a pinwheel stuck in his cap, who swore never to raise a weapon against the fish-men again.',
      },
      visual: { art: 'genzo', tint: 'yellow' },
    },
    {
      id: 'bell-mere',
      kind: 'character',
      revealedAtEpisode: 34,
      revealedAtChapter: 80,
      name: { it: 'Bellemere', en: 'Bell-mère' },
      summary: {
        it: 'Un’ex soldatessa della Marina che coltiva mandarini e cresce due bambine trovate su un campo di battaglia, con una sigaretta sempre accesa.',
        en: 'A former Marine who grows mandarins and raises two girls she found on a battlefield, a cigarette always burning between her fingers.',
      },
      visual: { art: 'bell-mere', tint: 'orange' },
    },
    {
      id: 'nezumi',
      kind: 'character',
      revealedAtEpisode: 36,
      revealedAtChapter: 84,
      name: { it: 'Nezumi', en: 'Nezumi' },
      summary: {
        it: 'Un capitano della Marina con i baffi da topo, che arriva a Cocoyashi per requisire il denaro del villaggio e riparte con le tasche piene.',
        en: 'A Marine captain with a rat’s whiskers, who comes to Cocoyasi to confiscate the village’s money and leaves with his pockets full.',
      },
      visual: { art: 'nezumi', tint: 'sand' },
    },
    {
      id: 'smoker',
      kind: 'character',
      revealedAtEpisode: 49,
      revealedAtChapter: 97,
      name: { it: 'Smoker', en: 'Smoker' },
      summary: {
        it: 'Un capitano della Marina con due sigari accesi e una giacca piena di ricambi, che non ha mai lasciato scappare un pirata dalla sua città e si scioglie in fumo quando lo colpiscono.',
        en: 'A Marine captain with two lit cigars and a jacket full of spares, who has never let a pirate leave his town and turns to smoke when he is hit.',
      },
      visual: { art: 'smoker', tint: 'azure' },
    },
    {
      id: 'tashigi',
      kind: 'character',
      revealedAtEpisode: 49,
      revealedAtChapter: 99,
      name: { it: 'Tashigi', en: 'Tashigi' },
      summary: {
        it: 'Un sergente della Marina con gli occhiali e una katana, che inciampa ovunque e conosce a memoria ogni spada pregiata del mondo.',
        en: 'A Marine sergeant with glasses and a katana, forever tripping over things and able to name every famous blade in the world.',
      },
      visual: { art: 'tashigi', tint: 'ice' },
    },
    {
      id: 'monkey-d-dragon',
      kind: 'character',
      revealedAtEpisode: 314,
      revealedAtChapter: 432,
      name: { it: 'Monkey D. Dragon', en: 'Monkey D. Dragon' },
      summary: {
        it: 'Il rivoluzionario più pericoloso del mondo e il padre di Rufy, un nome che Garp pronuncia una volta sola e controvoglia.',
        en: 'The most dangerous revolutionary in the world and Luffy’s father, a name Garp says once and unwillingly, in front of a grandson who never knew it.',
      },
      visual: { art: 'monkey-d-dragon', tint: 'green' },
    },
  ],

  dossiers: {
    'monkey-d-luffy': {
      role: { it: 'Capitano', en: 'Captain' },
      log: {
        it: 'Diciassette anni, un sorriso che non si spegne e nessuna nave: parte dentro una botte e recluta il primo membro della ciurma nel giro di un pomeriggio. Da bambino ha mangiato un frutto del diavolo e da allora è di gomma, il che vuol dire che il mare lo respinge e che non sa nuotare. Salpa lo stesso.',
        en: 'Seventeen, a grin that does not switch off, and no ship: he sets out inside a barrel and recruits the first member of his crew within an afternoon. He ate a devil fruit as a child and has been rubber ever since, which means the sea rejects him and he cannot swim. He sails anyway.',
      },
      affiliation: [
        {
          episode: 1,
          value: {
            it: 'Capitano di una ciurma che non esiste ancora',
            en: 'Captain of a crew that does not exist yet',
          },
        },
        { episode: 3, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 4,
          value: {
            it: 'Villaggio Fuschia, East Blue',
            en: 'Foosha Village, East Blue',
          },
        },
      ],
      epithet: [
        { episode: 45, value: { it: 'Cappello di Paglia', en: 'Straw Hat' } },
      ],
      devilFruit: [{ episode: 1, value: ['gum-gum-fruit'] }],
      bounty: [
        { episode: 45, value: 30_000_000 },
        { episode: 130, value: 100_000_000 },
        { episode: 320, value: 300_000_000 },
        { episode: 512, value: 400_000_000 },
        { episode: 746, value: 500_000_000 },
        { episode: 879, value: 1_500_000_000 },
        { episode: 1086, value: 3_000_000_000 },
      ],
    },
    'koby': {
      role: { it: 'Mozzo', en: 'Cabin boy' },
      log: {
        it: 'È salito a dieci anni sulla barca da pesca sbagliata e da allora lucida il ponte di Alvida, che lo picchia quando una risposta non le piace. Sa che potrebbe scappare e non lo fa. Poi un ragazzo di gomma esce da una botte nella stiva e gli chiede che cosa vorrebbe fare davvero: lui risponde che vorrebbe entrare nella Marina, e si sente dire quelle parole ad alta voce per la prima volta.',
        en: 'He climbed into the wrong fishing boat at ten and has been scrubbing Alvida’s deck ever since, beaten whenever an answer displeases her. He knows he could run, and he does not. Then a rubber boy climbs out of a barrel in the hold and asks what he actually wants: he says he wants to join the Marines, and hears himself say it out loud for the first time.',
      },
      affiliation: [
        {
          episode: 1,
          value: {
            it: 'Pirati di Alvida, mozzo suo malgrado',
            en: 'Alvida Pirates, unwilling cabin boy',
          },
        },
        {
          episode: 3,
          value: { it: 'Marina, recluta', en: 'Marines, recruit' },
        },
        {
          episode: 314,
          value: {
            it: 'Marina, sergente maggiore',
            en: 'Marines, sergeant major',
          },
        },
        {
          episode: 880,
          value: { it: 'Marina, capitano', en: 'Marines, captain' },
        },
        {
          episode: 1090,
          value: {
            it: 'Marina, capitano dello SWORD',
            en: 'Marines, captain of SWORD',
          },
        },
      ],
      origin: [{ episode: 1, value: EAST_BLUE }],
      epithet: [
        {
          episode: 1090,
          value: { it: 'Eroe di Rocky Port', en: 'Hero of Rocky Port' },
        },
      ],
    },
    'alvida': {
      role: {
        it: 'Capitano dei Pirati di Alvida',
        en: 'Captain of the Alvida Pirates',
      },
      log: {
        it: 'Governa la sua nave con una mazza chiodata e una domanda sola, ripetuta finché qualcuno non risponde che la più bella di tutti i mari è lei. Da due anni terrorizza un tratto d’acqua in cui nessun altro pirata si azzarda a entrare. Il primo ragazzo che le dice in faccia di non avere idea di chi sia la manda a volare oltre l’orizzonte.',
        en: 'She runs her ship with a spiked club and a single question, repeated until somebody answers that the most beautiful woman on any sea is her. For two years she has terrorised a stretch of water no other pirate will enter. The first boy who tells her to her face that he has never heard of her sends her flying past the horizon.',
      },
      affiliation: [
        {
          episode: 1,
          value: {
            it: 'Pirati di Alvida, capitano',
            en: 'Alvida Pirates, captain',
          },
        },
        {
          episode: 47,
          value: {
            it: 'Alleata con i Pirati di Bagy',
            en: 'Allied with the Buggy Pirates',
          },
        },
      ],
      epithet: [
        { episode: 1, value: { it: 'Mazza di Ferro', en: 'Iron Mace' } },
      ],
      devilFruit: [{ episode: 48, value: ['slip-slip-fruit'] }],
      bounty: [{ episode: 1, value: 5_000_000 }],
    },
    'gold-roger': {
      role: { it: 'Re dei Pirati', en: 'King of the Pirates' },
      log: {
        it: 'Ha percorso tutti i mari e preso tutto quello che c’era da prendere, e il Governo Mondiale lo giustizia in piazza davanti a una folla enorme. Sul patibolo gli chiedono dove sia il suo tesoro, e lui sorride: è là fuori, e se lo prenda chi lo vuole. Quel giorno migliaia di uomini prendono il mare, e l’epoca che ne nasce porta il suo nome.',
        en: 'He sailed every sea and took everything there was to take, and the World Government executes him in a public square before an enormous crowd. On the scaffold they ask where his treasure is and he smiles: it is out there, and whoever wants it may have it. Thousands put to sea that day, and the age that follows is named after him.',
      },
      affiliation: [
        {
          episode: 1,
          value: {
            it: 'Pirati di Roger, capitano; Re dei Pirati',
            en: 'Roger Pirates, captain; King of the Pirates',
          },
        },
      ],
      origin: [
        {
          episode: 49,
          value: { it: 'Loguetown, East Blue', en: 'Loguetown, East Blue' },
        },
      ],
      epithet: [
        {
          episode: 1,
          value: { it: 'Re dei Pirati', en: 'King of the Pirates' },
        },
      ],
      bounty: [{ episode: 958, value: 5_564_800_000 }],
    },
    'roronoa-zoro': {
      role: {
        it: 'Spadaccino, cacciatore di pirati',
        en: 'Swordsman, pirate hunter',
      },
      log: {
        it: 'Combatte con tre spade, una delle quali tiene in bocca, e ha un nome che i pirati dell’East Blue pronunciano a bassa voce. Si è fatto legare a un palo per un mese piuttosto che chiedere scusa a un ufficiale che non lo meritava. Accetta di imbarcarsi con un patto: se il capitano gli farà mai rinunciare al suo sogno, sarà lui a farlo pagare.',
        en: 'He fights with three swords, one of them held in his teeth, and his name is one East Blue pirates say quietly. He let himself be tied to a post for a month rather than apologise to an officer who did not deserve it. He signs on with a condition: if the captain ever makes him give up his dream, he will make him pay for it.',
      },
      affiliation: [
        {
          episode: 2,
          value: {
            it: 'Cacciatore di pirati per conto suo',
            en: 'Pirate hunter on his own account',
          },
        },
        { episode: 3, value: STRAW_HATS },
      ],
      origin: [{ episode: 2, value: { it: 'East Blue', en: 'East Blue' } }],
      epithet: [
        {
          episode: 2,
          value: { it: 'Cacciatore di pirati', en: 'Pirate Hunter' },
        },
      ],
      bounty: [
        { episode: 130, value: 60_000_000 },
        { episode: 320, value: 120_000_000 },
        { episode: 746, value: 320_000_000 },
        { episode: 1086, value: 1_111_000_000 },
      ],
    },
    'helmeppo': {
      role: {
        it: 'Figlio del capitano della base',
        en: 'The base captain’s son',
      },
      log: {
        it: 'Non ha alcun grado e nessuno glielo chiede: basta il nome di suo padre perché i marinai della base chiudano gli occhi su tutto. Ha promesso a un prigioniero legato nel cortile di liberarlo dopo un mese di digiuno, e si diverte a raccontare in giro che non ha nessuna intenzione di mantenere la parola. Chi lo contraddice finisce davanti a una condanna a morte firmata da suo padre.',
        en: 'He holds no rank and nobody asks him to: his father’s name is enough for the Marines of the base to look the other way. He promised the prisoner tied up in the yard his freedom after a month without food, and enjoys telling people he has no intention of keeping his word. Anyone who argues ends up in front of an execution notice signed by his father.',
      },
      affiliation: [
        {
          episode: 2,
          value: {
            it: 'Figlio del capitano Morgan',
            en: 'Captain Morgan’s son',
          },
        },
        {
          episode: 3,
          value: { it: 'Marina, tuttofare', en: 'Marines, chore boy' },
        },
        {
          episode: 314,
          value: { it: 'Marina, tenente', en: 'Marines, lieutenant' },
        },
        {
          episode: 880,
          value: {
            it: 'Marina, capitano di corvetta',
            en: 'Marines, lieutenant commander',
          },
        },
      ],
      origin: [
        {
          episode: 2,
          value: { it: 'Shells Town, East Blue', en: 'Shells Town, East Blue' },
        },
      ],
    },
    'morgan': {
      role: {
        it: 'Capitano della base di Shells Town',
        en: 'Captain of the Shells Town base',
      },
      log: {
        it: 'Ha fatto scolpire una statua di sé stesso e costringe i suoi uomini a issarla sul tetto della base, perché il grado e la gloria per lui sono la stessa cosa. Chi discute un suo ordine viene giustiziato, e chi lo esegue male anche. La città lo mantiene con tributi che non ha mai chiesto a nessuno il permesso di riscuotere.',
        en: 'He has had a statue of himself carved and makes his men haul it onto the roof of the base, because rank and glory are the same thing to him. Anyone who questions an order is executed, and so is anyone who carries it out badly. The town keeps him fed with tribute he never asked anyone’s permission to collect.',
      },
      affiliation: [
        {
          episode: 2,
          value: {
            it: 'Marina, capitano della base di Shells Town',
            en: 'Marines, captain of the Shells Town base',
          },
        },
        {
          episode: 3,
          value: {
            it: 'Radiato dalla Marina, in arresto',
            en: 'Dismissed from the Marines, under arrest',
          },
        },
      ],
      epithet: [{ episode: 2, value: { it: 'Mano d’Ascia', en: 'Axe-Hand' } }],
    },
    'shanks': {
      role: { it: 'Capitano pirata', en: 'Pirate captain' },
      log: {
        it: 'Beve, ride e lascia che un bandito gli versi il vino in testa senza reagire, perché una rissa non vale la pena. Poi lo stesso bandito tocca il bambino della taverna, e il mare intero viene a sapere di che cosa è capace. Riparte con un braccio in meno e senza il cappello, entrambi lasciati a Rufy insieme a una promessa.',
        en: 'He drinks, he laughs, and he lets a bandit pour wine over his head without lifting a finger, because a brawl is not worth it. Then the same bandit lays hands on the boy from the tavern, and the whole sea learns what he can do. He sails on one arm lighter and without his hat, both left with Luffy along with a promise.',
      },
      affiliation: [
        {
          episode: 4,
          value: {
            it: 'Pirati del Rosso, capitano',
            en: 'Red Hair Pirates, captain',
          },
        },
      ],
      epithet: [{ episode: 4, value: { it: 'Il Rosso', en: 'Red-Haired' } }],
      bounty: [{ episode: 958, value: 4_048_900_000 }],
    },
    'makino': {
      role: { it: 'Proprietaria del Partys Bar', en: 'Owner of Partys Bar' },
      log: {
        it: 'Il suo locale è l’unico del villaggio, e per un anno intero una ciurma di pirati ci ha bevuto dentro senza che lei alzasse mai la voce. Asciuga il bancone, ride alle battute e non giudica nessuno, nemmeno il bambino che urla di voler diventare un pirata. Quando i banditi di montagna entrano a rovinare tutto, è lei a finire per terra fra i cocci.',
        en: 'Hers is the only bar in the village, and for a whole year a pirate crew drank in it without her once raising her voice. She wipes the counter, laughs at the jokes and judges nobody, not even the boy who shouts that he will be a pirate. When the mountain bandits come in and wreck the place, she is the one left on the floor among the broken glass.',
      },
      affiliation: [
        {
          episode: 4,
          value: { it: 'Partys Bar, proprietaria', en: 'Partys Bar, owner' },
        },
      ],
      origin: [
        {
          episode: 4,
          value: {
            it: 'Villaggio Fuschia, East Blue',
            en: 'Foosha Village, East Blue',
          },
        },
      ],
    },
    'benn-beckman': {
      role: {
        it: 'Primo ufficiale dei Pirati del Rosso',
        en: 'First mate of the Red Hair Pirates',
      },
      log: {
        it: 'Sta in disparte con la sigaretta accesa mentre gli altri bevono, e parla solo quando c’è qualcosa da dire. Quando una ciurma pirata punta i cannoni sulla taverna, gli basta appoggiarsi al bancone e spiegare con calma quanti uomini ha già messo a terra perché nella sala cali il silenzio. Il suo capitano lo ascolta più di chiunque altro.',
        en: 'He stands apart with a cigarette while the others drink, and speaks only when there is something to say. When a pirate crew turns its guns on the tavern, he leans on the counter and calmly explains how many men he has already put down, and the room goes quiet. His captain listens to him more than to anyone else.',
      },
      affiliation: [
        {
          episode: 4,
          value: {
            it: 'Pirati del Rosso, primo ufficiale',
            en: 'Red Hair Pirates, first mate',
          },
        },
      ],
    },
    'lucky-roux': {
      role: {
        it: 'Membro dei Pirati del Rosso',
        en: 'Red Hair Pirates crewman',
      },
      log: {
        it: 'Ride più forte di tutti, mangia più di tutti e sembra il meno pericoloso della tavolata. Quando però un bandito di montagna punta una pistola in faccia al suo capitano, è lui a muoversi per primo, con il cosciotto ancora in una mano. Nessuno alla taverna lo ha visto prendere la mira, e dopo quel giorno nessuno discute più con quella ciurma.',
        en: 'He laughs loudest, eats most and looks the least dangerous man at the table. But when a mountain bandit puts a pistol in his captain’s face, he is the one who moves first, the joint of meat still in one hand. Nobody in the tavern saw him take aim, and after that day nobody argues with the crew.',
      },
      affiliation: [
        {
          episode: 4,
          value: { it: 'Pirati del Rosso', en: 'Red Hair Pirates' },
        },
      ],
    },
    'yasopp': {
      role: { it: 'Tiratore scelto', en: 'Sniper' },
      log: {
        it: 'Ha lasciato il villaggio e un bambino piccolo per salire su una nave pirata, e da allora non ha smesso un giorno di raccontare quanto è in gamba suo figlio. Con la pistola non sbaglia: al villaggio dicono che possa staccare le corna a un insetto senza toccare il resto. Beve alla taverna insieme agli altri, e nessuno lo sente mai parlare di tornare indietro.',
        en: 'He left a village and a small son to board a pirate ship, and has not gone a day since without telling someone how fine that boy is. With a pistol he does not miss: they say he can take the horns off a beetle without touching the rest of it. He drinks at the tavern with the others, and nobody ever hears him talk about going back.',
      },
      affiliation: [
        {
          episode: 4,
          value: {
            it: 'Pirati del Rosso, tiratore scelto',
            en: 'Red Hair Pirates, sniper',
          },
        },
      ],
      origin: [{ episode: 4, value: SYRUP_VILLAGE }],
    },
    'higuma': {
      role: { it: 'Capo dei banditi di montagna', en: 'Mountain bandit boss' },
      log: {
        it: 'Scende dalla montagna con i suoi uomini quando le provviste finiscono e prende quello che vuole, perché in paese nessuno ha armi. Ha ucciso più di cinquanta persone e lo dice come un altro direbbe il proprio mestiere. Alla taverna trova una ciurma di pirati che ride invece di reagire, e si convince di avere davanti dei codardi.',
        en: 'He comes down from the mountains with his men when the stores run out and takes what he wants, because nobody in the village is armed. He has killed more than fifty people and says so the way another man names his trade. In the tavern he finds a pirate crew that laughs instead of fighting back, and decides he is looking at cowards.',
      },
      affiliation: [
        {
          episode: 4,
          value: {
            it: 'Banditi di montagna, capo',
            en: 'Mountain bandits, boss',
          },
        },
      ],
      bounty: [{ episode: 4, value: 8_000_000 }],
    },
    'buggy': {
      role: {
        it: 'Capitano dei Pirati di Bagy',
        en: 'Captain of the Buggy Pirates',
      },
      log: {
        it: 'Ha svuotato Orange Town a cannonate e ci ha piantato un tendone da circo, con un domatore, un acrobata e un leone al seguito. Il suo corpo si separa in pezzi che volano da soli, cosa che rende inutile tagliarlo. Odia ogni parola che assomigli a «naso», e la sua ciurma ha imparato a non pronunciarla.',
        en: 'He emptied Orange Town with cannon fire and pitched a circus tent in it, a lion tamer, an acrobat and a lion in tow. His body comes apart into pieces that fly on their own, which makes cutting him pointless. He hates any word that sounds like “nose”, and his crew has learned not to say it.',
      },
      affiliation: [
        {
          episode: 5,
          value: {
            it: 'Pirati di Bagy, capitano',
            en: 'Buggy Pirates, captain',
          },
        },
        {
          episode: 517,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      epithet: [{ episode: 5, value: { it: 'Il Clown', en: 'the Clown' } }],
      devilFruit: [{ episode: 5, value: ['chop-chop-fruit'] }],
      bounty: [
        { episode: 5, value: 15_000_000 },
        { episode: 1088, value: 3_189_000_000 },
      ],
    },
    'nami': {
      role: { it: 'Navigatrice e ladra', en: 'Navigator and thief' },
      log: {
        it: 'Disegna carte nautiche a mano e sente il tempo cambiare prima che cambi. Ha rubato una mappa della Rotta Maggiore a Bagy e si è aggregata a Rufy e Zoro solo per convenienza, come tiene a precisare. Odia i pirati, e non spiega perché.',
        en: 'She draws sea charts by hand and feels the weather turn before it does. She stole a map of the Grand Line from Buggy and has thrown in with Luffy and Zoro purely for convenience, as she is careful to point out. She hates pirates, and does not say why.',
      },
      affiliation: [
        {
          episode: 5,
          value: { it: 'Ladra per conto suo', en: 'Thief on her own account' },
        },
        { episode: 44, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 31,
          value: {
            it: 'Villaggio di Cocoyashi, East Blue',
            en: 'Cocoyasi Village, East Blue',
          },
        },
      ],
      epithet: [
        { episode: 130, value: { it: 'Gatta Ladra', en: 'Cat Burglar' } },
      ],
      bounty: [
        { episode: 130, value: 16_000_000 },
        { episode: 746, value: 66_000_000 },
        { episode: 1086, value: 366_000_000 },
      ],
    },
    'mohji': {
      role: {
        it: 'Domatore dei Pirati di Bagy',
        en: 'Beast tamer of the Buggy Pirates',
      },
      log: {
        it: 'Sostiene che nessun animale gli abbia mai disobbedito e porta in giro un leone di nome Richie come prova. Perlustra la città svuotata per conto del suo capitano, cercando chi si nasconde ancora nelle case. Il primo cane che incontra, seduto davanti a un negozio chiuso, non si sposta di un passo, e lui scopre che la sua parola non vale su tutti.',
        en: 'He claims no animal has ever disobeyed him, and carries a lion named Richie about as proof. He sweeps the emptied town for his captain, looking for whoever is still hiding in the houses. The first dog he meets, sitting outside a shut-up shop, does not move a step, and he learns that his word does not carry with everyone.',
      },
      affiliation: [
        {
          episode: 6,
          value: {
            it: 'Pirati di Bagy, domatore',
            en: 'Buggy Pirates, beast tamer',
          },
        },
      ],
      epithet: [
        { episode: 6, value: { it: 'Il Domatore', en: 'Beast Tamer' } },
      ],
    },
    'cabaji': {
      role: { it: 'Acrobata e spadaccino', en: 'Acrobat and swordsman' },
      log: {
        it: 'Non scende mai dal suo monociclo, nemmeno per duellare, e usa ogni trucco da circo che conosce: fumo, fuoco, sabbia negli occhi. L’unica cosa che trova disonorevole è perdere. Quando un avversario ferito si rifiuta di arrendersi, lui colpisce per prime le ferite e chiama strategia quello che tutti gli altri chiamano viltà.',
        en: 'He never gets off his unicycle, not even to duel, and uses every circus trick he knows: smoke, fire, sand in the eyes. The only thing he finds dishonourable is losing. When a wounded opponent refuses to yield, he goes for the wounds first and calls strategy what everyone else calls cowardice.',
      },
      affiliation: [
        {
          episode: 7,
          value: {
            it: 'Pirati di Bagy, capo di stato maggiore',
            en: 'Buggy Pirates, chief of staff',
          },
        },
      ],
      epithet: [{ episode: 7, value: { it: 'L’Acrobata', en: 'the Acrobat' } }],
    },
    'usopp': {
      role: { it: 'Tiratore', en: 'Marksman' },
      log: {
        it: 'Comanda una ciurma pirata di tre bambini con una bandiera, e racconta ogni giorno a una ragazza malata le sue avventure inventate. Suo padre è salpato con dei pirati veri quando lui era piccolo, e lui ha deciso di diventare un uomo di mare coraggioso. Con la fionda non sbaglia un colpo; il coraggio è ancora in lavorazione.',
        en: 'He captains a pirate crew of three children with a flag, and tells a sick girl a new invented adventure every day. His father sailed with real pirates when he was small, and he has decided to become a brave man of the sea. With a slingshot he never misses; the bravery is still a work in progress.',
      },
      affiliation: [
        {
          episode: 9,
          value: {
            it: 'Pirati di Usop, capitano',
            en: 'Usopp Pirates, captain',
          },
        },
        { episode: 18, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 9,
          value: {
            it: 'Villaggio di Syrup, East Blue',
            en: 'Syrup Village, East Blue',
          },
        },
      ],
      epithet: [
        { episode: 320, value: { it: 'Sogeking', en: 'Sogeking' } },
        { episode: 746, value: { it: 'Dio Usop', en: 'God Usopp' } },
      ],
      bounty: [
        { episode: 320, value: 30_000_000 },
        { episode: 746, value: 200_000_000 },
        { episode: 1086, value: 500_000_000 },
      ],
    },
    'kaya': {
      role: { it: 'Erede della villa', en: 'Heiress of the mansion' },
      log: {
        it: 'Ha ereditato una casa enorme e un patrimonio che non le interessa, e non esce dalla sua stanza da quando ha perso i genitori. Il maggiordomo le porta la medicina a ore fisse e le ricorda di riposare. L’unica cosa che aspetta davvero è la voce sotto la finestra di un ragazzo che le racconta mari che non ha mai visto.',
        en: 'She inherited an enormous house and a fortune she has no interest in, and has not left her room since her parents died. The butler brings her medicine at fixed hours and reminds her to rest. The only thing she truly waits for is the voice under her window, a boy telling her about seas he has never seen.',
      },
      affiliation: [
        {
          episode: 9,
          value: {
            it: 'Erede della villa del Villaggio di Syrup',
            en: 'Heiress of the Syrup Village mansion',
          },
        },
      ],
      origin: [{ episode: 9, value: SYRUP_VILLAGE }],
    },
    'kuro': {
      role: {
        it: 'Capitano dei Pirati del Gatto Nero',
        en: 'Captain of the Black Cat Pirates',
      },
      log: {
        it: 'Da tre anni serve il tè alla padrona della villa sotto il nome di Klahadore, e nessuno in paese ricorda chi fosse prima. Si spinge gli occhiali sul naso con il palmo aperto, perché con le lame che porta non può usare le dita. Il piano che sta eseguendo è cominciato prima che il villaggio sapesse il suo nome, e non prevede testimoni.',
        en: 'For three years he has served tea to the mistress of the mansion under the name Klahadore, and nobody in the village remembers who he was before. He pushes his glasses up with an open palm, because the blades he wears leave him no use of his fingers. The plan he is carrying out began before the village knew his name, and it allows for no witnesses.',
      },
      affiliation: [
        {
          episode: 9,
          value: {
            it: 'Pirati del Gatto Nero, capitano, nascosto da maggiordomo',
            en: 'Black Cat Pirates, captain, hidden as a butler',
          },
        },
        {
          episode: 17,
          value: { it: 'Sconfitto, in fuga', en: 'Defeated, fled' },
        },
      ],
      epithet: [
        {
          episode: 9,
          value: { it: 'Kuro dai Cento Piani', en: 'Kuro of a Hundred Plans' },
        },
      ],
      bounty: [{ episode: 9, value: 16_000_000 }],
    },
    'jango': {
      role: { it: 'Ipnotizzatore', en: 'Hypnotist' },
      log: {
        it: 'Conta fino a uno facendo dondolare un anello, e chi lo guarda fa esattamente quello che dice, compreso lui stesso. È arrivato al villaggio in avanscoperta per conto del suo capitano e passa le giornate a farsi notare nel modo peggiore, ballando in mezzo alla strada. Sotto la giacca tiene una fila di anelli affilati.',
        en: 'He counts down to one with a swinging ring, and whoever watches does exactly what he says, himself included. He came to the village ahead of his captain and spends his days being noticed in the worst possible way, dancing in the middle of the road. Under his coat he keeps a row of sharpened rings.',
      },
      affiliation: [
        {
          episode: 9,
          value: {
            it: 'Pirati del Gatto Nero, primo ufficiale',
            en: 'Black Cat Pirates, first mate',
          },
        },
      ],
      bounty: [{ episode: 9, value: 9_000_000 }],
    },
    'merry': {
      role: { it: 'Maggiordomo della villa', en: 'Butler of the mansion' },
      log: {
        it: 'Serve la famiglia da prima che la padrona nascesse e conosce ogni voce del patrimonio, comprese le navi ferme nel cantiere. Sono sue le carte, le firme e le visite, e sua anche l’insistenza perché la ragazza riposi. Le sue giornate finiscono sempre alla stessa ora, con il vassoio del tè portato di sopra.',
        en: 'He has served the family since before his mistress was born and knows every line of the estate, the ships laid up in the yard included. The papers, the signatures and the callers are his, and so is the constant insistence that the girl should rest. His days end the same way each time, with the tea tray carried upstairs.',
      },
      affiliation: [
        {
          episode: 9,
          value: {
            it: 'Maggiordomo della villa del Villaggio di Syrup',
            en: 'Butler of the Syrup Village mansion',
          },
        },
      ],
      origin: [{ episode: 9, value: SYRUP_VILLAGE }],
    },
    'gaimon': {
      role: { it: 'Guardiano dell’isola', en: 'Keeper of the island' },
      log: {
        it: 'È arrivato sull’isola da giovane con una ciurma, è caduto in una fenditura ed è rimasto incastrato dentro un baule, e la nave è ripartita senza di lui. Da vent’anni aspetta di aprire i forzieri che vede sulla scogliera, convinto che dentro ci sia il tesoro per cui ha perso tutto. Nel frattempo ha fatto amicizia con ogni animale dell’isola.',
        en: 'He came ashore young with a crew, fell into a crevice and wedged himself inside a chest, and the ship sailed without him. For twenty years he has been waiting to open the strongboxes he can see on the cliff, certain that the treasure he lost everything for is inside them. In the meantime he has befriended every animal on the island.',
      },
      affiliation: [
        {
          episode: 18,
          value: {
            it: 'Nessuna: custode di un’isola di animali strani',
            en: 'None: keeper of an island of strange animals',
          },
        },
      ],
    },
    'kuina': {
      role: { it: 'Spadaccina del dojo', en: 'Swordsman of the dojo' },
      log: {
        it: 'Nel dojo di suo padre nessuno le tiene testa, men che meno il ragazzo che la sfida ogni giorno con due spade di legno e perde ogni volta. Vuole diventare la più grande spadaccina del mondo e teme che il corpo, crescendo, le tolga quello che adesso ha. Una sera, sulla scala del dojo, i due si promettono che uno dei due ci arriverà.',
        en: 'In her father’s dojo nobody can hold her, least of all the boy who challenges her daily with two wooden swords and loses every time. She means to become the greatest swordsman in the world, and fears that growing up will take from her what she has now. One evening on the dojo steps the two of them promise that one of them will get there.',
      },
      affiliation: [
        {
          episode: 19,
          value: {
            it: 'Dojo del villaggio, figlia del maestro',
            en: 'Village dojo, the master’s daughter',
          },
        },
      ],
      origin: [{ episode: 19, value: EAST_BLUE }],
    },
    'johnny': {
      role: { it: 'Cacciatore di taglie', en: 'Bounty hunter' },
      log: {
        it: 'Ha lavorato per un po’ a fianco di un cacciatore di pirati con tre spade e da allora lo chiama fratello, anche se non lo vede da mesi. Adesso batte le rotte con Yosaku, un manifesto alla volta, e spende quello che guadagna prima di arrivare al porto seguente. Quando il socio si accascia sul ponte, non sa che cosa fare e si mette a piangere.',
        en: 'He worked for a while beside a pirate hunter with three swords and has called him brother ever since, though it has been months. Now he works the sea lanes with Yosaku, one poster at a time, and spends what he earns before the next port. When his partner collapses on deck, he has no idea what to do and starts to cry.',
      },
      affiliation: [
        {
          episode: 19,
          value: {
            it: 'Cacciatore di taglie, insieme a Yosaku',
            en: 'Bounty hunter, with Yosaku',
          },
        },
      ],
    },
    'yosaku': {
      role: { it: 'Cacciatore di taglie', en: 'Bounty hunter' },
      log: {
        it: 'Va a caccia di taglie con Johnny da anni e non ha mai pensato che un pirata potesse fare qualcosa per lui. Si accascia sul ponte di colpo, convinto di essere in punto di morte per una maledizione: è scorbuto, e bastano dei limoni. Rimesso in piedi, decide che quella ciurma merita di essere seguita almeno per un tratto di mare.',
        en: 'He has hunted bounties with Johnny for years and never thought a pirate might do anything for him. He goes down on deck all at once, certain that a curse is killing him: it is scurvy, and limes are enough. Back on his feet, he decides that crew is worth following for at least a stretch of sea.',
      },
      affiliation: [
        {
          episode: 19,
          value: {
            it: 'Cacciatore di taglie, insieme a Johnny',
            en: 'Bounty hunter, with Johnny',
          },
        },
      ],
    },
    'sanji': {
      role: { it: 'Cuoco', en: 'Cook' },
      log: {
        it: 'Cucina al Baratie sotto un vecchio con una gamba di legno che lo chiama moccioso, e prende a calci chiunque sprechi il cibo. Non usa mai le mani in combattimento: le mani di un cuoco sono per la cucina. Sogna un mare leggendario dove si trovano tutti i pesci del mondo, e non lo dice a nessuno che possa riderne.',
        en: 'He cooks at the Baratie under an old man with a peg leg who calls him a brat, and kicks anyone who wastes food. He never uses his hands in a fight: a cook’s hands are for the kitchen. He dreams of a legendary sea where every fish in the world can be found, and tells nobody who might laugh.',
      },
      affiliation: [
        {
          episode: 20,
          value: { it: 'Baratie, vice-cuoco', en: 'Baratie, sous-chef' },
        },
        { episode: 30, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 20,
          value: { it: 'Il Baratie, East Blue', en: 'The Baratie, East Blue' },
        },
        {
          episode: 793,
          value: {
            it: 'Regno di Germa, North Blue',
            en: 'Germa Kingdom, North Blue',
          },
        },
      ],
      epithet: [{ episode: 320, value: { it: 'Gamba Nera', en: 'Black Leg' } }],
      bounty: [
        { episode: 320, value: 77_000_000 },
        { episode: 746, value: 177_000_000 },
        { episode: 879, value: 330_000_000 },
        { episode: 1086, value: 1_032_000_000 },
      ],
    },
    'zeff': {
      role: { it: 'Proprietario del Baratie', en: 'Owner of the Baratie' },
      log: {
        it: 'Comanda il suo ristorante galleggiante come si comanda una nave, a urla e a calci, e nessun cuoco osa rispondergli. Ha una gamba di legno e non spiega a nessuno come l’ha persa. A bordo vale una regola sola, che nemmeno lui si permette di discutere: nessuno che abbia fame se ne va senza mangiare, pirata o marinaio che sia.',
        en: 'He runs his floating restaurant the way a ship is run, by shouting and by kicking, and no cook dares answer back. He has a peg leg and explains to nobody how he lost it. One rule holds aboard, and not even he argues with it: nobody who is hungry leaves without eating, pirate or Marine.',
      },
      affiliation: [
        {
          episode: 20,
          value: {
            it: 'Baratie, proprietario e capocuoco',
            en: 'Baratie, owner and head chef',
          },
        },
        {
          episode: 21,
          value: {
            it: 'Ex capitano pirata, adesso cuoco',
            en: 'Former pirate captain, now a chef',
          },
        },
      ],
      epithet: [{ episode: 21, value: { it: 'Gamba Rossa', en: 'Red Leg' } }],
    },
    'gin': {
      role: { it: 'Naufrago armato', en: 'Armed castaway' },
      log: {
        it: 'Arriva al ristorante quasi morto di fame, dopo giorni alla deriva, e punta la pistola contro il primo cuoco che incontra. Il piatto che si vede servire lo lascia senza parole e senza difese. Ringrazia, paga a modo suo e se ne va, dicendo a quel cuoco che farebbe bene a non restare troppo a lungo in questo mare.',
        en: 'He reaches the restaurant half dead of hunger after days adrift, and points his pistol at the first cook he meets. The plate he is handed leaves him with nothing to say and no defences left. He thanks the man, pays in his own way and goes, telling that cook he would do well not to stay long in this sea.',
      },
      affiliation: [
        {
          episode: 21,
          value: {
            it: 'Pirati di Creek, primo ufficiale',
            en: 'Krieg Pirates, first mate',
          },
        },
      ],
      epithet: [{ episode: 21, value: { it: 'Uomo Demone', en: 'Man-Demon' } }],
    },
    'don-krieg': {
      role: {
        it: 'Ammiraglio della flotta di Creek',
        en: 'Admiral of the Krieg armada',
      },
      log: {
        it: 'Ha messo insieme la flotta più grande dell’East Blue issando bandiera bianca e attaccando chiunque si avvicinasse. È entrato nella Rotta Maggiore con cinquanta navi e ne è uscito con una sola, ridotta a un relitto, e non vuole dire che cosa l’abbia distrutta. Appena rimesso in piedi, ordina ai suoi uomini di prendersi il ristorante che gli ha dato da mangiare.',
        en: 'He built the largest fleet in the East Blue by running up a white flag and attacking whoever came close. He entered the Grand Line with fifty ships and came out with one wreck, and will not say what destroyed it. The moment he is back on his feet, he orders his men to take the restaurant that fed him.',
      },
      affiliation: [
        {
          episode: 22,
          value: {
            it: 'Pirati di Creek, ammiraglio di una flotta di cinquanta navi',
            en: 'Krieg Pirates, admiral of a fifty-ship armada',
          },
        },
        {
          episode: 30,
          value: { it: 'Sconfitto, in fuga', en: 'Defeated, fled' },
        },
      ],
      origin: [{ episode: 22, value: EAST_BLUE }],
      epithet: [
        {
          episode: 22,
          value: { it: 'Creek il Traditore', en: 'Foul Play Krieg' },
        },
      ],
      bounty: [{ episode: 22, value: 17_000_000 }],
    },
    'pearl': {
      role: {
        it: 'Scudo dei Pirati di Creek',
        en: 'Shield of the Krieg Pirates',
      },
      log: {
        it: 'Porta addosso tre scudi rotondi e sostiene di non aver mai perso una goccia di sangue in tutta la sua carriera. È il vanto dei Pirati di Creek, quello che mandano avanti quando serve un muro. Se però vede il proprio sangue perde la testa, e allora incendia tutto quello che ha intorno senza guardare chi ci sia in mezzo.',
        en: 'He wears three round shields and claims he has never lost a drop of blood in his whole career. He is the Krieg crew’s boast, the one they send forward when a wall is needed. The moment he sees his own blood, though, he loses his head and sets fire to everything around him without looking at who is in the way.',
      },
      affiliation: [
        {
          episode: 23,
          value: {
            it: 'Pirati di Creek, scudo imbattuto',
            en: 'Krieg Pirates, unbeaten shield',
          },
        },
      ],
      epithet: [
        { episode: 23, value: { it: 'Muro di Ferro', en: 'Iron Wall' } },
      ],
    },
    'dracule-mihawk': {
      role: {
        it: 'Lo spadaccino più forte del mondo',
        en: 'The strongest swordsman in the world',
      },
      log: {
        it: 'Ha inseguito una flotta pirata dall’altra parte del mondo fin nell’East Blue per noia, e l’ha ridotta a relitti. Accetta il duello di uno sconosciuto con tre spade e lo affronta con un coltellino, perché una spada vera sarebbe uno spreco. Quando quello sconosciuto rifiuta di arretrare, gli lascia una ferita e un invito a superarlo.',
        en: 'He chased a pirate fleet from the other side of the world into East Blue out of boredom, and left it in splinters. He accepts a duel from a stranger with three swords and fights him with a paring knife, because a real blade would be a waste. When that stranger refuses to step back, he leaves him a scar and an invitation to surpass him.',
      },
      affiliation: [
        {
          episode: 24,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      epithet: [
        { episode: 24, value: { it: 'Occhi di Falco', en: 'Hawk-Eye' } },
      ],
      bounty: [{ episode: 1088, value: 3_590_000_000 }],
    },
    'arlong': {
      role: {
        it: 'Capitano dei Pirati di Arlong',
        en: 'Captain of the Arlong Pirates',
      },
      log: {
        it: 'Ha costruito un parco sul mare e da otto anni riscuote una tassa su ogni testa dei villaggi vicini: chi non paga muore, e la Marina della zona guarda altrove. Considera gli uomini una specie inferiore e lo ripete come si ripete un dato di fatto. Tiene nella sua ciurma una ragazza umana che disegna le mappe per lui, e la chiama la sua cartografa.',
        en: 'He built a park on the water and for eight years has collected a tax on every head in the villages nearby: those who cannot pay die, and the local Marines look elsewhere. He holds humans to be a lesser species and says so the way a man states a fact. He keeps a human girl in his crew who draws his maps for him, and calls her his cartographer.',
      },
      affiliation: [
        {
          episode: 31,
          value: {
            it: 'Pirati di Arlong, capitano',
            en: 'Arlong Pirates, captain',
          },
        },
        {
          episode: 44,
          value: {
            it: 'Sconfitto, in arresto dalla Marina',
            en: 'Defeated, under Marine arrest',
          },
        },
      ],
      origin: [{ episode: 34, value: FISH_MAN_ISLAND }],
      epithet: [
        { episode: 31, value: { it: 'Dente di Sega', en: 'Saw-Tooth' } },
      ],
      bounty: [{ episode: 31, value: 20_000_000 }],
    },
    'hatchan': {
      role: {
        it: 'Spadaccino dei Pirati di Arlong',
        en: 'Swordsman of the Arlong Pirates',
      },
      log: {
        it: 'Tiene una spada per ognuna delle sue sei braccia e le fa girare tutte insieme in uno stile che ha inventato da sé. È il più semplice della ciurma di Arlong, ride forte e si commuove in fretta, e niente di tutto questo gli impedisce di fare quello che il suo capitano ordina. Canta mentre combatte, e la canzone è l’unica cosa che lo tradisce.',
        en: 'He holds a sword in each of his six arms and swings them all at once in a style he invented himself. He is the simplest of Arlong’s crew, quick to laugh and quick to cry, and none of that stops him doing what his captain orders. He sings while he fights, and the song is the one thing that gives him away.',
      },
      affiliation: [
        { episode: 31, value: ARLONG_OFFICER },
        {
          episode: 44,
          value: {
            it: 'Sconfitto, in arresto dalla Marina',
            en: 'Defeated, under Marine arrest',
          },
        },
        {
          episode: 386,
          value: {
            it: 'Venditore di takoyaki a Sabaody',
            en: 'Takoyaki seller at Sabaody',
          },
        },
      ],
      origin: [{ episode: 34, value: FISH_MAN_ISLAND }],
    },
    'kuroobi': {
      role: { it: 'Maestro di karate', en: 'Karate master' },
      log: {
        it: 'Ha studiato il karate degli uomini-pesce fino a poter colpire attraverso l’acqua, e considera il combattimento una disciplina, non una rissa. Parla poco e spiega volentieri quanto un uomo gli sia inferiore, con la calma di chi enuncia una regola. Nel parco di Arlong è l’unico a cui importi ancora della forma.',
        en: 'He has studied fish-man karate until he can strike through water itself, and treats fighting as a discipline rather than a brawl. He says little, and explains gladly how far beneath him a human is, with the calm of a man reciting a rule. In Arlong’s park he is the only one who still cares about form.',
      },
      affiliation: [{ episode: 31, value: ARLONG_OFFICER }],
      origin: [{ episode: 34, value: FISH_MAN_ISLAND }],
    },
    'chew': {
      role: {
        it: 'Tiratore dei Pirati di Arlong',
        en: 'Marksman of the Arlong Pirates',
      },
      log: {
        it: 'Aspira l’acqua del mare e la rilascia in un getto che buca il legno a decine di metri di distanza, e per questo nel parco di Arlong nessuno gli sta mai davanti. Beve mentre combatte e non ha bisogno di ricaricare finché ha il mare sotto di sé. Sotto il tavolo tiene anche un fucile, per quando l’acqua non basta.',
        en: 'He draws in seawater and lets it go in a jet that punches through timber at dozens of paces, which is why nobody in Arlong’s park stands in front of him. He drinks while he fights and never needs to reload as long as the sea is beneath him. Under the table he keeps a rifle too, for when water is not enough.',
      },
      affiliation: [{ episode: 31, value: ARLONG_OFFICER }],
      origin: [{ episode: 34, value: FISH_MAN_ISLAND }],
    },
    'nojiko': {
      role: { it: 'Sorella di Nami', en: 'Nami’s sister' },
      log: {
        it: 'Lavora da sola il frutteto sulla collina e ogni anno paga agli uomini-pesce il tributo senza discutere, come tutto il villaggio. Di sua sorella non parla con nessuno, né con gli estranei né con gli amici, e lascia che gli altri la credano una ladra qualunque. Quando qualcuno le chiede spiegazioni, risponde con il silenzio o con una pala in mano.',
        en: 'She works the hillside orchard alone and pays the fish-men their tribute every year without arguing, as the whole village does. She speaks of her sister to nobody, stranger or friend, and lets the rest of them take her for an ordinary thief. When somebody asks her for an explanation, she answers with silence or with a shovel in her hand.',
      },
      affiliation: [
        {
          episode: 31,
          value: {
            it: 'Coltivatrice di mandarini; sorella di Nami',
            en: 'Mandarin grower; Nami’s sister',
          },
        },
      ],
      origin: [{ episode: 31, value: COCOYASI_VILLAGE }],
    },
    'genzo': {
      role: { it: 'Poliziotto del villaggio', en: 'Village sheriff' },
      log: {
        it: 'Tiene l’ordine in un paese che non ha più niente da difendere, e ogni anno raccoglie il denaro del tributo casa per casa. Porta una girandola sul cappello e non spiega a nessuno perché. Ha visto che fine fa chi prova a ribellarsi, e da allora impone al villaggio una pazienza che odia.',
        en: 'He keeps order in a town with nothing left to defend, and every year he collects the tribute money house by house. He wears a pinwheel on his cap and explains it to nobody. He has seen what happens to those who resist, and since then he holds the village to a patience he hates.',
      },
      affiliation: [
        {
          episode: 31,
          value: {
            it: 'Villaggio di Cocoyashi, poliziotto',
            en: 'Cocoyasi Village, sheriff',
          },
        },
      ],
      origin: [{ episode: 31, value: COCOYASI_VILLAGE }],
    },
    'bell-mere': {
      role: {
        it: 'Ex marine, coltivatrice di mandarini',
        en: 'Former Marine, mandarin grower',
      },
      log: {
        it: 'Torna dalla guerra senza niente e con due bambine che non sono sue, e le tiene lo stesso, in una casa dove spesso si mangia una volta al giorno. Coltiva un frutteto di mandarini che rende poco e litiga con le figlie come si litiga in famiglia. Quando gli uomini-pesce arrivano a contare le teste, non dice mai di non essere la loro madre.',
        en: 'She comes home from a war with nothing and two girls who are not hers, and keeps them anyway, in a house where a meal a day is often all there is. She works a mandarin orchard that barely pays and argues with her daughters the way families argue. When the fish-men come counting heads, she never once says she is not their mother.',
      },
      affiliation: [
        {
          episode: 34,
          value: {
            it: 'Ex marine; coltivatrice di mandarini, madre di Nami e Nojiko',
            en: 'Former Marine; mandarin grower, Nami’s and Nojiko’s mother',
          },
        },
      ],
      origin: [{ episode: 34, value: COCOYASI_VILLAGE }],
    },
    'nezumi': {
      role: { it: 'Capitano della Marina', en: 'Marine captain' },
      log: {
        it: 'Comanda la sedicesima base e da anni chiude gli occhi su tutto quello che accade nelle isole che dovrebbe proteggere, in cambio di una parte del riscosso. Si presenta con i soldati in divisa e chiama legge quello che è un saccheggio. Appena qualcuno gli mette una mano addosso, ricorda subito a tutti chi rappresenta.',
        en: 'He commands the sixteenth branch and has for years closed his eyes to everything that happens on the islands he is meant to protect, in exchange for a share. He arrives with uniformed men and calls a robbery the law. The moment anyone lays a hand on him, he reminds everybody who he represents.',
      },
      affiliation: [
        {
          episode: 36,
          value: {
            it: 'Marina, capitano della sedicesima base',
            en: 'Marines, captain of the 16th branch',
          },
        },
      ],
    },
    'smoker': {
      role: { it: 'Capitano della Marina', en: 'Marine captain' },
      log: {
        it: 'Comanda la base di Loguetown, la città dove il Re dei Pirati fu eseguito e da cui ogni pirata dell’East Blue parte per la Rotta Maggiore. Il suo corpo diventa fumo, e nessuno di quelli che ha inseguito è arrivato al mare aperto. Non fa eccezioni per i ragazzi di gomma.',
        en: 'He commands the base at Loguetown, the town where the Pirate King was executed and from which every East Blue pirate sets out for the Grand Line. His body turns to smoke, and none of the pirates he has chased has reached open water. He makes no exceptions for rubber boys.',
      },
      affiliation: [
        {
          episode: 49,
          value: { it: 'Marina, capitano', en: 'Marines, captain' },
        },
        {
          episode: 130,
          value: { it: 'Marina, commodoro', en: 'Marines, commodore' },
        },
        {
          episode: 517,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      epithet: [
        { episode: 49, value: { it: 'Cacciatore Bianco', en: 'White Hunter' } },
      ],
      devilFruit: [{ episode: 49, value: ['smoke-smoke-fruit'] }],
    },
    'tashigi': {
      role: { it: 'Sergente della Marina', en: 'Marine sergeant' },
      log: {
        it: 'Serve a Loguetown agli ordini di un capitano che fuma due sigari alla volta, e lo segue con una katana più alta di lei. Riconosce una spada pregiata a colpo d’occhio e si è messa in testa di strapparle tutte alle mani sbagliate. Cade, perde gli occhiali e chiede scusa, e nessuno dei suoi uomini si permette di riderne.',
        en: 'She serves at Loguetown under a captain who smokes two cigars at once, and follows him with a katana taller than she is. She knows a fine sword at a glance and has decided to take every one of them out of the wrong hands. She trips, loses her glasses and apologises, and none of her men would dare laugh.',
      },
      affiliation: [
        {
          episode: 49,
          value: {
            it: 'Marina, sergente maggiore agli ordini di Smoker',
            en: 'Marines, sergeant major under Smoker',
          },
        },
        {
          episode: 130,
          value: { it: 'Marina, guardiamarina', en: 'Marines, ensign' },
        },
        {
          episode: 517,
          value: { it: 'Marina, capitano', en: 'Marines, captain' },
        },
      ],
    },
    'monkey-d-dragon': {
      role: {
        it: 'Capo dell’Armata Rivoluzionaria',
        en: 'Head of the Revolutionary Army',
      },
      log: {
        it: 'Garp lo nomina una volta sola, a denti stretti, davanti a un nipote che non sapeva nemmeno di avere un padre: è a capo dell’Armata Rivoluzionaria ed è l’uomo più ricercato dal Governo Mondiale. A Loguetown, sotto la pioggia, un incappucciato aveva fermato la lama sopra la testa di Rufy e se n’era andato senza dire il proprio nome. Era lui.',
        en: 'Garp names him once, through his teeth, in front of a grandson who did not know he had a father at all: he leads the Revolutionary Army and is the man the World Government wants most. At Loguetown, in the rain, a hooded figure stopped the blade above Luffy’s head and walked away without giving a name. It was him.',
      },
      affiliation: [
        {
          episode: 314,
          value: {
            it: 'Armata Rivoluzionaria, comandante supremo',
            en: 'Revolutionary Army, supreme commander',
          },
        },
      ],
      epithet: [
        {
          episode: 314,
          value: { it: 'Il Rivoluzionario', en: 'the Revolutionary' },
        },
      ],
    },
  },
}
