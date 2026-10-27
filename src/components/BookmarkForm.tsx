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
export function BookmarkForm({ onDone }: BookmarkFormProps): ReactElement {
  const { bookmark, setBookmark } = useBookmark()
  const formRef = useArrivalFocus()

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
 * Arriving with the dialog, the form leaves the focus to the dialog.
 *
 * A dialog marked `data-keep-focus` holds the focus itself, as the intro does
 * (#864): while the focus is anywhere inside it, a reader may have tabbed on
 * while the form was on its way, so it stays put. Only focus that fell out of
 * the dialog, as after a retry whose button went away, is brought back.
 */
function useArrivalFocus(): React.RefObject<HTMLFormElement | null> {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current
    const dialog = form?.closest('dialog')
    if (
      dialog?.open === true
      && form?.contains(document.activeElement) === false
      && !keepsFocus(dialog)
    ) {
      form.querySelector<HTMLInputElement>('input:checked')?.focus()
    }
  }, [])

  return formRef
}

/** A dialog that holds the focus itself, with the focus still inside it. */
function keepsFocus(dialog: HTMLDialogElement): boolean {
  return (
    dialog.dataset['keepFocus'] !== undefined
    && dialog.contains(document.activeElement)
  )
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
