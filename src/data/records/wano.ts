import type { Saga } from './saga'

/**
 * The Wano Country saga, episodes 890 to 1085: a country closed to the
 * world, its samurai, its shogun, and the Emperor who owns it.
 */

const WANO = { it: 'Paese di Wano', en: 'Wano Country' }

const RED_SCABBARDS = { it: 'Nove Foderi Rossi', en: 'Nine Red Scabbards' }

const TOBIROPPO = {
  it: 'Pirati delle Cento Bestie, Tobiroppo',
  en: 'Beasts Pirates, Tobiroppo',
}

const TOBIROPPO_ROLE = {
  it: 'Tobiroppo dei Pirati delle Cento Bestie',
  en: 'Beasts Pirates Tobiroppo',
}

export const wano: Saga = {
  entries: [
    {
      id: 'wano',
      kind: 'arc',
      revealedAtEpisode: 890,
      revealedAtChapter: 909,
      name: { it: 'Saga del Paese di Wano', en: 'Wano Country Saga' },
      summary: {
        it: 'Un paese chiuso al resto del mondo, con le sue regole, i suoi spadaccini e i suoi conti in sospeso.',
        en: 'A country closed to the rest of the world, with its own rules, its own swordsmen and its own unsettled debts.',
      },
      visual: { art: 'wano', tint: 'vermilion' },
    },
    {
      id: 'tama',
      kind: 'character',
      revealedAtEpisode: 892,
      revealedAtChapter: 912,
      name: { it: 'O-Tama', en: 'Tama' },
      summary: {
        it: 'Una bambina affamata del villaggio di Amigasa che divide la sua unica scodella di zuppa di fagioli rossi con uno sconosciuto.',
        en: 'A hungry girl from Amigasa Village who shares her one bowl of red bean soup with a starving stranger she has just met.',
      },
      visual: { art: 'tama', tint: 'pink' },
    },
    {
      id: 'tenguyama-hitetsu',
      kind: 'character',
      revealedAtEpisode: 894,
      revealedAtChapter: 913,
      name: { it: 'Tenguyama Hitetsu', en: 'Tenguyama Hitetsu' },
      summary: {
        it: 'Il vecchio armaiolo del villaggio di Amigasa, con una maschera da tengu appesa in bottega e un carattere che non ammette visite.',
        en: 'The old swordsmith of Amigasa Village, a tengu mask hanging in his workshop and a temper that does not welcome visitors.',
      },
      visual: { art: 'tenguyama-hitetsu', tint: 'red' },
    },
    {
      id: 'kikunojo',
      kind: 'character',
      revealedAtEpisode: 897,
      revealedAtChapter: 917,
      name: { it: 'Kikunojo', en: 'Kikunojo' },
      summary: {
        it: 'La cameriera alta e gentile della casa da tè di Okobore, che serve con un inchino e tiene una lama sotto il kimono.',
        en: 'The tall, gentle waitress of the Okobore tea house, who pours with a bow and keeps a blade under her kimono.',
      },
      visual: { art: 'kikunojo', tint: 'ice' },
    },
    {
      id: 'ashura-doji',
      kind: 'character',
      revealedAtEpisode: 898,
      revealedAtChapter: 919,
      name: { it: 'Ashura Doji', en: 'Ashura Doji' },
      summary: {
        it: 'Il capo dei briganti del monte Atama, con una lama larga e una fascia rossa, temuto anche dai pirati che saccheggiano Wano.',
        en: 'The boss of the Mt. Atama thieves, a broad blade and a red sash, feared even by the pirates who plunder Wano.',
      },
      visual: { art: 'ashura-doji', tint: 'vermilion' },
    },
    {
      id: 'page-one',
      kind: 'character',
      revealedAtEpisode: 906,
      revealedAtChapter: 923,
      name: { it: 'Page One', en: 'Page One' },
      summary: {
        it: 'Un ragazzo in giacca di pelle al servizio dell’Imperatore, che davanti a una scodella di soba diventa uno spinosauro e sfonda il locale.',
        en: 'A young man in a leather jacket serving the Emperor, who turns into a spinosaurus over a bowl of soba and wrecks the place.',
      },
      visual: { art: 'page-one', tint: 'teal' },
    },
    {
      id: 'kurozumi-orochi',
      kind: 'character',
      revealedAtEpisode: 908,
      revealedAtChapter: 926,
      name: { it: 'Kurozumi Orochi', en: 'Kurozumi Orochi' },
      summary: {
        it: 'Lo shogun del Paese di Wano, un uomo pallido che ride sempre, protetto dall’Imperatore e odiato da ogni contadino che paga le sue tasse.',
        en: 'The shogun of Wano Country, a pale man who is always laughing, protected by the Emperor and hated by every farmer who pays his taxes.',
      },
      visual: { art: 'kurozumi-orochi', tint: 'violet' },
    },
    {
      id: 'shinobu',
      kind: 'character',
      revealedAtEpisode: 912,
      revealedAtChapter: 930,
      name: { it: 'Shinobu', en: 'Shinobu' },
      summary: {
        it: 'Una kunoichi grande e rumorosa al servizio dei Kozuki, che si offende se la chiamano vecchia e fa maturare e marcire tutto ciò che tocca.',
        en: 'A big, loud kunoichi in the service of the Kozuki, who takes offence at being called old and ripens and rots whatever she touches.',
      },
      visual: { art: 'shinobu', tint: 'lavender' },
    },
    {
      id: 'hyogoro',
      kind: 'character',
      revealedAtEpisode: 917,
      revealedAtChapter: 933,
      name: { it: 'Hyogoro', en: 'Hyogoro' },
      summary: {
        it: 'Un vecchio prigioniero del campo di Udon, rispettato da ogni detenuto, che un tempo comandava tutta la yakuza di Wano.',
        en: 'An old prisoner of the Udon camp, respected by every convict in it, who once commanded the whole of Wano’s yakuza.',
      },
      visual: { art: 'hyogoro', tint: 'ocher' },
    },
    {
      id: 'queen',
      kind: 'character',
      revealedAtEpisode: 917,
      revealedAtChapter: 933,
      name: { it: 'Queen', en: 'Queen' },
      summary: {
        it: 'Il direttore del campo di prigionia di Udon, un gigante con il corpo pieno di macchine che canta al microfono mentre i prigionieri lavorano.',
        en: 'The warden of the Udon prison camp, a giant with a body full of machinery who sings into a microphone while the prisoners work.',
      },
      visual: { art: 'queen', tint: 'yellow' },
    },
    {
      id: 'king',
      kind: 'character',
      revealedAtEpisode: 923,
      revealedAtChapter: 935,
      name: { it: 'King', en: 'King' },
      summary: {
        it: 'Il braccio destro dell’Imperatore, un uomo mascherato che vola su ali di fuoco e piomba dal cielo come uno pteranodonte.',
        en: 'The Emperor’s right hand, a masked man who flies on wings of fire and comes down out of the sky as a pteranodon.',
      },
      visual: { art: 'king', tint: 'wine' },
    },
    {
      id: 'komurasaki',
      kind: 'character',
      revealedAtEpisode: 921,
      revealedAtChapter: 933,
      name: { it: 'Komurasaki', en: 'Komurasaki' },
      summary: {
        it: 'La cortigiana più famosa della Capitale dei Fiori, che sfila tra la folla con gli spilloni d’oro tra i capelli e rifiuta chiunque.',
        en: 'The most celebrated courtesan of the Flower Capital, who parades through the crowd in golden hairpins and turns down everyone.',
      },
      visual: { art: 'komurasaki', tint: 'lavender' },
    },
    {
      id: 'toko',
      kind: 'character',
      revealedAtEpisode: 921,
      revealedAtChapter: 933,
      name: { it: 'O-Toko', en: 'Toko' },
      summary: {
        it: 'La bambina che accompagna l’oiran della Capitale dei Fiori, con un ventaglio di carta in mano, e che ride anche quando nessuno ride.',
        en: 'The little girl who attends the Flower Capital’s oiran, a paper fan in hand, laughing even when nobody else finds anything funny.',
      },
      visual: { art: 'toko', tint: 'yellow' },
    },
    {
      id: 'kyoshiro',
      kind: 'character',
      revealedAtEpisode: 921,
      revealedAtChapter: 933,
      name: { it: 'Kyoshiro', en: 'Kyoshiro' },
      summary: {
        it: 'Il boss yakuza che tiene la Capitale dei Fiori e cambia il denaro dello shogun, con una sciabola alla cintura e un sorriso di circostanza.',
        en: 'The yakuza boss who holds the Flower Capital and changes the shogun’s money, a sabre at his belt and a smile kept for business.',
      },
      visual: { art: 'kyoshiro', tint: 'blue' },
    },
    {
      id: 'shimotsuki-yasuie',
      kind: 'character',
      revealedAtEpisode: 938,
      revealedAtChapter: 943,
      name: { it: 'Shimotsuki Yasuie', en: 'Shimotsuki Yasuie' },
      summary: {
        it: 'Un vecchio scalzo del quartiere di Ebisu, che tutti chiamano Tonoyasu e amano come un padre, e che un tempo era il daimyo di Hakumai.',
        en: 'A barefoot old man from Ebisu Town, called Tonoyasu by everyone and loved like a father, who was once the daimyo of Hakumai.',
      },
      visual: { art: 'shimotsuki-yasuie', tint: 'ocher' },
    },
    {
      id: 'gyukimaru',
      kind: 'character',
      revealedAtEpisode: 934,
      revealedAtChapter: 943,
      name: { it: 'Gyukimaru', en: 'Gyukimaru' },
      summary: {
        it: 'Un monaco incappucciato che presidia il ponte di Oihagi con una naginata e ruba l’arma a chiunque provi ad attraversarlo.',
        en: 'A hooded monk who holds the Oihagi Bridge with a naginata and takes the weapon off anyone who tries to cross it.',
      },
      visual: { art: 'gyukimaru', tint: 'red' },
    },
    {
      id: 'fukurokuju',
      kind: 'character',
      revealedAtEpisode: 934,
      revealedAtChapter: 943,
      name: { it: 'Fukurokuju', en: 'Fukurokuju' },
      summary: {
        it: 'Il capo della guardia segreta dello shogun, un ninja dalla fronte lunghissima che compare alle spalle di chiunque parli troppo.',
        en: 'The head of the shogun’s secret guard, a ninja with an impossibly long forehead who appears behind anyone who talks too much.',
      },
      visual: { art: 'fukurokuju', tint: 'teal' },
    },
    {
      id: 'kawamatsu',
      kind: 'character',
      revealedAtEpisode: 936,
      revealedAtChapter: 946,
      name: { it: 'Kawamatsu', en: 'Kawamatsu' },
      summary: {
        it: 'Un prigioniero enorme del campo di Udon, chiuso in una gabbia in fondo alla prigione, che tutti chiamano il kappa.',
        en: 'An enormous prisoner of the Udon camp, shut in a cage at the back of the jail, whom everybody calls the kappa.',
      },
      visual: { art: 'kawamatsu', tint: 'green' },
    },
    {
      id: 'rocks-d-xebec',
      kind: 'character',
      revealedAtEpisode: 958,
      revealedAtChapter: 957,
      name: { it: 'Rocks D. Xebec', en: 'Rocks D. Xebec' },
      summary: {
        it: 'Il capitano che quarant’anni fa riunì i pirati più pericolosi del mondo su una nave sola, e di cui il Governo ha cancellato il nome.',
        en: 'The captain who forty years ago gathered the world’s most dangerous pirates onto a single ship, and whose name the Government erased.',
      },
      visual: { art: 'rocks-d-xebec', tint: 'ivory' },
    },
    {
      id: 'kozuki-oden',
      kind: 'character',
      revealedAtEpisode: 960,
      revealedAtChapter: 960,
      name: { it: 'Kozuki Oden', en: 'Kozuki Oden' },
      summary: {
        it: 'Il daimyo di Kuri, un uomo enorme e sregolato che lasciò Wano per il mare e che vent’anni fa fu giustiziato davanti al suo paese.',
        en: 'The daimyo of Kuri, an enormous and ungovernable man who left Wano for the sea and was executed before his own country twenty years ago.',
      },
      visual: { art: 'kozuki-oden', tint: 'vermilion' },
    },
    {
      id: 'kozuki-toki',
      kind: 'character',
      revealedAtEpisode: 963,
      revealedAtChapter: 966,
      name: { it: 'Kozuki Toki', en: 'Kozuki Toki' },
      summary: {
        it: 'La donna venuta da un tempo lontanissimo che sposò il daimyo di Kuri, capace di mandare avanti negli anni chiunque tocchi.',
        en: 'A woman come from a far distant time who married the daimyo of Kuri, able to send whoever she touches forward through the years.',
      },
      visual: { art: 'kozuki-toki', tint: 'pink' },
    },
    {
      id: 'kurozumi-higurashi',
      kind: 'character',
      revealedAtEpisode: 963,
      revealedAtChapter: 972,
      name: { it: 'Kurozumi Higurashi', en: 'Kurozumi Higurashi' },
      summary: {
        it: 'Una vecchia della famiglia Kurozumi che, dietro una maschera da volpe e un frutto del diavolo, può prendere il volto di chiunque.',
        en: 'An old woman of the Kurozumi family who, behind a fox mask and a devil fruit, can wear anybody’s face she likes.',
      },
      visual: { art: 'kurozumi-higurashi', tint: 'ocher' },
    },
    {
      id: 'kurozumi-semimaru',
      kind: 'character',
      revealedAtEpisode: 963,
      revealedAtChapter: 972,
      name: { it: 'Kurozumi Semimaru', en: 'Kurozumi Semimaru' },
      summary: {
        it: 'Un Kurozumi silenzioso che alza intorno a sé una cupola invisibile contro cui le lame si fermano a mezz’aria.',
        en: 'A silent Kurozumi who raises an invisible dome around himself, against which blades stop dead in mid-air.',
      },
      visual: { art: 'kurozumi-semimaru', tint: 'acid' },
    },
    {
      id: 'izo',
      kind: 'character',
      revealedAtEpisode: 970,
      revealedAtChapter: 971,
      name: { it: 'Izo', en: 'Izo' },
      summary: {
        it: 'Un tiratore di Wano vestito da geisha, comandante di una divisione dei Pirati di Barbabianca, che non sbaglia un colpo con due pistole.',
        en: 'A gunman from Wano dressed as a geisha, commander of a Whitebeard division, who does not miss with a flintlock in each hand.',
      },
      visual: { art: 'izo', tint: 'flamingo' },
    },
    {
      id: 'ulti',
      kind: 'character',
      revealedAtEpisode: 982,
      revealedAtChapter: 980,
      name: { it: 'Ulti', en: 'Ulti' },
      summary: {
        it: 'Una ragazza con due corna tra i capelli che, trasformata in pachicefalosauro, abbatte chiunque a testate senza pensarci due volte.',
        en: 'A girl with two horns in her hair who, turned into a pachycephalosaurus, headbutts anyone flat without thinking twice about it.',
      },
      visual: { art: 'ulti', tint: 'violet' },
    },
    {
      id: 'whos-who',
      kind: 'character',
      revealedAtEpisode: 982,
      revealedAtChapter: 980,
      name: { it: 'Who’s-Who', en: 'Who’s-Who' },
      summary: {
        it: 'Un uomo mascherato dell’Imperatore, con una zanna sull’elmo, che si trasforma in una tigre dai denti a sciabola e non sopporta di essere guardato dall’alto.',
        en: 'A masked man of the Emperor’s, a fang on his helmet, who turns into a sabre-toothed tiger and cannot stand being looked down on.',
      },
      visual: { art: 'whos-who', tint: 'sand' },
    },
    {
      id: 'black-maria',
      kind: 'character',
      revealedAtEpisode: 982,
      revealedAtChapter: 980,
      name: { it: 'Black Maria', en: 'Black Maria' },
      summary: {
        it: 'Una donna altissima che riceve gli ospiti in kimono con la pipa in mano e cala su di loro da una ragnatela tesa fino al soffitto.',
        en: 'An enormously tall woman who receives guests in a kimono with a pipe in hand and drops on them from a web strung to the ceiling.',
      },
      visual: { art: 'black-maria', tint: 'magenta' },
    },
    {
      id: 'sasaki',
      kind: 'character',
      revealedAtEpisode: 982,
      revealedAtChapter: 980,
      name: { it: 'Sasaki', en: 'Sasaki' },
      summary: {
        it: 'Il capo della fanteria corazzata dell’Imperatore, con una sciabola alla cintura, che si trasforma in un triceratopo e carica a testa bassa.',
        en: 'The head of the Emperor’s armoured troops, a sabre at his belt, who turns into a triceratops and charges with his head down.',
      },
      visual: { art: 'sasaki', tint: 'azure' },
    },
    {
      id: 'yamato',
      kind: 'character',
      revealedAtEpisode: 992,
      revealedAtChapter: 983,
      name: { it: 'Yamato', en: 'Yamato' },
      summary: {
        it: 'Il figlio dell’Imperatore che governa Wano, con una mazza chiodata e manette esplosive ai polsi, incatenato sull’isola da vent’anni, che si presenta con il nome di un samurai morto.',
        en: 'The child of the Emperor who rules Wano, a studded club in hand and explosive cuffs on both wrists, chained on the island for twenty years, who introduces himself by a dead samurai’s name.',
      },
      visual: { art: 'yamato', tint: 'ice' },
    },
    {
      id: 'bao-huang',
      kind: 'character',
      revealedAtEpisode: 995,
      revealedAtChapter: 995,
      name: { it: 'Bao Huang', en: 'Bao Huang' },
      summary: {
        it: 'Una donna dell’equipaggio dell’Imperatore che vede attraverso i muri di Onigashima e racconta a tutta la fortezza quello che trova.',
        en: 'A woman of the Emperor’s crew who sees through the walls of Onigashima and tells the whole fortress whatever she finds there.',
      },
      visual: { art: 'bao-huang', tint: 'pink' },
    },
  ],

  dossiers: {
    'tama': {
      role: {
        it: 'Bambina del villaggio di Amigasa',
        en: 'Child of Amigasa Village',
      },
      log: {
        it: 'Vive in un villaggio dove l’acqua del fiume è veleno e il cibo arriva una volta ogni tanto, e regala comunque a un affamato la sua unica scodella di zuppa di fagioli rossi. Ha un frutto del diavolo che le permette di staccarsi una guancia e farne uno gnocco di miglio, e chi lo mangia le obbedisce come un animale addomesticato. Chiede a Rufy di prenderla con sé come allieva.',
        en: 'She lives in a village where the river water is poison and food arrives once in a while, and still gives her only bowl of red bean soup to a starving stranger. A devil fruit lets her pull a millet dumpling out of her own cheek, and whoever eats one follows her like a tamed animal. She asks Luffy to take her on as his apprentice.',
      },
      affiliation: [
        {
          episode: 892,
          value: {
            it: 'Kuri, Paese di Wano, bambina del villaggio di Amigasa',
            en: 'Kuri, Wano, a child of Amigasa Village',
          },
        },
        {
          episode: 1085,
          value: {
            it: 'Servitori dei Kozuki, allieva',
            en: 'Kozuki retainers, apprentice',
          },
        },
      ],
      origin: [{ episode: 892, value: WANO }],
      devilFruit: [{ episode: 892, value: ['millet-millet-fruit'] }],
    },
    'tenguyama-hitetsu': {
      role: { it: 'Fabbro di spade', en: 'Swordsmith' },
      log: {
        it: 'Fa da tutore alla bambina del villaggio e la rimprovera come farebbe un nonno burbero, poi torna al mantice e alle sue lame. Nella bottega di Amigasa martella l’acciaio in un paese dove le spade migliori finiscono tutte nelle mani sbagliate. Parla poco di sé e preferisce che nessuno curiosi tra i suoi arnesi.',
        en: 'He looks after the girl of the village and scolds her the way a gruff grandfather would, then goes back to his bellows and his blades. In the Amigasa workshop he hammers steel in a country where the best swords all end up in the wrong hands. He says little about himself and would rather nobody went poking through his tools.',
      },
      affiliation: [
        {
          episode: 894,
          value: {
            it: 'Fabbro del villaggio di Amigasa',
            en: 'Swordsmith of Amigasa Village',
          },
        },
        {
          episode: 1085,
          value: {
            it: 'Kozuki Sukiyaki, ex shogun del Paese di Wano',
            en: 'Kozuki Sukiyaki, former shogun of Wano',
          },
        },
      ],
      origin: [{ episode: 894, value: WANO }],
    },
    'kikunojo': {
      role: { it: 'Cameriera e spadaccina', en: 'Waitress and swordswoman' },
      log: {
        it: 'Serve il tè nella locanda di Okobore, dove i contadini mangiano gli avanzi della capitale, e tratta i clienti con una gentilezza che in quel paese non si vede spesso. Quando i pirati dell’Imperatore alzano le mani sui vecchi del villaggio si scopre che sotto il kimono porta una lama, e che sa usarla meglio di loro. Si presenta con il nome di O-Kiku.',
        en: 'She serves tea at the Okobore house, where farmers eat the capital’s leftovers, and treats her customers with a kindness this country rarely sees. When the Emperor’s pirates raise their hands to the village elders, it turns out she carries a blade under her kimono and handles it better than they do. She gives her name as O-Kiku.',
      },
      affiliation: [
        {
          episode: 897,
          value: {
            it: 'Casa da tè di Okobore, cameriera',
            en: 'Tea house of Okobore Town, waitress',
          },
        },
        { episode: 898, value: RED_SCABBARDS },
      ],
      origin: [{ episode: 897, value: WANO }],
      epithet: [
        {
          episode: 898,
          value: {
            it: 'Kiku della Neve Persistente',
            en: 'Kiku of the Lingering Snow',
          },
        },
      ],
    },
    'ashura-doji': {
      role: {
        it: 'Capo dei briganti del monte Atama',
        en: 'Boss of the Mt. Atama thieves',
      },
      log: {
        it: 'Guida una banda di briganti che ruba il riso ai pirati dell’Imperatore e lo lascia ai villaggi affamati, e non prende ordini da nessuno. Si fa chiamare Shutenmaru, ma i vecchi del paese riconoscono in lui il capobanda che vent’anni fa metteva paura a mezza Wano. Quando gli si propone un’alleanza risponde a colpi di spada.',
        en: 'He leads a band of thieves that steals rice from the Emperor’s pirates and leaves it for the starving villages, and he takes orders from nobody. He goes by Shutenmaru, though the old men of the country recognise in him the bandit chief who terrified half of Wano twenty years ago. Offered an alliance, he answers with his sword.',
      },
      status: [
        { episode: 898, value: 'alive' },
        { episode: 1043, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 898,
          value: {
            it: 'Briganti del monte Atama, capo',
            en: 'Mt. Atama Thieves, boss',
          },
        },
        { episode: 921, value: RED_SCABBARDS },
      ],
      origin: [{ episode: 898, value: WANO }],
      epithet: [
        { episode: 898, value: { it: 'Shutenmaru', en: 'Shutenmaru' } },
      ],
    },
    'page-one': {
      role: { it: 'Pirata delle Cento Bestie', en: 'Beasts Pirates crewman' },
      log: {
        it: 'Gira per Wano come se il paese fosse suo, cercando una nave rubata e chiunque l’abbia aiutata a partire. Basta una parola sbagliata perché il ragazzo diventi uno spinosauro che porta via mezza sala da pranzo con la coda. Chi gli si oppone lo affronta a calci, e lui non sembra abituato a prenderne.',
        en: 'He walks Wano as if the country belonged to him, hunting a stolen ship and anyone who helped it sail. One wrong word and the young man becomes a spinosaurus that takes half a dining room out with his tail. The man who stands up to him fights with his legs, and Page One does not seem used to being kicked.',
      },
      affiliation: [{ episode: 906, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 906,
          value: ['dragon-dragon-fruit-ancient-model-spinosaurus'],
        },
      ],
    },
    'kurozumi-orochi': {
      role: { it: 'Shogun del Paese di Wano', en: 'Shogun of Wano' },
      log: {
        it: 'Tiene il paese chiuso e la capitale ricca mentre le campagne bevono acqua avvelenata, e paga la propria sicurezza all’Imperatore che gli presta i pirati. Chi nomina la famiglia Kozuki davanti a lui viene giustiziato senza processo. Ride di ogni cosa, anche quando ordina di bruciare un villaggio, e non lascia mai il fianco scoperto.',
        en: 'He keeps the country sealed and the capital rich while the countryside drinks poisoned water, and pays for his own safety with the Emperor who lends him pirates. Anyone who says the name Kozuki in front of him is executed without a trial. He laughs at everything, even while ordering a village burned, and never leaves his flank open.',
      },
      status: [
        { episode: 908, value: 'alive' },
        { episode: 1085, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 908,
          value: { it: 'Shogun del Paese di Wano', en: 'Shogun of Wano' },
        },
        { episode: 1085, value: { it: 'Deposto', en: 'Deposed' } },
      ],
      origin: [{ episode: 908, value: WANO }],
      devilFruit: [
        {
          episode: 908,
          value: ['snake-snake-fruit-mythical-model-yamata-no-orochi'],
        },
      ],
    },
    'shinobu': {
      role: {
        it: 'Kunoichi dell’alleanza Kozuki',
        en: 'Kozuki alliance kunoichi',
      },
      log: {
        it: 'Si muove per la capitale travestita e raccoglie notizie per chi complotta contro lo shogun, e sa entrare e uscire dal castello senza farsi vedere. Il suo frutto del diavolo fa maturare tutto ciò che tocca, così una porta chiusa marcisce sotto le sue dita e un uomo invecchia di colpo. Sostiene di essere ancora giovanissima nell’animo.',
        en: 'She moves through the capital in disguise, gathering word for the people plotting against the shogun, and slips in and out of the castle unseen. Her devil fruit ripens whatever it touches, so a locked door rots under her fingers and a grown man ages in a moment. She insists she is still a young thing at heart.',
      },
      affiliation: [
        {
          episode: 912,
          value: {
            it: 'Alleanza Kozuki, kunoichi; un tempo dell’Oniwabanshu',
            en: 'Kozuki alliance, kunoichi; once of the Oniwabanshu',
          },
        },
      ],
      origin: [{ episode: 912, value: WANO }],
      devilFruit: [{ episode: 912, value: ['ripe-ripe-fruit'] }],
    },
    'hyogoro': {
      role: { it: 'Vecchio capo della yakuza', en: 'Old yakuza boss' },
      log: {
        it: 'Nel campo di lavoro di Udon spacca pietre come tutti gli altri, ma quando parla i detenuti abbassano la voce. Per quarant’anni ha tenuto insieme le famiglie della yakuza del paese e non ha mai piegato la testa davanti allo shogun. Divide la sua ciotola di zuppa con un ragazzo appena arrivato che non ha ancora capito dove si trova.',
        en: 'In the Udon labour camp he breaks rocks like everybody else, yet the prisoners drop their voices when he speaks. For forty years he held the country’s yakuza families together, and he never once bowed his head to the shogun. He shares his bowl of soup with a newcomer who has not yet understood where he is.',
      },
      affiliation: [
        {
          episode: 917,
          value: {
            it: 'Prigioniero del campo di lavoro di Udon; un tempo capo della yakuza di Wano',
            en: 'Prisoner of the Udon labour camp; once boss of the Wano yakuza',
          },
        },
        {
          episode: 950,
          value: { it: 'Alleanza Kozuki', en: 'Kozuki alliance' },
        },
      ],
      origin: [{ episode: 917, value: WANO }],
      epithet: [
        {
          episode: 917,
          value: { it: 'Hyogoro del Fiore', en: 'Hyogoro of the Flower' },
        },
      ],
    },
    'queen': {
      role: {
        it: 'All-Star dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates All-Star',
      },
      log: {
        it: 'Governa il campo di Udon come uno spettacolo: musica, risate e prigionieri costretti a lavorare finché reggono. È uno dei tre luogotenenti dell’Imperatore, ha un corpo pieno di macchine e di trovate e porta una taglia che pochi al mondo raggiungono. Chi tenta la fuga viene riportato dentro e usato come intrattenimento.',
        en: 'He runs the Udon camp like a stage show: music, laughter, and prisoners worked until they drop. He is one of the Emperor’s three lieutenants, a body full of machinery and gimmicks, and a bounty few men in the world reach. Anyone who tries to escape is dragged back inside and used as entertainment.',
      },
      affiliation: [
        {
          episode: 917,
          value: {
            it: 'Pirati delle Cento Bestie, All-Star, direttore di Udon',
            en: 'Beasts Pirates, All-Star, warden of Udon',
          },
        },
      ],
      epithet: [
        {
          episode: 917,
          value: { it: 'Queen la Peste', en: 'Queen the Plague' },
        },
      ],
      devilFruit: [
        {
          episode: 925,
          value: ['dragon-dragon-fruit-ancient-model-brachiosaurus'],
        },
      ],
      bounty: [{ episode: 917, value: 1_320_000_000 }],
    },
    'king': {
      role: {
        it: 'All-Star dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates All-Star',
      },
      log: {
        it: 'Vola sopra Wano con una maschera che non toglie mai e un corpo che prende fuoco quando accelera, e nessuno degli uomini dell’Imperatore osa rivolgergli la parola per primo. È il più forte dei tre luogotenenti e porta una taglia più alta di quella dei suoi pari. Di lui si sanno il nome, l’ala e poco altro.',
        en: 'He flies over Wano behind a mask he never takes off, his body catching fire as he accelerates, and none of the Emperor’s men speaks to him first. He is the strongest of the three lieutenants and carries a bounty higher than either of his equals. His name, his wing and very little else are known.',
      },
      affiliation: [
        {
          episode: 923,
          value: {
            it: 'Pirati delle Cento Bestie, All-Star',
            en: 'Beasts Pirates, All-Star',
          },
        },
      ],
      origin: [
        {
          episode: 1049,
          value: { it: 'Lunaria, la Red Line', en: 'Lunaria, the Red Line' },
        },
      ],
      epithet: [
        {
          episode: 923,
          value: { it: 'King l’Incendio', en: 'King the Wildfire' },
        },
      ],
      devilFruit: [
        {
          episode: 923,
          value: ['dragon-dragon-fruit-ancient-model-pteranodon'],
        },
      ],
      bounty: [{ episode: 923, value: 1_390_000_000 }],
    },
    'komurasaki': {
      role: {
        it: 'Oiran della Capitale dei Fiori',
        en: 'Oiran of the Flower Capital',
      },
      log: {
        it: 'Quando esce dalla casa di piacere la città intera si ferma a guardarla, e i mercanti si rovinano per una sua serata. Ha fama di essere avida e crudele, e ha già respinto uomini abbastanza potenti da farla uccidere per molto meno. Si porta dietro una bambina che le fa da paggio e che sembra l’unica a non temerla.',
        en: 'When she leaves the pleasure house the whole city stops to watch, and merchants ruin themselves for one evening of her time. She has a name for greed and cruelty, and has already turned down men powerful enough to kill her for far less. A small girl attends her as her page, and seems to be the only person not afraid of her.',
      },
      affiliation: [
        {
          episode: 921,
          value: {
            it: 'Capitale dei Fiori, oiran di rango più alto',
            en: 'The Flower Capital, top oiran',
          },
        },
        {
          episode: 935,
          value: {
            it: 'Famiglia Kozuki, Hiyori, figlia di Oden',
            en: 'Kozuki family, Hiyori, daughter of Oden',
          },
        },
      ],
      origin: [{ episode: 921, value: WANO }],
    },
    'toko': {
      role: { it: 'Kamuro di Komurasaki', en: 'Komurasaki’s kamuro' },
      log: {
        it: 'Fa da paggio alla cortigiana più famosa della capitale e la segue dovunque, portandole i sandali e i dolci. Ride in continuazione, per strada, davanti allo shogun e nei momenti peggiori, e a Wano ridere davanti alla persona sbagliata può costare la testa. Nessuno in città sa spiegare perché lo faccia.',
        en: 'She serves as page to the capital’s most famous courtesan and follows her everywhere, carrying her sandals and her sweets. She laughs constantly, in the street, in front of the shogun and at the worst possible moments, and in Wano laughing at the wrong person can cost a head. Nobody in the city can explain why she does it.',
      },
      affiliation: [
        {
          episode: 921,
          value: {
            it: 'Capitale dei Fiori, kamuro al servizio di Komurasaki',
            en: 'The Flower Capital, kamuro attending Komurasaki',
          },
        },
        {
          episode: 934,
          value: { it: 'Figlia di Yasuie', en: 'Yasuie’s daughter' },
        },
      ],
      origin: [{ episode: 921, value: WANO }],
    },
    'kyoshiro': {
      role: {
        it: 'Capo della famiglia Kyoshiro',
        en: 'Boss of the Kyoshiro Family',
      },
      log: {
        it: 'Comanda la famiglia più potente della capitale e gestisce il denaro dello shogun, che lo tiene vicino e lo porta alle proprie feste. I suoi uomini sorvegliano le case di piacere e riscuotono dove nessun altro oserebbe. Beve con i pirati dell’Imperatore come se fossero soci, e chi gli dà fastidio per strada non arriva alla fine della serata.',
        en: 'He runs the most powerful family in the capital and handles the shogun’s money, which keeps him close to the man and welcome at his parties. His men watch over the pleasure houses and collect where nobody else would dare. He drinks with the Emperor’s pirates as though they were partners, and anyone who troubles him in the street does not see the end of the evening.',
      },
      affiliation: [
        {
          episode: 921,
          value: {
            it: 'Famiglia Kyoshiro, boss, cambiavalute di Orochi',
            en: 'Kyoshiro Family, boss, Orochi’s money changer',
          },
        },
        {
          episode: 956,
          value: {
            it: 'Nove Foderi Rossi, Denjiro',
            en: 'Nine Red Scabbards, Denjiro',
          },
        },
      ],
      origin: [{ episode: 921, value: WANO }],
      epithet: [{ episode: 956, value: { it: 'Denjiro', en: 'Denjiro' } }],
    },
    'shimotsuki-yasuie': {
      role: { it: 'Ex daimyo di Hakumai', en: 'Former daimyo of Hakumai' },
      log: {
        it: 'Nel quartiere più povero della capitale gira scalzo, saluta tutti per nome e promette a chi ha fame che un giorno le cose cambieranno. La gente di Ebisu lo chiama Tonoyasu e lo ascolta più di quanto ascolti lo shogun. Quando si presenta da solo davanti al patibolo, la capitale scopre che quel vecchio senza sandali era il signore di una delle regioni di Wano.',
        en: 'In the poorest quarter of the capital he walks barefoot, greets everyone by name and promises the hungry that one day things will change. The people of Ebisu call him Tonoyasu and listen to him more than they listen to the shogun. When he walks up to the execution stand alone, the capital learns that the old man without sandals once ruled one of Wano’s regions.',
      },
      status: [
        { episode: 938, value: 'alive' },
        { episode: 940, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 938,
          value: {
            it: 'Ex daimyo di Hakumai; Tonoyasu del quartiere di Ebisu',
            en: 'Former daimyo of Hakumai; Tonoyasu of Ebisu Town',
          },
        },
        { episode: 940, value: { it: 'Giustiziato', en: 'Executed' } },
      ],
      origin: [{ episode: 938, value: WANO }],
      epithet: [{ episode: 938, value: { it: 'Tonoyasu', en: 'Tonoyasu' } }],
    },
    'gyukimaru': {
      role: { it: 'Ladro di spade', en: 'Sword thief' },
      log: {
        it: 'Sta in piedi sul ponte di Oihagi con una naginata e il cappuccio calato, e lascia passare soltanto chi gli consegna la spada. Alle sue spalle si è accumulata una montagna di lame prese a samurai, banditi e viandanti. Combatte bene, parla poco e non dice a nessuno che cosa se ne faccia di tutto quel ferro.',
        en: 'He stands on the Oihagi Bridge with a naginata and his hood down, and lets across only those who hand over their sword. Behind him a mountain of blades has piled up, taken from samurai, bandits and travellers alike. He fights well, says little, and tells nobody what he does with all that steel.',
      },
      affiliation: [
        {
          episode: 934,
          value: {
            it: 'Ponte di Oihagi, ladro di armi',
            en: 'Oihagi Bridge, robber of weapons',
          },
        },
      ],
      origin: [{ episode: 934, value: WANO }],
    },
    'fukurokuju': {
      role: { it: 'Capo dell’Oniwabanshu', en: 'Leader of the Oniwabanshu' },
      log: {
        it: 'Comanda i ninja che sorvegliano la capitale per conto dello shogun e decidono chi arriva vivo al mattino. Si muove senza rumore, ascolta dietro le porte e riferisce ogni cosa al suo padrone, che lo tiene a un passo dal trono. Quando serve esegue di persona: un ordine dello shogun non passa mai per un tribunale.',
        en: 'He commands the ninja who watch the capital for the shogun and decide who lives to see the morning. He moves without a sound, listens at doors and reports everything to his master, who keeps him a step from the throne. When it is called for he carries out the work himself: an order from the shogun never passes through a court.',
      },
      affiliation: [
        {
          episode: 934,
          value: {
            it: 'Oniwabanshu di Orochi, capo',
            en: 'Orochi Oniwabanshu, leader',
          },
        },
      ],
      origin: [{ episode: 934, value: WANO }],
    },
    'kawamatsu': {
      role: { it: 'Prigioniero di Udon', en: 'Prisoner of Udon' },
      log: {
        it: 'È rinchiuso da anni in fondo alla prigione di Udon, in una gabbia troppo piccola per lui, e i carcerieri lo tengono d’occhio più di chiunque altro. Divide il poco cibo con i detenuti più deboli e sopporta le percosse ridendo, con la testa piatta che gli è valsa il soprannome di kappa. I carcerieri sanno che è più pericoloso di quanto sembri, e nessuno gli passa vicino.',
        en: 'He has spent years at the bottom of the Udon jail, in a cage far too small for him, watched more closely than any other prisoner. He shares what little food he gets with the weakest convicts and takes his beatings laughing, the flat head that earned him the kappa name held high. The jailers know he is more dangerous than he looks, and none of them goes near him.',
      },
      affiliation: [
        {
          episode: 936,
          value: {
            it: 'Prigioniero del campo di lavoro di Udon',
            en: 'Prisoner of the Udon labour camp',
          },
        },
        { episode: 941, value: RED_SCABBARDS },
      ],
      origin: [{ episode: 936, value: WANO }],
      epithet: [
        {
          episode: 936,
          value: { it: 'Kawamatsu il Kappa', en: 'Kawamatsu the Kappa' },
        },
      ],
    },
    'rocks-d-xebec': {
      role: {
        it: 'Capitano dei Pirati di Rocks',
        en: 'Captain of the Rocks Pirates',
      },
      log: {
        it: 'Un vecchio grand’ammiraglio racconta di una ciurma che quarant’anni fa metteva insieme uomini che oggi sono leggende, e del capitano che li teneva tutti sotto di sé. Voleva prendersi il mondo, e la sua storia finisce su un’isola chiamata God Valley, dove qualcuno lo ferma. Il Governo Mondiale ha fatto sparire quel nome da ogni documento.',
        en: 'A retired fleet admiral tells of a crew that forty years ago held men who are legends today, and of the captain who kept every one of them under him. He meant to take the world, and his story ends on an island called God Valley, where somebody stopped him. The World Government struck his name out of every record it keeps.',
      },
      status: [{ episode: 958, value: 'deceased' }],
      affiliation: [
        {
          episode: 958,
          value: {
            it: 'Pirati di Rocks, capitano, quarant’anni fa',
            en: 'Rocks Pirates, captain, forty years ago',
          },
        },
      ],
      origin: [{ episode: 958, value: { it: 'Hachinosu', en: 'Hachinosu' } }],
    },
    'kozuki-oden': {
      role: { it: 'Daimyo di Kuri', en: 'Daimyo of Kuri' },
      log: {
        it: 'A Wano lo ricordano come un disastro: rubava, si azzuffava e metteva in imbarazzo il castello di suo padre, e la gente di Kuri lo adorava lo stesso. Prese il mare con la ciurma di Barbabianca e poi con quella del Re dei Pirati, e tornò in un paese che non era più il suo. Vent’anni fa lo giustiziarono nella capitale, e da allora Wano è chiusa.',
        en: 'Wano remembers him as a walking disaster: he stole, he brawled and he shamed his father’s castle, and the people of Kuri loved him for it. He took to the sea with Whitebeard’s crew and then with the King of the Pirates, and came home to a country that was no longer his. Twenty years ago they executed him in the capital, and Wano has been shut ever since.',
      },
      status: [
        { episode: 960, value: 'alive' },
        { episode: 972, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 960,
          value: {
            it: 'Kuri, daimyo; Pirati di Barbabianca, comandante della seconda divisione; Pirati di Roger; giustiziato vent’anni fa',
            en: 'Kuri, daimyo; Whitebeard Pirates, second division commander; Roger Pirates; executed twenty years ago',
          },
        },
      ],
      origin: [{ episode: 960, value: WANO }],
    },
    'kozuki-toki': {
      role: { it: 'Moglie di Oden', en: 'Oden’s wife' },
      log: {
        it: 'Arriva a Wano da sola, cercando un paese che dice di avere lasciato ottocento anni prima, e non spiega a nessuno come ci sia riuscita. Il suo frutto del diavolo manda le persone avanti nel tempo in una sola direzione: nessuno può tornare indietro. Sposa il daimyo di Kuri e resta con lui anche quando il paese gli si rivolta contro.',
        en: 'She arrives in Wano alone, looking for a country she says she left eight hundred years earlier, and explains to nobody how she managed it. Her devil fruit sends people forward through time in one direction only: nobody comes back. She marries the daimyo of Kuri and stays with him even when the country turns against him.',
      },
      status: [{ episode: 963, value: 'deceased' }],
      affiliation: [
        {
          episode: 963,
          value: {
            it: 'Famiglia Kozuki, moglie di Oden',
            en: 'Kozuki family, Oden’s wife',
          },
        },
      ],
      origin: [
        {
          episode: 963,
          value: {
            it: 'Paese di Wano, ottocento anni fa',
            en: 'Wano Country, eight hundred years ago',
          },
        },
      ],
      devilFruit: [{ episode: 963, value: ['time-time-fruit'] }],
    },
    'kurozumi-higurashi': {
      role: { it: 'Anziana dei Kurozumi', en: 'Kurozumi elder' },
      log: {
        it: 'Porta il nome di una famiglia che a Wano nessuno pronuncia volentieri, e cammina appoggiata a un bastone con una maschera da volpe sul viso. Il suo frutto le permette di assumere l’aspetto di chiunque abbia visto, e se ne serve per mettere gli uomini gli uni contro gli altri. È lei a spingere verso il potere un giovane Kurozumi.',
        en: 'She carries a family name that nobody in Wano says gladly, and walks leaning on a stick with a fox mask over her face. Her fruit lets her take the shape of anyone she has laid eyes on, and she uses it to set men against each other. It is she who pushes a young Kurozumi towards power.',
      },
      status: [{ episode: 963, value: 'deceased' }],
      affiliation: [
        {
          episode: 963,
          value: {
            it: 'Famiglia Kurozumi, anziana',
            en: 'Kurozumi family, elder',
          },
        },
      ],
      origin: [{ episode: 963, value: WANO }],
      devilFruit: [{ episode: 963, value: ['clone-clone-fruit'] }],
    },
    'kurozumi-semimaru': {
      role: {
        it: 'Uomo della famiglia Kurozumi',
        en: 'Man of the Kurozumi family',
      },
      log: {
        it: 'Sta accanto all’anziana della famiglia Kurozumi senza quasi mai parlare, e interviene soltanto quando qualcuno alza una mano su di lei. Il suo frutto del diavolo alza barriere invisibili che fermano una lama a mezz’aria e non si lasciano piegare. In un paese che odia il suo cognome, gli basta una parete d’aria per restare in piedi.',
        en: 'He stands beside the elder of the Kurozumi family and hardly ever speaks, stepping in only when somebody raises a hand to her. His devil fruit throws up invisible barriers that stop a blade in mid-air and will not bend for anyone. In a country that hates his family name, a wall of air is enough to keep him standing.',
      },
      status: [{ episode: 963, value: 'deceased' }],
      affiliation: [
        {
          episode: 963,
          value: { it: 'Famiglia Kurozumi', en: 'Kurozumi family' },
        },
      ],
      origin: [{ episode: 963, value: WANO }],
      devilFruit: [{ episode: 963, value: ['barrier-barrier-fruit'] }],
    },
    'izo': {
      role: {
        it: 'Comandante della sedicesima divisione',
        en: 'Sixteenth division commander',
      },
      log: {
        it: 'Cresciuto nella capitale, ha lasciato Wano insieme al daimyo di Kuri e non ha più fatto ritorno, restando a bordo della nave di Barbabianca. Si presenta in kimono, con gli spilloni tra i capelli e due pistole a pietra focaia che usa meglio di chiunque altro nella ciurma. Del paese che ha lasciato non ha mai smesso di chiedere notizie.',
        en: 'Raised in the capital, he left Wano with the daimyo of Kuri and never went home, staying aboard Whitebeard’s ship instead. He turns up in a kimono, pins in his hair and a flintlock in each hand, and shoots better than anyone else in the crew. He has never stopped asking for word of the country he left behind.',
      },
      status: [
        { episode: 970, value: 'alive' },
        { episode: 1076, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 970,
          value: {
            it: 'Pirati di Barbabianca, comandante della sedicesima divisione; un tempo allievo di Oden',
            en: 'Whitebeard Pirates, sixteenth division commander; once an apprentice of Oden',
          },
        },
      ],
      origin: [{ episode: 970, value: WANO }],
    },
    'ulti': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'Fa parte dei sei ufficiali di punta dell’Imperatore e gira per Onigashima insieme al fratello, con cui litiga di continuo. Quando si arrabbia la testa le si copre di una calotta ossea e carica come un ariete, e chi la prende in pieno attraversa una parete. Non sopporta che qualcuno parli male del suo capitano.',
        en: 'She is one of the Emperor’s six leading officers and walks Onigashima beside her brother, whom she argues with constantly. When she loses her temper her skull hardens into a bony dome and she charges like a ram, and whoever takes it goes through a wall. She cannot bear anyone speaking badly of her captain.',
      },
      affiliation: [{ episode: 982, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 982,
          value: ['dragon-dragon-fruit-ancient-model-pachycephalosaurus'],
        },
      ],
    },
    'whos-who': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'È uno dei sei ufficiali di punta dell’Imperatore e si muove con la calma di chi il mondo lo ha già visto dall’altra parte: ha servito nel Cipher Pol prima di arrivare su questa nave. Si trasforma in una tigre dai denti a sciabola, combatte con la spada e con le gambe e tiene il volto coperto. Chi gli sta intorno lo ascolta senza interromperlo.',
        en: 'He is one of the Emperor’s six leading officers and carries himself like a man who has seen the world from the other side: he served in Cipher Pol before he ended up on this ship. He turns into a sabre-toothed tiger, fights with sword and legs both, and keeps his face covered. The men around him listen without interrupting.',
      },
      affiliation: [
        {
          episode: 982,
          value: {
            it: 'Pirati delle Cento Bestie, Tobiroppo; un tempo Cipher Pol 9',
            en: 'Beasts Pirates, Tobiroppo; once Cipher Pol 9',
          },
        },
      ],
      devilFruit: [
        {
          episode: 982,
          value: ['cat-cat-fruit-ancient-model-sabre-tooth-tiger'],
        },
      ],
    },
    'black-maria': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'Tiene la propria casa di piacere dentro la fortezza dell’Imperatore, con ragnatele al posto delle tende e ragni al posto delle domestiche. È una dei sei ufficiali di punta della ciurma e sorveglia i corridoi dall’alto, dove nessuno pensa di guardare. Invita a entrare chi le interessa, e chi entra fatica a uscire.',
        en: 'She keeps her own pleasure house inside the Emperor’s fortress, webs instead of curtains and spiders instead of servants. She is one of the crew’s six leading officers and watches the corridors from above, where nobody thinks to look. She invites in whoever interests her, and those who go in find it hard to leave.',
      },
      affiliation: [{ episode: 982, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 982,
          value: ['spider-spider-fruit-ancient-model-rosamygale-grauvogeli'],
        },
      ],
    },
    'sasaki': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'Comanda la fanteria corazzata dell’Imperatore ed è uno dei sei ufficiali di punta della ciurma, con una reputazione da uomo tutto d’un pezzo. Trasformato è un triceratopo che carica a testa bassa e non si ferma davanti a un muro. Tratta i suoi uomini con rispetto e pretende che nessuno di loro scappi.',
        en: 'He commands the Emperor’s armoured troops and is one of the crew’s six leading officers, with a name for being straight-backed and old-fashioned. Transformed, he is a triceratops that charges head down and does not stop for a wall. He treats his men with respect and expects that none of them run.',
      },
      affiliation: [{ episode: 982, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 982,
          value: ['dragon-dragon-fruit-ancient-model-triceratops'],
        },
      ],
    },
    'yamato': {
      role: { it: 'Figlio di Kaido', en: 'Kaido’s child' },
      log: {
        it: 'Dice di essere Kozuki Oden, il samurai che vent’anni fa sfidò Kaido e perse, e ne porta il diario e le abitudini. Suo padre lo tiene a Onigashima con due manette che esplodono se lascia l’isola. Aspettava Ace, che gli aveva promesso di tornare; al suo posto arriva il fratello di Ace, e per Yamato è abbastanza.',
        en: 'He says he is Kozuki Oden, the samurai who challenged Kaido twenty years ago and lost, and carries Oden’s journal and Oden’s habits. His father keeps him on Onigashima with two cuffs that explode if he leaves the island. He was waiting for Ace, who promised to come back; Ace’s brother arrives instead, and for Yamato that is enough.',
      },
      affiliation: [
        {
          episode: 992,
          value: {
            it: 'Nessuna: prigioniero di Kaido a Onigashima',
            en: 'None: Kaido’s prisoner on Onigashima',
          },
        },
      ],
      origin: [
        { episode: 992, value: { it: 'Paese di Wano', en: 'Wano Country' } },
      ],
      devilFruit: [
        { episode: 1040, value: ['dog-dog-fruit-model-okuchi-no-makami'] },
      ],
    },
    'bao-huang': {
      role: {
        it: 'Headliner dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates headliner',
      },
      log: {
        it: 'Nella fortezza dell’Imperatore fa da occhi e da voce: con il suo frutto del diavolo guarda attraverso i muri e poi trasmette quello che vede in ogni stanza dell’isola. Segnala gli intrusi corridoio per corridoio, e a ogni annuncio la caccia ricomincia da capo. Chi vuole muoversi di nascosto deve prima far tacere lei.',
        en: 'Inside the Emperor’s fortress she works as its eyes and its voice: her devil fruit sees through walls, and she broadcasts what she finds into every room on the island. She calls out intruders corridor by corridor, and each announcement starts the hunt over again. Anyone who wants to move unseen has to silence her first.',
      },
      affiliation: [
        {
          episode: 995,
          value: {
            it: 'Pirati delle Cento Bestie, headliner e Mary',
            en: 'Beasts Pirates, headliner and Mary',
          },
        },
      ],
      devilFruit: [{ episode: 995, value: ['squirrel-squirrel-fruit'] }],
    },
  },
}
