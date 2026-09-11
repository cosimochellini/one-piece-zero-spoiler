import * as stylex from '@stylexjs/stylex'
import type { ComponentPropsWithoutRef } from 'react'

import {
  color,
  dur,
  ease,
  font,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

type NativeButtonProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'className' | 'style'
>

export type ButtonProps = NativeButtonProps & {
  /**
   * `chip` is the outlined typographic action (Hallmark C1); `quiet` is the
   * square control used by the episode stepper, where the label is an icon
   * glyph and the accessible name comes from `aria-label`.
   */
  readonly variant?: 'chip' | 'quiet'
  readonly sx?: stylex.StyleXStyles
}

/**
 * The only button in the system.
 *
 * Four things are deliberate and easy to break later:
 *
 *  - the border width never changes between states, so nothing shifts by a
 *    pixel on hover or focus;
 *  - the focus outline is declared transparent at rest and coloured on
 *    `:focus-visible`, so it is reserved rather than added;
 *  - the target is at least 44px tall in every variant;
 *  - `disabled` reads on three channels — the attribute, the cursor and the
 *    opacity — because opacity alone is invisible to anyone who cannot see it.
 */
export function Button({ variant = 'chip', sx, type, ...rest }: ButtonProps) {
  return (
    <button
      // A button inside a form defaults to `submit`. Every button here is an
      // in-page control, so the default is flipped rather than repeated at
      // each call site.
      type={type ?? 'button'}
      {...rest}
      {...stylex.props(
        styles.base,
        variant === 'chip' ? styles.chip : styles.quiet,
        sx,
      )}
    />
  )
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: {
      default: 'transparent',
      ':active:not(:disabled)': color.paper3,
    },
    borderColor: {
      default: color.rule2,
      ':hover:not(:disabled)': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    // Constant across every state. The hover and focus styles change colour,
    // never width.
    borderWidth: rule.fine,
    color: {
      default: color.ink,
      ':hover:not(:disabled)': color.accent,
    },
    cursor: { default: 'pointer', ':disabled': 'not-allowed' },
    display: 'inline-flex',
    fontFamily: font.body,
    fontWeight: 600,
    gap: space.xs,
    justifyContent: 'center',
    minHeight: '44px',
    opacity: { default: 1, ':disabled': 0.55 },
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    // Reserved at rest, not added on focus, so the ring costs no layout.
    outlineWidth: rule.fine,
    // A press moves the control, which is a transform, so it composites.
    transform: { default: 'none', ':active:not(:disabled)': 'translateY(1px)' },
    transitionDuration: dur.micro,
    transitionProperty: 'color, border-color, background-color, transform',
    transitionTimingFunction: ease.out,
  },

  chip: {
    fontSize: text.base,
    letterSpacing: '0.02em',
    // A button label that wraps reads as a styling error, never as intent.
    whiteSpace: 'nowrap',
    paddingBlock: space.xs,
    paddingInline: space.md,
  },

  quiet: {
    fontFamily: font.mono,
    fontSize: text.base,
    lineHeight: 1,
    minWidth: '44px',
    paddingBlock: space.xs,
    paddingInline: space.xs,
  },
})
