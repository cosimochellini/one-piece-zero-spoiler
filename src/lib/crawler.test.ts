import { describe, expect, it } from 'vitest'

import { isCrawlerAgent } from './crawler'

const GOOGLEBOT =
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
const CHROME =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36'

describe('crawler user agents', () => {
  it('recognises the search engines the archive opens to', () => {
    expect(isCrawlerAgent(GOOGLEBOT)).toBe(true)
    expect(isCrawlerAgent('Mozilla/5.0 (compatible; bingbot/2.0)')).toBe(true)
    expect(isCrawlerAgent('DuckDuckBot/1.1')).toBe(true)
    expect(isCrawlerAgent('Mozilla/5.0 (compatible; YandexBot/3.0)')).toBe(true)
  })

  it('recognises the unfurlers that draw a link preview', () => {
    expect(isCrawlerAgent('facebookexternalhit/1.1')).toBe(true)
    expect(isCrawlerAgent('Twitterbot/1.0')).toBe(true)
    expect(isCrawlerAgent('Slackbot-LinkExpanding 1.0')).toBe(true)
    expect(isCrawlerAgent('WhatsApp/2.19.81 A')).toBe(true)
    expect(isCrawlerAgent('WhatsApp/2.24.10.85 A')).toBe(true)
  })

  it('is not case-sensitive, because a user agent is not', () => {
    expect(isCrawlerAgent('GOOGLEBOT')).toBe(true)
  })

  it('leaves a reader alone', () => {
    expect(isCrawlerAgent(CHROME)).toBe(false)
    expect(isCrawlerAgent('curl/8.7.1')).toBe(false)
    expect(isCrawlerAgent('')).toBe(false)
    expect(isCrawlerAgent(undefined)).toBe(false)
  })

  it('does not open to anything that merely calls itself a bot', () => {
    expect(isCrawlerAgent('SomeScraperBot/1.0 (+spider)')).toBe(false)
  })

  it('leaves the reader who tapped a link inside WhatsApp in the fog', () => {
    // The in-app browser appends the same token an ordinary mobile browser's
    // string. Behind it is a person on their first visit, not an unfurler.
    expect(
      isCrawlerAgent(
        'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 WhatsApp/2.24.10.85 A',
      ),
    ).toBe(false)
  })
})
