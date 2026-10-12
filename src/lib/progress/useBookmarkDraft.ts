import { type SyntheticEvent, useState } from 'react'

import {
  type Bookmark,
  type Draft,
  draftOf,
  type DraftProblem,
  gradeDraft,
} from './episode'

/** A bookmark under edit, and what its fields and its form are handed. */
export interface BookmarkDraft {
  /** Whether the draft grades to a bookmark that Save would store. */
  canSave: boolean
  draft: Draft
  /** The field has been left once: from now on its problem shows. */
  onBlur: () => void
  onChange: (number: string) => void
  /** A new unit or season: the draft begins again, untouched. */
  onRestart: (next: Draft) => void
  /** The form's submit: saves the graded bookmark, if there is one. */
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void
  /** Null until the field has been blurred once; live on every keystroke after. */
  problem: DraftProblem | null
}

/**
 * The draft from the unit down to the number, shared by the dialog and the
 * onboarding's inline fields.
 *
 * Nothing reaches the cookie until Save, so a reader who tries a unit and
 * leaves still has the bookmark they arrived with. Validation follows the
 * touched pattern: silent until the field is blurred, then live on every
 * keystroke.
 */
export function useBookmarkDraft(
  from: Bookmark,
  save: (next: NonNullable<Bookmark>) => void,
): BookmarkDraft {
  const [draft, setDraft] = useState<Draft>(() => draftOf(from))
  const [touched, setTouched] = useState(false)
  const graded = gradeDraft(draft)

  return {
    canSave: graded.bookmark !== null,
    draft,
    problem: touched ? graded.problem : null,
    onBlur: () => {
      setTouched(true)
    },
    onChange: (number) => {
      setDraft({ ...draft, number })
    },
    onRestart: (next) => {
      setDraft(next)
      setTouched(false)
    },
    onSubmit: (event) => {
      event.preventDefault()
      if (graded.bookmark !== null) {
        save(graded.bookmark)
      }
    },
  }
}
