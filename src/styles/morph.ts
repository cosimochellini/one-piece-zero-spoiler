import * as stylex from '@stylexjs/stylex'
import { useSyncExternalStore } from 'react'

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
    // The compiler reads a dynamic style only from an arrow that returns its
    // object directly, so this one keeps the implicit return.
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

// The one record travelling right now: the one the reader clicked, and so
// also the one Back returns to. A list names only that record. A view
// transition captures every named element on both pages, and two names on
// each of the signal book's few hundred tiles cost a phone seconds of style
// work on every navigation in or out of it.
const travel: { name: null | string } = { name: null }
const listeners = new Set<() => void>()

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/**
 * Marks a record as the one travelling. Called in the link's click, which
 * renders before the router starts the transition, so the page left behind
 * is captured with the names on.
 */
export function travelWith(kind: 'character' | 'fruit', id: string): void {
  travel.name = `${kind}-${id}`
  for (const listener of listeners) {
    listener()
  }
}

/** Whether this record is the travelling one, so a list may name it. */
export function useTravels(kind: 'character' | 'fruit', id: string): boolean {
  return useSyncExternalStore(
    subscribe,
    () => travel.name === `${kind}-${id}`,
    () => false,
  )
}
