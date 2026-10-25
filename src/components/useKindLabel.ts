import { useCallback } from 'react'

import { useSeriesT, useT } from '~/i18n/LocaleContext'
import type { EntityKind } from '~/lib/view/records'

/**
 * A record's kind in the page's words. A devil fruit and a ship are One
 * Piece's kinds, so their labels come through its own translate; only its
 * records are of those kinds.
 */
export function useKindLabel(): (kind: EntityKind) => string {
  const t = useT()
  const onePiece = useSeriesT('one-piece')

  return useCallback(
    (kind: EntityKind) =>
      kind === 'fruit' || kind === 'ship' ?
        onePiece(`kind.${kind}`)
      : t(`kind.${kind}`),
    [onePiece, t],
  )
}
