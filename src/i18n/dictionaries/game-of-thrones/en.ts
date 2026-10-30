import type { OwnCopy } from '~/i18n/types'

/**
 * Game of Thrones' own copy, in English: the keys every series words for
 * itself (`CommonKey`), and none of One Piece's features. Its two media are
 * the show and the books (#848). It stays on the server and reaches a reader
 * with Game of Thrones' pages only. Its sources are A Wiki of Ice and Fire,
 * the Game of Thrones Wiki and Italian Wikipedia (#725).
 */
export const gameOfThronesEn = {
  'characters.count':
    '{count} characters, in the order they appear in the show. Characters under fog do not show up in search.',
  'characters.featuredLede': 'The key characters of the story.',
  'credits.coverage':
    'No Game of Thrones entry has a documented source review yet, so none is listed below. Game of Thrones’ chapter numbers are checked against A Wiki of Ice and Fire, its episode numbers against the Game of Thrones Wiki, and its Italian names against Italian Wikipedia.',
  'credits.otherTerms':
    'Facts and citations taken from a source do not grant permission to copy its prose, images or an entire compilation. Official titles and Game of Thrones material are not offered as project-owned content.',
  'credits.source.wiki-en':
    'A Wiki of Ice and Fire contributors: source revision',
  'credits.source.wiki-it': 'Italian Wikipedia contributors: source revision',
  'credits.wikiEn': 'A Wiki of Ice and Fire',
  'credits.wikiIt': 'Italian Wikipedia',
  'credits.wikiShow': 'Game of Thrones Wiki',
  'credits.wikiTerms':
    'A Wiki of Ice and Fire and the Game of Thrones Wiki declare CC BY-SA 3.0 Unported for community text by default, and Italian Wikipedia declares CC BY-SA 4.0. Exceptions, imported material and images can have different terms. All three permit author attribution through links to the contributed articles.',
  'faq.animeA':
    'Both. You can count by show episode, by season and episode, or by book and chapter. Every entry has an episode number and a chapter number. An entry that appears in only one of the two stays hidden from someone who counts by the other. When the exact point is uncertain, the later one is used, so an entry is more likely to open late than early.',
  'faq.animeQ': 'Show or books?',
  'faq.bookmarkA':
    'In a cookie on this device. The server reads it before it builds the page, so entries past your bookmark are not in the page you receive. Without a bookmark, this page carries the first season and the first book for the dial and nothing past them. There is no account and no tracking.',
  'legal.credits':
    'Game of Thrones is an HBO series based on A Song of Ice and Fire by George R. R. Martin. © Home Box Office, Inc. All rights reserved.',
  'onboarding.lede':
    'Move the dial through the first season and the first book. Entries up to that point open, and the ones after it stay under fog. Once you set your bookmark, every page of the wiki works this way.',
  'onboarding.places': 'Places',
  'onboarding.tailTitle': 'After the first season',
  'places.count':
    '{count} places, grouped by region. Each one opens at the episode where it first appears.',
  'places.pageDescription':
    'Game of Thrones places, grouped by region, each hidden until the episode where it first appears.',
  'site.description':
    'A Game of Thrones wiki that hides every character and place you have not reached yet. Set the episode you are on or the chapter you are reading and read up to there.',
} as const satisfies OwnCopy
