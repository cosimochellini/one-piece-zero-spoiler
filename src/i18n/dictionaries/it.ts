import type { Dictionary } from '../types'

/**
 * The Italian dictionary. The `Dictionary` annotation is load-bearing: drop a
 * key that `en.ts` declares and `npm run typecheck` fails.
 *
 * See `en.ts` for why this is not called `it`.
 */
export const itDictionary: Dictionary = {
  'site.name': 'Zero Spoiler',
  'site.title': 'Zero Spoiler — una wiki di One Piece che ti aspetta',
  'site.description':
    'Una wiki di One Piece che nasconde ogni voce archiviata dopo l’episodio a cui sei arrivato.',

  'nav.skip': 'Vai al contenuto',
  'mast.editionSet': 'Arrivato all’episodio {episode}',
  'mast.editionUnset': 'Nessun episodio impostato — tutto è coperto',

  'hero.headline': 'La wiki si ferma dove sei tu',
  'hero.lede':
    'Imposta l’episodio a cui sei arrivato. Ogni voce archiviata dopo quel punto resta coperta, finché non decidi tu.',

  'dial.label': 'Episodio a cui sei arrivato',
  'dial.hint': 'Da 1 a {max}.',
  'dial.errorRange': 'Scrivi un numero tra 1 e {max}.',
  'dial.errorEmpty': 'Scrivi l’episodio a cui sei arrivato.',
  'dial.decrease': 'Un episodio indietro',
  'dial.increase': 'Un episodio avanti',
  'dial.clear': 'Dimentica il mio episodio',

  'veil.locked': 'Coperto fino all’episodio {episode}',
  'veil.reveal': 'Scopri comunque',
  'veil.revealShort': 'Scopri',
  'veil.placeholder': 'Spoiler',

  'hero.figureNote': 'episodi visti',
  'hero.figureNoteUnset': 'nessun episodio impostato',
  'hero.figureUnset': '—',

  'ledger.title': 'L’archivio, com’è adesso per te',
  'ledger.colEntry': 'Voce',
  'ledger.colKind': 'Tipo',
  'ledger.colFrom': 'Aperta da',
  'ledger.colStatus': 'Stato',
  'ledger.statusOpen': 'Aperta',
  'ledger.statusCovered': 'Coperta',
  'ledger.caption':
    '{count} voci, ordinate per l’episodio da cui ciascuna si apre. La riga si sposta insieme a te.',

  'tally.open': 'aperte per te',
  'tally.covered': 'ancora coperte',
  'tally.filed': 'archiviate finora',

  'colophon.animeLead': 'Anime, non manga.',
  'colophon.animeBody':
    'Ogni soglia conta episodi dell’anime, e quando è incerta viene arrotondata per eccesso: una soglia troppo bassa scopre una voce in anticipo, ed è l’unico errore che qui conta davvero.',
  'colophon.bookmarkLead': 'Il segnalibro resta con te.',
  'colophon.bookmarkBody':
    'Il tuo episodio vive in un cookie su questo dispositivo e viene letto dal server prima che la pagina sia disegnata, così niente sfugge nell’istante prima che parta lo script. Nessun account, nessun tracciamento.',
  'colophon.revealLead': 'Scoprire è una tua scelta.',
  'colophon.revealBody':
    'Niente resta chiuso per sempre. Una voce coperta è sempre a un clic voluto dall’essere letta, e la pagina non si ricorderà che hai guardato.',

  'kind.character': 'Personaggio',
  'kind.arc': 'Saga',
  'kind.place': 'Luogo',

  'footer.statement':
    'Nessuno dovrebbe sapere come va a finire prima di arrivarci.',
  'footer.note': 'Fatto per chi preferisce la strada lunga.',

  'locale.label': 'Lingua',
  'locale.it': 'Italiano',
  'locale.en': 'English',
}
