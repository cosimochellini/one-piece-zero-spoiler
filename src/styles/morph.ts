import * as stylex from '@stylexjs/stylex'

import { dur, ease } from '~/styles/tokens.stylex'

/**
 * The drawing and the name that travel between a list and a record's page.
 *
 * The router crossfades every new page (src/router.tsx); an element that
 * carries the same `view-transition-name` on both pages is lifted out of that
 * fade and moved from where it was to where it lands instead. The names are
 * built from the record's id, so they only ever go on an open record: on a
 * covered one the id is the answer the fog is hiding.
 *
 * The move is spatial, so under reduced motion the name is dropped and the
 * element falls back into the page's crossfade, which is the form every
 * spatial motion here collapses to.
 */
const morph = stylex.viewTransitionClass({
  group: { animationDuration: dur.long, animationTimingFunction: ease.out },
  // Scaled by height and anchored at the start edge rather than stretched to
  // the group's box, so a name going from a tile line to a page heading grows
  // instead of widening, and a drawing keeps its proportions.
  old: { height: '100%', width: 'auto' },
  new: { height: '100%', width: 'auto' },
})

const styles = stylex.create({
  part: (name: string) => ({
    // eslint-disable-next-line @stylexjs/valid-styles -- the compiler emits `view-transition-class` from this, but the rule's property table predates it, and its `propLimits` escape admits only string literals, never the class name `stylex.viewTransitionClass` returns.
    viewTransitionClass: morph,
    viewTransitionName: {
      'default': name,
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
  }),
})

/**
 * The style that makes one part of one record travel. The name is the same
 * on every page the record is drawn on, which is what pairs the two up; ids
 * are slugs, so it is always a valid identifier.
 */
export function morphPart(
  kind: 'character' | 'fruit',
  id: string,
  part: 'art' | 'name',
): ReturnType<typeof styles.part> {
  return styles.part(`${kind}-${id}-${part}`)
}
