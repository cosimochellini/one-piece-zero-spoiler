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
