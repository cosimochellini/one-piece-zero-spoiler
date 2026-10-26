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
import { isLocale, type Locale } from '~/i18n/locales'
import { getDictionary, translate, translatorFor } from '~/i18n/translate'
import type { SeriesCopy, SeriesSlug, TranslationKey } from '~/i18n/types'
import { hasPage, type Series, type SeriesPage } from '~/lib/progress/series'
import { type Crumb, pageJsonLd, type PageKind } from '~/lib/seo/jsonLd'
import { localeAlternates, localeRoot, normalisePath } from '~/lib/seo/paths'
import { absoluteUrl } from '~/lib/seo/site'
import { describeSocial, type MetaTag } from '~/lib/seo/tags'
import type { DocumentHead } from '~/lib/view/records'

/** The social card, drawn once for the whole site by `scripts/make-icons.mjs`. */
const SOCIAL_IMAGE = '/og-card.png'

/** What a route knows about itself when the head is written. */
interface PageDescription {
  head: DocumentHead
  kind: PageKind
  locale: Locale
  pathname: string
  /** The pages above this one, outermost first. Empty for an index. */
  trail?: Crumb[]
}

/** Everything the router renders into `<head>` for one page. */
export interface HeadTags {
  links: { href: string; hrefLang?: string; rel: string }[]
  meta: MetaTag[]
  scripts: { children: string; type: string }[]
}

/** The title, the description, the canonical address and everything derived from them. */
function describePage(page: PageDescription): HeadTags {
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
          siteUrl: absoluteUrl(localeRoot(path, page.locale)),
          title: page.head.title,
          trail: page.trail ?? [],
          url,
        }),
      },
    ],
  }
}

/**
 * A page whose title and description are written in the dictionary: the
 * shared one, or with `copy` its series' own as well, whose keys `S` names.
 */
export interface NamedPage<S extends SeriesSlug = never> {
  /** The series' own copy, on a page of a series. */
  copy?: SeriesCopy
  descriptionKey: TranslationKey<S>
  kind: PageKind
  locale: Locale
  pathname: string
  titleKey: TranslationKey<S>
}

/** The head of the landing page or of one of the indexes. */
export function describeNamedPage<S extends SeriesSlug = never>(
  page: NamedPage<S>,
): HeadTags {
  const t = translatorFor(page.locale, page.copy)

  return describePage({
    head: { title: t(page.titleKey), description: t(page.descriptionKey) },
    kind: page.kind,
    locale: page.locale,
    pathname: page.pathname,
  })
}

/** What a series page's `head` is handed, as far as it reads it. */
export interface SeriesPageMatch {
  match: { context: { copy: SeriesCopy; series: Series }; pathname: string }
  params: { locale: string }
}

/**
 * The head of one of a series' own indexes, or nothing for a 404, which
 * keeps the shell's title: a prefix that is not a language, or a page the
 * series does not declare. The router still runs this head when the route's
 * `beforeLoad` answers 404: without the `hasPage` branch a served
 * `/hunter-x-hunter/en/fruits` was titled "Devil fruits" (checked in a
 * preview build with Hunter x Hunter open).
 */
export function seriesPageHead(
  page: SeriesPage,
  { match, params }: SeriesPageMatch,
): HeadTags | Record<string, never> {
  return isLocale(params.locale) && hasPage(match.context.series, page) ?
      describeNamedPage<SeriesSlug>({
        copy: match.context.copy,
        descriptionKey: `${page}.pageDescription`,
        kind: 'index',
        locale: params.locale,
        pathname: match.pathname,
        titleKey: `${page}.pageTitle`,
      })
    : {}
}

/** A page a single record has to itself, and the index it is filed under. */
export interface RecordPage {
  /** The series' own copy, which names a fruit's index. */
  copy: SeriesCopy
  head: DocumentHead
  locale: Locale
  pathname: string
  /** The index above it, which is the path and the trail's one crumb. */
  section: 'characters' | 'fruits' | 'places'
}

/**
 * The head of a record's page, with the index above it as the trail.
 *
 * The title and the description arrive from the loader, already decided
 * against the reader's bookmark, and are passed through untouched.
 */
function describeRecordPage(page: RecordPage): HeadTags {
  const t = translatorFor(page.locale, page.copy)

  return describePage({
    head: page.head,
    kind: 'record',
    locale: page.locale,
    pathname: page.pathname,
    trail: [
      {
        name: t(`${page.section}.title`),
        url: absoluteUrl(
          `${localeRoot(page.pathname, page.locale)}/${page.section}`,
        ),
      },
    ],
  })
}

/** What a record route's `head` option is handed, as far as it reads it. */
export interface RecordHeadContext {
  loaderData?: { head: DocumentHead }
  match: { context: { copy: SeriesCopy }; pathname: string }
  params: { locale: string }
}

/**
 * The head of a record route filed under `section`, once the loader has
 * answered for a locale the site knows.
 * @param context What the route's `head` option is handed.
 * @param section The index the record is filed under.
 * @returns The record's head, or nothing before there is one to give.
 */
export function recordHead(
  context: RecordHeadContext,
  section: RecordPage['section'],
): HeadTags | undefined {
  const { loaderData, match, params } = context

  return loaderData === undefined || !isLocale(params.locale) ?
      undefined
    : describeRecordPage({
        copy: match.context.copy,
        head: loaderData.head,
        locale: params.locale,
        pathname: match.pathname,
        section,
      })
}
