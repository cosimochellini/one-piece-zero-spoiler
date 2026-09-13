import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useState } from 'react'

import { BookmarkDialog } from '~/components/BookmarkDialog'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { describeBookmark } from '~/lib/progress/threshold'
import { color, font, space, text } from '~/styles/tokens.stylex'

/**
 * The reader's bookmark, as one mark in the bar: `EP 650`, `S02E03` or
 * `CH 1044`, or the invitation to set one. It is the one control the whole
 * site turns on, so it is the one gold thing in the bar. Pressing it opens
 * the dialog where the bookmark is chosen; nothing is edited in place.
 *
 * The dialog is mounted only while it is open, so every opening starts from
 * the bookmark as it stands, and nothing about it is in the served HTML.
 */
export function EpisodeMark(): ReactElement {
  const t = useT()
  const { bookmark, pending } = useBookmark()
  const [open, setOpen] = useState(false)

  const label =
    bookmark === null ? t('mark.unset') : describeBookmark(t, 'mark', bookmark)

  return (
    <>
      <Button
        // The records come from the server now, so a new bookmark takes a
        // round trip. The mark says so rather than looking inert; it is not
        // `disabled`, which would drop focus and the announcement with it.
        aria-busy={pending}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={
          bookmark === null ? undefined : t('mark.change', { threshold: label })
        }
        onClick={() => {
          setOpen(true)
        }}
        sx={[styles.mark, bookmark === null && styles.markUnset]}
      >
        {label}
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
})
