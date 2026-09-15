import { SERVER_FN_BASE } from '~/lib/endpoints'

/**
 * The crawl instructions.
 *
 * Everything the site publishes is meant to be crawled, so the file says one
 * thing: where the sitemap is. The single exclusion is `/_serverFn/`, the
 * server functions the pages call. They answer to POST and carry the "lift the
 * fog anyway" path, so there is nothing there for a crawler to index and no
 * reason to have it knocking.
 */
export function robotsTxt(origin: string): string {
  return [
    'User-agent: *',
    'Allow: /',
    `Disallow: ${SERVER_FN_BASE}/`,
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ].join('\n')
}
