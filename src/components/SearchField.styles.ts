import * as stylex from '@stylexjs/stylex'

import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The field both archive listings search with, and the line under it.
 *
 * The status pair lives here rather than beside either page, because both
 * pages write the same `aria-live` line and two copies of nine declarations
 * is how the two pages come to disagree about a half-step of height.
 */
export const searchStyles = stylex.create({
  search: { gap: space.xs, display: 'grid', justifyItems: 'start' },
  label: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
  },
  fieldRow: {
    gap: space.xs,
    alignItems: 'center',
    display: 'flex',
    maxWidth: '100%',
  },
  field: {
    'borderColor': { 'default': color.rule2, ':focus': color.ink },
    'borderRadius': radius.input,
    'borderStyle': 'solid',
    // Constant in every state; the outline carries focus.
    'borderWidth': rule.fine,
    'paddingBlock': space.xs2,
    'paddingInline': space.sm,
    'appearance': 'textfield',
    'backgroundColor': { 'default': color.paper, ':hover': color.paper2 },
    'color': color.ink,
    'fontFamily': font.body,
    'fontSize': text.lg,
    'fontWeight': 600,
    'outlineColor': { 'default': 'transparent', ':focus-visible': color.focus },
    'outlineOffset': space.xs3,
    'outlineStyle': 'solid',
    'outlineWidth': rule.fine,
    'transitionDuration': dur.micro,
    'transitionProperty': 'background-color, border-color',
    'transitionTimingFunction': ease.out,
    // The same 44px as every button on the site.
    'minHeight': '44px',
    'minWidth': 0,
    'width': 'min(100%, 22rem)',
    '::-webkit-search-cancel-button': { appearance: 'none' },
    '::placeholder': { color: color.muted, fontWeight: 400 },
  },
  clearSlot: { display: 'inline-flex', flexShrink: 0, minWidth: '44px' },
  clearHidden: { visibility: 'hidden' },
  status: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    // Reserved whether or not there is anything to say.
    minHeight: '1lh',
  },
  statusEmpty: { color: color.ink2 },
})
