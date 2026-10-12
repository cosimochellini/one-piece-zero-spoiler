import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type RefObject,
  Suspense,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import { styles } from '~/components/BookmarkDialog.styles'
import {
  formHasLanded,
  LazyBookmarkForm,
  preloadBookmarkForm,
} from '~/components/bookmarkFormLoader'
import {
  BookmarkLoadFailed,
  BookmarkSkeleton,
} from '~/components/BookmarkSkeleton'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'

/** The one thing the dialog owes whoever opened it. */
export interface BookmarkDialogProps {
  /** Called once the dialog has closed, however it closed. */
  onClose: () => void
}

/**
 * Where the reader says how far they have got.
 *
 * A native `<dialog>` opened with `showModal()`: the browser puts it in the
 * top layer, makes the page behind it inert, closes it on Escape and gives
 * focus back to the mark that opened it. Nothing here re-implements any of
 * that. A click on the backdrop closes it too, which is why the dialog
 * itself has no padding — a click on padding would count as a click inside.
 *
 * The dialog, its title and its close button are on the page; the form is
 * fetched on demand, and a skeleton of it holds its place until it arrives,
 * so the dialog opens on the press however slow the connection.
 */
export function BookmarkDialog({ onClose }: BookmarkDialogProps): ReactElement {
  const { dialogRef, close } = useModal()
  const titleId = useId()
  const ledeId = useId()

  return (
    <dialog
      aria-describedby={ledeId}
      aria-labelledby={titleId}
      onClose={onClose}
      ref={dialogRef}
      {...stylex.props(styles.dialog)}
    >
      <div {...stylex.props(styles.panel)}>
        <DialogHead
          ledeId={ledeId}
          titleId={titleId}
        />
        <FormSlot onDone={close} />
        <CloseButton onClose={close} />
      </div>
    </dialog>
  )
}

interface Modal {
  close: () => void
  dialogRef: RefObject<HTMLDialogElement | null>
}

/**
 * The whole native lifecycle of the dialog in one place: it is opened modally
 * for as long as the component is mounted, and a click that lands on the
 * dialog element itself rather than on the panel inside it closes it, which
 * is what a click on the backdrop is.
 *
 * That listener is native rather than a React `onClick` on purpose. The
 * backdrop is not an element of its own and a `<dialog>` is not a control, so
 * a handler in the JSX would be a mouse listener on a non-interactive element
 * — and it would be owed a keyboard equivalent, which Escape already is and
 * which the browser already handles.
 *
 * The browser focuses the first control on opening, which is the first unit
 * whichever one is chosen; the focus is moved to the chosen one.
 */
function useModal(): Modal {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const closeOnBackdrop = (event: MouseEvent): void => {
      if (event.target === dialog) {
        dialog?.close()
      }
    }

    dialog?.showModal()
    dialog?.querySelector<HTMLInputElement>('input:checked')?.focus()
    dialog?.addEventListener('click', closeOnBackdrop)

    return () => {
      dialog?.removeEventListener('click', closeOnBackdrop)
    }
  }, [])

  return {
    dialogRef,
    close: () => {
      dialogRef.current?.close()
    },
  }
}

type FormStatus = 'failed' | 'loading' | 'ready'

/**
 * The form, or its skeleton while its code is on the way, or a way to ask
 * again when the fetch failed.
 */
function FormSlot({ onDone }: { onDone: () => void }): ReactElement {
  const [status, setStatus] = useState<FormStatus>(() =>
    formHasLanded() ? 'ready' : 'loading',
  )

  useEffect(() => {
    if (status !== 'loading') {
      return
    }

    let live = true
    const settle = async (): Promise<void> => {
      const landed = await preloadBookmarkForm()
      if (live) {
        setStatus(landed ? 'ready' : 'failed')
      }
    }
    void settle()

    return () => {
      live = false
    }
  }, [status])

  if (status === 'failed') {
    return (
      <BookmarkLoadFailed
        onRetry={() => {
          setStatus('loading')
        }}
      />
    )
  }
  if (status === 'loading') {
    return <BookmarkSkeleton />
  }

  return (
    <Suspense fallback={<BookmarkSkeleton />}>
      <LazyBookmarkForm onDone={onDone} />
    </Suspense>
  )
}

/**
 * The title and the lede together. They carry the two ids the dialog points
 * its `aria-labelledby` and `aria-describedby` at, so neither can be moved
 * without the other losing what names it.
 */
function DialogHead({
  ledeId,
  titleId,
}: {
  ledeId: string
  titleId: string
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.head)}>
      <h2
        id={titleId}
        {...stylex.props(styles.title)}
      >
        {t('dialog.title')}
      </h2>
      <p
        id={ledeId}
        {...stylex.props(styles.lede)}
      >
        {t('dialog.lede')}
      </p>
    </div>
  )
}

/**
 * The way out that keeps the bookmark as it was, drawn as a cross in the top
 * corner. It comes last in the panel, so the keyboard meets the unit first;
 * Escape and a click on the backdrop do the same thing.
 */
function CloseButton({ onClose }: { onClose: () => void }): ReactElement {
  const t = useT()

  return (
    <Button
      aria-label={t('dialog.cancel')}
      onClick={onClose}
      sx={styles.close}
      variant="quiet"
    >
      <span aria-hidden="true">✕</span>
    </Button>
  )
}
