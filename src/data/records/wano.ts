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
      revealedAtEpisode: 901,
      revealedAtChapter: 917,
      name: { it: 'Kikunojo', en: 'Kikunojo' },
      summary: {
        it: 'La cameriera alta e gentile della casa da tè di Okobore, che serve con un inchino e, quando serve, impugna una katana.',
        en: 'The tall, gentle waitress of the Okobore tea house, who pours with a bow and, when it counts, takes up a katana.',
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
    {
      id: 'tsurujo',
      kind: 'character',
      revealedAtEpisode: 899,
      revealedAtChapter: 914,
      name: { it: 'O-Tsuru', en: 'Tsuru' },
      summary: {
        it: 'La proprietaria di una casa da tè di Okobore, con una gru d’oro appuntata tra i capelli, che ripaga lo spadaccino che l’ha salvata curando una bambina avvelenata.',
        en: 'The owner of a tea house in Okobore Town, a golden crane pinned in her hair, who repays the swordsman who saved her by curing a poisoned child.',
      },
      visual: { art: 'tsurujo', tint: 'azure' },
    },
    {
      id: 'urashima',
      kind: 'character',
      revealedAtEpisode: 899,
      revealedAtChapter: 915,
      name: { it: 'Urashima', en: 'Urashima' },
      summary: {
        it: 'Un lottatore di sumo enorme, a sentir lui lo yokozuna più famoso della capitale, che corteggia la cameriera di una casa da tè vantando il proprio rango.',
        en: 'An enormous sumo wrestler, by his own account the most famous yokozuna of the capital, who courts a tea house waitress by boasting of his rank.',
      },
      visual: { art: 'urashima', tint: 'flamingo' },
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
        it: 'Il defunto daimyo di Ringo, un maestro di spada del clan Shimotsuki che si vedeva sempre in compagnia di una volpe.',
        en: 'The late daimyo of Ringo, a master swordsman of the Shimotsuki Clan who was always seen in the company of a fox.',
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
          episode: 1080,
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
        it: 'Serve il tè nella locanda di Okobore, dove i contadini mangiano gli avanzi della capitale, e tratta i clienti con una gentilezza che in quel paese non si vede spesso. Quando gli uomini dell’Imperatore rapiscono la bambina che stava curando, afferra una katana, si lega i capelli e dichiara di essere un samurai. Si presenta con il nome di O-Kiku.',
        en: 'She serves tea at the Okobore house, where farmers eat the capital’s leftovers, and treats her customers with a kindness this country rarely sees. When the Emperor’s men kidnap the girl she has been nursing, she snatches up a katana, ties back her hair and declares that she is a samurai. She gives her name as O-Kiku.',
      },
      affiliation: [
        {
          episode: 901,
          value: {
            it: 'Casa da tè di Okobore, cameriera',
            en: 'Tea house of Okobore Town, waitress',
          },
        },
        { episode: 910, value: RED_SCABBARDS },
      ],
      origin: [{ episode: 901, value: WANO }],
      epithet: [
        {
          episode: 948,
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
        { episode: 1025, value: 'deceased' },
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
        { episode: 994, value: 'presumed-dead' },
        { episode: 1026, value: 'alive' },
        { episode: 1075, value: 'deceased' },
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
          episode: 976,
          value: {
            it: 'Nove Foderi Rossi, Denjiro',
            en: 'Nine Red Scabbards, Denjiro',
          },
        },
      ],
      origin: [{ episode: 921, value: WANO }],
      epithet: [{ episode: 976, value: { it: 'Denjiro', en: 'Denjiro' } }],
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
      ],
      origin: [{ episode: 938, value: WANO }],
      epithet: [{ episode: 938, value: { it: 'Tonoyasu', en: 'Tonoyasu' } }],
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
        it: 'Porta il nome di una famiglia che a Wano nessuno pronuncia volentieri, e cammina appoggiata a un bastone con una maschera da volpe sul viso. Il suo frutto le permette di assumere l’aspetto di chiunque abbia visto, e se ne serve per mettere gli uomini gli uni contro gli altri. È lei a spingere verso il potere un giovane Kurozumi.',
        en: 'She carries a family name that nobody in Wano says gladly, and walks leaning on a stick with a fox mask over her face. Her fruit lets her take the shape of anyone she has laid eyes on, and she uses it to set men against each other. It is she who pushes a young Kurozumi towards power.',
      },
      status: [
        { episode: 963, value: 'alive' },
        { episode: 974, value: 'deceased' },
      ],
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
        { episode: 1068, value: 'deceased' },
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
        it: 'È uno dei sei ufficiali di punta dell’Imperatore e si muove con la calma di chi il mondo lo ha già visto dall’altra parte. Si trasforma in una tigre dai denti a sciabola, combatte con la spada e con le gambe e tiene il volto coperto. Chi gli sta intorno lo ascolta senza interromperlo.',
        en: 'He is one of the Emperor’s six leading officers and carries himself like a man who has seen the world from the other side. He turns into a sabre-toothed tiger, fights with sword and legs both, and keeps his face covered. The men around him listen without interrupting.',
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
    'tsurujo': {
      chronicle: wanoChronicles.tsurujo,
      role: {
        it: 'Proprietaria della casa da tè di Okobore',
        en: 'Owner of the Okobore tea house',
      },
      log: {
        it: 'Tiene una casa da tè a Okobore e conosce l’erba che funziona contro il veleno del fiume di Kuri. Quando nella landa desolata dei banditi pretendono tutto quello che ha, uno spadaccino a cui interessa soltanto il suo sakè li abbatte, e lei si nasconde nella coda del grosso cane che lo porta via, per poterlo ringraziare. Conosce per nome la bambina di Amigasa e la accoglie senza chiedere niente in cambio.',
        en: 'She keeps a tea house in Okobore Town and knows the herb that works against the poisoned river water of Kuri. When robbers in the wasteland demand everything she has, a swordsman who wants only her sake cuts them down, and she hides in the tail of the great dog that carries him off, so that she can thank him. She knows the girl from Amigasa by name and takes her in without asking for anything.',
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
            it: 'Casa da tè di Okobore, proprietaria; moglie di Kinemon',
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
      status: [{ episode: 899, value: 'alive' }],
      affiliation: [
        {
          episode: 899,
          value: {
            it: 'Sumo di Wano, yokozuna della capitale',
            en: 'Wano sumo, yokozuna of the capital',
          },
        },
        {
          episode: 902,
          value: {
            it: 'Grande sumo del Paese di Wano, yokozuna della Capitale dei Fiori; classe dei samurai',
            en: 'Wano Country grand sumo, yokozuna of the Flower Capital; samurai class',
          },
        },
      ],
      origin: [{ episode: 899, value: WANO }],
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
        it: 'Cresce da solo per le strade della Capitale dei Fiori, strappando una moneta alla volta ai bottegai e tenendo d’occhio le famiglie della yakuza. È amico di Kinemon, e lo avverte in tempo quando un cinghiale bianco rubato sta per tirarsi dietro sulla città il suo genitore gigante. È uno dei nove samurai che servirono Oden, e dalla morte del suo signore nessuno sa che fine abbia fatto.',
        en: 'He grows up alone on the streets of the Flower Capital, cheating shopkeepers out of a coin at a time and keeping an ear on the yakuza families. He is a friend of Kin’emon’s, and warns him in time when a stolen white boar is about to bring its giant parent down on the city. He is one of the nine samurai who served Oden, and since his lord’s death nobody knows what has become of him.',
      },
      status: [
        { episode: 960, value: 'unknown' },
        { episode: 976, value: 'alive' },
      ],
      affiliation: [
        { episode: 960, value: RED_SCABBARDS },
        {
          episode: 976,
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
            it: 'Famiglia Kozuki, ex shogun; Tenguyama Hitetsu, fabbro di Amigasa',
            en: 'Kozuki family, former shogun; Tenguyama Hitetsu, swordsmith of Amigasa',
          },
        },
      ],
      origin: [{ episode: 960, value: WANO }],
      epithet: [
        {
          episode: 1080,
          value: { it: 'Tenguyama Hitetsu', en: 'Tenguyama Hitetsu' },
        },
      ],
    },
    'shimotsuki-ushimaru': {
      chronicle: wanoChronicles['shimotsuki-ushimaru'],
      role: { it: 'Defunto daimyo di Ringo', en: 'Late daimyo of Ringo' },
      log: {
        it: 'Ringo, nel nord di Wano, era governata dal clan Shimotsuki, famoso per la sua tempra, e il suo daimyo era un maestro di spada che andava ovunque in compagnia di una volpe. Come le altre regioni, Ringo è stata distrutta da Kaido, e di lui ormai si parla soltanto come del defunto signore. Nella sua terra i morti vengono sepolti sotto la spada che hanno portato fin dalla nascita, e la sua volpe ha continuato a sorvegliarne le tombe anche dopo di lui.',
        en: 'Ringo, in the north of Wano, was governed by the Shimotsuki Clan, famous for their toughness, and its daimyo was a master swordsman who went everywhere in the company of a fox. Like the other regions, Ringo was destroyed by Kaido, and he is spoken of now only as the late lord. In his land the dead are buried under the swords they carried from birth, and his fox went on guarding their graves long after he was gone.',
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
