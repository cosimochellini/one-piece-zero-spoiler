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
      note: "Gon catches the swamp fish, Mito's night-before talk, the storm warning, and the dive for Katzo with Leorio and Kurapika holding his legs all fall in this episode.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: 'Gon waits for Leorio, meets Killua, they share reasons and tie the race to the exit, judged by Satotz.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "Gon hooks Hisoka's badge, is paralyzed by another applicant, Hisoka kills him and returns both badges, punches Gon and sets the condition.",
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'The Gon versus Hanzo match runs from the arm break through the threats to Hanzo conceding and then knocking Gon out; Gon is first to pass.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Gon breaks Illumi's arm, demands to know where Killua is, and on leaving gets the answer that Killua is at home; the three set off.",
    },
  },
  'mito-freecss': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: 'Mito sets the swamp-fish condition, Gon meets it, she tries to dissuade him the night before, and sees him off the next morning.',
    },
    26: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_26_(2011)',
      note: "Recap episode: Mito reads Gon's second letter, he says he is unhappy with how he won and must settle a debt with Hisoka; she hangs the photo of the four. Anime-only recap.",
    },
  },
  'leorio-paradinight': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "Money reason, insult to Kurapika's clan, deck duel, Katzo rescue and reconciliation.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "Gon waits for Leorio, he restarts; Kurapika asks his real reason and he tells of his friend's death and the plan to become a doctor.",
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_5_(2011)',
      note: 'Leorio turns back against Hisoka, is knocked out by an uppercut, and Hisoka carries him to the next site.',
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: "Leorio's bets with Leroute over Majtani: the heartbeat check, the edge-of-the-ring bluff, reading Majtani's eyes, and the 2-1 lead after losing 40 hours.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Leorio urges Killua on, then with Kurapika and Hanzo blocks Illumi; Killua kills Bodoro in Leorio's match and is disqualified, as Satotz recounts.",
    },
  },
  'kurapika': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: 'Kurapika explains to the captain why he wants the license, the duel with Leorio and the Katzo rescue.',
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "Kurapika tells Leorio about the Scarlet Eyes, the Phantom Troupe and his plan, and smiles at Leorio's reason.",
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: "Kurapika's deathmatch with Majtani: the spider tattoo, scarlet eyes, the punch and the three warnings.",
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Kurapika's win by Hisoka's forfeit, blocking Illumi, defending Killua, Pokkle's challenge and the decision to go for Killua; confirmed across episodes 20 and 21.",
    },
  },
  'katzo': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: 'Katzo is bullied, helped by Gon, thrown overboard in the storm, saved and thanks the three the next day.',
    },
  },
  'kiriko': {
    2: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_2_(2011)',
      note: "The staged attack at the cedar tree, Kurapika's tattoo suspicion and the fake Leorio, Gon's remark, and the family passing and flying the three to the exam.",
    },
  },
  'tonpa': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: "Tonpa's introduction, warning about Hisoka, the laxative juice and the applicants who did not take it (Hanzo, Nicholas).",
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: 'Tonpa joins as the fifth, votes against, gives up against Bendot before being hit, and tells Leorio his real aim of sabotaging rookies.',
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_15_(2011)',
      note: 'Tonpa and a partner steal badges in the Fourth Phase; Leorio and Kurapika catch him, tie him to a rock with a sign and Kurapika takes his badge.',
    },
  },
  'hisoka': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'Tonpa warns of Hisoka and an applicant who bumps into him loses his arms.',
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_5_(2011)',
      note: 'Hisoka plays examiner in the wetlands, then Gon and Leorio; he spares them and carries Leorio off.',
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'Hisoka beats Togari with his own knives and is first through Trick Tower in 6h17m. Togari is an anime-only record, so the story is marked anime.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "Gon hooks Hisoka's badge while he fights another applicant; Hisoka kills Gon's attacker, returns both badges and punches Gon.",
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: 'Hisoka appears behind Illumi after the ceremony and warns him not to touch Gon.',
    },
  },
  'hanzo': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: "Tonpa remembers Hanzo among those who refused the juice; the wiki's Hanzo page cites chapter 6 for his scroll and ninja talk with Tonpa.",
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "The Hanzo versus Gon match: arm break, threats, Gon's answer about his father, Hanzo concedes, then knocks Gon out.",
    },
  },
  'nicholas': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'Tonpa remembers Nicholas as one who did not take the bait; the laptop research on Tonpa is from the dossier already checked.',
    },
  },
  'satotz': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'Satotz introduces himself and leads the applicants into the tunnel.',
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "Satotz introduces the wetlands, the false examiner appears with an ape, Hisoka's cards, Satotz catches them and warns him.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz at Gon's bed offers the license, explains the exam is over, says Killua alone failed and recounts the later matches.",
    },
  },
  'killua': {
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "Killua with the skateboard, joins Gon, tells his reason, the race to the exit; episode 3 shows him drinking Tonpa's poisoned juice unharmed.",
    },
    7: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_7_(2011)',
      note: 'On the airship Killua tells Gon about his assassin family and fleeing it, the ball game against Netero, and the two applicants he kills.',
    },
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: "Killua's match with Johness: Leorio's alarm, the rule that the loser dies, the heart ripped out.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz recounts Killua's forfeit against Pokkle, the match with Illumi, the surrender, and the killing of Bodoro leading to disqualification.",
    },
    25: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_25_(2011)',
      note: "Killua freed by Zeno (ep 24) and by his father's deal, then joins Gon, Kurapika and Leorio and leaves with them (ep 25).",
    },
  },
  'menchi': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: "Menchi and Buhara's cooking test, her failing everyone, Netero's arrival and the egg retest at Split Mountain.",
    },
  },
  'buhara': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: 'Buhara asks for roast pork, knocks away the applicant who attacks Menchi and says she would have killed him.',
    },
  },
  'netero': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: 'Netero drops from the airship, speaks to Menchi, agrees to a retest.',
    },
    7: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_7_(2011)',
      note: 'Netero introduces himself on the airship and plays the ball game with Gon and Killua.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: 'Netero hears Kurapika and Leorio on Killua, keeps the disqualification, agrees with Gon and declares the seven Hunters.',
    },
  },
  'lippo': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'The episode page has the warden explain majority rule and the need for a fifth member, tell the prisoners to take position, and lay out the three-win and one-year-per-hour rules before the first match.',
    },
  },
  'bendot': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'The page names Bendot as the first prisoner, 199 years for robbery and murder; Tonpa volunteers, gives up at once and says he only wants to ruin others; Leorio is angry.',
    },
  },
  'sedokan': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'The page introduces Sedokan as the next prisoner (149 years, serial bombings), Gon volunteers, and 39 of 40 applicants remain.',
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: "The page shows the candle game: Gon takes the longer, oil-soaked candle, it burns fast, he sets it down, dashes and blows out Sedokan's.",
    },
  },
  'majtani': {
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: "The page shows the no-weapons deathmatch, heart tattoos, the spider on his back, Kurapika's scarlet eyes, the one-punch knockout and the three things Kurapika tells him.",
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'The page shows Leroute saying the match is unfinished, Majtani faking unconsciousness on a note, Leorio dragging him to the edge, and his admission that he takes the loss.',
    },
  },
  'leroute': {
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'The page shows her objection, Lippo naming her sentence (112 years, animal trafficking and gambling), the hour wagers and the 2-1 score after the 40-hour bet.',
    },
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'The page shows the gender bet, the rock-paper-scissors game for 80 hours with Leorio panicking and throwing rock twice, and the resulting 50-hour penalty.',
    },
  },
  'johness': {
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'The page shows the handcuffs removed, Leorio recognizing him, Killua tearing out his heart, Johness dying within seconds, and the 3-2 score.',
    },
  },
  'togari': {
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: "The page shows the former examiner waiting for Hisoka, his grudge over last year's scars, the four curved knives, Hisoka catching two and killing him with them.",
    },
  },
  'khara': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_14_(2011)',
      note: "The page shows Khara on the steamboat (two-hour trip, invitation to next year's exam, unanswered), then the island landing in Trick Tower exit order every two minutes, one week and six points.",
    },
  },
  'amori': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: 'The page shows Amori and Umori arriving, forcing Imori to attack, forming up, and Killua taking Amori hostage.',
    },
  },
  'umori': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "The page shows Killua demanding Umori's tag after taking Amori hostage, and throwing the other tags far away.",
    },
  },
  'imori': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "The page shows Imori stalking Killua, being frightened, kicking him when his brothers arrive, and Killua taking Imori's tag from his pocket.",
    },
  },
  'ponzu': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "The page shows Leorio's target #246, Gon tracking her scent to the cave, Leorio bitten, and Ponzu explaining the snake trap and that Bourbon is dead.",
    },
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_18_(2011)',
      note: "The page shows Ponzu's account of killing Bourbon, the gas-for-badge trade, Gon carrying everyone out, and him keeping her badge as a fee.",
    },
  },
  'bourbon': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: 'The page shows the snake trap in the cave, Leorio bitten, and Ponzu saying she had already killed Bourbon.',
    },
  },
  'gittarackur': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'Episode 15 shows him striking down the charging applicant, changing his face and handing Hisoka a badge; episode 19 shows him among the nine finalists.',
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "The page shows his match with Killua: the reveal as Illumi, the speech about the assassin's life, the threat to Gon, the block at the door, Killua's surrender and the admission of the lie.",
    },
  },
  'pokkle': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'Episode 14 shows his tranquilizer-arrow ambush of another applicant; episode 19 shows him among the nine finalists.',
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "The page has Satotz recount Hanzo's third match against Pokkle, Pokkle surrendering, and Killua forfeiting the fifth match.",
    },
  },
  'bodoro': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Episode 19 shows the bracket and the one-win rule with Bodoro among the finalists; his refusal to fight children is in Netero's interviews (episode 18, chapter 32 per his character page).",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: 'The page has Hisoka beating him and whispering, the postponed match with Leorio, and Killua killing him from behind.',
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
      note: "Her standoff with Gon, the apple flashback with Killua, and her plea after Gon's punch.",
    },
  },
  'milluki': {
    23: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_23_(2011)',
      note: 'Whips the chained Killua, reports him unrepentant to the mother, is stopped by her.',
    },
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: "Whips him again, phone call, Zeno frees Killua, Milluki's remarks and mosquito bomb.",
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
      note: 'Enters with the mother, watches from the bushes, introduced, asks Gon who he is and leaves (the bushes scene is shown in ep 23, the introduction in 24).',
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
      note: "Masta referees Gon vs Hanzo; Hanzo's remark about the Fourth Phase and the rules are from the Masta page chapter 33 account; the ep 19 page only lists him as debuting.",
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
      note: 'Episode 76 flashback: Whale Island, foxbear mother killed, Gon stops Kite killing the cub; Kite page chapter 1 account for the details.',
    },
  },
  'kon': {
    76: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_76_(2011)',
      note: 'Debut in the episode 76 flashback; Kon page chapter 1 account: mother killed, Kite intends to put the cub down, Gon insists.',
    },
  },
}
