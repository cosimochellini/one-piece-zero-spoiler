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
    // Chapter 77 (pages 1-11) and episode 44. Her finding Machi’s needle is chapter-only.
    {
      episode: 44,
      chapter: 77,
      value: {
        title: { it: 'Il flauto', en: 'The flute' },
        body: {
          it: 'Dopo lo scontro di [[uvogin|Uborghin]] con le Bestie dell’Ombra, [[kurapika|Kurapika]] vuole andargli contro, e [[dalzollene|Dalzorne]] prova a fermarlo. Melody suona un brano con il suo flauto, e chi le sta intorno si calma. Kurapika è più calmo, ma vuole ancora catturare Uborghin. Lo lega con la sua catena e lo trascina via dagli altri membri della Brigata, e le guardie del corpo partono in auto con il prigioniero.',
          en: 'After [[uvogin|Uvogin]]’s fight with the Shadow Beasts, [[kurapika|Kurapika]] wants to go after him, and [[dalzollene|Dalzollene]] tries to stop him. Melody plays a piece on her flute, and everyone around her calms down. Kurapika is calmer but still means to capture Uvogin. He binds Uvogin with his chain and pulls him away from the other Troupe members, and the bodyguards drive off with their prisoner.',
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
          it: 'Quando le figure vestite di nero attaccano i candidati, Basho ne colpisce una con un pugno e capisce che è fatta di aura. Scoperto l’infiltrato [[shachmono-tocino|Shachmono Tocino]], [[squala|Squala]] nega di essere il secondo. Basho scrive un haiku e mostra cosa fanno le sue poesie: appena la sua mano tocca una sedia, la sedia prende fuoco. Ne scrive un altro, che dice che chi mente alla sua domanda brucerà, e chiede a ogni candidato se è un infiltrato. Squala cede e confessa.',
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
          it: 'Versé è tra i candidati chiusi nella stanza con [[kurapika|Kurapika]]. Quando [[squala|Squala]] ammette di essere un infiltrato, dice di aver già dato i suoi ordini e che non li rivelerà, nemmeno sotto tortura. Versé gli si avvicina e lo bacia. Il suo Nen rende suo servitore chiunque lei baci, e Squala parla.',
          en: 'Baise is one of the applicants locked in the room with [[kurapika|Kurapika]]. When [[squala|Squala]] admits to being a plant, he says he has already given his orders and will not reveal them, even under torture. Baise walks up to him and kisses him. Her Nen makes anyone she kisses her servant, and Squala talks.',
        },
      },
    },
    // The attack on the auction is chapter 73 (pages 10-19) and episode 43. Feitan and Franklin are named only from chapters 74 and 76, so the two on the stage stay unnamed.
    {
      episode: 43,
      chapter: 73,
      value: {
        title: { it: 'Fuori dalla sala', en: 'Outside the hall' },
        body: {
          it: 'Versé entra all’asta sotterranea con [[ivlenkov|Ivlenkov]] e [[shachmono-tocino|Shachmono Tocino]]. Due membri della Brigata Fantasma salgono sul palco: uno saluta gli ospiti e l’altro spara proiettili di aura che uccidono quasi tutti i presenti. Tocino prova a proteggere i tre con il suo Nen, senza riuscirci. Versé e Ivlenkov scappano dalla sala, ma fuori li aspetta [[shizuku|Shizuku]], che li uccide con il suo aspirapolvere, Deme.',
          en: 'Baise goes into the Underground Auction with [[ivlenkov|Ivlenkov]] and [[shachmono-tocino|Shachmono Tocino]]. Two members of the Phantom Troupe walk onto the stage: one welcomes the guests, and the other fires bullets of aura that kill nearly everyone in the hall. Tocino tries to shield the three of them with his Nen and fails. Baise and Ivlenkov run out of the hall, but [[shizuku|Shizuku]] is waiting outside and kills them with her vacuum cleaner, Blinky.',
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
          it: 'Squala è uno dei candidati, e il secondo infiltrato tra loro. La catena di [[kurapika|Kurapika]] reagisce davanti a lui e [[melody|Melody]] sente il suo cuore accelerare, ma lui nega e dice di non potersi fidare di loro. Quando [[basho|Basho]] scrive un haiku che brucerà chi mente alla sua domanda, Squala cede e si presenta. Dice di aver già dato i suoi ordini e che non li rivelerà, nemmeno sotto tortura. Poi [[baise|Versé]] lo bacia, e lui parla.',
          en: 'Squala is one of the applicants, and the second plant among them. [[kurapika|Kurapika]]’s chain reacts in front of him and [[melody|Melody]] hears his heart speed up, but he denies it and says he cannot trust them. When [[basho|Basho]] writes a haiku that will burn whoever lies to his question, Squala gives in and introduces himself. He says he has already given his orders and will not reveal them, even under torture. Then [[baise|Baise]] kisses him, and he talks.',
        },
      },
    },
    // Chapter 79 and episode 46. The hotel is not named before episode 57.
    {
      episode: 46,
      chapter: 79,
      value: {
        title: { it: 'Chi li ha assunti', en: 'Who hired them' },
        body: {
          it: 'Dopo la fuga di [[uvogin|Uborghin]], le guardie del corpo sopravvissute si ritrovano nell’albergo di [[neon-nostrade|Neon]]. Squala dice agli altri che chi li ha assunti è il padre di Neon, [[light-nostrade|Light Nostrad]]. Raccontano a Neon che alcune guardie sono morte nell’attacco all’asta e chiedono di parlare con suo padre per ricevere ordini. Il gruppo sceglie [[kurapika|Kurapika]] per parlargli.',
          en: 'After [[uvogin|Uvogin]] escapes, the surviving bodyguards regroup at [[neon-nostrade|Neon]]’s hotel. Squala tells the others that the one who hired them is Neon’s father, [[light-nostrade|Light Nostrade]]. They tell Neon that bodyguards died in the attack on the auction and ask to speak to her father for orders. The group chooses [[kurapika|Kurapika]] to talk to him.',
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
    // Chapter 73 (pages 10-19) and episode 43.
    {
      episode: 43,
      chapter: 73,
      value: {
        title: { it: 'I proiettili di aura', en: 'Bullets of aura' },
        body: {
          it: 'Tocino entra all’asta sotterranea con [[baise|Versé]] e [[ivlenkov|Ivlenkov]]. Due membri della Brigata Fantasma salgono sul palco, e uno di loro comincia a sparare sulla folla. Tocino usa il suo Nen per proteggere sé stesso e gli altri due, ma i proiettili passano. Prima di morire capisce che sono fatti di aura. Versé e Ivlenkov scappano, e fuori dalla sala [[shizuku|Shizuku]] li uccide.',
          en: 'Tocino goes into the Underground Auction with [[baise|Baise]] and [[ivlenkov|Ivlenkov]]. Two members of the Phantom Troupe step onto the stage, and one of them starts shooting into the crowd. Tocino uses his Nen to shield himself and the other two, but the bullets get through. Before he dies, he realizes they are made of aura. Baise and Ivlenkov run, and [[shizuku|Shizuku]] kills them outside the hall.',
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
          it: 'Da uno schermo Dalzorne assegna la prova ai candidati: portare un oggetto da una lista. Assume all’istante i quattro che tornano con il loro, tra cui [[kurapika|Kurapika]], e dice che il primo incarico è scortare il loro capo fino a un albergo di York Shin City. Quando Kurapika chiede chi ce l’abbia con il capo, Dalzorne liquida la domanda. Andando nella sua stanza passano davanti a una figura umana in una cornice appesa al muro: Dalzorne dice che era una guardia del corpo, e che loro la sostituiscono. Il capo è una ragazza.',
          en: 'From a screen, Dalzollene sets the applicants their test: bring back an item from a list. He hires on the spot the four who return with theirs, [[kurapika|Kurapika]] among them, and tells them their first job is to escort the boss to a hotel in Yorknew City. When Kurapika asks who is after the boss, Dalzollene brushes the question aside. On the way to her room they pass a human figure in a frame on the wall: he says it was a bodyguard, and that they are replacing him. The boss is a young girl.',
        },
      },
    },
    // Kurapika’s report is chapter 74, the canyon and Worm chapter 75 (pages 1-16), both in episode 43.
    {
      episode: 43,
      chapter: 75,
      value: {
        title: { it: 'Non si torna indietro', en: 'No backing off' },
        body: {
          it: 'Quando [[kurapika|Kurapika]] riferisce che l’asta è stata svuotata, Dalzorne e le guardie del corpo si uniscono alla caccia della mafia ai ladri. Raggiungono il punto dove è caduta la loro mongolfiera e vedono [[uvogin|Uborghin]] uccidere da solo gli uomini della mafia. Gli altri hanno paura di avvicinarsi, ma Dalzorne dice che non possono tirarsi indietro. Poi [[worm|Lombrico]] sbuca da sotto terra vicino a loro, e le Bestie dell’Ombra vanno ad affrontare la Brigata.',
          en: 'When [[kurapika|Kurapika]] reports that the auction has been emptied, Dalzollene and the bodyguards join the Mafia’s hunt for the thieves. They reach the place where the thieves’ balloon came down and watch [[uvogin|Uvogin]] kill the Mafia’s men on his own. The others are afraid to go near him, but Dalzollene says they cannot back off. Then [[worm|Worm]] comes up out of the ground near them, and the Shadow Beasts go in to take on the Troupe.',
        },
      },
    },
    // Chapter 78 and episode 45.
    {
      episode: 45,
      chapter: 78,
      value: {
        title: { it: 'La spada spezzata', en: 'The broken sword' },
        body: {
          it: 'Mentre [[uvogin|Uborghin]] è prigioniero, Dalzorne lo interroga e cerca di colpirlo con la spada, ma la lama si spezza contro il suo Nen. Uborghin dice che le Bestie dell’Ombra hanno portato via gli oggetti dell’asta prima del loro arrivo, e promette di risparmiarli se lo lasciano andare. Dalzorne chiama la mafia per consegnarlo. Arrivano alcuni membri della Brigata Fantasma travestiti da mafiosi, e [[phinks|Phinks]] lo uccide.',
          en: 'With [[uvogin|Uvogin]] held captive, Dalzollene questions him and tries to stab him with his sword, but the blade breaks against Uvogin’s Nen. Uvogin says that the Shadow Beasts took the auction items before his group arrived, and offers to spare them if they let him go. Dalzollene calls the Mafia to hand him over. Members of the Phantom Troupe arrive disguised as Mafia men, and [[phinks|Phinks]] kills him.',
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
          it: 'Neon è la ragazza che [[dalzollene|Dalzorne]] e le nuove guardie del corpo, tra cui [[kurapika|Kurapika]], scortano fino a un albergo di York Shin City. Durante il viaggio Dalzorne le chiede di usare il suo potere per scrivere le profezie di alcuni uomini che conoscono suo padre. Dalzorne riferisce le profezie al padre di Neon al telefono, e il padre la fa tenere lontana dall’asta sotterranea.',
          en: 'Neon is the girl whom [[dalzollene|Dalzollene]] and the new bodyguards, [[kurapika|Kurapika]] among them, escort to a hotel in Yorknew City. On the way, Dalzollene asks her to use her power to write fortunes for some men who know her father. Dalzollene reports the fortunes to her father on the phone, and her father has her kept away from the Underground Auction.',
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
          it: 'Machi è la donna che, dopo l’incontro con [[kastro|Kastro]], ha ricucito le braccia di [[hisoka|Hisoka]] con fili di Nen e gli ha detto di trovarsi a York Shin City entro mezzogiorno del 30 agosto. Ora cammina verso la città con altri tre membri della Brigata Fantasma: è la prima volta in più di tre anni che i membri si riuniscono tutti. Parlano di Hisoka e dei membri cambiati da allora. Quando sono tutti riuniti, il loro capo dà l’ordine: ruberanno tutto all’asta sotterranea, e possono uccidere chiunque si metta in mezzo.',
          en: 'Machi is the woman who sewed [[hisoka|Hisoka]]’s arms back on with threads of Nen after his match with [[kastro|Kastro]], and who told him to be in Yorknew City by noon on August 30. Now she walks toward the city with three other members of the Phantom Troupe: it is the first time in over three years that all its members are gathering. They talk about Hisoka and the members who have changed since then. Once they have all gathered, their leader gives the order: they will steal everything at the Underground Auction, and they may kill anyone who gets in the way.',
        },
      },
    },
    // The needle and the cloth are chapter 77 (pages 12-19), the Shadow Beasts’ deaths and the rescue chapter 78, all in episode 45. Owl’s torture is left out.
    {
      episode: 45,
      chapter: 78,
      value: {
        title: { it: 'Un filo su Uborghin', en: 'A thread on Uvogin' },
        body: {
          it: 'Quando una catena trascina via [[uvogin|Uborghin]], Machi gli attacca un ago con un filo di Nen, e i membri della Brigata lo seguono in auto. [[owl|Civetta]] atterra sulla loro auto e la avvolge nel suo telo: escono tutti tranne [[nobunaga|Nobunaga]], intrappolato per il posto in cui è seduto. Arrivano altre Bestie dell’Ombra, e la Brigata uccide quelle che la attaccano. Poi alcuni membri della Brigata, travestiti da mafiosi, raggiungono il posto dove è tenuto Uborghin, e [[phinks|Phinks]] uccide [[dalzollene|Dalzorne]] per liberarlo.',
          en: 'When a chain snatches [[uvogin|Uvogin]] away, Machi attaches a needle and a thread of Nen to him, and the Troupe members follow him by car. [[owl|Owl]] lands on their car and wraps it in his cloth: everyone gets out but [[nobunaga|Nobunaga]], who is trapped by where he sits. Other Shadow Beasts arrive, and the Troupe kills the Shadow Beasts who come after them. Then members of the Troupe, disguised as Mafia men, reach the place where Uvogin is held, and [[phinks|Phinks]] kills [[dalzollene|Dalzollene]] to free him.',
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
          it: 'Ivlenkov è una delle guardie del corpo della famiglia Nostrad che scortano [[neon-nostrade|Neon]] fino al suo albergo a York Shin City. Il padre di Neon la fa tenere lontana dall’asta sotterranea, ma [[dalzollene|Dalzorne]] assegna lo stesso i posti per la notte: tre guardie entreranno all’asta, due sorveglieranno l’ingresso posteriore, [[kurapika|Kurapika]] e [[melody|Melody]] quello principale. Ivlenkov è uno dei tre che entrano.',
          en: 'Ivlenkov is one of the Nostrade family’s bodyguards who escort [[neon-nostrade|Neon]] to her hotel in Yorknew City. Neon’s father has her kept away from the Underground Auction, but [[dalzollene|Dalzollene]] still assigns the posts for the night: three bodyguards will go into the auction, two will guard the back entrance, and [[kurapika|Kurapika]] and [[melody|Melody]] the front. Ivlenkov is one of the three who go in.',
        },
      },
    },
    // Chapter 73 (pages 10-19) and episode 43.
    {
      episode: 43,
      chapter: 73,
      value: {
        title: { it: 'L’aspirapolvere', en: 'The vacuum cleaner' },
        body: {
          it: 'Nel Cemetery Building, Ivlenkov è all’asta sotterranea con [[baise|Versé]] e [[shachmono-tocino|Shachmono Tocino]]. Due membri della Brigata Fantasma salgono sul palco, e uno di loro apre il fuoco con proiettili fatti di aura, uccidendo quasi tutti i presenti. Il Nen di Tocino non riesce a fermarli. Ivlenkov e Versé escono dalla sala, ma fuori [[shizuku|Shizuku]] li ferma con il suo aspirapolvere, Deme, e li uccide entrambi.',
          en: 'Inside the Cemetery Building, Ivlenkov is at the Underground Auction with [[baise|Baise]] and [[shachmono-tocino|Shachmono Tocino]]. Two Phantom Troupe members come out on the stage, and one of them opens fire with bullets made of aura, killing nearly everyone in the hall. Tocino’s Nen cannot stop them. Ivlenkov and Baise get out of the hall, but [[shizuku|Shizuku]] stops them outside with her vacuum cleaner, Blinky, and kills them both.',
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
          it: 'Linssen è una delle guardie del corpo della famiglia Nostrad che scortano [[neon-nostrade|Neon]] fino al suo albergo a York Shin City. La sera dell’asta sotterranea [[dalzollene|Dalzorne]] assegna i posti: tre guardie entreranno all’asta, [[kurapika|Kurapika]] e [[melody|Melody]] sorveglieranno l’ingresso principale, e Linssen è uno dei due all’ingresso posteriore. Il padre di Neon la fa tenere lontana dall’asta.',
          en: 'Linssen is one of the Nostrade family’s bodyguards who escort [[neon-nostrade|Neon]] to her hotel in Yorknew City. On the night of the Underground Auction, [[dalzollene|Dalzollene]] assigns the posts: three bodyguards will go into the auction, [[kurapika|Kurapika]] and [[melody|Melody]] will guard the front entrance, and Linssen is one of the two at the back entrance. Neon’s father has her kept away from the auction.',
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
          it: 'Shizuku è uno dei membri della Brigata Fantasma che si riuniscono fuori da York Shin City, dove il loro capo ordina di rubare tutto all’asta sotterranea. Prima dell’asta si ferma a una sfida per strada: chi batte [[gon-freecss|Gon]] a braccio di ferro vince un diamante. Gon ha battuto uno sfidante dopo l’altro, ma contro di lei deve impegnarsi davvero per vincere. Poi lei raggiunge altri membri della Brigata.',
          en: 'Shizuku is one of the Phantom Troupe members who gather outside Yorknew City, where their leader orders them to steal everything at the Underground Auction. Before the auction she stops at a street contest: whoever beats [[gon-freecss|Gon]] at arm wrestling wins a diamond. Gon has beaten one challenger after another, but against her he has to try for real to win. Then she joins other members of the Troupe.',
        },
      },
    },
    // Chapter 73 (pages 10-19) and episode 43.
    {
      episode: 43,
      chapter: 73,
      value: {
        title: { it: 'Deme', en: 'Blinky' },
        body: {
          it: 'Durante l’attacco all’asta sotterranea Shizuku aspetta fuori dalla sala, mentre altri due membri della Brigata uccidono gli ospiti. Quando [[baise|Versé]] e [[ivlenkov|Ivlenkov]] escono di corsa, li uccide con Deme, un aspirapolvere. Poi usa Deme per risucchiare tutti i corpi e il sangue rimasti nella sala.',
          en: 'During the attack on the Underground Auction, Shizuku waits outside the hall while two other members of the Troupe kill the guests. When [[baise|Baise]] and [[ivlenkov|Ivlenkov]] run out, she kills them with Blinky, a vacuum cleaner. Then she uses Blinky to suck up all the bodies and the blood left in the hall.',
        },
      },
    },
  ],
  'feitan': [
    // The stage is chapter 73 and episode 43, the balloon chapter 74, the ledge above the canyon chapter 75 (pages 1-16), all in episode 43. Franklin is named only from chapter 76. His torture of the auctioneer is chapter-only, and of Owl left out.
    {
      episode: 43,
      chapter: 75,
      value: {
        title: { it: 'Il benvenuto', en: 'The welcome' },
        body: {
          it: 'Feitan sale sul palco dell’asta sotterranea con un altro membro della Brigata Fantasma e dà il benvenuto agli ospiti. Poi l’altro spara proiettili di aura che uccidono quasi tutti i presenti. Feitan è tra i membri che fuggono in mongolfiera con [[uvogin|Uborghin]], che ha trovato il caveau già vuoto. Quando la mafia abbatte la mongolfiera, Feitan guarda dall’alto di una parete di roccia con gli altri, mentre Uborghin affronta la mafia da solo.',
          en: 'Feitan walks onto the stage of the Underground Auction with another member of the Phantom Troupe and welcomes the guests. Then the other member fires bullets of aura that kill nearly everyone in the hall. Feitan is among the members who flee in a hot-air balloon with [[uvogin|Uvogin]], who found the vault already empty. When the Mafia shoots the balloon down, Feitan watches from a ledge with the others while Uvogin takes on the Mafia alone.',
        },
      },
    },
  ],
  'uvogin': [
    // The call is chapter 74, the fight with the Mafia chapter 75 (pages 1-16), both in episode 43. The leader is not named before episode 54.
    {
      episode: 43,
      chapter: 75,
      value: {
        title: { it: 'Da solo contro la mafia', en: 'Alone against the Mafia' },
        body: {
          it: 'Uborghin fugge dall’asta in mongolfiera con altri membri della Brigata Fantasma. Al telefono dice al capo che il caveau era già vuoto e che tra loro potrebbe esserci un traditore, ma il capo lo convince che non c’è, perché un traditore non avrebbe niente da guadagnarci. A svuotare il caveau è stata una delle Bestie dell’Ombra, i migliori combattenti della mafia. Il capo vuole che le attirino allo scoperto. Quando la mafia abbatte la mongolfiera, Uborghin scende ad affrontarla da solo. Uccide i suoi uomini a mani nude, e un’arma anticarro lo ferisce appena. [[kurapika|Kurapika]] guarda da lontano con le altre guardie del corpo.',
          en: 'Uvogin flees the auction in a hot-air balloon with other members of the Phantom Troupe. On the phone he tells their leader that the vault was already empty and that there may be a traitor among them, but the leader convinces him there is none, since a traitor would have nothing to gain. The vault was emptied by one of the Shadow Beasts, the Mafia’s best fighters. The leader wants them to draw the Shadow Beasts out. When the Mafia shoots the balloon down, Uvogin goes down to face it alone. He kills its men with his bare hands, and an anti-tank weapon barely hurts him. [[kurapika|Kurapika]] watches from afar with the other bodyguards.',
        },
      },
    },
    // The fight is chapters 75-76, the chain and the car chapter 77 (pages 1-11), all in episode 44. Porcupine’s fate stays open. Italian: Colpo del Big Bang (Italian Wikipedia, Brigata Fantasma).
    {
      episode: 44,
      chapter: 77,
      value: {
        title: { it: 'Le Bestie dell’Ombra', en: 'The Shadow Beasts' },
        body: {
          it: '[[worm|Lombrico]] colpisce Uborghin con un pugno, e Uborghin risponde più forte. Quando Lombrico lo afferra da sotto terra, Uborghin apre un cratere con il suo Colpo del Big Bang e lo lascia gravemente ferito. I morsi avvelenati di [[rabid-dog|Cane selvatico]] lo fanno crollare e [[leech|Sanguisuga]] lo riempie di sanguisughe, ma lui morde la testa di Sanguisuga, uccide Cane selvatico con un pezzo del cranio di Sanguisuga e si libera di [[porcupine|Porcospino]] con un urlo. [[shizuku|Shizuku]] può togliergli il veleno, ma non le sanguisughe. Poi una catena lo avvolge e lo trascina via: [[kurapika|Kurapika]] lo porta via in auto e lo zittisce quando prova a parlare.',
          en: '[[worm|Worm]] punches Uvogin, and Uvogin hits back harder. When Worm grabs him from under the ground, Uvogin blasts a crater with his Big Bang Impact and leaves Worm badly hurt. [[rabid-dog|Rabid Dog]]’s poisoned bites bring him down and [[leech|Leech]] fills him with leeches, but he bites Leech’s head, kills Rabid Dog with a piece of Leech’s skull and screams [[porcupine|Porcupine]] off him. [[shizuku|Shizuku]] can take out the poison but not the leeches. Then a chain wraps around him and pulls him away: [[kurapika|Kurapika]] drives off with him and silences him when he tries to talk.',
        },
      },
    },
    // The questioning and the rescue are chapter 78; his words for the leader open chapter 79 (page 1), all in episode 45.
    {
      episode: 45,
      chapter: 79,
      value: {
        title: { it: 'La spada contro il Nen', en: 'Sword against Nen' },
        body: {
          it: 'Prigioniero delle guardie del corpo dei Nostrad, Uborghin non può muoversi, ma quando [[dalzollene|Dalzorne]] cerca di colpirlo con la spada, la lama si spezza contro il suo Nen. Dice che le Bestie dell’Ombra avevano già spostato gli oggetti dell’asta e promette di risparmiarli se lo lasciano andare. Quando [[kurapika|Kurapika]] chiede degli ospiti dell’asta e Uborghin risponde che li hanno uccisi tutti, Kurapika lo colpisce con un pugno. [[phinks|Phinks]] e altri membri della Brigata lo liberano, e [[shizuku|Shizuku]] gli aspira il veleno. Uborghin dice agli altri di far sapere al capo che non tornerà finché non avrà regolato i conti con l’utilizzatore di catene.',
          en: 'Held by the Nostrade bodyguards, Uvogin cannot move, but when [[dalzollene|Dalzollene]] tries to stab him, the sword breaks against his Nen. He says the Shadow Beasts had already moved the auction items and offers to spare them if they let him go. When [[kurapika|Kurapika]] asks about the auction guests and Uvogin says they killed them all, Kurapika punches him. [[phinks|Phinks]] and other Troupe members free him, and [[shizuku|Shizuku]] sucks out the poison. Uvogin tells the others to let their leader know he will not come back until he has settled things with the chain user.',
        },
      },
    },
    // The beer and the website are chapter 79, the door chapter 80, both in episode 46. The chain user’s job, learned from a man he tortures, is chapter-only.
    {
      episode: 46,
      chapter: 80,
      value: {
        title: { it: 'La caccia', en: 'The hunt' },
        body: {
          it: 'Uborghin beve birra per liberarsi delle sanguisughe di [[leech|Sanguisuga]], mentre [[shalnark|Shalnark]] cerca per lui sul sito degli Hunter: l’edificio dove era tenuto prigioniero appartiene alla famiglia Nostrad. Uborghin va a caccia dell’utilizzatore di catene, uccidendo chi trova sulla sua strada. Alla fine raggiunge la stanza dove [[kurapika|Kurapika]] è rimasto da solo ad aspettarlo.',
          en: 'Uvogin drinks beer to get rid of [[leech|Leech]]’s leeches while [[shalnark|Shalnark]] searches the Hunter website for him: the building where he was held belongs to the Nostrade family. Uvogin hunts for the chain user, killing the people he finds on the way. In the end he reaches the room where [[kurapika|Kurapika]] has stayed behind alone to wait for him.',
        },
      },
    },
    // Chapters 81-84 and episode 47. Italian: Catena del Giudizio (Italian Wikipedia, Kurapika Kurata).
    {
      episode: 47,
      chapter: 84,
      value: {
        title: { it: 'La Catena del Giudizio', en: 'The Judgment Chain' },
        body: {
          it: 'Uborghin segue [[kurapika|Kurapika]] in un luogo deserto per combattere. Kurapika gli chiede se ricorda il clan Kurta, sterminato cinque anni prima per i suoi occhi scarlatti: Uborghin non lo ricorda, anche se allora era già nella Brigata, e dice di non provare niente quando uccide. Il Colpo del Big Bang di Uborghin spezza il braccio sinistro di Kurapika, ma poi Kurapika lo cattura con una catena nascosta con l’In. Con gli occhi diventati scarlatti, Kurapika si guarisce il braccio e spiega che la catena costringe Uborghin nello Zetsu, così la sua sola forza non basta a spezzarla. Uborghin non dice dove sono gli altri. Kurapika gli stringe la Catena del Giudizio attorno al cuore con una regola: rispondere alle sue domande. Quando Uborghin si rifiuta ancora, la catena lo uccide.',
          en: 'Uvogin follows [[kurapika|Kurapika]] to a deserted place to fight. Kurapika asks whether he remembers the Kurta Clan, killed five years ago for their Scarlet Eyes: Uvogin does not, though he was in the Troupe then, and says he feels nothing when he kills. Uvogin’s Big Bang Impact breaks Kurapika’s left arm, but Kurapika then catches him in a chain hidden with In. With his eyes turned scarlet, Kurapika heals the arm and explains that the chain forces Uvogin into Zetsu, so his strength alone cannot break it. Uvogin will not say where the others are. Kurapika winds his Judgment Chain around Uvogin’s heart with one rule, that he must answer the questions, and when Uvogin still refuses, the chain kills him.',
        },
      },
    },
  ],
  'worm': [
    // Chapter 75 (pages 1-16) and episode 43. Leech and Porcupine are named only from chapter 76.
    {
      episode: 43,
      chapter: 75,
      value: {
        title: { it: 'Da sotto terra', en: 'Out of the ground' },
        body: {
          it: 'Lombrico è una delle Bestie dell’Ombra, i combattenti che i capi della mafia chiamano contro la Brigata Fantasma dopo l’attacco all’asta. Mentre [[uvogin|Uborghin]] uccide gli uomini della mafia, [[melody|Melody]] sente qualcuno avvicinarsi sotto terra alle guardie del corpo dei Nostrad. Lombrico sbuca accanto a loro e si presenta. Con [[rabid-dog|Cane selvatico]] e altre due Bestie dell’Ombra dice che penseranno loro alla Brigata, e vanno ad affrontare Uborghin.',
          en: 'Worm is one of the Shadow Beasts, the fighters the Mafia’s bosses call in against the Phantom Troupe after the attack on the auction. While [[uvogin|Uvogin]] kills the Mafia’s men, [[melody|Melody]] hears someone coming toward the Nostrade bodyguards under the ground. Worm comes up next to them and introduces himself. With [[rabid-dog|Rabid Dog]] and two other Shadow Beasts, he says they will deal with the Troupe themselves, and they go to face Uvogin.',
        },
      },
    },
    // The punches and the blast are chapters 75-76 and episode 44; his call to the others closes chapter 76 (page 19) and opens episode 45; the deaths are chapter 78 and episode 45.
    {
      episode: 45,
      chapter: 78,
      value: {
        title: { it: 'Dopo l’esplosione', en: 'After the blast' },
        body: {
          it: 'Lombrico colpisce [[uvogin|Uborghin]] al viso e riceve in cambio un pugno più forte. Gli afferra il braccio e glielo trascina sotto terra, ma Uborghin risponde con il Colpo del Big Bang, che apre un cratere e lascia Lombrico gravemente ferito. Lombrico chiama aiuto al telefono e dice di portare tutti contro la Brigata. Quando arrivano le altre Bestie dell’Ombra, la Brigata le uccide, e Lombrico muore con loro.',
          en: 'Worm punches [[uvogin|Uvogin]] in the face and gets a harder punch back. He grabs Uvogin’s arm and pulls it under the ground, but Uvogin answers with his Big Bang Impact, which blasts a crater and leaves Worm badly hurt. Badly hurt, Worm phones for help and says to bring everyone against the Troupe. When the other Shadow Beasts come, the Troupe kills them, and Worm dies with the others.',
        },
      },
    },
  ],
  'rabid-dog': [
    // The Shadow Beasts are explained in chapter 74 and episode 43; the four arrive in chapter 75 (pages 1-16), the end of episode 43.
    {
      episode: 43,
      chapter: 75,
      value: {
        title: { it: 'La squadra dei Dieci Anziani', en: 'The Ten Dons’ team' },
        body: {
          it: 'Cane selvatico è una delle Bestie dell’Ombra, la squadra scelta dei Dieci Anziani della mafia. Dopo l’attacco della Brigata Fantasma all’asta sotterranea, la mafia le chiama in campo; una di loro aveva già svuotato il caveau prima dell’attacco. Cane selvatico arriva con [[worm|Lombrico]] e altre due Bestie dell’Ombra mentre [[uvogin|Uborghin]] sta uccidendo da solo gli uomini della mafia. Dicono alle guardie del corpo dei Nostrad che penseranno loro alla Brigata e vanno ad affrontarlo.',
          en: 'Rabid Dog is one of the Shadow Beasts, the elite team of the Mafia’s Ten Dons. After the Phantom Troupe raids the Underground Auction, the Mafia calls them in; one of them had already emptied the auction vault before the raid. Rabid Dog arrives with [[worm|Worm]] and two other Shadow Beasts while [[uvogin|Uvogin]] is killing the Mafia’s men alone. They tell the Nostrade bodyguards they will deal with the Troupe themselves and go to face him.',
        },
      },
    },
    // Chapter 76 and episode 44.
    {
      episode: 44,
      chapter: 76,
      value: {
        title: { it: 'Il veleno nel morso', en: 'Poison in the bite' },
        body: {
          it: 'Cane selvatico attacca [[uvogin|Uborghin]] insieme alle altre Bestie dell’Ombra. Mentre i peli di [[porcupine|Porcospino]] trattengono il pugno di Uborghin, Cane selvatico gli strappa pezzi di carne a morsi, e il veleno delle sue zanne lo fa crollare. [[leech|Sanguisuga]] gli riempie il corpo di sanguisughe, e Uborghin gli affonda i denti nella testa. Poi Uborghin sputa contro Cane selvatico un pezzo del cranio di Sanguisuga, che gli trapassa la testa e lo uccide.',
          en: 'Rabid Dog goes after [[uvogin|Uvogin]] with the other Shadow Beasts. While [[porcupine|Porcupine]]’s hairs hold Uvogin’s fist, Rabid Dog bites pieces out of him, and the poison in his fangs brings Uvogin down. [[leech|Leech]] fills Uvogin’s body with leeches, and Uvogin bites into his head. Then Uvogin spits a piece of Leech’s skull at Rabid Dog. It goes through his head and kills him.',
        },
      },
    },
  ],
  'porcupine': [
    // Chapter 76 and episode 44. Episode 44 leaves his fate open and chapter 76 does not, so the story says only that Uvogin is free of him.
    {
      episode: 44,
      chapter: 76,
      value: {
        title: { it: 'Gli aghi', en: 'Needles' },
        body: {
          it: 'Porcospino è una delle Bestie dell’Ombra mandate contro [[uvogin|Uborghin]]. Quando Uborghin cerca di colpirlo, i peli di Porcospino diventano aghi che trattengono il suo pugno, e Uborghin non riesce a liberarsene. Mentre Porcospino lo tiene, il veleno di [[rabid-dog|Cane selvatico]] lo fa crollare e [[leech|Sanguisuga]] lo riempie di sanguisughe. Uborghin uccide Sanguisuga e Cane selvatico. Poi si gira verso Porcospino, urla più forte che può e se ne libera.',
          en: 'Porcupine is one of the Shadow Beasts sent after [[uvogin|Uvogin]]. When Uvogin punches at him, Porcupine’s hairs turn into needles that catch his fist and hold it, and Uvogin cannot shake him off. While Porcupine holds him, [[rabid-dog|Rabid Dog]]’s poison brings Uvogin down and [[leech|Leech]] fills him with leeches. Uvogin kills Leech and Rabid Dog. Then he turns to Porcupine, screams at him as loud as he can, and is free of him.',
        },
      },
    },
  ],
  'leech': [
    // Chapter 76 and episode 44.
    {
      episode: 44,
      chapter: 76,
      value: {
        title: { it: 'Le sanguisughe', en: 'Leeches' },
        body: {
          it: 'Sanguisuga è una delle Bestie dell’Ombra mandate contro [[uvogin|Uborghin]]. Quando i peli di [[porcupine|Porcospino]] trattengono il pugno di Uborghin e il veleno di [[rabid-dog|Cane selvatico]] lo fa crollare, Sanguisuga si avvicina e gli riempie il corpo di sanguisughe. Uborghin si gira e gli affonda i denti nella testa, uccidendolo. Poi sputa un pezzo del cranio di Sanguisuga contro Cane selvatico, trapassandogli la testa.',
          en: 'Leech is one of the Shadow Beasts sent after [[uvogin|Uvogin]]. Once [[porcupine|Porcupine]]’s hairs hold Uvogin’s fist and [[rabid-dog|Rabid Dog]]’s poison brings him down, Leech moves in and fills Uvogin’s body with leeches. Uvogin turns and bites into Leech’s head, killing him. Then he spits a piece of Leech’s skull at Rabid Dog, and it goes through his head.',
        },
      },
    },
  ],
  'franklin': [
    // The auction is chapter 73 and episode 43; the cards, the fight and Shizuku’s answer are chapters 75-76 and episode 44.
    {
      episode: 44,
      chapter: 76,
      value: {
        title: { it: 'Le carte sulla roccia', en: 'Cards on the ledge' },
        body: {
          it: 'Franklin è il membro della Brigata Fantasma i cui proiettili di aura hanno ucciso quasi tutti all’asta sotterranea. Dopo che la mafia ha abbattuto la mongolfiera della Brigata, gioca a carte con gli altri membri mentre [[uvogin|Uborghin]] affronta da solo le Bestie dell’Ombra. Uborghin vince lo scontro, ma resta pieno di veleno e di sanguisughe. [[shizuku|Shizuku]] può aspirare il veleno con il suo aspirapolvere, ma non le sanguisughe, perché non prende le cose vive.',
          en: 'Franklin is the Phantom Troupe member whose bullets of aura killed nearly everyone at the Underground Auction. After the Mafia shoots down the Troupe’s balloon, he plays cards with the other members while [[uvogin|Uvogin]] takes on the Shadow Beasts alone. Uvogin wins the fight, but he is left full of poison and leeches. [[shizuku|Shizuku]] can suck the poison out with her vacuum cleaner, but not the leeches, because it does not take living things.',
        },
      },
    },
  ],
  'nobunaga': [
    // The cloth is chapter 77 (pages 12-19), the Shadow Beasts’ deaths chapter 78, both in episode 45.
    {
      episode: 45,
      chapter: 78,
      value: {
        title: { it: 'Intrappolato nel telo', en: 'Trapped in the cloth' },
        body: {
          it: 'Nobunaga e altri membri della Brigata inseguono l’auto che porta via [[uvogin|Uborghin]], seguendo il filo che [[machi|Machi]] gli ha attaccato. [[owl|Civetta]] atterra sulla loro auto e la avvolge nel suo telo. Gli altri riescono a uscire, ma Nobunaga, per il posto in cui è seduto, resta intrappolato. Poi arrivano altre Bestie dell’Ombra, e la Brigata uccide quelle che la attaccano.',
          en: 'Nobunaga and other members of the Troupe chase the car taking [[uvogin|Uvogin]] away, following the thread [[machi|Machi]] attached to him. [[owl|Owl]] lands on their car and wraps it in his cloth. The others get out, but Nobunaga, because of where he sits, is trapped inside. Then more Shadow Beasts arrive, and the Troupe kills the Shadow Beasts who come after them.',
        },
      },
    },
  ],
  'owl': [
    // The cloth and the Shadow Beasts’ arrival are chapter 77 (pages
    // 12-19), in episode 45. The story stops there: what becomes of him is
    // not told to a chapter reader before chapter 84, and his torture is
    // left out.
    {
      episode: 45,
      chapter: 77,
      value: {
        title: { it: 'Il telo', en: 'The cloth' },
        body: {
          it: 'Civetta è una delle Bestie dell’Ombra. Quando alcuni membri della Brigata Fantasma inseguono l’auto che porta via [[uvogin|Uborghin]], salta sulla loro auto e la avvolge nel suo telo. Escono tutti tranne [[nobunaga|Nobunaga]], che resta intrappolato. Poi arrivano altre Bestie dell’Ombra ad affrontare la Brigata.',
          en: 'Owl is one of the Shadow Beasts. When members of the Phantom Troupe chase the car taking [[uvogin|Uvogin]] away, he drops onto their car and wraps it in his cloth. All of them get out except [[nobunaga|Nobunaga]], who is trapped inside. Then more Shadow Beasts arrive to take on the Troupe.',
        },
      },
    },
  ],
  'phinks': [
    // Chapter 78 and episode 45.
    {
      episode: 45,
      chapter: 78,
      value: {
        title: { it: 'Travestiti da mafiosi', en: 'Disguised as the Mafia' },
        body: {
          it: 'Con altri membri della Brigata Fantasma, travestiti da mafiosi, Phinks raggiunge il posto dove le guardie del corpo dei Nostrad tengono prigioniero [[uvogin|Uborghin]]. Lì uccide [[dalzollene|Dalzorne]] e libera il compagno. [[shizuku|Shizuku]] aspira il veleno dal corpo di Uborghin, e appena Uborghin può muoversi di nuovo giura vendetta contro l’utilizzatore di catene.',
          en: 'With other members of the Phantom Troupe, disguised as Mafia men, Phinks reaches the place where the Nostrade bodyguards hold [[uvogin|Uvogin]] prisoner. There he kills [[dalzollene|Dalzollene]] and frees his comrade. [[shizuku|Shizuku]] sucks the poison out of Uvogin’s body, and as soon as Uvogin can move again, he vows revenge on the chain user.',
        },
      },
    },
  ],
  'light-nostrade': [
    // Chapter 79 and episode 46.
    {
      episode: 46,
      chapter: 79,
      value: {
        title: {
          it: 'Un nuovo capo per le guardie',
          en: 'A new head for the bodyguards',
        },
        body: {
          it: 'Light Nostrad è il padre di [[neon-nostrade|Neon]] e chi ha assunto le sue guardie del corpo, a cui dava gli ordini tramite [[dalzollene|Dalzorne]]. Dopo l’attacco all’asta, le guardie scelgono [[kurapika|Kurapika]] per chiamarlo. Kurapika gli dice che Dalzorne è probabilmente morto e che dietro l’attacco c’è la Brigata Fantasma. Light lo mette a capo delle guardie del corpo.',
          en: 'Light Nostrade is [[neon-nostrade|Neon]]’s father and the one who hired her bodyguards, giving them his orders through [[dalzollene|Dalzollene]]. After the attack on the auction, the bodyguards choose [[kurapika|Kurapika]] to call him. Kurapika tells him that Dalzollene is probably dead and that the Phantom Troupe was behind the attack. Light puts Kurapika in charge of the bodyguards.',
        },
      },
    },
  ],
  'shalnark': [
    // Chapter 79 and episode 46. Franklin bringing the beer is anime-only.
    {
      episode: 46,
      chapter: 79,
      value: {
        title: { it: 'Il sito degli Hunter', en: 'The Hunter website' },
        body: {
          it: 'Shalnark resta con [[uvogin|Uborghin]] nell’appartamento di un uomo ucciso, mentre Uborghin beve birra per liberarsi delle sanguisughe. Uborghin vuole trovare l’utilizzatore di catene che lo ha catturato, così Shalnark cerca sul sito degli Hunter e scopre che l’edificio dove era tenuto prigioniero appartiene alla famiglia Nostrad. Uborghin parte alla ricerca dell’utilizzatore di catene, uccidendo chi trova sulla sua strada.',
          en: 'Shalnark stays with [[uvogin|Uvogin]] in a dead man’s apartment while Uvogin drinks beer to get rid of the leeches in his body. Uvogin wants to find the chain user who captured him, so Shalnark searches the Hunter website and finds that the building where he was held belongs to the Nostrade family. Uvogin sets off after the chain user, killing the people he finds on the way.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
