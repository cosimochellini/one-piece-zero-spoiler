import type { Entity } from './types'

/**
 * The seed archive.
 *
 * TypeScript modules rather than JSON: the `Entity` annotation typechecks every
 * record at build time and the compiler inlines the data, so there is no parse
 * step and no schema library to keep in sync.
 *
 * Every threshold below is an anime episode number taken from the episode that
 * introduces the record. Where a threshold was not certain, the record was
 * left out rather than guessed — a wrong threshold in this file is a spoiler,
 * which is the one bug this project cannot ship.
 *
 * The error is not symmetric, and the editing rule follows from that: a
 * threshold set too low uncovers a record early, which is the bug; one set too
 * high only keeps it covered a little longer, which is not. When a threshold is
 * uncertain, round it up. Summaries follow the same rule: each one says only
 * what a viewer at the threshold episode already knows.
 *
 * Arc thresholds are the episode the arc opens on. They should be checked
 * against a source before the wiki is published; they are the seed set, not a
 * citation.
 *
 * Images: no photographs and no official artwork appear anywhere. Every record
 * has a line drawing of an object or a place that stands for it, drawn in
 * `~/components/ChartArt`, and one colour for its main stroke. No faces, no
 * logos: a straw hat for the captain, three sheathed swords for the swordsman.
 *
 * Places are filed at the episode that first shows them, and the ship's log
 * (`./places.ts`) adds the rest of what is known about each one at that
 * episode: the sea, what kind of place it is, the arc, and who is met there.
 */

const LUFFY = { it: 'Monkey D. Rufy', en: 'Monkey D. Luffy' }
const ZORO = { it: 'Roronoa Zoro', en: 'Roronoa Zoro' }
const NAMI = { it: 'Nami', en: 'Nami' }
const USOPP = { it: 'Usop', en: 'Usopp' }
const SANJI = { it: 'Sanji', en: 'Sanji' }
const CHOPPER = { it: 'Tony Tony Chopper', en: 'Tony Tony Chopper' }
const ROBIN = { it: 'Nico Robin', en: 'Nico Robin' }
const FRANKY = { it: 'Franky', en: 'Franky' }
const BROOK = { it: 'Brook', en: 'Brook' }
const JINBE = { it: 'Jinbe', en: 'Jinbe' }
const SHANKS = { it: 'Shanks', en: 'Shanks' }
const BUGGY = { it: 'Bagy', en: 'Buggy' }
const MIHAWK = { it: 'Drakul Mihawk', en: 'Dracule Mihawk' }
const SMOKER = { it: 'Smoker', en: 'Smoker' }
const VIVI = { it: 'Nefertari Bibi', en: 'Nefertari Vivi' }
const CROCODILE = { it: 'Crocodile', en: 'Crocodile' }
const ACE = { it: 'Portuguese D. Ace', en: 'Portgas D. Ace' }
const WHITEBEARD = { it: 'Edward Newgate', en: 'Edward Newgate' }
const DOFLAMINGO = { it: 'Donquijote Do Flamingo', en: 'Donquixote Doflamingo' }
const LAW = { it: 'Trafalgar Law', en: 'Trafalgar Law' }
const KID = { it: 'Eustass Kid', en: 'Eustass Kid' }
const HANCOCK = { it: 'Boa Hancock', en: 'Boa Hancock' }
const PERONA = { it: 'Perona', en: 'Perona' }
const BARTOLOMEO = { it: 'Bartolomeo', en: 'Bartolomeo' }
const YAMATO = { it: 'Yamato', en: 'Yamato' }

