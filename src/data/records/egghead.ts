import { eggheadChronicles } from './egghead.chronicle'
import type { Saga } from './saga'

/**
 * The Egghead arc, episodes 1090 to 1155: the first island of the final
 * saga, a laboratory that lives in the future.
 */

const EGGHEAD = { it: 'Egghead', en: 'Egghead' }

const MARY_GEOISE = { it: 'Mary Geoise', en: 'Mary Geoise' }

const DESTROYED = { it: 'Distrutto', en: 'Destroyed' }

const SERAPHIM = {
  it: 'Serafino, arma del Governo Mondiale',
  en: 'Seraphim, World Government weapon',
}

const SERAPHIM_ROLE = { it: 'Serafino', en: 'Seraphim' }

const ELDER_ROLE = {
  it: 'Uno dei Cinque Astri di Saggezza',
  en: 'One of the Five Elders',
}

export const egghead: Saga = {
  entries: [
    {
      id: 'egghead',
      kind: 'arc',
      revealedAtEpisode: 1090,
      revealedAtChapter: 1061,
      name: { it: 'Egghead', en: 'Egghead' },
      summary: {
        it: 'La ciurma approda su un’isola che vive centinaia di anni nel futuro, costruita attorno al laboratorio di uno scienziato del Governo Mondiale.',
        en: 'The crew lands on an island living hundreds of years in the future, built around the laboratory of a World Government scientist.',
      },
      visual: { art: 'egghead', tint: 'cyan' },
    },
    {
      id: 'egghead-island',
      kind: 'place',
      revealedAtEpisode: 1090,
      revealedAtChapter: 1061,
      name: { it: 'Isola di Egghead', en: 'Egghead Island' },
      summary: {
        it: 'Un’isola-laboratorio nel Nuovo Mondo che, si dice, vive cinquecento anni nel futuro, piena di macchine che non dovrebbero esistere ancora.',
        en: 'A laboratory island in the New World, said to be five hundred years in the future and full of machines that should not exist yet.',
      },
      visual: { art: 'egghead-island', tint: 'orange' },
    },
    {
      id: 'vegapunk',
      kind: 'character',
      revealedAtEpisode: 1096,
      revealedAtChapter: 1066,
      // Koby tells Luffy of Dr. Vegapunk’s seastone hulls at 315, long before he is met.
      nameSaidAt: 315,
      name: { it: 'Vegapunk', en: 'Vegapunk' },
      summary: {
        it: 'Lo scienziato che il mondo insegue da cinquecento anni, un vecchio con la testa tagliata piatta in cima e una mela sopra, che vive dentro il suo laboratorio.',
        en: 'The scientist the world is five hundred years behind, an old man whose head is cut flat on top and crowned with an apple, who lives inside his own laboratory.',
      },
      visual: { art: 'vegapunk', tint: 'cyan' },
    },
    {
      id: 'hibari',
      kind: 'character',
      revealedAtEpisode: 1090,
      revealedAtChapter: 1061,
      name: { it: 'Hibari', en: 'Hibari' },
      summary: {
        it: 'Una giovane ufficiale della Marina con le cuffie sulle orecchie e un orsetto appeso allo zaino, che supplica un contrammiraglio di andare a salvare Kobi.',
        en: 'A young Marine officer with headphones over her ears and a teddy bear hanging from her backpack, who begs a rear admiral to go and rescue Koby.',
      },
      visual: { art: 'hibari', tint: 'pink' },
    },
    {
      id: 'prince-grus',
      kind: 'character',
      revealedAtEpisode: 1090,
      revealedAtChapter: 1061,
      name: { it: 'Prince Grus', en: 'Prince Grus' },
      summary: {
        it: 'Un contrammiraglio della Marina con la pelliccia e un berretto dalla visiera enorme, che si rifiuta di portare i più giovani sull’isola dei pirati dove è prigioniero Kobi.',
        en: 'A Marine rear admiral in a fur coat and a cap with an enormous bill, who refuses to take his juniors to the pirate island where Koby is being held.',
      },
      visual: { art: 'prince-grus', tint: 'green' },
    },
    {
      id: 'doll',
      kind: 'character',
      revealedAtEpisode: 1090,
      revealedAtChapter: 1061,
      name: { it: 'Doll', en: 'Doll' },
      summary: {
        it: 'Viceammiraglio al comando della base G-14 della Marina, capelli neri corti e collare borchiato, che chiede a Tashigi di far tacere Hermeppo.',
        en: 'The vice admiral in command of the G-14 naval branch, short black hair and a spiked choker, who asks Tashigi to make Helmeppo stop his pleading.',
      },
      visual: { art: 'doll', tint: 'violet' },
    },
    {
      id: 'shaka',
      kind: 'character',
      revealedAtEpisode: 1091,
      revealedAtChapter: 1062,
      name: { it: 'Shaka', en: 'Shaka' },
      summary: {
        it: 'Un Vegapunk che rappresenta il bene, un uomo con la testa chiusa in un elmo di metallo, che ferma l’assalto di Lilith con poche parole calme e si fa portare i pirati.',
        en: 'A Vegapunk that stands for good, a man whose head is hidden inside a metal helmet, who calls off Lilith’s raid with a few calm words and has the pirates brought to him.',
      },
      visual: { art: 'shaka', tint: 'ivory' },
    },
    {
      id: 'lilith',
      kind: 'character',
      revealedAtEpisode: 1091,
      revealedAtChapter: 1062,
      name: { it: 'Lilith', en: 'Lilith' },
      summary: {
        it: 'Un Vegapunk che rappresenta il male, una donna alta con i capelli rossi e un casco da aviatore, che cavalca un robot gigante e scatena le sue bestie marine meccaniche contro ogni nave che si avvicina.',
        en: 'A Vegapunk that stands for evil, a tall red-haired woman in a flying helmet who rides a giant robot and sets her mechanical sea beasts on any ship that comes near.',
      },
      visual: { art: 'lilith', tint: 'magenta' },
    },
    {
      id: 's-snake',
      kind: 'character',
      revealedAtEpisode: 1099,
      revealedAtChapter: 1069,
      name: { it: 'S-Snake', en: 'S-Snake' },
      summary: {
        it: 'Un’arma del Governo Mondiale con l’aspetto di una bambina, ali nere, una fiamma che le arde sulla schiena e il volto che l’Imperatrice Pirata aveva da piccola.',
        en: 'A World Government weapon shaped like a child, with black wings, a flame burning at her back and the face the Pirate Empress had as a little girl.',
      },
      visual: { art: 's-snake', tint: 'magenta' },
    },
    {
      id: 's-hawk',
      kind: 'character',
      revealedAtEpisode: 1099,
      revealedAtChapter: 1069,
      name: { it: 'S-Hawk', en: 'S-Hawk' },
      summary: {
        it: 'Un serafino con la faccia da bambino e una grande spada a forma di croce, che nell’aspetto ricorda il più grande spadaccino del mondo.',
        en: 'A Seraphim with a child’s face and a large cross-shaped sword, whose looks recall the greatest swordsman in the world.',
      },
      visual: { art: 's-hawk', tint: 'ocher' },
    },
    {
      id: 's-bear',
      kind: 'character',
      revealedAtEpisode: 1098,
      revealedAtChapter: 1068,
      name: { it: 'S-Bear', en: 'S-Bear' },
      summary: {
        it: 'Un serafino con la faccia da bambino su un corpo da gigante, le orecchie d’orso e gli occhiali spessi di Bartholomew Kuma, che il CP0 riporta a Egghead sulla sua nave.',
        en: 'A Seraphim with a child’s face on a giant’s body, Bartholomew Kuma’s bear ears and thick glasses, that CP0 bring back to Egghead on their ship.',
      },
      visual: { art: 's-bear', tint: 'sand' },
    },
    {
      id: 's-shark',
      kind: 'character',
      revealedAtEpisode: 1095,
      revealedAtChapter: 1065,
      name: { it: 'S-Shark', en: 'S-Shark' },
      summary: {
        it: 'Un serafino costruito sul modello di un uomo-pesce, che nuota nel terreno e nei pavimenti di Egghead come se fossero acqua.',
        en: 'A Seraphim built on the pattern of a fish-man, who swims through the ground and the floors of Egghead as if they were water.',
      },
      visual: { art: 's-shark', tint: 'blue' },
    },
    {
      id: 'edison',
      kind: 'character',
      revealedAtEpisode: 1095,
      revealedAtChapter: 1065,
      name: { it: 'Edison', en: 'Edison' },
      summary: {
        it: 'Il satellite che ha le idee, un piccolo robot con due punte a forma di spina in cima alla testa, che grida ogni volta che gli viene un’idea e vola via a disegnare i progetti.',
        en: 'The satellite that has the ideas, a small robot with two prongs like a plug on top of his head, who shouts whenever an idea comes and flies off to draw the blueprints.',
      },
      visual: { art: 'edison', tint: 'yellow' },
    },
    {
      id: 'pythagoras',
      kind: 'character',
      revealedAtEpisode: 1095,
      revealedAtChapter: 1065,
      name: { it: 'Pythagoras', en: 'Pythagoras' },
      summary: {
        it: 'Il satellite che rappresenta la saggezza, un grosso robot con la testa rotonda e una chiave da carica in cima, che segue i test del laboratorio e annuncia ogni numero che ne esce.',
        en: 'The satellite that stands for wisdom, a large robot with a round head and a wind-up key on top, who watches the laboratory’s tests and calls out every number they produce.',
      },
      visual: { art: 'pythagoras', tint: 'teal' },
    },
    {
      id: 'atlas',
      kind: 'character',
      revealedAtEpisode: 1091,
      revealedAtChapter: 1062,
      name: { it: 'Atlas', en: 'Atlas' },
      summary: {
        it: 'Un Vegapunk che rappresenta la violenza, una ragazza più grossa di Kaido con dei guanti che le permettono di prendere a pugni gli ologrammi, e che colpisce tutto ciò che la fa arrabbiare.',
        en: 'A Vegapunk that stands for violence, a girl bigger than Kaido who wears gloves that let her punch holograms, and hits whatever frustrates her.',
      },
      visual: { art: 'atlas', tint: 'orange' },
    },
    {
      id: 'york',
      kind: 'character',
      revealedAtEpisode: 1095,
      revealedAtChapter: 1065,
      name: { it: 'York', en: 'York' },
      summary: {
        it: 'Il satellite che rappresenta l’avidità, una donna che mangia, dorme e si fa servire, e lo fa per conto degli altri satelliti perché non debbano mai smettere di lavorare.',
        en: 'The satellite that stands for greed, a woman who eats, sleeps and has herself waited on, and does all of it on behalf of the other satellites so they never have to stop working.',
      },
      visual: { art: 'york', tint: 'acid' },
    },
    {
      id: 'jaygarcia-saturn',
      kind: 'character',
      revealedAtEpisode: 1105,
      revealedAtChapter: 1073,
      name: { it: 'Jaygarcia Saturn', en: 'Jaygarcia Saturn' },
      summary: {
        it: 'Uno dei cinque uomini che stanno sopra il Governo Mondiale, un vecchio massiccio con una lunga barba bianca, un piccolo cappello nero e un bastone, diretto a Egghead sulla nave dell’ammiraglio Kizaru.',
        en: 'One of the five men who sit above the World Government, a heavy old man with a long white beard, a small black hat and a cane, on his way to Egghead aboard Admiral Kizaru’s ship.',
      },
      visual: { art: 'jaygarcia-saturn', tint: 'violet' },
    },
    {
      id: 'ginny',
      kind: 'character',
      revealedAtEpisode: 1129,
      revealedAtChapter: 1095,
      name: { it: 'Ginny', en: 'Ginny' },
      summary: {
        it: 'Una bambina schiava con le lentiggini e i capelli rosa corti e spettinati, che a God Valley compare accanto a un giovane Ivankov e offre agli altri schiavi un modo per uscirne vivi.',
        en: 'A freckled slave girl with short, messy pink hair, who turns up at God Valley beside a young Ivankov and offers the other slaves a way out alive.',
      },
      visual: { art: 'ginny', tint: 'orange' },
    },
    {
      id: 'kujaku',
      kind: 'character',
      revealedAtEpisode: 1113,
      revealedAtChapter: 1080,
      name: { it: 'Kujaku', en: 'Kujaku' },
      summary: {
        it: 'Contrammiraglio dello SWORD e nipote di Tsuru, con un vestito rosa e un cappello a campana, che frusta gli edifici di Hachinosu finché non si spostano dove dice lei.',
        en: 'A SWORD rear admiral and granddaughter of Tsuru, in a pink dress and a cloche hat, who whips the buildings of Hachinosu until they move where she tells them.',
      },
      visual: { art: 'kujaku', tint: 'flamingo' },
    },
    {
      id: 'nefertari-lili',
      kind: 'character',
      revealedAtEpisode: 1118,
      revealedAtChapter: 1084,
      name: { it: 'Nefertari Lili', en: 'Nefertari Lili' },
      summary: {
        it: 'Una regina di Alabasta di ottocento anni fa, tra i venti sovrani che fondarono il Governo Mondiale, partita per tornare a casa e mai arrivata.',
        en: 'A queen of Alabasta eight hundred years ago, one of the twenty monarchs who founded the World Government, who set off for home and never arrived.',
      },
      visual: { art: 'nefertari-lili', tint: 'ocher' },
    },
    {
      id: 'figarland-garling',
      kind: 'character',
      revealedAtEpisode: 1120,
      revealedAtChapter: 1086,
      name: { it: 'Figarland Garling', en: 'Figarland Garling' },
      summary: {
        it: 'Il comandante supremo dei Cavalieri di Dio, capelli tirati in punte rigide e occhiali rotondi rossi, che a Mary Geoise giudica un Drago Celeste e lo manda a morte.',
        en: 'The Supreme Commander of the Knights of God, his hair set in stiff spikes behind round red glasses, who judges a Celestial Dragon at Mary Geoise and sends him to his death.',
      },
      visual: { art: 'figarland-garling', tint: 'red' },
    },
    {
      id: 'marcus-mars',
      kind: 'character',
      revealedAtEpisode: 1120,
      revealedAtChapter: 1086,
      name: { it: 'Marcus Mars', en: 'Marcus Mars' },
      summary: {
        it: 'Uno dei cinque che comandano il Governo Mondiale, un vecchio altissimo e magro con i capelli bianchi lunghi e un pizzetto bianco che gli arriva al petto.',
        en: 'One of the five who command the World Government, a very tall, thin old man with long white hair and a white goatee that reaches his chest.',
      },
      visual: { art: 'marcus-mars', tint: 'ice' },
    },
    {
      id: 'topman-warcury',
      kind: 'character',
      revealedAtEpisode: 1120,
      revealedAtChapter: 1086,
      name: { it: 'Topman Warcury', en: 'Topman Warcury' },
      summary: {
        it: 'Uno dei Cinque Astri di Saggezza, un vecchio tondo e calvo con enormi baffi bianchi e delle macchie scure sulla fronte e su una guancia.',
        en: 'One of the Five Elders, a round, bald old man with an enormous white moustache and dark spots on his forehead and cheek.',
      },
      visual: { art: 'topman-warcury', tint: 'wine' },
    },
    {
      id: 'ethanbaron-v-nusjuro',
      kind: 'character',
      revealedAtEpisode: 1120,
      revealedAtChapter: 1086,
      name: { it: 'Ethanbaron V. Nusjuro', en: 'Ethanbaron V. Nusjuro' },
      summary: {
        it: 'Uno dei Cinque Astri di Saggezza, un vecchio calvo dal naso adunco, con occhiali rotondi e un’ampia veste bianca da allenamento, che tiene in mano una katana.',
        en: 'One of the Five Elders, a bald, hook-nosed old man in round glasses and a loose white training robe, who keeps a katana in his hand.',
      },
      visual: { art: 'ethanbaron-v-nusjuro', tint: 'ivory' },
    },
    {
      id: 'shepherd-ju-peter',
      kind: 'character',
      revealedAtEpisode: 1120,
      revealedAtChapter: 1086,
      name: { it: 'Shepherd Ju Peter', en: 'Shepherd Ju Peter' },
      summary: {
        it: 'Uno dei Cinque Astri di Saggezza, più alto di tutti tranne uno, con i capelli corti che si uniscono alla barba sul mento e una cicatrice che si vede sopra il colletto aperto.',
        en: 'One of the Five Elders, taller than all but one of them, with short hair joined to a chin beard and a scar showing above his open collar.',
      },
      visual: { art: 'shepherd-ju-peter', tint: 'sand' },
    },
    {
      id: 'bluegrass',
      kind: 'character',
      revealedAtEpisode: 1128,
      revealedAtChapter: 1094,
      name: { it: 'Bluegrass', en: 'Bluegrass' },
      summary: {
        it: 'Un’anziana viceammiraglio della Marina, minuta, con le cuffie, gli occhiali da sole e i codini biondi, che prende il comando di qualunque macchina su cui sale.',
        en: 'A small old Marine vice admiral in headphones and sunglasses, blonde pigtails under a bowl cut, who takes command of any machine she climbs onto.',
      },
      visual: { art: 'bluegrass', tint: 'yellow' },
    },
    {
      id: 'pomsky',
      kind: 'character',
      revealedAtEpisode: 1128,
      revealedAtChapter: 1108,
      name: { it: 'Pomsky', en: 'Pomsky' },
      summary: {
        it: 'Un viceammiraglio della Marina massiccio, con i baffi a manubrio e una cicatrice sulla guancia, che diventa per metà lontra e colpisce con una mazza dalla testa a conchiglia.',
        en: 'A burly Marine vice admiral with a handlebar moustache and a scar on his cheek, who turns half into a sea otter and swings a maul with a seashell for a head.',
      },
      visual: { art: 'pomsky', tint: 'flamingo' },
    },
    {
      id: 'clapp',
      kind: 'character',
      revealedAtEpisode: 1129,
      revealedAtChapter: 1095,
      name: { it: 'Klap', en: 'Clapp' },
      summary: {
        it: 'Il padre di Kuma, un bucaniere ridotto in schiavitù con la moglie e il figlio, che racconta al bambino di Nika, il Dio del Sole, e balla per farlo ridere.',
        en: 'Kuma’s father, a Buccaneer taken into slavery with his wife and son, who tells the boy about Nika, the Sun God, and dances to make him laugh.',
      },
      visual: { art: 'clapp', tint: 'ocher' },
    },
    {
      id: 'bekori',
      kind: 'character',
      revealedAtEpisode: 1131,
      revealedAtChapter: 1097,
      name: { it: 'Bekori', en: 'Bekori' },
      summary: {
        it: 'Il nuovo re del Regno di Sorbet, un uomo corpulento con la corona in testa, che si inchina ai Draghi Celesti e lascia morire di fame i poveri nelle sue prigioni.',
        en: 'The new king of the Sorbet Kingdom, a stout man in a crown who bows low to the Celestial Dragons and lets the poor starve in his prisons.',
      },
      visual: { art: 'bekori', tint: 'wine' },
    },
    {
      id: 'conney',
      kind: 'character',
      revealedAtEpisode: 1133,
      revealedAtChapter: 1099,
      name: { it: 'Conney', en: 'Conney' },
      summary: {
        it: 'L’ex regina madre del Regno di Sorbet, una vecchina minuta e piena di rughe, così simile a una Bonney invecchiata che nella chiesa di Kuma la scambiano per lei.',
        en: 'The former queen dowager of the Sorbet Kingdom, a tiny, wrinkled old woman so like an aged Bonney that Kuma’s household takes her for the girl.',
      },
      visual: { art: 'conney', tint: 'yellow' },
    },
    {
      id: 'bulldog',
      kind: 'character',
      revealedAtEpisode: 1133,
      revealedAtChapter: 1099,
      name: { it: 'Bulldog', en: 'Bulldog' },
      summary: {
        it: 'Un vecchio con un colbacco a paraorecchie, re di Sorbet due regni fa, che ora governa il paese dal palazzo mentre Kuma è re soltanto di nome.',
        en: 'An old man in a fur hat with ear flaps, king of Sorbet two reigns ago, who now runs the country from the palace while Kuma is king in name only.',
      },
      visual: { art: 'bulldog', tint: 'azure' },
    },
    {
      id: 'alpha',
      kind: 'character',
      revealedAtEpisode: 1134,
      revealedAtChapter: 1100,
      name: { it: 'Alpha', en: 'Alpha' },
      summary: {
        it: 'Un’infermiera con gli occhiali che arriva alla chiesa di Sorbet per assistere Bonney fino alla guarigione, e che pensa a quanto sia facile spezzare il collo a un bambino.',
        en: 'A nurse in glasses who comes to the church in Sorbet to look after Bonney until she is cured, and who thinks of how easily a child’s neck snaps.',
      },
      visual: { art: 'alpha', tint: 'teal' },
    },
    {
      id: 'red-king',
      kind: 'character',
      revealedAtEpisode: 1141,
      revealedAtChapter: 1107,
      name: { it: 'Red King', en: 'Red King' },
      summary: {
        it: 'Un viceammiraglio della Marina enorme e calvo, con un collo lungo pieno di menti e un guanto gigante sul braccio destro, che colpisce con un getto di vapore.',
        en: 'A huge bald Marine vice admiral with a long neck of stacked chins and one giant gauntlet on his right arm, who punches with a blast of steam.',
      },
      visual: { art: 'red-king', tint: 'red' },
    },
    {
      id: 'hound',
      kind: 'character',
      revealedAtEpisode: 1142,
      revealedAtChapter: 1108,
      name: { it: 'Hound', en: 'Hound' },
      summary: {
        it: 'Un viceammiraglio della Marina alto e spettinato, con il rossetto e gli occhiali a punta, che davanti alla flotta in rovina chiede se il Buster Call si possa ancora annullare.',
        en: 'A tall, messy-haired Marine vice admiral with lipstick and pointed glasses, who watches the fleet take a beating and asks whether the Buster Call could still be called off.',
      },
      visual: { art: 'hound', tint: 'blue' },
    },
    {
      id: 'guillotine',
      kind: 'character',
      revealedAtEpisode: 1142,
      revealedAtChapter: 1108,
      name: { it: 'Guillotine', en: 'Guillotine' },
      summary: {
        it: 'Un viceammiraglio della Marina alto, con una lunga barba arancione arricciata e una lama a mezzaluna sulla testa, che chiama Vegapunk traditore e non vuole fermare il Buster Call.',
        en: 'A tall Marine vice admiral with a long curled orange beard and a crescent blade worn on his head, who calls Vegapunk a traitor and will not stop the Buster Call.',
      },
      visual: { art: 'guillotine', tint: 'green' },
    },
    {
      id: 'tosa',
      kind: 'character',
      revealedAtEpisode: 1142,
      revealedAtChapter: 1108,
      name: { it: 'Tosa', en: 'Tosa' },
      summary: {
        it: 'Un viceammiraglio della Marina grosso e barbuto, con un berretto con la scritta MARINES, che insegue la ragazza pirata in fuga e morde con le mani, dieci dita dure come artigli.',
        en: 'A big bearded Marine vice admiral in a cap that reads MARINES, who chases down the fleeing pirate girl and bites with his hands, ten fingers hard as claws.',
      },
      visual: { art: 'tosa', tint: 'ocher' },
    },
    {
      id: 'urban',
      kind: 'character',
      revealedAtEpisode: 1142,
      revealedAtChapter: 1108,
      name: { it: 'Urban', en: 'Urban' },
      summary: {
        it: 'Un viceammiraglio della Marina alto e pallido, con le zanne e i capelli rossi fino ai piedi, sotto un cilindro nero che sa trasformare in un cannone.',
        en: 'A tall, pale Marine vice admiral with fangs and red hair down to his feet, under a black top hat that he can turn into a cannon.',
      },
      visual: { art: 'urban', tint: 'wine' },
    },
    {
      id: 'joy-boy',
      kind: 'character',
      revealedAtEpisode: 1148,
      revealedAtChapter: 1115,
      // The name on the Poneglyph Robin reads at 548, long before the show puts him on screen.
      nameSaidAt: 548,
      name: { it: 'Joy Boy', en: 'Joy Boy' },
      summary: {
        it: 'Il primo uomo a essere chiamato pirata, nato novecento anni fa in un regno molto più avanzato del suo tempo, che combatteva con un corpo elastico come Nika, il Dio del Sole.',
        en: 'The first man ever called a pirate, born nine hundred years ago in a kingdom far ahead of its time, who fought with an elastic body like Nika, the Sun God.',
      },
      visual: { art: 'joy-boy', tint: 'orange' },
    },
    {
      id: 'emet',
      kind: 'character',
      revealedAtEpisode: 1151,
      revealedAtChapter: 1119,
      name: { it: 'Emet', en: 'Emet' },
      summary: {
        it: 'Un enorme robot arrugginito nascosto su Egghead, con un corno mancante sull’elmo, che si risveglia dopo secoli e attraversa le fiamme dell’isola chiamando Joy Boy.',
        en: 'An enormous rusted robot hidden on Egghead, one horn missing from its helmet, that wakes after centuries and walks through the island’s fires calling for Joy Boy.',
      },
      visual: { art: 'emet', tint: 'ocher' },
    },
  ],

  dossiers: {
    'vegapunk': {
      role: {
        it: 'Scienziato capo del Governo Mondiale',
        en: 'World Government chief scientist',
      },
      log: {
        it: 'Il Governo Mondiale lo tiene su un’isola sola del Nuovo Mondo, e dal suo lavoro escono le navi, le armi e i Pacifista che la Marina usa da anni. Chi approda su Egghead trova un vecchio gentile e distratto che, dopo un teletrasporto fallito, resta incastrato dentro un robot e deve gridare aiuto. Bonney lo riconosce subito: è il vero Vegapunk, l’uomo che si dice abbia il cervello migliore del mondo.',
        en: 'The World Government keeps him on a single island in the New World, and out of his work come the ships, the weapons and the Pacifista the Marines have used for years. Whoever lands on Egghead finds a kindly, scatterbrained old man who gets himself stuck inside a robot after a failed warp and has to shout for help. Bonney knows him at once as the real Vegapunk, the man said to have the best brain in the world.',
      },
      status: [
        { episode: 1096, value: 'alive' },
        { episode: 1142, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1096,
          value: {
            it: 'Governo Mondiale, scienziato capo',
            en: 'World Government, chief scientist',
          },
        },
      ],
      origin: [
        {
          episode: 1096,
          value: {
            it: 'Baldimore, Isola di Karakuri',
            en: 'Baldimore, Karakuri Island',
          },
        },
      ],
      epithet: [
        { episode: 1096, value: { it: 'Dr. Vegapunk', en: 'Dr. Vegapunk' } },
      ],
      // The Brain-Brain Fruit is named at 1097, in chapter 1067.
      devilFruit: [
        { episode: 1097, chapter: 1067, value: ['brain-brain-fruit'] },
      ],
    },
    'shaka': {
      role: {
        it: 'Il Vegapunk che rappresenta il bene',
        en: 'The Vegapunk that stands for good',
      },
      log: {
        it: 'È il Vegapunk che rappresenta il bene, ed è Shaka a rispondere per il laboratorio e a dire chi può entrare. Porta un elmo di metallo che non toglie mai e ha una voce calma che non alza mai. Riconosce i pirati dalle loro taglie prima che abbiano detto una parola, e li invita a entrare perché è curioso di conoscerli.',
        en: 'He is the Vegapunk that stands for good, and it is Shaka who answers for the laboratory and says who is let in. He wears a metal helmet he never takes off and has a calm voice he never raises. He knows the pirates by their bounties before they have said a word, and invites them in because he is curious about them.',
      },
      affiliation: [
        {
          episode: 1092,
          value: {
            it: 'Satellite di Vegapunk, Punk-01 Good',
            en: 'Vegapunk satellite, Punk-01 Good',
          },
        },
        { episode: 1110, value: DESTROYED },
      ],
      origin: [{ episode: 1091, value: EGGHEAD }],
      epithet: [{ episode: 1091, value: { it: 'Good', en: 'Good' } }],
    },
    'lilith': {
      role: {
        it: 'Il Vegapunk che rappresenta il male, Punk-02',
        en: 'The Vegapunk that stands for evil, Punk-02',
      },
      log: {
        it: 'Si presenta come Punk-02, il Vegapunk malvagio, e non fa nulla per nasconderlo. Accoglie le navi che si avvicinano a Egghead con un esercito di bestie marine meccaniche e la richiesta di consegnare gli oggetti di valore, perché i fondi per la ricerca sono sempre pochi e a preoccuparsene è lei. Chi la ringrazia per un salvataggio scopre che non aveva nessuna intenzione di salvarlo.',
        en: 'She calls herself Punk-02, the evil Vegapunk, and does nothing to hide it. She greets the ships that come near Egghead with an army of mechanical sea beasts and a demand for their valuables, because the research budget is always short and she is the one worrying about it. Anyone who thanks her for a rescue learns that she never meant to save them.',
      },
      affiliation: [
        {
          episode: 1092,
          value: {
            it: 'Satellite di Vegapunk, Punk-02 Evil',
            en: 'Vegapunk satellite, Punk-02 Evil',
          },
        },
      ],
      origin: [{ episode: 1091, value: EGGHEAD }],
      epithet: [{ episode: 1091, value: { it: 'Evil', en: 'Evil' } }],
    },
    // The four Seraphim point at the fruits themselves rather than at a
    // record of their own: what they carry is a copy grown from another
    // body, not a second fruit, and the summary of each of them already says
    // whose body it recalls. A record per copy would put four near-identical
    // drawings on the sheet and say nothing more. Each of the four points at
    // the fruit the archive files for the body it was copied from.
    's-snake': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'È uno dei serafini custoditi su Egghead: bambini con le ali nere e una fiamma sulla schiena, costruiti per prendere il posto della Flotta dei Sette, usciti senza un graffio dallo scontro su Amazon Lily. Su Amazon Lily questa ha scansato una guerriera Kuja con uno schiaffo, e le Kuja che l’hanno vista da vicino l’hanno trovata identica alla loro Imperatrice da bambina.',
        en: 'She is one of the Seraphim kept on Egghead: children with black wings and a flame at their backs, made to take the place of the Seven Warlords, who came out of the fight on Amazon Lily without a scratch. On Amazon Lily this one slapped a Kuja warrior aside with one hand, and the Kuja who saw her up close thought she looked just like their Empress as a child.',
      },
      affiliation: [{ episode: 1099, value: SERAPHIM }],
      origin: [{ episode: 1099, value: EGGHEAD }],
      devilFruit: [{ episode: 1101, value: ['love-love-fruit'] }],
    },
    's-hawk': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'Uno dei quattro serafini su Egghead, con la faccia da bambino su un corpo più alto di un uomo, ali nere e una fiamma che gli arde sulla schiena. Su Amazon Lily un solo colpo della sua spada ha respinto un Imperatore e tagliato via parte della montagna dell’isola. Non parla e non esita.',
        en: 'One of the four Seraphim on Egghead, with a child’s face on a body taller than a man, black wings and a flame burning at his back. On Amazon Lily a single stroke of his sword knocked an Emperor back and sliced away part of the island’s mountain. He does not speak and does not hesitate.',
      },
      affiliation: [{ episode: 1099, value: SERAPHIM }],
      origin: [{ episode: 1099, value: EGGHEAD }],
      devilFruit: [{ episode: 1108, value: ['dice-dice-fruit'] }],
    },
    's-bear': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'Ha la faccia di un bambino e la stazza di un gigante. Il Cipher Pol lo riporta a Egghead su una nave del Governo Mondiale, e dal laboratorio rispondono che da lì S-Bear sa tornare a casa da solo e che gli agenti possono andarsene. Sotto i capelli bianchi e le orecchie d’orso c’è la faccia di un uomo che la ciurma ha già incontrato, tornato giovane.',
        en: 'It has a child’s face and a giant’s build. Cipher Pol carry it back to Egghead aboard a World Government ship, and the laboratory answers that S-Bear can find its own way home from there and the agents can turn back. Under the white hair and the bear ears, the face is the face of a man the crew has met before, made young again.',
      },
      affiliation: [{ episode: 1098, value: SERAPHIM }],
      origin: [{ episode: 1098, value: EGGHEAD }],
      devilFruit: [{ episode: 1099, value: ['paw-paw-fruit'] }],
    },
    's-shark': {
      role: SERAPHIM_ROLE,
      log: {
        it: 'Questo serafino è costruito sul modello di un uomo-pesce e combatte con il karate degli uomini-pesce. Si immerge nel terreno come si nuota in mare, e riemerge sotto chi ha davanti. Ha ali nere con il fuoco dietro e la faccia di un bambino, e si ferma solo quando glielo ordina Shaka.',
        en: 'This Seraphim is built on the pattern of a fish-man and fights with fish-man karate. It dives into the ground the way a man swims in the sea, and comes up underneath whoever it is fighting. It has black wings with fire behind them and a child’s face, and it stops only when Shaka orders it to.',
      },
      affiliation: [{ episode: 1095, value: SERAPHIM }],
      origin: [{ episode: 1095, value: EGGHEAD }],
      devilFruit: [{ episode: 1101, value: ['swim-swim-fruit'] }],
    },
    'edison': {
      role: {
        it: 'Satellite di Vegapunk, Punk-03',
        en: 'Vegapunk satellite, Punk-03',
      },
      log: {
        it: 'La terza delle sei parti di Vegapunk è quella incaricata di avere le idee. È un piccolo robot, non più alto di un bambino, e le idee gli vengono così spesso che dice di non riuscire a fermarle. Guida i nuovi arrivati nel laboratorio dagli altoparlanti, poi abbandona il test che dovrebbe seguire per andare a disegnare progetti, e fa mangiare York al posto suo per non doversi fermare.',
        en: 'The third of Vegapunk’s six parts is the one whose job is having ideas. He is a small robot, no taller than a child, and ideas come to him so often that he says he cannot stop them. He guides newcomers through the laboratory over the speakers, then walks out of the test he is meant to be watching to draw blueprints, and has York eat for him so he does not have to stop.',
      },
      affiliation: [
        {
          episode: 1095,
          value: {
            it: 'Satellite di Vegapunk, Punk-03 Thinker',
            en: 'Vegapunk satellite, Punk-03 Thinker',
          },
        },
      ],
      origin: [{ episode: 1095, value: EGGHEAD }],
      epithet: [{ episode: 1095, value: { it: 'Thinker', en: 'Thinker' } }],
    },
    'pythagoras': {
      role: {
        it: 'Satellite di Vegapunk, Punk-04',
        en: 'Vegapunk satellite, Punk-04',
      },
      log: {
        it: 'La quarta parte di Vegapunk è quella che raccoglie il sapere: durante un test legge ad alta voce ogni cifra che vede e ne trae subito le conclusioni. Ha una testa rotonda con una chiave da carica in cima, gli occhi assonnati e braccia e gambe fatte di aste di metallo pieghevoli. Piuttosto che perdere un secondo di dati buoni rinuncia ad andare in bagno, e lascia che ci vada York al posto suo.',
        en: 'The fourth part of Vegapunk is the one that collects knowledge: during a test he reads out every figure he sees and draws conclusions from it on the spot. He has a round head with a wind-up key on top, sleepy-looking eyes, and arms and legs made of bendable metal rods. He would rather skip the bathroom than miss a second of good data, so he leaves that to York.',
      },
      affiliation: [
        {
          episode: 1095,
          value: {
            it: 'Satellite di Vegapunk, Punk-04 Wisdom',
            en: 'Vegapunk satellite, Punk-04 Wisdom',
          },
        },
        { episode: 1111, value: DESTROYED },
      ],
      origin: [{ episode: 1095, value: EGGHEAD }],
      epithet: [{ episode: 1095, value: { it: 'Wisdom', en: 'Wisdom' } }],
    },
    'atlas': {
      role: {
        it: 'Il Vegapunk che rappresenta la violenza',
        en: 'The Vegapunk that stands for violence',
      },
      log: {
        it: 'Atlas è il Vegapunk che rappresenta la violenza, e perde la pazienza in fretta. I suoi guanti a pressione di luce le permettono di toccare la luce come se fosse solida, così può colpire un ologramma con la stessa forza di una persona. Costruisce anche le macchine dell’isola, dal condizionatore che tiene calda un’isola invernale a una macchina da cucina che serve cinquecento piatti, e si lamenta che nel mondo non ci siano i soldi per produrle in serie.',
        en: 'Atlas is the Vegapunk that stands for violence, and she loses her temper fast. Her Light-Pressure Gloves let her touch light as if it were solid, so she can punch a hologram as hard as a person. She also builds the island’s machines, from the air conditioning that keeps a winter island warm to a cooking machine that serves five hundred dishes, and complains that the world has no money to mass-produce them.',
      },
      affiliation: [
        {
          episode: 1092,
          value: {
            it: 'Satellite di Vegapunk, Punk-05 Violence',
            en: 'Vegapunk satellite, Punk-05 Violence',
          },
        },
      ],
      origin: [{ episode: 1091, value: EGGHEAD }],
      epithet: [{ episode: 1091, value: { it: 'Violence', en: 'Violence' } }],
    },
    'york': {
      role: {
        it: 'Satellite di Vegapunk, Punk-06',
        en: 'Vegapunk satellite, Punk-06',
      },
      log: {
        it: 'La sesta e ultima parte di Vegapunk è quella che vuole tutto: dorme quanto può, mangia per tutti e si fa portare i piatti dove si trova. Quando Edison è troppo occupato per mangiare o Pythagoras per andare in bagno, ci pensa York al posto loro. I ricercatori la chiamano York-sama e continuano a portarle da mangiare, e in un solo giorno lei mangia, va in bagno e dorme quattro volte.',
        en: 'The sixth and last part of Vegapunk is the one that wants everything: she sleeps as much as she can, eats for all of them and has the plates brought to wherever she happens to be. When Edison is too busy to eat or Pythagoras too busy to go to the bathroom, York does it for them. The researchers call her York-sama and keep the food coming, and in a single day she eats, goes to the bathroom and sleeps four times over.',
      },
      affiliation: [
        {
          episode: 1095,
          value: {
            it: 'Satellite di Vegapunk, Punk-06 Greed',
            en: 'Vegapunk satellite, Punk-06 Greed',
          },
        },
        {
          episode: 1111,
          value: {
            it: 'Traditrice degli altri Vegapunk',
            en: 'Traitor to the other Vegapunks',
          },
        },
        {
          episode: 1123,
          value: {
            it: 'Traditrice, alleata dei Cinque Astri di Saggezza',
            en: 'Traitor, ally of the Five Elders',
          },
        },
      ],
      origin: [{ episode: 1095, value: EGGHEAD }],
      epithet: [{ episode: 1095, value: { it: 'Greed', en: 'Greed' } }],
    },
    'jaygarcia-saturn': {
      role: ELDER_ROLE,
      log: {
        it: 'Finora i cinque che decidono per il mondo si erano visti solo nella loro stanza di Mary Geoise. Questo naviga verso Egghead sulla nave dell’ammiraglio Kizaru, dove è l’ammiraglio in persona a servirgli il tè e i dolci vengono prima controllati per il veleno. Ha una lunga barba bianca, una cicatrice sull’occhio sinistro, un piccolo cappello nero e un bastone. Dice di aver incontrato Vegapunk una volta sola, molto tempo fa, e che quello che è successo è un peccato.',
        en: 'Until now the five who decide for the world have only been seen in their room at Mary Geoise. This one sails toward Egghead on Admiral Kizaru’s ship, where the admiral brings him his tea himself and the cakes are checked for poison first. He has a long white beard, a scar across his left eye, a small black hat and a cane. He says he met Vegapunk once, a long time ago, and that what has happened is a shame.',
      },
      status: [
        { episode: 1105, value: 'alive' },
        { episode: 1155, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1105,
          value: { it: 'Cinque Astri di Saggezza', en: 'Five Elders' },
        },
        {
          episode: 1120,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero della Scienza e della Difesa',
            en: 'Five Elders, Warrior God of Science and Defence',
          },
        },
      ],
      origin: [{ episode: 1105, value: MARY_GEOISE }],
    },
    // Filed at 1129, the caption "EMPORIO IVANKOV AND GINNY, SLAVES". She
    // lives in Sorbet from 1130 but is not from there: Porco Kingdom comes
    // from her Vivre Card alone, so there is no origin line. The anime
    // caption at 1131 makes her a captain, not a commander.
    'ginny': {
      role: { it: 'Schiava a God Valley', en: 'Slave at God Valley' },
      log: {
        it: 'È una degli schiavi portati a God Valley per la gara di caccia dei Draghi Celesti. Quando gli altri schiavi trascinano indietro il bambino bucaniere che ha cercato di scappare, lei e un giovane Ivankov, che chiama fratellone, li fermano. Dicono agli schiavi che hanno tutti l’aria infelice e chiedono se vogliono morire o vivere. Se gli altri li seguono, dicono, hanno un piano magnifico.',
        en: 'She is one of the slaves brought to God Valley for the Celestial Dragons’ hunting competition. When the other slaves drag back the Buccaneer boy who tried to run, she and a young Ivankov, whom she calls her big bro, stop them. They tell the slaves they all look miserable and ask whether they want to die or to live. If the others follow them, they say, they have a great plan.',
      },
      status: [
        { episode: 1129, value: 'alive' },
        { episode: 1132, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1129,
          value: {
            it: 'Schiava dei Draghi Celesti',
            en: 'Slave of the Celestial Dragons',
          },
        },
        {
          episode: 1130,
          value: {
            it: 'Regno di Sorbet; un tempo schiava dei Draghi Celesti',
            en: 'Sorbet Kingdom; formerly a slave of the Celestial Dragons',
          },
        },
        {
          episode: 1131,
          value: {
            it: 'Armata Rivoluzionaria, capitano dell’Armata dell’Est',
            en: 'Revolutionary Army, East Army captain',
          },
        },
      ],
    },
    'marcus-mars': {
      role: ELDER_ROLE,
      log: {
        it: 'Siede con gli altri quattro nella loro stanza del castello di Pangaea, a Mary Geoise, quando Imu chiama per far provare la Fiamma Madre di Vegapunk sul Regno di Lulusia. È Mars a far notare che il popolo di Lulusia mostra segni di rivolta. Quando Sabo li ha attaccati per Cobra, si è trasformato con gli altri in un’enorme sagoma nel buio.',
        en: 'He sits with the other four in their room in Pangaea Castle, at Mary Geoise, when Imu calls to have Vegapunk’s Mother Flame tried out on the Kingdom of Lulusia. Mars is the one who points out that the people of Lulusia have been showing signs of revolt. When Sabo attacked them over Cobra, he changed with the others into a huge shape in the dark.',
      },
      affiliation: [
        {
          episode: 1120,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero dell’Ambiente',
            en: 'Five Elders, Warrior God of Environment',
          },
        },
      ],
      origin: [{ episode: 1120, value: MARY_GEOISE }],
    },
    'topman-warcury': {
      role: ELDER_ROLE,
      log: {
        it: 'Siede con gli altri quattro nella loro stanza di Mary Geoise quando Imu sceglie il Regno di Lulusia come luogo in cui provare la Fiamma Madre di Vegapunk, abitanti compresi. Il suo unico commento è che servirà da lezione per tutti. Porta il titolo di Dio Guerriero della Giustizia.',
        en: 'He sits with the other four in their room at Mary Geoise when Imu chooses the Kingdom of Lulusia as the place to test Vegapunk’s Mother Flame, people and all. His only comment is that it will serve as a good lesson for everyone. He holds the title of Warrior God of Justice.',
      },
      affiliation: [
        {
          episode: 1120,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero della Giustizia',
            en: 'Five Elders, Warrior God of Justice',
          },
        },
      ],
      origin: [{ episode: 1120, value: MARY_GEOISE }],
    },
    'ethanbaron-v-nusjuro': {
      role: ELDER_ROLE,
      log: {
        it: 'È l’unico dei cinque a non portare un completo, e tiene la spada in mano: quando gli altri hanno puntato le pistole su Cobra, lui l’ha sguainata. Quando Imu ordina di provare la Fiamma Madre di Vegapunk sul Regno di Lulusia, lui pensa già al giorno in cui quel potere sarà a loro disposizione.',
        en: 'He is the only one of the five who wears no suit, and he keeps his sword in his hand: when the others drew pistols on Cobra, he drew it. When Imu orders Vegapunk’s Mother Flame tried out on the Kingdom of Lulusia, he is already thinking of the day that power will be theirs to use.',
      },
      affiliation: [
        {
          episode: 1120,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero della Finanza',
            en: 'Five Elders, Warrior God of Finance',
          },
        },
      ],
      origin: [{ episode: 1120, value: MARY_GEOISE }],
    },
    'shepherd-ju-peter': {
      role: ELDER_ROLE,
      log: {
        it: 'Siede con gli altri quattro nella loro stanza di Mary Geoise quando Imu sceglie il Regno di Lulusia per provare la Fiamma Madre di Vegapunk. Ha il viso più giovane dei cinque e l’ultima parola: quando quel potere sarà loro, dice, la lunga battaglia finirà.',
        en: 'He sits with the other four in their room at Mary Geoise when Imu picks the Kingdom of Lulusia to test Vegapunk’s Mother Flame on. He has the youngest face of the five, and the last word: once that power is theirs, he says, the long battle will come to an end.',
      },
      affiliation: [
        {
          episode: 1120,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero dell’Agricoltura',
            en: 'Five Elders, Warrior God of Agriculture',
          },
        },
      ],
      origin: [{ episode: 1120, value: MARY_GEOISE }],
    },
    // SWORD is dated at 1114, the caption "HIBARI, NAVY HQ COMMANDER
    // (SWORD)": her 1090 caption gives the rank only, and the show first
    // says the word SWORD at 1113. North Blue comes from her Vivre Card
    // alone, so there is no origin line.
    'hibari': {
      chronicle: eggheadChronicles.hibari,
      role: { it: 'Capitano di fregata della Marina', en: 'Marine commander' },
      log: {
        it: 'Ha il grado di capitano di fregata al Quartier Generale della Marina e si trova alla base G-14 con Hermeppo: da quando Kobi è stato portato via, nessuno dei due si dà pace. Porta le cuffie sulle orecchie e uno zaino con un orsetto appeso, e parla con un forte accento di provincia. Insieme a Hermeppo supplica il contrammiraglio che chiamano “Principe” di andare con loro sull’isola dei pirati, perché Kobi è sempre stato buono con lei.',
        en: 'She holds the rank of commander at Marine Headquarters and is at the G-14 naval branch with Helmeppo, and since Koby was taken neither of them has let the matter rest. She wears headphones over her ears and a backpack with a teddy bear hanging from it, and speaks with a strong regional accent. Together with Helmeppo she begs the rear admiral they call the Prince to come to the Pirate Island with them, because Koby has always been good to her.',
      },
      status: [{ episode: 1090, value: 'alive' }],
      affiliation: [
        {
          episode: 1090,
          value: {
            it: 'Marina, capitano di fregata',
            en: 'Marines, commander',
          },
        },
        {
          episode: 1114,
          value: {
            it: 'Marina, capitano di fregata dello SWORD',
            en: 'Marines, SWORD commander',
          },
        },
      ],
    },
    // No `devilFruit` line: the Glorp-Glorp Fruit is named on screen at
    // 1114 (caption "GLORP-GLORP FRUIT, CLAY-MAN"), but the wiki gives its
    // type as unknown, so no fruit record can be filed for it yet. SWORD is
    // dated at 1114, his caption "PRINCE GRUS, NAVY HQ REAR ADMIRAL (SWORD)";
    // West Blue comes from his Vivre Card alone, so there is no origin line.
    'prince-grus': {
      chronicle: eggheadChronicles['prince-grus'],
      role: { it: 'Contrammiraglio della Marina', en: 'Marine rear admiral' },
      log: {
        it: 'Contrammiraglio al Quartier Generale della Marina, i più giovani lo chiamano “Principe”. Porta una pelliccia sopra la camicia aperta e un berretto della Marina con una visiera che sporge molto oltre il viso. Quando Hermeppo e Hibari lo supplicano di attaccare l’isola dei pirati dove è prigioniero Kobi, rifiuta: l’isola è la tana di Barbanera, la chiamano “Alveare”, e senza Drake, che non si riesce a contattare, nessuno può muoversi. Dice loro di calmarsi.',
        en: 'A rear admiral at Marine Headquarters whom his juniors call the Prince. He wears a fur coat over an open shirt and a Marine cap whose bill sticks far out in front of his face. When Helmeppo and Hibari beg him to attack the Pirate Island where Koby is held, he refuses: the island is Blackbeard’s home, known as the Beehive, and without Drake, who cannot be reached, nobody is in a position to act. He tells them to calm down.',
      },
      status: [{ episode: 1090, value: 'alive' }],
      affiliation: [
        {
          episode: 1090,
          value: { it: 'Marina, contrammiraglio', en: 'Marines, rear admiral' },
        },
        {
          episode: 1114,
          value: {
            it: 'Marina, contrammiraglio dello SWORD',
            en: 'Marines, SWORD rear admiral',
          },
        },
      ],
    },
    'doll': {
      chronicle: eggheadChronicles.doll,
      role: {
        it: 'Viceammiraglio, comandante della base G-14',
        en: 'Vice admiral, G-14 base commander',
      },
      log: {
        it: 'Comanda la base G-14 della Marina con il grado di viceammiraglio, sull’isola dove Tashigi cura i bambini riportati da Punk Hazard. Ha i capelli neri corti, un collare borchiato e due cerchi alle orecchie. Le suppliche di Hermeppo per Kobi si sentono in tutta la base, e lei ne ha abbastanza: chiede a Tashigi di fare qualcosa con quel moccioso fastidioso. Tashigi risponde che non può farci niente, perché non si sa ancora che fine abbia fatto Kobi.',
        en: 'She commands the G-14 naval branch with the rank of vice admiral, on the island where Tashigi is treating the children brought back from Punk Hazard. She has short black hair, a spiked choker and hoops at her ears. Helmeppo’s pleading about Koby carries across the base, and she has had enough of it: she asks Tashigi to do something about that annoying brat. Tashigi answers that there is nothing she can do, because Koby’s fate is still unknown.',
      },
      status: [{ episode: 1090, value: 'alive' }],
      affiliation: [
        {
          episode: 1090,
          value: {
            it: 'Marina, viceammiraglio, comandante della base G-14',
            en: 'Marines, vice admiral, commander of Naval Branch G-14',
          },
        },
        {
          episode: 1142,
          value: {
            it: 'Marina, viceammiraglio, comandante della base G-14; un tempo sotto Jaguar D. Saul',
            en: 'Marines, vice admiral, commander of Naval Branch G-14; once under Jaguar D. Saul',
          },
        },
      ],
    },
    // Filed at 1113, not 1090: she is on screen at G-14 in 1090 but not
    // named there. The 1113 caption names her, her rank, SWORD, Tsuru and
    // the Whip-Whip Fruit at once ("KUJAKU, NAVY HQ REAR ADMIRAL (SWORD) /
    // GRANDDAUGHTER OF GREAT ADVISER TSURU / WHIP-WHIP FRUIT,
    // DISCIPLINE-WOMAN"). North Blue comes from her Vivre Card alone, so
    // there is no origin line.
    'kujaku': {
      chronicle: eggheadChronicles.kujaku,
      role: { it: 'Contrammiraglio dello SWORD', en: 'SWORD rear admiral' },
      log: {
        it: 'È contrammiraglio al Quartier Generale della Marina, fa parte dello SWORD ed è la nipote di Tsuru. Sbarca a Hachinosu con un vestito rosa e un cappello a campana, il cappotto della Marina sulle spalle e una frusta in mano. Tutto ciò che frusta le obbedisce, edifici compresi, e lei li spinge per le strade sotto gli occhi dei pirati. Ai pirati che la fissano dice che sono carini, e promette di addestrarli.',
        en: 'She is a rear admiral at Marine Headquarters, a member of SWORD and the granddaughter of Tsuru. She comes ashore on Hachinosu in a pink dress and a cloche hat, a Marine coat over her shoulders and a whip in her hand. Whatever she whips obeys her, buildings included, and she drives them through the streets while the pirates watch. She calls the pirates who stare at her cute, and promises to discipline them.',
      },
      status: [{ episode: 1113, value: 'alive' }],
      affiliation: [
        {
          episode: 1113,
          value: {
            it: 'Marina, contrammiraglio dello SWORD',
            en: 'Marines, SWORD rear admiral',
          },
        },
      ],
      devilFruit: [{ episode: 1113, value: ['whip-whip-fruit'] }],
    },
    // Filed as the bare "Nefertari Lili": at 1118 (chapter 1084) she is
    // "Queen Lili of the Nefertari family", and the "D." in her name is
    // the reveal of 1119 (chapter 1085), so the full name is a dated
    // epithet here instead, as Onimaru's is on gyukimaru. Seen at 1118
    // only as a silhouette, which counts as on screen, as Hiyori's
    // silhouette at 910 does in wano.ts.
    'nefertari-lili': {
      chronicle: eggheadChronicles['nefertari-lili'],
      role: {
        it: 'Regina di Alabasta, ottocento anni fa',
        en: 'Queen of Alabasta, eight hundred years ago',
      },
      log: {
        it: 'Ottocento anni fa venti sovrani fondarono il Governo Mondiale, trasferirono le loro famiglie a Mary Geoise e diventarono i Draghi Celesti. La regina di Alabasta era una dei venti, e l’unica a non restare: ripartì per il suo paese, ed è per questo che laggiù regna ancora la famiglia Nefertari. Secondo Cobra non arrivò mai, e dopo di lei regnò il fratello minore. Il suo nome non compare in nessuno dei libri successivi al Secolo Vuoto che Cobra è riuscito a leggere.',
        en: 'Eight hundred years ago twenty monarchs founded the World Government, moved their families to Mary Geoise and became the Celestial Dragons. The queen of Alabasta was one of the twenty, and the only one who did not stay: she set off for her own country, which is why the Nefertari family still reigns there. According to Cobra she never arrived, and her younger brother ruled after her. Her name appears in none of the books from after the Void Century that Cobra has been able to read.',
      },
      status: [{ episode: 1118, value: 'missing' }],
      affiliation: [
        {
          episode: 1118,
          value: {
            it: 'Regno di Alabasta, regina; tra i venti sovrani fondatori del Governo Mondiale',
            en: 'Alabasta Kingdom, queen; one of the twenty founding monarchs of the World Government',
          },
        },
      ],
      origin: [{ episode: 1118, value: { it: 'Alabasta', en: 'Alabasta' } }],
      epithet: [
        {
          episode: 1119,
          value: { it: 'Nefertari D. Lili', en: 'Nefertari D. Lili' },
        },
      ],
    },
    // Nothing here says whose father he is: the anime does not say it by
    // the last episode filed, and the manga says it only from chapter 1137.
    // The Five Elders title is dated at 1155, the episode that gives it
    // (caption "ST. FIGARLAND GARLING / GODHEAD OF SCIENCE & DEFENSE, FIVE
    // ELDERS").
    'figarland-garling': {
      chronicle: eggheadChronicles['figarland-garling'],
      role: {
        it: 'Comandante supremo dei Cavalieri di Dio',
        en: 'Supreme Commander of the Knights of God',
      },
      log: {
        it: 'A Mary Geoise viene giustiziato un Drago Celeste, e la notizia non arriverà mai al resto del mondo. Il giudice è San Figarland Garling, un tempo campione su un’isola chiamata God Valley e oggi comandante supremo dei Cavalieri di Dio: capelli tirati in punte rigide, occhiali rotondi rossi. Il giustiziato è Donquijote Mjosgard, che aveva difeso gli uomini-pesce. Intorno, gli altri nobili si lamentano perché il cibo sta finendo. Chi difende la feccia, dice Garling, vale meno della feccia che protegge.',
        en: 'A Celestial Dragon is executed at Mary Geoise, and the news will never reach the rest of the world. The judge is Saint Figarland Garling, once a champion on an island called God Valley and now the Supreme Commander of the Knights of God, his hair set in stiff spikes behind round red glasses. The man executed is Donquixote Mjosgard, who defended the fish-men, while the other nobles complain that their food is running out. Anyone who defends scum, Garling says, is lower than the scum he protects.',
      },
      status: [{ episode: 1120, value: 'alive' }],
      affiliation: [
        {
          episode: 1120,
          value: {
            it: 'Cavalieri di Dio, comandante supremo',
            en: 'Knights of God, Supreme Commander',
          },
        },
        {
          episode: 1155,
          value: {
            it: 'Cinque Astri di Saggezza, Dio Guerriero della Scienza e della Difesa',
            en: 'Five Elders, Warrior God of Science and Defence',
          },
        },
      ],
      origin: [{ episode: 1120, value: MARY_GEOISE }],
    },
    'bluegrass': {
      chronicle: eggheadChronicles.bluegrass,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È una dei viceammiragli che sbarcano su Egghead con la flotta della Marina: una donna anziana e minuta, con le cuffie in testa e il cappotto sulle spalle. Tutto ciò che cavalca le obbedisce, e un Pacifista che il laboratorio ha rivoltato contro la Marina risponde ancora a lei finché gli sta in groppa, qualunque sia la gerarchia di comando. Dice di aver mangiato il Frutto Nori Nori, e vuole che la ragazza pirata restituisca ai suoi uomini l’età che ha cambiato loro.',
        en: 'She is one of the vice admirals who land on Egghead with the Marine fleet, a small old woman with headphones on her head and her coat over her shoulders. Whatever she rides obeys her: a Pacifista the laboratory has turned against the Marines still answers to her while she sits on its back, whatever the authority hierarchy says. She calls herself a Driving Human who ate the Ride-Ride Fruit, and she wants the pirate girl who changed her men’s ages to change them back.',
      },
      status: [{ episode: 1128, value: 'alive' }],
      affiliation: [
        {
          episode: 1128,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      // Pinned at 1094, where the manga names her and the fruit: Pomsky,
      // named only at 1108, would otherwise hold the fruit there.
      devilFruit: [
        { episode: 1128, chapter: 1094, value: ['ride-ride-fruit'] },
      ],
    },
    // No `devilFruit` line: the otter form is on screen from 1128, but the
    // fruit (the Ott-Ott Fruit) is named only in SBS volume 110, never in an
    // episode.
    'pomsky': {
      chronicle: eggheadChronicles.pomsky,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È uno dei viceammiragli che sbarcano su Egghead, e il primo a trovare la ragazza pirata che la Marina cerca. Lei gli stende gli uomini con un colpo che fa credere loro di essere morti, e lui la prende come un affronto personale: vuole fargliela pagare per ciò che ha fatto ai suoi soldati. Quando un cuoco della ciurma di Cappello di Paglia arriva a portarla via, si trasforma per metà in lontra e cala su di loro una mazza con una conchiglia per testa.',
        en: 'He is one of the vice admirals who land on Egghead, and the first to find the pirate girl the Marines are hunting. She drops his men with a move that makes them believe they have died, and he takes it personally: he wants her to pay for what she has done to his soldiers. When a Straw Hat cook comes to take her away, he changes into a half-otter shape and brings down on them a maul with a seashell for a head.',
      },
      status: [{ episode: 1128, value: 'alive' }],
      affiliation: [
        {
          episode: 1128,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
    },
    // Dies in the same flashback that names him, decades before the present,
    // so the fate a viewer holds at the threshold is already `deceased`, as
    // for Shimotsuki Ushimaru. A 1129 caption already reads "Sorbet
    // Kingdom, South Blue"; the origin waits for 1131, where the family's
    // church is shown there, which is later and so safe.
    'clapp': {
      chronicle: eggheadChronicles.clapp,
      role: { it: 'Padre di Kuma', en: 'Kuma’s father' },
      log: {
        it: 'Quando nasce suo figlio, il medico promette di non dire mai a nessuno del sangue del bambino. Anni dopo lo stesso medico corre ad avvisarlo che al suo ospedale sono arrivati gli uomini del Governo. Klap li supplica di prendere solo lui, perché il sangue dei Bucanieri ce l’ha lui e non sua moglie, ma li portano via tutti e tre come schiavi. Quando la moglie muore, dice a Kuma di resistere e sopravvivere finché Nika non verrà a liberarlo.',
        en: 'When his son is born, the doctor promises never to tell anyone about the baby’s blood. Years later the same doctor runs in to warn him that Government men have come to the hospital. Clapp begs them to take only him, since he alone has Buccaneer blood and his wife does not, but all three are taken as slaves. When his wife dies, he tells Kuma to endure and survive until Nika comes to set him free.',
      },
      status: [{ episode: 1129, value: 'deceased' }],
      affiliation: [
        {
          episode: 1129,
          value: {
            it: 'Bucanieri; schiavo dei Draghi Celesti',
            en: 'Buccaneers; slave of the Celestial Dragons',
          },
        },
      ],
      origin: [
        {
          episode: 1131,
          value: {
            it: 'Regno di Sorbet, South Blue',
            en: 'Sorbet Kingdom, South Blue',
          },
        },
      ],
    },
    // `unknown` from 1133: he is last seen shouting from the Navy fleet that
    // Kuma sinks, and the anime does not say whether he came out of the sea.
    'bekori': {
      chronicle: eggheadChronicles.bekori,
      role: { it: 'Re del Regno di Sorbet', en: 'King of the Sorbet Kingdom' },
      log: {
        it: 'I sudditi del sud dicono che non ha cuore: chi si ammala e non può pagare il tributo celeste finisce in prigione, e un vecchio rinchiuso lì è appena morto di fame. Poi ridisegna il regno. Da oggi il Regno di Sorbet è soltanto il nord dell’isola, perché il tributo si calcola sul numero dei cittadini e il sud, pieno di vecchi che pagano poco, trascina giù tutti. Chi abita al sud è lasciato ai suoi soldati, che possono farne ciò che vogliono. Kuma lo chiama il burattino dei Draghi Celesti.',
        en: 'His subjects in the South call him cold and heartless: whoever falls ill and cannot pay the Heavenly Tribute goes to prison, and an old man jailed there has just starved to death. Then he redraws the kingdom. From today only the north of the island is the Sorbet Kingdom, since the tribute is set by the number of citizens and the South, full of old people who pay little, drags the rest down. Its people are left to his soldiers to use as they like. Kuma calls him the Celestial Dragons’ puppet.',
      },
      status: [
        { episode: 1131, value: 'alive' },
        { episode: 1133, value: 'unknown' },
      ],
      affiliation: [
        {
          episode: 1131,
          value: { it: 'Regno di Sorbet, re', en: 'Sorbet Kingdom, king' },
        },
        {
          episode: 1133,
          value: {
            it: 'Regno di Sorbet, re deposto, in esilio',
            en: 'Sorbet Kingdom, deposed king in exile',
          },
        },
      ],
      origin: [
        {
          episode: 1131,
          value: {
            it: 'Regno di Sorbet, South Blue',
            en: 'Sorbet Kingdom, South Blue',
          },
        },
      ],
    },
    // No origin line: the anime makes her the former queen dowager of Sorbet
    // but never says where she was born.
    'conney': {
      chronicle: eggheadChronicles.conney,
      role: {
        it: 'Ex regina madre del Regno di Sorbet',
        en: 'Former queen dowager of Sorbet',
      },
      log: {
        it: 'È la madre di Bulldog, che era re di Sorbet due regni fa e che ora governa il paese dal palazzo per conto di re Kuma. Arriva con il figlio alla chiesa di Kuma proprio mentre Bonney ha appena scoperto di poter cambiare età, e Gyogyo scambia quella vecchina rugosa per la bambina invecchiata; lei risponde che non importa. Bulldog porta la notizia che Bekori tornerà con le navi da guerra, e prima di partire Kuma dice a Bonney di ascoltare Bulldog e Conney.',
        en: 'She is the mother of Bulldog, who was king of Sorbet two reigns ago and now runs the country from the palace for King Kuma. She comes with her son to Kuma’s church just as Bonney has found out she can change her age, and Gyogyo takes the wrinkled little woman for the girl grown old; she tells them it is fine. Bulldog brings word that Bekori will come back with warships, and before he leaves Kuma tells Bonney to listen to Bulldog and Conney.',
      },
      status: [{ episode: 1133, value: 'alive' }],
      affiliation: [
        {
          episode: 1133,
          value: {
            it: 'Regno di Sorbet, ex regina madre',
            en: 'Sorbet Kingdom, former queen dowager',
          },
        },
      ],
    },
    'bulldog': {
      chronicle: eggheadChronicles.bulldog,
      role: { it: 'Ex re del Regno di Sorbet', en: 'Former king of Sorbet' },
      log: {
        it: 'A Sorbet ricordano il suo regno, due re fa, come un tempo povero ma ricco di spirito. Dopo che Kuma ha abbattuto il castello di Bekori, il popolo lo vuole re e lui resta nella sua chiesa: il lavoro vero lo fa Bulldog dal palazzo, e con Bonney si presenta come l’aiutante di suo padre. Quando un giornale scrive che Kuma ha bruciato un villaggio e preso il trono con la forza, capisce che dietro c’è Bekori e avverte che si preparano navi da guerra. Kuma gli chiede di prendere il trono e di dare riparo a Bonney.',
        en: 'In Sorbet his reign, two kings back, is remembered as poor but spiritually rich. After Kuma brings down Bekori’s castle, the people make Kuma king and he stays in his church; the real work is done by Bulldog from the palace, and to Bonney he introduces himself as her father’s aide. When a newspaper says Kuma burned a village and took the throne by force, he sees Bekori behind it and warns that warships are being prepared. Kuma asks him to take the throne and shelter Bonney.',
      },
      status: [{ episode: 1133, value: 'alive' }],
      affiliation: [
        {
          episode: 1133,
          value: {
            it: 'Regno di Sorbet, ex re; aiutante di re Kuma',
            en: 'Sorbet Kingdom, former king; aide to King Kuma',
          },
        },
      ],
      origin: [
        {
          episode: 1133,
          value: {
            it: 'Regno di Sorbet, South Blue',
            en: 'Sorbet Kingdom, South Blue',
          },
        },
      ],
    },
    // Never Kalifa's sister: that is SBS 109 alone. The 1134 caption already
    // calls her a Cipher Pol No. 8 agent, but the affiliation waits for 1135,
    // where the story says what she and her people are; later is safe.
    'alpha': {
      chronicle: eggheadChronicles.alpha,
      role: { it: 'Infermiera di Bonney', en: 'Bonney’s nurse' },
      log: {
        it: 'Arriva alla chiesa di Sorbet il giorno in cui Kuma riporta a casa Bonney dal laboratorio di Vegapunk. Per ordine del medico, dice, resterà con la bambina finché non sarà guarita del tutto: ogni giorno le misurerà la febbre, le darà la medicina e controllerà ogni minimo cambiamento. I suoi si costruiscono un alloggio davanti alla chiesa e chiedono a tutti di portare con sé un documento. Mentre Kuma se ne va, lei pensa che il collo di un bambino non è niente da spezzare, e lui pensa che lo sa, e che non tornerà.',
        en: 'She arrives at the church in Sorbet on the day Kuma brings Bonney home from Vegapunk’s laboratory. By the doctor’s orders, she says, she will stay with the girl until she is fully cured, taking her temperature, giving her medicine and watching for the slightest change every day. Her people build their lodgings in front of the church and tell everyone to carry ID. As Kuma leaves, she thinks that a child’s neck is nothing to snap, and he thinks that he knows, and will not come back.',
      },
      status: [{ episode: 1134, value: 'alive' }],
      affiliation: [
        {
          episode: 1134,
          value: { it: 'Infermiera di Bonney', en: 'Bonney’s nurse' },
        },
        {
          episode: 1135,
          value: {
            it: 'Governo Mondiale, agente dei servizi segreti',
            en: 'World Government, intelligence agent',
          },
        },
      ],
    },
    'red-king': {
      chronicle: eggheadChronicles['red-king'],
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È uno dei viceammiragli della flotta che assedia Egghead: un omone calvo con una pila di menti su un collo lungo e un solo guanto enorme, con cui manda a terra le bestie marine meccaniche del laboratorio in una sbuffata di vapore. Quando i Pacifista si rivoltano contro la flotta e una trentina di navi piccole e medie sono già affondate, ritira le navi piccole, manda avanti quelle da guerra e fa sparare sui Pacifista, anche se sono armi della Marina.',
        en: 'He is one of the vice admirals of the fleet besieging Egghead, a bald giant of a man with a stack of chins on a long neck and one enormous gauntlet, which he drives into the laboratory’s Sea Beast Weapons in a burst of steam. When the Pacifistas turn on the fleet and some thirty small and medium ships have already gone down, he pulls the small ships back, sends the warships forward and has them fire on the Pacifistas, although they are the Marines’ own weapons.',
      },
      status: [{ episode: 1141, value: 'alive' }],
      affiliation: [
        {
          episode: 1141,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
    },
    // No `devilFruit` line: the Dog-Dog Fruit, Model: Hound is named only in
    // SBS volume 110, and no episode up to the end of Egghead says it or
    // shows him transform.
    'hound': {
      chronicle: eggheadChronicles.hound,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È uno dei viceammiragli della flotta che assedia Egghead: alto, la mascella squadrata, un completo gessato, i guanti neri e un paio di occhiali che finiscono a punta. Quando i Pacifista si rivoltano contro le navi e i giganti sbarcano dall’altra parte dell’isola, è lui a chiedere ad alta voce se il Buster Call si possa annullare, anche se non è mai successo. Un collega non vuole sentirne parlare, e l’ordine che parte è un altro: uccidere la ragazza che comanda i Pacifista.',
        en: 'He is one of the vice admirals of the fleet besieging Egghead: tall and square-jawed, in a pinstriped suit, black gloves and a pair of glasses that end in points. When the Pacifistas turn on the ships and giants land on the far side of the island, he is the one who asks aloud whether the Buster Call could be called off, although it has never been done. A colleague will not hear of it, and the order that goes out is a different one: kill the girl who commands the Pacifistas.',
      },
      status: [{ episode: 1142, value: 'alive' }],
      affiliation: [
        {
          episode: 1142,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
    },
    'guillotine': {
      chronicle: eggheadChronicles.guillotine,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È uno dei viceammiragli della flotta che assedia Egghead: alto, occhiali da sole, una barba arancione che gli arriva alla pancia e una lama a mezzaluna posata sulla testa come un ornamento. Quando i Pacifista si rivoltano contro le navi e un collega chiede se il Buster Call si possa annullare, lui rifiuta senza pensarci. Lo scienziato ha dato a un pirata il comando delle armi della Marina, dice, e questo ne fa un traditore del Governo: l’unico modo di rimettere in piedi la battaglia è riprendersele.',
        en: 'He is one of the vice admirals of the fleet besieging Egghead: tall, in sunglasses, with an orange beard down to his stomach and a crescent-shaped blade sitting on his head like an ornament. When the Pacifistas turn on the ships and a colleague asks whether the Buster Call could be called off, he refuses outright. The scientist gave a pirate command of the Marines’ own weapons, he says, which makes him a complete traitor to the Government, and the only way to turn the battle around is to take those weapons back.',
      },
      status: [{ episode: 1142, value: 'alive' }],
      affiliation: [
        {
          episode: 1142,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
    },
    // Status opens as `unknown`: episode 1142 ends with him smashed into the
    // ground and his line dead, and only 1155 shows him back on his feet.
    'tosa': {
      chronicle: eggheadChronicles.tosa,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È uno dei viceammiragli della flotta che assedia Egghead: un uomo massiccio con una barba nera e tonda, braccia pelose e un berretto con la scritta MARINES. Quando arriva l’ordine di lasciare i posti e uccidere la ragazza che comanda i Pacifista, è il primo a dire di averla nel mirino, e le va dietro di persona. Dice che le sue dita sono dieci Shigan capaci di tranciare una corazza, e le chiude sulla preda come una mascella, con una tecnica che porta il suo nome.',
        en: 'He is one of the vice admirals of the fleet besieging Egghead, a heavy man with a round black beard, hairy arms and a cap that reads MARINES. When the order comes to leave their posts and kill the girl who commands the Pacifistas, he is the first to report her in sight, and he goes after her himself. He says his fingers are ten Finger Pistols that will shred armour, and he closes them on his prey like a jaw, with a move that carries his own name.',
      },
      status: [
        { episode: 1142, value: 'unknown' },
        { episode: 1155, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 1142,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
    },
    // No `devilFruit` line: the cannon is on screen from 1129, but the fruit
    // (the Barrel-Barrel Fruit) is named only in SBS volume 110.
    'urban': {
      chronicle: eggheadChronicles.urban,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È uno dei viceammiragli della flotta che assedia Egghead: alto, pallido, con le zanne in bocca e i capelli rossi che gli arrivano ai piedi. Quando Saturn tiene sollevata la ragazza pirata perché i marine le sparino, la cima del suo cilindro diventa la bocca di un cannone puntata su di lei. Tiene d’occhio la battaglia intera: è lui ad avvisare che anche i giganti sono sbarcati dall’altra parte dell’isola, e il primo ad accorgersi quando un collega smette di rispondere.',
        en: 'He is one of the vice admirals of the fleet besieging Egghead, tall and pale, with fangs in his mouth and red hair that reaches his feet. When Saturn holds the pirate girl up for the Marines to shoot, the top of his hat turns into the mouth of a cannon aimed at her. He keeps an eye on the whole battle: he is the one who reports that giants have landed on the far side of the island too, and the first to notice when a colleague stops answering.',
      },
      status: [{ episode: 1142, value: 'alive' }],
      affiliation: [
        {
          episode: 1142,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
    },
    // No devil fruit: by 1158 the anime says only that he fought "with an
    // elastic body... just like Nika" (1148), never which fruit he ate.
    'joy-boy': {
      chronicle: eggheadChronicles['joy-boy'],
      role: { it: 'Il primo pirata', en: 'The first pirate' },
      log: {
        it: 'Per molto tempo è stato solo un nome: l’uomo che lasciò una lettera di scuse su un Poneglifo dell’Isola degli Uomini-Pesce, e il cui tesoro, sull’ultima isola, fece ridere fino alle lacrime la ciurma del Re dei Pirati. Poi il messaggio di Vegapunk racconta al mondo chi era: nato novecento anni fa in un regno molto più avanzato del suo tempo, combatteva con un corpo elastico come Nika, il Dio del Sole, ed è stato il primo uomo a essere chiamato pirata. La sua parte era così forte che venti regni si allearono contro di lei.',
        en: 'For a long time he was only a name: the man who left an apology on a Poneglyph at Fish-Man Island, and whose treasure on the last island made the King of the Pirates’ crew laugh until they cried. Then Vegapunk’s broadcast tells the world who he was: born nine hundred years ago in a kingdom far ahead of its time, he fought with an elastic body like Nika, the Sun God, and was the first man ever called a pirate. His side was so strong that twenty kingdoms joined forces against it.',
      },
      status: [{ episode: 1148, value: 'deceased' }],
      affiliation: [{ episode: 1148, value: { it: 'Pirata', en: 'Pirate' } }],
    },
    // No status: the robot powers down at 1153, and "deceased" would say
    // more than the show does about a machine. No origin: "no one knows
    // where this iron giant came from" (1098). The waking in the log and the
    // summary, through the fire and saying sorry to Joy Boy, is 1145 (ch 1111).
    'emet': {
      chronicle: eggheadChronicles.emet,
      role: { it: 'Robot antico', en: 'Ancient robot' },
      log: {
        it: 'Vegapunk lo tiene nascosto su Egghead: un robot enorme costruito novecento anni fa, che duecento anni fa scalò la Linea Rossa e attaccò Mary Geoise, poi rimase senza energia prima di fare danni. Il Governo Mondiale ne ordinò la distruzione, ma alcuni scienziati lo conservarono, e nemmeno Vegapunk è riuscito a copiarne la fonte di energia. Quando si risveglia attraversa le fiamme chiedendo scusa a Joy Boy, e protegge il lumacofono che trasmette il messaggio di Vegapunk.',
        en: 'Vegapunk keeps it hidden on Egghead: an enormous robot built nine hundred years ago, which two hundred years ago climbed the Red Line and attacked Mary Geoise, then ran out of power before doing any damage. The World Government ordered it destroyed, but scientists kept it, and not even Vegapunk has managed to copy its power source. When it wakes it walks through the flames apologising to Joy Boy, and it guards the transponder snail that sends out Vegapunk’s broadcast.',
      },
      affiliation: [
        {
          episode: 1151,
          value: {
            it: 'Custodito da Vegapunk su Egghead',
            en: 'In Vegapunk’s keeping on Egghead',
          },
        },
      ],
      epithet: [
        { episode: 1151, value: { it: 'Gigante di Ferro', en: 'Iron Giant' } },
      ],
    },
  },
}
