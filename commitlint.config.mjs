/**
 * Conventional Commits for local commits, in front of the pull request title
 * gate that CI runs.
 *
 * The type list is imported from that gate rather than copied. The gate is
 * already asserted against .releaserc.json by its own test, so all three stay
 * in lockstep by construction, and scripts/commitlint-parity.test.mjs checks
 * the resolved configuration end to end.
 */
import { MAX_TITLE_LENGTH, TYPE_BUMPS } from './scripts/validate-pr-title.mjs'

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', Object.keys(TYPE_BUMPS)],
    // The same ceiling as the pull request title, because a squash merge turns
    // that title into the commit subject. Seventy-two would make a local
    // commit stricter than the thing it becomes.
    'header-max-length': [2, 'always', MAX_TITLE_LENGTH],
    'scope-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
  },
}
