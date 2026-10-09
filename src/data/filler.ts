import type { LocalizedText } from '~/data/types'
import type { FillerKind } from '~/lib/view/filler'

/**
 * Every filler, mixed and recap episode of the anime, and the films and TV
 * specials, in the order a viewer reaches them (issue #495).
 *
 * The kinds follow AnimeFillerList, the one source with a mixed class; its
 * "anime canon" episodes are settled by the Italian One Piece Wiki's `tipo`.
 * A film or special is watched after the episode the One Piece Wiki's
 * Episode Guide airs it after. `chapter` is the last manga chapter the anime
 * had adapted by then, per the Italian wiki's `capitoli`: a chapter reader
 * meets the entry there, or at its canon arc, whichever is later.
 * `npm run verify:filler` holds all of it against the sources.
 *
 * Generated once from the wikis, then edited by hand. The titles are the
 * Italian dub's (the translation where the episode was never dubbed) and the
 * English release's.
 */

/**
 * One entry of the guide: a numbered episode, or a film or special with the
 * episode it is watched after and its Japanese release or air date. `chapter`
 * is the last chapter the anime had adapted when it aired.
 */
export type FillerEntry = (
  { after: number; released: string } | { episode: number }
) & {
  chapter: number
  kind: FillerKind
  summary: LocalizedText
  title: LocalizedText
}

/** A filler arc: a run of episodes the wikis name as one story. */
export interface FillerArc {
  first: number
  last: number
  name: LocalizedText
}

/** The last episode aired when the list was checked. */
export const LAST_AIRED = 1168

export const FILLER_ARCS: FillerArc[] = [
  { first: 54, last: 61, name: { en: 'Warship Island', it: 'Warship Island' } },
  { first: 131, last: 135, name: { en: 'Post-Alabasta', it: 'Dopo Alabasta' } },
  {
    first: 136,
    last: 138,
    name: { en: 'Goat Island', it: 'Isola delle capre' },
  },
  {
    first: 139,
    last: 143,
    name: { en: 'Ruluka Island', it: 'Nebbia color arcobaleno' },
  },
  { first: 196, last: 206, name: { en: 'G-8', it: 'Navarone' } },
  {
    first: 220,
    last: 224,
    name: { en: 'Ocean’s Dream', it: 'Isola del ladro di ricordi' },
  },
  {
    first: 225,
    last: 226,
    name: { en: 'Foxy’s Return', it: 'Ritorno di Foxy' },
  },
  { first: 326, last: 336, name: { en: 'Ice Hunter', it: 'Mare di ghiaccio' } },
  { first: 382, last: 384, name: { en: 'Spa Island', it: 'Spa Island' } },
  {
    first: 426,
    last: 429,
    name: { en: 'Little East Blue', it: 'Little East Blue' },
  },
  { first: 575, last: 578, name: { en: 'Z’s Ambition', it: 'Ambizione di Z' } },
  {
    first: 626,
    last: 628,
    name: { en: 'Caesar Retrieval', it: 'Recupero di Caesar' },
  },
  { first: 747, last: 750, name: { en: 'Silver Mine', it: 'Silver Mine' } },
  {
    first: 780,
    last: 782,
    name: { en: 'Marine Rookie', it: 'Marine novellini' },
  },
  {
    first: 895,
    last: 896,
    name: { en: 'Cidre Guild', it: 'Re dell’acido carbonico' },
  },
  { first: 1029, last: 1030, name: { en: 'Uta’s Past', it: 'Passato di Uta' } },
]

