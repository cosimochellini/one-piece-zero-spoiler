# Agents

## Issues

Agents take their work from GitHub issues by label. Load the `issues` skill
(`.agents/skills/issues/SKILL.md`) before you open, split, pick up, triage or
relabel an issue.

- Every issue carries one `type:`, `area:`, `status:`, `priority:` and `size:`
  label; an epic has no `size:`. The labels live in `.github/labels.json`; after
  editing that file, run `npm run labels:sync`.
- A loop that picks up issues starts with `npm run issues:unblock`.

## Pull requests

Load the `landing-prs` skill (`.agents/skills/landing-prs/SKILL.md`) before you
review, fix review findings on, or merge a pull request.
