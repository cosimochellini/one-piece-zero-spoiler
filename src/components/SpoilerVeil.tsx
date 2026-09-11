import * as stylex from '@stylexjs/stylex'
import { useState } from 'react'
import type { ReactNode } from 'react'

import { useT } from '~/i18n/LocaleContext'
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

export type SpoilerVeilProps = {
  /** The episode from which the wrapped content is safe to read. */
  readonly revealedAtEpisode: number
  /**
   * Whether the reader's bookmark already clears the threshold. Computed by
   * the caller with `isRevealed` so the same decision is made once, on the
   * server, for every record on the page.
   */
  readonly revealed: boolean
  /**
   * `block` is the default: the curtain stacks its notice above its action and
   * covers a paragraph or more. `inline` puts both on one line for a table
   * cell, where a two-line curtain would set the row height.
   */
  readonly density?: 'block' | 'inline'
  readonly children: ReactNode
}

/**
 * Covers content the reader has not reached yet.
 *
 * The curtain stays mounted after a reveal instead of unmounting, because a
 * node that disappears cannot fade. It transitions `opacity` and `visibility`
 * only: blurring is a `filter`, animating a filter is banned, so the blur is
 * dropped instantly underneath a curtain that fades out over it. The eye reads
 * a curtain lifting, and the compositor never touches layout.
 *
 * `visibility: hidden` is what takes the revealed curtain out of the tab order
 * and the accessibility tree; `inert` plus `aria-hidden` does the same for the
 * covered content, so a screen reader or a Tab press can never walk into a
 * spoiler that the eye cannot see.
 *
 * Known limit, and the reason `mode` will exist here later: in this form the
 * real text is present in the DOM, so browser find-in-page and devtools can
 * still surface it. That is the cost of a blur, and it is acceptable for a
 * landing page. Entity pages will need a deferred mode that renders a
 * placeholder and fetches the real text through a server function on reveal,
 * so the covered words never leave the server.
 */
export function SpoilerVeil({
  revealedAtEpisode,
  revealed,
  density = 'block',
  children,
}: SpoilerVeilProps) {
  const t = useT()
  const [uncovered, setUncovered] = useState(false)
  const visible = revealed || uncovered
  const notice = t('veil.locked', { episode: revealedAtEpisode })
  const inline = density === 'inline'

  // A block body: `no-confusing-void-expression` rejects an arrow that
  // implicitly returns the void result of a state setter.
  const handleUncover = () => {
    setUncovered(true)
  }

  return (
    <div {...stylex.props(styles.frame)}>
      <div
        // `undefined` rather than `false`: an explicit `aria-hidden="false"`
        // is legal but it is noise in the accessibility tree, and it reads as
        // if the covered state were still being managed once it is not.
        aria-hidden={visible ? undefined : true}
        inert={!visible}
        {...stylex.props(
          styles.content,
          !visible && (inline ? styles.coveredTight : styles.covered),
        )}
      >
        {children}
      </div>

      <button
        type="button"
        onClick={handleUncover}
        // Block density reads its name off the visible notice. Inline density
        // shows the verb alone — the threshold already sits in its own column
        // beside it — so the sentence has to be supplied here instead.
        aria-label={inline ? `${notice} — ${t('veil.reveal')}` : undefined}
        {...stylex.props(
          styles.curtain,
          inline && styles.curtainInline,
          visible && styles.curtainLifted,
        )}
      >
        {inline ? null : <span {...stylex.props(styles.notice)}>{notice}</span>}
        <span {...stylex.props(styles.action)}>
          {inline ? t('veil.revealShort') : t('veil.reveal')}
        </span>
      </button>
    </div>
  )
}

const styles = stylex.create({
  frame: {
    display: 'grid',
    position: 'relative',
  },

  content: {
    // The blur is dropped in one frame. It is never transitioned: `filter` is
    // not a compositor-only property and animating it drops frames on a large
    // block of text.
    filter: 'none',
    userSelect: 'auto',
  },
  covered: {
    filter: 'blur(0.55rem)',
    // Without this the covered words can still be swept up by a drag-select
    // and pasted somewhere legible.
    userSelect: 'none',
  },
  // A table cell is one line tall, so the blur radius drops with it: 0.55rem
  // on a single line smears into the rows above and below.
  coveredTight: {
    filter: 'blur(0.3rem)',
    userSelect: 'none',
  },

  curtain: {
    alignContent: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'none',
    borderRadius: radius.card,
    color: color.ink2,
    cursor: 'pointer',
    display: 'grid',
    gap: space.xs,
    inset: 0,
    justifyItems: 'start',
    opacity: 1,
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    padding: space.md,
    pointerEvents: 'auto',
    position: 'absolute',
    textAlign: 'start',
    transitionDuration: dur.short,
    transitionProperty: 'opacity, visibility',
    transitionTimingFunction: ease.out,
    visibility: 'visible',
    width: '100%',
  },
  curtainInline: {
    alignItems: 'center',
    display: 'flex',
    gap: space.xs,
    justifyContent: 'start',
    paddingBlock: 0,
    paddingInline: 0,
  },
  curtainLifted: {
    opacity: 0,
    pointerEvents: 'none',
    // Hidden rather than `display: none` so the fade can run, and unlike
    // opacity alone it removes the button from the tab order and from the
    // accessibility tree once the fade is over.
    visibility: 'hidden',
  },

  notice: {
    backgroundColor: color.paper,
    borderColor: color.rule2,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 500,
    letterSpacing: '0.08em',
    paddingBlock: space.xs3,
    paddingInline: space.xs,
    textTransform: 'uppercase',
  },
  action: {
    backgroundColor: color.paper,
    color: {
      default: color.accent,
      ':is(button:hover) > &': color.ink,
      ':is(button:active) > &': color.ink,
    },
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 700,
    paddingInline: space.xs2,
    textDecorationLine: 'underline',
    textUnderlineOffset: '2px',
    // A verb in a table cell is one line or it is broken.
    whiteSpace: 'nowrap',
  },
})
