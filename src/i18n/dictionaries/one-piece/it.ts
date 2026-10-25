import type { OnePieceCopy } from '~/i18n/types'

/**
 * One Piece's own copy, in Italian, typed against `../one-piece/en.ts` as the
 * shared copy is against `../en.ts`.
 */
export const onePieceIt: OnePieceCopy = {
  'nav.fruits': 'Frutti',

  'home.filler.title': 'Occhio ai filler',
  'home.filler.link': 'Vedi tutti i filler',

  'dialog.filler': 'Filler',

  'character.devilFruit': 'Frutto del diavolo',
  'character.bounty': 'Taglia',
  'character.bountyValue': '{amount} Berry',

  'ship.foggedName': 'Una nave nella nebbia',
  'ship.foggedTitle': 'Una nave nella nebbia | Zero Spoiler',
  'ship.foggedDescription.episode':
    'Una nave di One Piece, nella nebbia fino all’episodio {threshold}. Imposta il segnalibro per leggerne la voce.',
  'ship.foggedDescription.season':
    'Una nave di One Piece, nella nebbia fino a {threshold}. Imposta il segnalibro per leggerne la voce.',
  'ship.foggedDescription.chapter':
    'Una nave di One Piece, nella nebbia fino al capitolo {threshold}. Imposta il segnalibro per leggerne la voce.',
  'ship.drawingsLede':
    'Ogni disegno di questa nave fino al tuo segnalibro, dal più vecchio.',

  'filler.title': 'Episodi filler',
  'filler.count':
    '{episodes} episodi filler in tutto o in parte, e {unnumbered} tra film e speciali. Ognuno è visibile dall’episodio in cui va in onda.',
  'filler.pageTitle': 'Episodi filler | Zero Spoiler',
  'filler.pageDescription':
    'Quali episodi di One Piece sono filler, misti o riassunti, i gruppi che puoi saltare e dove vanno i film e gli speciali.',
  'filler.noBookmark':
    'Non hai ancora impostato un segnalibro, quindi ogni titolo e ogni trama sono nella nebbia. I gruppi da saltare e la striscia sono solo numeri, quindi restano visibili.',
  'filler.stripTitle': 'Tutta la serie',
  'filler.stripLede': 'Ogni episodio da 1 a {aired}, cento per riga.',
  'filler.stripLabel':
    'Episodi da 1 a {aired}: {filler} filler, {mixed} misti e {recap} riassunti.',
  'filler.legendCanon': 'Canonico',
  'filler.legendHere': 'Il tuo segnalibro',
  'filler.kind.filler': 'Filler',
  'filler.kind.mixed': 'Misto',
  'filler.kind.recap': 'Riassunto',
  'filler.kind.film': 'Film',
  'filler.kind.special': 'Speciale',
  'filler.skipTitle': 'Cosa puoi saltare',
  'filler.skipLede':
    'Filler puri e riassunti, raggruppati. Un episodio misto interrompe il gruppo, perché saltarlo fa perdere una parte della storia.',
  'filler.skipCount': '{count} episodi',
  'filler.skipCountOne': '1 episodio',
  'filler.episode': 'EP {value}',
  'filler.episodes': 'EP {first}–{last}',
  'filler.after': 'Dopo {value}',
  'filler.catalogueTitle': 'Episodio per episodio',
  'filler.catalogueLede':
    'Raggruppati per la saga in cui vanno in onda. Le voci dopo il tuo segnalibro sono nella nebbia.',
  'filler.countdown.next': 'Il prossimo filler è tra {count} episodi.',
  'filler.countdown.nextOne': 'Il prossimo episodio è un filler.',
  'filler.countdown.inRun':
    'Sei dentro un gruppo filler. Il canon riprende da {resume}, tra {count} episodi.',
  'filler.countdown.inRunOne':
    'Sei dentro un gruppo filler. Il canon riprende con il prossimo episodio.',
  'filler.countdown.none':
    'Non ci sono filler in vista fino all’episodio {aired}, l’ultimo uscito.',
  'filler.countdown.span': 'Il prossimo gruppo da saltare: {span}.',
  'filler.countdown.label': 'Il tuo episodio e i cinque successivi',
  'filler.countdown.here': 'il tuo segnalibro',
  'filler.cell.here': 'Ora',
  'filler.cell.filler': 'Filler',
  'filler.cell.mixed': 'Misto',
  'filler.cell.recap': 'Recap',
  'filler.cell.film': 'Film',
  'filler.cell.special': 'Speciale',
  'filler.entries': '{count} voci',
  'filler.entriesOne': '1 voce',
  'filler.foggedRows': '{count} voci nella nebbia',

  'ships.title': 'Navi',
  'ships.builder': 'Progettata da',
  'ships.launched': 'Ricevuta a',
  'ships.fate': 'Sorte',
  'ships.ports': 'Luoghi che raggiunge',

  'fruits.title': 'Frutti del diavolo',
  'fruits.count':
    '{count} frutti del diavolo, divisi per tipo e nell’ordine in cui la storia li nomina. Quelli nella nebbia non compaiono nei risultati della ricerca.',
  'fruits.countSaga':
    '{count} frutti del diavolo, divisi per saga e nell’ordine in cui la storia li nomina. Quelli nella nebbia non compaiono nei risultati della ricerca.',
  'fruits.countFaction':
    '{count} frutti del diavolo, divisi per la fazione di chi li ha mangiati, al punto del tuo segnalibro. Un frutto sta sotto ognuna delle loro fazioni. Quelli nella nebbia non compaiono nei risultati della ricerca.',
  'fruits.pageTitle': 'Frutti del diavolo | Zero Spoiler',
  'fruits.pageDescription':
    'I frutti del diavolo di One Piece, ognuno nascosto fino all’episodio in cui viene nominato per la prima volta.',
  'fruits.searchLabel': 'Cerca un frutto',
  'fruits.searchClear': 'Cancella la ricerca',
  'fruits.searchPlaceholder': 'Gom Gom, Rufy',
  'fruits.controls': 'Filtri',
  'fruits.searchOpen': 'Cerca',
  'fruits.view.legend': 'Raggruppa per',
  'fruits.view.type': 'Tipo',
  'fruits.view.saga': 'Saga',
  'fruits.view.faction': 'Fazione',
  'fruits.form.legend': 'Tipo di frutto',
  'fruits.form.all': 'Tutti',
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
  'fruits.albumFailed': 'Caricamento dei frutti del diavolo non riuscito.',
  'fruits.albumRetry': 'Riprova',
  'fruits.wall.title': '{count} frutti del diavolo sono nella nebbia',
  'fruits.wall.ask': 'A che episodio sei?',
  'fruits.wall.browse': 'Sfoglia comunque',
  'fruits.marquee': '{saga}: {count} frutti finora',
  'fruits.marqueeOne': '{saga}: 1 frutto finora',
  'fruits.marqueeNone': 'Ancora nessun frutto nuovo in questa saga.',
  'fruits.marqueeLink': 'Vedi tutta la saga',
  'fruits.later': '{count} frutti delle saghe successive, nella nebbia',
  'fruits.laterOne': '1 frutto di una saga successiva, nella nebbia',
  'fruits.laterAllOpen':
    'Qui nessun frutto delle saghe successive è nella nebbia.',
  'fruits.noFaction': 'Ancora senza fazione',
  'fruits.noneFogged': 'Qui niente è nella nebbia.',
  'fruits.lastFruit.episode':
    'L’ultimo è stato il {name}, nell’episodio {threshold}.',
  'fruits.lastFruit.season': 'L’ultimo è stato il {name}, in {threshold}.',
  'fruits.lastFruit.chapter':
    'L’ultimo è stato il {name}, nel capitolo {threshold}.',
  'fruits.moreEaters': 'e altri {count} personaggi che l’hanno mangiato',
  'fruits.moreEatersOne': 'e un altro personaggio che l’ha mangiato',

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
  'fruit.looks': 'Disegni di questo frutto',
  'fruit.look.power': 'Potere',
  'fruit.look.real': 'Frutto vero',
  'fruit.look.awakening': 'Risveglio',
  'fruit.historyTitle': 'Storia',
  'fruit.historyLede': 'Cosa succede a questo frutto, fino al tuo segnalibro.',
  'fruit.history.named': 'Nominato per la prima volta nella {saga}',
  'fruit.history.eaten': '{name} lo mangia',
  'fruit.history.deceased': '{name} muore',
  'fruit.history.presumed-dead': '{name}: morte presunta',
  'fruit.sagaTitle': 'Altri frutti di questa saga',
  'fruit.sagaLede':
    'I frutti visibili nominati per la prima volta nella stessa saga, i più vicini a questo.',
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
  'sea.calm-belt': 'Fascia di Bonaccia',
  'sea.red-line': 'Red Line',
  'sea.north-blue': 'North Blue',
  'sea.west-blue': 'West Blue',
  'sea.south-blue': 'South Blue',

  'faction.straw-hat-pirates': 'Pirati di Cappello di Paglia',
  'faction.straw-hat-grand-fleet': 'Grande Flotta di Cappello di Paglia',
  'faction.emperors': 'Imperatori',
  'faction.warlords': 'Flotta dei Sette',
  'faction.marines': 'Marina',
  'faction.world-government': 'Governo Mondiale',
  'faction.cp9': 'Cipher Pol 9',
  'faction.cp0': 'Cipher Pol 0',
  'faction.knights-of-god': 'Cavalieri di Dio',
  'faction.revolutionary-army': 'Armata Rivoluzionaria',
  'faction.baroque-works': 'Baroque Works',
  'faction.buggy-pirates': 'Pirati di Bagy',
  'faction.cross-guild': 'Cross Guild',
  'faction.whitebeard-pirates': 'Pirati di Barbabianca',
  'faction.blackbeard-pirates': 'Pirati di Barbanera',
  'faction.donquixote-pirates': 'Pirati di Donquijote',
  'faction.beasts-pirates': 'Pirati delle Cento Bestie',
  'faction.big-mom-pirates': 'Pirati di Big Mom',
  'faction.thriller-bark-pirates': 'Pirati di Thriller Bark',
  'faction.kuja-pirates': 'Pirate Kuja',
  'faction.galley-la': 'Galley-La Company',
  'faction.alabasta': 'Regno di Alabasta',
  'faction.tontatta': 'Regno di Tontatta',
  'faction.punk-hazard': 'Laboratorio di Punk Hazard',
  'faction.kozuki-family': 'Famiglia Kozuki',
  'faction.kozuki-alliance': 'Alleanza Kozuki',
  'faction.nine-red-scabbards': 'Nove Foderi Rossi',
  'faction.kurozumi-family': 'Famiglia Kurozumi',
  'faction.independent': 'Indipendenti',

  'kind.ship': 'Nave',
  'kind.fruit': 'Frutto del diavolo',
}
