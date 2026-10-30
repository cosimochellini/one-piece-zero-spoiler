# Contributing

## Setup

Use Node from `.nvmrc` and npm from `package.json`, then `npm ci` and
`npm run dev`. Keep optional dependencies: fallow needs its platform binary.

## Scope and implementation

Keep spoilers out of issue/PR titles. Follow owner decisions and existing code
and tests. Hidden content stays server-side until its episode/chapter gate;
round uncertain thresholds up. Later facts belong in dated entries.

Read only what the change needs:

- Code structure and spoiler boundaries: [architecture](docs/architecture.md).
- Review criteria: [coding standards](CODING_STANDARDS.md).
- Issue workflow: [issues](.agents/skills/issues/SKILL.md).
- User-facing text: [tone-of-voice](.claude/skills/tone-of-voice/SKILL.md).
- Artwork: [line-drawings](.claude/skills/line-drawings/SKILL.md).

## Checks

Run `npm run check` before pushing: typecheck, lint, format, generated counts,
tests, build and quality gates. Report failed or unexecuted checks. For changed
content, run the relevant `verify:*` scripts in `package.json`; network checks
are outside `check`. Regenerate counts with `docs:counts` and chronicle evidence
with `docs:chronicle` when their inputs change. CI client JavaScript growth over
2,048 bytes needs a standalone `client-budget: <reason>` in the PR body; leak
checks remain blocking.

## Archive and drawing verification

- **One Piece data:** compare base/head `npm run --silent archive:table` dumps;
  compare mappings separately. For dated additions/removals, dump with
  `-- --dated-only`, sort both with `LC_ALL=C`, then use `comm -13` /
  `comm -23`, preserving duplicates. Report intentional changes.
- **Behavior-preserving archive/server refactors:** run
  `npm run --silent archive:dump` in head and an isolated worktree at the exact
  base SHA, with dependencies installed; save outside the checkout and `cmp`.
  Both dump scripts cover One Piece only; use series-specific tests elsewhere.
- **Site changes:** build, `npm start` on a free port, then check the affected
  flow in Chrome with local `puppeteer-core`, running inside the worktree. Set
  the series cookie; check before/at changed episode and chapter gates. Capture
  visual evidence and close browser/preview. Docs/tooling need no browser/dumps.
- **Drawings:** inspect `npm run art:sheet -- <id>` output. For One Piece
  character redrawings, build and run `npm run art:shots -- <id>`; inspect the
  gate screenshots. Keep generated evidence out of commits.

## Sources and rights

Fill the PR template's sources/rights and AI-help fields, using “none” where
inapplicable. Follow [license scope](LICENSE-SCOPE.md) and, for adapted text,
[source terms](LICENSE-SCOPE.md#source-terms-and-adaptations) and
[public credits](docs/source-credits.md); required credit opens with the text.
Check facts on lawful sources, write independently and record wiki URLs or
chapter/page or episode/timestamp. Commit no series scans, frames, dialogue,
subtitles or reference images; use no unofficial manga/anime links. Research
quotations: at most two, each at most 12 words and 80 characters. Draw original
paths by eye, never trace; mark unviewed references for human verification.
Distinctive designs need an owner ruling before merge. Send rights
claims/deadlines to the owner through the legal page's contact process.

## Delivery and agents

Use Conventional Commit titles, at most 100 characters. Fill
`.github/pull_request_template.md` with verification evidence. Issue PRs are
**drafts** with `Closes #N`; leave merging to the owner.

Codex: invoke `$issue-implementer` with the issue number. Claude: delegate to
the `issue-implementer` subagent. Both use the
[shared workflow](.agents/skills/issue-implementer/SKILL.md); referenced
Markdown skills can be read directly in either tool.

## Authoring relationship selections

A dossier’s `relationships` timeline contains complete editorial selections of
at most five distinct character ids, in the order the cards should appear. A
reached entry replaces the whole list; it is not a patch or a ranking inferred
from appearances. An empty list explicitly clears the selection. An absent field
means no relationship content has been authored.

Author a new selection only when a verified story event justifies changing the
people, their order or their wording. Carry the latest selection forward across
sagas indefinitely when nothing changes. Repeat unchanged entries when retaining
a person in a new selection; their identical consecutive wording does not add a
history stage. Earlier reached stages remain available for selected people,
including someone removed and later selected again. Unselected people have no
cards or history in the response.

Pin each selection to verified episode/chapter thresholds, behind the owner,
every selected person and the relationship fact itself. Use the existing source
restriction for facts told in only one medium: each source resolves its own
latest applicable selection. Keep directed perspectives independent and write
original IT/EN type and explanation text. Four or five people is a target, never
a quota. Self-links, duplicate ids, non-character targets and invalid dates fail
the data checks.

## Recording provenance

Evidence is data, not prose files. `docs/content-provenance/sources.json` pins
every wiki revision read: append entries, never rewrite earlier ones.

`npm run provenance:pin -- --series <slug> "Title" ["Title" …]` does the
appending. A title already pinned from that series' English wiki, or one that
redirects to a pinned page, keeps its key and revision; any other title is read
at its latest revision and appended. A title pinned under several keys reuses
the plainest (`en-Chapter_433.json` over `issue815-en-Chapter_433.json`). The
file is re-read just before writing, so another session's appends survive. Each
title prints its key and the cached wikitext under
`.gate/wiki/<slug>/revisions/` to read; `--dry-run` writes nothing to
`sources.json`. New keys are `en-<Title>.json` for One Piece (with `-<revision>`
when another title already holds that key) and `hxh-en-<Title>-<revision>.json`
for Hunter x Hunter. The latest revision a title was read at is cached under
`.gate/wiki/<slug>/latest/`; delete that file to read it afresh. The archive
gate test holds a floor on the source count, so nothing else needs bumping.
Beside it:

- `relationships.json` maps each One Piece character with a `relationships`
  timeline to the `sources.json` key of their character revision, or `null`. A
  test fails when a timeline has no key, a key is stale, or an entry's episode
  or chapter page is not pinned. A one-source entry's other number only orders
  it and needs no page.
- `hunter-x-hunter.json` lists, per record id, the pages read (`sources`) and
  the checks nobody has made yet (`unverified`). Episode and chapter pages
  follow from the record's gates and are not listed.
- `hunter-x-hunter-relationships.json` lists every archived Hunter x Hunter
  character once: under `authored`, with the `hxh-` keys of the wiki revisions
  read, under `omitted`, with the reason, or under `pending`, with the issue
  that will author it (filed later, not deliberately omitted). Each entry's
  `Episode N (2011)` and `Chapter N` page must be pinned from the Hunter x
  Hunter wiki; a One Piece page of the same title is no evidence, and the
  reverse holds too.

The wiki is read for facts only; no passages, dialogue, frames or scans enter
the repository. A decision the data cannot show, such as a gate delayed behind
an endpoint, a source-only entry or a deliberate omission, is a short comment
beside the entry. A removed card does not claim the bond ended, and no romance
or reciprocity is inferred.
