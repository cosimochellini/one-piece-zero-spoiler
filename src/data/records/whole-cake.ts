import type { Saga } from './saga'
import { wholeCakeChronicles } from './whole-cake.chronicle'

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
      id: 'zou-arc',
      kind: 'arc',
      revealedAtEpisode: 751,
      revealedAtChapter: 802,
      name: { it: 'Zou', en: 'Zou' },
      summary: {
        it: 'Un elefante alto un chilometro che cammina sul mare da mille anni, con una foresta e una città fortificata in cima alla schiena.',
        en: 'A mile-high elephant that has walked the sea for a thousand years, a forest and a walled city riding on its back.',
      },
      visual: { art: 'zou-arc', tint: 'green' },
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
      id: 'whole-cake-island-arc',
      kind: 'arc',
      revealedAtEpisode: 783,
      revealedAtChapter: 825,
      name: { it: 'Whole Cake Island', en: 'Whole Cake Island' },
      summary: {
        it: 'Un’isola di Totto Land fatta di dolci, con alberi di caramello e un castello a piani sopra una torta, dove regna un Imperatore.',
        en: 'An island of Totto Land built out of sweets, caramel trees and a tiered cake with a castle on top, ruled by an Emperor.',
      },
      visual: { art: 'whole-cake-island-arc', tint: 'pink' },
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
        en: 'A white-veiled nun who, in a distant memory, takes in abandoned children on Elbaph and hands sweets to whoever is frightened.',
      },
      visual: { art: 'carmel', tint: 'ivory' },
    },
    {
      id: 'gerd',
      kind: 'character',
      revealedAtEpisode: 836,
      revealedAtChapter: 866,
      name: { it: 'Gerd', en: 'Gerd' },
      summary: {
        it: 'Una bambina gigante di Elbaf che, in un ricordo lontano, si fa rincorrere dalla piccola Linlin per il villaggio e le racconta del digiuno prima della festa.',
        en: 'A giant girl on Elbaph who, in a distant memory, is chased through the village by little Linlin and tells her about the fast before the festival.',
      },
      visual: { art: 'gerd', tint: 'flamingo' },
    },
    {
      id: 'jarul',
      kind: 'character',
      revealedAtEpisode: 836,
      revealedAtChapter: 866,
      name: { it: 'Jarul', en: 'Jarul' },
      summary: {
        it: 'Un gigante anziano con un elmo cornuto e una barba larga come una montagna, che in un ricordo lontano raduna gli orfani di Elbaf attorno a un banchetto di semla.',
        en: 'An ancient giant in a horned helmet with a beard as broad as a mountain, who in a distant memory gathers Elbaph’s orphans around a feast of semla.',
      },
      visual: { art: 'jarul', tint: 'sand' },
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
    {
      id: 'sheepshead',
      kind: 'character',
      revealedAtEpisode: 739,
      revealedAtChapter: 795,
      name: { it: 'Sheepshead', en: 'Sheepshead' },
      summary: {
        it: 'Un pirata con gli occhialoni in sella a una bestia simile a un coccodrillo, a caccia di un samurai su un’isola strana, con le mani che diventano corna ricurve di montone.',
        en: 'A goggled pirate on a crocodile-like mount, hunting a samurai across a strange island, whose hands turn into the curled horns of a ram.',
      },
      visual: { art: 'sheepshead', tint: 'ivory' },
    },
    {
      id: 'edward-weevil',
      kind: 'character',
      revealedAtEpisode: 751,
      revealedAtChapter: 802,
      name: { it: 'Edward Weeble', en: 'Edward Weevil' },
      summary: {
        it: 'Un membro della Flotta dei Sette che si dice figlio di Barbabianca, forte come il vecchio da giovane, che si lascia dietro intere città spazzate via.',
        en: 'A Warlord who says he is Whitebeard’s own son, as strong as the old man was when young, and who leaves whole towns blown away behind him.',
      },
      visual: { art: 'edward-weevil', tint: 'sand' },
    },
    {
      id: 'bakkin',
      kind: 'character',
      revealedAtEpisode: 752,
      revealedAtChapter: 802,
      name: { it: 'Miss Bakkin', en: 'Miss Buckin' },
      summary: {
        it: 'Una vecchietta minuscola con gli occhiali da sole e il cappello verde, madre di un membro della Flotta dei Sette, che dice di essere stata la donna amata da Barbabianca e pensa soprattutto ai soldi.',
        en: 'A tiny old woman in sunglasses and a green hat, mother of a Warlord, who says she was the woman Whitebeard loved and cares above all for money.',
      },
      visual: { art: 'bakkin', tint: 'acid' },
    },
    {
      id: 'zunesha',
      kind: 'character',
      revealedAtEpisode: 755,
      revealedAtChapter: 806,
      name: { it: 'Zunisha', en: 'Zunesha' },
      summary: {
        it: 'L’elefante millenario che porta Zou sulla schiena e due volte al giorno si fa la doccia con l’acqua di mare, facendo piovere pesci sulla città.',
        en: 'The thousand-year-old elephant that carries Zou on its back and twice a day sprays seawater over itself, raining fish on the city.',
      },
      visual: { art: 'zunesha', tint: 'azure' },
    },
    {
      id: 'shishilian',
      kind: 'character',
      revealedAtEpisode: 758,
      revealedAtChapter: 808,
      name: { it: 'Sicilian', en: 'Shishilian' },
      summary: {
        it: 'Un mink leone con il cappello piumato da moschettiere, di guardia al sanatorio del duca di Zou, che butta nel burrone chiunque parli di cose dolci.',
        en: 'A lion mink in a plumed musketeer’s hat, on guard at the duke’s sanatorium on Zou, who throws anyone who talks about sweet things into the ravine.',
      },
      visual: { art: 'shishilian', tint: 'red' },
    },
    {
      id: 'gotti',
      kind: 'character',
      revealedAtEpisode: 783,
      revealedAtChapter: 825,
      name: { it: 'Gotti', en: 'Gotti' },
      summary: {
        it: 'Un enorme pirata dei Fire Tank con una mitragliatrice a tre canne al posto del braccio destro, che si scaglia contro chi insulta un compagno e trema davanti a una donna sola.',
        en: 'A huge Fire Tank Pirate with a three-barrelled gun for a right arm, who flies at anyone who insults a crewmate and trembles before one woman alone.',
      },
      visual: { art: 'gotti', tint: 'green' },
    },
    {
      id: 'randolph',
      kind: 'character',
      revealedAtEpisode: 792,
      revealedAtChapter: 832,
      name: { it: 'Randolph', en: 'Randolph' },
      summary: {
        it: 'Un coniglio con il mantello e il cappello piumato che attraversa la Foresta della Seduzione in sella a una gru e mena una lancia a doppia lama contro gli intrusi.',
        en: 'A rabbit in a cape and a feathered hat who rides a crane through the Seducing Woods and swings a double-bladed spear at intruders.',
      },
      visual: { art: 'randolph', tint: 'ivory' },
    },
    {
      id: 'pound',
      kind: 'character',
      revealedAtEpisode: 797,
      revealedAtChapter: 836,
      name: { it: 'Pound', en: 'Pound' },
      summary: {
        it: 'Un uomo sepolto fino al collo nella Foresta della Seduzione perché gli piace, che un tempo sposò l’Imperatore di Totto Land e ora vuole soltanto rivedere le sue figlie.',
        en: 'A man buried up to his neck in the Seducing Woods because he likes it there, who was once married to the Emperor of Totto Land and wants only to see his daughters.',
      },
      visual: { art: 'pound', tint: 'yellow' },
    },
    {
      id: 'charlotte-opera',
      kind: 'character',
      revealedAtEpisode: 806,
      revealedAtChapter: 843,
      name: { it: 'Charlotte Opera', en: 'Charlotte Opera' },
      summary: {
        it: 'Un enorme ministro di Totto Land con la barba di panna, che chiude ogni frase con un «fa» e dà l’allarme alla capitale quando un fratello sconfitto piomba dal cielo.',
        en: 'A huge minister of Totto Land with a beard of cream, who ends every sentence with a “fa” and alerts the capital when a beaten brother falls out of the sky.',
      },
      visual: { art: 'charlotte-opera', tint: 'ivory' },
    },
    {
      id: 'zeus',
      kind: 'character',
      revealedAtEpisode: 806,
      revealedAtChapter: 843,
      name: { it: 'Zeus', en: 'Zeus' },
      summary: {
        it: 'Una nuvola temporalesca viva, con un volto, che sta sulla mano sinistra di Big Mom e trasforma la sua rabbia in una tempesta sul mare.',
        en: 'A living thundercloud with a face, who rides on Big Mom’s left hand and turns her anger into a storm over the sea.',
      },
      visual: { art: 'zeus', tint: 'azure' },
    },
    {
      id: 'prometheus',
      kind: 'character',
      revealedAtEpisode: 806,
      revealedAtChapter: 843,
      name: { it: 'Prometheus', en: 'Prometheus' },
      summary: {
        it: 'Un sole vivo, con un volto, che sta sulla mano destra di Big Mom e dà calore alle tempeste che lei scatena quando si infuria.',
        en: 'A living sun with a face, who rides on Big Mom’s right hand and lends his heat to the storms she calls up when she is angry.',
      },
      visual: { art: 'prometheus', tint: 'vermilion' },
    },
    {
      id: 'amande',
      kind: 'character',
      revealedAtEpisode: 809,
      revealedAtChapter: 845,
      name: { it: 'Amande', en: 'Amande' },
      summary: {
        it: 'Una donna altissima e pallida sotto un enorme cappello a tesa larga, uno dei nomi famosi che i principi del Germa riconoscono nell’esercito uscito dal castello per vendicare un comandante caduto.',
        en: 'A very tall, pale woman under an enormous wide-brimmed hat, one of the famous names Germa’s princes pick out in the army marching from the chateau to avenge a fallen commander.',
      },
      visual: { art: 'amande', tint: 'azure' },
    },
    {
      id: 'napoleon',
      kind: 'character',
      revealedAtEpisode: 816,
      revealedAtChapter: 853,
      name: { it: 'Napoleon', en: 'Napoleon' },
      summary: {
        it: 'Il bicorno rosa che Big Mom porta in testa, un cappello con occhi e bocca che risponde “Sì, mamma” ogni volta che lei lo chiama per nome.',
        en: 'The pink bicorne Big Mom wears on her head, a hat with eyes and a mouth that answers “Yes, Mama” whenever she calls it by name.',
      },
      visual: { art: 'napoleon', tint: 'flamingo' },
    },
    {
      id: 'lu-feld',
      kind: 'character',
      revealedAtEpisode: 830,
      revealedAtChapter: 860,
      name: { it: 'Du Feld', en: 'Lu Feld' },
      summary: {
        it: 'Il re degli strozzini della malavita, detto il Dio dell’abbondanza, che arriva al Tea Party di Big Mom in abito viola e pelliccia e scambia insulti già davanti al cancello.',
        en: 'The Loan Shark King of the underworld, called the God of Fortune, who arrives at Big Mom’s Tea Party in a purple suit and a fur coat and trades insults at the gate.',
      },
      visual: { art: 'lu-feld', tint: 'violet' },
    },
    {
      id: 'charlotte-compote',
      kind: 'character',
      revealedAtEpisode: 831,
      revealedAtChapter: 861,
      name: { it: 'Charlotte Compote', en: 'Charlotte Compote' },
      summary: {
        it: 'La figlia maggiore di Big Mom e ministra della frutta di Totto Land, seduta al tea party delle nozze di una sorella in mezzo a fratelli e sorelle senza numero.',
        en: 'Big Mom’s eldest daughter and minister of fruit of Totto Land, seated at the tea party of a sister’s wedding among brothers and sisters beyond counting.',
      },
      visual: { art: 'charlotte-compote', tint: 'orange' },
    },
    {
      id: 'jorul',
      kind: 'character',
      revealedAtEpisode: 836,
      revealedAtChapter: 866,
      name: { it: 'Jorul', en: 'Jorul' },
      summary: {
        it: 'Un gigante antichissimo con una barba che scende fino a terra come una cascata, che in un ricordo lontano va al villaggio di Elbaf con un vecchio compagno a dividere la semla con gli orfani.',
        en: 'An ancient giant with a beard that pours to the ground like a waterfall, who in a distant memory comes down to Elbaph’s village with an old comrade to share semla with the orphans.',
      },
      visual: { art: 'jorul', tint: 'azure' },
    },
    {
      id: 'charlotte-nusstorte',
      kind: 'character',
      revealedAtEpisode: 855,
      revealedAtChapter: 882,
      name: { it: 'Charlotte Nusstorte', en: 'Charlotte Nusstorte' },
      summary: {
        it: 'Un figlio di Big Mom con un bicorno che ha una faccia tutta sua e soffia tornado sui nemici, all’assalto del Regno di Germa con i soldati della madre.',
        en: 'A son of Big Mom in a bicorne with a face of its own that blows tornadoes at the enemy, storming the Germa Kingdom with his mother’s soldiers.',
      },
      visual: { art: 'charlotte-nusstorte', tint: 'violet' },
    },
    {
      id: 'charlotte-flampe',
      kind: 'character',
      revealedAtEpisode: 865,
      revealedAtChapter: 891,
      name: { it: 'Charlotte Flambè', en: 'Charlotte Flampe' },
      summary: {
        it: 'Una giovane figlia di Big Mom a capo del fan club di Katakuri, che spia i suoi duelli di nascosto con i suoi seguaci per diventare la sua sorella preferita.',
        en: 'A young daughter of Big Mom at the head of Katakuri’s fan club, who spies on his duels from hiding with her followers, set on becoming his favourite sister.',
      },
      visual: { art: 'charlotte-flampe', tint: 'flamingo' },
    },
    {
      id: 'gion',
      kind: 'character',
      revealedAtEpisode: 887,
      revealedAtChapter: 907,
      name: { it: 'Gion', en: 'Gion' },
      summary: {
        it: 'Un viceammiraglio della Marina con il cappotto sulle spalle come un mantello, che al Red Port rimprovera un vecchio eroe perché ride mentre due Imperatori danno la caccia a suo nipote.',
        en: 'A Marine vice admiral with her coat worn over her shoulders like a cape, who at the Red Port scolds an old hero for laughing while two Emperors hunt his grandson.',
      },
      visual: { art: 'gion', tint: 'pink' },
    },
    {
      id: 'tokikake',
      kind: 'character',
      revealedAtEpisode: 887,
      revealedAtChapter: 907,
      name: { it: 'Tokikake', en: 'Tokikake' },
      summary: {
        it: 'Un viceammiraglio della Marina con il cappello di feltro e il cappotto a quadri, che al Red Port si intromette scusandosi e scommette che Big Mom abbia già messo in conto una Marina sguarnita.',
        en: 'A Marine vice admiral in a fedora and a checked coat, who at the Red Port cuts in with an apology and wagers that Big Mom has already counted on the Marines being short of men.',
      },
      visual: { art: 'tokikake', tint: 'ocher' },
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
      status: [
        { episode: 757, value: 'alive' },
        { episode: 850, value: 'deceased' },
      ],
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
      chronicle: wholeCakeChronicles['charlotte-linlin'],
      role: { it: 'Imperatore di Totto Land', en: 'Emperor of Totto Land' },
      log: {
        it: 'Regna su un arcipelago di isole di zucchero e su una famiglia sterminata di figli, e i suoi capricci decidono il tempo che fa. Quando le viene voglia di un dolce che non ha, perde la testa e travolge tutto finché non glielo portano. Sa strappare alla gente anni della propria vita e darli a oggetti e animali, che da quel momento parlano e obbediscono a lei.',
        en: 'She rules an archipelago of sugar islands and an enormous family of children, and her whims decide the weather. When she wants a sweet she does not have, she loses her head and flattens whatever is in the way until it is brought to her. She can pull years of life out of people and give them to objects and animals, which from then on talk and answer to her.',
      },
      status: [{ episode: 786, value: 'alive' }],
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
      status: [{ episode: 799, value: 'deceased' }],
      affiliation: [
        {
          episode: 799,
          value: { it: 'Regno di Germa, regina', en: 'Germa Kingdom, queen' },
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
      status: [
        { episode: 836, value: 'alive' },
        { episode: 837, value: 'missing' },
        { episode: 838, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 836,
          value: {
            it: 'Casa delle Pecore, Mamma Carmel',
            en: 'Sheep’s House, Mother Carmel',
          },
        },
      ],
      origin: [{ episode: 836, value: { it: 'Elbaf', en: 'Elbaph' } }],
      epithet: [
        { episode: 836, value: { it: 'Mamma Carmel', en: 'Mother Carmel' } },
      ],
      devilFruit: [{ episode: 836, value: ['soul-soul-fruit'] }],
    },
    'gerd': {
      role: { it: 'Bambina gigante di Elbaf', en: 'Giant girl of Elbaph' },
      log: {
        it: 'Nel ricordo è una bambina gigante del villaggio di Elbaf, e la piccola Linlin le corre dietro come dietro a un’amica. È lei a spiegarle che sull’isola si digiuna dodici giorni prima della festa del solstizio d’inverno, e a descriverle la semla finché a tutte e due non viene l’acquolina. Il settimo giorno di digiuno corre in preda al panico da Mamma Carmel.',
        en: 'In the memory she is a giant girl from the village on Elbaph, and little Linlin runs after her as after a friend. She is the one who explains that the island fasts for twelve days before the Winter Solstice Festival, and who describes semla until both of them are drooling. On the seventh day of the fast she runs to Mother Carmel in a panic.',
      },
      affiliation: [
        {
          episode: 1161,
          value: {
            it: 'Nuovi Pirati Guerrieri Giganti, medico',
            en: 'New Giant Warrior Pirates, doctor',
          },
        },
      ],
      origin: [{ episode: 836, value: { it: 'Elbaf', en: 'Elbaph' } }],
    },
    'jarul': {
      role: { it: 'Anziano di Elbaf', en: 'Elder of Elbaph' },
      log: {
        it: 'Nel ricordo è uno dei due vecchi capitani che i giganti di Elbaf trattano da eroi, alto il doppio di chiunque altro e con una barba che gli copre quasi tutto il corpo. Ai giovani ricorda che il commercio al posto del saccheggio, come predica Carmel, va benissimo, ma i giganti non devono mai dimenticare di essere guerrieri. Poi viene con il vecchio compagno a prendere gli orfani della Casa delle Pecore per mangiare la semla prima del digiuno.',
        en: 'In the memory he is one of the two old captains the giants of Elbaph treat as heroes, twice as tall as anyone else, with a beard that covers nearly his whole body. He tells the young that trade over plunder, as Carmel preaches, is all very well, but giants must never forget they are warriors. Then he comes with his old comrade to fetch the Sheep’s House orphans for semla before the fast.',
      },
      affiliation: [
        { episode: 836, value: { it: 'Elbaf, anziano', en: 'Elbaph, elder' } },
      ],
      origin: [{ episode: 836, value: { it: 'Elbaf', en: 'Elbaph' } }],
      epithet: [
        {
          episode: 836,
          value: { it: 'Barba di Montagna', en: 'Mountain Beard' },
        },
      ],
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
    // No `devilFruit` line: the story shows his hands turn into a sheep's horns
    // from 739, and says at 779 that the Gifters eat artificial fruits, but the
    // anime never names his; the Sheep SMILE is only in the Vivre Card.
    'sheepshead': {
      chronicle: wholeCakeChronicles.sheepshead,
      role: {
        it: 'Pirata a capo di una squadra di ricerca',
        en: 'Pirate leading a search party',
      },
      log: {
        it: 'Cavalca una bestia simile a un coccodrillo alla testa di una banda di pirati che, su un’isola strana, dà la caccia a una ragazza e a un samurai. I suoi uomini lo chiamano Sheepshead-sama, e con chiunque sembri sospetto la sua regola è semplice: ucciderlo. Quando combatte le sue mani diventano corna ricurve di montone, e carica con quelle come con la spada che porta sulla schiena.',
        en: 'He rides a crocodile-like mount at the head of a band of pirates hunting a girl and a samurai across a strange island. His men call him Sheepshead-sama, and his rule for anyone who looks suspicious is a simple one: kill them. When he fights, his hands turn into a ram’s curled horns, and he charges with them as readily as with the sword on his back.',
      },
      status: [{ episode: 739, value: 'unknown' }],
      affiliation: [
        {
          episode: 739,
          value: {
            it: 'Pirati, squadra in cerca di un samurai',
            en: 'Pirates, a party hunting a samurai',
          },
        },
        {
          episode: 757,
          value: {
            it: 'Pirati delle Cento Bestie, headliner dei Gifters',
            en: 'Beasts Pirates, headliner of the Gifters',
          },
        },
      ],
    },
    'edward-weevil': {
      chronicle: wholeCakeChronicles['edward-weevil'],
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Nei rapporti della Marina ha già annientato sedici ciurme di vecchi alleati di Barbabianca, e ogni volta una lite finisce con l’intera città spazzata via e centinaia di vittime. È un membro della Flotta dei Sette, e la Marina si chiede quanto a lungo potrà chiudere un occhio. Dice di essere il vero figlio di Barbabianca, un titolo a cui molti non credono; sulla sua forza invece nessuno ha dubbi, e un ammiraglio lo paragona a Barbabianca da giovane.',
        en: 'By the Marines’ reports he has already wiped out sixteen crews of Whitebeard’s old allies, and each time a quarrel ends with the whole town blown away and hundreds of casualties. He is one of the Seven Warlords, and the Marines wonder how long they can look away. He says he is Whitebeard’s own son, a title many people doubt; nobody doubts his strength, and an admiral compares him to the young Whitebeard.',
      },
      affiliation: [
        {
          episode: 751,
          value: { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' },
        },
        {
          episode: 957,
          value: {
            it: 'Pirata, ex membro della Flotta dei Sette',
            en: 'Pirate, former Warlord',
          },
        },
      ],
      epithet: [
        {
          episode: 752,
          value: { it: 'Barbabianca Jr.', en: 'Whitebeard Jr.' },
        },
      ],
      bounty: [{ episode: 752, value: 480_000_000 }],
    },
    'bakkin': {
      chronicle: wholeCakeChronicles.bakkin,
      role: { it: 'Madre di Edward Weeble', en: 'Mother of Edward Weevil' },
      log: {
        it: 'È una vecchietta minuscola con gli occhiali da sole e il cappello verde, e dice al figlio, un membro della Flotta dei Sette, che lui è l’unico vero figlio di Barbabianca e lei la donna che Barbabianca amava. Per provarlo gli mostra una foto del vecchio, lo sgrida e lo perdona nello stesso momento. La vendetta per lei è tempo perso, perché non rende nemmeno un berry, mentre la fortuna di un Imperatore morto aspetta il suo legittimo erede.',
        en: 'She is a tiny old woman in sunglasses and a green hat, and she tells her son, a Warlord, that he is the one true son of Whitebeard and she the woman Whitebeard loved. She holds up a picture of the old man to prove it, and scolds her boy and forgives him in the same breath. Revenge, to her, is a waste of time, since it earns not a single berry, while a dead Emperor’s fortune is waiting for its rightful heir.',
      },
      affiliation: [
        {
          episode: 752,
          value: {
            it: 'Al seguito del figlio, Edward Weeble',
            en: 'At the side of her son, Edward Weevil',
          },
        },
        {
          episode: 890,
          value: {
            it: 'Al seguito del figlio; un tempo piratessa, sulla stessa nave di Barbabianca',
            en: 'At her son’s side; once a pirate, on the same ship as Whitebeard',
          },
        },
      ],
    },
    'zunesha': {
      chronicle: wholeCakeChronicles.zunesha,
      role: {
        it: 'L’elefante che porta Zou',
        en: 'The elephant that carries Zou',
      },
      log: {
        it: 'L’intero paese dei mink viaggia sulla sua schiena, foresta e città comprese, e cammina sul mare da mille anni. Due volte al giorno si spruzza addosso acqua di mare, e l’ondata che si abbatte sul paese viene filtrata nel cuore della città e passa negli acquedotti come acqua da bere per tutta la nazione. I pesci che cadono con l’acqua sfamano i mink, e la loro foresta e la loro città sono fatte per reggere il diluvio.',
        en: 'The whole country of the minks rides on its back, forest and city alike, and it has been walking the sea for a thousand years. Twice a day it sprays seawater over itself, and the flood that crashes down is filtered at the heart of the city into aqueducts that carry drinking water to the whole nation. The fish that fall with the water keep the minks fed, and their forest and town are built to take the downpour.',
      },
      status: [{ episode: 755, value: 'alive' }],
      affiliation: [{ episode: 755, value: ZOU }],
    },
    'shishilian': {
      chronicle: wholeCakeChronicles.shishilian,
      role: {
        it: 'Capitano dei Moschettieri',
        en: 'Captain of the Musketeers',
      },
      log: {
        it: 'È il capitano dei Moschettieri del duca e fa ogni cosa a tutta forza, dall’inchino al grido con cui annuncia il proprio nome. Non sopporta niente di dolce, parole comprese: gentilezza, amore e miele valgono un volo in fondo al burrone e la risalita da soli. Ringrazia in ginocchio i pirati che hanno salvato il suo paese, e durante l’assalto ha strappato Wanda alla presa di un nemico.',
        en: 'He is captain of the duke’s Musketeers and does everything at full power, from a bow to the shout he announces his own name with. He cannot stand anything sweet, words included: kindness, love and honey earn a trip to the bottom of the ravine and the climb back up alone. He thanks the pirates who saved his country on his knees, and during the raid he tore Wanda out of an attacker’s grip.',
      },
      status: [{ episode: 758, value: 'alive' }],
      affiliation: [
        {
          episode: 758,
          value: {
            it: 'Ducato di Mokomo, capitano dei Moschettieri di Inuarashi',
            en: 'Mokomo Dukedom, Inuarashi Musketeers captain',
          },
        },
      ],
      origin: [{ episode: 758, value: ZOU }],
      epithet: [
        { episode: 758, value: { it: 'A tutta forza', en: 'Full Power' } },
      ],
    },
    'gotti': {
      chronicle: wholeCakeChronicles.gotti,
      role: {
        it: 'Sicario dei Pirati Fire Tank',
        en: 'Fire Tank Pirates hit man',
      },
      log: {
        it: 'Naviga con i Pirati Fire Tank ed è un omone con l’avambraccio destro sostituito da una mitragliatrice a tre canne, che spara tirando una catena. Chi insulta un compagno deve vedersela con lui, e lui lo dice in poche parole: quello che si dice di lui non gli importa, ma a chi offende un amico non la perdona. Una sola donna a bordo lo ferma con un grido, e lui le chiede scusa con l’orecchio stretto fra le sue dita.',
        en: 'He sails with the Fire Tank Pirates, a very big man whose right forearm has been replaced by a three-barrelled gun fired with a pull chain. Anyone who insults a crewmate has him to deal with, and he says so in few words: what is said about him does not matter, but he will not forgive an insult to a friend. One woman on board can stop him with a shout, and he begs her pardon with his ear pinched in her fingers.',
      },
      status: [{ episode: 783, value: 'alive' }],
      affiliation: [
        {
          episode: 783,
          value: { it: 'Pirati Fire Tank', en: 'Fire Tank Pirates' },
        },
      ],
      epithet: [
        { episode: 783, value: { it: 'il Sicario', en: 'the Hit Man' } },
      ],
    },
    'pound': {
      chronicle: wholeCakeChronicles.pound,
      role: { it: 'Ex marito di Big Mom', en: 'Big Mom’s ex-husband' },
      log: {
        it: 'Si è sepolto fino al collo nella Foresta della Seduzione perché gli piace starci, e chiede succo di mela a chiunque gli passi davanti di corsa. Sa come funziona Totto Land perché un tempo è stato il marito di Linlin, che lo ha cacciato appena sono nate le loro due figlie. Non vuole avere parte nella battaglia di nessuno: vuole soltanto rivedere le figlie e fare loro gli auguri.',
        en: 'He has buried himself up to the neck in the Seducing Woods because he likes it there, and asks everyone who runs past him for apple juice. He knows how Totto Land works because he was once married to Linlin, who threw him out as soon as their two daughters were born. He wants no part in anybody’s fight: all he wants is to see his daughters again and tell them congratulations.',
      },
      status: [
        { episode: 797, value: 'alive' },
        { episode: 861, value: 'unknown' },
      ],
      affiliation: [
        {
          episode: 797,
          value: {
            it: 'Ex marito di Big Mom; padre di Lola',
            en: 'Big Mom’s ex-husband; Lola’s father',
          },
        },
        {
          episode: 857,
          value: {
            it: 'Venticinquesimo ex marito di Big Mom; padre di Lola e Chiffon',
            en: 'Big Mom’s twenty-fifth ex-husband; father of Lola and Chiffon',
          },
        },
      ],
    },
    'amande': {
      chronicle: wholeCakeChronicles.amande,
      role: {
        it: 'Spadaccina dei Pirati di Big Mom',
        en: 'Big Mom Pirates swordswoman',
      },
      log: {
        it: 'Marcia nell’esercito che Big Mom fa uscire dal castello dopo la caduta di un comandante, una donna altissima e magrissima con il volto che sparisce sotto una tesa enorme e una lunga spada in mano. I principi del Germa la riconoscono subito: è la Donna Demoniaca, uno dei nomi famosi di quella colonna. Si chiedono quanto facciano tutte quelle taglie messe insieme.',
        en: 'She marches in the army Big Mom sends out of the chateau after a commander has fallen, a very tall, very thin woman whose face vanishes under an enormous brim, a long sword in her hand. Germa’s princes know her at once: she is the Demon Lady, one of the famous names in that column. They wonder what all those bounties add up to.',
      },
      status: [{ episode: 809, value: 'alive' }],
      affiliation: [
        {
          episode: 809,
          value: { it: 'Pirati di Big Mom', en: 'Big Mom Pirates' },
        },
        {
          episode: 849,
          value: {
            it: 'Pirati di Big Mom, ministra di Nuts Island',
            en: 'Big Mom Pirates, minister of Nuts Island',
          },
        },
        {
          episode: 859,
          value: {
            it: 'Pirati di Big Mom, ministra di Nuts Island; figlia di Big Mom',
            en: 'Big Mom Pirates, minister of Nuts Island; Big Mom’s daughter',
          },
        },
      ],
      epithet: [
        {
          episode: 809,
          value: { it: 'la Donna Demoniaca', en: 'the Demon Lady' },
        },
      ],
    },
    // No `devilFruit` line: the anime shows his cream grab and burn Luffy
    // (810, 811) but never names the fruit that makes it; the name is only in
    // SBS volume 90. The line comes back when the story gives it.
    'charlotte-opera': {
      chronicle: wholeCakeChronicles['charlotte-opera'],
      role: { it: 'Ministro della panna montata', en: 'Minister of cream' },
      log: {
        it: 'È il ministro della panna montata di Totto Land, un uomo enorme su due gambe cortissime, con la barba e le braccia coperte di panna, e chiude ogni frase con un «fa». Quando uno Sweet Commander piomba sconfitto contro il castello, è lui a chiedersi da dove sia volato e a capire che Cappello di Paglia dev’essere lì vicino. Fa suonare subito l’allarme, e la capitale gli si svuota intorno.',
        en: 'He is the minister of cream of Totto Land, a huge man on two tiny legs, beard and arms covered in cream, and he ends every sentence with a “fa”. When a Sweet Commander crashes beaten into the castle, he is the one who asks where he flew in from and works out that Straw Hat must be close by. He has the alarm sounded at once, and the capital empties around him.',
      },
      status: [{ episode: 806, value: 'unknown' }],
      affiliation: [
        {
          episode: 806,
          value: {
            it: 'Pirati di Big Mom, ministro della panna montata',
            en: 'Big Mom Pirates, minister of cream',
          },
        },
      ],
      origin: [{ episode: 806, value: TOTTO_LAND }],
    },
    'charlotte-compote': {
      chronicle: wholeCakeChronicles['charlotte-compote'],
      role: { it: 'Ministra della frutta', en: 'Minister of fruit' },
      log: {
        it: 'È la figlia maggiore di Big Mom e la ministra della frutta di Totto Land, e al tea party per le nozze di una sorella siede con il resto della famiglia. Dall’alto del muro, uno degli uomini di Bege la nomina subito dopo il primogenito, tra i fratelli e le sorelle che definisce mostri a non finire. Rassicuranti finché stanno dalla tua parte, dice, da far gelare il sangue se diventano nemici.',
        en: 'She is Big Mom’s eldest daughter and the minister of fruit of Totto Land, and at the tea party for a sister’s wedding she sits with the rest of the family. From the top of the wall one of Bege’s men names her right after the eldest son, among the brothers and sisters he calls more monsters than he can count. Reassuring while they are on your side, he says, and chilling once they are enemies.',
      },
      status: [{ episode: 831, value: 'unknown' }],
      affiliation: [
        {
          episode: 831,
          value: {
            it: 'Pirati di Big Mom, ministra della frutta',
            en: 'Big Mom Pirates, minister of fruit',
          },
        },
      ],
      origin: [{ episode: 831, value: TOTTO_LAND }],
    },
    'charlotte-nusstorte': {
      chronicle: wholeCakeChronicles['charlotte-nusstorte'],
      role: { it: 'Figlio di Big Mom', en: 'A son of Big Mom' },
      log: {
        it: 'È uno dei figli di Big Mom, con gli occhiali scuri, i baffi folti e un bicorno che ha la sua stessa faccia e gli stessi baffi. È tra i Pirati di Big Mom all’assalto del Regno di Germa e, quando uno dei Vinsmoke lo mette alle strette, il cappello soffia un tornado che solleva il nemico da terra: è il suo asso nella manica, e lo annuncia con il proprio nome. Chiude le frasi sempre con lo stesso intercalare impettito, anche in mezzo a uno scontro.',
        en: 'He is one of Big Mom’s sons, with dark glasses, a thick moustache and a bicorne that wears the same face and the same moustache. He is among the Big Mom Pirates storming the Germa Kingdom, and when one of the Vinsmokes corners him the hat blows a tornado that lifts the enemy off the ground: it is his trump card, and he announces it by his own name. He ends his sentences with the same stiff turn of phrase, even in the middle of a fight.',
      },
      status: [{ episode: 855, value: 'unknown' }],
      affiliation: [
        {
          episode: 855,
          value: { it: 'Pirati di Big Mom', en: 'Big Mom Pirates' },
        },
      ],
      origin: [{ episode: 855, value: TOTTO_LAND }],
    },
    'charlotte-flampe': {
      chronicle: wholeCakeChronicles['charlotte-flampe'],
      role: {
        it: 'Presidente del fan club di Katakuri',
        en: 'President of Katakuri’s fan club',
      },
      log: {
        it: 'È una delle sorelle minori di Katakuri e la presidente del suo fan club, e per lui ha solo parole di adorazione: perfetto, bellissimo, sempre impeccabile. Quaranta dei suoi fratelli l’hanno votata miglior sorellina, e lei conta di diventare la preferita anche di Katakuri aiutandolo di nascosto a finire Cappello di Paglia. Tratta i propri seguaci come servitori e punisce senza pensarci chi la delude.',
        en: 'She is one of Katakuri’s younger sisters and the president of his fan club, and she has nothing but adoration for him: perfect, gorgeous, always flawless. Forty of her brothers voted her best little sister, and she means to become Katakuri’s favourite too by secretly helping him finish off Straw Hat. She treats her followers as servants and punishes whoever lets her down without a second thought.',
      },
      status: [{ episode: 865, value: 'unknown' }],
      affiliation: [
        {
          episode: 865,
          value: {
            it: 'Pirati di Big Mom; fan club di Katakuri, presidente',
            en: 'Big Mom Pirates; Katakuri’s fan club, president',
          },
        },
      ],
      origin: [{ episode: 865, value: TOTTO_LAND }],
    },
    'randolph': {
      chronicle: wholeCakeChronicles.randolph,
      role: {
        it: 'Lanciere dei Pirati di Big Mom, in sella a una gru',
        en: 'Crane-riding spearman of the Big Mom Pirates',
      },
      log: {
        it: 'È un coniglio con il mantello e un cappello piumato, e attraversa la Foresta della Seduzione in sella a una gru così in fretta da piombare sugli intrusi prima che lo sentano arrivare. Mena una lancia a doppia lama e, quando la sua cavalcatura viene abbattuta, la scaglia dietro a chi scappa. Carrot, che lo affronta corpo a corpo, si accorge che non è un mink: non sa usare l’elettro.',
        en: 'He is a rabbit in a cape and a feathered hat, and he rides a crane through the Seducing Woods fast enough to fall on intruders before they hear him coming. He swings a double-bladed spear and, when his mount is brought down, throws it after whoever is running. Carrot, who fights him hand to hand, notices that he is no mink: he cannot use electro.',
      },
      status: [{ episode: 792, value: 'alive' }],
      affiliation: [
        {
          episode: 792,
          value: { it: 'Pirati di Big Mom', en: 'Big Mom Pirates' },
        },
      ],
      epithet: [
        {
          episode: 792,
          value: { it: 'Cavaliere della gru', en: 'Crane Rider' },
        },
      ],
    },
    'zeus': {
      chronicle: wholeCakeChronicles.zeus,
      role: {
        it: 'Homie nuvola del tuono di Big Mom',
        en: 'Big Mom’s thundercloud homie',
      },
      log: {
        it: 'È una nuvola temporalesca viva che fluttua accanto a Big Mom, una delle cose a cui lei ha dato voce e volto, e quando lei si infuria la tempesta è lui. Quando uno dei suoi Sweet Commander fu sconfitto, si racconta, lei scatenò un cielo che affondò in pochi istanti le navi nemiche, con lui sulla mano sinistra e Prometheus, un sole vivo, sulla destra. Durante i suoi capricci sa che è inutile provare a calmarla: non sente nessuno.',
        en: 'He is a living thundercloud who floats at Big Mom’s side, one of the things she has given a voice and a face to, and when she is angry he is the storm. When a Sweet Commander of hers was beaten, the story goes, she called up a sky that sank the enemy’s ships in moments, with him on her left hand and Prometheus, a living sun, on her right. During her tantrums he knows better than to try to talk her down: she cannot hear anyone.',
      },
      status: [{ episode: 806, value: 'alive' }],
      affiliation: [
        {
          episode: 806,
          value: {
            it: 'Pirati di Big Mom, homie di Big Mom',
            en: 'Big Mom Pirates, Big Mom’s homie',
          },
        },
        {
          episode: 878,
          value: {
            it: 'Pirati di Cappello di Paglia, servitore di Nami',
            en: 'Straw Hat Pirates, Nami’s servant',
          },
        },
        {
          episode: 994,
          value: {
            it: 'Di nuovo agli ordini di Big Mom',
            en: 'Back under Big Mom’s command',
          },
        },
        {
          episode: 1034,
          value: { it: 'Scartato da Big Mom', en: 'Cast off by Big Mom' },
        },
        {
          episode: 1040,
          value: {
            it: 'Pirati di Cappello di Paglia, compagno di Nami',
            en: 'Straw Hat Pirates, Nami’s partner',
          },
        },
      ],
    },
    'prometheus': {
      chronicle: wholeCakeChronicles.prometheus,
      role: { it: 'Homie sole di Big Mom', en: 'Big Mom’s sun homie' },
      log: {
        it: 'È un sole vivo, una palla di fuoco con un volto, una delle cose a cui Big Mom ha dato voce, e non risponde a nessun altro. Quando uno dei suoi Sweet Commander fu sconfitto, si racconta, la sua tempesta affondò in pochi istanti le navi nemiche, con la nuvola del tuono Zeus sulla mano sinistra e lui sulla destra. Durante la sua furia in città la supplica di fermarsi insieme agli altri, avvertendola che potrebbe buttare giù perfino il castello.',
        en: 'He is a living sun, a ball of fire with a face, one of the things Big Mom has given a voice to, and he answers to nobody else. When a Sweet Commander of hers was beaten, the story goes, her storm sank the enemy’s ships in moments, with Zeus the thundercloud on her left hand and him on her right. During her rampage through the city he begs her to stop along with the others, warning that she could bring down even the castle.',
      },
      status: [{ episode: 806, value: 'alive' }],
      affiliation: [
        {
          episode: 806,
          value: {
            it: 'Pirati di Big Mom, homie di Big Mom',
            en: 'Big Mom Pirates, Big Mom’s homie',
          },
        },
      ],
    },
    'napoleon': {
      chronicle: wholeCakeChronicles.napoleon,
      role: { it: 'Homie bicorno di Big Mom', en: 'Big Mom’s bicorne homie' },
      log: {
        it: 'È il bicorno rosa che Big Mom porta in testa, un cappello con occhi e bocca, e parla come tutti gli altri suoi homie. Durante la sua furia in città la supplicava insieme agli altri, avvertendola che quella città era nei guai. Quando nella Stanza del Tesoro lei affronta un intruso, lo chiama per nome insieme alla sua nuvola e al suo sole, e lui risponde subito: “Sì, mamma.”',
        en: 'He is the pink bicorne Big Mom wears on her head, a hat with eyes and a mouth, and he talks like the rest of her homies. During her rampage through the city he pleaded with her along with the others, warning that the town was in trouble. When she faces an intruder in the Room of Treasure she calls him by name alongside her thundercloud and her sun, and he answers at once: “Yes, Mama.”',
      },
      status: [{ episode: 816, value: 'alive' }],
      affiliation: [
        {
          episode: 816,
          value: {
            it: 'Pirati di Big Mom, homie di Big Mom',
            en: 'Big Mom Pirates, Big Mom’s homie',
          },
        },
      ],
    },
    'lu-feld': {
      chronicle: wholeCakeChronicles['lu-feld'],
      role: {
        it: 'Re degli strozzini della malavita',
        en: 'Loan Shark King of the underworld',
      },
      log: {
        it: 'È uno dei pezzi grossi della malavita, il re degli strozzini, e lo chiamano il Dio dell’abbondanza. Arriva al Tea Party di Big Mom con gli ultimi invitati, chiede ad alta voce perché mai sia stato invitato anche un becchino e si unisce al coro che loda la scala mobile di caramelle che li porta su. Chiude le frasi con un piccolo «nen», e varcato il cancello osserva che quel posto ha sempre un aspetto delizioso.',
        en: 'He is one of the bosses of the underworld, the Loan Shark King, and they call him the God of Fortune. He comes to Big Mom’s Tea Party with the last of the guests, asks out loud why an undertaker was invited at all, and joins the chorus praising the candy escalator that carries them up. He ends his sentences with a little “nen”, and once through the gate he remarks that the place always looks good enough to eat.',
      },
      affiliation: [
        {
          episode: 830,
          value: {
            it: 'Malavita, re degli strozzini; Conglomerato Du Feld',
            en: 'Underworld, Loan Shark King; Lu Feld Conglomerate',
          },
        },
      ],
      epithet: [
        {
          episode: 830,
          value: { it: 'Dio dell’abbondanza', en: 'God of Fortune' },
        },
      ],
    },
    'jorul': {
      chronicle: wholeCakeChronicles.jorul,
      role: { it: 'Eroe dei giganti', en: 'Hero of the giants' },
      log: {
        it: 'Nel ricordo è uno dei due ex capitani dei Pirati Guerrieri Giganti, un eroe a cui ogni gigante guarda con rispetto, con una barba che cade fino a terra come l’acqua. Loda i giovani che non smettono di allenarsi da guerrieri e va alla Casa delle Pecore con il vecchio compagno a prendere i bambini per la semla prima del digiuno. Al banchetto è lui a guidare il villaggio nel ringraziare il sole per i suoi bambini.',
        en: 'In the memory he is one of the two former captains of the Giant Warrior Pirates, a hero every giant looks up to, with a beard that falls to the ground like water. He praises the young ones who keep training as warriors, and comes to the Sheep’s House with his old comrade to fetch the children for semla before the fast. At the feast it is he who leads the village in thanking the sun for its children.',
      },
      status: [
        { episode: 836, value: 'unknown' },
        { episode: 837, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 836,
          value: {
            it: 'Pirati Guerrieri Giganti, ex capitano; Elbaf',
            en: 'Giant Warrior Pirates, former co-captain; Elbaph',
          },
        },
      ],
      origin: [{ episode: 836, value: { it: 'Elbaf', en: 'Elbaph' } }],
      epithet: [
        {
          episode: 836,
          value: { it: 'Barba di Cascata', en: 'Waterfall Beard' },
        },
      ],
    },
    'gion': {
      chronicle: wholeCakeChronicles.gion,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È un viceammiraglio del quartier generale della Marina, conosciuta come Momousagi, e porta il cappotto sulle spalle come un mantello. Al Red Port, mentre la Reverie tiene la Marina occupata a scortare i reali, chiama Garp «Garp-chan» e lo rimprovera perché ride mentre due Imperatori danno la caccia a suo nipote. Riferisce la risposta di Sakazuki, che Wano è fuori dalla loro giurisdizione, e ammette di non aver mai pensato che Cappello di Paglia sarebbe diventato così grande.',
        en: 'She is a vice admiral of Marine Headquarters, known as Momousagi, and wears her coat over her shoulders like a cape. At the Red Port, while the Reverie keeps the Marines busy guarding royalty, she calls Garp “Garp-chan” and tells him off for laughing while two Emperors go after his grandson. She passes on Sakazuki’s answer, that Wano lies outside their jurisdiction, and admits she never thought Straw Hat would grow so big.',
      },
      affiliation: [
        {
          episode: 887,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      epithet: [{ episode: 887, value: { it: 'Momousagi', en: 'Momousagi' } }],
    },
    'tokikake': {
      chronicle: wholeCakeChronicles.tokikake,
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'È un viceammiraglio del quartier generale della Marina, conosciuto come Chaton, con un cappello di feltro e un cappotto a quadri. Al Red Port si intromette nella discussione di Gion chiedendo scusa, e dice che Big Mom ha di sicuro messo in conto una Marina a corto di uomini per via della Reverie. Chiama Sakazuki «il capo» e ricorda a Garp chi ha messo più scompiglio a Marineford: suo nipote.',
        en: 'He is a vice admiral of Marine Headquarters, known as Chaton, in a fedora and a coat with a checked pattern. At the Red Port he cuts into Gion’s argument with an apology and says Big Mom has surely counted on the Reverie leaving the Marines short of men. He calls Sakazuki “the boss”, and reminds Garp who stirred up Marineford the most: his own grandson.',
      },
      affiliation: [
        {
          episode: 887,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      epithet: [{ episode: 887, value: { it: 'Chaton', en: 'Chaton' } }],
    },
  },
}
