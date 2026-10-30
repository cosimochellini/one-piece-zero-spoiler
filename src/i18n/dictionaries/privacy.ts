import type { Locale } from '~/i18n/locales'

/**
 * The privacy notice, in each locale. Only the legal page prints it, so it is
 * kept out of the shared dictionaries every page downloads and ships with
 * that page alone (#930). English is the source of its keys; the Italian is
 * typed against it, and the record is keyed by `Locale`, so a language added
 * without a notice fails `typecheck`.
 */
const privacyEn = {
  'privacy.title': 'Privacy and cookies',
  'privacy.updated': 'Last checked: 28 October 2026.',
  'privacy.controllerTitle': 'Who runs the site',
  'privacy.controller':
    'Zero Spoiler is a personal, nonprofit fan project. Its operator and data controller is a private individual based in Italy, reachable as @cosimochellini on GitHub. Use the GitHub contact link below for an initial request.',
  'privacy.serviceTitle': 'What a visit sends',
  'privacy.service':
    'Your browser sends Cloudflare the requested address, IP address, browser information and applicable cookies to deliver pages and apply your spoiler boundary. Requests stay on this site; fonts and drawings are hosted here. There are no user accounts, advertising, analytics or profiling in the application.',
  'privacy.cookiesTitle': 'Technical cookies and browser storage',
  'privacy.cookiesIntro':
    'These first-party cookies support features you request. They are not used for advertising or tracking across sites. They do not require a consent banner under the Italian rules for necessary technical cookies.',
  'privacy.bookmark':
    'zs_one-piece and zs_hunter-x-hunter: your bookmark for each series, by episode, season, chapter or live action where supported; kept for 365 days after saving it, or until you clear it. Opening a shared bookmark link also sets this cookie. The value is sent to the server to hide later events.',
  'privacy.language':
    'opzs_lang: your selected language (it or en); kept for 365 days after choosing it. Sent to the server to remember the language on later visits.',
  'privacy.trial':
    'zs_one-piece_try and zs_hunter-x-hunter_try: a temporary bookmark for each series set when you try the site; a session cookie with no fixed expiry, removed when you save or clear a bookmark or leave the trial. Browser session restore can preserve session cookies.',
  'privacy.attributes':
    'All five cookies use Path=/ and SameSite=Lax, with no Domain, Secure or HttpOnly attribute. The site is served over HTTPS. They can be read by this site’s JavaScript and sent on applicable same-site requests and top-level cross-site navigations.',
  'privacy.storage':
    'opzs_welcome is a sessionStorage flag used to show a welcome once after saving a bookmark. It is removed when the home page reads it, or when the tab session ends; it is not sent to the server. opzs_intro is a sessionStorage flag, value 1, set when you close the introduction a page shows when you arrive with no bookmark, or once a bookmark is in use, so the introduction is not shown in the rest of the tab session; it is not sent to the server. The application does not use localStorage.',
  'privacy.controlTitle': 'Your choices',
  'privacy.control':
    'You can clear the bookmark in its dialog and remove cookies and site storage in your browser settings. Blocking them prevents the site from remembering your preferences; without a bookmark you see the introductory view. There are no optional tracking cookies to accept or reject.',
  'privacy.hostingTitle': 'Hosting, logs and transfers',
  'privacy.hosting':
    'Cloudflare, Inc. hosts and delivers the site through its network and Cloudflare Workers. A request is handled in a Cloudflare data centre, usually one near you, which can be outside the EEA. Cloudflare is a US company, so data can be transferred to the United States. The site uses no Cloudflare database, file storage, analytics or forms. Netlify, Inc. still receives requests to the old address one-piece-zero-spoiler.netlify.app and only redirects them to zerospoiler.app.',
  'privacy.logs':
    'Workers Logs is turned on to find faults and abuse. Each request the Worker handles is logged in the site’s Cloudflare account. That covers pages and the drawings loaded with them. A log entry holds the requested address with its query, the method, the response status and any error. It also holds the request headers, with your IP address, browser information and possibly cookies, and the location Cloudflare derives from the request. On the Workers Free plan the site uses, Cloudflare keeps these logs for 3 days. Fonts, icons and other static files are served without a log entry. Cloudflare also processes request data on its network for security and for aggregate traffic metrics; how long it keeps that data is not verified for this site. No function runs on the old address, so Netlify writes no function logs; how long its network keeps request data is not verified. No analytics does not mean no personal data is processed.',
  'privacy.terms':
    'Cloudflare’s published Data Processing Addendum forms part of its subscription terms. It describes Cloudflare as processor and its subprocessors, and relies on the EU–US Data Privacy Framework, with standard contractual clauses if that certification lapses. Netlify’s published terms work the same way for the old address. These are the providers’ published terms; site-specific contractual details and the full retention arrangements remain to be confirmed.',
  'privacy.basesTitle': 'Purposes and legal bases',
  'privacy.bases':
    'The purposes are delivering the pages you request, applying your spoiler boundary, remembering your choices and keeping the site operational and secure. The basis is the legitimate interest in providing this limited service (GDPR Article 6(1)(f)); apart from those 3-day Workers Logs, the application adds no visitor history or profiling for these purposes. Applicable data-rights requests are handled to meet legal obligations (Article 6(1)(c)). The technical-cookie consent exemption is separate from these GDPR bases. You may object as described below.',
  'privacy.rightsTitle': 'Questions and your rights',
  'privacy.rights':
    'Where applicable, you may request access, correction, erasure, restriction or portability of personal data, object to processing, and complain to the Italian Garante or your local supervisory authority. Requests concern data actually held; a cookie value alone does not identify a named account.',
  'privacy.contact': 'Contact on GitHub',
  'privacy.contactHelp':
    'For an initial privacy contact request, open a GitHub issue without personal or confidential details. Issues are public and require an account. Do not include IP addresses, cookie values or identity documents. We will agree a private channel before discussing any personal details. GitHub processes information you submit there under its own privacy policy.',
  'privacy.sourcesTitle': 'Sources and verification',
  'privacy.garante': 'Italian Garante: cookies and tracking guidance',
  'privacy.cloudflareLogs': 'Cloudflare: Workers Logs and retention',
  'privacy.cloudflareTerms': 'Cloudflare: Data Processing Addendum',
  'privacy.netlifyTerms': 'Netlify: DPA and subprocessors',
  'privacy.audit': 'Technical audit and outstanding checks',
} as const

