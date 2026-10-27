import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useEffect, useRef } from 'react'

import { styles } from '~/components/BookmarkDialog.styles'
import { NumberField, UnitFields } from '~/components/BookmarkFields'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import type { Bookmark } from '~/lib/progress/episode'
import { useBookmarkDraft } from '~/lib/progress/useBookmarkDraft'

/** What the form needs from the dialog around it. */
export interface BookmarkFormProps {
  /** Closes the dialog. Called on every way out, including a successful save. */
  onDone: () => void
  /**
   * Leaves the focus where it is when the form arrives late. The intro holds
   * the focus on the dialog itself, and a reader may have tabbed on to its
   * controls while the form was still on its way (#864).
   */
  keepFocus?: boolean
}

/**
 * The draft from the unit down to the number, and the two ways out of it that
 * live inside it: save and forget. It is the part of the dialog fetched on
 * demand; the dialog around it, with its title and its close button, is
 * already on the page.
 *
 * Nothing here reaches the cookie until Save, so a reader who opens the
 * dialog, tries a unit and leaves still has the bookmark they arrived with.
 */
export function BookmarkForm({
  onDone,
  keepFocus = false,
}: BookmarkFormProps): ReactElement {
  const { bookmark, setBookmark } = useBookmark()
  const arrivalRef = useArrivalFocus()
  // A form that keeps the focus is not handed to the arrival hook at all.
  const plainRef = useRef<HTMLFormElement>(null)
  const formRef = keepFocus ? plainRef : arrivalRef

  const commit = (next: Bookmark): void => {
    // `setBookmark` writes the cookie and re-reads the pages, in that order.
    setBookmark(next)
    onDone()
  }
  const { canSave, draft, onBlur, onChange, onRestart, onSubmit, problem } =
    useBookmarkDraft(bookmark, commit)

  return (
    <form
      onSubmit={onSubmit}
      ref={formRef}
      {...stylex.props(styles.body)}
    >
      <UnitFields
        draft={draft}
        onRestart={onRestart}
      />

      <NumberField
        draft={draft}
        onBlur={onBlur}
        onChange={onChange}
        problem={problem}
      />

      <Actions
        canForget={bookmark !== null}
        canSave={canSave}
        onForget={() => {
          commit(null)
        }}
      />
    </form>
  )
}

/**
 * When the form arrives after the dialog has opened, the browser has already
 * given the focus to the close button, the only control there was. It moves
 * to the chosen unit, where it would have started had the form been here.
 * Arriving with the dialog, the form leaves the focus to the dialog. A form
 * told to keep the focus is never handed this ref.
 */
function useArrivalFocus(): React.RefObject<HTMLFormElement | null> {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current
    const dialog = form?.closest('dialog')
    if (
      dialog?.open === true
      && form?.contains(document.activeElement) === false
    ) {
      form.querySelector<HTMLInputElement>('input:checked')?.focus()
    }
  }, [])

  return formRef
}

/**
 * Save, and under it the way to drop the bookmark. Save is disabled until the
 * draft grades to a real bookmark, so it cannot be pressed into a silent
 * no-op; the forget line is absent rather than disabled when there is no
 * bookmark to drop.
 */
function Actions({
  canSave,
  canForget,
  onForget,
}: {
  canForget: boolean
  canSave: boolean
  onForget: () => void
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.actions)}>
      <Button
        disabled={!canSave}
        sx={styles.save}
        type="submit"
      >
        {t('dialog.save')}
      </Button>
      {canForget && (
        <Button
          onClick={onForget}
          sx={styles.forget}
        >
          {t('dialog.forget')}
        </Button>
      )}
    </div>
  )
}
