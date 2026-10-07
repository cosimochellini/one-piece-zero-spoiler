import type { Saga } from './saga'
import { waterSevenChronicles } from './water-seven.chronicle'

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

const CIPHER_POL_0 = { it: 'Cipher Pol 0', en: 'Cipher Pol 0' }

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
      revealedAtChapter: 304,
      // 304, where the island is first seen, as its drawing shows it.
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
      revealedAtEpisode: 208,
      revealedAtChapter: 307,
      // 208: episode 207 shows him only unclearly and says his name only in
      // the next-episode preview. 208 shows him and has him say it.
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
      // 208, not 207: episode 207 shows her only as a silhouette and never
      // says her name; Foxy calls her by name in 208. 315 is a conservative
      // chapter kept from before; the wiki debut is 305.
      revealedAtEpisode: 208,
      revealedAtChapter: 315,
      name: { it: 'Porche', en: 'Porche' },
      summary: {
        it: 'L’idolo dei Pirati di Foxy, che porta un bastone ed è adorata da tutti gli uomini della ciurma.',
        en: 'The idol of the Foxy Pirates, who carries a baton and whom every man in the crew adores.',
      },
      visual: { art: 'porche', tint: 'pink' },
    },
    {
      id: 'hamburg',
      kind: 'character',
      // 208, not 207: episode 207 shows him only as a silhouette; Foxy says
      // his name in 208. 315 is a conservative chapter kept from before; the
      // wiki debut is 305.
      revealedAtEpisode: 208,
      revealedAtChapter: 315,
      name: { it: 'Hamburg', en: 'Hamburg' },
      summary: {
        it: 'Un uomo enorme, dall’aria di gorilla, della ciurma di Foxy, con una sciarpa leopardata, che è al fianco del suo capitano quando Foxy sfida i Cappello di Paglia a un Davy Back Fight.',
        en: 'A huge, gorilla-like man of Foxy’s crew in a leopard-spotted scarf, who is at his captain’s side when Foxy challenges the Straw Hats to a Davy Back Fight.',
      },
      visual: { art: 'hamburg', tint: 'ocher' },
    },
    {
      id: 'tonjit',
      kind: 'character',
      revealedAtEpisode: 207,
      revealedAtChapter: 305,
      name: { it: 'Tonjit', en: 'Tonjit' },
      summary: {
        it: 'Un vecchio che ha costruito i trampoli più alti del mondo, ha scoperto in cima di soffrire di vertigini ed è rimasto lassù dieci anni, finché un pirata di passaggio non ha spezzato il bambù.',
        en: 'An old man who built the tallest stilts in the world, found out at the top that he was afraid of heights, and spent ten years up there until a passing pirate broke the bamboo.',
      },
      visual: { art: 'tonjit', tint: 'sand' },
    },
    {
      id: 'itomimizu',
      kind: 'character',
      revealedAtEpisode: 209,
      revealedAtChapter: 307,
      // Rounded up to 307, the chapter that files Foxy, whom the text names.
      name: { it: 'Lombrico', en: 'Itomimizu' },
      summary: {
        it: 'Il telecronista dei Pirati di Foxy, un tipo magrissimo con un passamontagna a righe, che racconta il Davy Back Fight dal dorso di un passero gigante in volo sopra il percorso.',
        en: 'The Foxy Pirates’ announcer, a scrawny man in a striped hood, who calls the Davy Back Fight from the back of a huge sparrow circling over the course.',
      },
      visual: { art: 'itomimizu', tint: 'azure' },
    },
    {
      id: 'pickles',
      kind: 'character',
      revealedAtEpisode: 210,
      revealedAtChapter: 309,
      name: { it: 'Pickles', en: 'Pickles' },
      summary: {
        it: 'Un pirata di Foxy enorme, con una faccia da ippopotamo, le braccia lunghe e le gambe corte, uno dei tre Groggy Monsters che il capitano manda in campo per vincere la seconda prova.',
        en: 'A hulking Foxy pirate with a hippo’s face, long arms and short legs, one of the three Groggy Monsters the captain sends out to win the second round of his game.',
      },
      visual: { art: 'pickles', tint: 'green' },
    },
    {
      id: 'big-pan',
      kind: 'character',
      revealedAtEpisode: 210,
      revealedAtChapter: 315,
      // Rounded up to 315, the chapter that files Hamburg, whom the text names.
      name: { it: 'Big Pan', en: 'Big Pan' },
      summary: {
        it: 'Il più grosso dei tre Groggy Monsters di Foxy, che sovrasta perfino i compagni di squadra, con la barba arancione, una bocca piena di denti aguzzi e una pinna che gli spunta dalla schiena.',
        en: 'The biggest of Foxy’s three Groggy Monsters, towering even over his own teammates, with an orange beard, a mouthful of sharp teeth and a fin rising from his back.',
      },
      visual: { art: 'big-pan', tint: 'orange' },
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
      id: 'water-seven-arc',
      kind: 'arc',
      revealedAtEpisode: 229,
      revealedAtChapter: 323,
      // 323, where the city is first seen, as its drawing shows it.
      name: { it: 'Saga di Water Seven', en: 'Water Seven Saga' },
      summary: {
        it: 'Una città d’acqua di maestri d’ascia, dove la ciurma arriva per far riparare la Going Merry.',
        en: 'A city of shipwrights built on water, where the crew comes to have the Going Merry repaired.',
      },
      visual: { art: 'water-seven-arc', tint: 'teal' },
    },
    {
      id: 'yokozuna',
      kind: 'character',
      revealedAtEpisode: 229,
      revealedAtChapter: 323,
      // Rounded up to 323, the chapter that opens his arc.
      name: { it: 'Yokozuna', en: 'Yokozuna' },
      summary: {
        it: 'Una rana gigante con il ciuffo annodato dei lottatori di sumo, che nuota a stile libero e ogni giorno si pianta sul binario del treno del mare per misurare la sua forza contro la locomotiva.',
        en: 'A giant frog with a sumo wrestler’s topknot, who swims the front crawl and plants himself on the sea train’s track every day to test his strength against the locomotive.',
      },
      visual: { art: 'yokozuna', tint: 'ocher' },
    },
    {
      id: 'water-seven',
      kind: 'place',
      revealedAtEpisode: 229,
      revealedAtChapter: 323,
      // Kuzan reads Water Seven off the Log Pose at 228.
      nameSaidAt: 228,
      name: { it: 'Water Seven', en: 'Water Seven' },
      summary: {
        it: 'La città a cui porta il Log Pose dopo la stazione sul mare, costruita per metà sotto il livello dell’acqua, con una grande fontana in cima e i migliori carpentieri del mondo.',
        en: 'The city the Log Pose points to after the station on the sea, built half below the water, with a great fountain at the top and the world’s best shipwrights.',
      },
      visual: { art: 'water-seven', tint: 'cyan' },
    },
    {
      id: 'puffing-tom',
      kind: 'place',
      revealedAtEpisode: 229,
      revealedAtChapter: 323,
      // Rounded up to 323, the chapter that opens its arc.
      name: { it: 'Puffing Tom', en: 'Puffing Tom' },
      summary: {
        it: 'Un treno a vapore con le ruote a pale che corre su un binario posato appena sotto il mare, e ogni giorno porta passeggeri, navi e posta da un’isola all’altra.',
        en: 'A steam train with paddlewheels that runs on a rail laid just under the sea, carrying passengers, ships and mail from island to island every day.',
      },
      visual: { art: 'puffing-tom', tint: 'red' },
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
      revealedAtEpisode: 232,
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
        it: 'La capostazione del treno del mare, una gran bevitrice, che conosce a memoria l’unico binario che esce da Water Seven.',
        en: 'The station master of the sea train, a heavy drinker, who knows by heart the one track that runs out of Water Seven.',
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
      revealedAtEpisode: 231,
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
        it: 'Un carpentiere della Galley-La con un piccione bianco sulla spalla, l’uomo che la folla dei cantieri acclama più di chiunque altro.',
        en: 'A Galley-La shipwright with a white pigeon on his shoulder, the man the crowd at the docks cheers louder than anyone.',
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
        it: 'La segretaria di Iceburg, con gli occhiali e un raccoglitore blu, che gli riferisce che i pirati del Dock 1 si rifiutano di pagare le riparazioni e definisce il loro rifiuto una molestia sessuale.',
        en: 'Iceburg’s secretary, with glasses and a blue binder, who tells him that the pirates at Dock One won’t pay for their repairs and calls it sexual harassment.',
      },
      visual: { art: 'kalifa', tint: 'pink' },
    },
    {
      id: 'blueno',
      kind: 'character',
      revealedAtEpisode: 240,
      revealedAtChapter: 339,
      name: { it: 'Blueno', en: 'Blueno' },
      summary: {
        it: 'Il barista di un locale nel centro di Water Seven, con i capelli alzati in due corna, che lucida i bicchieri dietro il bancone e chiede a Franky se ha i soldi prima di riempirgli le bottiglie di cola.',
        en: 'The barkeeper of a bar in downtown Water Seven, his hair rising in two horns, who polishes glasses behind the counter and asks Franky whether he can pay before filling his cola bottles.',
      },
      visual: { art: 'blueno', tint: 'sand' },
    },
    {
      id: 'hattori',
      kind: 'character',
      revealedAtEpisode: 232,
      revealedAtChapter: 327,
      name: { it: 'Hattori', en: 'Hattori' },
      summary: {
        it: 'Un piccione bianco con una cravattina rossa, appollaiato sulla spalla di un caposquadra della Galley-La, che parla al posto suo muovendo becco e ali a ogni parola.',
        en: 'A white pigeon in a little red tie who perches on a Galley-La foreman’s shoulder and does all the talking for him, moving his beak and wings to every word.',
      },
      visual: { art: 'hattori', tint: 'flamingo' },
    },
    {
      id: 'kiwi-and-mozu',
      kind: 'character',
      // On screen from 233 and named at 237, but their one object, the
      // katanas, is first shown at the main gate of Enies Lobby
      // (ch. 377 p. 12, ep. 265), so they open there.
      revealedAtEpisode: 265,
      revealedAtChapter: 377,
      // Franky calls them by name on finding the Franky House in ruins
      // (ch. 334, ep. 237).
      nameSaidAt: 237,
      name: { it: 'Kiwi e Mozu', en: 'Kiwi and Mozu' },
      summary: {
        it: 'Due sorelle della Franky Family con la stessa pettinatura squadrata e due katana dalla guardia quadrata, che parlano quasi sempre all’unisono.',
        en: 'Two sisters of the Franky Family with the same square haircut and two katanas with square guards, who nearly always speak in unison.',
      },
      visual: { art: 'kiwi-and-mozu', tint: 'blue' },
    },
    {
      id: 'zambai',
      kind: 'character',
      // On screen from 230 and named at 234, but his one object, the
      // bazooka, is first shown at the main gate of Enies Lobby (265), and
      // no chapter is cited for it. He opens with the giant it helps bring
      // down: episode 266, which adapts ch. 378.
      revealedAtEpisode: 266,
      revealedAtChapter: 378,
      // His name is first said in the raid on the Franky House (234).
      nameSaidAt: 234,
      name: { it: 'Zambai', en: 'Zambai' },
      summary: {
        it: 'Il vice della Franky Family, che porta un bazooka e guida gli smantellatori quando il capo non c’è.',
        en: 'The Franky Family’s second in command, who carries a bazooka and leads the dismantlers when the boss is away.',
      },
      visual: { art: 'zambai', tint: 'red' },
    },
    {
      id: 'peepley-lulu',
      kind: 'character',
      revealedAtEpisode: 233,
      revealedAtChapter: 328,
      name: { it: 'Peepley Lulu', en: 'Peepley Lulu' },
      summary: {
        it: 'Un caposquadra della Galley-La con gli occhiali scuri e un ciuffo che gli sta dritto in testa, che torna al Dock 1 dopo aver visto portare via un uomo dal naso lungo senza farci caso.',
        en: 'A Galley-La foreman in dark glasses, a tuft of hair standing straight up off his head, who strolls back into Dock One having watched a long-nosed man being carried off and thought nothing of it.',
      },
      visual: { art: 'peepley-lulu', tint: 'violet' },
    },
    {
      id: 'corgi',
      kind: 'character',
      revealedAtEpisode: 234,
      revealedAtChapter: 331,
      name: { it: 'Coogy', en: 'Corgi' },
      summary: {
        it: 'Un funzionario del Governo Mondiale che torna di continuo da Iceburg con nuove offerte per qualcosa che il sindaco custodisce, e ogni volta se ne va a mani vuote e di pessimo umore.',
        en: 'A World Government official who keeps calling on Iceburg with offers for something the mayor is said to have, and walks out every time empty-handed and scowling.',
      },
      visual: { art: 'corgi', tint: 'blue' },
    },
    {
      id: 'franky',
      kind: 'character',
      revealedAtEpisode: 235,
      revealedAtChapter: 329,
      // The Franky Family names itself to Zoro at 231, two episodes before Franky is met.
      nameSaidAt: 231,
      name: { it: 'Franky', en: 'Franky' },
      summary: {
        it: 'Il capo mascherato della Franky Family, una banda di smantellatori di navi di Water Seven, che se ne va con i duecento milioni che i suoi uomini hanno rubato a Usop.',
        en: 'The masked boss of the Franky Family, a gang of ship dismantlers in Water Seven, who walks off with the two hundred million his men stole from Usopp.',
      },
      visual: { art: 'franky', tint: 'cyan' },
    },
    {
      id: 'tilestone',
      kind: 'character',
      revealedAtEpisode: 238,
      revealedAtChapter: 337,
      // 337, not 336: his drawing is the log he swings at Franky in ch. 337,
      // which episode 238 adapts.
      name: { it: 'Tilestone', en: 'Tilestone' },
      summary: {
        it: 'Un caposquadra della Galley-La grosso come un armadio che dice tutto urlando, e che irrompe nella stanza di un convalescente con tanto baccano da farsi buttare fuori prima ancora di annunciare una rissa al cantiere.',
        en: 'A hulking Galley-La foreman who says everything at a shout, and who bursts into a sickroom so loudly that he is thrown straight back out before he can report a fight at the docks.',
      },
      visual: { art: 'tilestone', tint: 'ocher' },
    },
    {
      id: 'tom',
      kind: 'character',
      revealedAtEpisode: 248,
      revealedAtChapter: 357,
      name: { it: 'Tom', en: 'Tom' },
      summary: {
        it: 'Un maestro d’ascia uomo-pesce, chiamato il migliore del mondo, che costruì la nave del Re dei Pirati e poi il treno del mare che doveva salvare Water Seven.',
        en: 'A fish-man master shipwright, called the best in the world, who built the Pirate King’s ship and then the sea train that was meant to save Water Seven.',
      },
      visual: { art: 'tom', tint: 'cyan' },
    },
    {
      id: 'spandam',
      kind: 'character',
      revealedAtEpisode: 249,
      revealedAtChapter: 360,
      name: { it: 'Spandam', en: 'Spandam' },
      summary: {
        it: 'Un agente del Governo Mondiale che viene a Water Seven a cercare i progetti di un’arma antica, e che per averli è pronto a far affondare una nave giudiziaria.',
        en: 'A World Government agent who comes to Water Seven after the blueprints of an ancient weapon, and who will sink a Judicial Ship to get them.',
      },
      visual: { art: 'spandam', tint: 'wine' },
    },
    {
      id: 'jerry',
      kind: 'character',
      revealedAtEpisode: 253,
      revealedAtChapter: 362,
      name: { it: 'Jerry', en: 'Jerry' },
      summary: {
        it: 'Un agente del Governo così alto che il suo busto riempie il soffitto della carrozza che sorveglia, che si proclama campione imbattuto di pugilato del South Blue e porta i guantoni rossi per dimostrarlo.',
        en: 'A government agent so tall that his upper body fills the ceiling of the train car he guards, who calls himself the undefeated boxing champion of the South Blue and wears red gloves to prove it.',
      },
      visual: { art: 'jerry', tint: 'red' },
    },
    {
      id: 'wanze',
      kind: 'character',
      revealedAtEpisode: 258,
      revealedAtChapter: 368,
      name: { it: 'Wanze', en: 'Wanze' },
      summary: {
        it: 'Un cuoco del treno del mare che fa il ramen mangiando farina e tirandosi i noodle fuori dal naso, e che sbarra la quarta carrozza con uno stile di lotta che chiama Ramen Kenpo.',
        en: 'A cook on the sea train who makes ramen by eating flour and pulling the noodles out of his nose, and who blocks the fourth car with a fighting style he calls Ramen Kenpo.',
      },
      visual: { art: 'wanze', tint: 'orange' },
    },
    {
      id: 'nero',
      kind: 'character',
      revealedAtEpisode: 259,
      revealedAtChapter: 370,
      // 370, where episode 259 ends: the log runs through his chapter-370 techniques.
      // "Nero" is Italian for black: the Black Cat Pirates are the Gatto Nero from episode 9.
      commonWord: true,
      name: { it: 'Nero', en: 'Nero' },
      summary: {
        it: 'Un agente del Cipher Pol 9 con una piuma sul cappello, che aspetta sul tetto della terza carrozza del treno del mare, sicuro che chi arriva proverà a scavalcare il suo vagone passando di sopra.',
        en: 'A Cipher Pol 9 agent with a plume in his hat, who waits on the roof of the third car of the sea train, sure that whoever comes will try to get past his car along the top.',
      },
      visual: { art: 'nero', tint: 'lavender' },
    },
    {
      id: 't-bone',
      kind: 'character',
      revealedAtEpisode: 261,
      revealedAtChapter: 371,
      name: { it: 'T-Bone', en: 'T Bone' },
      summary: {
        it: 'Un capitano della Marina scarno, con una faccia che spaventa i suoi stessi uomini, che fascia i loro graffi con strisce strappate al mantello e che, a sentire le voci, taglia in due qualunque nave.',
        en: 'A gaunt Marine captain whose face frightens his own men, who binds their scratches with strips torn from his cape and who, by reputation, can cut clean through any ship.',
      },
      visual: { art: 't-bone', tint: 'azure' },
    },
    {
      id: 'enies-lobby-arc',
      kind: 'arc',
      revealedAtEpisode: 264,
      revealedAtChapter: 375,
      name: { it: 'Enies Lobby', en: 'Enies Lobby' },
      summary: {
        it: 'L’isola giudiziaria del Governo Mondiale, dove il treno del mare porta i prigionieri, e dove la ciurma sbarca da un secondo treno per riprendersi una compagna.',
        en: 'The World Government’s judicial island, where the sea train takes its prisoners, and where the crew comes ashore off a second train to take back one of its own.',
      },
      visual: { art: 'enies-lobby-arc', tint: 'yellow' },
    },
    {
      id: 'jabra',
      kind: 'character',
      revealedAtEpisode: 264,
      revealedAtChapter: 385,
      name: { it: 'Jabra', en: 'Jabra' },
      summary: {
        it: 'Un agente del Cipher Pol 9 con una lunga treccia e una fascia rossa in vita, che rimprovera Kumadori perché un uomo non si scusa così facilmente, e si offre di spiegare lui stesso al capo la missione andata storta.',
        en: 'A Cipher Pol 9 agent with a long braid and a red sash, who tells Kumadori that a man does not apologise so easily, and offers to explain the botched mission to the chief himself.',
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
      id: 'sodom-and-gomorrah',
      kind: 'character',
      revealedAtEpisode: 264,
      revealedAtChapter: 383,
      name: { it: 'Sodoma e Gomorra', en: 'Sodom and Gomorrah' },
      summary: {
        it: 'Due enormi cavalli marini della Franky Family, che nuotano dietro il secondo treno del mare trainando la barca della banda e, a Enies Lobby, vengono mandati oltre la recinzione a sfondare il cancello.',
        en: 'Two enormous sea horses of the Franky Family, who swim behind the second sea train hauling the family’s boat and, at Enies Lobby, are sent over the fence to break down the gate.',
      },
      visual: { art: 'sodom-and-gomorrah', tint: 'green' },
    },
    {
      id: 'enies-lobby',
      kind: 'place',
      revealedAtEpisode: 264,
      revealedAtChapter: 376,
      name: { it: 'Enies Lobby', en: 'Enies Lobby' },
      summary: {
        it: 'Un’isola dove la notte non scende mai, sopra un buco nel mare con una cascata tutto intorno, un cancello principale davanti e le Porte della Giustizia alle spalle.',
        en: 'An island where night never falls, set over a hole in the sea with a waterfall all round it, a main gate in front and the Gates of Justice behind.',
      },
      visual: { art: 'enies-lobby', tint: 'sand' },
    },
    {
      id: 'oimo-and-kashi',
      kind: 'character',
      revealedAtEpisode: 265,
      revealedAtChapter: 385,
      name: { it: 'Oimo e Kashi', en: 'Oimo and Kashi' },
      summary: {
        it: 'Due giganti che sorvegliano il cancello di un’isola giudiziaria, uno con una clava chiodata e l’altro con una grande ascia, davanti a una porta che nessuno ha mai forzato.',
        en: 'Two giants who guard the gate of a judicial island, one with a studded club and the other with a broad axe, before a door nobody has ever forced.',
      },
      visual: { art: 'oimo-and-kashi', tint: 'ocher' },
    },
    {
      id: 'baskerville',
      kind: 'character',
      revealedAtEpisode: 267,
      revealedAtChapter: 379,
      name: { it: 'Baskerville', en: 'Baskerville' },
      summary: {
        it: 'Il giudice supremo di Enies Lobby, una figura altissima con tre teste, ognuna sotto il suo cappello, a cui tocca guidare la difesa dell’isola quando nessuno riesce a raggiungere Spandam.',
        en: 'The chief justice of Enies Lobby, a towering figure with three heads, each under its own hat, who is left to run the island’s defence when nobody can reach Spandam.',
      },
      visual: { art: 'baskerville', tint: 'violet' },
    },
    {
      id: 'jaguar-d-saul',
      kind: 'character',
      revealedAtEpisode: 275,
      revealedAtChapter: 392,
      name: { it: 'Jaguar D. Saul', en: 'Jaguar D. Saul' },
      summary: {
        it: 'Un gigante naufragato sulla spiaggia di Ohara, vent’anni prima, che ride facendo «dereshishi» e diventa il primo amico della piccola Robin.',
        en: 'A giant washed up on the beach of Ohara twenty years earlier, who laughs “dereshishi” and becomes little Robin’s first friend.',
      },
      visual: { art: 'jaguar-d-saul', tint: 'sand' },
    },
    {
      id: 'clover',
      kind: 'character',
      revealedAtEpisode: 275,
      revealedAtChapter: 391,
      name: { it: 'Clover', en: 'Clover' },
      summary: {
        it: 'Il capo degli studiosi di Ohara, un professore con barba e capelli a forma di foglie, che nomina archeologa la piccola Robin di otto anni e le vieta l’unico argomento che le interessa.',
        en: 'The head of Ohara’s scholars, a professor whose hair and beard grow out like leaves, who makes eight-year-old Robin an archaeologist and forbids her the one subject she wants.',
      },
      visual: { art: 'clover', tint: 'green' },
    },
    {
      id: 'spandine',
      kind: 'character',
      revealedAtEpisode: 276,
      revealedAtChapter: 394,
      // 394, where episode 276 ends: he lands on Ohara in 393 and 394.
      name: { it: 'Spandine', en: 'Spandine' },
      summary: {
        it: 'Il capo del Cipher Pol 9 di vent’anni prima, che sbarca a Ohara con i suoi agenti e le navi da guerra del Governo in attesa al largo per dare una lezione agli studiosi dell’isola.',
        en: 'The chief of Cipher Pol 9 twenty years earlier, who lands on Ohara with his agents and the Government’s warships waiting offshore to make an example of the island’s scholars.',
      },
      visual: { art: 'spandine', tint: 'ocher' },
    },
    {
      id: 'nico-olvia',
      kind: 'character',
      revealedAtEpisode: 276,
      revealedAtChapter: 393,
      name: { it: 'Nico Olvia', en: 'Nico Olvia' },
      summary: {
        it: 'Un’archeologa di Ohara che torna di nascosto sull’isola dopo anni passati a cercare i Poneglyph, unica sopravvissuta della sua spedizione, ed è la madre della piccola Robin.',
        en: 'An archaeologist of Ohara who slips back onto the island after years away searching for Poneglyphs, the only survivor of her expedition, and who is little Robin’s mother.',
      },
      visual: { art: 'nico-olvia', tint: 'lavender' },
    },
    {
      id: 'funkfreed',
      kind: 'character',
      revealedAtEpisode: 285,
      revealedAtChapter: 400,
      name: { it: 'Funkfleed', en: 'Funkfreed' },
      summary: {
        it: 'L’elefante di Spandam, che lo segue per Enies Lobby come un animale da compagnia e poi, a un suo comando, diventa la sciabola che il suo padrone porta in spalla.',
        en: 'Spandam’s elephant, who trots after him around Enies Lobby like a pet and then, at a word from his master, turns into the cutlass Spandam carries on his shoulder.',
      },
      visual: { art: 'funkfreed', tint: 'ivory' },
    },
    {
      id: 'post-enies-lobby',
      kind: 'arc',
      revealedAtEpisode: 313,
      revealedAtChapter: 431,
      name: { it: 'Dopo Enies Lobby', en: 'Post-Enies Lobby' },
      summary: {
        it: 'Di nuovo a Water Seven, la ciurma dorme e mangia mentre la città ripara i danni dell’Aqua Laguna, finché nel porto non attracca una nave della Marina.',
        en: 'Back in Water Seven, the crew sleeps and eats while the city repairs what Aqua Laguna broke, until a Marine warship docks in the harbour.',
      },
      visual: { art: 'post-enies-lobby', tint: 'blue' },
    },
    {
      id: 'monkey-d-garp',
      kind: 'character',
      revealedAtEpisode: 313,
      revealedAtChapter: 431,
      name: { it: 'Monkey D. Garp', en: 'Monkey D. Garp' },
      summary: {
        it: 'Un viceammiraglio della Marina, il leggendario marine che mise alle strette Gold Roger, che sfonda un muro per svegliare Rufy con un pugno che fa male anche alla gomma, e che Rufy chiama nonno.',
        en: 'A Marine vice admiral, the legendary Marine who cornered Gold Roger, who punches through a wall to wake Luffy with a fist that hurts even rubber, and whom Luffy calls Grandpa.',
      },
      visual: { art: 'monkey-d-garp', tint: 'red' },
    },
    {
      id: 'thousand-sunny',
      kind: 'ship',
      revealedAtEpisode: 324,
      revealedAtChapter: 439,
      name: { it: 'Thousand Sunny', en: 'Thousand Sunny' },
      summary: {
        it: 'Un brigantino con una testa di leone a prua, costruito di nascosto con un legno rarissimo e varato per una ciurma che aveva appena perso la sua nave.',
        en: 'A brigantine with a lion’s head at the prow, built in secret from a rare wood and launched for a crew that had just lost the ship it loved.',
      },
      visual: { art: 'thousand-sunny', tint: 'yellow' },
    },
    {
      id: 'thatch',
      kind: 'character',
      revealedAtEpisode: 325,
      revealedAtChapter: 440,
      name: { it: 'Satch', en: 'Thatch' },
      summary: {
        it: 'Il comandante della quarta divisione dei Pirati di Barbabianca, ucciso da un compagno della sua stessa ciurma, Teach, per il frutto del diavolo che aveva trovato e non aveva ancora mangiato.',
        en: 'The commander of the fourth division of the Whitebeard Pirates, killed by a man from his own crew, Teach, for the Devil Fruit he had found and had not yet eaten.',
      },
      visual: { art: 'thatch', tint: 'orange' },
    },
  ],

  dossiers: {
    'foxy': {
      role: {
        it: 'Capitano dei Pirati di Foxy',
        en: 'Captain of the Foxy Pirates',
      },
      log: {
        it: 'Sfida chi passa da Long Ring Long Land al Davy Back Fight, tre prove con gli uomini dell’avversario come posta. La sua ciurma è enorme perché l’ha messa insieme così, una vittoria alla volta, e lo acclama. Basta una parola sgarbata per abbatterlo, e un attimo dopo è di nuovo in piedi.',
        en: 'He challenges whoever passes Long Ring Long Land to the Davy Back Fight, three rounds with the other crew’s people as the stake. His own crew is enormous because he assembled it exactly this way, one win at a time, and it cheers him on. One rude word is enough to leave him slumped and gloomy, and he is back on his feet moments later.',
      },
      affiliation: [
        {
          episode: 208,
          value: {
            it: 'Pirati di Foxy, capitano',
            en: 'Foxy Pirates, captain',
          },
        },
      ],
      // First said in 209, where the announcer calls him "Silver Fox" Foxy
      // as he rides in on Hamburg, the scene that closes chapter 307.
      epithet: [
        {
          episode: 209,
          chapter: 307,
          value: { it: 'La Volpe d’Argento', en: 'Silver Fox' },
        },
      ],
      devilFruit: [{ episode: 210, chapter: 309, value: ['slow-slow-fruit'] }],
    },
    'porche': {
      role: { it: 'Idolo dei Pirati di Foxy', en: 'Idol of the Foxy Pirates' },
      log: {
        it: 'La ciurma la tratta da idolo, e tutti gli uomini la adorano. È al fianco di Foxy quando lui fa cadere il cavallo di Tonjit e sfida i Cappello di Paglia, e quando Foxy sostiene che Rufy ha già accettato, lei gli dà ragione: l’ha sentito anche lei.',
        en: 'The crew treats her as its idol, and every man in it adores her. She is at Foxy’s side when he brings down Tonjit’s horse and challenges the Straw Hats, and when Foxy claims that Luffy has already agreed, she backs him up: she heard it too.',
      },
      affiliation: [
        { episode: 208, value: { it: 'Pirati di Foxy', en: 'Foxy Pirates' } },
      ],
    },
    'hamburg': {
      role: {
        it: 'Combattente dei Pirati di Foxy',
        en: 'Fighter of the Foxy Pirates',
      },
      log: {
        it: 'Porta la maschera e i guanti lunghi dei Pirati di Foxy come il resto della ciurma, e una sciarpa leopardata. È con Foxy e Porche quando la loro nave blocca la Going Merry, e sta alle spalle del suo capitano mentre Foxy sfida i Cappello di Paglia.',
        en: 'He wears the Foxy Pirates’ mask and long gloves like the rest of the crew, and a leopard-spotted scarf. He is with Foxy and Porche when their ship catches the Going Merry, and stands behind his captain while Foxy challenges the Straw Hats.',
      },
      affiliation: [
        { episode: 208, value: { it: 'Pirati di Foxy', en: 'Foxy Pirates' } },
      ],
    },
    'tonjit': {
      chronicle: waterSevenChronicles.tonjit,
      role: {
        it: 'Abitante di Long Ring Long Land',
        en: 'Resident of Long Ring Long Land',
      },
      log: {
        it: 'Ha fatto i trampoli con il bambù dell’isola e ci è salito per il record, senza pensare nemmeno per un attimo a come sarebbe sceso. Dopo dieci anni è venuto giù con appena un po’ di sangue dal naso, e ha salutato tre sconosciuti come se li conoscesse da una vita. Su Long Ring Long Land, spiega, la prateria è così vasta e la vita così tranquilla che tutto si allunga.',
        en: 'He made his stilts from the island’s own bamboo and climbed them for the record, without once thinking about how he would get down. He came down after ten years with nothing worse than a nosebleed, and greeted three strangers as though he had known them all his life. On Long Ring Long Land, he explains, the plain is so wide and life so easy that everything grows long.',
      },
      affiliation: [
        {
          episode: 208,
          value: {
            it: 'Tribù nomade di Long Ring Long Land',
            en: 'Nomad tribe of Long Ring Long Land',
          },
        },
      ],
      origin: [
        {
          episode: 208,
          value: {
            it: 'Long Ring Long Land, Rotta Maggiore',
            en: 'Long Ring Long Land, Grand Line',
          },
        },
      ],
    },
    'itomimizu': {
      chronicle: waterSevenChronicles.itomimizu,
      role: {
        it: 'Telecronista del Davy Back Fight',
        en: 'Davy Back Fight announcer',
      },
      log: {
        it: 'Cavalca Chuchun, un passero abbastanza grande da portare un uomo, e segue la gara dall’alto perché niente del percorso gli sfugga. Parla in fretta e senza pause, fa il tifo per i trucchi della sua ciurma e li annuncia uno per uno mentre accadono. Per i Cappello di Paglia non ha parole gentili, ma non finge di non vedere quello che riescono a fare.',
        en: 'He rides Chuchun, a sparrow big enough to carry a man, and follows the race from overhead so that nothing on the course escapes him. He talks fast and without a pause, cheers his own crew’s tricks and names each one as it happens. He has no kind words for the Straw Hats, but he does not pretend not to see what they pull off.',
      },
      affiliation: [
        { episode: 209, value: { it: 'Pirati di Foxy', en: 'Foxy Pirates' } },
      ],
    },
    'pickles': {
      chronicle: waterSevenChronicles.pickles,
      role: {
        it: 'Groggy Monster dei Pirati di Foxy',
        en: 'Groggy Monster of the Foxy Pirates',
      },
      log: {
        it: 'È uno dei Groggy Monsters, i tre uomini più grossi della ciurma di Foxy, che il capitano chiama per nome per il Groggy Ring. Veste di verde, con due spallacci tondi, e ha braccia lunghe che pendono sopra due gambe corte. La sua squadra avrà tre giocatori contro due, perché nella prima prova i Cappello di Paglia hanno perso Chopper.',
        en: 'He is one of the Groggy Monsters, the three biggest men in Foxy’s crew, whom the captain calls out by name for the Groggy Ring. He dresses in green, with round plates on his shoulders, and his long arms hang over a pair of short legs. His side will field three players against two, because the first round has cost the Straw Hats Chopper.',
      },
      affiliation: [
        {
          episode: 210,
          value: {
            it: 'Pirati di Foxy, Groggy Monsters',
            en: 'Foxy Pirates, Groggy Monsters',
          },
        },
      ],
    },
    'big-pan': {
      chronicle: waterSevenChronicles['big-pan'],
      role: {
        it: 'Groggy Monster dei Pirati di Foxy',
        en: 'Groggy Monster of the Foxy Pirates',
      },
      log: {
        it: 'Foxy lo chiama in campo con Hamburg e Pickles per la seconda prova, il Groggy Ring, dove in ogni squadra un giocatore fa da pallone. È più alto di qualunque altro uomo della ciurma, con slip, stivali e guanti gialli e la maschera dei Pirati di Foxy sul viso. Accanto a lui, i due Cappello di Paglia che devono giocare sembrano minuscoli.',
        en: 'Foxy calls him out with Hamburg and Pickles for the second round, the Groggy Ring, where one player on each side is the ball. He stands taller than any other man in the crew, in yellow swim briefs, boots and gloves, with the Foxy Pirates’ mask over his face. Beside him, the two Straw Hats who have to play look tiny.',
      },
      affiliation: [
        {
          episode: 210,
          value: {
            it: 'Pirati di Foxy, Groggy Monsters',
            en: 'Foxy Pirates, Groggy Monsters',
          },
        },
      ],
    },
    'kuzan': {
      chronicle: waterSevenChronicles.kuzan,
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
        // Jinbe tells it at 570 (chapter 650).
        {
          episode: 570,
          chapter: 650,
          value: { it: 'Ha lasciato la Marina', en: 'Left the Marines' },
        },
        // The Five Elders tell it at 736 (chapter 793).
        {
          episode: 736,
          chapter: 793,
          value: { it: 'Pirati di Barbanera', en: 'Blackbeard Pirates' },
        },
        // The anime drops chapter 1081's "tenth ship": the first to say it is
        // the caption at 1156 (chapter 1126).
        {
          episode: 1156,
          chapter: 1126,
          value: {
            it: 'Pirati di Barbanera, capitano della decima nave',
            en: 'Blackbeard Pirates, tenth ship captain',
          },
        },
      ],
      epithet: [{ episode: 227, value: { it: 'Aokiji', en: 'Aokiji' } }],
      devilFruit: [{ episode: 227, value: ['ice-ice-fruit'] }],
    },
    'yokozuna': {
      chronicle: waterSevenChronicles.yokozuna,
      role: { it: 'Rana gigante', en: 'Giant frog' },
      log: {
        it: 'Nuota come un uomo più che come una rana, ed è per questo che la ciurma lo nota, e il primo pensiero di Rufy è la cena. Quando arriva il treno del mare non si sposta: si mette in guardia sui binari e incassa il colpo in pieno. Alla stazione dicono che non c’è verso di ucciderlo, e che è il guaio peggiore che abbiano.',
        en: 'He swims like a man rather than a frog, which is why the crew notices him at all, and Luffy’s first thought is dinner. When the sea train comes he does not move: he squares up on the rails and takes the full blow. At the station they say there is no killing him, and that he is the worst trouble they have.',
      },
      affiliation: [
        {
          episode: 248,
          value: {
            it: 'Tom’s Workers, animale domestico',
            en: 'Tom’s Workers, pet',
          },
        },
      ],
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
      affiliation: [{ episode: 232, value: GALLEY_LA_DOCK_ONE }],
      origin: [{ episode: 232, value: WATER_SEVEN }],
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
        it: 'Corre sui binari della Stazione Shift e non ha paura di niente, nemmeno del mare che arriva fin sulla banchina. La segue sempre Gonbe, un animale che miagola ma sembra un coniglio e mangia l’erba. Conosce i passaggi della città meglio degli adulti e li indica volentieri a chi si perde.',
        en: 'She runs along the rails of Shift Station and is frightened of nothing, not even the sea coming up over the platform. Gonbe follows her everywhere, an animal that meows but looks like a rabbit and eats grass. She knows the city’s back ways better than the grown-ups and gladly points them out.',
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
        it: 'Lavora al Dock 1 con gli altri caposquadra e si arrampica ovunque, con una calma che non lo abbandona nemmeno a venti metri d’altezza. Parla poco e con una cadenza tutta sua, e quando gli chiedono di valutare una nave dice quello che pensa senza girarci intorno. A Water Seven nessuno trova strano che un maestro d’ascia passi la giornata sui tetti.',
        en: 'He works Dock One alongside the other foremen and climbs anything, with a calm that does not leave him twenty metres up either. He speaks little, in a drawl of his own, and when he is asked to price a ship he says what he thinks without dressing it up. Nobody in Water Seven finds it odd that a shipwright spends his day on the rooftops.',
      },
      affiliation: [
        { episode: 231, value: GALLEY_LA_DOCK_ONE },
        { episode: 244, value: CIPHER_POL_9 },
        { episode: 886, chapter: 907, value: CIPHER_POL_0 },
      ],
      devilFruit: [{ episode: 286, value: ['ox-ox-fruit-model-giraffe'] }],
    },
    'rob-lucci': {
      chronicle: waterSevenChronicles['rob-lucci'],
      role: DOCK_ONE,
      log: {
        it: 'Ai cantieri della Galley-La, poco dopo che i carpentieri hanno messo al tappeto una ciurma pirata che non voleva pagare le riparazioni, una folla si raduna ad acclamarlo. Un piccione bianco gli sta sulla spalla ovunque vada. Ai curiosi non dice nulla, e non ne ha bisogno: per Water Seven gli uomini della Galley-La sono l’orgoglio della città.',
        en: 'At the Galley-La docks, not long after the shipwrights knocked flat a pirate crew that would not pay for its repairs, a crowd gathers to praise him. A white pigeon rides on his shoulder wherever he goes. He says nothing to the onlookers and does not need to: for Water Seven, the Galley-La men are the pride of the city.',
      },
      status: [{ episode: 230, value: 'alive' }],
      affiliation: [
        { episode: 230, value: GALLEY_LA_DOCK_ONE },
        { episode: 244, value: CIPHER_POL_9 },
        {
          episode: 266,
          value: {
            it: 'Cipher Pol 9, l’agente più forte',
            en: 'Cipher Pol 9, strongest agent',
          },
        },
        { episode: 746, chapter: 801, value: CIPHER_POL_0 },
      ],
      devilFruit: [{ episode: 246, value: ['cat-cat-fruit-model-leopard'] }],
    },
    'kalifa': {
      role: { it: 'Segretaria di Iceburg', en: 'Iceburg’s secretary' },
      log: {
        it: 'Quando al Dock 1 si raduna la folla, è al fianco di Iceburg e gli spiega cosa succede: i pirati a cui il cantiere ha appena riparato la nave dicono che non pagheranno. Lei lo definisce una molestia sessuale, e Iceburg è d’accordo. Porta gli occhiali e i capelli raccolti in uno chignon.',
        en: 'When a crowd gathers at Dock One, she is at Iceburg’s side and tells him what is going on: the pirates whose ship the yard has just repaired say they won’t pay. She calls it sexual harassment, and Iceburg agrees. She wears glasses and her hair up in a bun.',
      },
      affiliation: [
        {
          episode: 230,
          value: {
            it: 'Galley-La Company, segretaria di Iceburg',
            en: 'Galley-La Company, Iceburg’s secretary',
          },
        },
        { episode: 244, value: CIPHER_POL_9 },
      ],
      devilFruit: [{ episode: 293, value: ['bubble-bubble-fruit'] }],
    },
    'blueno': {
      role: { it: 'Barista', en: 'Barkeeper' },
      log: {
        it: 'Gestisce un bar nel centro di Water Seven e lucida i bicchieri dietro un lungo bancone, con le bottiglie sugli scaffali alle spalle e gli sgabelli davanti. Franky è un cliente fisso: entra chiedendo di riempirgli di cola le bottiglie, e Blueno gli domanda prima se ha i soldi. Kiwi e Mozu hanno ancora un milione di berry, così Franky offre da bere a tutto il locale. Anche Kokoro è nel locale e attacca discorso con Franky, e molte delle voci che girano in città partono dal suo bancone.',
        en: 'He runs a bar in downtown Water Seven and polishes the glasses behind a long counter, with bottles on the shelves at his back and stools along the front. Franky is a regular: he walks in asking for his cola bottles to be filled, and Blueno asks whether he has any money first. Kiwi and Mozu still have a million berries left, so Franky buys a round for the whole bar. Kokoro is in the bar too and strikes up a talk with Franky, and a good deal of the town’s gossip starts at his counter.',
      },
      affiliation: [
        {
          episode: 240,
          value: {
            it: 'Bar di Blueno, barista',
            en: 'Blueno’s Bar, barkeeper',
          },
        },
        { episode: 244, value: CIPHER_POL_9 },
      ],
      devilFruit: [{ episode: 243, value: ['door-door-fruit'] }],
    },
    'hattori': {
      chronicle: waterSevenChronicles.hattori,
      role: { it: 'Il piccione di Rob Lucci', en: 'Rob Lucci’s pigeon' },
      log: {
        it: 'Sta appollaiato sulla spalla di Lucci al Dock 1 e parla lui: chiede scusa ai clienti e rimprovera Paulie, mentre il padrone tiene la bocca chiusa. È Nami a capire il trucco: la voce è di Lucci, da ventriloquo, e l’uccello si limita a muovere becco e ali a tempo. Paulie non ci fa più caso, perché per quanto ne sa il cantiere Lucci ha sempre parlato attraverso il suo piccione.',
        en: 'He perches on Lucci’s shoulder at Dock One and does the talking, apologising to customers and telling Paulie off, while his master keeps his mouth shut. Nami is the one who works out the trick: the voice is Lucci’s, thrown like a ventriloquist’s, and the bird only moves his beak and wings in time with it. Paulie shrugs it off, because as far as the dock is concerned Lucci has always talked through his pigeon.',
      },
      affiliation: [
        {
          episode: 232,
          value: { it: 'Rob Lucci, piccione', en: 'Rob Lucci, pigeon' },
        },
        {
          episode: 244,
          value: {
            it: 'Cipher Pol 9, piccione di Rob Lucci',
            en: 'Cipher Pol 9, Rob Lucci’s pigeon',
          },
        },
        {
          episode: 746,
          chapter: 801,
          value: {
            it: 'Cipher Pol 0, piccione di Rob Lucci',
            en: 'Cipher Pol 0, Rob Lucci’s pigeon',
          },
        },
      ],
    },
    'kiwi-and-mozu': {
      role: {
        it: 'Sorelle della Franky Family',
        en: 'Sisters of the Franky Family',
      },
      log: {
        it: 'Sono le due sorelle che tengono in riga la banda di smantellatori sotto il ponte, con i capelli tagliati a squadra e due katana dalla guardia quadrata. Finiscono le frasi l’una dell’altra e ripetono a memoria gli ordini del capo. Quando c’è da spostare qualcosa di grosso, arrivano loro per prime.',
        en: 'They are the two sisters who keep the gang of dismantlers under the bridge in order, hair cut square and katanas with square guards. They finish each other’s sentences and repeat their boss’s orders word for word. When something heavy has to be shifted, they are the first to arrive.',
      },
      affiliation: [
        {
          episode: 265,
          chapter: 377,
          value: { it: 'Franky Family', en: 'Franky Family' },
        },
      ],
      origin: [{ episode: 265, chapter: 377, value: WATER_SEVEN }],
    },
    'zambai': {
      role: {
        it: 'Vice della Franky Family',
        en: 'Franky Family second in command',
      },
      log: {
        it: 'Comanda la banda ogni volta che il capo sparisce, e gli smantellatori lo ascoltano perché urla più forte di tutti. Porta un bazooka ed è ancora fasciato dopo la rissa con i Cappello di Paglia, e tratta ogni relitto come merce da portare via prima di sera. Del capo parla con un’ammirazione che non nasconde nemmeno davanti agli estranei.',
        en: 'He runs the gang whenever the boss disappears, and the dismantlers listen because he shouts louder than any of them. He carries a bazooka and is still bandaged from the fight with the Straw Hats, and treats every wreck as goods to be hauled off before dark. He speaks of his boss with an admiration he does not hide from strangers.',
      },
      affiliation: [
        {
          episode: 266,
          chapter: 378,
          value: {
            it: 'Franky Family, vice',
            en: 'Franky Family, second in command',
          },
        },
      ],
      origin: [{ episode: 266, chapter: 378, value: WATER_SEVEN }],
    },
    'peepley-lulu': {
      chronicle: waterSevenChronicles['peepley-lulu'],
      role: DOCK_ONE,
      log: {
        it: 'È uno dei caposquadra del Dock 1, con Paulie, Kaku e Lucci, e quando dei funzionari del Governo si presentano da Iceburg è il primo a chiedere il permesso di cacciarli. Porta occhiali scuri e un ciuffo di capelli che gli sta dritto in testa. Non è l’uomo più attento del cantiere: tornando al lavoro ha incrociato la Franky Family che si portava via un tizio dal naso lungo, e l’ha preso per Kaku.',
        en: 'He is one of the foremen of Dock One, with Paulie, Kaku and Lucci, and when government officials turn up to see Iceburg he is the first to ask leave to throw them out. He wears dark glasses and a tuft of hair that sticks straight up off his head. He is not the most observant man in the yard: on his way back he passed the Franky Family carrying off a long-nosed man, and took him for Kaku.',
      },
      affiliation: [{ episode: 233, value: GALLEY_LA_DOCK_ONE }],
    },
    'corgi': {
      chronicle: waterSevenChronicles.corgi,
      role: {
        it: 'Funzionario del Governo Mondiale',
        en: 'World Government official',
      },
      log: {
        it: 'Si presenta alla Galley-La con due colleghi e chiede di parlare con Iceburg in privato, senza mai dire ad alta voce che cosa cerchi: soltanto «quella cosa». Iceburg lo respinge ogni volta, e ogni volta lui se ne va più arrabbiato di quando è arrivato. Dopo quest’ultima visita Iceburg ammette con Califa che l’oggetto di tante offerte ce l’ha davvero.',
        en: 'He arrives at Galley-La with two colleagues and asks to see Iceburg in private, and he never says aloud what he is after, only “it”. Iceburg turns him down every time, and every time he leaves angrier than he came. After this latest visit Iceburg admits to Kalifa that the thing behind all those offers really is in his hands.',
      },
      affiliation: [
        {
          episode: 234,
          value: {
            it: 'Governo Mondiale, funzionario',
            en: 'World Government, official',
          },
        },
        {
          episode: 253,
          value: {
            it: 'Governo Mondiale, capo della sicurezza sul treno del mare',
            en: 'World Government, head of security aboard the sea train',
          },
        },
      ],
    },
    'franky': {
      chronicle: waterSevenChronicles.franky,
      role: { it: 'Smantellatore di navi', en: 'Ship dismantler' },
      log: {
        it: 'Nasconde la faccia dietro una maschera e comanda la Franky Family, una banda di smantellatori di navi che spoglia i pirati di passaggio di quello che hanno con sé. Quando i suoi uomini gli portano i duecento milioni presi a Usop, dice che finalmente potranno comprare la cosa che hanno sempre voluto, e ne dà loro cinque milioni da spendere come preferiscono. Quando Usop torna a riprendersi i soldi, Franky gli dice che nessuno aiuterà un pirata, poi se ne va con le valigette e lascia che la sua famiglia lo picchi.',
        en: 'He hides his face behind a mask and runs the Franky Family, a gang of ship dismantlers who strip passing pirates of whatever they carry. When his men bring him the two hundred million they took from Usopp, he says that at last they can buy the thing they have always wanted, and gives them five million to spend as they like. When Usopp comes back for the money, Franky tells him that nobody will help a pirate, then walks off with the cases and leaves his family to beat him.',
      },
      status: [{ episode: 235, value: 'alive' }],
      affiliation: [
        {
          episode: 235,
          value: { it: 'Franky Family, capo', en: 'Franky Family, boss' },
        },
        { episode: 322, value: STRAW_HATS },
      ],
      // Franky says it himself at 385 (chapter 490).
      origin: [
        {
          episode: 385,
          chapter: 490,
          value: { it: 'South Blue', en: 'South Blue' },
        },
      ],
      epithet: [{ episode: 320, value: { it: 'Cyborg', en: 'Cyborg' } }],
      bounty: [
        { episode: 320, value: 44_000_000 },
        { episode: 746, value: 94_000_000 },
        { episode: 1086, value: 394_000_000 },
      ],
    },
    'tilestone': {
      chronicle: waterSevenChronicles.tilestone,
      role: DOCK_ONE,
      log: {
        it: 'È l’ultimo dei caposquadra del Dock 1 a essere presentato, e il più rumoroso: non sa dare una notizia, buona o cattiva, senza urlarla. Quando sente che Iceburg si è svegliato piomba nella stanza gridando, e Paulie lo rispedisce fuori per il baccano. In cantiere è più utile, e con un tronco intero spazza via Franky da una rissa.',
        en: 'He is the last of the Dock One foremen to be introduced, and the loudest: he cannot deliver news, good or bad, without bellowing it. When he hears that Iceburg is awake he charges into the room shouting, and Paulie sends him straight back out for the noise. In the yard he is more use, and swings a whole log to knock Franky out of a fight.',
      },
      affiliation: [{ episode: 238, value: GALLEY_LA_DOCK_ONE }],
    },
    'tom': {
      role: { it: 'Maestro d’ascia', en: 'Master shipwright' },
      log: {
        it: 'Guidava Tom’s Workers, il cantiere dove crebbero i suoi due allievi, e diceva che un uomo deve essere fiero della nave che ha costruito. Per aver costruito la nave del Re dei Pirati una nave giudiziaria venne a condannarlo a morte. Ottenne invece dieci anni di libertà vigilata per costruire un treno che corre sul mare da un’isola all’altra, e il Puffing Tom fece la sua prima corsa.',
        en: 'He ran Tom’s Workers, the yard where his two apprentices grew up, and he said a man should be proud of the ship he built. For building the Pirate King’s ship, a Judicial Ship came to sentence him to death. He was given ten years’ probation instead to build a train that runs across the sea from island to island, and the Puffing Tom made its first run.',
      },
      // Seen only in a flashback at 248; his death is said at 268.
      status: [
        { episode: 248, value: 'unknown' },
        { episode: 268, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 248,
          value: {
            it: 'Tom’s Workers, maestro d’ascia',
            en: 'Tom’s Workers, master shipwright',
          },
        },
      ],
      origin: [
        {
          episode: 248,
          value: {
            it: 'Water Seven, Rotta Maggiore',
            en: 'Water Seven, Grand Line',
          },
        },
      ],
    },
    'spandam': {
      role: { it: 'Agente del Cipher Pol N. 5', en: 'Cipher Pol No. 5 agent' },
      log: {
        it: 'Arriva dal Cipher Pol N. 5 a cercare Tom, e il saluto di cannone di Franky lo colpisce prima che finisca di dire il suo nome. Vuole i progetti di un’arma antica perché il Governo possa respingere la grande era dei pirati, e quando Tom gli dice di non averli fa venire altri cinque agenti. Poi usa le navi da guerra di Franky per attaccare la nave giudiziaria, e la colpa ricade su Tom’s Workers.',
        en: 'He comes from Cipher Pol No. 5 looking for Tom, and Franky’s cannon salute hits him before he can finish saying his name. He wants the blueprints of an ancient weapon so the Government can push back the Great Pirate Era, and when Tom says he has none he calls in five more agents. Then he uses Franky’s battleships to raid the Judicial Ship, and the blame falls on Tom’s Workers.',
      },
      affiliation: [
        {
          episode: 249,
          value: { it: 'Cipher Pol N. 5', en: 'Cipher Pol No. 5' },
        },
        {
          episode: 250,
          value: { it: 'Cipher Pol 9, capo', en: 'Cipher Pol 9, chief' },
        },
        {
          episode: 313,
          value: {
            it: 'Degradato, sotto inchiesta',
            en: 'Demoted, under investigation',
          },
        },
        { episode: 746, chapter: 801, value: CIPHER_POL_0 },
      ],
    },
    'jerry': {
      chronicle: waterSevenChronicles.jerry,
      role: { it: 'Agente del Cipher Pol 6', en: 'Cipher Pol 6 agent' },
      log: {
        it: 'Comanda gli agenti del Governo che sorvegliano l’ultima carrozza del treno del mare, ed è così grosso che il suo busto ne riempie il soffitto. Quando un intruso fa irruzione, dice ai suoi uomini che non serve disturbare il CP9 per una cosa così piccola, e si presenta come il campione imbattuto di pugilato del South Blue. La carrozza stretta non si addice al suo stile: i suoi pugni finiscono sui suoi stessi agenti, e un calcio dell’intruso basta a metterlo fuori combattimento.',
        en: 'He is in charge of the government agents guarding the last car of the sea train, and he is so big that his upper body fills its ceiling. When an intruder breaks in, he tells his men there is no need to trouble CP9 with something so small, and announces himself as the South Blue’s undefeated boxing champion. The cramped car does not suit his style: his punches land on his own agents, and one kick from the intruder finishes him.',
      },
      affiliation: [
        {
          episode: 253,
          value: {
            it: 'Cipher Pol 6, capo della sicurezza dell’ultima carrozza',
            en: 'Cipher Pol 6, head of security in the last car',
          },
        },
      ],
    },
    'wanze': {
      chronicle: waterSevenChronicles.wanze,
      role: {
        it: 'Agente del Cipher Pol 7 e cuoco',
        en: 'Cipher Pol 7 agent and cook',
      },
      log: {
        it: 'Fa la guardia alla quarta carrozza del treno che porta via Robin, e chi vuole arrivare a lei deve passare prima da lui. Schiva colpi di pistola e calci con un ghigno, poi giura di aver creduto che il cuore gli saltasse fuori dal petto. Si definisce un cuoco, e Sanji gli risponde che un cuoco vero si comporterebbe con più dignità.',
        en: 'He guards the fourth car of the train taking Robin away, and anyone who wants to reach her has to get past him first. He dodges bullets and kicks with a grin, then swears he thought his heart would leap out of his chest. He calls himself a chef, and Sanji tells him that a real one would carry himself with more dignity.',
      },
      affiliation: [
        { episode: 258, value: { it: 'Cipher Pol 7', en: 'Cipher Pol 7' } },
      ],
      epithet: [{ episode: 258, value: { it: 'Mad Wanze', en: 'Mad Wanze' } }],
    },
    'nero': {
      chronicle: waterSevenChronicles.nero,
      role: CP9_AGENT,
      log: {
        it: 'Si presenta come Nero la Donnola di mare, e si becca un pugno a tradimento appena Franky gli dice di guardare dall’altra parte. Si muove con le stesse tecniche degli altri agenti: sparisce in uno scatto, si piega attorno ai colpi e scalcia lame d’aria. Salta perfino giù dal treno, sopra il mare aperto, e ci risale camminando sull’aria.',
        en: 'He introduces himself as Nero the Sea Weasel, and takes a sucker punch the moment Franky tells him to look the other way. He moves with the same techniques as the other agents: he vanishes in a burst of speed, bends around blows and kicks out blades of air. He even jumps off the train over the open sea and climbs back up walking on the air.',
      },
      affiliation: [
        { episode: 259, value: CIPHER_POL_9 },
        {
          episode: 262,
          value: {
            it: 'Ex agente del Cipher Pol 9, espulso',
            en: 'Former Cipher Pol 9 agent, expelled',
          },
        },
      ],
      epithet: [
        { episode: 259, value: { it: 'Donnola di mare', en: 'Sea Weasel' } },
      ],
    },
    't-bone': {
      chronicle: waterSevenChronicles['t-bone'],
      role: { it: 'Capitano della Marina', en: 'Marine captain' },
      log: {
        it: 'Scorta il treno del mare con i suoi uomini e si preoccupa di ogni loro ferita, promettendo pace e gentilezza mentre loro cercano di non guardarlo in faccia. La sua spada taglia solo in linea retta e ad angolo retto, che si tratti di una porta o di un mostro marino. Quando gli intrusi lo ingannano e lo lasciano indietro, corre da solo lungo i binari battuti dalla tempesta per sbarrare loro la strada.',
        en: 'He escorts the sea train with his men and fusses over every wound they get, promising peace and kindness while they try not to look at his face. His sword cuts only in straight lines and right angles, whether through a door or a sea monster. When the intruders trick him and leave him behind, he runs down the storm-lashed tracks alone to stand in their way.',
      },
      // Episode 261 runs on to chapter 373, but Zambai names him and Zoro
      // beats him in chapter 371, so his entries there say so.
      status: [
        { episode: 261, chapter: 371, value: 'alive' },
        { episode: 1116, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 261,
          chapter: 371,
          value: { it: 'Marina, capitano', en: 'Marines, captain' },
        },
        {
          episode: 1116,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
      ],
      epithet: [
        {
          episode: 261,
          chapter: 371,
          value: { it: 'Trancia-navi', en: 'Ship Cutter' },
        },
      ],
    },
    'jabra': {
      role: CP9_AGENT,
      log: {
        it: 'Tornato a Enies Lobby con Kumadori e Fukuro, deve rendere conto di una missione in cui sono morte molte più persone delle tre che dovevano eliminare. Dice a Kumadori che un uomo non si scusa così facilmente, e si offre di spiegare lui stesso tutto al capo. Quando Fukuro ammette di aver parlato del piano in giro per la città, Jabra gli chiede a cosa serva la cerniera che ha sulla bocca, e quando il tentativo di harakiri di Kumadori si ferma contro il suo stesso Tekkai, gli dice di morire e basta. Porta una giacca nera aperta su una cravatta nera, una fascia rossa in vita e i capelli raccolti in una lunga treccia.',
        en: 'Back at Enies Lobby with Kumadori and Fukurou, he has to answer for a mission in which far more people died than the three they were sent to kill. He tells Kumadori that a man does not apologise so easily, and offers to explain it all to the chief himself. When Fukurou admits he talked about the plan all over town, Jabra asks him what the zip on his mouth is for, and when Kumadori’s attempt at hara-kiri stops against his own Tekkai, Jabra tells him to just die. He wears a black tunic open over a black tie, a red sash at the waist, and his hair in a long braid.',
      },
      affiliation: [{ episode: 264, value: CIPHER_POL_9 }],
      devilFruit: [{ episode: 286, value: ['dog-dog-fruit-model-wolf'] }],
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
    'sodom-and-gomorrah': {
      chronicle: waterSevenChronicles['sodom-and-gomorrah'],
      role: {
        it: 'Cavalcature della Franky Family',
        en: 'Mounts of the Franky Family',
      },
      log: {
        it: 'Escono a nuoto da Water Seven legati alla barca della Franky Family, che è agganciata al Rocketman lanciato sui binari. Prendono ordini da Zambai come tutti gli altri della famiglia. Quando la ciurma arriva all’isola giudiziaria, è lui a mandarli a saltare la recinzione e ad abbattere il cancello.',
        en: 'They swim out of Water Seven harnessed to the Franky Family’s boat, which is hooked to the Rocketman as it races along the rails. They take their orders from Zambai like everyone else in the family. When the crew reaches the judicial island, he is the one who sends them to jump the fence and break down the gate.',
      },
      affiliation: [
        { episode: 264, value: { it: 'Franky Family', en: 'Franky Family' } },
      ],
    },
    'oimo-and-kashi': {
      role: { it: 'Guardiani del cancello', en: 'Gatekeepers' },
      log: {
        it: 'Stanno davanti al cancello di Enies Lobby e fermano chiunque provi a entrare, uno con una clava e l’altro con una grande ascia. Lavorano per il Governo Mondiale da anni e non hanno mai discusso un ordine. Vengono da un’isola di guerrieri e si comportano ancora come tali.',
        en: 'They stand in front of the gate of Enies Lobby and stop anyone who tries to pass, one with a club and one with a broad axe. They have worked for the World Government for years and have never questioned an order. They come from an island of warriors and still carry themselves like it.',
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
      origin: [{ episode: 265, value: { it: 'Elbaf', en: 'Elbaph' } }],
    },
    'baskerville': {
      chronicle: waterSevenChronicles.baskerville,
      role: {
        it: 'Giudice supremo di Enies Lobby',
        en: 'Chief Justice of Enies Lobby',
      },
      log: {
        it: 'Presiede il tribunale di Enies Lobby, un’unica figura altissima con tre teste e tre cappelli diversi. Con l’isola sotto attacco e Spandam irraggiungibile, la difesa ricade su di lui. Viene a sapere che uno dei giganti del cancello è a terra e l’altro sta cedendo, e manda al fronte cento uomini della guardia del tribunale.',
        en: 'He presides over the courthouse of Enies Lobby, a single towering figure with three heads under three different hats. With the island under attack and Spandam out of reach, the defence falls to him. He hears that one of the giants at the gate is down and the other is losing, and sends a hundred men of the Watchdog Unit of the Law to the front.',
      },
      affiliation: [
        {
          episode: 267,
          value: {
            it: 'Governo Mondiale, tribunale di Enies Lobby',
            en: 'World Government, Enies Lobby courthouse',
          },
        },
      ],
      epithet: [
        {
          episode: 267,
          value: {
            it: 'Baskerville Triplice collo',
            en: 'Three-Headed Baskerville',
          },
        },
      ],
    },
    'jaguar-d-saul': {
      role: { it: 'Gigante naufragato a Ohara', en: 'Giant castaway on Ohara' },
      log: {
        it: 'Vent’anni prima la marea lo lascia sulla spiaggia di Ohara, dove una bambina di otto anni, respinta dagli studiosi e evitata da tutti, si ferma a guardarlo. Lui le chiede come si chiama e le insegna a ridere a modo suo, «dereshishi», finché lei non ride davvero. In un’isola che la chiama mostro, è il primo a trattarla come una bambina qualunque.',
        en: 'Twenty years earlier the tide leaves him on the beach of Ohara, where an eight-year-old girl, turned away by the scholars and shunned by everyone, stops to look at him. He asks her name and teaches her to laugh his way, “dereshishi”, until she really laughs. On an island that calls her a monster, he is the first to treat her like any other little girl.',
      },
      status: [
        { episode: 275, value: 'alive' },
        { episode: 278, value: 'presumed-dead' },
        { episode: 1163, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 277,
          value: {
            it: 'Marina, ex viceammiraglio',
            en: 'Marines, former vice admiral',
          },
        },
        {
          episode: 1164,
          value: {
            it: 'Scuola Walrus, insegnante di storia',
            en: 'Walrus School, history teacher',
          },
        },
      ],
    },
    'clover': {
      chronicle: waterSevenChronicles.clover,
      role: { it: 'Capo degli studiosi di Ohara', en: 'Head scholar of Ohara' },
      log: {
        it: 'Dirige la biblioteca dell’Albero della Conoscenza, la più grande del mondo, dove lavorano gli studiosi dell’isola. Lascia che Robin legga lì quando il resto di Ohara la evita, e festeggia quando a otto anni supera l’esame da studiosa di archeologia. Quando lei chiede di unirsi alle ricerche sul Secolo Buio, le risponde di no senza esitare: quella storia il Governo Mondiale la proibisce.',
        en: 'He runs the library in the Tree of Knowledge, the greatest in the world, where the island’s scholars do their work. He lets Robin read there when the rest of Ohara shuns her, and celebrates when she passes the exam to become a scholar of archaeology at eight. When she asks to join the scholars’ research into the Void Century, he refuses her flatly: that history is forbidden by the World Government.',
      },
      status: [
        { episode: 275, value: 'alive' },
        { episode: 278, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 275,
          value: {
            it: 'Studiosi di Ohara, professore',
            en: 'Scholars of Ohara, professor',
          },
        },
      ],
      origin: [
        {
          episode: 275,
          value: { it: 'Ohara, West Blue', en: 'Ohara, West Blue' },
        },
      ],
    },
    'spandine': {
      chronicle: waterSevenChronicles.spandine,
      role: {
        it: 'Capo del Cipher Pol 9, vent’anni prima',
        en: 'Chief of Cipher Pol 9, twenty years earlier',
      },
      log: {
        it: 'Viene a Ohara per dimostrare che gli studiosi indagano sul Secolo Buio, e perché nessun altro al mondo ci provi più. Quando un colpo di fucile gli trapassa la manica grida di essere spacciato, finché uno dei suoi uomini non gli fa notare che il proiettile ha preso solo la stoffa. Poi fa atterrare la donna che ha sparato e la fa portare davanti agli studiosi catturati come prova della loro colpa. Alle sue spalle, le navi da guerra del Governo aspettano al largo un suo ordine.',
        en: 'He comes to Ohara to prove the scholars have been studying the Void Century, and to make sure nobody anywhere tries it again. When a rifle shot goes through his sleeve he cries that he is done for, until one of his men points out that the bullet only caught the cloth. Then he has the woman who fired it knocked down and brought before the captured scholars as proof of their guilt. Behind him, the Government’s warships wait offshore for his word.',
      },
      affiliation: [
        {
          episode: 276,
          value: { it: 'Cipher Pol 9, capo', en: 'Cipher Pol 9, chief' },
        },
        {
          episode: 301,
          value: {
            it: 'Cipher Pol 9, ex capo; padre di Spandam',
            en: 'Cipher Pol 9, former chief; Spandam’s father',
          },
        },
      ],
    },
    'nico-olvia': {
      chronicle: waterSevenChronicles['nico-olvia'],
      role: {
        it: 'Archeologa di Ohara, madre di Robin',
        en: 'Archaeologist of Ohara, Robin’s mother',
      },
      log: {
        it: 'Anni fa ha lasciato Ohara con una spedizione in cerca di Poneglyph per il mondo, affidando ad altri la figlia piccola, e torna da sola: tutti gli altri li ha uccisi il Governo Mondiale. Avverte gli studiosi che il Governo sta arrivando per eliminarli, ma loro si rifiutano di abbandonare la biblioteca. Per evitare a Robin il marchio di figlia di una criminale decide di non dirle chi è, prende un fucile e scende alla spiaggia.',
        en: 'Years ago she left Ohara with an expedition to search the world for Poneglyphs, leaving her small daughter in others’ care, and she comes back alone: the World Government killed everyone else. She warns the scholars that the Government is coming to wipe them out, but they refuse to abandon the library. To keep Robin from being branded a criminal’s daughter, she decides not to tell the girl who she is, takes a rifle and goes down to the beach.',
      },
      status: [
        { episode: 276, value: 'alive' },
        { episode: 278, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 276,
          value: {
            it: 'Studiosi di Ohara, archeologa',
            en: 'Scholars of Ohara, archaeologist',
          },
        },
      ],
      origin: [
        {
          episode: 276,
          value: { it: 'Ohara, West Blue', en: 'Ohara, West Blue' },
        },
      ],
    },
    'funkfreed': {
      chronicle: waterSevenChronicles.funkfreed,
      role: { it: 'Spada vivente di Spandam', en: 'Spandam’s living sword' },
      log: {
        it: 'È un elefante finché Spandam vuole compagnia e una sciabola appena vuole un’arma. Quando i Cappello di Paglia irrompono nella Torre della Giustizia, Spandam lo chiama e l’elefante si ritrae in una lama con due zanne sull’elsa. Spandam spiega a Robin che la spada ha mangiato un frutto del diavolo di tipo Zoan, quello dell’elefante, e ora è tutte e due le cose.',
        en: 'He is an elephant as long as Spandam wants company and a cutlass the moment he wants a weapon. When the Straw Hats break into the Tower of Justice, Spandam calls him, and the elephant shrinks into a blade with two tusks at the guard. Spandam explains to Robin that the sword has eaten a Zoan-type Devil Fruit, the elephant one, and is now both at once.',
      },
      affiliation: [
        {
          episode: 285,
          value: {
            it: 'Cipher Pol 9, arma di Spandam',
            en: 'Cipher Pol 9, Spandam’s weapon',
          },
        },
      ],
      devilFruit: [{ episode: 285, value: ['elephant-elephant-fruit'] }],
    },
    'monkey-d-garp': {
      chronicle: waterSevenChronicles['monkey-d-garp'],
      role: { it: 'Viceammiraglio della Marina', en: 'Marine vice admiral' },
      log: {
        it: 'A Water Seven riconoscono la sua nave e il suo nome: è il leggendario marine che mise più volte alle strette Gold Roger. Viene a cercare i Cappello di Paglia, lascia due dei suoi uomini fuori ed entra sfondando il muro. Il suo pugno dell’amore, come lo chiama lui, fa male anche a un corpo di gomma, e Rufy, svegliato così, lo chiama nonno.',
        en: 'Water Seven knows his ship and his name: he is the legendary Marine who cornered Gold Roger time and again. He comes looking for the Straw Hats, leaves two of his men outside and comes in through the wall. His fist of love, as he calls it, hurts even a rubber body, and Luffy, woken by it, calls him Grandpa.',
      },
      status: [{ episode: 313, value: 'alive' }],
      affiliation: [
        {
          episode: 313,
          value: { it: 'Marina, viceammiraglio', en: 'Marines, vice admiral' },
        },
        {
          episode: 1122,
          value: {
            it: 'Marina, viceammiraglio, catturato dai Pirati di Barbanera',
            en: 'Marines, vice admiral, captured by the Blackbeard Pirates',
          },
        },
      ],
      // Nothing at 313 says where he is from. The king of Goa tells him he
      // is a citizen of that kingdom in 883, on pages 9 and 10 of chapter 905.
      origin: [
        {
          episode: 883,
          chapter: 905,
          value: {
            it: 'Regno di Goa, East Blue',
            en: 'Goa Kingdom, East Blue',
          },
        },
      ],
      // The caption that gives both names is in episode 314, on page 2 of
      // chapter 432, which that episode adapts.
      epithet: [
        {
          episode: 314,
          chapter: 432,
          value: {
            it: 'il Pugno, Eroe della Marina',
            en: 'the Fist, Hero of the Marines',
          },
        },
      ],
      bounty: [{ episode: 1121, value: 3_000_000_000 }],
    },
    'thatch': {
      chronicle: waterSevenChronicles.thatch,
      role: {
        it: 'Comandante della quarta divisione dei Pirati di Barbabianca',
        en: 'Fourth division commander of the Whitebeard Pirates',
      },
      log: {
        it: 'Comandava la quarta divisione della ciurma di Barbabianca, la stessa ciurma in cui Teach ha navigato per anni. Sulla nave di Barbabianca vale la regola che chi trova un frutto del diavolo può mangiarlo, e Satch teneva in mano proprio quello che Teach cercava da decenni. Teach lo ha ucciso per averlo, ed è per quell’omicidio che Ace ha attraversato il mare sulle sue tracce.',
        en: 'He commanded the fourth division of Whitebeard’s crew, the same crew Teach sailed with for years. On Whitebeard’s ship the rule is that whoever finds a Devil Fruit may eat it, and Thatch was holding the very one Teach had hunted for decades. Teach killed him to get it, and that murder is what sent Ace across the sea on Teach’s trail.',
      },
      status: [{ episode: 325, value: 'deceased' }],
      affiliation: [
        {
          episode: 325,
          value: {
            it: 'Pirati di Barbabianca, comandante della quarta divisione',
            en: 'Whitebeard Pirates, fourth division commander',
          },
        },
      ],
    },
  },
}
