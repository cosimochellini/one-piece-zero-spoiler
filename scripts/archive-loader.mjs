// The archive is TypeScript with a `~/` alias and extensionless imports. A
// plain Node script that wants to read the very modules the site ships needs
// a resolve hook for both, and `engines` already pins Node >= 24.21, where
// `registerHooks` and type stripping are available. Shared by every script
// that reads the archive rather than regenerating it from text.
import { existsSync } from 'node:fs'
// eslint-disable-next-line n/no-unsupported-features/node-builtins -- See the note above: `engines` pins Node >= 24.21.
import { registerHooks } from 'node:module'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

/** The repository root, one level above this script. */
// fallow-ignore-next-line security-sink -- a constant: this script's own folder
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
    // fallow-ignore-next-line security-sink -- the specifier is an import written in this repository's own source, never outside input
    return path.resolve(path.dirname(fileURLToPath(parent)), specifier)
  }

  return null
}

/**
 * The files an extensionless specifier can name: a `.ts` module, or the
 * `index.ts` of a directory, as `./fruits` is.
 * @param {string} file The path the specifier resolves to.
 * @returns {string[]} The candidates, in the order they are tried.
 */
function filesFor(file) {
  // fallow-ignore-next-line security-sink -- the path was resolved from an import written in this repository's own source
  return [`${file}.ts`, path.join(file, 'index.ts')]
}

/**
 * Teaches this process the two things the archive's own imports assume: that
 * `~/` means `src/`, and that a specifier with no extension names a `.ts` file
 * or a directory's `index.ts`.
 * @returns {void}
 */
function registerArchiveResolution() {
  registerHooks({ resolve: resolveArchive })
}

/**
 * The resolve hook: the alias first, then the `.ts` file a specifier with no
 * extension names, or the `index.ts` of the directory it names, when the
 * plain resolution fails and that file exists.
 * @param {string} specifier The specifier as written.
 * @param {{ parentURL?: string }} context The importing module.
 * @param {(specifier: string, context: { parentURL?: string }) => unknown} nextResolve The next hook in the chain.
 * @returns {unknown} What the next hook resolves.
 */
export function resolveArchive(specifier, context, nextResolve) {
  const aliased =
    specifier.startsWith('~/') ?
      // fallow-ignore-next-line security-sink -- the specifier is an import written in this repository's own source, never outside input
      pathToFileURL(path.join(ROOT, 'src', specifier.slice(2))).href
    : specifier

  try {
    return nextResolve(aliased, context)
  } catch (error) {
    const file = fileFor(aliased, context.parentURL)
    const module =
      file === null ? undefined : (
        filesFor(file).find((candidate) => existsSync(candidate))
      )

    if (module === undefined) {
      throw error
    }

    return nextResolve(pathToFileURL(module).href, context)
  }
}

/**
 * Imports one module of the archive by its path under `src/`.
 * @param {string} module The path under `src/`, e.g. `data/entities.ts`.
 * @returns {Promise<Record<string, unknown>>} The module's exports.
 */
export function importArchive(module) {
  registerArchiveResolution()

  // fallow-ignore-next-line security-sink -- the module is a path under src/ named by a script in this repository
  return import(pathToFileURL(path.join(ROOT, 'src', module)).href)
}
