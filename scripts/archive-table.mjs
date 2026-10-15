// A stable, line-oriented archive dump for before/after diffs. Dated entries
// deliberately retain their order and duplicates: each one is an archive fact.
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { importArchive } from './archive-loader.mjs'

/**
 * Validates the command line before loading the archive.
 * @param {string[]} args The arguments after the script name.
 * @returns {boolean} Whether only dated entries were requested.
 */
export function datedOnly(args) {
  for (const argument of args) {
    if (argument !== '--dated-only') {
      throw new Error(
        `Unsupported argument: ${argument}. Usage: archive:table [--dated-only]`,
      )
    }
  }

  return args.includes('--dated-only')
}

/**
 * Formats facts without sorting or deduplicating the archive.
 * @param {object} archive The archive's mappings and dated entries.
 * @param {number} archive.chapterCeiling The last chapter to print, inclusive.
 * @param {number} archive.lastAired The last episode to print, inclusive.
 * @param {(chapter: number) => number} archive.episodeAtChapter The chapter mapping.
 * @param {(episode: number) => number} archive.chapterAtEpisode The episode mapping.
 * @param {{ label: string, entry: { episode: number, chapter?: number } }[]} archive.dated The dated facts in archive order.
 * @param {boolean} onlyDated Whether to omit the mappings.
 * @returns {string} The complete dump, including a trailing newline when nonempty.
 */
export function archiveTable(archive, onlyDated = false) {
  const lines = []

  if (!onlyDated) {
    for (let chapter = 1; chapter <= archive.chapterCeiling; chapter += 1) {
      lines.push(`c${chapter} ${archive.episodeAtChapter(chapter)}`)
    }
    for (let episode = 1; episode <= archive.lastAired; episode += 1) {
      lines.push(`e${episode} ${archive.chapterAtEpisode(episode)}`)
    }
  }

  for (const { label, entry } of archive.dated) {
    lines.push(`dated ${label} ${entry.episode}/${entry.chapter ?? '-'}`)
  }

  return lines.length === 0 ? '' : `${lines.join('\n')}\n`
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  try {
    const onlyDated = datedOnly(process.argv.slice(2))
    const { DATED, chapterAtEpisode, episodeAtChapter } =
      await importArchive('data/chapters.ts')
    const { CHAPTER_CEILING } = await importArchive('lib/progress/bounds.ts')
    const { LAST_AIRED } = await importArchive('data/filler.ts')

    process.stdout.write(
      archiveTable(
        {
          chapterCeiling: CHAPTER_CEILING,
          lastAired: LAST_AIRED,
          chapterAtEpisode,
          episodeAtChapter,
          dated: DATED,
        },
        onlyDated,
      ),
    )
  } catch (error) {
    console.error(Error.isError(error) ? error.message : String(error))
    process.exitCode = 1
  }
}
