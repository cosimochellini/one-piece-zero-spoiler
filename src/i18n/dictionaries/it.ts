import type { Dictionary } from '~/i18n/types'

/**
 * The copy every series shares, in Italian. The `Dictionary` annotation is
 * load-bearing: drop a key that `en.ts` declares and `npm run typecheck`
 * fails.
 *
 * It is written in Italian, not translated from `en.ts`: each key means the
 * same thing in both, and the `tone-of-voice` skill in `.claude/skills` sets
 * the wording. See `en.ts` for why this is not called `it`.
 */
export const itDictionary: Dictionary = {
  'site.name': 'Zero Spoiler',
  'site.title': 'Zero Spoiler | La wiki di {series} senza spoiler',
  'hub.title': 'Zero Spoiler | Wiki senza spoiler',
  'hub.description':
    'Wiki senza spoiler, una per serie. Ogni serie ha il suo segnalibro, e le voci che vengono dopo restano nella nebbia.',
  'hub.headline': 'Wiki senza spoiler',
  'hub.lede':
    'Una wiki per ogni serie, ognuna con il suo segnalibro. Le voci dopo il segnalibro restano nella nebbia.',
  'hub.count': '{count} voci',
  'hub.noBookmark': 'Nessun segnalibro',
  'hub.coming': 'In arrivo',
  'seo.imageAlt':
    'La card di Zero Spoiler: il logo sopra una rotta che sparisce nella nebbia.',

  'nav.skip': 'Vai al contenuto',
  'nav.characters': 'Personaggi',
  'nav.places': 'Luoghi',
  'nav.label': 'Pagine',
  'nav.hub': 'Tutte le serie',

  'hero.headline': 'La wiki di {series} senza spoiler',
  'hero.setBookmark': 'Imposta il segnalibro',
  'hero.changeBookmark': 'Cambia segnalibro · {threshold}',

  'onboarding.dial': 'Punto della storia',
  'onboarding.unitEpisode': 'Episodio',
  'onboarding.unitChapter': 'Capitolo',
  'onboarding.here': 'Sono qui',
  'onboarding.further': 'Sono più avanti',
  'onboarding.start': 'Inizio ora · EP 1',
  'onboarding.arcs': 'Saghe',
  'onboarding.cast': 'Personaggi',
  'onboarding.tryHint':
    'Apri una voce per vederne la pagina a questo punto. Il segnalibro non viene salvato.',
  'onboarding.tail':
    'Altre {count} voci restano nella nebbia finché il segnalibro non le raggiunge.',

  'trial.episode':
    'Stai provando l’episodio {threshold}. Non viene salvato niente.',
  'trial.chapter':
    'Stai provando il capitolo {threshold}. Non viene salvato niente.',
  'trial.save': 'Salva questo punto',
  'trial.leave': 'Esci dalla prova',

  'welcome.title': 'Cosa puoi fare ora',
  'welcome.lede':
    'Il segnalibro è salvato. Ogni pagina mostra quello che hai già raggiunto e tiene il resto nella nebbia.',
  'welcome.dismiss': 'Chiudi',

  'home.point.episode': 'Episodio {threshold}',
  'home.point.season': 'Stagione {season} · episodio {episode}',
  'home.point.chapter': 'Capitolo {threshold}',
  'home.recent': 'Appena successo',
  'home.before': 'Poco prima',
  'home.noStories': 'Ancora nessuna storia.',
  'home.storyAt.episode': 'Episodio {threshold}',
  'home.storyAt.season': '{threshold}',
  'home.storyAt.chapter': 'Circa capitolo {threshold}',
  'home.more': 'Altre storie',
  'home.cast': 'Chi conta adesso',

  'mark.unset': 'Imposta episodio',
  'mark.unsetShort': 'EP ?',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.change': 'Cambia segnalibro ({threshold})',

  'dialog.title': 'A che punto sei?',
  'dialog.lede': 'Quello che viene dopo resta nella nebbia.',
  'dialog.modeLabel': 'Conta per',
  'dialog.modeEpisode': 'Episodio',
  'dialog.modeSeason': 'Stagione',
  'dialog.modeChapter': 'Capitolo',
  'dialog.episodeLabel': 'Ultimo episodio che hai visto',
  'dialog.chapterLabel': 'Ultimo capitolo che hai letto',
  'dialog.seasonLabel': 'Stagione',
  'dialog.seasonPlaceholder': 'Scegli una stagione',
  'dialog.seasonOption': 'Stagione {season} · episodi {first}–{last}',
  'dialog.seasonOptionOpen': 'Stagione {season} · dall’episodio {first} in poi',
  'dialog.seasonEpisodeLabel': 'Episodio della stagione',
  'dialog.saga': 'Saga · {name}',
  'dialog.hint': 'Da 1 a {max}.',
  'dialog.errorEmpty': 'Inserisci un numero.',
  'dialog.errorRange': 'Inserisci un numero da 1 a {max}.',
  'dialog.errorSeason': 'Scegli prima una stagione.',
  'dialog.decrease': 'Uno in meno',
  'dialog.increase': 'Uno in più',
  'dialog.save': 'Salva',
  'dialog.forget': 'Cancella il segnalibro',
  'dialog.cancel': 'Annulla',
  'dialog.loading': 'Caricamento…',
  'dialog.loadFailed':
    'Caricamento non riuscito. Controlla la connessione e riprova.',
  'dialog.retry': 'Riprova',

  'veil.locked.episode': 'Nella nebbia fino all’episodio {threshold}',
  'veil.locked.season': 'Nella nebbia fino a {threshold}',
  'veil.locked.chapter': 'Nella nebbia fino al capitolo {threshold}',
  'veil.reveal': 'Mostra comunque',
  'veil.revealShort': 'Mostra',
  'veil.ask': 'Mostrare comunque?',
  'veil.confirm': 'Sì, mostra',
  'veil.revealing': 'Caricamento…',
  'veil.peekFailed': 'Caricamento non riuscito. Riprova.',
  'veil.placeholder': 'Spoiler',

  'chart.opensAt.episode': 'Episodio {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Capitolo {threshold}',
  'chart.hereSet.episode': 'Sei qui · episodio {threshold}',
  'chart.hereSet.season': 'Sei qui · {threshold}',
  'chart.hereSet.chapter': 'Sei qui · capitolo {threshold}',
  'chart.hereUnset': 'Nessun segnalibro · è tutto nella nebbia',
  'chart.title': 'Mappa dei luoghi',
  'chart.fog': '{count} tappe nella nebbia',
  'chart.fogOne': '1 tappa nella nebbia',
  'chart.peekOpen': 'Apri la scheda',
  'chart.peekClose': 'Chiudi',
  'chart.zoom': 'Zoom',
  'chart.zoomIn': 'Ingrandisci',
  'chart.zoomOut': 'Riduci',
  'chart.seeAll': 'Vedi tutto',
  'chart.seeSaga': 'La tua saga',
  'chart.zoomHint':
    'Ctrl o ⌘ con la rotellina per ingrandire, trascina per spostarti.',

  'faq.animeQ': 'Anime o manga?',
  'faq.animeA':
    'Tutti e due. Puoi contare per episodio dell’anime, per stagione ed episodio o per capitolo del manga. Ogni voce ha un numero di episodio e uno di capitolo. Quando il punto esatto è incerto si usa quello più avanti, così è più facile che una voce si apra tardi che presto.',
  'faq.bookmarkQ': 'Dove viene salvato il segnalibro?',
  'faq.peekQ': 'Posso vedere una voce nascosta?',
  'faq.peekA':
    'Sì. Nelle altre pagine della wiki premi “Mostra comunque”. La scelta non viene salvata e le altre voci restano nella nebbia.',

  'legal.title': 'Note legali',
  'legal.description':
    'Avviso sul progetto non ufficiale, contatti per i diritti, privacy e cookie, fonti e licenze.',
  'legal.projectTitle': 'Un progetto non ufficiale',
  'legal.unofficial':
    'Zero Spoiler è un progetto amatoriale non ufficiale e senza scopo di lucro. Non è affiliato né approvato dai titolari dei diritti delle serie di cui parla.',
  'legal.creditSource': 'Fonte ufficiale dei crediti',
  'legal.contact': 'Richieste sui diritti e correzioni su GitHub',
  'legal.contactHelp':
    'Indica l’URL della pagina, il materiale interessato e la richiesta sui diritti o la correzione. Evita spoiler nel titolo. Le issue GitHub sono pubbliche e richiedono un account. Non inserire informazioni riservate.',

  'credits.title': 'Fonti e licenze',
  'credits.intro':
    'Le fonti delle verifiche documentate e le licenze applicabili al progetto e alle fonti.',
  'credits.licensesTitle': 'Licenze del progetto',
  'credits.software':
    'La licenza MIT copre il software e la documentazione tecnica originale, nei limiti dei diritti detenuti dai contributori. Gli avvisi esistenti restano validi.',
  'credits.scopeNotice': 'Ambito della licenza e avvisi sui contenuti',
  'credits.content':
    'Testi delle voci, disegni e identità visiva sono esclusi dalla concessione MIT generale. Non viene assegnata una nuova licenza generale ai contenuti. Restano validi i diritti di terzi e le autorizzazioni esistenti.',
  'credits.sourcesTitle': 'Condizioni delle fonti',
  'credits.external':
    'Le pagine esterne possono anticipare fatti successivi, anche nei titoli. Aprendo una fonte esci dalla protezione dagli spoiler di questa wiki.',
  'credits.fandomTerms': 'Licenze e attribuzioni Fandom',
  'credits.fandomTermsIt': 'Licenze Fandom in italiano',
  'credits.referencesTitle': 'Riferimenti documentati',
  'credits.bookmark':
    'Sono elencati solo i riferimenti a materiali visibili al tuo segnalibro. La licenza accanto a una fonte riguarda il suo testo, non l’intero archivio.',
  'credits.empty':
    'Al tuo segnalibro non sono ancora visibili riferimenti alle singole voci. Puoi leggere gli avvisi generali sulle fonti e sulle licenze qui sopra.',
  'credits.episode': 'Episodio {episode}',
  'credits.scope.dossier': 'Campi della scheda nel campione verificato',
  'credits.scope.chronicle': 'Voce della storia nel campione verificato',
  'credits.scope.title': 'Solo il titolo dell’opera',
  'credits.scope.summary': 'Riassunto sostitutivo',
  'credits.factCheck':
    'Riferimento per il confronto o la verifica dei fatti documentati. Il processo di scrittura storico non è accertato: non si dichiarano testi indipendenti né nuove licenze sui contenuti.',
  'credits.replacement':
    'Entrambi i riassunti sono stati sostituiti con brevi testi basati su fatti verificati nella sinossi ufficiale. La sinossi non è stata tradotta per intero. Non viene assegnata una nuova licenza ai contenuti.',
  'credits.noOpenLicense': 'Nessuna autorizzazione aperta accertata.',

  'privacy.title': 'Privacy e cookie',
  'privacy.updated': 'Ultima verifica: 24 ottobre 2026.',
  'privacy.controllerTitle': 'Chi gestisce il sito',
  'privacy.controller':
    'Zero Spoiler è un progetto amatoriale personale e senza scopo di lucro. Il gestore e titolare del trattamento è una persona privata in Italia, contattabile su GitHub come @cosimochellini. Per una richiesta iniziale usa il link di contatto GitHub qui sotto.',
  'privacy.serviceTitle': 'Cosa invia una visita',
  'privacy.service':
    'Il browser invia a Cloudflare l’indirizzo richiesto, l’indirizzo IP, informazioni sul browser e i cookie pertinenti per consegnare le pagine e applicare il limite agli spoiler. Le richieste restano su questo sito; font e disegni sono ospitati qui. L’applicazione non usa account utente, pubblicità, analytics o profilazione.',
  'privacy.cookiesTitle': 'Cookie tecnici e memoria del browser',
  'privacy.cookiesIntro':
    'Questi cookie di prima parte servono alle funzioni che richiedi. Non sono usati per pubblicità o tracciamento tra siti. Le regole italiane sui cookie tecnici necessari non richiedono un banner di consenso per questi usi.',
  'privacy.bookmark':
    'zs_one-piece: il tuo segnalibro per episodio, capitolo o live action; dura 365 giorni dal salvataggio, oppure fino alla cancellazione. Anche aprire un link con un segnalibro imposta questo cookie. Il valore viene inviato al server per nascondere gli eventi successivi.',
  'privacy.language':
    'opzs_lang: la lingua scelta (it o en); dura 365 giorni dalla scelta. Viene inviato al server per ricordare la lingua nelle visite successive.',
  'privacy.trial':
    'zs_one-piece_try: un segnalibro temporaneo impostato quando provi il sito; è un cookie di sessione senza scadenza fissa, rimosso quando salvi o cancelli un segnalibro o esci dalla prova. Il ripristino della sessione del browser può conservarlo.',
  'privacy.attributes':
    'Tutti e tre i cookie usano Path=/ e SameSite=Lax, senza attributi Domain, Secure o HttpOnly. Il sito è servito tramite HTTPS. Sono leggibili dal JavaScript del sito e vengono inviati nelle richieste pertinenti allo stesso sito e nelle navigazioni principali da altri siti.',
  'privacy.storage':
    'opzs_welcome è un indicatore in sessionStorage che mostra un benvenuto una sola volta dopo il salvataggio del segnalibro. Viene rimosso quando la pagina iniziale lo legge o alla fine della sessione della scheda; non viene inviato al server. L’applicazione non usa localStorage.',
  'privacy.controlTitle': 'Le tue scelte',
  'privacy.control':
    'Puoi cancellare il segnalibro dalla sua finestra e rimuovere cookie e memoria del sito dalle impostazioni del browser. Bloccarli impedisce di ricordare le preferenze; senza segnalibro vedi la vista introduttiva. Non ci sono cookie di tracciamento facoltativi da accettare o rifiutare.',
  'privacy.hostingTitle': 'Hosting, log e trasferimenti',
  'privacy.hosting':
    'Cloudflare, Inc. ospita e consegna il sito tramite la propria rete e Cloudflare Workers. Ogni richiesta viene gestita in un data center Cloudflare, di solito vicino a te, che può trovarsi fuori dallo SEE. Cloudflare è una società statunitense, quindi i dati possono essere trasferiti negli Stati Uniti. Il sito non usa database, archiviazione di file, analytics o moduli di Cloudflare. Finché non viene spento, il vecchio indirizzo one-piece-zero-spoiler.netlify.app è ancora servito da Netlify, Inc., le cui funzioni girano in Ohio, negli Stati Uniti.',
  'privacy.logs':
    'Workers Logs è disattivato, quindi l’account Cloudflare del sito non conserva un log delle richieste. Cloudflare tratta comunque i dati delle richieste sulla propria rete per la sicurezza e per metriche aggregate sul traffico; per quanto tempo li conserva non è verificato per questo sito. Sul vecchio indirizzo Netlify conserva i log dell’attività delle funzioni per almeno 24 ore, più a lungo con alcuni piani. L’assenza di analytics non significa assenza di trattamento di dati personali.',
  'privacy.terms':
    'L’accordo sul trattamento dei dati pubblicato da Cloudflare fa parte dei suoi termini di abbonamento. Descrive Cloudflare come responsabile del trattamento e i suoi subfornitori, e si basa sul Data Privacy Framework UE–USA, con clausole contrattuali standard se la certificazione decade. I termini pubblicati da Netlify valgono allo stesso modo per il vecchio indirizzo. Sono i termini pubblicati dai fornitori; restano da confermare i dettagli contrattuali del sito e le modalità complete di conservazione.',
  'privacy.basesTitle': 'Finalità e basi giuridiche',
  'privacy.bases':
    'Le finalità sono consegnare le pagine richieste, applicare il limite agli spoiler, ricordare le tue scelte e mantenere il sito funzionante e sicuro. La base è il legittimo interesse a fornire questo servizio limitato (articolo 6(1)(f) GDPR); l’applicazione non aggiunge cronologie dei visitatori o profilazione per questi scopi. Le richieste applicabili sui diritti sono gestite per adempiere agli obblighi di legge (articolo 6(1)(c)). L’esenzione dal consenso per i cookie tecnici è distinta da queste basi GDPR. Puoi opporti come descritto sotto.',
  'privacy.rightsTitle': 'Domande e diritti',
  'privacy.rights':
    'Quando applicabili, puoi chiedere accesso, rettifica, cancellazione, limitazione o portabilità dei dati personali, opporti al trattamento e presentare reclamo al Garante italiano o all’autorità del tuo Paese. Le richieste riguardano i dati effettivamente detenuti; il valore di un cookie da solo non identifica un account nominativo.',
  'privacy.contact': 'Contatto su GitHub',
  'privacy.contactHelp':
    'Per un primo contatto sulla privacy apri una issue GitHub senza dati personali o riservati. Le issue sono pubbliche e richiedono un account. Non inserire indirizzi IP, valori dei cookie o documenti di identità. Concorderemo un canale riservato prima di discutere dati personali. GitHub tratta le informazioni che inserisci lì secondo la propria informativa privacy.',
  'privacy.sourcesTitle': 'Fonti e verifica',
  'privacy.garante': 'Garante: linee guida su cookie e tracciamento',
  'privacy.cloudflareLogs': 'Cloudflare: Workers Logs e conservazione',
  'privacy.cloudflareTerms': 'Cloudflare: accordo sul trattamento dei dati',
  'privacy.netlifyLogs': 'Netlify: log delle funzioni e conservazione',
  'privacy.netlifyTerms': 'Netlify: accordo sul trattamento e subfornitori',
  'privacy.audit': 'Verifica tecnica e controlli da completare',

  'footer.lead':
    'Una wiki di {series} che nasconde quello che viene dopo il tuo segnalibro.',
  'footer.colophon':
    'Tutti i disegni sono fatti per questo sito e non ci sono immagini ufficiali. Il segnalibro viene salvato in un cookie su questo dispositivo.',

  'footer.unofficial':
    'Progetto amatoriale non ufficiale, non approvato dai titolari dei diritti di {series}.',
  'footer.sharedLead':
    'Wiki che nascondono quello che viene dopo il tuo segnalibro.',
  'footer.sharedColophon':
    'Tutti i disegni sono fatti per questo sito e non ci sono immagini ufficiali. I segnalibri vengono salvati in cookie su questo dispositivo, uno per ogni serie.',
  'footer.sharedUnofficial':
    'Progetto amatoriale non ufficiale, non approvato dai titolari dei diritti delle serie.',

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
    'I personaggi di {series}, ognuno nascosto fino all’episodio in cui compare per la prima volta.',
  'characters.featuredTitle': 'Personaggi principali',
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
    'Un personaggio di {series} che compare per la prima volta nell’episodio {threshold}. Imposta il segnalibro per leggere la pagina.',
  'character.foggedDescription.season':
    'Un personaggio di {series} che compare per la prima volta in {threshold}. Imposta il segnalibro per leggere la pagina.',
  'character.foggedDescription.chapter':
    'Un personaggio di {series} che compare per la prima volta nel capitolo {threshold}. Imposta il segnalibro per leggere la pagina.',
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
  'character.factsLabel': 'Fatti fino al tuo segnalibro',
  'character.chronicleTitle': 'La storia finora',
  'character.chronicleLede':
    'Le sue vicende fino al tuo segnalibro, dalla più recente. Ogni parte inizia dall’episodio in cui avviene.',
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
  'places.pageTitle': 'Luoghi | Zero Spoiler',
  'places.stage': 'Tappa {index} di {total}',
  'places.foggedName': 'Un luogo nella nebbia',
  'places.foggedDescription.episode':
    'Un luogo di {series} che compare per la prima volta nell’episodio {threshold}. Imposta il segnalibro per leggerne la voce.',
  'places.foggedDescription.season':
    'Un luogo di {series} che compare per la prima volta in {threshold}. Imposta il segnalibro per leggerne la voce.',
  'places.foggedDescription.chapter':
    'Un luogo di {series} che compare per la prima volta nel capitolo {threshold}. Imposta il segnalibro per leggerne la voce.',
  'places.firstSeen.episode':
    'Compare per la prima volta nell’episodio {threshold}',
  'places.firstSeen.season': 'Compare per la prima volta in {threshold}',
  'places.firstSeen.chapter':
    'Compare per la prima volta nel capitolo {threshold}',
  'places.form': 'Tipo',
  'places.arc': 'Saga',
  'places.landmark': 'Punto di riferimento',
  'places.filedHere': 'Collegati a questo luogo',
  'places.searchLabel': 'Cerca un luogo',
  'places.searchPlaceholder': 'Nome di un luogo',
  'places.searchClear': 'Cancella la ricerca',
  'places.searchOpen': 'Cerca',
  'places.controls': 'Filtri',
  'places.shown': 'Risultati: {count} su {total} luoghi visibili',
  'places.noMatch': 'Nessun luogo visibile corrisponde a “{query}”.',
  'places.noneShown': 'Nessun luogo visibile corrisponde a questi filtri.',
  'places.showAll': 'Mostra tutti',
  'places.allForms': 'Tutti i tipi',
  'places.saga': 'Saga',
  'places.allSagas': 'Tutte le saghe',
  'places.groupCount': '{count} luoghi',
  'places.groupCountOne': '1 luogo',

  'place.pageTitle': '{name} | Zero Spoiler',
  'place.foggedTitle': 'Un luogo nella nebbia | Zero Spoiler',
  'place.back': 'Tutti i luoghi',
  'place.mapTitle': 'Sulla mappa',
  'place.mapLede':
    'Dove si colloca questo luogo nella storia, con le tappe subito prima e subito dopo.',
  'place.nativesTitle': 'Vengono da qui',
  'place.visitsTitle': 'Ritorni',
  'place.drawingsTitle': 'Come cambia il disegno',
  'place.drawingsLede':
    'Ogni disegno di questo luogo fino al tuo segnalibro, dal più vecchio.',
  'place.turn': 'Tappa precedente e successiva',
  'place.previous': 'Tappa precedente',
  'place.next': 'Tappa successiva',
  'place.routeStart': 'Niente, questa è la prima tappa.',
  'place.routeEnd':
    'Ancora niente, questa è l’ultima tappa nell’ordine della storia.',
  'place.notFoundTitle': 'Luogo non trovato',
  'place.notFoundBody':
    'A questo indirizzo non c’è nessun luogo. Li trovi tutti nella pagina Luoghi.',

  'form.village': 'Villaggio',
  'form.town': 'Cittadina',
  'form.restaurant': 'Ristorante galleggiante',
  'form.island': 'Isola',
  'form.region': 'Regione',
  'form.city': 'Città',
  'form.archipelago': 'Arcipelago',
  'form.sea': 'Tratto di mare',
  'form.ship': 'Nave',
  'form.prison': 'Prigione',
  'form.fortress': 'Fortezza',

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

  'locale.label': 'Lingua',
  'locale.it': 'Italiano',
  'locale.en': 'English',
}
