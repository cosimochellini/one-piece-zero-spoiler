// The name tables `./verify-names.mjs` reads: the Italian page of a record
// whose English page does not link it, and the names kept after a hand
// check found no Italian page. Kept apart so the script stays readable as
// each arc adds its records here.

/**
 * Records whose Italian page the English page does not link, or links
 * wrongly. A list names the pages of a paired record.
 * @type {Record<string, string | string[]>}
 */
export const ITALIAN_TITLES = {
  'gittarackur': 'Personaggi di Hunter × Hunter#Ghitarakur',
  'ponzu': 'Personaggi di Hunter × Hunter#Ponzu',
  'bourbon': 'Personaggi di Hunter × Hunter#Burbon',
  'bodoro': 'Personaggi di Hunter × Hunter#Bodoro',
  'pokkle': 'Associazione Hunter#Pockul',
  'todo': 'Personaggi di Hunter × Hunter#Todo',
  'geretta': 'Personaggi di Hunter × Hunter#Ghereta',
  'cherry': 'Personaggi di Hunter × Hunter#Cherry',
  'goz': 'Personaggi di Hunter × Hunter#Gozu',
  'siper': 'Personaggi di Hunter × Hunter#Super',
  'kyu': 'Personaggi di Hunter × Hunter#Kyu',
  'kenmi': 'Personaggi di Hunter × Hunter#Kenmi',
  'sommy': 'Personaggi di Hunter × Hunter#Somy',
  'buhichuck': 'Grunfchuck',
  'carne': 'Carne',
  'cerberus': 'Cerbero (spada)',
  'chimney': 'Chimney',
  'coribou': 'Coribou',
  'dosun': 'Sbam',
  'gerd': 'Gerd',
  'gyoro-nin-and-bao': ['Gyoro', 'Nin', 'Bao'],
  'hammond': 'Hammond',
  'hasami': 'Chelotto',
  'heracles': 'Hercules',
  'inuarashi': 'Cane-tempesta',
  'jorul': 'Jorl',
  'kikyo': 'Kikyo',
  'kiwi-and-mozu': ['Kiwi', 'Mozu'],
  'kozuki-sukiyaki': 'Kozuki Sukiyaki',
  'kurozumi-higurashi': 'Kurozumi Higurashi',
  'kurozumi-semimaru': 'Kurozumi Semimaru',
  'minotaurus': 'Minotauros',
  'mocha': 'Mocia',
  'mr-13': 'Mr. Thirteen',
  'rimoshifu-killingham': 'Rimoshifu Killingham',
  'risky-brothers': 'Risky',
  'rock-and-scotch': ['Rock', 'Scotch (cyborg)'],
  'ryuma': 'Shimotsuki Ryuma',
  // The disguise and the man are two records and one page.
  'tenguyama-hitetsu': 'Kozuki Sukiyaki',
  'terracotta': 'Terracotta',
  // Hunter x Hunter, on Italian Wikipedia.
  'illumi': 'Famiglia Zoldick#Illumi',
  'killua': 'Killua Zoldick',
  'zebro': 'Famiglia Zoldick#Zebro',
  'mike': 'Famiglia Zoldick#Cane da guardia: Miche',
  'seaquant': 'Famiglia Zoldick#Shikant',
  'canary': 'Famiglia Zoldick#Canaria',
  'gotoh': 'Famiglia Zoldick#Goto',
  'milluki': 'Famiglia Zoldick#Milki',
  'zeno': 'Famiglia Zoldick#Zeno',
  'silva': 'Famiglia Zoldick#Silva',
  'kalluto': 'Famiglia Zoldick#Carte',
  'kite': 'Associazione Hunter#Kaito',
  'hisoka': 'Hisoka Morou',
  'tonpa': 'Personaggi di Hunter × Hunter#Tonpa',
  'nicholas': 'Personaggi di Hunter × Hunter#Nicole',
  'satotz': 'Associazione Hunter#Satoshi',
  'hanzo': 'Associazione Hunter#Hanzo',
  'menchi': 'Associazione Hunter#Menci',
  'buhara': 'Associazione Hunter#Buhara',
  'netero': 'Associazione Hunter#Isaac Netero',
  'lippo': 'Associazione Hunter#Rippo',
  'gon-freecss': 'Gon Freecss',
  'kurapika': 'Kurapika Kurata',
  'mito-freecss': 'Personaggi di Hunter × Hunter#Myto Freecss',
  'zushi': 'Personaggi di Hunter × Hunter#Zooci',
  'wing': 'Associazione Hunter#Wing',
  'gido': 'Personaggi di Hunter × Hunter#Ghido',
  'sadaso': 'Personaggi di Hunter × Hunter#Sadaso',
  'riehlvelt': 'Personaggi di Hunter × Hunter#Liroubert',
  'kastro': 'Personaggi di Hunter × Hunter#Kastro',
  'melody': 'Associazione Hunter#Melody',
  'basho': 'Associazione Hunter#Basho',
  'baise': 'Associazione Hunter#Versé',
  'dalzollene': 'Personaggi di Hunter × Hunter#Dalzorne',
  'neon-nostrade': 'Personaggi di Hunter × Hunter#Neon Nostrad',
  'machi': 'Brigata Fantasma#Machi Komachine',
  'shizuku': 'Brigata Fantasma#Shizuku Murasaki',
}

