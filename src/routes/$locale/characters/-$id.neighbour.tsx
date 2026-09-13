/**
 * The tile for a record filed beside another on the route.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever the two slots in the character page's route diptych; the leading
 * `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { RecordTile } from '~/components/RecordTile'
import type { RecordView, Slot } from '~/lib/view/records'

import { styles } from './-$id.styles'

/** What one neighbour tile is given: the slot's name, and what fills it. */
export type NeighbourProps = {
  readonly empty: string
  readonly label: string
  readonly peek: (handle: string) => Promise<RecordView>
  /** `null` at either end of the route, where there is nothing filed. */
  readonly slot: null | Slot<RecordView>
}

/**
 * One of the two records filed beside this one, as a tile: whatever its
 * kind, a small plate and a name, with a character's or a place's name a
 * link. Under fog the plate and the name go together and the episode stays.
 */
export function Neighbour({
  label,
  slot,
  empty,
  peek,
}: NeighbourProps): ReactElement {
  return (
    <div {...stylex.props(styles.neighbour)}>
      <dt {...stylex.props(styles.neighbourLabel)}>{label}</dt>
      <dd {...stylex.props(styles.neighbourBody)}>
        {slot === null ?
          <span {...stylex.props(styles.lede)}>{empty}</span>
        : <RecordTile
            peek={peek}
            slot={slot}
          />
        }
      </dd>
    </div>
  )
}
