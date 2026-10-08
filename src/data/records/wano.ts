import type { Saga } from './saga'
import { wanoChronicles } from './wano.chronicle'

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
      id: 'kuri',
      kind: 'place',
      revealedAtEpisode: 893,
      revealedAtChapter: 911,
      name: { it: 'Kuri', en: 'Kuri' },
      summary: {
        it: 'La regione di Wano dove Rufy approda da solo con la nave, una spiaggia sotto un bosco, dove una bambina con il suo cane gli conferma che è arrivato.',
        en: 'The region of Wano where Luffy washes up alone with the ship, a beach below a forest, where a girl with her dog tells him he has made it.',
      },
      visual: { art: 'kuri', tint: 'green' },
    },
    {
      id: 'tama',
      kind: 'character',
      revealedAtEpisode: 894,
      revealedAtChapter: 912,
      name: { it: 'O-Tama', en: 'Tama' },
      summary: {
        it: 'Una bambina affamata del villaggio di Amigasa che divide la sua unica scodella di riso con uno sconosciuto.',
        en: 'A hungry girl from Amigasa Village who shares her one bowl of rice with a starving stranger she has just met.',
      },
      visual: { art: 'tama', tint: 'pink' },
    },
    {
      id: 'tenguyama-hitetsu',
      kind: 'character',
      revealedAtEpisode: 894,
      revealedAtChapter: 913,
      name: { it: 'Tengu Yama Hitetsu', en: 'Tenguyama Hitetsu' },
      summary: {
        it: 'Il vecchio fabbro di spade del villaggio di Amigasa, che nasconde il volto dietro una maschera da tengu dal naso lungo e sguaina la spada contro lo sconosciuto che trova accanto alla scodella vuota di Tama.',
        en: 'The old swordsmith of Amigasa Village, who hides his face behind a long-nosed tengu mask and draws his sword on the stranger he finds beside Tama’s empty rice bowl.',
      },
      visual: { art: 'tenguyama-hitetsu', tint: 'red' },
    },
    {
      id: 'kiku',
      kind: 'character',
      revealedAtEpisode: 899,
      revealedAtChapter: 914,
      name: { it: 'Kiku', en: 'Kiku' },
      summary: {
        it: 'La cameriera di una casa da tè di Okobore, che rifiuta la proposta di matrimonio di uno yokozuna dicendogli che le loro condizioni sociali sono troppo diverse.',
        en: 'The waitress of a tea house in Okobore Town, who turns down a yokozuna’s offer of marriage by telling him their stations are too far apart.',
      },
      visual: { art: 'kiku', tint: 'ice' },
    },
    {
      id: 'ashura-doji',
      kind: 'character',
      revealedAtEpisode: 910,
      revealedAtChapter: 920,
      name: { it: 'Ashura Doji', en: 'Ashura Doji' },
      summary: {
        it: 'L’uomo più pericoloso di Kuri ai tempi in cui la regione era una terra senza legge, capo dei suoi furfanti finché il figlio esiliato dello shogun non lo sconfisse.',
        en: 'The most dangerous man in Kuri back when the region was a lawless land, leader of its ruffians until the shogun’s exiled son beat him.',
      },
      visual: { art: 'ashura-doji', tint: 'vermilion' },
    },
    {
      id: 'page-one',
      kind: 'character',
      revealedAtEpisode: 923,
      revealedAtChapter: 929,
      name: { it: 'Page One', en: 'Page One' },
      summary: {
        it: 'Uno dei Tobiroppo, i sei headliner più forti dei Pirati delle Cento Bestie, che entra nella Capitale dei Fiori insieme a X Drake, mandato a punire in modo esemplare chi ha sfidato la ciurma.',
        en: 'One of the Tobiroppo, the six strongest headliners of the Beasts Pirates, who walks into the Flower Capital beside X Drake, sent to make an example of whoever crossed the crew.',
      },
      visual: { art: 'page-one', tint: 'teal' },
    },
    {
      id: 'kurozumi-orochi',
      kind: 'character',
      revealedAtEpisode: 921,
      revealedAtChapter: 927,
      name: { it: 'Kurozumi Orochi', en: 'Kurozumi Orochi' },
      summary: {
        it: 'Lo shogun del Paese di Wano, che vive nella Capitale dei Fiori e governa con i pirati dell’Imperatore alle spalle, mentre i villaggi fuori fanno la fame.',
        en: 'The shogun of Wano Country, who lives in the Flower Capital and rules with the Emperor’s pirates behind him, while the villages outside go hungry.',
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
        it: 'Una kunoichi veterana al servizio dei Kozuki, un tempo come una sorella minore per Kin’emon, che come tecnica speciale usa la seduzione e si definisce una donna matura.',
        en: 'A veteran kunoichi in the service of the Kozuki, once like a younger sister to Kin’emon, whose signature move is Seduction Jutsu and who calls herself a mature woman.',
      },
      visual: { art: 'shinobu', tint: 'lavender' },
    },
    {
      id: 'hyogoro',
      kind: 'character',
      revealedAtEpisode: 931,
      revealedAtChapter: 935,
      name: { it: 'Hyogoro', en: 'Hyogoro' },
      summary: {
        it: 'Un vecchio prigioniero del campo di Udon, conosciuto lì solo come il vecchio Hyo, che si rivela essere Hyogoro del Fiore, un tempo il boss della yakuza più potente di Wano.',
        en: 'An old prisoner of the Udon camp, known there only as Old Man Hyo, who turns out to be Hyogoro of the Flower, once the most powerful yakuza boss in Wano.',
      },
      visual: { art: 'hyogoro', tint: 'ocher' },
    },
    {
      id: 'queen',
      kind: 'character',
      revealedAtEpisode: 930,
      revealedAtChapter: 935,
      // "Queen" is a title: Otohime and Sora are queens long before the All-Star is met.
      commonWord: true,
      name: { it: 'Queen', en: 'Queen' },
      summary: {
        it: 'L’All-Star dei Pirati delle Cento Bestie che comanda il campo di prigionia di Udon, un omone con un braccio meccanico che sale su un palco a cantare e ballare per le sue guardie.',
        en: 'The Beasts Pirates All-Star who rules the Udon prison camp, a huge man with a mechanical arm who takes to a stage to sing and dance for his guards.',
      },
      visual: { art: 'queen', tint: 'yellow' },
    },
    {
      id: 'king',
      kind: 'character',
      revealedAtEpisode: 923,
      revealedAtChapter: 935,
      // "King" is in "King of the Pirates" from episode 1, so plain text is never scanned for it.
      commonWord: true,
      name: { it: 'King', en: 'King' },
      summary: {
        it: 'Un uomo mascherato dei Pirati delle Cento Bestie che Jack chiama fratello maggiore, che lo rimprovera perché le offerte di Kuri sono troppo scarse e litiga a insulti con un altro uomo dell’Imperatore.',
        en: 'A masked man of the Beasts Pirates whom Jack calls big brother, who scolds him because the offerings from Kuri are too low and trades insults with another of the Emperor’s men.',
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
        it: 'La bambina che fa da kamuro all’oiran della Capitale dei Fiori, e che continua a sorridere anche quando dei teppisti le fanno cadere a terra la scodella di soba.',
        en: 'The little girl who attends the Flower Capital’s oiran as her kamuro, and who keeps smiling even when thugs knock her bowl of soba to the ground.',
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
      revealedAtEpisode: 939,
      revealedAtChapter: 943,
      name: { it: 'Shimotsuki Yasuie', en: 'Shimotsuki Yasuie' },
      summary: {
        it: 'Un vecchio del quartiere di Ebisu, chiamato Tonoyasu e amato da tutto il quartiere, che un tempo era il daimyo di Hakumai.',
        en: 'An old man from Ebisu Town, called Tonoyasu and loved by the whole town, who was once the daimyo of Hakumai.',
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
        it: 'Il capitano dei ninja dello shogun, un uomo alto e calvo con la testa allungata e il braccio sinistro tatuato, che a un’intrusa nel castello concede una sola possibilità di spiegarsi.',
        en: 'The captain of the shogun’s ninja, a tall bald man with an elongated head and a tattooed left arm, who gives an intruder in the castle one chance to explain herself.',
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
      revealedAtEpisode: 970,
      revealedAtChapter: 972,
      name: { it: 'Kurozumi Higurashi', en: 'Kurozumi Higurashi' },
      summary: {
        it: 'Una vecchia della famiglia Kurozumi che sta accanto a Orochi e, con il frutto Clone Clone, ha preso l’aspetto dello shogun Sukiyaki perché Orochi fosse nominato reggente.',
        en: 'An old woman of the Kurozumi family who stands at Orochi’s side and, with the Clone-Clone Fruit, took the shogun Sukiyaki’s shape to have Orochi named proxy.',
      },
      visual: { art: 'kurozumi-higurashi', tint: 'ocher' },
    },
    {
      id: 'kurozumi-semimaru',
      kind: 'character',
      revealedAtEpisode: 970,
      revealedAtChapter: 972,
      name: { it: 'Kurozumi Semimaru', en: 'Kurozumi Semimaru' },
      summary: {
        it: 'Un monaco Kurozumi che suona il biwa e alza davanti a Orochi una barriera invisibile contro cui la lama di Oden si ferma a mezz’aria.',
        en: 'A biwa-playing priest of the Kurozumi family who raises an invisible barrier in front of Orochi, against which Oden’s blade stops dead in mid-air.',
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
        it: 'Il figlio di un maestro di danza di Wano, che da bambino segue Oden, gli corre dietro fin sulla nave di Barbabianca e resta con quella ciurma quando Oden se ne va.',
        en: 'The son of a dance master from Wano, who follows Oden as a child, goes after him onto Whitebeard’s ship and stays with that crew when Oden leaves it.',
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
        it: 'Una ragazza dei Tobiroppo con due corna e una mascherina rosa sulla bocca, che se la prende con chiunque la infastidisca, Kaido compreso.',
        en: 'A young woman of the Tobiroppo with two horns and a pink mask over her mouth, who snaps at anyone who annoys her, Kaido included.',
      },
      visual: { art: 'ulti', tint: 'violet' },
    },
    {
      id: 'whos-who',
      kind: 'character',
      revealedAtEpisode: 982,
      revealedAtChapter: 980,
      name: { it: 'Who’s Who', en: 'Who’s-Who' },
      summary: {
        it: 'Un uomo altissimo dei Tobiroppo con una maschera rossa con le corna e una sigaretta in bocca, che dice a Ulti e Page One di stare zitti quando si mettono a litigare.',
        en: 'A very tall man of the Tobiroppo in a red horned mask, a cigarette in his mouth, who tells Ulti and Page One to be quiet when they start arguing.',
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
        it: 'Una donna altissima dei Tobiroppo in kimono nero con una lunga pipa in mano, a cui piace che Ulti non si tiri mai indietro.',
        en: 'An enormously tall woman of the Tobiroppo in a black kimono, a long pipe in her hand, who likes that Ulti never backs down.',
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
        it: 'Un uomo dei Tobiroppo con un berretto militare con le corna e un mantello sulle spalle, che punzecchia Page One mentre i sei aspettano di essere chiamati.',
        en: 'A man of the Tobiroppo in a horned military cap and a cloak slung over his shoulders, who needles Page One while the six wait to be called.',
      },
      visual: { art: 'sasaki', tint: 'azure' },
    },
    {
      id: 'yamato',
      kind: 'character',
      revealedAtEpisode: 990,
      revealedAtChapter: 983,
      name: { it: 'Yamato', en: 'Yamato' },
      summary: {
        it: 'Il figlio dell’Imperatore che governa Wano, con una maschera da demone dalla lunga criniera blu e una mazza chiodata in mano, che mette fuori combattimento Ulti con la stessa mossa di suo padre e porta via Rufy, dicendo che lo stava aspettando.',
        en: 'The child of the Emperor who rules Wano, in a demon mask with a long blue mane and a studded club in hand, who knocks Ulti out with his father’s own move and carries Luffy off, saying he has been waiting for him.',
      },
      visual: { art: 'yamato', tint: 'ice' },
    },
    {
      id: 'bao-huang',
      kind: 'character',
      revealedAtEpisode: 985,
      revealedAtChapter: 979,
      name: { it: 'Bao Huang', en: 'Bao Huang' },
      summary: {
        it: 'Una headliner della ciurma dell’Imperatore, con una coda da scoiattolo e una maschera con un occhio disegnato sopra, che legge a Kaido il programma della serata.',
        en: 'A headliner of the Emperor’s crew, with a squirrel’s tail and a mask with one eye drawn on it, who reads Kaido the schedule for the night.',
      },
      visual: { art: 'bao-huang', tint: 'pink' },
    },
    {
      id: 'tsurujo',
      kind: 'character',
      revealedAtEpisode: 899,
      revealedAtChapter: 914,
      name: { it: 'O-Tsuru', en: 'Tsuru' },
      summary: {
        it: 'La proprietaria di una casa da tè di Okobore, con una gru d’oro appuntata tra i capelli, che ripaga lo spadaccino che l’ha salvata preparando la cura per una bambina avvelenata.',
        en: 'The owner of a tea house in Okobore Town, a golden crane pinned in her hair, who repays the swordsman who saved her by brewing the cure for a poisoned child.',
      },
      visual: { art: 'tsurujo', tint: 'azure' },
    },
    {
      id: 'holdem',
      kind: 'character',
      revealedAtEpisode: 901,
      revealedAtChapter: 915,
      name: { it: 'Holdem', en: 'Holdem' },
      summary: {
        it: 'Un headliner dei Pirati delle Cento Bestie a Bakura, con una testa di leone che gli spunta dalla pancia e fa di testa sua, che vuole sapere come una bambina abbia addomesticato un babbuino.',
        en: 'A Beasts Pirates headliner in Bakura Town, a lion’s head with a will of its own growing out of his belly, who wants to know how a little girl tamed a baboon.',
      },
      visual: { art: 'holdem', tint: 'orange' },
    },
    // Named at the Okobore tea house at 899, but filed at 902, his title
    // episode: nothing he has at 899 reads as him in a drawing, and 902 puts
    // him in the sumo ring. The tea house scene is told in his log (#271).
    {
      id: 'urashima',
      kind: 'character',
      revealedAtEpisode: 902,
      revealedAtChapter: 915,
      name: { it: 'Urashima', en: 'Urashima' },
      summary: {
        it: 'Un lottatore di sumo enorme, a sentir lui lo yokozuna più famoso della capitale, che corteggia la cameriera di una casa da tè vantando il proprio rango.',
        en: 'An enormous sumo wrestler, by his own account the most famous yokozuna of the capital, who courts a tea house waitress by boasting of his rank.',
      },
      visual: { art: 'urashima', tint: 'flamingo' },
    },
    {
      id: 'speed',
      kind: 'character',
      revealedAtEpisode: 904,
      revealedAtChapter: 917,
      name: { it: 'Speed', en: 'Speed' },
      summary: {
        it: 'Una headliner dei Pirati delle Cento Bestie che dalla vita in giù è un cavallo, con occhi che vedono quasi tutto intorno a sé, e che sorveglia il cibo della fattoria di Bakura.',
        en: 'A Beasts Pirates headliner who is a horse from the waist down, with eyes that see nearly all the way round her, keeping watch over the food of the farm in Bakura Town.',
      },
      visual: { art: 'speed', tint: 'sand' },
    },
    {
      id: 'flower-capital',
      kind: 'place',
      revealedAtEpisode: 909,
      revealedAtChapter: 919,
      // Hitetsu names the Flower Capital as the one thriving place in Wano at 894.
      nameSaidAt: 894,
      name: { it: 'Capitale dei Fiori', en: 'Flower Capital' },
      summary: {
        it: 'L’unica città di Wano che prospera ancora, dove vive lo shogun, con strade di botteghe e scuole in cui i bambini imparano a lodare il paese chiuso.',
        en: 'The one city in Wano still thriving, where the shogun lives, with streets of shops and schools where the children are taught to praise the closed country.',
      },
      visual: { art: 'flower-capital', tint: 'pink' },
    },
    {
      id: 'kozuki-hiyori',
      kind: 'character',
      revealedAtEpisode: 910,
      revealedAtChapter: 920,
      name: { it: 'Kozuki Hiyori', en: 'Kozuki Hiyori' },
      summary: {
        it: 'La sorellina di Momonosuke, rimasta con la madre nel castello in fiamme vent’anni fa quando il fratello fu mandato via, e di cui da allora non si sa più nulla.',
        en: 'Momonosuke’s little sister, left behind with her mother in the burning castle twenty years ago when her brother was sent away, and not heard of since.',
      },
      visual: { art: 'kozuki-hiyori', tint: 'flamingo' },
    },
    {
      id: 'udon',
      kind: 'place',
      revealedAtEpisode: 916,
      revealedAtChapter: 924,
      name: { it: 'Udon', en: 'Udon' },
      summary: {
        it: 'La regione di Wano delle fabbriche d’armi e delle miniere, dove i prigionieri sono costretti ai lavori forzati e chi ha sfidato Kaido resta in cella finché non cede.',
        en: 'The Wano region of weapon factories and mines, worked by prisoners in forced labour, where anyone who defied Kaido stays in a cell until he gives in.',
      },
      visual: { art: 'udon', tint: 'blue' },
    },
    {
      id: 'onigashima',
      kind: 'place',
      revealedAtEpisode: 918,
      revealedAtChapter: 925,
      name: { it: 'Onigashima', en: 'Onigashima' },
      summary: {
        it: 'L’isola dove Kaido e i Pirati delle Cento Bestie hanno la loro base, così vicina a Wano che dalla costa quasi si vede, e dove finiscono le offerte di Kuri.',
        en: 'The island where Kaido and the Beasts Pirates keep their base, so close to Wano it can almost be seen from the shore, where the offerings from Kuri end up.',
      },
      visual: { art: 'onigashima', tint: 'violet' },
    },
    // Met as himself before the reveal: the orphan of Oden's flashback at
    // 960. That he is Kyoshiro is dated on both records at 976.
    {
      id: 'dobon',
      kind: 'character',
      revealedAtEpisode: 919,
      revealedAtChapter: 926,
      name: { it: 'Dobon', en: 'Dobon' },
      summary: {
        it: 'Un vicedirettore del campo di lavoro di Udon che sta seduto nella bocca di un enorme ippopotamo, e va su tutte le furie quando i prigionieri gli lasciano soltanto tre dango.',
        en: 'A vice warden of the Udon labour camp who sits inside the mouth of a huge hippo, and flies into a rage when the prisoners leave him only three dumplings.',
      },
      visual: { art: 'dobon', tint: 'pink' },
    },
    {
      id: 'daikoku',
      kind: 'character',
      revealedAtEpisode: 928,
      revealedAtChapter: 933,
      name: { it: 'Daikoku', en: 'Daikoku' },
      summary: {
        it: 'Un ninja enorme della guardia dello shogun, con un copricapo a corna di toro, che non muove un dito per fermare la furia del suo padrone finché nel castello c’è un intruso da prendere.',
        en: 'A huge ninja of the shogun’s guard in a bull-horned headpiece, who will not lift a finger to stop his master’s rampage while there is an intruder in the castle to catch.',
      },
      visual: { art: 'daikoku', tint: 'wine' },
    },
    {
      id: 'raijin',
      kind: 'character',
      revealedAtEpisode: 928,
      revealedAtChapter: 933,
      name: { it: 'Raijin', en: 'Raijin' },
      summary: {
        it: 'Un ninja della guardia dello shogun, con una maschera a occhiali di due colori e un anello di sfere di fuoco sulla schiena, che davanti a un fantasma è molto meno coraggioso che davanti a un intruso.',
        en: 'A ninja of the shogun’s guard in a two-coloured goggled mask, a ring of fireballs on his back, who is far less brave in front of a ghost than in front of an intruder.',
      },
      visual: { art: 'raijin', tint: 'yellow' },
    },
    {
      id: 'fujin',
      kind: 'character',
      revealedAtEpisode: 928,
      revealedAtChapter: 933,
      name: { it: 'Fujin', en: 'Fujin' },
      summary: {
        it: 'Un ninja della guardia dello shogun, con un elmo scuro, un alto codino arancione e una mantella gonfia dietro le spalle, che va a caccia in coppia con Raijin.',
        en: 'A ninja of the shogun’s guard with a dark helmet, a tall orange ponytail and a puffed-up cape swelling behind his shoulders, who hunts in a pair with Raijin.',
      },
      visual: { art: 'fujin', tint: 'teal' },
    },
    {
      id: 'alpacaman',
      kind: 'character',
      revealedAtEpisode: 929,
      revealedAtChapter: 934,
      name: { it: 'Alpacaman', en: 'Alpacaman' },
      summary: {
        it: 'Una guardia del campo di lavoro di Udon con la testa e il collo di un alpaca, che interroga i prigionieri sputando loro addosso e ricorda che cosa succede a chi reagisce.',
        en: 'A guard of the Udon labour camp with the head and neck of an alpaca, who questions the prisoners by spitting on them and reminds them what happens to anyone who hits back.',
      },
      visual: { art: 'alpacaman', tint: 'ivory' },
    },
    {
      id: 'daifugo',
      kind: 'character',
      revealedAtEpisode: 929,
      revealedAtChapter: 935,
      name: { it: 'Daifugo', en: 'Daifugo' },
      summary: {
        it: 'Un vicedirettore del campo di lavoro di Udon con una coda di scorpione, che picchia un vecchio prigioniero perché mangia dango che non ha guadagnato con il proprio lavoro.',
        en: 'A vice warden of the Udon labour camp with a scorpion’s tail, who beats an old prisoner for eating dumplings he did not earn with his own work.',
      },
      visual: { art: 'daifugo', tint: 'orange' },
    },
    {
      id: 'babanuki',
      kind: 'character',
      revealedAtEpisode: 930,
      revealedAtChapter: 935,
      name: { it: 'Babanuki', en: 'Babanuki' },
      summary: {
        it: 'Il direttore del campo di lavoro di Udon, un omone con una testa d’elefante che gli spunta dal petto e uno starnuto che esplode come una cannonata.',
        en: 'The warden of the Udon labour camp, a huge man with an elephant’s head growing out of his chest and a sneeze that goes off like a cannon.',
      },
      visual: { art: 'babanuki', tint: 'sand' },
    },
    {
      id: 'solitaire',
      kind: 'character',
      revealedAtEpisode: 930,
      revealedAtChapter: 935,
      name: { it: 'Solitaire', en: 'Solitaire' },
      summary: {
        it: 'Una vicedirettrice del campo di lavoro di Udon con sei braccia e una coda di scimmia, che scopre che dalla sua torre sono sparite le chiavi delle manette dei prigionieri.',
        en: 'A vice warden of the Udon labour camp with six arms and a monkey’s tail, who learns that the keys to the prisoners’ cuffs have gone missing from her tower.',
      },
      visual: { art: 'solitaire', tint: 'magenta' },
    },
    {
      id: 'shimotsuki-ushimaru',
      kind: 'character',
      revealedAtEpisode: 954,
      revealedAtChapter: 962,
      name: { it: 'Shimotsuki Ushimaru', en: 'Shimotsuki Ushimaru' },
      summary: {
        it: 'Il defunto daimyo di Ringo, del clan Shimotsuki, che si vedeva sempre in compagnia di una volpe.',
        en: 'The late daimyo of Ringo, of the Shimotsuki Clan, always seen in the company of a fox.',
      },
      visual: { art: 'shimotsuki-ushimaru', tint: 'blue' },
    },
    {
      id: 'denjiro',
      kind: 'character',
      revealedAtEpisode: 960,
      revealedAtChapter: 960,
      name: { it: 'Denjiro', en: 'Denjiro' },
      summary: {
        it: 'Un orfano sveglio della Capitale dei Fiori, con gli occhiali scuri e il codino, che imbroglia un bottegaio su una pentola e avverte un amico di un cinghiale rubato.',
        en: 'A sharp orphan of the Flower Capital, in dark glasses and a ponytail, who cheats a shopkeeper over a pot and warns a friend about a stolen boar.',
      },
      visual: { art: 'denjiro', tint: 'cyan' },
    },
    // Met as himself before the reveal: the shogun of Oden's flashback at
    // 960. That he is Tenguyama Hitetsu is dated on both records at 1080.
    {
      id: 'kozuki-sukiyaki',
      kind: 'character',
      revealedAtEpisode: 960,
      revealedAtChapter: 960,
      name: { it: 'Kozuki Sukiyaki', en: 'Kozuki Sukiyaki' },
      summary: {
        it: 'Lo shogun del Paese di Wano ai tempi della giovinezza di Oden, un uomo severo che ascolta l’elenco delle malefatte del figlio e manda l’avviso che lo ripudia.',
        en: 'The shogun of Wano in Oden’s youth, a stern man who hears out the list of his son’s misdeeds and sends the notice that disowns him.',
      },
      visual: { art: 'kozuki-sukiyaki', tint: 'ivory' },
    },
    {
      id: 'hatcha',
      kind: 'character',
      revealedAtEpisode: 987,
      revealedAtChapter: 981,
      name: { it: 'Hatcha', en: 'Hatcha' },
      summary: {
        it: 'Un gigante dei Pirati delle Cento Bestie, molto più grande di un gigante qualsiasi, che si getta sugli intrusi di Onigashima roteando una mazza chiodata e travolge insieme a loro anche i suoi compagni.',
        en: 'A giant of the Beasts Pirates, far larger than any ordinary giant, who charges the intruders on Onigashima swinging a spiked club and bowls over his own crewmates along with them.',
      },
      visual: { art: 'hatcha', tint: 'yellow' },
    },
    {
      id: 'hotei',
      kind: 'character',
      revealedAtEpisode: 1023,
      revealedAtChapter: 1006,
      name: { it: 'Hotei', en: 'Hotei' },
      summary: {
        it: 'Il capitano con gli occhiali scuri della squadra di samurai dello shogun, due spade alla cintura, che alla caduta del suo signore ha messo i suoi uomini al servizio dell’Imperatore.',
        en: 'The captain in dark glasses of the shogun’s samurai squad, two swords at his waist, who put his men at the Emperor’s service the moment his master fell.',
      },
      visual: { art: 'hotei', tint: 'acid' },
    },
    {
      id: 'fuga',
      kind: 'character',
      revealedAtEpisode: 1055,
      revealedAtChapter: 1030,
      name: { it: 'Fuga', en: 'Fuga' },
      summary: {
        it: 'Uno dei tre giganti enormi che mangiano e bevono in una sala della fortezza di Kaido mentre fuori infuria la battaglia, e che Scratchmen Apoo mostra a X Drake come la forza che gli resta.',
        en: 'One of three enormous giants eating and drinking in a chamber of Kaido’s fortress while the battle rages outside, whom Scratchmen Apoo shows off to X Drake as the strength he still has.',
      },
      visual: { art: 'fuga', tint: 'orange' },
    },
    {
      id: 'kazenbo',
      kind: 'character',
      revealedAtEpisode: 1055,
      revealedAtChapter: 1030,
      name: { it: 'Kazenbo', en: 'Kazenbo' },
      summary: {
        it: 'Uno spettro gigantesco di fiamme disegnato da Kanjuro in punto di morte su richiesta di Orochi: il rancore ardente del clan Kurozumi, lasciato libero di attraversare i muri del castello.',
        en: 'A giant specter of flame drawn by the dying Kanjuro at Orochi’s request: the Kurozumi Clan’s burning grudge, set loose to walk through the castle walls.',
      },
      visual: { art: 'kazenbo', tint: 'vermilion' },
    },
    {
      id: 'shimotsuki-kozaburo',
      kind: 'character',
      revealedAtEpisode: 1060,
      revealedAtChapter: 1033,
      name: { it: 'Shimotsuki Kozaburo', en: 'Shimotsuki Kozaburo' },
      summary: {
        it: 'Il vecchio brontolone che passava le giornate in riva al mare nel villaggio natale di Zoro, e che si rivela il leggendario forgiatore di Wano, l’autore di Enma e della Wado Ichimonji.',
        en: 'The grumpy old man who spent his days by the sea in Zoro’s home village, and who turns out to be Wano’s legendary swordsmith, the maker of Enma and Wado Ichimonji.',
      },
      visual: { art: 'shimotsuki-kozaburo', tint: 'teal' },
    },
    {
      id: 'maha',
      kind: 'character',
      revealedAtEpisode: 1068,
      revealedAtChapter: 1041,
      name: { it: 'Maha', en: 'Maha' },
      summary: {
        it: 'Un agente mascherato del CP0, altissimo, con un cappello a cilindro e un lungo bastone stretto in entrambe le mani, che dà la caccia ai Cappello di Paglia nella fortezza di Kaido.',
        en: 'A very tall masked agent of CP0 in a high hat, a long stick held upright in both hands, who hunts the Straw Hats through Kaido’s fortress.',
      },
      visual: { art: 'maha', tint: 'ivory' },
    },
    {
      id: 'guernica',
      kind: 'character',
      revealedAtEpisode: 1080,
      revealedAtChapter: 1053,
      name: { it: 'Guernica', en: 'Guernica' },
      summary: {
        it: 'Un agente mascherato del CP0 con una bombetta bianca e una sciarpa a pois, che si infila nel duello tra Rufy e Kaido sul tetto della fortezza.',
        en: 'A masked CP0 agent in a white bowler hat and a dotted scarf, who breaks into the duel between Luffy and Kaido on the fortress roof.',
      },
      visual: { art: 'guernica', tint: 'wine' },
    },
    // Met as herself before the reveal: Kin'emon's flashback at 910 shows
    // her, a small child in silhouette, in the burning castle and names her
    // there ("Hiyori- sama !"); chapter 920 does the same. That she is the
    // oiran Komurasaki is dated on both records at 935.
  ],

  dossiers: {
    'tama': {
      role: {
        it: 'Bambina del villaggio di Amigasa',
        en: 'Child of Amigasa Village',
      },
      log: {
        it: 'Vive in un villaggio dove l’acqua del fiume è veleno e il cibo arriva una volta ogni tanto, e regala comunque a un affamato la sua unica scodella di riso. Ha un frutto del diavolo che le permette di staccarsi una guancia e farne uno gnocco di miglio, e l’animale che lo mangia le obbedisce come se fosse addomesticato.',
        en: 'She lives in a village where the river water is poison and food arrives once in a while, and still gives her only bowl of rice to a starving stranger. A devil fruit lets her pull a millet dumpling out of her own cheek, and any animal that eats one follows her as if tamed.',
      },
      affiliation: [
        {
          episode: 894,
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
      origin: [{ episode: 894, value: WANO }],
      devilFruit: [{ episode: 894, value: ['millet-millet-fruit'] }],
    },
    'tenguyama-hitetsu': {
      role: { it: 'Fabbro di spade', en: 'Swordsmith' },
      log: {
        it: 'Tama lo chiama maestro: intreccia cappelli per vivere e il giorno del suo compleanno compra il riso al mercato. Lui rientra, trova uno sconosciuto accanto alla scodella vuota, sguaina la spada e lo scaraventa fuori di casa, finché Tama non dice di avergli dato lei il riso. Racconta a Rufy che circa un anno fa X Drake ha distrutto Amigasa, e che quattro anni fa, durante una carestia, Ace è approdato lì ed è rimasto qualche settimana: da allora Tama lo aspetta. Quando Rufy dice che Ace è morto, lo rimprovera per averglielo detto così bruscamente.',
        en: 'Tama calls him her master: she weaves hats for a living, and on her birthday she buys rice at the market. He comes home to find a stranger beside the empty bowl, draws his sword and throws him out of the house, until Tama says she gave him the rice. He tells Luffy that X Drake destroyed Amigasa about a year ago, and that four years ago, in a famine, Ace washed ashore there and stayed a few weeks; Tama has been waiting for him ever since. When Luffy says that Ace is dead, he scolds him for telling her so bluntly.',
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
          episode: 1080,
          value: {
            it: 'Kozuki Sukiyaki, ex shogun del Paese di Wano',
            en: 'Kozuki Sukiyaki, former shogun of Wano',
          },
        },
      ],
      origin: [{ episode: 894, value: WANO }],
    },
    'kiku': {
      role: { it: 'Cameriera della casa da tè', en: 'Tea house waitress' },
      log: {
        it: 'Serve in una casa da tè di Okobore. Un famoso yokozuna della capitale entra e insiste perché diventi sua moglie, promettendole che non dovrà più lavorare. Lei risponde che le loro condizioni sociali sono troppo diverse e gli chiede di ordinare qualcosa o di andarsene.',
        en: 'She serves at a tea house in Okobore Town. A famous yokozuna from the capital comes in and presses her to become his wife, promising that she would never have to work again. She answers that their stations are too far apart, and asks him to order something or leave.',
      },
      affiliation: [
        {
          episode: 899,
          value: {
            it: 'Casa da tè di Okobore, cameriera',
            en: 'Tea house of Okobore Town, waitress',
          },
        },
        { episode: 936, value: RED_SCABBARDS },
      ],
      origin: [{ episode: 899, value: WANO }],
      epithet: [
        { episode: 936, value: { it: 'Kikunojo', en: 'Kikunojo' } },
        {
          episode: 948,
          value: {
            it: 'Kikunojo della Neve Persistente',
            en: 'Kikunojo of the Lingering Snow',
          },
        },
      ],
    },
    'ashura-doji': {
      role: {
        it: 'Capo dei furfanti di Kuri',
        en: 'Leader of the Kuri ruffians',
      },
      log: {
        it: 'Ai tempi in cui Kuri era una terra senza legge, dove criminali e ronin cacciati da casa si derubavano e si uccidevano a vicenda, era l’uomo più pericoloso della regione e ne guidava i furfanti. Poi il figlio dello shogun, bandito dalla Capitale dei Fiori per le sue risse, arrivò a Kuri, e i due si scontrarono quasi subito. Ebbe la peggio, e i furfanti che aveva guidato furono messi a lavorare per costruire la regione.',
        en: 'In the days when Kuri was a lawless land, where criminals and ronin driven from home robbed and killed one another, he was the most dangerous man in the region and led its ruffians. Then the shogun’s son, banished from the Flower Capital for his brawling, walked into Kuri, and the two clashed almost at once. He lost, and the ruffians he had led were put to work building the region instead.',
      },
      status: [
        { episode: 910, value: 'unknown' },
        { episode: 912, value: 'alive' },
        { episode: 1025, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 912,
          value: {
            it: 'Briganti del monte Atama, capo',
            en: 'Mt. Atama Thieves, boss',
          },
        },
        { episode: 936, value: RED_SCABBARDS },
      ],
      origin: [{ episode: 910, value: WANO }],
      epithet: [
        { episode: 912, value: { it: 'Shutenmaru', en: 'Shutenmaru' } },
      ],
    },
    'page-one': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'È uno dei Tobiroppo, i sei headliner più forti dei Pirati delle Cento Bestie, e viene mandato in missione insieme a X Drake, un altro dei sei. Quando Drake chiede perché per questo lavoro servano proprio loro due, Page One risponde che serve a dare una lezione esemplare: tutta Wano deve vedere che cosa succede a chi si mette contro la ciurma.',
        en: 'He is one of the Tobiroppo, the six strongest headliners of the Beasts Pirates, and he is sent out with X Drake, another of the six. When Drake asks why the job needs the two of them, Page One says it is to set an example: everyone in Wano should see what happens to anyone who crosses the crew.',
      },
      affiliation: [{ episode: 923, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 924,
          value: ['dragon-dragon-fruit-ancient-model-spinosaurus'],
        },
      ],
    },
    'kurozumi-orochi': {
      role: { it: 'Shogun del Paese di Wano', en: 'Shogun of Wano' },
      log: {
        it: 'Tiene il cibo pulito per la capitale mentre le campagne bevono da un fiume avvelenato, e i suoi funzionari danno la caccia a chiunque parli male di lui. Vent’anni fa si è alleato con l’Imperatore per abbattere la famiglia Kozuki, e ora che quei vent’anni sono passati teme che i loro samurai tornino a prenderlo. Nel suo castello aspetta l’oiran più famosa della capitale, e l’ombra dietro la porta scorrevole ha più di una testa.',
        en: 'He keeps the clean food for the capital while the countryside drinks from a poisoned river, and his officials hunt down anyone heard speaking ill of him. Twenty years ago he and the Emperor joined forces to bring down the Kozuki family, and now that the twenty years are up he fears that their samurai will come back for him. In his castle he waits for the capital’s most famous oiran, and the shadow behind the sliding door has more than one head.',
      },
      status: [
        { episode: 921, value: 'alive' },
        { episode: 994, chapter: 985, value: 'presumed-dead' },
        { episode: 1026, value: 'alive' },
        { episode: 1075, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 921,
          value: { it: 'Shogun del Paese di Wano', en: 'Shogun of Wano' },
        },
        { episode: 1085, value: { it: 'Deposto', en: 'Deposed' } },
      ],
      origin: [{ episode: 921, value: WANO }],
      devilFruit: [
        {
          episode: 927,
          chapter: 933,
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
        it: 'Kin’emon la chiama come guida mentre la ciurma si traveste per muoversi nel Paese di Wano, e lei si presenta come una vera kunoichi. Da giovane era per lui come una sorella minore. Si definisce una donna matura, e a un ragazzo che non ne capisce il fascino dice che un giorno lo capirà.',
        en: 'Kin’emon calls her in as a guide while the crew put on disguises to move about Wano, and she introduces herself as a real kunoichi. When she was young she was like a younger sister to him. She calls herself a mature woman, and tells a young man who does not see the charm of one that someday he will.',
      },
      affiliation: [
        {
          episode: 912,
          value: {
            it: 'Alleanza Kozuki, kunoichi',
            en: 'Kozuki alliance, kunoichi',
          },
        },
        {
          episode: 972,
          chapter: 970,
          value: {
            it: 'Alleanza Kozuki, kunoichi; un tempo dell’Oniwabanshu',
            en: 'Kozuki alliance, kunoichi; once of the Oniwabanshu',
          },
        },
      ],
      origin: [{ episode: 912, value: WANO }],
      devilFruit: [{ episode: 916, value: ['ripe-ripe-fruit'] }],
    },
    'hyogoro': {
      role: { it: 'Vecchio capo della yakuza', en: 'Old yakuza boss' },
      log: {
        it: 'Nel campo di lavoro di Udon è solo un vecchio fragile che a stento trascina le sue pietre, finché un nuovo arrivato comincia a regalargli i suoi buoni pasto e lui si fa picchiare piuttosto che dire chi è stato. Vent’anni fa era lo yakuza più potente del paese, seguito dai capi di ogni regione, e si rifiutò di servire lo shogun.',
        en: 'In the Udon labour camp he is only a frail old man who can barely haul his stones, until a newcomer starts giving him his meal tickets and he takes a beating rather than say who. Twenty years ago he was the most powerful yakuza in the country, followed by the bosses of every region, and he refused to serve the shogun.',
      },
      affiliation: [
        {
          episode: 931,
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
      origin: [{ episode: 931, value: WANO }],
      epithet: [
        {
          episode: 931,
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
        it: 'Governa il campo di Udon come uno spettacolo: arriva tra musica e guardie che lo acclamano, e si esibisce sul palco in un numero di canto e ballo. È uno dei tre All-Star dell’Imperatore, ha un braccio meccanico e porta una taglia che pochi al mondo raggiungono. Quando un prigioniero prova a scavalcare il muro, gli sguinzaglia dietro i suoi uomini.',
        en: 'He runs the Udon camp like a stage show: he arrives to music and cheering guards, and puts on a song-and-dance number on stage. He is one of the Emperor’s three All-Stars, with a mechanical arm and a bounty few men in the world reach. When a prisoner tries to climb the wall out, he sends his men after him.',
      },
      affiliation: [
        {
          episode: 930,
          value: {
            it: 'Pirati delle Cento Bestie, All-Star, padrone del campo di prigionia di Udon',
            en: 'Beasts Pirates, All-Star, master of the Udon prison camp',
          },
        },
      ],
      epithet: [
        {
          episode: 930,
          value: { it: 'Queen la Peste', en: 'Queen the Plague' },
        },
      ],
      devilFruit: [
        {
          episode: 944,
          value: ['dragon-dragon-fruit-ancient-model-brachiosaurus'],
        },
      ],
      bounty: [{ episode: 930, value: 1_320_000_000 }],
    },
    'king': {
      // The anime drops chapter 925's caption: the rank waits for 985 and the epithet for 1046.
      role: {
        it: 'Ufficiale dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates officer',
      },
      log: {
        it: 'Sta a Onigashima, il volto coperto da una maschera. Insieme a un altro dei grandi della ciurma rimprovera Jack, che lo chiama fratello maggiore, perché le offerte di Kuri sono troppo scarse. Poi i due si danno dell’idiota e del rifiuto a vicenda. Di lui si sanno il nome, la maschera e poco altro.',
        en: 'He keeps to Onigashima, his face hidden behind a mask. With another of the crew’s big men he scolds Jack, who calls him big brother, because the offerings from Kuri are too low. Then the two of them call each other an idiot and a piece of scum. His name, his mask and very little else are known.',
      },
      affiliation: [
        {
          episode: 923,
          value: { it: 'Pirati delle Cento Bestie', en: 'Beasts Pirates' },
        },
        {
          // He tells Who's-Who and Sasaki they want "our positions as the Lead Performers".
          episode: 985,
          chapter: 979,
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
          // Marco: "King the 'Wildfire,' huh?"
          episode: 1046,
          chapter: 1022,
          value: { it: 'King l’Incendio', en: 'King the Wildfire' },
        },
      ],
      devilFruit: [
        {
          episode: 924,
          value: ['dragon-dragon-fruit-ancient-model-pteranodon'],
        },
      ],
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
        it: 'Fa da kamuro a Komurasaki, la cortigiana più famosa della capitale. Arriva tardi al lavoro perché voleva assaggiare la soba del banco di Sanji, e quando dei teppisti le fanno cadere la scodella continua a sorridere; Sanji le dà la soba che gli è rimasta. Scherza sul fatto che con una “O” davanti il suo nome vuol dire “uomo”, anche se lei è una bambina, poi corre a raggiungere il corteo.',
        en: 'She serves as kamuro to Komurasaki, the most famous courtesan in the capital. She is late for work because she wanted to try the soba at Sanji’s stand, and when thugs knock her bowl to the ground she keeps smiling; Sanji gives her the soba he has left. She jokes that with an “O” in front her name means “man”, though she is a girl, then runs off to join the procession.',
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
          episode: 939,
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
          episode: 976,
          chapter: 973,
          value: {
            it: 'Nove Foderi Rossi, Denjiro',
            en: 'Nine Red Scabbards, Denjiro',
          },
        },
      ],
      origin: [{ episode: 921, value: WANO }],
      epithet: [
        { episode: 976, chapter: 973, value: { it: 'Denjiro', en: 'Denjiro' } },
      ],
    },
    'shimotsuki-yasuie': {
      role: { it: 'Ex daimyo di Hakumai', en: 'Former daimyo of Hakumai' },
      log: {
        it: 'Nel quartiere di Ebisu, la borgata povera alle porte della Capitale dei Fiori, tutti lo chiamano Tonoyasu. Per vivere fa il giullare, e il denaro che ha lo lascia ai malati e a chi ha fame, mentre lui mangia poco. Accompagna Zoro fino a Ebisu e più tardi lascia agli amici di Zoro una casa vuota del quartiere. Quando dichiara di essere un ladro ricercato, viene arrestato e legato a una croce per essere giustiziato nella capitale, e si scopre che Tonoyasu è un nome falso: è Shimotsuki Yasuie, un tempo daimyo di Hakumai.',
        en: 'In Ebisu Town, a poor neighbourhood just outside the Flower Capital, everyone calls him Tonoyasu. He makes his living as a male geisha, and the money he has he leaves to the sick and the hungry, though he eats little himself. He takes Zoro to Ebisu Town and later lets Zoro’s friends stay in an empty house there. When he claims to be a wanted thief, he is arrested and tied to a cross for execution in the capital, and it comes out that Tonoyasu is a false name: he is Shimotsuki Yasuie, once the daimyo of Hakumai.',
      },
      status: [
        { episode: 939, value: 'alive' },
        { episode: 940, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 939,
          value: {
            it: 'Ex daimyo di Hakumai; Tonoyasu del quartiere di Ebisu',
            en: 'Former daimyo of Hakumai; Tonoyasu of Ebisu Town',
          },
        },
      ],
      origin: [{ episode: 939, value: WANO }],
      epithet: [{ episode: 939, value: { it: 'Tonoyasu', en: 'Tonoyasu' } }],
    },
    // Onimaru gets no record of his own: he is named only at the reveal
    // (954), when the bridge monk turns back into Ushimaru's fox, so a
    // second record would announce the reveal by appearing. The name is a
    // dated epithet and affiliation here instead, like Denjiro's on kyoshiro.
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
        {
          episode: 954,
          value: {
            it: 'Famiglia Shimotsuki, Onimaru, la volpe di Shimotsuki Ushimaru a guardia delle tombe di Ringo',
            en: 'Shimotsuki family, Onimaru, Shimotsuki Ushimaru’s fox, guardian of the graves of Ringo',
          },
        },
      ],
      origin: [{ episode: 934, value: WANO }],
      epithet: [{ episode: 954, value: { it: 'Onimaru', en: 'Onimaru' } }],
    },
    'fukurokuju': {
      role: { it: 'Capo dell’Oniwabanshu', en: 'Leader of the Oniwabanshu' },
      log: {
        it: 'Guida l’Oniwabanshu, i ninja al servizio dello shogun Orochi, e lo serve da quando Orochi ha preso il potere. Shinobu era una dei suoi ninja e se n’è andata. Quando i suoi uomini sorprendono Robin a frugare in una stanza del castello durante un banchetto, le concede una sola possibilità di dire chi è e perché si trova lì, e le promette una morte rapida se dice la verità. Lei dà un nome falso, e quando i ninja la colpiscono la donna che hanno preso si sfalda: era una copia. I ninja si sparpagliano a cercare quella vera senza disturbare il banchetto.',
        en: 'He leads the Oniwabanshu, the ninja who serve the shogun Orochi, and has served him since Orochi took power. Shinobu was one of his ninja and left. When his men catch Robin searching a room of the castle during a banquet, he gives her one chance to say who she is and why she is there, and promises her a quick death if she tells the truth. She gives a false name, and when his ninja strike, the woman they have caught falls apart: she was a double. The ninja spread out to find the real one without disturbing the banquet.',
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
      status: [{ episode: 960, value: 'deceased' }],
      affiliation: [
        {
          episode: 960,
          value: {
            it: 'Kuri, daimyo; Pirati di Barbabianca, comandante della seconda divisione; Pirati di Roger',
            en: 'Kuri, daimyo; Whitebeard Pirates, second division commander; Roger Pirates',
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
        it: 'Porta il nome di una famiglia che a Wano tutti disprezzano, e sta accanto a Orochi quando Oden torna e pretende il trono. Con il frutto Clone Clone aveva preso l’aspetto di Sukiyaki, e i daimyo hanno creduto alle sue parole quando ha nominato Orochi reggente. Così nessuno può più sapere che cosa pensasse davvero il vecchio shogun.',
        en: 'She carries a family name that everyone in Wano despises, and stands at Orochi’s side when Oden comes home and demands the throne. With the Clone-Clone Fruit she had taken Sukiyaki’s shape, and the daimyo believed her when she named Orochi proxy. Now nobody can know what the real shogun was thinking.',
      },
      status: [
        { episode: 970, value: 'alive' },
        { episode: 974, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 970,
          value: {
            it: 'Famiglia Kurozumi, anziana',
            en: 'Kurozumi family, elder',
          },
        },
      ],
      origin: [{ episode: 970, value: WANO }],
      devilFruit: [{ episode: 970, value: ['clone-clone-fruit'] }],
    },
    'kurozumi-semimaru': {
      role: {
        it: 'Uomo della famiglia Kurozumi',
        en: 'Man of the Kurozumi family',
      },
      log: {
        it: 'Monaco suonatore di biwa, sta accanto a Orochi con il resto della famiglia Kurozumi. Quando Oden torna e si scaglia contro Orochi, la sua spada si ferma a mezz’aria contro una barriera invisibile. Semimaru dice a Orochi di non avere paura: in teoria le sue barriere non lasciano avvicinare nessuno.',
        en: 'A biwa-playing priest, he stands at Orochi’s side with the rest of the Kurozumi family. When Oden comes home and goes for Orochi, his sword stops in mid-air against an invisible barrier. Semimaru tells Orochi not to be afraid: in theory his barriers let nobody come closer.',
      },
      status: [{ episode: 970, value: 'alive' }],
      affiliation: [
        {
          episode: 970,
          value: { it: 'Famiglia Kurozumi', en: 'Kurozumi family' },
        },
      ],
      origin: [{ episode: 970, value: WANO }],
      devilFruit: [{ episode: 970, value: ['barrier-barrier-fruit'] }],
    },
    'izo': {
      role: {
        it: 'Pirata di Barbabianca nato a Wano',
        en: 'Whitebeard Pirate from Wano',
      },
      log: {
        it: 'Da bambino balla per strada per qualche moneta, finché Oden non gli dà da mangiare e lui si unisce agli uomini che lo seguono. Più tardi, quando Oden sgattaiola via di notte dietro alla nave di Barbabianca, Izo gli corre dietro per riportarlo a casa e finisce a bordo anche lui. Da allora naviga con la ciurma di Barbabianca, e quando nasce Momonosuke insiste perché Oden torni a casa per il bene della sua famiglia. Quando Oden parte con Roger, Izo resta sulla nave di Barbabianca, perché, dice Oden, ormai è affiatato con la ciurma.',
        en: 'As a child he dances in the streets for a few coins, until Oden feeds him and he joins the men who follow him. Later, when Oden slips out at night after Whitebeard’s ship, Izo goes after him to bring him back and ends up on board himself. From then on he sails with Whitebeard’s crew, and after Momonosuke is born he urges Oden to go home for his family’s sake. When Oden leaves with Roger, Izo stays on Whitebeard’s ship, because, Oden says, he has meshed with the crew.',
      },
      status: [
        { episode: 970, value: 'alive' },
        { episode: 1068, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 970,
          value: {
            it: 'Pirati di Barbabianca; un tempo seguace di Oden',
            en: 'Whitebeard Pirates; once a follower of Oden',
          },
        },
      ],
      origin: [{ episode: 970, value: WANO }],
    },
    'ulti': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'È una dei sei ufficiali di punta dell’Imperatore, e Page One, che la chiama sorella maggiore, è un altro. Mentre i sei aspettano di essere chiamati, litiga con il fratello e dice a Sasaki di smetterla di scherzare quando lui lo punzecchia. Quando chiede se Kaido sia stupido, gli altri la rimproverano.',
        en: 'She is one of the Emperor’s six leading officers, and Page One, who calls her his elder sister, is another. While the six wait to be called, she quarrels with her brother and tells Sasaki to stop messing around when he needles him. When she asks whether Kaido is stupid, the others turn on her.',
      },
      affiliation: [{ episode: 982, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 990,
          chapter: 983,
          value: ['dragon-dragon-fruit-ancient-model-pachycephalosaurus'],
        },
      ],
    },
    'whos-who': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'È uno dei sei ufficiali di punta dell’Imperatore. Porta una maschera rossa sulla metà superiore del viso, con due corna che coprono le sue, e tiene sempre una sigaretta in bocca. Mentre i sei aspettano di essere chiamati, dice a Ulti e a Page One di stare zitti.',
        en: 'He is one of the Emperor’s six leading officers. He wears a red mask over the top half of his face, with horns that fit over his own, and keeps a cigarette in his mouth. While the six wait to be called, he tells Ulti and Page One to be quiet.',
      },
      affiliation: [
        { episode: 982, value: TOBIROPPO },
        {
          episode: 1039,
          value: {
            it: 'Pirati delle Cento Bestie, Tobiroppo; un tempo Cipher Pol 9',
            en: 'Beasts Pirates, Tobiroppo; once Cipher Pol 9',
          },
        },
      ],
      devilFruit: [
        {
          episode: 1013,
          chapter: 998,
          value: ['cat-cat-fruit-ancient-model-sabre-tooth-tiger'],
        },
      ],
    },
    'black-maria': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'È una dei sei ufficiali di punta dell’Imperatore, in kimono nero con una fascia a fiori, le corna in testa e due spade tra i capelli. Mentre i sei aspettano di essere chiamati, dice che Ulti le piace perché non si tira mai indietro.',
        en: 'She is one of the Emperor’s six leading officers, in a black kimono with a flowered sash, horns on her head and swords pinned in her hair. While the six wait to be called, she says she likes Ulti because she never backs down.',
      },
      affiliation: [{ episode: 982, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 1013,
          chapter: 998,
          value: ['spider-spider-fruit-ancient-model-rosamygale-grauvogeli'],
        },
      ],
    },
    'sasaki': {
      role: TOBIROPPO_ROLE,
      log: {
        it: 'È uno dei sei ufficiali di punta dell’Imperatore, con un berretto militare con le corna, due lunghe zanne e un mantello sulle spalle. Mentre i sei aspettano di essere chiamati, punzecchia Page One, e Ulti gli dice di smetterla di scherzare.',
        en: 'He is one of the Emperor’s six leading officers, with a horned military cap, two long fangs and a cloak slung over his shoulders. While the six wait to be called, he needles Page One, and Ulti tells him to stop messing around.',
      },
      affiliation: [{ episode: 982, value: TOBIROPPO }],
      devilFruit: [
        {
          episode: 1013,
          chapter: 998,
          value: ['dragon-dragon-fruit-ancient-model-triceratops'],
        },
      ],
    },
    'yamato': {
      role: { it: 'Figlio di Kaido', en: 'Kaido’s child' },
      log: {
        it: 'Kaido racconta ai suoi ufficiali che quel giorno suo figlio è sparito, e li manda a riportarglielo. Lui compare mascherato nel mezzo dello scontro di Rufy con Ulti e Page One, mette fuori combattimento Ulti con la stessa mossa con cui Kaido aveva abbattuto Rufy e porta via Rufy ai Pirati delle Cento Bestie che lo inseguono. Gli dice che lo stava aspettando, e si presenta: si chiama Yamato ed è il figlio di Kaido.',
        en: 'Kaido tells his officers that his son disappeared that day, and sends them to bring him back. He turns up masked in the middle of Luffy’s fight with Ulti and Page One, knocks Ulti out with the same move Kaido once used to bring Luffy down, and carries Luffy away from the Beasts Pirates chasing them. He tells Luffy he has been waiting for him, and introduces himself: his name is Yamato, and he is Kaido’s son.',
      },
      affiliation: [
        {
          episode: 993,
          chapter: 985,
          value: {
            it: 'Nessuna: prigioniero di Kaido a Onigashima',
            en: 'None: Kaido’s prisoner on Onigashima',
          },
        },
        {
          episode: 995,
          chapter: 986,
          value: {
            it: 'Nessuna: ha rinnegato suo padre, Kaido',
            en: 'None: has disowned his father, Kaido',
          },
        },
        {
          episode: 1007,
          chapter: 994,
          value: { it: 'Alleanza Kozuki', en: 'Kozuki alliance' },
        },
      ],
      devilFruit: [
        {
          episode: 1042,
          chapter: 1020,
          value: ['dog-dog-fruit-model-okuchi-no-makami'],
        },
      ],
    },
    'bao-huang': {
      role: {
        it: 'Headliner dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates headliner',
      },
      log: {
        it: 'Ha mangiato uno SMILE dello scoiattolo volante, che le dà una coda da scoiattolo. Quando Kaido la chiama arriva subito e legge il programma della serata: un brindisi, i discorsi di Orochi e di Kaido, l’alleanza con la ciurma di Big Mom e, per ultimo, un annuncio importante che Kaido non vuole anticipare.',
        en: 'She ate a flying squirrel SMILE, which gives her a squirrel’s tail. When Kaido calls her she comes at once and reads out the night’s schedule: a toast, speeches by Orochi and Kaido, the alliance with Big Mom’s crew and, last, an important announcement that Kaido will not explain in advance.',
      },
      affiliation: [
        {
          episode: 985,
          chapter: 979,
          value: {
            it: 'Pirati delle Cento Bestie, headliner',
            en: 'Beasts Pirates, headliner',
          },
        },
      ],
    },
    'tsurujo': {
      chronicle: wanoChronicles.tsurujo,
      role: {
        it: 'Proprietaria della casa da tè di Okobore',
        en: 'Owner of the Okobore tea house',
      },
      log: {
        it: 'Tiene una casa da tè a Okobore e conosce l’erba che funziona contro il veleno del fiume di Kuri. Quando nella landa desolata dei banditi pretendono tutto quello che ha, uno spadaccino a cui interessa soltanto il suo sakè li abbatte, e lei si nasconde nella coda del grosso cane che lo porta via, per poterlo ringraziare. Conosce per nome la bambina di Amigasa e si offre di prendersene cura.',
        en: 'She keeps a tea house in Okobore Town and knows the herb that works against the poisoned river water of Kuri. When robbers in the wasteland demand everything she has, a swordsman who wants only her sake cuts them down, and she hides in the tail of the great dog that carries him off, so that she can thank him. She knows the girl from Amigasa by name and offers to look after her.',
      },
      status: [
        { episode: 899, value: 'alive' },
        { episode: 960, value: 'presumed-dead' },
        { episode: 1084, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 899,
          value: {
            it: 'Casa da tè di Okobore, proprietaria',
            en: 'Tea house of Okobore Town, owner',
          },
        },
        {
          episode: 913,
          value: {
            it: 'Casa da tè di Okobore, proprietaria; moglie di Kin’emon',
            en: 'Tea house of Okobore Town, owner; Kin’emon’s wife',
          },
        },
      ],
      origin: [{ episode: 899, value: WANO }],
    },
    'urashima': {
      chronicle: wanoChronicles.urashima,
      role: { it: 'Yokozuna della capitale', en: 'Yokozuna of the capital' },
      log: {
        it: 'Si presenta come un famoso yokozuna della capitale e il primo lottatore di sumo di Wano, e non tocca un dango fatto con gli avanzi di cui vive Okobore. Vuole in moglie la cameriera della casa da tè, le promette che non dovrà più lavorare né preoccuparsi della tassa sulla strada, e non prende sul serio nessuno dei suoi rifiuti. Quando uno spadaccino gli dice di togliersi di mezzo se ne va, non prima di averla invitata a vederlo combattere a Bakura.',
        en: 'He calls himself a famous yokozuna of the capital and the first sumo wrestler in Wano, and will not touch a dango made from the leftovers Okobore Town lives on. He wants the tea house waitress for his wife, promises her that she will never have to work or worry about the street tax again, and takes none of her refusals seriously. When a swordsman tells him to get out of the way he leaves, but not before inviting her to come and watch him fight in Bakura Town.',
      },
      status: [{ episode: 902, value: 'alive' }],
      affiliation: [
        {
          episode: 902,
          value: {
            it: 'Grande sumo del Paese di Wano, yokozuna della Capitale dei Fiori; classe dei samurai',
            en: 'Wano Country grand sumo, yokozuna of the Flower Capital; samurai class',
          },
        },
      ],
      origin: [{ episode: 902, value: WANO }],
    },
    // No `devilFruit` line: what he ate is a SMILE, an artificial fruit, and
    // the archive files no SMILE as a devil fruit. The lion is in the log.
    'holdem': {
      chronicle: wanoChronicles.holdem,
      role: {
        it: 'Headliner dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates headliner',
      },
      log: {
        it: 'È uno dei tre headliner dei Pirati delle Cento Bestie di Bakura, la città dei funzionari che vende i propri avanzi a Okobore. Una testa di leone gli sporge dalla pancia, e quando lui la prende a pugni perché lo fissa, il leone risponde con un colpo sotto la cintura che fa male a tutti e due. Quando un Gifter gli porta la bambina di Amigasa che ha addomesticato il babbuino feroce, è sicuro che si tratti del potere di un vero frutto del diavolo e intende costringerla a mostrarlo.',
        en: 'He is one of the three headliners of the Beasts Pirates in Bakura Town, the town of officials that sells its leftovers to Okobore. A lion’s head juts out of his belly, and when he punches it for staring at him it strikes back below the belt, which hurts them both. When a Gifter brings him the girl from Amigasa who tamed the savage baboon, he is sure it was a real devil fruit power and means to make her show it.',
      },
      status: [{ episode: 901, value: 'alive' }],
      affiliation: [
        {
          episode: 901,
          value: {
            it: 'Pirati delle Cento Bestie, headliner di Bakura',
            en: 'Beasts Pirates, headliner in Bakura Town',
          },
        },
      ],
    },
    // No `devilFruit` line: what she ate is a SMILE, an artificial fruit, and
    // the archive files no SMILE as a devil fruit. The horse is in the log.
    'speed': {
      chronicle: wanoChronicles.speed,
      role: {
        it: 'Headliner dei Pirati delle Cento Bestie',
        en: 'Beasts Pirates headliner',
      },
      log: {
        it: 'Sorveglia il cibo della fattoria in fondo a Bakura, dove il raccolto finisce ai Pirati delle Cento Bestie e un contadino viene pagato cinque monete d’argento che non bastano a sfamare la sua famiglia per una settimana. Dalla vita in giù è un cavallo, e i suoi occhi vedono quasi tutto intorno a lei, così il cibo alle sue spalle non le sfugge mai. Quando suona la campana dell’incendio fa spegnere il fuoco e trova in rovina la casa di Holdem, un altro headliner della città.',
        en: 'She keeps watch over the food of the Paradise Farm at the far end of Bakura Town, where the harvest goes to the Beasts Pirates and a farmer is paid five silver coins that will not feed his family for a week. From the waist down she is a horse, and her eyes see nearly all the way round her, so the food behind her is never out of sight. When the fire bell rings she has the fire put out and finds the house of Holdem, another of the town’s headliners, in ruins.',
      },
      status: [{ episode: 904, value: 'alive' }],
      affiliation: [
        {
          episode: 904,
          value: {
            it: 'Pirati delle Cento Bestie, headliner di Bakura',
            en: 'Beasts Pirates, headliner in Bakura Town',
          },
        },
        {
          episode: 906,
          value: {
            it: 'Al servizio di O-Tama, addomesticata da un suo dango',
            en: 'Tama’s servant, tamed by one of her dango',
          },
        },
        {
          episode: 1078,
          value: {
            it: 'Accanto a O-Tama, come una madre',
            en: 'At Tama’s side, like a mother to her',
          },
        },
      ],
    },
    // No `devilFruit` line: the hippo he sits in is a SMILE, and the archive
    // files no SMILE as a devil fruit; the log describes the hippo instead.
    'dobon': {
      chronicle: wanoChronicles.dobon,
      role: {
        it: 'Vicedirettore del campo di lavoro di Udon',
        en: 'Vice warden of the Udon labour camp',
      },
      log: {
        it: 'È uno dei vicedirettori del campo di lavoro di Udon, un gran mangione che considera suo il magazzino del cibo. Ha le gambe fuse con la mascella inferiore di un enorme ippopotamo che fa di testa sua e a volte chiude la bocca mentre lui sta ancora parlando. I prigionieri che lo sfidano vengono inghiottiti e puniti là dentro, in quella che le sue guardie chiamano la sua stanza del massacro.',
        en: 'He is one of the vice wardens of the Udon labour camp, a big eater who takes the camp’s food store for his own. His legs are fused into the lower jaw of a huge hippo that has a will of its own and sometimes shuts its mouth while he is still talking. Prisoners who cross him are swallowed and punished inside it, in what his guards call his slaughter room.',
      },
      status: [{ episode: 919, value: 'alive' }],
      affiliation: [
        {
          episode: 919,
          value: {
            it: 'Pirati delle Cento Bestie, Headliner, vicedirettore del campo di lavoro di Udon',
            en: 'Beasts Pirates, Headliner, vice warden of the Udon labour camp',
          },
        },
      ],
    },
    // No `devilFruit` line: his alpaca head and neck are a SMILE, and the
    // archive files no SMILE as a devil fruit; the log describes them instead.
    'alpacaman': {
      chronicle: wanoChronicles.alpacaman,
      role: {
        it: 'Guardia del campo di lavoro di Udon',
        en: 'Guard of the Udon labour camp',
      },
      log: {
        it: 'È un Gifter, una delle guardie del campo di lavoro di Udon, con il lungo collo e la testa di un alpaca al posto dei suoi. Interroga i prigionieri sputando loro addosso, e il suo sputo puzza. A chi gli risponde ricorda le regole del campo: alla prima offesa si perdono le braccia, alla seconda le gambe, alla terza la vita.',
        en: 'He is a Gifter, one of the guards of the Udon labour camp, with the long neck and head of an alpaca in place of his own. He questions prisoners by spitting on them, and his spit stinks. Anyone who talks back hears the camp’s rules from him: a first offence costs the arms, a second the legs, a third the prisoner’s life.',
      },
      status: [{ episode: 929, value: 'alive' }],
      affiliation: [
        {
          episode: 929,
          value: {
            it: 'Pirati delle Cento Bestie, Gifter, guardia del campo di lavoro di Udon',
            en: 'Beasts Pirates, Gifter, guard of the Udon labour camp',
          },
        },
      ],
    },
    // No `devilFruit` line: his scorpion's tail is a SMILE, and the archive
    // files no SMILE as a devil fruit; the log describes the tail instead.
    'daifugo': {
      chronicle: wanoChronicles.daifugo,
      role: {
        it: 'Vicedirettore del campo di lavoro di Udon',
        en: 'Vice warden of the Udon labour camp',
      },
      log: {
        it: 'È uno dei vicedirettori del campo di lavoro di Udon, con una coda di scorpione che gli si alza alle spalle, e tiene il conto di chi ha guadagnato che cosa. Lì i prigionieri mangiano soltanto quello che il loro lavoro gli frutta, e un vecchio che mangia con i buoni di un altro per lui è un imbroglione da picchiare davanti a tutti. Vuole sapere chi gli ha passato quei buoni.',
        en: 'He is one of the vice wardens of the Udon labour camp, a scorpion’s tail rising behind him, and he keeps count of who has earned what. Prisoners there eat only what their work earns them, and to him an old man eating on someone else’s tickets is a cheater to be beaten in front of everyone. He wants to know who handed those tickets over.',
      },
      status: [{ episode: 929, value: 'alive' }],
      affiliation: [
        {
          episode: 929,
          value: {
            it: 'Pirati delle Cento Bestie, Headliner, vicedirettore del campo di lavoro di Udon',
            en: 'Beasts Pirates, Headliner, vice warden of the Udon labour camp',
          },
        },
        {
          episode: 1019,
          chapter: 1004,
          value: {
            it: 'Pirati delle Cento Bestie, Headliner; addomesticato da O-Tama',
            en: 'Beasts Pirates, Headliner; tamed by Tama',
          },
        },
      ],
    },
    // No `devilFruit` line: the elephant on his chest is a SMILE, and the
    // archive files no SMILE as a devil fruit; the log describes it instead.
    'babanuki': {
      chronicle: wanoChronicles.babanuki,
      role: {
        it: 'Direttore del campo di lavoro di Udon',
        en: 'Warden of the Udon labour camp',
      },
      log: {
        it: 'Dirige il campo di lavoro di Udon per i Pirati delle Cento Bestie, e vicedirettori e guardie rispondono a lui. Dal petto gli spunta la testa di un elefante, e il suo starnuto esplode come una cannonata, abbastanza da scaraventare lontano un prigioniero con le manette di kairoseki. Non capisce perché un uomo senza futuro si ostini ad allenarsi, e quando arriva il suo superiore gli elenca i guai del campo tenendo il peggiore per ultimo.',
        en: 'He runs the Udon labour camp for the Beasts Pirates, and the vice wardens and guards answer to him. An elephant’s head grows out of his chest, and its sneeze goes off like a cannonball, enough to throw a prisoner in Seastone cuffs across the yard. He cannot see why a man with no future bothers to train, and when his superior arrives he lists the camp’s troubles, saving the worst for last.',
      },
      status: [{ episode: 930, value: 'alive' }],
      affiliation: [
        {
          episode: 930,
          value: {
            it: 'Pirati delle Cento Bestie, Headliner, direttore del campo di lavoro di Udon',
            en: 'Beasts Pirates, Headliner, warden of the Udon labour camp',
          },
        },
        {
          episode: 953,
          chapter: 952,
          value: {
            it: 'Pirati delle Cento Bestie, Headliner, direttore del campo di lavoro di Udon; addomesticato da O-Tama',
            en: 'Beasts Pirates, Headliner, warden of the Udon labour camp; tamed by Tama',
          },
        },
      ],
    },
    // No `devilFruit` line: her extra arms and her tail are a SMILE, and the
    // archive files no SMILE as a devil fruit; the log describes them instead.
    'solitaire': {
      chronicle: wanoChronicles.solitaire,
      role: {
        it: 'Vicedirettrice del campo di lavoro di Udon',
        en: 'Vice warden of the Udon labour camp',
      },
      log: {
        it: 'È una dei vicedirettori del campo di lavoro di Udon, con sei braccia, una coda di scimmia e un casco da aviatore calato sugli occhi. Risponde della torre di comando, dove in una cassaforte sono chiuse le chiavi delle manette di kairoseki dei prigionieri con un frutto del diavolo: se quei prigionieri si liberassero, le guardie ci rimetterebbero la testa. Non ha pazienza per le guardie che si fanno prendere in giro da un ladro.',
        en: 'She is one of the vice wardens of the Udon labour camp, with six arms, a monkey’s tail and a flier’s helmet pulled down over her eyes. She answers for the Executive Tower, where the keys to the Seastone cuffs of the prisoners with devil fruits are locked in a safe: if those prisoners ever freed themselves, the guards would pay with their heads. She has no patience for guards who let a thief make fools of them.',
      },
      status: [{ episode: 930, value: 'alive' }],
      affiliation: [
        {
          episode: 930,
          value: {
            it: 'Pirati delle Cento Bestie, Headliner, vicedirettrice del campo di lavoro di Udon',
            en: 'Beasts Pirates, Headliner, vice warden of the Udon labour camp',
          },
        },
      ],
    },
    'daikoku': {
      chronicle: wanoChronicles.daikoku,
      role: {
        it: 'Ninja dell’Oniwabanshu di Orochi',
        en: 'Orochi Oniwabanshu ninja',
      },
      log: {
        it: 'È uno dei ninja che sorvegliano il castello dello shogun, e quando la nuova geisha Orobi viene sorpresa dove non dovrebbe essere la cerca per tutto il banchetto. Mentre Orochi, diventato un serpente, stringe l’oiran tra le fauci, gli ospiti lo supplicano di fermare il suo padrone; lui risponde che lo shogun è libero di fare ciò che vuole e che conta di più l’intruso. Poi uno scheletro che attraversa i muri mette in fuga i suoi compagni, e una mano gigante fatta di braccia spazza via i ninja.',
        en: 'He is one of the ninja who guard the shogun’s castle, and once the new geisha Orobi is caught where she should not be he hunts her through the banquet. While Orochi, turned into a serpent, holds the oiran in his jaws, the guests beg him to stop his master; he answers that the shogun is free to do as he likes and that the invader matters more. Then a skeleton that floats through the walls sends his comrades running, and a giant hand made of arms sweeps the ninja aside.',
      },
      status: [{ episode: 928, value: 'alive' }],
      affiliation: [
        {
          episode: 928,
          value: {
            it: 'Oniwabanshu di Orochi, ninja',
            en: 'Orochi Oniwabanshu, ninja',
          },
        },
        {
          episode: 995,
          chapter: 986,
          value: {
            it: 'Pirati delle Cento Bestie; un tempo dell’Oniwabanshu di Orochi',
            en: 'Beasts Pirates; once of the Orochi Oniwabanshu',
          },
        },
      ],
      origin: [{ episode: 928, value: WANO }],
    },
    'raijin': {
      chronicle: wanoChronicles.raijin,
      role: {
        it: 'Ninja dell’Oniwabanshu di Orochi',
        en: 'Orochi Oniwabanshu ninja',
      },
      log: {
        it: 'È uno dei ninja che mettono alle strette la nuova geisha in una stanza del castello dello shogun, e uno di quelli che si sparpagliano per il banchetto a cercarla quando lei svanisce. Combatte con gli shuriken e si sposta in groppa a un pesce gatto gigante che cammina sulla terraferma. Quando uno scheletro fluttuante insegue lui e Fujin per i corridoi, scappa urlando che i gashadokuro esistono davvero.',
        en: 'He is one of the ninja who corner the new geisha in a back room of the shogun’s castle, and one of those who scatter through the banquet to find her when she vanishes. He fights with shuriken and gets about on a giant catfish that moves on land. When a floating skeleton comes after him and Fujin in the corridors, he runs, screaming that the gashadokuro are real.',
      },
      status: [{ episode: 928, value: 'alive' }],
      affiliation: [
        {
          episode: 928,
          value: {
            it: 'Oniwabanshu di Orochi, ninja',
            en: 'Orochi Oniwabanshu, ninja',
          },
        },
        {
          episode: 995,
          chapter: 986,
          value: {
            it: 'Pirati delle Cento Bestie; un tempo dell’Oniwabanshu di Orochi',
            en: 'Beasts Pirates; once of the Orochi Oniwabanshu',
          },
        },
      ],
      origin: [{ episode: 928, value: WANO }],
    },
    'fujin': {
      chronicle: wanoChronicles.fujin,
      role: {
        it: 'Ninja dell’Oniwabanshu di Orochi',
        en: 'Orochi Oniwabanshu ninja',
      },
      log: {
        it: 'È uno dei ninja che mettono alle strette la nuova geisha nel castello dello shogun e poi si sparpagliano per il banchetto a cercarla di nuovo. Lavora in coppia con Raijin e, come lui, va in groppa a un pesce gatto gigante che cammina sulla terraferma. Basta uno scheletro che fluttua nei corridoi perché i due tornino di corsa nella sala urlando che i gashadokuro esistono davvero.',
        en: 'He is one of the ninja who corner the new geisha in the shogun’s castle and then scatter through the banquet to find her again. He works in a pair with Raijin and, like him, rides a giant catfish that moves on land. A skeleton floating in the corridors is enough to send the two of them running back into the hall, shouting that the gashadokuro are real.',
      },
      status: [{ episode: 928, value: 'alive' }],
      affiliation: [
        {
          episode: 928,
          value: {
            it: 'Oniwabanshu di Orochi, ninja',
            en: 'Orochi Oniwabanshu, ninja',
          },
        },
        {
          episode: 995,
          chapter: 986,
          value: {
            it: 'Pirati delle Cento Bestie; un tempo dell’Oniwabanshu di Orochi',
            en: 'Beasts Pirates; once of the Orochi Oniwabanshu',
          },
        },
      ],
      origin: [{ episode: 928, value: WANO }],
    },
    'hotei': {
      chronicle: wanoChronicles.hotei,
      role: {
        it: 'Capitano del Mimawarigumi',
        en: 'Captain of the Mimawarigumi',
      },
      log: {
        it: 'Comandava il Mimawarigumi, la squadra di samurai che pattugliava la capitale per lo shogun, e quando Kaido ha decapitato Orochi ha offerto all’Imperatore l’intera forza dei samurai di Wano pur di non morire con il suo signore. A Onigashima lui e i suoi uomini combattono dalla parte dei Pirati delle Cento Bestie contro i samurai venuti all’assalto, mentre il virus Ice Oni contagia entrambi gli schieramenti. Quando Hyogoro torna a essere lo spadaccino di un tempo, il Mimawarigumi lo sfida, e un solo colpo lascia a terra anche il loro capitano.',
        en: 'He commanded the Mimawarigumi, the samurai squad that patrolled the capital for the shogun, and when Kaido beheaded Orochi he offered the Emperor the whole samurai force of Wano rather than die with his lord. On Onigashima he and his men fight on the Beasts Pirates’ side against the samurai of the raid, while the Ice Oni virus spreads through both sides. When Hyogoro becomes the swordsman he used to be, the Mimawarigumi challenge him, and a single stroke leaves their captain on the floor with the rest.',
      },
      status: [{ episode: 1023, value: 'alive' }],
      affiliation: [
        {
          episode: 1023,
          value: {
            it: 'Pirati delle Cento Bestie; un tempo capitano del Mimawarigumi di Orochi',
            en: 'Beasts Pirates; once captain of Orochi’s Mimawarigumi',
          },
        },
      ],
      origin: [{ episode: 1023, value: WANO }],
    },
    'maha': {
      chronicle: wanoChronicles.maha,
      role: { it: 'Agente del CP0', en: 'CP0 agent' },
      log: {
        it: 'È uno degli agenti mascherati del CP0 venuti a Wano a trattare con lo shogun, che poi hanno seguito l’assalto a Onigashima da una stanza per gli ospiti; secondo Robin, quelli con la maschera sono l’élite dei servizi segreti del Governo. Quando arriva l’ordine di portare via Nico Robin, la insegue per la fortezza insieme al suo compagno e abbatte chiunque si metta in mezzo. In un sotterraneo Izo, ferito, rifiuta di lasciarli passare, e Maha lo trafigge con uno Shigan nello stesso istante in cui il colpo di pistola di Izo lo manda a terra.',
        en: 'He is one of the masked CP0 agents who came to Wano to deal with the shogun and then watched the raid on Onigashima from a guest room; by Robin’s account, the masked ones are the elite of the Government’s intelligence. When the order comes to bring in Nico Robin, he chases her through the fortress beside his partner and cuts down anyone in the way. In a basement the wounded Izo refuses to let them pass, and Maha drives a Shigan into him in the same instant that Izo’s shot brings him down.',
      },
      status: [{ episode: 1068, value: 'unknown' }],
      affiliation: [
        { episode: 1068, value: { it: 'Cipher Pol 0', en: 'Cipher Pol 0' } },
      ],
    },
    'guernica': {
      chronicle: wanoChronicles.guernica,
      role: { it: 'Agente del CP0', en: 'CP0 agent' },
      log: {
        it: 'È uno dei due agenti mascherati del CP0 venuti a Wano a trattare con lo shogun, che poi hanno seguito l’assalto a Onigashima da una stanza per gli ospiti. Quando i Cinque Anziani ordinano di eliminare subito Cappello di Paglia, sale sul tetto della cupola del teschio e si infila nel duello tra Rufy e Kaido, che non gli perdona l’interruzione. Il suo nome arriva al mondo solo dopo, da una redazione che ristampa le sue fotografie di Wano, con la notizia che del Cipher Pol non si sa più niente.',
        en: 'He is one of the two masked CP0 agents who came to Wano to deal with the shogun and then watched the raid on Onigashima from a guest room. When the Five Elders order Straw Hat erased at once, he climbs to the roof of the Skull Dome and breaks into the duel between Luffy and Kaido, who does not forgive the interruption. His name reaches the world only afterwards, from a newsroom reprinting his photographs of Wano, with word that nothing has been heard from Cipher Pol since.',
      },
      status: [{ episode: 1080, value: 'deceased' }],
      affiliation: [
        { episode: 1080, value: { it: 'Cipher Pol 0', en: 'Cipher Pol 0' } },
      ],
    },
    'kozuki-hiyori': {
      chronicle: wanoChronicles['kozuki-hiyori'],
      role: {
        it: 'Sorella minore di Momonosuke',
        en: 'Momonosuke’s younger sister',
      },
      log: {
        it: 'Vent’anni fa, il giorno in cui il suo signore fu giustiziato nella capitale, rimase con la madre e il fratello nel castello che i pirati dell’Imperatore avevano dato alle fiamme. I samurai che si aprirono la strada fin dentro trovarono i tre intrappolati dal fuoco, e la madre mandò via soltanto il fratello, insieme a loro. Di che fine abbia fatto la bambina rimasta indietro, nessuno di loro sa niente.',
        en: 'Twenty years ago, on the day her father was executed in the capital, she was left with her mother and brother in the castle the Emperor’s men had set on fire. The samurai who cut their way inside found the three of them trapped by the flames, and her mother sent only her brother away with them. What became of the little girl left behind, none of them knows.',
      },
      status: [
        { episode: 910, value: 'unknown' },
        { episode: 935, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 910,
          value: {
            it: 'Famiglia Kozuki, sorella minore di Momonosuke',
            en: 'Kozuki family, Momonosuke’s younger sister',
          },
        },
        {
          episode: 935,
          value: {
            it: 'Famiglia Kozuki, sorella minore di Momonosuke; l’oiran Komurasaki della Capitale dei Fiori',
            en: 'Kozuki family, Momonosuke’s younger sister; Komurasaki, oiran of the Flower Capital',
          },
        },
      ],
      origin: [{ episode: 910, value: WANO }],
      epithet: [
        { episode: 935, value: { it: 'Komurasaki', en: 'Komurasaki' } },
      ],
    },
    'denjiro': {
      chronicle: wanoChronicles.denjiro,
      role: {
        it: 'Samurai al servizio di Oden',
        en: 'Samurai in Oden’s service',
      },
      log: {
        it: 'Cresce da solo per le strade della Capitale dei Fiori, strappando una moneta alla volta ai bottegai e tenendo d’occhio le famiglie della yakuza. È amico di Kin’emon, e lo avverte in tempo quando un cinghiale bianco rubato sta per tirarsi dietro sulla città il suo genitore gigante. È uno dei nove samurai che servirono Oden, e dalla morte del suo signore nessuno sa che fine abbia fatto.',
        en: 'He grows up alone on the streets of the Flower Capital, cheating shopkeepers out of a coin at a time and keeping an ear on the yakuza families. He is a friend of Kin’emon’s, and warns him in time when a stolen white boar is about to bring its giant parent down on the city. He is one of the nine samurai who served Oden, and since his lord’s death nobody knows what has become of him.',
      },
      status: [
        { episode: 960, value: 'unknown' },
        { episode: 976, chapter: 973, value: 'alive' },
      ],
      affiliation: [
        { episode: 960, value: RED_SCABBARDS },
        {
          episode: 976,
          chapter: 973,
          value: {
            it: 'Nove Foderi Rossi; Famiglia Kyoshiro, boss',
            en: 'Nine Red Scabbards; Kyoshiro Family, boss',
          },
        },
      ],
      origin: [{ episode: 960, value: WANO }],
      epithet: [
        {
          episode: 976,
          chapter: 973,
          value: {
            it: 'Kyoshiro; Ushimitsu Kozo',
            en: 'Kyoshiro; Ushimitsu Kozo',
          },
        },
      ],
    },
    'kozuki-sukiyaki': {
      chronicle: wanoChronicles['kozuki-sukiyaki'],
      role: { it: 'Ex shogun del Paese di Wano', en: 'Former shogun of Wano' },
      log: {
        it: 'Governa Wano dal castello della Capitale dei Fiori mentre il suo erede, Oden, disonora la famiglia a ogni occasione. Dopo aver ascoltato da uno scrivano l’elenco di tutto quello che Oden ha combinato fin da prima di compiere un anno, non vuole sentire altri commenti e manda al figlio un avviso di ripudio. È lui, più tardi, a dare a Oden il titolo di daimyo di Kuri, quando il figlio ha domato quella terra senza legge.',
        en: 'He rules Wano from the castle in the Flower Capital while his heir, Oden, shames the family at every turn. After hearing a scribe list everything Oden has done since before his first birthday, he wants no more commentary and sends his son a notice of disavowal. It is he who later gives Oden the title of daimyo of Kuri, once his son has tamed that lawless land.',
      },
      status: [
        { episode: 960, value: 'unknown' },
        { episode: 965, value: 'presumed-dead' },
        { episode: 1080, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 960,
          value: {
            it: 'Famiglia Kozuki, ex shogun del Paese di Wano',
            en: 'Kozuki family, former shogun of Wano',
          },
        },
        {
          episode: 1080,
          value: {
            it: 'Famiglia Kozuki, ex shogun; Tengu Yama Hitetsu, fabbro di Amigasa',
            en: 'Kozuki family, former shogun; Tenguyama Hitetsu, swordsmith of Amigasa',
          },
        },
      ],
      origin: [{ episode: 960, value: WANO }],
      epithet: [
        {
          episode: 1080,
          value: { it: 'Tengu Yama Hitetsu', en: 'Tenguyama Hitetsu' },
        },
      ],
    },
    'shimotsuki-ushimaru': {
      chronicle: wanoChronicles['shimotsuki-ushimaru'],
      role: { it: 'Defunto daimyo di Ringo', en: 'Late daimyo of Ringo' },
      log: {
        it: 'Ringo, nel nord di Wano, era governata dal clan Shimotsuki, famoso per la sua tempra, e il suo daimyo andava ovunque in compagnia di una volpe. Come le altre regioni, Ringo è stata distrutta da Kaido, e di lui ormai si parla soltanto come del defunto signore. Nella sua terra i morti vengono sepolti sotto la spada che hanno portato fin dalla nascita, e la sua volpe ha continuato a sorvegliarne le tombe anche dopo di lui.',
        en: 'Ringo, in the north of Wano, was governed by the Shimotsuki Clan, famous for their toughness, and its daimyo went everywhere in the company of a fox. Like the other regions, Ringo was destroyed by Kaido, and he is spoken of now only as the late lord. In his land the dead are buried under the swords they carried from birth, and his fox went on guarding their graves long after he was gone.',
      },
      status: [{ episode: 954, value: 'deceased' }],
      affiliation: [
        {
          episode: 954,
          value: {
            it: 'Ringo, daimyo; famiglia Shimotsuki',
            en: 'Ringo, daimyo; Shimotsuki family',
          },
        },
        {
          episode: 1046,
          value: {
            it: 'Ringo, daimyo; famiglia Shimotsuki, discendente di Ryuma',
            en: 'Ringo, daimyo; Shimotsuki family, descendant of Ryuma',
          },
        },
      ],
      origin: [{ episode: 954, value: WANO }],
    },
    'hatcha': {
      chronicle: wanoChronicles.hatcha,
      role: {
        it: 'Gigante dei Pirati delle Cento Bestie',
        en: 'Giant of the Beasts Pirates',
      },
      log: {
        it: 'Quando Queen dà ai suoi il permesso di uccidere i pirati evasi dentro la fortezza, si butta nella mischia roteando una mazza chiodata, e i Pirati delle Cento Bestie intorno a lui gli urlano di fermarsi prima di colpire anche loro. Nessuno sembra in grado di controllarlo. Gli intrusi lo prendono per un gigante, poi si accorgono che è molto più grande di un gigante, e scelgono di correre verso il castello invece di affrontarlo lì.',
        en: 'When Queen gives his men leave to kill the escaped pirates inside the fortress, he wades in swinging a spiked club, and the Beasts Pirates around him shout at him to stop before he hurts them too. Nobody seems able to control him. The intruders take him for a giant, then see that he is far bigger than one, and choose to run for the castle rather than fight him there.',
      },
      status: [{ episode: 987, value: 'alive' }],
      affiliation: [
        {
          episode: 987,
          value: { it: 'Pirati delle Cento Bestie', en: 'Beasts Pirates' },
        },
        {
          episode: 1002,
          value: {
            it: 'Pirati delle Cento Bestie, Numbers',
            en: 'Beasts Pirates, Numbers',
          },
        },
      ],
      origin: [
        { episode: 1002, value: { it: 'Punk Hazard', en: 'Punk Hazard' } },
      ],
    },
    // No `devilFruit` line: from 1058 the anime shows him with a horse's body,
    // but never says what gave it to him (a SMILE only in SBS 103), and the
    // archive files no SMILE as a fruit.
    'fuga': {
      chronicle: wanoChronicles.fuga,
      role: { it: 'Gigante di Onigashima', en: 'Giant of Onigashima' },
      log: {
        it: 'Siede a mangiare e bere con altri due giganti in una sala scavata nella roccia della fortezza, lontano dai combattimenti, mentre Scratchmen Apoo cerca di convincere X Drake a un’alleanza. Apoo li mostra tutti e tre come la prova che ha ancora della forza: giganti, dice, più potenti di quanto chiunque possa credere. Che cosa ne pensi Fuga, lui non lo dice.',
        en: 'He sits eating and drinking with two other giants in a cave chamber of the fortress, well away from the fighting, while Scratchmen Apoo tries to talk X Drake into an alliance. Apoo shows the three of them off as proof that he still has power: giants, he says, stronger than anyone would believe. What Fuga himself thinks of it, he does not say.',
      },
      status: [{ episode: 1055, value: 'alive' }],
      affiliation: [
        {
          episode: 1055,
          value: {
            it: 'Onigashima, gigante della sala nella roccia',
            en: 'Onigashima, giant of the Cave Chamber',
          },
        },
        {
          episode: 1057,
          value: {
            it: 'Pirati delle Cento Bestie, Numbers',
            en: 'Beasts Pirates, Numbers',
          },
        },
        {
          episode: 1063,
          value: {
            it: 'Pirati delle Cento Bestie, Numbers; al fianco di Yamato',
            en: 'Beasts Pirates, Numbers; at Yamato’s side',
          },
        },
      ],
      origin: [
        { episode: 1057, value: { it: 'Punk Hazard', en: 'Punk Hazard' } },
      ],
    },
    'kazenbo': {
      chronicle: wanoChronicles.kazenbo,
      role: {
        it: 'Spettro di fiamme disegnato da Kanjuro',
        en: 'Flame specter drawn by Kanjuro',
      },
      log: {
        it: 'In punto di morte, Kanjuro risponde un’ultima volta a Orochi, che gli chiede un bis: il rancore ardente del clan Kurozumi, disegnato e lasciato libero. Lo spettro sfila per il castello attraversando i muri e dando fuoco a tutto, e gli uomini della fortezza gli scappano davanti come davanti a un fantasma. Orochi vuole che scenda fino nell’abisso, e che il fondo dove finisce la sua corsa diventi la loro tomba.',
        en: 'Dying, Kanjuro answers Orochi one last time, and Orochi asks him for an encore: the burning grudge of the Kurozumi Clan, drawn and set loose. The specter parades through the castle, passing through walls and setting everything alight, and the men of the fortress run from it as from a ghost. Orochi means it to walk down into the abyss, and the bottom where it ends to become their graveyard.',
      },
      status: [{ episode: 1055, value: 'unknown' }],
      affiliation: [
        {
          episode: 1055,
          value: {
            it: 'Famiglia Kurozumi, creatura di Kanjuro',
            en: 'Kurozumi family, Kanjuro’s creation',
          },
        },
      ],
    },
    'shimotsuki-kozaburo': {
      chronicle: wanoChronicles['shimotsuki-kozaburo'],
      role: { it: 'Forgiatore leggendario', en: 'Legendary swordsmith' },
      log: {
        it: 'Nel villaggio natale di Zoro era il vecchio seduto in riva al mare, un samurai secondo le chiacchiere del dojo, che al ragazzo diceva di tacere perché altrimenti sarebbe arrivata la Marina. Al piccolo Zoro regalò due spade da allenamento senza filo, le sole che ormai sapesse forgiare, e gli spiegò che una spada maledetta è soltanto una spada che i deboli temono. Quando morì Zoro seppe soltanto che era il nonno di Kuina; il suo nome, Shimotsuki Kozaburo, lo ricostruisce anni dopo a Onigashima.',
        en: 'In Zoro’s home village he was the old man who sat by the sea, a samurai according to the dojo gossip, who told the boy to keep quiet or the Marines would come. He gave young Zoro two blunt practice swords, the only kind he could still forge, and told him that a cursed sword is only what the weak call a sword they fear. When he died, Zoro learned only that he was Kuina’s grandfather; his name, Shimotsuki Kozaburo, Zoro pieces together years later on Onigashima.',
      },
      status: [{ episode: 1060, value: 'deceased' }],
      affiliation: [
        {
          episode: 1060,
          value: {
            it: 'Villaggio di Shimotsuki, nonno di Kuina',
            en: 'Shimotsuki Village, Kuina’s grandfather',
          },
        },
      ],
      origin: [{ episode: 1060, value: WANO }],
    },
  },
}
