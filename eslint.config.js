import js from '@eslint/js'
import tanstackRouter from '@tanstack/eslint-plugin-router'
import prettierConfig from 'eslint-config-prettier/flat'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Global ignores. This object must carry no other key, otherwise the ignores
  // apply only to this config block instead of globally.
  {
    ignores: [
      'dist/**',
      'coverage/**',
      '.tanstack/**',
      '.output/**',
      '.nitro/**',
      '.netlify/**',
      '.gate/**',
      'src/routeTree.gen.ts',
    ],
  },

  js.configs.recommended,

  // Type-aware rules. No stylisticTypeChecked: Prettier owns formatting.
  ...tseslint.configs.strictTypeChecked,

  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // react-hooks v7 exposes `configs.flat.recommended` as a single object.
  {
    files: ['**/*.{ts,tsx}'],
    ...reactHooks.configs.flat.recommended,
  },

  // The router plugin exposes `configs['flat/recommended']` as an array.
  ...tanstackRouter.configs['flat/recommended'],

  // TanStack Router signals a redirect and a not-found by throwing a plain
  // object that the router catches and turns into a response. It is control
  // flow, not an error, and `only-throw-error` has no way to tell the two
  // apart, so the rule is switched off where route modules live rather than
  // silenced with a comment at each of the handful of call sites.
  {
    files: ['src/routes/**/*.tsx'],
    rules: {
      '@typescript-eslint/only-throw-error': 'off',
    },
  },

  // This file and the gate scripts are not part of the TS program.
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // Prettier last so it wins every formatting conflict.
  prettierConfig,
)
