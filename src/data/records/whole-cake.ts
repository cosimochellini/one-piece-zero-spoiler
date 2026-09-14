import type { Saga } from './saga'

/**
 * The Whole Cake Island saga, episodes 747 to 889: an elephant that walks,
 * an island made of sweets, and a council of kings.
 */

const ZOU = { it: 'Zou', en: 'Zou' }

const TOTTO_LAND = { it: 'Totto Land', en: 'Totto Land' }

const GERMA_KINGDOM = {
  it: 'Regno di Germa, North Blue',
  en: 'Germa Kingdom, North Blue',
}

const GERMA_PRINCE = {
  it: 'Principe del Regno di Germa',
  en: 'Prince of the Germa Kingdom',
}

const SWEET_COMMANDER = {
  it: 'Pirati di Big Mom, Sweet Commander',
  en: 'Big Mom Pirates, Sweet Commander',
}

const SWEET_COMMANDER_ROLE = {
  it: 'Sweet Commander di Big Mom',
  en: 'Big Mom’s Sweet Commander',
}

const MOKOMO_MUSKETEERS = {
  it: 'Ducato di Mokomo, Moschettieri di Inuarashi',
  en: 'Mokomo Dukedom, Inuarashi Musketeers',
}

const MUSKETEER_ROLE = {
  it: 'Moschettiera del ducato',
  en: 'Musketeer of the dukedom',
}

const RED_SCABBARDS = { it: 'Nove Foderi Rossi', en: 'Nine Red Scabbards' }

const BIG_MOM_DAUGHTER = {
  it: 'Figlia di Big Mom',
  en: 'A daughter of Big Mom',
}

const MARY_GEOISE = { it: 'Mary Geoise', en: 'Mary Geoise' }

