import type { FruitForm } from '~/lib/view/records'

/**
 * The fruits page's own search parameters: the kind and the query.
 *
 * A key is left out when it holds its default (every kind, no query), so the
 * plain address stays plain and a link to the page needs no `search` of its
 * own. The names stay clear of the bookmark's `ep`, `s` and `ch`
 * (`src/lib/progress/linkBookmark.ts`).
 *
 * The Type view is the only view, so `?view=type` is its default and is
 * dropped like any other; the saga view (#665) and the faction view (#667)
 * add `view` here.
 */
export interface FruitParams {
  form?: FruitForm
  q?: string
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
  const { form, q } = search

  return fruitParams(
    isForm(form) ? form : 'all',
    typeof q === 'string' ? q : '',
  )
}

/** The parameters for a kind (or `all`) and a query, defaults left out. */
export function fruitParams(
  form: 'all' | FruitForm,
  query: string,
): FruitParams {
  const params: FruitParams = {}
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
