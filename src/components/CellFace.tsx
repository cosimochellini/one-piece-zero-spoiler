import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/FillerCountdown.styles'
import { episodesLabel } from '~/components/fillerLabels'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import type { BookmarkMode } from '~/lib/progress/episode'
import type { FillerKind } from '~/lib/view/filler'

/** The word under a cell's number: its kind, or "now" for the reader's. */
function kindLabel(
  t: Translate,
  kind: FillerKind | null,
  here: boolean,
): string {
  if (kind !== null) {
    return t(`filler.cell.${kind}`)
  }

  return here ? t('filler.cell.here') : ''
}

/** What a cell reads: its number, and the word under it. */
export function CellFace({
  episode,
  here,
  kind,
  mode,
}: {
  episode: number
  here: boolean
  kind: FillerKind | null
  mode: BookmarkMode
}): ReactElement {
  const t = useT()

  return (
    <>
      <span {...stylex.props(styles.number, mode === 'season' && styles.code)}>
        {mode === 'season' ?
          episodesLabel(t, mode, { first: episode, last: episode })
        : String(episode)}
      </span>
      <span {...stylex.props(styles.kind)}>{kindLabel(t, kind, here)}</span>
    </>
  )
}
