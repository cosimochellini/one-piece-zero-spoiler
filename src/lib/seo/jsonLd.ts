import type { Locale } from '~/i18n/locales'

/**
 * The page as structured data.
 *
 * One `@graph` per document: the site itself, the page, and — where the page
 * sits under an index — the trail that leads to it. It is built from the same
 * title and description the head already carries, so a covered record
 * describes itself exactly as the visible page does and the structured data
 * cannot become the one place a name leaks.
 */

/** Which schema.org type a page presents itself as. */
export type PageKind = 'index' | 'landing' | 'record'

/** One step of the trail above a page: what it is called and where it is. */
export type Crumb = { readonly name: string; readonly url: string }

/** Everything the graph is written from. */
export type JsonLdPage = {
  readonly description: string
  readonly kind: PageKind
  readonly locale: Locale
  readonly siteName: string
  readonly siteUrl: string
  readonly title: string
  readonly trail: readonly Crumb[]
  readonly url: string
}

// The site itself is always the first node of the graph, so the landing page
// is a `WebPage` like any other rather than a second `WebSite`.
const PAGE_TYPE: Readonly<Record<PageKind, string>> = {
  landing: 'WebPage',
  index: 'CollectionPage',
  record: 'WebPage',
}

// The last step is the page the reader is already on. Google's own example
// leaves that one without an `item`, because a breadcrumb does not link to
// where it stands.
function listItem(crumb: Crumb, index: number): object {
  const position = index + 1

  return crumb.url === '' ?
      { '@type': 'ListItem', position, 'name': crumb.name }
    : { '@type': 'ListItem', position, 'name': crumb.name, 'item': crumb.url }
}

function breadcrumbs(trail: readonly Crumb[], here: Crumb): readonly object[] {
  if (trail.length === 0) {
    return []
  }

  return [
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [...trail, here].map((crumb, index) =>
        listItem(crumb, index),
      ),
    },
  ]
}

/**
 * The `application/ld+json` body for one page, ready to be a script's text.
 *
 * `<` is escaped rather than printed: the router writes the string into the
 * element as it stands, and a summary containing `</script` would otherwise
 * close the block and put the rest of the graph on the page as markup.
 */
export function pageJsonLd(page: JsonLdPage): string {
  return graphOf(page).replaceAll('<', String.raw`\u003C`)
}

function graphOf(page: JsonLdPage): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${page.siteUrl}#website`,
        'name': page.siteName,
        'url': page.siteUrl,
        'inLanguage': page.locale,
      },
      {
        '@type': PAGE_TYPE[page.kind],
        'name': page.title,
        'description': page.description,
        'url': page.url,
        'inLanguage': page.locale,
        'isPartOf': { '@id': `${page.siteUrl}#website` },
      },
      ...breadcrumbs(page.trail, { name: page.title, url: '' }),
    ],
  })
}
