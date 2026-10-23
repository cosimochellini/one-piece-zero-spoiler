// Every payload the server sends, for every key, at every bookmark of the
// spoiler sweep and in both locales, one JSON line each (about 1 GB). Dump
// the base and the head of a refactor that should change nothing, and `cmp`
// the two:
//   npm run --silent archive:dump > head.jsonl
// The list is the sweep's own (`src/server/archive/payloads.server.ts`), so
// a page added to the server is in the dump too, and so are the bookmarks
// (One Piece's, in `src/data/series/index.ts`).
import process from 'node:process'

import { importArchive } from './archive-loader.mjs'

const { PAYLOADS } = await importArchive('server/archive/payloads.server.ts')
const { ONE_PIECE } = await importArchive('data/series/index.ts')
const BOOKMARKS = ONE_PIECE.bookmarks
const { LOCALES } = await importArchive('i18n/locales.ts')

const asks = BOOKMARKS.flatMap((bookmark) =>
  LOCALES.map((locale) => ({ bookmark, locale })),
)

for (const { keys, name, run } of PAYLOADS) {
  const all = keys?.() ?? ['']
  for (const key of all) {
    for (const { bookmark, locale } of asks) {
      const payload = run(bookmark, locale, key)
      process.stdout.write(
        `${JSON.stringify({ name, key, bookmark, locale, payload })}\n`,
      )
    }
  }
}
