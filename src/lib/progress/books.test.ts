import { describe, expect, it } from 'vitest'

import { bookLength, getBook, locateChapter } from './books'
import { draftOf, gradeDraft } from './episode'
import { type Book, type BookmarkSeries, ONE_PIECE_BOOKMARK } from './series'

// The five books' lengths in publication order: 73, 70, 82, 46 and 73.
const BOOKS: Book[] = [
  { number: 1, first: 1, last: 73 },
  { number: 2, first: 74, last: 143 },
  { number: 3, first: 144, last: 225 },
  { number: 4, first: 226, last: 271 },
  { number: 5, first: 272, last: 344 },
]

const WITH_BOOKS: BookmarkSeries = { ...ONE_PIECE_BOOKMARK, books: BOOKS }

const grade = (group: string, number: string): null | string =>
  gradeDraft({ mode: 'chapter', group, number }, WITH_BOOKS).problem ?? null

/** Every book's first and last chapter, as the book form and the absolute one. */
const EDGES = BOOKS.flatMap((book) => [
  { book: book.number, chapter: 1, absolute: book.first },
  { book: book.number, chapter: bookLength(book), absolute: book.last },
])

describe('the book table', () => {
  // Through the dialog's own save and read-back, not a copy of its sum.
  it.each(EDGES)(
    'round-trips book $book, chapter $chapter',
    ({ absolute, book, chapter }) => {
      const draft = {
        mode: 'chapter',
        group: String(book),
        number: String(chapter),
      } as const
      const { bookmark } = gradeDraft(draft, WITH_BOOKS)

      expect(bookmark).toStrictEqual({ mode: 'chapter', chapter: absolute })
      expect(
        draftOf({ mode: 'chapter', chapter: absolute }, WITH_BOOKS),
      ).toStrictEqual(draft)
      expect(locateChapter(absolute, BOOKS)).toStrictEqual({ book, chapter })
    },
  )

  it('refuses a chapter or a book outside the table', () => {
    expect(grade('2', '0')).not.toBeNull()
    expect(grade('2', '71')).not.toBeNull()
    expect(grade('2', '1.5')).not.toBeNull()
    expect(grade('6', '1')).not.toBeNull()
    expect(getBook(0, BOOKS)).toBeUndefined()
  })

  it('places no chapter for a series without books, or past the last book', () => {
    expect(locateChapter(1, undefined)).toBeNull()
    expect(locateChapter(0, BOOKS)).toBeNull()
    expect(locateChapter(345, BOOKS)).toBeNull()
    expect(locateChapter(NaN, BOOKS)).toBeNull()
  })
})
