---
name: landing-prs
description: How a pull request goes from opened to merged in Zero Spoiler, through fresh review rounds and `scripts/land-pr.sh`. Load it before you review, fix review findings on, or merge a pull request.
---

# Landing pull requests

A pull request lands in two parts: review rounds until no P0–P2 is left, then the merge. The owner set these rules on 2026-10-24 and 2026-10-31.

## 1. Review rounds

- Each round is a **fresh** reviewer with zero context: the `pr-reviewer` subagent (`.claude/agents/pr-reviewer.md`), which runs `gh-pr-no-checkout-review`. Use `pr-reviewer-structural` (Opus) when the PR changes the engine, the spoiler logic, routing or the data model.
- The prompt names the PR, lists the owner's decisions so the reviewer does not re-flag them, and asks for the full P0–P3 report as the reviewer's **final message**.
- A P0, P1 or P2 finding is fixed without asking the owner. Push the fix, then start a new fresh round.
- A finding marked `Structural: yes` gets one extra review with `pr-reviewer-structural` before the merge.
- When a round reports **no P0–P2**, the rounds are over. Fixing its P3 findings is your call; a P3 fix, whatever it touches, goes straight to the merge with no further round.

Done when the last round reported no P0–P2 and every fix after it is pushed.

## 2. Merge

Merge only when the owner, or the orchestrator running your loop, told you to land this pull request. Otherwise an issue PR stays a draft and you stop after the last round (`CONTRIBUTING.md`, "Delivery and agents").

1. Put `Closes #N` and any `client-budget:` line in the body before the last push: CI reads the body from the push's event.
2. `gh pr ready <pr>`, then `scripts/land-pr.sh <pr> <head-sha>`. It waits for the `check` run on that head and squash-merges it.
3. **Main moving on is fine.** The script merges whenever GitHub reports no conflict, however far main has moved. Sync with main only on a conflict (exit 2, the conflicting files printed):
   - `git merge origin/main` in the branch, resolve the files, `npm run check`;
   - push, and run the script again with the new head: it waits for CI itself.

   A merge that keeps both sides as they were needs no new review round. One that needed new code to fit them together gets one fresh round on the new head.

   A merge, not a rebase: it keeps the reviewed commits and the commit links in the PR body, and the squash flattens it anyway.
4. On the script's other exits:
   - 3, the `check` run failed: fix it, push, and run the script with the new head;
   - 4, the head moved after the review: find out what was pushed, and review it unless it is your own P3 fix;
   - 5, refused or a bad PR state: read the output before you run anything again.
5. Check that the issue closed, then remove the worktree.

During a GitHub Actions incident (runs cancelled before any step), a green local `npm run check` on the branch stands in for CI, and the merge is `gh pr merge <pr> --squash --match-head-commit <head-sha>`. The same conflict rule applies.

Done when `gh pr view <pr>` reads MERGED and the issue is closed.
