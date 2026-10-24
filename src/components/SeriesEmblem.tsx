import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { ART_VIEWBOX } from '~/components/drawing'
import { EMBLEMS } from '~/components/seriesEmblems'
import { color, rule } from '~/styles/tokens.stylex'

/** A series' hub drawing, decorative: the card beside it names the series. */
export function SeriesEmblem({ slug }: { slug: string }): ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox={ART_VIEWBOX}
      {...stylex.props(styles.svg)}
    >
      {(EMBLEMS[slug] ?? []).map((stroke) => (
        <path
          key={stroke.d}
          d={stroke.d}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(
            styles.line,
            stroke.role === 'ambient' && styles.ambient,
            stroke.role === 'accent' && styles.accent,
          )}
        />
      ))}
    </svg>
  )
}

const styles = stylex.create({
  svg: { overflow: 'visible', display: 'block', height: '100%', width: '100%' },
  line: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },
  ambient: { stroke: color.rule2 },
  accent: { stroke: color.accent },
})
