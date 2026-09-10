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

  // This file and the gate scripts are not part of the TS program.
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // Prettier last so it wins every formatting conflict.
  prettierConfig,
)
