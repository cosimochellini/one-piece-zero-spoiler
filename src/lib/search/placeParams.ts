import { matchFolded } from '~/lib/search/fold'
import type { StopView } from '~/lib/view/places'
import type { PlaceForm, Sea } from '~/lib/view/records'

/** How the index lays its places out: rows, or a grid of plates. */
export type IndexView = 'grid' | 'list'

/**
 * The places page's own search parameters: the sea, the kind and the saga
 * picked, the layout and the query. Named as the fruits page names its own
 * (`form`, `view`, `q`), in English in both locales.
 *
 * A key is left out when it holds its default (every sea, kind and saga, the
 * list, no query), so the plain address stays plain. The names stay clear of
 * the bookmark's `ep`, `s` and `ch` (`src/lib/progress/linkBookmark.ts`).
 */
export interface PlaceParams {
  form?: PlaceForm
  q?: string
  /** A saga by its place in route order, from 1. */
  saga?: number
  sea?: Sea
  view?: Exclude<IndexView, 'list'>
}

const SEAS = new Set<string>([
  'east-blue',
  'grand-line',
  'calm-belt',
  'red-line',
  'new-world',
] satisfies Sea[])

const FORMS = new Set<string>([
  'archipelago',
  'city',
  'fortress',
  'island',
  'prison',
  'region',
  'restaurant',
  'sea',
  'ship',
  'town',
  'train',
  'village',
] satisfies PlaceForm[])

function isSea(value: unknown): value is Sea {
  return typeof value === 'string' && SEAS.has(value)
}

function isForm(value: unknown): value is PlaceForm {
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
  const { form, q, saga, sea, view } = search

  return {
    ...(isSea(sea) && { sea }),
    ...(isForm(form) && { form }),
    ...(isSaga(saga) && { saga }),
    ...(view === 'grid' && { view }),
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
