<!--
The title of this pull request is the version bump.

It is squashed into a single commit on `main`, and semantic-release reads that
subject to cut the tag and the GitHub Release. The `pr-title` check enforces it.

  type(optional-scope): subject
  type(optional-scope)!: subject   <- breaking, releases a major

  feat                          -> minor
  fix perf revert refactor      -> patch
  docs style test build ci chore-> patch

Everything below is for reviewers only: the squashed commit body is left blank.
-->

## What

## Why

## Sources and rights

<!-- CONTRIBUTING.md, "Sources and rights". Delete the lines that do not apply. -->

- Facts checked on:
  <!-- wiki page; chapter and page, or episode and timestamp -->
- Adapted wording:
  <!-- fields, revision link, license, notices, changes, credit -->
- Drawing references: <!-- chapter and page, or episode and timestamp -->
- AI help: <!-- which parts, and the sources its output was checked against -->

## How to verify

- [ ] `npm run check` passes locally
