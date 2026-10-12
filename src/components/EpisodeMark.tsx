import * as stylex from '@stylexjs/stylex'
import { lazy, type ReactElement, Suspense, useState } from 'react'

import type { BookmarkDialog as Dialog } from '~/components/BookmarkDialog'
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
export interface EpisodeMarkProps {
  placement?: 'bar' | 'fold'
}

/** What the mark shows, and what a screen reader is told beyond that. */
interface MarkFace {
  hint: string | undefined
  label: string
}

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

type DialogModule = Promise<{ BookmarkDialog: typeof Dialog }>

// The request in flight or done. A failed one is dropped, so the next press
// asks again rather than failing for good.
const dialogRequests = new Map<'dialog', DialogModule>()

/**
 * The dialog's code, fetched apart from the page: every page carries the
 * mark, few readers open it. Asked for as soon as the mark is pointed at or
 * focused, so the first opening rarely waits on the network.
 */
async function loadDialog(): DialogModule {
  const asked = dialogRequests.get('dialog')
  if (asked !== undefined) {
    return asked
  }

  const request = import('~/components/BookmarkDialog')
  dialogRequests.set('dialog', request)
  try {
    return await request
  } catch (error) {
    dialogRequests.delete('dialog')
    throw error
  }
}

/** Whether the dialog's code is here, fetching it if it is not. */
async function dialogReady(): Promise<boolean> {
  try {
    await loadDialog()
    return true
  } catch {
    return false
  }
}

function handlePreload(): void {
  void dialogReady()
}

// Rendered only once `dialogReady()` has said yes, so the lazy loader never
// sees a failed fetch: React would cache that rejection and throw it into
// the page. A failed fetch leaves the mark closed and pressable again.
const BookmarkDialog = lazy(async () => {
  const module = await loadDialog()
  return { default: module.BookmarkDialog }
})

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
  const openDialog = async (): Promise<void> => {
    if (await dialogReady()) {
      setOpen(true)
    }
  }

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
          void openDialog()
        }}
        onFocus={handlePreload}
        onPointerEnter={handlePreload}
        sx={[
          inFold ? styles.invite : styles.mark,
          !inFold && bookmark === null && styles.markUnset,
        ]}
      >
        {face.label}
      </Button>

      {open && (
        <Suspense fallback={null}>
          <BookmarkDialog
            onClose={() => {
              setOpen(false)
            }}
          />
        </Suspense>
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