/**
 * Names kept after a hand check found no Italian page to read them from. The
 * value is the name checked, so a record renamed since falls back to the rule.
 * @type {Record<string, string>}
 */
export const NAMES_KEPT = {
  // The page of the people they lead or belong to writes them so: Shandia,
  // Vegapunk (Satelliti), Serafini, Kurozumi Kanjuro.
  'atlas': 'Atlas',
  'edison': 'Edison',
  'kazenbo': 'Kazenbo',
  'lilith': 'Lilith',
  'pythagoras': 'Pythagoras',
  's-bear': 'S-Bear',
  's-hawk': 'S-Hawk',
  's-shark': 'S-Shark',
  's-snake': 'S-Snake',
  'shaka': 'Shaka',
  'shandia-chief': 'Capo degli Shandia',
  'york': 'York',
  // Hunter x Hunter. Italian Wikipedia's character pages write him "Jin",
  // the manga's name; the 2011 dub's is "Ging", in the Italian title of its
  // episode 37, "Ging e Gon" (`Episodi di Hunter × Hunter (serie animata
  // 2011)`).
  'ging-freecss': 'Ging Freecss',
  // Italian Wikipedia has no entry for these Nostrade bodyguards (#900);
  // keep the English forms pending a 2011 dub check.
  'squala': 'Squala',
  'shachmono-tocino': 'Shachmono Tocino',
  'ivlenkov': 'Ivlenkov',
  'linssen': 'Linssen',
  // Italian Wikipedia's entry is the manga's "Leolio Paladiknight", with a
  // note that the Italian anime says "Leorio" (`Personaggi di Hunter ×
  // Hunter`, section `Leolio Paladiknight`).
  'leorio-paradinight': 'Leorio',
  // Associazione Hunter#Rippo calls him Johnes lo Smembratore.
  'johness': 'Johnes',
  // Italian Wikipedia has no entry for these Trick Tower prisoners or
  // Togari; keep the English forms pending a 2011 dub check (#760).
  'bendot': 'Bendot',
  'sedokan': 'Sedokan',
  'majtani': 'Majtani',
  'leroute': 'Leroute',
  'togari': 'Togari',
  // No Italian page names them: the English name stands.
  'masta': 'Masta',
  'katzo': 'Katzo',
  'khara': 'Khara',
  // Italian Wikipedia lists the other Zevil applicants but not these (#833).
  'agon': 'Agon',
  'ryu': 'Ryu',
  'shishito': 'Shishito',
  // Italian Wikipedia's Fratelli Amori entry names all three in its body.
  'amori': 'Amori',
  'umori': 'Umori',
  'imori': 'Imori',
  'kiriko': 'Kiriko',
  // No Italian Wikipedia page names the tour guide.
  'coco-loo': 'Coco Loo',
  // No Italian Wikipedia entry names the foxbear; retain the English name.
  'kon': 'Kon',
}
