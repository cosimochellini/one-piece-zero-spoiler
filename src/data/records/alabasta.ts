import { alabastaChronicles } from './alabasta.chronicle'
import type { Saga } from './saga'

/**
 * The Alabasta saga, episodes 62 to 135: over Reverse Mountain into the
 * Grand Line, a whale, two giants, a snow kingdom, and a desert war run by
 * an organisation rather than a pirate.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

const BW_AGENT_ROLE = {
  it: 'Agente di Baroque Works',
  en: 'Baroque Works agent',
}

const BW = { it: 'Baroque Works', en: 'Baroque Works' }

const BW_OFFICER_ROLE = {
  it: 'Agente ufficiale di Baroque Works',
  en: 'Baroque Works officer agent',
}

const BW_OFFICER = {
  it: 'Baroque Works, agente ufficiale',
  en: 'Baroque Works, officer agent',
}

const BW_FRONTIER_ROLE = { it: 'Agente di frontiera', en: 'Frontier agent' }

const BW_FRONTIER = {
  it: 'Baroque Works, agente di frontiera',
  en: 'Baroque Works, frontier agent',
}

const UNLUCKIES_ROLE = {
  it: 'Messaggero di Baroque Works',
  en: 'Baroque Works messenger',
}

const UNLUCKIES = {
  it: 'Baroque Works, gli Unluckies',
  en: 'Baroque Works, the Unluckies',
}

const DRUM_KINGDOM = { it: 'Regno di Drum', en: 'Drum Kingdom' }

const IMPEL_DOWN = {
  it: 'Prigioniero di Impel Down',
  en: 'Prisoner of Impel Down',
}

const ALABASTA = { it: 'Alabasta', en: 'Alabasta' }

const DRUM_ISLAND = { it: 'Isola di Drum', en: 'Drum Island' }

export const alabasta: Saga = {
  entries: [
    {
      id: 'reverse-mountain',
      kind: 'arc',
      revealedAtEpisode: 62,
      revealedAtChapter: 101,
      name: { it: 'Reverse Mountain', en: 'Reverse Mountain' },
      summary: {
        it: 'Una montagna al confine della Rotta Maggiore dove il mare scorre in salita: le correnti dei quattro mari la risalgono fino alla vetta, e da lì le navi precipitano nella Rotta Maggiore.',
        en: 'A mountain at the edge of the Grand Line where the sea runs uphill: the currents of the four seas climb it to the summit, and from there ships drop into the Grand Line.',
      },
      visual: { art: 'reverse-mountain', tint: 'teal' },
    },
    {
      id: 'laboon',
      kind: 'character',
      revealedAtEpisode: 62,
      revealedAtChapter: 105,
      name: { it: 'Labon', en: 'Laboon' },
      summary: {
        it: 'Una balena grande come un’isola che aspetta davanti alla Montagna Inversa, con la fronte piena di cicatrici perché la sbatte contro la scogliera.',
        en: 'A whale the size of an island waiting at Reverse Mountain, his forehead scarred from beating it against the cliff.',
      },
      visual: { art: 'laboon', tint: 'ivory' },
    },
    {
      id: 'crocus',
      kind: 'character',
      revealedAtEpisode: 62,
      revealedAtChapter: 105,
      name: { it: 'Crocus', en: 'Crocus' },
      summary: {
        it: 'Il guardiano del faro di Capo Gemello, un vecchio con la camicia a fiori che vive dentro la balena di cui si prende cura.',
        en: 'The keeper of the Twin Cape lighthouse, an old man in a flowered shirt who lives inside the whale he looks after.',
      },
      visual: { art: 'crocus', tint: 'teal' },
    },
    {
      id: 'mr-9',
      kind: 'character',
      revealedAtEpisode: 63,
      revealedAtChapter: 107,
      name: { it: 'Mister 9', en: 'Mr. 9' },
      summary: {
        it: 'Un agente con la corona in testa e due mazze d’acciaio alla cintura, che parla come un attore e non dice mai per chi lavora.',
        en: 'An agent in a crown with two steel bats at his belt, who talks like an actor and never says who he works for.',
      },
      visual: { art: 'mr-9', tint: 'blue' },
    },
    {
      id: 'whisky-peak-arc',
      kind: 'arc',
      revealedAtEpisode: 64,
      revealedAtChapter: 106,
      name: { it: 'Whisky Peak', en: 'Whisky Peak' },
      summary: {
        it: 'Una città della Rotta Maggiore fatta di rocce a forma di cactus, dove cento abitanti accolgono ogni pirata con un banchetto e un brindisi.',
        en: 'A Grand Line town of cactus-shaped rocks, where a hundred townspeople greet every pirate with a banquet and a toast.',
      },
      visual: { art: 'whisky-peak-arc', tint: 'acid' },
    },
    {
      id: 'igaram',
      kind: 'character',
      revealedAtEpisode: 64,
      revealedAtChapter: 114,
      name: { it: 'Igaram', en: 'Igaram' },
      summary: {
        it: 'Il capo di una città che accoglie i pirati a braccia aperte, con i bigodini in testa e un sassofono che spara pallottole.',
        en: 'The head of a town that welcomes pirates with open arms, curlers in his hair and a saxophone that fires bullets.',
      },
      visual: { art: 'igaram', tint: 'yellow' },
    },
    {
      id: 'miss-monday',
      kind: 'character',
      revealedAtEpisode: 64,
      revealedAtChapter: 114,
      name: { it: 'Miss Monday', en: 'Miss Monday' },
      summary: {
        it: 'Un’agente vestita da suora che serve da bere ai pirati durante il banchetto e poi li solleva da terra con una mano sola.',
        en: 'An agent dressed as a nun who pours drinks for pirates at the banquet, then lifts them off the ground with one hand.',
      },
      visual: { art: 'miss-monday', tint: 'sand' },
    },
    {
      id: 'karoo',
      kind: 'character',
      revealedAtEpisode: 65,
      revealedAtChapter: 114,
      name: { it: 'Carue', en: 'Karoo' },
      summary: {
        it: 'Un’anatra da corsa con la sella sul dorso e la borraccia al collo, che porta la sua padrona più veloce di un cavallo.',
        en: 'A racing duck with a saddle on his back and a canteen at his neck, carrying his mistress faster than a horse.',
      },
      visual: { art: 'karoo', tint: 'orange' },
    },
    {
      id: 'whisky-peak',
      kind: 'place',
      revealedAtEpisode: 64,
      revealedAtChapter: 107,
      name: { it: 'Whisky Peak', en: 'Whisky Peak' },
      summary: {
        it: 'La prima isola della Rotta Maggiore su cui la ciurma sbarca, una città che accoglie i pirati con applausi e liquore, tra rocce a forma di cactus coperte di tombe.',
        en: 'The crew’s first island on the Grand Line, a town that cheers pirates ashore with liquor and a party, among cactus-shaped rocks covered in graves.',
      },
      visual: { art: 'whisky-peak', tint: 'lavender' },
    },
    {
      id: 'mr-5',
      kind: 'character',
      revealedAtEpisode: 66,
      revealedAtChapter: 114,
      name: { it: 'Mister 5', en: 'Mr. 5' },
      summary: {
        it: 'Un agente il cui corpo è esplosivo: si stacca di dosso un pezzetto qualsiasi e lo lancia come una pallottola che scoppia.',
        en: 'An agent whose body is an explosive: he flicks away some small piece of himself and it goes off like a bullet.',
      },
      visual: { art: 'mr-5', tint: 'ocher' },
    },
    {
      id: 'miss-valentine',
      kind: 'character',
      revealedAtEpisode: 66,
      revealedAtChapter: 114,
      name: { it: 'Miss Valentine', en: 'Miss Valentine' },
      summary: {
        it: 'Un’agente che scende dal cielo ridendo appesa a un ombrello giallo limone, e che cambia peso per schiacciare chi sta sotto.',
        en: 'An agent who drifts down laughing under a lemon-yellow umbrella, changing her weight to crush whoever is below.',
      },
      visual: { art: 'miss-valentine', tint: 'yellow' },
    },
    {
      id: 'nefertari-vivi',
      kind: 'character',
      revealedAtEpisode: 67,
      revealedAtChapter: 114,
      name: { it: 'Nefertari Bibi', en: 'Nefertari Vivi' },
      summary: {
        it: 'Una principessa che si è infiltrata sotto falso nome in un’organizzazione criminale per scoprire chi vuole rovesciare il suo regno, e che ora quell’organizzazione vuole morta.',
        en: 'A princess who joined a criminal organisation under a false name to learn who is trying to topple her kingdom, and whom that organisation now wants dead.',
      },
      visual: { art: 'nefertari-vivi', tint: 'azure' },
    },
    {
      id: 'little-garden-arc',
      kind: 'arc',
      revealedAtEpisode: 70,
      revealedAtChapter: 115,
      name: { it: 'Little Garden', en: 'Little Garden' },
      summary: {
        it: 'Un’isola preistorica della Rotta Maggiore, con due vulcani che fumano sopra le felci e ossa di dinosauro grandi come una nave.',
        en: 'A prehistoric island on the Grand Line, two volcanoes smoking above the ferns and dinosaur bones as big as a ship.',
      },
      visual: { art: 'little-garden-arc', tint: 'green' },
    },
    {
      id: 'mr-3',
      kind: 'character',
      revealedAtEpisode: 70,
      revealedAtChapter: 120,
      name: { it: 'Mister 3', en: 'Mr. 3' },
      summary: {
        it: 'Un agente con i capelli a forma di tre che produce cera dal corpo e la indurisce, costruendo trappole e statue attorno alle sue prede.',
        en: 'An agent with hair shaped like a three who makes wax from his body and hardens it into traps and statues around his prey.',
      },
      visual: { art: 'mr-3', tint: 'ivory' },
    },
    {
      id: 'miss-goldenweek',
      kind: 'character',
      revealedAtEpisode: 70,
      revealedAtChapter: 120,
      name: { it: 'Miss Goldenweek', en: 'Miss Goldenweek' },
      summary: {
        it: 'Una ragazzina che si siede a dipingere in mezzo al combattimento, con la tavolozza sulle ginocchia e un biscotto di riso in bocca.',
        en: 'A small girl who sits down to paint in the middle of a fight, a palette on her knees and a rice cracker in her mouth.',
      },
      visual: { art: 'miss-goldenweek', tint: 'pink' },
    },
    {
      id: 'dorry',
      kind: 'character',
      revealedAtEpisode: 71,
      revealedAtChapter: 120,
      name: { it: 'Dorry', en: 'Dorry' },
      summary: {
        it: 'Un gigante alto quanto una torre che vive a Little Garden, con uno scudo rotondo e una spada, e duella da cento anni con un vecchio amico.',
        en: 'A giant as tall as a tower living on Little Garden, round shield and sword in hand, a hundred years into a duel with an old friend.',
      },
      visual: { art: 'dorry', tint: 'green' },
    },
    {
      id: 'brogy',
      kind: 'character',
      revealedAtEpisode: 71,
      revealedAtChapter: 120,
      name: { it: 'Broggy', en: 'Brogy' },
      summary: {
        it: 'Un gigante dalla barba rossa che ride fino a scuotere la terra, con un’ascia enorme e un duello che va avanti da cento anni.',
        en: 'A red-bearded giant whose laugh shakes the ground, an enormous axe on his shoulder and a duel a hundred years old.',
      },
      visual: { art: 'brogy', tint: 'vermilion' },
    },
    {
      id: 'little-garden',
      kind: 'place',
      revealedAtEpisode: 70,
      revealedAtChapter: 115,
      name: { it: 'Little Garden', en: 'Little Garden' },
      summary: {
        it: 'Un’isola di giungla della Rotta Maggiore rimasta ferma all’età dei dinosauri, che prende il nome da ciò che è per chi ci abita: un piccolo giardino.',
        en: 'A jungle island on the Grand Line still living in the age of the dinosaurs, named for what it is to those who live there: a small garden.',
      },
      visual: { art: 'little-garden', tint: 'teal' },
    },
    {
      id: 'drum-island-arc',
      kind: 'arc',
      revealedAtEpisode: 80,
      revealedAtChapter: 130,
      name: { it: 'Isola di Drum', en: 'Drum Island' },
      summary: {
        it: 'Un’isola sepolta dalla neve, con un castello issato in cima a una vetta a forma di tamburo e un paese rimasto senza medici.',
        en: 'An island buried in snow, a castle perched on a drum-shaped peak, and a town left without a single doctor.',
      },
      visual: { art: 'drum-island-arc', tint: 'ice' },
    },
    {
      id: 'wapol',
      kind: 'character',
      revealedAtEpisode: 79,
      revealedAtChapter: 133,
      name: { it: 'Wapol', en: 'Wapol' },
      summary: {
        it: 'Un re tornato a reclamare un’isola che aveva abbandonato, con la corona storta e una bocca capace di mordere e inghiottire il metallo.',
        en: 'A king come back to claim an island he abandoned, his crown askew and a mouth that bites through metal and swallows it.',
      },
      visual: { art: 'wapol', tint: 'wine' },
    },
    {
      id: 'bon-clay',
      kind: 'character',
      revealedAtEpisode: 78,
      revealedAtChapter: 133,
      name: { it: 'Mister 2 Von Clay', en: 'Bon Clay' },
      summary: {
        it: 'Un ballerino con il cappotto da cigno e le scarpe a punta, che copia il volto di chiunque tocchi e lo indossa come una maschera.',
        en: 'A dancer in a swan coat and pointed shoes, who copies the face of anyone he touches and wears it like a mask.',
      },
      visual: { art: 'bon-clay', tint: 'flamingo' },
    },
    {
      id: 'dalton',
      kind: 'character',
      revealedAtEpisode: 80,
      revealedAtChapter: 135,
      name: { it: 'Dalton', en: 'Dalton' },
      summary: {
        it: 'L’ex capo delle guardie di Drum, un uomo enorme con il mantello pesante e la scure, che difende i villaggi dal re tornato a riprenderseli.',
        en: 'Drum’s former captain of the guard, a huge man in a heavy cloak with an axe, defending the villages from the king who has returned.',
      },
      visual: { art: 'dalton', tint: 'teal' },
    },
    {
      id: 'mr-11',
      kind: 'character',
      revealedAtEpisode: 79,
      revealedAtChapter: 130,
      name: { it: 'Mister 11', en: 'Mr. 11' },
      summary: {
        it: 'Un agente catturato dalla Marina e legato all’albero maestro della nave di Smoker, che giura di non aver mai sentito parlare dell’organizzazione per cui lavora.',
        en: 'An agent caught by the Marines and tied to the mast of Smoker’s ship, who swears he has never heard of the organisation he works for.',
      },
      visual: { art: 'mr-11', tint: 'azure' },
    },
    {
      id: 'drum-island',
      kind: 'place',
      revealedAtEpisode: 80,
      revealedAtChapter: 134,
      name: { it: 'Isola di Drum', en: 'Drum Island' },
      summary: {
        it: 'Un’isola invernale della Rotta Maggiore sotto montagne a forma di tamburo, un paese che per ora non ha un nome e una sola dottoressa, che vive nel castello sulla vetta più alta.',
        en: 'A winter island on the Grand Line under drum-shaped mountains, a country with no name for now, and a single doctor, who lives in the castle on the highest peak.',
      },
      visual: { art: 'drum-island', tint: 'blue' },
    },
    {
      id: 'kureha',
      kind: 'character',
      revealedAtEpisode: 82,
      revealedAtChapter: 136,
      name: { it: 'Kureha', en: 'Kureha' },
      summary: {
        it: 'Una dottoressa di centotrentanove anni che vive nel castello sulla vetta, beve vino di prugne e si fa pagare rubando ai ricchi.',
        en: 'A doctor of a hundred and thirty-nine who lives in the castle on the peak, drinks plum wine and charges by robbing the rich.',
      },
      visual: { art: 'kureha', tint: 'violet' },
    },
    {
      id: 'tony-tony-chopper',
      kind: 'character',
      revealedAtEpisode: 83,
      revealedAtChapter: 134,
      name: { it: 'Tony Tony Chopper', en: 'Tony Tony Chopper' },
      summary: {
        it: 'Una renna dal naso blu che ha mangiato un frutto del diavolo, parla, cammina su due zampe e ha imparato la medicina da una dottoressa di 139 anni.',
        en: 'A blue-nosed reindeer who ate a devil fruit, talks, walks on two legs and learned medicine from a 139-year-old doctor.',
      },
      visual: { art: 'tony-tony-chopper', tint: 'pink' },
    },
    {
      id: 'hiluluk',
      kind: 'character',
      revealedAtEpisode: 85,
      revealedAtChapter: 145,
      name: { it: 'Hiluluk', en: 'Hiluluk' },
      summary: {
        it: 'Un ciarlatano con la bandiera dei pirati cucita sulla giacca, convinto che nessuna malattia sia incurabile, che ha raccolto una renna e le ha dato un nome.',
        en: 'A quack with a pirate flag stitched to his coat, certain that no illness is incurable, who took in a reindeer and gave him a name.',
      },
      visual: { art: 'hiluluk', tint: 'pink' },
    },
    {
      id: 'chess',
      kind: 'character',
      revealedAtEpisode: 87,
      revealedAtChapter: 147,
      name: { it: 'Scacco', en: 'Chess' },
      summary: {
        it: 'Il capo di stato maggiore di Wapol, un arciere dalla faccia triste in costume da giullare che mette per iscritto le leggi del suo re e scocca frecce che bruciano.',
        en: 'Wapol’s chief of staff, a sad-faced archer in a jester’s costume who writes down his king’s laws and fires arrows that burn.',
      },
      visual: { art: 'chess', tint: 'violet' },
    },
    {
      id: 'kuromarimo',
      kind: 'character',
      revealedAtEpisode: 87,
      revealedAtChapter: 147,
      name: { it: 'Kuromarino', en: 'Kuromarimo' },
      summary: {
        it: 'Il magistrato di Wapol, un pugile coperto di capigliature afro che lancia ciuffi di capelli contro i nemici perché gli restino attaccati addosso.',
        en: 'Wapol’s magistrate, a boxer covered in afros who throws tufts of his hair at his enemies so that they stick.',
      },
      visual: { art: 'kuromarimo', tint: 'wine' },
    },
    {
      id: 'mr-13',
      kind: 'character',
      revealedAtEpisode: 91,
      revealedAtChapter: 155,
      name: { it: 'Mister 13', en: 'Mr. 13' },
      summary: {
        it: 'Una lontra con gli occhiali da sole e una tuta a pois che, in coppia con un avvoltoio, porta gli ordini del capo e punisce gli agenti che falliscono.',
        en: 'An otter in sunglasses and a polka-dot jumpsuit who, with a vulture for a partner, carries the boss’s orders and punishes the agents who fail him.',
      },
      visual: { art: 'mr-13', tint: 'lavender' },
    },
    {
      id: 'miss-friday',
      kind: 'character',
      revealedAtEpisode: 91,
      revealedAtChapter: 155,
      name: { it: 'Miss Friday', en: 'Miss Friday' },
      summary: {
        it: 'Un avvoltoio con cuffia e occhiali da aviatore che porta in volo una lontra sopra la Rotta Maggiore e sgancia bombe sugli agenti che deludono il capo.',
        en: 'A vulture in an aviator’s cap and goggles who flies an otter over the Grand Line and drops bombs on the agents who fail the boss.',
      },
      visual: { art: 'miss-friday', tint: 'orange' },
    },
    {
      id: 'alabasta',
      kind: 'arc',
      revealedAtEpisode: 92,
      revealedAtChapter: 155,
      name: { it: 'Saga di Alabasta', en: 'Alabasta Saga' },
      summary: {
        it: 'Un regno del deserto sull’orlo della guerra civile, e la prima volta che la ciurma si oppone a un’organizzazione invece che a un pirata.',
        en: 'A desert kingdom on the edge of civil war, and the first time the crew stands against an organisation rather than a pirate.',
      },
      visual: { art: 'alabasta', tint: 'sand' },
    },
    {
      id: 'crocodile',
      kind: 'character',
      revealedAtEpisode: 92,
      revealedAtChapter: 155,
      name: { it: 'Crocodile', en: 'Crocodile' },
      summary: {
        it: 'Un pirata autorizzato dal Governo, con un uncino d’oro al posto della mano sinistra, che ad Alabasta viene acclamato come un eroe e dirige in segreto l’organizzazione che il regno teme.',
        en: 'A government-sanctioned pirate with a golden hook for a left hand, hailed as a hero in Alabasta and secretly running the organisation the kingdom fears.',
      },
      visual: { art: 'crocodile', tint: 'sand' },
    },
    {
      id: 'alubarna',
      kind: 'place',
      revealedAtEpisode: 92,
      revealedAtChapter: 161,
      name: { it: 'Alubarna', en: 'Alubarna' },
      summary: {
        it: 'La città del palazzo reale di Alabasta, un edificio a cupole tra due torri, dove regna il padre di Bibi e dove si ringrazia Crocodile per aver tenuto lontani i pirati.',
        en: 'The city of Alabasta’s royal palace, a domed building between two towers, where Vivi’s father reigns and Crocodile is thanked for keeping the pirates away.',
      },
      visual: { art: 'alubarna', tint: 'ivory' },
    },
    {
      id: 'nefertari-cobra',
      kind: 'character',
      revealedAtEpisode: 93,
      revealedAtChapter: 160,
      name: { it: 'Nefertari Cobra', en: 'Nefertari Cobra' },
      summary: {
        it: 'Il re di Alabasta, un uomo che metà del suo popolo accusa di aver rubato la pioggia, e che continua a ricevere chiunque bussi al palazzo.',
        en: 'The king of Alabasta, a man half his people accuse of stealing the rain, who still receives anyone who knocks at the palace.',
      },
      visual: { art: 'nefertari-cobra', tint: 'sand' },
    },
    {
      id: 'kohza',
      kind: 'character',
      revealedAtEpisode: 93,
      revealedAtChapter: 163,
      name: { it: 'Kosa', en: 'Kohza' },
      summary: {
        it: 'Il capo dell’esercito ribelle, un uomo con gli occhialoni sulla fronte che da bambino giocava con la principessa che ora combatte.',
        en: 'The leader of the rebel army, goggles pushed up on his forehead, who played as a boy with the princess he now fights.',
      },
      visual: { art: 'kohza', tint: 'ocher' },
    },
    {
      id: 'pell',
      kind: 'character',
      revealedAtEpisode: 93,
      revealedAtChapter: 162,
      name: { it: 'Pell', en: 'Pell' },
      summary: {
        it: 'Una guardia reale di Alabasta che si trasforma in falco e sorveglia il deserto dall’alto, con la maschera a becco e la sciabola al fianco.',
        en: 'A royal guard of Alabasta who turns into a falcon and watches the desert from above, beak-masked with a sabre at his side.',
      },
      visual: { art: 'pell', tint: 'azure' },
    },
    {
      id: 'chaka',
      kind: 'character',
      revealedAtEpisode: 93,
      revealedAtChapter: 162,
      name: { it: 'Chaka', en: 'Chaka' },
      summary: {
        it: 'Una guardia reale di Alabasta che diventa uno sciacallo, fedele al re e incaricato di proteggere la principessa tornata a casa.',
        en: 'A royal guard of Alabasta who becomes a jackal, loyal to the king and charged with protecting the princess come home.',
      },
      visual: { art: 'chaka', tint: 'ivory' },
    },
    {
      id: 'portgas-d-ace',
      kind: 'character',
      revealedAtEpisode: 95,
      revealedAtChapter: 157,
      name: { it: 'Portuguese D. Ace', en: 'Portgas D. Ace' },
      summary: {
        it: 'Il fratello maggiore di Rufy, comandante di divisione in una ciurma famosa, che attraversa il deserto a torso nudo sulle tracce di un uomo che ha tradito il suo capitano.',
        en: 'Luffy’s older brother, a division commander in a famous crew, crossing the desert bare-chested on the trail of a man who betrayed his captain.',
      },
      visual: { art: 'portgas-d-ace', tint: 'orange' },
    },
    {
      id: 'matsuge',
      kind: 'character',
      revealedAtEpisode: 97,
      revealedAtChapter: 162,
      name: { it: 'Ciglione', en: 'Matsuge' },
      summary: {
        it: 'Un cammello del deserto con la sella in groppa e le ciglia lunghe, salvato da una lucertola gigante, che si lascia cavalcare solo dalle donne della ciurma.',
        en: 'A saddled desert camel with long eyelashes, saved from a giant lizard, who will carry only the women of the crew.',
      },
      visual: { art: 'matsuge', tint: 'ocher' },
    },
    {
      id: 'mr-1',
      kind: 'character',
      revealedAtEpisode: 103,
      revealedAtChapter: 170,
      name: { it: 'Mister 1', en: 'Mr. 1' },
      summary: {
        it: 'L’agente di grado più alto di Baroque Works, un uomo silenzioso il cui corpo diventa acciaio e le cui braccia si aprono in lame.',
        en: 'The highest-ranked agent of Baroque Works, a silent man whose body turns to steel and whose arms open into blades.',
      },
      visual: { art: 'mr-1', tint: 'ivory' },
    },
    {
      id: 'miss-doublefinger',
      kind: 'character',
      revealedAtEpisode: 103,
      revealedAtChapter: 170,
      name: { it: 'Miss Doublefinger', en: 'Miss Doublefinger' },
      summary: {
        it: 'Un’agente elegante che fa spuntare spine d’acciaio da qualunque punto del corpo, e le usa come trampoli per camminare più in alto.',
        en: 'An elegant agent who grows steel spikes from any part of her body, and uses them as stilts to walk above the ground.',
      },
      visual: { art: 'miss-doublefinger', tint: 'magenta' },
    },
    {
      id: 'mr-4',
      kind: 'character',
      revealedAtEpisode: 103,
      revealedAtChapter: 170,
      name: { it: 'Mister 4', en: 'Mr. 4' },
      summary: {
        it: 'Un agente lentissimo con una mazza da baseball, affiancato da un cane-fucile che sputa una palla esplosiva ogni quattro minuti.',
        en: 'An extremely slow agent with a baseball bat, paired with a dog-shaped gun that spits an exploding ball every four minutes.',
      },
      visual: { art: 'mr-4', tint: 'blue' },
    },
    {
      id: 'miss-merry-christmas',
      kind: 'character',
      revealedAtEpisode: 103,
      revealedAtChapter: 170,
      name: { it: 'Miss Merry Christmas', en: 'Miss Merry Christmas' },
      summary: {
        it: 'Un’agente anziana che si trasforma in talpa e scava gallerie sotto la città, comparendo alle spalle di chi la cerca in superficie.',
        en: 'An older agent who turns into a mole and digs tunnels under the city, surfacing behind whoever is looking for her above.',
      },
      visual: { art: 'miss-merry-christmas', tint: 'red' },
    },
    {
      id: 'toto',
      kind: 'character',
      revealedAtEpisode: 103,
      revealedAtChapter: 163,
      name: { it: 'Toto', en: 'Toto' },
      summary: {
        it: 'L’ultimo uomo rimasto in un’oasi prosciugata, smagrito da tre anni passati a scavare nella sabbia in cerca d’acqua.',
        en: 'The last man left in a dried-up oasis, worn thin by three years of digging in the sand for water.',
      },
      visual: { art: 'toto', tint: 'sand' },
    },
    {
      id: 'rainbase',
      kind: 'place',
      revealedAtEpisode: 105,
      revealedAtChapter: 168,
      name: { it: 'Rainbase', en: 'Rainbase' },
      summary: {
        it: 'La città di Crocodile nel deserto di Alabasta, che se la passa bene anche con la siccità grazie ai casinò, il più grande dei quali è una piramide con un coccodrillo d’oro sul tetto.',
        en: 'Crocodile’s town in the Alabasta desert, doing well in the drought thanks to its casinos, the largest of them a pyramid with a golden crocodile on the roof.',
      },
      visual: { art: 'rainbase', tint: 'yellow' },
    },
    {
      id: 'hasami',
      kind: 'character',
      revealedAtEpisode: 111,
      revealedAtChapter: 179,
      name: { it: 'Chelotto', en: 'Hasami' },
      summary: {
        it: 'Un granchio del deserto grande come una casa, amico del cammello della ciurma, che porta la ciurma attraverso il deserto verso Alubarna.',
        en: 'A desert crab as big as a house, a friend of the crew’s camel, who carries the crew across the desert towards Alubarna.',
      },
      visual: { art: 'hasami', tint: 'red' },
    },
    {
      id: 'lassoo',
      kind: 'character',
      revealedAtEpisode: 113,
      revealedAtChapter: 184,
      name: { it: 'Laassiù', en: 'Lassoo' },
      summary: {
        it: 'Un bazooka a forma di bassotto, sempre raffreddato, che starnutisce palle da baseball che esplodono qualche secondo dopo essere cadute.',
        en: 'A bazooka shaped like a dachshund, with a permanent cold, who sneezes out baseballs that explode a few seconds after they land.',
      },
      visual: { art: 'lassoo', tint: 'vermilion' },
    },
    {
      id: 'tsumegeri-guards',
      kind: 'character',
      revealedAtEpisode: 120,
      revealedAtChapter: 196,
      name: { it: 'Squadra Tsumegeri', en: 'Tsumegeri Guards' },
      summary: {
        it: 'Quattro guardie reali scelte di Alabasta che bevono un’acqua capace di dare cinque minuti di forza enorme, e poi di uccidere chi l’ha bevuta.',
        en: 'Four elite royal guards of Alabasta who drink a water that gives five minutes of enormous strength and then kills whoever drank it.',
      },
      visual: { art: 'tsumegeri-guards', tint: 'cyan' },
    },
    {
      id: 'mr-7',
      kind: 'character',
      revealedAtEpisode: 125,
      revealedAtChapter: 206,
      name: { it: 'Mister 7', en: 'Mr. 7' },
      summary: {
        it: 'Un cecchino nella torre dell’orologio sopra la piazza di Alubarna, che ride accanto a un cannone che ha l’ordine di sparare alle quattro e mezza.',
        en: 'A sniper in the clock tower above the square of Alubarna, laughing beside a cannon he has orders to fire at half past four.',
      },
      visual: { art: 'mr-7', tint: 'yellow' },
    },
    {
      id: 'miss-fathers-day',
      kind: 'character',
      revealedAtEpisode: 125,
      revealedAtChapter: 206,
      name: { it: 'Miss Father’s Day', en: 'Miss Father’s Day' },
      summary: {
        it: 'Una cecchina vestita da rana che abbatte in volo una guardia reale e sorveglia con il suo compagno un cannone puntato sulla piazza.',
        en: 'A sniper in a frog costume who shoots a royal guard out of the sky and keeps watch with her partner over a cannon aimed at the square.',
      },
      visual: { art: 'miss-fathers-day', tint: 'green' },
    },
    {
      id: 'hina',
      kind: 'character',
      revealedAtEpisode: 128,
      revealedAtChapter: 217,
      name: { it: 'Hina', en: 'Hina' },
      summary: {
        it: 'Un capitano della Marina che fuma senza fretta e lascia che i pirati le passino attraverso il corpo, ritrovandosi in catene.',
        en: 'A Marine captain who smokes without hurry and lets pirates pass through her body, leaving them locked in iron.',
      },
      visual: { art: 'hina', tint: 'wine' },
    },
    {
      id: 'terracotta',
      kind: 'character',
      revealedAtEpisode: 128,
      revealedAtChapter: 213,
      name: { it: 'Terracotta', en: 'Terracotta' },
      summary: {
        it: 'La capocuoca del palazzo di Alubarna, moglie di Igaram, tanto somigliante al marito da essere scambiata per lui travestito.',
        en: 'The head chef of the palace of Alubarna, Igaram’s wife, so like her husband that she is taken for him in a dress.',
      },
      visual: { art: 'terracotta', tint: 'flamingo' },
    },
    {
      id: 'nico-robin',
      kind: 'character',
      revealedAtEpisode: 130,
      revealedAtChapter: 218,
      name: { it: 'Nico Robin', en: 'Nico Robin' },
      summary: {
        it: 'Un’archeologa con una taglia sulla testa da quando aveva otto anni, l’unica persona al mondo che sa leggere una certa scrittura antica, che si imbarca su una nave che non l’ha invitata.',
        en: 'An archaeologist with a bounty on her head since she was eight, the only person alive who can read a certain ancient script, who boards a ship that did not invite her.',
      },
      visual: { art: 'nico-robin', tint: 'violet' },
    },
  ],

  dossiers: {
    'laboon': {
      role: {
        it: 'Balena della Montagna Inversa',
        en: 'Whale of Reverse Mountain',
      },
      log: {
        it: 'Da cinquant’anni resta ferma davanti alla Montagna Inversa e sbatte la testa contro la scogliera, lanciando un richiamo a cui nessuno risponde. È grande quanto un’isola e ha la fronte coperta di cicatrici che non si chiudono. Il vecchio che vive dentro di lei dice che aspetta una ciurma partita per la Rotta Maggiore e mai tornata.',
        en: 'For fifty years he has held station in front of Reverse Mountain, beating his head against the cliff and calling out to nobody who answers. He is the size of an island and his forehead is covered in scars that never close. The old man who lives inside him says he is waiting for a crew that sailed the Grand Line and never came back.',
      },
      affiliation: [
        {
          episode: 62,
          value: {
            it: 'Nessuna: aspetta una ciurma alla Montagna Inversa',
            en: 'None: waits at Reverse Mountain for a crew',
          },
        },
      ],
      origin: [{ episode: 62, value: { it: 'West Blue', en: 'West Blue' } }],
    },
    'crocus': {
      role: { it: 'Guardiano del faro', en: 'Lighthouse keeper' },
      log: {
        it: 'Vive dentro la balena che sorveglia, in una casa costruita nel suo stomaco, e la cura da cinquant’anni perché non si uccida contro la roccia. Porta una camicia a fiori, un fiore in testa e l’aria di chi ha già visto tutto quello che c’era da vedere. Del proprio passato non racconta niente, e nessuno glielo chiede.',
        en: 'He lives inside the whale he watches over, in a house built in its stomach, and has tended it for fifty years so that it does not kill itself against the rock. He wears a flowered shirt, a flower on his head and the look of a man who has already seen everything worth seeing. Of his own past he says nothing, and nobody asks.',
      },
      affiliation: [
        {
          episode: 62,
          value: {
            it: 'Guardiano del faro di Capo Gemello',
            en: 'Keeper of the Twin Cape lighthouse',
          },
        },
        {
          episode: 400,
          value: {
            it: 'Guardiano del faro di Capo Gemello; un tempo medico di bordo dei Pirati di Roger',
            en: 'Keeper of the Twin Cape lighthouse; once ship’s doctor of the Roger Pirates',
          },
        },
      ],
    },
    'mr-9': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'Gira con una corona in testa e due mazze d’acciaio, e parla di sé in terza persona come un attore di provincia. Lavora in coppia con una collega che finge di essere la sua fidanzata, e nessuno dei due ammette per chi lavori davvero. Quando la copertura salta, saluta l’avversario con un inchino prima di attaccarlo.',
        en: 'He goes about in a crown with two steel bats, talking about himself in the third person like a provincial actor. He works in a pair with a colleague who pretends to be his sweetheart, and neither of them admits who they really work for. When the cover falls, he bows to his opponent before attacking.',
      },
      affiliation: [
        { episode: 63, value: BW },
        { episode: 91, value: BW_FRONTIER },
      ],
    },
    'igaram': {
      role: { it: 'Capo di Whisky Peak', en: 'Head of Whisky Peak' },
      log: {
        it: 'Accoglie ogni nave che arriva a Whisky Peak con un coro, un banchetto e tutto il liquore che i pirati riescono a bere, poi aspetta che crollino. Porta i bigodini anche di giorno e suona un sassofono che spara. Sotto il nome in codice di Mister 8 comanda cento agenti travestiti da cittadini ospitali.',
        en: 'He greets every ship that reaches Whisky Peak with a choir, a banquet and all the liquor the pirates can drink, then waits for them to fall over. He wears curlers by daylight and plays a saxophone that fires bullets. Under the code name Mr. 8 he commands a hundred agents dressed as hospitable townsfolk.',
      },
      affiliation: [
        {
          episode: 64,
          value: { it: 'Baroque Works, Mister 8', en: 'Baroque Works, Mr. 8' },
        },
        {
          episode: 67,
          value: {
            it: 'Regno di Alabasta, capitano della guardia reale',
            en: 'Kingdom of Alabasta, captain of the royal guard',
          },
        },
      ],
      origin: [{ episode: 67, value: ALABASTA }],
    },
    'miss-monday': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'Serve da bere al banchetto vestita da suora e sorride finché l’ultimo pirata non cade addormentato sul tavolo. Poi si toglie il velo, e si vede che ha le spalle più larghe di chiunque altro in città. Combatte a mani nude con un paio di tirapugni, e solleva un uomo adulto come si solleva un boccale.',
        en: 'She pours the drinks at the banquet in a nun’s habit and keeps smiling until the last pirate has fallen asleep on the table. Then the veil comes off, and her shoulders turn out to be broader than anyone else’s in town. She fights bare-handed with a pair of knuckledusters, and lifts a grown man the way one lifts a tankard.',
      },
      affiliation: [
        { episode: 64, value: BW },
        { episode: 91, value: BW_FRONTIER },
      ],
    },
    'karoo': {
      role: { it: 'Anatra da corsa', en: 'Racing duck' },
      log: {
        it: 'È un’anatra grande quanto un uomo, con la sella sul dorso e la borraccia al collo, e corre più veloce di un cavallo quando la sua padrona glielo chiede. Capisce tutto quello che gli si dice e risponde a gesti, e beve dalla borraccia molto più di quanto dovrebbe. Quando lei è in pericolo si mette davanti senza pensarci.',
        en: 'He is a duck the size of a man, a saddle on his back and a canteen at his neck, and he runs faster than a horse when his mistress asks it of him. He understands everything said to him and answers in gestures, and drinks from his canteen far more than he should. When she is in danger he puts himself in front of her without thinking.',
      },
      affiliation: [
        {
          episode: 65,
          value: {
            it: 'Cavalcatura di Bibi; Squadra delle Super Anatre di Alabasta, capitano',
            en: 'Vivi’s mount; Alabasta’s Super Spot-Billed Duck Squad, captain',
          },
        },
      ],
      origin: [{ episode: 65, value: ALABASTA }],
    },
    'mr-5': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'Tutto quello che si stacca dal suo corpo diventa esplosivo: il fiato, le dita, una briciola tolta dal naso e lanciata come una pallottola. Lavora in coppia con una collega che ride di qualunque cosa e non si scompone mai. Ha ricevuto l’ordine di eliminare chiunque abbia scoperto il nome del capo.',
        en: 'Anything that leaves his body becomes an explosive: his breath, his fingers, a crumb picked from his nose and flicked like a bullet. He works in a pair with a colleague who laughs at everything and never loses her composure. His orders are to kill anyone who has learned the boss’s name.',
      },
      affiliation: [
        { episode: 66, value: BW },
        { episode: 91, value: BW_OFFICER },
      ],
      devilFruit: [{ episode: 66, value: ['bomb-bomb-fruit'] }],
    },
    'miss-valentine': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'Ride senza fermarsi mai, anche mentre lavora, e scende dal cielo appesa a un ombrello giallo limone. Può rendersi leggera come una piuma o pesante come una campana di bronzo, e si lascia cadere addosso a chi sta sotto. Viaggia sempre con un collega che fa saltare in aria tutto quello che tocca.',
        en: 'She laughs without stopping, even at work, and comes down out of the sky under a lemon-yellow umbrella. She can make herself light as a feather or heavy as a bronze bell, and drops on whoever is underneath. She travels everywhere with a colleague who blows up whatever he touches.',
      },
      affiliation: [
        { episode: 66, value: BW },
        { episode: 91, value: BW_OFFICER },
      ],
      devilFruit: [{ episode: 66, value: ['kilo-kilo-fruit'] }],
    },
    'nefertari-vivi': {
      role: { it: 'Principessa di Alabasta', en: 'Princess of Alabasta' },
      log: {
        it: 'Per due anni è stata Miss Wednesday, un’agente dell’organizzazione di cui voleva scoprire il capo. Ora che lo conosce, quel nome la condanna a morte e l’unico modo per tornare a casa è una nave di pirati che ha appena incontrato. Ha un’anatra da corsa che risponde al nome di Carue.',
        en: 'For two years she was Miss Wednesday, an agent of the organisation whose leader she set out to unmask. Now that she knows him, that name marks her for death and the only way home is a pirate ship she has just met. She has a racing duck who answers to Carue.',
      },
      status: [{ episode: 67, value: 'alive' }],
      affiliation: [
        {
          episode: 67,
          value: {
            it: 'Regno di Alabasta, principessa',
            en: 'Kingdom of Alabasta, princess',
          },
        },
      ],
      origin: [
        { episode: 67, value: ALABASTA },
        {
          episode: 92,
          value: { it: 'Alubarna, Alabasta', en: 'Alubarna, Alabasta' },
        },
      ],
      chronicle: alabastaChronicles['nefertari-vivi'],
    },
    'mr-3': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'Produce cera dal proprio corpo e la indurisce finché non diventa dura come la pietra: ne fa gabbie, scale, statue e un enorme candelabro su cui si arrampica per guardare le sue prede dall’alto. Si pettina i capelli a forma di tre e chiama arte quello che fa. Lavora con una ragazzina che dipinge mentre lui uccide.',
        en: 'He makes wax from his own body and hardens it until it is as strong as stone: cages, staircases, statues and a great candlestand he climbs to look down on his prey. He wears his hair shaped like a three and calls what he does art. He works with a small girl who paints while he kills.',
      },
      affiliation: [
        { episode: 70, value: BW },
        { episode: 91, value: BW_OFFICER },
        { episode: 422, value: IMPEL_DOWN },
        { episode: 517, value: { it: 'Ciurma di Bagy', en: 'Buggy’s crew' } },
      ],
      devilFruit: [{ episode: 70, value: ['wax-wax-fruit'] }],
    },
    'miss-goldenweek': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'Ha l’età di una bambina delle elementari e la calma di chi non ha mai avuto fretta in vita sua. Si siede in mezzo al combattimento con la tavolozza sulle ginocchia e un biscotto di riso in bocca, e dipinge. Il socio con cui lavora la tratta da assistente; lei lo ascolta poco e continua a colorare.',
        en: 'She has the age of a primary-school child and the calm of someone who has never hurried in her life. She sits down in the middle of a fight with a palette on her knees and a rice cracker in her mouth, and paints. The partner she works with treats her as an assistant; she barely listens and goes on colouring.',
      },
      affiliation: [
        { episode: 70, value: BW },
        { episode: 91, value: BW_OFFICER },
      ],
    },
    'dorry': {
      role: { it: 'Guerriero gigante di Elbaf', en: 'Giant warrior of Elbaph' },
      log: {
        it: 'È alto come una torre, porta uno scudo rotondo e una spada, e vive in una grotta di Little Garden dove arrostisce bestie preistoriche intere. Da cento anni duella ogni giorno con un altro gigante per una ragione che nessuno dei due ricorda più, e nessuno dei due ha ceduto un passo. Tra un duello e l’altro brindano insieme.',
        en: 'He stands as tall as a tower, carries a round shield and a sword, and lives in a cave on Little Garden where he roasts prehistoric beasts whole. For a hundred years he has duelled another giant every day over a reason neither of them remembers, and neither has given a step. Between duels they drink together.',
      },
      affiliation: [
        {
          episode: 71,
          value: {
            it: 'Pirati Guerrieri Giganti, co-capitano',
            en: 'Giant Warrior Pirates, co-captain',
          },
        },
      ],
      origin: [{ episode: 71, value: { it: 'Elbaf', en: 'Elbaph' } }],
      epithet: [{ episode: 71, value: { it: 'Orco Blu', en: 'Blue Ogre' } }],
      bounty: [
        { episode: 71, value: 100_000_000 },
        { episode: 1160, value: 1_800_000_000 },
      ],
    },
    'brogy': {
      role: { it: 'Guerriero gigante di Elbaf', en: 'Giant warrior of Elbaph' },
      log: {
        it: 'Ha la barba rossa e una risata che si sente dall’altra parte dell’isola, e porta un’ascia che nessun uomo riuscirebbe a sollevare. Ogni volta che il vulcano erutta scende nel campo di battaglia e affronta il suo vecchio amico, come fa da cento anni. Dice che il duello è l’unica cosa che li tiene vivi tutti e due.',
        en: 'He has a red beard and a laugh you can hear from the far side of the island, and he carries an axe no man could lift. Every time the volcano erupts he walks down to the field and faces his old friend, as he has for a hundred years. He says the duel is the only thing keeping the two of them alive.',
      },
      affiliation: [
        {
          episode: 71,
          value: {
            it: 'Pirati Guerrieri Giganti, co-capitano',
            en: 'Giant Warrior Pirates, co-captain',
          },
        },
      ],
      origin: [{ episode: 71, value: { it: 'Elbaf', en: 'Elbaph' } }],
      epithet: [{ episode: 71, value: { it: 'Orco Rosso', en: 'Red Ogre' } }],
      bounty: [
        { episode: 71, value: 100_000_000 },
        { episode: 1160, value: 1_800_000_000 },
      ],
    },
    'wapol': {
      role: { it: 'Re in esilio', en: 'King in exile' },
      log: {
        it: 'È tornato su un’isola che aveva lasciato quando i pirati sono arrivati, e pretende che gli venga restituita. La sua bocca può mordere e inghiottire qualunque cosa, metallo compreso, e quello che mangia gli esce di nuovo trasformato in altro. Dell’isola parla come di una proprietà, e di chi ci vive come di gente che gli deve ancora qualcosa.',
        en: 'He has come back to an island he left when pirates arrived, and demands it be handed to him again. His mouth can bite through and swallow anything, metal included, and what he eats comes back out as something else. He speaks of the island as a possession, and of the people on it as debtors.',
      },
      affiliation: [
        {
          episode: 79,
          value: { it: 'Re di Drum, in esilio', en: 'King of Drum, in exile' },
        },
        { episode: 91, value: { it: 'Deposto', en: 'Deposed' } },
        {
          episode: 878,
          value: {
            it: 'Re del Regno di Black Drum',
            en: 'King of the Black Drum Kingdom',
          },
        },
      ],
      origin: [{ episode: 79, value: DRUM_KINGDOM }],
      epithet: [
        { episode: 79, value: { it: 'Wapol di Latta', en: 'Tin-Plate' } },
      ],
      devilFruit: [{ episode: 79, value: ['munch-munch-fruit'] }],
    },
    'bon-clay': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'Viaggia su una nave a forma di cigno, indossa un cappotto di piume e scarpette da ballo a punta, e si presenta danzando. Il suo volto diventa quello di chiunque abbia toccato con la mano destra, e torna il suo quando si tocca con la sinistra. Ha passato una giornata intera a bordo con dei pirati senza dire chi fosse, e li ha trovati simpatici.',
        en: 'He travels on a swan-shaped ship, wears a coat of feathers and pointed dancing shoes, and introduces himself in a pirouette. His face becomes the face of anyone he has touched with his right hand, and comes back when he touches himself with the left. He spent a whole day aboard with a crew of pirates without saying who he was, and rather liked them.',
      },
      affiliation: [
        { episode: 78, value: BW },
        { episode: 91, value: BW_OFFICER },
        { episode: 422, value: IMPEL_DOWN },
        {
          episode: 452,
          value: {
            it: 'Impel Down, regina autoproclamata del livello 5.5',
            en: 'Impel Down, self-appointed queen of level 5.5',
          },
        },
      ],
      devilFruit: [{ episode: 92, chapter: 156, value: ['clone-clone-fruit'] }],
    },
    'dalton': {
      role: {
        it: 'Ex capo della guardia di Drum',
        en: 'Former captain of Drum’s guard',
      },
      log: {
        it: 'È un uomo enorme, con il mantello pesante e la scure, e conosce ogni villaggio dell’isola e ogni persona che ci abita. Ha servito il re fino al giorno in cui non è più riuscito a giustificarlo, e da allora si è messo fra il trono e la gente. Quando il re è tornato, è sceso da solo ad affrontarlo.',
        en: 'He is a huge man in a heavy cloak with an axe, and he knows every village on the island and everyone living in them. He served the king until the day he could no longer justify him, and since then has stood between the throne and the people. When the king came back, he went down alone to face him.',
      },
      affiliation: [
        {
          episode: 80,
          value: {
            it: 'Ex capitano della guardia di Drum',
            en: 'Former captain of Drum’s guard',
          },
        },
        {
          episode: 91,
          value: { it: 'Capo eletto di Drum', en: 'Drum’s elected leader' },
        },
      ],
      origin: [{ episode: 80, value: DRUM_ISLAND }],
      devilFruit: [
        { episode: 82, chapter: 136, value: ['ox-ox-fruit-model-bison'] },
      ],
    },
    'mr-11': {
      role: BW_AGENT_ROLE,
      log: {
        it: 'La Marina lo ha catturato pochi giorni prima e lo tiene legato all’albero maestro della nave di Smoker. Giura di non aver mai sentito parlare di nessuna organizzazione né di nessun Mister 0. Smoker, che non gli crede, finge di avergli trovato degli ordini in tasca, e lui si tradisce da solo.',
        en: 'The Marines caught him a few days before and keep him tied to the mast of Smoker’s ship. He swears he has never heard of any organisation, or of anyone called Mr. 0. Smoker, who believes none of it, bluffs that orders were found in his pocket, and he gives himself away.',
      },
      status: [
        { episode: 79, value: 'captured' },
        { episode: 95, value: 'deceased' },
      ],
      affiliation: [
        { episode: 79, value: BW },
        { episode: 91, value: BW_FRONTIER },
      ],
    },
    'kureha': {
      role: { it: 'Dottoressa di Drum', en: 'Doctor of Drum' },
      log: {
        it: 'Ha centotrentanove anni, li dichiara a voce alta e ne va fiera. Vive nel castello in cima alla vetta, è l’unico medico rimasto sull’isola e scende in paese solo quando le va. Si fa pagare portando via ai ricchi quello che le serve, beve vino di prugne durante le visite e chiama vecchi quelli che hanno la metà dei suoi anni.',
        en: 'She is a hundred and thirty-nine, says so out loud and is proud of it. She lives in the castle at the top of the peak, she is the only doctor left on the island, and she comes down to the town only when she feels like it. She charges by taking what she needs from the rich, drinks plum wine during consultations, and calls people half her age old.',
      },
      affiliation: [
        {
          episode: 82,
          value: {
            it: 'Dottoressa di Drum, 139 anni',
            en: 'Doctor of Drum, 139 years old',
          },
        },
      ],
      origin: [{ episode: 82, value: DRUM_ISLAND }],
      epithet: [{ episode: 82, value: { it: 'Dottorina', en: 'Doctorine' } }],
    },
    'tony-tony-chopper': {
      chronicle: alabastaChronicles['tony-tony-chopper'],
      role: { it: 'Medico', en: 'Doctor' },
      log: {
        it: 'Il branco lo ha cacciato per il naso blu e gli uomini gli hanno sparato perché parlava. Un ciarlatano con la bandiera dei pirati sulla giacca lo ha raccolto, gli ha dato un nome e gli ha insegnato che non esiste malattia che non si possa curare. Ora vive su una montagna con la dottoressa più anziana e più temuta dell’isola, e scappa da chiunque gli parli.',
        en: 'His herd drove him out over the blue nose and men shot at him because he talked. A quack with a pirate flag on his coat took him in, gave him a name and taught him that there is no illness that cannot be cured. Now he lives on a mountain with the oldest and most feared doctor on the island, and runs from anyone who speaks to him.',
      },
      status: [{ episode: 83, value: 'alive' }],
      affiliation: [
        {
          episode: 83,
          value: {
            it: 'Assistente della dottoressa Kureha',
            en: 'Doctor Kureha’s assistant',
          },
        },
        { episode: 91, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 83,
          value: {
            it: 'Isola di Drum, Rotta Maggiore',
            en: 'Drum Island, Grand Line',
          },
        },
      ],
      epithet: [
        {
          episode: 320,
          value: {
            it: 'Amante dello zucchero filato',
            en: 'Cotton Candy Lover',
          },
        },
      ],
      devilFruit: [{ episode: 84, chapter: 140, value: ['human-human-fruit'] }],
      bounty: [
        { episode: 320, value: 50 },
        { episode: 746, value: 100 },
        { episode: 1086, value: 1000 },
      ],
    },
    'hiluluk': {
      role: { it: 'Ciarlatano', en: 'Quack doctor' },
      log: {
        it: 'Curava chiunque gratis con rimedi che quasi sempre peggioravano le cose, e diceva che una malattia si vince nel momento in cui si smette di temerla. Portava una bandiera dei pirati cucita sulla giacca e sognava di far fiorire i ciliegi su un’isola di neve. Ha raccolto una renna cacciata dal branco, l’ha chiamata Chopper e le ha insegnato a fare il medico.',
        en: 'He treated anyone for free with remedies that nearly always made things worse, and said an illness is beaten the moment you stop fearing it. He wore a pirate flag stitched to his coat and dreamed of making cherry trees bloom on an island of snow. He took in a reindeer his herd had driven out, called him Chopper, and taught him to be a doctor.',
      },
      status: [
        { episode: 85, value: 'alive' },
        { episode: 86, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 85,
          value: { it: 'Ciarlatano di Drum', en: 'Quack doctor of Drum' },
        },
      ],
      origin: [{ episode: 85, value: DRUM_ISLAND }],
    },
    'chess': {
      role: {
        it: 'Capo di stato maggiore di Wapol',
        en: 'Wapol’s chief of staff',
      },
      log: {
        it: 'Sta accanto al suo re con una penna e mette per iscritto ogni legge che Wapol si inventa, per quanto crudele sia. In combattimento scocca raffiche di frecce da un arco lungo, alcune in fiamme, senza quasi cambiare espressione. È fuggito da Drum con Wapol quando sono arrivati i pirati, e con lui è tornato a riprendersi il castello.',
        en: 'He stands beside his king with a quill and writes down every law Wapol invents, however cruel. In a fight he looses volleys of arrows from a longbow, some of them burning, and hardly changes his expression. He fled Drum with Wapol when the pirates came, and has come back with him to take the castle again.',
      },
      affiliation: [
        {
          episode: 87,
          value: {
            it: 'Seguito di Wapol; ex capo di stato maggiore del Regno di Drum',
            en: 'Wapol’s retinue; former chief of staff of the Drum Kingdom',
          },
        },
      ],
      origin: [{ episode: 87, value: DRUM_KINGDOM }],
    },
    'kuromarimo': {
      role: { it: 'Magistrato di Wapol', en: 'Wapol’s magistrate' },
      log: {
        it: 'È un pugile con una capigliatura afro in testa e altre sulle spalle e sui guantoni, e i ciuffi che lancia restano attaccati a chiunque colpiscano. Incendiati dalle frecce del suo collega, bruciano dove si sono attaccati. Quando loro due non bastano, Wapol li inghiotte entrambi e li risputa come un unico guerriero con quattro braccia.',
        en: 'He is a boxer with an afro on his head and more on his shoulders and gloves, and the tufts he throws cling to whatever they hit. Set alight by his colleague’s arrows, they burn where they cling. When the two of them are not enough, Wapol swallows them both and spits them out as a single fighter with four arms.',
      },
      affiliation: [
        {
          episode: 87,
          value: {
            it: 'Seguito di Wapol; ex magistrato del Regno di Drum',
            en: 'Wapol’s retinue; former magistrate of the Drum Kingdom',
          },
        },
      ],
      origin: [{ episode: 87, value: DRUM_KINGDOM }],
    },
    'mr-13': {
      role: UNLUCKIES_ROLE,
      log: {
        it: 'Lui e la sua compagna sono gli Unluckies, la coppia che porta gli ordini di Mister 0 e si occupa degli agenti che falliscono. Accende le bombe che sganciano sui traditori con due conchiglie artigliate, e con le stesse conchiglie combatte. A Whisky Peak ha sentito pronunciare il nome del capo e ha disegnato i volti dei pirati che lo avevano sentito.',
        en: 'He and his partner are the Unluckies, the pair who carry Mr. 0’s orders and deal with the agents who fail. He lights the bombs they drop on traitors with a pair of clawed clam shells, and fights with the same shells. At Whisky Peak he overheard the boss’s name said aloud, and sketched the faces of the pirates who heard it.',
      },
      affiliation: [{ episode: 91, value: UNLUCKIES }],
    },
    'miss-friday': {
      role: UNLUCKIES_ROLE,
      log: {
        it: 'È l’avvoltoio degli Unluckies e porta in volo il suo compagno lontra ovunque Mister 0 li mandi. Dall’alto sganciano pacchi bomba sugli agenti che falliscono o scappano, e da vicino apre il fuoco con le mitragliatrici legate sulla schiena. Capisce ogni parola che si dice vicino a lei, e la riferisce.',
        en: 'She is the vulture of the Unluckies, and flies her otter partner wherever Mr. 0 sends them. From the air they drop parcel bombs on the agents who fail or run, and at close range she opens fire with the machine guns strapped to her back. She understands every word said near her, and passes it on.',
      },
      affiliation: [{ episode: 91, value: UNLUCKIES }],
    },
    'crocodile': {
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Ad Alabasta gli hanno intitolato piazze: ha fermato i pirati che assalivano le coste e il popolo lo adora. Da una base nascosta dirige Baroque Works, una rete di agenti con nomi in codice che non lo hanno mai visto in faccia. Fuma sigari, non alza la voce e non considera nessuno un avversario.',
        en: 'Alabasta has named squares after him: he stopped the pirates raiding its coast and the people adore him. From a hidden base he runs Baroque Works, a network of code-named agents who have never seen his face. He smokes cigars, never raises his voice, and does not consider anyone an opponent.',
      },
      status: [
        { episode: 92, value: 'alive' },
        { episode: 127, value: 'imprisoned' },
        { episode: 451, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 92,
          value: {
            it: 'Flotta dei Sette; Baroque Works, capo',
            en: 'Seven Warlords; Baroque Works, head',
          },
        },
        {
          episode: 130,
          value: {
            it: 'Ex membro della Flotta dei Sette, in arresto',
            en: 'Former Warlord, under arrest',
          },
        },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      epithet: [
        { episode: 92, value: { it: 'Sir Crocodile', en: 'Sir Crocodile' } },
      ],
      devilFruit: [{ episode: 112, value: ['sand-sand-fruit'] }],
      bounty: [{ episode: 1086, value: 1_965_000_000 }],
      chronicle: alabastaChronicles.crocodile,
    },
    'nefertari-cobra': {
      role: { it: 'Re di Alabasta', en: 'King of Alabasta' },
      log: {
        it: 'Regna su un paese in cui non piove da anni e in cui metà del popolo lo accusa di aver rubato la pioggia. Riceve chiunque si presenti al palazzo, senza guardie fra sé e chi gli parla, e non ha mai alzato la voce contro i ribelli. Sa che sua figlia è partita da sola per scoprire chi sta distruggendo il regno.',
        en: 'He rules a country where it has not rained for years and where half the people accuse him of stealing the rain. He receives anyone who comes to the palace, with no guards between himself and whoever is speaking, and has never raised his voice against the rebels. He knows his daughter left alone to find out who is tearing the kingdom apart.',
      },
      status: [
        { episode: 93, value: 'alive' },
        { episode: 1088, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 93,
          value: { it: 'Re di Alabasta', en: 'King of Alabasta' },
        },
      ],
      origin: [
        {
          episode: 93,
          value: { it: 'Alubarna, Alabasta', en: 'Alubarna, Alabasta' },
        },
      ],
    },
    'kohza': {
      role: {
        it: 'Capo dell’esercito ribelle',
        en: 'Leader of the rebel army',
      },
      log: {
        it: 'Comanda un esercito di contadini e cittadini che marcia sulla capitale, convinto che il re abbia lasciato morire di sete le loro città. Porta gli occhialoni sulla fronte e una sciabola alla cintura, e da bambino giocava a fare il pirata con la figlia del re. Non ha mai chiesto niente per sé, e non si ferma davanti a nessuno.',
        en: 'He commands an army of farmers and townspeople marching on the capital, certain the king has let their towns die of thirst. He wears goggles pushed up on his forehead and a sabre at his belt, and as a boy he played at pirates with the king’s daughter. He has never asked anything for himself, and he stops for nobody.',
      },
      affiliation: [
        {
          episode: 93,
          value: {
            it: 'Esercito ribelle di Alabasta, capo',
            en: 'Rebel army of Alabasta, leader',
          },
        },
        {
          episode: 130,
          value: {
            it: 'Regno di Alabasta, ministro dell’ambiente',
            en: 'Kingdom of Alabasta, minister of the environment',
          },
        },
      ],
      origin: [
        { episode: 93, value: { it: 'Yuba, Alabasta', en: 'Yuba, Alabasta' } },
      ],
    },
    'pell': {
      role: { it: 'Guardia reale di Alabasta', en: 'Royal guard of Alabasta' },
      log: {
        it: 'Vola sopra il deserto sotto forma di falco e riporta al palazzo quello che vede, il che lo rende l’uomo più informato del regno. Porta una maschera a becco e una sciabola ricurva, e parla poco. Ha giurato di proteggere la famiglia reale e considera la principessa una bambina che ha visto crescere.',
        en: 'He flies over the desert as a falcon and brings back to the palace whatever he sees, which makes him the best-informed man in the kingdom. He wears a beaked mask and a curved sabre, and says little. He has sworn to protect the royal family and thinks of the princess as a child he watched grow up.',
      },
      status: [
        { episode: 93, value: 'alive' },
        { episode: 125, value: 'presumed-dead' },
        { episode: 130, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 93,
          value: {
            it: 'Regno di Alabasta, guardia reale',
            en: 'Kingdom of Alabasta, royal guard',
          },
        },
      ],
      origin: [{ episode: 93, value: ALABASTA }],
      epithet: [
        { episode: 93, value: { it: 'Pell il Falco', en: 'Falcon Pell' } },
      ],
      devilFruit: [
        { episode: 106, chapter: 169, value: ['bird-bird-fruit-model-falcon'] },
      ],
    },
    'chaka': {
      role: { it: 'Guardia reale di Alabasta', en: 'Royal guard of Alabasta' },
      log: {
        it: 'Si trasforma in sciacallo e combatte con una spada che tiene fra i denti, ed è l’ufficiale a cui il re affida gli ordini che contano. È l’unico al palazzo che discuta ancora con il sovrano invece di limitarsi a obbedire. Del popolo in rivolta parla senza rancore: dice che hanno ragione a essere arrabbiati.',
        en: 'He turns into a jackal and fights with a sword held in his teeth, and he is the officer the king trusts with the orders that matter. He is the only man in the palace who still argues with his sovereign instead of simply obeying. Of the rebels he speaks without bitterness: he says they are right to be angry.',
      },
      affiliation: [
        {
          episode: 93,
          value: {
            it: 'Regno di Alabasta, guardia reale',
            en: 'Kingdom of Alabasta, royal guard',
          },
        },
      ],
      origin: [{ episode: 93, value: ALABASTA }],
      epithet: [
        {
          episode: 93,
          value: { it: 'Chaka lo Sciacallo', en: 'Jackal Chaka' },
        },
      ],
      devilFruit: [
        { episode: 120, chapter: 196, value: ['dog-dog-fruit-model-jackal'] },
      ],
    },
    'portgas-d-ace': {
      chronicle: alabastaChronicles['portgas-d-ace'],
      role: { it: 'Comandante di divisione', en: 'Division commander' },
      log: {
        it: 'Si addormenta a metà pasto e a metà frase, e si sveglia come se niente fosse. Il suo corpo prende fuoco quando vuole, e il suo capitano è l’uomo che tutti chiamano il più forte del mondo. È venuto ad Alabasta per un compagno che ha ucciso uno dei suoi e se n’è andato; a Rufy lascia un pezzo di carta e l’ordine di tenerlo con sé.',
        en: 'He falls asleep mid-meal and mid-sentence, and wakes as if nothing happened. His body turns to fire at will, and his captain is the man everyone calls the strongest in the world. He came to Alabasta after a crewmate who killed one of their own and left; to Luffy he leaves a scrap of paper and an order to keep it.',
      },
      status: [
        { episode: 95, value: 'alive' },
        { episode: 483, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 95,
          value: {
            it: 'Pirati di Barbabianca, comandante della seconda divisione',
            en: 'Whitebeard Pirates, second division commander',
          },
        },
      ],
      origin: [
        {
          episode: 493,
          value: { it: 'Baterilla, South Blue', en: 'Baterilla, South Blue' },
        },
      ],
      epithet: [
        { episode: 95, value: { it: 'Pugno di Fuoco', en: 'Fire Fist' } },
      ],
      devilFruit: [{ episode: 95, value: ['flame-flame-fruit'] }],
    },
    'matsuge': {
      role: { it: 'Cammello del deserto', en: 'Desert camel' },
      log: {
        it: 'La ciurma lo ha strappato alle fauci di una lucertola gigante nel deserto, e per ringraziare si è offerto di portarla. Intendeva solo le donne: lascia salire Nami e Bibi e degli uomini non si cura. Nami lo ha chiamato Ciglione, per via delle ciglia.',
        en: 'The crew pulled him out of the jaws of a giant lizard in the desert, and in thanks he offered to carry them. He meant only the women: he lets Nami and Vivi ride and pays the men no attention. Nami named him Matsuge, for his eyelashes.',
      },
      affiliation: [
        {
          episode: 97,
          value: {
            it: 'Cavalcatura di Nami e Bibi',
            en: 'Nami’s and Vivi’s mount',
          },
        },
        {
          episode: 130,
          value: {
            it: 'Squadra delle Super Anatre di Alabasta',
            en: 'Alabasta’s Super Spot-Billed Duck Squad',
          },
        },
      ],
      origin: [
        {
          episode: 110,
          value: { it: 'Rainbase, Alabasta', en: 'Rainbase, Alabasta' },
        },
      ],
    },
    'mr-1': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'È l’agente di grado più alto dell’organizzazione e non ha mai avuto bisogno di alzare la voce. Il suo corpo diventa acciaio dove vuole: le braccia si aprono in lame, le gambe si trasformano in scuri, e nessuna spada normale lo scalfisce. Lavora con una collega elegante e non le rivolge quasi mai la parola.',
        en: 'He is the highest-ranked agent in the organisation and has never needed to raise his voice. His body turns to steel wherever he wants it: his arms open into blades, his legs become axes, and no ordinary sword marks him. He works with an elegant colleague and almost never speaks to her.',
      },
      affiliation: [
        { episode: 103, value: BW_OFFICER },
        { episode: 422, value: IMPEL_DOWN },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      devilFruit: [{ episode: 103, value: ['dice-dice-fruit'] }],
    },
    'miss-doublefinger': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'Si presenta con i tacchi alti e una sigaretta, e sembra la più tranquilla dell’organizzazione finché non le spuntano spine d’acciaio dalle mani, dalle spalle e dai talloni. Le usa anche come trampoli, per camminare sopra la testa di chi la insegue. Lavora accanto all’agente di grado più alto e ne accetta i silenzi.',
        en: 'She arrives in high heels with a cigarette and seems the calmest person in the organisation until steel spikes come out of her hands, her shoulders and her heels. She uses them as stilts too, to walk above the heads of whoever is chasing her. She works beside the highest-ranked agent and puts up with his silences.',
      },
      affiliation: [{ episode: 103, value: BW_OFFICER }],
      devilFruit: [
        { episode: 117, chapter: 190, value: ['spike-spike-fruit'] },
      ],
    },
    'mr-4': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'È lentissimo: impiega quattro secondi a rispondere a una domanda e altrettanti a decidere di muoversi, e questo lo rende difficile da prevedere. Combatte con una mazza da baseball e con un cane-fucile che ogni quattro minuti sputa una palla esplosiva. La collega con cui lavora parla per tutti e due.',
        en: 'He is extremely slow: it takes him four seconds to answer a question and as long again to decide to move, which makes him hard to read. He fights with a baseball bat and with a dog-shaped gun that spits an exploding ball every four minutes. The colleague he works with does the talking for both of them.',
      },
      affiliation: [{ episode: 103, value: BW_OFFICER }],
    },
    'miss-merry-christmas': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'È una donna anziana e piccola che si trasforma in talpa e scava sotto la città più in fretta di quanto si cammini in superficie. Fa crollare il terreno sotto i piedi dei nemici e riemerge alle loro spalle ridendo. Lavora con un agente lentissimo e gli tiene il ritmo parlando al posto suo.',
        en: 'She is a small elderly woman who turns into a mole and digs beneath the city faster than anyone walks above it. She collapses the ground under her enemies and comes up behind them laughing. She works with an extremely slow agent and keeps his pace by speaking for him.',
      },
      affiliation: [{ episode: 103, value: BW_OFFICER }],
      devilFruit: [{ episode: 113, chapter: 184, value: ['mole-mole-fruit'] }],
    },
    'toto': {
      role: { it: 'Abitante di Yuba', en: 'Resident of Yuba' },
      log: {
        it: 'Yuba era la base dei ribelli finché la sabbia non l’ha sepolta, e lui è l’unico rimasto. Scava ogni giorno in cerca dell’acqua sparita tre anni fa, e all’inizio ha scambiato i viaggiatori per ribelli e li ha aggrediti. È il padre di Kosa, e supplica Bibi di fermare suo figlio.',
        en: 'Yuba was the rebels’ base until the sand buried it, and he is the only one who stayed. He digs every day for the water that dried up three years ago, and at first took the travellers for rebels and went for them. He is Kohza’s father, and he begs Vivi to stop his son.',
      },
      status: [{ episode: 103, value: 'alive' }],
      affiliation: [
        {
          episode: 103,
          value: { it: 'Yuba, ultimo abitante', en: 'Yuba, its last resident' },
        },
      ],
      origin: [{ episode: 103, value: ALABASTA }],
    },
    'hasami': {
      role: { it: 'Granchio del deserto', en: 'Desert crab' },
      log: {
        it: 'È un granchio corridore grande come una casa, amico di Ciglione da quando erano a Rainbase. Corre di lato sulla sabbia con tutta la ciurma sul dorso. L’acqua è un’altra faccenda: quando Nami balla per spingerlo ad attraversare un fiume, affonda prima dell’altra riva.',
        en: 'He is a Moving Crab as big as a house, a friend of Matsuge’s from Rainbase. He runs sideways over the sand with the whole crew on his back. Water is another matter: when Nami dances to push him across a river, he sinks before the far bank.',
      },
      affiliation: [
        {
          episode: 111,
          value: { it: 'Amico di Ciglione', en: 'Matsuge’s friend' },
        },
      ],
    },
    'lassoo': {
      role: { it: 'Cane-fucile di Mister 4', en: 'Mr. 4’s gun-dog' },
      log: {
        it: 'È un bazooka a cui è stato fatto mangiare un frutto del diavolo, e così è diventato un bassotto vivo, perennemente raffreddato. Quando starnutisce spara palle da baseball pesanti come palle di cannone, che esplodono qualche secondo dopo essere cadute. Mister 4 le rilancia con la mazza contro chiunque abbia davanti.',
        en: 'He is a bazooka that was fed a devil fruit, and so became a living dachshund with a permanent cold. When he sneezes he fires baseballs as heavy as cannonballs, which go off a few seconds after they land. Mr. 4 bats them at whoever is in front of him.',
      },
      affiliation: [
        {
          episode: 113,
          value: {
            it: 'Baroque Works, arma di Mister 4',
            en: 'Baroque Works, Mr. 4’s weapon',
          },
        },
      ],
      devilFruit: [{ episode: 113, value: ['dog-dog-fruit-model-dachshund'] }],
    },
    'tsumegeri-guards': {
      role: { it: 'Guardie reali di Alabasta', en: 'Royal guards of Alabasta' },
      log: {
        it: 'Sono quattro delle migliori guardie reali, e irrompono per salvare il loro re da Crocodile contro i suoi stessi ordini. Prima di attaccare bevono l’acqua potente, che dà cinque minuti di forza enorme e poi uccide chi l’ha bevuta. Crocodile si limita a farsi di sabbia e ad aspettare che faccia effetto.',
        en: 'They are four of the royal guard’s best, and they burst in to save their king from Crocodile against his own orders. Before they attack they drink the Hero Water, which gives five minutes of enormous strength and then kills whoever drank it. Crocodile simply turns to sand and waits for it to work.',
      },
      status: [{ episode: 120, value: 'deceased' }],
      affiliation: [
        {
          episode: 120,
          value: {
            it: 'Regno di Alabasta, guardia reale',
            en: 'Kingdom of Alabasta, royal guard',
          },
        },
      ],
      origin: [{ episode: 120, value: ALABASTA }],
    },
    'mr-7': {
      role: BW_FRONTIER_ROLE,
      log: {
        it: 'Lui e la sua compagna sono i cecchini che Crocodile ha piazzato nella torre dell’orologio, accanto a un cannone che deve sparare sulla piazza alle quattro e mezza. Si veste di sette, ride mentre aspetta di accendere la miccia e spara a chiunque provi ad avvicinarsi alla torre. I loro proiettili si uniscono in aria in qualcosa di peggio di ciascuno dei due.',
        en: 'He and his partner are the snipers Crocodile has placed in the clock tower, beside a cannon set to fire on the square at half past four. He dresses in sevens, laughs as he waits to light the fuse and shoots at anyone who comes near the tower. Their bullets join in mid-air into something worse than either.',
      },
      affiliation: [{ episode: 125, value: BW_FRONTIER }],
    },
    'miss-fathers-day': {
      role: BW_FRONTIER_ROLE,
      log: {
        it: 'Veste da rana, ride come una rana e spara proiettili a forma di rana da un’arma intonata. Dalla torre dell’orologio ha abbattuto in volo una guardia reale. Lei e il suo compagno contano su quest’ultima missione per ottenere una promozione.',
        en: 'She wears a frog costume, laughs like a frog and fires frog-shaped bullets from a gun to match. From the clock tower she shot a royal guard out of the sky. She and her partner are counting on this last mission to earn them a promotion.',
      },
      affiliation: [{ episode: 125, value: BW_FRONTIER }],
    },
    'hina': {
      role: { it: 'Capitano della Marina', en: 'Marine captain' },
      log: {
        it: 'Comanda una nave della Marina e parla di sé in terza persona, con la stessa calma con cui accende una sigaretta. Chi le passa attraverso il corpo ne esce con le braccia chiuse in anelli di ferro che non si aprono. Conosce Smoker da quando erano allievi e lo tratta come un collega che si ostina a sbagliare.',
        en: 'She commands a Marine ship and speaks of herself in the third person, with the same calm she lights a cigarette with. Anyone who passes through her body comes out with their arms locked in iron rings that will not open. She has known Smoker since they were cadets and treats him like a colleague who insists on getting it wrong.',
      },
      affiliation: [
        {
          episode: 128,
          value: { it: 'Marina, capitano', en: 'Marines, captain' },
        },
        {
          episode: 517,
          value: { it: 'Marina, contrammiraglio', en: 'Marines, rear admiral' },
        },
      ],
      epithet: [
        { episode: 128, value: { it: 'Gabbia Nera', en: 'Black Cage' } },
      ],
      devilFruit: [{ episode: 128, value: ['cage-cage-fruit'] }],
    },
    'terracotta': {
      role: { it: 'Capocuoca del palazzo', en: 'Palace head chef' },
      log: {
        it: 'Dirige le cucine del palazzo di Alubarna ed è sposata con Igaram, al quale somiglia tanto da essere scambiata per lui travestito da donna. Quando Rufy si sveglia dopo tre giorni di sonno, entra con un vassoio di cibo prima ancora che lo chieda. A cena prende il suo appetito come una sfida e continua a far arrivare piatti.',
        en: 'She runs the kitchens of the palace of Alubarna, and is married to Igaram, whom she resembles so closely that she is taken for him in a dress. When Luffy wakes after three days of sleep she comes in with a tray of food before he can even ask for it. At dinner she takes his appetite as a challenge and keeps the dishes coming.',
      },
      affiliation: [
        {
          episode: 128,
          value: {
            it: 'Regno di Alabasta, capocuoca del palazzo',
            en: 'Kingdom of Alabasta, palace head chef',
          },
        },
      ],
    },
    'nico-robin': {
      chronicle: alabastaChronicles['nico-robin'],
      role: { it: 'Archeologa', en: 'Archaeologist' },
      log: {
        it: 'Era Miss All Sunday, la vicepresidente di Baroque Works, e per tutto il tempo ha seguito il suo capo per una ragione sua: una stele scritta in una lingua che solo lei legge. Fa spuntare braccia dove vuole, dal pavimento o dalla schiena di un nemico. Dopo che Rufy le ha salvato la vita contro la sua volontà, sale sulla Going Merry e dichiara di farne parte.',
        en: 'She was Miss All Sunday, vice-president of Baroque Works, and all along she followed her boss for a reason of her own: a stone slab written in a language only she can read. She sprouts arms wherever she likes, from the floor or from an enemy’s back. After Luffy saves her life against her will, she boards the Going Merry and declares herself part of the crew.',
      },
      status: [{ episode: 130, value: 'alive' }],
      affiliation: [{ episode: 130, value: STRAW_HATS }],
      origin: [
        { episode: 130, value: { it: 'West Blue', en: 'West Blue' } },
        {
          episode: 275,
          value: { it: 'Ohara, West Blue', en: 'Ohara, West Blue' },
        },
      ],
      epithet: [
        {
          episode: 130,
          value: { it: 'Figlia del Demonio', en: 'Devil Child' },
        },
      ],
      devilFruit: [{ episode: 130, value: ['flower-flower-fruit'] }],
      bounty: [
        { episode: 130, value: 79_000_000 },
        { episode: 320, value: 80_000_000 },
        { episode: 746, value: 130_000_000 },
        { episode: 1086, value: 930_000_000 },
      ],
    },
  },
}
