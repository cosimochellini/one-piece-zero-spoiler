import * as stylex from '@stylexjs/stylex'

import { color, font, radius, rule, space, text } from '~/styles/tokens.stylex'

export type EpisodeStampProps = {
  /** Rendered before the number, e.g. `EP`. */
  readonly prefix: string
  readonly episode: number
  /** Draws the stamp in the accent, for the one record a section is about. */
  readonly emphasis?: boolean
  readonly sx?: stylex.StyleXStyles
}

/**
 * The episode threshold, set as a stamped mark.
 *
 * The number is the one piece of data on the page that readers compare against
 * each other, so it is set in the mono outlier with `tabular-nums`: without it
 * a 1 is narrower than a 9 and a column of thresholds wobbles.
 */
export function EpisodeStamp({
  prefix,
  episode,
  emphasis = false,
  sx,
}: EpisodeStampProps) {
  return (
    <span {...stylex.props(styles.stamp, emphasis && styles.emphasis, sx)}>
      <span {...stylex.props(styles.prefix)}>{prefix}</span>
      <span {...stylex.props(styles.number)}>{episode}</span>
    </span>
  )
}

const styles = stylex.create({
  stamp: {
    alignItems: 'baseline',
    borderColor: color.rule2,
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    color: color.ink2,
    display: 'inline-flex',
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 500,
    gap: space.xs2,
    letterSpacing: '0.1em',
    paddingBlock: space.xs3,
    paddingInline: space.xs,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  emphasis: {
    borderColor: color.accent,
    color: color.accent,
  },
  prefix: {
    opacity: 0.75,
  },
  number: {
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
  },
})
