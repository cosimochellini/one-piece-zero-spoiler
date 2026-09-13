import { defineConfig } from 'react-doctor/api'

/**
 * Every rule react-doctor can run here runs at error severity, and the gate
 * treats every finding as blocking.
 *
 * A category severity re-stamps the rules that are already enabled; it never
 * activates an opt-out rule. The list below is therefore every rule that
 * ships disabled and applies to this stack: a React 19 app on TanStack Start,
 * with StyleX rather than Tailwind, no React Native, no react-three-fiber, no
 * WebGL. The families left out are left out for a reason:
 *
 * - `design`: upstream tags these test-noise, and they encode a different
 *   visual system from the one this site is built on.
 * - `project-analysis` (unused-export, unused-file, unused-dependency,
 *   circular-dependency): react-doctor honours .prettierignore, which hides
 *   src/routeTree.gen.ts, and that file is the only importer of the route
 *   modules. Every `Route` export would read as unused. fallow owns dead code,
 *   and its entry globs and that ignore are kept as one atomic pair.
 * - `jsx-props-no-spreading`: every StyleX call site is `{...stylex.props(…)}`.
 * - `react-in-jsx-scope`: the automatic JSX runtime is on (`jsx: react-jsx`).
 * - `forbid-component-props`, `jsx-max-depth`, `no-many-boolean-props`,
 *   `no-multi-comp`, `no-set-state`, `prefer-useReducer`: each needs a project
 *   decision this project has not made, or duplicates a ceiling ESLint already
 *   enforces.
 */
export default defineConfig({
  // One network call per dependency, at error severity, from a scan that reads
  // a third-party service: CI would turn red without a code change.
  supplyChain: { enabled: false },
  noScore: true,
  share: false,
  warnings: true,
  // Matches what scripts/react-doctor-gate.mjs decides from the JSON report, so
  // a bare `npx react-doctor` agrees with the gate.
  blocking: 'warning',
  // Audit mode: an inline disable comment cannot hide a finding from the gate.
  respectInlineDisables: false,
  categories: {
    Security: 'error',
    Bugs: 'error',
    Performance: 'error',
    Accessibility: 'error',
    Maintainability: 'error',
  },
  rules: {
    // The two call sites are `foldName(name).includes(needle)`, which is
    // String.prototype.includes over one folded name, not a scan of an array.
    // A Set cannot replace a substring search, and the rule reads the two the
    // same way.
    'react-doctor/js-set-map-lookups': 'off',

    // Accessibility
    'react-doctor/aria-braille-equivalent': 'error',
    'react-doctor/data-table-requires-accessible-name': 'error',
    'react-doctor/details-requires-summary': 'error',
    'react-doctor/empty-table-header': 'error',
    'react-doctor/fieldset-requires-legend': 'error',
    'react-doctor/html-xml-lang-mismatch': 'error',
    'react-doctor/iframe-title-unique': 'error',
    'react-doctor/loading-action-preserves-trigger': 'error',
    'react-doctor/no-aria-hidden-on-body': 'error',
    'react-doctor/no-aria-invalid-without-description': 'error',
    'react-doctor/no-controlled-selection-focus-effect': 'error',
    'react-doctor/no-duplicate-static-id-reference': 'error',
    'react-doctor/no-focusable-content-in-role-text': 'error',
    'react-doctor/no-nonresizable-textarea': 'error',
    'react-doctor/no-presentation-role-conflict': 'error',
    'react-doctor/no-reduced-motion-content-removal': 'error',
    'react-doctor/no-server-side-image-map': 'error',
    'react-doctor/no-skipped-heading-level': 'error',
    'react-doctor/no-ungated-tailwind-animation': 'error',

    // Bugs
    'react-doctor/activity-wraps-effect-heavy-subtree': 'error',
    'react-doctor/client-localstorage-no-version': 'error',
    'react-doctor/form-control-requires-name': 'error',
    'react-doctor/hooks-no-nan-in-deps': 'error',
    'react-doctor/no-cascading-set-state': 'error',
    'react-doctor/no-children-prop': 'error',
    'react-doctor/no-collapse-request-error-to-empty-state': 'error',
    'react-doctor/no-impure-call-at-module-scope': 'error',
    'react-doctor/no-jsx-element-type': 'error',
    'react-doctor/no-multi-component-file': 'error',
    'react-doctor/no-passive-request-owner-ref': 'error',
    'react-doctor/no-polymorphic-children': 'error',
    'react-doctor/no-render-prop-children': 'error',
    'react-doctor/no-unescaped-entities': 'error',
    'react-doctor/prefer-explicit-variants': 'error',
    'react-doctor/react-compiler-no-manual-memoization': 'error',
    'react-doctor/tanstack-start-no-direct-fetch-in-loader': 'error',

    // Maintainability
    'react-doctor/display-name': 'error',
    'react-doctor/hook-use-state': 'error',
    'react-doctor/jsx-boolean-value': 'error',
    'react-doctor/jsx-curly-brace-presence': 'error',
    'react-doctor/jsx-filename-extension': 'error',
    'react-doctor/jsx-fragments': 'error',
    'react-doctor/jsx-handler-names': 'error',
    'react-doctor/jsx-no-useless-fragment': 'error',
    'react-doctor/jsx-pascal-case': 'error',
    'react-doctor/no-clone-element': 'error',
    'react-doctor/no-generic-handler-names': 'error',
    'react-doctor/no-prop-types': 'error',
    'react-doctor/no-react-children': 'error',
    'react-doctor/prefer-es6-class': 'error',
    'react-doctor/prefer-function-component': 'error',
    'react-doctor/prefer-module-scope-pure-function': 'error',
    'react-doctor/prefer-module-scope-static-value': 'error',
    'react-doctor/self-closing-comp': 'error',
    'react-doctor/state-in-constructor': 'error',

    // Performance
    'react-doctor/js-cache-property-access': 'error',
    'react-doctor/js-combine-iterations': 'error',
    'react-doctor/js-early-exit': 'error',
    'react-doctor/js-flatmap-filter': 'error',
    'react-doctor/js-length-check-first': 'error',
    'react-doctor/js-tosorted-immutable': 'error',
    'react-doctor/no-array-index-key': 'error',
    'react-doctor/no-barrel-import': 'error',
    'react-doctor/no-scale-from-zero': 'error',
    'react-doctor/no-unbounded-animation-frame-loop': 'error',
    'react-doctor/no-usememo-simple-expression': 'error',
    'react-doctor/rendering-animate-svg-wrapper': 'error',
    'react-doctor/rendering-hoist-jsx': 'error',
    'react-doctor/rendering-svg-precision': 'error',
    'react-doctor/rendering-usetransition-loading': 'error',

    // Security
    'react-doctor/agent-tool-capability-risk': 'error',
    'react-doctor/artifact-baas-authority-surface': 'error',
    'react-doctor/firebase-query-filter-as-auth': 'error',
    'react-doctor/mcp-tool-capability-risk': 'error',
    'react-doctor/no-danger': 'error',
  },
})
