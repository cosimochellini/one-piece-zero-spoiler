# Architecture

Zero Spoiler is a React / TanStack Start app with StyleX, built by Vite for
Cloudflare Workers. The old Netlify address only redirects to the new domain
(`netlify.toml`). Versions and commands live in `package.json`.

The Worker runs on Workers Free, where Cloudflare kills a request over 10 ms of
CPU. `.github/workflows/worker-cpu.yml` opens an issue on any day it does
(#775).

## Code map

| Path                                     | Responsibility                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| `src/data/`                              | Server-only archive types, reveal rules, ordering and dated facts.                   |
| `src/data/series/index.ts`               | Registry and lazy archive loading; the only boundary that imports individual series. |
| `src/data/series/<series>/`              | Each series' records, dossiers, drawings and editorial rules.                        |
| `src/server/api.ts`                      | Request-facing server functions.                                                     |
| `src/server/archive/`                    | Filter and project archives into reader payloads.                                    |
| `src/lib/progress/`                      | Public series metadata, bookmark validation and conversions.                         |
| `src/lib/view/`                          | Client-safe payload types and view helpers.                                          |
| `src/routes/`, `src/components/`         | File routes and React UI.                                                            |
| `src/i18n/`, `src/server/copy.server.ts` | Shared translations and server-loaded series copy.                                   |
| `src/styles/`                            | StyleX tokens, series themes and global CSS.                                         |
| `scripts/`                               | Verification, generated documentation and quality gates.                             |

## Spoiler contract

Requests read the selected series' bookmark cookie, load its archive, then use
`readerFor` (`src/server/archive/reader.server.ts`) to keep the archive,
bookmark, source and locale together. `reveal` and dated-field gates decide what
opens. The server returns localized text and drawing strokes only after their
gates.

- Covered records contain only an opaque handle, kind and episode/chapter
  thresholds. Hidden ids, names, prose, links and drawings stay out of payloads,
  HTML, metadata and client chunks. A blurred real record is still a leak.
- Handles belong to a series and its source-filtered archive. Preserve deployed
  One Piece ordinals; other series use their own prefixes.
- Episode and season bookmarks read anime thresholds; chapter bookmarks read
  manga thresholds. Records exclusive to the other source are absent, including
  from counts and handles. Facts exclusive to it stay closed
  (`src/data/source.ts`).
- Without a bookmark, `reveal` opens no records. Onboarding alone receives the
  series' bounded demo, with every record and dated fact inside both limits.
  Trial cookies are restricted to that demo and yield to a saved bookmark.
- Drawings, search aliases, relationships, place labels and source credits use
  the same gates as prose. Later information belongs in dated entries.
- Personalized HTML and archive responses stay out of shared caches. Deferred
  drawings and lists are filtered server-side too; results belong to the
  bookmark they were fetched for.

## Relationship selections

`CharacterDossier.relationships` uses complete dated snapshots of at most five
people in editorial order. The server chooses the latest reached snapshot in the
reader’s source/unit and carries it forward without saga-based resets. Only its
selected people are projected; each retains their earlier reached history,
deduplicating unchanged consecutive wording. Removed people and future
selections contribute no cards, counts or placeholders. A later re-selection
restores the pair’s reached history. Both endpoints and each snapshot are gated
before names or text reach the client; perspectives remain directed.

Character pages in every series show reached relationships or omit the section
entirely, including while it loads. The cohort inventory accounts for every One
Piece character through authored selections or documented deliberate omissions.
A series without authored relationships, including Hunter x Hunter, shows no
recommendation section; no relationships are inferred. Character archive-order
navigation and nearby recommendations have been retired; independent place and
fruit navigation remains.

The authoring contract and provenance requirements are in
[Contributing](../CONTRIBUTING.md#authoring-relationship-selections). Selection
and wording share the existing timeline; no separate client selection API
exists.

## Security

SSR security headers, including the per-request nonce CSP, are set in
`src/security-headers.ts`; static asset headers cannot protect SSR documents.
Server functions use the CSRF middleware in `src/start.ts` and read progress
from request cookies, never a client-supplied bookmark.

Fog prevents accidental spoilers, not deliberate access: “Show anyway” reveals a
record by handle. Recognized crawlers without a valid saved/trial bookmark
receive an end-of-anime bookmark; source filtering still applies. See
`src/lib/progress/requestBookmark.ts`.

## Series and routing

One Piece and Hunter x Hunter are open to readers. HxH files the verified Hunter
Exam coverage through episode 26 / chapter 43, including the manga's chapter-one
characters introduced later by the anime. Remaining candidate naming checks are
tracked in #834; every Hunter Exam character has a chronicle (#762). Records are
not added from unnamed appearances or supplemental names.

Public metadata in `src/lib/progress/series.ts` holds cookies, ranges, seasons,
demo bounds, features and themes, without archive records. Pass the series to
bookmark conversions; shared code must not assume One Piece.

The registry separates all filed series (`SERIES` / `filedArchiveOf`, for tests,
gates and scripts) from reader-accessible ones (`OPEN_SERIES` / `archiveOf`). A
filed but closed series is announced by name, serves no archive and has no
sitemap entries. Shared engine and server modules use the registry rather than
importing a series directly. Optional slices are declared through features;
`hasPage` governs page availability, navigation and sitemap membership.

Content routes are `/<series>/<locale>/…`; `/<locale>` is the hub and hosts
legal/privacy pages. Unknown series and locales return 404. Legacy locale-first
content routes redirect under `/one-piece` before bookmark parameters are read.
`src/start.ts` handles shared-link bookmarks, legacy cookie migration and the
`/` redirect (cookie, then country, then `Accept-Language`) before loaders. Use
a content URL such as `/one-piece/en?ep=650` to set progress.

## Localization

Use `useT()` for shared dictionary keys and `useSeriesT()` for common series
keys. Feature-specific keys use `useSeriesT('<series>')`, guarded against
`undefined`, or `useSeriesOnlyT('<series>')` in components exclusive to that
series. Shared dictionaries contain no series-specific prose. Series
dictionaries stay server-side and reach only the relevant pages; Italian keys
are typed against English. The shared dictionary is one chunk per locale: the
locale routes await `loadDictionary` in `beforeLoad` and the router awaits it
before hydrating, so a page downloads its own language only. The privacy notice
(`src/i18n/dictionaries/privacy.ts`) ships with the legal page alone. Copy rules
live in the [tone-of-voice skill](../.claude/skills/tone-of-voice/SKILL.md).

## Extending the archive boundary

- Register new server functions in `PAYLOADS` in
  `src/server/archive/payloads.server.ts`, including ids/handles they accept.
  For `plain()` responses, extend the JSON round-trip checks there too.
- Register new prose outside a series' `records/` in its `EXTRA.prose` entry in
  `scripts/archive-gate.mjs` and in `textsOf` in `src/data/leaks.test.ts`, using
  the page's actual gate.
- New series need a registry entry and coverage floors/text kinds in
  `src/test/series.ts`. Follow an existing series for archive and copy wiring.
- Client code consumes `src/lib/view` types, never archive modules. ESLint,
  payload sweeps and `gate:archive` protect this boundary; keep all three.

For verification commands and delivery rules, use
[CONTRIBUTING.md](../CONTRIBUTING.md#checks).

## The archive in numbers

Regenerate with `npm run docs:counts` after changing archive counts. `gate:docs`
checks this block.

<!-- Generated by `npm run docs:counts` from the archive. Do not edit by hand. -->

### `one-piece`

| Thing               | Count                                                   |
| ------------------- | ------------------------------------------------------- |
| Records             | 737                                                     |
| Characters          | 534                                                     |
| Devil fruits        | 128                                                     |
| Arcs, places, ships | 34 · 39 · 2                                             |
| Saga modules        | 12, plus one for the devil fruits                       |
| Line drawings       | 737, one per record, plus 308 redrawings of 172 records |
| Chronicle stories   | 757, for 186 characters                                 |

### `hunter-x-hunter`

| Thing             | Count                                              |
| ----------------- | -------------------------------------------------- |
| Records           | 73                                                 |
| Characters        | 56                                                 |
| Arcs, places      | 7 · 10                                             |
| Saga modules      | 7                                                  |
| Line drawings     | 73, one per record, plus 8 redrawings of 8 records |
| Chronicle stories | 109, for 55 characters                             |

<!-- End of the generated counts. -->
