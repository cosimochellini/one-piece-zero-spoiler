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
  'veil.placeholder': 'Spoiler',

  'tile.veil.title': 'Prova il velo',
  'tile.veil.body':
    'Questa voce è archiviata all’episodio {episode}. Sposta il quadrante oltre quel punto, oppure scoprila a mano.',
  'tile.kinds.title': 'Cosa viene archiviato',
  'tile.kinds.body':
    'Personaggi, saghe, episodi, luoghi e i legami fra loro. Ogni scheda porta scritto l’episodio da cui si può leggere.',
  'tile.number.title': 'Un numero, non una lista',
  'tile.number.body': 'Dici al sito un solo episodio. Al resto pensa lui.',
  'tile.bookmark.title': 'Il segnalibro resta nel tuo browser',
  'tile.bookmark.body':
    'Il tuo episodio sta in un cookie su questo dispositivo e viene letto dal server prima che la pagina sia disegnata, così niente sfugge nell’istante prima che parta lo script. Nessun account, nessun tracciamento.',
  'tile.anime.title': 'Anime, non manga',
  'tile.anime.body':
    'Ogni soglia conta episodi dell’anime. Chi legge il manga è più avanti; qui si aspetta la messa in onda.',
  'tile.reveal.title': 'Scoprire è una tua scelta',
  'tile.reveal.body':
    'Niente resta chiuso per sempre. Un passaggio coperto è sempre a un clic voluto dall’essere letto.',

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
