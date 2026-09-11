import * as stylex from '@stylexjs/stylex'

import { border, colors, space, text } from '~/styles/tokens.stylex'

export type SpoilerBadgeProps = {
  readonly label: string
  readonly revealed?: boolean
  readonly onReveal?: () => void
}

export function SpoilerBadge({
  label,
  revealed = false,
  onReveal,
}: SpoilerBadgeProps) {
  return (
    <span {...stylex.props(styles.panel)}>
      <span
        data-testid="spoiler-label"
        {...stylex.props(
          styles.label,
          revealed ? styles.labelRevealed : styles.labelHidden,
        )}
      >
        {revealed ? label : 'Hidden'}
      </span>
      {!revealed && onReveal ? (
        <button
          type="button"
          onClick={onReveal}
          {...stylex.props(styles.button)}
        >
          Reveal
        </button>
      ) : null}
    </span>
  )
}

const styles = stylex.create({
  // The inked frame. `inline-flex` keeps it tight around its contents, so the
  // badge reads as a stamp dropped onto the page rather than as a row.
  panel: {
    alignItems: 'center',
    backgroundColor: colors.paper,
    borderColor: colors.ink,
    borderRadius: border.radius,
    borderStyle: 'solid',
    borderWidth: border.thin,
    display: 'inline-flex',
    gap: space.sm,
    paddingBlock: space.xs,
    paddingInline: space.xs,
  },

  // Geometry shared by both states. The two state styles below override the
  // same three properties rather than each adding their own, which makes the
  // swap total whatever order StyleX merges them in.
  label: {
    fontFamily: text.mono,
    fontSize: text.sizeSmall,
    fontWeight: 700,
    letterSpacing: '0.08em',
    paddingBlock: space.xs,
    paddingInline: space.sm,
    textTransform: 'uppercase',
  },
  // Hidden is a marker-pen redaction: a solid ink block with the word set in
  // paper white. The blur is sub-pixel on purpose -- enough to read as wet
  // toner, not enough to stop anyone reading "HIDDEN", which is not the secret
  // and has to stay legible.
  labelHidden: {
    backgroundColor: colors.ink,
    color: colors.paper,
    filter: 'blur(0.6px)',
  },
  labelRevealed: {
    backgroundColor: colors.paper,
    color: colors.ink,
    filter: 'none',
  },

  button: {
    backgroundColor: {
      default: colors.ink,
      ':hover': colors.accent,
    },
    borderColor: {
      default: colors.ink,
      ':hover': colors.accent,
    },
    borderRadius: border.radius,
    borderStyle: 'solid',
    borderWidth: border.thin,
    // Paper white reads at 18.9:1 on ink and 4.8:1 on the accent red, so the
    // hover state still clears AA for small bold text.
    color: colors.paper,
    cursor: 'pointer',
    // A button does not inherit the document font, so it is set explicitly.
    fontFamily: text.mono,
    fontSize: text.sizeSmall,
    fontWeight: 700,
    letterSpacing: '0.08em',
    // The focus ring is never removed, only withheld from mouse users: width
    // is 0 by default and `thick` on `:focus-visible`. It is drawn outside the
    // button, on paper, so it stays visible against the ink fill and against
    // the red hover fill alike.
    outlineColor: colors.accent,
    outlineOffset: space.xs,
    outlineStyle: 'solid',
    outlineWidth: {
      default: '0',
      ':focus-visible': border.thick,
    },
    paddingBlock: space.xs,
    paddingInline: space.sm,
    textTransform: 'uppercase',
  },
})
