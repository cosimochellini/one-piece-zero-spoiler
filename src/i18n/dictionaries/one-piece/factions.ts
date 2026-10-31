import type { Locale } from '~/i18n/locales'
import type { Faction } from '~/lib/view/records'

/**
 * The label of every faction a fruit eater's affiliation entry can tag, in
 * both locales. Server-only, and not part of One Piece's copy: some name a
 * group the reader meets late ("Kozuki family", "Cross Guild"), so the fruit
 * album sends each with its group (`fruitAlbum`), and a group is sent only
 * once an eater the reader has reached stands in it (#988). The gate is the
 * affiliation entry's, and nowhere else.
 */
export const FACTION_LABELS: Record<Locale, Record<Faction, string>> = {
  en: {
    'straw-hat-pirates': 'Straw Hat Pirates',
    'straw-hat-grand-fleet': 'Straw Hat Grand Fleet',
    'emperors': 'Emperors',
    'warlords': 'Seven Warlords of the Sea',
    'marines': 'Marines',
    'world-government': 'World Government',
    'cp9': 'Cipher Pol 9',
    'cp0': 'Cipher Pol 0',
    'knights-of-god': 'Knights of God',
    'revolutionary-army': 'Revolutionary Army',
    'baroque-works': 'Baroque Works',
    'buggy-pirates': 'Buggy Pirates',
    'cross-guild': 'Cross Guild',
    'whitebeard-pirates': 'Whitebeard Pirates',
    'blackbeard-pirates': 'Blackbeard Pirates',
    'donquixote-pirates': 'Donquixote Pirates',
    'beasts-pirates': 'Beasts Pirates',
    'big-mom-pirates': 'Big Mom Pirates',
    'thriller-bark-pirates': 'Thriller Bark Pirates',
    'kuja-pirates': 'Kuja Pirates',
    'galley-la': 'Galley-La Company',
    'alabasta': 'Kingdom of Alabasta',
    'tontatta': 'Tontatta Kingdom',
    'punk-hazard': 'Punk Hazard laboratory',
    'kozuki-family': 'Kozuki family',
    'kozuki-alliance': 'Kozuki alliance',
    'nine-red-scabbards': 'Nine Red Scabbards',
    'kurozumi-family': 'Kurozumi family',
    'independent': 'Independent',
  },
  it: {
    'straw-hat-pirates': 'Pirati di Cappello di Paglia',
    'straw-hat-grand-fleet': 'Grande Flotta di Cappello di Paglia',
    'emperors': 'Imperatori',
    'warlords': 'Flotta dei Sette',
    'marines': 'Marina',
    'world-government': 'Governo Mondiale',
    'cp9': 'Cipher Pol 9',
    'cp0': 'Cipher Pol 0',
    'knights-of-god': 'Cavalieri di Dio',
    'revolutionary-army': 'Armata Rivoluzionaria',
    'baroque-works': 'Baroque Works',
    'buggy-pirates': 'Pirati di Bagy',
    'cross-guild': 'Cross Guild',
    'whitebeard-pirates': 'Pirati di Barbabianca',
    'blackbeard-pirates': 'Pirati di Barbanera',
    'donquixote-pirates': 'Pirati di Donquijote',
    'beasts-pirates': 'Pirati delle Cento Bestie',
    'big-mom-pirates': 'Pirati di Big Mom',
    'thriller-bark-pirates': 'Pirati di Thriller Bark',
    'kuja-pirates': 'Pirate Kuja',
    'galley-la': 'Galley-La Company',
    'alabasta': 'Regno di Alabasta',
    'tontatta': 'Regno di Tontatta',
    'punk-hazard': 'Laboratorio di Punk Hazard',
    'kozuki-family': 'Famiglia Kozuki',
    'kozuki-alliance': 'Alleanza Kozuki',
    'nine-red-scabbards': 'Nove Foderi Rossi',
    'kurozumi-family': 'Famiglia Kurozumi',
    'independent': 'Indipendenti',
  },
}