export const FILLER: FillerEntry[] = [
  {
    after: 5,
    released: '1999-12-22',
    kind: 'recap',
    chapter: 11,
    title: {
      en: 'Emergency Planning, A Perfect Strategy for the One Piece',
      it: 'Piano di emergenza, la strategia perfetta per lo One Piece',
    },
    summary: {
      en: 'A retelling of the first five episodes, in which Luffy and Zoro recount their pirate days to Nami in Orange Town, jumping between different moments of the story.',
      it: 'Un riassunto dei primi cinque episodi: Rufy e Zoro raccontano a Nami, a Orange Town, la loro vita da pirati, saltando da un momento all’altro della storia.',
    },
  },
  {
    after: 16,
    released: '2000-03-04',
    kind: 'film',
    chapter: 39,
    title: { en: 'One Piece: The Movie', it: 'Per tutto l’oro del mondo' },
    summary: {
      en: 'The Straw Hats are robbed by three thieves and end up against Eldoraggo, a pirate who wants the gold of the legendary Woonan, hidden on a lost island.',
      it: 'I Cappello di paglia vengono derubati da tre ladri e si scontrano con El Dorago, un pirata a caccia dell’oro del leggendario Woonan, nascosto su un’isola sperduta.',
    },
  },
  {
    episode: 45,
    kind: 'mixed',
    chapter: 96,
    title: {
      en: 'Bounty! Straw Hat Luffy Becomes Known To The World!',
      it: 'Il ricercato',
    },
    summary: {
      en: 'Luffy gets his first wanted poster and the news reaches his friends, his old enemies and Shanks, while Fullbody attacks the Going Merry. The crew then sails for Loguetown.',
      it: 'Rufy riceve il primo manifesto di taglia e la notizia raggiunge amici, vecchi nemici e Shanks, mentre Fullbody assalta la Going Merry. Poi la ciurma salpa per Loguetown.',
    },
  },
  {
    episode: 46,
    kind: 'mixed',
    chapter: 96,
    title: {
      en: 'Chase Straw Hat! Little Buggy’s Big Adventure!',
      it: 'Avventura sul mare',
    },
    summary: {
      en: 'As the crew sails toward Loguetown, Buggy, launched away by Luffy, crosses several islands, befriends a man living among rare animals and allies with Alvida.',
      it: 'Mentre la ciurma naviga verso Loguetown, Bagy, scagliato via da Rufy, attraversa varie isole, fa amicizia con un uomo tra animali rari e si allea con Alvida.',
    },
  },
  {
    episode: 47,
    kind: 'mixed',
    chapter: 96,
    title: {
      en: 'The Wait is Over! The Return of Captain Buggy!',
      it: 'Il ritorno del pagliaccio',
    },
    summary: {
      en: 'Buggy and Alvida free the Buggy Pirates from the cannibal Kumate tribe and sail after Luffy, while the crew nears Loguetown.',
      it: 'Bagy e Alvida liberano i pirati di Bagy dalla tribù cannibale dei Kumate e salpano all’inseguimento di Rufy, mentre la ciurma si avvicina a Loguetown.',
    },
  },
  {
    episode: 50,
    kind: 'filler',
    chapter: 97,
    title: {
      en: 'Usopp vs Daddy The Father! Showdown at High Noon!',
      it: 'Una prova di coraggio',
    },
    summary: {
      en: 'Usopp wants a pair of goggles, but a girl buys them for her father, the bounty hunter Daddy Masterson. Daddy challenges Usopp to a duel, and Usopp wins the goggles by shooting a weather vane.',
      it: 'Usop vuole degli occhiali speciali, ma una ragazzina li compra per il padre, il cacciatore di taglie Daddy Masterson. Questi sfida Usop a duello e Usop vince gli occhiali colpendo una banderuola.',
    },
  },
  {
    episode: 51,
    kind: 'filler',
    chapter: 98,
    title: {
      en: 'Firey Cooking Battle? Sanji vs. The Beautiful Chef',
      it: 'Il cuoco dell’anno',
    },
    summary: {
      en: 'Sanji enters a cooking contest against Carmen, who claims to be the best chef in the East Blue, to win a rare fish. Carmen concedes the final, while Smoker and Buggy follow Luffy.',
      it: 'Sanji si iscrive a una gara di cucina contro Carmen, che si dice la migliore cuoca del mare orientale, per vincere un pesce raro. Carmen ammette la sconfitta, mentre Smoker e Bagy seguono Rufy.',
    },
  },
  {
    after: 52,
    released: '2000-12-20',
    kind: 'special',
    chapter: 98,
    title: {
      en: 'Adventure in the Ocean’s Navel',
      it: 'Avventura nell’ombelico dell’oceano',
    },
    summary: {
      en: 'A huge hole opens in the ocean and the crew drops to the island at its bottom, the Ocean’s Navel, where a treasure is said to grant any wish.',
      it: 'La Going Merry viene trascinata in un enorme buco in mezzo all’oceano e la ciurma finisce sull’isola sul fondo, l’ombelico dell’oceano, dove si dice che un tesoro esaudisca ogni desiderio.',
    },
  },
  {
    episode: 54,
    kind: 'filler',
    chapter: 100,
    title: {
      en: 'Precursor To A New Adventure! Apis, A Mysterious Girl',
      it: 'Una ragazza misteriosa',
    },
    summary: {
      en: 'Apis escapes a Marine ship in a storm and is pulled aboard the Going Merry, asking to go home to Warship. Chased by the Marines, the crew is blown into a windless stretch of sea.',
      it: 'Apis fugge da una nave della Marina durante una tempesta e viene portata sulla Going Merry, chiedendo di tornare a Warship. Inseguita dalla Marina, la ciurma finisce in una fascia di bonaccia.',
    },
  },
  {
    episode: 55,
    kind: 'filler',
    chapter: 101,
    title: {
      en: 'Miraculous Creature! Apis’ Secret and The Legendary Island!',
      it: 'Una creatura leggendaria',
    },
    summary: {
      en: 'Apis rides a giant sea monster’s sneeze out of the windless sea, and the crew reaches Warship, hosted by her grandfather Bokuden. Luffy and Nami follow Apis into a cave and find a hidden dragon.',
      it: 'Apis fa starnutire un Re del mare per scagliare la nave fuori dalla bonaccia. La ciurma raggiunge Warship, ospite del nonno Bokuden, e Rufy e Nami scoprono un drago nascosto in una grotta.',
    },
  },
  {
    episode: 56,
    kind: 'filler',
    chapter: 101,
    title: {
      en: 'Eric Attacks! Great Escape From Warship Island!',
      it: 'Fuga dall’isola',
    },
    summary: {
      en: 'The crew learns why the Marines chase Apis and decides to carry the dragon Ryu to his nest. Luffy and Sanji fight the Marines and a mercenary named Eric while the others ready a cart.',
      it: 'La ciurma scopre perché la Marina insegue Apis e porta il drago Ryu verso il suo nido. Rufy e Sanji affrontano i marine e il mercenario Eric, mentre gli altri preparano una zattera con ruote.',
    },
  },
  {
    episode: 57,
    kind: 'filler',
    chapter: 101,
    title: {
      en: 'A Solitary Island in the Distant Sea! The Legendary Lost Island!',
      it: 'La leggendaria isola perduta',
    },
    summary: {
      en: 'The crew tows Ryu in search of the Lost Island, with Eric following behind. Once there, they find an old temple whose paintings might show where the dragons’ nest really is.',
      it: 'La ciurma traina Ryu alla ricerca dell’isola perduta, seguita da Eric. Arrivati, trovano un antico tempio con dei dipinti che potrebbero indicare dove si trova davvero il nido dei draghi.',
    },
  },
  {
    episode: 58,
    kind: 'filler',
    chapter: 101,
    title: {
      en: 'Showdown in the Ruins! Tense Zoro vs. Eric!',
      it: 'Duello alle rovine',
    },
    summary: {
      en: 'Nami reads a painted map in the temple and works out that the dragons’ nest lies at Warship, which Ryu confirms. Zoro fights Eric so the others can return to the Going Merry.',
      it: 'Nami legge una mappa dipinta nel tempio e deduce che il nido dei draghi si trova a Warship, cosa che Ryu conferma. Zoro affronta Eric perché gli altri possano tornare alla Going Merry.',
    },
  },
  {
    episode: 59,
    kind: 'filler',
    chapter: 101,
    title: {
      en: 'Luffy, Completely Surrounded! Commodore Nelson’s Secret Strategy!',
      it: 'Siamo circondati',
    },
    summary: {
      en: 'Commodore Nelson’s fleet surrounds the Going Merry while Eric, who wants Ryu’s bones, closes in by rowboat. Usopp blows up Nelson’s giant cannon, then Eric boards Ryu’s raft.',
      it: 'Le navi di Nelson circondano la Going Merry, mentre Eric, che vuole le ossa di Ryu, si avvicina su una barca a remi. Usop distrugge il cannone gigante, poi Eric sale sulla zattera di Ryu.',
    },
  },
  {
    episode: 60,
    kind: 'filler',
    chapter: 101,
    title: {
      en: 'Through the Sky They Soar! The 1000 Legend Lives Again!',
      it: 'I draghi volanti',
    },
    summary: {
      en: 'Ryu calls out to the other dragons with his last breath, and hundreds appear as the dragons’ nest rises from the sea. Luffy sends back Nelson’s harpoon and destroys his flagship with a kick.',
      it: 'Con le ultime forze Ryu lancia un richiamo e centinaia di draghi arrivano a Warship, mentre il loro nido riaffiora dal mare. Rufy rispedisce l’arpione di Nelson e distrugge la sua nave con un calcio.',
    },
  },
  {
    after: 60,
    released: '2001-03-03',
    kind: 'film',
    chapter: 101,
    title: {
      en: 'Clockwork Island Adventure',
      it: 'Avventura all’isola Spirale',
    },
    summary: {
      en: 'Thieves steal the Going Merry, so the crew teams up with two thieving brothers and sails for Clockwork Island, where a pirate captain called Bear King wants to marry Nami.',
      it: 'Dei ladri rubano la Going Merry, così la ciurma si allea con due fratelli ladri e raggiunge l’isola Spirale, dove il capitano pirata Bear King vuole sposare Nami.',
    },
  },
  {
    episode: 61,
    kind: 'mixed',
    chapter: 101,
    title: {
      en: 'An Angry Showdown! Cross the Red Line!',
      it: 'Una nuova avventura',
    },
    summary: {
      en: 'The canon part is the Going Merry sailing up a mountain channel toward the Grand Line. The rest has Apis refuse to join the crew and Luffy beat Eric in a fight.',
      it: 'La parte canonica è la Going Merry che risale un canale di montagna verso la Rotta Maggiore. Il resto mostra Rufy che sconfigge Eric e Apis che rifiuta di unirsi alla ciurma.',
    },
  },
  {
    episode: 68,
    kind: 'mixed',
    chapter: 114,
    title: {
      en: 'Try Hard, Coby! Coby-Meppo’s Struggles in the Navy!',
      it: 'La forza dei sogni',
    },
    summary: {
      en: 'Coby and Helmeppo work as errand boys at a Marine base, until Morgan escapes during his transfer and a vice admiral takes the boys along.',
      it: 'Kobi e Hermeppo lavorano come ragazzi di servizio in una base della Marina, finché Morgan evade durante il trasferimento e un viceammiraglio li porta con sé.',
    },
  },
  {
    episode: 69,
    kind: 'mixed',
    chapter: 114,
    title: {
      en: 'Coby-Meppo’s Resolve! Vice-Admiral Garp’s Parental Affection!',
      it: 'Una questione di forza di volontà',
    },
    summary: {
      en: 'Coby and Helmeppo clean floors and train after hours under a vice admiral, who tests their will by having them attack him, then puts them through harsh training.',
      it: 'Kobi e Hermeppo puliscono i pavimenti e si allenano di sera sotto un viceammiraglio, che mette alla prova la loro volontà facendosi attaccare e poi li sottopone ad allenamenti durissimi.',
    },
  },
  {
    episode: 93,
    kind: 'mixed',
    chapter: 158,
    title: {
      en: 'Off to the Desert Kingdom! The Rain-Summoning Powder and the Rebel Army!',
      it: 'Arrivo ad Alabasta',
    },
    summary: {
      en: 'The canon part is the crew waiting for Luffy and Vivi naming Yuba as their destination. The rest adds Luffy lost in the desert and Chopper falling asleep in a cart.',
      it: 'La parte canonica è la ciurma che aspetta Rufy e Bibi che indica Yuba come meta. Il resto aggiunge Rufy che si perde nel deserto e Chopper che si addormenta su un carro.',
    },
  },
  {
    episode: 98,
    kind: 'filler',
    chapter: 162,
    title: {
      en: 'Enter the Desert Pirates! The Men Who Live Freely!',
      it: 'I Pirati del deserto',
    },
    summary: {
      en: 'Hallucinating from cactus, Luffy breaks the mast of a sand-sailing ship whose captain, Barbar, had captured Nami and Vivi. Barbar apologizes, and Luffy and Vivi go to find timber.',
      it: 'Dopo aver mangiato dei cactus allucinogeni, Rufy spezza l’albero di una nave che naviga sulla sabbia, il cui capitano, Barbarossa, aveva catturato Nami e Bibi. Barbarossa si scusa e Rufy va a cercare del legname.',
    },
  },
  {
    episode: 99,
    kind: 'filler',
    chapter: 162,
    title: {
      en: 'False Fortitude! Camu, Rebel Soldier at Heart!',
      it: 'Guerrieri per caso',
    },
    summary: {
      en: 'Ace finds four men posing as rebels to live off a village, and Vivi decides to test them. They stand up to Luffy’s crew, so Vivi does not expose them and the crew moves on.',
      it: 'Ace scopre quattro uomini che si fingono ribelli per farsi mantenere da un villaggio e Bibi decide di metterli alla prova. Resistono alla ciurma di Rufy, così Bibi non li smaschera e il viaggio riprende.',
    },
  },
  {
    episode: 101,
    kind: 'mixed',
    chapter: 164,
    title: {
      en: 'Showdown in a Heat Haze! Ace vs. the Gallant Scorpion!',
      it: 'Un uomo di nome Scorpion',
    },
    summary: {
      en: 'The canon part is Ace giving Luffy a scrap of paper to meet again. The rest follows the bounty hunter Scorpion and his children, who lure Ace with a false rumor.',
      it: 'La parte canonica è Ace che dà a Rufy un foglio per ritrovarsi. Il resto segue il cacciatore di taglie Scorpion e i figli, che attirano Ace con una voce falsa.',
    },
  },
  {
    episode: 102,
    kind: 'filler',
    chapter: 164,
    title: {
      en: 'Ruins and Lost Ways! Vivi, Her Friends, and the Country’s Form!',
      it: 'Ancora verso Yuba',
    },
    summary: {
      en: 'Luffy, Zoro and Chopper get lost in the desert because of Luffy’s hallucinations. Zoro falls into a pit in the sand, they find underground ruins holding a Poneglyph, then rejoin the others in the evening.',
      it: 'Rufy, Zoro e Chopper si perdono nel deserto per le allucinazioni di Rufy. Zoro cade in una fossa nella sabbia, i tre trovano delle rovine sotterranee con un Poignee Griffe, poi tornano dal gruppo.',
    },
  },
  {
    after: 102,
    released: '2002-03-02',
    kind: 'film',
    chapter: 164,
    title: {
      en: 'Chopper’s Kingdom on the Island of Strange Animals',
      it: 'Il tesoro del re',
    },
    summary: {
      en: 'Chasing a treasure map, the crew lands on an island of talking animals. Chopper falls off the ship and the animals take him for their new king.',
      it: 'Seguendo una mappa del tesoro, la ciurma approda su un’isola di animali parlanti. Chopper cade dalla nave e gli animali lo scambiano per il loro nuovo re.',
    },
  },
  {
    episode: 131,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'The First Patient! The Untold Story of the Rumble Ball!',
      it: 'La storia delle Rumble Ball',
    },
    summary: {
      en: 'On an island rich in fruit, Chopper guards the ship and recalls making his first Rumble Ball and his first patient, Dr. Kureha. Robin keeps him company and helps him fill a barrel.',
      it: 'Su un’isola ricca di frutta Chopper fa la guardia alla nave e ricorda la prima Rumble Ball e la prima paziente, la dottoressa Kureha. Robin gli fa compagnia e lo aiuta a riempire un barile.',
    },
  },
  {
    episode: 132,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'Uprising of the Navigator! For the Unyielding Dream!',
      it: 'Un sogno grande come l’oceano',
    },
    summary: {
      en: 'Luffy fishes up a giant snail holding a salesman, Rice Rice, and Nami ends up with sturdy paper for her sea maps. Her crewmates keep interrupting her, and a cyclone nearly catches the sleeping crew.',
      it: 'Rufy pesca una lumaca gigante da cui esce il venditore Rice Rice, e Nami si ritrova con fogli resistenti per le mappe. I compagni la interrompono di continuo, poi un ciclone sorprende la ciurma addormentata.',
    },
  },
  {
    episode: 133,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'A Recipe Handed Down! Sanji, the Iron-Man of Curry!',
      it: 'La ricetta perfetta',
    },
    summary: {
      en: 'The Going Merry drifts among Marine ships in fog, and Robin saves Tajio, a young trainee Marine cook. Sanji, who shares his dream of finding the All Blue, helps him cook the officers’ lunch.',
      it: 'La Going Merry avanza nella nebbia tra le navi della Marina e Robin salva Tajio, giovane marine di cucina. Sanji, che condivide il suo sogno dell’All Blue, lo aiuta a preparare il pranzo degli ufficiali.',
    },
  },
  {
    episode: 134,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'I Will Make it Bloom! Usopp the Man and the Eight-Foot Shell!',
      it: 'Sogni e fuochi d’artificio',
    },
    summary: {
      en: 'On Fireworks Island, Usopp meets Kodama, whose parents died when a giant firework exploded early. He talks her out of firing a copy, and after the festival he and her grandfather Odama fire it.',
      it: 'Usop conosce Kodama, i cui genitori sono morti quando un fuoco d’artificio gigante è esploso troppo presto. La convince a non spararne uno uguale, che poi spara con il nonno Odama.',
    },
  },
  {
    episode: 135,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'The Fabled Pirate Hunter! Zoro, the Wandering Swordsman!',
      it: 'Zoro, il famoso cacciatore di pirati',
    },
    summary: {
      en: 'Zoro remembers meeting Johnny and Yosaku: he beats the bandit Billy in a pub, then saves the two bounty hunters from the bandit Dick and his men, and they ask to travel with him.',
      it: 'Zoro ricorda l’incontro con Johnny e Yosaku: sconfigge il bandito Billy in un locale, poi salva i due cacciatori di taglie dal bandito Dick e dai suoi uomini, e loro chiedono di viaggiare con lui.',
    },
  },
  {
    episode: 136,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'Zenny of the Island of Goats and the Pirate Ship in the Mountains!',
      it: 'L’isola delle capre e la nave misteriosa',
    },
    summary: {
      en: 'The crew lands on an island where the old man Zenny lives alone with goats and is building a pirate ship. Chopper finds out that his bad heart gives him only three days.',
      it: 'La ciurma approda su un’isola dove il vecchio Zeny vive da solo con le capre e costruisce una nave pirata. Chopper scopre che per il cuore malato gli restano tre giorni di vita.',
    },
  },
  {
    episode: 137,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'How’s Tricks? The Designs of Zenny the Moneylender!',
      it: 'Il sogno segreto di Zeny',
    },
    summary: {
      en: 'The pirates help Zenny finish his ship, which he sees as a coffin. He outlives Chopper’s three days, celebrates with them and tells how he lent money to pirates and was shipwrecked twenty years ago.',
      it: 'I pirati aiutano Zeny a finire la nave, che lui considera una bara. Supera i tre giorni previsti da Chopper, festeggia con loro e racconta di quando prestava soldi ai pirati e naufragò vent’anni fa.',
    },
  },
  {
    episode: 138,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'Whereabouts of the Island Treasure! Attack of the Zenny Pirates!',
      it: 'Finalmente pirata!',
    },
    summary: {
      en: 'Zenny sets sail, but the Marine Minchey wants his treasure. Zenny attacks Minchey’s ship with his goats and the crew defeats the Marine. Zenny tells Nami the secret of his treasure, then they part ways.',
      it: 'Zeny salpa, ma il sergente Minchey vuole il suo tesoro. Zeny assalta la nave della Marina con le capre e la ciurma sconfigge Minchey. Poi Zeny rivela a Nami il segreto del tesoro.',
    },
  },
  {
    episode: 139,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'Legend of the Rainbow Mist! Old Man Henzo of the Luluka Island!',
      it: 'La nebbia color arcobaleno',
    },
    summary: {
      en: 'On Ruluka, where the mayor taxes everything, Luffy, Usopp and Robin meet Henzo, who studies the Rainbow Mist. When an old galleon appears in the bay, Henzo heads for it and the Going Merry follows.',
      it: 'A Ruruka, dove il sindaco impone tasse, Rufy, Usop e Robin conoscono Henzo, che studia la nebbia color arcobaleno. Quando un galeone appare in baia, Henzo lo raggiunge e la Going Merry lo segue.',
    },
  },
  {
    episode: 140,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'Residents of the Land of Eternity! The Pumpkin Pirates!',
      it: 'La banda dei Pirati della zucca',
    },
    summary: {
      en: 'Inside the Rainbow Mist, the crew finds wrecked ships and treasure and is scared by ghosts and arrows. The culprits are the Pumpkin Pirates, Henzo’s old friends, who have not aged in fifty years.',
      it: 'Nella nebbia color arcobaleno la ciurma trova relitti e tesori e viene spaventata da fantasmi e frecce. A farlo sono i Pirati della zucca, bambini amici d’infanzia di Henzo, che in cinquant’anni non sono invecchiati.',
    },
  },
  {
    episode: 141,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'Thoughts of Home! The Pirate Graveyard of No Escape!',
      it: 'Il cimitero dei pirati, un luogo senza ritorno',
    },
    summary: {
      en: 'Space inside the Rainbow Mist loops in a ring, and the children tell how they jailed Ian, who treated them as slaves. On Ruluka, Nami takes Henzo’s device and flees from the mayor’s men.',
      it: 'Lo spazio nella nebbia color arcobaleno forma un anello, e i bambini raccontano di aver rinchiuso Ian, che li trattava da schiavi. A Ruruka Nami prende il congegno di Henzo e fugge.',
    },
  },
  {
    episode: 142,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'An Inevitable Melee! Wetton’s Schemes and the Rainbow Tower!',
      it: 'Scontro in vista: Wetton raggiunge la nebbia color arcobaleno',
    },
    summary: {
      en: 'Luffy accidentally sends himself and Rapanui elsewhere in the mist. Nami enters it by boat, but Ian steals her treasure and rope. The mayor builds a bridge with the Rainbow Tower.',
      it: 'Rufy colpisce per errore Rapanui e i due finiscono in un’altra zona della nebbia. Nami vi entra in barca, ma Ian le ruba i tesori. Il sindaco costruisce un ponte con la torre arcobaleno.',
    },
  },
  {
    episode: 143,
    kind: 'filler',
    chapter: 218,
    title: {
      en: 'And So, The Legend Begins! To the Other Side of the Rainbow!',
      it: 'La luce oltre la nebbia',
    },
    summary: {
      en: 'The mayor Wetton destroys the Rainbow Tower to flee to Ruluka, leaving his family behind, and the mist starts to collapse. The Going Merry escapes badly damaged, and Marines arrest the mayor.',
      it: 'Il sindaco Wetton distrugge la torre arcobaleno per fuggire a Ruruka, abbandonando i familiari, e la nebbia inizia a collassare. La Going Merry riesce a uscire gravemente danneggiata e dei marine arrestano il sindaco.',
    },
  },
  {
    after: 146,
    released: '2003-03-01',
    kind: 'film',
    chapter: 233,
    title: { en: 'Dead End Adventure', it: 'Trappola mortale' },
    summary: {
      en: 'Short of money, the crew enters the Dead End Race, a secret contest between pirate crews, whose competitors include Gasparde, a former Marine turned pirate, and a bounty hunter after him.',
      it: 'A corto di soldi, la ciurma partecipa a una gara segreta tra ciurme pirata, a cui prende parte anche Gaspardi, ex marine diventato pirata, braccato da un cacciatore di taglie.',
    },
  },
  {
    after: 149,
    released: '2003-04-06',
    kind: 'special',
    chapter: 233,
    title: {
      en: 'Open Upon the Great Sea! A Father’s Huge, HUGE Dream!',
      it: 'Un tesoro grande un sogno',
    },
    summary: {
      en: 'Three children escape from the pirate Zap’s ship with two of his crew, planning to reach a great treasure whose map one of them carries, and run into Luffy’s crew.',
      it: 'Tre bambini fuggono dalla nave del pirata Zap con due dei suoi uomini, per raggiungere un grande tesoro di cui una di loro conosce la mappa, e incontrano la ciurma di Rufy.',
    },
  },
  {
    after: 174,
    released: '2003-12-14',
    kind: 'special',
    chapter: 272,
    title: {
      en: 'Protect! The Last Great Performance',
      it: 'L’ultima esibizione',
    },
    summary: {
      en: 'Luffy’s crew goes to see a play aboard a theatre ship run by a former Marine and ends up taking part in the show itself.',
      it: 'La ciurma di Rufy va a vedere uno spettacolo su una nave-teatro guidata da un ex marine e finisce per recitare nello spettacolo stesso.',
    },
  },
  {
    after: 183,
    released: '2004-03-06',
    kind: 'film',
    chapter: 281,
    title: { en: 'The Cursed Holy Sword', it: 'La spada delle sette stelle' },
    summary: {
      en: 'On Asuka Island the crew hears of the Shichiseiken, a valuable sword that carries a curse. Then Zoro disappears, and Marines attack the village that keeps it sealed.',
      it: 'Sull’isola Aska la ciurma sente parlare della spada delle sette stelle, la più preziosa al mondo ma maledetta. Poi Zoro sparisce e dei marine attaccano il villaggio che la tiene sigillata.',
    },
  },
  {
    episode: 196,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'A State of Emergency is Issued! A Notorious Pirate Ship Has Infiltrated!',
      it: 'Il mistero della nave fantasma',
    },
    summary: {
      en: 'The Going Merry falls into the Marine base G-8 from the sky. The Marines take it for a ghost ship, and the crew scatters around the fortress.',
      it: 'La Going Merry cade dal cielo dentro la base G-8 della Marina. I soldati la credono una nave fantasma, mentre la ciurma si disperde all’interno della fortezza.',
    },
  },
  {
    episode: 197,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'Sanji the Cook! Proving His Merit at the Navy Dining Hall!',
      it: 'Il talento di Sanji',
    },
    summary: {
      en: 'Sanji disguises himself and shows the Marine chefs how to prepare a decent meal. Nami wanders the base dressed as a Marine and throws Zoro’s swords into a bush.',
      it: 'Travestito, Sanji insegna ai cuochi della Marina come preparare un pasto decente. Nami si aggira per la base vestita da marine e getta le spade di Zoro su un cespuglio.',
    },
  },
  {
    episode: 198,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'Captured Zoro and Chopper’s Emergency Operations!',
      it: 'Zoro in prigione e Chopper in sala operatoria',
    },
    summary: {
      en: 'Zoro is interrogated in a cell and not believed when he says the crew arrived from the sky. Chopper and Nami help a nervous doctor treat wounded Marines.',
      it: 'Zoro viene interrogato in cella e non gli credono quando dice che la ciurma è arrivata dal cielo. Chopper e Nami aiutano una dottoressa impaurita a curare i marine feriti.',
    },
  },
  {
    episode: 199,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'The Navy’s Dragnet Closes In! The Second Member Captured!',
      it: 'Usopp finisce in prigione',
    },
    summary: {
      en: 'Robin and Usopp disguise themselves as the same visiting inspector, and Usopp ends up in the brig with Zoro. Luffy and Sanji are discovered by Vice Admiral Jonathan.',
      it: 'Robin e Usop si travestono entrambi dallo stesso ispettore in visita, e Usop finisce in cella con Zoro. Rufy e Sanji vengono scoperti dal viceammiraglio Jonathan.',
    },
  },
  {
    episode: 200,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'Daring Luffy and Sanji! Their Great Rescue Operation!',
      it: 'Operazione salvataggio!',
    },
    summary: {
      en: 'The real inspector, Shepherd, is thrown into the brig with Zoro and Usopp. Luffy and Sanji search the base for the jail to rescue them.',
      it: 'Shepherd, il vero ispettore, viene gettato nella cella di Zoro e Usop. Rufy e Sanji cercano le prigioni della base per liberare i compagni.',
    },
  },
  {
    episode: 201,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'Enter the Hot-Blooded Special Forces! Battle on the Bridge!',
      it: 'Lo scontro sul ponte',
    },
    summary: {
      en: 'Luffy, Zoro, Sanji and Usopp run through the base chased by Marines, while a special combat unit takes position on the bridge. Dr. Kobato leads Nami and Chopper to the docks.',
      it: 'Rufy, Zoro, Sanji e Usop corrono per i corridoi della base inseguiti dalla Marina, che schiera la brigata Tempesta sul ponte di ferro. La dottoressa Kobato porta Nami e Chopper al molo.',
    },
  },
  {
    episode: 202,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'Breaking Through the Siege! The Going Merry is Recovered!',
      it: 'Una fuga improvvisata',
    },
    summary: {
      en: 'The crew meets at the docks and the Marines surround them. Nami pretends to be a hostage, which tricks the Marines into letting everyone back on the Going Merry.',
      it: 'La ciurma si riunisce al molo e viene circondata dai marine. Nami finge di essere un ostaggio e inganna i soldati, che lasciano tornare tutti sulla Going Merry.',
    },
  },
  {
    episode: 203,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'The Pirate Ship Disappears! Fortress Battle, Round #2!',
      it: 'Alla ricerca del tesoro',
    },
    summary: {
      en: 'The crew disguises the Going Merry as a Marine ship and hides it in an empty dock. They turn back to recover their gold, planning to hire a shipwright with it.',
      it: 'La ciurma mimetizza la Going Merry da nave della Marina e la nasconde in un molo abbandonato. Torna indietro a recuperare l’oro, con cui vuole assumere un carpentiere.',
    },
  },
  {
    episode: 204,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'The Gold and Waver Recovery Operations!',
      it: 'Alla conquista dell’oro perduto',
    },
    summary: {
      en: 'Usopp splits the crew into a team to retrieve the gold and a team to retrieve Nami’s waver. Inspector Shepherd decides to catch the pirates on his own.',
      it: 'Usop divide la ciurma in due gruppi, uno per recuperare l’oro e l’altro per riprendersi il waver di Nami. Shepherd decide di catturare i pirati da solo.',
    },
  },
  {
    episode: 205,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'The One Fell Swoop Plan! Jonathan’s Surefire Secret Tactic!',
      it: 'Caccia al tesoro perduto',
    },
    summary: {
      en: 'Nami and Sanji find the waver, and Robin defeats Shepherd and his giant bazooka. Luffy leads Nami to the captain’s quarters, where they retrieve the gold.',
      it: 'Nami e Sanji ritrovano il waver, mentre Robin sconfigge Shepherd e il suo enorme bazooka. Rufy porta Nami negli alloggi del capitano, dove recuperano l’oro.',
    },
  },
  {
    episode: 206,
    kind: 'filler',
    chapter: 303,
    title: {
      en: 'Farewell, Navy Fortress! The Last Battle for Escape',
      it: 'Addio fortezza Navarone',
    },
    summary: {
      en: 'The Going Merry runs aground at low tide, and Jonathan believes the pirates are trapped. The crew uses the Impact Dial, then the Breath and Flame Dials, to inflate the octopus balloon again and escape.',
      it: 'La Going Merry si incaglia con la bassa marea e Jonathan crede di averli presi. La ciurma usa l’Impact Dial, il Breath Dial e il Flame Dial per gonfiare il pallone a polpo e fuggire.',
    },
  },
  {
    episode: 213,
    kind: 'filler',
    chapter: 313,
    title: {
      en: 'Round 3! The Round-And-Round Roller Race!',
      it: 'Sfida sui pattini',
    },
    summary: {
      en: 'The Straw Hat Pirates race Foxy’s crew on roller skates around a giant ring. Luffy insists on racing twice, then finds out he cannot stand on skates.',
      it: 'La terza sfida contro i pirati di Foxy è una gara sui pattini a rotelle. Rufy vuole correre due volte, ma scopre troppo tardi di non reggersi in piedi sui pattini.',
    },
  },
  {
    episode: 214,
    kind: 'filler',
    chapter: 313,
    title: {
      en: 'A Seriously Heated Race! Into the Final Round!',
      it: 'Il round roller alle battute finali',
    },
    summary: {
      en: 'The Straw Hat Pirates stop Foxy’s dirty tricks and win the race. Zoro cuts down a fruit tree, and the rival racer leaves the track to eat the fruit.',
      it: 'I Pirati di Cappello di paglia fermano i trucchi sporchi di Foxy e vincono la gara. Zoro abbatte un albero da frutto e il corridore avversario lascia la pista per mangiarne i frutti.',
    },
  },
  {
    episode: 215,
    kind: 'mixed',
    chapter: 313,
    title: {
      en: 'Screaming-Hot Bombardment! Pirate Dodgeball!',
      it: 'Due nuove sfide per Rubber e la sua ciurma',
    },
    summary: {
      en: 'The canon part is Luffy taking Chopper back to the crew. The rest is added: Foxy demands a rematch, which opens with dodgeball with spiked balls.',
      it: 'La parte del manga è il ritorno di Chopper con la ciurma di Rufy. Il resto è aggiunto: Foxy chiede la rivincita, che inizia con una partita a palla prigioniera con palle chiodate.',
    },
  },
  {
    episode: 216,
    kind: 'filler',
    chapter: 313,
    title: {
      en: 'Showdown on the Cliff! Red Light, Green Light!',
      it: 'L’“uno, due, tre, stella” dei pirati',
    },
    summary: {
      en: 'Foxy takes Robin from Luffy’s crew because of her fighting ability. The second challenge is a red light, green light race with six runners per crew.',
      it: 'Foxy prende Robin nella propria ciurma perché la considera una combattente formidabile. La seconda sfida è una gara a “uno, due, tre, stella” con sei partecipanti per ciurma.',
    },
  },
  {
    episode: 220,
    kind: 'filler',
    chapter: 318,
    title: {
      en: 'Was It Lost? Stolen? Who Are You?',
      it: 'Perdita di memoria',
    },
    summary: {
      en: 'A mysterious figure with a seahorse flute steals the crew’s memories during the night. In the morning only Robin remembers, and Nami and Zoro go separate ways.',
      it: 'Di notte un misterioso ragazzo con un flauto a forma di cavalluccio marino ruba i ricordi della ciurma. Al mattino solo Robin ricorda tutto, e Nami e Zoro se ne vanno per conto proprio.',
    },
  },
  {
    episode: 221,
    kind: 'filler',
    chapter: 318,
    title: {
      en: 'A Mysterious Boy with a Horn and Robin’s Deduction!',
      it: 'L’incontro con il ladro dei ricordi',
    },
    summary: {
      en: 'Robin deduces that only those who were asleep lost their memories. When the boy with the flute returns that night, Luffy attacks him and regains his memory at the last second.',
      it: 'Robin deduce che hanno perso i ricordi solo quelli che dormivano. Quando il ragazzo con il flauto torna di notte, Rufy lo attacca e all’ultimo momento ritrova la memoria.',
    },
  },
  {
    episode: 222,
    kind: 'filler',
    chapter: 318,
    title: {
      en: 'Now, Let’s Get Back our Memories! The Pirate Crew Lands on the Island!',
      it: 'Rubber ritrova la memoria',
    },
    summary: {
      en: 'Luffy, with his memory back, wants to look for Zoro and Nami. Usopp builds a raft, and the crew sails to the island and finds Nami, while the mysterious boy sets his sights on Zoro.',
      it: 'Rufy, che ha ritrovato la memoria, vuole cercare Zoro e Nami. Usop costruisce una piccola barca e la ciurma sbarca sull’isola, dove ritrova Nami.',
    },
  },
  {
    episode: 223,
    kind: 'filler',
    chapter: 318,
    title: {
      en: 'Zoro Bares His Fangs! A Savage Animal Stands in the Way!',
      it: 'Zoro sotto l’effetto dell’ipnosi',
    },
    summary: {
      en: 'On the way to a palace on the mountain, Robin’s group meets an entranced Zoro, who attacks Luffy. The crew learns that the seahorse flute, not the boy, has been stealing their memories.',
      it: 'Mentre il gruppo di Robin si dirige al palazzo, Zoro, che sembra in trance, attacca Rufy e i due iniziano a combattere. Gli altri proseguono verso la cima della montagna.',
    },
  },
  {
    after: 223,
    released: '2005-03-05',
    kind: 'film',
    chapter: 318,
    title: {
      en: 'Baron Omatsuri and the Secret Island',
      it: 'L’isola segreta del barone Omatsuri',
    },
    summary: {
      en: 'Lured to Omatsuri Island by an invitation to a resort, the crew is challenged by the island’s Baron to a series of trials, and members start to vanish one by one.',
      it: 'Attirata sull’isola Omatsuri da un invito a un resort, la ciurma viene sfidata dal barone dell’isola a una serie di prove, e i compagni iniziano a sparire uno alla volta.',
    },
  },
  {
    episode: 224,
    kind: 'filler',
    chapter: 318,
    title: {
      en: 'The Last Counterattack by the Memory Thief Who Revealed His True Colors!',
      it: 'Attacco finale al vero ladro di memorie',
    },
    summary: {
      en: 'Luffy fights Zoro on even terms while the seahorse spreads illusions. Luffy defeats the seahorse and returns the memories, but the villagers think the pirates are the thieves.',
      it: 'Il ragazzo, chiamato Dorimo, torna al villaggio dalla madre, dove tutti hanno riavuto i ricordi. Nella foresta la ciurma sconfigge il cavalluccio marino e restituisce la memoria a tutti.',
    },
  },
  {
    episode: 225,
    kind: 'filler',
    chapter: 318,
    title: { en: 'Proud Man! Silver Fox Foxy!', it: 'Rubber in aiuto di Foxy' },
    summary: {
      en: 'Luffy rescues Foxy, Hamburg and Porche from a storm at sea, but their ship has a new captain. Foxy accepts a Davy Back Fight to win back his crew, and Luffy vows to win.',
      it: 'Durante una tempesta Rufy salva Foxy, Polluce e Hamburg. Sulla Sexy Foxy trovano un nuovo capitano, Rospo zannuto, e Foxy accetta un Davy Back Fight per riprendersi la ciurma.',
    },
  },
  {
    episode: 226,
    kind: 'mixed',
    chapter: 318,
    title: {
      en: 'The Guy Who’s the Closest to Invincible? And the Most Dangerous Man!',
      it: 'Foxy, l’uomo quasi invincibile',
    },
    summary: {
      en: 'The canon part is the ending, where the crew meets a Marine Robin knows. The rest is added: Foxy freezes Zoro and Sanji, then Luffy and Nami beat him and his machines.',
      it: 'La parte del manga è il finale, in cui la ciurma incontra un marine che Robin conosce. Il resto è aggiunto: Foxy immobilizza Zoro e Sanji, poi Rufy e Nami sconfiggono lui e le macchine.',
    },
  },
  {
    after: 253,
    released: '2005-12-18',
    kind: 'special',
    chapter: 362,
    title: {
      en: 'The Detective Memoirs of Chief Straw Hat Luffy',
      it: 'Le avventure del detective Cappello di paglia',
    },
    summary: {
      en: 'Set in an alternate world of 19th century Japan, with Luffy as a detective. In the first half Buggy causes trouble in his town, in the second a mysterious girl called Vivi appears.',
      it: 'Ambientato in un Giappone alternativo dell’Ottocento, con Rufy nei panni di un detective. Nella prima metà Bagy semina guai in città, nella seconda compare una misteriosa ragazza di nome Bibi.',
    },
  },
  {
    after: 253,
    released: '2006-01-03',
    kind: 'recap',
    chapter: 362,
    title: {
      en: 'One Piece New Year Special: Special Report - Secret of the Straw Hat Pirates!',
      it: 'Speciale di Capodanno di One Piece: servizio speciale, il segreto dei Pirati di Cappello di paglia',
    },
    summary: {
      en: 'A retelling of how each Straw Hat joined the crew, from Romance Dawn to Nico Robin, ending as Aqua Laguna is about to hit Water Seven.',
      it: 'Un riassunto di come ogni membro della ciurma si è unito a Rufy, da Romance Dawn fino a Nico Robin, che si chiude quando Aqua Laguna sta per colpire Water Seven.',
    },
  },
  {
    after: 257,
    released: '2006-03-04',
    kind: 'film',
    chapter: 366,
    title: {
      en: 'The Giant Mechanical Soldier of Karakuri Castle',
      it: 'I misteri dell’isola meccanica',
    },
    summary: {
      en: 'The crew pulls an old woman out of a chest from a sinking ship. She promises a golden crown if they take her home to Mecha Island, an island full of inventions.',
      it: 'La ciurma tira fuori da un baule, recuperato da una nave alla deriva, una vecchia che promette una corona d’oro se la riporteranno sulla sua isola meccanica, piena di invenzioni.',
    },
  },
  {
    episode: 279,
    kind: 'recap',
    chapter: 397,
    title: {
      en: 'Jump Towards the Falls! Luffy’s Feelings!',
      it: 'Un tuffo nel passato',
    },
    summary: {
      en: 'The recap retells how young Luffy meets Shanks in Foosha Village. The leader of a bandit group throws Luffy into the sea, and Shanks saves him from a sea monster.',
      it: 'L’episodio ripercorre l’incontro tra il piccolo Rufy e Shanks nel Villaggio Fuschia. Il capo di un gruppo di banditi getta Rufy in acqua e Shanks lo salva da un mostro marino.',
    },
  },
  {
    episode: 280,
    kind: 'recap',
    chapter: 397,
    title: {
      en: 'The Ways of Men! Zoro’s Techniques, Usopp’s Dream',
      it: 'La ciurma agli albori',
    },
    summary: {
      en: 'The recap retells how Zoro was rescued from Captain Morgan and how Luffy saved Usopp’s island from Kuro. Both memories are tied to Robin’s situation.',
      it: 'Zoro e Usop ripensano a come sono entrati nella ciurma. Zoro ricorda il dojo, Kuina e il salvataggio da parte di Rufy, Usop ricorda come Rufy ha salvato la sua isola da Kuro.',
    },
  },
  {
    episode: 281,
    kind: 'recap',
    chapter: 397,
    title: {
      en: 'A Bond of Friendship Woven by Tears! Nami’s World Map!',
      it: 'Le lacrime di Nami',
    },
    summary: {
      en: 'The recap shows Nami’s memories of Arlong Park and how Luffy saved her. She compares her situation then with Robin’s now.',
      it: 'Nami ripensa al suo passato nel villaggio di Coco, ad Arlong e a come Rufy abbia salvato anche lei. Paragona la sua situazione di allora a quella di Robin.',
    },
  },
  {
    episode: 282,
    kind: 'recap',
    chapter: 397,
    title: {
      en: 'Parting Builds a Man’s Character! Sanji and Chopper!',
      it: 'Le separazioni che rafforzano',
    },
    summary: {
      en: 'The recap shows Sanji’s and Chopper’s flashbacks. Each recalls childhood and how they first met Luffy and joined his crew.',
      it: 'Sanji ricorda la sua infanzia con Zef, la difesa del Baratie e il suo ingresso nella ciurma. Chopper ripensa a quando era piccolo e a come ha conosciuto Rufy.',
    },
  },
  {
    episode: 283,
    kind: 'recap',
    chapter: 397,
    title: {
      en: 'Everything is for Her Friends! Robin in the Darkness!',
      it: 'L’importanza dell’amicizia',
    },
    summary: {
      en: 'The recap shows why Robin acted as she did, with a summary of her backstory. It retells how an agent of CP9 approached her when she arrived in town.',
      it: 'Robin ripensa alle azioni che l’hanno portata a Enies Lobby. Appena arrivata in città, un uomo mascherato che si è presentato come agente del CP9 l’ha avvicinata.',
    },
  },
  {
    episode: 291,
    kind: 'filler',
    chapter: 406,
    title: {
      en: 'Boss Luffy Returns! Is it a Dream or Reality? Lottery Ruckus!',
      it: 'L’agente Rubber e il magistrato corrotto',
    },
    summary: {
      en: 'In an alternate Japan of the Edo period, Buggy’s gang tries to collect a debt from a sick man and kidnaps Rika to sell her as a slave. Luffy steps in and defeats them.',
      it: 'In una terra simile al Giappone feudale, Bagy e la sua banda rapiscono Rica per venderla come schiava, credendola figlia di un uomo che gli deve dei soldi. Rufy interviene e li sconfigge.',
    },
  },
  {
    episode: 292,
    kind: 'filler',
    chapter: 406,
    title: {
      en: 'A Big Rice Cake Tossing Race at the Castle! Red Nose’s Plot!',
      it: 'Il lancio delle polpette di riso',
    },
    summary: {
      en: 'A festival rice cake toss hides a ten million Berry diamond in one cake, and Buggy’s gang tries to steal it first. Zoro ends up with the prized cake but throws it away.',
      it: 'Lo shogun lancia polpette di riso alla popolazione, e in una c’è un diamante da dieci milioni di Berry. La banda di Bagy cerca di rubarlo prima che la festa abbia inizio.',
    },
  },
  {
    after: 298,
    released: '2007-03-03',
    kind: 'film',
    chapter: 414,
    title: {
      en: 'Episode of Alabasta: The Desert Princess and the Pirates',
      it: 'Un’amicizia oltre i confini del mare',
    },
    summary: {
      en: 'A retelling of the Alabasta story: the crew reaches a kingdom torn by revolution and has to cross the desert to stop Crocodile, who is behind the unrest.',
      it: 'Il racconto della saga di Alabasta: la ciurma arriva in un regno sconvolto da una rivoluzione e deve attraversare il deserto per fermare Crocodile, il vero responsabile dei disordini.',
    },
  },
  {
    episode: 303,
    kind: 'filler',
    chapter: 420,
    title: {
      en: 'Boss Luffy is the Culprit? Track Down the Missing Great Cherry Tree!',
      it: 'Il mistero del ciliegio scomparso',
    },
    summary: {
      en: 'In the Japan-like land, Ninjin falls sick and cannot go to the cherry blossom festival. The great cherry tree vanishes, Usopp suspects Luffy, and the culprits are Foxy and Buggy.',
      it: 'Nella terra simile al Giappone feudale Carota si ammala e non può andare alla festa dei ciliegi. Il grande ciliegio sparisce e Usop sospetta di Rufy, ma i colpevoli sono Foxy e Bagy.',
    },
  },
  {
    episode: 317,
    kind: 'filler',
    chapter: 435,
    title: {
      en: 'A Girl In Search Of Her Yagara! Great Search In The City Of Water!',
      it: 'La ragazza in cerca del proprio Yagara',
    },
    summary: {
      en: 'In Water Seven, Luffy and Chopper meet Abi, who is looking for her pet Yagara Bull, Aobire, lost during the Aqua Laguna. Luffy accepts the job of finding it.',
      it: 'A Water Seven Rufy e Chopper incontrano Abi, che cerca il suo Yagara Bull, Aobire, smarrito durante l’Acqua Laguna. Rufy accetta di aiutarla a ritrovarlo.',
    },
  },
  {
    episode: 318,
    kind: 'filler',
    chapter: 435,
    title: {
      en: 'Mothers Are Strong! Zoro’s Hectic Household Chores!',
      it: 'Una grande famiglia',
    },
    summary: {
      en: 'Zoro looks for a swordsmith to repair his sword Yubashiri, and a woman’s many children make him their new big brother. He ends up defending the family from a gang of loan sharks.',
      it: 'Zoro cerca uno spadaio per riparare la Yubashiri e Michael, Hoichael e gli altri bambini lo trascinano a casa come nuovo fratello maggiore. Finisce per difendere la famiglia da una banda di usurai.',
    },
  },
  {
    episode: 319,
    kind: 'filler',
    chapter: 435,
    title: {
      en: 'Sanji’s Shock! Mysterious Old Man And His Super Yummy Cooking!',
      it: 'Una sorpresa per Sanji!',
    },
    summary: {
      en: 'Sanji goes shopping with Chimney and Gonbe, who take him to Banbanji, an old cook who knew Zeff. The secret of his flavor is salt produced by the Aqua Laguna.',
      it: 'Sanji fa la spesa con Chimney e Gonbe, che lo portano da Banbanji, un anziano cuoco che conosce Zef. Il segreto del suo sapore è il sale prodotto dall’Acqua Laguna.',
    },
  },
  {
    episode: 326,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'The Mysterious Band of Pirates! Sunny and the Dangerous Trap!',
      it: 'Una misteriosa ciurma di pirati',
    },
    summary: {
      en: 'After leaving Water Seven on the Thousand Sunny, the Straw Hats rescue a damaged ship with no sail or flag. Its crew are impostors who want to hand them over for their bounty.',
      it: 'Dopo avere lasciato Water Seven a bordo della Thousand Sunny, la ciurma soccorre una nave danneggiata, senza vele né bandiera. I suoi marinai sono impostori che vogliono consegnare i pirati per la loro taglia.',
    },
  },
  {
    episode: 327,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'Sunny in a Pinch! Roar, Secret Superspeed Mecha!',
      it: 'Accerchiamento navale',
    },
    summary: {
      en: 'A fleet of what looks like Marine ships surrounds the Straw Hats, a trap set by the Accino Family. They escape towing the damaged ship, and Jiro explains the Phoenix Pirates’ past.',
      it: 'La ciurma è circondata da quelle che sembrano navi della Marina, una trappola della famiglia Accino, e fugge rimorchiando la nave danneggiata. Jiro racconta il passato dei Pirati della Fenice.',
    },
  },
  {
    episode: 328,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'The Dream Sinking in the New World! The Disillusioned Pirate, Puzzle!',
      it: 'Un sogno che affonda',
    },
    summary: {
      en: 'Trapped among moving icebergs, the Straw Hats look for a way out. Puzzle, captain of the Phoenix Pirates, wakes up, and the rope towing his ship is cut, leaving Luffy and Chopper behind.',
      it: 'La ciurma naviga tra gli iceberg in movimento, convinta di essere in trappola. Puzzle si risveglia e ricorda, poi la fune che rimorchia la sua nave si spezza e lascia indietro Rufy e Chopper.',
    },
  },
  {
    episode: 329,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'The Assassins Attack! The Great Battle on Ice Begins!',
      it: 'Tutti pronti per lo scontro sui ghiacci',
    },
    summary: {
      en: 'Nami and Franky find that penguins are moving the icebergs, and the Accino Family’s hunters attack the crew. Zoro stumbles upon Lovely Land, the family’s headquarters.',
      it: 'Nami e Franky scoprono che a spostare gli iceberg sono dei pinguini, mentre i cacciatori di taglie della famiglia Accino attaccano la ciurma. Zoro scopre per caso Lovely Land, il loro quartier generale.',
    },
  },
  {
    episode: 330,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'Desperate Battles for the Straw Hat Crew! Pinning Their Pirate Souls on the Flag',
      it: 'Lotta per la bandiera',
    },
    summary: {
      en: 'Luffy, distracted by the stolen flag, struggles against Brindo, while Franky beats Hockera and Usopp fights Arbell. Lil agrees to lead Robin to Lovely Land.',
      it: 'Rufy fatica a colpire Blindo, mentre Salco e Arabelle puntano a catturare Sanji e Usop. Robin convince la piccola Lil a dirle dove è stata portata la bandiera.',
    },
  },
  {
    episode: 331,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'Stifling to the Max! The Twin’s Magnetic Power Looms',
      it: 'Trottola incandescente!',
    },
    summary: {
      en: 'Salchow and Arbell capture Sanji and Usopp. The twin Campacino arrives to rescue his brother, and Zoro drinks with the Accino Family until the Straw Hats’ Jolly Roger is delivered.',
      it: 'Salco e Arabelle catturano Sanji e Usop. Campaccino raggiunge la nave dei Pirati della Fenice per salvare il fratello Blindo, mentre Rufy scopre che la sua bandiera è a Lovely Land.',
    },
  },
  {
    episode: 332,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'A Mansion in Chaos! An Enraged Don and an Imprisoned Crew',
      it: 'La casa del grande caos',
    },
    summary: {
      en: 'Don Accino reveals the power of his Devil Fruit, which melts any substance, and Zoro is imprisoned with the other captured Straw Hats. Luffy’s fight with Brindo and Campacino ends in a draw.',
      it: 'Zoro affronta Accino, che ha mangiato il frutto Caldo Caldo, ma cade in una botola e finisce in prigione con i compagni. Rufy combatte Blindo e Campaccino, finché i gemelli tornano alla base.',
    },
  },
  {
    episode: 333,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'The Phoenix Returns! The Dream Sworn to Friends on a Jolly Roger',
      it: 'Il ritorno della Fenice!',
    },
    summary: {
      en: 'The freed Straw Hats get outside thanks to Zoro and win their rematches against the Accino Family. Luffy smashes Brindo back into Lovely Land, and Puzzle confronts Campacino.',
      it: 'I prigionieri si fanno guidare da Zoro e si perdono. All’esterno la famiglia Accino affronta Rufy, Chopper e Jiro, finché Chopper e Jiro colpiscono duramente Hockera.',
    },
  },
  {
    episode: 334,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'The Super Hot-Hot Final Battle! Luffy vs. the Scorching Hot Don',
      it: 'Uno scontro ad alte temperature',
    },
    summary: {
      en: 'Luffy fights Don Accino, whose fruit burns him whenever he hits. Puzzle defeats Campacino, and Luffy sends the Don through the wall of his mansion.',
      it: 'Rufy affronta Accino, il cui frutto Caldo Caldo lo ustiona a ogni colpo. Puzzle continua a combattere Campaccino, mentre Chopper e Jiro entrano a Lovely Land per recuperare le bandiere.',
    },
  },
  {
    episode: 335,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'We’ll Be Waiting in the New World! Parting with the Courageous Pirates',
      it: 'Addio a un coraggioso pirata',
    },
    summary: {
      en: 'Luffy defeats Don Accino, and the crew recovers the two stolen flags with Lil’s help. The Accino Family sails away, and Puzzle promises to meet the Straw Hats again.',
      it: 'Rufy e Accino precipitano in un crepaccio pieno di lava, e Rufy si salva allungando le braccia. All’interno di Lovely Land la ciurma recupera le bandiere rubate con l’aiuto di Lil.',
    },
  },
  {
    episode: 336,
    kind: 'filler',
    chapter: 442,
    title: {
      en: 'Go, Chopper Man! Protect the TV Station on the Beach',
      it: 'Chopperman alla riscossa',
    },
    summary: {
      en: 'Chopper Man and Namifia are low on money. Chopper Man is tempted by a rare collectible and teams up with the villain Dr. Usodabada, who plans to take over a TV station.',
      it: 'Chopperman e la sua assistente Namifia sono a corto di soldi. Usodabada attacca un’emittente per reclutare nuovi sottoposti e offre un rarissimo modellino di aereo, che attira Chopperman.',
    },
  },
  {
    after: 344,
    released: '2008-03-01',
    kind: 'film',
    chapter: 450,
    title: {
      en: 'Episode of Chopper Plus: Bloom in Winter, Miracle Sakura',
      it: 'Il miracolo dei ciliegi in fiore',
    },
    summary: {
      en: 'A retelling of the Drum Island story: Nami falls ill and the crew looks for a doctor on a snowy island, where they meet Chopper.',
      it: 'Il racconto della saga di Drum: Nami si ammala e la ciurma cerca un dottore su un’isola innevata, dove incontra Chopper.',
    },
  },
  {
    episode: 354,
    kind: 'mixed',
    chapter: 459,
    title: {
      en: 'I Swear to Go See Him!! Brook and the Cape of Promise!',
      it: 'L’attesa di un amico',
    },
    summary: {
      en: 'Luffy, Usopp, Sanji and Zoro retell how they met Laboon at the Red Line, an added flashback. The canon part is Brook’s duel with a swordsman and Luffy deciding that Brook will join the crew.',
      it: 'Rufy, Usop, Sanji e Zoro raccontano come hanno conosciuto Lovon, un flashback aggiunto. La parte del manga è il duello di Brook con uno spadaccino e la decisione di Rufy di farlo entrare nella ciurma.',
    },
  },
  {
    episode: 382,
    kind: 'filler',
    chapter: 490,
    title: {
      en: 'The Slow-Slow Menace “Silver Fox” Foxy Returns',
      it: 'Una vecchia conoscenza',
    },
    summary: {
      en: 'The Straw Hats relax on Spa Island and meet sisters Lina and Sayo, chased by Foxy’s crew for a notebook of their father’s research. Sayo is then abducted by the island’s owner, Doran.',
      it: 'I Cappello di paglia si rilassano a Spa Island e conoscono le sorelle Rina e Sayo, inseguite dalla ciurma di Foxy per un quaderno di ricerche. Poi Sayo viene rapita dal padrone dell’isola, Doran.',
    },
  },
  {
    episode: 383,
    kind: 'filler',
    chapter: 490,
    title: {
      en: 'The Great Scramble for Treasure Collapse! Spa Island',
      it: 'La caccia al tesoro',
    },
    summary: {
      en: 'Luffy wrecks Spa Island to find Sayo and the crew rescues her from Doran’s cannon. Sayo and Lina later finish their father’s gem and send it to the crew, but Luffy loses it.',
      it: 'Rufy distrugge Spa Island per trovare Sayo e la ciurma la salva dal cannone di Doran. Più tardi Sayo e Rina completano la gemma del padre e la mandano ai pirati, ma Rufy la perde.',
    },
  },
  {
    episode: 384,
    kind: 'filler',
    chapter: 490,
    title: {
      en: 'Brook’s Great Struggle Is The Path to Becoming a True Comrade Rigorous?',
      it: 'Le fatiche di Brook',
    },
    summary: {
      en: 'Brook reads the crew’s journal and tries to help everyone, but drops plates, spills tea on Nami’s map and fills a cannon with soy sauce. Robin tells him to just be himself.',
      it: 'Brook legge il diario di bordo e prova ad aiutare, ma fa cadere i piatti, versa il tè sulla mappa di Nami e riempie un cannone di soia. Robin gli dice di essere se stesso.',
    },
  },
  {
    episode: 406,
    kind: 'filler',
    chapter: 513,
    title: {
      en: 'Feudal Era Side Story - Boss Luffy Appears Again',
      it: 'Il ritorno della guardia Rubber',
    },
    summary: {
      en: 'In an alternate Edo-period Japan, Boss Luffy and his friends enter a portable shrine race while the Thriller company sabotages rivals. They find Brook, who remembers only his name, and their shrine destroyed.',
      it: 'In un Giappone alternativo di epoca Edo, Rufy e gli amici partecipano a una corsa di mikoshi mentre la compagnia Thriller sabota i rivali. Incontrano Brook, che ricorda solo il nome, e il mikoshi distrutto.',
    },
  },
  {
    episode: 407,
    kind: 'filler',
    chapter: 513,
    title: {
      en: 'Feudal Era Side Story - Defeat Thriller Company’s Trap',
      it: 'Il piano della Thriller Company viene sventato',
    },
    summary: {
      en: 'The group rescues Brook from the Thriller company, rebuilds their shrine in the shape of the Thousand Sunny and wins the race. The prize is a pair of panties, and Brook loses his memory again.',
      it: 'Il gruppo salva Brook dalla compagnia Thriller, ricostruisce il mikoshi a forma di Thousand Sunny e vince la corsa. Il premio è un paio di mutandine e Brook perde di nuovo la memoria.',
    },
  },
  {
    episode: 418,
    kind: 'mixed',
    chapter: 523,
    title: {
      en: 'The Friends’ Whereabouts! The Science of Weather and the Mechanical Island!',
      it: 'Nami e la scienza del vento',
    },
    summary: {
      en: 'Nami wakes on Weatheria and learns weather tricks from an old scientist, while Franky lands on a snowy island. On Momonga’s ship, Luffy has a nightmare and Hancock tries to reassure him.',
      it: 'Nami si risveglia a Weatheria e impara trucchi sul meteo da un vecchio scienziato, mentre Franky atterra su un’isola innevata. Sulla nave di Momonga Rufy ha un incubo e Hancock cerca di rassicurarlo.',
    },
  },
  {
    episode: 419,
    kind: 'mixed',
    chapter: 523,
    title: {
      en: 'The Friends’ Whereabouts! An Island of Giant Birds and a Pink Paradise!',
      it: 'Due strane isole',
    },
    summary: {
      en: 'Chopper is tossed around by giant birds and then chased by islanders, while Sanji wakes on an island of women and discovers that the shy woman who tends him is a man.',
      it: 'Chopper viene sballottato da uccelli giganti e poi inseguito dagli abitanti dell’isola, mentre Sanji si sveglia su un’isola di sole donne e scopre che la ragazza timida che lo cura è un uomo.',
    },
  },
  {
    episode: 420,
    kind: 'mixed',
    chapter: 524,
    title: {
      en: 'The Friends’ Whereabouts! Bridging the Islands and Vicious Vegetations!',
      it: 'L’isola disabitata',
    },
    summary: {
      en: 'Robin is hidden by a girl named Soran on Tequila Wolf, an island that is one huge bridge built by slave labor, while Usopp lands among man-eating plants and meets Heracles.',
      it: 'Robin trova rifugio presso una bambina di nome Soran a Tequila Wolf, un enorme ponte costruito da schiavi, mentre Usop atterra tra piante mangiauomini e incontra Hercules.',
    },
  },
  {
    episode: 421,
    kind: 'mixed',
    chapter: 524,
    title: {
      en: 'The Friends’ Whereabouts!',
      it: 'Zoro sull’isola sconosciuta',
    },
    summary: {
      en: 'Zoro lands near Perona, who bandages him and humiliates him, and Brook is mistaken for Satan on Namakura. Marine officers gather at headquarters, and Ace begs Garp to kill him.',
      it: 'Zoro atterra vicino a Perona, che lo cura e lo umilia, e Brook viene scambiato per Satan a Namakura. Gli ufficiali della Marina si radunano al quartier generale e Ace implora Garp di ucciderlo.',
    },
  },
  {
    episode: 426,
    kind: 'filler',
    chapter: 530,
    title: {
      en: 'A Special Presentation Related to the Movie! A Gold Lion’s Ambition on the Move!',
      it: 'Nuove scoperte sull’isola Kansorn',
    },
    summary: {
      en: 'Luffy’s crew chases a giant beetle called Boss to Little East Blue, an island that copies places from East Blue. Elsewhere, an escaped Impel Down prisoner offers the Amigo Pirates a place under his command.',
      it: 'Rufy e la ciurma inseguono il coleottero Boss fino a Little East Blue, che riproduce luoghi dell’East Blue. Altrove un evaso di Impel Down propone ai Pirati di Largo di entrare sotto il suo comando.',
    },
  },
  {
    episode: 427,
    kind: 'filler',
    chapter: 530,
    title: {
      en: 'A Special Presentation Related to the Movie! Little East Blue in Danger!',
      it: 'Attacco a Little East Blue',
    },
    summary: {
      en: 'The crew visits places that remind them of home and Nami meets the Orenami fan club. The Amigo Pirates attack, Luffy beats Corto, then their captain Largo traps him in a net of needles.',
      it: 'La ciurma visita luoghi che ricordano casa e Nami conosce l’Orenami fan club. I Pirati Amigo attaccano, Rufy batte Corto, poi il capitano Largo lo intrappola in una rete di aghi.',
    },
  },
  {
    episode: 428,
    kind: 'filler',
    chapter: 530,
    title: {
      en: 'A Special Presentation Related to the Movie!',
      it: 'Rubber e la difesa di Boss',
    },
    summary: {
      en: 'Largo traps Zoro and Sanji in nets made from his own body. Boss tries to surrender to protect the village and Luffy refuses. Boss then molts and frees the crew, and they prepare to fight.',
      it: 'Largo intrappola Zoro e Sanji in reti fatte con il suo corpo. Boss prova a consegnarsi per salvare il villaggio e Rufy rifiuta. Poi Boss fa la muta e libera la ciurma, pronta a combattere.',
    },
  },
  {
    episode: 429,
    kind: 'filler',
    chapter: 530,
    title: {
      en: 'A Special Presentation Related to the Movie!',
      it: 'La sconfitta di Largo',
    },
    summary: {
      en: 'Luffy defeats Largo with Gear Third while Nami leads the villagers through tunnels to ambush the Amigo Pirates. Luffy and Boss rematch, and Boss turns out to be an insect created by an escaped prisoner.',
      it: 'Rufy sconfigge Largo con il Gear Third mentre Nami guida gli abitanti nei tunnel per sorprendere i Pirati Amigo. Poi Rufy e Boss si sfidano, e Boss risulta un insetto creato da un evaso.',
    },
  },
  {
    after: 429,
    released: '2009-12-12',
    kind: 'film',
    chapter: 530,
    title: {
      en: 'One Piece Film: Strong World',
      it: 'Avventura sulle isole volanti',
    },
    summary: {
      en: 'News arrives that East Blue is in danger, and the crew heads home. A flying pirate ship appears in the sky, and its legendary captain abducts Nami for her navigation skills.',
      it: 'Arriva la notizia che l’East Blue è in pericolo e la ciurma torna a casa. Dal cielo compare una nave pirata volante, e il suo leggendario capitano rapisce Nami per le sue doti di navigatrice.',
    },
  },
  {
    episode: 453,
    kind: 'mixed',
    chapter: 556,
    title: {
      en: 'The Crew’s Whereabouts! The Weatheria Report and the Cyborg Animals!',
      it: 'Avventure parallele',
    },
    summary: {
      en: 'Nami helps an old scientist earn money by making rain on Weatheria, and Franky flees cyborg animals on Karakuri Island and finds an abandoned lab. Luffy’s ship heading to Marine Headquarters frames the episode.',
      it: 'Nami aiuta un vecchio scienziato a guadagnare facendo piovere a Weatheria, mentre Franky scappa da animali cyborg e trova un laboratorio abbandonato. La nave di Rufy diretta al quartier generale della Marina fa da cornice.',
    },
  },
  {
    episode: 454,
    kind: 'mixed',
    chapter: 556,
    title: {
      en: 'The Crew’s Whereabouts! A Cheeper of Giant Birds and a Pink Showdown!',
      it: 'Nostalgia degli amici',
    },
    summary: {
      en: 'Sanji agrees to fight Caroline, the queen’s stand-in, in exchange for a boat off the island, loses and becomes an okama. Chopper cares for a giant baby bird that fell from its nest.',
      it: 'Sanji accetta di sfidare Caroline, la sostituta della regina, in cambio di una barca per lasciare l’isola, perde e diventa uno dei trans-formati. Chopper si prende cura di un pulcino gigante caduto dal nido.',
    },
  },
  {
    episode: 455,
    kind: 'mixed',
    chapter: 556,
    title: {
      en: 'The Crew’s Whereabouts! Revolutionaries and the Gorging Forest’s Trap!',
      it: 'La prigionia di Robin',
    },
    summary: {
      en: 'Robin is interrogated in the Tequila Wolf prison tower until the Revolutionary Army frees her and the other prisoners. Usopp, chased by man-eating plants, is fed by Heracles and escapes a giant plant.',
      it: 'Robin viene interrogata nella torre prigione di Tequila Wolf finché i rivoluzionari liberano lei e gli altri prigionieri. Usop, inseguito da piante mangiauomini, viene sfamato da Hercules e sfugge a una pianta gigante.',
    },
  },
  {
    episode: 456,
    kind: 'mixed',
    chapter: 560,
    title: {
      en: 'The Friends’ Whereabouts! A Huge Tomb and the Panty Debt!',
      it: 'Strane presenze',
    },
    summary: {
      en: 'Zoro and Perona find an enormous grave marker on their way to the sea, while Brook decides to stay on Namakura until he repays the debt he owes the islanders.',
      it: 'Zoro e Perona, diretti al mare, trovano una gigantesca croce di legno, mentre Brook decide di restare a Namakura finché non avrà saldato il debito con gli abitanti.',
    },
  },
  {
    episode: 457,
    kind: 'recap',
    chapter: 560,
    title: {
      en: 'A Special Retrospective Before Marineford! The Vow of the Brotherhood!',
      it: 'Legame tra fratelli',
    },
    summary: {
      en: 'Luffy tells Jinbe about his childhood with Ace, their reunion in Alabasta, the Vivre Card and meeting Teach at Jaya. Ace, awaiting execution, recalls his own encounter with Blackbeard.',
      it: 'Rufy racconta a Jinbe l’infanzia con Ace, il loro incontro ad Alabasta, la Vivre Card e l’incontro con Teach a Mock Town. Ace, in attesa dell’esecuzione, ricorda il suo scontro con Barbanera.',
    },
  },
  {
    episode: 458,
    kind: 'recap',
    chapter: 560,
    title: {
      en: 'A Special Retrospective Before Marineford! The Three Navy Admirals Come Together!',
      it: 'I tre Ammiragli',
    },
    summary: {
      en: 'While Luffy sails toward the Marine base, the Marines call up the Shichibukai and the three admirals to prepare for Whitebeard’s attack. Each introduction comes with recap clips of that character’s earlier appearances.',
      it: 'Mentre Rufy naviga verso la base della Marina, vengono convocati i membri della Flotta dei sette e i tre ammiragli per l’attacco di Barbabianca. Ogni presentazione è accompagnata da scene di repertorio del personaggio.',
    },
  },
  {
    episode: 489,
    kind: 'mixed',
    chapter: 580,
    title: {
      en: 'Here Comes Shanks! The War of the Best is Finally Over!',
      it: 'La guerra è finita',
    },
    summary: {
      en: 'Law’s crew takes Luffy and Jinbe into their submarine, Buggy learns Shanks tricked him, and Shanks stands up to Blackbeard. Shanks asks for Ace and Whitebeard to be buried and the war ends.',
      it: 'Law porta Rufy e Jinbe nel sottomarino, Bagy scopre che Shanks lo ha ingannato con una mappa e Shanks affronta Barbanera. Shanks chiede la sepoltura di Ace e Barbabianca, e la guerra finisce.',
    },
  },
  {
    after: 489,
    released: '2011-03-19',
    kind: 'film',
    chapter: 580,
    title: {
      en: 'One Piece 3D: Straw Hat Chase',
      it: 'Caccia al cappello di paglia',
    },
    summary: {
      en: 'Luffy wakes up to find his straw hat missing, and the whole crew searches for it. A bird carrying the hat sets off a chase involving Marines and Sea Kings.',
      it: 'Rufy non trova più il cappello di paglia e tutta la ciurma lo cerca. Un uccello con il cappello nel becco dà il via a un inseguimento tra marine e re del mare.',
    },
  },
  {
    episode: 492,
    kind: 'filler',
    chapter: 582,
    title: {
      en: 'The Strongest Tag-Team! Luffy and Toriko’s Hard Struggle!',
      it: 'Il duo più forte! Dura lotta, Rufy e Toriko!',
    },
    summary: {
      en: 'Luffy’s crew runs low on food and lands on Hungry-La Island, where Luffy and Toriko team up to save Nami and Komatsu from the Cocoalas.',
      it: 'Alla ciurma di Rufy sta finendo il cibo e approda sull’isola Hungry-La, dove Rufy e Toriko fanno squadra per salvare Nami e Komatsu dai Cocoala.',
    },
  },
  {
    episode: 497,
    kind: 'mixed',
    chapter: 585,
    title: {
      en: 'Leaving the Dadan Family for Good!? The Kids’ Hideout Has Been Built!',
      it: 'Tre bambini indipendenti',
    },
    summary: {
      en: 'Garp overhears Luffy, Ace and Sabo saying they want to be pirates and attacks them. The three brothers run away and build a hideout that looks like a pirate ship.',
      it: 'Garp sente Rufy, Ace e Sabo dire di voler diventare pirati e li attacca. I tre fratelli fuggono e costruiscono un rifugio che sembra una nave pirata.',
    },
  },
  {
    episode: 498,
    kind: 'mixed',
    chapter: 585,
    title: {
      en: 'Luffy Becoming an Apprentice?! A Man Who Fought Against the King of the Pirates!',
      it: 'Rubber apprendista pirata',
    },
    summary: {
      en: 'Luffy, Ace and Sabo lose their catch to a tiger and then flee a bear until Naguri, a former pirate captain, drives it off with Haki. He tells them he once fought the Pirate King.',
      it: 'Rufy, Ace e Sabo perdono la preda a causa di una tigre e poi scappano da un orso finché Naguri, ex capitano pirata, lo scaccia con l’Ambizione. Racconta di aver affrontato il Re dei pirati.',
    },
  },
  {
    episode: 499,
    kind: 'filler',
    chapter: 585,
    title: {
      en: 'The Battle against the Big Tiger! Who is Going to be Captain?!',
      it: 'La tigre gigante',
    },
    summary: {
      en: 'Ace, Sabo and Luffy help Naguri build a pirate ship, then beat the big tiger and say goodbye to him. Meanwhile Bluejam’s crew finds Sabo.',
      it: 'Ace, Sabo e Rufy aiutano Naguri a costruire una nave pirata, poi sconfiggono la grande tigre e salutano Naguri. Intanto la ciurma di Bluejam trova Sabo.',
    },
  },
  {
    episode: 506,
    kind: 'filler',
    chapter: 589,
    title: {
      en: 'Straw Hats in Shock! The Bad News Has Reached Them!',
      it: 'Cattive notizie',
    },
    summary: {
      en: 'Zoro fights Humandrills until a figure scares them off, while the other crew members on their separate islands each read a newspaper and learn of Ace’s death.',
      it: 'Zoro affronta degli umandrilli finché una figura li mette in fuga, mentre gli altri della ciurma, ognuno sulla propria isola, leggono un giornale e scoprono la morte di Ace.',
    },
  },
  {
    episode: 520,
    kind: 'mixed',
    chapter: 600,
    title: {
      en: 'Big Guns Assembled! The Danger of the Fake Straw Hats!',
      it: 'La minaccia',
    },
    summary: {
      en: 'Brook finishes his concert and escapes the Marines who come to arrest him. Usopp, Chopper, Robin and Nami reunite on the Thousand Sunny, where Franky shows them his new body.',
      it: 'Brook finisce il concerto e sfugge ai marine venuti ad arrestarlo. Usop, Chopper, Robin e Nami si ritrovano sulla Thousand Sunny, dove Franky mostra il suo nuovo corpo.',
    },
  },
  {
    episode: 542,
    kind: 'filler',
    chapter: 622,
    title: {
      en: 'A Team is Formed! Save Chopper',
      it: 'Squadra di soccorso! Salvare Chopper',
    },
    summary: {
      en: 'Chopper falls ill with Deep Sea Fever and the Straw Hats join Toriko and Komatsu on Tou-Chuka Island, climbing the floors of the Mush Room to gather the ingredients of a cure.',
      it: 'Chopper si ammala e i Cappello di paglia raggiungono l’isola To-Chuka con Toriko e Komatsu, per salire i piani della torre a forma di fungo e raccogliere gli ingredienti della cura.',
    },
  },
  {
    after: 560,
    released: '2012-08-25',
    kind: 'special',
    chapter: 639,
    title: {
      en: 'Episode of Nami: Tears of a Navigator and the Bonds of Friendship',
      it: 'Episodio di Nami - Le lacrime di un navigatore e il legame degli amici',
    },
    summary: {
      en: 'A shortened retelling of the Arlong Park story: Nami leaves the crew to return to her village, where the fish-man pirate Arlong forces her to work for him.',
      it: 'Un riassunto della saga di Arlong Park: Nami lascia la ciurma e torna al suo villaggio, dove il pirata uomo-pesce Arlong la costringe a lavorare per lui.',
    },
  },
  {
    episode: 574,
    kind: 'mixed',
    chapter: 655,
    title: {
      en: 'To the New World! Heading for the Ultimate Sea!',
      it: 'Verso il Nuovo Mondo',
    },
    summary: {
      en: 'On the way to the New World, Luffy, Zoro and Usopp go fishing and get pulled into a whirlpool. They end up among island whales that carry them to the surface, among Marine ships.',
      it: 'Verso il Nuovo Mondo, Rufy, Zoro e Usop vanno a pesca e vengono trascinati in un vortice. Finiscono tra balene isola che li portano in superficie, in mezzo alle navi della Marina.',
    },
  },
  {
    episode: 575,
    kind: 'filler',
    chapter: 655,
    title: {
      en: 'Z’s Ambition! Lily the Little Giant!',
      it: 'La piccola gigante Lily!',
    },
    summary: {
      en: 'In a sea of mirages and wild weather, the Straw Hats find their food vanishing. They catch the thief, a tiny girl named Lily who is really a giant, and she befriends the crew.',
      it: 'In un mare di miraggi e meteo impazzito, il cibo dei Cappello di paglia sparisce. La ladra è una ragazzina di nome Lily, in realtà una gigante, che diventa amica della ciurma.',
    },
  },
  {
    episode: 576,
    kind: 'filler',
    chapter: 655,
    title: {
      en: 'Z’s Ambition! A Dark and Powerful Army!',
      it: 'Il misterioso corpo della Neomarina',
    },
    summary: {
      en: 'The crew plans to free Lily’s father, Panz Fry, from the Marines. Shuzo of the Neo Marines attacks them and Panz Fry, and Luffy and Momonga prepare to face him.',
      it: 'La ciurma elabora un piano per liberare Panz Fry, il padre di Lily, dalla Marina. Shuzo della Neo Marina attacca tutti, e Rufy e Momonga si preparano ad affrontarlo.',
    },
  },
  {
    after: 576,
    released: '2012-12-15',
    kind: 'film',
    chapter: 655,
    title: { en: 'One Piece Film: Z', it: 'One Piece Film: Z' },
    summary: {
      en: 'Z, a former Marine admiral, steals the Dyna Stones, weapons said to rival the Ancient Weapons, and the Straw Hats find themselves standing in his way.',
      it: 'Z, ex ammiraglio della Marina, ruba le pietre Dyna, armi che si dice rivaleggino con le Armi Antiche, e i Cappello di paglia si ritrovano sulla sua strada.',
    },
  },
  {
    after: 576,
    released: '2012-12-15',
    kind: 'special',
    chapter: 655,
    title: {
      en: 'Episode of Luffy: Hand Island Adventure',
      it: 'Episodio di Rufy - Avventura sull’isola Hand',
    },
    summary: {
      en: 'Escaping Marine warships with a Coup de Burst, the Thousand Sunny crash-lands on Hand Island, where Luffy befriends a wax sculptor while Franky repairs the ship.',
      it: 'Sfuggita alle navi della Marina con un Coup de Burst, la Thousand Sunny precipita sull’isola Hand, dove Rufy fa amicizia con uno scultore di cera mentre Franky ripara la nave.',
    },
  },
  {
    episode: 577,
    kind: 'filler',
    chapter: 655,
    title: {
      en: 'Z’s Ambition! A Great and Desperate Escape Plan!',
      it: 'Un grandioso piano di fuga',
    },
    summary: {
      en: 'Luffy fights Shuzo while Zoro fights Momonga. Nami spots a Thrust Up Stream, and the crew escapes with Lily and her father using Franky’s Coup de Burst.',
      it: 'Rufy combatte contro Shuzo mentre Zoro affronta Momonga. Nami individua una corrente Thrust Up Stream e la ciurma fugge con Lily e suo padre usando il Coup de Burst di Franky.',
    },
  },
  {
    episode: 578,
    kind: 'filler',
    chapter: 655,
    title: { en: 'Z’s Ambition! Luffy vs. Shuzo!', it: 'Rubber contro Shuzo' },
    summary: {
      en: 'Shuzo orders a suicide attack and fights Luffy, who wins after Lily grows him into a giant. Ain then reports to Z that Shuzo has lost.',
      it: 'Shuzo ordina un attacco suicida e combatte contro Rufy, che vince dopo che Lily lo fa diventare gigante. Poi Ain riferisce a Zephyr che Shuzo ha perso.',
    },
  },
  {
    episode: 590,
    kind: 'filler',
    chapter: 664,
    title: {
      en: 'History’s Strongest Collaboration vs. Glutton of the Sea!',
      it: 'La più forte collaborazione della storia contro il ghiottone del mare',
    },
    summary: {
      en: 'One Piece, Toriko and Dragon Ball Z characters enter a gourmet tournament for rare meat, which Mr. Satan wins. The tournament was a lure for a creature called Akami, which drains their energy and flees.',
      it: 'I personaggi di One Piece, Toriko e Dragon Ball partecipano a un torneo gastronomico per una carne rara, che vince Mister Satan. Il torneo è un’esca per Akami, creatura che ne succhia le energie.',
    },
  },
  {
    after: 608,
    released: '2013-08-24',
    kind: 'special',
    chapter: 682,
    title: {
      en: 'Episode of Merry: The Tale of One More Friend',
      it: 'Episodio della Merry: la storia di un’altra amica',
    },
    summary: {
      en: 'Usopp and Chopper tell Brook the story of their old ship, the Going Merry, from Syrup Village to the days of Water Seven and Enies Lobby, while out at sea in the Mini Merry II.',
      it: 'Usop e Chopper raccontano a Brook la storia della loro vecchia nave, la Going Merry, dal Villaggio di Syrup fino a Water Seven ed Enies Lobby, a bordo della Mini Merry 2.',
    },
  },
  {
    episode: 625,
    kind: 'mixed',
    chapter: 699,
    title: {
      en: 'Intense! Aokiji vs. Doflamingo!',
      it: 'Scontro ad alta tensione! Aokiji vs Do Flamingo',
    },
    summary: {
      en: 'The canon part is Aokiji freezing Doflamingo to stop him killing Smoker. The added part follows the Thousand Sunny, where Usopp and Chopper fear an attack and a mysterious figure watches the ship.',
      it: 'La parte del manga è Aokiji che congela Do Flamingo per impedirgli di uccidere Smoker. Quella aggiunta segue la Thousand Sunny, dove Usop e Chopper temono un attacco e una figura misteriosa osserva la nave.',
    },
  },
  {
    episode: 626,
    kind: 'filler',
    chapter: 699,
    title: {
      en: 'Caesar Goes Missing! The Pirate Alliance Makes a Sortie!',
      it: 'Il rapimento di Caesar! L’irruzione dell’alleanza pirata',
    },
    summary: {
      en: 'Leaving Punk Hazard, the Straw Hats are attacked at night by sea creatures serving Breed, who kidnaps Caesar. Luffy, Chopper and Law chase him in the submarine.',
      it: 'Lasciata Punk Hazard, i Cappello di paglia vengono attaccati di notte da creature marine al servizio di Breed, che rapisce Caesar. Rufy, Chopper e Law lo inseguono con il sottomarino.',
    },
  },
  {
    episode: 627,
    kind: 'filler',
    chapter: 699,
    title: {
      en: 'Luffy Dies at Sea?! The Pirate Alliance Comes Apart!',
      it: 'La sconfitta dell’alleanza pirata!? Luffy in pericolo',
    },
    summary: {
      en: 'Breed plans to turn all humans into animals using Caesar’s artificial fruit and makes Luffy and Law fight. A kung-fu dugong takes their place and punches them off the ship into the sea.',
      it: 'Breed vuole trasformare tutti gli umani in animali con il frutto artificiale di Caesar e costringe Rufy e Law a combattere. Un dugongo kung-fu li affronta al loro posto e li scaraventa in mare.',
    },
  },
  {
    episode: 628,
    kind: 'mixed',
    chapter: 700,
    title: {
      en: 'A Major Turnaround! Luffy’s Angry Iron Fist Strikes!',
      it: 'La disfatta di Breed! Il contrattacco dell’alleanza pirata',
    },
    summary: {
      en: 'Luffy and the dugong defeat Breed after Law explains how he beat his power. The canon part is the news of Doflamingo’s resignation, which reaches the Sunny at the end.',
      it: 'Rufy e il dugongo sconfiggono Breed dopo che Law spiega come ha neutralizzato il suo potere. La parte del manga è la notizia delle dimissioni di Do Flamingo, che arriva alla Sunny alla fine.',
    },
  },
  {
    episode: 633,
    kind: 'mixed',
    chapter: 704,
    title: {
      en: 'A Formidable, Unknown Warrior! Here Comes Lucy!',
      it: 'Lucy! Il guerriero sconosciuto',
    },
    summary: {
      en: 'Luffy registers for the tournament as “Lucy” and knocks out Spartan in the waiting room, as in the manga. The anime adds scenes with Franky and the start of Block A.',
      it: 'Rufy si iscrive al torneo come “Lucy” e mette al tappeto Spartan in sala d’attesa, come nel manga. L’anime aggiunge scene con Franky e l’inizio del blocco A.',
    },
  },
  {
    episode: 653,
    kind: 'mixed',
    chapter: 726,
    title: {
      en: 'A Decisive Battle! Giolla vs. the Straw Hats!',
      it: 'Scontro decisivo! Jora vs la ciurma di Cappello di Paglia',
    },
    summary: {
      en: 'Doflamingo tells Law how the World Government began, while Brook and Nami beat Giolla aboard the Sunny. The anime stretches that fight, with Giolla turning into an entity of art.',
      it: 'Do Flamingo racconta a Law le origini del Governo Mondiale, mentre Brook e Nami sconfiggono Jora sulla Sunny. L’anime allunga lo scontro, con Jora trasformata in una creatura d’arte.',
    },
  },
  {
    episode: 657,
    kind: 'mixed',
    chapter: 731,
    title: {
      en: 'The Most Violent Fighter! Logan vs. Rebecca!',
      it: 'Il guerriero più spietato! Logan vs Rebecca',
    },
    summary: {
      en: 'Bartolomeo looks for Luffy while the defeated gladiators are dropped into an underground dump. Rebecca fights Rolling Logan, and the anime has her push him out of the ring with Acilia’s help.',
      it: 'Bartolomeo cerca Rufy mentre i gladiatori sconfitti finiscono in una discarica sotterranea. Rebecca affronta Rolling Logan e nell’anime lo spinge fuori dal ring con l’aiuto di Acilia.',
    },
  },
  {
    after: 658,
    released: '2014-08-30',
    kind: 'special',
    chapter: 731,
    title: { en: '3D2Y', it: '3D2Y' },
    summary: {
      en: 'During the two years of training, Luffy is with Rayleigh when Hancock’s sisters are kidnapped by Byrnndi World. Luffy and Hancock set out to confront him.',
      it: 'Durante i due anni di allenamento, Rufy è con Rayleigh quando le sorelle di Hancock vengono rapite da Byrnndi World. Rufy e Hancock partono per affrontarlo.',
    },
  },
  {
    episode: 679,
    kind: 'mixed',
    chapter: 745,
    title: {
      en: 'Dashing onto the Scene! The Chief of Staff of the Revolutionary Army, Sabo!',
      it: 'Arriva Sabo! Il capo di stato maggiore dell’Armata rivoluzionaria',
    },
    summary: {
      en: 'Sabo introduces himself to Rebecca and explains why the Revolutionary Army is in Dressrosa, while Kyros fights through the palace. Doflamingo reveals he is alive and turns to the Birdcage.',
      it: 'Sabo si presenta a Rebecca e spiega perché i rivoluzionari sono a Dressrosa, mentre Kyros avanza nel palazzo. Do Flamingo rivela di essere vivo e ricorre alla gabbia per uccelli.',
    },
  },
  {
    episode: 690,
    kind: 'mixed',
    chapter: 753,
    title: {
      en: 'A United Front! Luffy’s Breakthrough to the Victory!',
      it: 'Fronte compatto - Luffy verso la vittoria',
    },
    summary: {
      en: 'The colosseum fighters face the Donquixote officers together, and the dwarves in the SMILE factory learn they were tricked and start to fight. Bellamy asks Doflamingo about the assassin sent after him.',
      it: 'I combattenti del colosseo affrontano insieme gli ufficiali di Do Flamingo, mentre i nani della fabbrica di Smile scoprono l’inganno e combattono. Bellamy interroga Do Flamingo sull’assassino mandato contro di lui.',
    },
  },
  {
    after: 705,
    released: '2015-08-22',
    kind: 'special',
    chapter: 766,
    title: {
      en: 'Episode of Sabo: The Three Brothers’ Bond - The Miraculous Reunion and the Inherited Will',
      it: 'Episodio di Sabo: il legame di tre fratelli - Una riunione miracolosa e la volontà ereditata',
    },
    summary: {
      en: 'While investigating Dressrosa, Sabo remembers his childhood with Luffy and Ace, as Luffy enters the Corrida Colosseum tournament to win his late brother’s Devil Fruit.',
      it: 'Mentre indaga su Dressrosa, Sabo ripensa alla sua infanzia con Rufy e Ace, e Rufy partecipa al torneo del Colosseo Corrida per ottenere il frutto del diavolo del fratello scomparso.',
    },
  },
  {
    after: 721,
    released: '2015-12-12',
    kind: 'recap',
    chapter: 780,
    title: {
      en: 'Long Ring Long Land Arc Abridged',
      it: 'Saga di Long Ring Long Land in versione ridotta',
    },
    summary: {
      en: 'A condensed retelling of the Long Ring Long Land story: Foxy challenges the crew to a Davy Back Fight, with a Donut Race, a Groggy Ring match and a duel between captains.',
      it: 'Un riassunto condensato della saga di Long Ring Long Land: Foxy sfida la ciurma a un Davy Back Fight, con una Donut Race, una partita di Groggy Ring e un duello tra i capitani.',
    },
  },
  {
    after: 722,
    released: '2015-12-19',
    kind: 'special',
    chapter: 781,
    title: { en: 'Adventure of Nebulandia', it: 'Avventura a Nebulandia' },
    summary: {
      en: 'The Marines hatch a plan to eliminate the Straw Hats, who are lured to Kinoko Island by Foxy’s crew, now with new members, for another Davy Back Fight.',
      it: 'La Marina escogita un piano per eliminare i Cappello di paglia, attirati su un’isola dalla ciurma di Foxy, ora con nuovi membri, per un altro Davy Back Fight.',
    },
  },
  {
    episode: 731,
    kind: 'mixed',
    chapter: 789,
    title: {
      en: 'As Long as We Breathe! Stop the Deadly Birdcage!',
      it: 'Fino all’ultimo respiro. Fermare la gabbia per uccelli!',
    },
    summary: {
      en: 'Marines and citizens help push back the Birdcage, and it briefly stops. Viola attacks Doflamingo and is beaten, then he controls Rebecca. The anime adds detail to Issho’s arrival.',
      it: 'Marine e cittadini aiutano a spingere indietro la gabbia, che si ferma per un attimo. Viola attacca Do Flamingo e perde, poi lui controlla Rebecca. L’anime aggiunge dettagli sull’arrivo di Issho.',
    },
  },
  {
    episode: 737,
    kind: 'mixed',
    chapter: 794,
    title: {
      en: 'The Birth of the Legend! The Adventures of the Revolutionary Warrior Sabo!',
      it: 'Sabo - La leggenda di un rivoluzionario!',
    },
    summary: {
      en: 'The Straw Hats rest at Kyros’s house, where Sabo arrives and tells them about his childhood with Luffy and Ace. Much of the episode is anime filler, with Oda working on its script.',
      it: 'I Cappello di Paglia riposano a casa di Kyros, dove arriva Sabo, che racconta la sua infanzia con Rufy e Ace. Gran parte dell’episodio è riempitivo dell’anime, con la collaborazione di Oda alla sceneggiatura.',
    },
  },
  {
    episode: 738,
    kind: 'mixed',
    chapter: 795,
    title: {
      en: 'The Brothers’ Bond! The Untold Story Behind Luffy and Sabo’s Reunion!',
      it: 'Luffy e Sabo - Due fratelli di nuovo insieme',
    },
    summary: {
      en: 'Sabo tells how he regained his memory and met Luffy again. Fujitora decides by a dice roll not to arrest the Straw Hats that night, and Riku Doldo III speaks with Rebecca.',
      it: 'Sabo racconta come ha recuperato la memoria e ritrovato Rufy. Fujitora decide con un dado di non arrestare i Cappello di Paglia quella notte, e Riku Dold III parla con Rebecca.',
    },
  },
  {
    after: 746,
    released: '2016-06-20',
    kind: 'recap',
    chapter: 801,
    title: {
      en: 'One Piece Characters Log',
      it: 'Il registro dei personaggi di One Piece',
    },
    summary: {
      en: 'A series of recap episodes, each opened by Bartolomeo and dedicated to one Straw Hat, with a look back at their notable scenes and their dream.',
      it: 'Una serie di episodi riassuntivi, ognuno aperto da Bartolomeo e dedicato a un Cappello di paglia, con le sue scene più importanti e il suo sogno.',
    },
  },
  {
    episode: 747,
    kind: 'filler',
    chapter: 802,
    title: {
      en: 'The Silver Fortress! Luffy and Barto’s Great Adventure!',
      it: 'Grande avventura. Luffy, Bartolomeo e la fortezza d’argento',
    },
    summary: {
      en: 'Luffy and Bartolomeo are lured by a piece of meat and captured by the Sweet Pirates, who take them to Silver Mine. Luffy is sealed in a silver ball and Bartolomeo mines ore.',
      it: 'Rufy e Bartolomeo vengono attirati da un pezzo di carne e catturati dai Pirati Sweet, che li portano a Silver Mine. Rufy è chiuso in una sfera d’argento e Bartolomeo lavora in miniera.',
    },
  },
  {
    episode: 748,
    kind: 'filler',
    chapter: 802,
    title: {
      en: 'An Underground Maze! Luffy vs. the Tram Human!',
      it: 'I prigionieri della miniera - Luffy vs Averon',
    },
    summary: {
      en: 'Aveyron, a subordinate of Bill who turns into a mine cart, attacks Luffy, Bartolomeo and Desire underground. They find enslaved miners, and Luffy breaks free of his silver ball and beats Aveyron with Bartolomeo.',
      it: 'Averon, un sottoposto di Bill che si trasforma in carrello minerario, attacca Rufy, Bartolomeo e Desire nel sottosuolo. Trovano dei minatori schiavizzati, e Rufy si libera dalla sfera d’argento e batte Averon con Bartolomeo.',
    },
  },
  {
    episode: 749,
    kind: 'filler',
    chapter: 802,
    title: {
      en: 'The Sword Technique Heats Up! Law and Zoro Finally Appear!',
      it: 'Lama incandescente - Entra in scena Zoro',
    },
    summary: {
      en: 'Luffy, Bartolomeo and Desire head for the surface of Silver Mine and are shelled by Peseta. Kin’emon helps them out, Zoro defeats Peseta, and then Bill appears in front of them.',
      it: 'Rufy, Bartolomeo e Desire salgono verso la superficie di Silver Mine e vengono presi a cannonate da Peseta. Kin’emon li aiuta, Zoro sconfigge Peseta e poi Bill compare davanti a loro.',
    },
  },
  {
    after: 749,
    released: '2016-07-16',
    kind: 'special',
    chapter: 802,
    title: { en: 'Heart of Gold', it: 'Heart of Gold' },
    summary: {
      en: 'Olga, the only one who knows where the Pure Gold is hidden, flees the Marines and the pirate Treasure, and boards the Straw Hats’ ship. Together they set out for the lost island of Alchemi.',
      it: 'Olga, l’unica a sapere dove si trova l’oro puro, fugge dalla Marina e dal pirata Treasure e sale a bordo della nave dei Cappello di paglia, diretti all’isola perduta di Alchemi.',
    },
  },
  {
    episode: 750,
    kind: 'filler',
    chapter: 802,
    title: {
      en: 'A Desperate Situation! Luffy Fights a Battle in Extreme Heat!',
      it: 'Situazione disperata - Scontro finale a Silver Mine',
    },
    summary: {
      en: 'Luffy beats Bill with Gear Second and Gear Third, even after Bill swallows ore and grows into a giant. Silver Mine sinks, and the group escapes aboard Desire’s boat.',
      it: 'Rufy sconfigge Bill con il Gear Second e il Gear Third, anche dopo che Bill ingoia della roccia e diventa un gigante. Silver Mine affonda e il gruppo fugge sul mezzo di Desire.',
    },
  },
  {
    after: 750,
    released: '2016-07-23',
    kind: 'film',
    chapter: 802,
    title: { en: 'One Piece Film: Gold', it: 'One Piece Film: Gold' },
    summary: {
      en: 'The Straw Hats reach Gran Tesoro, a giant city of entertainment and casinos, and meet its ruler Gild Tesoro, whose money has won over pirates, Marines and even the World Government.',
      it: 'I Cappello di paglia raggiungono Gran Tesoro, la nave dell’intrattenimento più grande al mondo, e conoscono il suo proprietario Gild Tesoro, che con il denaro si è guadagnato pirati, marine e persino il Governo Mondiale.',
    },
  },
  {
    episode: 751,
    kind: 'mixed',
    chapter: 802,
    title: {
      en: 'Curtain-up on a New Adventure! Arriving at the Phantom Island, Zou!',
      it: 'Una nuova avventura - La leggendaria isola di Zo!',
    },
    summary: {
      en: 'The canon part is a Marine briefing with Kizaru and the Barto Club’s ship reaching an island in the fog. The added part is Bartolomeo telling how the Straw Hats came together.',
      it: 'La parte canonica è un rapporto della Marina con Kizaru e la nave di Bartolomeo che raggiunge un’isola nella nebbia. L’aggiunta è Bartolomeo che racconta come si è formata la ciurma.',
    },
  },
  {
    episode: 775,
    kind: 'filler',
    chapter: 821,
    title: {
      en: 'Save Zunesha! The Straw Hat’s Rescue Operation!',
      it: 'Salvare Zunisha - Il piano della ciurma di Cappello di Paglia!',
    },
    summary: {
      en: 'The Straw Hats and the Mink Tribe treat Zunesha’s injured leg, and the crew saves the ships from a huge storm cloud. Luffy then packs for Big Mom’s territory, and Carrot sets off with him.',
      it: 'I Cappello di Paglia e i visoni curano la gamba ferita di Zunisha, e la ciurma salva le navi da un uragano. Poi Rufy prepara il viaggio verso Big Mom, e Carrot parte con lui.',
    },
  },
  {
    episode: 777,
    kind: 'mixed',
    chapter: 823,
    title: {
      en: 'To the Reverie! Princess Vivi and Princess Shirahoshi!',
      it: 'Verso il Reverie - La principessa Bibi e la principessa Shirahoshi',
    },
    summary: {
      en: 'Vivi sails from Alabasta for the royal summit and recalls her adventure with the Straw Hats, while Shirahoshi is persuaded to attend. On the Sunny, the crew finds Carrot aboard in secret.',
      it: 'Bibi parte da Alabasta per il vertice dei reali e ricorda la sua avventura con i Cappello di Paglia, mentre Shirahoshi viene convinta a partecipare. Sulla Sunny la ciurma trova Carrot a bordo.',
    },
  },
  {
    episode: 778,
    kind: 'mixed',
    chapter: 823,
    title: {
      en: 'To the Reverie! Rebecca and the Sakura Kingdom!',
      it: 'Verso il Reverie - Rebecca e il regno di Sakura',
    },
    summary: {
      en: 'Carrot asks to stay with the Sanji retrieval team and Luffy lets her. Kureha forces Dalton to take her to the royal summit, and Wapol recalls his rise to power.',
      it: 'Carrot chiede di restare con la squadra di recupero di Sanji e Rufy accetta. Kureha costringe Dolton a portarla al vertice dei reali, e Wapol ricorda la sua ascesa.',
    },
  },
  {
    episode: 780,
    kind: 'filler',
    chapter: 824,
    title: {
      en: 'A Hungry Front! Luffy and the Navy Rookies!',
      it: 'Senza provviste. Luffy e le reclute della marina!',
    },
    summary: {
      en: 'Starving on the way to Big Mom’s territory, Luffy’s team lands on Fron Island and takes Marine uniforms to eat in the base cafeteria. A new captain named Grount recognises Luffy and prepares to fight.',
      it: 'Affamata in viaggio verso Big Mom, la squadra di Rufy sbarca sull’isola di Fron e prende divise della Marina per mangiare nella mensa. Un nuovo capitano, Grount, riconosce Rufy e si prepara a combattere.',
    },
  },
  {
    episode: 781,
    kind: 'filler',
    chapter: 824,
    title: {
      en: 'The Implacable Three! A Big Chase After the Straw Hats!',
      it: 'I tre implacabili. Il grande inseguimento della ciurma di Cappello di Paglia!',
    },
    summary: {
      en: 'Luffy, Carrot, Nami and Chopper are chased through the Marine base by Grount, Bonham and Zappa. They overpower the three, then run to the shore, where Vice Admiral Prodi blocks them.',
      it: 'Rufy, Carrot, Nami e Chopper vengono inseguiti nella base della Marina da Grount, Bonham e Zappa. Li sconfiggono e corrono verso la riva, dove il viceammiraglio Prodi li blocca.',
    },
  },
  {
    episode: 782,
    kind: 'filler',
    chapter: 824,
    title: {
      en: 'The Devil’s Fist! A Show Down! Luffy vs. Grount!',
      it: 'Il pugno del diavolo! La resa dei conti! Cappello di Paglia contro Grount',
    },
    summary: {
      en: 'Luffy beats Prodi, Bonham and Zappa, then faces Grount, who shatters the cover on his left arm to show a huge red one. Luffy wins with Gear Third and the team leaves Fron Island.',
      it: 'Rufy sconfigge Prodi, Bonham e Zappa, poi affronta Grount, che spezza la copertura del braccio sinistro e mostra un enorme arto rosso. Rufy vince con il Gear Third e la squadra lascia l’isola di Fron.',
    },
  },
  {
    episode: 789,
    kind: 'mixed',
    chapter: 829,
    title: {
      en: 'The Capital City Falls?! Big Mom and Jimbei',
      it: 'La capitale distrutta! Big Mom e Jinbe',
    },
    summary: {
      en: 'Big Mom rampages through Sweet City until Jinbe feeds her croquembouche, then he asks to leave her crew. The anime adds a sea of juice where fruit-shaped fish attack the Sunny.',
      it: 'Big Mom devasta Sweet City finché Jinbe non le dà dei croquembouche, poi le chiede di lasciare la ciurma. L’anime aggiunge un mare di succhi dove pesci a forma di frutta attaccano la Sunny.',
    },
  },
  {
    after: 802,
    released: '2017-08-26',
    kind: 'special',
    chapter: 840,
    title: { en: 'Episode of East Blue', it: 'Episodio dell’East Blue' },
    summary: {
      en: 'As the crew prepares to leave East Blue for the Grand Line, each of the five Straw Hats recalls their journey so far and renews their dream.',
      it: 'Mentre la ciurma si prepara a lasciare l’East Blue per entrare nella Rotta Maggiore, ognuno dei cinque Cappello di paglia ripensa al proprio viaggio e rinnova il proprio sogno.',
    },
  },
  {
    episode: 803,
    kind: 'mixed',
    chapter: 840,
    title: {
      en: 'The Past that He Let Go of! Vinsmoke Sanji!',
      it: 'Il passato che si è lasciato alle spalle. Sanji Vinsmoke',
    },
    summary: {
      en: 'Nami fights Cracker until Luffy regains his Haki and hits him with a Gear Second punch. In the Germa Kingdom, Sanji is beaten by Niji and recalls his childhood under Judge.',
      it: 'Nami affronta Cracker finché Rufy riacquista l’Ambizione e lo colpisce con un pugno in Gear Second. Nel regno di Germa, Sanji viene battuto da Niji e ricorda la sua infanzia sotto Judge.',
    },
  },
  {
    episode: 807,
    kind: 'mixed',
    chapter: 843,
    title: {
      en: 'A Heartbreaking Duel! Luffy vs Sanji! - Part 1',
      it: 'Un duello straziante. Luffy contro Sanji (I parte)',
    },
    summary: {
      en: 'Sanji recalls leaving the Germa Kingdom and meeting Zeff, while Luffy and Nami ride Kingbaum out of the woods. Luffy reaches Sanji’s carriage and is kicked away, as Sanji claims his royal life.',
      it: 'Sanji ricorda la fuga da Germa e l’incontro con Zef, mentre Rufy e Nami escono dalla foresta in sella a un albero vivente. Rufy raggiunge la carrozza di Sanji e viene respinto con un calcio.',
    },
  },
  {
    after: 850,
    released: '2018-08-25',
    kind: 'special',
    chapter: 878,
    title: { en: 'Episode of Sky Island', it: 'Episodio dell’isola nel cielo' },
    summary: {
      en: 'A retelling of the Skypiea story: the crew rides a current up to an island in the sky and frees it from Enel, a tyrant who calls himself a god.',
      it: 'Il racconto della saga di Skypiea: la ciurma risale una corrente fino a un’isola nel cielo e la libera da Ener, un tiranno che si fa chiamare dio.',
    },
  },
  {
    episode: 878,
    kind: 'mixed',
    chapter: 903,
    title: {
      en: 'The World is Stunned! The Fifth Emperor of the Sea Emerges!',
      it: 'Il mondo è sbalordito! L’arrivo del quinto Imperatore!',
    },
    summary: {
      en: 'Makino and Shanks read the newspaper about Luffy’s raid on Totto Land and remember him, while the royals of Fish-Man Island and Drum get ready to leave. Luffy and Sanji find their bounties have risen.',
      it: 'Makino e Shanks leggono il giornale sull’attacco di Rufy a Tottoland e lo ricordano, mentre le famiglie reali dell’isola degli uomini-pesce e di Drum si preparano a partire. Le taglie di Rufy e Sanji salgono.',
    },
  },
  {
    episode: 879,
    kind: 'mixed',
    chapter: 903,
    title: {
      en: 'To the Reverie! The Straw Hats’ Sworn Allies Come Together!',
      it: 'Verso il Reverie! I fedeli alleati di Cappello di Paglia si riuniscono',
    },
    summary: {
      en: 'Koby and Helmeppo save the royals of Dressrosa and Prodence from pirates on the way to the Reverie. The Four Emperors read the news about Luffy, whose bounty is now 1.5 billion.',
      it: 'Kobi e Hermeppo salvano dai pirati i reali di Dressrosa e Prodence in viaggio verso il Reverie. I quattro imperatori leggono la notizia su Rufy, la cui taglia ora è di 1,5 miliardi.',
    },
  },
  {
    episode: 881,
    kind: 'mixed',
    chapter: 905,
    title: {
      en: 'Going into Action! The Implacable New Admiral of the Fleet - Sakazuki!',
      it: 'È tempo di agire! Sakazuki, l’implacabile nuovo grand’ammiraglio della Marina!',
    },
    summary: {
      en: 'Sakazuki learns that Fujitora has gone to Mary Geoise and orders another admiral to send him away. Sengoku recalls what happened at Impel Down and Marineford two years earlier.',
      it: 'Sakazuki scopre che Fujitora è andato a Mary Geoise e ordina a un altro ammiraglio di allontanarlo. Sengoku ripensa a quanto accaduto a Impel Down e a Marineford due anni prima.',
    },
  },
  {
    episode: 882,
    kind: 'mixed',
    chapter: 905,
    title: {
      en: 'The Paramount War! The Inherited Will of the King of the Pirates!',
      it: 'La battaglia per la supremazia! La volontà ereditata del re dei pirati',
    },
    summary: {
      en: 'Sengoku and Sakazuki keep recalling the Paramount War, while the royals reach the Red Port one after another. Fujitora talks with another admiral about the World Government.',
      it: 'Sakazuki e Sengoku continuano a ripensare alla guerra per la supremazia, mentre i reali arrivano uno dopo l’altro al Porto Rosso. Issho parla con un altro ammiraglio del Governo Mondiale.',
    },
  },
  {
    episode: 883,
    kind: 'mixed',
    chapter: 905,
    title: {
      en: 'One Step Forward for Her Dream! Shirahoshi Goes Out in the Sun!',
      it: 'Il grande sogno di Shirahoshi! Uscire alla luce del sole',
    },
    summary: {
      en: 'The king of Goa meets Garp, then the Neptune family and Shirahoshi head up the Red Line. Shirahoshi sees the surface world in the sun for the first time, while Sabo watches the king.',
      it: 'Il re di Goa incontra Garp, poi la famiglia Nettuno e Shirahoshi salgono lungo la Linea Rossa. Shirahoshi vede per la prima volta la superficie sotto il sole, mentre Sabo osserva il re.',
    },
  },
  {
    episode: 884,
    kind: 'mixed',
    chapter: 906,
    title: {
      en: 'I Miss Him! Vivi and Rebecca’s Sentiments!',
      it: 'Pensando a Luffy. I sentimenti di Bibi e Rebecca',
    },
    summary: {
      en: 'The Neptune family and other royals climb the Red Line into Mary Geoise and reach Pangaea Castle. Shirahoshi joins Vivi, Rebecca and Leo as they talk about Luffy.',
      it: 'La famiglia Nettuno e altri reali salgono lungo la Linea Rossa fino a Mary Geoise e raggiungono il castello di Pangea. Shirahoshi si unisce a Bibi, Rebecca e Leo mentre parlano di Rufy.',
    },
  },
  {
    episode: 885,
    kind: 'mixed',
    chapter: 906,
    title: {
      en: 'In the Dark Recesses of the Holyland! A Mysterious Giant Straw Hat!',
      it: 'Tenebre nella terra sacra. Un misterioso cappello di paglia gigante',
    },
    summary: {
      en: 'Vivi, Rebecca and Shirahoshi talk about Luffy, joined by Dalton and Kureha. Wapol mocks Vivi until Dalton drives him off, and a figure with wanted posters enters a room that holds a giant straw hat.',
      it: 'Bibi, Rebecca e Shirahoshi parlano di Rufy, raggiunte da Dolton e Kureha. Wapol deride Bibi finché Dolton lo allontana, e una figura con dei manifesti entra in una stanza con un enorme cappello di paglia.',
    },
  },
  {
    episode: 887,
    kind: 'mixed',
    chapter: 907,
    title: {
      en: 'An Explosive Situation! Two Emperors of the Sea Going After Luffy!',
      it: 'Una situazione esplosiva! Due imperatori danno la caccia a Luffy',
    },
    summary: {
      en: 'Big Mom tells Kaido she will go to Wano to kill Luffy herself, and Kaido objects, claiming the greater grudge. At the Red Port, Garp talks with the Marine vice admirals.',
      it: 'Big Mom dice a Kaido che andrà a Wa per uccidere Rufy di persona, e Kaido si oppone perché ha un rancore più grande. Al Porto Rosso, Garp parla con i viceammiragli.',
    },
  },
  {
    episode: 888,
    kind: 'mixed',
    chapter: 908,
    title: {
      en: 'Sabo Enraged! The Tragedy of the Revolutionary Army Officer Kuma!',
      it: 'La furia di Sabo! Salvare Orso, l’ufficiale dell’Armata rivoluzionaria',
    },
    summary: {
      en: 'Myosgard promises to protect Shirahoshi at the Reverie, while Sabo sneaks around Mary Geoise. Bonney, disguised as the queen of Sorbet, slips into the Domain of the Gods, where Rosward shows his slave Kuma.',
      it: 'Myosgard promette di proteggere Shirahoshi durante il Reverie, mentre Sabo si muove di nascosto a Mary Geoise. Bonney, travestita da regina di Sorbet, entra nel dominio dei draghi celesti, dove Roswald mostra lo schiavo Orso.',
    },
  },
  {
    episode: 889,
    kind: 'mixed',
    chapter: 908,
    title: {
      en: 'Finally, It Starts! The Conspiracy-filled Reverie!',
      it: 'Finalmente inizia! Il Reverie delle cospirazioni!',
    },
    summary: {
      en: 'The royals open the Reverie under the king of Ballywood, while Sabo and the Revolutionary officers plan their move underground. The Five Elders meet in secret with a mysterious figure, Imu.',
      it: 'I reali aprono il Reverie sotto la guida del re di Ballywood, mentre Sabo e gli ufficiali rivoluzionari preparano il piano sottoterra. I cinque astri di saggezza incontrano in segreto Im.',
    },
  },
  {
    episode: 890,
    kind: 'mixed',
    chapter: 909,
    title: {
      en: 'Marco! The Keeper of Whitebeard’s Last Memento!',
      it: 'Marco! Il custode del lascito di Barbabianca',
    },
    summary: {
      en: 'Nekomamushi and the Guardians reach the island where Whitebeard grew up. He finds Marco working as a doctor in a hidden village, and Marco tells him about Whitebeard’s past and sends a message for Luffy.',
      it: 'Gatto-vipera e i guardiani raggiungono l’isola dove è cresciuto Barbabianca. Trova Marco che fa il dottore in un villaggio nascosto, e Marco gli racconta il passato di Barbabianca e gli affida un messaggio per Rufy.',
    },
  },
  {
    episode: 895,
    kind: 'filler',
    chapter: 912,
    title: {
      en: 'Side Story! The World’s Greatest Bounty Hunter, Cidre!',
      it: 'La saga di Cidre - I parte',
    },
    summary: {
      en: 'Bounty hunters led by Cidre ambush the Straw Hats at sea. Luffy explores an island with carbonated water, fights the hunters and meets Boa Hancock, then they reach the Cidre Guild’s stronghold.',
      it: 'I cacciatori di taglie di Cidre tendono un’imboscata ai Cappello di Paglia in mare. Rufy esplora un’isola con acqua gassata, combatte i cacciatori e incontra Boa Hancock, poi raggiungono la fortezza di Cidre.',
    },
  },
  {
    episode: 896,
    kind: 'filler',
    chapter: 912,
    title: {
      en: 'Side Story! Clash! Luffy vs. the King of Carbonation!',
      it: 'La saga di Cidre - II parte',
    },
    summary: {
      en: 'Luffy beats Cidre, who equips his most powerful carbonated rig, with a Gear Third punch, while Hancock turns two of the guild’s fighters to stone. Luffy takes an invitation to the Pirates Festival.',
      it: 'Rufy batte Cidre, che usa la sua arma gassata più potente, con un pugno in Gear Third, mentre Hancock pietrifica due combattenti della gilda. Rufy ottiene un invito alla Fiera Mondiale Pirata.',
    },
  },
  {
    after: 896,
    released: '2019-08-09',
    kind: 'film',
    chapter: 912,
    title: { en: 'One Piece: Stampede', it: 'One Piece: Stampede' },
    summary: {
      en: 'Pirates from all over the world gather at the Pirates Festival, a treasure hunt for a lost treasure that once belonged to Gold Roger.',
      it: 'Pirati da tutto il mondo si riuniscono alla Fiera Mondiale Pirata, una caccia al tesoro per ritrovare un tesoro perduto appartenuto a Gold Roger.',
    },
  },
  {
    episode: 907,
    kind: 'filler',
    chapter: 918,
    title: {
      en: 'Romance Dawn',
      it: '20° anniversario! - Speciale Romance Dawn',
    },
    summary: {
      en: 'In an alternate world, Luffy sails alone when a wounded bird crashes into his boat. He meets a girl named Ann, whose bird companion is hunted by a pirate captain for its magical blood.',
      it: 'In un mondo alternativo Rufy naviga da solo quando un uccello ferito finisce sulla sua scialuppa. Incontra Anne, il cui compagno alato è braccato da un capitano pirata per il suo sangue magico.',
    },
  },
  {
    episode: 924,
    kind: 'mixed',
    chapter: 930,
    title: {
      en: 'The Capital in an Uproar! Another Assassin Targets Sanji!',
      it: 'Disordini nella capitale! Un altro assassino mira a Sanji',
    },
    summary: {
      en: 'Kaido’s men try to sink the Big Mom Pirates’ ship as it climbs the waterfall into Wano, and a Beasts Pirates officer knocks it down. In the Flower Capital, Page One hunts for Sanji.',
      it: 'Gli uomini di Kaido cercano di affondare la nave di Big Mom mentre risale le cascate verso Wa, e un ufficiale la fa precipitare. Nella Capitale fiorita Page One cerca Sanji.',
    },
  },
  {
    episode: 988,
    kind: 'mixed',
    chapter: 982,
    title: {
      en: 'Reinforcements Arrive! The Commander of the Whitebeard Pirates!',
      it: 'I rinforzi arrivano! Il comandante dei Pirati di Barbabianca!',
    },
    summary: {
      en: 'Marco, Izo and Nekomamushi arrive and Marco knocks the Big Mom Pirates’ ship down the waterfall again. Kin’emon’s group splits up near the castle, and Kanjuro delivers Momonosuke to Kaido.',
      it: 'Marco, Izo e Gatto-vipera arrivano e Marco fa cadere di nuovo la nave di Big Mom lungo le cascate. Il gruppo di Kin’emon si divide vicino al castello e Kanjuro porta Momonosuke a Kaido.',
    },
  },
  {
    episode: 989,
    kind: 'mixed',
    chapter: 982,
    title: {
      en: 'The Pact Between Men! The Fierce Fighting of Brachio Tank!',
      it: 'Il patto tra uomini! Il feroce combattimento del Brachiotank',
    },
    summary: {
      en: 'Chopper’s Brachiotank fights Big Mom in a canyon, while Denjiro’s group advances and ties up Sasaki. Orochi is troubled that the samurai are still alive, and Ulti meets Luffy.',
      it: 'Il Brachiotank di Chopper combatte Big Mom in un canyon, mentre il gruppo di Denjiro avanza e lega Sasaki. Orochi è turbato dal fatto che i samurai siano ancora vivi, e Ulti incontra Rufy.',
    },
  },
  {
    episode: 991,
    kind: 'mixed',
    chapter: 984,
    title: {
      en: 'Enemy or Ally? Luffy and Yamato!',
      it: 'Nemico o alleato? Rufy e Yamato',
    },
    summary: {
      en: 'Perospero climbs the waterfall alone toward Onigashima, and Big Mom leaves Chopper’s tank to follow Prometheus. Luffy refuses to listen to Yamato, a masked figure, because Yamato is Kaido’s child.',
      it: 'Perospero risale le cascate da solo verso Onigashima, e Big Mom lascia il carro armato di Chopper per seguire Prometheus. Rufy non vuole ascoltare Yamato, una figura mascherata, perché è figlio di Kaido.',
    },
  },
  {
    after: 1004,
    released: '2021-12-26',
    kind: 'recap',
    chapter: 992,
    title: {
      en: 'Luffy-senpai Support Project! Barto’s Secret Room!',
      it: 'Progetto di sostegno a Rufy-senpai: la stanza segreta di Bartolomeo',
    },
    summary: {
      en: 'Bartolomeo and Tama look back at Luffy’s time in Wano, from his arrival and first meeting with Tama to the invasion of Onigashima, with Bartolomeo commenting along the way.',
      it: 'Bartolomeo e O-Tama ripercorrono le imprese di Rufy a Wano, dal suo arrivo e dal primo incontro con O-Tama fino all’invasione di Onigashima, con i commenti di Bartolomeo.',
    },
  },
  {
    after: 1015,
    released: '2022-05-01',
    kind: 'recap',
    chapter: 1000,
    title: {
      en: 'Zoro and Sanji-senpai Admiring Project! Barto’s Secret Room 2!',
      it: 'Progetto di ammirazione per Zoro e Sanji-senpai: la stanza segreta di Bartolomeo 2',
    },
    summary: {
      en: 'Bartolomeo and Law look back at the Straw Hats’ time in Wano, focusing on Zoro and Sanji and on how they grew stronger before the great battle with Kaido.',
      it: 'Bartolomeo e Law ripercorrono le imprese dei Cappello di paglia a Wano, concentrandosi su Zoro e Sanji e su come sono diventati più forti prima della grande battaglia contro Kaido.',
    },
  },
  {
    after: 1022,
    released: '2022-06-26',
    kind: 'recap',
    chapter: 1006,
    title: {
      en: 'A Comprehensive Anatomy! The Legend of Kouzuki Oden!',
      it: 'Un’anatomia completa: la leggenda di Kozuki Oden',
    },
    summary: {
      en: 'Yamato and Momonosuke retell the adventures of Kozuki Oden, the hero of Wano, and the great life he lived.',
      it: 'Yamato e Momonosuke raccontano le avventure di Kozuki Oden, l’eroe di Wano, e la grande vita che ha vissuto.',
    },
  },
  {
    after: 1027,
    released: '2022-08-06',
    kind: 'film',
    chapter: 1010,
    title: { en: 'One Piece Film: Red', it: 'One Piece Film: Red' },
    summary: {
      en: 'Uta, the world’s greatest singer, gives her first live concert on the Island of Music, Elegia, in front of the Straw Hats, Marines and fans. It opens with the revelation that she is Shanks’ daughter.',
      it: 'Uta, la più grande cantante del mondo, tiene il primo concerto a Elegia, l’isola della musica, davanti ai Cappello di paglia, ai marine e ai fan. Si apre rivelando che è figlia di Shanks.',
    },
  },
  {
    episode: 1029,
    kind: 'filler',
    chapter: 1011,
    title: {
      en: 'A Faint Memory! Luffy and Red-Haired’s Daughter Uta!',
      it: 'Un ricordo lontano - Rufy e la figlia del Rosso, Uta',
    },
    summary: {
      en: 'Luffy meets Shanks and his daughter Uta in Foosha Village as a child, and the two become friends. It is a flashback that opens with the Straw Hats hearing Uta’s song on a Tone Dial.',
      it: 'Da bambino Rufy incontra Shanks e sua figlia Uta nel villaggio Fuschia, e i due diventano amici. È un flashback che inizia con i Cappello di Paglia che ascoltano la canzone di Uta.',
    },
  },
  {
    episode: 1030,
    kind: 'filler',
    chapter: 1011,
    title: {
      en: 'A Pledge for the Next Genesis! Luffy and Uta!',
      it: 'Una promessa per la nuova era! Rufy e Uta',
    },
    summary: {
      en: 'Uta tells Luffy she dreams of travelling the world with Shanks and bringing joy with her singing. The crew leaves and returns without her, Luffy cries, and Elegia is reported destroyed.',
      it: 'Uta dice a Rufy che sogna di viaggiare per il mondo con Shanks e portare gioia con il canto. La ciurma parte e torna senza di lei, Rufy piange e Elegia risulta distrutta.',
    },
  },
  {
    after: 1030,
    released: '2022-08-28',
    kind: 'recap',
    chapter: 1011,
    title: {
      en: 'The Legendary Log! Red-Haired Shanks!',
      it: 'Il registro leggendario: Shanks il Rosso',
    },
    summary: {
      en: 'Several people look back on the time they knew Shanks, among them Koby and Makino.',
      it: 'Diversi personaggi ripensano al tempo in cui hanno conosciuto Shanks, tra cui Kobi e Makino.',
    },
  },
  {
    after: 1035,
    released: '2022-10-09',
    kind: 'recap',
    chapter: 1014,
    title: {
      en: 'A Comprehensive Anatomy! Fierce Fight! The Five from the New Generation!',
      it: 'Un’anatomia completa: lo scontro feroce dei cinque della nuova generazione',
    },
    summary: {
      en: 'A retelling of the fight on the roof of Skull Dome between the Worst Generation and the Emperors Kaido and Big Mom.',
      it: 'Un riassunto dello scontro sul tetto di Skull Dome tra la Peggiore Generazione e gli Imperatori Kaido e Big Mom.',
    },
  },
  {
    after: 1045,
    released: '2022-12-25',
    kind: 'recap',
    chapter: 1022,
    title: {
      en: 'Great Fierce Battle Special! The Straw Hats vs. the Tobi Roppo',
      it: 'Speciale grande battaglia feroce: i Cappello di paglia contro i Tobi Roppo',
    },
    summary: {
      en: 'Zoro and Sanji narrate the battles that took place between the Straw Hats and the Tobi Roppo, one fight after another.',
      it: 'Zoro e Sanji raccontano gli scontri tra i Cappello di paglia e i Tobi Roppo.',
    },
  },
  {
    after: 1061,
    released: '2023-05-14',
    kind: 'recap',
    chapter: 1035,
    title: {
      en: 'Great Fierce Battle Special! Zoro vs. an All-Star!',
      it: 'Speciale grande battaglia feroce: Zoro contro un All-Star',
    },
    summary: {
      en: 'Sanji and Chopper narrate Zoro’s battle against King, from the start up to this point.',
      it: 'Sanji e Chopper raccontano la battaglia di Zoro contro King, dall’inizio fino a questo punto.',
    },
  },
  {
    after: 1065,
    released: '2023-06-18',
    kind: 'recap',
    chapter: 1038,
    title: {
      en: 'Great Fierce Battle Special! Alliance Counterattack vs. Big Mom',
      it: 'Speciale grande battaglia feroce: il contrattacco dell’alleanza contro Big Mom',
    },
    summary: {
      en: 'Nami and Robin narrate the battle of Law and Kid against Big Mom, from the start up to this point.',
      it: 'Nami e Robin raccontano la battaglia di Law e Kidd contro Big Mom, dall’inizio fino a questo punto.',
    },
  },
  {
    after: 1073,
    released: '2023-08-27',
    kind: 'recap',
    chapter: 1046,
    title: {
      en: 'Luffy-senpai Support Project! Barto’s Secret Room 3!',
      it: 'Progetto di sostegno a Rufy-senpai: la stanza segreta di Bartolomeo 3',
    },
    summary: {
      en: 'Bartolomeo and Tama recap Luffy’s battles with Kaido on Onigashima, from his second defeat up to the awakening of his Devil Fruit.',
      it: 'Bartolomeo e O-Tama riassumono gli scontri di Rufy contro Kaido a Onigashima, dalla sua seconda sconfitta fino al risveglio del suo frutto del diavolo.',
    },
  },
  {
    after: 1078,
    released: '2023-10-08',
    kind: 'recap',
    chapter: 1051,
    title: {
      en: 'Luffy-senpai Support Project! Barto’s Secret Room 4!',
      it: 'Progetto di sostegno a Rufy-senpai: la stanza segreta di Bartolomeo 4',
    },
    summary: {
      en: 'Bartolomeo and Tama recap Luffy’s fight against Kaido after his awakening, up to the moment he finally defeats him.',
      it: 'Bartolomeo e O-Tama riassumono lo scontro di Rufy contro Kaido dopo il suo risveglio, fino al momento in cui lo sconfigge.',
    },
  },
  {
    episode: 1084,
    kind: 'filler',
    chapter: 1056,
    title: {
      en: 'Time to Depart - The Land of Wano and the Straw Hats',
      it: 'Tempo di partire - Il Paese di Wa e i Pirati di Cappello di paglia',
    },
    summary: {
      en: 'Before leaving Wano, Luffy says goodbye to the Nine Red Scabbards and the minks at Kuri Castle’s ruins. Zoro visits two graves, Usopp buys cloth, and Sanji sells his last soba.',
      it: 'Prima di lasciare Wa, Rufy saluta i foderi rossi e i visoni tra le rovine del castello di Kuri. Zoro visita due tombe, Usop compra della stoffa e Sanji vende l’ultima soba.',
    },
  },
  {
    after: 1088,
    released: '2023-12-24',
    kind: 'recap',
    chapter: 1060,
    title: {
      en: 'Special Feature! Momonosuke’s Path to Becoming a Great Shogun',
      it: 'Servizio speciale: la strada di Momonosuke per diventare un grande shogun',
    },
    summary: {
      en: 'Yamato, Momonosuke and Kin’emon recap Momonosuke’s rise to shogun, Ryokugyu’s brief invasion of Wano and the Straw Hats’ departure from the country.',
      it: 'Yamato, Momonosuke e Kin’emon riassumono l’ascesa di Momonosuke a shogun, la breve invasione di Wano da parte di Ryokugyu e la partenza dei Cappello di paglia dal paese.',
    },
  },
  {
    after: 1092,
    released: '2024-02-04',
    kind: 'recap',
    chapter: 1063,
    title: {
      en: 'Great Fun Project! “Surgeon of Death” Trafalgar Law',
      it: 'Grande progetto divertimento: Trafalgar Law, il “Chirurgo della Morte”',
    },
    summary: {
      en: 'Bepo and Chopper recap Law’s part in the story, from the Celestial Dragon incident and the Summit War of Marineford to Rosinante, Doflamingo’s defeat and the raid on Onigashima.',
      it: 'Bepo e Chopper riassumono il ruolo di Law nella storia, dall’incidente del Drago Celeste e dalla guerra di Marineford fino a Rosinante, alla sconfitta di Do Flamingo e all’assalto a Onigashima.',
    },
  },
  {
    after: 1100,
    released: '2024-04-14',
    kind: 'recap',
    chapter: 1069,
    title: {
      en: 'Log of Rivalry! The Straw Hats and Cipher Pol',
      it: 'Il registro della rivalità: i Cappello di paglia e i Cipher Pol',
    },
    summary: {
      en: 'Franky and Robin recap their history with Cipher Pol: their clash with CP9 and what Lucci’s group has done since joining CP0.',
      it: 'Franky e Robin ripercorrono la loro storia con i Cipher Pol: lo scontro con la CP9 e ciò che ha fatto il gruppo di Lucci dopo essere entrato nella CP0.',
    },
  },
  {
    after: 1108,
    released: '2024-06-16',
    kind: 'recap',
    chapter: 1077,
    title: {
      en: 'Making History! The Turbulent Old and New Four Emperors!',
      it: 'Facciamo la storia: i vecchi e nuovi quattro Imperatori nella tempesta',
    },
    summary: {
      en: 'Zoro and Brook recap the Four Emperors, the old ones and the new ones, and the history of each.',
      it: 'Zoro e Brook fanno un riassunto sui quattro Imperatori, quelli vecchi e quelli nuovi, e sulla storia di ciascuno.',
    },
  },
  {
    after: 1116,
    released: '2024-08-25',
    kind: 'recap',
    chapter: 1082,
    title: {
      en: 'The Log of Turbulent Revolution - The Revolutionary Army Maneuvers in Secret!',
      it: 'Il registro della rivoluzione turbolenta: l’Armata Rivoluzionaria si muove in segreto',
    },
    summary: {
      en: 'Cavendish and Bartolomeo recap the histories of various Revolutionary Army members and describe the army’s operations.',
      it: 'Cavendish e Bartolomeo riassumono la storia di vari membri dell’Armata Rivoluzionaria e descrivono le sue operazioni.',
    },
  },
  {
    after: 1120,
    released: '2024-09-29',
    kind: 'recap',
    chapter: 1086,
    title: {
      en: 'Unwavering Justice! The Marines’ Proud Log!',
      it: 'Giustizia incrollabile: il registro orgoglioso della Marina',
    },
    summary: {
      en: 'Jinbe, Nami and Usopp explain the Marines in depth, along with the histories of some of their notable members.',
      it: 'Jinbe, Nami e Usop spiegano nel dettaglio la Marina, insieme alla storia di alcuni dei suoi membri più importanti.',
    },
  },
  {
    after: 1122,
    released: '2024-10-20',
    kind: 'special',
    chapter: 1088,
    title: { en: 'One Piece Fan Letter', it: 'Lettera di un fan di One Piece' },
    summary: {
      en: 'As the Straw Hats reunite on the Sabaody Archipelago, various inhabitants of the island go about their lives and are drawn into the chaos.',
      it: 'Mentre i Cappello di paglia si riuniscono all’Arcipelago Sabaody, vari abitanti dell’isola proseguono la loro vita e vengono coinvolti nel caos.',
    },
  },
  {
    after: 1128,
    released: '2025-05-11',
    kind: 'recap',
    chapter: 1094,
    title: {
      en: 'Dr. Chopper’s Adventure Checkup - The Ballad of a Father and Daughter -',
      it: 'Il check-up d’avventura del dottor Chopper: la ballata di un padre e di una figlia',
    },
    summary: {
      en: 'Carrot and Chopper go over the histories of Kuma and Bonney, and how each of them crossed paths with the Straw Hats.',
      it: 'Carrot e Chopper ripercorrono la storia di Orso Bartholomew e di Jewelry Bonney, e i loro incontri con i Cappello di paglia.',
    },
  },
  {
    after: 1133,
    released: '2025-06-22',
    kind: 'recap',
    chapter: 1099,
    title: {
      en: 'Dr. Chopper’s Adventure Checkup - Good Friends at a Crossroad -',
      it: 'Il check-up d’avventura del dottor Chopper: buoni amici a un bivio',
    },
    summary: {
      en: 'Carrot and Chopper go over the histories of Kizaru, Sentomaru and Vegapunk, and how each of them crossed paths with the Straw Hats.',
      it: 'Carrot e Chopper ripercorrono la storia di Kizaru, Sentomaru e Vegapunk, e i loro incontri con i Cappello di paglia.',
    },
  },
  {
    after: 1141,
    released: '2025-08-31',
    kind: 'recap',
    chapter: 1107,
    title: {
      en: 'Dr. Chopper’s Adventure Checkup - The Proud Dream of the Giants -',
      it: 'Il check-up d’avventura del dottor Chopper: il sogno orgoglioso dei giganti',
    },
    summary: {
      en: 'Carrot and Chopper discuss various giants while trying to work out who a giant shadow belongs to.',
      it: 'Carrot e Chopper parlano di vari giganti mentre cercano di capire a chi appartenga un’enorme ombra.',
    },
  },
  {
    after: 1145,
    released: '2025-10-12',
    kind: 'recap',
    chapter: 1111,
    title: {
      en: 'Dr. Chopper’s Adventure Checkup - Traitors’ Masquerade -',
      it: 'Il check-up d’avventura del dottor Chopper: la mascherata dei traditori',
    },
    summary: {
      en: 'Carrot, Bepo and Chopper discuss the activities of the CP0, the World Government’s secret agency, and of its members.',
      it: 'Carrot, Bepo e Chopper parlano delle attività della CP0, l’agenzia segreta del Governo Mondiale, e dei suoi membri.',
    },
  },
  {
    after: 1150,
    released: '2025-11-23',
    kind: 'recap',
    chapter: 1118,
    title: {
      en: 'Dr. Chopper’s Adventure Checkup - The Last Records That a Genius Left Behind -',
      it: 'Il check-up d’avventura del dottor Chopper: gli ultimi appunti lasciati da un genio',
    },
    summary: {
      en: 'To rescue Chopper, Carrot and Bartolomeo have to answer five questions put to them by Vegapunk.',
      it: 'Per salvare Chopper, Carrot e Bartolomeo sono costretti a rispondere a cinque domande poste da Vegapunk.',
    },
  },
  {
    after: 1168,
    released: '2026-07-05',
    kind: 'special',
    chapter: 1138,
    title: { en: 'One Piece Heroines', it: 'One Piece Heroines' },
    summary: {
      en: 'Nami hurts her feet in a pair of poorly made shoes and goes to return them, meeting the designer Lebno Listchaque, who asks her to perform in a show.',
      it: 'Nami si fa male ai piedi con un paio di scarpe fatte male e va a restituirle, dove incontra lo stilista Lebno Listchaque, che le chiede di partecipare a uno spettacolo.',
    },
  },
]
