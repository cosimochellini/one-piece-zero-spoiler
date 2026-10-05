import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { FruitFrame } from '~/components/FruitFrame'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import type { FruitView, Slot } from '~/lib/view/records'
import { morphPart } from '~/styles/morph'

/**
 * A fruit's drawing under its own fog: an empty frame while it is covered,
 * and once open the drawing that travels between the sheet and the fruit's
 * page.
 */
export function FruitArt({
  density,
  peek,
  slot,
}: {
  density: 'block' | 'compact'
  peek: (handle: string) => Promise<FruitView>
  slot: Slot<FruitView>
}): ReactElement {
  return (
    <SpoilerVeil
      density={density}
      peek={peek}
      placeholder={<FruitFrame />}
      slot={slot}
      strength="media"
    >
      {(record) => {
        return (
          <div {...stylex.props(morphPart('fruit', record.id, 'art'))}>
            <FruitFrame visual={record.visual} />
          </div>
        )
      }}
    </SpoilerVeil>
  )
}