/** A key of the privacy notice. */
export type PrivacyKey = keyof typeof privacyEn

const privacyIt: Record<PrivacyKey, string> = {
  'privacy.title': 'Privacy e cookie',
  'privacy.updated': 'Ultima verifica: 28 ottobre 2026.',
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
    'zs_one-piece e zs_hunter-x-hunter: il tuo segnalibro per ciascuna serie, per episodio, stagione, capitolo o live action dove disponibile; dura 365 giorni dal salvataggio, oppure fino alla cancellazione. Anche aprire un link con un segnalibro imposta questo cookie. Il valore viene inviato al server per nascondere gli eventi successivi.',
  'privacy.language':
    'opzs_lang: la lingua scelta (it o en); dura 365 giorni dalla scelta. Viene inviato al server per ricordare la lingua nelle visite successive.',
  'privacy.trial':
    'zs_one-piece_try e zs_hunter-x-hunter_try: un segnalibro temporaneo per ciascuna serie impostato quando provi il sito; è un cookie di sessione senza scadenza fissa, rimosso quando salvi o cancelli un segnalibro o esci dalla prova. Il ripristino della sessione del browser può conservarlo.',
  'privacy.attributes':
    'Tutti e cinque i cookie usano Path=/ e SameSite=Lax, senza attributi Domain, Secure o HttpOnly. Il sito è servito tramite HTTPS. Sono leggibili dal JavaScript del sito e vengono inviati nelle richieste pertinenti allo stesso sito e nelle navigazioni principali da altri siti.',
  'privacy.storage':
    'opzs_welcome è un indicatore in sessionStorage che mostra un benvenuto una sola volta dopo il salvataggio del segnalibro. Viene rimosso quando la pagina iniziale lo legge o alla fine della sessione della scheda; non viene inviato al server. opzs_intro è un indicatore in sessionStorage, valore 1, impostato quando chiudi l’introduzione che una pagina mostra se arrivi senza segnalibro, o quando un segnalibro è in uso, perché l’introduzione non compaia nel resto della sessione della scheda; non viene inviato al server. L’applicazione non usa localStorage.',
  'privacy.controlTitle': 'Le tue scelte',
  'privacy.control':
    'Puoi cancellare il segnalibro dalla sua finestra e rimuovere cookie e memoria del sito dalle impostazioni del browser. Bloccarli impedisce di ricordare le preferenze; senza segnalibro vedi la vista introduttiva. Non ci sono cookie di tracciamento facoltativi da accettare o rifiutare.',
  'privacy.hostingTitle': 'Hosting, log e trasferimenti',
  'privacy.hosting':
    'Cloudflare, Inc. ospita e consegna il sito tramite la propria rete e Cloudflare Workers. Ogni richiesta viene gestita in un data center Cloudflare, di solito vicino a te, che può trovarsi fuori dallo SEE. Cloudflare è una società statunitense, quindi i dati possono essere trasferiti negli Stati Uniti. Il sito non usa database, archiviazione di file, analytics o moduli di Cloudflare. Netlify, Inc. riceve ancora le richieste al vecchio indirizzo one-piece-zero-spoiler.netlify.app e si limita a reindirizzarle a zerospoiler.app.',
  'privacy.logs':
    'Workers Logs è attivo per individuare guasti e abusi. Ogni richiesta gestita dal Worker viene registrata nell’account Cloudflare del sito. Sono comprese le pagine e i disegni caricati con esse. Una voce del log contiene l’indirizzo richiesto con i suoi parametri, il metodo, lo stato della risposta e gli eventuali errori. Contiene anche le intestazioni della richiesta, con il tuo indirizzo IP, informazioni sul browser ed eventualmente i cookie, e la località che Cloudflare ricava dalla richiesta. Con il piano Workers Free usato dal sito, Cloudflare conserva questi log per 3 giorni. Font, icone e altri file statici vengono serviti senza voce nel log. Cloudflare tratta inoltre i dati delle richieste sulla propria rete per la sicurezza e per metriche aggregate sul traffico; per quanto tempo li conserva non è verificato per questo sito. Sul vecchio indirizzo non gira nessuna funzione, quindi Netlify non scrive log delle funzioni; per quanto tempo la sua rete conserva i dati delle richieste non è verificato. L’assenza di analytics non significa assenza di trattamento di dati personali.',
  'privacy.terms':
    'L’accordo sul trattamento dei dati pubblicato da Cloudflare fa parte dei suoi termini di abbonamento. Descrive Cloudflare come responsabile del trattamento e i suoi subfornitori, e si basa sul Data Privacy Framework UE–USA, con clausole contrattuali standard se la certificazione decade. I termini pubblicati da Netlify valgono allo stesso modo per il vecchio indirizzo. Sono i termini pubblicati dai fornitori; restano da confermare i dettagli contrattuali del sito e le modalità complete di conservazione.',
  'privacy.basesTitle': 'Finalità e basi giuridiche',
  'privacy.bases':
    'Le finalità sono consegnare le pagine richieste, applicare il limite agli spoiler, ricordare le tue scelte e mantenere il sito funzionante e sicuro. La base è il legittimo interesse a fornire questo servizio limitato (articolo 6(1)(f) GDPR); a parte i Workers Logs conservati per 3 giorni, l’applicazione non aggiunge cronologie dei visitatori o profilazione per questi scopi. Le richieste applicabili sui diritti sono gestite per adempiere agli obblighi di legge (articolo 6(1)(c)). L’esenzione dal consenso per i cookie tecnici è distinta da queste basi GDPR. Puoi opporti come descritto sotto.',
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
  'privacy.netlifyTerms': 'Netlify: accordo sul trattamento e subfornitori',
  'privacy.audit': 'Verifica tecnica e controlli da completare',
}

export const PRIVACY: Record<Locale, Record<PrivacyKey, string>> = {
  en: privacyEn,
  it: privacyIt,
}
