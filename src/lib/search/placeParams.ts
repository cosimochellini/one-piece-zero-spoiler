import { matchFolded } from '~/lib/search/fold'
import type { StopView } from '~/lib/view/places'
import type { PlaceForm, Sea } from '~/lib/view/records'

/**
 * The places page's own search parameters: the sea, the kind and the saga
 * picked and the query. Named as the fruits page names its own (`form`,
 * `q`), in English in both locales. The index is always a grid: an old
 * address's `view` is left out, as any unknown key is.
 *
 * A key is left out when it holds its default (every sea, kind and saga, no
 * query), so the plain address stays plain. The names stay clear of
 * the bookmark's `ep`, `s` and `ch` (`src/lib/progress/linkBookmark.ts`).
 */
export interface PlaceParams {
  form?: PlaceForm
  q?: string
  /** A saga by its place in route order, from 1. */
  saga?: number
  sea?: Sea
}

// Keyed by every member of the union, so a sea or a form added to it does not
// compile until it is listed here too.
const SEAS = new Set<string>(
  Object.keys({
    'east-blue': true,
    'grand-line': true,
    'calm-belt': true,
    'red-line': true,
    'new-world': true,
  } satisfies Record<Sea, true>),
)

const FORMS = new Set<string>(
  Object.keys({
    archipelago: true,
    city: true,
    fortress: true,
    island: true,
    prison: true,
    region: true,
    restaurant: true,
    sea: true,
    ship: true,
    town: true,
    train: true,
    village: true,
  } satisfies Record<PlaceForm, true>),
)

/** Whether a value is one of the seas the pages print. */
export function isSea(value: unknown): value is Sea {
  return typeof value === 'string' && SEAS.has(value)
}

/** Whether a value is one of the place forms the pages print. */
export function isForm(value: unknown): value is PlaceForm {
  return typeof value === 'string' && FORMS.has(value)
}

/** A saga's place in route order: a whole number from 1. */
function isSaga(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value) && value > 0
}

/**
 * The parameters a query string names, each one checked: an unknown value
 * is left out, which is its default. A sea or a saga the reader has not
 * reached is a valid value that matches nothing open, as a typed query can.
 */
export function parsePlaceParams(search: Record<string, unknown>): PlaceParams {
  const { form, q, saga, sea } = search

  return {
    ...(isSea(sea) && { sea }),
    ...(isForm(form) && { form }),
    ...(isSaga(saga) && { saga }),
    // Blank is no query; anything else is kept as typed, spaces and all, so
    // the field bound to it never loses a space mid-word.
    ...(typeof q === 'string' && q.trim() !== '' && { q }),
  }
}

/**
 * The picks with every sea, type and saga no open place holds left out, so
 * a shared address picked further on than the reader's bookmark names
 * nothing on the page: the index shows everything, as with no pick.
 */
export function reachedParams(
  params: PlaceParams,
  open: StopView[],
): PlaceParams {
  const { form, saga, sea, ...rest } = params

  return {
    ...rest,
    ...(open.some((stop) => stop.sea === sea) && { sea }),
    ...(open.some((stop) => stop.form === form) && { form }),
    ...(open.some((stop) => stop.saga === saga) && { saga }),
  }
}

/** Whether any pick or query narrows the open places. */
export function isNarrowed({ form, q, saga, sea }: PlaceParams): boolean {
  return [form, q, saga, sea].some((value) => value !== undefined)
}

/**
 * Whether an open stop answers the picks and a folded query. Only open stops
 * are ever asked: a covered stop has no sea, kind or saga in the page.
 */
export function stopMatches(
  stop: StopView,
  { form, saga, sea }: PlaceParams,
  needle: string,
): boolean {
  return (
    (sea === undefined || stop.sea === sea)
    && (form === undefined || stop.form === form)
    && (saga === undefined || stop.saga === saga)
    && matchFolded(stop, needle).matches
  )
}
