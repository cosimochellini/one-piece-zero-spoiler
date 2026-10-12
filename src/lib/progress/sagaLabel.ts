import { createContext, use, useEffect, useState } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { SkipRange } from '~/lib/view/filler'

import { type Draft, gradeDraft } from './episode'
import { resolveEpisode } from './seasons'

/** One saga as the dialog needs it: where it opens, and its name. */
export interface SagaRow {
  from: number
  name: string
}

/**
 * Every saga's opening in both units, each list in route order for that
 * unit, and the runs of pure filler. Names only, in one locale: the dialog
 * shows the saga a number falls in whatever the bookmark (owner, 2026-10-12),
 * so nothing here is gated.
 */
export interface SagaTable {
  chapter: SagaRow[]
  episode: SagaRow[]
  filler: SkipRange[]
}

/** The saga a number falls in, and whether that episode is filler. */
export interface SagaAt {
  filler: boolean
  name: string
}

/**
 * The saga the draft's number falls in, or `null` while the draft is not a
 * bookmark yet. A season draft is read as the absolute episode it stands
 * for. On a shared opening the later saga in route order wins, as it does
 * in the landing's fold.
 */
export function sagaAt(table: SagaTable, draft: Draft): null | SagaAt {
  const { bookmark } = gradeDraft(draft)
  if (bookmark === null) {
    return null
  }

  const [rows, at] =
    bookmark.mode === 'chapter' ?
      [table.chapter, bookmark.chapter]
    : [
        table.episode,
        bookmark.mode === 'season' ?
          resolveEpisode(bookmark.season, bookmark.episode)
        : bookmark.episode,
      ]
  if (at === null) {
    return null
  }

  const saga = rows.findLast((row) => row.from <= at)
  if (saga === undefined) {
    return null
  }

  return {
    name: saga.name,
    filler:
      bookmark.mode !== 'chapter'
      && table.filler.some((range) => range.first <= at && at <= range.last),
  }
}

/**
 * How the dialog asks for the table. The locale route provides it, because
 * only a route may call a server function; outside one (a unit test, say)
 * there is none, and the dialog simply shows no saga.
 */
export const SagaTableContext = createContext<
  ((locale: Locale) => Promise<SagaTable>) | null
>(null)

/** The table, or `null` when there is no way to ask or the asking failed. */
async function tableOrNull(
  load: ((locale: Locale) => Promise<SagaTable>) | null,
  locale: Locale,
): Promise<null | SagaTable> {
  if (load === null) {
    return null
  }
  try {
    return await load(locale)
  } catch {
    // No label rather than a broken dialog.
    return null
  }
}

/**
 * The saga table, once it has arrived. `null` until then, and for good if it
 * cannot be had: the label is a help, and the dialog works without it.
 */
export function useSagaTable(): null | SagaTable {
  const load = use(SagaTableContext)
  const { locale } = useLocale()
  const [table, setTable] = useState<null | SagaTable>(null)

  useEffect(() => {
    let live = true
    const fetchTable = async (): Promise<void> => {
      const next = await tableOrNull(load, locale)
      if (live) {
        setTable(next)
      }
    }
    void fetchTable()

    return () => {
      live = false
    }
  }, [load, locale])

  return table
}
