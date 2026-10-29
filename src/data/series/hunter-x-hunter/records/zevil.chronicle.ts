import type { Story, Timeline } from '~/data/types'

/** The dated stories for the characters of the Fourth Phase and the final bracket. */
export const zevilChronicles = {
  khara: [
    {
      episode: 14,
      chapter: 23,
      value: {
        title: { it: 'La guida della barca', en: 'The guide on the boat' },
        body: {
          it: 'Sulla barca a vapore verso l’Isola di Zevil, Khara si presenta come la nuova guida e fa i complimenti ai ventiquattro aspiranti rimasti. Spiega che il viaggio dura due ore e che tutti hanno già l’invito per l’esame dell’anno dopo. Nessuno risponde e lei si scoraggia. Allo sbarco chiama gli aspiranti nell’ordine in cui sono usciti dalla Torre di Lotta, a due minuti l’uno dall’altro, e comincia da [[hisoka|Hisoka]]. Ricorda che resteranno sull’isola una settimana e che ognuno deve raccogliere sei punti.',
          en: 'On the steamboat to Zevil Island, Khara introduces herself as the new guide and congratulates the twenty-four remaining applicants. She says the trip takes two hours and that everyone already has an invitation to next year’s exam. Nobody answers and she is discouraged. At the landing she calls the applicants in the order they left Trick Tower, two minutes apart, starting with [[hisoka|Hisoka]]. She reminds them they will stay on the island for a week and that each must collect six points.',
        },
      },
    },
  ],
  amori: [
    {
      episode: 3,
      chapter: 29,
      value: {
        title: { it: 'I tre fratelli', en: 'The three brothers' },
        body: {
          it: 'Fra i veterani che [[tonpa|Tonpa]] indica nel tunnel ci sono i tre fratelli Amori. Tonpa spiega a [[gon-freecss|Gon]], [[kurapika|Kurapika]] e [[leorio-paradinight|Leorio]] che i tre si presentano all’esame insieme e lavorano in squadra. Come gli altri della sua lista, ci hanno già provato senza passare. Poi Tonpa li avverte di stare alla larga da [[hisoka|Hisoka]].',
          en: 'Among the regulars [[tonpa|Tonpa]] points out in the tunnel are the three Amori brothers. Tonpa tells [[gon-freecss|Gon]], [[kurapika|Kurapika]] and [[leorio-paradinight|Leorio]] that the three take the exam together and work as a team. Like the others on his list, they have tried before without passing. Then Tonpa warns the newcomers to keep away from [[hisoka|Hisoka]].',
        },
      },
    },
    {
      episode: 17,
      chapter: 29,
      value: {
        title: {
          it: 'Tre fratelli e un bambino',
          en: 'Three brothers and a boy',
        },
        body: {
          it: 'Amori arriva con [[umori|Umori]] per vedere se il fratello minore ha già preso la targhetta di [[killua|Killua]]. Quando scopre che [[imori|Imori]] non ha ancora fatto niente, lo rimprovera e lo costringe ad attaccare. Poi i tre capiscono di non avere davanti un bambino qualsiasi e si dispongono in formazione. Prima che si muovano, Killua compare alle spalle di Amori e lo prende in ostaggio.',
          en: 'Amori arrives with [[umori|Umori]] to see whether their youngest brother has taken [[killua|Killua]]’s badge yet. Finding that [[imori|Imori]] has done nothing, he scolds him and forces him to attack. The three then realize this is no ordinary child and move into formation. Before they can act, Killua appears behind Amori and takes him hostage.',
        },
      },
    },
  ],
  umori: [
    {
      episode: 3,
      chapter: 29,
      value: {
        title: { it: 'Un gioco di squadra', en: 'A team effort' },
        body: {
          it: '[[tonpa|Tonpa]], che ha fallito l’esame trentaquattro volte, si offre di parlare a [[gon-freecss|Gon]] degli aspiranti che continuano a ripresentarsi. Fra quelli che indica ci sono i tre fratelli Amori, che lavorano sempre in squadra. Gon e i suoi due compagni hanno appena ricevuto le loro targhette.',
          en: '[[tonpa|Tonpa]], who has failed the exam thirty-four times, offers to tell [[gon-freecss|Gon]] about the applicants who keep coming back. Among those he points out are the three Amori brothers, who always work as a team. Gon and his two companions have only just been given their badges.',
        },
      },
    },
    {
      episode: 17,
      chapter: 29,
      value: {
        title: { it: 'La targhetta consegnata', en: 'The badge handed over' },
        body: {
          it: 'Umori raggiunge [[imori|Imori]] insieme ad [[amori|Amori]] e insiste perché porti a termine il piano contro [[killua|Killua]]. Quando Killua prende [[amori|Amori]] in ostaggio, gli chiede la sua targhetta. Umori gliela dà. Killua lancia a un centinaio di metri le altre targhette e se ne va.',
          en: 'Umori joins [[imori|Imori]] with [[amori|Amori]] and insists he carry out the plan against [[killua|Killua]]. When Killua takes [[amori|Amori]] hostage, he asks Umori for his badge. Umori hands it over. Killua throws the other badges hundreds of feet away and leaves.',
        },
      },
    },
  ],
  imori: [
    {
      episode: 3,
      chapter: 29,
      value: {
        title: {
          it: 'Una famiglia di aspiranti',
          en: 'A family of applicants',
        },
        body: {
          it: 'Il giorno dell’esame [[tonpa|Tonpa]] presenta a [[gon-freecss|Gon]], [[kurapika|Kurapika]] e [[leorio-paradinight|Leorio]] gli aspiranti che conosce dagli anni passati. Nella sua lista ci sono i tre fratelli Amori. I tre tornano all’esame insieme e contano sul gioco di squadra. Tonpa avverte anche i nuovi arrivati di stare lontani da [[hisoka|Hisoka]].',
          en: 'On the day of the exam, [[tonpa|Tonpa]] introduces [[gon-freecss|Gon]], [[kurapika|Kurapika]] and [[leorio-paradinight|Leorio]] to the applicants he knows from earlier years. The three Amori brothers are on his list. The three come back to the exam together and rely on teamwork. Tonpa also warns the newcomers to keep away from [[hisoka|Hisoka]].',
        },
      },
    },
    {
      episode: 17,
      chapter: 29,
      value: {
        title: { it: 'Il pedinatore', en: 'The stalker' },
        body: {
          it: 'Imori segue [[killua|Killua]] da un pezzo e non osa attaccarlo, perché vuole farlo mentre dorme. Killua lo scopre e gli va incontro, spaventandolo. Quando arrivano [[amori|Amori]] e [[umori|Umori]], Imori è costretto a farsi avanti: chiede la targhetta e prova a colpirlo con un calcio. Killua si rialza subito e tira fuori dalla tasca di Imori la targhetta di lui. Non è quella del suo bersaglio.',
          en: 'Imori has been stalking [[killua|Killua]] for a long time without daring to attack, since he plans to do it while Killua sleeps. Killua spots him and walks over, frightening him. When [[amori|Amori]] and [[umori|Umori]] arrive, Imori is forced forward: he demands the badge and kicks Killua. Killua gets up at once and pulls Imori’s own badge from his pocket. It is not his target.',
        },
      },
    },
  ],
  ponzu: [
    {
      episode: 17,
      chapter: 30,
      value: {
        title: { it: 'La grotta dei serpenti', en: 'The cave of snakes' },
        body: {
          it: '[[leorio-paradinight|Leorio]] cerca la candidata numero 246, Ponzu. [[gon-freecss|Gon]] segue l’odore delle sue sostanze fino a una grotta, dove Leorio entra da solo. [[kurapika|Kurapika]] e Gon lo sentono gridare e corrono dentro: Leorio è a terra con i morsi dei serpenti. Ponzu spiega che nessuno può uscire, perché [[bourbon|Burbon]] ha preparato una trappola e i suoi serpenti attaccano chi ci prova. Aggiunge di averlo già ucciso.',
          en: '[[leorio-paradinight|Leorio]] is looking for applicant number 246, Ponzu. [[gon-freecss|Gon]] follows the smell of her chemicals to a cave, where Leorio goes in alone. [[kurapika|Kurapika]] and Gon hear his voice and run in: Leorio is on the ground covered in snakebites. Ponzu explains that nobody can leave, because [[bourbon|Bourbon]] set a trap and his snakes attack anyone who tries. She adds that she has already killed him.',
        },
      },
    },
    {
      episode: 18,
      chapter: 31,
      value: {
        title: { it: 'Il gas e il badge', en: 'The gas and the badge' },
        body: {
          it: 'Ponzu racconta che [[bourbon|Burbon]] era il suo bersaglio e che l’ha ucciso per sbaglio durante il loro scontro, in cui ha usato le api. Rinuncia a superare la prova e aspetta che gli esaminatori la trovino con il rilevatore sulla targhetta. [[gon-freecss|Gon]] le chiede il suo gas soporifero per addormentare i serpenti e lo ottiene in cambio della targhetta di Burbon. Trattiene il fiato, porta fuori tutti e poi le restituisce quella targhetta ma si tiene la sua, come compenso.',
          en: 'Ponzu says [[bourbon|Bourbon]] was her target and that she killed him by accident in their fight, where she used bees. She gives up on passing and waits for the examiners to find her through the tracker on her badge. [[gon-freecss|Gon]] asks for her sleeping gas to put the snakes to sleep and gets it in exchange for Bourbon’s badge. He holds his breath and carries everyone out, then gives her that badge but keeps her own as a fee.',
        },
      },
    },
  ],
  bourbon: [
    {
      episode: 3,
      chapter: 5,
      value: {
        title: { it: 'L’incantatore di serpenti', en: 'The snake charmer' },
        body: {
          it: 'Nel tunnel prima della prima prova, [[tonpa|Tonpa]] indica a [[gon-freecss|Gon]], [[kurapika|Kurapika]] e [[leorio-paradinight|Leorio]] i veterani dell’esame. Burbon è uno di loro: un incantatore di serpenti che ha già tentato l’esame molte volte. Tonpa lo descrive come un concorrente che non molla mai. Poco dopo li avverte di tenersi alla larga da [[hisoka|Hisoka]].',
          en: 'In the tunnel before the First Phase, [[tonpa|Tonpa]] points out the veterans of the exam to [[gon-freecss|Gon]], [[kurapika|Kurapika]] and [[leorio-paradinight|Leorio]]. Bourbon is one of them: a snake charmer who has taken the exam many times. Tonpa describes him as a competitor who never gives up. Soon after, he warns the three to keep away from [[hisoka|Hisoka]].',
        },
      },
    },
    {
      episode: 17,
      chapter: 30,
      value: {
        title: { it: 'La trappola', en: 'The trap' },
        body: {
          it: 'Nella grotta Burbon ha preparato una trappola: i suoi serpenti attaccano chiunque provi a uscire. [[leorio-paradinight|Leorio]] entra e viene morso. [[gon-freecss|Gon]] e [[kurapika|Kurapika]] accorrono e trovano [[ponzu|Ponzu]]. Lei dice di aver già ucciso Burbon, ma la trappola resta in funzione e nessuno può lasciare la grotta.',
          en: 'In the cave Bourbon has set a trap: his snakes attack anyone who tries to leave. [[leorio-paradinight|Leorio]] enters and is bitten. [[gon-freecss|Gon]] and [[kurapika|Kurapika]] run in and find [[ponzu|Ponzu]]. She says she has already killed Bourbon, but the trap still works and nobody can leave the cave.',
        },
      },
    },
  ],
  gittarackur: [
    {
      episode: 19,
      chapter: 33,
      value: {
        title: { it: 'Un volto nuovo', en: 'A new face' },
        body: {
          it: 'Durante la quarta prova Ghitarakur colpisce con i suoi aghi un aspirante ferito che si lancia contro [[hisoka|Hisoka]]. Poi si toglie gli aghi dal viso e i suoi tratti cambiano. Si vede che conosce Hisoka: gli consegna la targhetta di un altro aspirante. Ha già sei punti, quindi scava una buca e vi dorme fino all’ultimo giorno. Arriva così tra i nove aspiranti dell’ultima prova.',
          en: 'During the Fourth Phase, Gittarackur strikes down a wounded applicant charging at [[hisoka|Hisoka]] with his needles. He then pulls the needles from his face and his features change. He knows Hisoka: he hands him another applicant’s badge. He already has six points, so he digs a hole and sleeps in it until the last day. He reaches the Final Phase among the nine applicants.',
        },
      },
    },
    {
      episode: 20,
      chapter: 36,
      value: {
        title: { it: 'Il fratello maggiore', en: 'The older brother' },
        body: {
          it: 'Nell’ultima prova Ghitarakur affronta [[killua|Killua]] e si rivela: è [[illumi|Illumi]], suo fratello maggiore. Dice che Killua non è degno di diventare Hunter e deve vivere da assassino. Killua risponde che vuole solo essere amico di [[gon-freecss|Gon]]. Illumi decide di uccidere Gon, ma [[hanzo|Hanzo]], [[kurapika|Kurapika]] e [[leorio-paradinight|Leorio]] gli sbarrano la porta. Allora vuole prima superare l’esame. Killua si arrende e lui ammette di aver mentito sull’uccisione.',
          en: 'In the Final Phase, Gittarackur faces [[killua|Killua]] and reveals himself: he is [[illumi|Illumi]], Killua’s older brother. He says Killua is unworthy of becoming a Hunter and should live as an assassin. Killua answers that he only wants to be friends with [[gon-freecss|Gon]]. Illumi decides to kill Gon, but [[hanzo|Hanzo]], [[kurapika|Kurapika]] and [[leorio-paradinight|Leorio]] block the door. He chooses to pass the exam first. Killua surrenders, and Illumi admits he lied about killing Gon.',
        },
      },
    },
  ],
  pokkle: [
    {
      episode: 18,
      chapter: 24,
      value: {
        title: { it: 'La freccia nell’erba', en: 'The arrow in the grass' },
        body: {
          it: 'Sull’Isola di Zevil Pockul pedina un altro aspirante nell’erba alta, mentre [[gon-freecss|Gon]] guarda da un albero. La freccia ferisce l’uomo solo di striscio, ma la punta è drogata e poco dopo lui crolla a terra. Pockul gli dice che la droga lo terrà a terra per giorni e che c’è acqua lì vicino, così non morirà. Poi prende la sua targhetta e se ne va. Gon decide di avvicinarsi al suo bersaglio nello stesso modo.',
          en: 'On Zevil Island, Pokkle stalks another applicant through tall grass while [[gon-freecss|Gon]] watches from a tree. The arrow only grazes the man, but its tip is drugged, and he soon collapses. Pokkle tells him the drug will keep him down for days and that there is water nearby, so he will not die. Then he takes his badge and walks off. Gon decides to approach his own target the same way.',
        },
      },
    },
    {
      episode: 19,
      chapter: 33,
      value: {
        title: { it: 'L’arciere', en: 'The archer' },
        body: {
          it: 'Nella quarta prova Pockul pedina un altro aspirante nell’erba alta. [[gon-freecss|Gon]] lo osserva. Pockul scocca una freccia che lo ferisce di striscio, ma la punta è coperta da un sedativo che lo paralizza. Poi gli prende la targhetta e gli dice che c’è acqua lì vicino, così non morirà. Supera la caccia e arriva fra i nove aspiranti dell’ultima prova.',
          en: 'In the Fourth Phase, Pokkle stalks another applicant through tall grass. [[gon-freecss|Gon]] watches. Pokkle fires an arrow that only grazes him, but its tip is coated with a sedative that paralyzes him. He takes his badge and tells him there is water nearby, so he will not die. He passes the hunt and reaches the Final Phase among the nine applicants.',
        },
      },
    },
    {
      episode: 20,
      chapter: 35,
      value: {
        title: {
          it: 'Passare senza combattere',
          en: 'Passing without a fight',
        },
        body: {
          it: 'Nel terzo incontro [[hanzo|Hanzo]] usa con Pockul la stessa tattica che ha usato con [[gon-freecss|Gon]], e lui si arrende. Nel quinto incontro [[killua|Killua]] non vuole combattere con lui e si ritira. Pockul supera l’esame. A [[gon-freecss|Gon]] il racconto dei due incontri arriva da [[satotz|Satoshi]], dopo la fine della prova.',
          en: 'In the third match, [[hanzo|Hanzo]] uses the same tactic on Pokkle that he used on [[gon-freecss|Gon]], and Pokkle surrenders. In the fifth match [[killua|Killua]] does not want to fight him and forfeits. Pokkle passes the exam. [[gon-freecss|Gon]] hears about both matches from [[satotz|Satotz]] after the phase is over.',
        },
      },
    },
  ],
  bodoro: [
    {
      episode: 3,
      chapter: 33,
      source: 'episode',
      value: {
        title: { it: 'Il maestro di kung fu', en: 'The kung fu master' },
        body: {
          it: 'Nel tunnel dove gli aspiranti aspettano la prima prova, [[tonpa|Tonpa]] indica a [[gon-freecss|Gon]], [[kurapika|Kurapika]] e [[leorio-paradinight|Leorio]] alcuni dei concorrenti che conosce. Uno di loro è Bodoro, un anziano maestro di kung fu. Tonpa è al suo trentacinquesimo tentativo e ha già incontrato molti di loro agli esami precedenti. Avverte anche i tre di stare lontani da [[hisoka|Hisoka]].',
          en: 'In the tunnel where the applicants wait for the First Phase, [[tonpa|Tonpa]] points out some of the competitors he knows to [[gon-freecss|Gon]], [[kurapika|Kurapika]] and [[leorio-paradinight|Leorio]]. One of them is Bodoro, an elderly kung fu master. Tonpa is on his thirty-fifth attempt and has met many of them at earlier exams. He also warns the three to keep away from [[hisoka|Hisoka]].',
        },
      },
    },
    {
      episode: 19,
      chapter: 33,
      value: {
        title: {
          it: 'Non combatte contro i bambini',
          en: 'He will not fight children',
        },
        body: {
          it: 'Bodoro è un anziano esperto di arti marziali e arriva all’ultima prova. Nell’intervista, [[netero|Netero]] gli chiede con chi vuole combattere, e lui dichiara di non voler affrontare i bambini. Il tabellone stabilisce gli incontri: per superare l’esame basta una vittoria, e chi perde risale il tabellone finché un solo aspirante resta senza vittorie.',
          en: 'Bodoro is an elderly martial artist who reaches the Final Phase. In his interview, [[netero|Netero]] asks whom he wants to fight, and he says he will not fight children. The bracket sets the matches: one win is enough to pass the exam, and losers move up the bracket until only one applicant is left without a win.',
        },
      },
    },
    {
      episode: 20,
      chapter: 36,
      value: {
        title: { it: 'Due incontri, una morte', en: 'Two matches, one death' },
        body: {
          it: '[[hisoka|Hisoka]] batte Bodoro, che si rifiuta di arrendersi. Hisoka gli sussurra qualcosa all’orecchio e Bodoro cede. È troppo ferito per proseguire e il suo secondo incontro, con [[leorio-paradinight|Leorio]], viene rimandato. Quando comincia, [[killua|Killua]] compare alle sue spalle e lo uccide sul colpo. Per questo Killua viene squalificato e fallisce l’esame.',
          en: '[[hisoka|Hisoka]] beats Bodoro, who refuses to surrender. Hisoka whispers something in his ear and Bodoro yields. He is too hurt to go on, and his next match, against [[leorio-paradinight|Leorio]], is postponed. When it begins, [[killua|Killua]] appears behind him and kills him on the spot. For this Killua is disqualified and fails the exam.',
        },
      },
    },
  ],
  goz: [
    {
      episode: 14,
      chapter: 23,
      source: 'chapter',
      value: {
        title: { it: 'Una lancia sulla barca', en: 'A spear on the boat' },
        body: {
          it: 'Fuori dalla Torre di Lotta, [[lippo|Rippo]] fa estrarre a sorte i ventiquattro aspiranti promossi, nell’ordine in cui hanno finito la prova. Ogni carta porta il numero della targhetta di un bersaglio. Fra loro c’è Gozu, che porta una grossa lancia. Sulla barca per l’Isola di Zevil quasi tutti si sono già tolti la targhetta e l’hanno nascosta, e nessuno guarda gli altri negli occhi. Sull’isola la caccia dura una settimana e a ognuno servono sei punti.',
          en: 'Outside Trick Tower, [[lippo|Lippo]] has the twenty-four applicants who passed draw lots in the order they finished. Each card bears the badge number of a target. Goz, who carries a large spear, is one of them. On the boat to Zevil Island most applicants have already taken off their badges and hidden them, and nobody looks anyone in the eye. On the island the hunt lasts a week, and each of them needs six points.',
        },
      },
    },
    {
      episode: 15,
      chapter: 26,
      source: 'chapter',
      value: {
        title: { it: 'L’ultimo duello', en: 'A last duel' },
        body: {
          it: 'Gozu, già ferito gravemente, sbuca dai cespugli vicino a [[hisoka|Hisoka]] e lo sfida. La sua lancia taglia di netto gli alberi, ma Hisoka si limita a schivare. Gli dice che sta già morendo e che i morti non gli interessano. Quando Gozu lo carica di nuovo, alcuni aghi lo colpiscono in faccia e lo uccidono. Li ha lanciati un aspirante coperto di aghi, che se l’era lasciato sfuggire e ora prende la sua targhetta, la 371. [[gon-freecss|Gon]] guarda tutto di nascosto.',
          en: 'Goz, already badly wounded, jumps out of the bushes near [[hisoka|Hisoka]] and demands a fight. His spear cuts clean through trees, but Hisoka only dodges. He tells Goz he is already dying and that the dead do not interest him. When Goz charges again, needles strike him in the face and kill him. They come from an applicant covered in needles, who had let him get away and now takes his badge, number 371. [[gon-freecss|Gon]] watches it all from hiding.',
        },
      },
    },
  ],
  agon: [
    {
      episode: 14,
      chapter: 23,
      source: 'chapter',
      value: {
        title: { it: 'Settimo a sbarcare', en: 'Seventh ashore' },
        body: {
          it: 'Agon è uno dei ventiquattro aspiranti che fuori dalla Torre di Lotta pescano il numero di un bersaglio. Sulla barca [[khara|Khara]] spiega che sbarcheranno nell’ordine in cui hanno finito la terza prova, a due minuti l’uno dall’altro, a partire da [[hisoka|Hisoka]]. Agon è il settimo a scendere sull’Isola di Zevil. Sull’isola ognuno ha una settimana per raccogliere sei punti, e la targhetta del bersaglio da sola ne vale tre.',
          en: 'Agon is one of the twenty-four applicants who draw a target’s number outside Trick Tower. On the boat [[khara|Khara]] explains that they will land in the order they finished the Third Phase, two minutes apart, starting with [[hisoka|Hisoka]]. Agon is the seventh to go ashore on Zevil Island. Each applicant has a week there to collect six points, and the target’s badge alone is worth three.',
        },
      },
    },
    {
      episode: 16,
      chapter: 28,
      source: 'chapter',
      value: {
        title: { it: 'La carta', en: 'The card' },
        body: {
          it: 'Sull’isola [[hisoka|Hisoka]], in preda alla sete di sangue, sceglie Agon come prossima preda e gli corre incontro con una carta da gioco in mano. Agon sfodera la spada per difendersi. [[gon-freecss|Gon]], nascosto lì vicino, aspettava proprio questo momento e con la canna da pesca aggancia la targhetta di Hisoka mentre i due si incrociano. Sulla spalla di Agon si apre una ferita e lui cade a terra morto.',
          en: 'On the island [[hisoka|Hisoka]], in the grip of his bloodlust, picks Agon as his next prey and runs at him with a playing card in his hand. Agon draws his sword to defend himself. [[gon-freecss|Gon]], hidden nearby, has been waiting for this moment and hooks Hisoka’s badge with his fishing rod as the two pass each other. A wound opens on Agon’s shoulder and he falls dead.',
        },
      },
    },
  ],
  siper: [
    {
      episode: 14,
      chapter: 23,
      source: 'chapter',
      value: {
        title: { it: 'Occhiali scuri a bordo', en: 'Dark glasses on board' },
        body: {
          it: 'Super, un’aspirante con occhiali da sole squadrati, è fra i ventiquattro che lasciano la Torre di Lotta e pescano il numero di un bersaglio. Sulla barca per l’Isola di Zevil [[khara|Khara]] si congratula con tutti e annuncia che sono invitati all’esame dell’anno dopo, ma gli aspiranti quasi non reagiscono. Quasi tutti hanno già nascosto la targhetta e aspettano in silenzio, evitando di guardarsi, chiedendosi chi abbia pescato il proprio numero.',
          en: 'Siper, an applicant in square sunglasses, is among the twenty-four who leave Trick Tower and draw a target’s number. On the boat to Zevil Island [[khara|Khara]] congratulates everyone and says they are all invited to next year’s exam, but the applicants barely react. Most have already hidden their badges and wait in silence, avoiding each other’s eyes, each wondering who has drawn their number.',
        },
      },
    },
    {
      episode: 15,
      chapter: 26,
      source: 'chapter',
      value: {
        title: { it: 'La targhetta numero 80', en: 'Badge number 80' },
        body: {
          it: 'Sull’isola un aspirante coperto di aghi uccide un altro esaminato davanti a [[hisoka|Hisoka]], poi gli mostra la targhetta numero 80 e gliela offre. Dice che apparteneva a uno dei cecchini, ucciso perché usava un fucile. Quella targhetta è di Super. Hisoka la tiene e riprende la caccia, perché gli mancano ancora due punti.',
          en: 'On the island an applicant covered in needles kills another examinee in front of [[hisoka|Hisoka]], then shows him badge number 80 and offers it to him. He says it belonged to one of the snipers, whom he killed over the use of a gun. That badge is Siper’s. Hisoka keeps it and goes back to hunting, because he still needs two more points.',
        },
      },
    },
  ],
  ryu: [
    {
      episode: 14,
      chapter: 23,
      source: 'chapter',
      value: {
        title: { it: 'Lo spadone', en: 'The broadsword' },
        body: {
          it: 'Ryu, un aspirante con uno spadone alla cintura, è uno dei ventiquattro che superano la terza prova. [[lippo|Rippo]] li fa estrarre a sorte: ogni carta porta il numero della targhetta di un bersaglio. La targhetta del bersaglio vale tre punti, la propria altri tre se si riesce a tenerla, ogni altra targhetta uno. Per arrivare all’ultima prova ne servono sei, e Ryu parte con gli altri per l’Isola di Zevil.',
          en: 'Ryu, an applicant with a broadsword at his belt, is one of the twenty-four who pass the Third Phase. [[lippo|Lippo]] has them draw lots: each card bears the badge number of a target. A target’s badge is worth three points, an applicant’s own badge three more if he keeps it, and any other badge one. Six points are needed to reach the last phase, so Ryu sails to Zevil Island with the others.',
        },
      },
    },
    {
      episode: 18,
      chapter: 32,
      source: 'chapter',
      value: {
        title: { it: 'Non fra i nove', en: 'Not among the nine' },
        body: {
          it: 'La quarta prova finisce con un annuncio dalla barca: tutti devono tornare all’approdo entro un’ora, e chi scambia targhette lì viene squalificato. In riva al mare aspettano solo nove aspiranti, e Ryu non è fra loro. Sull’isola ha combattuto contro un altro aspirante e ha perso. Ha fallito l’esame.',
          en: 'The Fourth Phase ends with an announcement from the boat: everyone must return to the landing within an hour, and anyone who trades badges there is disqualified. Only nine applicants wait by the water, and Ryu is not one of them. On the island he fought another applicant and lost. He has failed the exam.',
        },
      },
    },
  ],
  kyu: [
    {
      episode: 14,
      chapter: 24,
      source: 'chapter',
      value: {
        title: { it: 'La freccia drogata', en: 'The drugged arrow' },
        body: {
          it: 'Kyu, armato di spada, è uno dei ventiquattro aspiranti che pescano il numero di un bersaglio e sbarcano sull’Isola di Zevil. Nell’erba alta sente di essere seguito e si guarda intorno, ma non vede nessuno. Lo sta pedinando Pockul. La freccia gli sfiora appena il braccio, eppure poco dopo Kyu trema, lascia cadere la spada e crolla. Pockul gli spiega che la droga lo terrà debole per giorni, gli dice che c’è acqua lì vicino e prende la sua targhetta, la 105. [[gon-freecss|Gon]] guarda da un albero.',
          en: 'Kyu, who carries a sword, is one of the twenty-four applicants who draw a target’s number and land on Zevil Island. In the tall grass he senses he is being followed and looks around, but sees nobody. Pokkle is stalking him. The arrow only grazes his arm, yet soon Kyu trembles, drops his sword and collapses. Pokkle explains that the drug will leave him weak for days, tells him there is water nearby and takes his badge, number 105. [[gon-freecss|Gon]] watches from a tree.',
        },
      },
    },
    {
      episode: 15,
      chapter: 25,
      source: 'chapter',
      value: {
        title: { it: 'L’aiuto di Gon', en: 'Gon’s help' },
        body: {
          it: 'Kyu è ancora a terra nella foresta, indebolito dalla droga della freccia di Pockul. [[gon-freecss|Gon]] passa di lì seguendo due farfalle legate a un filo da pesca, che spera lo portino da [[hisoka|Hisoka]], ferito. Sente un rumore e trova Kyu. Lo aiuta a mettersi seduto contro un albero e gli augura più fortuna l’anno dopo, poi torna a seguire le farfalle.',
          en: 'Kyu is still lying in the forest, weakened by the drug on Pokkle’s arrow. [[gon-freecss|Gon]] is passing by, following two butterflies tied to a fishing line, which he hopes will lead him to the wounded [[hisoka|Hisoka]]. He hears a noise and finds Kyu. He helps him sit up against a tree and wishes him better luck next year, then goes back to following the butterflies.',
        },
      },
    },
  ],
  shishito: [
    {
      episode: 14,
      chapter: 23,
      source: 'chapter',
      value: {
        title: { it: 'Chi ha il mio numero', en: 'Who has my number' },
        body: {
          it: 'Shishito è uno dei ventiquattro aspiranti che superano la terza prova. Ognuno pesca una carta con il numero della targhetta di un bersaglio, e nessuno sa chi ha pescato il suo. Sulla barca per l’Isola di Zevil Shishito resta in silenzio come gli altri e si chiede chi gli stia dando la caccia. Quasi tutti si sono già tolti la targhetta e l’hanno nascosta, quindi nessuno sa da chi guardarsi.',
          en: 'Shishito is one of the twenty-four applicants who pass the Third Phase. Each draws a card with a target’s badge number, and none of them knows who has drawn his own. On the boat to Zevil Island Shishito sits in silence like the others and wonders who is hunting him. Most applicants have already taken off their badges and hidden them, so nobody can tell whom to watch out for.',
        },
      },
    },
    {
      episode: 18,
      chapter: 32,
      source: 'chapter',
      value: {
        title: {
          it: 'Una targhetta di mano in mano',
          en: 'A badge changing hands',
        },
        body: {
          it: 'Shishito non arriva all’ultima prova. Durante la caccia [[amori|Amori]] e [[umori|Umori]] gli hanno preso la targhetta. Prima della fine [[hanzo|Hanzo]] torna dai fratelli e si prende le due targhette che restano loro, così quella di Shishito finisce a lui. Quando dalla barca annunciano la fine della quarta prova, all’approdo aspettano solo nove aspiranti, e Shishito non è fra loro. Ha fallito l’esame.',
          en: 'Shishito does not reach the Final Phase. During the hunt [[amori|Amori]] and [[umori|Umori]] took his badge. Before the end, [[hanzo|Hanzo]] goes back to the brothers and takes the two badges they have left, so Shishito’s ends up with him. When the boat announces the end of the Fourth Phase, only nine applicants wait at the landing, and Shishito is not among them. He has failed the exam.',
        },
      },
    },
  ],
  kenmi: [
    {
      episode: 14,
      chapter: 23,
      source: 'chapter',
      value: {
        title: { it: 'Un invito per l’anno dopo', en: 'Invited back' },
        body: {
          it: 'Kenmi, un aspirante con la testa rasata, è fra i ventiquattro che pescano il numero di un bersaglio e salgono sulla barca per l’Isola di Zevil. La guida, [[khara|Khara]], si congratula con loro e dice che il viaggio dura due ore. Aggiunge che, se falliscono, sono già tutti invitati all’esame dell’anno dopo. Nessuno reagisce: ognuno pensa a chi abbia pescato il suo numero.',
          en: 'Kenmi, an applicant with a shaved head, is among the twenty-four who draw a target’s number and board the boat to Zevil Island. The guide, [[khara|Khara]], congratulates them and says the trip takes two hours. She adds that if they fail, they are all already invited to next year’s exam. Nobody reacts: each of them is thinking about who has drawn their number.',
        },
      },
    },
    {
      episode: 17,
      chapter: 29,
      source: 'chapter',
      value: {
        title: { it: 'Due fratelli a caccia', en: 'Two brothers on the hunt' },
        body: {
          it: 'Mentre [[imori|Imori]] pedina [[killua|Killua]], i suoi fratelli [[amori|Amori]] e [[umori|Umori]] vanno a caccia per conto loro, seguiti da [[hanzo|Hanzo]], che non attacca perché i due non si separano mai. Kenmi è uno degli aspiranti che inseguono, e gli prendono la targhetta. Poi i due tornano da Imori, convinti che anche lui abbia finito, e lo trovano ancora nascosto. Kenmi ha perso la targhetta che per lui valeva tre punti.',
          en: 'While [[imori|Imori]] stalks [[killua|Killua]], his brothers [[amori|Amori]] and [[umori|Umori]] hunt on their own, trailed by [[hanzo|Hanzo]], who does not strike because the two never split up. Kenmi is one of the applicants they go after, and they take his badge. Then the two return to Imori, sure that he has finished too, and find him still hiding. Kenmi has lost the badge that was worth three points to him.',
        },
      },
    },
  ],
  sommy: [
    {
      episode: 14,
      chapter: 23,
      source: 'chapter',
      value: {
        title: { it: 'Silenzio sulla barca', en: 'Silence on the boat' },
        body: {
          it: 'Somy è uno dei ventiquattro aspiranti che escono dalla Torre di Lotta. [[lippo|Rippo]] li fa estrarre a sorte nell’ordine in cui hanno finito, a partire da [[hisoka|Hisoka]], e ogni carta porta il numero della targhetta di un bersaglio. Una volta registrato il numero, possono anche buttare la carta. Sulla barca per l’Isola di Zevil Somy aspetta in silenzio con gli altri, che in gran parte hanno già nascosto la targhetta.',
          en: 'Sommy is one of the twenty-four applicants who come out of Trick Tower. [[lippo|Lippo]] has them draw lots in the order they finished, starting with [[hisoka|Hisoka]], and each card bears a target’s badge number. Once the number is recorded, they may throw the card away. On the boat to Zevil Island Sommy waits in silence with the others, most of whom have already hidden their badges.',
        },
      },
    },
    {
      episode: 15,
      chapter: 26,
      source: 'chapter',
      value: {
        title: { it: 'Le carte scambiate', en: 'The swapped cards' },
        body: {
          it: '[[tonpa|Tonpa]] mostra a [[leorio-paradinight|Leorio]] la carta con il numero 191 e gli offre informazioni sul suo bersaglio in cambio di una medicina. Quando Leorio apre la valigetta, Somy lo attacca alle spalle con un ramo e la sua scimmia afferra la targhetta di Leorio. La carta era di Somy: lui e Tonpa se le erano scambiate, e il bersaglio di Tonpa era Leorio. Somy scappa su un albero. Più tardi [[kurapika|Kurapika]] e Leorio lo raggiungono, lo legano e si riprendono la targhetta, insieme a quella di Somy.',
          en: '[[tonpa|Tonpa]] shows [[leorio-paradinight|Leorio]] the card with number 191 and trades him information about his target for medicine. When Leorio opens his briefcase, Sommy jumps him from behind with a branch, and his monkey snatches Leorio’s badge. The card was Sommy’s: he and Tonpa had swapped cards, and Leorio was Tonpa’s target. Sommy escapes up a tree. Later [[kurapika|Kurapika]] and Leorio catch him, tie him up and take back the badge, along with Sommy’s own.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
