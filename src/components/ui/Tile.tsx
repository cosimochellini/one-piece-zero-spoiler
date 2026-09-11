import * as stylex from '@stylexjs/stylex'
import type { ReactNode } from 'react'

import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

export type TileProps = {
  readonly title: string
  readonly children: ReactNode
  /** Grid placement, supplied by the page that owns the bento layout. */
  readonly sx?: stylex.StyleXStyles
  /** Optional mark in the tile's top-right corner, such as an episode stamp. */
  readonly mark?: ReactNode
}

/**
 * One cell of the bento grid.
 *
 * A tile is a surface plus a hairline, and nothing inside it may draw its own
 * border: a bordered box inside a bordered box is the card-in-card tell. The
 * padding is deliberately larger than the grid gap so the grid reads as the
 * rhythm rather than the boxes.
 */
export function Tile({ title, children, mark, sx }: TileProps) {
  return (
    <article {...stylex.props(styles.tile, sx)}>
      <header {...stylex.props(styles.head)}>
        <h2 {...stylex.props(styles.title)}>{title}</h2>
        {mark}
      </header>
      {children}
    </article>
  )
}

const styles = stylex.create({
  tile: {
    alignContent: 'start',
    backgroundColor: color.paper2,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    display: 'grid',
    gap: space.sm,
    paddingBlock: space.lg,
    paddingInline: space.lg,
  },
  head: {
    alignItems: 'baseline',
    display: 'flex',
    gap: space.sm,
    justifyContent: 'space-between',
  },
  title: {
    color: color.ink,
    fontFamily: font.body,
    // 300 weight units above the 400 of body copy, which is the floor for a
    // heading to read as a heading without changing size.
    fontWeight: 700,
    fontSize: text.lg,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
  },
})
