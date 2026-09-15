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
  /applebot|baiduspider|bingbot|discordbot|duckduckbot|facebookexternalhit|googlebot|linkedinbot|slackbot|slurp|telegrambot|twitterbot|whatsapp|yandexbot/iu

/** Whether a `User-Agent` header names one of the crawlers the site answers in full. */
export function isCrawlerAgent(userAgent: string | undefined): boolean {
  if (userAgent === undefined || userAgent === '') {
    return false
  }

  return CRAWLERS.test(userAgent)
}
