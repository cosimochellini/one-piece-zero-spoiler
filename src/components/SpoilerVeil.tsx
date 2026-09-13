import * as stylex from '@stylexjs/stylex'
import { useState } from 'react'
import type { ReactNode } from 'react'

import { useT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { Gated } from '~/lib/progress/spoiler'
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
  /** The record's thresholds, for the notice that names the one in force. */
  readonly gated: Gated
  /**
   * Whether the reader's bookmark already clears the threshold. Computed by
   * the caller with `isRevealed` so the same decision is made once, on the
   * server, for every record on the page.
   */
  readonly revealed: boolean
  /**
   * `block` is the default: the curtain stacks its notice above its action and
   * covers a paragraph or more. `inline` puts both on one line for a table
   * cell, where a two-line curtain would set the row height. `compact` is for
   * a small card: the verb alone, centred, with the threshold left to the
   * card's own meta line and to the control's accessible name.
   */
  readonly density?: 'block' | 'inline' | 'compact'
  /**
   * How hard to blur. `text` is enough for a line of words; a photograph
   * needs `media`, because a face survives a half-rem blur and a fogged
   * waypoint must not give its subject away.
   */
  readonly strength?: 'text' | 'media'
  /**
   * What to render under the fog instead of `children`. With a placeholder
   * the covered words are not in the served HTML or the DOM at all; the real
   * children mount only once the fog is lifted. Entity pages use this, since
   * a page about one record must not carry that record's name in its source.
   */
  readonly placeholder?: ReactNode
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
 * Known limit: without a `placeholder` the real text is present in the DOM,
 * so browser find-in-page and devtools can still surface it. That is the
 * cost of a blur, and it is acceptable for the landing chart. Entity pages
 * pass a `placeholder`, so the covered words are absent from the served HTML
 * and only mount on the client once the fog is lifted.
 */
export function SpoilerVeil({
  gated,
  revealed,
  density = 'block',
  strength = 'text',
  placeholder,
  children,
}: SpoilerVeilProps) {
  const t = useT()
  const threshold = useThreshold()
  const [uncovered, setUncovered] = useState(false)
  const visible = revealed || uncovered
  const notice = threshold('veil.locked', gated)
  const verbOnly = density !== 'block'

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
        {...stylex.props(styles.content, !visible && fogFor(density, strength))}
      >
        {!visible && placeholder !== undefined ? placeholder : children}
      </div>

      <button
        type="button"
        onClick={handleUncover}
        // Block density reads its name off the visible notice. The verb-only
        // densities show the verb alone — the threshold already sits in its
        // own line beside them — so the sentence has to be supplied here.
        aria-label={verbOnly ? `${notice} — ${t('veil.reveal')}` : undefined}
        {...stylex.props(
          styles.curtain,
          curtainFor(density),
          visible && styles.curtainLifted,
        )}
      >
        {verbOnly ? null : (
          <span {...stylex.props(styles.notice)}>{notice}</span>
        )}
        <span {...stylex.props(styles.action)}>
          {verbOnly ? t('veil.revealShort') : t('veil.reveal')}
        </span>
      </button>
    </div>
  )
}

type Density = NonNullable<SpoilerVeilProps['density']>
type Strength = NonNullable<SpoilerVeilProps['strength']>

/**
 * How thick the fog is. A table cell is one line tall, so its blur is the
 * smallest; a card is a drawing and a name at once, so its blur is a
 * drawing's; a block follows the strength its caller asked for.
 */
function fogFor(density: Density, strength: Strength) {
  if (density === 'inline') return styles.coveredTight
  if (density === 'compact') return styles.coveredCompact
  return strength === 'media' ? styles.coveredMedia : styles.covered
}

/** The curtain's layout per density; `block` adds nothing to the base. */
function curtainFor(density: Density) {
  if (density === 'inline') return styles.curtainInline
  if (density === 'compact') return styles.curtainCompact
  return null
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
  // A block with a photograph in it. The radius is set by what it takes to
  // make a face unreadable at card size, and the content is clipped by the
  // frame so the blur cannot bleed a halo past the card edge.
  coveredMedia: {
    filter: 'blur(1.4rem)',
    userSelect: 'none',
  },
  // A table cell is one line tall, so the blur radius drops with it: 0.55rem
  // on a single line smears into the rows above and below.
  coveredTight: {
    filter: 'blur(0.3rem)',
    userSelect: 'none',
  },
  // A crest on a card is a drawing and a name at once, so the fog is thick
  // enough for a drawing, and the card is clipped by its own frame.
  coveredCompact: {
    filter: 'blur(1rem)',
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
    // Explicit rather than the implicit `minmax(auto, 1fr)`, whose floor is
    // the notice's min-content and can push the curtain past its frame.
    gridTemplateColumns: 'minmax(0, 1fr)',
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
  curtainCompact: {
    alignContent: 'center',
    justifyItems: 'center',
    padding: space.xs,
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
    minWidth: 0,
    overflowWrap: 'anywhere',
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
