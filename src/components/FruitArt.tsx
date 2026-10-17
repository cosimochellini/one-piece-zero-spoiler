import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { FruitFrame } from '~/components/FruitFrame'
import { useDrawing } from '~/lib/view/drawings'
import type { FruitView } from '~/lib/view/records'
import { morphPart, useTravels } from '~/styles/morph'

/**
 * An open fruit's drawing: asked for once it nears the screen, and named for
 * the move to the fruit's page while it is the fruit travelling (or `always`).
 * A second drawing of the fruit on the page passes `morph={false}`: a name
 * may be on one element of a page only.
 */
export function OpenArt({
  always,
  glow = false,
  morph = true,
  record,
}: {
  always: boolean
  glow?: boolean
  morph?: boolean
  record: FruitView
}): ReactElement {
  const travels = (useTravels('fruit', record.id) && morph) || always
  const { ref, strokes } = useDrawing(record.id, record.visual)

  return (
    <div
      ref={ref}
      {...stylex.props(travels && morphPart('fruit', record.id, 'art'))}
    >
      <FruitFrame
        glow={glow}
        visual={{ ...record.visual, strokes }}
      />
    </div>
  )
}
