import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintReact from '@eslint-react/eslint-plugin'
import js from '@eslint/js'
import stylex from '@stylexjs/eslint-plugin'
import tanstackRouter from '@tanstack/eslint-plugin-router'
import vitest from '@vitest/eslint-plugin'
import prettierConfig from 'eslint-config-prettier/flat'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import deMorgan from 'eslint-plugin-de-morgan'
import depend from 'eslint-plugin-depend'
import { importX } from 'eslint-plugin-import-x'
import jestDom from 'eslint-plugin-jest-dom'
import jsdoc from 'eslint-plugin-jsdoc'
import jsxA11y from 'eslint-plugin-jsx-a11y-x'
import n from 'eslint-plugin-n'
import noSecrets from 'eslint-plugin-no-secrets'
import perfectionist from 'eslint-plugin-perfectionist'
import promise from 'eslint-plugin-promise'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import noNeedlessEffect from 'eslint-plugin-react-you-might-not-need-an-effect'
import regexp from 'eslint-plugin-regexp'
import security from 'eslint-plugin-security'
import sonarjs from 'eslint-plugin-sonarjs'
import testingLibrary from 'eslint-plugin-testing-library'
import unicorn from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// The globs every scope below keys on, named once so two blocks cannot drift
// apart on what counts as a test, a route or a record.
const TS = ['**/*.{ts,tsx,mts,cts}']
const TSX = ['**/*.tsx']
const JS = ['**/*.{js,mjs,cjs}']
const TESTS = [
  'src/**/*.{test,spec}.{ts,tsx}',
  'scripts/**/*.{test,spec}.mjs',
  'src/test/**',
]
const ROUTES = ['src/routes/**/*.{ts,tsx}', 'src/router.tsx']
const SCRIPTS = ['scripts/**/*.mjs']
const CONFIGS = [
  'eslint.config.js',
  'vite.config.ts',
  'vitest.config.ts',
  'doctor.config.ts',
  'commitlint.config.mjs',
]
// Content, not code: the archive records, the drawings, the dictionaries and
// the design tokens. They are long by nature, every number in them is the
// value itself, and the same word recurs because the same word is correct.
const RECORDS = ['src/data/**', 'src/i18n/dictionaries/**']
const TOKENS = ['src/**/*.stylex.ts']

// Natural order, case-insensitive: the one order a reader reproduces without
// running a tool. `item2` before `item10`, `Ace` beside `ace`.
const NATURAL = { type: 'natural', order: 'asc', ignoreCase: true }