export const entities: readonly Entity[] = [
  // East Blue
  {
    id: 'east-blue',
    kind: 'arc',
    revealedAtEpisode: 1,
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
    name: LUFFY,
    summary: {
      it: 'Il ragazzo che salpa da solo su una barca a remi e annuncia che diventerà il Re dei Pirati.',
      en: 'The boy who sets out alone in a rowing boat and announces he will become King of the Pirates.',
    },
    visual: { art: 'monkey-d-luffy', tint: 'red' },
  },
  {
    id: 'roronoa-zoro',
    kind: 'character',
    revealedAtEpisode: 2,
    name: ZORO,
    summary: {
      it: 'Cacciatore di pirati legato a un palo in un cortile della Marina, e primo nome sulla lista di una ciurma che ancora non esiste.',
      en: 'A pirate hunter tied to a post in a Marine courtyard, and the first name on the roster of a crew that does not exist yet.',
    },
    visual: { art: 'roronoa-zoro', tint: 'green' },
  },
  {
    id: 'shells-town',
    kind: 'place',
    revealedAtEpisode: 2,
    name: { it: 'Shells Town', en: 'Shells Town' },
    summary: {
      it: 'Una cittadina dell’East Blue cresciuta attorno a una base della Marina, con un cacciatore di pirati legato a un palo nel cortile.',
      en: 'An East Blue town grown up around a Marine base, with a pirate hunter tied to a post in the yard.',
    },
    visual: { art: 'shells-town', tint: 'azure' },
  },
  {
    id: 'shanks',
    kind: 'character',
    revealedAtEpisode: 4,
    name: SHANKS,
    summary: {
      it: 'Il pirata dai capelli rossi che passava le giornate nella taverna di un villaggio, e che lasciò lì il suo cappello di paglia.',
      en: 'The red-haired pirate who spent his days in a village tavern, and left his straw hat there.',
    },
    visual: { art: 'shanks', tint: 'red' },
  },
  {
    id: 'foosha-village',
    kind: 'place',
    revealedAtEpisode: 4,
    name: { it: 'Villaggio Fuschia', en: 'Foosha Village' },
    summary: {
      it: 'Un villaggio di mulini a vento sull’isola da cui Rufy è salpato, con una taverna dove una ciurma pirata è stata di casa per un anno.',
      en: 'A windmill village on the island Luffy sailed from, with a tavern where a pirate crew made itself at home for a year.',
    },
    visual: { art: 'foosha-village', tint: 'green' },
  },
  {
    id: 'buggy',
    kind: 'character',
    revealedAtEpisode: 5,
    name: BUGGY,
    summary: {
      it: 'Un capitano pirata col naso da clown, molto suscettibile sull’argomento, che tiene una città intera sotto il tiro dei suoi cannoni.',
      en: 'A pirate captain with a clown’s nose, touchy about it, who keeps a whole town under his cannons.',
    },
    visual: { art: 'buggy', tint: 'red' },
  },
  {
    id: 'nami',
    kind: 'character',
    revealedAtEpisode: 5,
    name: NAMI,
    summary: {
      it: 'Una ladra che ruba solo ai pirati, e che sa leggere una carta nautica meglio di chiunque abbia incontrato.',
      en: 'A thief who steals only from pirates, and who reads a sea chart better than anyone she has met.',
    },
    visual: { art: 'nami', tint: 'orange' },
  },
  {
    id: 'orange-town',
    kind: 'place',
    revealedAtEpisode: 5,
    name: { it: 'Orange Town', en: 'Orange Town' },
    summary: {
      it: 'Una cittadina dell’East Blue svuotata dai suoi abitanti, occupata da una ciurma di pirati con un tendone da circo e i cannoni puntati sui tetti.',
      en: 'An East Blue town its people have fled, occupied by a pirate crew with a circus tent and cannons trained on the roofs.',
    },
    visual: { art: 'orange-town', tint: 'orange' },
  },
  {
    id: 'usopp',
    kind: 'character',
    revealedAtEpisode: 9,
    name: USOPP,
    summary: {
      it: 'Il bugiardo del villaggio, che ogni mattina corre in spiaggia a gridare che i pirati stanno arrivando.',
      en: 'The village liar, who runs to the shore every morning shouting that pirates are coming.',
    },
    visual: { art: 'usopp', tint: 'ocher' },
  },
  {
    id: 'syrup-village',
    kind: 'place',
    revealedAtEpisode: 9,
    name: { it: 'Villaggio di Syrup', en: 'Syrup Village' },
    summary: {
      it: 'Un villaggio tranquillo delle isole Gecko, con una villa sulla collina e un ragazzo che ogni mattina grida che i pirati stanno arrivando.',
      en: 'A quiet village in the Gecko Islands, with a mansion on the hill and a boy who shouts every morning that pirates are coming.',
    },
    visual: { art: 'syrup-village', tint: 'yellow' },
  },
  {
    id: 'going-merry',
    kind: 'ship',
    revealedAtEpisode: 18,
    name: { it: 'Going Merry', en: 'Going Merry' },
    summary: {
      it: 'Una caravella con una testa di pecora a prua, regalata a una ciurma di quattro persone che non aveva ancora una nave.',
      en: 'A caravel with a sheep’s head on the prow, given to a crew of four who did not yet have a ship.',
    },
    visual: { art: 'going-merry', tint: 'ivory' },
  },
  {
    id: 'sanji',
    kind: 'character',
    revealedAtEpisode: 20,
    name: SANJI,
    summary: {
      it: 'Il vice-cuoco di un ristorante galleggiante, che dà da mangiare a chiunque abbia fame e combatte solo con le gambe.',
      en: 'The sous-chef of a floating restaurant, who feeds anyone who is hungry and fights only with his legs.',
    },
    visual: { art: 'sanji', tint: 'blue' },
  },
  {
    id: 'baratie',
    kind: 'place',
    revealedAtEpisode: 20,
    name: { it: 'Baratie', en: 'Baratie' },
    summary: {
      it: 'Un ristorante galleggiante a forma di pesce, in mare aperto, dove i cuochi prendono a calci i clienti che non pagano.',
      en: 'A floating restaurant shaped like a fish, in open sea, where the cooks kick the customers who do not pay.',
    },
    visual: { art: 'baratie', tint: 'cyan' },
  },
  {
    id: 'dracule-mihawk',
    kind: 'character',
    revealedAtEpisode: 24,
    name: MIHAWK,
    summary: {
      it: 'Lo spadaccino più forte del mondo, che arriva su una barca a forma di bara e taglia un galeone in due per passare il tempo.',
      en: 'The strongest swordsman in the world, who arrives in a coffin-shaped boat and cuts a galleon in half to pass the time.',
    },
    visual: { art: 'dracule-mihawk', tint: 'ocher' },
  },
  {
    id: 'smoker',
    kind: 'character',
    revealedAtEpisode: 49,
    name: SMOKER,
    summary: {
      it: 'Un capitano della Marina con due sigari accesi e una giacca piena di altri, che non ha mai lasciato scappare un pirata dalla sua città.',
      en: 'A Marine captain with two lit cigars and a jacket full of spares, who has never let a pirate leave his town.',
    },
    visual: { art: 'smoker', tint: 'azure' },
  },
  {
    id: 'nefertari-vivi',
    kind: 'character',
    revealedAtEpisode: 67,
    name: VIVI,
    summary: {
      it: 'Una principessa che si è infiltrata in un’organizzazione criminale per scoprire chi vuole rovesciare il suo regno.',
      en: 'A princess who infiltrated a criminal organisation to learn who is trying to topple her kingdom.',
    },
    visual: { art: 'nefertari-vivi', tint: 'azure' },
  },
  {
    id: 'tony-tony-chopper',
    kind: 'character',
    revealedAtEpisode: 83,
    name: CHOPPER,
    summary: {
      it: 'Una renna dal naso blu che ha mangiato un frutto del diavolo e ha imparato la medicina da una dottoressa di 139 anni.',
      en: 'A blue-nosed reindeer who ate a devil fruit and learned medicine from a 139-year-old doctor.',
    },
    visual: { art: 'tony-tony-chopper', tint: 'pink' },
  },

  // Alabasta
  {
    id: 'alabasta',
    kind: 'arc',
    revealedAtEpisode: 92,
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
    name: CROCODILE,
    summary: {
      it: 'Un pirata autorizzato dal Governo che ad Alabasta viene acclamato come un eroe, e che dirige l’organizzazione che il regno teme.',
      en: 'A government-sanctioned pirate hailed as a hero in Alabasta, and the head of the organisation the kingdom fears.',
    },
    visual: { art: 'crocodile', tint: 'sand' },
  },
  {
    id: 'portgas-d-ace',
    kind: 'character',
    revealedAtEpisode: 95,
    name: ACE,
    summary: {
      it: 'Il fratello maggiore di Rufy, comandante in una ciurma famosa, che attraversa il deserto sulle tracce di un traditore.',
      en: 'Luffy’s older brother, a division commander in a famous crew, crossing the desert on the trail of a traitor.',
    },
    visual: { art: 'portgas-d-ace', tint: 'orange' },
  },
  {
    id: 'nico-robin',
    kind: 'character',
    revealedAtEpisode: 130,
    name: ROBIN,
    summary: {
      it: 'La vicepresidente di un’organizzazione criminale, archeologa, e l’unica persona al mondo che sa leggere una certa scrittura antica.',
      en: 'The vice-president of a criminal organisation, an archaeologist, and the only person alive who can read a certain ancient script.',
    },
    visual: { art: 'nico-robin', tint: 'violet' },
  },

  // Sky Island
  {
    id: 'skypiea',
    kind: 'arc',
    revealedAtEpisode: 144,
    name: { it: 'Saga di Skypiea', en: 'Skypiea Saga' },
    summary: {
      it: 'Un’isola sospesa sopra il mare, raggiunta da una corrente che spara le navi verso l’alto.',
      en: 'An island suspended above the sea, reached by a current that fires ships upward.',
    },
    visual: { art: 'skypiea', tint: 'azure' },
  },
  {
    id: 'jaya',
    kind: 'place',
    revealedAtEpisode: 144,
    name: { it: 'Jaya', en: 'Jaya' },
    summary: {
      it: 'Un’isola della Rotta Maggiore con una città di pirati senza legge da una parte e un uomo che ride dei sogni dall’altra.',
      en: 'A Grand Line island with a lawless pirate town on one side and a man who laughs at dreams on the other.',
    },
    visual: { art: 'jaya', tint: 'ocher' },
  },
  {
    id: 'edward-newgate',
    kind: 'character',
    revealedAtEpisode: 152,
    name: WHITEBEARD,
    summary: {
      it: 'Barbabianca: l’uomo più vicino al trono dei pirati da vent’anni, con una flotta che chiama i suoi uomini figli.',
      en: 'Whitebeard: the man closest to the pirate throne for twenty years, with a fleet whose men he calls his sons.',
    },
    visual: { art: 'edward-newgate', tint: 'ivory' },
  },
  {
    id: 'donquixote-doflamingo',
    kind: 'character',
    revealedAtEpisode: 152,
    name: DOFLAMINGO,
    summary: {
      it: 'Un membro della Flotta dei Sette con un cappotto di piume rosa, che si presenta alle riunioni del Governo Mondiale per divertimento.',
      en: 'A member of the Seven Warlords in a pink feather coat, who attends World Government meetings for the fun of it.',
    },
    visual: { art: 'donquixote-doflamingo', tint: 'flamingo' },
  },

  // Water Seven
  {
    id: 'water-seven',
    kind: 'arc',
    revealedAtEpisode: 229,
    name: { it: 'Saga di Water Seven', en: 'Water Seven Saga' },
    summary: {
      it: 'Una città d’acqua di maestri d’ascia, dove la ciurma si scopre meno compatta di quanto credeva.',
      en: 'A city of shipwrights built on water, where the crew turns out to be less united than it thought.',
    },
    visual: { art: 'water-seven', tint: 'teal' },
  },
  {
    id: 'franky',
    kind: 'character',
    revealedAtEpisode: 235,
    name: FRANKY,
    summary: {
      it: 'Un cyborg in mutande e camicia hawaiana che smonta navi per vivere e le ricostruisce per passione.',
      en: 'A cyborg in swim briefs and a Hawaiian shirt who strips ships for a living and rebuilds them for love.',
    },
    visual: { art: 'franky', tint: 'cyan' },
  },

  // Thriller Bark
  {
    id: 'brook',
    kind: 'character',
    revealedAtEpisode: 339,
    name: BROOK,
    summary: {
      it: 'Uno scheletro con la permanente afro che suona il violino e chiede alle signore di mostrargli le mutandine, cinquant’anni dopo essere morto.',
      en: 'A skeleton with an afro who plays the violin and asks ladies to show him their panties, fifty years after he died.',
    },
    visual: { art: 'brook', tint: 'lavender' },
  },
  {
    id: 'perona',
    kind: 'character',
    revealedAtEpisode: 340,
    name: PERONA,
    summary: {
      it: 'La principessa fantasma di una nave-isola, i cui spettri fanno sentire chiunque tocchino indegno di vivere.',
      en: 'The ghost princess of an island-ship, whose spectres leave anyone they touch feeling unworthy of living.',
    },
    visual: { art: 'perona', tint: 'pink' },
  },

  // Sabaody
  {
    id: 'trafalgar-law',
    kind: 'character',
    revealedAtEpisode: 392,
    name: LAW,
    summary: {
      it: 'Un capitano-chirurgo con un orso polare in tuta nella ciurma, arrivato all’arcipelago con una taglia da duecento milioni.',
      en: 'A surgeon-captain with a polar bear in a boiler suit in his crew, arrived at the archipelago with a two-hundred-million bounty.',
    },
    visual: { art: 'trafalgar-law', tint: 'yellow' },
  },
  {
    id: 'eustass-kid',
    kind: 'character',
    revealedAtEpisode: 392,
    name: KID,
    summary: {
      it: 'Un capitano dai capelli rossi con una taglia più alta di quella di Rufy, che attira il metallo e non sopporta di essere guardato dall’alto.',
      en: 'A red-haired captain with a bounty higher than Luffy’s, who pulls metal toward him and cannot stand being looked down on.',
    },
    visual: { art: 'eustass-kid', tint: 'wine' },
  },
  {
    id: 'boa-hancock',
    kind: 'character',
    revealedAtEpisode: 410,
    name: HANCOCK,
    summary: {
      it: 'L’imperatrice di un’isola di sole donne, la più bella del mondo per sua stessa ammissione, che trasforma in pietra chi la desidera.',
      en: 'The empress of an island of women only, the most beautiful in the world by her own account, who turns those who desire her to stone.',
    },
    visual: { art: 'boa-hancock', tint: 'magenta' },
  },
  {
    id: 'jinbe',
    kind: 'character',
    revealedAtEpisode: 430,
    name: JINBE,
    summary: {
      it: 'Un uomo-pesce della Flotta dei Sette rinchiuso nella prigione più profonda del mondo per aver rifiutato di combattere una guerra.',
      en: 'A fish-man of the Seven Warlords locked in the deepest prison in the world for refusing to fight a war.',
    },
    visual: { art: 'jinbe', tint: 'blue' },
  },

  // Marineford
  {
    id: 'marineford',
    kind: 'arc',
    revealedAtEpisode: 457,
    name: { it: 'Saga di Marineford', en: 'Marineford Saga' },
    summary: {
      it: 'La Marina e i pirati più forti del mondo si trovano nello stesso porto, nello stesso giorno.',
      en: 'The Marines and the strongest pirates in the world end up in the same harbour on the same day.',
    },
    visual: { art: 'marineford', tint: 'blue' },
  },

  // Dressrosa
  {
    id: 'bartolomeo',
    kind: 'character',
    revealedAtEpisode: 632,
    name: BARTOLOMEO,
    summary: {
      it: 'Un pirata dalla cresta verde e i modi da teppista che si iscrive a un torneo nel colosseo di Dressrosa.',
      en: 'A green-crested pirate with a thug’s manners who enters a tournament in the colosseum of Dressrosa.',
    },
    visual: { art: 'bartolomeo', tint: 'acid' },
  },

  // Wano
  {
    id: 'wano',
    kind: 'arc',
    revealedAtEpisode: 890,
    name: { it: 'Saga del Paese di Wano', en: 'Wano Country Saga' },
    summary: {
      it: 'Un paese chiuso al resto del mondo, con le sue regole, i suoi spadaccini e i suoi conti in sospeso.',
      en: 'A country closed to the rest of the world, with its own rules, its own swordsmen and its own unsettled debts.',
    },
    visual: { art: 'wano', tint: 'vermilion' },
  },
  {
    id: 'yamato',
    kind: 'character',
    revealedAtEpisode: 992,
    name: YAMATO,
    summary: {
      it: 'Il figlio dell’imperatore che governa Wano, incatenato sull’isola da vent’anni, che si presenta con il nome di un samurai morto.',
      en: 'The child of the emperor who rules Wano, chained on the island for twenty years, who introduces himself by a dead samurai’s name.',
    },
    visual: { art: 'yamato', tint: 'ice' },
  },

  // Egghead
  {
    id: 'egghead',
    kind: 'arc',
    revealedAtEpisode: 1089,
    name: { it: 'Saga di Egghead', en: 'Egghead Saga' },
    summary: {
      it: 'La ciurma approda su un’isola che vive centinaia di anni nel futuro, costruita attorno al laboratorio di uno scienziato del Governo Mondiale.',
      en: 'The crew lands on an island living hundreds of years in the future, built around the laboratory of a World Government scientist.',
    },
    visual: { art: 'egghead', tint: 'cyan' },
  },
  {
    id: 'egghead-island',
    kind: 'place',
    revealedAtEpisode: 1089,
    name: { it: 'Isola di Egghead', en: 'Egghead Island' },
    summary: {
      it: 'Un’isola-laboratorio nel Nuovo Mondo, tenuta calda da un vulcano sottomarino e piena di macchine che non dovrebbero esistere ancora.',
      en: 'A laboratory island in the New World, kept warm by an undersea volcano and full of machines that should not exist yet.',
    },
    visual: { art: 'egghead-island', tint: 'orange' },
  },
]

const BY_ID = new Map(entities.map((entity) => [entity.id, entity]))

/**
 * Looks a record up by id. Returns `undefined` for an unknown id rather than
 * throwing, so a stale link renders a not-found page instead of a 500.
 */
export function getEntity(id: string): Entity | undefined {
  return BY_ID.get(id)
}
