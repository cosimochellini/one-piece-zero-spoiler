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
#      5 gh or git failed, or the merge was refused
#      6 still behind main after 3 rebases
set -u
cd "$(dirname "$0")/.." || exit 5
PR=$1
H=$2

# Prints the conclusion of the `check` run on commit $1, once it has finished.
wait_check() {
  for _ in $(seq 80); do
    r=$(gh api "repos/{owner}/{repo}/commits/$1/check-runs?check_name=check" \
      -q '.check_runs[0] | "\(.status) \(.conclusion)"' 2>/dev/null)
    case $r in "completed "*) echo "${r#completed }"; return ;; esac
    sleep 30
  done
  echo timeout
}

# True when $1 contains origin/main, or misses only release commits: the
# release job pushes `chore(release)` touching package.json and its lockfile
# after every merge, and those change nothing under test.
behind_ok() {
  for c in $(git rev-list "$1..origin/main"); do
    git log -1 --format=%s "$c" | grep -q '^chore(release):' || return 1
    git diff-tree --no-commit-id --name-only -r "$c" |
      grep -qvE '^package(-lock)?\.json$' && return 1
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

# Author, author date and subject of each commit $1 adds to main: a rebase
# keeps all three.
commits() { git log --format='%an %at %s' "origin/main..$1"; }

for round in 1 2 3 4; do
  result=$(wait_check "$H")
  [ "$(gh pr view "$PR" --json headRefOid -q .headRefOid)" = "$H" ] ||
    { echo "head is no longer $H"; exit 4; }
  [ "$result" = success ] || { echo "check on $H: $result"; exit 3; }

  fetch
  behind_ok "$H" && break
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
    [ "$(gh pr view "$PR" --json headRefOid -q .headRefOid)" = "$H" ] ||
      { echo "head is no longer $H"; exit 4; }
    files=$(git merge-tree --write-tree --name-only --no-messages origin/main "$H" | tail -n +2)
    echo "rebase failed, rebase by hand. Conflicting files:"
    echo "${files:-(none against main as a whole: one commit of the branch conflicts)}"
    exit 2
  fi
  old=$H
  for _ in $(seq 20); do
    H=$(gh pr view "$PR" --json headRefOid -q .headRefOid)
    [ "$H" != "$old" ] && break
    sleep 3
  done
  # The new head must be the reviewed commits replayed, nothing pushed since.
  fetch
  if [ "$H" = "$old" ] || [ "$(commits "$H")" != "$(commits "$old")" ]; then
    echo "head $H is not $old rebased"
    exit 4
  fi
  echo "rebased onto main: $H"
done

gh pr ready "$PR" 2>/dev/null
gh pr merge "$PR" --squash --delete-branch --match-head-commit "$H" || exit 5
gh pr view "$PR" --json state,mergeCommit,closingIssuesReferences \
  -q '"\(.state) \(.mergeCommit.oid[:7]) closes: \([.closingIssuesReferences[].number])"'
