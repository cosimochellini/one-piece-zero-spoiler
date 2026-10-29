import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { RecordTile } from '~/components/RecordTile'
import type { RecordView, Slot } from '~/lib/view/records'
import { color, leading, space, text } from '~/styles/tokens.stylex'

/** What one neighbour tile is given: the slot's name, and what fills it. */
export interface NeighbourProps {
  empty: string
  label: string
  peek: (handle: string) => Promise<RecordView>
  /** `null` at either end of the route, where there is nothing filed. */
  slot: null | Slot<RecordView>
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

const styles = stylex.create({
  neighbour: { gap: space.xs, display: 'grid', minWidth: 0 },
  neighbourLabel: {
    color: color.ink2,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
  },
  neighbourBody: {
    gap: space.xs,
    display: 'grid',
    marginInlineStart: 0,
    minWidth: 0,
  },
  lede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
})
