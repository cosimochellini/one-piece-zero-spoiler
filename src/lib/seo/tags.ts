import { type Locale, LOCALES } from '~/i18n/locales'

/**
 * The social cards.
 *
 * Open Graph and Twitter say the same three things the document head already
 * says — a title, a description and an address — in the two vocabularies the
 * platforms read. They are written from the page's own head rather than from
 * the record, so a page under fog unfurls as the fogged page and not as the
 * record behind it.
 */

/** One entry of the document head, as the router's `meta` array takes it. */
export type MetaTag =
  | { readonly content: string; readonly name: string }
  | { readonly content: string; readonly property: string }
  | { readonly title: string }

/** What a page tells the platforms about itself. */
export type SocialPage = {
  readonly description: string
  readonly imageAlt: string
  readonly imageUrl: string
  readonly locale: Locale
  readonly siteName: string
  readonly title: string
  readonly type: 'article' | 'website'
  readonly url: string
}

// Open Graph wants a language *and* a territory, which BCP 47 tags on the
// rest of the site do not carry.
const OG_LOCALE: Readonly<Record<Locale, string>> = { it: 'it_IT', en: 'en_US' }

function otherLocales(locale: Locale): readonly Locale[] {
  return LOCALES.filter((candidate) => candidate !== locale)
}

function alternateLocale(locale: Locale): MetaTag {
  return { property: 'og:locale:alternate', content: OG_LOCALE[locale] }
}

/** The `og:` and `twitter:` tags for one page. */
export function describeSocial(page: SocialPage): readonly MetaTag[] {
  return [
    { property: 'og:type', content: page.type },
    { property: 'og:site_name', content: page.siteName },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: page.url },
    { property: 'og:image', content: page.imageUrl },
    { property: 'og:image:alt', content: page.imageAlt },
    { property: 'og:locale', content: OG_LOCALE[page.locale] },
    ...otherLocales(page.locale).map((locale) => alternateLocale(locale)),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: page.imageUrl },
    { name: 'twitter:image:alt', content: page.imageAlt },
  ]
}
