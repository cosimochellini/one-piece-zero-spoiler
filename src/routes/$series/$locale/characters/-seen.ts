// Whether this tab has shown the characters page once. Until then there is
// no position to restore, so the shelves stream and the page opens at once.
// A sibling of the route rather than in it: a route file exports components
// only, so Fast Refresh can keep their state.
export const seen = { shelves: false }

/** Called once the page is on screen. */
export function shelvesShown(): void {
  seen.shelves = true
}
