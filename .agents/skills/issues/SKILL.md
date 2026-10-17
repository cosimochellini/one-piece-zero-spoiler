---
name: issues
description: How GitHub issues are labelled, written and moved through Zero Spoiler's work queue. Load it before you open, split, pick up, triage or relabel an issue.
---

# Issues

Agents take their work from the issue list by label, so every issue is a queue entry the next agent finds with one `gh` query and starts without your session's context. Each issue carries exactly one label from each of five groups. `.github/labels.json` is the source of truth. The hook `scripts/issue-hook.mjs` refuses a `gh issue create` that breaks this rule.

## Labels

| Group       | Values                                                                     | Pick                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:`     | `bug`, `feature`, `content`, `docs`, `chore`, `epic`                       | `content` is what the site shows: records, drawings, prose. `epic` is a parent whose work lives in sub-issues.                                                  |
| `area:`     | `art`, `records`, `chronicle`, `i18n`, `ui`, `server`, `tooling`, `ci`     | Where the change lands. When it lands in two areas, pick the one a reviewer must know best.                                                                    |
| `status:`   | `triage`, `ready`, `blocked`, `needs-decision`, `in-progress`              | See [Moving an issue](#moving-an-issue).                                                                                                                        |
| `priority:` | `p0`, `p1`, `p2`, `p3`                                                     | `p0`: a spoiler is live on the site, or the site or CI is down. `p1`: wrong content or a broken feature, no spoiler. `p2`: normal work. `p3`: nice to have.     |
| `size:`     | `s`, `m`, `l`                                                              | `s`: one file or one rule. `m`: one pull request with tests. `l`: more than one pull request, so split it into an epic. An epic carries no `size:`.             |

`good first issue`, `help wanted` and `accessibility` can go on top of the five. Semantic-release adds `released`.

## Writing an issue

- **Title**: the change in plain words, without the spoiler. Titles are public and show up in notifications: "Redraw a place once its chapter airs", with the place named only in the body when the name itself spoils.
- **Body**: `## What`, `## Why`, `## How to verify`. Name the files, record ids, episode/chapter pairs and the commands that prove it is done. The agent that picks it up knows only the body.
- **Blocked work**: one line starting `Unblocks at:` listing every condition, comma-separated. All of them must hold:
  - `ch. 1178`: an episode adapts chapter 1178;
  - `ch. 1151 p. 9`: an episode adapts page 9 (use this when the episode before has already adapted part of the chapter);
  - `#656`: issue 656 is closed.

```sh
gh issue create --title "…" --body-file body.md \
  --label type:content,area:art,status:blocked,priority:p2,size:s
```

## Moving an issue

- **Starting a loop**: run `npm run issues:unblock` first. It moves each blocked issue whose conditions all hold to `status:ready` and comments with the episode that unblocked it.
- **Picking**: take the first match of `gh issue list --label status:ready --json number,title,labels`, ordered by `priority:` (p0 first) and then by `size:` (s first). Skip any `size:l` issue; split it instead.
- **Taking it**: `gh issue edit N --remove-label status:ready --add-label status:in-progress`, then `Closes #N` in the pull request body.
- **Stopping halfway**: put it back to `status:ready` with a comment on what is done and what is left.
- **A ruling only the owner can give**: `status:needs-decision`, with the question and your recommendation in a comment.
- **Triage**: an issue with `status:triage` came from the web, from Codex or from a template. Set the other four groups from its body, then move it to `ready`, `blocked` (and add the `Unblocks at:` line) or `needs-decision`.

## Splitting an `l`

Retype the issue as `type:epic`, remove its `size:` label, and open each piece as a sub-issue with its own five labels:

```sh
gh issue create --parent 523 --title "…" --body-file body.md --label …
```

The epic stays `status:in-progress` until its last sub-issue closes.
