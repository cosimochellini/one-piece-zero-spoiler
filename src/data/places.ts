import { entities } from './entities'
import type { Entity, LocalizedText } from './types'

/**
 * The ship's log: the place layer of the archive.
 *
 * `entities.ts` files a place at the episode that first shows it and gives it
 * a name and a sentence. This module adds what a viewer at that episode also
 * knows about it — which sea it lies in, what kind of place it is, which arc
 * it belongs to, its one landmark, a longer entry, and which records the
 * archive files there — and the order the ship puts in at each one.
 *
 * Every field obeys the same rule as the summaries: it says only what a
 * viewer at the threshold episode has already seen. A fact learned later is
 * a spoiler, so Baratie has a sous-chef and not what he turns out to be, and
 * Jaya has a town that laughs and not what lies past it.
 */

/** The three stretches of sea the route crosses, in order. */
export type Sea = 'east-blue' | 'grand-line' | 'new-world'

/** What kind of place a record is, as the log would put it. */
export type PlaceForm = 'village' | 'town' | 'restaurant' | 'island'

export type PlaceDossier = {
  readonly sea: Sea
  readonly form: PlaceForm
  /** The arc the place belongs to: an `arc` record's id. */
  readonly arc: string
  /** The one thing the drawing shows and the eye would look for. */
  readonly landmark: LocalizedText
  /** The log entry proper: two or three sentences, safe at the threshold. */
  readonly log: LocalizedText
  /**
   * Records the archive files at this place: the characters met here, the
   * ship received here. Each keeps its own threshold, so a name filed later
   * than the place stays under fog on the place's own page.
   */
  readonly filedHere: readonly string[]
}

