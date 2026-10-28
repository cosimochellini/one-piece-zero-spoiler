import { runAt } from './seasons'
import type { Book } from './series'

export type { Book } from './series'

/** One book of the table, or `undefined` for a number it does not hold. */
export function getBook(
  number: number,
  books: Book[] | undefined,
): Book | undefined {
  return books?.find((book) => book.number === number)
}

/** How many chapters the book holds. */
export function bookLength(book: Book): number {
  return book.last - book.first + 1
}

/** An absolute chapter said the way a book reader counts. */
export interface BookPosition {
  book: number
  /** One-based, within the book. */
  chapter: number
}

/**
 * The book an absolute chapter falls in, and its number within it; `null`
 * for a series without books or a chapter past the last one.
 */
export function locateChapter(
  absolute: number,
  books: Book[] | undefined,
): BookPosition | null {
  const at =
    books === undefined ? null : runAt(books, absolute, (book) => book.last)
  return at === null ? null : { book: at.number, chapter: at.position }
}
