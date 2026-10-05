// The archive is TypeScript with a `~/` alias and extensionless imports. A
// plain Node script that wants to read the very modules the site ships needs
// a resolve hook for both, and `engines` already pins Node >= 24.18, where
// `registerHooks` and type stripping are available. Shared by every script
// that reads the archive rather than regenerating it from text.
import { existsSync } from 'node:fs'
// eslint-disable-next-line n/no-unsupported-features/node-builtins -- See the note above: `engines` pins Node >= 24.18.
import { registerHooks } from 'node:module'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

/** The repository root, one level above this script. */
export const ROOT = path.resolve(import.meta.dirname, '..')

/**
 * The file a failed import was reaching for, without its extension.
 * @param {string} specifier The specifier, already resolved through the alias.
 * @param {string | undefined} parent The importing module's URL.
 * @returns {null | string} The path, or `null` for a package specifier.
 */
function fileFor(specifier, parent) {
  if (specifier.startsWith('file:')) {
    return fileURLToPath(specifier)
  }

  if (parent !== undefined && specifier.startsWith('.')) {
    return path.resolve(path.dirname(fileURLToPath(parent)), specifier)
  }

  return null
}

/**
 * Teaches this process the two things the archive's own imports assume: that
 * `~/` means `src/`, and that a specifier with no extension names a `.ts` file.
 * @returns {void}
 */
function registerArchiveResolution() {
  registerHooks({
    resolve(specifier, context, nextResolve) {
      const aliased =
        specifier.startsWith('~/') ?
          pathToFileURL(path.join(ROOT, 'src', specifier.slice(2))).href
        : specifier

      try {
        return nextResolve(aliased, context)
      } catch (error) {
        const file = fileFor(aliased, context.parentURL)

        if (file === null || !existsSync(`${file}.ts`)) {
          throw error
        }

        return nextResolve(pathToFileURL(`${file}.ts`).href, context)
      }
    },
  })
}

/**
 * Imports one module of the archive by its path under `src/`.
 * @param {string} module The path under `src/`, e.g. `data/entities.ts`.
 * @returns {Promise<Record<string, unknown>>} The module's exports.
 */
export function importArchive(module) {
  registerArchiveResolution()

  return import(pathToFileURL(path.join(ROOT, 'src', module)).href)
}
