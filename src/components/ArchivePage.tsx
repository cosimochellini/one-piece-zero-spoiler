import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import {
  color,
  dur,
  ease,
  font,
  leading,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The heading and the count are already translated strings rather than
 * dictionary keys, because each archive page names itself: the signal book
 * counts characters and the log counts ports, and the shell has no business
 * knowing which.
 */
export type ArchivePageProps = {
  readonly children: ReactNode
  readonly count: string
  readonly title: string
}

/**
 * The shell both archive listings sit in: the brand line, the count under it,
 * and the listing itself, settling in DOM order.
 *
 * The signal book and the ship's log are different macrostructures – a
 * catalogue and a narrative workflow – but they open the same way, and when
 * the two shells were written out separately they drifted apart by a
 * half-step of padding. One component is what keeps the two pages siblings.
 */
export function ArchivePage({
  title,
  count,
  children,
}: ArchivePageProps): ReactElement {
  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <header {...stylex.props(styles.head, styles.enter, styles.at(0))}>
        <h1 {...stylex.props(styles.title)}>{title}</h1>
        <p {...stylex.props(styles.count)}>{count}</p>
      </header>

      <div {...stylex.props(styles.enter, styles.at(1))}>{children}</div>
    </main>
  )
}

const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

// One band after another, far enough apart to read as an order and close
// enough that the whole page has settled well inside the half-second cap.
const SETTLE_STEP_MS = 70

/** How long the nth band waits before it settles. */
function settleDelay(index: number): string {
  return `${String(index * SETTLE_STEP_MS)}ms`
}

const styles = stylex.create({
  page: {
    gap: space.xl,
    paddingInline: space.md,
    display: 'grid',
    paddingBlockEnd: space.xl3,
    paddingBlockStart: space.lg,
  },
  // Wordmark-sized, not display-sized: a catalogue's heading is an inventory
  // header and a log's is the name of the book, and the count under either is
  // a fact about the page.
  head: { gap: space.xs, display: 'grid' },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  count: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
  enter: {
    animationDuration: dur.long,
    animationFillMode: 'forwards',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': settle,
    },
    animationTimingFunction: ease.out,
    opacity: {
      'default': 1,
      '@media (prefers-reduced-motion: no-preference)': 0,
    },
  },
  at: (index: number) => ({ animationDelay: settleDelay(index) }),
})
