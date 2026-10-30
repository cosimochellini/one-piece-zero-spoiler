import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json. */
const links = {
  // Coco Loo
  cocoLooGon: {
    character: 'gon-freecss',
    type: { en: 'Passenger who stays', it: 'Passeggero che resta' },
    summary: {
      en: 'Gon rides Coco Loo’s bus to the estate gate and stays behind with his friends when she leaves with the other tourists.',
      it: 'Gon arriva al cancello della tenuta con l’autobus di Coco Loo e resta lì con i suoi amici quando lei riparte con gli altri turisti.',
    },
  },
  cocoLooLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Passenger who complains', it: 'Passeggero che protesta' },
    summary: {
      en: 'Leorio complains that the tour stops far from the mountain, and Coco Loo explains that the whole mountain belongs to the Zoldyck family.',
      it: 'Leorio protesta perché il giro si ferma lontano dal monte, e Coco Loo spiega che tutto il monte appartiene alla famiglia Zoldick.',
    },
  },
  // Zebro
  zebroGon: {
    character: 'gon-freecss',
    type: {
      en: 'Visitor who wants the key',
      it: 'Visitatore che vuole la chiave',
    },
    summary: {
      en: 'Gon insists that Zebro lend him the key to the service door.',
      it: 'Gon insiste perché Zebro gli presti la chiave della porta di servizio.',
    },
  },
  zebroKurapika: {
    character: 'kurapika',
    type: {
      en: 'Visitor who sees through him',
      it: 'Visitatore che lo smaschera',
    },
    summary: {
      en: 'Kurapika works out that Zebro only cleans up after the guard dog and that the real gate has no lock.',
      it: 'Kurapika capisce che Zebro si limita a pulire dopo il cane da guardia e che il vero cancello non ha serratura.',
    },
  },
  zebroLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'Leorio fails to push the gate open before Zebro opens its first doors himself.',
      it: 'Leorio non riesce ad aprire il cancello prima che Zebro ne spalanchi da solo i primi battenti.',
    },
  },
  zebroMike: {
    character: 'mike',
    type: { en: 'Guard dog he calls', it: 'Cane da guardia che chiama' },
    summary: {
      en: 'Zebro calls Mike out past the gate so that Gon and his friends can see him.',
      it: 'Zebro chiama Miche oltre il cancello perché Gon e i suoi amici lo vedano.',
    },
  },
  zebroGonTrained: {
    character: 'gon-freecss',
    type: { en: 'Visitor he trains', it: 'Visitatore che allena' },
    summary: {
      en: 'Zebro lets Gon and his friends stay at the groundskeepers’ quarters and trains them to open the gate.',
      it: 'Zebro ospita Gon e i suoi amici negli alloggi dei guardiani e li allena ad aprire il cancello.',
    },
  },
  zebroSeaquant: {
    character: 'seaquant',
    type: { en: 'Fellow groundskeeper', it: 'Collega guardiano' },
    summary: {
      en: 'Zebro shares the groundskeepers’ quarters with Seaquant, and the two see the visitors off together.',
      it: 'Zebro divide gli alloggi dei guardiani con Seaquant, e i due salutano insieme i visitatori alla partenza.',
    },
  },
  // Mike
  mikeZebro: {
    character: 'zebro',
    type: { en: 'Groundskeeper who calls him', it: 'Guardiano che lo chiama' },
    summary: {
      en: 'Zebro calls Mike out past the gate to show him to Gon and his friends.',
      it: 'Zebro chiama Miche oltre il cancello per mostrarlo a Gon e ai suoi amici.',
    },
  },
  mikeGon: {
    character: 'gon-freecss',
    type: { en: 'Visitor he frightens', it: 'Visitatore che spaventa' },
    summary: {
      en: 'Mike appears before Gon, who is frightened by him.',
      it: 'Miche compare davanti a Gon, che ne resta spaventato.',
    },
  },
  mikeSeaquant: {
    character: 'seaquant',
    type: { en: 'Intruder who surrenders', it: 'Intruso che si arrende' },
    summary: {
      en: 'In a past attack on the estate, Seaquant surrenders as soon as Mike appears before him.',
      it: 'Durante un vecchio attacco alla tenuta, Seaquant si arrende appena Miche gli compare davanti.',
    },
  },
  // Seaquant
  seaquantZebro: {
    character: 'zebro',
    type: { en: 'Fellow groundskeeper', it: 'Collega guardiano' },
    summary: {
      en: 'Seaquant works with Zebro at the groundskeepers’ quarters, where Zebro brings his guests.',
      it: 'Seaquant lavora con Zebro negli alloggi dei guardiani, dove Zebro porta i suoi ospiti.',
    },
  },
  seaquantGon: {
    character: 'gon-freecss',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Seaquant welcomes Gon and his friends to the quarters with a warning.',
      it: 'Seaquant accoglie Gon e i suoi amici negli alloggi con un avvertimento.',
    },
  },
  seaquantZebroDoubt: {
    character: 'zebro',
    type: {
      en: 'Fellow groundskeeper and friend',
      it: 'Collega guardiano e amico',
    },
    summary: {
      en: 'Seaquant doubts Zebro’s hope that the visitors will reach the mansion, recalling an attack once stopped by a single apprentice butler.',
      it: 'Seaquant dubita della speranza di Zebro che i visitatori raggiungano la villa e ricorda un attacco fermato da una sola apprendista maggiordoma.',
    },
  },
  // Canary
  canaryGon: {
    character: 'gon-freecss',
    type: { en: 'Visitor she strikes', it: 'Visitatore che colpisce' },
    summary: {
      en: 'Canary strikes Gon with her staff each time he crosses her line, until she begs him to help Killua.',
      it: 'Canaria colpisce Gon con il bastone ogni volta che supera la sua linea, finché non lo supplica di aiutare Killua.',
    },
  },
  canaryKillua: {
    character: 'killua',
    type: { en: 'Young master', it: 'Giovane padrone' },
    summary: {
      en: 'Canary serves Killua as an apprentice butler and turned down his offer of friendship.',
      it: 'Canaria è al servizio di Killua come apprendista maggiordoma e ha rifiutato l’amicizia che lui le offriva.',
    },
  },
  canaryKurapika: {
    character: 'kurapika',
    type: { en: 'Visitor she appeals to', it: 'Visitatore a cui si appella' },
    summary: {
      en: 'Canary urges Kurapika to stop Gon from crossing her line, but he does not move.',
      it: 'Canaria chiede a Kurapika di fermare Gon prima che superi la linea, ma lui resta immobile.',
    },
  },
  canaryLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Visitor who tends to her', it: 'Visitatore che la soccorre' },
    summary: {
      en: 'Leorio checks on Canary after she is knocked out, and she then tells the group where the butlers’ quarters are.',
      it: 'Leorio si occupa di Canaria dopo che è stata messa fuori combattimento, e lei poi indica al gruppo dove sono gli alloggi dei maggiordomi.',
    },
  },
  canaryGotoh: {
    character: 'gotoh',
    type: {
      en: 'Butler who uses her as a hostage',
      it: 'Maggiordomo che la prende in ostaggio',
    },
    summary: {
      en: 'Gotoh threatens Canary’s life to raise the stakes of his coin game, then says the threat was a joke.',
      it: 'Goto minaccia la vita di Canaria per alzare la posta del suo gioco della moneta, poi dice che era uno scherzo.',
    },
  },
  // Gotoh
  gotohKillua: {
    character: 'killua',
    type: { en: 'Young master', it: 'Giovane padrone' },
    summary: {
      en: 'Killua gives Gotoh an order at the butlers’ quarters before leaving with his friends.',
      it: 'Killua dà un ordine a Goto negli alloggi dei maggiordomi prima di partire con i suoi amici.',
    },
  },
  gotohGon: {
    character: 'gon-freecss',
    type: { en: 'Visitor he tests', it: 'Visitatore che mette alla prova' },
    summary: {
      en: 'Gotoh challenges Gon to a coin game, and Gon finds the coin in the final round.',
      it: 'Goto sfida Gon a un gioco con la moneta, e Gon la trova anche nell’ultimo round.',
    },
  },
  gotohCanary: {
    character: 'canary',
    type: {
      en: 'Apprentice he takes hostage',
      it: 'Apprendista che prende in ostaggio',
    },
    summary: {
      en: 'Gotoh threatens Canary’s life if the visitors answer too slowly, then says it was a joke.',
      it: 'Goto minaccia la vita di Canaria se i visitatori rispondono troppo lentamente, poi dice che era uno scherzo.',
    },
  },
  gotohKurapika: {
    character: 'kurapika',
    type: { en: 'Visitor he eliminates', it: 'Visitatore che elimina' },
    summary: {
      en: 'Kurapika guesses wrong in Gotoh’s coin game and is out.',
      it: 'Kurapika sbaglia nel gioco della moneta di Goto ed è eliminato.',
    },
  },
  gotohLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Visitor he eliminates', it: 'Visitatore che elimina' },
    summary: {
      en: 'Leorio is the first one out of Gotoh’s coin game.',
      it: 'Leorio è il primo a essere eliminato dal gioco della moneta di Goto.',
    },
  },
  // Milluki
  millukiKillua: {
    character: 'killua',
    type: {
      en: 'Younger brother he punishes',
      it: 'Fratello minore che punisce',
    },
    summary: {
      en: 'Milluki whips the chained Killua and complains that his brother is not sorry.',
      it: 'Milki frusta Killua incatenato e si lamenta che il fratello non sia pentito.',
    },
  },
  millukiZeno: {
    character: 'zeno',
    type: { en: 'Grandfather who overrules him', it: 'Nonno che lo ferma' },
    summary: {
      en: 'Zeno ends Milluki’s punishment of Killua and calls Milluki both clever and foolish.',
      it: 'Zeno mette fine alla punizione di Killua e definisce Milki intelligente ma sciocco.',
    },
  },
  // Zeno
  zenoKillua: {
    character: 'killua',
    type: { en: 'Grandson he releases', it: 'Nipote che libera' },
    summary: {
      en: 'Zeno tells Killua that he may leave his cell and that his father wants to see him.',
      it: 'Zeno dice a Killua che può lasciare la cella e che suo padre vuole vederlo.',
    },
  },
  zenoMilluki: {
    character: 'milluki',
    type: { en: 'Grandson he questions', it: 'Nipote che interroga' },
    summary: {
      en: 'Zeno asks Milluki what he thinks of Killua’s talent and calls him clever but foolish.',
      it: 'Zeno chiede a Milki cosa pensi del talento di Killua e lo definisce intelligente ma sciocco.',
    },
  },
  // Kalluto
  kallutoKillua: {
    character: 'killua',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Kalluto is Killua’s younger brother, introduced to Killua’s friends by their mother.',
      it: 'Carte è il fratello minore di Killua e la loro madre lo presenta agli amici di Killua.',
    },
  },
  kallutoGon: {
    character: 'gon-freecss',
    type: { en: 'Visitor he watches', it: 'Visitatore che osserva' },
    summary: {
      en: 'Kalluto watches from the bushes as Gon tries to get past Canary, then follows his mother away.',
      it: 'Carte osserva dai cespugli Gon che cerca di superare Canaria, poi segue la madre.',
    },
  },
} satisfies Record<string, Relationship>

