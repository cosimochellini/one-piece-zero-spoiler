import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/relationships.json. */
const links = {
  tamaLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Luffy frees Tama from her captors, and she gives him her birthday rice.',
      it: 'Rufy libera Tama dai suoi rapitori e lei gli offre il riso del suo compleanno.',
    },
  },
  tamaAce: {
    character: 'portgas-d-ace',
    type: { en: 'Friend she misses', it: 'Amico di cui sente la mancanza' },
    summary: {
      en: 'Tama waits for Ace to return, then learns from Luffy that he has died.',
      it: 'Tama aspetta il ritorno di Ace, poi scopre da Rufy che è morto.',
    },
  },
  tamaHitetsu: {
    character: 'tenguyama-hitetsu',
    type: { en: 'Master and guardian', it: 'Maestro e tutore' },
    summary: {
      en: 'Hitetsu looks after Tama and buys rice for her birthday.',
      it: 'Hitetsu si prende cura di Tama e le compra il riso per il compleanno.',
    },
  },
  tamaSpeed: {
    character: 'speed',
    type: { en: 'Protector she tames', it: 'Protettrice che addomestica' },
    summary: {
      en: 'Tama feeds Speed a dumpling and gains her help in escaping Bakura Town.',
      it: 'Tama dà una polpetta a Speed e ottiene il suo aiuto per fuggire da Bakura.',
    },
  },
  tamaSpeedMother: {
    character: 'speed',
    type: {
      en: 'Woman she wants as her mother',
      it: 'Donna che vorrebbe come madre',
    },
    summary: {
      en: 'Tama asks Speed to stay with her as a mother after the dumpling’s effect wears off.',
      it: 'Tama chiede a Speed di restare con lei come una madre quando l’effetto della polpetta finirà.',
    },
  },
  tamaShinobu: {
    character: 'shinobu',
    type: { en: 'Ninja teacher', it: 'Maestra di arti ninja' },
    summary: {
      en: 'Tama trains with Shinobu to become a kunoichi.',
      it: 'Tama si allena con Shinobu per diventare una kunoichi.',
    },
  },
  hitetsuTama: {
    character: 'tama',
    type: { en: 'Ward', it: 'Bambina che accudisce' },
    summary: {
      en: 'Hitetsu protects Tama and reproaches Luffy for bluntly telling her about Ace’s death.',
      it: 'Hitetsu protegge Tama e rimprovera Rufy per averle parlato della morte di Ace senza riguardo.',
    },
  },
  hitetsuZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Swordsman he equips', it: 'Spadaccino che rifornisce' },
    summary: {
      en: 'Hitetsu gives Zoro Enma and watches him learn to control the sword.',
      it: 'Hitetsu consegna Enma a Zoro e lo osserva imparare a controllarla.',
    },
  },
  sukiyakiOden: {
    character: 'kozuki-oden',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Sukiyaki disowns Oden after his repeated disturbances in the Flower Capital.',
      it: 'Sukiyaki ripudia Oden dopo i suoi continui disordini nella Capitale dei Fiori.',
    },
  },
  sukiyakiOdenDaimyo: {
    character: 'kozuki-oden',
    type: { en: 'Son he appoints daimyo', it: 'Figlio che nomina daimyo' },
    summary: {
      en: 'Sukiyaki makes Oden daimyo after he brings order to Kuri.',
      it: 'Sukiyaki nomina Oden daimyo dopo che ha riportato l’ordine a Kuri.',
    },
  },
  sukiyakiRobin: {
    character: 'nico-robin',
    type: { en: 'Confidante', it: 'Confidente' },
    summary: {
      en: 'Sukiyaki reveals his identity to Robin and confirms that Pluton is in Wano.',
      it: 'Sukiyaki rivela la propria identità a Robin e conferma che Pluton si trova a Wano.',
    },
  },
  sukiyakiMomo: {
    character: 'momonosuke',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'Sukiyaki reveals himself to Momonosuke and offers to pass on what he knows.',
      it: 'Sukiyaki si presenta a Momonosuke e si offre di trasmettergli ciò che sa.',
    },
  },
  sukiyakiHiyori: {
    character: 'kozuki-hiyori',
    type: { en: 'Granddaughter', it: 'Nipote' },
    summary: {
      en: 'Hiyori is relieved to discover that her grandfather Sukiyaki is alive.',
      it: 'Hiyori è sollevata nello scoprire che suo nonno Sukiyaki è vivo.',
    },
  },
  kikuTsuru: {
    character: 'tsurujo',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Kiku works at Tsuru’s tea house in Okobore Town.',
      it: 'Kiku lavora nella casa da tè di O-Tsuru a Okobore.',
    },
  },
  kikuZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Guest she treats', it: 'Ospite che cura' },
    summary: {
      en: 'Kiku tends Zoro’s wounds at the tea house.',
      it: 'Kiku cura le ferite di Zoro nella casa da tè.',
    },
  },
  kikuKin: {
    character: 'kinemon',
    type: { en: 'Comrade', it: 'Compagno' },
    summary: {
      en: 'Kiku embraces Kin’emon when they reunite at the ruins of Oden Castle.',
      it: 'Kiku abbraccia Kin’emon quando si ritrovano tra le rovine del castello di Oden.',
    },
  },
  kikuIzo: {
    character: 'izo',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Kiku and Izo followed Oden together after he fed them as children.',
      it: 'Kiku e Izo hanno seguito Oden insieme dopo che lui li ha sfamati da bambini.',
    },
  },
  kikuOden: {
    character: 'kozuki-oden',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Kiku becomes Oden’s retainer after he takes care of her and Izo.',
      it: 'Kiku diventa una servitrice di Oden dopo che lui si è preso cura di lei e di Izo.',
    },
  },
  kikuIzoReunion: {
    character: 'izo',
    type: { en: 'Brother she reunites with', it: 'Fratello che ritrova' },
    summary: {
      en: 'Kiku is reunited with Izo before the attack on Onigashima.',
      it: 'Kiku ritrova Izo prima dell’attacco a Onigashima.',
    },
  },
  kikuKanjuro: {
    character: 'kanjuro',
    type: { en: 'Traitor she confronts', it: 'Traditore che affronta' },
    summary: {
      en: 'Kiku confronts Kanjuro after he betrays the alliance and beats Momonosuke.',
      it: 'Kiku affronta Kanjuro dopo il suo tradimento dell’alleanza e le violenze su Momonosuke.',
    },
  },
  ashuraJack: {
    character: 'jack',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Ashura cuts Jack across the chest when he invades Kuri.',
      it: 'Ashura ferisce Jack al petto quando invade Kuri.',
    },
  },
  ashuraKin: {
    character: 'kinemon',
    type: { en: 'Comrade he resents', it: 'Compagno verso cui prova rancore' },
    summary: {
      en: 'Ashura reproaches Kin’emon for leaving him to wait twenty years.',
      it: 'Ashura rimprovera Kin’emon per averlo lasciato ad aspettare vent’anni.',
    },
  },
  ashuraKinAlly: {
    character: 'kinemon',
    type: { en: 'Reconciled comrade', it: 'Compagno con cui si riappacifica' },
    summary: {
      en: 'Ashura shows Kin’emon the graves of their allies and joins the planned raid.',
      it: 'Ashura mostra a Kin’emon le tombe dei loro alleati e si unisce all’incursione.',
    },
  },
  ashuraOden: {
    character: 'kozuki-oden',
    type: { en: 'Lord who spared him', it: 'Signore che lo ha risparmiato' },
    summary: {
      en: 'Oden defeats Ashura and gives him a new purpose in rebuilding Kuri.',
      it: 'Oden sconfigge Ashura e gli dà un nuovo scopo nella ricostruzione di Kuri.',
    },
  },
  ashuraKanjuro: {
    character: 'kanjuro',
    type: {
      en: 'Traitor whose trap kills him',
      it: 'Traditore la cui trappola lo uccide',
    },
    summary: {
      en: 'Ashura carries Kanjuro’s explosive imitation of Oden away from the other retainers.',
      it: 'Ashura porta lontano dagli altri servitori l’imitazione esplosiva di Oden creata da Kanjuro.',
    },
  },
  pageDrake: {
    character: 'x-drake',
    type: { en: 'Fellow officer', it: 'Compagno ufficiale' },
    summary: {
      en: 'Page One accompanies Drake to punish the soba seller who opposed their crew.',
      it: 'Page One accompagna Drake per punire il venditore di soba che si è opposto alla ciurma.',
    },
  },
  pageSanji: {
    character: 'sanji',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Page One fights Sanji after attacking soba shops to draw him out.',
      it: 'Page One affronta Sanji dopo aver attaccato le botteghe di soba per farlo uscire allo scoperto.',
    },
  },
  pageUlti: {
    character: 'ulti',
    type: { en: 'Older sister', it: 'Sorella maggiore' },
    summary: {
      en: 'Page One protests at Ulti’s demands and her disrespect toward their captain.',
      it: 'Page One protesta per le pretese di Ulti e la sua mancanza di rispetto verso il capitano.',
    },
  },
  pageLinlin: {
    character: 'charlotte-linlin',
    type: { en: 'Attacker', it: 'Aggressora' },
    summary: {
      en: 'Big Mom strikes Page One after learning that his crew destroyed Okobore Town.',
      it: 'Big Mom colpisce Page One dopo aver saputo che la sua ciurma ha distrutto Okobore.',
    },
  },
  orochiKaido: {
    character: 'kaido',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Orochi rules Wano with Kaido’s backing and fears the return of the Kozuki retainers.',
      it: 'Orochi governa Wano con l’appoggio di Kaido e teme il ritorno dei servitori dei Kozuki.',
    },
  },
  orochiKomu: {
    character: 'komurasaki',
    type: { en: 'Courtesan he pursues', it: 'Cortigiana che corteggia' },
    summary: {
      en: 'Orochi wants Komurasaki to become his wife, but she refuses to submit to him.',
      it: 'Orochi vuole che Komurasaki diventi sua moglie, ma lei rifiuta di sottomettersi.',
    },
  },
  orochiKanjuro: {
    character: 'kanjuro',
    type: { en: 'Spy', it: 'Spia' },
    summary: {
      en: 'Kanjuro has been reporting the Kozuki alliance’s plans to Orochi.',
      it: 'Kanjuro ha riferito a Orochi i piani dell’alleanza dei Kozuki.',
    },
  },
  orochiKaidoBetray: {
    character: 'kaido',
    type: { en: 'Ally who betrays him', it: 'Alleato che lo tradisce' },
    summary: {
      en: 'Kaido beheads Orochi after the shogun objects to his plans for Wano.',
      it: 'Kaido decapita Orochi quando lo shogun si oppone ai suoi piani per Wano.',
    },
  },
  orochiHiyori: {
    character: 'kozuki-hiyori',
    type: { en: 'Enemy who deceives him', it: 'Nemica che lo inganna' },
    summary: {
      en: 'Hiyori reveals that she is Oden’s daughter and has trapped Orochi with Seastone.',
      it: 'Hiyori rivela di essere la figlia di Oden e di aver bloccato Orochi con l’agalmatolite.',
    },
  },
  orochiDenjiro: {
    character: 'denjiro',
    type: { en: 'Killer', it: 'Uccisore' },
    summary: {
      en: 'Denjiro cuts off Orochi’s last head as he threatens Hiyori.',
      it: 'Denjiro taglia l’ultima testa di Orochi mentre lui minaccia Hiyori.',
    },
  },
  shinobuKin: {
    character: 'kinemon',
    type: { en: 'Comrade', it: 'Compagno' },
    summary: {
      en: 'Shinobu helps Kin’emon prepare the uprising in Wano.',
      it: 'Shinobu aiuta Kin’emon a preparare la rivolta a Wano.',
    },
  },
  shinobuFuku: {
    character: 'fukurokuju',
    type: { en: 'Former commander', it: 'Ex comandante' },
    summary: {
      en: 'Shinobu left Fukurokuju after he chose to serve Orochi.',
      it: 'Shinobu ha lasciato Fukurokuju dopo la sua scelta di servire Orochi.',
    },
  },
  shinobuMomo: {
    character: 'momonosuke',
    type: { en: 'Heir she protects', it: 'Erede che protegge' },
    summary: {
      en: 'Shinobu shields Momonosuke as they flee Kaido on Onigashima.',
      it: 'Shinobu protegge Momonosuke mentre fuggono da Kaido a Onigashima.',
    },
  },
  shinobuMomoAdult: {
    character: 'momonosuke',
    type: { en: 'Heir she ages', it: 'Erede di cui fa maturare il corpo' },
    summary: {
      en: 'At Momonosuke’s request, Shinobu ages his body so he can carry Luffy as a larger dragon.',
      it: 'Su richiesta di Momonosuke, Shinobu ne fa maturare il corpo perché possa trasportare Rufy come un drago più grande.',
    },
  },
  shinobuTama: {
    character: 'tama',
    type: { en: 'Apprentice', it: 'Allieva' },
    summary: {
      en: 'Shinobu trains Tama in the ninja arts.',
      it: 'Shinobu insegna a Tama le arti ninja.',
    },
  },
  hyoLuffy: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Fellow prisoner who helps him',
      it: 'Compagno di prigionia che lo aiuta',
    },
    summary: {
      en: 'Luffy shares his meal tickets with Hyogoro and defends him from the guards.',
      it: 'Rufy divide i suoi buoni pasto con Hyogoro e lo difende dalle guardie.',
    },
  },
  hyoLuffyStudent: {
    character: 'monkey-d-luffy',
    type: { en: 'Haki student', it: 'Allievo nell’Haki' },
    summary: {
      en: 'Hyogoro teaches Luffy how Wano’s swordsmen use Haki.',
      it: 'Hyogoro insegna a Rufy come gli spadaccini di Wano usano l’Haki.',
    },
  },
  hyoChopper: {
    character: 'tony-tony-chopper',
    type: { en: 'Doctor who saves him', it: 'Medico che lo salva' },
    summary: {
      en: 'Chopper’s countervirus saves Hyogoro from the Ice Oni infection.',
      it: 'L’antivirus di Chopper salva Hyogoro dall’infezione degli Oni di Ghiaccio.',
    },
  },
  kingKaido: {
    character: 'kaido',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'King serves Kaido as one of the Beasts Pirates’ All-Stars.',
      it: 'King serve Kaido come uno dei Pezzi da Novanta dei Pirati delle Cento Bestie.',
    },
  },
  kingQueen: {
    character: 'queen',
    type: { en: 'Rival officer', it: 'Ufficiale rivale' },
    summary: {
      en: 'King and Queen trade insults while criticizing Jack.',
      it: 'King e Queen si insultano mentre rimproverano Jack.',
    },
  },
  kingJack: {
    character: 'jack',
    type: {
      en: 'Fellow officer he scolds',
      it: 'Compagno ufficiale che rimprovera',
    },
    summary: {
      en: 'King criticizes Jack for bringing too few offerings from Kuri.',
      it: 'King rimprovera Jack per le poche offerte portate da Kuri.',
    },
  },
  kingZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'King clashes with Zoro as the swordsman returns to the battle on Onigashima.',
      it: 'King affronta Zoro quando lo spadaccino torna in battaglia a Onigashima.',
    },
  },
  kingKaidoRescue: {
    character: 'kaido',
    type: { en: 'Captain who freed him', it: 'Capitano che lo ha liberato' },
    summary: {
      en: 'Kaido frees King from captivity, gives him his name and makes him his right-hand man.',
      it: 'Kaido libera King dalla prigionia, gli dà il suo nome e ne fa il proprio braccio destro.',
    },
  },
  kingZoroDefeat: {
    character: 'roronoa-zoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Zoro overcomes King’s defences and defeats him above Onigashima.',
      it: 'Zoro supera le difese di King e lo sconfigge sopra Onigashima.',
    },
  },
  kingRyoku: {
    character: 'ryokugyu',
    type: { en: 'Attacker after the raid', it: 'Aggressore dopo l’incursione' },
    summary: {
      en: 'Ryokugyu attacks King and Queen at the former prison in Udon.',
      it: 'Ryokugyu attacca King e Queen nell’ex prigione di Udon.',
    },
  },
  queenKaido: {
    character: 'kaido',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Queen runs the Udon prison as one of Kaido’s All-Stars.',
      it: 'Queen dirige la prigione di Udon come uno dei Pezzi da Novanta di Kaido.',
    },
  },
  queenKing: {
    character: 'king',
    type: { en: 'Rival officer', it: 'Ufficiale rivale' },
    summary: {
      en: 'Queen trades insults with King while both scold Jack.',
      it: 'Queen si scambia insulti con King mentre entrambi rimproverano Jack.',
    },
  },
  queenSanji: {
    character: 'sanji',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Queen fights Sanji on the Live Floor of Onigashima.',
      it: 'Queen affronta Sanji sul Piano delle Esibizioni di Onigashima.',
    },
  },
  queenSanjiDefeat: {
    character: 'sanji',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Sanji defeats Queen after discovering that he attacked a geisha while invisible.',
      it: 'Sanji sconfigge Queen dopo aver scoperto che ha aggredito una geisha mentre era invisibile.',
    },
  },
  queenJudge: {
    character: 'vinsmoke-judge',
    type: { en: 'Former research colleague', it: 'Ex collega di ricerca' },
    summary: {
      en: 'Queen copies the abilities of Judge’s children to prove his scientific superiority.',
      it: 'Queen copia le capacità dei figli di Judge per dimostrare la propria superiorità scientifica.',
    },
  },
  komuToko: {
    character: 'toko',
    type: { en: 'Attendant', it: 'Assistente' },
    summary: {
      en: 'Toko attends Komurasaki as her kamuro.',
      it: 'O-Toko assiste Komurasaki come sua kamuro.',
    },
  },
  komuOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Shogun she defies', it: 'Shogun a cui si oppone' },
    summary: {
      en: 'Komurasaki slaps Orochi to protect Toko and refuses to beg for mercy.',
      it: 'Komurasaki schiaffeggia Orochi per proteggere O-Toko e rifiuta di implorare pietà.',
    },
  },
  hiyoriMomo: {
    character: 'momonosuke',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Hiyori remains in the burning castle while her mother sends Momonosuke into the future.',
      it: 'Hiyori resta nel castello in fiamme mentre sua madre manda Momonosuke nel futuro.',
    },
  },
  hiyoriZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Hiyori tells Zoro her name after he saves her and Toko from Kamazo.',
      it: 'Hiyori rivela il proprio nome a Zoro dopo che lui salva lei e O-Toko da Kamazo.',
    },
  },
  hiyoriKawa: {
    character: 'kawamatsu',
    type: { en: 'Guardian', it: 'Tutore' },
    summary: {
      en: 'Kawamatsu raises Hiyori after the fall of Oden Castle, giving her his own food.',
      it: 'Kawamatsu cresce Hiyori dopo la caduta del castello di Oden, cedendole il proprio cibo.',
    },
  },
  hiyoriDenjiro: {
    character: 'denjiro',
    type: {
      en: 'Guardian behind Kyoshiro’s name',
      it: 'Tutore sotto il nome di Kyoshiro',
    },
    summary: {
      en: 'Denjiro shelters Hiyori under the name Komurasaki and stages her death to protect her.',
      it: 'Denjiro accoglie Hiyori sotto il nome di Komurasaki e ne inscena la morte per proteggerla.',
    },
  },
  hiyoriOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Enemy she traps', it: 'Nemico che intrappola' },
    summary: {
      en: 'Hiyori uses a Seastone nail to restrain Orochi and reveals that she is Oden’s daughter.',
      it: 'Hiyori blocca Orochi con un chiodo di agalmatolite e rivela di essere la figlia di Oden.',
    },
  },
  tokoKomu: {
    character: 'komurasaki',
    type: { en: 'Courtesan she serves', it: 'Cortigiana che assiste' },
    summary: {
      en: 'Toko works as Komurasaki’s kamuro and accompanies her procession.',
      it: 'O-Toko lavora come kamuro di Komurasaki e ne accompagna il corteo.',
    },
  },
  tokoYasu: {
    character: 'shimotsuki-yasuie',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Toko rushes to her father Yasuie when she hears of his execution.',
      it: 'O-Toko corre da suo padre Yasuie quando viene a sapere della sua esecuzione.',
    },
  },
  tokoYasuMemory: {
    character: 'shimotsuki-yasuie',
    type: { en: 'Father she mourns', it: 'Padre che piange' },
    summary: {
      en: 'Toko sends a lantern thanking Yasuie for being her father.',
      it: 'O-Toko affida a una lanterna il ringraziamento a Yasuie per essere stato suo padre.',
    },
  },
  kyoshiroOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Shogun he serves', it: 'Shogun che serve' },
    summary: {
      en: 'Kyoshiro handles Orochi’s money and is welcomed at his banquets.',
      it: 'Kyoshiro amministra il denaro di Orochi ed è accolto ai suoi banchetti.',
    },
  },
  denjiroKin: {
    character: 'kinemon',
    type: { en: 'Childhood friend', it: 'Amico d’infanzia' },
    summary: {
      en: 'Denjiro warns Kin’emon about the danger of the stolen white boar.',
      it: 'Denjiro avverte Kin’emon del pericolo legato al cinghiale bianco rubato.',
    },
  },
  denjiroOden: {
    character: 'kozuki-oden',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Denjiro follows Oden after watching him save the Flower Capital from the Mountain God.',
      it: 'Denjiro segue Oden dopo averlo visto salvare la Capitale dei Fiori dal Dio della Montagna.',
    },
  },
  denjiroHiyori: {
    character: 'kozuki-hiyori',
    type: { en: 'Woman he protects', it: 'Donna che protegge' },
    summary: {
      en: 'Disguised as Kyoshiro, Denjiro shelters Hiyori and stages Komurasaki’s death.',
      it: 'Sotto le sembianze di Kyoshiro, Denjiro protegge Hiyori e inscena la morte di Komurasaki.',
    },
  },
  denjiroOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Enemy he deceives', it: 'Nemico che inganna' },
    summary: {
      en: 'Denjiro poses as Orochi’s loyal follower while waiting to avenge Oden.',
      it: 'Denjiro si finge un fedele seguace di Orochi in attesa di vendicare Oden.',
    },
  },
  denjiroOrochiEnd: {
    character: 'kurozumi-orochi',
    type: { en: 'Enemy he kills', it: 'Nemico che uccide' },
    summary: {
      en: 'Denjiro saves Hiyori by cutting off Orochi’s last head.',
      it: 'Denjiro salva Hiyori tagliando l’ultima testa di Orochi.',
    },
  },
  yasuToko: {
    character: 'toko',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Yasuie cares for Toko, who tries to reach him before his execution.',
      it: 'Yasuie si prende cura di O-Toko, che cerca di raggiungerlo prima dell’esecuzione.',
    },
  },
  yasuOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Executioner', it: 'Carnefice' },
    summary: {
      en: 'Yasuie ridicules Orochi and uses his execution to cover the alliance’s preparations.',
      it: 'Yasuie deride Orochi e usa la propria esecuzione per coprire i preparativi dell’alleanza.',
    },
  },
  yasuOden: {
    character: 'kozuki-oden',
    type: { en: 'Exiled heir he shelters', it: 'Erede esiliato che accoglie' },
    summary: {
      en: 'Yasuie shelters Oden after his exile and urges him to become a worthy successor.',
      it: 'Yasuie accoglie Oden dopo l’esilio e lo esorta a diventare un erede degno del padre.',
    },
  },
  gyukiZoro: {
    character: 'roronoa-zoro',
    type: {
      en: 'Opponent whose sword he takes',
      it: 'Avversario a cui sottrae la spada',
    },
    summary: {
      en: 'Gyukimaru takes Shusui and fights Zoro on Oihagi Bridge.',
      it: 'Gyukimaru sottrae Shusui e affronta Zoro sul ponte Oihagi.',
    },
  },
  gyukiKawa: {
    character: 'kawamatsu',
    type: {
      en: 'Companion in gathering weapons',
      it: 'Compagno nella raccolta di armi',
    },
    summary: {
      en: 'The fox Onimaru takes Gyukimaru’s shape and continues collecting weapons after Kawamatsu disappears.',
      it: 'La volpe Onimaru assume l’aspetto di Gyukimaru e continua a raccogliere armi dopo la scomparsa di Kawamatsu.',
    },
  },
  gyukiUshi: {
    character: 'shimotsuki-ushimaru',
    type: { en: 'Former master', it: 'Ex padrone' },
    summary: {
      en: 'Onimaru was Ushimaru’s companion before guarding the graves of Ringo.',
      it: 'Onimaru era il compagno di Ushimaru prima di sorvegliare le tombe di Ringo.',
    },
  },
  fukuOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Shogun he serves', it: 'Shogun che serve' },
    summary: {
      en: 'Fukurokuju leads Orochi’s ninja and orders the search for Robin.',
      it: 'Fukurokuju guida i ninja di Orochi e ordina di cercare Robin.',
    },
  },
  fukuShinobu: {
    character: 'shinobu',
    type: { en: 'Former subordinate', it: 'Ex subordinata' },
    summary: {
      en: 'Shinobu left Fukurokuju after he abandoned the Kozuki to serve Orochi.',
      it: 'Shinobu ha lasciato Fukurokuju dopo che lui ha abbandonato i Kozuki per servire Orochi.',
    },
  },
  fukuRaizo: {
    character: 'raizo',
    type: { en: 'Ninja rival', it: 'Ninja rivale' },
    summary: {
      en: 'Fukurokuju and Raizo immobilize each other while the castle burns around them.',
      it: 'Fukurokuju e Raizo si immobilizzano a vicenda mentre il castello brucia intorno a loro.',
    },
  },
  fukuRaizoEnd: {
    character: 'raizo',
    type: {
      en: 'Opponent who outlasts him',
      it: 'Avversario che resiste più a lungo',
    },
    summary: {
      en: 'Fukurokuju releases his technique first, allowing Raizo to defeat him.',
      it: 'Fukurokuju interrompe per primo la propria tecnica, permettendo a Raizo di sconfiggerlo.',
    },
  },
  kawaHyo: {
    character: 'hyogoro',
    type: { en: 'Prisoner he protects', it: 'Prigioniero che protegge' },
    summary: {
      en: 'From his cell, Kawamatsu asks Luffy not to let Hyogoro die.',
      it: 'Dalla propria cella, Kawamatsu chiede a Rufy di non lasciar morire Hyogoro.',
    },
  },
  kawaHiyori: {
    character: 'kozuki-hiyori',
    type: { en: 'Child he raised', it: 'Bambina che ha cresciuto' },
    summary: {
      en: 'Kawamatsu reunites with Hiyori, whom he raised after Oden Castle burned.',
      it: 'Kawamatsu ritrova Hiyori, che ha cresciuto dopo l’incendio del castello di Oden.',
    },
  },
  kawaGyuki: {
    character: 'gyukimaru',
    type: {
      en: 'Companion in gathering weapons',
      it: 'Compagno nella raccolta di armi',
    },
    summary: {
      en: 'Kawamatsu and Onimaru gather swords for the uprising; Onimaru continues as Gyukimaru after his capture.',
      it: 'Kawamatsu e Onimaru raccolgono spade per la rivolta; dopo la sua cattura Onimaru continua come Gyukimaru.',
    },
  },
  kawaOden: {
    character: 'kozuki-oden',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Oden takes Kawamatsu into his household after finding him with Inuarashi and Nekomamushi.',
      it: 'Oden accoglie Kawamatsu dopo averlo trovato insieme a Cane-tempesta e Gatto-vipera.',
    },
  },
  rocksWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Former subordinate', it: 'Ex subordinato' },
    summary: {
      en: 'Whitebeard once sailed under Rocks before forming his own crew.',
      it: 'Barbabianca ha navigato agli ordini di Rocks prima di fondare la propria ciurma.',
    },
  },
  rocksKaido: {
    character: 'kaido',
    type: { en: 'Former apprentice', it: 'Ex apprendista' },
    summary: {
      en: 'Kaido was an apprentice aboard Rocks’s ship.',
      it: 'Kaido era un apprendista sulla nave di Rocks.',
    },
  },
  rocksLinlin: {
    character: 'charlotte-linlin',
    type: { en: 'Former subordinate', it: 'Ex subordinata' },
    summary: {
      en: 'Big Mom belonged to Rocks’s crew before its defeat at God Valley.',
      it: 'Big Mom faceva parte della ciurma di Rocks prima della sconfitta a God Valley.',
    },
  },
  rocksRoger: {
    character: 'gold-roger',
    type: { en: 'Opponent at God Valley', it: 'Avversario a God Valley' },
    summary: {
      en: 'Roger joined forces with Garp to defeat Rocks at God Valley.',
      it: 'Roger si è alleato con Garp per sconfiggere Rocks a God Valley.',
    },
  },
  rocksGarp: {
    character: 'monkey-d-garp',
    type: { en: 'Opponent at God Valley', it: 'Avversario a God Valley' },
    summary: {
      en: 'Garp fought alongside Roger against Rocks at God Valley.',
      it: 'Garp ha combattuto al fianco di Roger contro Rocks a God Valley.',
    },
  },
  odenSuki: {
    character: 'kozuki-sukiyaki',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Sukiyaki disowns Oden and bars him from the Flower Capital.',
      it: 'Sukiyaki ripudia Oden e gli vieta di tornare nella Capitale dei Fiori.',
    },
  },
  odenKin: {
    character: 'kinemon',
    type: { en: 'Follower', it: 'Seguace' },
    summary: {
      en: 'Kin’emon follows Oden after he takes responsibility for the Mountain God incident.',
      it: 'Kin’emon segue Oden dopo che lui si assume la responsabilità dell’incidente del Dio della Montagna.',
    },
  },
  odenWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Whitebeard takes Oden aboard after seeing him abandon a trial to help Toki.',
      it: 'Barbabianca accoglie Oden a bordo dopo averlo visto abbandonare una prova per aiutare Toki.',
    },
  },
  odenToki: {
    character: 'kozuki-toki',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'Oden and Toki marry while travelling aboard Whitebeard’s ship.',
      it: 'Oden e Toki si sposano durante il viaggio sulla nave di Barbabianca.',
    },
  },
  odenRoger: {
    character: 'gold-roger',
    type: {
      en: 'Captain on his final voyage',
      it: 'Capitano del suo ultimo viaggio',
    },
    summary: {
      en: 'Oden joins Roger to read the Poneglyphs and reach the final island.',
      it: 'Oden si unisce a Roger per leggere i Poignee Griffe e raggiungere l’ultima isola.',
    },
  },
  odenKaido: {
    character: 'kaido',
    type: { en: 'Enemy who executes him', it: 'Nemico che lo giustizia' },
    summary: {
      en: 'Kaido shoots Oden after he survives an hour in boiling oil and saves his retainers.',
      it: 'Kaido spara a Oden dopo che ha resistito un’ora nell’olio bollente e salvato i suoi servitori.',
    },
  },
  tokiOden: {
    character: 'kozuki-oden',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Toki marries Oden during their voyage and raises their children with him.',
      it: 'Toki sposa Oden durante il viaggio e cresce i figli insieme a lui.',
    },
  },
  tokiMomo: {
    character: 'momonosuke',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Toki and Oden have Momonosuke while travelling with Whitebeard.',
      it: 'Toki e Oden hanno Momonosuke mentre viaggiano con Barbabianca.',
    },
  },
  tokiHiyori: {
    character: 'kozuki-hiyori',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Hiyori is Toki and Oden’s second child.',
      it: 'Hiyori è la seconda figlia di Toki e Oden.',
    },
  },
  tokiMomoFuture: {
    character: 'momonosuke',
    type: {
      en: 'Son she sends to the future',
      it: 'Figlio che manda nel futuro',
    },
    summary: {
      en: 'Toki sends Momonosuke twenty years forward to escape the burning castle.',
      it: 'Toki manda Momonosuke vent’anni nel futuro per farlo fuggire dal castello in fiamme.',
    },
  },
  tokiKin: {
    character: 'kinemon',
    type: {
      en: 'Retainer she trusts with her son',
      it: 'Servitore a cui affida il figlio',
    },
    summary: {
      en: 'Toki entrusts Momonosuke to Kin’emon before sending them into the future.',
      it: 'Toki affida Momonosuke a Kin’emon prima di mandarli nel futuro.',
    },
  },
  higOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Heir she backs', it: 'Erede che sostiene' },
    summary: {
      en: 'Higurashi impersonates Sukiyaki to secure Orochi’s succession.',
      it: 'Higurashi assume le sembianze di Sukiyaki per assicurare la successione a Orochi.',
    },
  },
  higKaido: {
    character: 'kaido',
    type: { en: 'Killer', it: 'Uccisore' },
    summary: {
      en: 'Kaido says he killed Higurashi for interfering in his duel with Oden.',
      it: 'Kaido dice di aver ucciso Higurashi per la sua interferenza nel duello con Oden.',
    },
  },
  semiOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Shogun he protects', it: 'Shogun che protegge' },
    summary: {
      en: 'Semimaru uses a barrier to stop Oden from reaching Orochi.',
      it: 'Semimaru usa una barriera per impedire a Oden di raggiungere Orochi.',
    },
  },
  izoKiku: {
    character: 'kiku',
    type: { en: 'Younger sister', it: 'Sorella minore' },
    summary: {
      en: 'Izo and Kiku grow up together and follow Oden after he feeds them.',
      it: 'Izo e Kiku crescono insieme e seguono Oden dopo che lui li ha sfamati.',
    },
  },
  izoOden: {
    character: 'kozuki-oden',
    type: { en: 'Former lord', it: 'Ex signore' },
    summary: {
      en: 'Izo follows Oden out to sea, then stays with Whitebeard when Oden leaves.',
      it: 'Izo segue Oden per mare, poi resta con Barbabianca quando Oden parte.',
    },
  },
  izoWhitebeard: {
    character: 'edward-newgate',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Izo remains aboard Whitebeard’s ship when Oden joins Roger.',
      it: 'Izo resta sulla nave di Barbabianca quando Oden si unisce a Roger.',
    },
  },
  izoKikuReunion: {
    character: 'kiku',
    type: { en: 'Sister he reunites with', it: 'Sorella che ritrova' },
    summary: {
      en: 'Izo reunites with Kiku before joining the attack on Onigashima.',
      it: 'Izo ritrova Kiku prima di unirsi all’attacco a Onigashima.',
    },
  },
  izoMaha: {
    character: 'maha',
    type: {
      en: 'Opponent in his final fight',
      it: 'Avversario del suo ultimo scontro',
    },
    summary: {
      en: 'Izo exchanges attacks with Maha while stopping CP0’s pursuit of Robin.',
      it: 'Izo scambia colpi con Maha mentre ferma l’inseguimento di Robin da parte del CP0.',
    },
  },
  ultiPage: {
    character: 'page-one',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'Ulti fusses over Page One and argues with him when he objects.',
      it: 'Ulti ricopre di attenzioni Page One e litiga con lui quando protesta.',
    },
  },
  ultiYamato: {
    character: 'yamato',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Yamato knocks Ulti down to take Luffy away from her.',
      it: 'Yamato abbatte Ulti per portare via Rufy da lei.',
    },
  },
  ultiNami: {
    character: 'nami',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Ulti attacks Nami and demands that she deny Luffy will become King of the Pirates.',
      it: 'Ulti attacca Nami e le impone di negare che Rufy diventerà il Re dei Pirati.',
    },
  },
  ultiNamiEnd: {
    character: 'nami',
    type: { en: 'Opponent who defeats her', it: 'Avversaria che la sconfigge' },
    summary: {
      en: 'Nami defeats Ulti with Zeus after Ulti attacks Tama.',
      it: 'Nami sconfigge Ulti con Zeus dopo che Ulti ha aggredito Tama.',
    },
  },
  whoJinbe: {
    character: 'jinbe',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Who’s-Who confronts Jinbe during the raid on Onigashima.',
      it: 'Who’s-Who affronta Jinbe durante l’incursione a Onigashima.',
    },
  },
  whoShanks: {
    character: 'shanks',
    type: {
      en: 'Pirate he blames for his downfall',
      it: 'Pirata a cui attribuisce la propria rovina',
    },
    summary: {
      en: 'Who’s-Who blames Shanks for stealing the fruit he was guarding as a government agent.',
      it: 'Who’s-Who incolpa Shanks per il furto del frutto che sorvegliava come agente del Governo.',
    },
  },
  whoJinbeEnd: {
    character: 'jinbe',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Jinbe defeats Who’s-Who after their exchange about slavery and Nika.',
      it: 'Jinbe sconfigge Who’s-Who dopo il loro confronto sulla schiavitù e su Nika.',
    },
  },
  mariaSanji: {
    character: 'sanji',
    type: { en: 'Captive', it: 'Prigioniero' },
    summary: {
      en: 'Black Maria traps Sanji and tries to force him to call Robin into her web.',
      it: 'Black Maria intrappola Sanji e cerca di costringerlo ad attirare Robin nella sua tela.',
    },
  },
  mariaRobin: {
    character: 'nico-robin',
    type: { en: 'Opponent', it: 'Avversaria' },
    summary: {
      en: 'Robin answers Sanji’s call and confronts Black Maria.',
      it: 'Robin risponde alla chiamata di Sanji e affronta Black Maria.',
    },
  },
  mariaRobinEnd: {
    character: 'nico-robin',
    type: { en: 'Opponent who defeats her', it: 'Avversaria che la sconfigge' },
    summary: {
      en: 'Robin defeats Black Maria with her Demonio Fleur technique.',
      it: 'Robin sconfigge Black Maria con la tecnica Demonio Fleur.',
    },
  },
  sasakiKyoshiro: {
    character: 'kyoshiro',
    type: { en: 'Friend who captures him', it: 'Amico che lo cattura' },
    summary: {
      en: 'Sasaki trusts Kyoshiro until he chains him to a tree during the raid.',
      it: 'Sasaki si fida di Kyoshiro finché lui non lo incatena a un albero durante l’incursione.',
    },
  },
  sasakiFranky: {
    character: 'franky',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Sasaki fights Franky while his armoured troops support him.',
      it: 'Sasaki affronta Franky con l’appoggio delle sue truppe corazzate.',
    },
  },
  sasakiFrankyEnd: {
    character: 'franky',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Franky defeats Sasaki by firing a beam into his exposed belly.',
      it: 'Franky sconfigge Sasaki colpendo il ventre scoperto con un raggio.',
    },
  },
  yamatoLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Yamato saves Luffy from Ulti and asks to speak with him away from the Beasts Pirates.',
      it: 'Yamato salva Rufy da Ulti e gli chiede di parlare lontano dai Pirati delle Cento Bestie.',
    },
  },
  yamatoKaido: {
    character: 'kaido',
    type: { en: 'Father he opposes', it: 'Padre a cui si oppone' },
    summary: {
      en: 'Yamato opposes Kaido and wants to fulfil Oden’s wish to open Wano.',
      it: 'Yamato si oppone a Kaido e vuole realizzare il desiderio di Oden di aprire Wano.',
    },
  },
  yamatoOden: {
    character: 'kozuki-oden',
    type: {
      en: 'Person he models his life on',
      it: 'Persona a cui ispira la propria vita',
    },
    summary: {
      en: 'Yamato admires Oden and keeps the journal he left behind.',
      it: 'Yamato ammira Oden e conserva il diario che ha lasciato.',
    },
  },
  yamatoMomo: {
    character: 'momonosuke',
    type: { en: 'Heir he protects', it: 'Erede che protegge' },
    summary: {
      en: 'Yamato shields Momonosuke from Sasaki’s troops and promises to keep him alive.',
      it: 'Yamato protegge Momonosuke dalle truppe di Sasaki e promette di tenerlo in vita.',
    },
  },
  yamatoAce: {
    character: 'portgas-d-ace',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Yamato befriended Ace during his visit to Onigashima and heard him speak about Luffy.',
      it: 'Yamato ha stretto amicizia con Ace durante la sua visita a Onigashima e lo ha sentito parlare di Rufy.',
    },
  },
  yamatoMomoStay: {
    character: 'momonosuke',
    type: {
      en: 'Shogun he stays to protect',
      it: 'Shogun che resta a proteggere',
    },
    summary: {
      en: 'Yamato stays in Wano to help protect Momonosuke’s country while Luffy sails on.',
      it: 'Yamato resta a Wano per aiutare a proteggere il paese di Momonosuke mentre Rufy riparte.',
    },
  },
  baoKaido: {
    character: 'kaido',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'Bao Huang presents the day’s schedule when Kaido calls her.',
      it: 'Bao Huang presenta il programma della giornata quando Kaido la chiama.',
    },
  },
  baoUsopp: {
    character: 'usopp',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Usopp captures Bao Huang so Tama can speak through the surveillance network.',
      it: 'Usop cattura Bao Huang perché Tama possa parlare attraverso la rete di sorveglianza.',
    },
  },
  baoTama: {
    character: 'tama',
    type: {
      en: 'Girl who uses her broadcast',
      it: 'Bambina che usa le sue trasmissioni',
    },
    summary: {
      en: 'Tama uses Bao Huang to order the Gifters who ate her dumplings to change sides.',
      it: 'Tama usa Bao Huang per ordinare ai Gifters che hanno mangiato le sue polpette di cambiare schieramento.',
    },
  },
  tsuruKiku: {
    character: 'kiku',
    type: { en: 'Employee', it: 'Dipendente' },
    summary: {
      en: 'Tsuru employs Kiku at her tea house in Okobore Town.',
      it: 'O-Tsuru impiega Kiku nella propria casa da tè a Okobore.',
    },
  },
  tsuruZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Tsuru follows Zoro to thank him for saving her from robbers.',
      it: 'O-Tsuru segue Zoro per ringraziarlo di averla salvata dai briganti.',
    },
  },
  tsuruTama: {
    character: 'tama',
    type: { en: 'Girl she treats', it: 'Bambina che cura' },
    summary: {
      en: 'Tsuru treats Tama after she drinks poisoned river water.',
      it: 'O-Tsuru cura Tama dopo che ha bevuto l’acqua avvelenata del fiume.',
    },
  },
  tsuruKin: {
    character: 'kinemon',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Tsuru is Kin’emon’s wife, who remained in Wano during his absence.',
      it: 'O-Tsuru è la moglie di Kin’emon ed è rimasta a Wano durante la sua assenza.',
    },
  },
  tsuruKinReturn: {
    character: 'kinemon',
    type: { en: 'Husband she reunites with', it: 'Marito che ritrova' },
    summary: {
      en: 'Tsuru survives the burning of Okobore and reunites with Kin’emon after the raid.',
      it: 'O-Tsuru sopravvive all’incendio di Okobore e ritrova Kin’emon dopo l’incursione.',
    },
  },
  holdemTama: {
    character: 'tama',
    type: { en: 'Captive', it: 'Prigioniera' },
    summary: {
      en: 'Holdem tries to force Tama to reveal how she tames animals.',
      it: 'Holdem cerca di costringere Tama a rivelare come addomestica gli animali.',
    },
  },
  holdemLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy knocks Holdem down after freeing Tama from his lion’s mouth.',
      it: 'Rufy abbatte Holdem dopo aver liberato Tama dalle fauci del suo leone.',
    },
  },
  urashimaKiku: {
    character: 'kiku',
    type: { en: 'Woman who rejects him', it: 'Donna che lo rifiuta' },
    summary: {
      en: 'Urashima presses Kiku to marry him despite her refusals.',
      it: 'Urashima insiste perché Kiku lo sposi nonostante i suoi rifiuti.',
    },
  },
  urashimaLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Luffy throws Urashima out of the sumo ring after he attacks Kiku.',
      it: 'Rufy scaraventa Urashima fuori dal ring di sumo dopo il suo attacco a Kiku.',
    },
  },
  speedTama: {
    character: 'tama',
    type: {
      en: 'Girl she follows after being tamed',
      it: 'Bambina che segue dopo essere stata addomesticata',
    },
    summary: {
      en: 'Speed helps Tama escape after eating one of her dumplings.',
      it: 'Speed aiuta Tama a fuggire dopo aver mangiato una delle sue polpette.',
    },
  },
  speedTamaMother: {
    character: 'tama',
    type: {
      en: 'Girl who asks her to stay as a mother',
      it: 'Bambina che le chiede di restare come madre',
    },
    summary: {
      en: 'Tama asks Speed to stay as her mother even after the dumpling’s effect ends.',
      it: 'Tama chiede a Speed di restare come sua madre anche dopo la fine dell’effetto della polpetta.',
    },
  },
  dobonLuffy: {
    character: 'monkey-d-luffy',
    type: {
      en: 'Prisoner who defeats him',
      it: 'Prigioniero che lo sconfigge',
    },
    summary: {
      en: 'Luffy and Kid attack Dobon after he swallows them inside his hippo’s mouth.',
      it: 'Rufy e Kidd attaccano Dobon dopo che li ha inghiottiti nelle fauci del suo ippopotamo.',
    },
  },
  dobonKid: {
    character: 'eustass-kid',
    type: {
      en: 'Prisoner who defeats him',
      it: 'Prigioniero che lo sconfigge',
    },
    summary: {
      en: 'Kid joins Luffy in beating Dobon inside his hippo’s mouth.',
      it: 'Kidd affianca Rufy nel colpire Dobon dentro le fauci del suo ippopotamo.',
    },
  },
  daikokuOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Shogun he serves', it: 'Shogun che serve' },
    summary: {
      en: 'Daikoku refuses to restrain Orochi while hunting Robin at the banquet.',
      it: 'Daikoku rifiuta di fermare Orochi mentre dà la caccia a Robin durante il banchetto.',
    },
  },
  daikokuHyo: {
    character: 'hyogoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Hyogoro defeats Daikoku during the battle on the Live Floor.',
      it: 'Hyogoro sconfigge Daikoku durante la battaglia sul Piano delle Esibizioni.',
    },
  },
  raijinFujin: {
    character: 'fujin',
    type: { en: 'Fellow ninja', it: 'Compagno ninja' },
    summary: {
      en: 'Raijin and Fujin flee from Brook while searching the castle for Robin.',
      it: 'Raijin e Fujin fuggono da Brook mentre cercano Robin nel castello.',
    },
  },
  fujinRaijin: {
    character: 'raijin',
    type: { en: 'Fellow ninja', it: 'Compagno ninja' },
    summary: {
      en: 'Fujin and Raijin mistake Brook for a ghost and run from him.',
      it: 'Fujin e Raijin scambiano Brook per uno spettro e fuggono da lui.',
    },
  },
  alpacaHyo: {
    character: 'hyogoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Hyogoro defeats Alpacaman with Haki during Queen’s execution game.',
      it: 'Hyogoro sconfigge Alpacaman con l’Haki durante il gioco mortale di Queen.',
    },
  },
  daifugoHyo: {
    character: 'hyogoro',
    type: { en: 'Prisoner he abuses', it: 'Prigioniero che maltratta' },
    summary: {
      en: 'Daifugo beats Hyogoro for eating food earned with someone else’s meal tickets.',
      it: 'Daifugo picchia Hyogoro perché mangia cibo ottenuto con i buoni pasto di un altro.',
    },
  },
  daifugoTama: {
    character: 'tama',
    type: {
      en: 'Girl he serves after being tamed',
      it: 'Bambina che serve dopo essere stato addomesticato',
    },
    summary: {
      en: 'Daifugo distributes Tama’s dumplings among the Gifters on Onigashima.',
      it: 'Daifugo distribuisce le polpette di Tama tra i Gifters a Onigashima.',
    },
  },
  babaQueen: {
    character: 'queen',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Babanuki reports the prison’s troubles to Queen.',
      it: 'Babanuki riferisce a Queen i problemi della prigione.',
    },
  },
  babaTama: {
    character: 'tama',
    type: {
      en: 'Girl he obeys after being tamed',
      it: 'Bambina a cui obbedisce dopo essere stato addomesticato',
    },
    summary: {
      en: 'After eating Tama’s dumpling, Babanuki gives Queen a false report about Udon.',
      it: 'Dopo aver mangiato la polpetta di Tama, Babanuki dà a Queen un falso resoconto su Udon.',
    },
  },
  solitaireRaizo: {
    character: 'raizo',
    type: { en: 'Thief she pursues', it: 'Ladro a cui dà la caccia' },
    summary: {
      en: 'Solitaire orders the search for Raizo after he steals keys from the prison tower.',
      it: 'Solitaire ordina di cercare Raizo dopo che ha rubato delle chiavi dalla torre della prigione.',
    },
  },
  ushiGyuki: {
    character: 'gyukimaru',
    type: { en: 'Fox companion', it: 'Volpe sua compagna' },
    summary: {
      en: 'Ushimaru’s fox Onimaru continues guarding Ringo’s graves after his death.',
      it: 'Onimaru, la volpe di Ushimaru, continua a sorvegliare le tombe di Ringo dopo la sua morte.',
    },
  },
  ushiYamato: {
    character: 'yamato',
    type: { en: 'Child he helps escape', it: 'Bambino che aiuta a fuggire' },
    summary: {
      en: 'Ushimaru shares food with Yamato and breaks out of the cave to give him a chance to live.',
      it: 'Ushimaru divide il cibo con Yamato ed esce dalla grotta per dargli una possibilità di vivere.',
    },
  },
  hatchaFranky: {
    character: 'franky',
    type: { en: 'Opponent he pursues', it: 'Avversario che insegue' },
    summary: {
      en: 'Hatcha chases General Franky, treating the robot as a toy.',
      it: 'Hatcha insegue il Generale Franky, trattando il robot come un giocattolo.',
    },
  },
  hoteiKaido: {
    character: 'kaido',
    type: {
      en: 'Commander he submits to',
      it: 'Comandante a cui si sottomette',
    },
    summary: {
      en: 'Hotei offers his samurai to Kaido after Orochi is beheaded.',
      it: 'Hotei offre i propri samurai a Kaido dopo la decapitazione di Orochi.',
    },
  },
  hoteiHyo: {
    character: 'hyogoro',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Hyogoro defeats Hotei and his samurai on the Live Floor.',
      it: 'Hyogoro sconfigge Hotei e i suoi samurai sul Piano delle Esibizioni.',
    },
  },
  fugaApoo: {
    character: 'scratchmen-apoo',
    type: { en: 'Officer he accompanies', it: 'Ufficiale che accompagna' },
    summary: {
      en: 'Fuga sits with Apoo as he proposes an alliance to Drake.',
      it: 'Fuga siede con Apoo mentre lui propone un’alleanza a Drake.',
    },
  },
  fugaYamato: {
    character: 'yamato',
    type: { en: 'Ally he helps', it: 'Alleato che aiuta' },
    summary: {
      en: 'Fuga follows Yamato’s orders and clears the gate to the armory.',
      it: 'Fuga segue gli ordini di Yamato e libera l’ingresso dell’armeria.',
    },
  },
  kazenboKanjuro: {
    character: 'kanjuro',
    type: { en: 'Creator', it: 'Creatore' },
    summary: {
      en: 'Kanjuro paints Kazenbo at Orochi’s request to set the castle ablaze.',
      it: 'Kanjuro dipinge Kazenbo su richiesta di Orochi per incendiare il castello.',
    },
  },
  kazenboYamato: {
    character: 'yamato',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Yamato attacks Kazenbo with ice to keep it from igniting the armory.',
      it: 'Yamato attacca Kazenbo con il ghiaccio per impedirgli di incendiare l’armeria.',
    },
  },
  kazenboOrochi: {
    character: 'kurozumi-orochi',
    type: { en: 'Master it burns', it: 'Padrone che incendia' },
    summary: {
      en: 'Kazenbo sets Orochi on fire instead of obeying his order to burn Hiyori.',
      it: 'Kazenbo dà fuoco a Orochi invece di obbedire al suo ordine di bruciare Hiyori.',
    },
  },
  kozaburoZoro: {
    character: 'roronoa-zoro',
    type: { en: 'Child he teaches', it: 'Bambino a cui insegna' },
    summary: {
      en: 'Kozaburo gives Zoro practice swords and explains that a blade has its own character.',
      it: 'Kozaburo dà a Zoro delle spade da allenamento e gli spiega che ogni lama ha il proprio carattere.',
    },
  },
  kozaburoKuina: {
    character: 'kuina',
    type: { en: 'Granddaughter', it: 'Nipote' },
    summary: {
      en: 'Zoro learns after Kozaburo’s death that the old swordsmith was Kuina’s grandfather.',
      it: 'Dopo la morte di Kozaburo, Zoro scopre che il vecchio fabbro era il nonno di Kuina.',
    },
  },
  mahaIzo: {
    character: 'izo',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'Maha and Izo bring each other down while CP0 pursues Robin.',
      it: 'Maha e Izo si abbattono a vicenda mentre il CP0 insegue Robin.',
    },
  },
  mahaRobin: {
    character: 'nico-robin',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Maha pursues Robin under orders from the World Government.',
      it: 'Maha insegue Robin su ordine del Governo Mondiale.',
    },
  },
  guernicaMaha: {
    character: 'maha',
    type: { en: 'Fellow agent', it: 'Compagno agente' },
    summary: {
      en: 'Guernica and Maha pursue Robin together during the raid on Onigashima.',
      it: 'Guernica e Maha inseguono insieme Robin durante l’incursione a Onigashima.',
    },
  },
  guernicaLuffy: {
    character: 'monkey-d-luffy',
    type: { en: 'Target', it: 'Bersaglio' },
    summary: {
      en: 'Guernica restrains Luffy during his duel with Kaido under orders to eliminate him.',
      it: 'Guernica blocca Rufy durante il duello con Kaido dopo aver ricevuto l’ordine di eliminarlo.',
    },
  },
  guernicaKaido: {
    character: 'kaido',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'Kaido strikes Guernica for interfering in his duel with Luffy.',
      it: 'Kaido colpisce Guernica per la sua interferenza nel duello con Rufy.',
    },
  },
  tsuruYamato: {
    character: 'yamato',
    type: { en: 'Traveller she supplies', it: 'Viaggiatore che rifornisce' },
    summary: {
      en: 'Tsuru packs medicine and dumplings for Yamato’s journey through Wano.',
      it: 'O-Tsuru prepara medicine e polpette per il viaggio di Yamato attraverso Wano.',
    },
  },
  denjiroYamato: {
    character: 'yamato',
    type: { en: 'Guest he welcomes', it: 'Ospite che accoglie' },
    summary: {
      en: 'Denjiro makes the children who attacked Yamato share a meal with him.',
      it: 'Denjiro fa condividere un pasto con Yamato ai bambini che lo hanno aggredito.',
    },
  },
  tamaYamato: {
    character: 'yamato',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'Tama joins Yamato in pursuing the thief who stole Yasuie’s sword.',
      it: 'Tama affianca Yamato nell’inseguimento del ladro della spada di Yasuie.',
    },
  },
  holdemTamaEscape: {
    character: 'tama',
    type: { en: 'Captive who breaks free', it: 'Prigioniera che si libera' },
    summary: {
      en: 'Holdem takes Tama hostage again, but she breaks free with a ninja technique.',
      it: 'Holdem prende di nuovo Tama in ostaggio, ma lei si libera con una tecnica ninja.',
    },
  },
  holdemYamato: {
    character: 'yamato',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Yamato’s group ties Holdem up and makes him lead them to his base.',
      it: 'Il gruppo di Yamato lega Holdem e lo costringe a condurlo alla sua base.',
    },
  },
  whoUlti: {
    character: 'ulti',
    type: { en: 'Captive he tortures', it: 'Prigioniera che tortura' },
    summary: {
      en: 'Who’s-Who tortures Ulti after she refuses to blame Kaido for the crew’s defeat.',
      it: 'Who’s-Who tortura Ulti dopo il suo rifiuto di incolpare Kaido per la sconfitta della ciurma.',
    },
  },
  whoPage: {
    character: 'page-one',
    type: { en: 'Captive', it: 'Prigioniero' },
    summary: {
      en: 'Who’s-Who holds Page One captive alongside Ulti.',
      it: 'Who’s-Who tiene prigioniero Page One insieme a Ulti.',
    },
  },
  whoYamato: {
    character: 'yamato',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Yamato defeats Who’s-Who and recovers Yasuie’s stolen sword.',
      it: 'Yamato sconfigge Who’s-Who e recupera la spada rubata di Yasuie.',
    },
  },
  ultiYamatoAlly: {
    character: 'yamato',
    type: {
      en: 'Rescuer she pledges to follow',
      it: 'Salvatore che promette di seguire',
    },
    summary: {
      en: 'Ulti pledges to follow Yamato after he frees her and Page One from Who’s-Who.',
      it: 'Ulti promette di seguire Yamato dopo che ha liberato lei e Page One da Who’s-Who.',
    },
  },
  pageYamato: {
    character: 'yamato',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Yamato frees Page One and Ulti from Who’s-Who’s base.',
      it: 'Yamato libera Page One e Ulti dalla base di Who’s-Who.',
    },
  },
  yamatoTama: {
    character: 'tama',
    type: { en: 'Companion', it: 'Compagna di viaggio' },
    summary: {
      en: 'Yamato travels with Tama while pursuing the thief who took Yasuie’s sword.',
      it: 'Yamato viaggia con Tama mentre insegue il ladro della spada di Yasuie.',
    },
  },
  yamatoUlti: {
    character: 'ulti',
    type: { en: 'Former enemy who follows him', it: 'Ex nemica che lo segue' },
    summary: {
      en: 'Ulti pledges to follow Yamato after he frees her and Page One.',
      it: 'Ulti promette di seguire Yamato dopo che ha liberato lei e Page One.',
    },
  },
  yamatoPage: {
    character: 'page-one',
    type: { en: 'Companion he frees', it: 'Compagno che libera' },
    summary: {
      en: 'Yamato frees Page One from Who’s-Who and travels onward with him and Ulti.',
      it: 'Yamato libera Page One da Who’s-Who e riprende il viaggio con lui e Ulti.',
    },
  },
  rocksLoki: {
    character: 'loki',
    type: {
      en: 'Child he refuses to recruit',
      it: 'Bambino che rifiuta di arruolare',
    },
    summary: {
      en: 'Rocks refuses to take Loki to sea and beats him when the child challenges him.',
      it: 'Rocks rifiuta di portare Loki per mare e lo picchia quando il bambino lo sfida.',
    },
  },
  rocksTeach: {
    character: 'marshall-d-teach',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Rocks is revealed to be Teach’s father.',
      it: 'Viene rivelato che Rocks è il padre di Teach.',
    },
  },
  rocksHarald: {
    character: 'harald',
    type: { en: 'Friend he wants to recruit', it: 'Amico che vuole arruolare' },
    summary: {
      en: 'Rocks repeatedly visits Harald and refuses Kaido’s suggestion to force him into the crew.',
      it: 'Rocks visita più volte Harald e rifiuta il suggerimento di Kaido di costringerlo a entrare nella ciurma.',
    },
  },
  rocksHaraldEstranged: {
    character: 'harald',
    type: { en: 'Friend he breaks with', it: 'Amico con cui rompe' },
    summary: {
      en: 'Rocks abandons his friendship with Harald after their duel over the World Government.',
      it: 'Rocks rompe l’amicizia con Harald dopo il loro duello sul Governo Mondiale.',
    },
  },
  rocksImu: {
    character: 'im',
    type: {
      en: 'Enemy who takes control of him',
      it: 'Nemico che prende il controllo di lui',
    },
    summary: {
      en: 'Imu turns Rocks into a demon and orders him to kill his own family.',
      it: 'Im prende il controllo di Rocks trasformandolo in un demone e gli ordina di uccidere la propria famiglia.',
    },
  },
  rocksRogerPleads: {
    character: 'gold-roger',
    type: {
      en: 'Opponent he asks to kill him',
      it: 'Avversario a cui chiede di ucciderlo',
    },
    summary: {
      en: 'While forced to attack as a demon, Rocks begs Roger and Garp to kill him.',
      it: 'Costretto ad attaccare come un demone, Rocks implora Roger e Garp di ucciderlo.',
    },
  },
  rocksGarpPleads: {
    character: 'monkey-d-garp',
    type: {
      en: 'Opponent he asks to kill him',
      it: 'Avversario a cui chiede di ucciderlo',
    },
    summary: {
      en: 'Rocks begs Garp and Roger to stop him while Imu controls him.',
      it: 'Rocks implora Garp e Roger di fermarlo mentre Im lo controlla.',
    },
  },
  rocksGarling: {
    character: 'figarland-garling',
    type: { en: 'Killer', it: 'Uccisore' },
    summary: {
      en: 'Garling kills Rocks after Roger and Garp leave him defeated at God Valley.',
      it: 'Garling uccide Rocks dopo che Roger e Garp lo hanno sconfitto a God Valley.',
    },
  },
  kawaYamato: {
    character: 'yamato',
    type: {
      en: 'Visitor who delivers Tama’s hat',
      it: 'Visitatore che consegna il cappello di Tama',
    },
    summary: {
      en: 'Yamato delivers Tama’s woven hat to Kawamatsu during the pilgrimage.',
      it: 'Yamato consegna a Kawamatsu il cappello intrecciato da Tama durante il pellegrinaggio.',
    },
  },
  kikuYamato: {
    character: 'yamato',
    type: { en: 'Visitor she welcomes', it: 'Visitatore che accoglie' },
    summary: {
      en: 'Kiku welcomes Yamato to Ringo during the pilgrimage.',
      it: 'Kiku accoglie Yamato a Ringo durante il pellegrinaggio.',
    },
  },
  gyukiYamato: {
    character: 'yamato',
    type: { en: 'Traveller he accompanies', it: 'Viaggiatore che accompagna' },
    summary: {
      en: 'Onimaru accompanies Yamato, Ulti and Page One as they leave Ringo.',
      it: 'Onimaru accompagna Yamato, Ulti e Page One mentre lasciano Ringo.',
    },
  },
  yamatoMomoReturn: {
    character: 'momonosuke',
    type: { en: 'Shogun he returns to', it: 'Shogun da cui torna' },
    summary: {
      en: 'Yamato returns to the Flower Capital and pays respects to Wano’s fallen heroes with Momonosuke.',
      it: 'Yamato torna nella Capitale dei Fiori e rende omaggio agli eroi caduti di Wano insieme a Momonosuke.',
    },
  },
  orochiOden: {
    character: 'kozuki-oden',
    type: { en: 'Heir he supplants', it: 'Erede che spodesta' },
    summary: {
      en: 'Orochi takes the shogunate and forces Oden to dance in public while holding civilians hostage.',
      it: 'Orochi si impadronisce dello shogunato e costringe Oden a ballare in pubblico tenendo i civili in ostaggio.',
    },
  },
  orochiHig: {
    character: 'kurozumi-higurashi',
    type: { en: 'Co-conspirator', it: 'Complice' },
    summary: {
      en: 'Higurashi impersonates Sukiyaki to put Orochi in power.',
      it: 'Higurashi assume le sembianze di Sukiyaki per portare Orochi al potere.',
    },
  },
  orochiSemi: {
    character: 'kurozumi-semimaru',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Semimaru’s barrier prevents Oden from killing Orochi.',
      it: 'La barriera di Semimaru impedisce a Oden di uccidere Orochi.',
    },
  },
  hyoQueen: {
    character: 'queen',
    type: { en: 'Jailer', it: 'Carceriere' },
    summary: {
      en: 'Queen oversees Hyogoro’s imprisonment at Udon.',
      it: 'Queen sorveglia la prigionia di Hyogoro a Udon.',
    },
  },
  hyoOden: {
    character: 'kozuki-oden',
    type: { en: 'Daimyo he supports', it: 'Daimyo che sostiene' },
    summary: {
      en: 'Hyogoro stands by Oden even while he is publicly disgraced under Orochi’s rule.',
      it: 'Hyogoro resta al fianco di Oden anche durante il suo disonore pubblico sotto il governo di Orochi.',
    },
  },
  hatchaYamato: {
    character: 'yamato',
    type: { en: 'Opponent who defeats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Yamato knocks Hatcha down while protecting Momonosuke and Shinobu.',
      it: 'Yamato abbatte Hatcha mentre protegge Momonosuke e Shinobu.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Ownership follows the 52 characters introduced by wano.ts, including aliases.
 * Endpoint gates can delay an already known fact (Izo, Kawamatsu, Ushimaru).
 * Chapter-only entries cover Yamato’s unadapted pilgrimage; their episode
 * numbers only order the entries and never make those facts open in anime.
 */
export const wanoRelationships = {
  'tama': [
    {
      episode: 894,
      chapter: 913,
      value: [links.tamaLuffy, links.tamaHitetsu, links.tamaAce],
    },
    {
      episode: 906,
      chapter: 918,
      value: [
        links.tamaLuffy,
        links.tamaHitetsu,
        links.tamaAce,
        links.tamaSpeed,
      ],
    },
    {
      episode: 1078,
      chapter: 1051,
      value: [
        links.tamaLuffy,
        links.tamaHitetsu,
        links.tamaAce,
        links.tamaSpeedMother,
      ],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.tamaLuffy,
        links.tamaHitetsu,
        links.tamaSpeedMother,
        links.tamaShinobu,
        links.tamaAce,
      ],
    },
    {
      episode: 1180,
      chapter: 1131,
      source: 'chapter',
      value: [
        links.tamaLuffy,
        links.tamaHitetsu,
        links.tamaSpeedMother,
        links.tamaShinobu,
        links.tamaYamato,
      ],
    },
  ],
  'tenguyama-hitetsu': [
    { episode: 894, chapter: 913, value: [links.hitetsuTama] },
    {
      episode: 956,
      chapter: 955,
      value: [links.hitetsuTama, links.hitetsuZoro],
    },
    {
      episode: 1080,
      chapter: 1053,
      value: [
        links.hitetsuTama,
        links.hitetsuZoro,
        links.sukiyakiOdenDaimyo,
        links.sukiyakiRobin,
      ],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.hitetsuTama,
        links.hitetsuZoro,
        links.sukiyakiOdenDaimyo,
        links.sukiyakiMomo,
        links.sukiyakiHiyori,
      ],
    },
  ],
  'kozuki-sukiyaki': [
    { episode: 960, chapter: 960, value: [links.sukiyakiOden] },
    { episode: 962, chapter: 962, value: [links.sukiyakiOdenDaimyo] },
    {
      episode: 1080,
      chapter: 1053,
      value: [links.sukiyakiOdenDaimyo, links.hitetsuTama, links.sukiyakiRobin],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.sukiyakiOdenDaimyo,
        links.sukiyakiMomo,
        links.sukiyakiHiyori,
        links.hitetsuTama,
        links.sukiyakiRobin,
      ],
    },
  ],
  'kiku': [
    { episode: 900, chapter: 914, value: [links.kikuTsuru, links.kikuZoro] },
    {
      episode: 909,
      chapter: 919,
      value: [links.kikuKin, links.kikuTsuru, links.kikuZoro],
    },
    {
      episode: 970,
      chapter: 971,
      value: [links.kikuKin, links.kikuIzo, links.kikuOden, links.kikuTsuru],
    },
    {
      episode: 992,
      chapter: 984,
      value: [
        links.kikuKin,
        links.kikuIzoReunion,
        links.kikuOden,
        links.kikuTsuru,
      ],
    },
    {
      episode: 993,
      chapter: 985,
      value: [
        links.kikuKin,
        links.kikuIzoReunion,
        links.kikuOden,
        links.kikuKanjuro,
        links.kikuTsuru,
      ],
    },
    {
      episode: 1180,
      chapter: 1153,
      source: 'chapter',
      value: [
        links.kikuKin,
        links.kikuIzoReunion,
        links.kikuOden,
        links.kikuKanjuro,
        links.kikuYamato,
      ],
    },
  ],
  'ashura-doji': [
    { episode: 912, chapter: 921, value: [links.ashuraJack] },
    { episode: 918, chapter: 925, value: [links.ashuraKin, links.ashuraJack] },
    {
      episode: 951,
      chapter: 950,
      value: [links.ashuraKinAlly, links.ashuraJack],
    },
    {
      episode: 962,
      chapter: 962,
      value: [links.ashuraOden, links.ashuraKinAlly, links.ashuraJack],
    },
    {
      episode: 1025,
      chapter: 1008,
      value: [
        links.ashuraOden,
        links.ashuraKinAlly,
        links.ashuraKanjuro,
        links.ashuraJack,
      ],
    },
  ],
  'page-one': [
    { episode: 923, chapter: 929, value: [links.pageDrake] },
    { episode: 925, chapter: 931, value: [links.pageSanji, links.pageDrake] },
    {
      episode: 982,
      chapter: 980,
      value: [links.pageUlti, links.pageSanji, links.pageDrake],
    },
    {
      episode: 1032,
      chapter: 1011,
      value: [
        links.pageUlti,
        links.pageLinlin,
        links.pageSanji,
        links.pageDrake,
      ],
    },
    {
      episode: 1180,
      chapter: 1145,
      source: 'chapter',
      value: [
        links.pageUlti,
        links.pageYamato,
        links.pageLinlin,
        links.pageSanji,
        links.pageDrake,
      ],
    },
  ],
  'kurozumi-orochi': [
    { episode: 921, chapter: 927, value: [links.orochiKaido] },
    {
      episode: 928,
      chapter: 933,
      value: [links.orochiKaido, links.orochiKomu],
    },
    {
      episode: 970,
      chapter: 972,
      value: [
        links.orochiKaido,
        links.orochiKomu,
        links.orochiOden,
        links.orochiHig,
        links.orochiSemi,
      ],
    },
    {
      episode: 977,
      chapter: 974,
      value: [
        links.orochiKaido,
        links.orochiKomu,
        links.orochiKanjuro,
        links.orochiOden,
      ],
    },
    {
      episode: 994,
      chapter: 985,
      value: [
        links.orochiKaidoBetray,
        links.orochiKomu,
        links.orochiKanjuro,
        links.orochiOden,
      ],
    },
    {
      episode: 1068,
      chapter: 1041,
      value: [
        links.orochiHiyori,
        links.orochiKaidoBetray,
        links.orochiKanjuro,
        links.orochiOden,
      ],
    },
    {
      episode: 1075,
      chapter: 1048,
      value: [
        links.orochiHiyori,
        links.orochiDenjiro,
        links.orochiKaidoBetray,
        links.orochiKanjuro,
        links.orochiOden,
      ],
    },
  ],
  'shinobu': [
    { episode: 912, chapter: 930, value: [links.shinobuKin] },
    {
      episode: 934,
      chapter: 943,
      value: [links.shinobuKin, links.shinobuFuku],
    },
    {
      episode: 1036,
      chapter: 1015,
      value: [links.shinobuKin, links.shinobuMomo, links.shinobuFuku],
    },
    {
      episode: 1047,
      chapter: 1023,
      value: [links.shinobuMomoAdult, links.shinobuKin, links.shinobuFuku],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.shinobuMomoAdult,
        links.shinobuKin,
        links.shinobuTama,
        links.shinobuFuku,
      ],
    },
  ],
  'hyogoro': [
    { episode: 931, chapter: 935, value: [links.hyoLuffy, links.hyoQueen] },
    {
      episode: 936,
      chapter: 939,
      value: [links.hyoLuffyStudent, links.hyoQueen],
    },
    {
      episode: 971,
      chapter: 969,
      value: [links.hyoLuffyStudent, links.hyoOden, links.hyoQueen],
    },
    {
      episode: 1023,
      chapter: 1007,
      value: [
        links.hyoLuffyStudent,
        links.hyoChopper,
        links.hyoQueen,
        links.hyoOden,
      ],
    },
  ],
  'king': [
    {
      episode: 930,
      chapter: 935,
      value: [links.kingKaido, links.kingQueen, links.kingJack],
    },
    {
      episode: 1046,
      chapter: 1023,
      value: [links.kingKaido, links.kingZoro, links.kingQueen, links.kingJack],
    },
    {
      episode: 1062,
      chapter: 1035,
      value: [
        links.kingKaidoRescue,
        links.kingZoroDefeat,
        links.kingQueen,
        links.kingJack,
      ],
    },
    {
      episode: 1080,
      chapter: 1053,
      value: [
        links.kingKaidoRescue,
        links.kingZoroDefeat,
        links.kingQueen,
        links.kingRyoku,
      ],
    },
  ],
  'queen': [
    { episode: 930, chapter: 935, value: [links.queenKaido, links.queenKing] },
    {
      episode: 1045,
      chapter: 1022,
      value: [links.queenSanji, links.queenKaido, links.queenKing],
    },
    {
      episode: 1061,
      chapter: 1035,
      value: [
        links.queenSanjiDefeat,
        links.queenJudge,
        links.queenKaido,
        links.queenKing,
      ],
    },
    {
      episode: 1080,
      chapter: 1053,
      value: [
        links.queenSanjiDefeat,
        links.queenJudge,
        links.queenKaido,
        links.queenKing,
        links.kingRyoku,
      ],
    },
  ],
  'komurasaki': [
    { episode: 921, chapter: 933, source: 'episode', value: [links.komuToko] },
    { episode: 928, chapter: 933, value: [links.komuToko, links.komuOrochi] },
    {
      episode: 936,
      chapter: 946,
      value: [
        links.komuToko,
        links.hiyoriMomo,
        links.hiyoriZoro,
        links.hiyoriKawa,
        links.komuOrochi,
      ],
    },
    {
      episode: 976,
      chapter: 973,
      value: [
        links.komuToko,
        links.hiyoriDenjiro,
        links.hiyoriMomo,
        links.hiyoriKawa,
        links.hiyoriZoro,
      ],
    },
    {
      episode: 1068,
      chapter: 1041,
      value: [
        links.komuToko,
        links.hiyoriDenjiro,
        links.hiyoriMomo,
        links.hiyoriKawa,
        links.hiyoriOrochi,
      ],
    },
  ],
  'kozuki-hiyori': [
    { episode: 910, chapter: 920, value: [links.hiyoriMomo] },
    {
      episode: 936,
      chapter: 946,
      value: [
        links.hiyoriMomo,
        links.hiyoriZoro,
        links.hiyoriKawa,
        links.komuToko,
      ],
    },
    {
      episode: 976,
      chapter: 973,
      value: [
        links.hiyoriMomo,
        links.hiyoriDenjiro,
        links.hiyoriKawa,
        links.hiyoriZoro,
        links.komuToko,
      ],
    },
    {
      episode: 1068,
      chapter: 1041,
      value: [
        links.hiyoriMomo,
        links.hiyoriDenjiro,
        links.hiyoriKawa,
        links.hiyoriZoro,
        links.hiyoriOrochi,
      ],
    },
  ],
  'toko': [
    { episode: 921, chapter: 933, value: [links.tokoKomu] },
    { episode: 939, chapter: 943, value: [links.tokoYasu, links.tokoKomu] },
    {
      episode: 1077,
      chapter: 1050,
      value: [links.tokoYasuMemory, links.tokoKomu],
    },
  ],
  'kyoshiro': [
    { episode: 921, chapter: 933, value: [links.kyoshiroOrochi] },
    {
      episode: 976,
      chapter: 973,
      value: [
        links.denjiroOrochi,
        links.denjiroHiyori,
        links.denjiroOden,
        links.denjiroKin,
      ],
    },
    {
      episode: 1075,
      chapter: 1048,
      value: [
        links.denjiroOrochiEnd,
        links.denjiroHiyori,
        links.denjiroOden,
        links.denjiroKin,
      ],
    },
    {
      episode: 1180,
      chapter: 1123,
      source: 'chapter',
      value: [
        links.denjiroOrochiEnd,
        links.denjiroHiyori,
        links.denjiroOden,
        links.denjiroKin,
        links.denjiroYamato,
      ],
    },
  ],
  'denjiro': [
    { episode: 960, chapter: 960, value: [links.denjiroKin] },
    {
      episode: 961,
      chapter: 961,
      value: [links.denjiroOden, links.denjiroKin],
    },
    {
      episode: 976,
      chapter: 973,
      value: [
        links.denjiroOden,
        links.denjiroKin,
        links.denjiroHiyori,
        links.denjiroOrochi,
      ],
    },
    {
      episode: 1075,
      chapter: 1048,
      value: [
        links.denjiroOden,
        links.denjiroKin,
        links.denjiroHiyori,
        links.denjiroOrochiEnd,
      ],
    },
    {
      episode: 1180,
      chapter: 1123,
      source: 'chapter',
      value: [
        links.denjiroOden,
        links.denjiroKin,
        links.denjiroHiyori,
        links.denjiroOrochiEnd,
        links.denjiroYamato,
      ],
    },
  ],
  'shimotsuki-yasuie': [
    { episode: 940, chapter: 943, value: [links.yasuToko, links.yasuOrochi] },
    {
      episode: 961,
      chapter: 961,
      value: [links.yasuToko, links.yasuOrochi, links.yasuOden],
    },
  ],
  'gyukimaru': [
    { episode: 934, chapter: 943, value: [links.gyukiZoro] },
    {
      episode: 954,
      chapter: 962,
      value: [links.gyukiKawa, links.gyukiUshi, links.gyukiZoro],
    },
    {
      episode: 1180,
      chapter: 1159,
      source: 'chapter',
      value: [
        links.gyukiKawa,
        links.gyukiUshi,
        links.gyukiZoro,
        links.gyukiYamato,
      ],
    },
  ],
  'fukurokuju': [
    {
      episode: 934,
      chapter: 943,
      value: [links.fukuOrochi, links.fukuShinobu],
    },
    {
      episode: 1063,
      chapter: 1036,
      value: [links.fukuOrochi, links.fukuRaizo, links.fukuShinobu],
    },
    {
      episode: 1069,
      chapter: 1041,
      value: [links.fukuOrochi, links.fukuRaizoEnd, links.fukuShinobu],
    },
  ],
  'kawamatsu': [
    { episode: 936, chapter: 946, value: [links.kawaHyo] },
    {
      episode: 954,
      chapter: 953,
      value: [links.kawaHiyori, links.kawaGyuki, links.kawaHyo],
    },
    {
      episode: 962,
      chapter: 963,
      value: [links.kawaHiyori, links.kawaGyuki, links.kawaHyo, links.kawaOden],
    },
    {
      episode: 1180,
      chapter: 1152,
      source: 'chapter',
      value: [
        links.kawaHiyori,
        links.kawaGyuki,
        links.kawaHyo,
        links.kawaOden,
        links.kawaYamato,
      ],
    },
  ],
  'rocks-d-xebec': [
    {
      episode: 958,
      chapter: 957,
      value: [
        links.rocksWhitebeard,
        links.rocksKaido,
        links.rocksLinlin,
        links.rocksRoger,
        links.rocksGarp,
      ],
    },
    {
      episode: 1175,
      chapter: 1145,
      value: [
        links.rocksWhitebeard,
        links.rocksKaido,
        links.rocksLoki,
        links.rocksRoger,
        links.rocksGarp,
      ],
    },
    {
      episode: 1180,
      chapter: 1154,
      source: 'chapter',
      value: [
        links.rocksTeach,
        links.rocksWhitebeard,
        links.rocksKaido,
        links.rocksLoki,
        links.rocksRoger,
      ],
    },
    {
      episode: 1180,
      chapter: 1156,
      source: 'chapter',
      value: [
        links.rocksTeach,
        links.rocksHarald,
        links.rocksWhitebeard,
        links.rocksKaido,
        links.rocksLoki,
      ],
    },
    {
      episode: 1180,
      chapter: 1158,
      source: 'chapter',
      value: [
        links.rocksTeach,
        links.rocksHaraldEstranged,
        links.rocksWhitebeard,
        links.rocksKaido,
        links.rocksLoki,
      ],
    },
    {
      episode: 1180,
      chapter: 1164,
      source: 'chapter',
      value: [
        links.rocksTeach,
        links.rocksImu,
        links.rocksRogerPleads,
        links.rocksGarpPleads,
        links.rocksHaraldEstranged,
      ],
    },
    {
      episode: 1180,
      chapter: 1166,
      source: 'chapter',
      value: [
        links.rocksTeach,
        links.rocksGarling,
        links.rocksImu,
        links.rocksRogerPleads,
        links.rocksGarpPleads,
      ],
    },
  ],
  'kozuki-oden': [
    { episode: 961, chapter: 961, value: [links.odenSuki, links.odenKin] },
    {
      episode: 964,
      chapter: 964,
      value: [links.odenWhitebeard, links.odenSuki, links.odenKin],
    },
    {
      episode: 965,
      chapter: 966,
      value: [
        links.odenWhitebeard,
        links.odenToki,
        links.odenSuki,
        links.odenKin,
      ],
    },
    {
      episode: 967,
      chapter: 967,
      value: [
        links.odenRoger,
        links.odenWhitebeard,
        links.odenToki,
        links.odenSuki,
        links.odenKin,
      ],
    },
    {
      episode: 974,
      chapter: 972,
      value: [
        links.odenToki,
        links.odenKin,
        links.odenKaido,
        links.odenRoger,
        links.odenWhitebeard,
      ],
    },
  ],
  'kozuki-toki': [
    {
      episode: 965,
      chapter: 966,
      value: [links.tokiOden, links.tokiMomo, links.tokiHiyori],
    },
    {
      episode: 975,
      chapter: 973,
      value: [
        links.tokiOden,
        links.tokiMomoFuture,
        links.tokiHiyori,
        links.tokiKin,
      ],
    },
  ],
  'kurozumi-higurashi': [
    { episode: 970, chapter: 972, source: 'episode', value: [links.higOrochi] },
    { episode: 974, chapter: 972, value: [links.higOrochi, links.higKaido] },
  ],
  'kurozumi-semimaru': [
    { episode: 970, chapter: 972, value: [links.semiOrochi] },
  ],
  'izo': [
    {
      episode: 970,
      chapter: 971,
      value: [links.izoKiku, links.izoOden, links.izoWhitebeard],
    },
    {
      episode: 992,
      chapter: 984,
      value: [links.izoKikuReunion, links.izoOden, links.izoWhitebeard],
    },
    {
      episode: 1068,
      chapter: 1041,
      value: [
        links.izoKikuReunion,
        links.izoOden,
        links.izoWhitebeard,
        links.izoMaha,
      ],
    },
  ],
  'ulti': [
    { episode: 982, chapter: 980, value: [links.ultiPage] },
    { episode: 990, chapter: 983, value: [links.ultiPage, links.ultiYamato] },
    {
      episode: 1008,
      chapter: 995,
      value: [links.ultiPage, links.ultiNami, links.ultiYamato],
    },
    {
      episode: 1038,
      chapter: 1016,
      value: [links.ultiPage, links.ultiNamiEnd, links.ultiYamato],
    },
    {
      episode: 1180,
      chapter: 1146,
      source: 'chapter',
      value: [links.ultiPage, links.ultiYamatoAlly, links.ultiNamiEnd],
    },
  ],
  'whos-who': [
    { episode: 1013, chapter: 998, value: [links.whoJinbe] },
    { episode: 1039, chapter: 1017, value: [links.whoJinbe, links.whoShanks] },
    {
      episode: 1040,
      chapter: 1018,
      value: [links.whoJinbeEnd, links.whoShanks],
    },
    {
      episode: 1180,
      chapter: 1141,
      source: 'chapter',
      value: [links.whoJinbeEnd, links.whoShanks, links.whoUlti, links.whoPage],
    },
    {
      episode: 1180,
      chapter: 1142,
      source: 'chapter',
      value: [
        links.whoYamato,
        links.whoUlti,
        links.whoPage,
        links.whoJinbeEnd,
        links.whoShanks,
      ],
    },
  ],
  'black-maria': [
    { episode: 1010, chapter: 997, value: [links.mariaSanji] },
    {
      episode: 1020,
      chapter: 1005,
      value: [links.mariaRobin, links.mariaSanji],
    },
    {
      episode: 1044,
      chapter: 1021,
      value: [links.mariaRobinEnd, links.mariaSanji],
    },
  ],
  'sasaki': [
    { episode: 988, chapter: 982, value: [links.sasakiKyoshiro] },
    {
      episode: 1012,
      chapter: 998,
      value: [links.sasakiFranky, links.sasakiKyoshiro],
    },
    {
      episode: 1042,
      chapter: 1019,
      value: [links.sasakiFrankyEnd, links.sasakiKyoshiro],
    },
  ],
  'yamato': [
    { episode: 990, chapter: 983, value: [links.yamatoLuffy] },
    {
      episode: 992,
      chapter: 984,
      value: [links.yamatoLuffy, links.yamatoKaido, links.yamatoOden],
    },
    {
      episode: 1009,
      chapter: 996,
      value: [
        links.yamatoLuffy,
        links.yamatoKaido,
        links.yamatoOden,
        links.yamatoMomo,
      ],
    },
    {
      episode: 1014,
      chapter: 999,
      value: [
        links.yamatoLuffy,
        links.yamatoKaido,
        links.yamatoOden,
        links.yamatoMomo,
        links.yamatoAce,
      ],
    },
    {
      episode: 1088,
      chapter: 1059,
      value: [
        links.yamatoLuffy,
        links.yamatoMomoStay,
        links.yamatoOden,
        links.yamatoAce,
        links.yamatoKaido,
      ],
    },
    {
      episode: 1180,
      chapter: 1131,
      source: 'chapter',
      value: [
        links.yamatoLuffy,
        links.yamatoMomoStay,
        links.yamatoOden,
        links.yamatoAce,
        links.yamatoTama,
      ],
    },
    {
      episode: 1180,
      chapter: 1148,
      source: 'chapter',
      value: [
        links.yamatoLuffy,
        links.yamatoMomoStay,
        links.yamatoTama,
        links.yamatoUlti,
        links.yamatoPage,
      ],
    },
    {
      episode: 1180,
      chapter: 1161,
      source: 'chapter',
      value: [
        links.yamatoLuffy,
        links.yamatoMomoReturn,
        links.yamatoOden,
        links.yamatoUlti,
        links.yamatoPage,
      ],
    },
  ],
  'bao-huang': [
    { episode: 985, chapter: 979, value: [links.baoKaido] },
    {
      episode: 1038,
      chapter: 1017,
      value: [links.baoKaido, links.baoUsopp, links.baoTama],
    },
  ],
  'tsurujo': [
    {
      episode: 900,
      chapter: 914,
      value: [links.tsuruKiku, links.tsuruZoro, links.tsuruTama],
    },
    {
      episode: 911,
      chapter: 921,
      value: [
        links.tsuruKin,
        links.tsuruKiku,
        links.tsuruZoro,
        links.tsuruTama,
      ],
    },
    {
      episode: 1083,
      chapter: 1056,
      value: [
        links.tsuruKinReturn,
        links.tsuruKiku,
        links.tsuruZoro,
        links.tsuruTama,
      ],
    },
    {
      episode: 1180,
      chapter: 1116,
      source: 'chapter',
      value: [
        links.tsuruKinReturn,
        links.tsuruKiku,
        links.tsuruZoro,
        links.tsuruTama,
        links.tsuruYamato,
      ],
    },
  ],
  'holdem': [
    { episode: 901, chapter: 915, value: [links.holdemTama] },
    {
      episode: 905,
      chapter: 917,
      value: [links.holdemTama, links.holdemLuffy],
    },
    {
      episode: 1180,
      chapter: 1135,
      source: 'chapter',
      value: [links.holdemTamaEscape, links.holdemLuffy],
    },
    {
      episode: 1180,
      chapter: 1136,
      source: 'chapter',
      value: [links.holdemTamaEscape, links.holdemYamato, links.holdemLuffy],
    },
  ],
  'urashima': [
    { episode: 902, chapter: 915, value: [links.urashimaKiku] },
    {
      episode: 904,
      chapter: 916,
      value: [links.urashimaKiku, links.urashimaLuffy],
    },
  ],
  'speed': [
    { episode: 906, chapter: 918, value: [links.speedTama] },
    { episode: 1078, chapter: 1051, value: [links.speedTamaMother] },
  ],
  'dobon': [
    { episode: 919, chapter: 926, value: [links.dobonLuffy, links.dobonKid] },
  ],
  'daikoku': [
    { episode: 928, chapter: 933, value: [links.daikokuOrochi] },
    {
      episode: 1023,
      chapter: 1007,
      value: [links.daikokuHyo, links.daikokuOrochi],
    },
  ],
  'raijin': [{ episode: 928, chapter: 933, value: [links.raijinFujin] }],
  'fujin': [{ episode: 928, chapter: 933, value: [links.fujinRaijin] }],
  'alpacaman': [{ episode: 936, chapter: 939, value: [links.alpacaHyo] }],
  'daifugo': [
    { episode: 931, chapter: 935, value: [links.daifugoHyo] },
    {
      episode: 1019,
      chapter: 1004,
      value: [links.daifugoTama, links.daifugoHyo],
    },
  ],
  'babanuki': [
    { episode: 930, chapter: 935, value: [links.babaQueen] },
    { episode: 953, chapter: 952, value: [links.babaTama, links.babaQueen] },
  ],
  'solitaire': [{ episode: 932, chapter: 936, value: [links.solitaireRaizo] }],
  'shimotsuki-ushimaru': [
    { episode: 954, chapter: 962, value: [links.ushiGyuki] },
    {
      episode: 1048,
      chapter: 1024,
      value: [links.ushiGyuki, links.ushiYamato],
    },
  ],
  'hatcha': [
    { episode: 1002, chapter: 991, value: [links.hatchaFranky] },
    {
      episode: 1009,
      chapter: 996,
      value: [links.hatchaYamato, links.hatchaFranky],
    },
  ],
  'hotei': [
    { episode: 1023, chapter: 1006, value: [links.hoteiKaido, links.hoteiHyo] },
  ],
  'fuga': [
    { episode: 1055, chapter: 1030, value: [links.fugaApoo] },
    { episode: 1063, chapter: 1036, value: [links.fugaYamato, links.fugaApoo] },
  ],
  'kazenbo': [
    { episode: 1056, chapter: 1030, value: [links.kazenboKanjuro] },
    {
      episode: 1065,
      chapter: 1038,
      value: [links.kazenboKanjuro, links.kazenboYamato],
    },
    {
      episode: 1071,
      chapter: 1044,
      value: [links.kazenboKanjuro, links.kazenboYamato, links.kazenboOrochi],
    },
  ],
  'shimotsuki-kozaburo': [
    {
      episode: 1060,
      chapter: 1033,
      value: [links.kozaburoZoro, links.kozaburoKuina],
    },
  ],
  'maha': [
    { episode: 1068, chapter: 1041, value: [links.mahaIzo, links.mahaRobin] },
  ],
  'guernica': [
    {
      episode: 1080,
      chapter: 1053,
      value: [links.guernicaMaha, links.guernicaLuffy, links.guernicaKaido],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
