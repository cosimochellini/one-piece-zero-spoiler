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
  'nav.characters': 'Personaggi',
  'nav.places': 'Luoghi',
  'nav.label': 'Pagine',

  'hero.headline': 'La wiki si ferma dove sei tu',
  'hero.lede':
    'Imposta il segnalibro nella barra qui sopra: l’episodio dell’anime, la stagione e l’episodio, o il capitolo del manga a cui sei arrivato. Ogni personaggio, saga e isola archiviati dopo quel punto restano nella nebbia, finché non decidi tu.',

  'mark.unset': 'Imposta episodio',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.change': 'Cambia il tuo segnalibro, {threshold}',

  'dialog.title': 'Dove sei arrivato?',
  'dialog.lede':
    'Scegli come conti, poi il numero. Tutto ciò che è archiviato dopo resta nella nebbia.',
  'dialog.modeLabel': 'Conta per',
  'dialog.modeEpisode': 'Episodio dell’anime',
  'dialog.modeSeason': 'Stagione ed episodio',
  'dialog.modeChapter': 'Capitolo del manga',
  'dialog.episodeLabel': 'Episodio a cui sei arrivato',
  'dialog.chapterLabel': 'Capitolo a cui sei arrivato',
  'dialog.seasonLabel': 'Stagione',
  'dialog.seasonPlaceholder': 'Scegli una stagione',
  'dialog.seasonOption': 'Stagione {season} · episodi {first}–{last}',
  'dialog.seasonOptionOpen': 'Stagione {season} · dall’episodio {first}',
  'dialog.seasonEpisodeLabel': 'Episodio nella stagione',
  'dialog.hint': 'Da 1 a {max}.',
  'dialog.errorEmpty': 'Scrivi un numero.',
  'dialog.errorRange': 'Scrivi un numero tra 1 e {max}.',
  'dialog.errorSeason': 'Prima scegli una stagione.',
  'dialog.decrease': 'Uno indietro',
  'dialog.increase': 'Uno avanti',
  'dialog.save': 'Salva',
  'dialog.forget': 'Dimentica il mio segnalibro',
  'dialog.cancel': 'Annulla',

  'veil.locked.episode': 'Nella nebbia fino all’episodio {threshold}',
  'veil.locked.season': 'Nella nebbia fino a {threshold}',
  'veil.locked.chapter': 'Nella nebbia fino al capitolo {threshold}',
  'veil.reveal': 'Dirada la nebbia comunque',
  'veil.revealShort': 'Dirada',
  'veil.placeholder': 'Spoiler',

  'chart.title': 'La rotta, fin dove hai navigato',
  'chart.opensAt.episode': 'Episodio {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Capitolo {threshold}',
  'chart.hereSet.episode': 'Sei qui · episodio {threshold}',
  'chart.hereSet.season': 'Sei qui · {threshold}',
  'chart.hereSet.chapter': 'Sei qui · capitolo {threshold}',
  'chart.hereUnset':
    'Nessun segnalibro impostato · tutta la rotta è nella nebbia',

  'legend.open': 'aperte per te',
  'legend.covered': 'nella nebbia',
  'legend.filed': 'archiviate finora',

  'faq.animeQ': 'Anime o manga?',
  'faq.animeA':
    'Entrambi. Conta per episodio dell’anime, per stagione ed episodio, o per capitolo del manga: ogni voce ha una soglia in episodi e una in capitoli, e quando è incerta viene arrotondata per eccesso. Una soglia troppo bassa dirada la nebbia in anticipo, ed è l’unico errore che qui conta davvero.',
  'faq.bookmarkQ': 'Dove vive il mio segnalibro?',
  'faq.bookmarkA':
    'In un cookie su questo dispositivo. Il server lo legge prima che la pagina sia disegnata, così niente sfugge nell’istante prima che parta lo script. Nessun account, nessun tracciamento.',
  'faq.peekQ': 'Posso guardare comunque?',
  'faq.peekA':
    'Sempre. Niente resta chiuso per sempre: una voce coperta è a un clic voluto dall’essere letta, e la pagina non si ricorderà che hai guardato.',

  'footer.lead': 'Nessuno dovrebbe sapere come va a finire prima di arrivarci.',
  'footer.colophon':
    'Zero Spoiler è una wiki di One Piece disegnata come una carta nautica: la rotta è l’archivio ordinato per l’episodio da cui ogni voce si apre, e la linea dell’orizzonte la sposti tu. Le soglie contano episodi dell’anime o capitoli del manga, a tua scelta. Il tuo segnalibro è un cookie su questo dispositivo e viene letto dal server. Ogni immagine è un disegno a tratto fatto per questo sito; non compare nessuna immagine ufficiale. Composto in Bricolage Grotesque, Instrument Sans e JetBrains Mono. Licenza MIT.',

  'characters.title': 'Il libro dei segnali',
  'characters.count':
    '{count} personaggi, nell’ordine in cui l’anime li incontra. La nebbia non risponde alle ricerche.',
  'characters.searchLabel': 'Trova un personaggio',
  'characters.searchClear': 'Cancella la ricerca',
  'characters.shown': '{count} personaggi aperti su {total} mostrati',
  'characters.noMatch': 'Nessun personaggio aperto si chiama “{query}”.',
  'characters.foggedTitle': '{count} nella nebbia',
  'characters.foggedHint':
    'I loro nomi sono coperti, quindi non rispondono a una ricerca. Sposta il segnalibro nella barra per aprirli.',
  'characters.foggedTitleOne': '1 nella nebbia',
  'characters.allOpen':
    'Niente è nella nebbia. Ogni personaggio è aperto per te.',
  'characters.pageTitle': 'Personaggi — Zero Spoiler',
  'characters.pageDescription':
    'Venti personaggi di One Piece, ciascuno archiviato all’episodio che lo introduce e coperto finché non ci arrivi.',

  'character.opensAt.episode':
    'Compare per la prima volta nell’episodio {threshold}',
  'character.opensAt.season': 'Compare per la prima volta in {threshold}',
  'character.opensAt.chapter':
    'Compare per la prima volta nel capitolo {threshold}',
  'character.foggedName': 'Un personaggio nella nebbia',
  'character.foggedTitle': 'Un personaggio nella nebbia — Zero Spoiler',
  'character.foggedDescription.episode':
    'Un personaggio di One Piece archiviato all’episodio {threshold}. Imposta il tuo segnalibro per leggere la pagina.',
  'character.foggedDescription.season':
    'Un personaggio di One Piece archiviato a {threshold}. Imposta il tuo segnalibro per leggere la pagina.',
  'character.foggedDescription.chapter':
    'Un personaggio di One Piece archiviato al capitolo {threshold}. Imposta il tuo segnalibro per leggere la pagina.',
  'character.pageTitle': '{name} — Zero Spoiler',
  'character.back': 'Tutti i personaggi',
  'character.routeTitle': 'Sulla rotta',
  'character.position': 'Tappa {index} di {total}',
  'character.positionLede':
    'Dove sta questa voce tra tutto quello che l’archivio ha catalogato, e cosa c’è archiviato prima e dopo.',
  'character.before': 'Archiviato prima',
  'character.after': 'Archiviato dopo',
  'character.routeStart': 'Niente. La rotta comincia qui.',
  'character.routeEnd': 'Ancora niente. Questa è l’ultima voce archiviata.',
  'character.nearbyTitle': 'Navigano vicino',
  'character.nearbyLede':
    'I personaggi in elenco archiviati più vicino a questo sulla rotta.',
  'character.notFoundTitle': 'Nessun personaggio così',
  'character.notFoundBody':
    'Non c’è niente archiviato a questo indirizzo. Il libro dei segnali elenca tutti quelli che ci sono.',

  'places.title': 'Il giornale di bordo',
  'places.count':
    '{count} luoghi, nell’ordine in cui la nave vi fa scalo. Ognuno è archiviato all’episodio che lo mostra per la prima volta.',
  'places.pageTitle': 'Luoghi — Zero Spoiler',
  'places.pageDescription':
    'I luoghi di One Piece come scali di una rotta, ciascuno archiviato all’episodio che lo mostra per la prima volta e coperto finché non ci arrivi.',
  'places.stage': 'Scalo {index} di {total}',
  'places.foggedName': 'Un luogo nella nebbia',
  'places.foggedDescription.episode':
    'Un luogo di One Piece archiviato all’episodio {threshold}. Imposta il tuo segnalibro per leggere la sua voce nel giornale.',
  'places.foggedDescription.season':
    'Un luogo di One Piece archiviato a {threshold}. Imposta il tuo segnalibro per leggere la sua voce nel giornale.',
  'places.foggedDescription.chapter':
    'Un luogo di One Piece archiviato al capitolo {threshold}. Imposta il tuo segnalibro per leggere la sua voce nel giornale.',
  'places.firstSeen.episode':
    'Compare per la prima volta nell’episodio {threshold}',
  'places.firstSeen.season': 'Compare per la prima volta in {threshold}',
  'places.firstSeen.chapter':
    'Compare per la prima volta nel capitolo {threshold}',
  'places.sea': 'Mare',
  'places.form': 'Che cos’è',
  'places.arc': 'Saga',
  'places.landmark': 'Punto di riferimento',
  'places.filedHere': 'Archiviati qui',
  'places.filedNone': 'Niente dell’archivio è ancora archiviato qui.',

  'sea.east-blue': 'East Blue',
  'sea.grand-line': 'Rotta Maggiore',
  'sea.new-world': 'Nuovo Mondo',

  'form.village': 'Villaggio',
  'form.town': 'Cittadina',
  'form.restaurant': 'Ristorante galleggiante',
  'form.island': 'Isola',

  'kind.character': 'Personaggio',
  'kind.arc': 'Saga',
  'kind.place': 'Luogo',
  'kind.ship': 'Nave',

  'locale.label': 'Lingua',
  'locale.it': 'Italiano',
  'locale.en': 'English',
}
