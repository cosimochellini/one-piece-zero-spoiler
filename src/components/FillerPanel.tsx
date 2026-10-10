import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/FillerCountdown.styles'
import { entryOf, placeLabel } from '~/components/fillerLabels'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useT } from '~/i18n/LocaleContext'
import type { BookmarkMode } from '~/lib/progress/episode'
import type { FillerRowView, FillerSlot } from '~/lib/view/filler'

/** The id the countdown's cells point their `aria-controls` at. */
export const FILLER_PANEL_ID = 'filler-countdown-panel'

/** The entry a cell or mark opened, under the veil past the bookmark. */
export function FillerPanel({
  mode,
  peek,
  slot,
}: {
  mode: BookmarkMode
  peek: (handle: string) => Promise<FillerRowView>
  slot: FillerSlot
}): ReactElement {
  const t = useT()
  const entry = entryOf(slot)
  const at = placeLabel(t, mode, entry)

  return (
    <div
      aria-label={at}
      id={FILLER_PANEL_ID}
      role="region"
      {...stylex.props(styles.panel)}
    >
      <p {...stylex.props(styles.panelMeta)}>
        {[at, t(`filler.kind.${entry.kind}`)].join(' · ')}
      </p>
      <SpoilerVeil
        peek={peek}
        placeholder={
          <p {...stylex.props(styles.panelTitle)}>{t('veil.placeholder')}</p>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <div {...stylex.props(styles.panelWords)}>
              <p {...stylex.props(styles.panelTitle)}>{record.title}</p>
              <p {...stylex.props(styles.panelSummary)}>{record.summary}</p>
            </div>
          )
        }}
      </SpoilerVeil>
    </div>
  )
}
