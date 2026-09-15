/**
 * Whether a request came from a search engine or a link unfurler.
 *
 * The site hides every record filed after the reader's bookmark, and a
 * crawler has no bookmark to send. Left alone, every record page would be
 * indexed as the same fogged placeholder, so a request from a known crawler is
 * read as a reader who has finished the story.
 *
 * The list is named agents rather than a `bot|crawler|spider` pattern on
 * purpose: the wider pattern would hand the archive to anything that happens
 * to carry one of those words in its user agent. It is still only a user
 * agent, which anyone can send — the fog is an editorial promise to a reader,
 * not an access control, and this is where that is most visible.
 */
const CRAWLERS =
  /applebot|baiduspider|bingbot|discordbot|duckduckbot|facebookexternalhit|googlebot|linkedinbot|slackbot|slurp|telegrambot|twitterbot|yandexbot/iu

// WhatsApp is the one name on the list that two different things send. Its
// unfurler introduces itself first — `WhatsApp/2.19.81 A` — while its in-app
// browser appends the same token to an ordinary mobile browser's string, and
// that is a person who tapped a link a friend shared. Matched anywhere, the
// tap would open the whole archive to a reader on their first visit, which is
// the one thing this site exists not to do. So it is anchored: the unfurler
// leads with it, a browser never does.
const WHATSAPP = /^whatsapp\//iu

/** Whether a `User-Agent` header names one of the crawlers the site answers in full. */
export function isCrawlerAgent(userAgent: string | undefined): boolean {
  if (userAgent === undefined || userAgent === '') {
    return false
  }

  return CRAWLERS.test(userAgent) || WHATSAPP.test(userAgent)
}