export default defineConfig(
  // Global ignores. `globalIgnores` is the only form that ignores rather than
  // scopes, which is why it is not folded into any block that carries `files`.
  globalIgnores([
    'dist/**',
    'coverage/**',
    '.tanstack/**',
    '.output/**',
    '.nitro/**',
    '.netlify/**',
    '.gate/**',
    'src/routeTree.gen.ts',
  ]),

  // A disable comment that no longer silences anything, and an inline config
  // that changes nothing, are both failures: they outlived their reason and
  // the next reader cannot tell that from the comment.
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
  },

  js.configs.recommended,

  // Type-aware rules. stylisticTypeChecked is in: its rules choose between
  // constructs (`type` over `interface`, `??` over `||`, `T[]` over
  // `Array<T>`), never whitespace, so Prettier has nothing to argue with.
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    files: TS,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // -------------------------------------------------------------------------
  // Size and shape. The numbers are the ceiling for a unit a reviewer can hold
  // in their head at once, not a target to grow into.
  // -------------------------------------------------------------------------
  {
    rules: {
      'complexity': ['error', 8],
      'max-depth': ['error', 3],
      'max-nested-callbacks': ['error', 3],
      'max-lines-per-function': [
        'error',
        { max: 60, skipBlankLines: true, skipComments: true, IIFEs: true },
      ],
      'max-lines': [
        'error',
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      'max-statements': ['error', 15],
      'no-console': 'error',
      'eqeqeq': ['error', 'always'],
      'default-case-last': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-implicit-coercion': 'error',
      'no-labels': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-useless-rename': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-object-has-own': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'require-atomic-updates': 'error',
      // Every component and every exported function is a declaration, so one
      // grep for `function Name` finds it. Arrow functions stay legal for
      // local helpers and callbacks.
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
          overrides: { namedExports: 'declaration' },
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message:
            'Enums are banned: erasableSyntaxOnly rejects them. Use a union of string literals, or an object with `as const`.',
        },
        {
          selector: 'ForInStatement',
          message:
            '`for…in` walks the prototype chain. Iterate Object.keys or Object.entries instead.',
        },
      ],
      // Every module reaches through the `~/` alias. A `../` import encodes
      // where the importer happens to live, which is the one thing a file
      // should stay free to change.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^\\.\\./',
              message:
                'Import through the `~/` alias instead of a parent-relative path.',
            },
          ],
        },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // TypeScript. The compiler already carries the signatures; these are the
  // rules it cannot enforce on its own.
  // -------------------------------------------------------------------------
  {
    files: TS,
    rules: {
      // An assertion is a claim the compiler is told not to check. `as const`
      // is exempt inside the rule itself, and it is the only survivor.
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'never' },
      ],
      // Stylistic prefers `x!` over `x as T`. Both are banned here, so the
      // rule could only ever recommend one banned form over another.
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      // Inline specifiers are the style already written here
      // (`import { DRAWINGS, type Stroke }`). no-import-type-side-effects is
      // the other half: under verbatimModuleSyntax an import whose every
      // specifier is a type would otherwise leave a runtime `import {}` behind.
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-exports': [
        'error',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          considerDefaultExhaustiveForUnions: true,
          requireDefaultForNonUnion: true,
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],
      // detectObjects stays false: a StyleX declaration is a table of values,
      // and `fontWeight: 800` is the value rather than a number standing in
      // for one. Drawing geometry belongs in ~/data/art, which is exempt.
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          enforceConst: true,
          detectObjects: false,
          ignoreNumericLiteralTypes: true,
          ignoreTypeIndexes: true,
          ignoreReadonlyClassProperties: true,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowIIFEs: true,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      // Off, and not for noise: it demands `readonly` on ReactNode, on router
      // params and on every third-party type in every signature, which cannot
      // be satisfied without the assertions banned above.
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        { allowConstantLoopConditions: 'only-allowed-literals' },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        { ignoreStringArrays: true },
      ],
      '@typescript-eslint/no-useless-empty-export': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': [
        'error',
        { ignoreTypeValueShadow: false },
      ],
      // The TypeScript variant understands a `this` parameter.
      'max-params': 'off',
      '@typescript-eslint/max-params': ['error', { max: 3 }],
    },
  },

  // -------------------------------------------------------------------------
  // React. eslint-plugin-react-hooks is the authority on hooks; eslint-react
  // covers everything else at its strictest, type-aware.
  // -------------------------------------------------------------------------
  { files: ['**/*.{ts,tsx}'], ...reactHooks.configs.flat.recommended },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintReact.configs['strict-type-checked']],
    settings: { 'react-x': { version: '19.3.0', importSource: 'react' } },
    rules: {
      // eslint-plugin-react-hooks owns these two. A second copy of each report
      // helps nobody, and the two plugins disagree on edge cases.
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/exhaustive-deps': 'off',
      // In `all` but not in `strict-type-checked`, and all four apply here.
      '@eslint-react/no-duplicate-key': 'error',
      '@eslint-react/no-unused-state': 'error',
      '@eslint-react/dom-no-string-style-prop': 'error',
      '@eslint-react/dom-no-unknown-property': 'error',
    },
  },
  { files: TSX, extends: [jsxA11y.configs.strict] },
  { files: TSX, extends: [noNeedlessEffect.configs.recommended] },
  // Vite refreshes a module in place only when every export is a component; a
  // hook exported beside a provider throws the whole tree away on each edit.
  {
    files: TSX,
    extends: [reactRefresh.configs.vite],
    rules: {
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],
    },
  },

  // The router plugin exposes `configs['flat/recommended']` as an array.
  tanstackRouter.configs['flat/recommended'],

  // -------------------------------------------------------------------------
  // StyleX. The plugin ships rules and no preset. `enforce-extension` is the
  // compiler's contract: defineVars only compiles inside a *.stylex.ts.
  // `sort-keys` orders by CSS property priority, which is the reason
  // perfectionist's sort-objects is deliberately absent further down.
  // -------------------------------------------------------------------------
  {
    files: TS,
    plugins: { '@stylexjs': stylex },
    rules: {
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/valid-shorthands': 'error',
      '@stylexjs/sort-keys': ['error', { allowLineSeparatedGroups: true }],
      '@stylexjs/no-unused': 'error',
      '@stylexjs/no-legacy-contextual-styles': 'error',
      '@stylexjs/enforce-extension': 'error',
    },
  },

  // -------------------------------------------------------------------------
  // Unicorn, everything on. The four exceptions below are rules that
  // contradict React, TanStack file routing or the DOM, not rules that are
  // merely inconvenient.
  // -------------------------------------------------------------------------
  unicorn.configs.all,
  {
    rules: {
      // v74 renamed prevent-abbreviations to name-replacements. A `false`
      // exempts the word itself, so `dialogRef` and `ButtonProps` pass along
      // with the bare `ref` and `props`.
      'unicorn/name-replacements': [
        'error',
        {
          checkFilenames: true,
          replacements: {
            props: false,
            ref: false,
            refs: false,
            params: false,
            args: false,
            env: false,
            dir: false,
            i18n: false,
          },
        },
      ],
      // Three cases coexist by convention: PascalCase components, camelCase
      // modules, kebab-case records and scripts. TanStack file routing owns
      // `$locale.tsx`, `__root.tsx` and the `-` prefix that keeps a helper out
      // of the route tree.
      'unicorn/filename-case': [
        'error',
        {
          cases: { camelCase: true, kebabCase: true, pascalCase: true },
          ignore: [/^\$[A-Za-z]+(\.[a-z]+)?\.tsx?$/u, /^__root\.tsx$/u, /^-/u],
        },
      ],
      // The repo documents itself in JSDoc blocks: `*`-prefixed lines, prose
      // wrapped by hand at the print width. These three rewrite that into a
      // different comment style and would undo 158 doc blocks.
      'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
      'unicorn/single-line-block-comment-style': 'off',
      'unicorn/no-manually-wrapped-comments': 'off',
      // React returns, accepts and stores `null`: `useRef(null)`,
      // `createContext(null)`, a component that renders nothing. The bookmark
      // type uses it for "not set yet".
      'unicorn/no-null': 'off',
      // A boolean prop mirrors the DOM attribute it drives: `open`,
      // `disabled`, `hidden`. Renaming them `isOpen` puts the component API at
      // odds with `<dialog open>`.
      'unicorn/consistent-boolean-name': 'off',
    },
  },

  // -------------------------------------------------------------------------
  // SonarJS: bug patterns and cognitive complexity.
  // -------------------------------------------------------------------------
  sonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/cognitive-complexity': ['error', 10],
      'sonarjs/no-duplicate-string': ['error', { threshold: 3 }],
      'sonarjs/todo-tag': 'error',
      'sonarjs/fixme-tag': 'error',
      // @typescript-eslint/no-deprecated reports the same thing with the type
      // checker behind it.
      'sonarjs/deprecation': 'off',
    },
  },

  // -------------------------------------------------------------------------
  // Imports: cycles, boundaries, resolution. Ordering belongs to perfectionist.
  // -------------------------------------------------------------------------
  importX.flatConfigs.recommended,
  {
    files: TS,
    extends: [importX.flatConfigs.typescript],
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: `${import.meta.dirname}/tsconfig.json`,
        }),
      ],
    },
  },
  {
    rules: {
      'import-x/order': 'off',
      'import-x/no-cycle': ['error', { ignoreExternal: true }],
      'import-x/no-default-export': 'error',
      // Off: the resolver turns every `~/` alias into a parent-relative path,
      // so this fires on 200 imports that are exactly the form we want. The
      // `no-restricted-imports` pattern above bans the real `../`.
      'import-x/no-relative-parent-imports': 'off',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'import-x/no-mutable-exports': 'error',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      // consistent-type-imports with inline specifiers already decides where
      // `type` goes; this rule would pull the other way.
      'import-x/consistent-type-specifier-style': 'off',
      // StyleX documents `import * as stylex`, and the compiler recognises the
      // namespace binding. Thirty-odd files depend on it.
      'import-x/no-namespace': 'off',
      'import-x/no-extraneous-dependencies': [
        'error',
        { devDependencies: [...TESTS, ...CONFIGS, ...SCRIPTS] },
      ],
    },
  },

  // -------------------------------------------------------------------------
  // Perfectionist: one order for everything that has no order of its own.
  // Not sort-objects: StyleX sorts declarations by CSS property priority, and
  // the records read in the order the story tells them.
  // -------------------------------------------------------------------------
  {
    plugins: { perfectionist },
    rules: {
      // No type/value modifier in the groups, so `import type { Stroke }` sorts
      // beside `import { DRAWINGS }` from the same module, which is how these
      // files are already written. Side-effect imports are in no group and
      // `sortSideEffects` is off by default, so `import '~/styles/global.css'`
      // stays where the document needs it.
      'perfectionist/sort-imports': [
        'error',
        {
          ...NATURAL,
          newlinesBetween: 1,
          internalPattern: ['^~/.*'],
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-named-imports': ['error', NATURAL],
      'perfectionist/sort-named-exports': ['error', NATURAL],
      'perfectionist/sort-exports': ['error', NATURAL],
      'perfectionist/sort-interfaces': ['error', NATURAL],
      // A blank line or a comment opens a new partition, so a type whose
      // fields are grouped on purpose keeps its groups.
      'perfectionist/sort-object-types': [
        'error',
        { ...NATURAL, partitionByNewLine: true, partitionByComment: true },
      ],
      'perfectionist/sort-union-types': [
        'error',
        { ...NATURAL, partitionByNewLine: true, partitionByComment: true },
      ],
      'perfectionist/sort-intersection-types': ['error', NATURAL],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          ...NATURAL,
          customGroups: [{ groupName: 'key', elementNamePattern: '^key$' }],
          groups: ['key', 'unknown'],
        },
      ],
      'perfectionist/sort-switch-case': ['error', NATURAL],
    },
  },

  // Regular expressions, boolean algebra, promises.
  regexp.configs['flat/recommended'],
  {
    rules: {
      'regexp/require-unicode-regexp': 'error',
      'regexp/prefer-named-capture-group': 'error',
    },
  },
  deMorgan.configs.recommended,
  promise.configs['flat/recommended'],
  {
    rules: {
      'promise/prefer-await-to-then': 'error',
      'promise/prefer-await-to-callbacks': 'error',
    },
  },

  // A disable without a reason is a disable that outlives its reason.
  comments.recommended,
  {
    rules: {
      '@eslint-community/eslint-comments/require-description': 'error',
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: false },
      ],
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
    },
  },

  // Security, dependency hygiene, secrets.
  security.configs.recommended,
  {
    rules: {
      // Fires on every `record[key]`. noUncheckedIndexedAccess and typed keys
      // already prove what this rule can only guess at.
      'security/detect-object-injection': 'off',
    },
  },
  depend.configs['flat/recommended'],
  {
    plugins: { 'no-secrets': noSecrets },
    rules: { 'no-secrets/no-secrets': ['error', { tolerance: 4 }] },
  },

  // -------------------------------------------------------------------------
  // JSDoc. Every export says what it is for in prose. The types live in the
  // signature, so `@param` and `@returns` are not required and a type inside a
  // tag is an error. `informative-docs` rejects "The Foo" as the doc of `Foo`.
  // -------------------------------------------------------------------------
  {
    files: TS,
    extends: [jsdoc.configs['flat/recommended-typescript-error']],
    rules: {
      'jsdoc/require-jsdoc': [
        'error',
        {
          publicOnly: true,
          require: {
            FunctionDeclaration: true,
            FunctionExpression: false,
            ArrowFunctionExpression: false,
            ClassDeclaration: true,
            MethodDefinition: true,
          },
          contexts: ['TSTypeAliasDeclaration'],
          enableFixer: false,
        },
      ],
      'jsdoc/require-description': ['error', { contexts: ['any'] }],
      'jsdoc/no-types': 'error',
      'jsdoc/check-tag-names': ['error', { typed: true }],
      'jsdoc/informative-docs': 'error',
      'jsdoc/check-param-names': 'error',
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/no-blank-blocks': 'error',
      'jsdoc/tag-lines': 'off',
    },
  },

  // -------------------------------------------------------------------------
  // Scope overrides. Each block names what it relaxes and why; anything not
  // listed stays exactly as strict as it is above.
  // -------------------------------------------------------------------------

  // Tests: everything vitest can check, plus the DOM-aware plugins. The gate
  // scripts' tests are plain .mjs outside the TypeScript program, so they get
  // the syntactic preset only and the type-aware rules stay off there.
  {
    files: ['src/**/*.{test,spec}.{ts,tsx}', 'src/test/**/*.{ts,tsx}'],
    extends: [
      vitest.configs.all,
      testingLibrary.configs['flat/react'],
      jestDom.configs['flat/recommended'],
    ],
    languageOptions: { globals: vitest.environments.env.globals },
    settings: { vitest: { typecheck: true } },
    rules: {
      // `expect(spy.method)` is the one case vitest's copy of the rule reads
      // correctly, so the base rule steps aside for it.
      '@typescript-eslint/unbound-method': 'off',
      'vitest/unbound-method': 'error',
    },
  },
  {
    files: ['scripts/**/*.{test,spec}.mjs'],
    extends: [vitest.configs.recommended],
    languageOptions: { globals: vitest.environments.env.globals },
  },

  // The relaxations, after the presets so they win. A test reads top to bottom
  // as one scenario, so the per-unit size limits have nothing useful to say; a
  // test asserts the shape it set up, and repeats the strings it checks for.
  {
    files: TESTS,
    rules: {
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-statements': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'jsdoc/require-jsdoc': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'vitest/consistent-test-it': [
        'error',
        { fn: 'it', withinDescribe: 'it' },
      ],
      'vitest/max-nested-describe': ['error', { max: 2 }],
      // A render assertion checks several things about one render; five is the
      // jest-era default and it splits scenarios that belong together.
      'vitest/max-expects': ['error', { max: 12 }],
      // `describe('SpoilerVeil')` names the unit; `it('hides …')` is a
      // sentence about it.
      'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
      // Vitest's `expect(value, message)` second argument names the case in a
      // loop. The rule is a jest port and does not know about it.
      'vitest/valid-expect': ['error', { alwaysAwait: true, maxArgs: 2 }],
      // Off: `describe` here names a behaviour or a file, not always an
      // imported symbol, and passing the symbol would only work where one
      // exists.
      'vitest/prefer-describe-function-title': 'off',
      // Snapshots are not used here, and a rule cannot ask for a hint on a
      // thing that does not exist.
      'vitest/prefer-snapshot-hint': 'off',
      // These three want every statement moved into a hook, or an assertion
      // count declared up front, or no hooks at all. None of them makes a
      // scenario that reads top to bottom easier to read.
      'vitest/require-hook': 'off',
      'vitest/no-hooks': 'off',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/prefer-called-exactly-once-with': 'off',
      // The drawings are `aria-hidden` by design, so they expose no role, no
      // label and no text: `container.querySelectorAll('path')` is the only
      // way to assert on them. Testing Library has no query for an SVG shape.
      'testing-library/no-container': 'off',
      'testing-library/no-node-access': 'off',
    },
  },

  // Route modules. TanStack Router signals a redirect and a not-found by
  // throwing a plain object that the router catches and turns into a response.
  // It is control flow, not an error, and only-throw-error cannot tell them
  // apart. `Route` is the one non-component export file routing requires, and
  // a route's documentation is its path.
  {
    files: ROUTES,
    rules: {
      '@typescript-eslint/only-throw-error': 'off',
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true, allowExportNames: ['Route'] },
      ],
      'jsdoc/require-jsdoc': 'off',
    },
  },

  // Records, drawings, dictionaries, tokens: content rather than code.
  {
    files: RECORDS,
    rules: {
      'max-lines': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'sonarjs/no-duplicate-string': 'off',
      // A path string is high-entropy by construction and reads like a key.
      'no-secrets/no-secrets': 'off',
    },
  },
  { files: TOKENS, rules: { '@typescript-eslint/no-magic-numbers': 'off' } },

  // Config files: the tool that reads each one expects a default export.
  {
    files: CONFIGS,
    rules: {
      'import-x/no-default-export': 'off',
      'jsdoc/require-jsdoc': 'off',
    },
  },

  // Plain JavaScript: this file and the gate scripts are outside the TS
  // program, so the type-aware rules have nothing to read.
  { files: JS, extends: [tseslint.configs.disableTypeChecked] },

  // Gate scripts: Node CLIs whose contract with CI is an exit code and a line
  // on stdout, and whose job is to run other CLIs over paths they compute.
  // That is exactly what the child-process and filesystem rules exist to flag
  // in application code. JSDoc tags are the only types these files have, so
  // the typescript-flavor preset applies instead of `no-types`.
  {
    files: SCRIPTS,
    extends: [
      n.configs['flat/recommended-module'],
      jsdoc.configs['flat/recommended-typescript-flavor-error'],
    ],
    languageOptions: { globals: globals.node },
    rules: {
      'no-console': 'off',
      'n/no-process-exit': 'off',
      'unicorn/no-process-exit': 'off',
      'security/detect-child-process': 'off',
      'security/detect-non-literal-fs-filename': 'off',
      'sonarjs/no-os-command-from-path': 'off',
      'sonarjs/os-command': 'off',
      'jsdoc/require-jsdoc': 'off',
    },
  },

  // Prettier last, so it wins every formatting disagreement. It switches
  // `curly` off, because Prettier cannot re-indent a body it did not brace.
  // With `all` there is nothing left to disagree about, so the rule comes back
  // on immediately after.
  prettierConfig,
  { rules: { curly: ['error', 'all'] } },
)
