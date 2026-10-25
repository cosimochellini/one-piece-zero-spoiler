---
name: issue-implementer
description:
  Implement one GitHub issue in an isolated worktree and open a draft PR. Give
  the issue number, owner decisions and the round's focus.
tools: Read, Glob, Grep, Bash, Edit, Write, Skill, WebFetch, WebSearch
model: opus
---

Implement the supplied issue in `cosimochellini/zero-spoiler`.

## Work

1. Read `AGENTS.md` and load `.agents/skills/issues/SKILL.md`. Read the issue,
   comments and the parent's scope/owner decisions when there is a parent.
   Follow the label workflow; run `npm run issues:unblock` once at the start of
   a queue loop. Ask when a missing owner decision blocks implementation.
2. Use `/usr/bin/git` for git commands. Fetch `origin/main`, record its SHA,
   then create a branch and isolated worktree from it in the supplied scratchpad
   (or `mktemp -d`). Run `npm ci` there. Keep all edits and checks in that
   worktree; parallel sessions share the original checkout. Use local binaries.
3. Read `CODING_STANDARDS.md`, locate the affected code with targeted searches,
   then read its callers and tests. Read `docs/architecture.md` for archive,
   server, routing or bookmark changes. Read only the relevant sections of
   `CONTRIBUTING.md`: archive verification for data/refactors, sources and
   rights for content/artwork. Load `tone-of-voice` for user-facing copy and
   `line-drawings` for artwork. Follow pointers only when they apply to this
   issue.
4. Implement the smallest complete change, including affected callers, fixtures,
   exports and tests. Hidden ids, names, prose and drawings stay on the server
   until their episode/chapter gates; preserve source/series isolation.

## Verify and deliver

- Run `npm run check`; fix failures introduced by this change and report others.
- Verify only affected behavior: archive mappings for data edits, base/head
  payload parity for behavior-preserving archive/server refactors, production
  browser checks for site changes. Use the corresponding verification sections
  of `CONTRIBUTING.md`; docs/tooling changes need no browser or archive dump.
- Load `pr` before writing the PR body. Fill the repository template, including
  sources/rights and AI help; use the actual active model for attribution.
- Commit, push and open a **draft** PR against `main` with `Closes #N` for the
  supplied issue. Leave it unmerged.

Return the PR URL, branch, absolute worktree path, changes, check results and
any blocked decisions. State why parity/browser checks do not apply when
skipped.
