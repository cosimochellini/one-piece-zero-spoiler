#!/bin/bash
# Lands a reviewed pull request: waits for CI `check` on the reviewed head and
# squash-merges it on green. Main moving on is fine: the merge goes ahead
# whenever GitHub reports no conflict, and the branch is synced with main only
# when it conflicts, by hand (landing-prs skill).
#
# usage: scripts/land-pr.sh <pr> <expected-head-sha>
#
# exit 0 merged, also when GitHub had merged it first
#      2 conflict with main (the files are printed): merge main into the
#        branch by hand. Checked before waiting for CI, as GitHub starts no
#        run on a conflicting PR, and again after it, as main may have moved
#      3 CI `check` did not pass. A cancelled run is waited out, as a newer
#        run on the same head cancels it; one never followed times out
#      4 the head is no longer the one expected
#      5 bad arguments, a PR not open against main, gh or git failed, or the
#        merge was refused for another reason
set -u
[ $# = 2 ] || { echo "usage: scripts/land-pr.sh <pr> <expected-head-sha>"; exit 5; }
cd "$(dirname "$0")/.." || exit 5
PR=$1
H=$2

# Prints the conclusion of the newest `check` run on commit $1, once it has
# finished. `gh pr ready`, a PR body edit or a re-run cancel the run in flight
# and start a newer one, so a cancelled run is not final.
wait_check() {
  for _ in $(seq 80); do
    r=$(gh api "repos/{owner}/{repo}/commits/$1/check-runs?check_name=check" \
      -q '.check_runs | max_by(.id) | "\(.status) \(.conclusion)"') || return 1
    case $r in
      "completed cancelled") ;;
      "completed "*) echo "${r#completed }"; return ;;
    esac
    sleep 30
  done
  echo timeout
}

# Fails unless $H is here: every git check below would pass on a missing head.
fetch() {
  if ! { git fetch -q origin main "pull/$PR/head" && git cat-file -e "$H^{commit}"; }; then
    echo "cannot fetch $H"
    exit 5
  fi
}

# The PR head. Callers exit 5 when gh fails.
pr_head() { gh pr view "$PR" --json headRefOid -q .headRefOid; }

# What GitHub says about merging the PR into main: MERGEABLE, CONFLICTING, or
# UNKNOWN while it is still computing, which is read again for up to 30s.
# Callers exit 5 when gh fails.
mergeable() {
  for _ in $(seq 10); do
    m=$(gh pr view "$PR" --json mergeable -q .mergeable) || return 1
    [ "$m" = UNKNOWN ] || break
    sleep 3
  done
  echo "$m"
}

pr=$(gh pr view "$PR" --json state,baseRefName -q '"\(.state) \(.baseRefName)"') || exit 5
[ "$pr" = "OPEN main" ] || { echo "PR $PR is not open against main: $pr"; exit 5; }

# Exits 2 naming the files $H conflicts on with origin/main. GitHub's answer
# decides when to look: MERGEABLE goes on, CONFLICTING and an UNKNOWN that
# outlasted mergeable() are settled by git. A conflict GitHub reports but git
# does not find exits 5. GitHub starts no CI run on a conflicting head, so
# waiting for `check` there would only run out the clock.
stop_on_conflict() {
  m=$(mergeable) || exit 5
  [ "$m" = MERGEABLE ] && return 0
  cur=$(pr_head) || exit 5
  [ "$cur" = "$H" ] || { echo "head is no longer $H"; exit 4; }
  fetch
  files=$(git merge-tree --write-tree --name-only --no-messages origin/main "$H" | tail -n +2)
  if [ -n "$files" ]; then
    echo "conflict with main, merge main into the branch by hand. Conflicting files:"
    echo "$files"
    exit 2
  fi
  [ "$m" = CONFLICTING ] && { echo "GitHub reports a conflict, and no file conflicts with main"; exit 5; }
  return 0
}

stop_on_conflict
result=$(wait_check "$H") || exit 5
cur=$(pr_head) || exit 5
[ "$cur" = "$H" ] || { echo "head is no longer $H"; exit 4; }
[ "$result" = success ] || { echo "check on $H: $result"; exit 3; }
stop_on_conflict
gh pr ready "$PR" 2>/dev/null

# No --delete-branch: GitHub deletes the remote branch on merge, and the flag
# would also delete local branches, worktrees of parallel sessions included.
if ! gh pr merge "$PR" --squash --match-head-commit "$H"; then
  # GitHub may be merging it already ("Merge already in progress"), and the
  # state reads OPEN until that finishes.
  for _ in $(seq 5); do
    s=$(gh pr view "$PR" --json state,headRefOid -q '"\(.state) \(.headRefOid)"') || exit 5
    [ "$s" = "MERGED $H" ] && break
    sleep 3
  done
  [ "$s" = "MERGED $H" ] || exit 5
fi
echo "merged $H"
gh pr view "$PR" --json state,mergeCommit,closingIssuesReferences \
  -q '"\(.state) \(.mergeCommit.oid[:7]) closes: \([.closingIssuesReferences[].number])"' || true
