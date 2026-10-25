import { useSeriesT, useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import type { SeriesPage } from '~/lib/progress/series'

import { useDeclares } from './useDeclares'

/** A page a link can point to, and its label or the key of its label. */
export interface PageEntry<K> {
  label: K
  page: SeriesPage
  to: `/$series/$locale/${SeriesPage}`
}

/**
 * The pages the series declares, in order and labelled: the shared ones in
 * the shared words, One Piece's own (its fruits, its filler guide) in its
 * words and on its pages only.
 */
export function usePageLinks(
  shared: PageEntry<TranslationKey>[],
  onePiece: PageEntry<TranslationKey<'one-piece'>>[],
): PageEntry<string>[] {
  const t = useT()
  const own = useSeriesT('one-piece')
  const declares = useDeclares()
  const labelled = [
    ...shared.map((entry) => ({ ...entry, label: t(entry.label) })),
    ...(own === undefined ?
      []
    : onePiece.map((entry) => ({ ...entry, label: own(entry.label) }))),
  ]

  return labelled.filter(({ page }) => declares(page))
}
