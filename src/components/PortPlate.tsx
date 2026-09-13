import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { ArtStrokes } from '~/components/ChartArt'
import {
  PLATE_ART_BOX,
  PLATE_CORNERS,
  PLATE_FRAME,
  PLATE_GRATICULE,
  PLATE_INNER,
  PLATE_NORTH,
  PLATE_VIEWBOX,
} from '~/components/chrome/plate'
import { ART_VIEWBOX, tintOf } from '~/components/drawing'
import { emblemStyles } from '~/components/emblem.styles'
import type { Drawing } from '~/lib/view/records'

/**
 * The plate itself: the border, the dashed inner rule, the graticule, the
 * corner ticks and the north mark. The port's own hue tints the border, the
 * corners and the mark; everything else is the second ink.
 */
function Frame({ hue }: { readonly hue: null | string }): ReactElement {
  return (
    <>
      <path
        d={PLATE_FRAME}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(
          emblemStyles.line,
          hue !== null && emblemStyles.tinted(hue),
        )}
      />
      <path
        d={PLATE_INNER}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(
          emblemStyles.line,
          emblemStyles.ambient,
          emblemStyles.dashed,
        )}
      />
      <path
        d={PLATE_GRATICULE}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(emblemStyles.line)}
      />
      <path
        d={PLATE_CORNERS}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(
          emblemStyles.line,
          hue !== null && emblemStyles.tinted(hue),
        )}
      />
      {hue === null ? null : (
        <path
          d={PLATE_NORTH}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(emblemStyles.line, emblemStyles.tinted(hue))}
        />
      )}
    </>
  )
}

/**
 * A place's plate: the drawing that stands for it, set inside a chart frame.
 *
 * Characters get a round seal (`CharacterCrest`); places get a rectangle,
 * because a place on a chart is a plate and not a badge. The frame is the
 * same for every place — a rule in the place's colour, a dashed inner rule,
 * graticule ticks along all four edges like the margin of a sea chart, four
 * corner brackets and a north mark in the colour — and only the drawing in
 * the middle and the one colour change. Nothing here is a flag or an
 * official mark: the plate is the site's own, built from the drawing the
 * route already shows. The frame's own geometry is data in
 * `~/components/chrome/plate`, as every drawing on the site is.
 *
 * The same 2px non-scaling stroke as every other drawing, so a plate on a
 * card and a plate filling a column are drawn with the same pen.
 *
 * With no `visual` the plate is bare: frame and ticks in the ambient ink,
 * nothing in the middle. That is what stands in for a fogged place, so the
 * served HTML carries neither its drawing nor its colour.
 */
export function PortPlate({
  visual,
}: {
  readonly visual?: Drawing
}): ReactElement {
  const hue = visual === undefined ? null : tintOf(visual.tint)

  return (
    <svg
      aria-hidden="true"
      viewBox={PLATE_VIEWBOX}
      {...stylex.props(emblemStyles.svg)}
    >
      <Frame hue={hue} />
      {visual === undefined ? null : (
        <svg
          height={PLATE_ART_BOX.height}
          viewBox={ART_VIEWBOX}
          width={PLATE_ART_BOX.width}
          x={PLATE_ART_BOX.x}
          y={PLATE_ART_BOX.y}
        >
          <ArtStrokes
            strokes={visual.strokes}
            tint={visual.tint}
          />
        </svg>
      )}
    </svg>
  )
}
