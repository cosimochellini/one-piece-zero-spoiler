import type { Dictionary } from '~/i18n/types'

/**
 * The Italian dictionary. The `Dictionary` annotation is load-bearing: drop a
 * key that `en.ts` declares and `npm run typecheck` fails.
 *
 * It is written in Italian, not translated from `en.ts`: each key means the
 * same thing in both, and the `tone-of-voice` skill in `.claude/skills` sets
 * the wording. See `en.ts` for why this is not called `it`.
 */
export const itDictionary: Dictionary = {
  'site.name': 'Zero Spoiler',
  'site.title': 'Zero Spoiler | La wiki di One Piece senza spoiler',
  'site.description':
    'Una wiki di One Piece che nasconde personaggi, saghe, luoghi e frutti del diavolo oltre l’ultimo episodio visto o l’ultimo capitolo letto.',
  'seo.imageAlt':
    'La card di Zero Spoiler: il logo sopra una rotta che sparisce nella nebbia.',

  'nav.skip': 'Vai al contenuto',
  'nav.characters': 'Personaggi',
  'nav.places': 'Luoghi',
  'nav.fruits': 'Frutti',
  'nav.label': 'Pagine',

  'hero.headline': 'La wiki di One Piece senza spoiler',
  'hero.lede':
    'Imposta il segnalibro dalla barra in alto: un episodio dell’anime, una stagione con il suo episodio o un capitolo del manga. Quello che viene dopo resta nella nebbia, ma puoi sempre aprirlo se vuoi.',
  'hero.setBookmark': 'Imposta il segnalibro',
  'hero.changeBookmark': 'Cambia segnalibro · {threshold}',
  'hero.explore': 'Vai ai personaggi',

  'mark.unset': 'Imposta episodio',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.change': 'Cambia segnalibro ({threshold})',

  'dialog.title': 'A che punto sei?',
  'dialog.lede':
    'Scegli come contare, poi inserisci il numero. Quello che viene dopo resta nella nebbia.',
  'dialog.modeLabel': 'Conta per',
  'dialog.modeEpisode': 'Episodio dell’anime',
  'dialog.modeSeason': 'Stagione ed episodio',
  'dialog.modeChapter': 'Capitolo del manga',
  'dialog.episodeLabel': 'Ultimo episodio che hai visto',
  'dialog.chapterLabel': 'Ultimo capitolo che hai letto',
  'dialog.seasonLabel': 'Stagione',
  'dialog.seasonPlaceholder': 'Scegli una stagione',
  'dialog.seasonOption': 'Stagione {season} · episodi {first}–{last}',
  'dialog.seasonOptionOpen': 'Stagione {season} · dall’episodio {first} in poi',
  'dialog.seasonEpisodeLabel': 'Episodio della stagione',
  'dialog.hint': 'Da 1 a {max}.',
  'dialog.errorEmpty': 'Inserisci un numero.',
  'dialog.errorRange': 'Inserisci un numero da 1 a {max}.',
  'dialog.errorSeason': 'Scegli prima una stagione.',
  'dialog.decrease': 'Uno in meno',
  'dialog.increase': 'Uno in più',
  'dialog.save': 'Salva',
  'dialog.forget': 'Cancella il segnalibro',
  'dialog.cancel': 'Annulla',

  'veil.locked.episode': 'Nella nebbia fino all’episodio {threshold}',
  'veil.locked.season': 'Nella nebbia fino a {threshold}',
  'veil.locked.chapter': 'Nella nebbia fino al capitolo {threshold}',
  'veil.reveal': 'Mostra comunque',
  'veil.revealShort': 'Mostra',
  'veil.revealing': 'Caricamento…',
  'veil.peekFailed': 'Caricamento non riuscito. Riprova.',
  'veil.placeholder': 'Spoiler',

  'chart.title': 'Le voci principali, nell’ordine della storia',
  'chart.opensAt.episode': 'Episodio {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Capitolo {threshold}',
  'chart.foggedDescription.episode':
    'Una voce dell’episodio {threshold}, dopo il tuo segnalibro.',
  'chart.foggedDescription.season':
    'Una voce di {threshold}, dopo il tuo segnalibro.',
  'chart.foggedDescription.chapter':
    'Una voce del capitolo {threshold}, dopo il tuo segnalibro.',
  'chart.hereSet.episode': 'Sei qui · episodio {threshold}',
  'chart.hereSet.season': 'Sei qui · {threshold}',
  'chart.hereSet.chapter': 'Sei qui · capitolo {threshold}',
  'chart.hereUnset': 'Nessun segnalibro · è tutto nella nebbia',

  'legend.open': 'visibili',
  'legend.covered': 'nella nebbia',
  'legend.filed': 'in totale',

  'faq.animeQ': 'Anime o manga?',
  'faq.animeA':
    'Tutti e due. Puoi contare per episodio dell’anime, per stagione ed episodio o per capitolo del manga. Ogni voce ha sia un numero di episodio sia uno di capitolo. Quando il punto esatto è incerto viene arrotondato per eccesso, così è più facile che una voce si apra tardi che presto.',
  'faq.bookmarkQ': 'Dove viene salvato il segnalibro?',
  'faq.bookmarkA':
    'In un cookie su questo dispositivo. Il server lo legge prima di generare la pagina, quindi le voci nascoste non sono nella pagina che ricevi. Non serve un account e non c’è nessun tracciamento.',
  'faq.peekQ': 'Posso vedere una voce nascosta?',
  'faq.peekA':
    'Sì, premi “Mostra comunque”. La scelta non viene salvata e il resto rimane nascosto.',

  'footer.lead':
    'Una wiki di One Piece che nasconde quello che viene dopo il tuo segnalibro.',
  'footer.colophon':
    'Tutti i disegni sono fatti per questo sito e non ci sono immagini ufficiali. Il segnalibro viene salvato in un cookie su questo dispositivo. Licenza MIT.',

  'characters.title': 'Personaggi',
  'characters.count':
    '{count} personaggi, nell’ordine in cui compaiono nell’anime. Quelli nella nebbia non compaiono nei risultati della ricerca.',
  'characters.searchLabel': 'Cerca un personaggio',
  'characters.searchClear': 'Cancella la ricerca',
  'characters.shown': 'Risultati: {count} su {total} personaggi visibili',
  'characters.noMatch': 'Nessun personaggio visibile corrisponde a “{query}”.',
  'characters.foggedTitle': '{count} nella nebbia',
  'characters.foggedHint':
    'I loro nomi sono nascosti, quindi la ricerca non li trova. Sposta avanti il segnalibro per vederli.',
  'characters.foggedTitleOne': '1 nella nebbia',
  'characters.allOpen': 'Non c’è niente nella nebbia: vedi tutti i personaggi.',
  'characters.pageTitle': 'Personaggi | Zero Spoiler',
  'characters.pageDescription':
    'I personaggi di One Piece, ognuno nascosto fino all’episodio in cui compare per la prima volta.',
  'characters.featuredTitle': 'Personaggi principali',
  'characters.featuredLede':
    'La ciurma di Cappello di Paglia e gli altri personaggi chiave della storia.',
  'characters.bookTitle': 'Tutti i personaggi',
  'characters.loading': 'Caricamento dei personaggi…',
  'characters.bookLede':
    'Tutti i personaggi della wiki, divisi per la saga in cui compaiono per la prima volta.',
  'characters.sectionOpensAt.episode': 'Dall’episodio {threshold}',
  'characters.sectionOpensAt.season': 'Da {threshold}',
  'characters.sectionOpensAt.chapter': 'Dal capitolo {threshold}',
  'characters.sectionCount': '{count} personaggi',
  'characters.sectionCountOne': '1 personaggio',
  'characters.sectionFogged': 'Saga nella nebbia',

  'character.opensAt.episode':
    'Compare per la prima volta nell’episodio {threshold}',
  'character.opensAt.season': 'Compare per la prima volta in {threshold}',
  'character.opensAt.chapter':
    'Compare per la prima volta nel capitolo {threshold}',
  'character.foggedName': 'Un personaggio nella nebbia',
  'character.foggedTitle': 'Un personaggio nella nebbia | Zero Spoiler',
  'character.foggedDescription.episode':
    'Un personaggio di One Piece che compare per la prima volta nell’episodio {threshold}. Imposta il segnalibro per leggere la pagina.',
  'character.foggedDescription.season':
    'Un personaggio di One Piece che compare per la prima volta in {threshold}. Imposta il segnalibro per leggere la pagina.',
  'character.foggedDescription.chapter':
    'Un personaggio di One Piece che compare per la prima volta nel capitolo {threshold}. Imposta il segnalibro per leggere la pagina.',
  'character.pageTitle': '{name} | Zero Spoiler',
  'character.back': 'Tutti i personaggi',
  'character.routeTitle': 'Nell’ordine della storia',
  'character.position': 'Voce {index} di {total}',
  'character.positionLede':
    'Dove si colloca questo personaggio nella storia, con le voci subito prima e subito dopo.',
  'character.status': 'Stato',
  'character.epithet': 'Epiteto',
  'character.affiliation': 'Affiliazione',
  'character.origin': 'Origine',
  'character.devilFruit': 'Frutto del diavolo',
  'character.bounty': 'Taglia',
  'character.bountyValue': '{amount} Berry',
  'character.factsLabel': 'Fatti fino al tuo segnalibro',
  'character.chronicleTitle': 'La storia finora',
  'character.chronicleLede':
    'Le sue vicende fino al tuo segnalibro. Ogni parte inizia dall’episodio in cui avviene.',
  'character.before': 'Prima',
  'character.after': 'Dopo',
  'character.routeStart': 'Niente, questa è la prima voce.',
  'character.routeEnd':
    'Ancora niente, questa è l’ultima voce nell’ordine della storia.',
  'character.nearbyTitle': 'Compaiono nello stesso periodo',
  'character.nearbyLoading': 'Caricamento dei personaggi…',
  'character.nearbyLede':
    'Altri personaggi che compaiono per la prima volta vicino a questo.',
  'character.notFoundTitle': 'Personaggio non trovato',
  'character.notFoundBody':
    'A questo indirizzo non c’è nessun personaggio. Li trovi tutti nella pagina Personaggi.',

  'places.title': 'Luoghi',
  'places.count':
    '{count} luoghi, nell’ordine in cui la ciurma li raggiunge. Ognuno si apre all’episodio in cui compare per la prima volta.',
  'places.pageTitle': 'Luoghi | Zero Spoiler',
  'places.pageDescription':
    'I luoghi di One Piece nell’ordine in cui la ciurma li raggiunge, ognuno nascosto fino all’episodio in cui compare per la prima volta.',
  'places.stage': 'Tappa {index} di {total}',
  'places.foggedName': 'Un luogo nella nebbia',
  'places.foggedDescription.episode':
    'Un luogo di One Piece che compare per la prima volta nell’episodio {threshold}. Imposta il segnalibro per leggerne la voce.',
  'places.foggedDescription.season':
    'Un luogo di One Piece che compare per la prima volta in {threshold}. Imposta il segnalibro per leggerne la voce.',
  'places.foggedDescription.chapter':
    'Un luogo di One Piece che compare per la prima volta nel capitolo {threshold}. Imposta il segnalibro per leggerne la voce.',
  'places.firstSeen.episode':
    'Compare per la prima volta nell’episodio {threshold}',
  'places.firstSeen.season': 'Compare per la prima volta in {threshold}',
  'places.firstSeen.chapter':
    'Compare per la prima volta nel capitolo {threshold}',
  'places.sea': 'Mare',
  'places.form': 'Tipo',
  'places.arc': 'Saga',
  'places.landmark': 'Punto di riferimento',
  'places.filedHere': 'Collegati a questo luogo',
  'places.filedNone':
    'Nella wiki non c’è ancora niente collegato a questo luogo.',

  'fruits.title': 'Frutti del diavolo',
  'fruits.count':
    '{count} frutti del diavolo, divisi per tipo e nell’ordine in cui la storia li nomina. Quelli nella nebbia non compaiono nei risultati della ricerca.',
  'fruits.pageTitle': 'Frutti del diavolo | Zero Spoiler',
  'fruits.pageDescription':
    'I frutti del diavolo di One Piece, ognuno nascosto fino all’episodio in cui viene nominato per la prima volta.',
  'fruits.searchLabel': 'Cerca un frutto',
  'fruits.searchClear': 'Cancella la ricerca',
  'fruits.searchPlaceholder': 'Gom Gom',
  'fruits.shown': 'Risultati: {count} su {total} frutti visibili',
  'fruits.noMatch': 'Nessun frutto visibile corrisponde a “{query}”.',
  'fruits.plate': 'Gruppo {index}',
  'fruits.specimen': 'Frutto {index}',
  'fruits.bandCount': '{count} frutti',
  'fruits.bandCountOne': '1 frutto',
  'fruits.lede.paramecia':
    'Frutti che danno a chi li mangia un potere specifico.',
  'fruits.lede.zoan': 'Frutti che permettono di trasformarsi in un animale.',
  'fruits.lede.logia': 'Frutti che permettono di diventare un elemento.',
  'fruits.foggedTitle': '{count} nella nebbia',
  'fruits.foggedTitleOne': '1 nella nebbia',
  'fruits.foggedHint':
    'I loro nomi sono nascosti, quindi la ricerca non li trova. Sposta avanti il segnalibro per vederli.',
  'fruits.allOpen': 'Nessun frutto di questo tipo è nella nebbia.',

  'fruit.opensAt.episode':
    'Nominato per la prima volta nell’episodio {threshold}',
  'fruit.opensAt.season': 'Nominato per la prima volta in {threshold}',
  'fruit.opensAt.chapter':
    'Nominato per la prima volta nel capitolo {threshold}',
  'fruit.foggedName': 'Un frutto nella nebbia',
  'fruit.foggedTitle': 'Un frutto nella nebbia | Zero Spoiler',
  'fruit.foggedDescription.episode':
    'Un frutto del diavolo di One Piece nominato per la prima volta nell’episodio {threshold}. Imposta il segnalibro per leggere la pagina.',
  'fruit.foggedDescription.season':
    'Un frutto del diavolo di One Piece nominato per la prima volta in {threshold}. Imposta il segnalibro per leggere la pagina.',
  'fruit.foggedDescription.chapter':
    'Un frutto del diavolo di One Piece nominato per la prima volta nel capitolo {threshold}. Imposta il segnalibro per leggere la pagina.',
  'fruit.pageTitle': '{name} | Zero Spoiler',
  'fruit.back': 'Tutti i frutti del diavolo',
  'fruit.form': 'Tipo',
  'fruit.eatersTitle': 'Chi l’ha mangiato',
  'fruit.eatersLede':
    'I personaggi che hanno mangiato questo frutto. Ognuno resta nella nebbia finché non ci arrivi.',
  'fruit.eatersLoading': 'Caricamento dei personaggi…',
  'fruit.eatersNone': 'Nessun personaggio della wiki l’ha ancora mangiato.',
  'fruit.siblingsTitle': 'Altri frutti di questo tipo',
  'fruit.siblingsLede':
    'I frutti dello stesso tipo nominati subito prima e subito dopo questo.',
  'fruit.siblingsLoading': 'Caricamento dei frutti…',
  'fruit.siblingsNone': 'Non ci sono ancora altri frutti di questo tipo.',
  'fruit.notFoundTitle': 'Frutto non trovato',
  'fruit.notFoundBody':
    'A questo indirizzo non c’è nessun frutto. Li trovi tutti nella pagina Frutti del diavolo.',

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
  'form.region': 'Regione',

  'status.alive': 'In vita',
  'status.deceased': 'Morte confermata',
  'status.presumed-dead': 'Morte presunta',
  'status.captured': 'In cattività',
  'status.imprisoned': 'In prigione',
  'status.missing': 'Irreperibile',
  'status.unknown': 'Sorte ignota',

  'kind.character': 'Personaggio',
  'kind.arc': 'Saga',
  'kind.place': 'Luogo',
  'kind.ship': 'Nave',
  'kind.fruit': 'Frutto del diavolo',

  'locale.label': 'Lingua',
  'locale.it': 'Italiano',
  'locale.en': 'English',
}
