import { describe, expect, it } from 'vitest'

import { bookLength, getBook, locateChapter, resolveChapter } from './books'
import type { Book } from './series'

// The five books' lengths in publication order: 73, 70, 82, 46 and 73.
const BOOKS: Book[] = [
  { number: 1, first: 1, last: 73 },
  { number: 2, first: 74, last: 143 },
  { number: 3, first: 144, last: 225 },
  { number: 4, first: 226, last: 271 },
  { number: 5, first: 272, last: 344 },
]

describe('the book table', () => {
  it('round-trips a book and a chapter at every book’s first and last chapter', () => {
    for (const book of BOOKS) {
      for (const chapter of [1, bookLength(book)]) {
        const absolute = resolveChapter(book.number, chapter, BOOKS)

        expect(absolute).toBe(chapter === 1 ? book.first : book.last)
        expect(locateChapter(absolute ?? NaN, BOOKS)).toStrictEqual({
          book: book.number,
          chapter,
        })
      }
    }
  })

  it('refuses a chapter or a book outside the table', () => {
    expect(resolveChapter(2, 0, BOOKS)).toBeNull()
    expect(resolveChapter(2, 71, BOOKS)).toBeNull()
    expect(resolveChapter(2, 1.5, BOOKS)).toBeNull()
    expect(resolveChapter(6, 1, BOOKS)).toBeNull()
    expect(getBook(0, BOOKS)).toBeUndefined()
  })

  it('places no chapter for a series without books, or past the last book', () => {
    expect(locateChapter(1, undefined)).toBeNull()
    expect(resolveChapter(1, 1, undefined)).toBeNull()
    expect(locateChapter(0, BOOKS)).toBeNull()
    expect(locateChapter(345, BOOKS)).toBeNull()
    expect(locateChapter(NaN, BOOKS)).toBeNull()
  })
})
