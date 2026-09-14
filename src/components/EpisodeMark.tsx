import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useState } from 'react'

import { BookmarkDialog } from '~/components/BookmarkDialog'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import type { Bookmark } from '~/lib/progress/episode'
import { describeBookmark } from '~/lib/progress/threshold'
import { color, font, space, text } from '~/styles/tokens.stylex'

/**
 * Which of the mark's two homes it is standing in. In the bar it is the
 * reader's place, written as a numeral; in the fold it is the invitation to
 * name one, written as a verb — the same control, asked for twice.
 */
export type EpisodeMarkProps = { readonly placement?: 'bar' | 'fold' }

/** What the mark shows, and what a screen reader is told beyond that. */
type MarkFace = { readonly hint: string | undefined; readonly label: string }

/**
 * Turns the bookmark into the two strings the control needs.
 *
 * In the bar the label is the numeral alone, so the sentence that explains
 * what pressing it does has to be the accessible name. In the fold the label
 * is already that sentence, and repeating it in an `aria-label` would only
 * make the button announce itself twice.
 */
function faceOf(t: Translate, bookmark: Bookmark, inFold: boolean): MarkFace {
  const mark =
    bookmark === null ? t('mark.unset') : describeBookmark(t, 'mark', bookmark)

  if (!inFold) {
    return {
      hint:
        bookmark === null ? undefined : t('mark.change', { threshold: mark }),
      label: mark,
    }
  }

  return {
    hint: undefined,
    label:
      bookmark === null ?
        t('hero.setBookmark')
      : t('hero.changeBookmark', { threshold: mark }),
  }
}

/**
 * The reader's bookmark, as one mark in the bar: `EP 650`, `S02E03` or
 * `CH 1044`, or the invitation to set one. It is the one control the whole
 * site turns on, so it is the one gold thing in the bar. Pressing it opens
 * the dialog where the bookmark is chosen; nothing is edited in place.
 *
 * The fold asks for the same thing in words, and gets the same control rather
 * than a copy of it: each instance owns its own short-lived open state, and
 * the dialog is mounted only while it is open, so two invitations never mean
 * two dialogs. The native `<dialog>` returns focus to whichever of them was
 * pressed.
 *
 * The dialog is mounted only while it is open, so every opening starts from
 * the bookmark as it stands, and nothing about it is in the served HTML.
 */
export function EpisodeMark({
  placement = 'bar',
}: EpisodeMarkProps): ReactElement {
  const t = useT()
  const { bookmark, pending } = useBookmark()
  const [open, setOpen] = useState(false)

  const inFold = placement === 'fold'
  const face = faceOf(t, bookmark, inFold)

  return (
    <>
      <Button
        // The records come from the server now, so a new bookmark takes a
        // round trip. The mark says so rather than looking inert; it is not
        // `disabled`, which would drop focus and the announcement with it.
        aria-busy={pending}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={face.hint}
        onClick={() => {
          setOpen(true)
        }}
        sx={[
          inFold ? styles.invite : styles.mark,
          !inFold && bookmark === null && styles.markUnset,
        ]}
      >
        {face.label}
      </Button>

      {open && (
        <BookmarkDialog
          onClose={() => {
            setOpen(false)
          }}
        />
      )}
    </>
  )
}

const styles = stylex.create({
  // The episode numeral's voice, the mono outlier, set in the accent: the
  // same ink as the horizon line it moves. The accent is the text and the
  // border on hover, never a fill.
  mark: {
    borderColor: {
      'default': color.rule2,
      ':hover:not(:disabled)': color.accent,
    },
    paddingInline: space.sm,
    color: { 'default': color.accent, ':hover:not(:disabled)': color.ink },
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  // No bookmark yet: the dashed rule of the fogged stretch of route, in the
  // ambient ink, so the unset state reads as "still under fog".
  markUnset: {
    borderStyle: 'dashed',
    color: { 'default': color.ink2, ':hover:not(:disabled)': color.accent },
  },
  // In the fold it is the page's one first action, so it is given the accent
  // outright — as the border and as the word, and still never as a fill: a
  // gold surface that size would stop being a signal.
  invite: {
    borderColor: {
      'default': color.accent,
      ':hover:not(:disabled)': color.ink,
    },
    paddingBlock: space.sm,
    // The label carries the threshold, so the longest of them — `Change your
    // bookmark · CH 1044` — is what has to fit. At 320px it only does with the
    // narrower padding: a chip label that wraps reads as a styling error, and
    // `overflow-x: clip` on the document hides an overflow rather than letting
    // the reader scroll to it.
    paddingInline: {
      'default': space.md,
      '@media (min-width: 40rem)': space.lg,
    },
    color: { 'default': color.accent, ':hover:not(:disabled)': color.ink },
    fontWeight: 700,
    letterSpacing: '0.01em',
  },
})
