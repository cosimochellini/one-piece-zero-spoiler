import type { Saga } from './saga'
import { summitWarChronicles } from './summit-war.chronicle'

/**
 * The Summit War saga, episodes 385 to 516: an archipelago of bubbles, an
 * island of women, the deepest prison in the world, and a war in a harbour.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}
const WARLORDS = { it: 'Flotta dei Sette', en: 'Seven Warlords of the Sea' }
const BLACKBEARD_CREW = { it: 'Pirati di Barbanera', en: 'Blackbeard Pirates' }
const BEASTS_HEADLINER = {
  it: 'Pirati delle Cento Bestie, headliner',
  en: 'Beasts Pirates, headliner',
}
const AMAZON_LILY = { it: 'Amazon Lily', en: 'Amazon Lily' }
const LEVEL_SIX = {
  it: 'Prigioniero del sesto livello di Impel Down',
  en: 'Prisoner of Impel Down level 6',
}
const LEVEL_SIX_ROLE = {
  it: 'Prigioniero del sesto livello',
  en: 'Prisoner of the sixth level',
}

export const summitWar: Saga = {
  entries: [
    {
      id: 'trafalgar-law',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Trafalgar Law', en: 'Trafalgar Law' },
      summary: {
        it: 'Un capitano-chirurgo con un cappello a macchie e un orso polare in tuta nella ciurma, arrivato all’arcipelago con una taglia da duecento milioni e nessuna fretta.',
        en: 'A surgeon-captain in a spotted hat, a polar bear in a boiler suit in his crew, arrived at the archipelago with a two-hundred-million bounty and no hurry at all.',
      },
      visual: { art: 'trafalgar-law', tint: 'yellow' },
    },
    {
      id: 'eustass-kid',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Eustass Kid', en: 'Eustass Kid' },
      summary: {
        it: 'Un capitano dai capelli rossi con una taglia più alta di quella di Rufy, che attira il metallo verso di sé e non sopporta di essere guardato dall’alto.',
        en: 'A red-haired captain with a bounty higher than Luffy’s, who pulls metal toward him and cannot stand being looked down on.',
      },
      visual: { art: 'eustass-kid', tint: 'wine' },
    },
    {
      id: 'boa-hancock',
      kind: 'character',
      revealedAtEpisode: 410,
      revealedAtChapter: 516,
      name: { it: 'Boa Hancock', en: 'Boa Hancock' },
      summary: {
        it: 'L’imperatrice di un’isola di sole donne, la più bella del mondo per sua stessa ammissione, che trasforma in pietra chi la desidera e viene perdonata di tutto perché è bella.',
        en: 'The empress of an island of women only, the most beautiful in the world by her own account, who turns those who desire her to stone and is forgiven everything because she is beautiful.',
      },
      visual: { art: 'boa-hancock', tint: 'magenta' },
    },
    {
      id: 'jinbe',
      kind: 'character',
      revealedAtEpisode: 430,
      revealedAtChapter: 528,
      name: { it: 'Jinbe', en: 'Jinbe' },
      summary: {
        it: 'Un uomo-pesce della Flotta dei Sette, incatenato al livello più profondo della prigione più profonda del mondo per aver rifiutato di combattere una guerra contro Barbabianca.',
        en: 'A fish-man of the Seven Warlords, chained on the deepest level of the deepest prison in the world for refusing to fight a war against Whitebeard.',
      },
      visual: { art: 'jinbe', tint: 'blue' },
    },
    {
      id: 'marineford',
      kind: 'arc',
      revealedAtEpisode: 457,
      revealedAtChapter: 550,
      name: { it: 'Saga di Marineford', en: 'Marineford Saga' },
      summary: {
        it: 'La Marina e i pirati più forti del mondo si trovano nello stesso porto, nello stesso giorno.',
        en: 'The Marines and the strongest pirates in the world end up in the same harbour on the same day.',
      },
      visual: { art: 'marineford', tint: 'blue' },
    },
    {
      id: 'sabaody',
      kind: 'arc',
      revealedAtEpisode: 385,
      revealedAtChapter: 490,
      name: { it: 'Arcipelago Sabaody', en: 'Sabaody Archipelago' },
      summary: {
        it: 'Un arcipelago di mangrovie giganti da cui salgono bolle di sapone, ultima tappa prima che la rotta scenda sotto il mare.',
        en: 'An archipelago of giant mangroves with soap bubbles rising from the roots, the last stop before the route goes under the sea.',
      },
      visual: { art: 'sabaody', tint: 'acid' },
    },
    {
      id: 'amazon-lily',
      kind: 'arc',
      revealedAtEpisode: 408,
      revealedAtChapter: 514,
      name: { it: 'Amazon Lily', en: 'Amazon Lily' },
      summary: {
        it: 'Un’isola di giungla chiusa da un portale a forma di serpente, dove vive un popolo di sole donne e nessun uomo può sbarcare.',
        en: 'A jungle island behind a gate shaped like a snake, home to a people of women only, where no man is allowed ashore.',
      },
      visual: { art: 'amazon-lily', tint: 'magenta' },
    },
    {
      id: 'impel-down',
      kind: 'arc',
      revealedAtEpisode: 422,
      revealedAtChapter: 525,
      name: { it: 'Impel Down', en: 'Impel Down' },
      summary: {
        it: 'La prigione del Governo Mondiale, una torre che scende nel mare di livello in livello e da cui non è mai uscito nessuno.',
        en: 'The prison of the World Government, a tower sinking into the sea one marked level after another, out of which nobody has ever walked.',
      },
      visual: { art: 'impel-down', tint: 'wine' },
    },
    {
      id: 'camie',
      kind: 'character',
      revealedAtEpisode: 385,
      revealedAtChapter: 493,
      name: { it: 'Kaimi', en: 'Camie' },
      summary: {
        it: 'Una sirena dalla coda verde che serve takoyaki al banco di un vecchio amico e parla con i pesci come si parla ai vicini di casa.',
        en: 'A green-tailed mermaid who serves takoyaki at an old friend’s counter and talks to fish the way other people talk to neighbours.',
      },
      visual: { art: 'camie', tint: 'cyan' },
    },
    {
      id: 'pappag',
      kind: 'character',
      revealedAtEpisode: 385,
      revealedAtChapter: 493,
      name: { it: 'Pappag', en: 'Pappag' },
      summary: {
        it: 'Una stella marina che parla, con un cappellino in testa, convinta di essere il padrone della sirena che se la porta in giro.',
        en: 'A talking starfish in a tiny hat, convinced that he is the master of the mermaid who carries him around everywhere she goes.',
      },
      visual: { art: 'pappag', tint: 'orange' },
    },
    {
      id: 'duval',
      kind: 'character',
      revealedAtEpisode: 391,
      revealedAtChapter: 497,
      name: { it: 'Duval', en: 'Duval' },
      summary: {
        it: 'Il capo dei Cavalieri del Pesce Volante, chiuso in una maschera di ferro, che dà la caccia alla ciurma per colpa di una faccia non sua.',
        en: 'The boss of the Flying Fish Riders, shut inside an iron mask, hunting the crew because of a face that was never his to begin with.',
      },
      visual: { art: 'duval', tint: 'sand' },
    },
    {
      id: 'shakky',
      kind: 'character',
      revealedAtEpisode: 391,
      revealedAtChapter: 498,
      name: { it: 'Shakky', en: 'Shakky' },
      summary: {
        it: 'La padrona di un bar dell’arcipelago, sigaretta accesa e conti da rapina, che sa già tutto quello che succede fra le mangrovie.',
        en: 'The owner of a bar in the archipelago, cigarette lit and bills to match its name, who already knows everything happening in the mangroves.',
      },
      visual: { art: 'shakky', tint: 'lavender' },
    },
    {
      id: 'silvers-rayleigh',
      kind: 'character',
      revealedAtEpisode: 398,
      revealedAtChapter: 504,
      name: { it: 'Silvers Rayleigh', en: 'Silvers Rayleigh' },
      summary: {
        it: 'Un vecchio artigiano del rivestimento, calmo davanti a un bicchiere, che stende una sala intera di uomini armati senza toccarne uno.',
        en: 'An old coating craftsman, calm over a glass of wine, who drops a whole hall of armed men without laying a hand on any of them.',
      },
      visual: { art: 'silvers-rayleigh', tint: 'ivory' },
    },
    {
      id: 'killer',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Killer', en: 'Killer' },
      summary: {
        it: 'Il secondo dei Pirati di Kid, con un casco che gli copre tutta la testa e due lame lunghe e ricurve fissate ai guanti.',
        en: 'The first mate of the Kid Pirates, a helmet covering his whole head and a long curved blade fixed to each of his gauntlets.',
      },
      visual: { art: 'killer', tint: 'azure' },
    },
    {
      id: 'bepo',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Bepo', en: 'Bepo' },
      summary: {
        it: 'Un orso polare in tuta arancione che sta in piedi come un uomo, naviga per i Pirati Heart e si scusa a ogni rimprovero.',
        en: 'A polar bear in an orange boiler suit who stands like a man, navigates for the Heart Pirates and apologises at every scolding.',
      },
      visual: { art: 'bepo', tint: 'orange' },
    },
    {
      id: 'scratchmen-apoo',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Scratchmen Apoo', en: 'Scratchmen Apoo' },
      summary: {
        it: 'Un capitano dalle braccia lunghissime che arriva a Sabaody suonando, con le cuffie al collo e il ritmo sempre in bocca.',
        en: 'A captain with impossibly long arms who arrives at Sabaody playing, headphones round his neck and a beat always in his mouth.',
      },
      visual: { art: 'scratchmen-apoo', tint: 'acid' },
    },
    {
      id: 'basil-hawkins',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Basil Hawkins', en: 'Basil Hawkins' },
      summary: {
        it: 'Un capitano che decide le sue mosse girando una carta dei tarocchi e annuncia ad alta voce le probabilità di sopravvivenza degli altri.',
        en: 'A captain who settles his moves by turning a tarot card, and reads out everyone else’s odds of survival as though they were the weather.',
      },
      visual: { art: 'basil-hawkins', tint: 'yellow' },
    },
    {
      id: 'x-drake',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'X Drake', en: 'X Drake' },
      summary: {
        it: 'Un capitano con il cappotto da pirata e un passato nella Marina, arrivato a Sabaody con una taglia da duecentoventidue milioni.',
        en: 'A captain in a pirate coat with a Marine past behind him, come to Sabaody with a bounty of two hundred and twenty-two million.',
      },
      visual: { art: 'x-drake', tint: 'red' },
    },
    {
      id: 'urouge',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Urouge', en: 'Urouge' },
      summary: {
        it: 'Un monaco enorme che viaggia sorridendo, con un pilastro di ferro sulla spalla e le isole del cielo alle spalle.',
        en: 'A vast smiling monk with an iron pillar over one shoulder, come down to the archipelago from the islands in the sky.',
      },
      visual: { art: 'urouge', tint: 'sand' },
    },
    {
      id: 'capone-bege',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Capone Bege', en: 'Capone Bege' },
      summary: {
        it: 'Un capitano in gessato che parla come un padrino e tratta la ciurma come una famiglia, sigaro acceso e cappello calato sugli occhi.',
        en: 'A captain in pinstripes who talks like a don and runs his crew like a family, cigar lit and hat pulled down over his eyes.',
      },
      visual: { art: 'capone-bege', tint: 'wine' },
    },
    {
      id: 'jewelry-bonney',
      kind: 'character',
      revealedAtEpisode: 392,
      revealedAtChapter: 498,
      name: { it: 'Jewelry Bonney', en: 'Jewelry Bonney' },
      summary: {
        it: 'Una capitana che mangia per tre mentre parla, con una taglia da centoquaranta milioni e nessun riguardo per chi la sta guardando.',
        en: 'A woman captain who eats for three while she talks, carrying a hundred-and-forty-million bounty and no regard for anyone watching.',
      },
      visual: { art: 'jewelry-bonney', tint: 'pink' },
    },
    {
      id: 'saint-charloss',
      kind: 'character',
      revealedAtEpisode: 395,
      revealedAtChapter: 502,
      name: { it: 'Sant Charloss', en: 'Saint Charloss' },
      summary: {
        it: 'Un Nobile Mondiale con una bolla di vetro sulla testa, che spara ai passanti e compra le persone perché nessuno può toccarlo.',
        en: 'A World Noble with a glass bubble over his head, who shoots passers-by and buys people because nobody is allowed to touch him.',
      },
      visual: { art: 'saint-charloss', tint: 'flamingo' },
    },
    {
      id: 'borsalino',
      kind: 'character',
      revealedAtEpisode: 401,
      revealedAtChapter: 510,
      name: { it: 'Borsalino', en: 'Borsalino' },
      summary: {
        it: 'Un ammiraglio della Marina che arriva sull’arcipelago come un raggio di luce, con gli occhiali storti e la voce di chi non ha fretta.',
        en: 'A Marine admiral who lands on the archipelago as a beam of light, spectacles askew and the voice of a man in no hurry at all.',
      },
      visual: { art: 'borsalino', tint: 'yellow' },
    },
    {
      id: 'sentomaru',
      kind: 'character',
      revealedAtEpisode: 403,
      revealedAtChapter: 508,
      name: { it: 'Sentomaru', en: 'Sentomaru' },
      summary: {
        it: 'La guardia del corpo di uno scienziato del Governo, con un’ascia enorme sulla schiena e una cintura da lottatore in vita.',
        en: 'The bodyguard of a Government scientist, a huge broadaxe across his back and a wrestler’s belt tied round his waist.',
      },
      visual: { art: 'sentomaru', tint: 'ocher' },
    },
    {
      id: 'boa-sandersonia',
      kind: 'character',
      revealedAtEpisode: 412,
      revealedAtChapter: 521,
      name: { it: 'Boa Sandersonia', en: 'Boa Sandersonia' },
      summary: {
        it: 'Una delle due sorelle dell’imperatrice, altissima e magra, che nell’arena si allunga in un serpente verde e stringe.',
        en: 'One of the empress’s two sisters, tall and thin, who stretches into a green snake in the arena and squeezes.',
      },
      visual: { art: 'boa-sandersonia', tint: 'green' },
    },
    {
      id: 'boa-marigold',
      kind: 'character',
      revealedAtEpisode: 412,
      revealedAtChapter: 521,
      name: { it: 'Boa Marigold', en: 'Boa Marigold' },
      summary: {
        it: 'L’altra sorella dell’imperatrice, enorme e pesante, che nell’arena diventa un serpente arancione e soffia fuoco.',
        en: 'The empress’s other sister, huge and heavy, who turns into an orange snake in the arena and breathes fire from her mouth.',
      },
      visual: { art: 'boa-marigold', tint: 'orange' },
    },
    {
      id: 'marguerite',
      kind: 'character',
      revealedAtEpisode: 408,
      revealedAtChapter: 518,
      name: { it: 'Marguerite', en: 'Marguerite' },
      summary: {
        it: 'Una guerriera kuja con un arco più alto di lei, la prima a trovare un uomo svenuto nella foresta e a non ucciderlo subito.',
        en: 'A Kuja warrior with a bow taller than she is, the first to find a man lying unconscious in the forest and not kill him at once.',
      },
      visual: { art: 'marguerite', tint: 'teal' },
    },
    {
      id: 'nyon',
      kind: 'character',
      revealedAtEpisode: 412,
      revealedAtChapter: 522,
      name: { it: 'Nyon', en: 'Nyon' },
      summary: {
        it: 'L’anziana dell’isola delle donne, piccola e curva, che legge i giornali del mondo e discute con l’imperatrice senza abbassare gli occhi.',
        en: 'The elder of the island of women, small and bent, who reads the world’s newspapers and argues with the empress without lowering her eyes.',
      },
      visual: { art: 'nyon', tint: 'lavender' },
    },
    {
      id: 'magellan',
      kind: 'character',
      revealedAtEpisode: 424,
      revealedAtChapter: 530,
      name: { it: 'Magellan', en: 'Magellan' },
      summary: {
        it: 'Il direttore di Impel Down, un uomo enorme e cornuto che gronda veleno da ogni dito e passa in bagno più tempo che in ufficio.',
        en: 'The chief warden of Impel Down, a horned giant of a man who drips poison from every finger and spends more time in the lavatory than at his desk.',
      },
      visual: { art: 'magellan', tint: 'violet' },
    },
    {
      id: 'hannyabal',
      kind: 'character',
      revealedAtEpisode: 423,
      revealedAtChapter: 530,
      name: { it: 'Hannyabal', en: 'Hannyabal' },
      summary: {
        it: 'Il vicedirettore di Impel Down, con un copricapo da faraone e una lancia a due lame, che sogna a voce alta il posto del suo capo.',
        en: 'The vice chief warden of Impel Down, in a pharaoh’s headdress and carrying a two-bladed naginata, who covets his boss’s chair out loud.',
      },
      visual: { art: 'hannyabal', tint: 'sand' },
    },
    {
      id: 'emporio-ivankov',
      kind: 'character',
      revealedAtEpisode: 438,
      revealedAtChapter: 540,
      name: { it: 'Emporio Ivankov', en: 'Emporio Ivankov' },
      summary: {
        it: 'Il sovrano di un livello nascosto della prigione, con una corona di capelli viola, che cambia il corpo di chiunque con un ago.',
        en: 'The ruler of a hidden level of the prison, crowned with a great head of violet hair, who changes anybody’s body with a needle.',
      },
      visual: { art: 'emporio-ivankov', tint: 'magenta' },
    },
    {
      id: 'inazuma',
      kind: 'character',
      revealedAtEpisode: 438,
      revealedAtChapter: 541,
      name: { it: 'Inazuma', en: 'Inazuma' },
      summary: {
        it: 'Un braccio destro con il taglio di capelli a forbice, che ritaglia il pavimento di pietra come fosse carta e lo ripiega.',
        en: 'A right hand with a pair of scissors for hair, who cuts the stone floor of the prison like paper and folds it over.',
      },
      visual: { art: 'inazuma', tint: 'wine' },
    },
    {
      id: 'shiryu',
      kind: 'character',
      revealedAtEpisode: 445,
      revealedAtChapter: 549,
      name: { it: 'Shiryu', en: 'Shiryu' },
      summary: {
        it: 'L’ex capo dei secondini di Impel Down, rinchiuso nella sua stessa prigione per aver ucciso troppi detenuti, con una lama lunghissima.',
        en: 'The former head jailer of Impel Down, locked inside his own prison for killing too many inmates, a very long blade left beside him.',
      },
      visual: { art: 'shiryu', tint: 'ice' },
    },
    {
      id: 'jesus-burgess',
      kind: 'character',
      revealedAtEpisode: 151,
      revealedAtChapter: 234,
      name: { it: 'Jesus Burgess', en: 'Jesus Burgess' },
      summary: {
        it: 'Un gigante in calzamaglia che a Mock Town sfida i passanti a braccio di ferro e ride più forte di tutti al tavolo di Barbanera.',
        en: 'A giant in a wrestler’s leotard who challenges passers-by to arm wrestling in Mock Town and laughs loudest at Blackbeard’s table.',
      },
      visual: { art: 'jesus-burgess', tint: 'red' },
    },
    {
      id: 'van-augur',
      kind: 'character',
      revealedAtEpisode: 151,
      revealedAtChapter: 234,
      name: { it: 'Van Augur', en: 'Van Augur' },
      summary: {
        it: 'Il tiratore della ciurma di Barbanera, altissimo e silenzioso, che a Mock Town tiene il fucile sulle ginocchia e guarda lontano.',
        en: 'The gunman of Blackbeard’s crew, very tall and very quiet, who sits in Mock Town with a rifle across his knees, watching the distance.',
      },
      visual: { art: 'van-augur', tint: 'blue' },
    },
    {
      id: 'doc-q',
      kind: 'character',
      revealedAtEpisode: 151,
      revealedAtChapter: 234,
      name: { it: 'Doc Q', en: 'Doc Q' },
      summary: {
        it: 'Il medico di Barbanera, così malato da reggersi a fatica, che gira su un cavallo magro quanto lui e offre mele a chi passa.',
        en: 'Blackbeard’s doctor, so ill he can barely hold himself upright, riding a horse as thin as he is and offering apples to passers-by.',
      },
      visual: { art: 'doc-q', tint: 'acid' },
    },
    {
      id: 'laffitte',
      kind: 'character',
      revealedAtEpisode: 151,
      revealedAtChapter: 234,
      name: { it: 'Laffitte', en: 'Laffitte' },
      summary: {
        it: 'Un uomo pallido in cilindro e bastone che entra dalla finestra alla riunione della Flotta dei Sette e propone il nome del suo capitano.',
        en: 'A pale man in a top hat with a cane, who steps in through the window at the Warlords’ meeting and puts his captain’s name forward.',
      },
      visual: { art: 'laffitte', tint: 'ivory' },
    },
    {
      id: 'catarina-devon',
      kind: 'character',
      revealedAtEpisode: 450,
      revealedAtChapter: 577,
      name: { it: 'Catarina Devon', en: 'Catarina Devon' },
      summary: {
        it: 'Una prigioniera del sesto livello di Impel Down, rinchiusa laggiù da anni, che ride piano quando le celle si aprono.',
        en: 'A prisoner of the sixth level of Impel Down, shut down there for years, who laughs quietly when the cells come open.',
      },
      visual: { art: 'catarina-devon', tint: 'lavender' },
    },
    {
      id: 'vasco-shot',
      kind: 'character',
      revealedAtEpisode: 450,
      revealedAtChapter: 577,
      name: { it: 'Vasco Shot', en: 'Vasco Shot' },
      summary: {
        it: 'Un prigioniero del sesto livello con una zucca di liquore sempre in mano, che beve anche mentre le celle vengono aperte.',
        en: 'A sixth-level prisoner with a liquor gourd never out of his hand, drinking even as the cells around him are being opened.',
      },
      visual: { art: 'vasco-shot', tint: 'orange' },
    },
    {
      id: 'san-juan-wolf',
      kind: 'character',
      revealedAtEpisode: 450,
      revealedAtChapter: 577,
      name: { it: 'San Juan Wolf', en: 'San Juan Wolf' },
      summary: {
        it: 'Un gigante troppo grande perfino per il sesto livello, incatenato a un muro che gli arriva appena alle ginocchia.',
        en: 'A giant too large even for the sixth level, chained to a wall that barely comes up as far as his knees.',
      },
      visual: { art: 'san-juan-wolf', tint: 'sand' },
    },
    {
      id: 'avalo-pizarro',
      kind: 'character',
      revealedAtEpisode: 450,
      revealedAtChapter: 577,
      name: { it: 'Avalo Pizarro', en: 'Avalo Pizarro' },
      summary: {
        it: 'Un prigioniero del sesto livello con la testa cornuta e la voce di chi comandava, chiuso nella cella più profonda della prigione.',
        en: 'A sixth-level prisoner with a horned head and the voice of a man who used to give orders, held in the deepest cell of the prison.',
      },
      visual: { art: 'avalo-pizarro', tint: 'teal' },
    },
    {
      id: 'sakazuki',
      kind: 'character',
      revealedAtEpisode: 463,
      revealedAtChapter: 556,
      name: { it: 'Sakazuki', en: 'Sakazuki' },
      summary: {
        it: 'Un ammiraglio della Marina che fuma dal cappello e considera la giustizia una faccenda da chiudere, non da discutere.',
        en: 'A Marine admiral with smoke coming off his cap, who treats justice as a matter to be finished rather than a matter to debate.',
      },
      visual: { art: 'sakazuki', tint: 'vermilion' },
    },
    {
      id: 'jozu',
      kind: 'character',
      revealedAtEpisode: 461,
      revealedAtChapter: 556,
      name: { it: 'Jozu', en: 'Jozu' },
      summary: {
        it: 'Un comandante di Barbabianca largo quanto una porta, che si copre il corpo di diamante e incassa un colpo senza spostare i piedi.',
        en: 'A Whitebeard commander as wide as a doorway, who covers his body in diamond and takes a blow without shifting his feet.',
      },
      visual: { art: 'jozu', tint: 'ice' },
    },
    {
      id: 'vista',
      kind: 'character',
      revealedAtEpisode: 461,
      revealedAtChapter: 556,
      name: { it: 'Vista', en: 'Vista' },
      summary: {
        it: 'Un comandante di Barbabianca con i baffi all’insù e due spade, lo spadaccino più elegante della ciurma, che saluta con un inchino prima di tagliare.',
        en: 'A Whitebeard commander with an upturned moustache and two swords, the most elegant swordsman of the crew, who bows before he cuts.',
      },
      visual: { art: 'vista', tint: 'flamingo' },
    },
    {
      id: 'squard',
      kind: 'character',
      revealedAtEpisode: 462,
      revealedAtChapter: 558,
      name: { it: 'Squardo', en: 'Squard' },
      summary: {
        it: 'Il capitano di una ciurma alleata di Barbabianca, che chiama padre il vecchio e porta la sua nave in prima fila nella baia.',
        en: 'The captain of a crew allied to Whitebeard, who calls the old man father and brings his ship into the front line of the bay.',
      },
      visual: { art: 'squard', tint: 'wine' },
    },
    {
      id: 'little-oars-jr',
      kind: 'character',
      revealedAtEpisode: 466,
      revealedAtChapter: 560,
      name: { it: 'Piccolo Oz Jr.', en: 'Little Oars Jr.' },
      summary: {
        it: 'Un gigante alto quanto una torre, con un cappello di paglia intrecciata in testa, che avanza da solo verso la baia della Marina.',
        en: 'A giant as tall as a tower, a hat of woven straw on his head, walking alone towards the bay the Marines are holding.',
      },
      visual: { art: 'little-oars-jr', tint: 'red' },
    },
    {
      id: 'tsuru',
      kind: 'character',
      revealedAtEpisode: 461,
      revealedAtChapter: 556,
      name: { it: 'Tsuru', en: 'Tsuru' },
      summary: {
        it: 'Un viceammiraglio anziano che siede fra gli ammiragli, unica donna al tavolo, e parla con la calma di chi non deve alzare la voce.',
        en: 'An elderly vice admiral seated among the admirals, the only woman at the table, speaking with the calm of one who never has to shout.',
      },
      visual: { art: 'tsuru', tint: 'ivory' },
    },
    {
      id: 'momonga',
      kind: 'character',
      revealedAtEpisode: 410,
      revealedAtChapter: 523,
      name: { it: 'Momonga', en: 'Momonga' },
      summary: {
        it: 'Un viceammiraglio della Marina che sbarca sull’isola delle donne per consegnare una convocazione e non alza mai gli occhi.',
        en: 'A Marine vice admiral who lands on the island of women to deliver a summons and never once lifts his eyes from the ground.',
      },
      visual: { art: 'momonga', tint: 'azure' },
    },
    {
      id: 'curly-dadan',
      kind: 'character',
      revealedAtEpisode: 493,
      revealedAtChapter: 582,
      name: { it: 'Curly Dadan', en: 'Curly Dadan' },
      summary: {
        it: 'La capa di una banda di briganti di montagna, capelli enormi e sigaretta in bocca, a cui la Marina ha affidato due bambini.',
        en: 'The boss of a band of mountain bandits, enormous hair and a cigarette in her mouth, handed two children to raise by the Marines.',
      },
      visual: { art: 'curly-dadan', tint: 'ocher' },
    },
    {
      id: 'sabo',
      kind: 'character',
      revealedAtEpisode: 497,
      revealedAtChapter: 585,
      name: { it: 'Sabo', en: 'Sabo' },
      summary: {
        it: 'Un bambino in cilindro e occhialoni che vive fra i rottami della città, fratello giurato di Rufy e Ace davanti a tre tazze di sakè.',
        en: 'A boy in a top hat and goggles who lives among the town’s scrap, sworn brother to Luffy and Ace over three cups of sake.',
      },
      visual: { art: 'sabo', tint: 'blue' },
    },
    {
      id: 'portgas-d-rouge',
      kind: 'character',
      revealedAtEpisode: 493,
      revealedAtChapter: 550,
      name: { it: 'Portuguese D. Rouge', en: 'Portgas D. Rouge' },
      summary: {
        it: 'La madre di Ace, che ha tenuto il figlio in grembo venti mesi per sottrarlo alla Marina e non è sopravvissuta al parto.',
        en: 'Ace’s mother, who carried her son for twenty months to keep him out of the hands of the Marines and did not survive the birth.',
      },
      visual: { art: 'portgas-d-rouge', tint: 'orange' },
    },
  ],

  dossiers: {
    'trafalgar-law': {
      chronicle: summitWarChronicles['trafalgar-law'],
      role: { it: 'Capitano e chirurgo', en: 'Captain and surgeon' },
      log: {
        it: 'Uno degli undici pirati con una taglia sopra i cento milioni approdati a Sabaody nello stesso mese. Siede in un bar con la ciurma, guarda Rufy prendere a pugni un Nobile Mondiale e sorride, cosa che nessun altro nella stanza fa. Porta una spada lunga quanto lui e la usa poco, perché le mani gli bastano.',
        en: 'One of eleven pirates with a bounty above a hundred million to reach Sabaody in the same month. He sits in a bar with his crew, watches Luffy punch a World Noble and smiles, which nobody else in the room does. He carries a sword as long as himself and rarely uses it, because his hands are enough.',
      },
      status: [{ episode: 392, value: 'alive' }],
      affiliation: [
        {
          episode: 392,
          value: { it: 'Pirati Heart, capitano', en: 'Heart Pirates, captain' },
        },
        {
          episode: 517,
          value: {
            it: 'Flotta dei Sette; Pirati Heart, capitano',
            en: 'Seven Warlords; Heart Pirates, captain',
          },
        },
        {
          episode: 700,
          value: {
            it: 'Ex membro della Flotta dei Sette; Pirati Heart',
            en: 'Former Warlord; Heart Pirates',
          },
        },
      ],
      origin: [
        {
          episode: 704,
          value: { it: 'Flevance, North Blue', en: 'Flevance, North Blue' },
        },
      ],
      epithet: [
        {
          episode: 392,
          value: { it: 'Chirurgo della Morte', en: 'Surgeon of Death' },
        },
      ],
      devilFruit: [{ episode: 590, value: ['op-op-fruit'] }],
      bounty: [
        { episode: 392, value: 200_000_000 },
        { episode: 517, value: 440_000_000 },
        { episode: 746, value: 500_000_000 },
        { episode: 1086, value: 3_000_000_000 },
      ],
    },
    'eustass-kid': {
      role: {
        it: 'Capitano dei Pirati di Kid',
        en: 'Captain of the Kid Pirates',
      },
      log: {
        it: 'La taglia più alta della sua generazione, e la reputazione di aver ucciso civili per una parola di troppo. A Sabaody guarda gli altri capitani come concorrenti da eliminare, poi un ragazzo di gomma prende a pugni un Nobile e lui decide che almeno quello vale la pena di vederlo di nuovo. Il metallo gli si attacca al braccio quando lo chiama.',
        en: 'The highest bounty of his generation, and a reputation for killing civilians over a word too many. At Sabaody he sizes up the other captains as rivals to be removed, then a rubber boy punches a Noble and he decides that one, at least, is worth seeing again. Metal flies to his arm when he calls it.',
      },
      affiliation: [
        {
          episode: 392,
          value: { it: 'Pirati di Kid, capitano', en: 'Kid Pirates, captain' },
        },
      ],
      origin: [{ episode: 392, value: { it: 'South Blue', en: 'South Blue' } }],
      epithet: [
        { episode: 392, value: { it: 'Capitan Kid', en: 'Captain Kid' } },
      ],
      devilFruit: [{ episode: 1040, value: ['magnet-magnet-fruit'] }],
      bounty: [
        { episode: 392, value: 315_000_000 },
        { episode: 517, value: 470_000_000 },
        { episode: 1086, value: 3_000_000_000 },
      ],
    },
    'boa-hancock': {
      role: { it: 'Imperatrice di Amazon Lily', en: 'Empress of Amazon Lily' },
      log: {
        it: 'Governa un’isola dove nessun uomo ha mai messo piede, e comanda le Pirate Kuja come membro della Flotta dei Sette. Sputa sui suoi sudditi e si china per farsi perdonare, e le viene perdonato. Ha un ragazzo di gomma rinchiuso in gabbia nell’arena, e non riesce a trasformarlo in pietra.',
        en: 'She rules an island where no man has ever set foot, and captains the Kuja Pirates as one of the Seven Warlords. She spits on her subjects and bows to be forgiven, and is forgiven. She has a rubber boy caged in her arena, and cannot turn him to stone.',
      },
      affiliation: [
        {
          episode: 410,
          value: {
            it: 'Flotta dei Sette; Pirate Kuja, capitana',
            en: 'Seven Warlords; Kuja Pirates, captain',
          },
        },
        {
          episode: 958,
          value: {
            it: 'Ex membro della Flotta dei Sette; Pirate Kuja',
            en: 'Former Warlord; Kuja Pirates',
          },
        },
      ],
      origin: [
        { episode: 410, value: { it: 'Amazon Lily', en: 'Amazon Lily' } },
      ],
      epithet: [
        {
          episode: 410,
          value: { it: 'Imperatrice Pirata', en: 'Pirate Empress' },
        },
      ],
      devilFruit: [{ episode: 412, value: ['love-love-fruit'] }],
    },
    'jinbe': {
      chronicle: summitWarChronicles.jinbe,
      role: {
        it: 'Uomo-pesce della Flotta dei Sette',
        en: 'Fish-man of the Seven Warlords',
      },
      log: {
        it: 'Il Governo gli ha chiesto di schierarsi contro Barbabianca, e lui ha preferito la cella. Nel livello più basso di Impel Down condivide la prigionia con Ace, e ha smesso di mangiare per protesta. Rufy lo libera perché gli serve un braccio in più; Jinbe lo segue perché quel braccio vuole salvare la stessa persona.',
        en: 'The Government asked him to take arms against Whitebeard, and he chose the cell instead. On the lowest level of Impel Down he shares his imprisonment with Ace, and has stopped eating in protest. Luffy frees him because he needs another pair of hands; Jinbe follows because those hands want to save the same man.',
      },
      status: [
        { episode: 430, value: 'imprisoned' },
        { episode: 451, value: 'alive' },
      ],
      affiliation: [
        { episode: 430, value: WARLORDS },
        {
          episode: 486,
          value: {
            it: 'Ex membro della Flotta dei Sette',
            en: 'Former Warlord',
          },
        },
        { episode: 980, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 430,
          value: { it: 'Isola degli Uomini-Pesce', en: 'Fish-Man Island' },
        },
      ],
      epithet: [
        {
          episode: 430,
          value: { it: 'Cavaliere del Mare', en: 'Knight of the Sea' },
        },
      ],
      bounty: [{ episode: 1086, value: 1_100_000_000 }],
    },
    'camie': {
      role: { it: 'Sirena del Takoyaki 8', en: 'Mermaid of Takoyaki 8' },
      log: {
        it: 'Viene inseguita per mare da una banda a cavallo di pesci volanti e se la cava perché un ragazzo di gomma decide che non se ne parla nemmeno. Serve al banco dei takoyaki di Octy, che la tratta come una figlia, e si scusa in continuazione per il disturbo che crede di dare. Nei guai ci finisce con facilità, e qualcuno deve sempre andare a riprenderla.',
        en: 'She is chased across the sea by a gang riding flying fish and gets away because a rubber boy decides the matter is not up for discussion. She works the takoyaki counter for Hatchan, who treats her like a daughter, and apologises constantly for trouble she thinks she is causing. Danger finds her easily, and somebody always has to fetch her back.',
      },
      affiliation: [
        {
          episode: 385,
          value: {
            it: 'Takoyaki 8, banconista; amica di Octy',
            en: 'Takoyaki 8, staff; Hatchan’s friend',
          },
        },
        {
          episode: 523,
          value: {
            it: 'Caffè delle Sirene, Isola degli Uomini-Pesce',
            en: 'Mermaid Café, Fish-Man Island',
          },
        },
      ],
      origin: [
        {
          episode: 385,
          value: { it: 'Isola degli Uomini-Pesce', en: 'Fish-Man Island' },
        },
      ],
    },
    'pappag': {
      role: { it: 'Stella marina parlante', en: 'Talking starfish' },
      log: {
        it: 'Sta appollaiato sulla testa di Kaimi e sostiene di esserne il padrone, anche se è lei a portarlo in giro e a dargli da mangiare. Parla senza fermarsi mai, distribuisce consigli che nessuno gli ha chiesto e si offende se qualcuno lo scambia per un cappello. Quando la sirena sparisce è il primo a correre da chiunque possa aiutarla.',
        en: 'He perches on Camie’s head and insists that he is her master, though she is the one who carries him about and feeds him. He talks without pause, hands out advice nobody asked for, and takes offence when he is mistaken for a hat. When the mermaid goes missing he is the first to run to anyone who might help.',
      },
      affiliation: [
        {
          episode: 385,
          value: {
            it: 'Animale e padrone di Kaimi',
            en: 'Camie’s pet and master',
          },
        },
        {
          episode: 523,
          value: {
            it: 'Criminal, proprietario del marchio di moda',
            en: 'Criminal, fashion brand owner',
          },
        },
      ],
    },
    'duval': {
      role: {
        it: 'Capo dei Cavalieri del Pesce Volante',
        en: 'Boss of the Flying Fish Riders',
      },
      log: {
        it: 'Comanda una banda che vola sopra il mare su pesci addestrati e dà la caccia a un cuoco che non ha mai incontrato. La colpa è di un disegno: la sua faccia è identica a quella stampata su una taglia, e da allora la Marina e i cacciatori non gli danno tregua. Per questo porta una maschera di ferro e non se la toglie davanti a nessuno.',
        en: 'He leads a gang that flies over the sea on trained fish, and hunts a cook he has never met. The fault lies with a drawing: his face is the one printed on a wanted poster, and Marines and bounty hunters have not left him alone since. So he wears an iron mask, and takes it off for nobody.',
      },
      affiliation: [
        {
          episode: 391,
          value: {
            it: 'Cavalieri della Vita Rosa, capo',
            en: 'Rosy Life Riders, boss',
          },
        },
      ],
      epithet: [{ episode: 391, value: { it: 'il Bello', en: 'Handsome' } }],
    },
    'shakky': {
      role: { it: 'Padrona del bar', en: 'Bar owner' },
      log: {
        it: 'Tiene un locale fra le mangrovie dove il conto è sempre più alto di quanto dovrebbe, e l’insegna lo ammette apertamente. Conosce per nome ogni pirata sbarcato sull’arcipelago e ne segue le taglie sui giornali come altri seguono il tempo. Sa dove si trova l’uomo capace di rivestire una nave, e non spiega a nessuno come faccia a saperlo.',
        en: 'She keeps a place among the mangroves where the bill always comes out higher than it should, which the sign admits outright. She knows by name every pirate who has landed on the archipelago and follows their bounties in the papers the way others follow the weather. She knows where to find the man who can coat a ship, and never explains how.',
      },
      affiliation: [
        {
          episode: 391,
          value: {
            it: 'Bar della Rapina, proprietaria',
            en: 'Shakky’s Rip-Off Bar, owner',
          },
        },
      ],
    },
    'silvers-rayleigh': {
      chronicle: summitWarChronicles['silvers-rayleigh'],
      role: { it: 'Artigiano del rivestimento', en: 'Coating craftsman' },
      log: {
        it: 'A Sabaody lo chiamano il vecchio che riveste le navi, e per quel lavoro chiede cifre che nessuno si azzarda a discutere. Nella casa d’aste stende una sala intera di uomini armati senza toccarne uno, poi torna al suo bicchiere come se non fosse successo niente. Dice di aver navigato, tanti anni fa, sulla nave del Re dei Pirati, e lo dice come si dice un vecchio mestiere.',
        en: 'At Sabaody they call him the old man who coats ships, and for that work he asks prices nobody dares argue with. In the auction house he drops a whole hall of armed men without touching one of them, then goes back to his glass as though nothing had happened. He says he sailed, many years ago, on the ship of the Pirate King, and says it the way a man names an old trade.',
      },
      status: [{ episode: 398, value: 'alive' }],
      affiliation: [
        {
          episode: 398,
          value: {
            it: 'Artigiano del rivestimento a Sabaody; un tempo secondo dei Pirati di Roger',
            en: 'Coating craftsman of Sabaody; once first mate of the Roger Pirates',
          },
        },
      ],
      epithet: [
        { episode: 398, value: { it: 'Re Oscuro', en: 'the Dark King' } },
      ],
    },
    'killer': {
      role: {
        it: 'Secondo dei Pirati di Kid',
        en: 'First mate of the Kid Pirates',
      },
      log: {
        it: 'Sta sempre un passo dietro al suo capitano e parla molto meno di lui, con un casco che non si toglie nemmeno per mangiare. Ai polsi porta due lame lunghe e ricurve, e quando le usa la faccenda si chiude in fretta. A Sabaody guarda le altre ciurme come si guarda il tempo prima di salpare, senza dire una parola.',
        en: 'He stands a step behind his captain and says far less than he does, in a helmet he does not take off even to eat. Two long curved blades ride on his wrists, and when he uses them the business ends quickly. At Sabaody he watches the other crews the way a sailor watches the weather before casting off, without a word.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati di Kid, secondo',
            en: 'Kid Pirates, first mate',
          },
        },
      ],
      origin: [{ episode: 392, value: { it: 'South Blue', en: 'South Blue' } }],
      epithet: [
        {
          episode: 392,
          value: { it: 'Soldato del Massacro', en: 'Massacre Soldier' },
        },
      ],
      bounty: [
        { episode: 392, value: 162_000_000 },
        { episode: 517, value: 200_000_000 },
      ],
    },
    'bepo': {
      role: {
        it: 'Navigatore dei Pirati Heart',
        en: 'Navigator of the Heart Pirates',
      },
      log: {
        it: 'È un orso polare che cammina su due zampe, parla e indossa la tuta arancione della ciurma come il resto dell’equipaggio. Fa il navigatore per Trafalgar Law e ogni volta che qualcuno alza la voce si scusa, anche quando la colpa non è sua. In mare aperto non ha paura di niente, ma basta un rimprovero del capitano per farlo sedere.',
        en: 'He is a polar bear who walks on two legs, talks, and wears the crew’s orange boiler suit like everyone else aboard. He navigates for Trafalgar Law and apologises whenever a voice is raised, even when nothing was his fault. At sea he is afraid of nothing, yet one word from his captain is enough to sit him down.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati Heart, navigatore',
            en: 'Heart Pirates, navigator',
          },
        },
      ],
      origin: [
        {
          episode: 757,
          value: { it: 'Zou, Ducato di Mokomo', en: 'Zou, Mokomo Dukedom' },
        },
      ],
      bounty: [{ episode: 517, value: 500 }],
    },
    'scratchmen-apoo': {
      role: {
        it: 'Capitano dei Pirati On Air',
        en: 'Captain of the On Air Pirates',
      },
      log: {
        it: 'Arriva a Sabaody nello stesso mese degli altri capitani con la taglia sopra i cento milioni, e si fa notare più di tutti perché non smette mai di fare rumore. Ha braccia lunghissime che cambiano forma, e il suo stesso corpo gli serve da strumento. Delle risse altrui ride come se avesse pagato il biglietto per vederle.',
        en: 'He reaches Sabaody in the same month as the other captains with bounties above a hundred million, and stands out because he never stops making noise. His arms are long and change shape, and his own body serves him as an instrument. He laughs at other people’s brawls like a spectator who paid for the seat.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati On Air, capitano',
            en: 'On Air Pirates, captain',
          },
        },
        { episode: 895, value: BEASTS_HEADLINER },
      ],
      origin: [
        { episode: 392, value: { it: 'Rotta Maggiore', en: 'Grand Line' } },
      ],
      epithet: [
        {
          episode: 392,
          value: { it: 'Ruggito del Mare', en: 'Roar of the Sea' },
        },
      ],
      bounty: [
        { episode: 392, value: 198_000_000 },
        { episode: 517, value: 350_000_000 },
      ],
    },
    'basil-hawkins': {
      role: {
        it: 'Capitano dei Pirati di Hawkins',
        en: 'Captain of the Hawkins Pirates',
      },
      log: {
        it: 'Prima di muoversi gira una carta e legge quello che vi trova, e alla gente annuncia la percentuale esatta di probabilità che ha di restare viva. Parla piano, non si scompone e non alza mai il tono, nemmeno quando gli altri capitani si sfidano davanti a un bar. Si porta dietro bambole di paglia che nessuno gli ha ancora visto usare.',
        en: 'Before he moves he turns a card and reads what is on it, then tells people the exact percentage chance they have of staying alive. He speaks slowly, never flinches and never raises his voice, not even when the other captains square up outside a bar. He carries straw dolls that nobody has yet seen him use.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati di Hawkins, capitano',
            en: 'Hawkins Pirates, captain',
          },
        },
        { episode: 895, value: BEASTS_HEADLINER },
      ],
      origin: [{ episode: 392, value: { it: 'North Blue', en: 'North Blue' } }],
      epithet: [{ episode: 392, value: { it: 'il Mago', en: 'the Magician' } }],
      devilFruit: [{ episode: 895, value: ['straw-straw-fruit'] }],
      bounty: [
        { episode: 392, value: 249_000_000 },
        { episode: 517, value: 320_000_000 },
      ],
    },
    'x-drake': {
      role: {
        it: 'Capitano dei Pirati di Drake',
        en: 'Captain of the Drake Pirates',
      },
      log: {
        it: 'Prima di issare bandiera nera portava le stellette di contrammiraglio, e nessuno sa dire perché abbia cambiato parte. Arriva a Sabaody con gli altri capitani della sua generazione e tiene la testa bassa, come se preferisse non essere contato.',
        en: 'Before he raised a black flag he wore a rear admiral’s stars, and nobody can say why he changed sides. He comes to Sabaody with the other captains of his generation and keeps his head down, as though he would rather not be counted.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati di Drake, capitano, ex contrammiraglio della Marina',
            en: 'Drake Pirates, captain, former Marine rear admiral',
          },
        },
        { episode: 895, value: BEASTS_HEADLINER },
        {
          episode: 1000,
          value: {
            it: 'Marina, capitano dello SWORD',
            en: 'Marines, SWORD captain',
          },
        },
      ],
      origin: [{ episode: 392, value: { it: 'North Blue', en: 'North Blue' } }],
      epithet: [
        { episode: 392, value: { it: 'Bandiera Rossa', en: 'Red Flag' } },
      ],
      devilFruit: [
        {
          episode: 402,
          value: ['dragon-dragon-fruit-ancient-model-allosaurus'],
        },
      ],
      bounty: [{ episode: 392, value: 222_000_000 }],
    },
    'urouge': {
      role: {
        it: 'Capitano dei Pirati del Monaco Decaduto',
        en: 'Captain of the Fallen Monk Pirates',
      },
      log: {
        it: 'Viene dalle isole del cielo, cosa che sulla Rotta Maggiore quasi nessuno crede possibile, e si porta dietro un pilastro di ferro come bastone. Sorride sempre, anche mentre colpisce, e più duro è il colpo che incassa più il suo corpo cresce. A Sabaody passeggia tranquillo in mezzo a capitani che non si sopportano.',
        en: 'He comes from the islands in the sky, which almost nobody on the Grand Line believes is possible, and carries an iron pillar as a staff. He smiles constantly, even mid-swing, and the harder the blow he takes the larger his body grows. At Sabaody he strolls calmly among captains who cannot stand each other.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati del Monaco Decaduto, capitano',
            en: 'Fallen Monk Pirates, captain',
          },
        },
      ],
      origin: [
        { episode: 392, value: { it: 'Isole del cielo', en: 'Sky islands' } },
      ],
      epithet: [
        { episode: 392, value: { it: 'il Monaco Pazzo', en: 'the Mad Monk' } },
      ],
      bounty: [{ episode: 392, value: 108_000_000 }],
    },
    'capone-bege': {
      role: {
        it: 'Capitano dei Pirati Fire Tank',
        en: 'Captain of the Fire Tank Pirates',
      },
      log: {
        it: 'Comanda la sua ciurma come una famiglia di malavita, con il gessato addosso e il sigaro sempre acceso, e ai suoi uomini dà del soldato. Viene dal West Blue, dove si era preso una città intera prima ancora di mettersi in mare. A Sabaody non si mescola con gli altri capitani: osserva, conta quanti sono e se ne va per la sua strada.',
        en: 'He runs his crew like a crime family, pinstripes on and a cigar always lit, and calls his men soldiers. He comes from the West Blue, where he had taken a whole town for himself before he ever put to sea. At Sabaody he does not mix with the other captains: he watches, counts how many there are, and goes his own way.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati Fire Tank, capitano',
            en: 'Fire Tank Pirates, captain',
          },
        },
        {
          episode: 785,
          value: {
            it: 'Pirati di Big Mom, combattente',
            en: 'Big Mom Pirates, combatant',
          },
        },
        {
          episode: 838,
          value: {
            it: 'Pirati Fire Tank, in fuga',
            en: 'Fire Tank Pirates, on the run',
          },
        },
      ],
      origin: [{ episode: 392, value: { it: 'West Blue', en: 'West Blue' } }],
      epithet: [
        { episode: 392, value: { it: 'Bege il Gangster', en: 'Gang Bege' } },
      ],
      devilFruit: [{ episode: 785, value: ['castle-castle-fruit'] }],
      bounty: [
        { episode: 392, value: 138_000_000 },
        { episode: 517, value: 300_000_000 },
      ],
    },
    'jewelry-bonney': {
      role: {
        it: 'Capitana dei Pirati di Bonney',
        en: 'Captain of the Bonney Pirates',
      },
      log: {
        it: 'È l’unica donna fra gli undici capitani arrivati a Sabaody con una taglia sopra i cento milioni, e mangia mentre parla, mentre cammina e mentre minaccia. Ha modi da ragazzina e una ciurma che la segue senza fiatare. Mangia e beve a spese di chiunque le capiti davanti, e non ringrazia.',
        en: 'She is the only woman among the eleven captains who reach Sabaody with a bounty above a hundred million, and she eats while she talks, while she walks and while she threatens. Her manners are a girl’s and her crew follows her without a murmur. She eats and drinks at the expense of whoever is nearest, and never says thank you.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati di Bonney, capitana',
            en: 'Bonney Pirates, captain',
          },
        },
        {
          episode: 1090,
          value: {
            it: 'Pirati di Bonney, su Egghead',
            en: 'Bonney Pirates, on Egghead',
          },
        },
      ],
      origin: [{ episode: 392, value: { it: 'South Blue', en: 'South Blue' } }],
      epithet: [
        { episode: 392, value: { it: 'la Divoratrice', en: 'Big Eater' } },
      ],
      devilFruit: [{ episode: 1099, value: ['age-age-fruit'] }],
      bounty: [{ episode: 392, value: 140_000_000 }],
    },
    'saint-charloss': {
      role: { it: 'Nobile Mondiale', en: 'World Noble' },
      log: {
        it: 'Cammina sull’arcipelago dentro una bolla di vetro, perché l’aria che respirano gli altri non è degna di lui, e spara a chiunque gli passi troppo vicino. Alla casa d’aste compra persone come si comprano i mobili e pretende che la sala si inginocchi. Nessuno reagisce, perché alzare una mano su di lui significa chiamare un ammiraglio.',
        en: 'He walks the archipelago inside a glass bubble, because the air everyone else breathes is beneath him, and shoots whoever comes too close. At the auction house he buys people the way other men buy furniture and expects the room to kneel. Nobody moves against him, because raising a hand to him calls down an admiral.',
      },
      affiliation: [
        {
          episode: 395,
          value: {
            it: 'Nobili Mondiali, Draghi Celesti',
            en: 'World Nobles, Celestial Dragons',
          },
        },
      ],
      origin: [
        { episode: 395, value: { it: 'Mary Geoise', en: 'Mary Geoise' } },
      ],
    },
    'borsalino': {
      chronicle: summitWarChronicles.borsalino,
      role: { it: 'Ammiraglio della Marina', en: 'Marine admiral' },
      log: {
        it: 'Arriva sull’arcipelago in un lampo e attraversa le mangrovie alla velocità della luce, senza per questo smettere di parlare lento. Prende a calci chi gli sta davanti con una gamba che scotta e sembra sempre un po’ annoiato da quello che deve fare. Non ha bisogno di alzare la voce: davanti a lui i pirati smettono di correre.',
        en: 'He arrives on the archipelago in a flash and crosses the mangroves at the speed of light, without once speeding up his drawl. He kicks whoever stands in front of him with a leg that burns, and always looks faintly bored by the errand. He never needs to raise his voice: pirates stop running when he appears.',
      },
      status: [{ episode: 401, value: 'alive' }],
      affiliation: [
        {
          episode: 401,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
      ],
      epithet: [{ episode: 401, value: { it: 'Kizaru', en: 'Kizaru' } }],
      devilFruit: [{ episode: 401, value: ['glint-glint-fruit'] }],
    },
    'sentomaru': {
      role: { it: 'Guardia del corpo', en: 'Bodyguard' },
      log: {
        it: 'Si presenta come la guardia del corpo dello scienziato del Governo e si vanta di avere la difesa più solida del mondo. Porta un’ascia enorme sulla schiena e una cintura da lottatore, e risponde alle domande con una scortesia che sembra studiata. Comanda i giganti corazzati che camminano fra le mangrovie, e li chiama con un ordine secco.',
        en: 'He introduces himself as the Government scientist’s bodyguard and boasts of having the sturdiest defence in the world. A huge axe rides on his back above a wrestler’s belt, and he answers questions with a rudeness that seems rehearsed. He commands the armoured giants walking the mangroves, and calls them with a single flat order.',
      },
      affiliation: [
        {
          episode: 403,
          value: {
            it: 'Marina, guardia del corpo del dottor Vegapunk',
            en: 'Marines, Dr. Vegapunk’s bodyguard',
          },
        },
        {
          episode: 1090,
          value: {
            it: 'Marina, capo della sicurezza di Egghead',
            en: 'Marines, Egghead security chief',
          },
        },
      ],
    },
    'boa-sandersonia': {
      role: { it: 'Sorella dell’imperatrice', en: 'Sister of the empress' },
      log: {
        it: 'È la più alta e la più magra delle tre sorelle, con i capelli verdi raccolti in cima, e sull’isola tutti la chiamano principessa. Nell’arena combatte insieme alla sorella minore e si trasforma in un serpente lungo quanto la gradinata. Sulla schiena porta qualcosa che non mostra a nessuno, e se il mantello scivola si copre di corsa.',
        en: 'She is the tallest and thinnest of the three sisters, her green hair bound up above her head, and everyone on the island calls her princess. In the arena she fights beside her younger sister and turns into a snake as long as the stands. On her back is something she shows to nobody, and when her cloak slips she covers up in a hurry.',
      },
      affiliation: [
        { episode: 412, value: { it: 'Pirate Kuja', en: 'Kuja Pirates' } },
      ],
      origin: [{ episode: 412, value: AMAZON_LILY }],
      devilFruit: [
        { episode: 412, value: ['snake-snake-fruit-model-anaconda'] },
      ],
    },
    'boa-marigold': {
      role: { it: 'Sorella dell’imperatrice', en: 'Sister of the empress' },
      log: {
        it: 'È la più grossa delle tre sorelle e si muove con una lentezza che inganna, perché nell’arena arriva prima di quanto sembri. Diventa un serpente arancione che soffia fuoco dalla bocca, e con la coda spazza via metà del terreno. Anche lei tiene la schiena nascosta sotto il mantello, e alla sorella basta uno sguardo per ricordarglielo.',
        en: 'She is the largest of the three sisters and moves with a slowness that deceives, because in the arena she gets there sooner than she looks. She becomes an orange snake that breathes fire, and her tail sweeps away half the ground. She too keeps her back hidden under a cloak, and a glance from her sister is enough to remind her.',
      },
      affiliation: [
        { episode: 412, value: { it: 'Pirate Kuja', en: 'Kuja Pirates' } },
      ],
      origin: [{ episode: 412, value: AMAZON_LILY }],
      devilFruit: [
        { episode: 412, value: ['snake-snake-fruit-model-king-cobra'] },
      ],
    },
    'marguerite': {
      role: { it: 'Guerriera kuja', en: 'Kuja warrior' },
      log: {
        it: 'Trova un uomo svenuto nella foresta, il primo che vede in vita sua, e invece di ucciderlo lo porta al villaggio e lo nasconde. Caccia con un arco più alto di lei e tira frecce che colpiscono molto più forte di quanto il legno lasci immaginare. Fa domande su tutto quello che sta fuori dall’isola, e non ha mai potuto farle a nessuno.',
        en: 'She finds a man unconscious in the forest, the first she has ever seen, and instead of killing him she carries him to the village and hides him. She hunts with a bow taller than she is and looses arrows that land far harder than the wood suggests. She asks questions about everything outside the island, and has never had anyone to ask.',
      },
      affiliation: [
        {
          episode: 408,
          value: { it: 'Tribù kuja, guerriera', en: 'Kuja tribe, warrior' },
        },
      ],
      origin: [{ episode: 408, value: AMAZON_LILY }],
    },
    'nyon': {
      role: { it: 'Anziana di Amazon Lily', en: 'Elder of Amazon Lily' },
      log: {
        it: 'Vive in una casa in cima al villaggio e legge i giornali che arrivano dal mondo, cosa che sull’isola non fa nessun altro. È stata imperatrice prima di quella attuale, e oggi le due si trattano male in pubblico e si cercano in privato. Da giovane ha lasciato l’isola ed è tornata, e di quegli anni parla poco e malvolentieri.',
        en: 'She lives in a house above the village and reads the newspapers that reach it from the world, which nobody else on the island does. She was empress before the present one, and now the two of them are rude to each other in public and seek each other out in private. She left the island young and came back, and speaks of those years rarely and unwillingly.',
      },
      affiliation: [
        {
          episode: 412,
          value: {
            it: 'Amazon Lily, ex imperatrice e anziana',
            en: 'Amazon Lily, former empress and elder',
          },
        },
      ],
      origin: [{ episode: 412, value: AMAZON_LILY }],
      epithet: [{ episode: 412, value: { it: 'Gloriosa', en: 'Gloriosa' } }],
    },
    'magellan': {
      role: { it: 'Direttore di Impel Down', en: 'Chief warden of Impel Down' },
      log: {
        it: 'Dirige la prigione più profonda del mondo e ne conosce ogni livello, ogni cella e ogni detenuto per nome. Il suo corpo produce veleno senza sosta: gli cola dalle mani, gli esce dalla bocca e non gli serve altro per fermare un evaso. Quello stesso veleno lo tiene chiuso in bagno per ore, e in quelle ore la prigione va avanti da sola.',
        en: 'He runs the deepest prison in the world and knows every level, every cell and every inmate by name. His own body makes poison without pause: it runs off his hands, it comes out of his mouth, and he needs nothing else to stop a man escaping. That same poison keeps him in the lavatory for hours, and in those hours the prison runs itself.',
      },
      affiliation: [
        {
          episode: 424,
          value: {
            it: 'Impel Down, direttore',
            en: 'Impel Down, chief warden',
          },
        },
        {
          episode: 517,
          value: {
            it: 'Impel Down, vicedirettore',
            en: 'Impel Down, vice chief warden',
          },
        },
      ],
      devilFruit: [{ episode: 424, value: ['venom-venom-fruit'] }],
    },
    'hannyabal': {
      role: {
        it: 'Vicedirettore di Impel Down',
        en: 'Vice chief warden of Impel Down',
      },
      log: {
        it: 'Ripete a chiunque lo ascolti che un giorno prenderà il posto del direttore, e lo dice anche davanti al direttore. Porta un copricapo da faraone e una lancia con due lame, e nelle liti con i colleghi si impappina e si corregge da solo. Nessuno lo prende sul serio, ma è lui a restare in piedi quando gli altri sono già a terra.',
        en: 'He tells anyone who will listen that one day he will have the chief warden’s job, and he says it in front of the chief warden too. He wears a pharaoh’s headdress and carries a two-bladed naginata, and in arguments with colleagues he trips over his words and corrects himself. Nobody takes him seriously, yet he is the one still standing when the others are down.',
      },
      affiliation: [
        {
          episode: 423,
          value: {
            it: 'Impel Down, vicedirettore',
            en: 'Impel Down, vice chief warden',
          },
        },
        {
          episode: 517,
          value: {
            it: 'Impel Down, direttore',
            en: 'Impel Down, chief warden',
          },
        },
      ],
    },
    'emporio-ivankov': {
      role: { it: 'Sovrano del livello 5.5', en: 'Ruler of level 5.5' },
      log: {
        it: 'Regna su un livello della prigione che sulle mappe non esiste, un bosco rovesciato dove gli evasi ballano invece di scappare. Con un ago può cambiare il corpo di chiunque, guarire quello che nessun medico guarisce o trasformare un uomo in donna. In cambio chiede sempre qualcosa, e il prezzo lo decide sul momento.',
        en: 'He reigns over a level of the prison that appears on no map, an upside-down wood where escaped inmates dance instead of running. With a needle he can change anybody’s body, heal what no doctor heals, or turn a man into a woman. He always asks for something in return, and settles the price on the spot.',
      },
      affiliation: [
        {
          episode: 438,
          value: {
            it: 'Livello 5.5 di Impel Down, sovrano; Armata Rivoluzionaria, comandante',
            en: 'Impel Down level 5.5, queen; Revolutionary Army, commander',
          },
        },
      ],
      origin: [
        {
          episode: 438,
          value: { it: 'Regno di Kamabakka', en: 'Kamabakka Kingdom' },
        },
      ],
      epithet: [
        {
          episode: 438,
          value: { it: 'Persona dei Miracoli', en: 'Miracle Person' },
        },
      ],
      devilFruit: [{ episode: 438, value: ['horm-horm-fruit'] }],
    },
    'inazuma': {
      role: { it: 'Braccio destro di Ivankov', en: 'Ivankov’s right hand' },
      log: {
        it: 'Sta accanto al sovrano del livello nascosto e parla al posto suo quando serve una risposta seria. Ha le mani che diventano forbici e ritaglia la pietra come si ritaglia la carta, poi piega il pezzo e lo rimette dove gli serve. Di sé non dice nulla a nessuno, e dentro la prigione nessuno glielo chiede.',
        en: 'He stands beside the ruler of the hidden level and speaks for him whenever a serious answer is needed. His hands turn into scissors and cut stone the way scissors cut paper, and then he folds the piece and sets it down where it is needed. About himself he tells nobody anything, and inside the prison nobody asks.',
      },
      affiliation: [
        {
          episode: 438,
          value: {
            it: 'Armata Rivoluzionaria; livello 5.5 di Impel Down',
            en: 'Revolutionary Army; Impel Down level 5.5',
          },
        },
      ],
      devilFruit: [{ episode: 438, value: ['snip-snip-fruit'] }],
    },
    'shiryu': {
      role: { it: 'Ex capo dei secondini', en: 'Former head jailer' },
      log: {
        it: 'Era il capo dei secondini di Impel Down e la prigione lo ha rinchiuso nei propri livelli bassi, perché uccideva i detenuti per il gusto di farlo. Siede nella cella con la spada che gli hanno lasciato accanto, e i guardiani passano davanti senza guardarlo. Il direttore lo considera l’unico detenuto che non vorrebbe mai vedere fuori.',
        en: 'He was the head jailer of Impel Down, and the prison shut him away on its own lower levels because he killed inmates for the pleasure of it. He sits in his cell with the sword they left beside him, and the guards walk past without looking in. The warden counts him as the one inmate he never wants to see outside.',
      },
      affiliation: [
        {
          episode: 445,
          value: {
            it: 'Impel Down, ex capo dei secondini, detenuto',
            en: 'Impel Down, former head jailer, imprisoned',
          },
        },
        { episode: 451, value: BLACKBEARD_CREW },
      ],
      epithet: [
        {
          episode: 445,
          value: { it: 'Shiryu della Pioggia', en: 'Shiryu of the Rain' },
        },
      ],
      devilFruit: [{ episode: 1120, value: ['clear-clear-fruit'] }],
    },
    'jesus-burgess': {
      role: {
        it: 'Timoniere dei Pirati di Barbanera',
        en: 'Helmsman of the Blackbeard Pirates',
      },
      log: {
        it: 'A Mock Town gira per le strade in calzamaglia e sfida i passanti a braccio di ferro, spaccando i tavoli quando vince. Si definisce il campione e nel locale nessuno ha voglia di smentirlo, perché solleva pesi che non dovrebbe riuscire a sollevare. Siede al tavolo del suo capitano e ride della battuta prima ancora che finisca.',
        en: 'In Mock Town he walks the streets in a wrestler’s leotard and challenges passers-by to arm wrestling, splitting the tables when he wins. He calls himself the champion and nobody in the bar cares to argue, because he lifts weights he should not be able to lift. He sits at his captain’s table and laughs at the joke before it is finished.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati di Barbanera, timoniere e campione',
            en: 'Blackbeard Pirates, helmsman and champion',
          },
        },
      ],
      epithet: [{ episode: 151, value: { it: 'il Campione', en: 'Champion' } }],
      devilFruit: [{ episode: 1120, value: ['strong-strong-fruit'] }],
    },
    'van-augur': {
      role: {
        it: 'Tiratore dei Pirati di Barbanera',
        en: 'Gunman of the Blackbeard Pirates',
      },
      log: {
        it: 'È il più alto e il più silenzioso del gruppo che beve a Mock Town, e tiene il fucile appoggiato alle ginocchia anche al tavolo. Vede a distanze che gli altri non coprono nemmeno con il cannocchiale, e quando parla è per dire dove si trova qualcosa. Gli ordini del suo capitano li esegue senza commentarli mai.',
        en: 'He is the tallest and the quietest of the group drinking in Mock Town, and keeps his rifle across his knees even at the table. He sees distances the others cannot cover with a spyglass, and when he speaks it is to say where something is. He carries out his captain’s orders and never once comments on them.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati di Barbanera, tiratore',
            en: 'Blackbeard Pirates, sniper',
          },
        },
      ],
      epithet: [
        { episode: 151, value: { it: 'il Supersonico', en: 'the Supersonic' } },
      ],
      devilFruit: [{ episode: 1120, value: ['warp-warp-fruit'] }],
    },
    'doc-q': {
      role: {
        it: 'Medico dei Pirati di Barbanera',
        en: 'Doctor of the Blackbeard Pirates',
      },
      log: {
        it: 'È il medico della ciurma ed è anche l’uomo più malato che si veda a Mock Town: tossisce a ogni frase e si regge appena in sella. Gira su un cavallo magro quanto lui e offre mele a chi incontra, lasciando scegliere se accettarle. Il suo capitano lo tiene accanto e ride della sua sfortuna come di uno scherzo riuscito.',
        en: 'He is the crew’s doctor and also the sickest man in Mock Town: he coughs through every sentence and barely stays in the saddle. He rides a horse as thin as himself and offers apples to whoever he meets, leaving them to decide whether to take one. His captain keeps him close and laughs at his bad luck as if it were a good joke.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati di Barbanera, medico',
            en: 'Blackbeard Pirates, doctor',
          },
        },
      ],
      epithet: [
        { episode: 151, value: { it: 'la Morte', en: 'the Grim Reaper' } },
      ],
      devilFruit: [{ episode: 1120, value: ['sick-sick-fruit'] }],
    },
    'laffitte': {
      role: {
        it: 'Navigatore dei Pirati di Barbanera',
        en: 'Navigator of the Blackbeard Pirates',
      },
      log: {
        it: 'Entra dalla finestra nella sala dove il Governo ha convocato la Flotta dei Sette, con il cilindro in testa e il bastone in mano, e nessuno lo ferma. Propone il nome del suo capitano per il posto rimasto vuoto al tavolo e se ne va come se avesse consegnato un invito. Prima di fare il pirata era uno sceriffo nel West Blue.',
        en: 'He comes in through the window of the room where the Government has summoned the Seven Warlords, top hat on and cane in hand, and nobody stops him. He puts his captain’s name forward for the empty seat at the table and leaves as though he had delivered an invitation. Before he turned pirate he was a sheriff in the West Blue.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati di Barbanera, navigatore; ex sceriffo del West Blue',
            en: 'Blackbeard Pirates, navigator; former West Blue sheriff',
          },
        },
      ],
      origin: [{ episode: 151, value: { it: 'West Blue', en: 'West Blue' } }],
      epithet: [
        {
          episode: 151,
          value: { it: 'lo Sceriffo Demone', en: 'Demon Sheriff' },
        },
      ],
    },
    'catarina-devon': {
      role: {
        it: 'Prigioniera del sesto livello',
        en: 'Prisoner of the sixth level',
      },
      log: {
        it: 'Sta rinchiusa nel livello più profondo di Impel Down, quello che sui registri non compare, insieme ai detenuti che il mondo considera già morti. Porta una lama a mezzaluna e ride piano quando le sbarre si aprono e qualcuno le offre di uscire. Quello che ha fatto per finire laggiù non è scritto da nessuna parte.',
        en: 'She is held on the deepest level of Impel Down, the one the registers do not mention, among the inmates the world already counts as dead. She carries a crescent blade and laughs quietly when the bars come open and somebody offers to take her out. What she did to end up down there is written nowhere at all.',
      },
      affiliation: [
        {
          episode: 450,
          value: {
            it: 'Prigioniera del sesto livello di Impel Down',
            en: 'Prisoner of Impel Down level 6',
          },
        },
        { episode: 451, value: BLACKBEARD_CREW },
      ],
      epithet: [
        {
          episode: 450,
          value: {
            it: 'Cacciatrice della Luna Crescente',
            en: 'Crescent Moon Hunter',
          },
        },
      ],
      devilFruit: [
        {
          episode: 1120,
          value: ['dog-dog-fruit-mythical-model-nine-tailed-fox'],
        },
      ],
    },
    'vasco-shot': {
      role: LEVEL_SIX_ROLE,
      log: {
        it: 'Nel livello più profondo della prigione beve da una zucca enorme che non gli hanno mai tolto, e la lingua gli penzola fuori mentre parla. Quando le celle si aprono non si alza di corsa: finisce prima quello che ha nel recipiente. Il Governo lo ha sepolto laggiù e ha cancellato il suo nome dagli elenchi che i giornali possono vedere.',
        en: 'On the deepest level of the prison he drinks from an enormous gourd nobody ever took off him, tongue hanging out while he talks. When the cells come open he does not leap up: he finishes what is in the vessel first. The Government buried him down there and struck his name from every list a newspaper can see.',
      },
      affiliation: [
        { episode: 450, value: LEVEL_SIX },
        { episode: 451, value: BLACKBEARD_CREW },
      ],
      epithet: [
        { episode: 450, value: { it: 'il Beone', en: 'Heavy Drinker' } },
      ],
      devilFruit: [{ episode: 1120, value: ['gabu-gabu-fruit'] }],
    },
    'san-juan-wolf': {
      role: LEVEL_SIX_ROLE,
      log: {
        it: 'È talmente grande che il livello più profondo di Impel Down gli sta stretto: da seduto la testa arriva comunque al soffitto. Lo tengono incatenato a una parete e addormentato, perché da sveglio non esisterebbe cella capace di contenerlo. Quando le sbarre si aprono si mette in piedi, e il rumore arriva fino ai piani di sopra.',
        en: 'He is so large that the deepest level of Impel Down is a tight fit: seated, his head still reaches the ceiling. They keep him chained to a wall and asleep, because awake there is no cell that would hold him. When the bars come open he stands up, and the sound of it carries to the floors above.',
      },
      affiliation: [
        { episode: 450, value: LEVEL_SIX },
        { episode: 451, value: BLACKBEARD_CREW },
      ],
      epithet: [
        {
          episode: 450,
          value: { it: 'Nave da Guerra Colossale', en: 'Colossal Battleship' },
        },
      ],
      devilFruit: [{ episode: 1120, value: ['huge-huge-fruit'] }],
    },
    'avalo-pizarro': {
      role: LEVEL_SIX_ROLE,
      log: {
        it: 'Ha la testa coronata di corna e la voce di chi un tempo dava ordini a un regno intero, e adesso li dà alle pareti della cella. Nel livello più profondo di Impel Down non ha smesso di comportarsi da sovrano, e i detenuti accanto lo lasciano fare. Quando qualcuno apre le sbarre si aspetta che sia venuto a servirlo.',
        en: 'His head is crowned with horns and he has the voice of a man who once gave orders to a kingdom, and now gives them to the walls of his cell. On the deepest level of Impel Down he has not stopped behaving like a sovereign, and the inmates beside him let him get on with it. When someone opens the bars he assumes they came to serve him.',
      },
      affiliation: [
        { episode: 450, value: LEVEL_SIX },
        { episode: 451, value: BLACKBEARD_CREW },
      ],
      epithet: [
        { episode: 450, value: { it: 'il Re Corrotto', en: 'Corrupt King' } },
      ],
      devilFruit: [{ episode: 1120, value: ['island-island-fruit'] }],
    },
    'sakazuki': {
      chronicle: summitWarChronicles.sakazuki,
      role: { it: 'Ammiraglio della Marina', en: 'Marine admiral' },
      log: {
        it: 'Siede al quartier generale fra gli altri due ammiragli e non discute mai l’ordine che ha ricevuto: lo esegue fino in fondo. Il suo corpo diventa magma, e quando si muove il cappello e le spalline fumano ancora prima del colpo. Della giustizia ha una sola idea e non ammette che esistano casi particolari.',
        en: 'He sits at headquarters between the other two admirals and never argues with an order he has been given: he carries it all the way through. His body turns to magma, and when he moves his cap and epaulettes are smoking before the blow even lands. He holds one idea of justice and allows no special cases.',
      },
      status: [{ episode: 463, value: 'alive' }],
      affiliation: [
        {
          episode: 463,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
        {
          episode: 517,
          value: {
            it: 'Marina, grand’ammiraglio',
            en: 'Marines, fleet admiral',
          },
        },
      ],
      epithet: [{ episode: 463, value: { it: 'Akainu', en: 'Akainu' } }],
      devilFruit: [{ episode: 463, value: ['magma-magma-fruit'] }],
    },
    'jozu': {
      role: {
        it: 'Comandante della terza divisione',
        en: 'Third division commander',
      },
      log: {
        it: 'Comanda la terza divisione della ciurma di Barbabianca ed è largo quanto una porta, con un braccio solo che basta a spostare una nave. Si copre il corpo di diamante e incassa colpi che dovrebbero attraversarlo, restando dove si trova. Parla poco e sta vicino al vecchio, perché è lì che serve.',
        en: 'He commands the third division of Whitebeard’s crew, as wide as a doorway, with one arm enough to shift a ship. He covers his body in diamond and takes blows that ought to go straight through him without giving ground. He says little and stays near the old man, because that is where he is needed.',
      },
      affiliation: [
        {
          episode: 461,
          value: {
            it: 'Pirati di Barbabianca, comandante della terza divisione',
            en: 'Whitebeard Pirates, third division commander',
          },
        },
        {
          episode: 517,
          value: {
            it: 'Pirati di Barbabianca, superstite',
            en: 'Whitebeard Pirates, remnant',
          },
        },
      ],
      epithet: [
        { episode: 461, value: { it: 'Jozu il Diamante', en: 'Diamond Jozu' } },
      ],
      devilFruit: [{ episode: 461, value: ['sparkle-sparkle-fruit'] }],
    },
    'vista': {
      role: {
        it: 'Comandante della quinta divisione',
        en: 'Fifth division commander',
      },
      log: {
        it: 'Comanda la quinta divisione con due spade e i baffi arricciati, e si muove come se fosse a un ballo invece che in battaglia. Nella baia tiene la prima linea davanti alla nave del vecchio, e nessuno la passa. Fra i comandanti è quello che alza meno la voce e che sorride di più.',
        en: 'He commands the fifth division with two swords and curled moustaches, and moves as though he were at a ball rather than a battle. In the bay he holds the front line before the old man’s ship, and nobody gets past it. Of all the commanders he raises his voice least and smiles most.',
      },
      affiliation: [
        {
          episode: 461,
          value: {
            it: 'Pirati di Barbabianca, comandante della quinta divisione',
            en: 'Whitebeard Pirates, fifth division commander',
          },
        },
      ],
      epithet: [
        { episode: 461, value: { it: 'Spada Fiorita', en: 'Flower Sword' } },
      ],
    },
    'squard': {
      role: {
        it: 'Capitano alleato di Barbabianca',
        en: 'Captain allied to Whitebeard',
      },
      log: {
        it: 'Guida una delle ciurme alleate e porta la sua nave in prima fila nella baia, davanti a tutte le altre bandiere. Chiama padre Barbabianca e lo dice davanti ai suoi uomini senza abbassare la voce. È il primo degli alleati a rispondere quando il vecchio chiama, e l’ultimo a chiedere perché.',
        en: 'He leads one of the allied crews and takes his ship into the front line of the bay, ahead of every other flag. He calls Whitebeard father and says it in front of his own men without lowering his voice. He is the first of the allies to answer when the old man calls, and the last to ask why.',
      },
      affiliation: [
        {
          episode: 462,
          value: {
            it: 'Pirati del Ragno di Mare, capitano; alleato di Barbabianca',
            en: 'Maelstrom Spider Pirates, captain; Whitebeard’s ally',
          },
        },
      ],
      epithet: [
        {
          episode: 462,
          value: { it: 'Ragno di Mare', en: 'Maelstrom Spider' },
        },
      ],
    },
    'little-oars-jr': {
      role: {
        it: 'Capitano dei Pirati Little',
        en: 'Captain of the Little Pirates',
      },
      log: {
        it: 'È un gigante talmente alto che le navi nella baia gli arrivano alla vita, e porta in testa un cappello di paglia intrecciata grande come una vela. Si è alleato con Barbabianca e avanza da solo verso il muro della Marina, senza aspettare che gli altri lo seguano. Discende da un uomo di cui a bordo si racconta ancora.',
        en: 'He is a giant so tall that the ships in the bay reach only his waist, and he wears a hat of woven straw as broad as a sail. He has allied himself with Whitebeard and walks alone at the Marine wall, without waiting for anyone to follow him. He is descended from a man the crews still tell stories about.',
      },
      affiliation: [
        {
          episode: 466,
          value: {
            it: 'Pirati Little, capitano; alleato di Barbabianca',
            en: 'Little Pirates, captain; Whitebeard’s ally',
          },
        },
      ],
      bounty: [{ episode: 466, value: 550_000_000 }],
    },
    'tsuru': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'Siede nella sala del quartier generale fra il grand’ammiraglio e i tre ammiragli, unica donna al tavolo, e nessuno le parla sopra. Ha l’età per essere la nonna di chiunque nella stanza e l’autorità di chi comanda una flotta. Le sue mani strizzano un uomo come si strizza un panno bagnato, e poi lo stendono ad asciugare.',
        en: 'She sits in the headquarters room between the fleet admiral and the three admirals, the only woman at the table, and nobody talks over her. She is old enough to be grandmother to anyone present and carries the authority of a fleet commander. Her hands wring a man out the way you wring a wet cloth, then hang him up to dry.',
      },
      affiliation: [
        {
          episode: 461,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      epithet: [
        {
          episode: 461,
          value: {
            it: 'Grande Ufficiale di Stato Maggiore',
            en: 'Great Staff Officer',
          },
        },
      ],
      devilFruit: [{ episode: 461, value: ['wash-wash-fruit'] }],
    },
    'momonga': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'Sbarca su un’isola dove agli uomini è vietato mettere piede, con l’ordine di consegnare una convocazione all’imperatrice e nessuna voglia di discutere. Tiene gli occhi bassi per tutto il tempo, e quando lo sguardo di lei lo raggiunge si conficca una lama nella gamba per non cedere. Aspetta la risposta e riparte senza aggiungere altro.',
        en: 'He lands on an island where men are forbidden to set foot, carrying a summons for the empress and no wish to argue about it. He keeps his eyes down the whole time, and when her gaze reaches him he drives a blade into his own leg rather than give way. He waits for the answer and sails off without another word.',
      },
      affiliation: [
        {
          episode: 410,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
    },
    'curly-dadan': {
      role: {
        it: 'Capo dei briganti di montagna',
        en: 'Boss of the mountain bandits',
      },
      log: {
        it: 'Comanda una banda di briganti sul monte Colubo e paga la Marina per essere lasciata in pace, cosa che le è costata due bambini da crescere. Urla a tutti, si lamenta di tutto e mette in tavola più cibo di quanto quei due possano mangiare. Quando tornano pieni di lividi finge di non guardarli, e intanto li conta.',
        en: 'She runs a band of bandits on Mount Colubo and pays the Marines to be left alone, which has cost her two children to raise. She shouts at everyone, complains about everything, and puts more food on the table than the two of them could ever finish. When they come home covered in bruises she pretends not to look, and counts them.',
      },
      affiliation: [
        {
          episode: 493,
          value: {
            it: 'Famiglia Dadan, briganti di montagna, capo',
            en: 'Dadan Family, mountain bandits, boss',
          },
        },
      ],
      origin: [
        {
          episode: 493,
          value: {
            it: 'Monte Colubo, Regno di Goa, East Blue',
            en: 'Mount Colubo, Goa Kingdom, East Blue',
          },
        },
      ],
      bounty: [{ episode: 493, value: 7_800_000 }],
    },
    'sabo': {
      chronicle: summitWarChronicles.sabo,
      role: {
        it: 'Fratello giurato di Rufy e Ace',
        en: 'Sworn brother of Luffy and Ace',
      },
      log: {
        it: 'È un bambino nato in una famiglia ricca del regno e scappato di casa, che vive fra i rottami e si costruisce una barca di nascosto. Con Ace e Rufy divide il bottino, le botte e un tubo di ferro usato come arma. In una radura dei boschi i tre bevono da tre tazze e si dichiarano fratelli, senza dirlo a nessun altro.',
        en: 'He is a boy born into a rich family of the kingdom who ran away from it, living among the scrap and quietly building himself a boat. With Ace and Luffy he shares the loot, the beatings and a length of iron pipe used as a weapon. In a clearing in the woods the three of them drink from three cups and call each other brothers, and tell nobody.',
      },
      status: [
        { episode: 497, value: 'alive' },
        { episode: 503, value: 'presumed-dead' },
        { episode: 663, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 497,
          value: {
            it: 'Famiglia Dadan, fratello giurato di Rufy e Ace',
            en: 'Dadan Family, sworn brother of Luffy and Ace',
          },
        },
        {
          episode: 663,
          value: {
            it: 'Armata Rivoluzionaria, capo di stato maggiore',
            en: 'Revolutionary Army, chief of staff',
          },
        },
      ],
      origin: [
        {
          episode: 497,
          value: {
            it: 'Regno di Goa, East Blue',
            en: 'Goa Kingdom, East Blue',
          },
        },
      ],
      epithet: [
        {
          episode: 663,
          value: { it: 'Imperatore delle Fiamme', en: 'Flame Emperor' },
        },
      ],
      devilFruit: [{ episode: 678, value: ['flame-flame-fruit'] }],
      bounty: [{ episode: 878, value: 602_000_000 }],
    },
    'portgas-d-rouge': {
      role: { it: 'Madre di Ace', en: 'Ace’s mother' },
      log: {
        it: 'Ha aspettato il figlio venti mesi invece di nove, trattenendolo dentro di sé perché la Marina cercava il bambino del Re dei Pirati e setacciava le isole. Ha tenuto duro finché non è nato, e poi ha avuto il tempo di dargli un nome e niente di più. Sull’isola dove è morta nessuno sapeva chi fosse il padre.',
        en: 'She carried her son for twenty months instead of nine, holding him inside her because the Marines were combing the islands for the Pirate King’s child. She held on until he was born, and then had time enough to give him a name and nothing more. On the island where she died, nobody knew who the father was.',
      },
      status: [{ episode: 493, value: 'deceased' }],
      affiliation: [
        { episode: 493, value: { it: 'Madre di Ace', en: 'Ace’s mother' } },
      ],
      origin: [
        {
          episode: 493,
          value: { it: 'Baterilla, South Blue', en: 'Baterilla, South Blue' },
        },
      ],
    },
  },
}
