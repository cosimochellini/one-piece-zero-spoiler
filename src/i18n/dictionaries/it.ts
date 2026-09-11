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
    'Una wiki di One Piece che nasconde ogni personaggio, saga e isola archiviati dopo l’episodio a cui sei arrivato.',

  'nav.skip': 'Vai al contenuto',

  'hero.headline': 'La wiki si ferma dove sei tu',
  'hero.lede':
    'Imposta l’episodio a cui sei arrivato. Ogni personaggio, saga e isola archiviati dopo quel punto restano nella nebbia, finché non decidi tu.',

  'dial.label': 'Episodio a cui sei arrivato',
  'dial.hint': 'Da 1 a {max}.',
  'dial.errorRange': 'Scrivi un numero tra 1 e {max}.',
  'dial.errorEmpty': 'Scrivi l’episodio a cui sei arrivato.',
  'dial.decrease': 'Un episodio indietro',
  'dial.increase': 'Un episodio avanti',
  'dial.clear': 'Dimentica il mio episodio',

  'veil.locked': 'Nella nebbia fino all’episodio {episode}',
  'veil.reveal': 'Dirada la nebbia comunque',
  'veil.revealShort': 'Dirada',
  'veil.placeholder': 'Spoiler',

  'chart.title': 'La rotta, fin dove hai navigato',
  'chart.opensAt': 'Episodio {episode}',
  'chart.hereSet': 'Sei qui · episodio {episode}',
  'chart.hereUnset':
    'Nessun episodio impostato · tutta la rotta è nella nebbia',

  'legend.open': 'aperte per te',
  'legend.covered': 'nella nebbia',
  'legend.filed': 'archiviate finora',

  'faq.animeQ': 'Anime o manga?',
  'faq.animeA':
    'Anime. Ogni soglia conta episodi dell’anime, e quando è incerta viene arrotondata per eccesso: una soglia troppo bassa dirada la nebbia in anticipo, ed è l’unico errore che qui conta davvero.',
  'faq.bookmarkQ': 'Dove vive il mio episodio?',
  'faq.bookmarkA':
    'In un cookie su questo dispositivo. Il server lo legge prima che la pagina sia disegnata, così niente sfugge nell’istante prima che parta lo script. Nessun account, nessun tracciamento.',
  'faq.peekQ': 'Posso guardare comunque?',
  'faq.peekA':
    'Sempre. Niente resta chiuso per sempre: una voce coperta è a un clic voluto dall’essere letta, e la pagina non si ricorderà che hai guardato.',

  'footer.lead': 'Nessuno dovrebbe sapere come va a finire prima di arrivarci.',
  'footer.colophon':
    'Zero Spoiler è una wiki di One Piece disegnata come una carta nautica: la rotta è l’archivio ordinato per l’episodio da cui ogni voce si apre, e la linea dell’orizzonte la sposti tu. Le soglie contano episodi dell’anime. Il tuo segnalibro è un cookie su questo dispositivo e viene letto dal server. Ogni immagine è un disegno a tratto fatto per questo sito; non compare nessuna immagine ufficiale. Composto in Bricolage Grotesque, Instrument Sans e JetBrains Mono. Licenza MIT.',

  'kind.character': 'Personaggio',
  'kind.arc': 'Saga',
  'kind.place': 'Luogo',
  'kind.ship': 'Nave',

  'locale.label': 'Lingua',
  'locale.it': 'Italiano',
  'locale.en': 'English',
}
