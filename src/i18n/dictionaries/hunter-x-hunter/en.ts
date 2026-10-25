import type { OwnCopy } from '~/i18n/types'

/**
 * Hunter x Hunter's own copy, in English: the keys every series words for
 * itself (`CommonKey`), and none of One Piece's features. It stays on the
 * server and reaches a reader with Hunter x Hunter's pages only. Its sources
 * are the English Hunter x Hunter Wiki and Italian Wikipedia (#725).
 */
export const hunterXHunterEn = {
  'characters.featuredLede':
    'Gon, his friends and the other key characters of the story.',
  'credits.coverage':
    'No Hunter x Hunter entry has a documented source review yet, so none is listed below. Its episode and chapter numbers are checked against the English Hunter x Hunter Wiki, and its Italian names against Italian Wikipedia.',
  'credits.otherTerms':
    'Facts and citations taken from a source do not grant permission to copy its prose, images or an entire compilation. Official titles and Hunter x Hunter material are not offered as project-owned content.',
  'credits.source.wiki-en':
    'English Hunter x Hunter Wiki contributors: source revision',
  'credits.source.wiki-it': 'Italian Wikipedia contributors: source revision',
  'credits.wikiEn': 'English Hunter x Hunter Wiki',
  'credits.wikiIt': 'Italian Wikipedia',
  'credits.wikiTerms':
    'The English Hunter x Hunter Wiki declares CC BY-SA 3.0 Unported for community text by default, and Italian Wikipedia declares CC BY-SA 4.0. Exceptions, imported material and images can have different terms. Both permit author attribution through links to the contributed articles.',
  'credits.wikipediaTerms': 'Wikipedia terms of use',
  'faq.bookmarkA':
    'In a cookie on this device. The server reads it before it builds the page, so entries past your bookmark are not in the page you receive. Without a bookmark, this page carries the Hunter Exam for the dial and nothing past it. There is no account and no tracking.',
  'legal.credits':
    'Hunter x Hunter was created by Yoshihiro Togashi. Credit for the 2011 anime: © POT (Yoshihiro Togashi) 1998-2011 © VAP・NTV・Madhouse/Shueisha for episodes 1–100, and © POT (Yoshihiro Togashi) 1998-2011 © VAP・NTV・Madhouse for episodes 101–148.',
  'onboarding.lede':
    'Move the dial through the Hunter Exam. Entries up to that point open, and the ones after it stay under fog. Once you set your bookmark, every page of the wiki works this way.',
  'onboarding.places': 'Places',
  'onboarding.tailTitle': 'After the Hunter Exam',
  'places.count':
    '{count} places, grouped by region. Each one opens at the episode where it first appears.',
  'places.pageDescription':
    'Hunter x Hunter places, grouped by region, each hidden until the episode where it first appears.',
  'site.description':
    'A Hunter x Hunter wiki that hides every character, arc and place you have not reached yet. Set the episode or chapter you are on and read up to there.',
} as const satisfies OwnCopy
