import type {
  CharacterChronicle,
  CharacterFacts,
  CharacterView,
  ChronicleEntry,
  CoveredRecord,
  Drawing,
  FruitBandView,
  FruitDetail,
  FruitView,
  PortDossier,
  PortView,
  RecordView,
  SearchableCharacter,
  ShelfView,
  Slot,
  Stroke,
  TintId,
  WaypointView,
} from '~/lib/view/records'

/**
 * View models written by hand, so no test needs the archive.
 *
 * The suite already argued for this one file at a time — `CharacterTile`'s
 * test says of its own made-up id that "the test must not depend on what the
 * archive currently says about Nami". Now that no component reads a record at
 * all, that reasoning covers every one of them: a component test asserts a
 * contract, and the archive's own invariants are asserted in `src/data`.
 */

/**
 * Four strokes: a drawing by the renderer's own rule, where fewer than four
 * is an icon. One accent, one ambient and one dashed, so a fixture exercises
 * every ink a stroke can take.
 */
export const strokes: readonly Stroke[] = [
  { d: 'M10 10 H150' },
  { d: 'M10 40 H150', role: 'accent' },
  { d: 'M10 70 H150', role: 'ambient', dashed: true },
  { d: 'M10 100 H150', role: 'soft' },
]

export function drawing(tint: TintId = 'orange'): Drawing {
  return { strokes, tint }
}

/** A record filed at the same number in both units, which most tests want. */
export function at(episode: number): {
  readonly revealedAtChapter: number
  readonly revealedAtEpisode: number
} {
  return { revealedAtEpisode: episode, revealedAtChapter: episode }
}

export function record(over: Partial<RecordView> = {}): RecordView {
  return {
    id: 'test-record',
    kind: 'character',
    name: 'Test Record',
    visual: drawing(),
    ...at(5),
    ...over,
  }
}

export function character(over: Partial<CharacterView> = {}): CharacterView {
  return {
    ...record(),
    id: 'test-navigator',
    name: 'Nami',
    role: 'Navigator',
    ...over,
  }
}

export function searchable(
  over: Partial<SearchableCharacter> = {},
): SearchableCharacter {
  const base = character(over)

  return { ...base, folded: base.name.toLowerCase(), aliases: [], ...over }
}

export function fruit(over: Partial<FruitView> = {}): FruitView {
  const base = record({
    kind: 'fruit',
    id: 'test-fruit',
    name: 'Gum-Gum Fruit',
    ...over,
  })

  return {
    ...base,
    form: 'paramecia',
    summary: 'Turns the body of whoever ate it to rubber.',
    folded: base.name.toLowerCase(),
    aliases: [],
    ...over,
  }
}

export function fruitBand(over: Partial<FruitBandView> = {}): FruitBandView {
  return { form: 'paramecia', total: 1, open: [fruit()], covered: [], ...over }
}

export function fruitDetail(over: Partial<FruitDetail> = {}): FruitDetail {
  return { slot: openSlot(fruit()), ...over }
}

export function waypoint(over: Partial<WaypointView> = {}): WaypointView {
  return { ...record(), summary: 'A record on the route.', ...over }
}

/**
 * Handles are a counter, never a slug: a fixture that passed an id here would
 * be asserting the very leak this exists to close. Kept in one box, the way
 * `handle.server` keeps its table — a cell a function fills is a different
 * thing from a module-scope binding a function reaches out and assigns to.
 */
const minted = { count: 0 }

export function coveredRecord(
  over: Partial<CoveredRecord> = {},
): CoveredRecord {
  minted.count += 1

  return {
    handle: `h${String(minted.count)}`,
    kind: 'character',
    ...at(1089),
    ...over,
  }
}

export function port(over: Partial<PortView> = {}): PortView {
  return {
    ...record({ kind: 'place', id: 'test-port', name: 'Baratie' }),
    summary: 'A restaurant that floats.',
    dossier: dossier(),
    ...over,
  }
}

export function dossier(over: Partial<PortDossier> = {}): PortDossier {
  return {
    sea: 'east-blue',
    form: 'restaurant',
    arc: 'Test Arc',
    landmark: 'A fish-shaped roof',
    log: 'The ship put in here.',
    filedHere: [],
    ...over,
  }
}

export function shelf(over: Partial<ShelfView> = {}): ShelfView {
  return {
    arc: openSlot(record({ kind: 'arc', id: 'test-arc', name: 'Test Arc' })),
    total: 1,
    open: [searchable()],
    covered: [],
    ...over,
  }
}

export function facts(
  over: Partial<Extract<CharacterFacts, { mode: 'facts' }>> = {},
): CharacterFacts {
  return { mode: 'facts', ...over }
}

/** One reached story, with a plain paragraph unless told otherwise. */
export function story(over: Partial<ChronicleEntry> = {}): ChronicleEntry {
  return {
    episode: 1,
    title: 'A boy in a barrel',
    body: [{ kind: 'text', text: 'He climbs out of a barrel.' }],
    ...over,
  }
}

/** A chronicle with the stories it is given, in the order it is given them. */
export function chronicle(
  entries: readonly ChronicleEntry[] = [],
): CharacterChronicle {
  return { mode: 'chronicle', entries }
}

export function openSlot<T>(value: T): Slot<T> {
  return { open: true, record: value }
}

export function coveredSlot<T>(over: Partial<CoveredRecord> = {}): Slot<T> {
  return { open: false, covered: coveredRecord(over) }
}

/**
 * A peek that never arrives, so the in-flight state is the one under test.
 * Named rather than inline: a promise that never settles is a fixture in its
 * own right, and `CharacterGrid`'s test already spells it this way.
 */
async function onTheirWay<T>(): Promise<T> {
  return new Promise(() => {
    // Never settles.
  })
}

/** A peek the server refused, for the failed branch. */
async function refused<T>(): Promise<T> {
  await Promise.resolve()

  throw new Error('peek failed')
}

/** A peek that resolves on the next microtask. */
export function peekTo<T>(value: T): (handle: string) => Promise<T> {
  return async () => {
    await Promise.resolve()

    return value
  }
}

/** A peek that never settles, for the curtain's in-flight state. */
export function peekPending<T>(): (handle: string) => Promise<T> {
  return onTheirWay
}

/** A peek that rejects, for the failed branch. */
export function peekFails<T>(): (handle: string) => Promise<T> {
  return refused
}

/**
 * Records the handles it was asked for, so a test can hold that a component
 * passes the opaque handle through untouched and never invents one.
 */
export function spyPeek<T>(value: T): {
  readonly asked: readonly string[]
  readonly peek: (handle: string) => Promise<T>
} {
  const asked: string[] = []
  const settle = peekTo(value)

  return {
    asked,
    peek: async (handle: string) => {
      asked.push(handle)

      return settle(handle)
    },
  }
}
