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
// Shown at 484 as the Blackbeard Pirates, the erased criminals of level 6.
const LEVEL_SIX_ESCAPEE = {
  it: 'Pirati di Barbanera; ex prigioniero del sesto livello di Impel Down',
  en: 'Blackbeard Pirates; former prisoner of Impel Down level 6',
}
const BLACKBEARD_ROLE = { it: 'Pirata di Barbanera', en: 'Blackbeard pirate' }
const CELESTIAL_DRAGONS = {
  it: 'Nobili Mondiali, Draghi Celesti',
  en: 'World Nobles, Celestial Dragons',
}
const MARY_GEOISE = { it: 'Mary Geoise', en: 'Mary Geoise' }
const KUJA_WARRIOR = { it: 'Tribù kuja, guerriera', en: 'Kuja tribe, warrior' }
const KUJA_WARRIOR_ROLE = { it: 'Guerriera kuja', en: 'Kuja warrior' }

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
        it: 'Un capitano dai capelli rossi con una taglia più alta di quella di Rufy per via dei civili che ha ucciso, e che non sopporta di essere guardato dall’alto.',
        en: 'A red-haired captain whose bounty is higher than Luffy’s because of the civilians he has killed, and who cannot stand being looked down on.',
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
      id: 'marineford-arc',
      kind: 'arc',
      revealedAtEpisode: 457,
      revealedAtChapter: 550,
      // Momonga names Marineford at 410, long before the war takes the story there.
      nameSaidAt: 410,
      name: { it: 'Marineford', en: 'Marineford' },
      summary: {
        it: 'La Marina e i pirati più forti del mondo si trovano nello stesso porto, nello stesso giorno.',
        en: 'The Marines and the strongest pirates in the world end up in the same harbour on the same day.',
      },
      visual: { art: 'marineford-arc', tint: 'blue' },
    },
    {
      id: 'post-war',
      kind: 'arc',
      revealedAtEpisode: 490,
      revealedAtChapter: 581,
      name: { it: 'Dopoguerra', en: 'Post-War' },
      summary: {
        it: 'La guerra è finita e il mondo festeggia la vittoria della Marina, mentre i pirati contro cui è stata combattuta tornano a muoversi su tutti i mari.',
        en: 'The war is over and the world celebrates a Marine victory, while the pirates it was fought against start moving again across every sea.',
      },
      visual: { art: 'post-war', tint: 'ivory' },
    },
    {
      id: 'sabaody',
      kind: 'arc',
      revealedAtEpisode: 385,
      revealedAtChapter: 490,
      name: { it: 'Arcipelago Sabaody', en: 'Sabaody Archipelago' },
      summary: {
        it: 'La ciurma arriva alla Red Line, a metà della Rotta Maggiore, e cerca una via per scendere all’isola che sta in fondo al mare.',
        en: 'The crew reach the Red Line, halfway along the Grand Line, and look for a way down to the island on the ocean floor.',
      },
      visual: { art: 'sabaody', tint: 'acid' },
    },
    {
      id: 'amazon-lily-arc',
      kind: 'arc',
      revealedAtEpisode: 408,
      revealedAtChapter: 514,
      name: { it: 'Amazon Lily', en: 'Amazon Lily' },
      summary: {
        it: 'Un’isola di giungla abitata da una tribù di guerriere, dove un uomo che mette piede a terra rischia la vita.',
        en: 'A jungle island home to a tribe of women warriors, where any man who sets foot ashore risks his life.',
      },
      visual: { art: 'amazon-lily-arc', tint: 'magenta' },
    },
    {
      id: 'impel-down-arc',
      kind: 'arc',
      revealedAtEpisode: 422,
      revealedAtChapter: 525,
      name: { it: 'Impel Down', en: 'Impel Down' },
      summary: {
        it: 'La prigione del Governo Mondiale, una torre che scende nel mare di livello in livello e da cui non è mai uscito nessuno.',
        en: 'The prison of the World Government, a tower sinking into the sea one marked level after another, out of which nobody has ever walked.',
      },
      visual: { art: 'impel-down-arc', tint: 'wine' },
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
      revealedAtEpisode: 392,
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
        it: 'Un vecchio artigiano del rivestimento, chiuso fra gli schiavi in vendita alla casa d’aste, che stende una sala intera di uomini armati senza toccarne uno.',
        en: 'An old coating craftsman, held backstage among the slaves for sale at the auction house, who drops a whole hall of armed men without laying a hand on any of them.',
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
        it: 'Un combattente dei Pirati di Kid, con un casco che gli copre tutta la testa e due lame lunghe e ricurve fissate ai guanti.',
        en: 'A combatant of the Kid Pirates, a helmet covering his whole head and a long curved blade fixed to each of his gauntlets.',
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
        it: 'Un orso polare in tuta arancione e stivaletti marroni che sta in piedi come un uomo, uno della ciurma dei Pirati Heart.',
        en: 'A polar bear in an orange boiler suit and small brown boots who stands like a man, one of the crew of the Heart Pirates.',
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
        it: 'Un capitano che legge i tarocchi al tavolo e dice a chi gli sta intorno cosa gli riserva il destino, fino ai vestiti macchiati.',
        en: 'A captain who reads tarot cards at his table and tells the people around him what fate has in store for them, down to stained clothes.',
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
        it: 'Un capitano in gessato che parla come un padrino e che la ciurma chiama padre, e che non riesce a mangiare in pace se al tavolo accanto qualcuno non ha maniere.',
        en: 'A captain in pinstripes who talks like a don, whose crew calls him father, and who cannot eat in peace while someone at the next table has no manners.',
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
      revealedAtEpisode: 396,
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
        it: 'Un ammiraglio della Marina che atterra sull’arcipelago in piedi su una palla di cannone, con gli occhiali storti e la voce di chi non ha fretta.',
        en: 'A Marine admiral who lands on the archipelago riding a cannonball, spectacles askew and the voice of a man in no hurry at all.',
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
        it: 'Una delle due sorelle dell’imperatrice, altissima e magra, che nell’arena si trasforma in un lungo serpente verde.',
        en: 'One of the empress’s two sisters, tall and thin, who turns into a long green snake in the arena.',
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
        it: 'L’altra sorella dell’imperatrice, enorme e pesante, che nell’arena diventa un serpente arancione.',
        en: 'The empress’s other sister, huge and heavy, who turns into an orange snake in the arena.',
      },
      visual: { art: 'boa-marigold', tint: 'orange' },
    },
    // Filed at 409 (ch. 515), where the Kuja first draw their snakes as bows:
    // she is found in 408, but her drawing is the bow.
    {
      id: 'marguerite',
      kind: 'character',
      revealedAtEpisode: 409,
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
      revealedAtEpisode: 425,
      revealedAtChapter: 530,
      name: { it: 'Magellan', en: 'Magellan' },
      summary: {
        it: 'Il direttore di Impel Down, un uomo enorme e cornuto che a colazione mangia zuppa velenosa e passa in bagno più tempo che in ufficio.',
        en: 'The chief warden of Impel Down, a horned giant of a man who eats poison soup for breakfast and spends more time in the lavatory than at his desk.',
      },
      visual: { art: 'magellan', tint: 'violet' },
    },
    // Filed at 425 (ch. 528), where he sits in the chief warden's chair and
    // says it will be his: he greets the visitors in 422, but his drawing is
    // the chair.
    {
      id: 'hannyabal',
      kind: 'character',
      revealedAtEpisode: 425,
      revealedAtChapter: 530,
      name: { it: 'Hannyabal', en: 'Hannyabal' },
      summary: {
        it: 'Il vicedirettore di Impel Down, con un copricapo da faraone, che sogna a voce alta il posto del suo capo.',
        en: 'The vice chief warden of Impel Down, in a pharaoh’s headdress, who covets his boss’s chair out loud.',
      },
      visual: { art: 'hannyabal', tint: 'sand' },
    },
    {
      id: 'shiki',
      kind: 'character',
      revealedAtEpisode: 425,
      revealedAtChapter: 962,
      // The anime names him at Impel Down, the manga only in Roger's past:
      // too far apart to anchor the chapter table (`~/data/chapters`).
      unanchored: true,
      name: { it: 'Shiki', en: 'Shiki' },
      summary: {
        it: 'Il pirata che Sengoku ricorda quando viene a sapere che Rufy si è infiltrato a Impel Down: vent’anni fa è stato il primo e unico prigioniero a evaderne.',
        en: 'The pirate Sengoku remembers on hearing that Luffy has broken into Impel Down: twenty years ago he became the first and only prisoner ever to escape it.',
      },
      visual: { art: 'shiki', tint: 'yellow' },
    },
    {
      id: 'emporio-ivankov',
      kind: 'character',
      revealedAtEpisode: 438,
      revealedAtChapter: 540,
      name: { it: 'Emporio Ivankov', en: 'Emporio Ivankov' },
      summary: {
        it: 'Il sovrano di un livello nascosto della prigione, con una gran testa di capelli viola, leggendaria regina del Regno di Kamabakka che i detenuti chiamano la Persona dei Miracoli.',
        en: 'The ruler of a hidden level of the prison, crowned with a great head of violet hair, the legendary Queen of Kamabakka Kingdom whom the inmates call the Miracle Person.',
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
        it: 'Un uomo che trova Rufy e Von Clay mezzi assiderati dentro la prigione e li porta al sicuro, in un livello che non dovrebbe esistere.',
        en: 'A man who finds Luffy and Bon Clay half frozen inside the prison and carries them to safety, on a level that should not exist.',
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
        it: 'L’ex capo dei secondini di Impel Down, rinchiuso nella sua stessa prigione per aver ucciso troppi detenuti, a cui il direttore rende la sua lunga spada quando lo libera per combattere.',
        en: 'The former head jailer of Impel Down, locked inside his own prison for killing too many inmates, given back his long sword when the chief warden lets him out to fight.',
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
        it: 'Un omone mascherato che si fa chiamare il Campione e a Mock Town grida dai tetti in cerca di un avversario degno.',
        en: 'A huge masked man who calls himself the Champion and shouts from the rooftops of Mock Town for an opponent worth the trouble.',
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
        it: 'Un uomo pallido in cilindro e bastone che si infila non visto nella riunione della Flotta dei Sette e propone il nome del suo capitano.',
        en: 'A pale man in a top hat with a cane, who slips unseen into the Warlords’ meeting and puts his captain’s name forward.',
      },
      visual: { art: 'laffitte', tint: 'ivory' },
    },
    {
      id: 'sabaody-archipelago',
      kind: 'place',
      revealedAtEpisode: 390,
      revealedAtChapter: 496,
      name: { it: 'Arcipelago Sabaody', en: 'Sabaody Archipelago' },
      summary: {
        it: 'Una foresta di mangrovie giganti in mezzo al mare, ogni albero un’isola numerata con la sua città, e bolle che salgono dalle radici.',
        en: 'A forest of giant mangroves out at sea, each tree a numbered island with its own town, and bubbles rising from the roots.',
      },
      visual: { art: 'sabaody-archipelago', tint: 'cyan' },
    },
    {
      id: 'catarina-devon',
      kind: 'character',
      revealedAtEpisode: 484,
      revealedAtChapter: 577,
      name: { it: 'Catarina Devon', en: 'Catarina Devon' },
      summary: {
        it: 'Una pirata che chiamano la donna più pericolosa del mondo, comparsa sul patibolo di Marineford accanto a Barbanera fra i criminali che il mondo ha cancellato.',
        en: 'A pirate called the most dangerous woman in the world, appearing on the Marineford scaffold beside Blackbeard among the criminals the world has erased.',
      },
      visual: { art: 'catarina-devon', tint: 'lavender' },
    },
    {
      id: 'vasco-shot',
      kind: 'character',
      revealedAtEpisode: 484,
      revealedAtChapter: 577,
      name: { it: 'Vasco Shot', en: 'Vasco Shot' },
      summary: {
        it: 'Un pirata chiamato il Beone, uno dei criminali così crudeli che i giornali si rifiutavano di nominarli, ricomparso a Marineford fra i Pirati di Barbanera.',
        en: 'A pirate called the Heavy Drinker, one of the criminals so cruel the papers refused to mention them, back in sight at Marineford among the Blackbeard Pirates.',
      },
      visual: { art: 'vasco-shot', tint: 'orange' },
    },
    {
      id: 'san-juan-wolf',
      kind: 'character',
      revealedAtEpisode: 484,
      revealedAtChapter: 577,
      name: { it: 'San Juan Wolf', en: 'San Juan Wolf' },
      summary: {
        it: 'Un pirata chiamato Nave da Guerra Colossale, il più grande di tutti gli esseri viventi, che spunta da dietro il quartier generale della Marina insieme ai Pirati di Barbanera.',
        en: 'A pirate called the Colossal Battleship, the biggest of all living things, rising from behind Marine headquarters with the Blackbeard Pirates.',
      },
      visual: { art: 'san-juan-wolf', tint: 'sand' },
    },
    {
      id: 'avalo-pizarro',
      kind: 'character',
      revealedAtEpisode: 484,
      revealedAtChapter: 577,
      name: { it: 'Avalo Pizarro', en: 'Avalo Pizarro' },
      summary: {
        it: 'Un pirata chiamato il Re Corrotto, uno dei criminali che il mondo ha cancellato per la loro crudeltà, ricomparso sul patibolo di Marineford accanto a Barbanera.',
        en: 'A pirate called the Corrupt King, one of the criminals whose existence the world erased for their brutality, back in sight on the Marineford scaffold beside Blackbeard.',
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
        it: 'Un ammiraglio della Marina in completo cremisi, con il viso nascosto sotto la visiera del cappello, che trasforma il pugno in magma.',
        en: 'A Marine admiral in a crimson suit, his face hidden under the peak of his cap, whose fist turns to magma.',
      },
      visual: { art: 'sakazuki', tint: 'vermilion' },
    },
    {
      id: 'jozu',
      kind: 'character',
      revealedAtEpisode: 463,
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
        it: 'Il capitano di una ciurma del Nuovo Mondo alleata di Barbabianca, che manda i suoi uomini in battaglia nella baia per salvare Ace.',
        en: 'The captain of a New World crew allied to Whitebeard, who sends his men into the battle in the bay to save Ace.',
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
        it: 'Un viceammiraglio anziano della Marina, che al quartier generale, prima dell’esecuzione di Ace, dice a Garp che non è colpa sua.',
        en: 'An elderly Marine vice admiral who, at headquarters before Ace’s execution, tells Garp that it is not his fault.',
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
    // Named in chapter 550, but filed at 582 with the episode: the Post-War
    // shelf she sits on opens at chapter 581, and rounding up is the safe way.
    {
      id: 'portgas-d-rouge',
      kind: 'character',
      revealedAtEpisode: 493,
      revealedAtChapter: 582,
      name: { it: 'Portuguese D. Rouge', en: 'Portgas D. Rouge' },
      summary: {
        it: 'La madre di Ace, che ha tenuto il figlio in grembo venti mesi per sottrarlo alla Marina e non è sopravvissuta al parto.',
        en: 'Ace’s mother, who carried her son for twenty months to keep him out of the hands of the Marines and did not survive the birth.',
      },
      visual: { art: 'portgas-d-rouge', tint: 'orange' },
    },
    // Seen from episode 391, but only captioned there by the subtitles; the
    // doorman of the auction house is the first to say the name, at 394.
    {
      id: 'rosward',
      kind: 'character',
      revealedAtEpisode: 394,
      revealedAtChapter: 501,
      name: { it: 'Sant Roswald', en: 'Saint Roswald' },
      summary: {
        it: 'Un Nobile Mondiale che rimprovera la figlia per aver rotto un altro pezzo della sua collezione di capitani pirati, e alla casa d’aste viene solo a guardare.',
        en: 'A World Noble who scolds his daughter for breaking another piece of his collection of pirate captains, and comes to the auction house only to watch.',
      },
      visual: { art: 'rosward', tint: 'ocher' },
    },
    {
      id: 'shalria',
      kind: 'character',
      revealedAtEpisode: 394,
      revealedAtChapter: 501,
      name: { it: 'Santa Shalulia', en: 'Saint Shalria' },
      summary: {
        it: 'Una Nobile Mondiale che prende a calci lo schiavo crollato a terra, gli spara perché ormai è inutile e chiede al padre un gigante come prossimo acquisto.',
        en: 'A World Noble who kicks her collapsed slave where he lies, shoots him because he is of no more use, and asks her father for a giant next.',
      },
      visual: { art: 'shalria', tint: 'magenta' },
    },
    // On screen from episode 394; filed at 395, where he opens the auction
    // under his own name.
    {
      id: 'disco',
      kind: 'character',
      revealedAtEpisode: 395,
      revealedAtChapter: 501,
      name: { it: 'Disco', en: 'Disco' },
      summary: {
        it: 'Il banditore della casa d’aste dell’arcipelago, occhiali a stella e complici in sala per gonfiare i prezzi, che schiaffeggia una sirena perché gli ha fatto la linguaccia.',
        en: 'The auctioneer of the archipelago’s auction house, in star-shaped glasses and with plants in the crowd to push prices up, who slaps a mermaid for sticking out her tongue.',
      },
      visual: { art: 'disco', tint: 'violet' },
    },
    // On screen from episode 391 as the slave crawling behind his master, but
    // nobody says his name until Law does, at 399.
    {
      id: 'jean-bart',
      kind: 'character',
      revealedAtEpisode: 399,
      revealedAtChapter: 505,
      name: { it: 'Jean Bart', en: 'Jean Bart' },
      summary: {
        it: 'Un omone in catene che un Nobile Mondiale portava a quattro zampe, finché un chirurgo gli apre il collare e lo chiama col suo vecchio nome di capitano.',
        en: 'A huge man in chains whom a World Noble walked on all fours, until a surgeon opens his collar and calls him by his old captain’s name.',
      },
      visual: { art: 'jean-bart', tint: 'red' },
    },
    {
      id: 'sweet-pea',
      kind: 'character',
      revealedAtEpisode: 409,
      revealedAtChapter: 515,
      name: { it: 'Sweet Pea', en: 'Sweet Pea' },
      summary: {
        it: 'Una guerriera kuja che segue una colonna di fumo nella foresta, trova un ragazzo coperto di funghi e prova a strappargli anche l’ultimo, che si allunga invece di staccarsi.',
        en: 'A Kuja warrior who follows a column of smoke into the forest, finds a boy covered in mushrooms, and tries to pull off the last one, which only stretches.',
      },
      visual: { art: 'sweet-pea', tint: 'acid' },
    },
    {
      id: 'aphelandra',
      kind: 'character',
      revealedAtEpisode: 409,
      revealedAtChapter: 515,
      name: { it: 'Aphelandra', en: 'Aphelandra' },
      summary: {
        it: 'Una guerriera kuja alta il doppio delle compagne, che obbedisce allegra a ogni ordine e porta fino al villaggio un ragazzo coperto di funghi.',
        en: 'A Kuja warrior twice the height of her companions, who cheerfully answers every order and carries a boy covered in mushrooms all the way to the village.',
      },
      visual: { art: 'aphelandra', tint: 'sand' },
    },
    // On screen from episode 408 and named by chapter 516 at the latest;
    // filed at 410, which adapts 516, rounding up.
    {
      id: 'kikyo',
      kind: 'character',
      revealedAtEpisode: 410,
      revealedAtChapter: 516,
      name: { it: 'Kikyo', en: 'Kikyo' },
      summary: {
        it: 'Una guerriera kuja che dà gli ordini alle arciere, ricorda a tutti che su Amazon Lily nessun uomo ha mai messo piede e vuole chiudere la faccenda con una freccia.',
        en: 'A Kuja warrior who gives the archers their orders, reminds everyone that no man has ever set foot on Amazon Lily, and wants the matter settled with an arrow.',
      },
      visual: { art: 'kikyo', tint: 'wine' },
    },
    {
      id: 'amazon-lily',
      kind: 'place',
      revealedAtEpisode: 410,
      revealedAtChapter: 516,
      name: { it: 'Amazon Lily', en: 'Amazon Lily' },
      summary: {
        it: 'Un’isola di giungla nella Fascia di Bonaccia abitata solo da donne, le Kuja, che vivono in un villaggio dentro una montagna e in gran parte non hanno mai visto un uomo.',
        en: 'A jungle island in the Calm Belt where only women live, the Kuja, in a village built inside a mountain, and most of them have never seen a man.',
      },
      visual: { art: 'amazon-lily', tint: 'green' },
    },
    // Debuts at episode 410 and chapter 516 as the "kitten" in the empress’s
    // way, unnamed; filed at 412/518, where she sets it on the prisoner.
    {
      id: 'bacura',
      kind: 'character',
      revealedAtEpisode: 412,
      revealedAtChapter: 518,
      name: { it: 'Bacura', en: 'Bacura' },
      summary: {
        it: 'Una pantera nera enorme con un berretto marrone in testa, da anni il boia dell’arena kuja, liberata contro un prigioniero e mandata tra il pubblico da un pugno solo.',
        en: 'A huge black panther in a brown cap, for years the executioner of the Kuja arena, let loose on a prisoner and sent flying into the crowd by a single punch.',
      },
      visual: { art: 'bacura', tint: 'ocher' },
    },
    {
      id: 'heracles',
      kind: 'character',
      revealedAtEpisode: 420,
      revealedAtChapter: 524,
      name: { it: 'Hercules', en: 'Heracles' },
      summary: {
        it: 'Un guerriero chiuso in un’armatura a forma di scarabeo, che salva un naufrago da un coleottero gigante, poi si mangia l’insetto e tiene a bada le piante carnivore della sua foresta.',
        en: 'A warrior sealed in beetle-shaped armour who saves a castaway from a giant beetle, then eats the beetle, and keeps the man-eating plants of his forest at bay.',
      },
      visual: { art: 'heracles', tint: 'green' },
    },
    {
      id: 'domino',
      kind: 'character',
      revealedAtEpisode: 422,
      revealedAtChapter: 526,
      name: { it: 'Domino', en: 'Domino' },
      summary: {
        it: 'La vicecapo dei secondini di Impel Down, occhiali scuri e un ciuffo biondo sull’occhio, che perquisisce ogni visitatore, imperatrice compresa, e tira fuori le manette.',
        en: 'The vice head jailer of Impel Down, dark glasses and a lock of blonde hair over one eye, who searches every visitor, an empress included, and brings out the cuffs.',
      },
      visual: { art: 'domino', tint: 'ice' },
    },
    {
      id: 'impel-down',
      kind: 'place',
      revealedAtEpisode: 422,
      revealedAtChapter: 525,
      name: { it: 'Impel Down', en: 'Impel Down' },
      summary: {
        it: 'La prigione più grande del mondo, sotto il mare, raggiunta da una corrente riservata alla Marina e circondata da più navi da guerra di un Buster Call.',
        en: 'The greatest prison in the world, deep under the sea, reached by a current kept for the Marines and ringed by more warships than a Buster Call.',
      },
      visual: { art: 'impel-down', tint: 'ocher' },
    },
    {
      id: 'saldeath',
      kind: 'character',
      revealedAtEpisode: 431,
      revealedAtChapter: 530,
      name: { it: 'Saldeath', en: 'Saldeath' },
      summary: {
        it: 'Un ometto alato con il tridente, a capo dei Blugori, che cala una rete sugli intrusi e dice loro di ringraziarlo per averli presi lui.',
        en: 'A little bat-winged man with a trident, chief of the Blugori, who drops a net on the intruders and tells them to be grateful he was the one who caught them.',
      },
      visual: { art: 'saldeath', tint: 'yellow' },
    },
    {
      id: 'sadi',
      kind: 'character',
      revealedAtEpisode: 432,
      revealedAtChapter: 531,
      name: { it: 'Sady', en: 'Sadi' },
      summary: {
        it: 'La comandante dei guardiani demoniaci di Impel Down, frusta in pugno, che colpisce un marine per aver scordato il vezzeggiativo e sigilla la prigione senza bisogno di aiuto.',
        en: 'The chief guard of Impel Down’s Jailer Beasts, whip in hand, who lashes a Marine for leaving the -chan off her name and seals the prison without anyone’s help.',
      },
      visual: { art: 'sadi', tint: 'pink' },
    },
    // Shown shadowed from episode 422 and chapter 525, and first named in
    // chapter 532, whose title he is; filed at 433/532.
    {
      id: 'minotaurus',
      kind: 'character',
      revealedAtEpisode: 433,
      revealedAtChapter: 532,
      name: { it: 'Minotauros', en: 'Minotaurus' },
      summary: {
        it: 'Un minotauro dal manto pezzato di mucca con una mazza chiodata, che stende un avversario con un colpo solo e torna alla carica ogni volta che lo spediscono via.',
        en: 'A minotaur with a cow’s patched hide and a spiked club, who floors an opponent with one blow and comes charging back every time he is knocked away.',
      },
      visual: { art: 'minotaurus', tint: 'vermilion' },
    },
    {
      id: 'marineford',
      kind: 'place',
      revealedAtEpisode: 459,
      revealedAtChapter: 550,
      // Momonga names Marineford at 410, long before the war takes the story there.
      nameSaidAt: 410,
      name: { it: 'Marineford', en: 'Marineford' },
      summary: {
        it: 'L’isola del Quartier Generale della Marina, una baia a mezzaluna irta di cannoni, con alle spalle una città abitata dalle famiglie dei marine.',
        en: 'The island of Marine Headquarters, a crescent bay lined with cannons, and behind it a town where the Marines’ families live.',
      },
      visual: { art: 'marineford', tint: 'azure' },
    },
    {
      id: 'doma',
      kind: 'character',
      revealedAtEpisode: 460,
      revealedAtChapter: 551,
      name: { it: 'Doma', en: 'Doma' },
      summary: {
        it: 'Un capitano del Nuovo Mondo con una grande fascia rossa annodata in testa, uscito dalla nebbia con le quarantatré navi che rispondono al richiamo di Barbabianca.',
        en: 'A New World captain with a great red band knotted round his head, come out of the fog with the forty-three ships that answer Whitebeard’s call.',
      },
      visual: { art: 'doma', tint: 'red' },
    },
    // Debuts at episode 459 and chapter 550 among the giants, unnamed; the
    // manga names him in chapter 555, adapted by episode 464.
    {
      id: 'lacroix',
      kind: 'character',
      revealedAtEpisode: 464,
      revealedAtChapter: 555,
      name: { it: 'Lacroix', en: 'Lacroix' },
      summary: {
        it: 'Un viceammiraglio gigante di guardia davanti al patibolo, che per la prima volta in vita sua deve alzare gli occhi per guardare un nemico, e ci rimette la sciabola.',
        en: 'A giant Marine vice admiral guarding the scaffold, who for the first time in his life has to look up at an enemy, and loses his sabre for it.',
      },
      visual: { art: 'lacroix', tint: 'azure' },
    },
    {
      id: 'whitey-bay',
      kind: 'character',
      revealedAtEpisode: 465,
      revealedAtChapter: 556,
      name: { it: 'Whitey Bay', en: 'Whitey Bay' },
      summary: {
        it: 'Una capitana alleata di Barbabianca, mantello e cappello a tesa larga, la cui nave rompighiaccio sfonda il mare gelato della baia e apre la strada alle altre.',
        en: 'A captain allied to Whitebeard, all cape and wide-brimmed hat, whose icebreaker smashes through the frozen bay and cuts a road for every ship behind her.',
      },
      visual: { art: 'whitey-bay', tint: 'cyan' },
    },
    {
      id: 'blenheim',
      kind: 'character',
      revealedAtEpisode: 482,
      revealedAtChapter: 573,
      name: { it: 'Blenheim', en: 'Blenheim' },
      summary: {
        it: 'Un comandante di Barbabianca grosso quasi quanto il suo capitano, una treccia sulla nuca e una sciabola enorme, a cui i compagni chiedono di caricarsi in spalla Jozu congelato.',
        en: 'A Whitebeard commander nearly as big as his captain, a braid down his back and an enormous cutlass, whom his crewmates ask to shoulder the frozen Jozu.',
      },
      visual: { art: 'blenheim', tint: 'azure' },
    },
    // On screen from episode 409 under the empress, but nobody says her name
    // until the empress talks to her at Marineford, at 484 (chapter 575).
    {
      id: 'salome',
      kind: 'character',
      revealedAtEpisode: 484,
      revealedAtChapter: 575,
      name: { it: 'Salomè', en: 'Salome' },
      summary: {
        it: 'Il serpente gigante dell’imperatrice, un teschio cornuto e incrinato in testa, che le fa da trono e sibila quando lei confessa di essere in pena per Rufy.',
        en: 'The empress’s giant snake, a cracked horned skull on its head, which serves as her throne and hisses when she admits she is worried sick about Luffy.',
      },
      visual: { art: 'salome', tint: 'azure' },
    },
    {
      id: 'bluejam',
      kind: 'character',
      revealedAtEpisode: 495,
      revealedAtChapter: 584,
      name: { it: 'Bluejam', en: 'Bluejam' },
      summary: {
        it: 'Un capitano pirata altissimo che fa da padrone nella discarica fuori dalle mura, e spara al proprio sottoposto perché si è fatto battere da due bambini.',
        en: 'A towering pirate captain who lords it over the rubbish tip outside the walls, and shoots his own underling for letting two boys beat him.',
      },
      visual: { art: 'bluejam', tint: 'azure' },
    },
    {
      id: 'porchemy',
      kind: 'character',
      revealedAtEpisode: 495,
      revealedAtChapter: 584,
      name: { it: 'Polchemy', en: 'Porchemy' },
      summary: {
        it: 'Un pirata con i guanti chiodati che lega un bambino di gomma nella stiva di una nave rovesciata e lo picchia per sapere dove sono i soldi rubati.',
        en: 'A pirate in spiked gloves who ties a rubber boy up in the hold of a capsized ship and beats him to learn where the stolen money is hidden.',
      },
      visual: { art: 'porchemy', tint: 'violet' },
    },
    {
      id: 'dogra',
      kind: 'character',
      revealedAtEpisode: 503,
      revealedAtChapter: 588,
      name: { it: 'Dogura', en: 'Dogra' },
      summary: {
        it: 'Un brigante basso con il turbante e un vocabolario sottobraccio, che dal molo vede saltare in aria la barca di Sabo e corre fino al monte a dirlo.',
        en: 'A short bandit in a turban with a dictionary under his arm, who watches Sabo’s boat blown apart from the dock and runs all the way up the mountain to tell.',
      },
      visual: { art: 'dogra', tint: 'sand' },
    },
    // On screen from episode 418, named only in its end credits; the manga
    // names him in chapter 592, adapted by episode 508. Filed on the Post-War
    // shelf at 508/592.
    {
      id: 'haredas',
      kind: 'character',
      revealedAtEpisode: 508,
      revealedAtChapter: 592,
      name: { it: 'Haredas', en: 'Haredas' },
      summary: {
        it: 'Un vecchio scienziato del tempo con tunica e cappello a punta, che accoglie una ragazza precipitata sulla sua isola del cielo e finisce portato via come suo ostaggio.',
        en: 'An old weather scientist in a wizard’s robe and pointed hat, who takes in a girl fallen onto his sky island and ends up carried off as her hostage.',
      },
      visual: { art: 'haredas', tint: 'cyan' },
    },
    {
      id: 'kong',
      kind: 'character',
      revealedAtEpisode: 511,
      revealedAtChapter: 594,
      name: { it: 'Kong', en: 'Kong' },
      summary: {
        it: 'Il comandante in capo del Governo Mondiale, un vecchio enorme con il cappotto della Marina sulle spalle, che accetta le dimissioni del grand’ammiraglio senza toccargli i gradi.',
        en: 'The World Government’s commander-in-chief, a huge old man with a Marine coat over his shoulders, who accepts the fleet admiral’s resignation and leaves his record untouched.',
      },
      visual: { art: 'kong', tint: 'yellow' },
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
        // Introduced as a Warlord at 584 (chapter 659), on Punk Hazard.
        {
          episode: 584,
          chapter: 659,
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
        { episode: 584, value: 440_000_000 },
        { episode: 746, value: 500_000_000 },
        { episode: 1080, value: 3_000_000_000 },
      ],
    },
    'eustass-kid': {
      role: {
        it: 'Capitano dei Pirati di Kid',
        en: 'Captain of the Kid Pirates',
      },
      log: {
        it: 'La taglia più alta della sua generazione, e la reputazione dei civili che lui e la sua ciurma hanno ucciso lungo la strada. A Sabaody si fronteggia con Scratchmen Apoo, un altro capitano.',
        en: 'The highest bounty of his generation, and a reputation for the civilians he and his crew have killed along the way. At Sabaody he squares up with Scratchmen Apoo, another captain.',
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
      devilFruit: [
        { episode: 1058, chapter: 1031, value: ['magnet-magnet-fruit'] },
      ],
      bounty: [
        { episode: 392, value: 315_000_000 },
        { episode: 603, value: 470_000_000 },
        { episode: 1080, value: 3_000_000_000 },
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
        // The Warlord system is abolished at 957 (chapter 956).
        {
          episode: 957,
          chapter: 956,
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
      bounty: [
        { episode: 416, value: 80_000_000 },
        { episode: 1087, value: 1_659_000_000 },
      ],
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
      bounty: [
        { episode: 430, value: 250_000_000 },
        { episode: 980, value: 438_000_000 },
        { episode: 1086, value: 1_100_000_000 },
      ],
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
          episode: 392,
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
        it: 'A Sabaody lo chiamano il vecchio che riveste le navi, e per quel lavoro chiede cifre che nessuno si azzarda a discutere. Nella casa d’aste stende una sala intera di uomini armati senza toccarne uno, poi strappa a una sirena il collare esplosivo un attimo prima che salti. Quando Kid lo riconosce come il Re Oscuro, gli chiede di non andarlo a dire in giro: adesso riveste soltanto le navi.',
        en: 'At Sabaody they call him the old man who coats ships, and for that work he asks prices nobody dares argue with. In the auction house he drops a whole hall of armed men without touching one of them, then pulls the explosive collar off a mermaid’s neck a moment before it goes off. When Kid recognises him as the Dark King, he asks them not to go around saying so: these days he only coats ships.',
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
        it: 'Combattente dei Pirati di Kid',
        en: 'Combatant of the Kid Pirates',
      },
      log: {
        it: 'Porta un casco a strisce, con file di fori, che gli copre tutta la testa, e una lama lunga e ricurva fissata a ciascuno dei guanti. A Sabaody sta combattendo contro il monaco Urouge quando X Drake si mette in mezzo, para i colpi di tutti e due e dice loro di tenersi la battaglia per il Nuovo Mondo.',
        en: 'He wears a striped helmet with rows of holes in it that covers his whole head, and a long curved blade fixed to each of his gauntlets. At Sabaody he is fighting the monk Urouge when X Drake jumps between them, blocks them both and tells them to save it for the New World.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati di Kid, combattente',
            en: 'Kid Pirates, combatant',
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
        { episode: 603, value: 200_000_000 },
      ],
    },
    // Not "navigator": only the SBS (volume 71) says it, never the story.
    'bepo': {
      role: {
        it: 'Membro dei Pirati Heart',
        en: 'Member of the Heart Pirates',
      },
      log: {
        it: 'È un orso polare che sta in piedi su due zampe, con una tuta arancione e piccoli stivali marroni. A Sabaody è uno degli uomini intorno a Trafalgar Law, il capitano dei Pirati Heart.',
        en: 'He is a polar bear who stands on two legs, in an orange boiler suit and small brown boots. At Sabaody he is one of the crew around Trafalgar Law, the captain of the Heart Pirates.',
      },
      affiliation: [
        {
          episode: 392,
          value: { it: 'Pirati Heart, membro', en: 'Heart Pirates, member' },
        },
      ],
      origin: [
        {
          episode: 757,
          value: { it: 'Zou, Ducato di Mokomo', en: 'Zou, Mokomo Dukedom' },
        },
      ],
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
        { episode: 603, value: 350_000_000 },
      ],
    },
    'basil-hawkins': {
      role: {
        it: 'Capitano dei Pirati di Hawkins',
        en: 'Captain of the Hawkins Pirates',
      },
      log: {
        it: 'Siede in un ristorante del Grove 24 con i suoi tarocchi e parla del destino come di una cosa già decisa. Quando un cameriere rovescia il cibo addosso a uno dei suoi uomini, gli impedisce di vendicarsi e dice con calma che era il destino di quei vestiti, e che togliere una vita oggi porterebbe sfortuna.',
        en: 'He sits in a Grove 24 restaurant with his tarot cards and speaks of fate as something already decided. When a waiter spills food on one of his men, he stops the man from hitting back and says calmly that such was the fate of those clothes, and that taking a life today would bring bad luck.',
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
        { episode: 603, value: 320_000_000 },
      ],
    },
    'x-drake': {
      role: {
        it: 'Capitano dei Pirati di Drake',
        en: 'Captain of the Drake Pirates',
      },
      log: {
        it: 'Un tempo era un marine, oggi è il capitano di una ciurma pirata. A Sabaody ferma lo scontro fra Killer e Urouge parando i colpi di entrambi, e dice loro di tenerselo per il Nuovo Mondo. Law gli chiede quante persone abbia ucciso.',
        en: 'He was once a Marine and is now a pirate captain. At Sabaody he stops a fight between Killer and Urouge by blocking them both, and tells them to save it for the New World. Law asks him how many people he has killed.',
      },
      affiliation: [
        {
          episode: 392,
          value: {
            it: 'Pirati di Drake, capitano, ex marine',
            en: 'Drake Pirates, captain, former Marine',
          },
        },
        // Kizaru calls him "Rear Admiral Drake" at the end of chapter 508,
        // which episode 401 adapts; 498 and 392 say only "former Marine".
        {
          episode: 401,
          chapter: 508,
          value: {
            it: 'Pirati di Drake, capitano, ex contrammiraglio della Marina',
            en: 'Drake Pirates, captain, former Marine rear admiral',
          },
        },
        { episode: 895, value: BEASTS_HEADLINER },
        {
          episode: 957,
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
          episode: 923,
          chapter: 929,
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
        it: 'Viene dalle isole del cielo, cosa che sulla Rotta Maggiore quasi nessuno crede possibile, e si porta dietro un pilastro di ferro come bastone. Sorride sempre, anche mentre colpisce. A Sabaody passeggia tranquillo in mezzo a capitani che non si sopportano.',
        en: 'He comes from the islands in the sky, which almost nobody on the Grand Line believes is possible, and carries an iron pillar as a staff. He smiles constantly, even mid-swing. At Sabaody he strolls calmly among captains who cannot stand each other.',
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
        it: 'Comanda la sua ciurma come una famiglia di malavita, e i suoi uomini lo chiamano padre. Viene dal West Blue. A Sabaody si siede a cena in un ristorante del Grove 24 e vuole che Jewelry Bonney stia zitta, per come mangia. Quando uno dei suoi uomini gli ricorda che il quartier generale della Marina è a due passi e che una rissa sarebbe un errore, Bege lo colpisce con la forchetta.',
        en: 'He runs his crew like a crime family, and his men call him father. He comes from the West Blue. At Sabaody he sits down to dinner in a Grove 24 restaurant and wants Jewelry Bonney silenced for the way she eats. When one of his men warns him that Marine headquarters is close and a fight would be a mistake, Bege hits him with his fork.',
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
        { episode: 763, value: 300_000_000 },
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
      devilFruit: [{ episode: 1133, chapter: 1099, value: ['age-age-fruit'] }],
      bounty: [
        { episode: 392, value: 140_000_000 },
        { episode: 1089, value: 320_000_000 },
      ],
    },
    'saint-charloss': {
      role: { it: 'Nobile Mondiale', en: 'World Noble' },
      log: {
        it: 'Cammina sull’arcipelago dentro una bolla di vetro, perché l’aria che respirano gli altri non è degna di lui, e spara a chiunque gli passi troppo vicino. Alla casa d’aste compra persone come si comprano i mobili e pretende che la sala si inginocchi. Nessuno reagisce, perché alzare una mano su di lui significa chiamare un ammiraglio.',
        en: 'He walks the archipelago inside a glass bubble, because the air everyone else breathes is beneath him, and shoots whoever comes too close. At the auction house he buys people the way other men buy furniture and expects the room to kneel. Nobody moves against him, because raising a hand to him calls down an admiral.',
      },
      affiliation: [{ episode: 396, value: CELESTIAL_DRAGONS }],
      origin: [{ episode: 396, value: MARY_GEOISE }],
    },
    'borsalino': {
      chronicle: summitWarChronicles.borsalino,
      role: { it: 'Ammiraglio della Marina', en: 'Marine admiral' },
      log: {
        it: 'Atterra sull’arcipelago in piedi su una palla di cannone, e il proiettile che un pirata gli spara in testa gli passa attraverso. Con un calcio lancia dal piede un raggio di luce che abbatte una mangrovia intera, senza smettere di parlare lento. Sembra sempre un po’ annoiato da quello che deve fare, e non ha mai bisogno di alzare la voce.',
        en: 'He lands on the archipelago riding a cannonball, and the bullet a pirate fires at his head passes straight through him. He kicks a beam of light from his foot that brings down a whole mangrove, without once speeding up his drawl. He always looks faintly bored by the errand, and he never needs to raise his voice.',
      },
      status: [{ episode: 401, value: 'alive' }],
      affiliation: [
        {
          episode: 401,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
      ],
      epithet: [{ episode: 401, value: { it: 'Kizaru', en: 'Kizaru' } }],
      devilFruit: [
        { episode: 404, chapter: 511, value: ['glint-glint-fruit'] },
      ],
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
          episode: 1099,
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
        // Episode 413 captions the model; 412 names the fruit only in the
        // preview. The true pair (413, 519) sits below her chapter, so no pin.
        { episode: 413, value: ['snake-snake-fruit-model-anaconda'] },
      ],
    },
    'boa-marigold': {
      role: { it: 'Sorella dell’imperatrice', en: 'Sister of the empress' },
      log: {
        it: 'È la più grossa delle tre sorelle e insieme a Sandersonia fa la guardia al bagno dell’imperatrice. Quando l’imperatrice ordina alle due di giustiziare l’intruso con le loro mani, nell’arena si trasformano in serpenti. Come le sorelle tiene la schiena coperta dal mantello: sull’isola si dice che lì le abbia segnate la maledizione di una Gorgone.',
        en: 'She is the largest of the three sisters, and with Sandersonia she stands guard over the empress’s bath. When the empress orders the two of them to execute the intruder themselves, they turn into snakes in the arena. Like her sisters she keeps her back under her cloak: the island says a Gorgon’s curse marked them there.',
      },
      affiliation: [
        { episode: 412, value: { it: 'Pirate Kuja', en: 'Kuja Pirates' } },
      ],
      origin: [{ episode: 412, value: AMAZON_LILY }],
      devilFruit: [
        // Episode 413 captions the model; 412 names the fruit only in the
        // preview. The true pair (413, 519) sits below her chapter, so no pin.
        { episode: 413, value: ['snake-snake-fruit-model-king-cobra'] },
      ],
    },
    'marguerite': {
      role: KUJA_WARRIOR_ROLE,
      log: {
        it: 'Trova un uomo svenuto nella foresta, il primo che vede in vita sua, e invece di ucciderlo lo porta al villaggio e lo nasconde. Caccia con un arco più alto di lei e tira frecce che colpiscono molto più forte di quanto il legno lasci immaginare. Fa domande su tutto quello che sta fuori dall’isola, e non ha mai potuto farle a nessuno.',
        en: 'She finds a man unconscious in the forest, the first she has ever seen, and instead of killing him she carries him to the village and hides him. She hunts with a bow taller than she is and looses arrows that land far harder than the wood suggests. She asks questions about everything outside the island, and has never had anyone to ask.',
      },
      affiliation: [{ episode: 409, value: KUJA_WARRIOR }],
      origin: [{ episode: 409, value: AMAZON_LILY }],
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
        it: 'Dirige la prigione più profonda del mondo da un ufficio al quarto livello, l’unica stanza fresca di un piano in fiamme. È un uomo veleno: il veleno gli piace al punto da mangiarlo in zuppa a colazione, e il suo fiato è un gas che stende il vicedirettore. Lo stesso veleno lo tiene chiuso in bagno dieci ore al giorno, e in quelle ore la prigione va avanti da sola.',
        en: 'He runs the deepest prison in the world from an office on the fourth level, the one cool room on a floor that is all fire. He is a poison man: he likes poison enough to eat it as soup for breakfast, and his breath is a gas that floors the vice warden. The same poison keeps him in the lavatory ten hours a day, and in those hours the prison runs itself.',
      },
      // No vice-chief-warden entry: only the chapter 665 cover says it.
      affiliation: [
        {
          episode: 425,
          value: {
            it: 'Impel Down, direttore',
            en: 'Impel Down, chief warden',
          },
        },
      ],
      devilFruit: [{ episode: 425, value: ['venom-venom-fruit'] }],
    },
    'hannyabal': {
      role: {
        it: 'Vicedirettore di Impel Down',
        en: 'Vice chief warden of Impel Down',
      },
      log: {
        it: 'Ripete a chiunque lo ascolti che un giorno prenderà il posto del direttore, e lo dice anche davanti al direttore. Porta un copricapo da faraone, e nelle liti con i colleghi si impappina e si corregge da solo. Quando per la prima volta qualcuno si infiltra nella prigione, la chiama una calamità e ne dà la colpa al direttore.',
        en: 'He tells anyone who will listen that one day he will have the chief warden’s job, and he says it in front of the chief warden too. He wears a pharaoh’s headdress, and in arguments with colleagues he trips over his words and corrects himself. When someone breaks into the prison for the first time, he calls it a calamity and blames the chief warden for it.',
      },
      // No chief-warden entry: only the chapter 661 cover says it.
      affiliation: [
        {
          episode: 425,
          value: {
            it: 'Impel Down, vicedirettore',
            en: 'Impel Down, vice chief warden',
          },
        },
      ],
    },
    'emporio-ivankov': {
      role: { it: 'Sovrano del livello 5.5', en: 'Ruler of level 5.5' },
      log: {
        it: 'Regna su un livello della prigione che sulle mappe non esiste, un giardino segreto dove i detenuti bevono, giocano e guardano lo spettacolo invece di scappare. Le guardie credono che i prigionieri scomparsi siano finiti all’inferno, e invece sono tutti lì. Von Clay lo conosce di fama come uno capace di miracoli, e spera che uno basti a salvare Rufy avvelenato.',
        en: 'He reigns over a level of the prison that appears on no map, a secret garden where the inmates drink, play games and watch the show instead of running. The guards believe the vanished prisoners were dragged off to hell, and they are all there. Bon Clay knows him by reputation as a man who works miracles, and hopes one will be enough to save the poisoned Luffy.',
      },
      affiliation: [
        {
          episode: 438,
          value: {
            it: 'Livello 5.5 di Impel Down, sovrano',
            en: 'Impel Down level 5.5, queen',
          },
        },
        {
          episode: 441,
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
      devilFruit: [{ episode: 440, value: ['horm-horm-fruit'] }],
    },
    'inazuma': {
      role: { it: 'Braccio destro di Ivankov', en: 'Ivankov’s right hand' },
      log: {
        it: 'Trova Rufy e Von Clay mezzi assiderati dentro la prigione e li porta al sicuro, dove Von Clay si risveglia dieci ore dopo. Quando gli chiede dove si trova, non risponde e lo porta davanti al palco, perché sarà qualcun altro a spiegarglielo. Di sé dice soltanto il proprio nome.',
        en: 'He finds Luffy and Bon Clay half frozen inside the prison and moves them somewhere safe, where Bon Clay wakes ten hours later. When Bon Clay asks where he is, he gives no answer and takes him to the front of the stage, because someone else will explain. About himself he says only his name.',
      },
      affiliation: [
        {
          episode: 438,
          value: {
            it: 'Livello 5.5 di Impel Down',
            en: 'Impel Down level 5.5',
          },
        },
        {
          episode: 441,
          value: {
            it: 'Armata Rivoluzionaria; livello 5.5 di Impel Down',
            en: 'Revolutionary Army; Impel Down level 5.5',
          },
        },
      ],
      devilFruit: [{ episode: 442, value: ['snip-snip-fruit'] }],
    },
    'shiryu': {
      role: { it: 'Ex capo dei secondini', en: 'Former head jailer' },
      log: {
        it: 'Era il capo dei secondini di Impel Down e la prigione lo ha rinchiuso nei propri livelli bassi, perché uccideva i detenuti per il gusto di farlo. Quando Barbanera entra nella prigione, il direttore lo fa uscire dalla cella per fermarlo e gli rende la spada, e lui la usa subito sui secondini venuti a liberarlo.',
        en: 'He was the head jailer of Impel Down, and the prison shut him away on its own lower levels because he killed inmates for the pleasure of it. When Blackbeard breaks into the prison, the chief warden lets him out of his cell to stop him and gives him back his sword, and he turns it at once on the jailers sent to free him.',
      },
      affiliation: [
        {
          episode: 445,
          value: {
            it: 'Impel Down, ex capo dei secondini, detenuto',
            en: 'Impel Down, former head jailer, imprisoned',
          },
        },
        { episode: 452, value: BLACKBEARD_CREW },
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
        it: 'A Mock Town batte un uomo di un’altra ciurma e si lamenta che fosse troppo debole. Poi sale sul tetto di un palazzo e grida in cerca di qualcuno che valga la pena di affrontare. Si fa chiamare il Campione.',
        en: 'In Mock Town he beats a man from another crew and complains that he was too weak. Then he climbs onto a rooftop and shouts for someone worth fighting. He calls himself the Champion.',
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
      // Not "navigator": only the volume 46 character blurb says it.
      role: BLACKBEARD_ROLE,
      log: {
        it: 'Arriva nella sala dove il Governo ha convocato la Flotta dei Sette senza che nessuno se ne accorga, con il cilindro in testa e il bastone in mano. Propone il nome del suo capitano per il posto rimasto vuoto e chiede a tutti di ricordarsi dei Pirati di Barbanera. Prima di fare il pirata era uno sceriffo nel West Blue, cacciato per la sua crudeltà.',
        en: 'He gets into the room where the Government has summoned the Seven Warlords without anyone noticing, top hat on and cane in hand. He puts his captain’s name forward for the empty seat and tells them all to remember the Blackbeard Pirates. Before he turned pirate he was a sheriff in the West Blue, exiled for his cruelty.',
      },
      affiliation: [
        {
          episode: 151,
          value: {
            it: 'Pirati di Barbanera; ex sceriffo del West Blue',
            en: 'Blackbeard Pirates; former West Blue sheriff',
          },
        },
      ],
      origin: [{ episode: 151, value: { it: 'West Blue', en: 'West Blue' } }],
      // Named among the Titanic Captains in chapter 803, episode 752.
      epithet: [
        {
          episode: 752,
          chapter: 803,
          value: { it: 'lo Sceriffo Demone', en: 'Demon Sheriff' },
        },
      ],
    },
    'catarina-devon': {
      role: BLACKBEARD_ROLE,
      log: {
        it: 'Ivankov la nomina fra i pirati del sesto livello di Impel Down e la chiama la donna più pericolosa del mondo, per crimini che i giornali si sono rifiutati di raccontare. A Marineford compare sul patibolo insieme a Barbanera, presentata come la Cacciatrice della Luna Crescente. Quello che ha fatto per finire laggiù non è scritto da nessuna parte.',
        en: 'Ivankov names her among the pirates of Impel Down’s sixth level and calls her the most dangerous woman in the world, for crimes the papers refused to print. At Marineford she appears on the scaffold with Blackbeard, announced as the Crescent Moon Hunter. What she did to end up down there is written nowhere at all.',
      },
      affiliation: [
        {
          episode: 484,
          value: {
            it: 'Pirati di Barbanera; ex prigioniera del sesto livello di Impel Down',
            en: 'Blackbeard Pirates; former prisoner of Impel Down level 6',
          },
        },
      ],
      epithet: [
        {
          episode: 484,
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
      role: BLACKBEARD_ROLE,
      log: {
        it: 'Il suo nome è fra quelli che Ivankov pronuncia parlando del sesto livello di Impel Down, dove finisce chi ha commesso crimini troppo crudeli per i giornali. A Marineford spunta sul patibolo accanto a Barbanera, presentato come il Beone. La sua esistenza era stata cancellata, e adesso è in mezzo alla guerra.',
        en: 'His name is among those Ivankov gives when he talks about the sixth level of Impel Down, where people end up for crimes too cruel for the papers. At Marineford he turns up on the scaffold beside Blackbeard, announced as the Heavy Drinker. His existence had been erased, and now he stands in the middle of the war.',
      },
      affiliation: [{ episode: 484, value: LEVEL_SIX_ESCAPEE }],
      epithet: [
        { episode: 484, value: { it: 'il Beone', en: 'Heavy Drinker' } },
      ],
      // Pinned at 1087, where he first breathes fire with it (1121).
      devilFruit: [
        { episode: 1121, chapter: 1087, value: ['gabu-gabu-fruit'] },
      ],
    },
    'san-juan-wolf': {
      role: BLACKBEARD_ROLE,
      log: {
        it: 'Lo chiamano il più grande di tutti gli esseri viventi, e a Marineford lo si vede prima ancora di sapere chi è: qualcosa di enorme dietro il quartier generale della Marina. Ivankov lo aveva nominato fra i pirati del sesto livello di Impel Down, la Nave da Guerra Colossale. Adesso arriva insieme ai Pirati di Barbanera, e la Marina lo riconosce subito.',
        en: 'They call him the biggest of all living things, and at Marineford he is seen before anyone knows who he is: something enormous behind Marine headquarters. Ivankov had named him among the pirates of Impel Down’s sixth level, the Colossal Battleship. Now he arrives with the Blackbeard Pirates, and the Marines know him at once.',
      },
      affiliation: [{ episode: 484, value: LEVEL_SIX_ESCAPEE }],
      epithet: [
        {
          episode: 484,
          value: { it: 'Nave da Guerra Colossale', en: 'Colossal Battleship' },
        },
      ],
      devilFruit: [{ episode: 1120, value: ['huge-huge-fruit'] }],
    },
    'avalo-pizarro': {
      role: BLACKBEARD_ROLE,
      log: {
        it: 'A Marineford sale sul patibolo insieme a Barbanera, uno dei criminali più feroci, la cui esistenza è stata cancellata per la loro crudeltà. La Marina lo riconosce e lo chiama per nome: il Re Corrotto. Che cosa abbia fatto per meritarsi quel nome non viene detto.',
        en: 'At Marineford he stands on the scaffold with Blackbeard, one of the most heinous criminals, whose existence was erased because of their brutality. The Marines know him and call him by name: the Corrupt King. What he did to earn that name is not said.',
      },
      affiliation: [{ episode: 484, value: LEVEL_SIX_ESCAPEE }],
      epithet: [
        { episode: 484, value: { it: 'il Re Corrotto', en: 'Corrupt King' } },
      ],
      // Pinned at 1087, where the island's rock first rises as a hand (1121).
      devilFruit: [
        { episode: 1121, chapter: 1087, value: ['island-island-fruit'] },
      ],
    },
    'sakazuki': {
      chronicle: summitWarChronicles.sakazuki,
      role: { it: 'Ammiraglio della Marina', en: 'Marine admiral' },
      log: {
        it: 'Siede con gli altri ammiragli, con il viso nascosto sotto la visiera del cappello. Quando Jozu scaglia contro i marine un enorme blocco di ghiaccio, si alza dalla sedia, trasforma il braccio in magma e distrugge il blocco.',
        en: 'He sits with the other admirals, his face hidden under the peak of his cap. When Jozu hurls a huge block of ice at the Marines, he gets up from his chair, turns his arm to magma and destroys the block.',
      },
      status: [{ episode: 463, value: 'alive' }],
      affiliation: [
        {
          episode: 463,
          value: { it: 'Marina, ammiraglio', en: 'Marines, admiral' },
        },
        // Named fleet admiral at 570 (chapter 650); 517 only mentions a new one.
        {
          episode: 570,
          chapter: 650,
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
        it: 'Comanda la terza divisione della ciurma di Barbabianca ed è largo quanto una porta. Si copre il corpo di diamante e incassa colpi che dovrebbero attraversarlo, restando dove si trova. Parla poco e sta vicino al vecchio, perché è lì che serve.',
        en: 'He commands the third division of Whitebeard’s crew and is as wide as a doorway. He covers his body in diamond and takes blows that ought to go straight through him without giving ground. He says little and stays near the old man, because that is where he is needed.',
      },
      affiliation: [
        {
          episode: 463,
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
        { episode: 463, value: { it: 'Jozu il Diamante', en: 'Diamond Jozu' } },
      ],
      devilFruit: [{ episode: 463, value: ['sparkle-sparkle-fruit'] }],
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
        it: 'Guida una delle ciurme del Nuovo Mondo alleate di Barbabianca, arrivate nella baia per salvare Ace. Quando la battaglia comincia, manda i suoi uomini all’attacco della Marina.',
        en: 'He leads one of the New World crews allied to Whitebeard that have come to the bay to save Ace. When the battle starts, he sends his men to attack the Marines.',
      },
      affiliation: [
        // Episode 462 calls the crew the "Squard Pirates"; the crew's own
        // name is first said in chapter 572, which episode 481 adapts.
        {
          episode: 462,
          value: {
            it: 'Pirati di Squardo, capitano; alleato di Barbabianca',
            en: 'Squard Pirates, captain; Whitebeard’s ally',
          },
        },
        {
          episode: 481,
          chapter: 572,
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
    },
    'tsuru': {
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'Al quartier generale della Marina, prima dell’esecuzione, dice a Garp che non è colpa sua, e lui le risponde che in momenti così le donne sanno essere dolci. Quando la flotta alleata di Barbabianca esce dalla nebbia e di lui non c’è traccia, dice che forse hanno sbagliato schieramento.',
        en: 'At Marine headquarters, before the execution, she tells Garp it is not his fault, and he answers that women are very sweet at times like this. When Whitebeard’s allied fleet comes out of the fog and he himself is nowhere to be seen, she says that maybe they got the wrong lineup.',
      },
      affiliation: [
        {
          episode: 461,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      // Captioned with her name and this title at her first appearance, 151
      // (chapter 234), long before her record opens.
      epithet: [
        {
          episode: 461,
          value: {
            it: 'Grande Ufficiale di Stato Maggiore',
            en: 'Great Staff Officer',
          },
        },
      ],
      // Wrings and hangs pirates out to dry in the bay (465, chapter 556).
      devilFruit: [{ episode: 465, chapter: 556, value: ['wash-wash-fruit'] }],
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
    'rosward': {
      role: { it: 'Nobile Mondiale', en: 'World Noble' },
      log: {
        it: 'Cammina per l’arcipelago con la figlia e un omone in catene che gli va dietro a quattro zampe, e la gente in strada si inginocchia al suo passaggio. Chiama i suoi schiavi la sua collezione di capitani, e si lamenta che la figlia non sappia educarli, consigliandole di cominciare da un bambino. Alla casa d’aste dice al portiere che non farà offerte, e che il figlio è in ritardo perché si fa portare da un umano invece che da un uomo-pesce.',
        en: 'He walks the archipelago with his daughter and a huge man in chains crawling behind him on all fours, and the street kneels as he passes. He calls his slaves his captain collection, and complains that his daughter has no talent for training them, advising her to start with a child. At the auction house he tells the doorman he will not be bidding, and that his son is late because he rides a human instead of a fish-man.',
      },
      status: [{ episode: 394, value: 'alive' }],
      affiliation: [{ episode: 394, value: CELESTIAL_DRAGONS }],
      origin: [{ episode: 394, value: MARY_GEOISE }],
    },
    'shalria': {
      role: { it: 'Nobile Mondiale', en: 'World Noble' },
      log: {
        it: 'Il suo schiavo, un capitano pirata, scappa con il collare ancora al collo, e lei lo ritrova per strada dopo l’esplosione, incapace di muoversi. Lo prende a calci perché piange per la famiglia, gli spara e se ne va chiedendo un gigante, perché quelli deboli la annoiano. Alla casa d’aste entra accanto al padre e si lamenta che il fratello sia in ritardo.',
        en: 'Her slave, a pirate captain, runs off with the collar still round his neck, and she finds him in the street after it has gone off, no longer able to move. She kicks him for crying about his family, shoots him and walks away asking for a giant, because the weak ones bore her. At the auction house she walks in beside her father and complains that her brother is late.',
      },
      status: [{ episode: 394, value: 'alive' }],
      affiliation: [{ episode: 394, value: CELESTIAL_DRAGONS }],
      origin: [{ episode: 394, value: MARY_GEOISE }],
    },
    'disco': {
      role: {
        it: 'Banditore della casa d’aste',
        en: 'Auctioneer of the auction house',
      },
      log: {
        it: 'Dietro le quinte della casa d’aste controlla la merce prima dello spettacolo, e sa già che il pezzo forte della giornata è un gigante. Quando gli portano una sirena la esamina come un vestito in vetrina, e la schiaffeggia appena lei gli fa la linguaccia, finché i suoi uomini gli ricordano che un livido abbassa il prezzo. Vuole metterle il collare con le sue mani, e proprio in quel momento crolla a terra senza che nessuno l’abbia toccato.',
        en: 'Backstage at the auction house he checks the goods before the show, and already knows the day’s star lot is a giant. When a mermaid is brought in he looks her over like a dress in a shop window, and slaps her the moment she sticks out her tongue, until his men remind him that a bruise lowers the price. He means to fit her collar with his own hands, and at that very moment drops to the floor without anyone touching him.',
      },
      status: [{ episode: 395, value: 'alive' }],
      affiliation: [
        {
          episode: 395,
          value: {
            it: 'Casa d’Aste di Sabaody, banditore',
            en: 'Sabaody Human Auctioning House, auctioneer',
          },
        },
      ],
    },
    'jean-bart': {
      role: {
        it: 'Nuova recluta dei Pirati Heart',
        en: 'New recruit of the Heart Pirates',
      },
      log: {
        it: 'Era un capitano pirata, poi è finito nella collezione di capitani di un Nobile Mondiale, costretto a camminare a quattro zampe dietro il padrone. Davanti alla casa d’aste resta incatenato a un palo, e non si muove nemmeno quando tutti gli altri scappano. Quando Law gli apre il collare e lo chiama per nome, dice che era da tanto che nessuno lo chiamava così, e accetta di seguirlo pur di non tornare dai Draghi Celesti.',
        en: 'He was a pirate captain before he ended up in a World Noble’s collection of captains, made to walk on all fours behind his master. Outside the auction house he stays chained to a stake, and does not move even when everyone else runs. When Law opens his collar and calls him by name, he says it has been a long time since anyone did, and agrees to follow him rather than go back to the Celestial Dragons.',
      },
      status: [{ episode: 399, value: 'alive' }],
      affiliation: [
        {
          episode: 399,
          value: { it: 'Pirati Heart, membro', en: 'Heart Pirates, member' },
        },
      ],
    },
    'sweet-pea': {
      role: KUJA_WARRIOR_ROLE,
      log: {
        it: 'Corre nella foresta con due compagne verso una colonna di fumo. Aiuta a staccare i funghi dal corpo che trovano e a bruciarne i gambi, ed è lei a scovare il fungo rimasto fra le gambe. Tira con tutte le sue forze, e quando quello si allunga senza staccarsi propone di passare il lavoro ad Aphelandra.',
        en: 'She runs through the forest with two companions towards a column of smoke. She helps pull the mushrooms off the body they find and burn the stems, and she is the one who spots the one mushroom left between its legs. She pulls with all her strength, and when it only stretches she suggests handing the job to Aphelandra.',
      },
      status: [{ episode: 409, value: 'alive' }],
      affiliation: [{ episode: 409, value: KUJA_WARRIOR }],
      origin: [{ episode: 409, value: AMAZON_LILY }],
    },
    'aphelandra': {
      role: KUJA_WARRIOR_ROLE,
      log: {
        it: 'È la più grande del suo gruppo di guerriere, e quando c’è da portare qualcosa di pesante le compagne si voltano verso di lei. Si carica il ragazzo trovato nella foresta e lo porta di corsa al villaggio, dove tutte le guerriere si accalcano per guardarlo. Quando un fungo si rifiuta di staccarsi le altre decidono che deve tirare lei, e lei chiede soltanto se tocca davvero a lei.',
        en: 'She is the biggest of her band of warriors, and when something heavy needs carrying the others turn to her. She lifts the boy found in the forest and hurries him to the village, where every warrior crowds round to look. When one mushroom refuses to come off the others decide she should be the one to pull, and all she asks is whether they really mean her.',
      },
      status: [{ episode: 409, value: 'alive' }],
      affiliation: [{ episode: 409, value: KUJA_WARRIOR }],
      origin: [{ episode: 409, value: AMAZON_LILY }],
    },
    'kikyo': {
      role: KUJA_WARRIOR_ROLE,
      log: {
        it: 'È fra le guerriere che si accalcano a guardare lo straniero raccolto nella foresta, e non si scompone quando lui allunga un braccio per riprendersi il cappello. Appena l’intruso si sveglia e alza la voce ordina di tendere gli archi: le scuse non la interessano, e la legge dell’isola non ha mai avuto un’eccezione. Vuole finirlo prima che torni la loro sovrana, per risparmiare la punizione alle tre che lo hanno portato al villaggio, e quando lui fugge dal tetto guida l’inseguimento.',
        en: 'She is among the warriors who crowd round the stranger brought in from the forest, and does not flinch when he stretches an arm to take back his hat. The moment the intruder wakes and raises his voice she orders bows drawn: apologies do not interest her, and the island’s law has never had an exception. She wants him finished before their ruler returns, to spare the three who carried him into the village from being punished, and when he escapes through the roof she leads the chase.',
      },
      status: [{ episode: 410, value: 'alive' }],
      affiliation: [{ episode: 410, value: KUJA_WARRIOR }],
      origin: [{ episode: 410, value: AMAZON_LILY }],
    },
    'bacura': {
      role: { it: 'Boia dell’arena kuja', en: 'Executioner of the Kuja arena' },
      log: {
        it: 'È una pantera nera enorme con un berretto marrone che le scende lungo la schiena, e le Kuja la usano da anni per le esecuzioni. Si dice che delle sue vittime non restino nemmeno le ossa. Quando la liberano contro un prigioniero nell’arena, lui la stende con un pugno solo davanti a tutto il pubblico.',
        en: 'It is a huge black panther in a brown cap that hangs down its back, and the Kuja have used it for their executions for years. They say nothing of its victims is left, not even the bones. When it is let loose on a prisoner in the arena, he lays it out with a single punch in front of the whole crowd.',
      },
      status: [{ episode: 412, value: 'alive' }],
      affiliation: [
        {
          episode: 412,
          value: { it: 'Pirate Kuja, boia', en: 'Kuja Pirates, executioner' },
        },
      ],
    },
    'heracles': {
      role: {
        it: 'Guerriero dell’arcipelago di Boin',
        en: 'Warrior of the Boin Archipelago',
      },
      log: {
        it: 'Gira per la foresta di Greenstone chiuso in un’armatura da scarabeo, con l’elmo, la maschera e un mantello viola. Salva un naufrago da un coleottero gigante e poi si mangia l’insetto, perché su quest’isola anche il pericolo è cibo. Quando le piante carnivore provano a divorare il nuovo arrivato le respinge senza fatica, e gli spiega che qui bisogna stare sempre in guardia.',
        en: 'He roams the Greenstone forest sealed in beetle armour, with a helmet, a mask and a purple cape. He saves a castaway from a giant beetle and then eats it, because on this island even danger is food. When the man-eating plants try to swallow the newcomer he drives them off without effort, and tells him that here you keep your guard up at all times.',
      },
      status: [{ episode: 420, value: 'alive' }],
      affiliation: [
        {
          episode: 420,
          value: {
            it: 'Arcipelago di Boin, guerriero',
            en: 'Boin Archipelago, warrior',
          },
        },
        {
          episode: 515,
          value: {
            it: 'Arcipelago di Boin, guerriero; maestro di Usop',
            en: 'Boin Archipelago, warrior; Usopp’s teacher',
          },
        },
      ],
    },
    'domino': {
      role: {
        it: 'Vicecapo dei secondini di Impel Down',
        en: 'Vice head jailer of Impel Down',
      },
      log: {
        it: 'Accoglie i visitatori di Impel Down accanto al vicedirettore, con gli occhiali scuri e un ciuffo biondo che le copre l’altro occhio. Spiega che chiunque entri va perquisito da capo a piedi, e non fa eccezioni nemmeno per un membro della Flotta dei Sette. Porta la visitatrice in una stanza a parte e le porge un paio di manette che annullano i poteri dei frutti del diavolo.',
        en: 'She receives visitors to Impel Down beside the vice chief warden, dark glasses on and a lock of blonde hair over the other eye. She explains that everyone who comes in is searched from head to foot, and makes no exception even for a Warlord. She takes the visitor to a private room and holds out a pair of cuffs that cancel a devil fruit’s power.',
      },
      status: [{ episode: 422, value: 'alive' }],
      affiliation: [
        {
          episode: 422,
          value: {
            it: 'Impel Down, vicecapo dei secondini',
            en: 'Impel Down, vice head jailer',
          },
        },
      ],
    },
    'saldeath': {
      role: { it: 'Capo dei Blugori', en: 'Chief guard of the Blugori' },
      log: {
        it: 'È un ometto con le ali da pipistrello, un completo bianco e un cappello con due corna, e comanda i Blugori del terzo livello con un tridente in mano. Cattura tre intrusi in una rete che nemmeno i denti riescono a rompere, e li invita a essergli grati di non essere finiti nelle mani di chi sta più in basso. Si irrita quando uno di loro storpia il suo nome, e guarda la rete squarciarsi quando si sveglia la bestia che ci era caduta dentro insieme a loro.',
        en: 'He is a small man with bat wings, a white suit and a two-horned hat, and he commands the Blugori of the third level with a trident in his hand. He catches three intruders in a net that not even teeth can break, and tells them to be grateful it was him and not what waits further down. He bristles when one of them mangles his name, and watches the net tear open when the beast that fell in with them wakes up.',
      },
      status: [{ episode: 431, value: 'alive' }],
      affiliation: [
        {
          episode: 431,
          value: {
            it: 'Impel Down, capo dei Blugori',
            en: 'Impel Down, chief guard of the Blugori',
          },
        },
      ],
    },
    'sadi': {
      role: {
        it: 'Comandante dei guardiani demoniaci',
        en: 'Chief guard of the Jailer Beasts',
      },
      log: {
        it: 'Comanda i guardiani demoniaci di Impel Down e pretende che tutti la chiamino con il vezzeggiativo, pena una frustata. Rifiuta l’aiuto della Marina contro l’intruso, perché la metà inferiore della prigione è un labirinto in cui chi non conosce la strada si perde da solo. Fa alzare il ponte levatoio e chiudere ogni ingresso, mentre alle sue spalle si affaccia qualcosa che somiglia a un koala.',
        en: 'She commands the Jailer Beasts of Impel Down and expects everyone to add the -chan to her name, on pain of the whip. She turns down the Marines’ help against the intruder, because the lower half of the prison is a maze that swallows anyone who does not know the way. She has the drawbridge raised and every entrance sealed, while something like a koala peers out from behind her.',
      },
      status: [{ episode: 432, value: 'alive' }],
      affiliation: [
        {
          episode: 432,
          value: {
            it: 'Impel Down, comandante dei guardiani demoniaci',
            en: 'Impel Down, chief guard of the Jailer Beasts',
          },
        },
      ],
    },
    'minotaurus': {
      role: {
        it: 'Guardiano demoniaco di Impel Down',
        en: 'Jailer Beast of Impel Down',
      },
      log: {
        it: 'È un minotauro con il manto pezzato di una mucca, i calzoni a righe e una mazza chiodata che punta sempre alla testa. Compare dal nulla, manda a terra un avversario con un colpo solo e, spedito via da un pugno, torna alla carica subito dopo. Per metterlo al tappeto servono quattro pirati che per una volta combattono insieme.',
        en: 'He is a minotaur with a cow’s patched hide, striped trousers and a spiked club that always goes for the head. He appears out of nowhere, floors an opponent in a single blow, and when a punch sends him flying he is back at once. It takes four pirates, fighting together for once, to put him down.',
      },
      status: [{ episode: 433, value: 'alive' }],
      affiliation: [
        {
          episode: 433,
          value: {
            it: 'Impel Down, guardiano demoniaco',
            en: 'Impel Down, Jailer Beast',
          },
        },
      ],
    },
    'doma': {
      role: {
        it: 'Capitano alleato di Barbabianca',
        en: 'Captain allied to Whitebeard',
      },
      log: {
        it: 'I marine lo riconoscono fra le prime bandiere che escono dalla nebbia e lo chiamano con l’epiteto che si è guadagnato nel Nuovo Mondo. Guida una delle quarantatré ciurme venute fino alla baia per stare dalla parte di Barbabianca. Porta una fascia rossa annodata in testa e una collana di pietre azzurre, e dal ponte guarda la Marina schierata ad aspettarlo.',
        en: 'The Marines pick him out among the first flags to come out of the fog and call him by the epithet he earned in the New World. He leads one of the forty-three crews that have sailed into the bay to stand on Whitebeard’s side. He wears a red band knotted round his head and a necklace of pale blue stones, and from his deck he watches the Marines drawn up to meet him.',
      },
      status: [{ episode: 460, value: 'alive' }],
      epithet: [
        {
          episode: 460,
          value: { it: 'il Cavaliere Errante', en: 'the Bohemian Knight' },
        },
      ],
      affiliation: [
        {
          episode: 460,
          value: {
            it: 'Capitano pirata; alleato di Barbabianca',
            en: 'Pirate captain; Whitebeard’s ally',
          },
        },
      ],
    },
    'lacroix': {
      role: {
        it: 'Viceammiraglio della squadra dei giganti',
        en: 'Giant Squad vice admiral',
      },
      log: {
        it: 'È un gigante con la divisa della Marina, il cappello, la cravatta e il cappotto sulle spalle, di guardia davanti al patibolo insieme agli altri giganti. Quando un gigante ancora più alto carica la baia, ammette che è la prima volta che deve alzare gli occhi per guardare qualcuno. È il primo a lanciarglisi contro, e la sua sciabola si spezza contro la lama dell’altro.',
        en: 'He is a giant in Marine uniform, cap, tie and coat over his shoulders, standing guard before the scaffold with the other giants. When a giant taller still charges the bay, he admits it is the first time he has had to look up at anyone. He is the first to go at him, and his sabre shatters against the other’s blade.',
      },
      status: [{ episode: 464, value: 'alive' }],
      affiliation: [
        {
          episode: 464,
          value: {
            it: 'Marina, viceammiraglio, squadra dei giganti',
            en: 'Marines, vice admiral, Giant Squad',
          },
        },
      ],
    },
    'whitey-bay': {
      role: {
        it: 'Capitana alleata di Barbabianca',
        en: 'Captain allied to Whitebeard',
      },
      log: {
        it: 'Guida una delle ciurme alleate di Barbabianca e risponde alla sua chiamata insieme alle altre bandiere del Nuovo Mondo. Quando il mare della baia gela e blocca tutte le navi, la sua non si ferma: è un rompighiaccio, e avanza spaccando la lastra. La chiamano la Strega del Ghiaccio, e nessuno a bordo si stupisce che passi dove le altre restano ferme.',
        en: 'She leads one of the crews allied to Whitebeard and answers his call along with the other flags of the New World. When the bay freezes and locks every ship in place, hers does not stop: it is an icebreaker, and it drives on splitting the sheet. They call her the Ice Witch, and nobody aboard is surprised that she goes where the others stay stuck.',
      },
      status: [{ episode: 465, value: 'alive' }],
      affiliation: [
        {
          episode: 465,
          value: {
            it: 'Ciurma alleata di Barbabianca, capitana',
            en: 'Crew allied to Whitebeard, captain',
          },
        },
      ],
      epithet: [
        { episode: 465, value: { it: 'Strega del Ghiaccio', en: 'Ice Witch' } },
      ],
    },
    'blenheim': {
      role: {
        it: 'Comandante dei Pirati di Barbabianca',
        en: 'Whitebeard Pirates commander',
      },
      status: [{ episode: 482, value: 'alive' }],
      log: {
        it: 'È grande quasi quanto il vecchio e porta una sciabola che un uomo normale non riuscirebbe nemmeno a sollevare. Guarda con rabbia un alleato che pugnala il vecchio, e quando le catene di Ace cadono alza le braccia al cielo con tutti gli altri. Nella ritirata sono i compagni a chiamarlo per nome: Jozu è una statua di ghiaccio, e solo lui può portarlo via.',
        en: 'He is nearly as big as the old man and carries a cutlass an ordinary man could not even lift. He watches in anger as an ally stabs the old man, and when Ace’s chains fall he throws his arms up with all the others. In the retreat his crewmates call him by name: Jozu is a statue of ice, and only he can carry him off.',
      },
      affiliation: [
        {
          episode: 482,
          value: {
            it: 'Pirati di Barbabianca, comandante di divisione',
            en: 'Whitebeard Pirates, division commander',
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
    },
    'salome': {
      role: { it: 'Serpente di Boa Hancock', en: 'Boa Hancock’s snake' },
      log: {
        it: 'È il serpente che accompagna l’imperatrice dalla nave fino al campo di battaglia, bianco a macchie rosa, con un teschio cornuto calato sulla testa come un elmo. Si arrotola sotto di lei per farle da trono, e non se ne allontana mai di molto. È a Salomè che l’imperatrice, in mezzo alla guerra, confida di non riuscire a smettere di preoccuparsi per Rufy.',
        en: 'It is the snake that goes with the empress from her ship to the battlefield, white with pink spots, a horned skull pulled down over its head like a helmet. It coils beneath her to serve as her throne, and never strays far from her. It is to Salome that the empress, in the middle of a war, confides that she cannot stop worrying about Luffy.',
      },
      status: [{ episode: 484, value: 'alive' }],
      affiliation: [
        {
          episode: 484,
          value: {
            it: 'Pirate Kuja, serpente dell’imperatrice',
            en: 'Kuja Pirates, the empress’s snake',
          },
        },
      ],
    },
    'bluejam': {
      role: {
        it: 'Capitano dei Pirati di Bluejam',
        en: 'Captain of the Bluejam Pirates',
      },
      log: {
        it: 'Comanda la ciurma di pirati che fa da padrona nella discarica fuori dalle mura del regno, e i suoi uomini la setacciano in cerca di chi ha rubato loro i soldi. Quando trova il suo sottoposto a terra, battuto da due bambini, non lo aiuta ad alzarsi: gli spara. Da quel giorno i suoi uomini cercano quei due in ogni angolo della discarica, e sul monte i briganti tremano all’idea che li trovino.',
        en: 'He runs the pirate crew that lords it over the rubbish tip outside the kingdom’s walls, and his men comb it for whoever stole their money. When he finds his underling on the ground, beaten by two boys, he does not help him up: he shoots him. From that day his men hunt those two through every corner of the tip, and up on the mountain the bandits shudder at the thought of them being found.',
      },
      status: [
        { episode: 495, value: 'alive' },
        { episode: 503, value: 'unknown' },
      ],
      affiliation: [
        {
          episode: 495,
          value: {
            it: 'Pirati di Bluejam, capitano',
            en: 'Bluejam Pirates, captain',
          },
        },
      ],
    },
    'porchemy': {
      role: {
        it: 'Pirata della ciurma di Bluejam',
        en: 'Pirate of Bluejam’s crew',
      },
      log: {
        it: 'Fa parte della ciurma di Bluejam e gira per la discarica a caccia di chi ha derubato i suoi compagni. Cattura Rufy, lo porta nella stiva di una nave rovesciata e prova con il martello, poi con i guanti chiodati, poi con la spada, senza cavargli una parola. Due bambini lo battono, e il suo capitano, trovandolo a terra, gli spara.',
        en: 'He belongs to Bluejam’s crew and prowls the rubbish tip hunting whoever robbed his crewmates. He catches Luffy, drags him into the hold of a capsized ship and tries a mallet, then the spiked gloves, then a sword, without getting a word out of him. Two boys beat him, and his captain, finding him on the ground, shoots him.',
      },
      status: [{ episode: 495, value: 'deceased' }],
      affiliation: [
        {
          episode: 495,
          value: {
            it: 'Pirati di Bluejam, membro',
            en: 'Bluejam Pirates, member',
          },
        },
      ],
    },
    'dogra': {
      role: {
        it: 'Brigante della famiglia Dadan',
        en: 'Bandit of the Dadan Family',
      },
      log: {
        it: 'È uno dei briganti di Dadan sul monte Colubo, il più basso di tutti, e ha aiutato a tirare su i bambini che la Marina ha lasciato alla banda. Il giorno in cui arriva il Drago Celeste è al porto, e vede la barca di Sabo prendere fuoco sotto i colpi della nave del Drago Celeste. Quando lo racconta Ace gli salta addosso, e lui giura di averlo visto con i suoi occhi e di non riuscire a crederci nemmeno lui.',
        en: 'He is one of Dadan’s bandits on Mount Colubo, the shortest of them all, and has helped raise the boys the Marines left with the gang. On the day the Celestial Dragon arrives he is at the harbour, and watches Sabo’s boat go up in flames under the Celestial Dragon’s guns. When he tells the others Ace throws himself on him, and he swears he saw it with his own eyes and cannot believe it himself.',
      },
      status: [{ episode: 503, value: 'alive' }],
      affiliation: [
        {
          episode: 503,
          value: {
            it: 'Famiglia Dadan, briganti di montagna, membro',
            en: 'Dadan Family, mountain bandits, member',
          },
        },
      ],
    },
    'haredas': {
      role: { it: 'Scienziato di Weatheria', en: 'Weatheria scientist' },
      log: {
        it: 'Vive su Weatheria, un’isola del cielo dove un gruppo di vecchi studia il tempo, e porta tunica e cappello a punta come un mago. Accoglie una ragazza precipitata davanti a casa sua, le cucina da mangiare e le mostra i nodi del vento, che liberano raffiche sempre più forti man mano che si sciolgono. Lei lo prende a pugni più di una volta, e alla fine se lo porta via sotto il braccio come ostaggio, mentre lui continua a sorridere.',
        en: 'He lives on Weatheria, a sky island where a group of old men study the weather, and wears a robe and a pointed hat like a wizard. He takes in a girl who crashes down outside his house, cooks for her and shows her the wind knots, which let loose stronger and stronger gusts as they are untied. She punches him more than once, and in the end carries him off under her arm as her hostage, while he goes on smiling.',
      },
      status: [{ episode: 508, value: 'alive' }],
      affiliation: [
        {
          episode: 508,
          value: { it: 'Weatheria, scienziato', en: 'Weatheria, scientist' },
        },
        {
          episode: 514,
          value: {
            it: 'Weatheria, scienziato; maestro di Nami',
            en: 'Weatheria, scientist; Nami’s teacher',
          },
        },
      ],
    },
    'kong': {
      role: {
        it: 'Comandante in capo del Governo Mondiale',
        en: 'Commander-in-chief of the World Government',
      },
      log: {
        it: 'Riceve Sengoku a Mary Geoise, dove il grand’ammiraglio arriva tre settimane dopo la guerra con le dimissioni in mano. Garp se n’è già andato allo stesso modo, e lui non nasconde la delusione di perdere insieme due uomini che servono dai tempi di Roger. Li lascia andare a patto che nomi e gradi restino negli archivi, perché alla Marina servono ancora.',
        en: 'He receives Sengoku at Mary Geoise, where the fleet admiral arrives three weeks after the war with his resignation in hand. Garp has already gone the same way, and he does not hide his disappointment at losing, together, two men who have served since Roger’s day. He lets them go on condition that their names and ranks stay on the records, because the Marines still need them.',
      },
      status: [{ episode: 511, value: 'alive' }],
      affiliation: [
        {
          episode: 511,
          value: {
            it: 'Governo Mondiale, comandante in capo',
            en: 'World Government, commander-in-chief',
          },
        },
      ],
    },
    // Named by Sengoku at 425 (chapter 530), where the anime also shows his
    // silhouette; the manga first shows him, in silhouette, at 957 and 962,
    // so the chapter is rounded up to 962. No devil fruit: no canonical
    // episode up to 1158 says which one he ate.
    'shiki': {
      chronicle: summitWarChronicles.shiki,
      role: {
        it: 'Pirata evaso da Impel Down',
        en: 'Pirate who escaped Impel Down',
      },
      log: {
        it: 'Impel Down si vanta che da lì non esce nessuno: la grande prigione ha tenuto centinaia di migliaia di detenuti senza una sola evasione. Quando arriva la notizia che Cappello di Paglia Rufy ci è entrato di nascosto, il grand’ammiraglio è sicuro che il ragazzo non ne uscirà vivo, e poi si corregge: uno c’è stato. Vent’anni fa un pirata chiamato Shiki il Leone dorato è diventato il primo e unico prigioniero nella storia della prigione a evadere.',
        en: 'Impel Down boasts that nobody leaves it: the great prison has held hundreds of thousands of prisoners without a single breakout. When word comes that Straw Hat Luffy has slipped inside, the Fleet Admiral is sure the boy will not walk out alive, and then corrects himself: there was one man. Twenty years ago a pirate called Shiki the Golden Lion became the first and only prisoner in the prison’s history to escape.',
      },
      affiliation: [
        {
          episode: 958,
          value: {
            it: 'Pirati di Rocks, ex membro',
            en: 'Rocks Pirates, former member',
          },
        },
      ],
      epithet: [
        { episode: 425, value: { it: 'Leone dorato', en: 'Golden Lion' } },
      ],
    },
  },
}
