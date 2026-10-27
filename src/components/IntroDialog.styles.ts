/* Hallmark · component: modal (intro for a reader with no bookmark, #864)
 * genre: atmospheric · theme: Sea Chart (locked)
 * states: default · hover · focus · active · disabled · loading · error · success
 * (the controls are the bookmark dialog's: the shared Button, the form and
 * its skeleton, so every state is theirs)
 */
import * as stylex from '@stylexjs/stylex'

import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

const SHEET = '@media (max-width: 39.99rem)'
const WIDE = '@media (min-width: 48rem)'

/**
 * What the intro adds to the bookmark dialog it is built on: twice the width,
 * the explanation beside the form rather than above it, the headline at
 * display size and the step numbers in gold.
 */
export const introStyles = stylex.create({
  // Focused by hand on opening, as a container: it has no ring of its own,
  // and the first Tab lands on a control that does.
  dialog: {
    outlineStyle: 'none',
    width: { [SHEET]: '100%', default: 'min(calc(100% - 2rem), 56rem)' },
  },

  panel: {
    gap: { [WIDE]: space.xl, default: space.lg },
    alignItems: 'start',
    gridTemplateColumns: {
      [WIDE]: 'minmax(0, 1.1fr) minmax(0, 1fr)',
      default: 'minmax(0, 1fr)',
    },
  },

  // Clears the close button in the corner.
  explainer: {
    gap: space.md,
    display: 'grid',
    paddingInlineEnd: { [WIDE]: 0, default: space.xl },
    minWidth: 0,
  },
  title: {
    fontSize: { [SHEET]: text.xl, default: text.display },
    lineHeight: { [SHEET]: leading.heading, default: leading.display },
    overflowWrap: 'anywhere',
    minWidth: 0,
  },

  steps: {
    margin: 0,
    padding: 0,
    gap: space.sm,
    display: 'grid',
    listStyleType: 'none',
  },
  step: {
    gap: space.sm,
    alignItems: 'baseline',
    color: color.ink2,
    display: 'grid',
    fontSize: text.base,
    gridTemplateColumns: 'auto minmax(0, 1fr)',
    lineHeight: leading.body,
  },
  number: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.lg,
    fontWeight: 700,
    minWidth: '1.25ch',
  },

  // The form on its own plate, ruled in gold along the top, so the one thing
  // to do here reads apart from the text that explains it.
  form: {
    padding: { [SHEET]: space.md, default: space.lg },
    borderColor: color.rule2,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.md,
    backgroundColor: color.paper,
    display: 'grid',
    // Clears the close button in the corner, which sits over this column.
    marginBlockStart: { [WIDE]: space.lg, default: 0 },
    borderTopColor: color.accent,
    borderTopWidth: rule.fine,
    minWidth: 0,
  },
  reveal: { justifySelf: 'center' },
})
