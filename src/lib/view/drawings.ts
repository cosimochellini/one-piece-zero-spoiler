import {
  createContext,
  type RefCallback,
  use,
  useCallback,
  useSyncExternalStore,
} from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { serialiseBookmark } from '~/lib/progress/episode'

import type { Drawing, Stroke } from './records'

/** Fetches the strokes of `ids` in `locale`, keyed by id. */
export type Load = (
  ids: string[],
  locale: Locale,
) => Promise<Record<string, Stroke[]>>

/**
 * How a page asks for the strokes a list left behind (`Drawing.deferred`).
 * Only a route may call a server function; outside one (a unit test, say)
 * there is none, and a deferred drawing stays an empty frame.
 */
export const DrawingsContext = createContext<Load | null>(null)

/** One drawing to ask for: which, in what locale, at what bookmark. */
interface Ask {
  id: string
  load: Load
  locale: Locale
  scope: string
}

// How far off the screen a drawing is asked for: one screen ahead, so it is
// there by the time the reader scrolls to it.
const AHEAD = '100% 0px'
// The most ids one request carries; the server refuses more.
const BATCH = 64

// The strokes already here, and the ids already asked for, per bookmark and
// locale: a drawing follows the bookmark (a redrawing), so a moved bookmark
// starts afresh. Kept for the tab's life, so Back draws at once.
const fetched = new Map<string, Map<string, Stroke[]>>()
const asked = new Map<string, Set<string>>()
const queued = new Map<string, Ask[]>()
const listeners = new Set<() => void>()

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/** Files what came back; an id the server left out stays empty. */
function store(
  scope: string,
  ids: string[],
  got: Record<string, Stroke[]>,
): void {
  const into = fetched.get(scope) ?? new Map<string, Stroke[]>()
  fetched.set(scope, into)
  for (const id of ids) {
    into.set(id, Object.hasOwn(got, id) ? (got[id] ?? []) : [])
  }
  for (const listener of listeners) {
    listener()
  }
}

/** One batch of one scope. A failed one is asked again when next near. */
async function send(batch: Ask[]): Promise<void> {
  const [first] = batch
  if (first === undefined) {
    return
  }

  const ids = batch.map((one) => one.id)
  let got: Record<string, Stroke[]>
  try {
    got = await first.load(ids, first.locale)
  } catch {
    for (const id of ids) {
      asked.get(first.scope)?.delete(id)
    }
    return
  }
  store(first.scope, ids, got)
}

/** Sends every drawing asked for since the last task, a batch at a time. */
function flush(): void {
  for (const asks of queued.values()) {
    for (let from = 0; from < asks.length; from += BATCH) {
      void send(asks.slice(from, from + BATCH))
    }
  }
  queued.clear()
}

function enqueue(next: Ask): void {
  const sent = asked.get(next.scope) ?? new Set<string>()
  asked.set(next.scope, sent)
  if (sent.has(next.id)) {
    return
  }

  sent.add(next.id)
  if (queued.size === 0) {
    setTimeout(flush, 0)
  }
  queued.set(next.scope, [...(queued.get(next.scope) ?? []), next])
}

/**
 * A record's strokes, and the ref to put on the box they are drawn in. A
 * drawing sent whole is returned as is; a deferred one is empty until its box
 * comes within a screen of the viewport, then asked for in one batch with
 * its neighbours. The box keeps its size either way, so nothing moves.
 */
export function useDrawing(
  id: string,
  visual: Drawing,
): { ref: RefCallback<Element>; strokes: Stroke[] } {
  const load = use(DrawingsContext)
  const { locale } = useLocale()
  const { bookmark } = useBookmark()
  const scope = `${locale} ${bookmark === null ? '' : serialiseBookmark(bookmark)}`
  const deferred = visual.deferred === true

  const here = useSyncExternalStore(
    subscribe,
    () => (deferred ? fetched.get(scope)?.get(id) : visual.strokes),
    () => (deferred ? undefined : visual.strokes),
  )

  // Watched until the strokes are here, not only until the first ask: a
  // batch that failed is asked again the next time the box comes near.
  const waiting = deferred && here === undefined
  const ref = useCallback<RefCallback<Element>>(
    (box) => {
      if (!waiting || load === null || box === null) {
        return
      }

      const next = { id, load, locale, scope }
      if (typeof IntersectionObserver === 'undefined') {
        enqueue(next)
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            enqueue(next)
          }
        },
        { rootMargin: AHEAD },
      )
      observer.observe(box)
      return () => {
        observer.disconnect()
      }
    },
    [id, load, locale, scope, waiting],
  )

  return { ref, strokes: here ?? [] }
}