export const PLACE_DOSSIERS: Readonly<Record<string, PlaceDossier>> = {
  'shells-town': {
    sea: 'east-blue',
    form: 'town',
    arc: 'east-blue',
    landmark: {
      it: 'La torre della base della Marina',
      en: 'The Marine base tower',
    },
    log: {
      it: 'La prima terra su cui la ciurma mette piede, se due persone senza nave si possono chiamare ciurma. La base tiene la città come una caserma, i marinai temono il proprio capitano più dei pirati, e nel cortile un cacciatore di pirati è legato a un palo da giorni, senza mangiare, per una promessa fatta a una bambina.',
      en: 'The first land the crew sets foot on, if two people with no ship can be called a crew. The base runs the town like a barracks, the Marines fear their own captain more than any pirate, and in the yard a pirate hunter has been tied to a post for days, unfed, over a promise made to a little girl.',
    },
    filedHere: ['roronoa-zoro'],
  },
  'foosha-village': {
    sea: 'east-blue',
    form: 'village',
    arc: 'east-blue',
    landmark: { it: 'Il mulino a vento', en: 'The windmill' },
    log: {
      it: 'Il porto di partenza. Qui un bambino ha passato un anno a chiedere di essere imbarcato dai pirati che avevano preso la taverna per casa, e qui ha ricevuto in prestito il cappello di paglia che porta ancora, con la promessa di restituirlo quando sarà diventato un grande pirata.',
      en: 'The port of departure. Here a boy spent a year asking to be taken aboard by the pirates who had made the tavern their home, and here he was lent the straw hat he still wears, on a promise to give it back once he has become a great pirate.',
    },
    filedHere: ['shanks'],
  },
  'orange-town': {
    sea: 'east-blue',
    form: 'town',
    arc: 'east-blue',
    landmark: { it: 'Il tendone dei pirati', en: 'The pirates’ big top' },
    log: {
      it: 'Il capitano ci è caduto dentro dal cielo, lasciato andare da un uccello, nel mezzo di un inseguimento tra una ladra e tre pirati. Le strade sono vuote, le case ancora intere tranne quelle che i cannoni hanno già raggiunto, e la ciurma che occupa la piazza ha una nave, un tendone e una carta nautica che qualcuno le ha appena rubato.',
      en: 'The captain fell into it from the sky, dropped by a bird, in the middle of a chase between a thief and three pirates. The streets are empty, the houses still whole except where the cannons have already reached, and the crew holding the square has a ship, a big top and a sea chart that somebody has just stolen from it.',
    },
    filedHere: ['nami', 'buggy'],
  },
  'syrup-village': {
    sea: 'east-blue',
    form: 'village',
    arc: 'east-blue',
    landmark: { it: 'La villa sulla collina', en: 'The mansion on the hill' },
    log: {
      it: 'Tre bambini con una bandiera, il bugiardo che li comanda e una ragazza malata che ascolta le sue storie dalla finestra della villa. Il villaggio ha imparato a non credere a una parola di quello che sente gridare all’alba, il che è un problema il giorno in cui la bugia è vera.',
      en: 'Three children with a flag, the liar who leads them, and a sick girl who listens to his stories from a window of the mansion. The village has learned not to believe a word of what it hears shouted at dawn, which is a problem on the day the lie is true.',
    },
    filedHere: ['usopp', 'going-merry'],
  },
  baratie: {
    sea: 'east-blue',
    form: 'restaurant',
    arc: 'east-blue',
    landmark: { it: 'La prua a testa di pesce', en: 'The fish-head prow' },
    log: {
      it: 'Il primo scalo che non è un’isola. Il proprietario è un vecchio cuoco con una gamba di legno; il suo vice dà da mangiare a chiunque abbia fame e prende a calci chiunque manchi di rispetto alla cucina. La ciurma arriva per cercare un cuoco e il capitano finisce a lavare i piatti per pagare un tetto sfondato.',
      en: 'The first port of call that is not an island. The owner is an old cook with a peg leg; his sous-chef feeds anyone who is hungry and kicks anyone who disrespects the kitchen. The crew comes looking for a cook, and the captain ends up washing dishes to pay for a hole in the roof.',
    },
    filedHere: ['sanji', 'dracule-mihawk'],
  },
  jaya: {
    sea: 'grand-line',
    form: 'island',
    arc: 'skypiea',
    landmark: { it: 'Il porto di Mock Town', en: 'Mock Town harbour' },
    log: {
      it: 'La ciurma vi arriva con un Log Pose che punta dritto verso il cielo e nessuna idea di come seguirlo. Mock Town è una città di pirati senza legge, dove nessuno paga il conto e chi parla di un’isola nel cielo viene deriso ad alta voce; l’altra metà dell’isola è foresta, e ci abita chi non ride.',
      en: 'The crew arrives with a Log Pose pointing straight up at the sky and no idea how to follow it. Mock Town is a lawless pirate town where nobody pays their bill and anyone who mentions an island in the sky is laughed at out loud; the other half of the island is forest, and the people who do not laugh live there.',
    },
    filedHere: [],
  },
  'egghead-island': {
    sea: 'new-world',
    form: 'island',
    arc: 'egghead',
    landmark: { it: 'La cupola del laboratorio', en: 'The laboratory dome' },
    log: {
      it: 'Un’isola che vive qualche secolo avanti al resto del mondo, costruita attorno al laboratorio di uno scienziato del Governo Mondiale. Il mare intorno è caldo per il vulcano sul fondo, le macchine che la abitano non dovrebbero esistere ancora, e la ciurma ci approda inseguita.',
      en: 'An island living a few centuries ahead of the rest of the world, built around the laboratory of a World Government scientist. The sea around it is warm because of the volcano on the seabed, the machines that live on it should not exist yet, and the crew lands there with someone on its tail.',
    },
    filedHere: [],
  },
}

/** Every place record, in the order the ship puts in at them. */
export const places: readonly Entity[] = [...entities]
  .filter((entity) => entity.kind === 'place')
  .sort((a, b) => a.revealedAtEpisode - b.revealedAtEpisode)

/**
 * Looks a place up by id. A record that exists but is not a place is
 * `undefined` here too: the log has no entry for a character.
 */
export function getPlace(id: string): Entity | undefined {
  return places.find((candidate) => candidate.id === id)
}

export function dossierOf(entity: Entity): PlaceDossier | undefined {
  return PLACE_DOSSIERS[entity.id]
}
