import { lazy } from 'react'

import type { BookmarkForm as Form } from '~/components/BookmarkForm'

/*
 * The bookmark form's code, fetched apart from the page: every page carries
 * the mark, few readers open the dialog.
 */

type FormModule = Promise<{ BookmarkForm: typeof Form }>

// The request in flight or done, and whether it has landed. A failed one is
// dropped, so the next attempt asks again rather than failing for good.
const formRequests = new Map<'form', FormModule>()
const formLanded = new Set<'form'>()

/** Whether the form's code is already here, so the dialog can skip the skeleton. */
export function formHasLanded(): boolean {
  return formLanded.has('form')
}

async function loadForm(): FormModule {
  const asked = formRequests.get('form')
  if (asked !== undefined) {
    return asked
  }

  const request = import('~/components/BookmarkForm')
  formRequests.set('form', request)
  try {
    const module = await request
    formLanded.add('form')
    return module
  } catch (error) {
    formRequests.delete('form')
    throw error
  }
}

/**
 * Fetches the form's code, and says whether it is here. The mark calls it as
 * soon as it is pointed at or focused, so the form is often in before the
 * press.
 */
export async function preloadBookmarkForm(): Promise<boolean> {
  try {
    await loadForm()
    return true
  } catch {
    return false
  }
}

// Rendered only once the form's code has landed, so the lazy loader never
// sees a failed fetch: React would cache that rejection and throw it into
// the page.
export const LazyBookmarkForm = lazy(async () => {
  const module = await loadForm()
  return { default: module.BookmarkForm }
})
