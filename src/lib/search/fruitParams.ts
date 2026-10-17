import type { FruitForm } from '~/lib/view/records'

/**
 * How the album groups its fruits: by kind, by the saga they came in, or by
 * the faction their eaters stand in.
 */
export type AlbumView = 'faction' | 'saga' | 'type'

/**
 * The fruits page's own search parameters: the view, the kind and the query.
 *
 * A key is left out when it holds its default (the Type view, every kind, no
 * query), so the plain address stays plain and a link to the page needs no
 * `search` of its own. The names stay clear of the bookmark's `ep`, `s` and
 * `ch` (`src/lib/progress/linkBookmark.ts`).
 */
export interface FruitParams {
  form?: FruitForm
  q?: string
  view?: Exclude<AlbumView, 'type'>
}

/** The kinds a chip can pick. */
const FORMS = new Set<string>([
  'paramecia',
  'zoan',
  'logia',
] satisfies FruitForm[])

function isForm(value: unknown): value is FruitForm {
  return typeof value === 'string' && FORMS.has(value)
}

/**
 * The parameters a query string names, each one checked: an unknown value
 * falls back to its default, which is to say it is left out.
 *
 * A query the field typed always comes back as text: the router quotes a
 * string that would parse as something else. A hand-written `?q=123` is
 * parsed into a number and left out, like any other value that is not text.
 */
export function parseFruitParams(search: Record<string, unknown>): FruitParams {
  const { form, q, view } = search

  return fruitParams({
    view: view === 'saga' || view === 'faction' ? view : 'type',
    form: isForm(form) ? form : 'all',
    query: typeof q === 'string' ? q : '',
  })
}

/** The parameters for a view, a kind (or `all`) and a query, defaults left out. */
export function fruitParams({
  form,
  query,
  view,
}: {
  form: 'all' | FruitForm
  query: string
  view: AlbumView
}): FruitParams {
  const params: FruitParams = {}
  if (view !== 'type') {
    params.view = view
  }
  if (form !== 'all') {
    params.form = form
  }
  // Blank is no query; anything else is kept as typed, spaces and all, so
  // the field bound to it never loses a space mid-word.
  if (query.trim() !== '') {
    params.q = query
  }

  return params
}

/**
 * The hash of a saga's group in the saga view: its place in route order,
 * from 1, which the site already says out loud.
 */
export function sagaAnchor(at: number): string {
  return `saga-${String(at + 1)}`
}
