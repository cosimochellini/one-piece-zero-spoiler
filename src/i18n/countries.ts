import type { Locale } from './locales'

// ISO 3166-1 alpha-2 codes of states where English is an official language,
// including those where it shares the role with another: Italian is the only
// alternative the site offers, and the switch cookie settles any wrong guess.
const ENGLISH = new Set([
  'AG',
  'AU',
  'BB',
  'BS',
  'BW',
  'BZ',
  'CA',
  'FJ',
  'GB',
  'GH',
  'GM',
  'GY',
  'IE',
  'IN',
  'JM',
  'KE',
  'LR',
  'MT',
  'MU',
  'MW',
  'NA',
  'NG',
  'NZ',
  'PG',
  'PH',
  'SG',
  'SL',
  'TT',
  'UG',
  'US',
  'ZA',
  'ZM',
  'ZW',
])

/**
 * The locale a visitor's country points to, if it points anywhere.
 *
 * Only countries whose language the site publishes say something; every other
 * country, and Cloudflare's own `XX` (unknown) and `T1` (Tor), returns
 * `undefined` so the next signal decides.
 */
export function localeForCountry(
  country: string | undefined,
): Locale | undefined {
  const code = country?.toUpperCase()
  if (code === 'IT') {
    return 'it'
  }
  return code !== undefined && ENGLISH.has(code) ? 'en' : undefined
}
