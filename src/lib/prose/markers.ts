/**
 * The one piece of grammar a story's paragraph carries: a marker that names
 * another character, `[[id]]` or `[[id|the words to print]]`.
 *
 * Read here, in `~/lib`, so the server that turns a marker into a link and
 * the data test that checks who a story is allowed to name parse the same
 * grammar; a second parser in either place would be the one that drifts.
 */

/** A marker: the record it names, and the words it shows instead, if any. */
export type Marker = { readonly id: string; readonly shown?: string }

/** A paragraph cut into plain words and the markers between them. */
export type Token =
  | { readonly kind: 'marker'; readonly marker: Marker }
  | { readonly kind: 'words'; readonly text: string }

const OPEN = '[['
const CLOSE = ']]'
const BAR = '|'

/** An id is a name slug: lowercase letters, digits and hyphens, nothing else. */
const SLUG = /^[a-z0-9-]+$/u

/** The marker between `[[` and `]]`, or `undefined` when it is not one. */
function markerOf(inside: string): Marker | undefined {
  const bar = inside.indexOf(BAR)
  const id = bar === -1 ? inside : inside.slice(0, bar)
  const shown = bar === -1 ? undefined : inside.slice(bar + BAR.length)

  if (shown === '' || !SLUG.test(id)) {
    return undefined
  }

  return shown === undefined ? { id } : { id, shown }
}

/** Where the next marker sits in the text, or `undefined` when there is none. */
type Found = {
  readonly end: number
  readonly marker: Marker
  readonly start: number
}

/**
 * The first well-formed marker at or after `from`. A `[[` with something
 * between it and the next `]]` that is not a marker is left as words and the
 * search goes on past it, so one slip does not swallow the links after it:
 * the data tests hold that this never happens, so the reader then sees the
 * brackets rather than losing the sentence.
 */
function nextMarker(text: string, from: number): Found | undefined {
  for (
    let start = text.indexOf(OPEN, from);
    start !== -1;
    start = text.indexOf(OPEN, start + OPEN.length)
  ) {
    const close = text.indexOf(CLOSE, start + OPEN.length)
    if (close === -1) {
      return undefined
    }

    const marker = markerOf(text.slice(start + OPEN.length, close))
    if (marker !== undefined) {
      return { end: close + CLOSE.length, marker, start }
    }
  }

  return undefined
}

/** The paragraph as tokens, in order. */
export function tokenize(text: string): readonly Token[] {
  const tokens: Token[] = []
  let from = 0

  for (
    let found = nextMarker(text, from);
    found !== undefined;
    found = nextMarker(text, from)
  ) {
    if (found.start > from) {
      tokens.push({ kind: 'words', text: text.slice(from, found.start) })
    }
    tokens.push({ kind: 'marker', marker: found.marker })
    from = found.end
  }

  if (from < text.length) {
    tokens.push({ kind: 'words', text: text.slice(from) })
  }

  return tokens
}

/** The ids a paragraph's markers name, in the order they appear. */
export function markedIds(text: string): readonly string[] {
  return tokenize(text).flatMap((token) =>
    token.kind === 'marker' ? [token.marker.id] : [],
  )
}
