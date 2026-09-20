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

const BW_OFFICER_ROLE = {
  it: 'Agente ufficiale di Baroque Works',
  en: 'Baroque Works officer agent',
}

const BW_OFFICER = {
  it: 'Baroque Works, agente ufficiale',
  en: 'Baroque Works, officer agent',
}

const IMPEL_DOWN = {
  it: 'Prigioniero di Impel Down',
  en: 'Prisoner of Impel Down',
}

const ALABASTA = { it: 'Alabasta', en: 'Alabasta' }

const DRUM_ISLAND = { it: 'Isola di Drum', en: 'Drum Island' }

export const alabasta: Saga = {
  entries: [
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
      id: 'whisky-peak',
      kind: 'arc',
      revealedAtEpisode: 64,
      revealedAtChapter: 106,
      name: { it: 'Whisky Peak', en: 'Whisky Peak' },
      summary: {
        it: 'Una città della Rotta Maggiore fatta di rocce a forma di cactus, dove cento abitanti accolgono ogni pirata con un banchetto e un brindisi.',
        en: 'A Grand Line town of cactus-shaped rocks, where a hundred townspeople greet every pirate with a banquet and a toast.',
      },
      visual: { art: 'whisky-peak', tint: 'acid' },
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
      revealedAtEpisode: 64,
      revealedAtChapter: 114,
      name: { it: 'Carue', en: 'Karoo' },
      summary: {
        it: 'Un’anatra da corsa con la sella sul dorso e la borraccia al collo, che porta la sua padrona più veloce di un cavallo.',
        en: 'A racing duck with a saddle on his back and a canteen at his neck, carrying his mistress faster than a horse.',
      },
      visual: { art: 'karoo', tint: 'orange' },
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
      id: 'little-garden',
      kind: 'arc',
      revealedAtEpisode: 70,
      revealedAtChapter: 115,
      name: { it: 'Little Garden', en: 'Little Garden' },
      summary: {
        it: 'Un’isola preistorica della Rotta Maggiore, con due vulcani che fumano sopra le felci e ossa di dinosauro grandi come una nave.',
        en: 'A prehistoric island on the Grand Line, two volcanoes smoking above the ferns and dinosaur bones as big as a ship.',
      },
      visual: { art: 'little-garden', tint: 'green' },
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
      revealedAtEpisode: 70,
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
      revealedAtEpisode: 70,
      revealedAtChapter: 120,
      name: { it: 'Broggy', en: 'Brogy' },
      summary: {
        it: 'Un gigante dalla barba rossa che ride fino a scuotere la terra, con un’ascia enorme e un duello che va avanti da cento anni.',
        en: 'A red-bearded giant whose laugh shakes the ground, an enormous axe on his shoulder and a duel a hundred years old.',
      },
      visual: { art: 'brogy', tint: 'vermilion' },
    },
    {
      id: 'drum-island',
      kind: 'arc',
      revealedAtEpisode: 78,
      revealedAtChapter: 130,
      name: { it: 'Isola di Drum', en: 'Drum Island' },
      summary: {
        it: 'Un’isola sepolta dalla neve, con un castello issato in cima a una vetta a forma di tamburo e un paese rimasto senza medici.',
        en: 'An island buried in snow, a castle perched on a drum-shaped peak, and a town left without a single doctor.',
      },
      visual: { art: 'drum-island', tint: 'ice' },
    },
    {
      id: 'wapol',
      kind: 'character',
      revealedAtEpisode: 78,
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
      revealedAtEpisode: 79,
      revealedAtChapter: 135,
      name: { it: 'Dalton', en: 'Dalton' },
      summary: {
        it: 'L’ex capo delle guardie di Drum, un uomo enorme con il mantello pesante e la scure, che difende i villaggi dal re tornato a riprenderseli.',
        en: 'Drum’s former captain of the guard, a huge man in a heavy cloak with an axe, defending the villages from the king who has returned.',
      },
      visual: { art: 'dalton', tint: 'teal' },
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
      revealedAtChapter: 162,
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
      id: 'mr-1',
      kind: 'character',
      revealedAtEpisode: 100,
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
      revealedAtEpisode: 100,
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
      revealedAtEpisode: 100,
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
      revealedAtEpisode: 100,
      revealedAtChapter: 170,
      name: { it: 'Miss Merry Christmas', en: 'Miss Merry Christmas' },
      summary: {
        it: 'Un’agente anziana che si trasforma in talpa e scava gallerie sotto la città, comparendo alle spalle di chi la cerca in superficie.',
        en: 'An older agent who turns into a mole and digs tunnels under the city, surfacing behind whoever is looking for her above.',
      },
      visual: { art: 'miss-merry-christmas', tint: 'red' },
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
      role: { it: 'Agente di frontiera', en: 'Frontier agent' },
      log: {
        it: 'Gira con una corona in testa e due mazze d’acciaio, e parla di sé in terza persona come un attore di provincia. Lavora in coppia con una collega che finge di essere la sua fidanzata, e nessuno dei due ammette per chi lavori davvero. Quando la copertura salta, saluta l’avversario con un inchino prima di attaccarlo.',
        en: 'He goes about in a crown with two steel bats, talking about himself in the third person like a provincial actor. He works in a pair with a colleague who pretends to be his sweetheart, and neither of them admits who they really work for. When the cover falls, he bows to his opponent before attacking.',
      },
      affiliation: [
        {
          episode: 63,
          value: {
            it: 'Baroque Works, agente di frontiera',
            en: 'Baroque Works, frontier agent',
          },
        },
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
      role: { it: 'Agente di frontiera', en: 'Frontier agent' },
      log: {
        it: 'Serve da bere al banchetto vestita da suora e sorride finché l’ultimo pirata non cade addormentato sul tavolo. Poi si toglie il velo, e si vede che ha le spalle più larghe di chiunque altro in città. Combatte a mani nude con un paio di tirapugni, e solleva un uomo adulto come si solleva un boccale.',
        en: 'She pours the drinks at the banquet in a nun’s habit and keeps smiling until the last pirate has fallen asleep on the table. Then the veil comes off, and her shoulders turn out to be broader than anyone else’s in town. She fights bare-handed with a pair of knuckledusters, and lifts a grown man the way one lifts a tankard.',
      },
      affiliation: [
        {
          episode: 64,
          value: {
            it: 'Baroque Works, agente di frontiera',
            en: 'Baroque Works, frontier agent',
          },
        },
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
          episode: 64,
          value: {
            it: 'Cavalcatura di Bibi; Squadra delle Super Anatre di Alabasta, capitano',
            en: 'Vivi’s mount; Alabasta’s Super Spot-Billed Duck Squad, captain',
          },
        },
      ],
      origin: [{ episode: 64, value: ALABASTA }],
    },
    'mr-5': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'Tutto quello che si stacca dal suo corpo diventa esplosivo: il fiato, le dita, una briciola tolta dal naso e lanciata come una pallottola. Lavora in coppia con una collega che ride di qualunque cosa e non si scompone mai. Ha ricevuto l’ordine di eliminare chiunque abbia scoperto il nome del capo.',
        en: 'Anything that leaves his body becomes an explosive: his breath, his fingers, a crumb picked from his nose and flicked like a bullet. He works in a pair with a colleague who laughs at everything and never loses her composure. His orders are to kill anyone who has learned the boss’s name.',
      },
      affiliation: [{ episode: 66, value: BW_OFFICER }],
      devilFruit: [{ episode: 66, value: ['bomb-bomb-fruit'] }],
    },
    'miss-valentine': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'Ride senza fermarsi mai, anche mentre lavora, e scende dal cielo appesa a un ombrello giallo limone. Può rendersi leggera come una piuma o pesante come una campana di bronzo, e si lascia cadere addosso a chi sta sotto. Viaggia sempre con un collega che fa saltare in aria tutto quello che tocca.',
        en: 'She laughs without stopping, even at work, and comes down out of the sky under a lemon-yellow umbrella. She can make herself light as a feather or heavy as a bronze bell, and drops on whoever is underneath. She travels everywhere with a colleague who blows up whatever he touches.',
      },
      affiliation: [{ episode: 66, value: BW_OFFICER }],
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
        {
          episode: 67,
          value: { it: 'Alubarna, Alabasta', en: 'Alubarna, Alabasta' },
        },
      ],
    },
    'mr-3': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'Produce cera dal proprio corpo e la indurisce finché non diventa dura come la pietra: ne fa gabbie, scale, statue e un enorme candelabro su cui si arrampica per guardare le sue prede dall’alto. Si pettina i capelli a forma di tre e chiama arte quello che fa. Lavora con una ragazzina che dipinge mentre lui uccide.',
        en: 'He makes wax from his own body and hardens it until it is as strong as stone: cages, staircases, statues and a great candlestand he climbs to look down on his prey. He wears his hair shaped like a three and calls what he does art. He works with a small girl who paints while he kills.',
      },
      affiliation: [
        { episode: 70, value: BW_OFFICER },
        { episode: 422, value: IMPEL_DOWN },
        { episode: 517, value: { it: 'Ciurma di Bagy', en: 'Buggy’s crew' } },
      ],
      devilFruit: [{ episode: 70, value: ['wax-wax-fruit'] }],
      bounty: [{ episode: 70, value: 24_000_000 }],
    },
    'miss-goldenweek': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'Ha l’età di una bambina delle elementari e la calma di chi non ha mai avuto fretta in vita sua. Si siede in mezzo al combattimento con la tavolozza sulle ginocchia e un biscotto di riso in bocca, e dipinge. Il socio con cui lavora la tratta da assistente; lei lo ascolta poco e continua a colorare.',
        en: 'She has the age of a primary-school child and the calm of someone who has never hurried in her life. She sits down in the middle of a fight with a palette on her knees and a rice cracker in her mouth, and paints. The partner she works with treats her as an assistant; she barely listens and goes on colouring.',
      },
      affiliation: [{ episode: 70, value: BW_OFFICER }],
    },
    'dorry': {
      role: { it: 'Guerriero gigante di Elbaf', en: 'Giant warrior of Elbaf' },
      log: {
        it: 'È alto come una torre, porta uno scudo rotondo e una spada, e vive in una grotta di Little Garden dove arrostisce bestie preistoriche intere. Da cento anni duella ogni giorno con un altro gigante per una ragione che nessuno dei due ricorda più, e nessuno dei due ha ceduto un passo. Tra un duello e l’altro brindano insieme.',
        en: 'He stands as tall as a tower, carries a round shield and a sword, and lives in a cave on Little Garden where he roasts prehistoric beasts whole. For a hundred years he has duelled another giant every day over a reason neither of them remembers, and neither has given a step. Between duels they drink together.',
      },
      affiliation: [
        {
          episode: 70,
          value: {
            it: 'Pirati Guerrieri Giganti, co-capitano',
            en: 'Giant Warrior Pirates, co-captain',
          },
        },
      ],
      origin: [{ episode: 70, value: { it: 'Elbaf', en: 'Elbaf' } }],
      epithet: [{ episode: 70, value: { it: 'Orco Blu', en: 'Blue Ogre' } }],
      bounty: [{ episode: 70, value: 100_000_000 }],
    },
    'brogy': {
      role: { it: 'Guerriero gigante di Elbaf', en: 'Giant warrior of Elbaf' },
      log: {
        it: 'Ha la barba rossa e una risata che si sente dall’altra parte dell’isola, e porta un’ascia che nessun uomo riuscirebbe a sollevare. Ogni volta che il vulcano erutta scende nel campo di battaglia e affronta il suo vecchio amico, come fa da cento anni. Dice che il duello è l’unica cosa che li tiene vivi tutti e due.',
        en: 'He has a red beard and a laugh you can hear from the far side of the island, and he carries an axe no man could lift. Every time the volcano erupts he walks down to the field and faces his old friend, as he has for a hundred years. He says the duel is the only thing keeping the two of them alive.',
      },
      affiliation: [
        {
          episode: 70,
          value: {
            it: 'Pirati Guerrieri Giganti, co-capitano',
            en: 'Giant Warrior Pirates, co-captain',
          },
        },
      ],
      origin: [{ episode: 70, value: { it: 'Elbaf', en: 'Elbaf' } }],
      epithet: [{ episode: 70, value: { it: 'Orco Rosso', en: 'Red Ogre' } }],
      bounty: [{ episode: 70, value: 100_000_000 }],
    },
    'wapol': {
      role: { it: 'Re in esilio', en: 'King in exile' },
      log: {
        it: 'È tornato su un’isola che aveva lasciato quando i pirati sono arrivati, e pretende che gli venga restituita. La sua bocca può mordere e inghiottire qualunque cosa, metallo compreso, e quello che mangia gli esce di nuovo trasformato in altro. Dell’isola parla come di una proprietà, e di chi ci vive come di gente che gli deve ancora qualcosa.',
        en: 'He has come back to an island he left when pirates arrived, and demands it be handed to him again. His mouth can bite through and swallow anything, metal included, and what he eats comes back out as something else. He speaks of the island as a possession, and of the people on it as debtors.',
      },
      affiliation: [
        {
          episode: 78,
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
      origin: [
        { episode: 78, value: { it: 'Regno di Drum', en: 'Drum Kingdom' } },
      ],
      epithet: [
        { episode: 78, value: { it: 'Wapol di Latta', en: 'Tin-Plate' } },
      ],
      devilFruit: [{ episode: 79, value: ['munch-munch-fruit'] }],
    },
    'bon-clay': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'Viaggia su una nave a forma di cigno, indossa un cappotto di piume e scarpette da ballo a punta, e si presenta danzando. Il suo volto diventa quello di chiunque abbia toccato con la mano destra, e torna il suo quando si tocca con la sinistra. Ha passato una giornata intera a bordo con dei pirati senza dire chi fosse, e li ha trovati simpatici.',
        en: 'He travels on a swan-shaped ship, wears a coat of feathers and pointed dancing shoes, and introduces himself in a pirouette. His face becomes the face of anyone he has touched with his right hand, and comes back when he touches himself with the left. He spent a whole day aboard with a crew of pirates without saying who he was, and rather liked them.',
      },
      affiliation: [
        { episode: 78, value: BW_OFFICER },
        { episode: 422, value: IMPEL_DOWN },
        {
          episode: 452,
          value: {
            it: 'Impel Down, regina autoproclamata del livello 5.5',
            en: 'Impel Down, self-appointed queen of level 5.5',
          },
        },
      ],
      devilFruit: [{ episode: 78, value: ['clone-clone-fruit'] }],
      bounty: [{ episode: 78, value: 32_000_000 }],
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
          episode: 79,
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
      origin: [{ episode: 79, value: DRUM_ISLAND }],
      devilFruit: [{ episode: 79, value: ['ox-ox-fruit-model-bison'] }],
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
      devilFruit: [{ episode: 83, value: ['human-human-fruit'] }],
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
    'crocodile': {
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Ad Alabasta gli hanno intitolato piazze: ha fermato i pirati che assalivano le coste e il popolo lo adora. Sotto il casinò di Rainbase dirige Baroque Works, una rete di agenti con nomi in codice che non lo hanno mai visto in faccia. Fuma sigari, non alza la voce e non considera nessuno un avversario.',
        en: 'Alabasta has named squares after him: he stopped the pirates raiding its coast and the people adore him. Beneath a casino in Rainbase he runs Baroque Works, a network of code-named agents who have never seen his face. He smokes cigars, never raises his voice, and does not consider anyone an opponent.',
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
      bounty: [
        { episode: 130, value: 81_000_000 },
        { episode: 1088, value: 1_965_000_000 },
      ],
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
      devilFruit: [{ episode: 93, value: ['bird-bird-fruit-model-falcon'] }],
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
      devilFruit: [{ episode: 93, value: ['dog-dog-fruit-model-jackal'] }],
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
      bounty: [{ episode: 483, value: 550_000_000 }],
    },
    'mr-1': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'È l’agente di grado più alto dell’organizzazione e non ha mai avuto bisogno di alzare la voce. Il suo corpo diventa acciaio dove vuole: le braccia si aprono in lame, le gambe si trasformano in scuri, e nessuna spada normale lo scalfisce. Lavora con una collega elegante e non le rivolge quasi mai la parola.',
        en: 'He is the highest-ranked agent in the organisation and has never needed to raise his voice. His body turns to steel wherever he wants it: his arms open into blades, his legs become axes, and no ordinary sword marks him. He works with an elegant colleague and almost never speaks to her.',
      },
      affiliation: [
        { episode: 100, value: BW_OFFICER },
        { episode: 422, value: IMPEL_DOWN },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      devilFruit: [{ episode: 100, value: ['dice-dice-fruit'] }],
      bounty: [{ episode: 100, value: 75_000_000 }],
    },
    'miss-doublefinger': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'Si presenta con i tacchi alti e una sigaretta, e sembra la più tranquilla dell’organizzazione finché non le spuntano spine d’acciaio dalle mani, dalle spalle e dai talloni. Le usa anche come trampoli, per camminare sopra la testa di chi la insegue. Lavora accanto all’agente di grado più alto e ne accetta i silenzi.',
        en: 'She arrives in high heels with a cigarette and seems the calmest person in the organisation until steel spikes come out of her hands, her shoulders and her heels. She uses them as stilts too, to walk above the heads of whoever is chasing her. She works beside the highest-ranked agent and puts up with his silences.',
      },
      affiliation: [{ episode: 100, value: BW_OFFICER }],
      devilFruit: [{ episode: 100, value: ['spike-spike-fruit'] }],
    },
    'mr-4': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'È lentissimo: impiega quattro secondi a rispondere a una domanda e altrettanti a decidere di muoversi, e questo lo rende difficile da prevedere. Combatte con una mazza da baseball e con un cane-fucile che ogni quattro minuti sputa una palla esplosiva. La collega con cui lavora parla per tutti e due.',
        en: 'He is extremely slow: it takes him four seconds to answer a question and as long again to decide to move, which makes him hard to read. He fights with a baseball bat and with a dog-shaped gun that spits an exploding ball every four minutes. The colleague he works with does the talking for both of them.',
      },
      affiliation: [{ episode: 100, value: BW_OFFICER }],
    },
    'miss-merry-christmas': {
      role: BW_OFFICER_ROLE,
      log: {
        it: 'È una donna anziana e piccola che si trasforma in talpa e scava sotto la città più in fretta di quanto si cammini in superficie. Fa crollare il terreno sotto i piedi dei nemici e riemerge alle loro spalle ridendo. Lavora con un agente lentissimo e gli tiene il ritmo parlando al posto suo.',
        en: 'She is a small elderly woman who turns into a mole and digs beneath the city faster than anyone walks above it. She collapses the ground under her enemies and comes up behind them laughing. She works with an extremely slow agent and keeps his pace by speaking for him.',
      },
      affiliation: [{ episode: 100, value: BW_OFFICER }],
      devilFruit: [{ episode: 100, value: ['mole-mole-fruit'] }],
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
