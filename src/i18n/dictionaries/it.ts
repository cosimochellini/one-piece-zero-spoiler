import type { Dictionary } from '~/i18n/types'

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
    'Una wiki di One Piece che nasconde ogni personaggio, saga, isola e frutto del diavolo archiviati dopo l’episodio a cui sei arrivato.',

  'nav.skip': 'Vai al contenuto',
  'nav.characters': 'Personaggi',
  'nav.places': 'Luoghi',
  'nav.fruits': 'Frutti',
  'nav.label': 'Pagine',

  'hero.headline': 'La wiki si ferma dove sei tu',
  'hero.lede':
    'Imposta il segnalibro nella barra qui sopra: l’episodio dell’anime, la stagione e l’episodio, o il capitolo del manga a cui sei arrivato. Ogni personaggio, saga, isola e frutto del diavolo archiviati dopo quel punto restano nella nebbia, finché non decidi tu.',
  'hero.setBookmark': 'Imposta il segnalibro',
  'hero.changeBookmark': 'Cambia il segnalibro · {threshold}',
  'hero.explore': 'Esplora l’archivio',

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
  'veil.revealing': 'Dirado…',
  'veil.peekFailed': 'Non è riuscito — riprova',
  'veil.placeholder': 'Spoiler',

  'chart.title': 'La rotta, fin dove hai navigato',
  'chart.opensAt.episode': 'Episodio {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Capitolo {threshold}',
  'chart.foggedDescription.episode':
    'Una voce archiviata all’episodio {threshold}, oltre il tuo segnalibro.',
  'chart.foggedDescription.season':
    'Una voce archiviata a {threshold}, oltre il tuo segnalibro.',
  'chart.foggedDescription.chapter':
    'Una voce archiviata al capitolo {threshold}, oltre il tuo segnalibro.',
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
    'I personaggi di One Piece, ognuno archiviato all’episodio che lo introduce e coperto finché non ci arrivi.',
  'characters.featuredTitle': 'In evidenza',
  'characters.featuredLede':
    'I personaggi che la carta disegna: la ciurma, e le persone attorno a cui gira la storia.',
  'characters.bookTitle': 'Tutto il libro',
  'characters.loading': 'Gli scaffali stanno arrivando…',
  'characters.bookLede':
    'Tutti quelli che l’archivio ha registrato, ordinati per l’arco che li introduce.',
  'characters.sectionOpensAt.episode': 'Dall’episodio {threshold}',
  'characters.sectionOpensAt.season': 'Da {threshold}',
  'characters.sectionOpensAt.chapter': 'Dal capitolo {threshold}',
  'characters.sectionCount': '{count} personaggi',
  'characters.sectionCountOne': '1 personaggio',
  'characters.sectionFogged': 'Un arco nella nebbia',

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
    'Dove questa voce sta sulla carta, e cosa è archiviato ai suoi lati.',
  'character.epithet': 'Epiteto',
  'character.affiliation': 'Affiliazione',
  'character.origin': 'Origine',
  'character.devilFruit': 'Frutto del diavolo',
  'character.bounty': 'Taglia',
  'character.bountyValue': '{amount} Berry',
  'character.factsLabel': 'Quello che si sa finora',
  'character.factsInEpisodes':
    'I fatti di un dossier contano in episodi dell’anime. Imposta un segnalibro a episodi o a stagioni per leggerli; con un segnalibro a capitoli restano coperti.',
  'character.before': 'Archiviato prima',
  'character.after': 'Archiviato dopo',
  'character.routeStart': 'Niente. La rotta comincia qui.',
  'character.routeEnd': 'Ancora niente. Questa è l’ultima voce archiviata.',
  'character.nearbyTitle': 'Navigano vicino',
  'character.nearbyLoading': 'Leggo la rotta…',
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

  'fruits.title': 'Il foglio dei campioni',
  'fruits.count':
    '{count} frutti del diavolo, disposti su tre tavole nell’ordine in cui la storia li nomina. La nebbia non risponde alle ricerche.',
  'fruits.pageTitle': 'Frutti del diavolo — Zero Spoiler',
  'fruits.pageDescription':
    'I frutti del diavolo di One Piece, ognuno disegnato come un campione e archiviato all’episodio che lo nomina per la prima volta.',
  'fruits.searchLabel': 'Trova un frutto',
  'fruits.searchClear': 'Cancella la ricerca',
  'fruits.searchPlaceholder': 'Gom Gom',
  'fruits.shown': '{count} frutti aperti su {total} mostrati',
  'fruits.noMatch': 'Nessun frutto aperto si chiama “{query}”.',
  'fruits.plate': 'Tavola {index}',
  'fruits.specimen': 'Campione {index}',
  'fruits.bandCount': '{count} frutti',
  'fruits.bandCountOne': '1 frutto',
  'fruits.lede.paramecia': 'I frutti che cambiano ciò che un corpo può fare.',
  'fruits.lede.zoan': 'I frutti che trasformano un corpo in un altro animale.',
  'fruits.lede.logia': 'I frutti che trasformano un corpo in un elemento.',
  'fruits.foggedTitle': '{count} nella nebbia',
  'fruits.foggedTitleOne': '1 nella nebbia',
  'fruits.foggedHint':
    'I loro nomi sono coperti, quindi non rispondono a una ricerca. Sposta il segnalibro nella barra per aprirli.',
  'fruits.allOpen': 'Su questa tavola non c’è niente nella nebbia.',

  'fruit.opensAt.episode':
    'Nominato per la prima volta nell’episodio {threshold}',
  'fruit.opensAt.season': 'Nominato per la prima volta in {threshold}',
  'fruit.opensAt.chapter':
    'Nominato per la prima volta nel capitolo {threshold}',
  'fruit.foggedName': 'Un frutto nella nebbia',
  'fruit.foggedTitle': 'Un frutto nella nebbia — Zero Spoiler',
  'fruit.foggedDescription.episode':
    'Un frutto del diavolo di One Piece archiviato all’episodio {threshold}. Imposta il tuo segnalibro per leggere la pagina.',
  'fruit.foggedDescription.season':
    'Un frutto del diavolo di One Piece archiviato a {threshold}. Imposta il tuo segnalibro per leggere la pagina.',
  'fruit.foggedDescription.chapter':
    'Un frutto del diavolo di One Piece archiviato al capitolo {threshold}. Imposta il tuo segnalibro per leggere la pagina.',
  'fruit.pageTitle': '{name} — Zero Spoiler',
  'fruit.back': 'Tutti i frutti del diavolo',
  'fruit.form': 'Tipo',
  'fruit.eatersTitle': 'Chi l’ha mangiato',
  'fruit.eatersLede':
    'I personaggi che l’archivio registra come mangiatori di questo frutto, ciascuno sotto la propria nebbia.',
  'fruit.eatersLoading': 'Leggo i dossier…',
  'fruit.eatersNone': 'Nessuno nell’archivio l’ha ancora mangiato.',
  'fruit.eatersInEpisodes':
    'I dossier contano in episodi dell’anime. Imposta un segnalibro a episodio o a stagione per leggere chi l’ha mangiato; un segnalibro a capitolo li tiene coperti.',
  'fruit.siblingsTitle': 'Altri di questo tipo',
  'fruit.siblingsLede':
    'I frutti archiviati più vicino a questo sulla stessa tavola.',
  'fruit.siblingsLoading': 'Leggo il foglio…',
  'fruit.siblingsNone': 'Non c’è ancora nient’altro di questo tipo archiviato.',
  'fruit.notFoundTitle': 'Nessun frutto così',
  'fruit.notFoundBody':
    'Non c’è niente archiviato a questo indirizzo. Il foglio dei campioni elenca tutti i frutti che ci sono.',

  // `Zoo Zoo` and not `Zoan`: the names here are the Italian dub's, the same
  // rule that makes the captain Rufy and the clown Bagy, and the dub calls
  // that class of fruit Zoo Zoo. The other two classes the dub leaves as they
  // are, which is why they read the same as the English.
  'fruitForm.paramecia': 'Paramecia',
  'fruitForm.zoan': 'Zoo Zoo',
  'fruitForm.logia': 'Logia',

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
  'kind.fruit': 'Frutto del diavolo',

  'locale.label': 'Lingua',
  'locale.it': 'Italiano',
  'locale.en': 'English',
}
