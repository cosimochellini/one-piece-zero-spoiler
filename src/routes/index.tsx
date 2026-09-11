import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { SpoilerBadge } from '~/components/SpoilerBadge'
import { border, colors, space, text } from '~/styles/tokens.stylex'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [revealed, setRevealed] = useState(false)

  // A block body, not a concise one: `no-confusing-void-expression` is part of
  // typescript-eslint's strictTypeChecked set and rejects an arrow that
  // implicitly returns the void result of a state setter.
  const handleReveal = () => {
    setRevealed(true)
  }

  return (
    <main {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.column)}>
        <p {...stylex.props(styles.kicker)}>Zero spoilers</p>
        <h1 {...stylex.props(styles.title)}>One Piece Zero Spoiler</h1>
        <p {...stylex.props(styles.lede)}>
          Nothing on this page reveals itself until you ask it to.
        </p>
        <SpoilerBadge
          label="Latest chapter"
          revealed={revealed}
          onReveal={handleReveal}
        />
      </div>
    </main>
  )
}

const styles = stylex.create({
  // The page owns the document colours and font. src/styles/global.css is a
  // reset only, so everything inherits from here instead of from plain CSS,
  // which keeps every value in tokens.stylex.ts.
  page: {
    backgroundColor: colors.paper,
    color: colors.ink,
    display: 'flex',
    fontFamily: text.sans,
    fontSize: text.sizeBody,
    justifyContent: 'center',
    minHeight: '100dvh',
    paddingBlock: space.xl,
    paddingInline: space.lg,
  },
  // 34rem is roughly a 70-character measure at the body size. Spacing is per
  // element rather than a flex `gap` because the rhythm is uneven on purpose;
  // the reset already zeroed every margin, so these are the only margins on
  // the page.
  column: {
    maxWidth: '34rem',
    width: '100%',
  },
  kicker: {
    color: colors.accent,
    fontFamily: text.mono,
    fontSize: text.sizeSmall,
    fontWeight: 700,
    letterSpacing: '0.18em',
    marginBlockEnd: space.sm,
    textTransform: 'uppercase',
  },
  // Heavy, tight, uppercase, closed by a thick rule. That is as close as a
  // system font stack gets to a manga chapter title without loading a
  // typeface, which the CSP would block anyway.
  title: {
    borderBottomColor: colors.ink,
    borderBottomStyle: 'solid',
    borderBottomWidth: border.thick,
    fontSize: text.sizeTitle,
    fontWeight: 900,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    marginBlockEnd: space.md,
    paddingBlockEnd: space.md,
    textTransform: 'uppercase',
  },
  lede: {
    color: colors.muted,
    lineHeight: 1.5,
    marginBlockEnd: space.lg,
    maxWidth: '28rem',
  },
})
