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
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'Arrival, the one-push first match and the rooms at the 100th floor are in episode 27 and chapters 44 and 46; the barrier is in episode 28 and chapter 47; the opened nodes, Ten, the walk through the barrier and Hisoka’s one-win condition close episode 29 and chapter 48.',
    },
    30: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_30_(2011)',
      note: 'Corrected after review: the ban is not until he heals: it outlasts his healing in Chapter 52 and Episode 31. The next-day booking and Wing’s advice to wait are in episode 29 and chapter 49; the tops hitting anything in their path, Tornado Top, Zetsu without knowing it, the broken arm, and the ban on Nen with the thread on his finger are in episode 30 and chapters 50 and 51. Chapter 51 sets the ban at two months, so the story gives it no length.',
    },
    36: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_36_(2011)',
      note: 'Corrected after review: the rock tied to Hisoka’s aura and the blow to the head are Chapter 63 only, reworded. Water Divination and the July 10 booking are in episode 35 and chapter 60; the unmoving dodges and the punch behind the shattered tile in chapter 61; the returned badge, Gyo and Bungee Gum in chapter 62; the rock, the loss and the promise of a fight to the death in chapter 63, all through episode 36.',
    },
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: 'Corrected after review: in Italian, “alla sua età” became “alla stessa età di Gon”. Episode 37 and chapters 64-65: the talk by the fire, Mito showing the box and telling what she knows, the grandmother on whose parents died, Gon calling his father Ging, the Nen and license boxes, the ring, memory card and cassette, and the tape’s question. Also read: Chapter 64, Chapter 65.',
    },
    38: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_38_(2011)',
      note: 'Episode 38 adapts chapter 66 and chapter 69, pages 1-16: the tape, the stop at his mother, the Nen that records over it, the console, the game’s price in billions, and Killua trading a copy of the card to Milluki for leads, among them copies at a Yorknew auction. Leaving the island is not in chapter 69 and is left out. Also read: Chapter 66, Chapter 69.',
    },
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “use all his strength” became “try for real to win”, as chapter 72 says only that Gon is forced to actually try. The Hunter website (seven copies, 8.9 billion) and the failed reselling are episode 41 and chapter 70; the phone, Leorio, the diamond worth 3 million and Shizuku forcing him to try for real are episode 42 and chapters 71-72. Also read: Episode 41 (2011), Chapter 70, Chapter 71, Chapter 72.',
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
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: 'Episode 37 and chapters 64-65: the bath, the meal with her grandmother, Mito behind the boys with food while Gon calls her his mother, the month at home, the box, Ging leaving at Gon’s age and the accident that killed her parents. Her crying is anime-only; the condition on the box is not on the episode page. Also read: Chapter 64, Chapter 65.',
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
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “use all his strength” became “try for real to win”, as chapter 72 says only that Gon is forced to actually try. Episode 42 and chapters 71-72: meeting Gon and Killua at the phone stall, talk of Nen and the game, his idea, the arm-wrestling contest for a 3-million diamond and the one challenger who makes Gon try for real. The haggling and the entry fee are chapter-only. Also read: Chapter 71, Chapter 72.',
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
    39: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_39_(2011)',
      note: 'Only the beats chapter 67 shares with episode 39: back at the agency after learning Nen, three employers tied to the auction, the collector of human body parts, the butler, the man on the screen, the month and the item, the locked door and the armed figures in black. The teacher and Water Divination are chapter 83 and wait for episode 47; Melody at the agency is anime-only. Also read: Chapter 67.',
    },
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: “reveals the plan” is episode 40 only; chapter 68 has him reveal how he used his Nen, so he only talks, as Squala’s record log says. Episode 40 and chapter 68: the chandelier, the dagger and the count to three, Tocino’s test and the four who can leave, the Dowsing Chain reacting at Squala, Melody, Basho’s haiku and Baise’s kiss. Italian: Catena della Pressione (Italian Wikipedia, Kurapika). Also read: Chapter 68.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Corrected after review: he moves only after the fight, as both media show. Chapter 77 (pages 1-11) and episode 44. Italian: Catena della Prigionia (Italian Wikipedia, Kurapika Kurata). Checked on the episode page and the chapter pages.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Corrected after review: “the Nostrade family’s rooms” became where they are staying. Hisoka is chapters 78-79, the call to Light and the Hunter website chapter 79, Uvogin at the door chapter 80, all by the end of episode 46. Checked on the episode page and the chapter pages.',
    },
    47: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_47_(2011)',
      note: 'Corrected after review: “truthfully” dropped; episode 47 says only that the rule is to answer his questions. The teacher and Water Divination are chapter 83 and episodes 39 and 47; the fight is chapters 81-84 and episode 47. Italian: Materializzazione, Specializzazione, Test dell’Acqua (Italian Wikipedia). Checked on the episode page and the chapter pages.',
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
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Corrected after the PR review: the join, the vote against opening the door, the surrender and his admission to Leorio are all in the episode 8 summary; episode 9 only repeats them at its start.',
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
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'The aura that stops them and the warning that they are not ready are in episode 28 and chapter 47; the walk through his aura with Ten, the welcome, the guess about Gon’s training, the shapes of aura between his fingers and the one-win condition are in episode 29 and chapter 48.',
    },
    32: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_32_(2011)',
      note: 'Corrected after review: he peels the tattoo off while drying himself after the shower; the meeting reminder was cut for length. Kastro’s hits, the severed right arm and the double are in episode 31 and chapters 52 and 53; the card trick, the reattached right arm, the flying arm and Kastro’s death in episode 32 and chapter 54; the woman’s stitches, Bungee Gum, Texture Surprise, the August 30 meeting and the fake spider tattoo in episode 32 and chapter 55.',
    },
    36: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_36_(2011)',
      note: 'Corrected after review: the rock tied to his aura and the blow to the head are Chapter 63 only, reworded. The punch from behind the tile is in episode 35 and chapter 61; the badge, the Enhancer guess and the personality talk in episode 36 and chapter 62; the Bungee Gum quiz, his thrill, the rock and the farewell about a fight to the death in episode 36 and chapter 63.',
    },
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: “the newest member” and the title “The new member” are episode 41 only; chapter 71 says only that members No. 4 and 8 have changed, so the four talk about him and the members who have changed, as in Machi’s story. The fake tattoo and Machi’s call for noon on August 30 are episode 32 and chapter 55; the four members talking about him on the road and the leader’s order are episode 41 and chapter 71. Also read: Episode 32 (2011), Chapter 55, Chapter 71.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'The leave to go is chapter 76 and episode 45; the meeting is chapter 78 and episode 45, the call and the Scarlet Eyes chapter 79 and episode 46. The leader is not named before episode 54. Checked on the episode page and the chapter pages.',
    },
  },
  'hanzo': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'The juice scene: Gon and Leorio sense something wrong, Kurapika pours it out, Tonpa apologizes, leaves and remembers the applicants who did not take his bait, Hanzo and Nicholas. Corrected after the PR review: the ninja and scroll details, which the episode page does not show, were cut.',
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Hanzo's requests to give up, the broken arm, the leg and death threats, Gon's answer about his father, his concession and the knockout punch.",
    },
  },
  'nicholas': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'Same scene as Hanzo: the episode page names Nicholas among those who did not take the bait, after the laxative juice. Corrected after the PR review: the laptop detail, which only his character page gives, was cut.',
    },
  },
  'satotz': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'The episode page has the numbers handed out, Tonpa offering the juice, then Satotz introducing himself as the first examiner and telling them to follow him through the tunnel. Corrected after the PR review: closing registration, the life warning and the quickened pace were cut.',
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
    27: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_27_(2011)',
      note: 'Episode 27 and chapters 44 and 45 have the empty wallet, his father leaving him there at six, the two years, the 180th-floor offer, the two neck strikes, the stance that makes him leap back, the win without a knockout, the brother comparison, the name Ren and the new goal of the top floor.',
    },
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'Wing’s Ren and Killua’s claim that he lied are in episode 28 and chapter 46; the barrier and the clerk’s midnight rule for his second chance in episode 28 and chapter 47; the opened nodes, the comparison with Illumi’s Nen, Ten and the walk through the barrier in episode 29 and chapter 48.',
    },
    34: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_34_(2011)',
      note: 'Corrected after review: Zushi knocked out, Killua behind Sadaso in the locker room and Riehlvelt fainting are chapter-only, reworded. The aura hand on Zushi, the free wins, the shoe at Gon’s door, the warning to Sadaso and the default win are in episode 33 and chapter 57; the warning to Gido and Riehlvelt and the main event (whips caught, the shock he is trained for, Riehlvelt thrown from the chair and caught) are in episode 34 and chapters 58 and 59.',
    },
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: 'Corrected after review: the episode and the chapter place the information-gathering differently, so Gon only goes to Yorknew City to start looking for his father. Episode 37 and chapter 64: the fire in the forest, Gon’s plan for Yorknew, Killua with no goal, the offer to travel together, and Gon’s answer about his mother. The family business and the mother like Mito are chapter-only. Also read: Chapter 64.',
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
      note: 'Checked: Lippo removes his handcuffs, the other prisoners step back, Leorio recognizes him, Killua takes his heart, he dies, score 3-2.',
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
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Amori',
      note: 'Checked: Tonpa points out the brothers as regulars (chapter 5 names them collectively as the Amori Brothers; the gate table has episode 3 name each). Dated 3 / 29: the names are told at chapter 29 in the manga. Warning about Hisoka from the Episode 3 (2011) page.',
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: 'Checked: Amori and Umori come to see if the youngest has taken the badge, scold him, form up, Killua appears behind Amori and holds him hostage (chapter 29).',
    },
  },
  'umori': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Amori',
      note: 'Checked: Tonpa, on his 35th attempt (Chapter 5 page), points out the three brothers (their teamwork is left out, being chapter 5’s alone); the trio has just received badges from Beans (Episode 3 (2011) page). Dated 3 / 29 for the manga naming.',
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "Checked: Umori hands over the badge when Amori is held hostage and Killua throws the other badges far away. Corrected after review: dropped the unsupported 'che ha in mano / he is holding'.",
    },
  },
  'imori': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Amori',
      note: 'Checked: Tonpa introduces the regulars he knows, the three brothers among them, who take the exam together (teamwork left out, being chapter 5’s alone); the Hisoka warning is on the Episode 3 (2011) page. Dated 3 / 29 for the manga naming.',
    },
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
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Bourbon',
      note: 'Checked: Tonpa introduces Bourbon as a snake charmer and veteran who has taken the exam many times (chapter 5; “never gives up” left out, being chapter 5’s alone; the gate table has episode 3 name him as a snake charmer). The Hisoka warning is in both.',
    },
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
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_14_(2011)',
      note: 'Checked: Pokkle stalks an applicant in tall grass with Gon watching, the arrow only cuts him, the tranquilizer drops him, the water remark and the badge taken (episode 14, chapter 24); Gon resolves to stalk Hisoka the same way. Dated 18 / 24: his name is first said in the episode 18 roll call.',
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'Checked: the nine finalists, three days of rest, the hotel as the Final Phase venue, the one-on-one bracket where one win passes, winners leave and only one fails (chapter 33). Corrected after review (#833): the arrow scene moved to the 18 / 24 story.',
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Checked: Satotz's account has Hanzo beat him with the same tactic and Killua forfeit the fifth match. Corrected after review: removed 'becomes a Hunter', since the dossier files that at episode 21.",
    },
  },
  'bodoro': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Bodoro',
      note: 'Checked: anime only (source episode). The Bodoro page has Tonpa introduce him as the kung fu master in Episode 3 (2011); chapter 5 does not name him, so the story is not told to manga readers.',
    },
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
      note: 'Zebro leads them to the quarters, sets the 50 kg vests, apologizes for his colleague, and the three open the gate; he admits never having gone up the mountain.',
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
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'The call and the deal are episode 38 and chapter 69, pages 1-16; the address sent by bird (an eagle in the episode, a hawk in chapter 70) closes episode 40. Also read: Episode 38 (2011), Chapter 69, Chapter 70.',
    },
  },
  'zeno': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Zeno enters the cell, frees Killua, exchange with Milluki about talent.',
    },
  },
  'silva': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Unanchored, chapter 95 pinned. Ep 24 and ch. 42 both have the question about his friends, the difference he saw when Killua ran away, the promise never to betray them, letting him go, and the mother told he will come back. Corrected after the verifier pass: the seat beside him, the Hunter Exam question, the bitten thumb and the father-and-son words are ch. 42 only and were cut.',
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
      note: "Ep 19 page: the nine remaining applicants, one win being enough, the losers moving up the bracket, Netero explaining and the first match being Gon against Hanzo; Masta's refereeing is from his page (ch. 33), which ep 19 adapts. Corrected after the PR review: his lines to Hanzo, which the episode page does not show, were cut.",
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
  'ging-freecss': {
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: "Checked against the episode page and chapters 64-65: the only children on the island, the village searching for Mito and Ging finding her, leaving at Gon's age, the return ten years later carrying Gon, the grandmother and the separation, the Nen and license boxes, the ring, memory card and cassette, and the tape's question. Corrected after review: 'cousin', 'baby', 'only' and the box's hand-over condition are not on the episode page; 'breaks' became neutral 'comes off'. Manga-only lines left out: Mito taking the boy, the steel sticks, the ring warning. Also read: Chapter 64, Chapter 65, Chapter 66.",
    },
  },
  'todo': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_5',
      note: "Checked: Tonpa points out the regulars to the trio, Todo among them as a strong wrestler (chapter 5; Episode 3 (2011) per the gate table). Tonpa's remark on his wits is left out, being manga-only.",
    },
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: "Checked: Menchi fails everyone, Todo berates her (the table he smashes is left out, since only the episode page gives it), she dismisses him, he charges, Buhara knocks him away and says Menchi would have killed him, Netero sets the egg retest, Todo tastes Gon's egg and vows to return next year. Also read: Chapter 12.",
    },
  },
  'geretta': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_5',
      note: 'Checked: Tonpa, on his 35th attempt, names Geretta among the regulars and warns the trio about Hisoka. The blowdart and club description is left out of the story and the dossier, being chapter 5’s alone.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "Checked: Geretta paralyzes Gon with a dart after Gon hooks Hisoka's badge, says how often he could have struck, praises his training, takes both badges; Hisoka comes back having killed him, his target. The severed head (manga) and the body (anime) are not described. Also read: Chapter 28.",
    },
  },
  'cherry': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_5',
      note: 'Checked: manga only. Tonpa lists Cherry (#76) as a martial artist and the best at unarmed combat among the regulars.',
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_10',
      note: 'Checked: Hisoka attacks the group, Cherry, Kurapika and Leorio flee in three directions; chapter 10 opens on his body hanging upside down from a tree with cards in neck and forehead as birds approach. Manga only. Also read: the Cherry page (chapter 9).',
    },
  },
  'goz': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: "Checked: Lippo's lottery in finishing order, cards with target badge numbers, badges hidden and silence on the boat, one week and six points. Goz's spear is on the Goz page (chapter 23). Manga only.",
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_26',
      note: 'Checked: the wounded Goz challenges Hisoka, cuts trees, Hisoka dodges and says the dead do not interest him, needles kill Goz, the needle man says he let him escape and takes badge #371 while Gon hides. Manga only.',
    },
  },
  'agon': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: lottery outside the tower, landing in finishing order two minutes apart starting with Hisoka, Agon seventh ashore, one week and six points, the target worth three. Manga only.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_28',
      note: "Checked: bloodlust Hisoka picks Agon, card in hand; Agon draws his sword; Gon hooks the badge as they pass; the wound opens on Agon's shoulder (death per the Agon page). Manga only. Also read: Chapter 27.",
    },
  },
  'siper': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: "Checked: Khara's congratulations and the invitation to next year, barely any reaction, badges hidden and eyes avoided. The square sunglasses follow her design on the Siper page; the rifle is held back to chapter 26. Manga only.",
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_26',
      note: 'Checked: after killing Goz, the needle man offers Hisoka badge #80 from one of the snipers he killed over the use of a gun; Hisoka keeps it and still needs two points. The death is reported, not shown. Manga only.',
    },
  },
  'ryu': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: the lottery and the scoring (target 3, own badge 3, others 1, six to pass). The broadsword is on the Ryu page (chapter 23). Manga only.',
    },
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_32',
      note: "Checked: the end announcement, one hour to return, no trading at the landing, nine finalists by the water. Ryu's lost fight with Bodoro (not named before chapter 33) is on the Ryu page, cited to chapter 32. Manga only.",
    },
  },
  'kyu': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_24',
      note: "Checked: Kyu senses a follower, Pokkle's arrow grazes his arm, he drops his sword and collapses, weak for days, water nearby, badge #105 taken, Gon watching from a tree. Dated 14 / 24 because chapter 23 shares episode 14. Manga only. Also read: the Kyu and Pokkle pages.",
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_25',
      note: 'Checked: Gon follows two butterflies on a line toward the wounded Hisoka, finds Kyu still drugged, helps him sit up against a tree and wishes him luck next year. Manga only.',
    },
  },
  'shishito': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: on the boat he wonders who has his number; cards with target numbers, badges hidden, silence. Manga only. Also read: the Shishito page.',
    },
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_32',
      note: "Checked: Amori and Umori took his badge (chapter 29), Hanzo takes the brothers' two remaining badges (chapter 32), nine finalists at the landing. Manga only. Also read: the Shishito and Amori pages.",
    },
  },
  'kenmi': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: "Checked: Khara's congratulations, two-hour trip, the invitation to next year, no reaction. The shaved head is on the Kenmi page. Manga only.",
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_29',
      note: 'Checked: while Imori stalks Killua, Amori and Umori hunt Shishito and Kenmi and take their badges (chapter 29 per the Kenmi page), then they find Imori still hiding. Manga only. Also read: the Kenmi and Amori pages.',
    },
  },
  'sommy': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: lottery in finishing order starting with Hisoka, cards may be thrown away once recorded, badges hidden on the boat. Manga only.',
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_25',
      note: "Checked: Tonpa shows card #191 and trades the information for medicine, Sommy strikes with a branch, his monkey grabs Leorio's badge, the cards were swapped, Sommy escapes up a tree; Kurapika and Leorio tie him up and recover the badge plus Sommy's. Manga only. Also read: Chapter 26.",
    },
  },
  'zushi': {
    27: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_27_(2011)',
      note: 'The episode page and Chapter 45 both have the elevator talk about Shingen-ryu, the 57th-floor match with the crowd favoring Zushi, the two neck strikes, the stance that sends Killua back, Wing’s shout, Killua winning without a knockout and the flashback apology over Ren. The bow to the floor is the manga’s prostration and the anime’s hands and knees.',
    },
    28: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_28_(2011)',
      note: 'Zushi lists the four principles at the end of Episode 27; the unsteady Ten, his question about the lie, the real Nen only for pupils and the page that cuts the can are in Episode 28 and Chapter 46. Zushi’s complaint about his book and juice is manga-only and left out.',
    },
    33: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_33_(2011)',
      note: 'Episode 33 and Chapters 56–57 have the start of the joint training two months after the Gido match, Zushi’s tiring Gyo, Sadaso’s aura arm, Killua’s promise of free wins and his overnight Gyo the next day. Who left the shoe differs between the pages, so the shoe is left out.',
    },
  },
  'wing': {
    27: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_27_(2011)',
      note: 'Corrected after review: the reason for the praise differs between the pages, so it is left out. Episode 27 and Chapter 45 both have Wing praising Zushi, introducing himself surprised to see other boys, the advice to be careful and the shout from the stands; the four principles, Killua linking Ren to his brother and the invitation close Episode 27 and open Chapter 46.',
    },
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'The false lesson, Hisoka’s barrier, the offer and the damaged wall are Episode 28 and Chapters 46–47; the reason about the 200th-floor initiation, the forced opening, the instant Ten, the hostile-aura test and the walk through the barrier are Episode 29 and Chapter 48.',
    },
    35: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_35_(2011)',
      note: 'Episode 35 and Chapter 60 both have the six types with Hisoka, Gido and Kastro as examples, Water Divination with the three results, the secret Hunter Exam, Netero heading Shingen-ryu and the advice to Killua. Wing’s own type and Gon’s cracked glass are only on the chapter page and are left out.',
    },
  },
  'gido': {
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'The three fighters asking the newcomers for a match are Chapter 48 and Episode 29; the next-day booking, the four-and-one record, the tops on the cane, Battle Waltz, the clean hit in the back and the tops spinning for hours beyond his own control are Chapter 49 and the end of Episode 29.',
    },
    30: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_30_(2011)',
      note: 'Corrected after review: Tornado Top throwing Gon out of the ring is Chapter 50 only, reworded; Gon falls into Zetsu without knowing it. Battle Waltz opens the match in Episode 29 and Chapter 49; the hits, the top outside the ring, Tornado Top, Gon’s Zetsu, Killua’s warning and the broken arm are Episode 30 and Chapters 50–51. The hour of dodging and the fifty tops are only in Chapter 51 and are left out.',
    },
  },
  'kastro': {
    31: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_31_(2011)',
      note: "Episode 31 and chapter 52 both have the loss two years earlier, the nine wins one short of the Floor Masters, Killua's Zetsu visit with Kastro appearing behind him and keeping his trick secret, the thanks before the match and the first hit Hisoka seems to dodge. The three-of-four points and the agreed date are chapter-only, so the story says only that he scored the most.",
    },
    32: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_32_(2011)',
      note: 'The knockdown, the Tiger Bite Fist on the right arm and the Double reveal are in episode 31 and chapter 53; the card trick, the left arm, the reattached right arm, the spotless double, the flying arm and the cards that kill him are in episode 32 and chapter 54. Machi and the explanation of the trick (chapter 55) are left out.',
    },
  },
  'sadaso': {
    33: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_33_(2011)',
      note: "Episode 33 covers chapters 56–57: the trio pressing Gon and Killua two months after the Gido match, the aura-hand ambush on Zushi, Killua's offer of default wins and warning, and Gido's threatening call to Gon. The trio's habit of picking on newcomers is in episode 29 and chapters 48–49 and in chapter 56.",
    },
    34: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_34_(2011)',
      note: "The ticket seller and Killua's threat are in episode 33 and chapter 57; the call warning his companions closes episode 33 and opens chapter 58; his withdrawal and Gon's default win are in episode 34 and chapter 58. The knife and the mirror are chapter-only and left out.",
    },
  },
  'riehlvelt': {
    34: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_34_(2011)',
      note: "Corrected after review: linked Killua. Episode 34 covers chapters 58–59: Sadaso's call, Killua's warning in the room, the match with Killua (Aura Burst, whips caught, electricity endured, the catch) and the match with Gon (flagstone, Aura Burst, whips around the neck, fainting from fear). Both matches end in chapter 59.",
    },
  },
  'melody': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Episode 40 and chapter 68: the chain at Squala, his heart speeding up, the rhythm of a liar, his distrust of Kurapika and Melody, Basho’s haiku and the confession. Also read: Chapter 68.',
    },
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Episode 42 adapts chapter 73, pages 1-9: the front entrance, the rage in Kurapika’s heart, his people’s eyes, the devil’s sonata, the arm, the friend who played it on the flute and died, her hearing, and her wish to destroy it. Also read: Chapter 73.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 77 (pages 1-11) and episode 44. Her finding Machi’s needle is chapter-only. Checked on the episode page and the chapter pages.',
    },
  },
  'basho': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: the Italian second haiku reworded. Episode 40 and chapter 68: the punch that tells him the figures are aura, the haiku that sets a chair alight at his touch, the second haiku against liars and Squala’s confession. Also read: Chapter 68.',
    },
  },
  'baise': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: “reveals the plan” is episode 40 only; chapter 68 has him reveal how he used his Nen, so he only talks, as Squala’s record log says. Episode 40 and chapter 68: Squala refusing to give his orders even under torture, and the kiss that makes him her servant. Also read: Chapter 68.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'The attack on the auction is chapter 73 (pages 10-19) and episode 43. Feitan and Franklin are named only from chapters 74 and 76, so the two on the stage stay unnamed. Checked on the episode page and the chapter pages.',
    },
  },
  'squala': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: “reveals the plan” is episode 40 only; chapter 68 has him reveal how he used his Nen, so he only talks, as Squala’s record log says. Episode 40 and chapter 68: the chain, Melody hearing his heart, his denial and distrust, Basho’s haiku, his confession and introduction, the refusal under torture and Baise’s kiss. Also read: Chapter 68.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Chapter 79 and episode 46. The hotel is not named before episode 57. Checked on the episode page and the chapter pages.',
    },
  },
  'shachmono-tocino': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'The locked door and the armed figures are episode 39 and chapter 67; Kurapika exposing him, the dagger and the count, his test and the four who can leave are episode 40 and chapter 68. Also read: Episode 39 (2011), Chapter 67, Chapter 68.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Chapter 73 (pages 10-19) and episode 43. Checked on the episode page and the chapter pages.',
    },
  },
  'dalzollene': {
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: in Italian “la loro protetta” became “il loro capo”, the boss of both media. The screen and the item from a list are episode 39 and chapter 67; the hiring, the escort to a hotel in Yorknew, the question about enemies, the figure in the frame and the girl on the bed are episode 41 and chapter 70. Also read: Episode 39 (2011), Chapter 67, Chapter 70.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Kurapika’s report is chapter 74, the canyon and Worm chapter 75 (pages 1-16), both in episode 43. Checked on the episode page and the chapter pages.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Chapter 78 and episode 45. Checked on the episode page and the chapter pages.',
    },
  },
  'neon-nostrade': {
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: “the auction is too dangerous for her” is episode 41 only; both media show her father having her kept away from it. The escort and the fortunes for her father’s friends are episode 41 and chapter 71; Dalzollene’s call to her father and the order to keep her away are chapter 72, pages 4-6, in episode 41. Also read: Chapter 71, Chapter 72.',
    },
  },
  'machi': {
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: “a new member” became the members who have changed, as chapter 71 says. The Nen threads on Hisoka’s arms and the call for noon on August 30 are episode 32 and chapter 55; the four on the road, the first gathering in over three years, the talk of Hisoka and the order are episode 41 and chapter 71. Also read: Episode 32 (2011), Chapter 55, Chapter 71.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: the Shadow Beasts’ deaths no longer name Owl as the one who lives: chapter 78 reports them all dead and shows Owl held only in chapter 84, so the line said too early, for chapter readers, that he survives. The needle and the cloth are chapter 77 (pages 12-19), the Shadow Beasts’ deaths and the rescue chapter 78, all in episode 45. Owl’s torture is left out. Checked on the episode page and the chapter pages.',
    },
  },
  'ivlenkov': {
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “the auction is too dangerous for her” is episode 41 only; both media show her father having her kept away from it. The escort is episode 41 and chapter 71; the posts (three inside, two at the back, Kurapika and Melody at the front) are episode 42 and chapter 72. Who goes where is named only in chapter 72; the episode 42 appearance list orders the bodyguards the same way, as the #900 records do. Also read: Episode 41 (2011), Chapter 71, Chapter 72.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Chapter 73 (pages 10-19) and episode 43. Checked on the episode page and the chapter pages.',
    },
  },
  'linssen': {
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “the auction is too dangerous for her” is episode 41 only; both media show her father having her kept away from it. The escort is episode 41 and chapter 71; the posts are episode 42 and chapter 72. Who goes where is named only in chapter 72; the episode 42 appearance list orders the bodyguards the same way, as the #900 records do. The other bodyguard at the back (Basho) is named only in the chapter and is left out. Also read: Episode 41 (2011), Chapter 71, Chapter 72.',
    },
  },
  'shizuku': {
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: the members gather outside Yorknew City, the match is before the auction (not “that night”), and Gon has to try for real rather than use all his strength. The gathering and the order are episode 41 and chapter 71; the match with Gon and her return to the other members are episode 42 and chapter 72. The left arm is chapter-only. Also read: Episode 41 (2011), Chapter 71, Chapter 72.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Chapter 73 (pages 10-19) and episode 43. Checked on the episode page and the chapter pages.',
    },
  },
  'feitan': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'The stage is chapter 73 and episode 43, the balloon chapter 74, the ledge above the canyon chapter 75 (pages 1-16), all in episode 43. Franklin is named only from chapter 76. His torture of the auctioneer is chapter-only, and of Owl left out. Checked on the episode page and the chapter pages.',
    },
  },
  'uvogin': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Corrected after review: the leader convinces him because a traitor would gain nothing; the Shadow Beast who emptied the vault is what Uvogin reports, not the leader’s reason (chapter 74, episode 43). The call is chapter 74, the fight with the Mafia chapter 75 (pages 1-16), both in episode 43. The leader is not named before episode 54. Checked on the episode page and the chapter pages.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Corrected after review: in Italian, the skull fragment is named as Leech’s. The fight is chapters 75-76, the chain and the car chapter 77 (pages 1-11), all in episode 44. Porcupine’s fate stays open. Italian: Colpo del Big Bang (Italian Wikipedia, Brigata Fantasma). Checked on the episode page and the chapter pages.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'The questioning and the rescue are chapter 78; his words for the leader open chapter 79 (page 1), all in episode 45. Checked on the episode page and the chapter pages.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'The beer and the website are chapter 79, the door chapter 80, both in episode 46. The chain user’s job, learned from a man he tortures, is chapter-only. Checked on the episode page and the chapter pages.',
    },
    47: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_47_(2011)',
      note: 'Corrected after review: “truthfully” dropped; episode 47 says only that the rule is to answer his questions. Chapters 81-84 and episode 47. Italian: Catena del Giudizio (Italian Wikipedia, Kurapika Kurata). Checked on the episode page and the chapter pages.',
    },
  },
  'worm': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Chapter 75 (pages 1-16) and episode 43. Leech and Porcupine are named only from chapter 76. Checked on the episode page and the chapter pages.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: his call asks for everyone against the Troupe, without naming the Shadow Beasts as the ones called; the Italian arm is “glielo”; and the Shadow Beasts’ deaths no longer name Owl as the one who lives: chapter 78 reports them all dead and shows Owl held only in chapter 84, so the line said too early, for chapter readers, that he survives. Worm now dies with the others. The punches and the blast are chapters 75-76 and episode 44; his call to the others closes chapter 76 (page 19) and opens episode 45; the deaths are chapter 78 and episode 45. Checked on the episode page and the chapter pages. His call to the other Shadow Beasts is chapter 76, page 19, which episode 45 adapts; the episode page summary does not describe it.',
    },
  },
  'rabid-dog': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Corrected after review: the four first speak to the Nostrade bodyguards, then go to face Uvogin. The Shadow Beasts are explained in chapter 74 and episode 43; the four arrive in chapter 75 (pages 1-16), the end of episode 43. Checked on the episode page and the chapter pages. His question to Uvogin is chapter 75, pages 17-19, in episode 44, and is left out.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 76 and episode 44. Checked on the episode page and the chapter pages.',
    },
  },
  'porcupine': {
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 76 and episode 44. Episode 44 leaves his fate open and chapter 76 does not, so the story says only that Uvogin is free of him. Checked on the episode page and the chapter pages.',
    },
  },
  'leech': {
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 76 and episode 44. Checked on the episode page and the chapter pages.',
    },
  },
  'franklin': {
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'The auction is chapter 73 and episode 43; the cards, the fight and Shizuku’s answer are chapters 75-76 and episode 44. Checked on the episode page and the chapter pages.',
    },
  },
  'nobunaga': {
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: the Shadow Beasts’ deaths no longer name Owl as the one who lives: chapter 78 reports them all dead and shows Owl held only in chapter 84, so the line said too early, for chapter readers, that he survives. The cloth is chapter 77 (pages 12-19), the Shadow Beasts’ deaths chapter 78, both in episode 45. Checked on the episode page and the chapter pages.',
    },
  },
  'owl': {
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: the story stops when Nobunaga is trapped and the other Shadow Beasts arrive (chapter 77, pages 12-19, in episode 45), so it is now pinned at chapter 77. The Shadow Beasts’ deaths no longer name Owl as the one who lives: chapter 78 reports them all dead and shows Owl held only in chapter 84, so the line said too early, for chapter readers, that he survives. His status for chapter readers is now unknown from chapter 78 to 83. His torture is left out.',
    },
  },
  'phinks': {
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Chapter 78 and episode 45. Checked on the episode page and the chapter pages.',
    },
  },
  'light-nostrade': {
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Chapter 79 and episode 46. Checked on the episode page and the chapter pages.',
    },
  },
  'shalnark': {
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Chapter 79 and episode 46. Franklin bringing the beer is anime-only. Checked on the episode page and the chapter pages.',
    },
  },
}
