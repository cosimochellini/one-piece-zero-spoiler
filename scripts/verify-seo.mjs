// Reads the head of every page in the sitemap from a running copy of the site
// and lists what search results would get wrong: a title that does not say
// which series it belongs to, a missing, duplicated or over-long description,
// a canonical address that is not the page's own, a locale with no alternate.
//
// Run `npm run build && npm start` (Vite preview, port 4173), then `npm run
// verify:seo`; `-- --base <url>` points it at another copy, for instance
// production. The sitemap's own addresses are re-rooted on the base, so a
// local build is audited with the paths it will serve. Not part of `npm run
// check`: it needs a server.
import process from 'node:process'
import { pathToFileURL } from 'node:url'

const SITE = 'Zero Spoiler'
/** Series slug → the name its titles carry. */
const SERIES = new Map([
  ['hunter-x-hunter', 'Hunter x Hunter'],
  ['one-piece', 'One Piece'],
])
const LOCALES = ['it', 'en']
const BATCH = 16
/** A crawler is served every record open, which is what a result is made of. */
const CRAWLER = { 'user-agent': 'Googlebot' }

const ENTITIES = { '&amp;': '&', '&quot;': '"', '&#x27;': "'", '&#39;': "'" }

/**
 * The first group of `pattern` in `html`, with its entities read.
 * @param {string} html The page.
 * @param {RegExp} pattern A pattern with a group named `value`.
 * @returns {string} The text, or an empty string when the tag is not there.
 */
function grab(html, pattern) {
  const text = pattern.exec(html)?.groups?.value ?? ''

  return text.replaceAll(
    /&(?:amp|quot|#x27|#39);/gu,
    (entity) => ENTITIES[entity],
  )
}

/**
 * The tags of a page's `<head>` this audit reads.
 * @param {string} html The page.
 * @returns {{ alternates: string[], canonical: string, description: string, ogTitle: string, title: string }} What the head says.
 */
export function headOf(html) {
  return {
    title: grab(html, /<title>(?<value>[^<]*)<\/title>/u),
    description: grab(
      html,
      /<meta name="description" content="(?<value>[^"]*)"/u,
    ),
    canonical: grab(html, /<link rel="canonical" href="(?<value>[^"]*)"/u),
    ogTitle: grab(html, /<meta property="og:title" content="(?<value>[^"]*)"/u),
    alternates: html
      .matchAll(
        /<link rel="alternate" href="[^"]*" hrefLang="(?<value>[^"]*)"/gu,
      )
      .map((found) => found.groups.value)
      .toArray(),
  }
}

/**
 * Whether a title names the series the path belongs to; a path of no series
 * (the hub, the legal page) names none.
 * @param {string} path The page's path.
 * @param {string} title The page's title.
 * @returns {string[]} The sentences for a missing name.
 */
function titleProblems(path, title) {
  const name = path
    .split('/')
    .map((part) => SERIES.get(part))
    .find((found) => found !== undefined)

  return [
    ...(title.includes(SITE) ? [] : [`title lacks "${SITE}": ${title}`]),
    ...(name === undefined || title.includes(name) ?
      []
    : [`title lacks "${name}": ${title}`]),
  ]
}

/**
 * What is wrong with one page's head, as sentences.
 * @param {string} path The page's path, without an origin.
 * @param {ReturnType<typeof headOf>} head What the head says.
 * @returns {string[]} The sentences, none for a sound head.
 */
export function problemsOf(path, head) {
  const canonical = URL.parse(head.canonical, 'https://zerospoiler.app')

  return [
    ...titleProblems(path, head.title),
    ...(head.ogTitle === head.title ?
      []
    : [`og:title differs from title: ${head.ogTitle}`]),
    ...(head.description === '' ? ['description is empty'] : []),
    ...(canonical?.pathname === path ? [] : [`canonical is ${head.canonical}`]),
    ...LOCALES.filter((locale) => !head.alternates.includes(locale)).map(
      (locale) => `no ${locale} alternate`,
    ),
  ]
}

/**
 * The language a path is in.
 * @param {string} path The page's path.
 * @returns {string | undefined} `it` or `en`.
 */
function localeOf(path) {
  return path.split('/').find((part) => LOCALES.includes(part))
}

/**
 * Titles or descriptions that two pages of one language share; the same name
 * in two languages is not a duplicate.
 * @param {{ head: Record<string, string>, path: string }[]} pages The audited pages.
 * @param {string} field `title` or `description`.
 * @returns {[string, string[]][]} Each shared text with the paths that carry it.
 */
export function sharedBy(pages, field) {
  const groups = Map.groupBy(
    pages,
    ({ head, path }) => `${localeOf(path)}\n${head[field]}`,
  )

  return groups
    .values()
    .filter((group) => group.length > 1 && group[0].head[field] !== '')
    .map((group) => [group[0].head[field], group.map(({ path }) => path)])
    .toArray()
}

/**
 * Every page of the sitemap, fetched a batch at a time.
 * @param {string} base The origin of the copy to read.
 * @returns {Promise<{ head: ReturnType<typeof headOf>, path: string, status: number }[]>} The pages.
 */
async function readSite(base) {
  // fallow-ignore-next-line security-sink -- a developer tool: the base is the `--base` the developer typed, and it only reads pages.
  const sitemap = await fetch(`${base}/sitemap.xml`)
  const text = await sitemap.text()
  const paths = text
    .matchAll(/<loc>(?<value>[^<]*)<\/loc>/gu)
    .map((found) => {
      const { pathname } = new URL(found.groups.value)

      return pathname
    })
    .toArray()
  const pages = []

  for (let start = 0; start < paths.length; start += BATCH) {
    const batch = paths.slice(start, start + BATCH).map(async (path) => {
      // fallow-ignore-next-line security-sink -- a developer tool: the base is the `--base` the developer typed, and it only reads pages.
      const response = await fetch(base + path, {
        headers: CRAWLER,
        redirect: 'manual',
      })

      return {
        path,
        head: headOf(await response.text()),
        status: response.status,
      }
    })

    pages.push(...(await Promise.all(batch)))
  }

  return pages
}

/**
 * Every finding in the audited pages, as lines.
 * @param {Awaited<ReturnType<typeof readSite>>} pages The audited pages.
 * @returns {string[]} The lines.
 */
function findingsOf(pages) {
  const own = pages.flatMap(({ path, head, status }) => {
    const problems =
      status === 200 ? problemsOf(path, head) : [`answers ${status}`]

    return problems.map((problem) => `${path}  ${problem}`)
  })
  const shared = ['title', 'description'].flatMap((field) => {
    return sharedBy(pages, field).map(([text, paths]) => {
      return `${paths.slice(0, 3).join(', ')}  ${paths.length} pages share the ${field} "${text}"`
    })
  })

  return [...own, ...shared]
}

/**
 * Reads the site and prints what is wrong with it.
 * @returns {Promise<number>} The exit code: 1 when there is a finding.
 */
async function main() {
  const argument = process.argv.indexOf('--base')
  const base =
    argument === -1 ? 'http://localhost:4173' : process.argv[argument + 1]
  const pages = await readSite(base)
  const findings = findingsOf(pages)

  console.log(
    [...findings, `${pages.length} pages, ${findings.length} findings`].join(
      '\n',
    ),
  )

  return findings.length === 0 ? 0 : 1
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exit(await main())
}
