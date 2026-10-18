import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/PortEntry.styles'
import { RecordTile } from '~/components/RecordTile'
import type { RecordView, Slot } from '~/lib/view/records'

/**
 * The records the archive files at a place, or the places a ship reaches.
 * Each tile keeps its own fog: a swordsman who reaches the restaurant four
 * episodes after the crew does is a covered tile beside an open one. An empty
 * list draws nothing, heading included: a heading over nothing reads as
 * missing data.
 */
export function FiledHere({
  filed,
  peekRecord,
  title,
}: {
  filed: Slot<RecordView>[]
  peekRecord: (handle: string) => Promise<RecordView>
  title: string
}): null | ReactElement {
  if (filed.length === 0) {
    return null
  }

  return (
    <div {...stylex.props(styles.filed)}>
      <h3 {...stylex.props(styles.filedTitle)}>{title}</h3>
      <ul {...stylex.props(styles.crew)}>
        {filed.map((slot) => {
          return (
            <li
              key={
                slot.open ?
                  `open-${slot.record.id}`
                : `fog-${slot.covered.handle}`
              }
              {...stylex.props(styles.crewItem)}
            >
              <RecordTile
                peek={peekRecord}
                slot={slot}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
