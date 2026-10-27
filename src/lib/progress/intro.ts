/**
 * The intro a reader with no bookmark gets on their first series page (#864).
 *
 * A flag in `sessionStorage`, set however the intro is closed, so it shows
 * once per browser session. Storage that throws counts as already shown: the
 * intro is a convenience, and one that reopened on every page would not be.
 *
 * Held as a small external store for `useSyncExternalStore`, like the
 * welcome. Beside the flag it carries the page's subject (the covered record
 * a record page is about, which the intro names the threshold of) and the
 * request to lift the fog off that record, which the lead veils answer.
 */
import type { Gated } from './spoiler'

const INTRO_KEY = 'opzs_intro'

const load: { subject: Gated | null } = { subject: null }
const listeners = new Set<() => void>()
const peekers = new Set<() => void>()

function notify(): void {
  for (const listener of listeners) {
    listener()
  }
}

/**
 * Whether this session still owes the intro. Read from storage each time
 * rather than cached, so there is no second copy of the flag to keep true.
 */
export function introOwed(): boolean {
  try {
    return sessionStorage.getItem(INTRO_KEY) === null
  } catch {
    return false
  }
}

/** Closes the intro for the rest of the browser session. */
export function dismissIntro(): void {
  try {
    sessionStorage.setItem(INTRO_KEY, '1')
  } catch {
    // No storage: `introOwed` already says no.
  }
  notify()
}

/** The covered record the page is about, or null on a list. */
export function introSubject(): Gated | null {
  return load.subject
}

/**
 * Names the covered record the page is about, for as long as the caller is
 * mounted. Returns the call that takes it back, which leaves a subject named
 * since by another page alone.
 */
export function registerSubject(subject: Gated): () => void {
  load.subject = subject
  notify()

  return () => {
    if (load.subject !== subject) {
      return
    }

    load.subject = null
    notify()
  }
}

/** Subscribes a component to the intro closing or its subject changing. */
export function subscribeIntro(listener: () => void): () => void {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

/** Listens for "Show anyway" in the intro; for the page's lead veils only. */
export function onLeadPeek(peek: () => void): () => void {
  peekers.add(peek)

  return () => {
    peekers.delete(peek)
  }
}

/** "Show anyway" in the intro: the lead veils lift their fog. */
export function requestLeadPeek(): void {
  for (const peek of peekers) {
    peek()
  }
}
