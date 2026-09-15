import type { Saga } from './saga'

/**
 * The Water Seven saga, episodes 207 to 325: a game on a long thin island,
 * a city of shipwrights, a judicial island, and a new ship.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

const WATER_SEVEN = {
  it: 'Water Seven, Rotta Maggiore',
  en: 'Water Seven, Grand Line',
}

const CIPHER_POL_9 = { it: 'Cipher Pol 9', en: 'Cipher Pol 9' }

const CP9_AGENT = { it: 'Agente del Cipher Pol 9', en: 'Cipher Pol 9 agent' }

const DOCK_ONE = { it: 'Caposquadra del Dock 1', en: 'Foreman of Dock One' }

const GALLEY_LA_DOCK_ONE = {
  it: 'Galley-La Company, caposquadra del Dock 1',
  en: 'Galley-La Company, foreman of Dock One',
}

export const waterSeven: Saga = {
  entries: [
    {
      id: 'long-ring-long-land',
      kind: 'arc',
      revealedAtEpisode: 207,
      revealedAtChapter: 303,
      name: { it: 'Long Ring Long Land', en: 'Long Ring Long Land' },
      summary: {
        it: 'Un’isola lunghissima e sottile, dove alberi e animali sono stirati per il lungo e una ciurma sfida chi approda a una gara con gli uomini in palio.',
        en: 'A very long, very thin island where the trees and the animals are stretched out lengthwise, and a crew challenges whoever lands to a contest for crewmates.',
      },
      visual: { art: 'long-ring-long-land', tint: 'acid' },
    },
    {
      id: 'foxy',
      kind: 'character',
      revealedAtEpisode: 207,
      revealedAtChapter: 307,
      name: { it: 'Foxy', en: 'Foxy' },
      summary: {
        it: 'Un capitano dal mento smisurato che sfida le ciurme di passaggio a una gara in tre prove, e a ogni prova vinta si prende un uomo dell’avversario.',
        en: 'A captain with an outsized chin who challenges passing crews to a three-round game and takes one of their people for every round he wins.',
      },
      visual: { art: 'foxy', tint: 'violet' },
    },
    {
      id: 'porche',
      kind: 'character',
      revealedAtEpisode: 207,
      revealedAtChapter: 315,
      name: { it: 'Porche', en: 'Porche' },
      summary: {
        it: 'L’idolo dei Pirati di Foxy, che entra in scena roteando un bastone con un nastro e si fa applaudire dalla ciurma prima ancora di gareggiare.',
        en: 'The idol of the Foxy Pirates, who takes the field twirling a ribboned baton and has the crew applauding before the game has even started.',
      },
      visual: { art: 'porche', tint: 'pink' },
    },
    {
      id: 'hamburg',
      kind: 'character',
      revealedAtEpisode: 207,
      revealedAtChapter: 315,
      name: { it: 'Hamburg', en: 'Hamburg' },
      summary: {
        it: 'Un gigante della ciurma di Foxy con due guantoni pesanti, che gioca la prima prova in piedi sulla sua barca e butta in mare chi gli passa accanto.',
        en: 'A giant of a man in Foxy’s crew, two heavy gauntlets on his fists, who plays the first round standing on his boat and throws anyone near him into the sea.',
      },
      visual: { art: 'hamburg', tint: 'ocher' },
    },
    {
      id: 'kuzan',
      kind: 'character',
      revealedAtEpisode: 227,
      revealedAtChapter: 321,
      name: { it: 'Kuzan', en: 'Kuzan' },
      summary: {
        it: 'Un ammiraglio della Marina che arriva pedalando su una bicicletta sul mare ghiacciato, si presenta sbadigliando e congela l’acqua sotto i piedi di chi ha davanti.',
        en: 'A Marine admiral who arrives pedalling a bicycle across a frozen sea, introduces himself mid-yawn, and turns the water under your feet to ice.',
      },
      visual: { art: 'kuzan', tint: 'ice' },
    },
    {
      id: 'water-seven',
      kind: 'arc',
      revealedAtEpisode: 229,
      revealedAtChapter: 322,
      name: { it: 'Saga di Water Seven', en: 'Water Seven Saga' },
      summary: {
        it: 'Una città d’acqua di maestri d’ascia, dove la ciurma si scopre meno compatta di quanto credeva.',
        en: 'A city of shipwrights built on water, where the crew turns out to be less united than it thought.',
      },
      visual: { art: 'water-seven', tint: 'teal' },
    },
    {
      id: 'iceburg',
      kind: 'character',
      revealedAtEpisode: 230,
      revealedAtChapter: 327,
      name: { it: 'Iceburg', en: 'Iceburg' },
      summary: {
        it: 'Il sindaco di Water Seven e presidente della più grande compagnia di costruttori navali della città, che gira con un topolino nella tasca della giacca.',
        en: 'The mayor of Water Seven and president of the city’s biggest shipbuilding company, who goes about with a small mouse riding in his coat pocket.',
      },
      visual: { art: 'iceburg', tint: 'teal' },
    },
    {
      id: 'paulie',
      kind: 'character',
      revealedAtEpisode: 230,
      revealedAtChapter: 326,
      name: { it: 'Paulie', en: 'Paulie' },
      summary: {
        it: 'Un caposquadra della Galley-La che combatte con le corde e si scandalizza per qualunque cosa gli sembri indecente, mentre i creditori lo inseguono per la città.',
        en: 'A Galley-La foreman who fights with rope and is scandalised by anything he finds indecent, while his creditors chase him across the city.',
      },
      visual: { art: 'paulie', tint: 'orange' },
    },
    {
      id: 'kokoro',
      kind: 'character',
      revealedAtEpisode: 230,
      revealedAtChapter: 325,
      name: { it: 'Kokoro', en: 'Kokoro' },
      summary: {
        it: 'La capostazione del treno del mare, che tiene una bottiglia sulla scrivania e conosce a memoria l’unico binario che esce da Water Seven.',
        en: 'The station master of the sea train, a bottle always on her desk, who knows by heart the one track that runs out of Water Seven.',
      },
      visual: { art: 'kokoro', tint: 'green' },
    },
    {
      id: 'chimney',
      kind: 'character',
      revealedAtEpisode: 230,
      revealedAtChapter: 325,
      name: { it: 'Chimney', en: 'Chimney' },
      summary: {
        it: 'Una bambina che vive alla stazione del treno del mare con la nonna e con un animaletto che sembra insieme un gatto e un coniglio.',
        en: 'A small girl who lives at the sea train station with her grandmother and a creature that looks like a cat and a rabbit at the same time.',
      },
      visual: { art: 'chimney', tint: 'azure' },
    },
    {
      id: 'kaku',
      kind: 'character',
      revealedAtEpisode: 230,
      revealedAtChapter: 326,
      name: { it: 'Kaku', en: 'Kaku' },
      summary: {
        it: 'Un caposquadra della Galley-La con il naso squadrato e lunghissimo, che sale sui tetti di Water Seven con la stessa facilità con cui gli altri camminano.',
        en: 'A Galley-La foreman with a long square nose, who goes up over the roofs of Water Seven as easily as other people walk down a street.',
      },
      visual: { art: 'kaku', tint: 'yellow' },
    },
    {
      id: 'rob-lucci',
      kind: 'character',
      revealedAtEpisode: 230,
      revealedAtChapter: 326,
      name: { it: 'Rob Lucci', en: 'Rob Lucci' },
      summary: {
        it: 'Un caposquadra della Galley-La che non apre mai bocca e lascia parlare il piccione posato sul suo cilindro, come se le parole fossero dell’uccello.',
        en: 'A Galley-La foreman who never speaks and lets the pigeon perched on his top hat do the talking, as though the words belonged to the bird.',
      },
      visual: { art: 'rob-lucci', tint: 'ivory' },
    },
    {
      id: 'kalifa',
      kind: 'character',
      revealedAtEpisode: 230,
      revealedAtChapter: 327,
      name: { it: 'Califa', en: 'Kalifa' },
      summary: {
        it: 'La segretaria del presidente della Galley-La, occhiali e taccuino sempre in mano, che liquida ogni domanda scomoda definendola una molestia.',
        en: 'The secretary of the Galley-La president, glasses on and notebook in hand, who dismisses every awkward question by calling it harassment.',
      },
      visual: { art: 'kalifa', tint: 'pink' },
    },
    {
      id: 'blueno',
      kind: 'character',
      revealedAtEpisode: 232,
      revealedAtChapter: 333,
      name: { it: 'Blueno', en: 'Blueno' },
      summary: {
        it: 'Il barista di un locale di Water Seven, con la barba intrecciata e un bancone dove chi ha bevuto troppo finisce per raccontare tutto.',
        en: 'The barkeeper of a place in Water Seven, his beard in a braid, behind a counter where anyone who has drunk enough ends up telling everything.',
      },
      visual: { art: 'blueno', tint: 'sand' },
    },
    {
      id: 'kiwi-and-mozu',
      kind: 'character',
      revealedAtEpisode: 233,
      revealedAtChapter: 335,
      name: { it: 'Kiwi e Mozu', en: 'Kiwi and Mozu' },
      summary: {
        it: 'Due sorelle della Franky Family con la stessa pettinatura squadrata e due spade dalla punta tagliata di netto, che parlano quasi sempre all’unisono.',
        en: 'Two sisters of the Franky Family with the same square haircut and two swords cut flat at the tip, who nearly always speak in unison.',
      },
      visual: { art: 'kiwi-and-mozu', tint: 'blue' },
    },
    {
      id: 'zambai',
      kind: 'character',
      revealedAtEpisode: 233,
      revealedAtChapter: 335,
      name: { it: 'Zambai', en: 'Zambai' },
      summary: {
        it: 'Il vice della Franky Family, con la bandana calata sugli occhi e un lanciarazzi in spalla, che guida gli smantellatori quando il capo non c’è.',
        en: 'The Franky Family’s second in command, bandana down over his eyes and a rocket launcher on his shoulder, who leads the dismantlers when the boss is away.',
      },
      visual: { art: 'zambai', tint: 'red' },
    },
    {
      id: 'franky',
      kind: 'character',
      revealedAtEpisode: 235,
      revealedAtChapter: 329,
      name: { it: 'Franky', en: 'Franky' },
      summary: {
        it: 'Un cyborg in mutande e camicia hawaiana, con il ciuffo a pompadour, che smonta navi per vivere e le ricostruisce per passione, e che ha appena rapinato Usop.',
        en: 'A cyborg in swim briefs and a Hawaiian shirt, hair in a pompadour, who strips ships for a living and rebuilds them for love, and who has just robbed Usopp.',
      },
      visual: { art: 'franky', tint: 'cyan' },
    },
    {
      id: 'tom',
      kind: 'character',
      revealedAtEpisode: 246,
      revealedAtChapter: 357,
      name: { it: 'Tom', en: 'Tom' },
      summary: {
        it: 'Un maestro d’ascia uomo-pesce, enorme e con il mazzuolo sempre in spalla, che a Water Seven insegnava a costruire navi di cui non doversi vergognare.',
        en: 'A fish-man master shipwright, huge, his mallet always over one shoulder, who taught Water Seven to build ships nobody would have to be ashamed of.',
      },
      visual: { art: 'tom', tint: 'cyan' },
    },
    {
      id: 'spandam',
      kind: 'character',
      revealedAtEpisode: 248,
      revealedAtChapter: 360,
      name: { it: 'Spandam', en: 'Spandam' },
      summary: {
        it: 'Il capo di un’unità segreta del Governo Mondiale, che dà ordini da una lumaca telefonica dorata e porta una spada con la testa di elefante.',
        en: 'The chief of a secret World Government unit, who gives his orders down a golden Den Den Mushi and carries a sword with an elephant’s head on it.',
      },
      visual: { art: 'spandam', tint: 'wine' },
    },
    {
      id: 'jabra',
      kind: 'character',
      revealedAtEpisode: 264,
      revealedAtChapter: 385,
      name: { it: 'Jabra', en: 'Jabra' },
      summary: {
        it: 'Un agente del Cipher Pol 9 che litiga con i colleghi più volentieri che con i nemici, e piange a comando per far abbassare la guardia a chi ha davanti.',
        en: 'A Cipher Pol 9 agent who would rather quarrel with his colleagues than with an enemy, and cries on cue to make an opponent drop his guard.',
      },
      visual: { art: 'jabra', tint: 'vermilion' },
    },
    {
      id: 'kumadori',
      kind: 'character',
      revealedAtEpisode: 264,
      revealedAtChapter: 385,
      name: { it: 'Kumadori', en: 'Kumadori' },
      summary: {
        it: 'Un agente del Cipher Pol 9 vestito da attore kabuki, con una chioma rosa lunghissima, che recita ogni frase come se fosse in scena a teatro.',
        en: 'A Cipher Pol 9 agent dressed as a kabuki actor, his pink hair down to the floor, who declaims every line as though he were on a stage.',
      },
      visual: { art: 'kumadori', tint: 'magenta' },
    },
    {
      id: 'fukurou',
      kind: 'character',
      revealedAtEpisode: 264,
      revealedAtChapter: 385,
      name: { it: 'Fukuro', en: 'Fukurou' },
      summary: {
        it: 'Un agente del Cipher Pol 9 tondo come un gufo, con una cerniera al posto della bocca, che dice di saper mantenere i segreti e non ne mantiene nessuno.',
        en: 'A Cipher Pol 9 agent as round as an owl, a zip where his mouth should be, who says he can keep a secret and keeps none at all.',
      },
      visual: { art: 'fukurou', tint: 'acid' },
    },
    {
      id: 'oimo-and-kashi',
      kind: 'character',
      revealedAtEpisode: 265,
      revealedAtChapter: 385,
      name: { it: 'Oimo e Kashi', en: 'Oimo and Kashi' },
      summary: {
        it: 'Due giganti che sorvegliano il cancello di un’isola giudiziaria, con le clave appoggiate al muro e una porta che nessuno ha mai forzato.',
        en: 'Two giants who guard the gate of a judicial island, their clubs leaning on the wall and a door nobody has ever forced.',
      },
      visual: { art: 'oimo-and-kashi', tint: 'ocher' },
    },
    {
      id: 'monkey-d-garp',
      kind: 'character',
      revealedAtEpisode: 313,
      revealedAtChapter: 431,
      name: { it: 'Monkey D. Garp', en: 'Monkey D. Garp' },
      summary: {
        it: 'Un viceammiraglio che sale a bordo sbriciolando biscotti di riso e lancia palle di cannone a mano, e che dice di essere il nonno di Rufy.',
        en: 'A vice admiral who comes aboard dropping rice cracker crumbs and throws cannonballs with his bare arm, and who says he is Luffy’s grandfather.',
      },
      visual: { art: 'monkey-d-garp', tint: 'red' },
    },
    {
      id: 'thousand-sunny',
      kind: 'ship',
      revealedAtEpisode: 321,
      revealedAtChapter: 439,
      name: { it: 'Thousand Sunny', en: 'Thousand Sunny' },
      summary: {
        it: 'Un brigantino con una testa di leone a prua, costruito di nascosto con un legno rarissimo e varato per una ciurma che aveva appena perso la sua nave.',
        en: 'A brigantine with a lion’s head at the prow, built in secret from a rare wood and launched for a crew that had just lost the ship it loved.',
      },
      visual: { art: 'thousand-sunny', tint: 'yellow' },
    },
  ],

  dossiers: {
    'foxy': {
      role: {
        it: 'Capitano dei Pirati di Foxy',
        en: 'Captain of the Foxy Pirates',
      },
      log: {
        it: 'Sfida chi passa da Long Ring Long Land al Davy Back Fight, tre prove con gli uomini dell’avversario come posta. La sua ciurma è enorme perché l’ha messa insieme così, una vittoria alla volta, e lo acclama a comando. Piange a dirotto ogni volta che perde qualcosa, e imbrogliare gli riesce meglio che vincere.',
        en: 'He challenges whoever passes Long Ring Long Land to the Davy Back Fight, three rounds with the other crew’s people as the stake. His own crew is enormous because he assembled it exactly this way, one win at a time, and it cheers him on command. He sobs whenever he loses anything, and cheating comes to him more easily than winning.',
      },
      affiliation: [
        {
          episode: 207,
          value: {
            it: 'Pirati di Foxy, capitano',
            en: 'Foxy Pirates, captain',
          },
        },
      ],
      epithet: [
        { episode: 207, value: { it: 'La Volpe d’Argento', en: 'Silver Fox' } },
      ],
      devilFruit: [{ episode: 208, value: ['slow-slow-fruit'] }],
      bounty: [{ episode: 207, value: 24_000_000 }],
    },
    'porche': {
      role: { it: 'Idolo dei Pirati di Foxy', en: 'Idol of the Foxy Pirates' },
      log: {
        it: 'Si presenta come l’idolo della ciurma e si comporta di conseguenza: nastro, sorriso e un pubblico che urla il suo nome a ogni gesto. Nella prima prova del Davy Back Fight gioca in acqua, dove è più veloce di chiunque altro, e non ha la minima intenzione di giocare pulito. Chi la guarda troppo a lungo si dimentica di correre.',
        en: 'She introduces herself as the crew’s idol and behaves like one: ribbon, smile, and an audience chanting her name at every gesture. In the first round of the Davy Back Fight she plays in the water, where she is faster than anyone, and she has no intention whatsoever of playing fair. Anyone who watches her too long forgets to run.',
      },
      affiliation: [
        { episode: 207, value: { it: 'Pirati di Foxy', en: 'Foxy Pirates' } },
      ],
    },
    'hamburg': {
      role: {
        it: 'Combattente dei Pirati di Foxy',
        en: 'Fighter of the Foxy Pirates',
      },
      log: {
        it: 'È il più grosso della ciurma e ne fa il suo unico argomento: braccia enormi, guantoni pesanti e nessuna idea di che cosa dica il regolamento. Nella prima prova del Davy Back Fight si piazza in mezzo al campo e getta in mare chiunque gli passi accanto. Parla poco, e quasi sempre per ripetere il nome del suo capitano.',
        en: 'He is the biggest man in the crew and treats that as his whole argument: huge arms, heavy gauntlets, no idea what the rules say. In the first round of the Davy Back Fight he plants himself in the middle of the field and throws anyone who comes near into the sea. He says little, and most of it is his captain’s name.',
      },
      affiliation: [
        { episode: 207, value: { it: 'Pirati di Foxy', en: 'Foxy Pirates' } },
      ],
    },
    'kuzan': {
      role: { it: 'Ammiraglio della Marina', en: 'Marine admiral' },
      log: {
        it: 'Compare su Long Ring Long Land senza scorta, in bicicletta, e passa più tempo a dormire in piedi che a parlare. Congela il mare e ci cammina sopra, e per lui una ciurma di pirati è una pratica da sbrigare subito o da rimandare, a seconda dell’umore. Chiama pigra la sua idea di giustizia, e nessuno capisce se sia un avvertimento.',
        en: 'He turns up on Long Ring Long Land with no escort, on a bicycle, and spends more time asleep on his feet than talking. He freezes the sea and walks on it, and a crew of pirates is a piece of paperwork he will either settle now or put off, depending on his mood. He calls his own justice lazy, and nobody can tell whether that is a warning.',
      },
      status: [{ episode: 227, value: 'alive' }],
      affiliation: [
        {
          episode: 227,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
        {
          episode: 517,
          value: { it: 'Ha lasciato la Marina', en: 'Left the Marines' },
        },
        {
          episode: 1120,
          value: {
            it: 'Pirati di Barbanera, capitano della decima nave',
            en: 'Blackbeard Pirates, tenth ship captain',
          },
        },
      ],
      epithet: [{ episode: 227, value: { it: 'Aokiji', en: 'Aokiji' } }],
      devilFruit: [{ episode: 227, value: ['ice-ice-fruit'] }],
    },
    'iceburg': {
      role: { it: 'Sindaco di Water Seven', en: 'Mayor of Water Seven' },
      log: {
        it: 'Guida la Galley-La Company, che costruisce le navi migliori del mare, e la città intera lo tratta come una cosa propria. Riceve i clienti con calma, chiama tutti per nome e tiene un topolino di nome Tyrannosaurus nella tasca della giacca. Quando gli chiedono di valutare una caravella malridotta, risponde senza addolcire nulla.',
        en: 'He runs the Galley-La Company, which builds the best ships on the sea, and the whole city treats him as its own. He receives customers calmly, calls everyone by name, and keeps a mouse called Tyrannosaurus in his coat pocket. Asked to look over a battered caravel, he gives his verdict without softening a word of it.',
      },
      affiliation: [
        {
          episode: 230,
          value: {
            it: 'Galley-La Company, presidente e sindaco di Water Seven',
            en: 'Galley-La Company, president and mayor of Water Seven',
          },
        },
      ],
      origin: [{ episode: 230, value: WATER_SEVEN }],
    },
    'paulie': {
      role: DOCK_ONE,
      log: {
        it: 'Dirige gli operai del Dock 1 con un sigaro in bocca e una matassa di corda alla cintura, e nessuno in cantiere lavora più in fretta di lui. Ha debiti di gioco in mezza città e passa metà della giornata a scappare da chi li riscuote. Basta una gonna corta perché gridi all’oscenità e si copra gli occhi.',
        en: 'He runs the men of Dock One with a cigar in his teeth and a coil of rope at his belt, and nobody in the yard works faster. He owes gambling debts across half the city and spends half his day dodging the people who collect them. One short skirt is enough to make him shout about indecency and cover his eyes.',
      },
      affiliation: [{ episode: 230, value: GALLEY_LA_DOCK_ONE }],
      origin: [{ episode: 230, value: WATER_SEVEN }],
    },
    'kokoro': {
      role: {
        it: 'Capostazione del treno del mare',
        en: 'Station master of the sea train',
      },
      log: {
        it: 'Sta alla Stazione Shift, da cui parte l’unico treno che attraversa il mare, e beve dalla mattina con la faccia di chi ha già visto tutto. Ride forte, dà del ragazzino a chiunque e dell’isola sa molto più di quanto lasci intendere. La nipotina le corre intorno tutto il giorno e lei non se ne preoccupa mai.',
        en: 'She sits at Shift Station, where the only train that crosses the sea departs, and drinks from the morning on with the face of someone who has seen it all. She laughs loudly, calls everyone a kid, and knows far more about the island than she lets on. Her granddaughter runs circles around her all day and she never once worries.',
      },
      affiliation: [
        {
          episode: 230,
          value: {
            it: 'Stazione Shift, capostazione del treno del mare',
            en: 'Shift Station, station master of the sea train',
          },
        },
      ],
      origin: [{ episode: 230, value: WATER_SEVEN }],
    },
    'chimney': {
      role: {
        it: 'Nipote della capostazione',
        en: 'The station master’s granddaughter',
      },
      log: {
        it: 'Corre sui binari della Stazione Shift con una canna da pesca più alta di lei e non ha paura di niente, nemmeno del mare che arriva fin sulla banchina. La segue sempre Gonbe, un animale che miagola ma sembra un coniglio e mangia l’erba. Conosce i passaggi della città meglio degli adulti e li indica volentieri a chi si perde.',
        en: 'She runs along the rails of Shift Station with a fishing rod taller than she is and is frightened of nothing, not even the sea coming up over the platform. Gonbe follows her everywhere, an animal that meows but looks like a rabbit and eats grass. She knows the city’s back ways better than the grown-ups and gladly points them out.',
      },
      affiliation: [
        {
          episode: 230,
          value: {
            it: 'Stazione Shift, nipote di Kokoro',
            en: 'Shift Station, Kokoro’s granddaughter',
          },
        },
      ],
      origin: [{ episode: 230, value: WATER_SEVEN }],
    },
    'kaku': {
      role: DOCK_ONE,
      log: {
        it: 'Lavora al Dock 1 insieme a Paulie e si arrampica ovunque, con una calma che non lo abbandona nemmeno a venti metri d’altezza. Parla poco e con una cadenza tutta sua, e quando gli chiedono di valutare una nave dice quello che pensa senza girarci intorno. A Water Seven nessuno trova strano che un maestro d’ascia passi la giornata sui tetti.',
        en: 'He works Dock One alongside Paulie and climbs anything, with a calm that does not leave him twenty metres up either. He speaks little, in a drawl of his own, and when he is asked to price a ship he says what he thinks without dressing it up. Nobody in Water Seven finds it odd that a shipwright spends his day on the rooftops.',
      },
      affiliation: [
        { episode: 230, value: GALLEY_LA_DOCK_ONE },
        { episode: 264, value: CIPHER_POL_9 },
        { episode: 1090, value: { it: 'Cipher Pol 0', en: 'Cipher Pol 0' } },
      ],
      devilFruit: [{ episode: 273, value: ['ox-ox-fruit-model-giraffe'] }],
    },
    'rob-lucci': {
      role: DOCK_ONE,
      log: {
        it: 'Sta al Dock 1 e non dice una parola: a rispondere è Hattori, il piccione posato sul suo cilindro, mentre lui resta immobile a braccia conserte. Gli operai ci hanno fatto l’abitudine e nessuno ci vede più niente di strano. Quando si muove, ha una scioltezza che mette a disagio anche chi non saprebbe dire perché.',
        en: 'He stands at Dock One and does not say a word: the answers come from Hattori, the pigeon on his top hat, while he keeps his arms folded and does not move. The workers are used to it and nobody thinks it strange any more. When he does move, there is an ease about him that unsettles people who could not say why.',
      },
      status: [{ episode: 230, value: 'alive' }],
      affiliation: [
        { episode: 230, value: GALLEY_LA_DOCK_ONE },
        {
          episode: 264,
          value: {
            it: 'Cipher Pol 9, l’agente più forte',
            en: 'Cipher Pol 9, strongest agent',
          },
        },
        { episode: 1090, value: { it: 'Cipher Pol 0', en: 'Cipher Pol 0' } },
      ],
      devilFruit: [{ episode: 273, value: ['cat-cat-fruit-model-leopard'] }],
    },
    'kalifa': {
      role: { it: 'Segretaria di Iceburg', en: 'Iceburg’s secretary' },
      log: {
        it: 'Tiene l’agenda del presidente della Galley-La e decide chi arriva a parlargli e chi no, con un tono che non ammette repliche. Prende appunti su tutto, corregge gli orari di chiunque e non alza mai la voce. Gli operai del cantiere la temono più dei caposquadra, e nessun cliente è mai riuscito a farsi spostare un appuntamento.',
        en: 'She keeps the diary of the Galley-La president and decides who reaches him and who does not, in a tone that allows no argument. She takes notes on everything, corrects everyone’s timings, and never raises her voice. The men in the yards fear her more than the foremen, and no customer has ever had an appointment moved.',
      },
      affiliation: [
        {
          episode: 230,
          value: {
            it: 'Galley-La Company, segretaria di Iceburg',
            en: 'Galley-La Company, Iceburg’s secretary',
          },
        },
        { episode: 264, value: CIPHER_POL_9 },
      ],
      devilFruit: [{ episode: 273, value: ['bubble-bubble-fruit'] }],
    },
    'blueno': {
      role: { it: 'Barista', en: 'Barkeeper' },
      log: {
        it: 'Tiene un bar vicino al canale, asciuga i bicchieri e ascolta senza interrompere mai nessuno. Ha la barba intrecciata, due corna di capelli e una voce così piatta che i clienti non si accorgono di quanto stiano parlando. Sa dove abita ogni persona di Water Seven, perché prima o poi si siedono tutti al suo bancone.',
        en: 'He keeps a bar by the canal, dries the glasses, and listens without ever cutting anyone off. His beard is braided, his hair rises in two horns, and his voice is so flat that customers never notice how much they are saying. He knows where everyone in Water Seven lives, because sooner or later they all sit at his counter.',
      },
      affiliation: [
        {
          episode: 232,
          value: {
            it: 'Bar di Blueno, barista',
            en: 'Blueno’s Bar, barkeeper',
          },
        },
        { episode: 264, value: CIPHER_POL_9 },
      ],
      devilFruit: [{ episode: 273, value: ['door-door-fruit'] }],
    },
    'kiwi-and-mozu': {
      role: {
        it: 'Sorelle della Franky Family',
        en: 'Sisters of the Franky Family',
      },
      log: {
        it: 'Sono le due sorelle che tengono in riga la banda di smantellatori sotto il ponte, con i capelli tagliati a squadra e due spade dalla punta piatta. Finiscono le frasi l’una dell’altra e ripetono a memoria gli ordini del capo. Quando c’è da spostare qualcosa di grosso, arrivano loro per prime.',
        en: 'They are the two sisters who keep the gang of dismantlers under the bridge in order, hair cut square and swords cut flat at the point. They finish each other’s sentences and repeat their boss’s orders word for word. When something heavy has to be shifted, they are the first to arrive.',
      },
      affiliation: [
        { episode: 233, value: { it: 'Franky Family', en: 'Franky Family' } },
      ],
      origin: [{ episode: 233, value: WATER_SEVEN }],
    },
    'zambai': {
      role: {
        it: 'Vice della Franky Family',
        en: 'Franky Family second in command',
      },
      log: {
        it: 'Comanda la banda ogni volta che il capo sparisce, e gli smantellatori lo ascoltano perché urla più forte di tutti. Gira con un lanciarazzi in spalla e la bandana calata sugli occhi, e tratta ogni relitto come merce da portare via prima di sera. Del capo parla con un’ammirazione che non nasconde nemmeno davanti agli estranei.',
        en: 'He runs the gang whenever the boss disappears, and the dismantlers listen because he shouts louder than any of them. He carries a rocket launcher on his shoulder and a bandana down over his eyes, and treats every wreck as goods to be hauled off before dark. He speaks of his boss with an admiration he does not hide from strangers.',
      },
      affiliation: [
        {
          episode: 233,
          value: {
            it: 'Franky Family, vice',
            en: 'Franky Family, second in command',
          },
        },
      ],
      origin: [{ episode: 233, value: WATER_SEVEN }],
    },
    'franky': {
      role: { it: 'Smantellatore di navi', en: 'Ship dismantler' },
      log: {
        it: 'Comanda la Franky Family, una banda di smantellatori che vive sotto un ponte di Water Seven e ruba a chi capita. Si è ricostruito il corpo da solo con pezzi di ferro, e funziona a cola: quando è scarico gli cambiano l’acconciatura e l’umore. Sa cosa vuol dire perdere una nave, e non lo racconta.',
        en: 'He runs the Franky Family, a gang of dismantlers who live under a bridge in Water Seven and rob whoever comes along. He rebuilt his own body out of scrap iron, and it runs on cola: when he is empty his hair and his mood both go flat. He knows what it is to lose a ship, and does not talk about it.',
      },
      status: [{ episode: 235, value: 'alive' }],
      affiliation: [
        {
          episode: 235,
          value: { it: 'Franky Family, capo', en: 'Franky Family, boss' },
        },
        { episode: 322, value: STRAW_HATS },
      ],
      origin: [{ episode: 248, value: { it: 'South Blue', en: 'South Blue' } }],
      epithet: [{ episode: 320, value: { it: 'Cyborg', en: 'Cyborg' } }],
      bounty: [
        { episode: 320, value: 44_000_000 },
        { episode: 746, value: 94_000_000 },
        { episode: 1086, value: 394_000_000 },
      ],
    },
    'tom': {
      role: { it: 'Maestro d’ascia', en: 'Master shipwright' },
      log: {
        it: 'Aveva un cantiere sull’acqua, due allievi e una regola sola: un costruttore deve essere fiero di ogni nave che vara. Era un uomo-pesce arrivato da lontano, enorme e allegro, e non tutti a Water Seven lo vedevano di buon occhio. Sulla sua testa pendeva già un processo, e lui continuava a lavorare come se non lo riguardasse.',
        en: 'He had a yard out on the water, two apprentices, and one rule: a builder must be proud of every ship he launches. He was a fish-man from far away, huge and cheerful, and not everyone in Water Seven was glad to have him. A trial was already hanging over him, and he went on working as though it were somebody else’s business.',
      },
      status: [{ episode: 246, value: 'deceased' }],
      affiliation: [
        {
          episode: 246,
          value: {
            it: 'Tom’s Workers, maestro d’ascia, giustiziato',
            en: 'Tom’s Workers, master shipwright, executed',
          },
        },
      ],
      origin: [
        {
          episode: 246,
          value: {
            it: 'Water Seven, Rotta Maggiore; nato all’Isola degli Uomini-Pesce',
            en: 'Water Seven, Grand Line; born on Fish-Man Island',
          },
        },
      ],
    },
    'spandam': {
      role: { it: 'Capo del Cipher Pol 9', en: 'Chief of Cipher Pol 9' },
      log: {
        it: 'Comanda un’unità segreta del Governo Mondiale e non ha mai vinto niente da solo: manda avanti gli agenti e si prende i meriti al telefono. Ha una maschera che gli copre metà faccia e una voce che sale di tono a ogni contrattempo. Del lavoro sporco fatto a Water Seven anni fa non ha mai dovuto rispondere a nessuno.',
        en: 'He commands a secret World Government unit and has never won anything on his own: he sends his agents in and claims the credit down the line. A mask covers half his face, and his voice climbs a register at every setback. For the dirty work done in Water Seven years ago he has never had to answer to anyone.',
      },
      affiliation: [
        {
          episode: 248,
          value: { it: 'Cipher Pol 9, capo', en: 'Cipher Pol 9, chief' },
        },
        {
          episode: 313,
          value: {
            it: 'Degradato, sotto inchiesta',
            en: 'Demoted, under investigation',
          },
        },
      ],
    },
    'jabra': {
      role: CP9_AGENT,
      log: {
        it: 'Passa più tempo a prendere in giro gli altri agenti che a lavorare, e con uno di loro in particolare finisce sempre a mani alzate. Racconta storie strappalacrime nel mezzo di uno scontro per far esitare l’avversario, e gli riesce. Sotto la divisa porta una fascia da combattimento, e il suo livello nell’unità è tra i più alti.',
        en: 'He spends more time needling the other agents than working, and with one of them it always ends in raised fists. He tells tearful stories in the middle of a fight to make an opponent hesitate, and it works. Under the uniform he wears a martial arts sash, and his rating inside the unit is among the highest there is.',
      },
      affiliation: [{ episode: 264, value: CIPHER_POL_9 }],
      devilFruit: [{ episode: 273, value: ['dog-dog-fruit-model-wolf'] }],
    },
    'kumadori': {
      role: CP9_AGENT,
      log: {
        it: 'Entra in scena declamando, chiama in causa la madre a ogni occasione e piange sul proprio destino davanti a chiunque. Combatte con un bastone e con i capelli, che manovra come due braccia in più. Quando ritiene di avere fallito tenta subito di togliersi la vita, senza mai riuscirci, e riprende a recitare.',
        en: 'He makes his entrance declaiming, invokes his mother at every opportunity, and weeps over his own fate in front of anyone at all. He fights with a staff and with his hair, which he works like a second pair of arms. Whenever he decides he has failed he tries at once to take his own life, never manages it, and goes back to performing.',
      },
      affiliation: [{ episode: 264, value: CIPHER_POL_9 }],
    },
    'fukurou': {
      role: CP9_AGENT,
      log: {
        it: 'Ha una cerniera sulla bocca che apre e chiude di continuo, e ogni volta che la apre racconta qualcosa che avrebbe dovuto tenere per sé. Ride con un verso tutto suo, ripetuto a ogni battuta, e nonostante la stazza si muove più in fretta di quanto chiunque si aspetti. Sa a memoria i numeri e i livelli di tutti gli agenti dell’unità.',
        en: 'A zip runs across his mouth and he opens and shuts it constantly, and every time it opens he gives away something he was meant to keep. He laughs with a noise of his own, repeated after every remark, and for all his bulk he moves faster than anyone expects. He knows every agent’s number and rating in the unit by heart.',
      },
      affiliation: [{ episode: 264, value: CIPHER_POL_9 }],
    },
    'oimo-and-kashi': {
      role: { it: 'Guardiani del cancello', en: 'Gatekeepers' },
      log: {
        it: 'Stanno davanti al cancello di Enies Lobby e fermano chiunque provi a entrare, uno con una clava e l’altro con una spada enorme. Lavorano per il Governo Mondiale da anni e non hanno mai discusso un ordine. Vengono da un’isola di guerrieri e si comportano ancora come tali.',
        en: 'They stand in front of the gate of Enies Lobby and stop anyone who tries to pass, one with a club and one with an enormous sword. They have worked for the World Government for years and have never questioned an order. They come from an island of warriors and still carry themselves like it.',
      },
      affiliation: [
        {
          episode: 265,
          value: {
            it: 'Enies Lobby, guardiani del cancello per il Governo Mondiale',
            en: 'Enies Lobby, gatekeepers under the World Government',
          },
        },
        {
          episode: 312,
          value: {
            it: 'Pirati dei Giganti Guerrieri, liberati',
            en: 'Giant Warrior Pirates, freed',
          },
        },
      ],
      origin: [{ episode: 265, value: { it: 'Elbaf', en: 'Elbaf' } }],
    },
    'monkey-d-garp': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'Arriva ridendo, si siede come se fosse a casa sua e sbriciola biscotti di riso sul ponte di una nave pirata. È il nonno di Rufy, e il suo metodo educativo consisteva nel buttarlo giù da un dirupo perché diventasse forte. Le palle di cannone le tira con il braccio, e la Marina per questo gli ha dato un nome che conoscono tutti.',
        en: 'He arrives laughing, sits down as though he were at home, and drops rice cracker crumbs on the deck of a pirate ship. He is Luffy’s grandfather, and his idea of raising a child was throwing him off a cliff to toughen him up. He throws his cannonballs with his arm, and the Marines gave him a name for it that everyone knows.',
      },
      status: [{ episode: 313, value: 'alive' }],
      affiliation: [
        {
          episode: 313,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
        {
          episode: 1109,
          value: {
            it: 'Marina, viceammiraglio, catturato dai Pirati di Barbanera',
            en: 'Marines, vice admiral, captured by the Blackbeard Pirates',
          },
        },
      ],
      origin: [
        {
          episode: 313,
          value: {
            it: 'Villaggio Fuschia, East Blue',
            en: 'Foosha Village, East Blue',
          },
        },
      ],
      epithet: [
        {
          episode: 313,
          value: {
            it: 'il Pugno, Eroe della Marina',
            en: 'the Fist, Hero of the Marines',
          },
        },
      ],
    },
  },
}
