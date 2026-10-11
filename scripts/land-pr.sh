#!/bin/bash
# Lands a reviewed pull request: waits for CI `check` on the reviewed head,
# rebases it on GitHub when main has moved, and squash-merges on green.
#
# usage: scripts/land-pr.sh <pr> <expected-head-sha>
#
# exit 0 merged
#      2 rebase conflict (the files are printed): rebase by hand
#      3 CI `check` did not pass
#      4 the head is no longer the one expected
#      5 bad arguments, a PR not open against main, gh or git failed, or the
#        merge or the rebase was refused for another reason
#      6 still behind main after 3 rebases
set -u
[ $# = 2 ] || { echo "usage: scripts/land-pr.sh <pr> <expected-head-sha>"; exit 5; }
cd "$(dirname "$0")/.." || exit 5
PR=$1
H=$2

# Prints the conclusion of the `check` run on commit $1, once it has finished.
wait_check() {
  for _ in $(seq 80); do
    r=$(gh api "repos/{owner}/{repo}/commits/$1/check-runs?check_name=check" \
      -q '.check_runs[0] | "\(.status) \(.conclusion)"') || return 1
    case $r in "completed "*) echo "${r#completed }"; return ;; esac
    sleep 30
  done
  echo timeout
}

# True when $1 contains origin/main, or misses only release commits: the
# release job pushes `chore(release)` touching package.json and its lockfile
# after every merge, and those change nothing under test.
behind_ok() {
  list=$(git rev-list "$1..origin/main") || exit 5
  for c in $list; do
    git log -1 --format=%s "$c" | grep -q '^chore(release):' || return 1
    git rev-parse -q --verify "$c^2" >/dev/null && return 1 # a merge
    files=$(git diff-tree --no-commit-id --name-only -r "$c") || exit 5
    [ -n "$files" ] || return 1
    echo "$files" | grep -qvE '^package(-lock)?\.json$' && return 1
  done
  return 0
}

# Fails unless $H is here: every git check below would pass on a missing head.
fetch() {
  if ! { git fetch -q origin main "pull/$PR/head" && git cat-file -e "$H^{commit}"; }; then
    echo "cannot fetch $H"
    exit 5
  fi
}

# The patch id of each commit $1 adds to main, oldest first: a rebase keeps
# them, an amend does not. A rebase that shifts a hunk's context lines changes
# one too, which stops the script for a human instead of merging.
patch_ids() {
  git log -p --reverse --format='commit %H' "origin/main..$1" |
    git patch-id --stable | cut -d' ' -f1
}

# The PR head. Callers exit 5 when gh fails.
pr_head() { gh pr view "$PR" --json headRefOid -q .headRefOid; }

pr=$(gh pr view "$PR" --json state,baseRefName -q '"\(.state) \(.baseRefName)"') || exit 5
[ "$pr" = "OPEN main" ] || { echo "PR $PR is not open against main: $pr"; exit 5; }

for round in 1 2 3 4; do
  result=$(wait_check "$H") || exit 5
  cur=$(pr_head) || exit 5
  [ "$cur" = "$H" ] || { echo "head is no longer $H"; exit 4; }
  [ "$result" = success ] || { echo "check on $H: $result"; exit 3; }

  fetch
  if behind_ok "$H"; then
    gh pr ready "$PR" 2>/dev/null
    # Main may have moved meanwhile: never merge without a check against it.
    fetch
    behind_ok "$H" && break
  fi
  [ "$round" = 4 ] && { echo "still behind main after 3 rebases"; exit 6; }

  # The mutation, not `gh pr update-branch`: that one reads the head itself,
  # so a commit pushed after the review would be rebased and merged with the
  # rest. expectedHeadOid makes GitHub refuse unless the head is still $H.
  id=$(gh pr view "$PR" --json id -q .id) || exit 5
  # shellcheck disable=SC2016 # $id and $sha are GraphQL variables
  if ! gh api graphql -f id="$id" -f sha="$H" -f query='
    mutation($id: ID!, $sha: GitObjectID!) {
      updatePullRequestBranch(input: {pullRequestId: $id, expectedHeadOid: $sha, updateMethod: REBASE}) { clientMutationId }
    }' >/dev/null; then
    cur=$(pr_head) || exit 5
    [ "$cur" = "$H" ] || { echo "head is no longer $H"; exit 4; }
    files=$(git merge-tree --write-tree --name-only --no-messages origin/main "$H" | tail -n +2)
    [ -n "$files" ] || { echo "rebase refused, and no file conflicts with main"; exit 5; }
    echo "rebase conflict, rebase by hand. Conflicting files:"
    echo "$files"
    exit 2
  fi
  old=$H
  for _ in $(seq 20); do
    H=$(pr_head) || exit 5
    [ "$H" != "$old" ] && break
    sleep 3
  done
  # The new head must be the reviewed commits replayed, nothing pushed since.
  fetch
  if [ "$H" = "$old" ] || [ "$(patch_ids "$H")" != "$(patch_ids "$old")" ]; then
    echo "head $H is not $old rebased"
    exit 4
  fi
  echo "rebased onto main: $H"
done

gh pr merge "$PR" --squash --delete-branch --match-head-commit "$H" || exit 5
gh pr view "$PR" --json state,mergeCommit,closingIssuesReferences \
  -q '"\(.state) \(.mergeCommit.oid[:7]) closes: \([.closingIssuesReferences[].number])"'
