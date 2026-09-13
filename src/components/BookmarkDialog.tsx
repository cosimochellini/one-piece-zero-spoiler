import * as stylex from '@stylexjs/stylex'
import { useRouter } from '@tanstack/react-router'
import {
  type ReactElement,
  type RefObject,
  type SyntheticEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import { styles } from '~/components/BookmarkDialog.styles'
import { NumberField, UnitFields } from '~/components/BookmarkFields'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import {
  type Bookmark,
  type Draft,
  draftOf,
  gradeDraft,
} from '~/lib/progress/episode'

/** The one thing the dialog owes whoever opened it. */
export type BookmarkDialogProps = {
  /** Called once the dialog has closed, however it closed. */
  readonly onClose: () => void
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
 * The draft is local until Save. Switching the unit empties the field
 * rather than converting: an episode is not a chapter, and a number carried
 * across would be a guess dressed as a fact. Validation follows the touched
 * pattern: silent until the field is blurred, then live on every keystroke.
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
      <BookmarkForm
        ledeId={ledeId}
        onDone={close}
        titleId={titleId}
      />
    </dialog>
  )
}

type Modal = {
  readonly close: () => void
  readonly dialogRef: RefObject<HTMLDialogElement | null>
}

/**
 * The whole native lifecycle of the dialog in one place: it is opened modally
 * for as long as the component is mounted, and a click that lands on the
 * dialog element itself rather than on the form inside it closes it, which is
 * what a click on the backdrop is.
 *
 * That listener is native rather than a React `onClick` on purpose. The
 * backdrop is not an element of its own and a `<dialog>` is not a control, so
 * a handler in the JSX would be a mouse listener on a non-interactive element
 * — and it would be owed a keyboard equivalent, which Escape already is and
 * which the browser already handles.
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

type BookmarkFormProps = {
  readonly ledeId: string
  /** Closes the dialog. Called on every way out, including a successful save. */
  readonly onDone: () => void
  readonly titleId: string
}

/**
 * The draft from the unit down to the number, and the three ways out of it.
 *
 * Nothing here reaches the cookie until Save, so a reader who opens the
 * dialog, tries a unit and leaves still has the bookmark they arrived with.
 */
function BookmarkForm({
  titleId,
  ledeId,
  onDone,
}: BookmarkFormProps): ReactElement {
  const router = useRouter()
  const { bookmark, setBookmark } = useBookmark()
  const [draft, setDraft] = useState<Draft>(() => draftOf(bookmark))
  const [touched, setTouched] = useState(false)

  const graded = gradeDraft(draft)
  const problem = touched ? graded.problem : null

  const commit = (next: Bookmark): void => {
    setBookmark(next)
    // The root route read the old cookie for this document; a fresh load
    // lets a page whose <head> depends on it (a character's title) catch up.
    void router.invalidate()
    onDone()
  }

  const save = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (graded.bookmark !== null) {
      commit(graded.bookmark)
    }
  }

  return (
    <form
      onSubmit={save}
      {...stylex.props(styles.form)}
    >
      <DialogHead
        ledeId={ledeId}
        titleId={titleId}
      />

      <UnitFields
        draft={draft}
        onRestart={(next) => {
          setDraft(next)
          setTouched(false)
        }}
      />

      <NumberField
        draft={draft}
        onBlur={() => {
          setTouched(true)
        }}
        onChange={(number) => {
          setDraft({ ...draft, number })
        }}
        problem={problem}
      />

      <Actions
        canForget={bookmark !== null}
        canSave={graded.bookmark !== null}
        onCancel={onDone}
        onForget={() => {
          commit(null)
        }}
      />
    </form>
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
  readonly ledeId: string
  readonly titleId: string
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
 * Save, forget and cancel. Each of the first two is disabled until it would
 * do something — until the draft grades to a real bookmark, and until there
 * is a bookmark to drop — so neither can be pressed into a silent no-op.
 */
function Actions({
  canSave,
  canForget,
  onForget,
  onCancel,
}: {
  readonly canForget: boolean
  readonly canSave: boolean
  readonly onCancel: () => void
  readonly onForget: () => void
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.actions)}>
      <Button
        disabled={!canSave}
        type="submit"
      >
        {t('dialog.save')}
      </Button>
      <Button
        disabled={!canForget}
        onClick={onForget}
      >
        {t('dialog.forget')}
      </Button>
      <Button
        onClick={onCancel}
        sx={styles.cancel}
      >
        {t('dialog.cancel')}
      </Button>
    </div>
  )
}
