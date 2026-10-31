import type { Story, Timeline } from '~/data/types'

/** The dated stories for the characters of the Yorknew City arc. */
export const yorknewCityChronicles = {
  // Episode 37 tells it from chapters 64–65; pinned at the record's chapter.
  // Manga-only lines (Mito taking the boy in, the steel rods' markings, the
  // tape's later minutes) stay out.
  'ging-freecss': [
    {
      episode: 37,
      chapter: 66,
      value: {
        title: { it: 'La scatola per Gon', en: 'The box for Gon' },
        body: {
          it: 'Ging e [[mito-freecss|Myto]] crescono sull’Isola Balena, dove sono gli unici bambini. Quando Myto lo segue sui monti e si perde, tutto il villaggio la cerca, ed è Ging a trovarla. Alla stessa età di [[gon-freecss|Gon]] lascia l’isola per diventare Hunter. Dieci anni dopo torna con Gon in braccio, chiede alla nonna di occuparsene e della madre dice che si sono lasciati. Lascia a Gon una scatola. Anni dopo Gon la apre con l’aiuto di [[killua|Killua]]: con il Nen si stacca l’involucro esterno e la licenza da Hunter apre la scatola interna. Dentro ci sono un anello, una scheda di memoria e una cassetta. Sul nastro Ging chiede a Gon se vuole vederlo.',
          en: 'Ging and [[mito-freecss|Mito]] grow up on Whale Island, where they are the only children. When Mito follows him into the mountains and gets lost, the whole village searches for her, and Ging is the one who finds her. At [[gon-freecss|Gon]]’s age he leaves the island to become a Hunter. Ten years later he comes back carrying Gon, asks his grandmother to look after him and says that he and the mother have split up. He leaves Gon a box. Years later Gon opens it with [[killua|Killua]]’s help: Nen makes the outer casing come off and the Hunter license opens the box inside. Inside are a ring, a memory card and a cassette. On the tape Ging asks Gon whether he wants to see him.',
        },
      },
    },
  ],
  'melody': [
    // Chapter 68 and episode 40.
    {
      episode: 40,
      chapter: 68,
      value: {
        title: { it: 'Il battito di chi mente', en: 'The heartbeat of a liar' },
        body: {
          it: 'Melody è tra i candidati per un lavoro presso un collezionista, chiusi in una stanza e attaccati da figure vestite di nero. Dopo che [[kurapika|Kurapika]] ha smascherato [[shachmono-tocino|Shachmono Tocino]], che le controlla, passa la sua catena davanti agli altri, e la catena reagisce davanti a [[squala|Squala]]. Squala dice che non prova niente. Melody risponde che il suo cuore ha accelerato nel momento in cui la catena lo ha indicato: ha il ritmo di chi mente. Squala dice che non può fidarsi né di Kurapika né di lei. L’haiku di [[basho|Basho]] chiude la questione, e Squala confessa.',
          en: 'Melody is one of the applicants for a job with a collector, locked in a room and attacked by figures in black. Once [[kurapika|Kurapika]] has exposed [[shachmono-tocino|Shachmono Tocino]], who controls them, he holds his chain in front of the others, and it reacts in front of [[squala|Squala]]. Squala says it proves nothing. Melody answers that his heart sped up the moment the chain picked him out: it has the rhythm of a liar. Squala says he cannot trust Kurapika or her either. [[basho|Basho]]’s haiku settles it, and Squala confesses.',
        },
      },
    },
    // Episode 42 ends on chapter 73, pages 1-9, where the talk at the front entrance is.
    {
      episode: 42,
      chapter: 73,
      value: {
        title: { it: 'La sonata maledetta', en: 'The cursed sonata' },
        body: {
          it: 'Di guardia con [[kurapika|Kurapika]] all’ingresso principale dell’asta, Melody gli chiede degli occhi scarlatti: ha sentito rabbia nel suo cuore. Kurapika le dice che vuole ritrovare gli occhi della sua gente e riportarli indietro. Poi le chiede perché ha accettato il lavoro. Lei cerca una sonata che si dice scritta dal diavolo, che porta sventura a chi la suona o la ascolta. Gli mostra il braccio: il suo corpo è cambiato quando ha sentito un amico suonarne una parte al flauto. L’amico è morto, e a lei è rimasto il potere di sentire il cuore delle persone. Vuole trovare la sonata e distruggerla.',
          en: 'On guard with [[kurapika|Kurapika]] at the front entrance of the auction, Melody asks him about the Scarlet Eyes: she has heard rage in his heart. Kurapika tells her he means to find his people’s eyes and bring them back. Then he asks why she took the job. She is looking for a sonata said to be written by the devil, which brings disaster on whoever plays or hears it. She shows him her arm: her body changed when she heard a friend play part of it on the flute. The friend died, and she was left with the power to hear people’s hearts. She wants to find the sonata and destroy it.',
        },
      },
    },
  ],
  'basho': [
    // Chapter 68 and episode 40.
    {
      episode: 40,
      chapter: 68,
      value: {
        title: { it: 'L’haiku', en: 'The haiku' },
        body: {
          it: 'Quando le figure vestite di nero attaccano i candidati, Basho ne colpisce una con un pugno e capisce che è fatta di aura. Scoperto l’infiltrato [[shachmono-tocino|Shachmono Tocino]], [[squala|Squala]] nega di essere il secondo. Basho scrive un haiku e mostra cosa fanno le sue poesie: appena la sua mano tocca una sedia, la sedia prende fuoco. Ne scrive un secondo, secondo cui chi mente alla sua domanda brucerà, e chiede a ogni candidato se è un infiltrato. Squala cede e confessa.',
          en: 'When figures in black attack the applicants, Basho punches one of them and can tell it is made of aura. Once the plant [[shachmono-tocino|Shachmono Tocino]] is caught, [[squala|Squala]] denies being the second one. Basho writes a haiku and shows what his poems do: when his hand touches a chair, the chair catches fire. He writes a second one, saying that whoever lies to his question will burn, and asks each applicant whether they are a plant. Squala gives in and confesses.',
        },
      },
    },
  ],
  'baise': [
    // Chapter 68 and episode 40. Her scene with her old employer in episode 39 is anime-only.
    {
      episode: 40,
      chapter: 68,
      value: {
        title: { it: 'Il bacio', en: 'The kiss' },
        body: {
          it: 'Versé è tra i candidati chiusi nella stanza con [[kurapika|Kurapika]]. Quando [[squala|Squala]] ammette di essere un infiltrato, dice di aver già dato i suoi ordini e che non li rivelerà, nemmeno sotto tortura. Versé gli si avvicina e lo bacia. Il suo Nen rende suo servitore chiunque lei baci, e Squala le racconta tutto il piano.',
          en: 'Baise is one of the applicants locked in the room with [[kurapika|Kurapika]]. When [[squala|Squala]] admits to being a plant, he says he has already given his orders and will not reveal them, even under torture. Baise walks up to him and kisses him. Her Nen makes anyone she kisses her servant, and Squala tells her his whole plan.',
        },
      },
    },
  ],
  'squala': [
    // Chapter 68 and episode 40. His dogs and his calls to Eliza in episode 39 are anime-only there.
    {
      episode: 40,
      chapter: 68,
      value: {
        title: { it: 'Scoperto', en: 'Found out' },
        body: {
          it: 'Squala è uno dei candidati, e il secondo infiltrato tra loro. La catena di [[kurapika|Kurapika]] reagisce davanti a lui e [[melody|Melody]] sente il suo cuore accelerare, ma lui nega e dice di non potersi fidare di loro. Quando [[basho|Basho]] scrive un haiku che brucerà chi mente alla sua domanda, Squala cede e si presenta. Dice di aver già dato i suoi ordini e che non li rivelerà, nemmeno sotto tortura. Poi [[baise|Versé]] lo bacia, e lui le racconta tutto il piano.',
          en: 'Squala is one of the applicants, and the second plant among them. [[kurapika|Kurapika]]’s chain reacts in front of him and [[melody|Melody]] hears his heart speed up, but he denies it and says he cannot trust them. When [[basho|Basho]] writes a haiku that will burn whoever lies to his question, Squala gives in and introduces himself. He says he has already given his orders and will not reveal them, even under torture. Then [[baise|Baise]] kisses him, and he tells her his whole plan.',
        },
      },
    },
  ],
  'shachmono-tocino': [
    // The attack is chapter 67 and episode 39; his exposure is chapter 68 and episode 40.
    {
      episode: 40,
      chapter: 68,
      value: {
        title: { it: 'Le figure vestite di nero', en: 'The figures in black' },
        body: {
          it: 'Shachmono Tocino aspetta con i candidati nella villa del collezionista, e quando la porta resta chiusa figure vestite di nero armate di spade li attaccano. Sono sue: le controlla con il Nen. [[kurapika|Kurapika]] nota che è l’unico che non attaccano mai, gli punta contro un pugnale e gli dà tempo fino a tre, e Tocino le richiama. Dice di lavorare per il loro datore di lavoro e di avere il compito di metterli alla prova, e che ora quattro di loro possono uscire. Kurapika cerca un secondo infiltrato.',
          en: 'Shachmono Tocino waits with the applicants in the collector’s mansion, and when the door stays locked, figures in black armed with swords attack them. They are his: he controls them with Nen. [[kurapika|Kurapika]] notices that he is the only one they never attack, points a dagger at him and gives him until three, and Tocino calls them off. He says he works for their employer and was told to test them, and that four of them can now leave. Kurapika looks for a second plant.',
        },
      },
    },
  ],
  'dalzollene': [
    // The screen is chapter 67 and episode 39; the hiring, the frame and the boss are chapter 70 and episode 41. Neon is named only from chapter 71.
    {
      episode: 41,
      chapter: 70,
      value: {
        title: { it: 'L’uomo nella cornice', en: 'The man in the frame' },
        body: {
          it: 'Da uno schermo Dalzorne assegna la prova ai candidati: portare un oggetto da una lista. Assume all’istante i quattro che tornano con il loro, tra cui [[kurapika|Kurapika]], e dice che il primo incarico è scortare la loro protetta fino a un albergo di York Shin City. Quando Kurapika chiede chi ce l’abbia con lei, Dalzorne liquida la domanda. Andando nella sua stanza passano davanti a una figura umana in una cornice appesa al muro: Dalzorne dice che era una guardia del corpo, e che loro la sostituiscono. La protetta è una ragazza.',
          en: 'From a screen, Dalzollene sets the applicants their test: bring back an item from a list. He hires on the spot the four who return with theirs, [[kurapika|Kurapika]] among them, and tells them their first job is to escort the boss to a hotel in Yorknew City. When Kurapika asks who is after the boss, Dalzollene brushes the question aside. On the way to her room they pass a human figure in a frame on the wall: he says it was a bodyguard, and that they are replacing him. The boss is a young girl.',
        },
      },
    },
  ],
  'neon-nostrade': [
    // The fortunes are chapter 71 and episode 41; the call that keeps her from the auction is chapter 72, pages 4-6, in episode 41.
    {
      episode: 41,
      chapter: 72,
      value: {
        title: {
          it: 'Profezie per gli amici del padre',
          en: 'Fortunes for her father’s friends',
        },
        body: {
          it: 'Neon è la ragazza che [[dalzollene|Dalzorne]] e le nuove guardie del corpo, tra cui [[kurapika|Kurapika]], scortano fino a un albergo di York Shin City. Durante il viaggio Dalzorne le chiede di usare il suo potere per scrivere le profezie di alcuni uomini che conoscono suo padre. Dalle profezie, Dalzorne e il padre di Neon capiscono che l’asta sotterranea è troppo pericolosa per lei, e decidono che deve starne lontana.',
          en: 'Neon is the girl whom [[dalzollene|Dalzollene]] and the new bodyguards, [[kurapika|Kurapika]] among them, escort to a hotel in Yorknew City. On the way, Dalzollene asks her to use her power to write fortunes for some men who know her father. From the fortunes, Dalzollene and Neon’s father work out that the Underground Auction is too dangerous for her, and they decide she must stay away from it.',
        },
      },
    },
  ],
  'machi': [
    // The stitches and the call to Yorknew City are chapter 55 and episode 32; the walk and the order are chapter 71 and episode 41.
    {
      episode: 41,
      chapter: 71,
      value: {
        title: { it: 'In quattro sulla strada', en: 'Four on the road' },
        body: {
          it: 'Machi è la donna che, dopo l’incontro con [[kastro|Kastro]], ha ricucito le braccia di [[hisoka|Hisoka]] con fili di Nen e gli ha detto di trovarsi a York Shin City entro mezzogiorno del 30 agosto. Ora cammina verso la città con altri tre membri della Brigata Fantasma: è la prima volta in più di tre anni che i membri si riuniscono tutti. Parlano di Hisoka, un nuovo membro. Quando sono tutti riuniti, il loro capo dà l’ordine: ruberanno tutto all’asta sotterranea, e possono uccidere chiunque si metta in mezzo.',
          en: 'Machi is the woman who sewed [[hisoka|Hisoka]]’s arms back on with threads of Nen after his match with [[kastro|Kastro]], and who told him to be in Yorknew City by noon on August 30. Now she walks toward the city with three other members of the Phantom Troupe: it is the first time in over three years that all its members are gathering. They talk about Hisoka, a new member. Once they have all gathered, their leader gives the order: they will steal everything at the Underground Auction, and they may kill anyone who gets in the way.',
        },
      },
    },
  ],
  'ivlenkov': [
    // The escort is chapter 71 and episode 41; the posts for the night are chapter 72 and episode 42.
    {
      episode: 42,
      chapter: 72,
      value: {
        title: { it: 'Dentro l’asta', en: 'Sent inside' },
        body: {
          it: 'Ivlenkov è una delle guardie del corpo della famiglia Nostrad che scortano [[neon-nostrade|Neon]] fino al suo albergo a York Shin City. Dopo le sue profezie Neon deve stare lontana dall’asta sotterranea, ma [[dalzollene|Dalzorne]] assegna lo stesso i posti per la notte: tre guardie entreranno all’asta, due sorveglieranno l’ingresso posteriore, [[kurapika|Kurapika]] e [[melody|Melody]] quello principale. Ivlenkov è uno dei tre che entrano.',
          en: 'Ivlenkov is one of the Nostrade family’s bodyguards who escort [[neon-nostrade|Neon]] to her hotel in Yorknew City. After her fortunes Neon must stay away from the Underground Auction, but [[dalzollene|Dalzollene]] still assigns the posts for the night: three bodyguards will go into the auction, two will guard the back entrance, and [[kurapika|Kurapika]] and [[melody|Melody]] the front. Ivlenkov is one of the three who go in.',
        },
      },
    },
  ],
  'linssen': [
    // The escort is chapter 71 and episode 41; the posts for the night are chapter 72 and episode 42.
    {
      episode: 42,
      chapter: 72,
      value: {
        title: { it: 'L’ingresso posteriore', en: 'The back entrance' },
        body: {
          it: 'Linssen è una delle guardie del corpo della famiglia Nostrad che scortano [[neon-nostrade|Neon]] fino al suo albergo a York Shin City. La sera dell’asta sotterranea [[dalzollene|Dalzorne]] assegna i posti: tre guardie entreranno all’asta, [[kurapika|Kurapika]] e [[melody|Melody]] sorveglieranno l’ingresso principale, e Linssen è uno dei due all’ingresso posteriore. Neon, per cui le sue profezie hanno reso l’asta troppo pericolosa, resta lontana.',
          en: 'Linssen is one of the Nostrade family’s bodyguards who escort [[neon-nostrade|Neon]] to her hotel in Yorknew City. On the night of the Underground Auction, [[dalzollene|Dalzollene]] assigns the posts: three bodyguards will go into the auction, [[kurapika|Kurapika]] and [[melody|Melody]] will guard the front entrance, and Linssen is one of the two at the back entrance. Neon, whose fortunes have made the auction too dangerous for her, stays away.',
        },
      },
    },
  ],
  'shizuku': [
    // The gathering is chapter 71 and episode 41; the arm-wrestling match is chapter 72 and episode 42. Her left arm is chapter-only.
    {
      episode: 42,
      chapter: 72,
      value: {
        title: { it: 'Braccio di ferro con Gon', en: 'Arm wrestling with Gon' },
        body: {
          it: 'Shizuku è uno dei membri della Brigata Fantasma che si riuniscono a York Shin City, dove il loro capo ordina di rubare tutto all’asta sotterranea. Quella sera si ferma a una sfida per strada: chi batte [[gon-freecss|Gon]] a braccio di ferro vince un diamante. Gon ha battuto uno sfidante dopo l’altro, ma contro di lei deve usare tutta la sua forza per vincere. Poi lei raggiunge altri membri della Brigata.',
          en: 'Shizuku is one of the Phantom Troupe members who gather in Yorknew City, where their leader orders them to steal everything at the Underground Auction. That night she stops at a street contest: whoever beats [[gon-freecss|Gon]] at arm wrestling wins a diamond. Gon has beaten one challenger after another, but against her he has to use all his strength to win. Then she joins other members of the Troupe.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