export const wholeCake: Saga = {
  entries: [
    {
      id: 'zou',
      kind: 'arc',
      revealedAtEpisode: 751,
      revealedAtChapter: 802,
      name: { it: 'Zou', en: 'Zou' },
      summary: {
        it: 'Un elefante alto un chilometro che cammina sul mare da mille anni, con una foresta e una città fortificata in cima alla schiena.',
        en: 'A mile-high elephant that has walked the sea for a thousand years, a forest and a walled city riding on its back.',
      },
      visual: { art: 'zou', tint: 'green' },
    },
    {
      id: 'jack',
      kind: 'character',
      revealedAtEpisode: 757,
      revealedAtChapter: 809,
      name: { it: 'Jack', en: 'Jack' },
      summary: {
        it: 'Un pirata delle Cento Bestie che arriva a Zou con una flotta e diventa un mammut alto quanto una nave per avere un uomo solo.',
        en: 'A Beasts Pirate who comes to Zou with a fleet and turns into a mammoth as tall as a ship to get hold of one single man.',
      },
      visual: { art: 'jack', tint: 'wine' },
    },
    {
      id: 'wanda',
      kind: 'character',
      revealedAtEpisode: 752,
      revealedAtChapter: 806,
      name: { it: 'Wanda', en: 'Wanda' },
      summary: {
        it: 'Una mink dal pelo bianco che accompagna i nuovi arrivati tra le rovine di Zou in sella a una cavalcatura a forma di coccodrillo.',
        en: 'A white-furred mink who leads the newcomers through the ruins of Zou from the saddle of a crocodile-shaped mount.',
      },
      visual: { art: 'wanda', tint: 'red' },
    },
    {
      id: 'carrot',
      kind: 'character',
      revealedAtEpisode: 753,
      revealedAtChapter: 807,
      name: { it: 'Carrot', en: 'Carrot' },
      summary: {
        it: 'Una giovane mink coniglio che salta più in alto di chiunque e fa scoccare scintille dalle mani quando toccano i suoi amici.',
        en: 'A young rabbit mink who jumps higher than anyone and makes sparks leap from her hands the moment her friends are touched.',
      },
      visual: { art: 'carrot', tint: 'orange' },
    },
    {
      id: 'inuarashi',
      kind: 'character',
      revealedAtEpisode: 754,
      revealedAtChapter: 808,
      name: { it: 'Inuarashi', en: 'Inuarashi' },
      summary: {
        it: 'Il duca cane di Zou, che regna soltanto di giorno, con una gamba sola rimasta dopo l’assalto e la spada ancora tenuta dritta.',
        en: 'The dog duke of Zou, who rules only by day, one leg left to him after the raid and a sword he still holds level.',
      },
      visual: { art: 'inuarashi', tint: 'ocher' },
    },
    {
      id: 'pedro',
      kind: 'character',
      revealedAtEpisode: 757,
      revealedAtChapter: 810,
      name: { it: 'Pedro', en: 'Pedro' },
      summary: {
        it: 'Un mink giaguaro con una cicatrice che gli taglia il volto, a capo delle Guardie di Zou, con i candelotti di dinamite alla cintura.',
        en: 'A jaguar mink with a scar across his face, head of the Guardians of Zou, sticks of dynamite hanging from his belt.',
      },
      visual: { art: 'pedro', tint: 'green' },
    },
    {
      id: 'nekomamushi',
      kind: 'character',
      revealedAtEpisode: 761,
      revealedAtChapter: 813,
      name: { it: 'Nekomamushi', en: 'Nekomamushi' },
      summary: {
        it: 'Il signore della notte di Zou, un enorme mink gatto che si sveglia al tramonto e ride mentre gli portano notizie di guerra.',
        en: 'The night lord of Zou, an enormous cat mink who wakes at sunset and laughs while they bring him news of the war.',
      },
      visual: { art: 'nekomamushi', tint: 'yellow' },
    },
    {
      id: 'raizo',
      kind: 'character',
      revealedAtEpisode: 764,
      revealedAtChapter: 824,
      name: { it: 'Raizo', en: 'Raizo' },
      summary: {
        it: 'Il ninja di Wano nascosto da anni dentro il ducato dei mink, che riappare sano e salvo con un rotolo in spalla e molte scuse.',
        en: 'The ninja from Wano hidden inside the mink dukedom for years, who turns up unharmed with a scroll on his back and many apologies.',
      },
      visual: { art: 'raizo', tint: 'violet' },
    },
    {
      id: 'whole-cake-island',
      kind: 'arc',
      revealedAtEpisode: 783,
      revealedAtChapter: 825,
      name: { it: 'Whole Cake Island', en: 'Whole Cake Island' },
      summary: {
        it: 'Un’isola di Totto Land fatta di dolci, con alberi di caramello e un castello a piani sopra una torta, dove regna un Imperatore.',
        en: 'An island of Totto Land built out of sweets, caramel trees and a tiered cake with a castle on top, ruled by an Emperor.',
      },
      visual: { art: 'whole-cake-island', tint: 'pink' },
    },
    {
      id: 'vinsmoke-reiju',
      kind: 'character',
      revealedAtEpisode: 784,
      revealedAtChapter: 829,
      name: { it: 'Vinsmoke Reiju', en: 'Vinsmoke Reiju' },
      summary: {
        it: 'Una donna dai capelli rosa in mantello, della famiglia reale del Germa, che succhia via il veleno dalle ferite senza subirne nulla.',
        en: 'A pink-haired woman in a cape, of the Germa royal family, who sucks poison out of a wound and takes no harm from it.',
      },
      visual: { art: 'vinsmoke-reiju', tint: 'pink' },
    },
    {
      id: 'vito',
      kind: 'character',
      revealedAtEpisode: 785,
      revealedAtChapter: 830,
      name: { it: 'Vito', en: 'Vito' },
      summary: {
        it: 'Un uomo in gessato e cappello a tesa larga, della ciurma di Bege, che tiene due pistole sotto la giacca e le sfodera ridendo.',
        en: 'A man in pinstripes and a wide-brimmed hat, from Bege’s crew, who keeps two pistols under his jacket and draws them laughing.',
      },
      visual: { art: 'vito', tint: 'violet' },
    },
    {
      id: 'praline',
      kind: 'character',
      revealedAtEpisode: 785,
      revealedAtChapter: 830,
      name: { it: 'Praline', en: 'Praline' },
      summary: {
        it: 'Una sirena con la coda da squalo, figlia di Big Mom e moglie di un uomo-pesce dei Pirati del Sole, con il pettine tra i capelli.',
        en: 'A mermaid with a shark’s tail, a daughter of Big Mom married to a fish-man of the Sun Pirates, a comb set in her hair.',
      },
      visual: { art: 'praline', tint: 'cyan' },
    },
    {
      id: 'charlotte-pudding',
      kind: 'character',
      revealedAtEpisode: 786,
      revealedAtChapter: 831,
      name: { it: 'Charlotte Pudding', en: 'Charlotte Pudding' },
      summary: {
        it: 'La ministra del cioccolato di Totto Land, promessa sposa in un matrimonio combinato, che accoglie gli ospiti con una torta e un sorriso.',
        en: 'The minister of chocolate of Totto Land, promised in an arranged marriage, who greets her guests with a cake and a kind smile.',
      },
      visual: { art: 'charlotte-pudding', tint: 'flamingo' },
    },
    {
      id: 'charlotte-linlin',
      kind: 'character',
      revealedAtEpisode: 786,
      revealedAtChapter: 831,
      name: { it: 'Charlotte Linlin', en: 'Charlotte Linlin' },
      summary: {
        it: 'L’Imperatore che regna su Totto Land, una donna alta come una casa che pretende dolci a ogni ora e toglie anni di vita a chi la contraria.',
        en: 'The Emperor who rules Totto Land, a woman the height of a house who demands sweets at all hours and takes years of life from whoever crosses her.',
      },
      visual: { art: 'charlotte-linlin', tint: 'magenta' },
    },
    {
      id: 'charlotte-perospero',
      kind: 'character',
      revealedAtEpisode: 787,
      revealedAtChapter: 832,
      name: { it: 'Charlotte Perospero', en: 'Charlotte Perospero' },
      summary: {
        it: 'Il primogenito di Big Mom, ministro delle caramelle, che strascica le parole e alza muri di zucchero leccando un bastone a spirale.',
        en: 'Big Mom’s eldest son, minister of candy, who drawls his words and raises walls of sugar by licking a spiral cane.',
      },
      visual: { art: 'charlotte-perospero', tint: 'pink' },
    },
    {
      id: 'charlotte-cracker',
      kind: 'character',
      revealedAtEpisode: 789,
      revealedAtChapter: 834,
      name: { it: 'Charlotte Cracker', en: 'Charlotte Cracker' },
      summary: {
        it: 'Uno Sweet Commander di Big Mom che sforna eserciti di soldati di biscotto, ognuno con lo scudo e la spada seghettata.',
        en: 'A Sweet Commander of Big Mom who bakes armies of biscuit soldiers, each one with a shield and a serrated sword.',
      },
      visual: { art: 'charlotte-cracker', tint: 'ocher' },
    },
    {
      id: 'charlotte-brulee',
      kind: 'character',
      revealedAtEpisode: 790,
      revealedAtChapter: 834,
      name: { it: 'Charlotte Brûlée', en: 'Charlotte Brûlée' },
      summary: {
        it: 'Una figlia di Big Mom dal volto segnato, che vive dentro gli specchi e tira dentro chi passa davanti a una cornice senza accorgersene.',
        en: 'A daughter of Big Mom with a scarred face, who lives inside mirrors and pulls in whoever walks past a frame without noticing.',
      },
      visual: { art: 'charlotte-brulee', tint: 'lavender' },
    },
    {
      id: 'stussy',
      kind: 'character',
      revealedAtEpisode: 792,
      revealedAtChapter: 836,
      name: { it: 'Stussy', en: 'Stussy' },
      summary: {
        it: 'La regina del quartiere dei piaceri, invitata alle nozze tra i pezzi grossi della malavita, con il bocchino sempre acceso tra le dita.',
        en: 'The queen of the pleasure district, a guest at the wedding among the bosses of the underworld, a cigarette holder lit in her fingers.',
      },
      visual: { art: 'stussy', tint: 'lavender' },
    },
    {
      id: 'morgans',
      kind: 'character',
      revealedAtEpisode: 792,
      revealedAtChapter: 836,
      name: { it: 'Morgans', en: 'Morgans' },
      summary: {
        it: 'Il presidente del giornale che stampa le notizie di tutto il mondo, un uomo albatro convinto che una bella storia valga più della verità.',
        en: 'The president of the paper that prints the world’s news, an albatross of a man sure that a good story is worth more than the truth.',
      },
      visual: { art: 'morgans', tint: 'yellow' },
    },
    {
      id: 'vinsmoke-judge',
      kind: 'character',
      revealedAtEpisode: 793,
      revealedAtChapter: 837,
      name: { it: 'Vinsmoke Judge', en: 'Vinsmoke Judge' },
      summary: {
        it: 'Il re del Regno di Germa, che comanda un esercito di soldati identici e parla dei propri figli come dei pezzi di un progetto.',
        en: 'The king of the Germa Kingdom, who commands an army of identical soldiers and speaks of his own children as parts of a design.',
      },
      visual: { art: 'vinsmoke-judge', tint: 'ice' },
    },
    {
      id: 'vinsmoke-ichiji',
      kind: 'character',
      revealedAtEpisode: 795,
      revealedAtChapter: 839,
      name: { it: 'Vinsmoke Ichiji', en: 'Vinsmoke Ichiji' },
      summary: {
        it: 'Il primogenito dei Vinsmoke, in tuta da combattimento rossa e mantello, che guarda chiunque dall’alto senza cambiare espressione.',
        en: 'The eldest Vinsmoke son, in a red combat suit and cape, who looks down on everyone without ever changing expression.',
      },
      visual: { art: 'vinsmoke-ichiji', tint: 'red' },
    },
    {
      id: 'vinsmoke-niji',
      kind: 'character',
      revealedAtEpisode: 795,
      revealedAtChapter: 839,
      name: { it: 'Vinsmoke Niji', en: 'Vinsmoke Niji' },
      summary: {
        it: 'Il secondogenito dei Vinsmoke, in tuta blu, che si sposta più in fretta di quanto l’occhio riesca a seguire e se ne diverte.',
        en: 'The second Vinsmoke son, in a blue suit, who moves faster than the eye can follow and thoroughly enjoys doing it.',
      },
      visual: { art: 'vinsmoke-niji', tint: 'blue' },
    },
    {
      id: 'vinsmoke-yonji',
      kind: 'character',
      revealedAtEpisode: 795,
      revealedAtChapter: 839,
      name: { it: 'Vinsmoke Yonji', en: 'Vinsmoke Yonji' },
      summary: {
        it: 'Il più giovane dei fratelli Vinsmoke, in tuta verde, con le braccia che si aprono come argani e la faccia di chi cerca rissa.',
        en: 'The youngest Vinsmoke brother, in a green suit, arms that open into winches and the face of someone looking for a fight.',
      },
      visual: { art: 'vinsmoke-yonji', tint: 'green' },
    },
    {
      id: 'charlotte-katakuri',
      kind: 'character',
      revealedAtEpisode: 796,
      revealedAtChapter: 840,
      name: { it: 'Charlotte Katakuri', en: 'Charlotte Katakuri' },
      summary: {
        it: 'Uno Sweet Commander di Big Mom, un uomo altissimo con la sciarpa tirata fino agli occhi e un tridente sempre in mano, che nessuno ha mai visto mangiare.',
        en: 'A Sweet Commander of Big Mom’s, a very tall man with a scarf pulled up to his eyes and a trident always in hand, whom nobody has ever seen eat.',
      },
      visual: { art: 'charlotte-katakuri', tint: 'wine' },
    },
    {
      id: 'vinsmoke-sora',
      kind: 'character',
      revealedAtEpisode: 799,
      revealedAtChapter: 842,
      name: { it: 'Vinsmoke Sora', en: 'Vinsmoke Sora' },
      summary: {
        it: 'La regina del Germa vista nel ricordo di un bambino, distesa in un letto d’ospedale con un pranzo al sacco preparato per il figlio.',
        en: 'The queen of Germa, seen in a child’s memory, lying in a hospital bed with a packed lunch she has made for her son.',
      },
      visual: { art: 'vinsmoke-sora', tint: 'lavender' },
    },
    {
      id: 'charlotte-chiffon',
      kind: 'character',
      revealedAtEpisode: 808,
      revealedAtChapter: 849,
      name: { it: 'Charlotte Chiffon', en: 'Charlotte Chiffon' },
      summary: {
        it: 'Una figlia di Big Mom sposata al capo dei Fire Tank, con un bambino piccolo in braccio e nessuna voglia di tornare dalla madre.',
        en: 'A daughter of Big Mom married to the captain of the Fire Tank Pirates, a small child in her arms and no wish to go back to her mother.',
      },
      visual: { art: 'charlotte-chiffon', tint: 'pink' },
    },
    {
      id: 'charlotte-smoothie',
      kind: 'character',
      revealedAtEpisode: 810,
      revealedAtChapter: 854,
      name: { it: 'Charlotte Smoothie', en: 'Charlotte Smoothie' },
      summary: {
        it: 'Una Sweet Commander altissima di Totto Land, che strizza un frutto sopra un bicchiere e se lo beve come se fosse niente.',
        en: 'A very tall Sweet Commander of Totto Land, who wrings a piece of fruit out over a glass and drinks it as if it were nothing.',
      },
      visual: { art: 'charlotte-smoothie', tint: 'acid' },
    },
    {
      id: 'charlotte-oven',
      kind: 'character',
      revealedAtEpisode: 811,
      revealedAtChapter: 855,
      name: { it: 'Charlotte Oven', en: 'Charlotte Oven' },
      summary: {
        it: 'Il ministro della doratura di Totto Land, che scalda le mani a tal punto da far bollire il mare tutto intorno alla costa.',
        en: 'The minister of browning of Totto Land, who heats his hands enough to bring the sea all around the coast to the boil.',
      },
      visual: { art: 'charlotte-oven', tint: 'vermilion' },
    },
    {
      id: 'charlotte-daifuku',
      kind: 'character',
      revealedAtEpisode: 811,
      revealedAtChapter: 855,
      name: { it: 'Charlotte Daifuku', en: 'Charlotte Daifuku' },
      summary: {
        it: 'Il ministro dei fagioli di Totto Land, che si strofina la pancia come una lampada e ne fa uscire un genio di fumo armato.',
        en: 'The minister of beans of Totto Land, who rubs his belly like a lamp and lets an armed genie of smoke out of it.',
      },
      visual: { art: 'charlotte-daifuku', tint: 'teal' },
    },
    {
      id: 'charlotte-mont-dor',
      kind: 'character',
      revealedAtEpisode: 811,
      revealedAtChapter: 855,
      name: { it: 'Charlotte Mont-d’Or', en: 'Charlotte Mont-d’Or' },
      summary: {
        it: 'Il ministro del formaggio di Totto Land, che rinchiude nemici e stanze intere dentro i libri e li tiene impilati sulla scrivania.',
        en: 'The minister of cheese of Totto Land, who shuts enemies and whole rooms inside books and keeps them stacked on his desk.',
      },
      visual: { art: 'charlotte-mont-dor', tint: 'sand' },
    },
    {
      id: 'streusen',
      kind: 'character',
      revealedAtEpisode: 830,
      revealedAtChapter: 867,
      name: { it: 'Streusen', en: 'Streusen' },
      summary: {
        it: 'Il capocuoco di Totto Land, un vecchio in divisa bianca che affetta il muro di un castello e lo serve come fosse una torta.',
        en: 'The head chef of Totto Land, an old man in cook’s whites who slices through a castle wall and serves it like a cake.',
      },
      visual: { art: 'streusen', tint: 'yellow' },
    },
    {
      id: 'carmel',
      kind: 'character',
      revealedAtEpisode: 836,
      revealedAtChapter: 872,
      name: { it: 'Carmel', en: 'Carmel' },
      summary: {
        it: 'Una suora dal velo bianco che in un ricordo lontano raccoglie bambini abbandonati a Elbaf e offre caramelle a chi ha paura.',
        en: 'A white-veiled nun who, in a distant memory, takes in abandoned children on Elbaf and hands sweets to whoever is frightened.',
      },
      visual: { art: 'carmel', tint: 'ivory' },
    },
    {
      id: 'donquixote-mjosgard',
      kind: 'character',
      revealedAtEpisode: 877,
      revealedAtChapter: 908,
      name: { it: 'Donquijote Mjosgard', en: 'Donquixote Mjosgard' },
      summary: {
        it: 'Un Nobile Mondiale con il casco a bolla incrinato, che a Mary Geoise tende la mano a una famiglia di uomini-pesce invece di alzare la pistola.',
        en: 'A World Noble with a cracked bubble helmet, who at Mary Geoise offers a hand to a family of fish-men instead of raising a gun.',
      },
      visual: { art: 'donquixote-mjosgard', tint: 'teal' },
    },
    {
      id: 'reverie',
      kind: 'arc',
      revealedAtEpisode: 878,
      revealedAtChapter: 903,
      name: { it: 'Reverie', en: 'Reverie' },
      summary: {
        it: 'Il consiglio che ogni quattro anni raduna a Mary Geoise i re dei paesi aderenti, attorno a un tavolo rotondo sotto le bandiere.',
        en: 'The council that gathers the kings of the member countries at Mary Geoise every four years, around one round table under the flags.',
      },
      visual: { art: 'reverie', tint: 'ivory' },
    },
    {
      id: 'belo-betty',
      kind: 'character',
      revealedAtEpisode: 879,
      revealedAtChapter: 905,
      name: { it: 'Belo Betty', en: 'Belo Betty' },
      summary: {
        it: 'La comandante dell’armata dell’Est dei rivoluzionari, che pianta una bandiera rossa e con un grido tira fuori il coraggio dalla gente.',
        en: 'The commander of the Revolutionary Army’s eastern force, who plants a red flag and pulls the courage out of people with a shout.',
      },
      visual: { art: 'belo-betty', tint: 'red' },
    },
    {
      id: 'morley',
      kind: 'character',
      revealedAtEpisode: 879,
      revealedAtChapter: 905,
      name: { it: 'Morley', en: 'Morley' },
      summary: {
        it: 'Il comandante dell’armata dell’Ovest dei rivoluzionari, un gigante con il fiocco tra i capelli che rimodella la terra come pasta.',
        en: 'The commander of the Revolutionary Army’s western force, a giant with a ribbon in his hair who pushes the ground around like dough.',
      },
      visual: { art: 'morley', tint: 'flamingo' },
    },
    {
      id: 'karasu',
      kind: 'character',
      revealedAtEpisode: 879,
      revealedAtChapter: 905,
      name: { it: 'Karasu', en: 'Karasu' },
      summary: {
        it: 'Il comandante dell’armata del Nord dei rivoluzionari, un uomo mascherato che si disfa in uno stormo di corvi per spostarsi.',
        en: 'The commander of the Revolutionary Army’s northern force, a masked man who comes apart into a flock of crows to travel.',
      },
      visual: { art: 'karasu', tint: 'ivory' },
    },
    {
      id: 'lindbergh',
      kind: 'character',
      revealedAtEpisode: 879,
      revealedAtChapter: 905,
      name: { it: 'Lindbergh', en: 'Lindbergh' },
      summary: {
        it: 'Il comandante dell’armata del Sud dei rivoluzionari, un mink gatto con gli occhialoni che si porta dietro gli arnesi che ha inventato.',
        en: 'The commander of the Revolutionary Army’s southern force, a cat mink in goggles who carries around the gadgets he invented himself.',
      },
      visual: { art: 'lindbergh', tint: 'acid' },
    },
    {
      id: 'sterry',
      kind: 'character',
      revealedAtEpisode: 880,
      revealedAtChapter: 906,
      name: { it: 'Sterry', en: 'Sterry' },
      summary: {
        it: 'Il giovane re del Regno di Goa, arrivato alla Reverie con una corona troppo grande e la boria di chi non ha fatto nulla per averla.',
        en: 'The young king of the Goa Kingdom, arrived at the Reverie with a crown too big for him and the swagger of a boy who earned none of it.',
      },
      visual: { art: 'sterry', tint: 'wine' },
    },
    {
      id: 'im',
      kind: 'character',
      revealedAtEpisode: 885,
      revealedAtChapter: 908,
      name: { it: 'Im', en: 'Im' },
      summary: {
        it: 'Una figura seduta sul Trono Vuoto di Mary Geoise, davanti alla quale i Cinque Astri di Saggezza si inginocchiano e abbassano la voce.',
        en: 'A figure seated on the Empty Throne of Mary Geoise, before whom the Five Elders kneel down and lower their voices.',
      },
      visual: { art: 'im', tint: 'violet' },
    },
    {
      id: 'aramaki',
      kind: 'character',
      revealedAtEpisode: 1077,
      revealedAtChapter: 1057,
      name: { it: 'Aramaki', en: 'Aramaki' },
      summary: {
        it: 'Un ammiraglio della Marina che scende scalzo su un’isola e la copre di radici, dicendo di non mangiare nulla da tre anni.',
        en: 'A Marine admiral who comes down barefoot onto an island and covers it in roots, saying he has eaten nothing for three years.',
      },
      visual: { art: 'aramaki', tint: 'green' },
    },
  ],
  dossiers: {
    'jack': {
      role: {
        it: 'All-Star dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates All-Star',
      },
      log: {
        it: 'Sbarca sul dorso dell’elefante alla testa di una flotta e mette a ferro e fuoco il ducato dei mink per giorni, senza mai alzare la voce. Chiede che gli venga consegnato un uomo che si nasconde lassù e, davanti al rifiuto, continua a distruggere. Quando gli serve diventa un mammut alto quanto una nave e apre le mura come se fossero di carta.',
        en: 'He lands on the elephant’s back at the head of a fleet and burns through the mink dukedom for days without ever raising his voice. He demands that a man hiding up there be handed over, and when he is refused he simply goes on wrecking the place. When it suits him he becomes a mammoth the size of a ship and opens walls as though they were paper.',
      },
      affiliation: [
        {
          episode: 757,
          value: {
            it: 'Pirati delle Cento Bestie, All-Star',
            en: 'Beasts Pirates, All-Star',
          },
        },
      ],
      epithet: [
        { episode: 757, value: { it: 'la Siccità', en: 'the Drought' } },
      ],
      devilFruit: [
        {
          episode: 757,
          value: ['elephant-elephant-fruit-ancient-model-mammoth'],
        },
      ],
      bounty: [{ episode: 757, value: 1_000_000_000 }],
    },
    'wanda': {
      role: MUSKETEER_ROLE,
      log: {
        it: 'Accompagna gli sbarcati su per la zampa dell’elefante e dentro una città ancora piena di macerie, raccontando con calma quello che è successo mentre tiene la sciabola a portata di mano. È una guerriera dei Moschettieri del ducato e non si fida di nessuno finché non ha una ragione per farlo. Chiama i propri compagni per nome uno a uno, e sono moltissimi.',
        en: 'She takes the new arrivals up the elephant’s leg and into a city still full of rubble, telling them calmly what happened with a sabre always within reach. She is a warrior of the dukedom’s Musketeers and trusts nobody until she has a reason to. She names her companions one by one, and there are a great many of them.',
      },
      affiliation: [{ episode: 752, value: MOKOMO_MUSKETEERS }],
      origin: [{ episode: 752, value: ZOU }],
    },
    'carrot': {
      role: MUSKETEER_ROLE,
      log: {
        it: 'Ha orecchie lunghe, un sorriso che non sta mai fermo e una curiosità che la porta a infilarsi dappertutto, compresi i posti in cui le hanno detto di non andare. Come ogni mink sa usare l’elettro, la scarica che il suo popolo accumula nel pelo e libera con un colpo solo. Sotto l’allegria c’è una guerriera che ha visto bruciare la propria città.',
        en: 'She has long ears, a grin that will not sit still and a curiosity that gets her into every place she has been told to stay out of. Like every mink she can use electro, the charge her people store in their fur and let go in a single blow. Under the cheerfulness there is a warrior who watched her own city burn.',
      },
      affiliation: [
        { episode: 753, value: MOKOMO_MUSKETEERS },
        {
          episode: 1085,
          value: {
            it: 'Ducato di Mokomo, sovrana',
            en: 'Mokomo Dukedom, ruler',
          },
        },
      ],
      origin: [{ episode: 753, value: ZOU }],
    },
    'inuarashi': {
      role: {
        it: 'Sovrano del giorno di Mokomo',
        en: 'Ruler of the day of Mokomo',
      },
      log: {
        it: 'Comanda i mink dall’alba al tramonto e lascia il ducato a un altro quando cala la notte, per un accordo che a Zou nessuno spiega ai forestieri. Nell’assalto ha perso una gamba e adesso si regge su una stampella, ma resta in piedi davanti a chiunque venga a chiedergli conto. Non ha consegnato l’uomo che gli veniva chiesto nemmeno mentre la città bruciava.',
        en: 'He commands the minks from dawn to dusk and hands the dukedom over to another when night falls, under an arrangement nobody on Zou explains to outsiders. He lost a leg in the raid and leans on a crutch now, but he stays on his feet in front of anyone who comes to call him to account. He did not give up the man he was asked for, even while the city burned.',
      },
      affiliation: [
        {
          episode: 754,
          value: {
            it: 'Ducato di Mokomo, sovrano del giorno',
            en: 'Mokomo Dukedom, ruler of the day',
          },
        },
        { episode: 890, value: RED_SCABBARDS },
        {
          episode: 1085,
          value: {
            it: 'Wano, consiglio dello shogun',
            en: 'Wano, shogun’s council',
          },
        },
      ],
      origin: [{ episode: 754, value: ZOU }],
    },
    'pedro': {
      role: { it: 'Capitano dei Guardiani', en: 'Captain of the Guardians' },
      log: {
        it: 'Parla poco, si muove di notte e i mink lo ascoltano anche quando dice cose che nessuno ha voglia di sentire. Porta una cicatrice che gli taglia un occhio e non racconta a nessuno come se l’è fatta. Difende il ducato con i candelotti alla cintura e la convinzione che certe cose valgano più della propria pelle.',
        en: 'He says little, moves at night, and the minks listen to him even when he tells them what nobody wants to hear. He carries a scar across one eye and tells nobody how he got it. He guards the dukedom with dynamite on his belt and a settled belief that some things are worth more than his own skin.',
      },
      affiliation: [
        {
          episode: 757,
          value: {
            it: 'Ducato di Mokomo, capitano dei Guardiani',
            en: 'Mokomo Dukedom, Guardians captain',
          },
        },
      ],
      origin: [{ episode: 757, value: ZOU }],
      bounty: [{ episode: 757, value: 382_000_000 }],
    },
    'nekomamushi': {
      role: {
        it: 'Sovrano della notte di Mokomo',
        en: 'Ruler of the night of Mokomo',
      },
      log: {
        it: 'Dorme tutto il giorno in una stanza piena di cuscini e prende il ducato quando il sole se n’è andato, perché a Zou il comando si divide in due. È grosso, rumoroso e affettuoso con i suoi, e passa dalla risata alla rabbia in un istante. Con il duca del giorno non si parla da anni, e nessuno dei due dice davvero il perché.',
        en: 'He sleeps through the day in a room full of cushions and takes the dukedom once the sun is gone, because on Zou command is split in two. He is huge, loud and fond of his own people, and goes from laughter to fury in a heartbeat. He has not spoken to the duke of the day in years, and neither of them will say quite why.',
      },
      affiliation: [
        {
          episode: 761,
          value: {
            it: 'Ducato di Mokomo, sovrano della notte',
            en: 'Mokomo Dukedom, ruler of the night',
          },
        },
        { episode: 890, value: RED_SCABBARDS },
      ],
      origin: [{ episode: 761, value: ZOU }],
    },
    'raizo': {
      role: { it: 'Ninja del Paese di Wano', en: 'Ninja of Wano Country' },
      log: {
        it: 'I mink hanno lasciato bruciare la propria città piuttosto che dire dove fosse, e lui era lì sotto per tutto il tempo. Viene da Wano, porta la fronte fasciata e un rotolo a tracolla, e quando finalmente si mostra si inchina e chiede scusa per il disturbo. Dentro quel rotolo può far sparire quello che vuole e tirarlo fuori quando serve.',
        en: 'The minks let their own city burn rather than say where he was, and he was underneath it the whole time. He comes from Wano, wears a wrapped headband and a scroll across his back, and when he finally shows himself he bows and apologises for the trouble. He can make things vanish into that scroll and pull them out again when they are needed.',
      },
      affiliation: [
        {
          episode: 764,
          value: {
            it: 'Ninja di Wano, nascosto a Zou',
            en: 'Ninja of Wano, in hiding on Zou',
          },
        },
        { episode: 890, value: RED_SCABBARDS },
      ],
      origin: [
        { episode: 764, value: { it: 'Paese di Wano', en: 'Wano Country' } },
      ],
      epithet: [
        {
          episode: 764,
          value: { it: 'Raizo della Nebbia', en: 'Raizo of the Mist' },
        },
      ],
      devilFruit: [{ episode: 764, value: ['scroll-scroll-fruit'] }],
    },
    'vinsmoke-reiju': {
      role: {
        it: 'Principessa del Regno di Germa',
        en: 'Princess of the Germa Kingdom',
      },
      log: {
        it: 'Arriva a Totto Land al seguito del padre e dei fratelli, con il mantello del Germa sulle spalle e il modo di chi non ha bisogno di alzare la voce. Il veleno non la tocca, e lo toglie dalle ferite degli altri succhiandolo via. È l’unica della famiglia che, davanti al fratello andato via di casa, parli come se gli volesse bene.',
        en: 'She arrives in Totto Land behind her father and her brothers, the Germa cape on her shoulders and the manner of someone who never needs to raise her voice. Poison does nothing to her, and she draws it out of other people’s wounds by sucking it away. She is the only one in the family who speaks to the brother who left home as though she were fond of him.',
      },
      affiliation: [
        {
          episode: 784,
          value: { it: 'Germa 66, Poison Pink', en: 'Germa 66, Poison Pink' },
        },
      ],
      origin: [{ episode: 784, value: GERMA_KINGDOM }],
      epithet: [
        { episode: 784, value: { it: 'Poison Pink', en: 'Poison Pink' } },
      ],
    },
    'vito': {
      role: { it: 'Pirata dei Fire Tank', en: 'Fire Tank Pirates crewman' },
      log: {
        it: 'Fa parte della ciurma di Capone Bege e si muove come un gangster di città, con il cappello calato sugli occhi e il sigaro tra i denti. Parla in fretta, si esalta per pochissimo e adora raccontare a chiunque le storie che ha letto. Quando il capo dice di sparare spara, e quando il capo tace resta comunque il più rumoroso della stanza.',
        en: 'He belongs to Capone Bege’s crew and carries himself like a city gangster, hat down over his eyes and a cigar between his teeth. He talks fast, gets excited over very little and loves telling anyone at all the stories he has read. When the boss says shoot he shoots, and when the boss says nothing he is still the loudest man in the room.',
      },
      affiliation: [
        {
          episode: 785,
          value: { it: 'Pirati Fire Tank', en: 'Fire Tank Pirates' },
        },
      ],
    },
    'praline': {
      role: BIG_MOM_DAUGHTER,
      log: {
        it: 'È nata a Totto Land come una dei tantissimi figli di Big Mom, e la madre l’ha data in moglie a un uomo-pesce per legare a sé i Pirati del Sole. La coda le viene dallo squalo e i modi dal quartiere: tratta il marito con dolcezza e chiunque altro con la stessa franchezza. In casa sua si parla molto, e lei ascolta più di quanto sembri.',
        en: 'She was born in Totto Land as one of Big Mom’s very many children, and her mother married her to a fish-man to tie the Sun Pirates to the house. The tail comes from a shark and the manners from the neighbourhood: she is gentle with her husband and just as blunt with everybody else. There is a lot of talk in her home, and she listens more than she appears to.',
      },
      affiliation: [
        {
          episode: 785,
          value: {
            it: 'Pirati del Sole, moglie di Aladine; figlia di Big Mom',
            en: 'Sun Pirates, Aladine’s wife; Big Mom’s daughter',
          },
        },
      ],
      origin: [{ episode: 785, value: TOTTO_LAND }],
    },
    'charlotte-pudding': {
      role: { it: 'Ministra del cioccolato', en: 'Minister of chocolate' },
      log: {
        it: 'Ha innumerevoli fratelli e sorelle più grandi di lei e una fabbrica di cioccolato tutta sua, e tiene metà del viso nascosta dietro la frangia. La madre l’ha promessa a un cuoco che non ha mai visto, e lei dice di essere felice del matrimonio a chiunque glielo chieda. Con gli ospiti è premurosa fino all’imbarazzo e chiede scusa ogni volta che qualcosa non è perfetto.',
        en: 'She has countless elder brothers and sisters and a chocolate factory of her own, and she keeps half her face behind her fringe. Her mother has promised her to a cook she has never met, and she tells anyone who asks that she is happy about the wedding. With guests she is attentive to the point of embarrassment, apologising every time something falls short of perfect.',
      },
      affiliation: [
        {
          episode: 786,
          value: {
            it: 'Pirati di Big Mom; Totto Land, ministra del cioccolato',
            en: 'Big Mom Pirates; Totto Land, minister of chocolate',
          },
        },
      ],
      origin: [{ episode: 786, value: TOTTO_LAND }],
      devilFruit: [{ episode: 786, value: ['memo-memo-fruit'] }],
    },
    'charlotte-linlin': {
      role: { it: 'Imperatore di Totto Land', en: 'Emperor of Totto Land' },
      log: {
        it: 'Regna su un arcipelago di isole di zucchero e su una famiglia sterminata di figli, e i suoi capricci decidono il tempo che fa. Quando le viene voglia di un dolce che non ha, perde la testa e travolge tutto finché non glielo portano. Sa strappare alla gente anni della propria vita e darli a oggetti e animali, che da quel momento parlano e obbediscono a lei.',
        en: 'She rules an archipelago of sugar islands and an enormous family of children, and her whims decide the weather. When she wants a sweet she does not have, she loses her head and flattens whatever is in the way until it is brought to her. She can pull years of life out of people and give them to objects and animals, which from then on talk and answer to her.',
      },
      affiliation: [
        {
          episode: 786,
          value: {
            it: 'Pirati di Big Mom, capitano; Imperatore',
            en: 'Big Mom Pirates, captain; Emperor',
          },
        },
        { episode: 1085, value: { it: 'Caduta a Wano', en: 'Fell at Wano' } },
      ],
      origin: [{ episode: 786, value: TOTTO_LAND }],
      epithet: [{ episode: 786, value: { it: 'Big Mom', en: 'Big Mom' } }],
      devilFruit: [{ episode: 786, value: ['soul-soul-fruit'] }],
      bounty: [{ episode: 958, value: 4_388_000_000 }],
    },
    'charlotte-perospero': {
      role: { it: 'Ministro delle caramelle', en: 'Minister of candy' },
      log: {
        it: 'È il figlio più grande della famiglia e si comporta come tale, con il cilindro in testa e un modo di parlare che allunga l’ultima sillaba di ogni frase. Governa l’isola delle caramelle e trasforma in zucchero tutto quello che lecca, muri, scale e trappole comprese. Accoglie gli ospiti con una cortesia esagerata e li conta uno per uno.',
        en: 'He is the eldest child of the house and behaves like it, a top hat above and a drawl that stretches the last syllable of every sentence. He governs the candy island and turns whatever he licks into sugar, walls and stairs and traps included. He welcomes guests with exaggerated courtesy and counts them one by one.',
      },
      affiliation: [
        {
          episode: 787,
          value: {
            it: 'Pirati di Big Mom, ministro delle caramelle',
            en: 'Big Mom Pirates, minister of candy',
          },
        },
      ],
      origin: [{ episode: 787, value: TOTTO_LAND }],
      devilFruit: [{ episode: 787, value: ['lick-lick-fruit'] }],
      bounty: [{ episode: 787, value: 700_000_000 }],
    },
    'charlotte-cracker': {
      role: SWEET_COMMANDER_ROLE,
      log: {
        it: 'È uno dei tre Sweet Commander, gli uomini più forti della ciurma di sua madre, e governa l’isola dei biscotti. Dalle sue mani escono soldati di pasta frolla che si rialzano appena cadono, e più il nemico ne abbatte più lui ne sforna. Dicono che non abbia mai dormito durante una battaglia, e a Totto Land nessuno ha voglia di verificarlo.',
        en: 'He is one of the three Sweet Commanders, the strongest men in his mother’s crew, and he governs the biscuit island. Soldiers of shortbread come out of his hands and stand straight back up when they fall, and the more an enemy breaks the more he bakes. They say he has never once slept through a battle, and nobody in Totto Land wants to test it.',
      },
      affiliation: [{ episode: 789, value: SWEET_COMMANDER }],
      origin: [{ episode: 789, value: TOTTO_LAND }],
      epithet: [
        { episode: 789, value: { it: 'Mille Braccia', en: 'Thousand Arms' } },
      ],
      devilFruit: [{ episode: 789, value: ['bis-bis-fruit'] }],
      bounty: [{ episode: 789, value: 860_000_000 }],
    },
    'charlotte-brulee': {
      role: BIG_MOM_DAUGHTER,
      log: {
        it: 'Ogni specchio di Totto Land è una porta che dà sul suo mondo, un corridoio senza fine dove le cornici si affacciano su tutte le stanze dell’arcipelago. Da lì guarda, ascolta e tira dentro chi le serve, e chi ci finisce fatica parecchio a ritrovare l’uscita. Ha una cicatrice lunga sul viso e ride di sé prima che lo facciano gli altri.',
        en: 'Every mirror in Totto Land is a door into her world, an endless corridor whose frames look out onto every room in the archipelago. From there she watches, listens and drags in whoever she needs, and anyone who lands inside has a hard time finding the way out. A long scar runs down her face, and she laughs at herself before anybody else can.',
      },
      affiliation: [
        {
          episode: 790,
          value: { it: 'Pirati di Big Mom', en: 'Big Mom Pirates' },
        },
      ],
      origin: [{ episode: 790, value: TOTTO_LAND }],
      devilFruit: [{ episode: 790, value: ['mirror-mirror-fruit'] }],
    },
    'stussy': {
      role: { it: 'Pezzo grosso della malavita', en: 'Underworld boss' },
      log: {
        it: 'Nella malavita la chiamano regina, e il titolo le basta per avere un posto a tavola accanto agli imperatori del crimine. Arriva a Totto Land in abito da sera, con il bocchino tra le dita, e saluta per nome gente che preferirebbe non essere riconosciuta. Sorride molto, beve pochissimo e ricorda tutto quello che viene detto intorno a lei.',
        en: 'In the underworld they call her queen, and the title alone gets her a seat at the table beside the emperors of crime. She comes to Totto Land in evening dress with a cigarette holder in her fingers, and greets by name people who would rather not be recognised. She smiles a great deal, drinks very little and remembers everything said around her.',
      },
      affiliation: [
        {
          episode: 792,
          value: {
            it: 'Malavita, regina del quartiere dei piaceri',
            en: 'Underworld, queen of the pleasure district',
          },
        },
        { episode: 806, value: { it: 'Cipher Pol 0', en: 'Cipher Pol 0' } },
        {
          episode: 1108,
          value: {
            it: 'Cipher Pol 0, disertrice, un tempo clone di Miss Buckingham Stussy',
            en: 'Cipher Pol 0, defector, once a clone of Miss Buckingham Stussy',
          },
        },
      ],
      epithet: [
        {
          episode: 792,
          value: {
            it: 'Regina del quartiere dei piaceri',
            en: 'Queen of the Pleasure District',
          },
        },
      ],
    },
    'morgans': {
      role: {
        it: 'Presidente del World Economy News Paper',
        en: 'World Economy News Paper president',
      },
      log: {
        it: 'Ha la testa e le ali di un albatro e il fiuto di chi vive di tirature: decide lui che cosa il mondo leggerà domattina. Va di persona dove succedono le cose, matita in mano, e paga bene chi gli porta qualcosa di grosso. Dice apertamente che una notizia interessante conta più di una notizia esatta, e stampa di conseguenza.',
        en: 'He has the head and the wings of an albatross and the nose of a man who lives on circulation: he decides what the world will read tomorrow morning. He goes in person to wherever things are happening, pencil in hand, and pays well for anyone who brings him something big. He says openly that an interesting story beats an accurate one, and prints accordingly.',
      },
      affiliation: [
        {
          episode: 792,
          value: {
            it: 'World Economy News Paper, presidente',
            en: 'World Economy News Paper, president',
          },
        },
      ],
      epithet: [
        {
          episode: 792,
          value: { it: 'Big News Morgans', en: 'Big News Morgans' },
        },
      ],
      devilFruit: [
        { episode: 792, value: ['bird-bird-fruit-model-albatross'] },
      ],
    },
    'vinsmoke-judge': {
      role: { it: 'Re del Regno di Germa', en: 'King of the Germa Kingdom' },
      log: {
        it: 'Porta corona e mantello e cammina con una lancia in mano, alla testa di un esercito di soldati identici che non discutono mai un ordine. Il suo regno non ha più terra: naviga, e si vende a chi paga. Dei figli parla come di uno strumento riuscito o mal riuscito, e di quello che se n’è andato di casa parla come di un errore.',
        en: 'He wears a crown and a cape and walks with a lance in his hand, at the head of an army of identical soldiers who never argue with an order. His kingdom has no land any more: it sails, and it hires itself out to whoever pays. He speaks of his children as of a design that worked or failed, and of the one who left home as of a mistake.',
      },
      affiliation: [
        {
          episode: 793,
          value: {
            it: 'Regno di Germa, re; Germa 66, comandante',
            en: 'Germa Kingdom, king; Germa 66, commander',
          },
        },
      ],
      origin: [{ episode: 793, value: GERMA_KINGDOM }],
      epithet: [{ episode: 793, value: { it: 'Garuda', en: 'Garuda' } }],
    },
    'vinsmoke-ichiji': {
      role: GERMA_PRINCE,
      log: {
        it: 'Comanda il Germa 66 insieme ai fratelli e in battaglia indossa una tuta rossa che gli accende i pugni. Non alza mai la voce e quasi mai risponde, e quando lo fa è per dire che una certa cosa non lo riguarda. Del fratello che ha lasciato il regno da bambino parla come di una questione chiusa da moltissimo tempo.',
        en: 'He leads Germa 66 alongside his brothers, and in battle he wears a red suit that sets his fists alight. He never raises his voice and hardly ever answers, and when he does it is to say that something is no concern of his. Of the brother who left the kingdom as a child he speaks as of a matter settled a very long time ago.',
      },
      affiliation: [
        {
          episode: 795,
          value: { it: 'Germa 66, Sparking Red', en: 'Germa 66, Sparking Red' },
        },
      ],
      origin: [{ episode: 795, value: GERMA_KINGDOM }],
      epithet: [
        { episode: 795, value: { it: 'Sparking Red', en: 'Sparking Red' } },
      ],
    },
    'vinsmoke-niji': {
      role: GERMA_PRINCE,
      log: {
        it: 'Della sua tuta si vede soprattutto la scia: attraversa una stanza in un lampo e colpisce prima che l’avversario abbia finito di girarsi. È il più chiassoso dei quattro e il più crudele nei giochi, e ride mentre umilia chi non può rispondergli. In famiglia obbedisce al padre senza discutere e tratta i fratelli come rivali da battere.',
        en: 'Mostly what can be seen of his suit is the streak: he crosses a room in a flash and strikes before an opponent has finished turning around. He is the loudest of the four and the cruellest at games, and he laughs while humiliating anyone who cannot hit back. At home he obeys his father without argument and treats his brothers as rivals to beat.',
      },
      affiliation: [
        {
          episode: 795,
          value: {
            it: 'Germa 66, Electric Blue',
            en: 'Germa 66, Electric Blue',
          },
        },
      ],
      origin: [{ episode: 795, value: GERMA_KINGDOM }],
      epithet: [
        { episode: 795, value: { it: 'Electric Blue', en: 'Electric Blue' } },
      ],
    },
    'vinsmoke-yonji': {
      role: GERMA_PRINCE,
      log: {
        it: 'È l’ultimo dei quattro fratelli e il più sbrigativo: risolve tutto spingendo, e le braccia della sua tuta si aprono in ganci che sollevano quello che nessun altro sposterebbe. Provoca per primo e incassa senza cambiare espressione, perché sotto la pelle ha qualcosa che il dolore non raggiunge. Con il cuoco tornato in famiglia va d’accordo pochissimo.',
        en: 'He is the last of the four brothers and the most direct: he settles things by shoving, and the arms of his suit open into hooks that lift what nobody else would move. He starts the provocation and takes a hit without changing expression, because under the skin there is something pain does not reach. He gets on very badly indeed with the cook who has come back to the family.',
      },
      affiliation: [
        {
          episode: 795,
          value: { it: 'Germa 66, Winch Green', en: 'Germa 66, Winch Green' },
        },
      ],
      origin: [{ episode: 795, value: GERMA_KINGDOM }],
      epithet: [
        { episode: 795, value: { it: 'Winch Green', en: 'Winch Green' } },
      ],
    },
    'charlotte-katakuri': {
      role: SWEET_COMMANDER_ROLE,
      log: {
        it: 'È il più alto e il più temuto dei figli di Big Mom, e tiene la sciarpa tirata su fino agli occhi anche a tavola. Combatte con un tridente e con un corpo che diventa mochi appiccicoso, e finora nessuno lo ha visto cadere. Vede quello che sta per succedere qualche istante prima che succeda, e schiva colpi che non sono ancora partiti.',
        en: 'He is the tallest and the most feared of Big Mom’s sons, and he keeps his scarf pulled up to his eyes even at the table. He fights with a trident and with a body that turns to sticky mochi, and so far nobody has seen him go down. He sees what is about to happen a moment before it does, and dodges blows that have not been thrown yet.',
      },
      affiliation: [{ episode: 796, value: SWEET_COMMANDER }],
      origin: [{ episode: 796, value: TOTTO_LAND }],
      devilFruit: [{ episode: 796, value: ['mochi-mochi-fruit'] }],
      bounty: [{ episode: 796, value: 1_057_000_000 }],
    },
    'vinsmoke-sora': {
      role: {
        it: 'Regina del Regno di Germa',
        en: 'Queen of the Germa Kingdom',
      },
      log: {
        it: 'Nel ricordo del figlio è l’unica voce gentile di quel castello: gli prepara il pranzo, gli dice che va bene così com’è e si mette tra lui e il padre. È malata e sempre più debole, e continua a sorridere dal letto come se non lo fosse. Non vuole che i suoi bambini diventino le armi che il regno ha ordinato.',
        en: 'In her son’s memory she is the only kind voice in that castle: she packs his lunch, tells him he is fine as he is and puts herself between him and his father. She is ill and getting weaker, and she goes on smiling from the bed as though she were not. She does not want her children to become the weapons the kingdom has ordered.',
      },
      affiliation: [
        {
          episode: 799,
          value: {
            it: 'Regno di Germa, regina, defunta',
            en: 'Germa Kingdom, queen, deceased',
          },
        },
      ],
      origin: [{ episode: 799, value: GERMA_KINGDOM }],
    },
    'charlotte-chiffon': {
      role: { it: 'Moglie di Capone Bege', en: 'Capone Bege’s wife' },
      log: {
        it: 'È cresciuta a Totto Land come una dei tantissimi figli della casa, e la madre non le ha mai perdonato una colpa che non era sua. Adesso vive sulla nave del marito con il loro bambino e prepara torte per mestiere, che è la cosa che le riesce meglio. Somiglia a una sorella in modo impressionante, e quella somiglianza le è già costata cara.',
        en: 'She grew up in Totto Land as one of the house’s very many children, and her mother never forgave her a fault that was not hers. Now she lives on her husband’s ship with their small son and bakes cakes for a living, which is the thing she does best. She looks startlingly like one of her sisters, and that likeness has already cost her dearly.',
      },
      affiliation: [
        {
          episode: 808,
          value: {
            it: 'Pirati Fire Tank, moglie di Bege; figlia di Big Mom',
            en: 'Fire Tank Pirates, Bege’s wife; Big Mom’s daughter',
          },
        },
      ],
      origin: [{ episode: 808, value: TOTTO_LAND }],
    },
    'charlotte-smoothie': {
      role: SWEET_COMMANDER_ROLE,
      log: {
        it: 'È una delle tre Sweet Commander e governa l’isola dei succhi, dove tutto quanto finisce spremuto. Le basta stringere qualcosa nel pugno perché ne esca il liquido, e non fa differenza se quel qualcosa è un frutto o un animale. È alta il doppio di chiunque le stia intorno e parla con la calma di chi non ha mai dovuto affrettarsi.',
        en: 'She is one of the three Sweet Commanders and governs the island of juice, where everything ends up squeezed. She only has to close her fist on something for the liquid to come out of it, and it makes no difference whether that something is a fruit or an animal. She stands twice as tall as anyone near her and speaks with the calm of someone who has never had to hurry.',
      },
      affiliation: [{ episode: 810, value: SWEET_COMMANDER }],
      origin: [{ episode: 810, value: TOTTO_LAND }],
      devilFruit: [{ episode: 810, value: ['wring-wring-fruit'] }],
      bounty: [{ episode: 810, value: 932_000_000 }],
    },
    'charlotte-oven': {
      role: { it: 'Ministro della doratura', en: 'Minister of browning' },
      log: {
        it: 'Governa l’isola dove ogni cosa viene cotta e dorata, e il suo carattere funziona allo stesso modo: si accende subito e non si raffredda. Quello che tocca diventa rovente, e se mette le mani in acqua il mare comincia a fumare e nessuno può più nuotarci. Agli ordini della madre risponde prima ancora che lei abbia finito di darli.',
        en: 'He governs the island where everything is baked and browned, and his temper works the same way: it catches at once and does not cool. Whatever he touches goes red hot, and if he puts his hands in the water the sea begins to steam and nobody can swim in it any more. He answers his mother’s orders before she has finished giving them.',
      },
      affiliation: [
        {
          episode: 811,
          value: {
            it: 'Pirati di Big Mom, ministro della doratura',
            en: 'Big Mom Pirates, minister of browning',
          },
        },
      ],
      origin: [{ episode: 811, value: TOTTO_LAND }],
      devilFruit: [{ episode: 811, value: ['heat-heat-fruit'] }],
      bounty: [{ episode: 811, value: 300_000_000 }],
    },
    'charlotte-daifuku': {
      role: { it: 'Ministro dei fagioli', en: 'Minister of beans' },
      log: {
        it: 'Ha la barba lunga e il compito di sorvegliare l’isola dei fagioli, e a tavola siede accanto al fratello che si accende per un nulla. Quando si strofina la pancia dal corpo gli esce un gigante di fumo che combatte al posto suo e maneggia armi enormi. Dei nemici della madre parla come di una seccatura da togliere di mezzo in fretta.',
        en: 'He wears a long beard and the duty of watching over the bean island, and at table he sits beside the brother who catches fire over nothing. When he rubs his belly a giant of smoke comes out of him, fights in his place and swings enormous weapons. He speaks of his mother’s enemies as of a nuisance to be cleared away quickly.',
      },
      affiliation: [
        {
          episode: 811,
          value: {
            it: 'Pirati di Big Mom, ministro dei fagioli',
            en: 'Big Mom Pirates, minister of beans',
          },
        },
      ],
      origin: [{ episode: 811, value: TOTTO_LAND }],
      devilFruit: [{ episode: 811, value: ['puff-puff-fruit'] }],
      bounty: [{ episode: 811, value: 300_000_000 }],
    },
    'charlotte-mont-dor': {
      role: { it: 'Ministro del formaggio', en: 'Minister of cheese' },
      log: {
        it: 'Porta gli occhiali e un cappello a punta, e tiene la contabilità dei nemici come se fosse una biblioteca. Chi gli capita a tiro finisce dentro un volume che lui richiude e ripone, e dalle pagine possono uscire mani e creature a dare battaglia. Durante le feste della madre è quello che controlla la lista degli invitati.',
        en: 'He wears glasses and a pointed hat, and keeps his account of the family’s enemies as though it were a library. Whoever comes within reach ends up inside a volume that he closes and shelves, and hands and creatures can come out of the pages to fight. During his mother’s parties he is the one checking the guest list.',
      },
      affiliation: [
        {
          episode: 811,
          value: {
            it: 'Pirati di Big Mom, ministro del formaggio',
            en: 'Big Mom Pirates, minister of cheese',
          },
        },
      ],
      origin: [{ episode: 811, value: TOTTO_LAND }],
      devilFruit: [{ episode: 811, value: ['book-book-fruit'] }],
      bounty: [{ episode: 811, value: 120_000_000 }],
    },
    'streusen': {
      role: { it: 'Capocuoco di Totto Land', en: 'Head chef of Totto Land' },
      log: {
        it: 'Cucina per Big Mom da moltissimo tempo, e da allora porta la stessa divisa bianca e lo stesso coltello. Tutto quello che tocca diventa cibo: una roccia diventa pane, una parete diventa torta, e in cucina non gli serve altro. Parla poco ai figli della sua padrona e li chiama ancora con i nomi che avevano da piccoli.',
        en: 'He has cooked for Big Mom for a very long time, and has worn the same whites and carried the same knife throughout. Everything he touches turns into food: a rock becomes bread, a wall becomes cake, and the kitchen needs nothing else. He says little to his mistress’s children and still calls them by the names they had as infants.',
      },
      affiliation: [
        {
          episode: 830,
          value: {
            it: 'Pirati di Big Mom, capocuoco',
            en: 'Big Mom Pirates, head chef',
          },
        },
      ],
      origin: [{ episode: 830, value: TOTTO_LAND }],
      devilFruit: [{ episode: 830, value: ['cook-cook-fruit'] }],
    },
    'carmel': {
      role: {
        it: 'Madre della Casa delle Pecore',
        en: 'Mother of the Sheep’s House',
      },
      log: {
        it: 'Nel ricordo gestisce un orfanotrofio sull’isola dei giganti e accoglie chiunque venga lasciato alla sua porta, chiamandoli tutti figli suoi. Ha il velo bianco, un sorriso larghissimo e un sacchetto di dolci sempre a portata di mano. I bambini la chiamano Mamma, e una di loro, una bambina già più alta di lei, non si stacca mai dalla sua gonna.',
        en: 'In the memory she runs an orphanage on the island of giants and takes in whoever is left at her door, calling them all her own children. She has a white veil, a very wide smile and a bag of sweets always within reach. The children call her Mother, and one of them, a little girl already taller than she is, never leaves her skirts.',
      },
      affiliation: [
        {
          episode: 836,
          value: {
            it: 'Casa delle Pecore, Mamma Carmel, defunta',
            en: 'Sheep’s House, Mother Carmel, deceased',
          },
        },
      ],
      origin: [{ episode: 836, value: { it: 'Elbaf', en: 'Elbaf' } }],
      epithet: [
        { episode: 836, value: { it: 'Mamma Carmel', en: 'Mother Carmel' } },
      ],
      devilFruit: [{ episode: 836, value: ['soul-soul-fruit'] }],
    },
    'donquixote-mjosgard': {
      role: { it: 'Nobile Mondiale', en: 'World Noble' },
      log: {
        it: 'Appartiene ai Draghi Celesti, la stirpe che si crede al di sopra di chiunque e che non respira la stessa aria degli altri. Anni fa una regina uomo-pesce lo ha fermato prendendosi un colpo al posto suo, e da allora qualcosa in lui si è incrinato insieme al casco. A Mary Geoise accoglie i figli di quella regina e chiede loro scusa, cosa che nessun altro della sua casta farebbe.',
        en: 'He belongs to the Celestial Dragons, the line that believes itself above everyone and will not breathe the same air as the rest. Years ago a fish-man queen stopped him by taking a shot in his place, and since then something in him has cracked along with the helmet. At Mary Geoise he welcomes that queen’s children and apologises to them, which nobody else of his caste would do.',
      },
      affiliation: [
        {
          episode: 877,
          value: {
            it: 'Nobili Mondiali, Draghi Celesti',
            en: 'World Nobles, Celestial Dragons',
          },
        },
      ],
      origin: [{ episode: 877, value: MARY_GEOISE }],
    },
    'belo-betty': {
      role: {
        it: 'Comandante dell’armata dell’Est',
        en: 'Commander of the East Army',
      },
      log: {
        it: 'Guida l’armata dell’Est dei rivoluzionari e arriva dove la gente è già stanca di avere paura. Con una bandiera in mano e la sigaretta all’angolo della bocca chiama a raccolta i contadini, e chi la sente gridare scopre di avere una forza che non sapeva di avere. Lei e i suoi tre colleghi sono i comandanti delle quattro armate.',
        en: 'She leads the Revolutionary Army’s eastern force and turns up wherever people are already tired of being afraid. With a flag in her hand and a cigarette at the corner of her mouth she calls the farmers together, and anyone who hears her shout finds a strength they did not know they had. She and her three colleagues command the four armies.',
      },
      affiliation: [
        {
          episode: 879,
          value: {
            it: 'Armata Rivoluzionaria, comandante dell’armata dell’Est',
            en: 'Revolutionary Army, East Army commander',
          },
        },
      ],
      epithet: [
        { episode: 879, value: { it: 'l’Istigatrice', en: 'the Instigator' } },
      ],
      devilFruit: [{ episode: 879, value: ['pump-pump-fruit'] }],
    },
    'morley': {
      role: {
        it: 'Comandante dell’armata dell’Ovest',
        en: 'Commander of the West Army',
      },
      log: {
        it: 'È un gigante e si presenta con il fiocco tra i capelli, il rossetto e una voce che non si sforza di sembrare altro. Quello che spinge con le mani si muove come argilla, terra e roccia comprese, e sotto una città può aprire gallerie in pochi istanti. Ha passato moltissimi anni rinchiuso da qualche parte e ne parla come di una noia ormai finita.',
        en: 'He is a giant, and he turns up with a ribbon in his hair, lipstick on and a voice that makes no effort to sound like anything else. Whatever he pushes with his hands moves like clay, earth and rock included, and he can open tunnels under a city in moments. He spent a great many years shut away somewhere and speaks of it as of a boredom now over.',
      },
      affiliation: [
        {
          episode: 879,
          value: {
            it: 'Armata Rivoluzionaria, comandante dell’armata dell’Ovest',
            en: 'Revolutionary Army, West Army commander',
          },
        },
      ],
      devilFruit: [{ episode: 879, value: ['push-push-fruit'] }],
    },
    'karasu': {
      role: {
        it: 'Comandante dell’armata del Nord',
        en: 'Commander of the North Army',
      },
      log: {
        it: 'Porta una maschera e un cappello a tesa larga, e parla per frasi corte con la voce filtrata. Quando deve andare da qualche parte si divide in un volo di corvi e ricompone il corpo all’arrivo, e con gli stessi corvi trasporta e consegna. Nelle riunioni dell’Armata Rivoluzionaria è quello che riporta i fatti senza aggiungerci nulla.',
        en: 'He wears a mask and a wide-brimmed hat, and speaks in short sentences through a filter. When he needs to be somewhere he breaks apart into a flight of crows and puts himself back together on arrival, and he carries and delivers with the same birds. In the Revolutionary Army’s meetings he is the one who reports the facts and adds nothing to them.',
      },
      affiliation: [
        {
          episode: 879,
          value: {
            it: 'Armata Rivoluzionaria, comandante dell’armata del Nord',
            en: 'Revolutionary Army, North Army commander',
          },
        },
      ],
      devilFruit: [{ episode: 879, value: ['crow-crow-fruit'] }],
    },
    'lindbergh': {
      role: {
        it: 'Comandante dell’armata del Sud',
        en: 'Commander of the South Army',
      },
      log: {
        it: 'È un mink dal muso di gatto e dal camice sporco, e nell’Armata Rivoluzionaria è insieme comandante e inventore. Costruisce armi e macchine che nessun altro saprebbe usare e le prova addosso a chi gli capita vicino, con risultati non sempre previsti. Alle riunioni arriva con gli occhialoni calati e qualcosa che ronza in mano.',
        en: 'He is a mink with a cat’s face and a dirty lab coat, and in the Revolutionary Army he is commander and inventor at once. He builds weapons and machines nobody else would know how to work and tries them out on whoever is nearest, with results that are not always the intended ones. He comes to meetings with his goggles down and something humming in his hand.',
      },
      affiliation: [
        {
          episode: 879,
          value: {
            it: 'Armata Rivoluzionaria, comandante dell’armata del Sud',
            en: 'Revolutionary Army, South Army commander',
          },
        },
      ],
    },
    'sterry': {
      role: { it: 'Re del Regno di Goa', en: 'King of the Goa Kingdom' },
      log: {
        it: 'Ha preso il trono di un regno dell’East Blue senza esserci nato dentro, adottato da una famiglia nobile che cercava un erede. Alla Reverie si lamenta del viaggio, guarda gli altri sovrani dall’alto in basso e tratta la propria scorta come servitù. Della propria corona parla molto più che del proprio regno.',
        en: 'He took the throne of an East Blue kingdom without being born to it, adopted by a noble family that needed an heir. At the Reverie he complains about the voyage, looks down on the other sovereigns and treats his own guard as servants. He talks a great deal more about his crown than about his kingdom.',
      },
      affiliation: [
        {
          episode: 880,
          value: { it: 'Regno di Goa, re', en: 'Goa Kingdom, king' },
        },
      ],
      origin: [
        {
          episode: 880,
          value: {
            it: 'Regno di Goa, East Blue',
            en: 'Goa Kingdom, East Blue',
          },
        },
      ],
    },
    'im': {
      role: {
        it: 'Occupante del Trono Vuoto',
        en: 'Occupant of the Empty Throne',
      },
      log: {
        it: 'Nella sala più alta di Mary Geoise c’è un trono che per legge deve restare vuoto, e qualcuno vi è seduto sopra. I Cinque Astri di Saggezza, che al mondo non prendono ordini da nessuno, entrano in quella stanza e si inginocchiano. Chiamano quella figura Im e le si rivolgono come a un sovrano, e di lei non si vede altro che una sagoma.',
        en: 'In the highest hall of Mary Geoise there is a throne that by law must stay empty, and somebody is sitting on it. The Five Elders, who take orders from nobody in the world, walk into that room and kneel. They call the figure Im and address it as their sovereign, and nothing of it can be seen but an outline.',
      },
      affiliation: [
        {
          episode: 885,
          value: {
            it: 'Siede sul Trono Vuoto di Mary Geoise',
            en: 'Sits on the Empty Throne in Mary Geoise',
          },
        },
      ],
      origin: [{ episode: 885, value: MARY_GEOISE }],
    },
    'aramaki': {
      role: { it: 'Ammiraglio della Marina', en: 'Marine admiral' },
      log: {
        it: 'È uno degli ammiragli, arriva da solo e si muove scalzo, con una benda sugli occhi e i capelli lunghi sulle spalle. Dal suo corpo escono radici e rami che attraversano un’isola intera e prosciugano tutto quello che toccano, terra e persone comprese. Dice di non aver mangiato nulla da tre anni e di cavarsela benissimo lo stesso.',
        en: 'He is one of the admirals, he arrives alone and he walks barefoot, a blindfold over his eyes and his hair down his shoulders. Roots and branches come out of his body and run across a whole island, draining whatever they touch, ground and people alike. He says he has not eaten anything in three years and that it suits him perfectly well.',
      },
      affiliation: [
        {
          episode: 1077,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
      ],
      epithet: [{ episode: 1077, value: { it: 'Ryokugyu', en: 'Ryokugyu' } }],
      devilFruit: [{ episode: 1077, value: ['woods-woods-fruit'] }],
    },
  },
}
