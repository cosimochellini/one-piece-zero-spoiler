/**
 * Which wiki page settles each Hunter x Hunter chronicle story's episode, and
 * what the verification passes found there (#762). Keyed by character id and
 * then by episode, like `CHRONICLE_SOURCES`; the title and the episode come
 * from the chronicle data.
 */
export const HUNTER_X_HUNTER_SOURCES = {
  'gon-freecss': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "Checked on the episode page: the swamp fish, Mito's night-before talk, the storm warning by smell and birds, and the dive for Katzo with the two holding his legs all fall in this episode.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: 'The episode page has Gon waiting for Leorio, the shared reasons, and the race to the exit where Satotz rules a tie.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "The page covers the badge hooked from Hisoka, the dart paralysis, Hisoka killing the thief and handing back both badges, and the punch with the condition. Gon's two days of rod practice come from episode 15, so the story is not early.",
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'The match runs from the arm break through the leg and death threats to Hanzo conceding, then knocking Gon out; Gon is the first to pass.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Gon breaks Illumi's arm in front of the examinees, then outside gets the answer that Killua is at Kukuroo Mountain; he leaves with Kurapika and Leorio the same day.",
    },
  },
  'mito-freecss': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "Corrected after review: 'speechless' was invented, the page says she is dismayed; also linked Gon. Fish condition, night talk and the morning farewell with her grandmother are all in this episode.",
    },
    26: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_26_(2011)',
      note: 'Corrected after review: linked Gon. The recap letter (passed, unhappy about the final match, Kukuroo Mountain trip, one more piece of business, the framed photo) is all in this episode; kept at chapter 43 as an anime-only recap.',
    },
  },
  'leorio-paradinight': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "The captain's question, Leorio's money answer, the clan insult, the duel on deck and the rescue of Katzo are all in this episode; they make up the next day.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "Corrected after review: 'faster than anyone' became running past Gon and Killua, as the page says. The jacket, friend's death from a treatable illness and the wish to treat poor children for free are all here.",
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_5_(2011)',
      note: 'Leorio and Kurapika watch Hisoka wipe out the applicants, split up, Leorio returns, is knocked out by an uppercut and carried off by Hisoka.',
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: "The page has Leroute's bets, the heartbeat check, dragging Majtani to the edge, his eye movements read from medical study, the 40 hours lost and the 2-1 lead.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz's account on the page covers Illumi's lecture, Leorio's shout at Killua, Leorio, Kurapika and Hanzo blocking the door, Killua's surrender and the killing of Bodoro.",
    },
  },
  'kurapika': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "On the page Kurapika states his Phantom Troupe motive and the license's access, then the duel and Katzo rescue.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: 'The Scarlet Eyes, the seven most beautiful colors, the black-market plan and the pride exchange with Leorio are all in this episode.',
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: 'The deathmatch with Majtani, the heart tattoos, the spider on his back, the scarlet eyes, the single punch and the three points are all here; he then sits alone.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Corrected after review: he no longer 'asks the committee to review', the page only has him defending Killua as manipulated by Illumi. Pokkle's doubt about the Hisoka win, his refusal to answer and the departure for Kukuroo Mountain are here; the Hisoka forfeit and door block are recounted in episode 20.",
    },
  },
  'katzo': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "Corrected after review: 'a wave' was invented and became the storm. Bullied by the crew, helped by Gon, hurried by the captain, saved by Gon with the two holding his legs, thanks them next day.",
    },
  },
  'kiriko': {
    2: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_2_(2011)',
      note: "Corrected after review: Gon's line was reversed; the page has him telling the Kiriko cornering him it is not the one he was chasing, then the Kiriko calls its partner and the couple reveal themselves as the offspring. The tattoo, the fake Leorio and the flight to the site are all here.",
    },
  },
  'tonpa': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: "Tonpa's offer of help, the warning about Hisoka, the laxative juice, Kurapika pouring it out and his recalling Hanzo and Nicholas are all on the page.",
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: 'Kept at episode 9, the later of the two: episode 8 covers the vote and the join, episode 9 the surrender before Bendot hits him and his admission to Leorio.',
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_15_(2011)',
      note: 'Tonpa teams with Sommy, Leorio and Kurapika tie him to a rock with the sign, Kurapika takes his badge for six points and Leorio gets his own back.',
    },
  },
  'hisoka': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: "Tonpa's warning about the examiner Hisoka nearly killed, and the applicant whose arms disappear after bumping into him, are on the page.",
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_5_(2011)',
      note: "Hisoka plays examiner and sweeps the applicants, then Gon's rod hit, the neck hold, 'worthy of continuing' and carrying Leorio off.",
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'Togari waiting with a grudge, the curved knives, Hisoka catching two blades and decapitating him, and being first through in six hours seventeen minutes.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "Gon's hook on the badge, Hisoka's smile, killing the thief, returning both badges, the punch and the condition are all in this episode.",
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: 'Corrected after review: linked Killua. Hisoka appears behind Illumi, says the Zoldyck home is common knowledge and warns him off Gon, all in this episode.',
    },
  },
  'hanzo': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: "Tonpa's flashback on the manga chapter 6 page cites Hanzo's ninja claim, scroll and refusal; the episode page itself only names him among those who refused, so the detail rests on the Hanzo page.",
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Hanzo's requests to give up, the broken arm, the leg and death threats, Gon's answer about his father, his concession and the knockout punch.",
    },
  },
  'nicholas': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'The episode page only names Nicholas among those who skipped the juice; the laptop detail comes from his character page (chapter 6), so it stays unconfirmed at episode level.',
    },
  },
  'satotz': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'The episode page has him introducing himself and telling them to follow through the tunnel; closing registration, the life warning and the quickened pace are not on the page and rest on the existing dossier, flagged as unconfirmed.',
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "At the swamp he is warned by the false examiner and a man dragging an ape, Hisoka's cards, Satotz catching them and the warning not to attack again.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz beside Gon's bed offers the handshake and license, Gon declines then accepts, and Killua is the only failure, with the matches recounted up to the Bodoro killing.",
    },
  },
  'killua': {
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: 'Corrected after review: it was not stated who proposed the race, so it now says they agree on it. Skateboard, same age, waiting for Leorio, reasons, the tie called by Satotz and the juice from episode 3 are here.',
    },
    7: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_7_(2011)',
      note: 'The page has the assassin family, the attack on his mother and brother, the ball game with Netero, hitting the leg and hurting himself, and killing the two examinees.',
    },
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'Johness removes his face cover, Leorio is alarmed, Killua tears out his heart, the score goes to 3-2 and a path opens.',
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: 'Corrected after review: it was ambiguous who Illumi threatens; the page says he decides to kill Gon and Killua surrenders. Pokkle forfeit, Illumi revealed as his brother and the Bodoro kill are all here.',
    },
    25: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_25_(2011)',
      note: "Episode 23 shows Killua chained and whipped by Milluki; episode 24 has Zeno freeing him and Silva's promise deal; episode 25 has him rejoining Gon, Kurapika and Leorio, so the story completes in 25 (chapter 43).",
    },
  },
  'menchi': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: 'Corrected after review: the page has Menchi asking Netero to take the applicants to Split Mountain, so the text no longer has her leading them. The roast pork test, failing everyone, admitting her temper and the egg demonstration are here.',
    },
  },
  'buhara': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: 'The roast pork order, the Great Stamp hunt, knocking out the applicant who attacks Menchi and saying she would have killed him are in this episode and on his page.',
    },
  },
  'netero': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: "Corrected after review: 'alone' was invented and removed, and Netero now tells Menchi to design a new task rather than simply agreeing. Airship, crater landing and her admission are here.",
    },
    7: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_7_(2011)',
      note: 'Corrected after review: he appears from the opposite direction in the corridor, not behind them. The introduction, the ball challenge, and Gon forcing the other arm are here.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: 'Both defences of Killua, Netero calling them guesses, his agreeing Killua would pass again and declaring the seven Hunters are all in this episode.',
    },
  },
  'lippo': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Checked against the episode page: the warden explains majority rule and the fifth member, sends the prisoners to their positions, then states the three-win, no-draw and year-per-hour rules before the first match.',
    },
  },
  'bendot': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Checked: Bendot is the first prisoner (199 years, robbery and murder); Tonpa volunteers, gives up at once and says he only wants to screw people over; Leorio is upset.',
    },
  },
  'sedokan': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Checked: Sedokan is introduced as the second prisoner (149 years, serial bombings), Gon volunteers, and 39 of 40 applicants remain. Corrected after review: Bendot is now linked, since he is filed at the same episode.',
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: "Checked: candle match, Gon takes the longer oil-soaked candle, it burns fast, he sets it down, sprints and blows out Sedokan's.",
    },
  },
  'majtani': {
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: "Checked: no-weapons deathmatch, multiple heart tattoos counting his kills, spider on his back, Kurapika's scarlet eyes, one-punch knockout and the three things he tells him. Corrected after review: removed the invented 'on his chest' and 'one for each victim' (the wiki only says hearts that number his kills).",
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: "Checked: the opponent says the match is not over, Majtani is faking on a note's orders, Leorio drags him to the platform edge, he bolts, admits the loss and says he is safer in prison. Chapter 20 is where the wager and the fall happen.",
    },
  },
  'leroute': {
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'Checked: she objects that the match is unfinished, Lippo gives her 112 years for animal trafficking and gambling, 10-hour bet lost, 20 then 40-hour bet won, Leorio leads 2-1. Corrected after review: Majtani is now linked.',
    },
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'Checked: she bets on her own gender and lets Leorio check, stakes 80 hours on rock-paper-scissors, Leorio throws rock twice and loses; the wiki gives his group a 50-hour penalty.',
    },
  },
  'johness': {
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'Checked: Lippo removes his handcuffs, the other prisoners step back, Leorio recognises him, Killua takes his heart, he dies, score 3-2.',
    },
  },
  'togari': {
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'Checked: ex-examiner waiting for Hisoka over the scars from last year, curved knives, Hisoka catches two and decapitates him, first through the Third Phase. Chapter 19 contains the whole fight.',
    },
  },
  'khara': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_14_(2011)',
      note: "Checked: steamboat to Zevil Island, 24 applicants, two-hour trip, invitation to next year's exam, silence, landing order two minutes apart starting with Hisoka, one week, six points.",
    },
  },
  'amori': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: 'Checked: Amori and Umori come to see if the youngest has taken the badge, scold him, form up, Killua appears behind Amori and holds him hostage (chapter 29).',
    },
  },
  'umori': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "Checked: Umori hands over the badge when Amori is held hostage and Killua throws the other badges far away. Corrected after review: dropped the unsupported 'che ha in mano / he is holding'.",
    },
  },
  'imori': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "Checked: Imori has stalked Killua planning to strike while he sleeps, is forced forward by his brothers, kicks him, and Killua pulls Imori's own badge from his pocket (not his target).",
    },
  },
  'ponzu': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "Checked: Leorio seeks #246 Ponzu, Gon tracks her chemicals to a cave, Leorio is bitten, Ponzu explains Bourbon's snake trap and says he is dead (chapter 30).",
    },
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_18_(2011)',
      note: "Checked: she explains the bee fight, waits for the tracker rescue, trades sleeping gas for Bourbon's badge, Gon holds his breath, returns it and keeps hers. Corrected after review: chapter 32 to 31, since the cave scene is complete in chapter 31 and chapter 32 is the airship.",
    },
  },
  'bourbon': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: 'Checked: the snake trap in the cave, Leorio bitten, Gon and Kurapika run in, Ponzu says Bourbon is already dead yet the trap holds (chapter 30).',
    },
  },
  'gittarackur': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'Checked: needles kill Goz as he charges Hisoka, features change when he pulls the pins, hands Hisoka a badge, sleeps in a hole, reaches the nine finalists. Events are from episode 15 and are known by the end of 19.',
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Checked: Satotz recounts the match; Gittarackur is Illumi, Killua's older brother; says Killua should be an assassin; threatens Gon; blocked at the door by Hanzo, Kurapika and Leorio; Killua yields and he says he lied.",
    },
  },
  'pokkle': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Checked: episode 14 shows Pokkle's arrow with a tranquilizer, the badge taken and the water remark; episode 19 shows him among the nine finalists.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Checked: Satotz's account has Hanzo beat him with the same tactic and Killua forfeit the fifth match. Corrected after review: removed 'becomes a Hunter', since the dossier files that at episode 21.",
    },
  },
  'bodoro': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Checked: Bodoro refuses to fight children in Netero's interview (episode 18), and the bracket rules are explained in episode 19.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: 'Checked: Hisoka whispers and Bodoro yields, the Leorio match is postponed for his injuries, Killua kills him from behind. Corrected after review: it is Killua, not Bodoro, who is disqualified.',
    },
  },
  'coco-loo': {
    22: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_22_(2011)',
      note: 'Bus ride, her warning at the gate, two intruders killed, tourists fleeing while the three friends stay and meet Zebro.',
    },
  },
  'zebro': {
    22: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_22_(2011)',
      note: 'Zebro refuses the key, is revealed as the cleaner, opens the first door, phones a butler, and escorts them in calling the dog.',
    },
    23: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_23_(2011)',
      note: 'Zebro leads them to the quarters, sets the 50 kg vests, apologises for his colleague, and the three open the gate; he admits never having gone up the mountain.',
    },
  },
  'mike': {
    22: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_22_(2011)',
      note: 'Zebro calls the dog after the gate opens; the earlier warning explains its orders; the trio freeze, Gon insists on going on.',
    },
  },
  'seaquant': {
    23: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_23_(2011)',
      note: 'Introduced by Zebro, scoffs and warns, later gives tips and doubts they will win.',
    },
  },
  'canary': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Ep 23 wiki page covers the line, the blows, the punched block and her tears; the apple and friendship flashback is on ep 24. Corrected after review: dropped the claim that she refused friendship because she served him.',
    },
  },
  'milluki': {
    23: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_23_(2011)',
      note: 'Whips the chained Killua, reports him unrepentant to the mother, is stopped by her.',
    },
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: "Whipping, apology for the stabbing, mother's phone call, Zeno freeing Killua, Milluki's talent remarks and the mosquito bomb. Corrected after review: made clear he accuses Zeno of spoiling Killua.",
    },
  },
  'zeno': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Zeno enters the cell, frees Killua, exchange with Milluki about talent.',
    },
  },
  'kalluto': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Ep 23 shows him entering the cell room and watching from the bushes; ep 24 has his mother introduce him and him asking Gon who he is before leaving. Filed at the later episode.',
    },
  },
  'gotoh': {
    25: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_25_(2011)',
      note: "The coin guessing game, the rules and threat, Gon's final round and the butlers' apology.",
    },
  },
  'masta': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Ep 19 page lists Masta only as debuting and does not narrate his lines; the referee role, Hanzo's remark about the Fourth Phase and the rules come from the Masta page (ch. 33), which ep 19 adapts. Not confirmable from the episode page itself.",
    },
  },
  'illumi': {
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz recounts the match, Illumi's reveal, threat, blockade at the door, Killua's forfeit.",
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Gon breaks his arm, demands Killua's whereabouts, Illumi gives in, Hisoka's warning.",
    },
  },
  'kite': {
    76: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_76_(2011)',
      note: "Ep 76 flashback and the Kite page (ch. 1): Whale Island, foxbear mother killed, scolding, Gon stopping the cub's killing, Kite asking if Ging is his father. Corrected after review: removed the claim that he tells Gon his father is a living Hunter, which the wiki dates later.",
    },
  },
  'kon': {
    76: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_76_(2011)',
      note: 'Debut in the ep 76 flashback; Kon page (ch. 1): mother killed, Kite wants to put the cub down, Gon vows to raise it. Corrected after review: removed the invented arm scratch and the pick-up.',
    },
  },
}
