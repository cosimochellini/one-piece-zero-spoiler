import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { FruitFrame } from '~/components/FruitFrame'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useDrawing } from '~/lib/view/drawings'
import type { FruitView, Slot } from '~/lib/view/records'
import { morphPart, useTravels } from '~/styles/morph'

/**
 * A fruit's drawing under its own fog: an empty frame while it is covered,
 * and once open the drawing that travels between the sheet and the fruit's
 * page. The fruit's own page names it always; the sheet only while it is the
 * fruit travelling (`~/styles/morph`). A drawing the sheet left behind is
 * asked for once its frame nears the screen (`useDrawing`).
 */
export function FruitArt({
  always = false,
  density,
  peek,
  slot,
}: {
  always?: boolean
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
          <OpenArt
            always={always}
            record={record}
          />
        )
      }}
    </SpoilerVeil>
  )
}

/**
 * An open fruit's drawing: asked for once it nears the screen, and named for
 * the move to the fruit's page while it is the fruit travelling (or `always`).
 */
export function OpenArt({
  always,
  record,
}: {
  always: boolean
  record: FruitView
}): ReactElement {
  const travels = useTravels('fruit', record.id) || always
  const { ref, strokes } = useDrawing(record.id, record.visual)

  return (
    <div
      ref={ref}
      {...stylex.props(travels && morphPart('fruit', record.id, 'art'))}
    >
      <FruitFrame visual={{ ...record.visual, strokes }} />
    </div>
  )
}
