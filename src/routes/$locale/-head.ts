/**
 * The document head of every page on the site.
 *
 * Kept out of the route modules because it is the one part of a page that
 * runs before any component does, on the server, and it is the one place a
 * covered name could still leak. The leading `-` keeps the file out of the
 * generated route tree.
 *
 * It spells out what the route was given and derives nothing about the
 * record. The sentences themselves are chosen on the server, where the
 * archive is: a title is set before the stream resolves, so anything worked
 * out here would have to be worked out without a record to work from. What is
 * added around them — the canonical address, the translations, the social
 * cards, the structured data — is the same page's own title and description
 * said again in the vocabularies a crawler reads, and never anything more.
 */
import type { Locale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import type { TranslationKey } from '~/i18n/types'
import { type Crumb, pageJsonLd, type PageKind } from '~/lib/seo/jsonLd'
import { localeAlternates, normalisePath } from '~/lib/seo/paths'
import { absoluteUrl, SITE_ORIGIN } from '~/lib/seo/site'
import { describeSocial, type MetaTag } from '~/lib/seo/tags'
import type { DocumentHead } from '~/lib/view/records'

/** The social card, drawn once for the whole site by `scripts/make-icons.mjs`. */
const SOCIAL_IMAGE = '/og-card.png'

/** What a route knows about itself when the head is written. */
export type PageDescription = {
  readonly head: DocumentHead
  readonly kind: PageKind
  readonly locale: Locale
  readonly pathname: string
  /** The pages above this one, outermost first. Empty for an index. */
  readonly trail?: readonly Crumb[]
}

/** Everything the router renders into `<head>` for one page. */
export type HeadTags = {
  readonly links: readonly { href: string; hrefLang?: string; rel: string }[]
  readonly meta: readonly MetaTag[]
  readonly scripts: readonly { children: string; type: string }[]
}

/** The title, the description, the canonical address and everything derived from them. */
export function describePage(page: PageDescription): HeadTags {
  const path = normalisePath(page.pathname)
  const url = absoluteUrl(path)
  const dictionary = getDictionary(page.locale)
  const siteName = translate(dictionary, 'site.name')

  return {
    links: [
      { rel: 'canonical', href: url },
      ...localeAlternates(path).map((alternate) => {
        return {
          rel: 'alternate',
          href: absoluteUrl(alternate.href),
          hrefLang: alternate.hrefLang,
        }
      }),
    ],
    meta: [
      { title: page.head.title },
      { name: 'description', content: page.head.description },
      ...describeSocial({
        description: page.head.description,
        imageAlt: translate(dictionary, 'seo.imageAlt'),
        imageUrl: absoluteUrl(SOCIAL_IMAGE),
        locale: page.locale,
        siteName,
        title: page.head.title,
        type: page.kind === 'record' ? 'article' : 'website',
        url,
      }),
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: pageJsonLd({
          description: page.head.description,
          kind: page.kind,
          locale: page.locale,
          siteName,
          siteUrl: `${SITE_ORIGIN}/${page.locale}`,
          title: page.head.title,
          trail: page.trail ?? [],
          url,
        }),
      },
    ],
  }
}

/** A page whose title and description are written in the dictionary. */
export type NamedPage = {
  readonly descriptionKey: TranslationKey
  readonly kind: PageKind
  readonly locale: Locale
  readonly pathname: string
  readonly titleKey: TranslationKey
}

/** The head of the landing page or of one of the three indexes. */
export function describeNamedPage(page: NamedPage): HeadTags {
  const dictionary = getDictionary(page.locale)

  return describePage({
    head: {
      title: translate(dictionary, page.titleKey),
      description: translate(dictionary, page.descriptionKey),
    },
    kind: page.kind,
    locale: page.locale,
    pathname: page.pathname,
  })
}

/** A page a single record has to itself, and the index it is filed under. */
export type RecordPage = {
  readonly head: DocumentHead
  readonly locale: Locale
  /** The index above it, as a path without the locale: `/characters`. */
  readonly parentPath: string
  readonly parentTitleKey: TranslationKey
  readonly pathname: string
}

/**
 * The head of a record's page, with the index above it as the trail.
 *
 * The title and the description arrive from the loader, already decided
 * against the reader's bookmark, and are passed through untouched.
 */
export function describeRecordPage(page: RecordPage): HeadTags {
  const dictionary = getDictionary(page.locale)

  return describePage({
    head: page.head,
    kind: 'record',
    locale: page.locale,
    pathname: page.pathname,
    trail: [
      {
        name: translate(dictionary, page.parentTitleKey),
        url: absoluteUrl(`/${page.locale}${page.parentPath}`),
      },
    ],
  })
}
