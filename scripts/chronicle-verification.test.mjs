// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from. The
// archive is imported by path for the same reason — the `~/` alias is resolved
// from `tsconfig`, which does not cover `scripts/`.
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

import { characters, dossierOf } from '../src/data/characters.ts'
import { CHRONICLE_SOURCES } from './chronicle-sources.mjs'
import { DOC_PATH } from './chronicle-verification.mjs'

/** Every story the archive holds, flattened, with its character beside it. */
const STORIES = characters.flatMap((character) => {
  return (dossierOf(character)?.chronicle ?? []).map((story) => {
    return {
      id: character.id,
      episode: story.episode,
      title: story.value.title.en,
    }
  })
})

const DOCUMENT = readFileSync(DOC_PATH, 'utf8')

const HEADING =
  /^## (?<name>.+) \(`(?<id>[a-z\d-]+)`, threshold ep (?<threshold>\d+)\)$/u

/**
 * One table line read as a story row, or `null` when the line is the header,
 * the alignment rule, or not a table line at all.
 * @param {string} line The document line.
 * @param {object} section The heading groups the line sits under.
 * @returns {null | object} The row.
 */
function rowIn(line, section) {
  if (!line.startsWith('|')) {
    return null
  }

  const cells = line
    .slice(1, -1)
    .split('|')
    .map((cell) => cell.trim())
  const episode = Number(cells[1])

  if (cells.length !== 4 || !Number.isSafeInteger(episode)) {
    return null
  }

  return {
    id: section.id,
    name: section.name,
    threshold: Number(section.threshold),
    episode,
    title: cells[0],
    source: cells[2],
    note: cells[3],
  }
}

/**
 * The document read back as rows, so a row can be matched against a story.
 * @returns {object[]} One row per table line, under the section it sits in.
 */
function rowsInDocument() {
  const rows = []
  let section

  for (const line of DOCUMENT.split('\n')) {
    const heading = HEADING.exec(line)

    if (heading !== null) {
      section = heading.groups
    } else if (section !== undefined) {
      const row = rowIn(line, section)

      if (row !== null) {
        rows.push(row)
      }
    }
  }

  return rows
}

const ROWS = rowsInDocument()

/**
 * One comparable line per story or row, so a mismatch reads as a diff.
 * @param {object} entry A story or a row.
 * @returns {string} The line.
 */
function asLine(entry) {
  return `${entry.id} @${entry.episode} — ${entry.title}`
}

/**
 * The character the archive files under an id, if it files one.
 * @param {string} id The record's id.
 * @returns {object | undefined} The character record.
 */
function filed(id) {
  return characters.find((character) => character.id === id)
}

describe('the chronicle verification log', () => {
  it('vouches for every story, and for no story the archive does not hold', () => {
    // The document is the only record of which episode page settles which
    // story. A chronicle extended without it would ship prose nobody checked.
    const inDocument = ROWS.map((row) => asLine(row)).toSorted((a, b) =>
      a.localeCompare(b),
    )
    const inArchive = STORIES.map((story) => asLine(story)).toSorted((a, b) =>
      a.localeCompare(b),
    )

    expect(inDocument).toStrictEqual(inArchive)
  })

  it('heads every section with the character the archive files', () => {
    for (const row of ROWS) {
      expect(row.name, row.id).toBe(filed(row.id)?.name.en)
      expect(row.threshold, row.id).toBe(filed(row.id)?.revealedAtEpisode)
    }
  })

  it('cites a wiki page and a note for every story', () => {
    for (const row of ROWS) {
      expect(row.source, asLine(row)).toMatch(
        /^https:\/\/onepiece\.fandom\.com\/wiki\/\S+$/u,
      )
      expect(row.note.length, asLine(row)).toBeGreaterThan(0)
    }
  })

  it('keeps the sources beside the script in step with the document', () => {
    for (const row of ROWS) {
      const source = CHRONICLE_SOURCES[row.id]?.[row.episode]

      expect(source?.source, asLine(row)).toBe(row.source)
      expect(source?.note, asLine(row)).toBe(row.note)
    }
  })
})
