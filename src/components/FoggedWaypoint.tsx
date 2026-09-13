import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CharacterCrest } from '~/components/CharacterCrest'
import { PortPlate } from '~/components/PortPlate'
import { styles } from '~/components/RouteChart.styles'
import { useT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { CoveredRecord, WaypointView } from '~/lib/view/records'

/**
 * What stands in for a waypoint the reader has not reached.
 *
 * A covered waypoint used to be the real card under a blur, which find-in-page
 * and a devtools panel walked straight through. It is the same stand-in a
 * fogged card and a fogged tile use now: the bare seal or the bare plate, the
 * word "Spoiler", and the threshold — which is the promise, not the spoiler.
 */
export function FoggedWaypoint({
  entry,
}: {
  readonly entry: CoveredRecord | WaypointView
}): ReactElement {
  const t = useT()
  const threshold = useThreshold()

  return (
    <div {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.frame)}>
        {entry.kind === 'character' ?
          <CharacterCrest />
        : <PortPlate />}
      </div>
      <div {...stylex.props(styles.words)}>
        <h3 {...stylex.props(styles.name)}>{t('veil.placeholder')}</h3>
        <p {...stylex.props(styles.summary)}>
          {threshold('chart.foggedDescription', entry)}
        </p>
      </div>
    </div>
  )
}
