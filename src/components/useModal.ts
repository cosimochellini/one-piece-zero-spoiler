import { type RefObject, useEffect, useRef } from 'react'

export interface Modal {
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
export function useModal(): Modal {
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
