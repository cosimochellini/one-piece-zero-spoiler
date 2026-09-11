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
 * uncertain, round it up.
 *
 * Arc thresholds are the episode the arc opens on. They should be checked
 * against a source before the wiki is published; they are the seed set, not a
 * citation.
 */
export const entities: readonly Entity[] = [
  {
    id: 'monkey-d-luffy',
    kind: 'character',
    revealedAtEpisode: 1,
    name: { it: 'Monkey D. Rufy', en: 'Monkey D. Luffy' },
    summary: {
      it: 'Il ragazzo che salpa da solo su una barca a remi e annuncia che diventerà il Re dei Pirati.',
      en: 'The boy who sets out alone in a rowing boat and announces he will become King of the Pirates.',
    },
  },
  {
    id: 'roronoa-zoro',
    kind: 'character',
    revealedAtEpisode: 2,
    name: { it: 'Roronoa Zoro', en: 'Roronoa Zoro' },
    summary: {
      it: 'Cacciatore di pirati legato a un palo in un cortile della Marina, e primo nome sulla lista di una ciurma che ancora non esiste.',
      en: 'A pirate hunter tied to a post in a Marine courtyard, and the first name on the roster of a crew that does not exist yet.',
    },
  },
  {
    id: 'east-blue',
    kind: 'arc',
    revealedAtEpisode: 1,
    name: { it: 'Saga del East Blue', en: 'East Blue Saga' },
    summary: {
      it: 'Il mare più debole dei quattro. Qui la ciurma si forma, una persona per isola.',
      en: 'The weakest of the four seas. The crew is assembled here, one person per island.',
    },
  },
  {
    id: 'alabasta',
    kind: 'arc',
    revealedAtEpisode: 92,
    name: { it: 'Saga di Alabasta', en: 'Alabasta Saga' },
    summary: {
      it: 'Un regno del deserto sull’orlo della guerra civile, e la prima volta che la ciurma si oppone a un’organizzazione invece che a un pirata.',
      en: 'A desert kingdom on the edge of civil war, and the first time the crew stands against an organisation rather than a pirate.',
    },
  },
  {
    id: 'skypiea',
    kind: 'arc',
    revealedAtEpisode: 144,
    name: { it: 'Saga di Skypiea', en: 'Skypiea Saga' },
    summary: {
      it: 'Un’isola sospesa sopra il mare, raggiunta da una corrente che spara le navi verso l’alto.',
      en: 'An island suspended above the sea, reached by a current that fires ships upward.',
    },
  },
  {
    id: 'water-seven',
    kind: 'arc',
    revealedAtEpisode: 229,
    name: { it: 'Saga di Water Seven', en: 'Water Seven Saga' },
    summary: {
      it: 'Una città d’acqua di maestri d’ascia, dove la ciurma si scopre meno compatta di quanto credeva.',
      en: 'A city of shipwrights built on water, where the crew turns out to be less united than it thought.',
    },
  },
  {
    id: 'marineford',
    kind: 'arc',
    revealedAtEpisode: 457,
    name: { it: 'Saga di Marineford', en: 'Marineford Saga' },
    summary: {
      it: 'La Marina e i pirati più forti del mondo si trovano nello stesso porto, nello stesso giorno.',
      en: 'The Marines and the strongest pirates in the world end up in the same harbour on the same day.',
    },
  },
  {
    id: 'wano',
    kind: 'arc',
    revealedAtEpisode: 890,
    name: { it: 'Saga del Paese di Wano', en: 'Wano Country Saga' },
    summary: {
      it: 'Un paese chiuso al resto del mondo, con le sue regole, i suoi spadaccini e i suoi conti in sospeso.',
      en: 'A country closed to the rest of the world, with its own rules, its own swordsmen and its own unsettled debts.',
    },
  },
  {
    id: 'egghead',
    kind: 'arc',
    revealedAtEpisode: 1089,
    name: { it: 'Saga di Egghead', en: 'Egghead Saga' },
    summary: {
      it: 'La ciurma approda su un’isola che vive centinaia di anni nel futuro, costruita attorno al laboratorio di uno scienziato del Governo Mondiale.',
      en: 'The crew lands on an island living hundreds of years in the future, built around the laboratory of a World Government scientist.',
    },
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
