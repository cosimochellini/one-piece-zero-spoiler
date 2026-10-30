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
import { thresholdIn } from '~/lib/progress/spoiler'

import type { DemoEntry, Drawing, Step, Stroke } from './records'

/** Fetches drawings left out of a page, keyed by record id. */
type Loader<T> = (ids: string[], locale: Locale) => Promise<Record<string, T>>
/** Loads a listing’s current drawing at its saved bookmark. */
export type Load = (
  ids: string[],
  locale: Locale,
) => Promise<Record<string, Stroke[]>>
/** Loads every drawing step inside the series’ bounded demo. */
export type DemoLoad = (
  ids: string[],
  locale: Locale,
) => Promise<Record<string, Step<Drawing>[]>>

/** Only routes call server functions; elsewhere a deferred frame stays empty. */
export const DrawingsContext = createContext<Load | null>(null)
export const DemoDrawingsContext = createContext<DemoLoad | null>(null)

interface Ask<T> {
  id: string
  load: Loader<T>
  locale: Locale
  scope: string
}

// Listings preload one screen ahead; demo cards wait for viewport entry.
const AHEAD = '100% 0px'
const BATCH = 64

/** A tab's cache and request queue for one drawing payload kind. */
class DrawingStore<T> {
  private empty: T
  private fetched = new Map<string, Map<string, T>>()
  private asked = new Map<string, Set<string>>()
  private queued = new Map<string, Ask<T>[]>()
  private listeners = new Set<() => void>()

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  constructor(empty: T) {
    this.empty = empty
  }

  private store(scope: string, ids: string[], got: Record<string, T>): void {
    const into = this.fetched.get(scope) ?? new Map<string, T>()
    this.fetched.set(scope, into)
    for (const id of ids) {
      into.set(
        id,
        Object.hasOwn(got, id) ? (got[id] ?? this.empty) : this.empty,
      )
    }
    for (const listener of this.listeners) {
      listener()
    }
  }

  private async send(batch: Ask<T>[]): Promise<void> {
    const [first] = batch
    if (first === undefined) {
      return
    }
    const ids = batch.map((one) => one.id)
    let got: Record<string, T>
    try {
      got = await first.load(ids, first.locale)
    } catch {
      // Keep observing: a failed batch is retried when its box next enters.
      for (const id of ids) {
        this.asked.get(first.scope)?.delete(id)
      }
      return
    }
    this.store(first.scope, ids, got)
  }

  private flush(): void {
    for (const asks of this.queued.values()) {
      for (let from = 0; from < asks.length; from += BATCH) {
        void this.send(asks.slice(from, from + BATCH))
      }
    }
    this.queued.clear()
  }

  get(scope: string, id: string): T | undefined {
    return this.fetched.get(scope)?.get(id)
  }

  enqueue(next: Ask<T>): void {
    const sent = this.asked.get(next.scope) ?? new Set<string>()
    this.asked.set(next.scope, sent)
    if (sent.has(next.id)) {
      return
    }
    sent.add(next.id)
    if (this.queued.size === 0) {
      setTimeout(() => {
        this.flush()
      }, 0)
    }
    this.queued.set(next.scope, [...(this.queued.get(next.scope) ?? []), next])
  }
}

const drawings = new DrawingStore<Stroke[]>([])
const demos = new DrawingStore<Step<Drawing>[]>([])

/** Watches a fixed-size frame until its deferred payload arrives. */
function useDeferred<T>(
  store: DrawingStore<T>,
  load: Loader<T> | null,
  {
    id,
    scope,
    inline,
    rootMargin,
  }: { id: string; inline: T | undefined; rootMargin: string; scope: string },
): { ref: RefCallback<Element>; value: T | undefined } {
  const { locale } = useLocale()
  const deferred = inline === undefined
  const value = useSyncExternalStore(
    store.subscribe,
    () => (deferred ? store.get(scope, id) : inline),
    () => inline,
  )
  const waiting = deferred && value === undefined
  const ref = useCallback<RefCallback<Element>>(
    (box) => {
      if (!waiting || load === null || box === null) {
        return
      }
      const next = { id, load, locale, scope }
      if (typeof IntersectionObserver === 'undefined') {
        store.enqueue(next)
        return
      }
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            store.enqueue(next)
          }
        },
        { rootMargin },
      )
      observer.observe(box)
      return () => {
        observer.disconnect()
      }
    },
    [id, load, locale, rootMargin, scope, store, waiting],
  )
  return { ref, value }
}

/** A listing drawing, resolved at the saved bookmark and preloaded one screen ahead. */
export function useDrawing(
  id: string,
  visual: Drawing,
): { ref: RefCallback<Element>; strokes: Stroke[] } {
  const load = use(DrawingsContext)
  const { locale } = useLocale()
  const { bookmark, series } = useBookmark()
  const scope = `${series?.slug ?? ''} ${locale} ${bookmark === null ? '' : serialiseBookmark(bookmark)}`
  const { ref, value } = useDeferred(drawings, load, {
    id,
    scope,
    inline: visual.deferred === true ? undefined : visual.strokes,
    rootMargin: AHEAD,
  })
  return { ref, strokes: value ?? [] }
}

/** All demo-safe redrawings load together; the dial selects their current step locally. */
export function useDemoDrawing(
  entry: DemoEntry,
  point: { mode: 'chapter' | 'episode'; value: number },
): { drawing: Drawing | undefined; ref: RefCallback<Element> } {
  const load = use(DemoDrawingsContext)
  const { locale } = useLocale()
  const { series } = useBookmark()
  const scope = `${series?.slug ?? ''} ${locale} demo`
  const { ref, value } = useDeferred(demos, load, {
    id: entry.id,
    scope,
    inline:
      entry.drawings.some((step) => step.value.deferred === true) ?
        undefined
      : entry.drawings,
    rootMargin: '0px',
  })
  return {
    ref,
    drawing: (value ?? entry.drawings).findLast(
      (step) => point.value >= thresholdIn(step, point.mode),
    )?.value,
  }
}
