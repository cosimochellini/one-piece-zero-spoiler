/**
 * The document head of every page a record has to itself: a character's and
 * a devil fruit's.
 *
 * Kept out of the route modules because it is the one part of a page that
 * runs before any component does, on the server, and it is the one place a
 * covered name could still leak. The leading `-` keeps the file out of the
 * generated route tree.
 *
 * It spells out what the loader was given and derives nothing. The sentences
 * themselves are chosen on the server, where the archive is: a title is set
 * before the stream resolves, so anything worked out here would have to be
 * worked out without a record to work from.
 */
import type { DocumentHead } from '~/lib/view/records'

/** One entry of the document head, as the router's `meta` array takes it. */
export type HeadTag = { content: string; name: string } | { title: string }

/** The title and the description, as the head takes them. */
export function describeDocument(head: DocumentHead): HeadTag[] {
  return [
    { title: head.title },
    { name: 'description', content: head.description },
  ]
}
