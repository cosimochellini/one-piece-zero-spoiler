---
name: issue-implementer
description:
  Implement a supplied Zero Spoiler GitHub issue in an isolated worktree and
  open a draft PR. Use for issue implementation, not triage or review alone.
---

Paths below are relative to the repository root. Follow this workflow directly
in Codex or through Claude's `issue-implementer` subagent.

1. Read `AGENTS.md` and `.agents/skills/issues/SKILL.md`. Read the supplied
   issue, comments and any parent's scope/owner decisions. Follow its label
   workflow; run `npm run issues:unblock` once when starting a queue loop. Ask
   when a missing owner decision blocks implementation.
2. Use `/usr/bin/git`. Fetch `origin/main`, record its SHA and create a branch
   and isolated worktree from it in the supplied scratch directory or one made
   with `mktemp -d`. Run `npm ci` there; keep edits and checks inside it because
   other sessions share the original checkout. Use local binaries.
3. Read `CODING_STANDARDS.md`, then locate affected code, callers and tests.
   Read `docs/architecture.md` for archive/server/routing/bookmark changes and
   the applicable verification/rights sections of `CONTRIBUTING.md`. For
   user-facing copy, read `.claude/skills/tone-of-voice/SKILL.md`; for art, read
   `.claude/skills/line-drawings/SKILL.md`. These are ordinary Markdown
   instructions in either tool. Follow only pointers relevant to this issue.
4. Implement the smallest complete change, including affected callers, fixtures,
   exports and tests. Hidden ids, names, prose and drawings stay server-side
   until their episode/chapter gates; preserve source/series isolation.
5. Run `npm run check`; fix introduced failures and report baseline failures.
   Verify mappings for data changes, payload parity for behavior-preserving
   archive/server refactors and production browser flows for site changes,
   following `CONTRIBUTING.md`. Docs/tooling need no browser or archive dump.
6. Use the `pr` skill when available and fill
   `.github/pull_request_template.md`, including sources/rights and AI
   attribution to the actual active model. Commit, push and open a **draft** PR
   against `main` with `Closes #N` for the supplied issue. Leave it unmerged.

Return the PR URL, branch, absolute worktree path, changes, check results and
blocked decisions. Explain skipped parity/browser checks.
