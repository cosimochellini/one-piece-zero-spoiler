import type { Locale } from './locales'
import type { Translate } from './types'

/**
 * A bounty in the reader's own digit grouping: 30.000.000 in Italian,
 * 30,000,000 in English, and the unit after it.
 */
export function formatBounty(
  amount: number | undefined,
  locale: Locale,
  t: Translate,
): string | undefined {
  if (amount === undefined) {
    return undefined
  }

  const digits = new Intl.NumberFormat(locale === 'it' ? 'it-IT' : 'en-GB')
  return t('character.bountyValue', { amount: digits.format(amount) })
}
