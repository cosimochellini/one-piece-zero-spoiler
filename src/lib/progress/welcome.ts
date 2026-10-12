/**
 * The one-time welcome after a bookmark is saved from the onboarding.
 *
 * A flag in `sessionStorage`, set where the bookmark is saved and taken by
 * the first home page that asks, so a reload does not show it again. It is a
 * convenience, not state the site relies on: storage that throws or comes
 * back empty in a private window only means the welcome is not shown.
 *
 * Held as a small external store for `useSyncExternalStore`: the server has
 * no storage and always answers no, and the browser answers from the flag.
 */
const WELCOME_KEY = 'opzs_welcome'

/** Whether this page load owes the welcome; read from storage once. */
const load: { owed?: boolean } = {}
const listeners = new Set<() => void>()

/** Takes the flag out of storage, answering whether it was there. */
function takeFlag(): boolean {
  try {
    const found = sessionStorage.getItem(WELCOME_KEY) !== null
    sessionStorage.removeItem(WELCOME_KEY)

    return found
  } catch {
    return false
  }
}

/** Asks the next home page to show the welcome once. */
export function markWelcome(): void {
  try {
    sessionStorage.setItem(WELCOME_KEY, '1')
  } catch {
    // No storage: no welcome.
  }
  delete load.owed
}

/** Whether the welcome is owed now. The first call takes the flag. */
export function welcomeOwed(): boolean {
  load.owed ??= takeFlag()

  return load.owed
}

/** Closes the welcome for the rest of this page load. */
export function dismissWelcome(): void {
  load.owed = false
  for (const listener of listeners) {
    listener()
  }
}

/** Subscribes a component to the welcome closing. */
export function subscribeWelcome(listener: () => void): () => void {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}
