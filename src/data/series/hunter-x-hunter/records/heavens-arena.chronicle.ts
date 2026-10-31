import type { Story, Timeline } from '~/data/types'

/** The dated stories for the characters of Heavens Arena (#898). */
export const heavensArenaChronicles = {
  zushi: [
    {
      episode: 27,
      chapter: 45,
      value: {
        title: { it: 'L’incontro con Killua', en: 'The match with Killua' },
        body: {
          it: 'Zooci sale al 50º piano con [[gon-freecss|Gon]] e [[killua|Killua]] e racconta che studia il kung fu Shingen-ryu. Il suo incontro successivo è proprio contro Killua, al 57º piano. Killua lo colpisce due volte alla nuca, e due volte Zooci si rialza. Poi Zooci assume una nuova posizione che fa balzare indietro Killua, e dagli spalti [[wing|Wing]] grida il suo nome così forte che chi gli sta intorno si tappa le orecchie. Killua vince, ma non riesce a metterlo KO. Dopo l’incontro Zooci si prostra davanti a Wing e si scusa per aver usato il Ren, che non doveva ancora usare. Wing risponde che voler vincere va bene, ma il suo obiettivo è l’ultimo piano e deve abituarsi a perdere molte volte.',
          en: 'Zushi rides up to the 50th floor with [[gon-freecss|Gon]] and [[killua|Killua]] and tells them he studies Shingen-ryu kung fu. His next match is against Killua, on the 57th floor. Killua strikes him on the back of the neck twice, and twice Zushi gets back up. Then Zushi takes a new stance that makes Killua leap away, and [[wing|Wing]] shouts his name from the stands so loudly that the people around him cover their ears. Killua wins, but he cannot knock Zushi out. Afterwards Zushi bows to the floor before Wing and apologizes for using Ren, which he was told not to use yet. Wing answers that wanting to win is fine, but his goal is the top floor and he has to get used to losing many times.',
        },
      },
    },
    // Zushi lists the four principles at the end of episode 27 (chapter 46,
    // pages 1–7); his question to Wing and the cut can come in episode 28,
    // which adapts the rest of chapter 46.
    {
      episode: 28,
      chapter: 46,
      value: {
        title: {
          it: 'Perché il maestro ha mentito',
          en: 'Why the teacher lied',
        },
        body: {
          it: 'Quando [[gon-freecss|Gon]] e [[killua|Killua]] gli chiedono del Ren, Zooci elenca i quattro principi, Ten, Zetsu, Ren e Hatsu, e li lascia più confusi di prima. [[wing|Wing]] gli dice che non tocca a lui insegnare e porta i due ragazzi nella sua stanza per una lezione. Appena i due se ne vanno, Wing nota che il Ten di Zooci è agitato. Zooci gli chiede perché abbia mentito ai due. Wing risponde che quello che ha spiegato serve anche per il vero Nen, ma che il Nen vero lo insegna solo ai suoi allievi. Strappa una pagina da un libro, la rende tagliente come una lama e taglia in due una lattina. Chiunque può imparare il Nen con abbastanza impegno, spiega, perciò un maestro deve scegliere bene a chi insegnarlo.',
          en: 'When [[gon-freecss|Gon]] and [[killua|Killua]] ask him about Ren, Zushi lists the four principles, Ten, Zetsu, Ren and Hatsu, and leaves them more confused than before. [[wing|Wing]] tells him he should not be the one teaching and takes the two boys to his room for a lesson. Once they have gone, Wing notices that Zushi’s Ten is unsteady. Zushi asks him why he lied to them. Wing answers that what he told them also matters for the real Nen, but that he teaches the real thing only to his own pupils. He tears a page from a book, makes it as sharp as a blade and slices a can in half. Anyone can learn Nen with enough work, he explains, so a teacher has to choose carefully whom to teach.',
        },
      },
    },
    // Gyo is chapter 56, the hostage and Killua’s Gyo chapter 57; episode 33
    // adapts both.
    {
      episode: 33,
      chapter: 57,
      value: {
        title: { it: 'Preso in ostaggio', en: 'Taken as a hostage' },
        body: {
          it: 'Due mesi dopo l’incontro di [[gon-freecss|Gon]] con [[gido|Ghido]], Gon e [[killua|Killua]] cominciano ad allenarsi con Zooci sotto la guida di [[wing|Wing]]. Wing chiede loro di esercitarsi nel Ren e di imparare il Gyo, che concentra l’aura negli occhi per vedere il Nen nascosto. Zooci ci riesce davanti a tutti, ma si stanca in fretta. Mentre torna indietro dopo l’allenamento, [[sadaso|Sadaso]] lo afferra con un braccio fatto di aura, per costringere Gon e Killua a combattere. Killua interviene e promette di lasciarli vincere tutti in cambio del ragazzo. Il giorno dopo Killua mostra di aver imparato il Gyo in una notte e con quello capisce le abilità di [[hisoka|Hisoka]], e tutti restano stupiti, Zooci compreso.',
          en: 'Two months after [[gon-freecss|Gon]]’s match with [[gido|Gido]], Gon and [[killua|Killua]] start training with Zushi under [[wing|Wing]]. Wing tells them to practice Ren and to learn Gyo, which gathers aura in the eyes to see hidden Nen. Zushi manages Gyo in front of the others, but it tires him quickly. On his way back after practice, [[sadaso|Sadaso]] seizes him with an arm made of aura, to force Gon and Killua into matches. Killua steps in and promises to let them all win in exchange for the boy. The next day Killua shows that he learned Gyo overnight and uses it to work out [[hisoka|Hisoka]]’s abilities, which amazes everyone, Zushi included.',
        },
      },
    },
  ],
  wing: [
    // He introduces himself in chapter 45; the four principles and his offer
    // close episode 27 and open chapter 46.
    {
      episode: 27,
      chapter: 46,
      value: {
        title: { it: 'Il maestro di Zooci', en: 'Zushi’s teacher' },
        body: {
          it: 'Wing raggiunge [[zushi|Zooci]] insieme a [[gon-freecss|Gon]] e [[killua|Killua]] e loda il suo allievo per aver seguito i suoi insegnamenti. Si presenta, sorpreso di trovare lì altri ragazzi, e dice ai due che, bravi come sono, da ora in poi devono stare attenti. Durante l’incontro di Zooci con Killua grida dagli spalti il nome del suo allievo così forte che chi gli sta intorno si tappa le orecchie, poi torna a sedersi. Più tardi i due ragazzi chiedono a Zooci del Ren, e mentre Zooci elenca i quattro principi del Nen compare Wing. Killua vuole imparare, convinto che sia il segreto della forza di suo fratello, e Wing li invita a seguirlo.',
          en: 'Wing joins [[zushi|Zushi]] with [[gon-freecss|Gon]] and [[killua|Killua]] and praises his pupil for following his teaching. He introduces himself, surprised to find other boys there, and tells the two that, skilled as they are, they must be careful from now on. In Zushi’s match with Killua he shouts his pupil’s name from the stands so loudly that the people around him cover their ears, then sits back down. Later the two boys ask Zushi about Ren, and Wing appears while Zushi lists the four principles of Nen. Killua wants to learn, sure that it is the secret of his brother’s power, and Wing invites them to come with him.',
        },
      },
    },
    // The false lesson is episode 28 and chapter 46, Hisoka’s barrier and the
    // offer chapter 47; the aura nodes and the walk through the barrier come
    // in episode 29 and chapter 48.
    {
      episode: 29,
      chapter: 48,
      value: {
        title: { it: 'Il vero Nen', en: 'The real Nen' },
        body: {
          it: 'Wing dà a [[gon-freecss|Gon]] e [[killua|Killua]] una versione falsa dei quattro principi, quella che riserva a chi non è suo allievo, e Killua non ci crede. Quando i due arrivano al 200º piano, il Nen di [[hisoka|Hisoka]] li blocca nel corridoio; Wing compare alle loro spalle e si offre di insegnare loro il vero Nen. Al 200º piano tutti i lottatori usano il Nen e lo scagliano contro chi è appena arrivato, e prima di mezzanotte non c’è tempo per la via lenta: Wing apre a forza i punti da cui esce la loro aura, un metodo che lui stesso definisce pericoloso. I due imparano il Ten all’istante, e lui ne resta sbalordito. Tornati al 200º piano, attraversano la barriera di Hisoka.',
          en: 'Wing gives [[gon-freecss|Gon]] and [[killua|Killua]] a false version of the four principles, the one he keeps for anyone who is not his pupil, and Killua does not believe it. When the two reach the 200th floor, [[hisoka|Hisoka]]’s Nen stops them in the hallway; Wing appears behind them and offers to teach them the real Nen. Every fighter on that floor uses Nen and turns it on newcomers, and there is no time for the slow way before midnight: Wing forces open the points their aura flows from, a method he himself calls dangerous. They learn Ten at once, which astonishes him. Back on the 200th floor, they walk through Hisoka’s barrier.',
        },
      },
    },
    // Water Divination and the secret exam are episode 35 and chapter 60.
    {
      episode: 35,
      chapter: 60,
      value: {
        title: { it: 'Il bicchiere d’acqua', en: 'The glass of water' },
        body: {
          it: 'Wing passa all’Hatsu con [[gon-freecss|Gon]], [[killua|Killua]] e [[zushi|Zooci]] e spiega i sei tipi di aura e quanto ciascuno sia compatibile con gli altri. Prende ad esempio [[hisoka|Hisoka]], [[gido|Ghido]] e [[kastro|Kastro]]: secondo lui Kastro ha sprecato il suo talento in un Doppelgänger che richiedeva tipi lontani dal suo. Poi insegna loro il Test dell’Acqua, con una foglia che galleggia in un bicchiere d’acqua. Gon fa traboccare l’acqua e appartiene al Potenziamento, Killua la rende dolce e appartiene alla Trasformazione, Zooci fa muovere la foglia e appartiene alla Manipolazione. Dopo settimane di allenamento, Wing rivela a Gon che ha superato l’esame segreto da Hunter. Aggiunge che [[netero|Netero]] è a capo dello Shingen-ryu, la sua scuola, e dice a Killua che è più che pronto per ripresentarsi all’esame.',
          en: 'Wing moves on to Hatsu with [[gon-freecss|Gon]], [[killua|Killua]] and [[zushi|Zushi]] and explains the six types of aura and how well each goes with the others. He takes [[hisoka|Hisoka]], [[gido|Gido]] and [[kastro|Kastro]] as examples: in his view Kastro wasted his talent on a Double that needed types far from his own. Then he teaches them Water Divination, with a leaf floating on a glass of water. Gon makes the water overflow and is an Enhancer, Killua makes it sweet and is a Transmuter, and Zushi moves the leaf and is a Manipulator. After weeks of training, Wing tells Gon that he has passed the secret Hunter Exam. He adds that [[netero|Netero]] is the head of Shingen-ryu, his school, and tells Killua that he is more than ready to take the exam again.',
        },
      },
    },
  ],
  gido: [
    // The trio's approach is chapter 48 and episode 29; the announcer names
    // him and the match opens in chapter 49, the end of episode 29.
    {
      episode: 29,
      chapter: 49,
      value: {
        title: { it: 'Il primo avversario', en: 'The first opponent' },
        body: {
          it: 'Al 200º piano Ghido e altri due lottatori si presentano a [[gon-freecss|Gon]] e [[killua|Killua]], appena arrivati, per chiedere un incontro. Il primo incontro di Gon a quel piano viene fissato contro di lui per il giorno dopo; Ghido ha quattro vittorie e una sconfitta. Appena l’incontro comincia, Ghido fa girare le sue trottole lungo il bastone e con il Valzer di Guerra le lancia a rimbalzare tutto intorno a Gon. Una colpisce Gon alla schiena, e l’arbitro assegna un punto. Ghido spiega che le trottole girano per ore e che nemmeno lui sa dove andranno.',
          en: 'On the 200th floor, Gido and two other fighters come to [[gon-freecss|Gon]] and [[killua|Killua]], just arrived, to ask for a match. Gon’s first match on the floor is set against him for the next day; Gido has four wins and one loss. As soon as the match starts, Gido spins his tops along his cane and, with Battle Waltz, sends them bouncing all around Gon. One strikes Gon in the back, and the referee awards a point. Gido explains that the tops spin for hours and that not even he knows where they will go.',
        },
      },
    },
    // The match starts in episode 29 and chapter 49; Gon’s broken arm and the
    // result come in episode 30 and chapter 51.
    {
      episode: 30,
      chapter: 51,
      value: {
        title: { it: 'Il braccio rotto', en: 'The broken arm' },
        body: {
          it: 'Nell’incontro con [[gon-freecss|Gon]], le trottole di Ghido continuano a colpirlo, e una volta lo mandano fuori dal ring. Gon nota una trottola che gira fuori dal ring senza attaccarlo, capisce che le trottole colpiscono qualsiasi cosa incontrino e corre dritto verso Ghido. Ghido fa girare tutto il corpo con la Trottola Tornado e lo scaraventa fuori dal ring. Allora Gon passa allo Zetsu e comincia a schivare le trottole. Alla fine [[killua|Killua]] gli grida un avvertimento, ma Gon resta senza via di fuga e ne esce con un braccio rotto. Ghido vince l’incontro.',
          en: 'In the match with [[gon-freecss|Gon]], Gido’s tops keep hitting him, and once they knock him out of the ring. Gon sees a top spinning outside the ring without attacking him, works out that the tops strike whatever they meet, and runs straight at Gido. Gido spins his whole body with Tornado Top and throws him out of the ring. Then Gon switches to Zetsu and starts dodging the tops. In the end [[killua|Killua]] shouts a warning, but Gon is left with nowhere to go and comes out of it with a broken arm. Gido wins the match.',
        },
      },
    },
  ],
  kastro: [
    // Everything here is in chapter 52, which ends on the first clean hit;
    // episode 31 covers chapters 52–53.
    {
      episode: 31,
      chapter: 52,
      value: {
        title: { it: 'Due anni dopo', en: 'Two years later' },
        body: {
          it: 'Due anni fa Kastro ha perso un incontro contro [[hisoka|Hisoka]], ma è anche quello che gli ha tolto più punti di chiunque altro. Da allora ha vinto nove incontri di fila, e con un’altra vittoria potrà sfidare un Maestro di piano. Prima della rivincita [[killua|Killua]] si avvicina alla sua stanza usando lo Zetsu e lo vede seduto dentro, ma un attimo dopo Kastro è alle sue spalle. Sa già chi è Killua e conosce anche [[gon-freecss|Gon]]. Gli fa i complimenti per lo Zetsu, ma gli dice che l’ha usato troppo tardi, e non gli spiega come ha fatto, perché un giorno potrebbero affrontarsi. Sul ring ringrazia Hisoka per averlo reso più forte e dice che i nove incontri erano solo un riscaldamento. Appena comincia l’incontro, il suo primo colpo raggiunge Hisoka, anche se Hisoka sembra averlo schivato.',
          en: 'Two years ago Kastro lost a match to [[hisoka|Hisoka]], yet he has scored more points against him than anyone else. Since then he has won nine matches in a row, and one more win would let him challenge a Floor Master. Before the rematch, [[killua|Killua]] creeps up to his room using Zetsu and sees him sitting inside, but a moment later Kastro is standing behind him. He already knows who Killua is, and he knows about [[gon-freecss|Gon]] too. He praises Killua’s Zetsu but says he started it too late, and he will not explain how he did it, since they might fight one day. In the ring he thanks Hisoka for making him stronger and says the nine matches were only a warm-up. When the match starts, his first strike hits Hisoka, even though Hisoka seems to dodge it.',
        },
      },
    },
    // The match runs over chapters 52–54 and episodes 31–32; the death is in
    // chapter 54 and episode 32, so the story waits for both.
    {
      episode: 32,
      chapter: 54,
      value: {
        title: { it: 'Il Doppelgänger', en: 'The Double' },
        body: {
          it: 'Kastro colpisce ancora [[hisoka|Hisoka]] e lo manda al tappeto, quattro punti a zero, poi con il Morso della Tigre gli stacca il braccio destro. Hisoka capisce il trucco: con il Nen Kastro crea un Doppelgänger di sé, lo manda avanti e colpisce quando quello svanisce. Hisoka risponde con un gioco di carte, estrae l’asso di picche dalla ferita e lascia che il Doppelgänger gli stacchi il braccio sinistro, poi mostra il destro di nuovo attaccato. Quando Kastro attacca insieme al Doppelgänger, Hisoka riconosce subito quello vero, perché il Doppelgänger non porta i segni del combattimento. Il braccio sinistro staccato di Hisoka vola contro la mascella di Kastro, che prova a creare un Doppelgänger per ripararsi dalle carte in arrivo ma non ci riesce. Le carte lo trafiggono e Kastro muore.',
          en: 'Kastro hits [[hisoka|Hisoka]] again and knocks him down for a four-point lead, then cuts off Hisoka’s right arm with his Tiger Bite Fist. Hisoka works out the trick: Kastro makes a Double of himself with Nen, sends it in first and strikes when it vanishes. Hisoka answers with a card trick, pulls the ace of spades out of his wound and lets the Double cut off his left arm, then shows his right arm attached again. When Kastro charges with the Double, Hisoka picks out the real one at once, because the Double never shows the marks of the fight. Hisoka’s severed left arm flies into Kastro’s jaw, and Kastro tries to make a Double to shield himself from the cards that follow, but cannot. The cards pierce him and he dies.',
        },
      },
    },
  ],
  sadaso: [
    // Filed at his name (chapter 57, episode 33). It recounts the trio's
    // first approach (chapters 48–49, episode 29), already known by then;
    // the ambush, Killua's deal and Gido's call are in chapter 57 and
    // episode 33. Riehlvelt opens later (34/59), so he stays a third fighter.
    {
      episode: 33,
      chapter: 57,
      value: {
        title: { it: 'Zooci in ostaggio', en: 'Zushi held hostage' },
        body: {
          it: 'Con [[gido|Ghido]] e un terzo lottatore, Sadaso cerca incontri con chi è appena arrivato al 200º piano, per vincere facile. Due mesi dopo l’incontro di [[gon-freecss|Gon]] con Ghido, i tre fermano di nuovo Gon e [[killua|Killua]] e insistono per combattere. Quando [[zushi|Zooci]] si separa dagli altri due, Sadaso lo sorprende e lo afferra con una mano gigante fatta della sua aura. Killua arriva subito e promette a ognuno dei tre una vittoria a tavolino, se lasciano andare Zooci e smettono di fare pressione su Gon. Sadaso accetta, e Killua li avverte di mantenere la parola. Intanto Ghido telefona a Gon e lo minaccia usando Zooci, così il patto è rotto appena concluso.',
          en: 'With [[gido|Gido]] and a third fighter, Sadaso goes after fighters new to the 200th floor for easy wins. Two months after [[gon-freecss|Gon]]’s match with Gido, the three stop Gon and [[killua|Killua]] again and press them for a match. When [[zushi|Zushi]] parts from the other two, Sadaso ambushes him and seizes him in a giant hand made of his aura. Killua turns up at once and offers each of the three a win by default, if they let Zushi go and stop pressing Gon. Sadaso agrees, and Killua warns them to keep their word. Meanwhile Gido phones Gon and threatens him with Zushi, so the deal is broken as soon as it is made.',
        },
      },
    },
    // Killua's threat and the default are in chapter 57 and episode 33, but
    // the call to his companions, his leaving and Gon's default win come in
    // chapter 58 and episode 34. Riehlvelt is not named until 34/59.
    {
      episode: 34,
      chapter: 58,
      value: {
        title: { it: 'Via dall’Arena Celeste', en: 'Leaving Heavens Arena' },
        body: {
          it: 'Da un venditore di biglietti per strada [[killua|Killua]] scopre che il gruppo di Sadaso ha fissato un incontro anche con [[gon-freecss|Gon]]. Prima del loro incontro raggiunge Sadaso di nascosto e lo minaccia: se si farà vedere ancora da loro, morirà. Sadaso non si presenta, e Killua vince a tavolino. Poi Sadaso telefona ai suoi due compagni, li avverte che i ragazzi sono pericolosi e dice che lascia l’Arena Celeste. Anche Gon vince a tavolino il suo incontro contro di lui.',
          en: 'From a ticket seller in the street, [[killua|Killua]] learns that Sadaso’s group has set up a match with [[gon-freecss|Gon]] as well. Before their own match he gets to Sadaso unseen and threatens him: if Sadaso ever shows his face to them again, he dies. Sadaso does not fight, and Killua wins by default. Sadaso then phones his two companions, warns them that the boys are dangerous and says he is leaving Heavens Arena. Gon also wins his match against him by default.',
        },
      },
    },
  ],
  riehlvelt: [
    // Both matches, with Killua and then with Gon, are in chapter 59 and
    // episode 34; Sadaso's call and Killua's warning come just before, in
    // chapter 58 of the same episode.
    {
      episode: 34,
      chapter: 59,
      value: {
        title: {
          it: 'Due fruste, due sconfitte',
          en: 'Two whips, two defeats',
        },
        body: {
          it: 'Quando [[sadaso|Sadaso]] telefona per avvertirlo e lascia l’arena, Liroubert vuole comunque diventare Maestro di piano. Nel loro incontro Killua gli salta addosso, ma Liroubert evita il colpo sfrecciando via sulla sedia a rotelle con una spinta della sua aura. Poi attacca con due fruste, ma Killua le afferra entrambe e resiste alla scarica elettrica che le percorre. Killua tira le fruste e lo scaraventa in aria, e Liroubert lo supplica di prenderlo. Killua lo afferra con le fruste ancora cariche di elettricità in mano e vince. Contro [[gon-freecss|Gon]] evita allo stesso modo una lastra del pavimento lanciata contro di lui, ma Gon gli è già davanti e gli toglie le fruste. Quando Gon gliele stringe al collo e minaccia di accendere la corrente, Liroubert sviene per la paura.',
          en: 'When [[sadaso|Sadaso]] phones to warn him and leaves the arena, Riehlvelt still means to become a Floor Master. In their match Killua leaps at him, but Riehlvelt escapes the blow by shooting away in his wheelchair with Aura Burst. He then lashes out with two whips, but Killua catches both and withstands the electricity that runs through them. Killua yanks the whips and throws him into the air, and Riehlvelt begs him to catch him. Killua catches him with the electrified whips still in his hands and wins. Against [[gon-freecss|Gon]] he escapes a hurled flagstone with Aura Burst, but Gon is already in front of him and takes the whips. When Gon wraps them around his neck and threatens to switch on the current, Riehlvelt faints from fear.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