export const zoldyckRelationships = {
  'coco-loo': [
    // Leorio's complaint is on the chapter 39 page only; episode 22 shows the
    // trio staying behind.
    { episode: 22, chapter: 39, source: 'episode', value: [links.cocoLooGon] },
    {
      episode: 22,
      chapter: 39,
      source: 'chapter',
      value: [links.cocoLooGon, links.cocoLooLeorio],
    },
  ],
  'zebro': [
    // Manga readers meet Zebro at 39, before Mike opens at 40; anime readers
    // reach both in episode 22, so they start at the 22 / 40 entry.
    {
      episode: 22,
      chapter: 39,
      source: 'chapter',
      value: [links.zebroGon, links.zebroKurapika, links.zebroLeorio],
    },
    {
      episode: 22,
      chapter: 40,
      value: [
        links.zebroGon,
        links.zebroMike,
        links.zebroKurapika,
        links.zebroLeorio,
      ],
    },
    {
      episode: 23,
      chapter: 41,
      value: [
        links.zebroGonTrained,
        links.zebroSeaquant,
        links.zebroMike,
        links.zebroKurapika,
        links.zebroLeorio,
      ],
    },
  ],
  'mike': [
    { episode: 22, chapter: 40, value: [links.mikeZebro, links.mikeGon] },
    // Anime-only: the episode 24 flashback shows Mike before the surrendering
    // Seaquant; the chapter only orders it.
    {
      episode: 24,
      chapter: 42,
      source: 'episode',
      value: [links.mikeZebro, links.mikeGon, links.mikeSeaquant],
    },
  ],
  'seaquant': [
    // Manga-only start: chapter 40 opens him, and episode 23 already adapts
    // chapter 41, so anime readers start at the 23 / 41 entry.
    {
      episode: 23,
      chapter: 40,
      source: 'chapter',
      value: [links.seaquantZebro, links.seaquantGon],
    },
    {
      episode: 23,
      chapter: 41,
      value: [links.seaquantZebroDoubt, links.seaquantGon],
    },
  ],
  'canary': [
    {
      episode: 24,
      chapter: 42,
      value: [
        links.canaryGon,
        links.canaryKillua,
        links.canaryKurapika,
        links.canaryLeorio,
      ],
    },
    {
      episode: 25,
      chapter: 43,
      value: [
        links.canaryGon,
        links.canaryKillua,
        links.canaryGotoh,
        links.canaryKurapika,
        links.canaryLeorio,
      ],
    },
  ],
  'gotoh': [
    {
      episode: 25,
      chapter: 43,
      value: [
        links.gotohKillua,
        links.gotohGon,
        links.gotohCanary,
        links.gotohKurapika,
        links.gotohLeorio,
      ],
    },
  ],
  'milluki': [
    // Anime-only start: episode 23 adapts chapters 40-41, but already shows
    // the whipping from chapter 42; the chapter only orders it.
    {
      episode: 23,
      chapter: 42,
      source: 'episode',
      value: [links.millukiKillua],
    },
    {
      episode: 24,
      chapter: 42,
      value: [links.millukiKillua, links.millukiZeno],
    },
  ],
  'zeno': [
    { episode: 24, chapter: 42, value: [links.zenoKillua, links.zenoMilluki] },
  ],
  'kalluto': [
    {
      episode: 24,
      chapter: 42,
      value: [links.kallutoKillua, links.kallutoGon],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
