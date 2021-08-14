class GUI {
	// QUATERBACKS
	static mahomes = new Player("Patrick Mahomes", "QB1", false,
		"He is very fucking good... if you can stack him, you could win the league.", "Chiefs", 3.03, 1);
	static jallen = new Player("Josh Allen", "QB1", false,
		"He is very fucking good with rushing ability. Nice stack with Diggs.", "Bills", 4.02, 1);
	static rodgers = new Player("Aaron Rodgers", "QB1", false,
		"He is that dude and on a revenge tour. A stack with him and Adams would be deadly",
		"Packers", 7.07, 1);
	static lamar = new Player("Lamar Jackson", "QB1", false,
		"Safe rushing floor and now has some receivers... hope Greg Roman throws it more", "Ravens", 5.03, 1);
	static dak = new Player("Dak Prescott", "QB1", false,
		"Injury concerns but has a lot of weapons!", "Cowboys", 5.08, 1);
	static herbert = new Player("Justin Herbert", "QB1", false,
		"I really believe in his talent. Great offense and system. All in.", "Chargers", 6.04, 1);
	static kyler = new Player("Kyler Murray", "QB1", false,
		"Improved receiving core and did amazing till his shoulder injury. Possible league winner this year.", "Cardinals", 5.01, 1);
	static brady = new Player("Tom Brady", "QB1", false,
		"He is old but god damn he was good down the stretch. Another year in that offense with that receiving core. Sheesh",
		"Buccaneers", 8.01, 2);
	static hurts = new Player("Jalen Hurts", "QB1", false,
		"Rushing floor. Not much of a receiving core and a bad offense. Watson rumors show no trust in him.", "Eagles", 8.09, 2);
	static tannehill = new Player("Ryan Tannehill", "QB1", false,
		"Now with Julio, Tannehill is one of my favorite QBs this year. Great value!", "Titans", 9.05, 2);
	static burrow = new Player("Joe Burrow", "QB1", false,
		"Coming off a bad injury. Has a solid receiving core, but it is a bad offense. No thank you.", "Bengals",
		10.04, 3);
	static stafford = new Player("Matt Stafford", "QB1", false,
		"Moves to LA with an elite receiving core and McVay. Injury concerns.", "Rams", 9.04, 2);
	static mattyice = new Player("Matt Ryan", "QB1", false,
		"No Julio kills his relevance. Should be an ok streamer.", "Falcons", 12.05, 3);
	static cousins = new Player("Kirk Cousins", "QB1", false,
		"Not much change from last year, expect him to be a great streamer", "Vikings", 13.07, 3);
	static baker = new Player("Baker Mayfield", "QB1", false,
		"Still a run-first team. Baker is a fine streamer.", "Browns", 14.02, 4);
	static dannydimes = new Player("Daniel Jones", "QB1", false,
		"Adds Golladay. Not much trust in him, but he has all the tools to improve.", "Giants", 16.01, 3);
	static tlaw = new Player("Trevor Lawerence", "QB1", true,
		"Rookies are always risky and the Jags sucked last year. He is talented and has an ok wr core",
		"Jaguars", 11.10, 4);
	static bigben = new Player("Ben Roethlisberger", "QB1", false,
		"He is old but he does have a good WR core. Team will lean on run more.", "Steelers", 15.08, 4);
	static wentz = new Player("Carson Wentz", "QB1", false,
		"Now he's hurt so I'm completely off.", "Colts", 15.01, 3);
	static watson = new Player("Deshaun Watson", "QB1", false,
		"He is very good but has no receiving core and a very bad team. Also sexual assaulter so might not play.",
		"Texans", 15.04, 2);
	static carr = new Player("Derek Carr", "QB1", false,
		"Dont trust Carr plus not a good receivng core.", "Raiders", 16.10, 5);
	static fields = new Player("Justin Fields", "QB2", true,
		"If (when) he beats out Dalton, he could be very good with rushing floor and a decent core.", "Bears",
		13.03, 5);
	static dalton = new Player("Andy Dalton", "QB1", false,
		"QB1 for now. But he won't have any relevance", "Bears", 30.04, 5);
	static darnold = new Player("Sam Darnold", "QB1", false,
		"Best situation he's had. Solid receiving core and good coaching. He could take a step forward.", "Panthers", 17.07, 4);
	static goff = new Player("Jared Goff", "QB1", false,
		"Average QB with no receiving core and terrbile offense. Will throw alot but stay away", "Lions", 19.07, 5);
	static tua = new Player("Tua Tagovailoa", "QB1", false,
		"I don't trust him but he has a great receiving core. No Fitzpatrick to clean up his mess!", "Dolphins",
		14.07, 5);
	static newton = new Player("Cam Newton", "QB1", false, "NEVER NEWTON", "Patriots", 17.10, 5);
	static zach = new Player("Zach Wilson", "QB1", true, "Not a good team. Rookie.", "Jets", 17.01, 5);
	static russell = new Player("Russell Wilson", "QB1", false,
		"LET RUSS COOK. If not, it's not worth the price.", "Seahawks", 6.05, 1);
	static lance = new Player("Trey Lance", "QB2", true,
		"I trust Shanahan but Jimmy is there too, but once its Lance's job he'll be a god", "49ers", 14.09, 4);
	static winston = new Player("Jameis Winston", "QB1", false,
		"I project him as the QB1 but Taysom is still there. no recievers, expect the team to take a step back.",
		"Saints", 17.08, 4);
	static teddy = new Player("Teddy Bridgewater", "QB2", false,
		"Has a decent receiving core if he can win the job. No upside.", "Broncos", 28.08, 4);
	static mac = new Player("Mac Jones", "QB2", true, "Rookie, may take awhile for him to get a chance.",
		"Patriots", 30.05, 5);
	static taysom = new Player("Taysom Hill", "QB2", false,
		"Could easily have the job. Has rushing floor but I dont trust his passing ability", "Saints", 18.03, 5);
	static lock = new Player("Drew Lock", "QB1", false, "He sucks. Doubt he has the job.", "Broncos",
		30.03, 5);
	static fitz = new Player("Ryan Fitzpatrick", "QB1", false,
		"Never has been a great starter. Should be just a streamer.", "Football Team", 16.06, 4);
	static jimmyg = new Player("Jimmy Garoppolo", "QB1", false,
		"Always injured. Very boom or bust when healthy.", "49ers", 28.10, 5);
	static love = new Player("Jordan Love", "QB2", false,
		"Not this year.", "Packers", 29.07, 5);
	static tyrod = new Player("Tyrod Taylor", "QB2", false,
		"He sucks. Will be a starter if Watson is gone.", "Texans", 30.06, 5);
	static minshew = new Player("Gardner Minshew", "QB2", false, "Only a meme at this point.", "Jaguars",
		30.07, 5);
	static heinicke = new Player("Taylor Heinicke", "QB2", false,
		"May challenge Fitz for the job, has little value either way.", "Football Team", 30.08, 5);

	static qbs = [mahomes, jallen, kyler, lamar, dak, herbert, russell, rodgers, burrow, tlaw, hurts,
		stafford, brady, tannehill, mattyice, baker, watson, fields, wentz, tua, cousins, dannydimes, lance, zach,
		darnold, carr, bigben, goff, winston, newton, taysom, fitz, mac, teddy, jimmyg, lock, love, dalton, tyrod,
		minshew, heinicke];

	// RUNNING BACKS
	static cmc = new Player("Christian McCaffery", "RB", false, "He's a god. Should be healthy. 1.01",
		"Panthers", 1.01, 1);
	static kamara = new Player("Alvin Kamara", "RB", false, "Talent AF. No MT so he should get plenty of targets. QB and offense concerns.", "Saints", 1.04,
		1);
	static yeti = new Player("Derrick Henry", "RB", false, "Beast. Julio there should open things up more. Too much workload? New OC?", "Titans",
		1.03, 1);
	static dalvin = new Player("Dalvin Cook", "RB", false, "God when he plays. Just cant stay healthy for the whole year",
		"Vikings", 1.02, 1);
	static zeke = new Player("Ezekiel Elliot", "RB", false,
		"Dak is back so he will improve. Pollard will impead on his workload.", "Cowboys", 1.08, 1);
	static saquon = new Player("Saquon Barkley", "RB", false,
		"Still concern coming off big injury. Offense should improve.", "Giants", 1.05, 1);
	static chubb = new Player("Nick Chubb", "RB", false,
		"So good. Not much receiving work. Hunt mooching. Run heavy team.", "Browns", 1.10, 1);
	static jt = new Player("Jonathan Taylor", "RB", false,
		"Good runner. Mack back? Not involved in receiving. Offense should be sketchy", "Colts", 1.07, 1);
	static ajones = new Player("Aaron Jones", "RB", false,
		"Solid runner, no jamaal. Love him.", "Packers", 2.04, 1);
	//private static Player akers = new Player("Cam Akers", "RB", false,
	//	"Hasn't proven much. Best case he's the next gurley, worst + avg case top of a committee... OUT FOR SEASON", "Rams", 2.05, 2);
	static gibson = new Player("Antonio Gibson", "RB", false,
		"He's good but Smooches will take receiving work. Will his toe be 100%?", "Football Team", 2.06, 2);
	static mixon = new Player("Joe Mixon", "RB", false,
		"Health and usage always a question. No Gio and offense looks better. Still no o-line", "Bengals", 2.07, 2);
	static ekeler = new Player("Austin Ekeler", "RB", false,
		"Improved o-line, now healthy, receving upside. Can he be a workhorse?", "Chargers", 2.01, 2);
	static dobbins = new Player("J.K. Dobbins", "RB", false,
		"TD dependent, sharing with Gus and Lamar, runheavy team, very good", "Ravens", 4.01, 3);
	static miles = new Player("Miles Sanders", "RB", false, "I don't trust him", "Eagles", 4.05, 3);
	static najee = new Player("Najee Harris", "RB", true,
		"Talented, his backfield, o-line concerns", "Steelers", 2.08, 3);
	static swift = new Player("DeAndre Swift", "RB", false,
		"Talented. Jamaal there. Offense not very good.", "Lions", 3.08, 3);
	static jacobs = new Player("Josh Jacobs", "RB", false,
		"Drake there, major o-line changes, not much receiving work. Good deal if you can get him cheap.",
		"Raiders", 5.04, 3);
	static ceh = new Player("Clyde Edwards-Helaire", "RB", false,
		"Im done trusting KC RBs. Mahomes does too much himself.", "Chiefs", 3.06, 3);
	static carson = new Player("Chris Carson", "RB", false,
		"Doesn't play 17. Very good and they love to run it. No competition", "Seahawks", 4.09, 3);
	static dmont = new Player("David Montgomery", "RB", false,
		"Lucky run to end the year. Cohen back so less receiving work. Added Damien. Still the guy so valuable if he falls.",
		"Bears", 4.10, 3);
	static melvin = new Player("Melvin Gordon", "RB", false,
		"He's getting older. Best RB on team. Traded up for RB. 3-headed monster?", "Broncos", 9.02, 5);
	static hunt = new Player("Kareem Hunt", "RB", false,
		"He's a 1B. Really has 0 upside. Waste of pick.", "Browns", 6.09, 4);
	static jrob = new Player("James Robinson", "RB", false,
		"Love him. But Etienne there is very concerning. I take a shot on him very late but other than that stay away",
		"Jaguars", 8.02, 4);
	static davis = new Player("Mike Davis", "RB", false,
		"Only RB on the team. Was decent last year. Dont expect anything crazy", "Falcons", 6.08, 4);
	static etienne = new Player("Travis Etienne", "RB", true,
		"Urban wants to use him. JRob still there. Feel like he'll be the scat/3rd down back", "Jaguars", 10.07, 5);
	static rojo = new Player("Ronald Jones", "RB", false,
		"TB doesn't trust him. Fournette + Gio there. Dont run enough.", "Buccaneers", 10.06, 5);
	static gaskin = new Player("Myles Gaskin", "RB", false,
		"Love Myles. Only RB on team. Showed flashes last year.", "Dolphins", 6.06, 4);
	static dj = new Player("David Johnson", "RB", false,
		"He's so bad. Texans are so bad. Stay far far away.", "Texans", 10.10, 5);
	static mostert = new Player("Raheem Mostert", "RB", false, "Explosive, huge committee, injury prone",
		"49ers", 8.10, 4);
	static dharris = new Player("Damien Harris", "RB", false, "Pats #1. Willing to take a shot late",
		"Patriots", 10.05, 4);
	static dillon = new Player("AJ Dillon", "RB", false, "New Jamaal? Top 10 guy if Jones goes down.",
		"Packers", 12.04, 6);
	static edmonds = new Player("Chase Edmonds", "RB", false,
		"Brought in Conner. Similar to his role last year.", "Cardinals", 7.05, 5);
	static gus = new Player("Gus Edwards", "RB", false, "No real upside", "Ravens", 12.08, 6);
	static conner = new Player("James Conner", "RB", false, "Injury prone af. New Drake in AZ?",
		"Cardinals", 11.01, 5);
	static lenny = new Player("Leonard Fournette", "RB", false,
		"Best TB back according to ADP. Maybe worth a shot in a crowded backfield", "Buccaneers", 9.01, 5);
	static moss = new Player("Zach Moss", "RB", false, "Bills RB1 is Allen", "Bills", 10.09, 6);
	static javonte = new Player("Javonte Williams", "RB", true,
		"Traded up for him. Should get usage. Be great if Melvin goes down. Worth a late shot", "Broncos", 7.09, 4);
	static pollard = new Player("Tony Pollard", "RB", false, "Zeke is byke", "Cowboys", 12.06, 6);
	static singletary = new Player("Devin Singletary", "RB", false, "sucks", "Bills", 13.05, 6);
	static darrell = new Player("Darrell Henderson", "RB", false, "Committee. No upside.", "Rams", 5.01,
		6);
	static murray = new Player("Latavius Murray", "RB", false, "Pure handcuff", "Saints", 15.03, 6);
	static lindsay = new Player("Phillip Lindsay", "RB", false, "Not the #1 on a shitty team", "Texans",
		17.05, 6);
	static jamaal = new Player("Jamaal Williams", "RB", false, "Backup for swift now. Handcuff.",
		"Lions", 14.03, 6);
	static hines = new Player("Nyhiem Hines", "RB", false, "Scat backs are scat.", "Colts", 13.08, 7);
	static carter = new Player("Michael Carter", "RB", true,
		"Committee on a shitty team. Low draft stock.", "Jets", 9.09, 5);
	static sermon = new Player("Trey Sermon", "RB", true,
		"Committee. May get a role. Worth a late shot.", "49ers", 9.10, 5);
	static mattison = new Player("Alexander Mattison", "RB", false, "Handcuff", "Vikings", 15.06, 6);
	static smooches = new Player("J.D. McKissic", "RB", false, "Receiving back. He is what he is.",
		"Football Team", 15.07, 6);
	static tevin = new Player("Tevin Coleman", "RB", false, "Committee on a shitty team.", "Jets", 19.04,
		6);
	static perine = new Player("La'Mical Perine", "RB", false, "Committee on a shitty team.", "Jets",
		31.01, 7);
	static drake = new Player("Kenyan Drake", "RB", false, "RB2 and he is shit", "Raiders", 11.07, 6);
	static gainwell = new Player("Kenneth Gainwell", "RB", true,
		"Complementary to Sanders, shouldn't have much value", "Eagles", 25.06, 7);
	static cohen = new Player("Tarik Cohen", "RB", false,
		"Takes away receiving work from DMont, not much stand-alone value", "Bears", 16.02, 7);
	static gurley = new Player("Todd Gurley", "RB", false, "OLD. KNEE IS BUM.", "Falcons", 21.10, 7);
	static chuba = new Player("Chuba Hubbard", "RB", true, "CMC handcuff", "Panthers", 20.05, 7);
	static javian = new Player("Javian Hawkins", "RB", false,
		"Mike Davis handcuff, could emerge as RB1?", "Falcons", 31.02, 7);
	static levbell = new Player("Le'Veon Bell", "RB", false, "Bum", "Chiefs", 25.04, 7);
	static gio = new Player("Giovani Bernard", "RB", false,
		"Pure pass-catching piece. Doubt he has much value.", "Buccaneers", 19.06, 7);
	static mack = new Player("Marlon Mack", "RB", false, "JT's handcuff", "Colts", 21.03, 6);
	static white = new Player("James White", "RB", false, "Complement. Should have no value.",
		"Patriots", 16.08, 7);
	static sony = new Player("Sony Michel", "RB", false, "Walking injury", "Patriots", 25.01, 6);
	static jjackson = new Player("Justin Jackson", "RB", false, "Ekeler handcuff? Maybe?", "Chargers",
		25.07, 7);
	static joshkelley = new Player("Joshua Kelley", "RB", false, "Ekeler handcuff? Probably not.",
		"Chargers", 25.05, 7);
	static breida = new Player("Matt Breida", "RB", false,
		"Don't have much of a running game. 3-headed committee?", "Bills", 26.03, 7);
	static ahmed = new Player("Salvon Ahmed", "RB", false,
		"Gaskin is the 1. Brown and Ahmed compete for rest.", "Dolphins", 24.08, 7);
	static malcolmbrown = new Player("Malcolm Brown", "RB", false,
		"Gaskin is the 1. Brown and Ahmed compete for rest.", "Dolphins", 24.07, 7);
	static gallman = new Player("Wayne Gallman", "RB", false, "RB2 in San fran apparently", "49ers",
		24.10, 6);
	static penny = new Player("Rashaad Penny", "RB", false, "Unreliable handcuff for Carson", "Seahawks",
		21.02, 7);
	static xjones = new Player("Xavier Jones", "RB", true, "Might get a role behind Henderson with Akers gone", "Rams",
		31.03, 7);

	static rbs = [cmc, dalvin, yeti, saquon, kamara, jt, chubb, zeke, ajones, ekeler, najee,
		swift, gibson, mixon, dobbins, ceh, jacobs, miles, dmont, carson, etienne, hunt, jrob, gaskin, melvin,
		javonte, davis, edmonds, mostert, rojo, dj, lenny, drake, dharris, conner, carter, sermon, moss, dillon,
		gus, hines, singletary, pollard, gainwell, lindsay, smooches, jamaal, mattison, gurley, cohen, darrell,
		chuba, murray, penny, javian, tevin, levbell, gio, mack, white, sony, perine, joshkelley, malcolmbrown,
		breida, ahmed, gallman, jjackson, xjones];

	// WIDE RECEIVERS
	static tae = new Player("Davante Adams", "WR", false, "Rodgers there? Than lock him up!", "Packers",
		2.04, 1);
	static tyreek = new Player("Tyreek Hill", "WR", false,
		"High upside and showed consistency last year.", "Chiefs", 1.09, 1);
	static hopkins = new Player("DeAndre Hopkins", "WR", false,
		"Don't trust Kyler alot but Hop is just good.", "Cardinals", 2.06, 1);
	static diggs = new Player("Stefon Diggs", "WR", false,
		"Him and Allen have a connection! Not many TDs though.", "Bills", 2.03, 1);
	static ajb = new Player("AJ Brown", "WR", false,
		"The addition of Julio hurts his upside, still an OG", "Titans", 2.09, 1);
	static dk = new Player("DK Metcalf", "WR", false,
		"Monster. May disappear in games due to run heavy run nature.", "Seahawks", 3.03, 1);
	static ridley = new Player("Calvin Ridley", "WR", false, "No Julio so Ridley should EAT!", "Falcons",
		2.10, 1);
	static jjeff = new Player("Justin Jefferson", "WR", false, "Love me some jeff", "Vikings", 3.05, 1);
	static evans = new Player("Mike Evans", "WR", false,
		"TD guy. Lot of competition. Wouldn't mind as a WR2", "Buccaneers", 4.08, 2);
	static arob = new Player("Allen Robinson", "WR", false, "QB struggles. Still the only guy there.",
		"Bears", 4.02, 2);
	static keenan = new Player("Keenan Allen", "WR", false,
		"Injury history. Him and Herbert are an elite crew. Keenan only guy there.", "Chargers", 4.01, 2);
	static julio = new Player("Julio Jones", "WR", false,
		"Age and injury concerns but should have a big role on the Titans.", "Titans", 4.10, 2);
	static terry = new Player("Terry McLaurin", "WR", false,
		"Upgrade at QB. Clear best WR on team. Underwhelming?", "Football Team", 4.04, 2);
	static mt = new Player("Michael Thomas", "WR", false,
		"QB questions. Slant boy? Best WR on team tho.", "Saints", 3.09, 2);
	static godwin = new Player("Chris Godwin", "WR", false,
		"Lots of competiton. Little TDs, depending on big plays.", "Buccaneers", 5.07, 2);
	static thielen = new Player("Adam Thielen", "WR", false,
		"Getting older, TD regression, little upside due to volume (Jeff + run-focused offense) "
		+ "but should finish in top 24",
		"Vikings", 5.10, 3);
	static moore = new Player("D.J. Moore", "WR", false,
		"QB upgrade? Team should improve. Not very exciting", "Panthers", 6.02, 3);
	static woods = new Player("Robert Woods", "WR", false,
		"QB upgrade. Competes with Kupp. You know what he is.", "Rams", 5.03, 3);
	static diontae = new Player("Diontae Johnson", "WR", false,
		"Gets loads of targets. Lots of competiton. QB going downhill", "Steelers", 7.01, 3);
	static aiyuk = new Player("Brandon Aiyuk", "WR", false, "QB questions. Plenty of competiton. Risky.",
		"49ers", 7.04, 4);
	static golladay = new Player("Kenny Golladay", "WR", false,
		"No trust in Dimes. Best WR on team. Lots of competiton. Risky.", "Giants", 7.03, 3);
	static odell = new Player("Odell Beckham", "WR", false,
		"Manz always hurt. Definition of unreliable. But what if?", "Browns", 8.01, 5);
	static amari = new Player("Amari Cooper", "WR", false,
		"Best WR on team. Plenty of competition. Dak is back!", "Cowboys", 4.06, 2);
	static claypool = new Player("Chase Claypool", "WR", false,
		"Downfield threat. Inconsistent. Staying away.", "Steelers", 7.06, 4);
	static lamb = new Player("Ceedee Lamb", "WR", false,
		"Some upside. Dak back. Talented. Plenty of competiton", "Cowboys", 5.02, 3);
	static lockett = new Player("Tyler Lockett", "WR", false, "Very boom-bust. Run heavy team.",
		"Seahawks", 6.03, 3);
	static sutton = new Player("Courtland Sutton", "WR", false,
		"Coming off injury. Competiton. QB questions. No Rodgers? No thank you.", "Broncos", 8.05, 4);
	static chark = new Player("D.J. Chark", "WR", false,
		"TLaw now. More competiton. Was very bad last year.", "Jaguars", 8.06, 5);
	static fuller = new Player("Will Fuller", "WR", false, "Dont trust Tua. Lots of competiton.",
		"Dolphins", 9.09, 5);
	static juju = new Player("Juju Smith-Schuster", "WR", false, "Corvette Corvette... no thank you.",
		"Steelers", 8.04, 5);
	static higgins = new Player("Tee Higgins", "WR", false,
		"Plenty of competiton, dont fully trust burrow, some upside", "Bengals", 7.09, 4);
	static kupp = new Player("Cooper Kupp", "WR", false, "QB upgrade. Just competes with Woods.", "Rams",
		6.06, 3);
	static jamarr = new Player("Ja'Marr Chase", "WR", true,
		"Reunites with Burrow, competiton, may be worth a shot", "Bengals", 7.02, 4);
	static cooks = new Player("Brandin Cooks", "WR", false,
		"Only receiving option on a shitty team, injury prone, great value if watson plays.", "Texans", 10.03, 4);
	static deebo = new Player("Deebo Samuel", "WR", false,
		"Injury prone, playmaker, upside, qb questions", "49ers", 9.06, 4);
	static jeudy = new Player("Jerry Jeudy", "WR", false, "QB questions. No Rodgers? No thank you.",
		"Broncos", 9.08, 6);
	static hollywood = new Player("Marquise Brown", "WR", false, "Not a fan.", "Ravens", 11.02, 6);
	static curtis = new Player("Curtis Samuel", "WR", false, "Not exciting, no upside.", "Football Team",
		10.01, 6);
	static boyd = new Player("Tyler Boyd", "WR", false,
		"Least exciting WR on his team. You know what he is.", "Bengals", 9.07, 5);
	static landry = new Player("Jarvis Landry", "WR", false, "You know what he is. Run heavy team.",
		"Browns", 11.06, 5);
	static corey = new Player("Corey Davis", "WR", false, "Has a rookie QB on a shit team", "Jets",
		14.03, 5);
	static robby = new Player("Robby Anderson", "WR", false,
		"Re-unites with Darnold. I think team takes a step forward. Not a bad late floor pick.", "Panthers", 9.01,
		4);
	static gallup = new Player("Michael Gallup", "WR", false, "Least exciting WR on a crowded team.",
		"Cowboys", 12.03, 5);
	static parker = new Player("DeVante Parker", "WR", false, "Dont trust Tua. Not exciting.",
		"Dolphins", 13.04, 6);
	static waddle = new Player("Jaylen Waddle", "WR", true,
		"Don't trust Tua, reunites with Tua, may be worth a shot.", "Dolphins", 11.09, 6);
	static devonta = new Player("DeVonta Smith", "WR", true,
		"Most exciting receiver on Philly for Hurts, not a bad late pick", "Eagles", 9.03, 4);
	static marvin = new Player("Marvin Jones", "WR", false, "Not very exciting. Rookie QB.", "Jaguars",
		12.09, 6);
	static laviska = new Player("Laviska Shenault", "WR", false,
		"Haven't seen much from him. Industry loves him. Bad team", "Jaguars", 12.02, 6);
	static mikewill = new Player("Mike Williams", "WR", false, "Very boom-bust. Not interested.",
		"Chargers", 13.03, 6);
	static gabe = new Player("Gabriel Davis", "WR", false,
		"Showed signs last year. Too much competiton though.", "Bills", 18.05, 7);
	static hilton = new Player("T.Y. Hilton", "WR", false,
		"WR1 on the team with improved QB, old + busted, not much upside", "Colts", 13.10, 6);
	static ab = new Player("Antonio Brown", "WR", false, "Waste of pick.", "Buccaneers", 11.05, 6);
	static agholor = new Player("Nelson Agholor", "WR", false,
		"WR1 on Patriots? Lost of options on the team. Cam sucks.", "Patriots", 16.09, 6);
	static pittman = new Player("Michael Pittman", "WR", false, "Played poorly last year. Not excited.",
		"Colts", 12.04, 6);
	static ruggs = new Player("Henry Ruggs", "WR", false, "Didn't show much last year. Waller's team.",
		"Raiders", 14.04, 7);
	static mooney = new Player("Darnell Mooney", "WR", false,
		"Played well, suffered bad QB play. New QB situation could improve his outlook.", "Bears", 12.10, 6);
	static shepard = new Player("Sterling Shepard", "WR", false,
		"Golladay only receiver worth taking a shot on on this team.", "Giants", 19.02, 7);
	static beasley = new Player("Cole Beasley", "WR", false,
		"Not interested in this season with Eman coming in.", "Bills", 14.07, 7);
	static jbrown = new Player("John Brown", "WR", false, "Not very exciting on the Raiders", "Raiders",
		19.06, 7);
	static reagor = new Player("Jalen Reagor", "WR", false, "Rather have Smith or Goedert.", "Eagles",
		15.07, 7);
	static kirk = new Player("Christian Kirk", "WR", false, "Way too inconsistent.", "Cardinals", 20.01,
		7);
	static perriman = new Player("Breshad Perriman", "WR", false,
		"WR1 for Goff... better than other people drafted around here.", "Lions", 22.09, 7);
	static slayton = new Player("Darius Slayton", "WR", false,
		"Golladay only receiver worth taking a shot on on this team.", "Giants", 31.01, 7);
	static mims = new Player("Denzel Mims", "WR", false, "Has a rookie QB on a shit team.", "Jets",
		26.01, 7);
	static reynolds = new Player("Josh Reynolds", "WR", false,
		"New Corey Davis? Lots of vacated targets. Not very talented though.", "Titans", 27.09, 7);
	static shoddyb = new Player("Rashod Bateman", "WR", true, "Please be good.", "Ravens", 16.07, 6);
	static mecole = new Player("Mecole Hardman", "WR", false, "Never will trust him.", "Chiefs", 14.05,
		7);
	static watkins = new Player("Sammy Watkins", "WR", false, "Ravens don't throw much.", "Ravens",
		23.08, 7);
	static rondale = new Player("Rondale Moore", "WR", true,
		"Good stats on paper, lots of mouths to feed", "Cardinals", 25.03, 7);
	static amonra = new Player("Amon-ra St.Brown", "WR", true, "May emerge as the 1?", "Lions", 19.07,
		6);
	static elijah = new Player("Elijah Moore", "WR", true, "Lockett-like, no good QB tho", "Jets", 18.06,
		7);
	static toney = new Player("Kadarius Toney", "WR", true, "Too many mouths to feed", "Giants", 17.06,
		7);
	static gage = new Player("Russell Gage", "WR", false, "Underrated if Julio leaves", "Falcons", 18.03,
		6);
	static terrace = new Player("Terrace Marshall", "WR", true, "Next curtis samuel?", "Panthers", 22.07,
		7);
	static crowder = new Player("Jamison Crowder", "WR", false, "No upside, bad QB", "Jets", 19.09, 7);
	static parris = new Player("Parris Campbell", "WR", false, "Always injured, not much trust in him.",
		"Colts", 19.10, 7);
	static eman = new Player("Emmanuel Sanders", "WR", false, "Old. Don't expect much consistency.",
		"Bills", 20.02, 7);
	static dyami = new Player("Dyami Brown", "WR", true, "A lot of gadgets, wont be involved much",
		"Football Team", 31.02, 7);
	static bryanedwards = new Player("Bryan Edwards", "WR", false, "Where was he?", "Raiders", 30.05, 7);
	static amarirodgers = new Player("Amari Rodgers", "WR", true,
		"May get a piece of this offense. Wont be reliable this year though", "Packers", 24.01, 7);
	static green = new Player("AJ Green", "WR", false, "Old bum.", "Cardinals", 17.07, 7);
	static lazard = new Player("Allen Lazard", "WR", false, "Won't be reliable.", "Packers", 21.07, 7);
	static trequan = new Player("Tre'Quan Smith", "WR", false,
		"Number 2 in the offense now. Doubt we see much improvement", "Saints", 22.10, 7);
	static mvs = new Player("Marquez Valdes-Scantling", "WR", false, "So much drops", "Packers", 24.04,
		7);
	static tyrell = new Player("Tyrell Williams", "WR", false, "Never shown anything.", "Lions", 23.06,
		7);
	static nkeal = new Player("N'keal Harry", "WR", false, "Sucks", "Patriots", 31.03, 7);
	static djax = new Player("DeSean Jackson", "WR", false, "One good game a year. Walking injury.",
		"Rams", 24.07, 7);
	static dezfitz = new Player("Dez Fitzpatrick", "WR", true, "May emerge as the 2?", "Titans", 16.01,
		7);
	static jakobi = new Player("Jakobi Meyers", "WR", false, "Hearing good things from camp", "Patriots",
		24.03, 7);
	static nico = new Player("Nico Collins", "WR", true, "Rookie with potential to have a role",
		"Texans", 28.01, 7);
	static fulgham = new Player("Travis Fulgham", "WR", true,
		"Starting WR, may develop rapport with Hurts", "Eagles", 28.05, 7);
	static dpj = new Player("Donovan Peoples-Jones", "WR", false, "Not starting but may get a role",
		"Browns", 29.01, 7);
	static bourne = new Player("Kendrick Bourne", "WR", false, "Projected to start, may have a role",
		"Patriots", 29.07, 7);
	static scotty = new Player("Scott Miller", "WR", false,
		"Not starting, will have a couple TDs though", "Buccaneers", 29.09, 7);
	static van = new Player("Van Jefferson", "WR", false, "Competing with DJax for reps", "Rams", 30.10,
		7);
	static demarcus = new Player("Demarcus Robinson", "WR", false,
		"May get more opportunity with Watkins gone", "Chiefs", 27.07, 7);
	static patrick = new Player("Tim Patrick", "WR", false,
		"Sutton back will hurt him but he had some good games last year", "Broncos", 28.07, 7);

	static wrs = [tyreek, tae, diggs, hopkins, ajb, dk, jjeff, ridley, arob, mt, evans, keenan, terry,
		godwin, lamb, amari, moore, julio, thielen, golladay, jamarr, lockett, woods, kupp, diontae, aiyuk, odell,
		claypool, higgins, sutton, chark, devonta, juju, waddle, jeudy, fuller, deebo, boyd, cooks, hollywood,
		robby, laviska, curtis, landry, pittman, ab, parker, corey, shoddyb, gallup, mikewill, marvin, rondale,
		hilton, mooney, agholor, ruggs, amonra, elijah, beasley, toney, mims, gage, mecole, reagor, terrace,
		crowder, kirk, gabe, parris, perriman, eman, reynolds, jbrown, dyami, bryanedwards, shepard, amarirodgers,
		green, watkins, lazard, slayton, trequan, mvs, tyrell, nkeal, djax, dezfitz, jakobi, nico, fulgham, dpj,
		bourne, scotty, van, demarcus, patrick];

	// TIGHT ENDS
	static kelce = new Player("Travis Kelce", "TE", false, "God. Stack with Mahomes.", "Chiefs", 1.06,
		1);
	static waller = new Player("Darren Waller", "TE", false, "#1 in LV should be very good again.",
		"Raiders", 3.02, 1);
	static kittle = new Player("George Kittle", "TE", false,
		"Injury struggles last year, QB questions, very good though.", "49ers", 3.01, 1);
	static andrews = new Player("Mark Andrews", "TE", false,
		"Little TD dependent, more weapons in bmore, saw regression last year", "Ravens", 5.08, 1);
	static hock = new Player("T.J. Hockenson", "TE", false, "Best option on the team.", "Lions", 6.01,
		1);
	static goedert = new Player("Dallas Goedert", "TE", false,
		"Wasn't very good last year, best option on team now?", "Eagles", 7.05, 1);
	static fant = new Player("Noah Fant", "TE", false,
		"Not really interested, wasn't good last year, Sutton back, better qb?", "Broncos", 8.07, 2);
	static tonyan = new Player("Robert Tonyan", "TE", false,
		"Definition of TD dependent and those should go down.", "Packers", 10.07, 2);
	static gesicki = new Player("Mike Gesicki", "TE", false,
		"Good with Tua (Fitz) down the stretch. Added alot of other options.", "Dolphins", 11.01, 2);
	static pitts = new Player("Kyle Pitts", "TE", true,
		"Talented af. Now without Julio, he will get more involved. Top 4 TE", "Falcons", 5.06, 1);
	static jonnu = new Player("Jonnu Smith", "TE", false, "Competes with Henry. No QB. Im out.",
		"Patriots", 13.06, 3);
	static logan = new Player("Logan Thomas", "TE", false,
		"Great down the stretch. Upgrade at QB. I'm in.", "Football Team", 10.04, 2);
	static irv = new Player("Irv Smith", "TE", false, "No Rudolph. Showed flashes. Risky.", "Vikings",
		10.09, 3);
	static higbee = new Player("Tyler Higbee", "TE", false,
		"No Everett, improved QB, may be a decent option.", "Rams", 11.07, 2);
	static gronk = new Player("Rob Gronkowski", "TE", false, "TD dependent. Too many options.",
		"Buccaneers", 12.06, 2);
	static engram = new Player("Evan Engram", "TE", false, "Nope. More competiton, bad QB, not good",
		"Giants", 14.01, 3);
	static hunter = new Player("Hunter Henry", "TE", false, "Competes with Jonnu. No QB. Im out.",
		"Patriots", 14.02, 3);
	static kmet = new Player("Cole Kmet", "TE", false, "Unproven. no thanks", "Bears", 18.07, 3);
	static hooper = new Player("Austin Hooper", "TE", false,
		"Wasn't good last year, why would he be this year?", "Browns", 16.08, 3);
	static hurst = new Player("Hayden Hurst", "TE", false, "Pitts there, I'm out.", "Falcons", 23.01, 4);
	static jarwin = new Player("Blake Jarwin", "TE", false,
		"Off a bad injury. Maybe the Hitman is right. Keep an eye out on waivers.", "Cowboys", 18.01, 3);
	static ebron = new Player("Eric Ebron", "TE", false, "Lots of competition, QB decline.", "Steelers",
		15.05, 3);
	static cuyok = new Player("Jared Cook", "TE", false,
		"Old. New Hunter Henry with an improving Herbert. Worth a shot", "Chargers", 15.09, 2);
	static doyle = new Player("Jack Doyle", "TE", false, "Never been good.", "Colts", 28.09, 4);
	static ertz = new Player("Zach Ertz", "TE", false, "OLD", "Eagles", 17.02, 4);
	static tebow = new Player("Tim Tebow", "TE", false, "LOL", "Jaguars", 24.05, 4);
	static knox = new Player("Dawson Knox", "TE", false, "Yea no", "Bills", 27.02, 4);
	static firkser = new Player("Anthony Firkser", "TE", false,
		"Number 1 TE on team now... could be a sneaky volume guy", "Titans", 22.04, 4);
	static patf = new Player("Pat Freiermuth", "TE", true, "Won't be involved much", "Steelers", 24.09,
		4);
	static trautman = new Player("Adam Trautman", "TE", false,
		"Number 1 TE on team now... could be sneaky.", "Saints", 16.03, 3);
	static ojhoward = new Player("OJ Howard", "TE", false,
		"Athletic. Always injured. Too many mouths to feed", "Buccaneers", 24.02, 4);
	static everett = new Player("Gerald Everett", "TE", false,
		"Assuming he's the number 1 TE... but will there be enough volume?", "Seahawks", 19.04, 4);
	static danarnold = new Player("Dan Arnold", "TE", false,
		"Paid him good money to be the TE1... could be sneaky", "Panthers", 30.08, 4);

	static tes = [kelce, waller, kittle, pitts, andrews, hock, goedert, fant, tonyan, gesicki, logan,
		irv, hunter, gronk, engram, jonnu, higbee, kmet, hooper, ertz, cuyok, patf, jarwin, trautman, firkser,
		ebron, ojhoward, knox, hurst, tebow, everett, danarnold, doyle];

	// DEFENSES

	static falcons = new Player("Falcons", 6, "Eagles!", "Buccaneers?", "Giants!", 16.01);
	static saints = new Player("Saints", 6, "Packers?", "Panthers", "Patriots!", 16.01);
	static jets = new Player("Jets", 6, "Panthers", "Patriots!", "Broncos!", 16.01);
	static niners = new Player("49ers", 6, "Lions!", "Eagles!", "Packers?", 14.01);

	static bills = new Player("Bills", 7, "Steelers?", "Dolphins", "Football Team", 14.09);
	static cowboys = new Player("Cowboys", 7, "Buccaneers?", "Chargers", "Eagles!", 16.01);
	static jaguars = new Player("Jaguars", 7, "Texans!", "Broncos!", "Cardinals", 16.01);
	static chargers = new Player("Chargers", 7, "Football Team", "Cowboys", "Chiefs?", 16.01);
	static vikings = new Player("Vikings", 7, "Bengals!", "Cardinals", "Seahawks?", 16.01);
	static steelers = new Player("Steelers", 7, "Bills?", "Raiders", "Bengals!", 10.02);

	static ravens = new Player("Ravens", 8, "Raiders", "Chiefs?", "Lions!", 12.03);
	static raiders = new Player("Raiders", 8, "Ravens?", "Steelers?", "Dolphins", 16.01);

	static lions = new Player("Lions", 9, "49ers!", "Packers?", "Ravens?", 16.01);
	static seahawks = new Player("Seahawks", 9, "Colts?", "Titans?", "Vikings", 16.01);
	static buccaneers = new Player("Buccaneers", 9, "Cowboys", "Falcons?", "Rams", 13.01);
	static football = new Player("Football Team", 9, "Chargers", "Giants!", "Bills?", 12.06);

	static bears = new Player("Bears", 10, "Rams", "Bengals!", "Browns", 15.03);
	static bengals = new Player("Bengals", 10, "Vikings", "Bears", "Steelers?", 16.01);
	static texans = new Player("Texans", 10, "Jaguars!", "Browns", "Panthers", 16.01);
	static giants = new Player("Giants", 10, "Broncos!", "Football Team", "Falcons?", 16.01);

	static rams = new Player("Rams", 11, "Bears", "Colts?", "Buccaneers?", 11.08);
	static broncos = new Player("Broncos", 11, "Giants!", "Jaguars!", "Jets!", 16.01);

	static cardinals = new Player("Cardinals", 12, "Titans?", "Vikings", "Jaguars!", 16.01);
	static chiefs = new Player("Chiefs", 12, "Browns", "Ravens?", "Chargers", 15.01);

	static panthers = new Player("Panthers", 13, "Jets!", "Saints", "Texans!", 16.01);
	static browns = new Player("Browns", 13, "Chiefs?", "Texans!", "Bears", 15.03);
	static packers = new Player("Packers", 13, "Saints", "Lions!", "49ers!", 16.01);
	static titans = new Player("Titans", 13, "Cardinals", "Seahawks?", "Colts?", 16.01);

	static colts = new Player("Colts", 14, "Seahawks?", "Rams", "Titans?", 13.09);
	static dolphins = new Player("Dolphins", 14, "Patriots!", "Bills?", "Raiders", 14.05);
	static patriots = new Player("Patriots", 14, "Dolphins", "Jets!", "Saints", 14.05);
	static eagles = new Player("Eagles", 14, "Falcons?", "49ers!", "Cowboys", 16.01);

	static dst = [rams, buccaneers, ravens, steelers, patriots, dolphins, bills, saints, giants,
		chiefs, colts, chargers, football, jaguars, niners, seahawks, eagles, jets, vikings, raiders, texans,
		packers, lions, broncos, cowboys, browns, bengals, bears, panthers, falcons, cardinals, titans];

	// FLEX
	static flex = [cmc, kamara, yeti, dalvin, saquon, chubb, jt, zeke, tae, tyreek, kelce, ajones,
		hopkins, diggs, ajb, kittle, ekeler, dk, ridley, jjeff, najee, swift, waller, gibson, mixon, dobbins,
		miles, jacobs, ceh, mt, arob, carson, dmont, evans, keenan, pitts, terry, andrews, godwin, lamb, amari,
		moore, julio, etienne, thielen, hock, hunt, golladay, jamarr, jrob, woods, lockett, gaskin, kupp, diontae,
		melvin, aiyuk, odell, claypool, higgins, sutton, fant, javonte, davis, chark, edmonds, devonta, juju,
		mostert, goedert, rojo, waddle, tonyan, jeudy, dj, lenny, fuller, gesicki, cooks, deebo, logan, boyd, drake,
		dharris, irv, hollywood, robby, laviska, curtis, conner, carter, hunter, landry, sermon, gronk, engram,
		pittman, ab, moss, parker, corey, dillon, shoddyb, jonnu, gus, higbee, hines, gallup, singletary, mikewill,
		pollard, marvin, rondale, hilton, mooney, gainwell, agholor, ruggs, lindsay, smooches, kmet, amonra, hooper,
		elijah, beasley, ertz, jamaal, mattison, toney, cuyok, gurley, patf, cohen, darrell, mims, gage, chuba,
		mecole, jarwin, reagor, terrace, murray, crowder, kirk, trautman, firkser, gabe, javian, parris, perriman,
		ebron, ojhoward, tevin, eman, levbell, reynolds, jbrown, dyami, gio, mack, bryanedwards, white, shepard,
		amarirodgers, green, knox, watkins, hurst, sony, lazard, tebow, everett, trequan, mvs, perine, tyrell,
		nkeal, joshkelley, malcolmbrown, djax, breida, dezfitz, danarnold, ahmed, gallman, doyle, jakobi, nico,
		fulgham, dpj, bourne, scotty, van, demarcus, patrick, xjones];

	// ALL
	static all = [cmc, kamara, yeti, dalvin, saquon, chubb, jt, zeke, tae, tyreek, kelce, ajones,
		hopkins, diggs, ajb, kittle, ekeler, dk, ridley, jjeff, najee, swift, waller, gibson, mixon, dobbins,
		miles, jacobs, ceh, mt, arob, carson, dmont, evans, keenan, pitts, terry, andrews, godwin, lamb, amari,
		moore, julio, etienne, thielen, hock, hunt, golladay, jamarr, jrob, woods, lockett, gaskin, kupp, diontae,
		melvin, aiyuk, odell, claypool, higgins, sutton, fant, javonte, davis, chark, edmonds, devonta, juju,
		mostert, goedert, rojo, waddle, tonyan, jeudy, dj, lenny, fuller, gesicki, cooks, deebo, logan, boyd, drake,
		dharris, irv, hollywood, robby, laviska, curtis, conner, carter, hunter, landry, sermon, gronk, engram,
		pittman, ab, moss, parker, corey, dillon, shoddyb, jonnu, gus, higbee, hines, gallup, singletary, mikewill,
		pollard, marvin, rondale, hilton, mooney, gainwell, agholor, ruggs, lindsay, smooches, kmet, amonra, hooper,
		elijah, beasley, ertz, jamaal, mattison, toney, cuyok, gurley, patf, cohen, darrell, mims, gage, chuba,
		mecole, jarwin, reagor, terrace, murray, crowder, kirk, trautman, firkser, gabe, javian, parris, perriman,
		ebron, ojhoward, tevin, eman, levbell, reynolds, jbrown, dyami, gio, mack, bryanedwards, white, shepard,
		amarirodgers, green, knox, watkins, hurst, sony, lazard, tebow, everett, trequan, mvs, perine, tyrell,
		nkeal, joshkelley, malcolmbrown, djax, breida, dezfitz, danarnold, ahmed, gallman, doyle, rams, buccaneers,
		ravens, steelers, patriots, dolphins, bills, saints, giants, chiefs, colts, chargers, football, jaguars,
		niners, seahawks, eagles, jets, vikings, raiders, texans, packers, lions, broncos, cowboys, browns, bengals,
		bears, panthers, falcons, cardinals, mahomes, jallen, kyler, lamar, dak, herbert, russell, rodgers, burrow,
		tlaw, hurts, stafford, brady, tannehill, mattyice, baker, watson, fields, wentz, tua, cousins, dannydimes,
		lance, zach, darnold, carr, bigben, goff, winston, newton, taysom, fitz, mac, teddy, jimmyg, lock, love,
		dalton, tyrod, minshew, heinicke, jakobi, nico, fulgham, dpj, bourne, scotty, van, demarcus, patrick, xjones];

	static team1 = new Drafter([], "Team 1", qbs, rbs, wrs, tes, flex, all, dst);
	static team2 = new Drafter([], "Team 2", qbs, rbs, wrs, tes, flex, all, dst);
	static team3 = new Drafter([], "Team 3", qbs, rbs, wrs, tes, flex, all, dst);
	static team4 = new Drafter([], "Team 4", qbs, rbs, wrs, tes, flex, all, dst);
	static team5 = new Drafter([], "Team 5", qbs, rbs, wrs, tes, flex, all, dst);
	static team6 = new Drafter([], "Team 6", qbs, rbs, wrs, tes, flex, all, dst);
	static team7 = new Drafter([], "Team 7", qbs, rbs, wrs, tes, flex, all, dst);
	static team8 = new Drafter([], "Team 8", qbs, rbs, wrs, tes, flex, all, dst);
	static team9 = new Drafter([], "Team 9", qbs, rbs, wrs, tes, flex, all, dst);
	static team10 = new Drafter([], "Team 10", qbs, rbs, wrs, tes, flex, all, dst);

	static drafters = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10];

	draftStarted = false;
	teamIndex = 1;
	daCount = 1;
	round = 1;
	currSpot = "";
	buttText = "";


	startFunction() {
		document.getElementById("start").innerText = "Drafting...";
		if (draftStarted == false) {
			draftStarted = true;
			drafting();
		}
	}

	teamFunction(teamId) {
		newTeam = prompt("Please enter this team's name");
		if (newTeam != null) {
			document.getElementById(teamId).innerText = newTeam;

			currDrafter = findDrafter(teamid);
			currDrafter.claimed();
			currDrafter.changeName(newTeam);
		}
	}

	posFunction(currSpot) {
		buttText = document.getElementById(currSpot);
		// if a player has already been selected at this spot
		if (buttText.matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
			if (confirm("Select an option")) {
				remove();
			}
		} else {
			this.selectedPos("ALL");
		}
	}

	compare(a, b) {
		if (a.getAdp() < b.getAdp()) {
			return -1;
		}
		if (a.getAdp() > b.getAdp()) {
			return 1;
		}
		return 0;
	}

	infoList(p, d) {
		s = [];
		play = [];

		for (var i = 0; i < p.length; i++) {
			play.push(p[i]);
		}
		sort((a, b) => a.getAdp().localeCompare(b.getAdp()));
		// + " - TIER: " + play[i].getTier()
		for (var i = 0; i < p.length; i++) {
			if (play[i].getPosition().equals("WR")) {
				if (d.hasQbStack(play[i].getTeam()) == true && d.hasMultRec(play[i].getTeam()) == true
					&& d.byeByeBye("WR") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "?! - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasQbStack(play[i].getTeam()) == true && d.hasMultRec(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "?! - BYE: " + play[i].getTeam().getBye();
				} else if (d.hasMultRec(play[i].getTeam()) == true && d.byeByeBye("WR") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "? - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasQbStack(play[i].getTeam()) == true && d.byeByeBye("WR") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "! - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasQbStack(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "! - BYE: " + play[i].getTeam().getBye();
				} else if (d.byeByeBye("WR") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasMultRec(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "? - BYE: " + play[i].getTeam().getBye();
				} else {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE: " + play[i].getTeam().getBye();
				}
			} else if (play[i].getPosition().equals("TE")) {
				if (d.hasQbStack(play[i].getTeam()) == true && d.hasMultRec(play[i].getTeam()) == true
					&& d.byeByeBye("TE") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "?! - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasQbStack(play[i].getTeam()) == true && d.hasMultRec(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "?! - BYE: " + play[i].getTeam().getBye();
				} else if (d.hasQbStack(play[i].getTeam()) == true && d.byeByeBye("TE") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "! - BYE?: " + play[i].getTeam().getBye();
				} else if (d.byeByeBye("TE") == play[i].getBye() && d.hasMultRec(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "? - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasQbStack(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "! - BYE: " + play[i].getTeam().getBye();
				} else if (d.hasMultRec(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "? - BYE: " + play[i].getTeam().getBye();
				} else if (d.byeByeBye("TE") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE?: " + play[i].getTeam().getBye();
				} else {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE: " + play[i].getTeam().getBye();
				}
			} else if (play[i].getPosition().equals("QB1") || play[i].getPosition().equals("QB2")) {
				if (d.hasRecStack(play[i].getTeam()) == true && d.byeByeBye("QB") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "! - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasRecStack(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "! - BYE: " + play[i].getTeam().getBye();
				} else if (d.byeByeBye("QB") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE?: " + play[i].getTeam().getBye();
				} else {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE: " + play[i].getTeam().getBye();
				}
			} else if (play[i].getPosition().equals("RB")) {
				if (d.hasHandcuff(play[i].getTeam()) == true && d.byeByeBye("RB") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "? - BYE?: " + play[i].getTeam().getBye();
				} else if (d.hasHandcuff(play[i].getTeam()) == true) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + "? - BYE: " + play[i].getTeam().getBye();
				} else if (d.byeByeBye("RB") == play[i].getBye()) {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE?: " + play[i].getTeam().getBye();
				} else {
					s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
						+ " - " + play[i].getTeamName() + " - BYE: " + play[i].getTeam().getBye();
				}
			} else if (play[i].getPosition().equals("DST")) {
				s[i] = play[i].getAdp() + " " + play[i].getName() + " - " + play[i].getPosition()
					+ " - BYE: " + play[i].getBye() + " - Schedule: " + play[i].getMatchups();

			}
		}
		return s;
	}

	selectedPos(selected) {
		if (selected.equals("QB")) {
			var cbqb = infoList(findSpot(currSpot).getQbs(), findSpot(currSpot));
			var select = document.getElementById("posSelect");
			for (var i = 0; i < cbqb.length; i++) {
				var opt = cbqb[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			currbox = cbqb;

			var choices = ["ALL", "QB", "RB", "WR", "TE", "FLEX", "DST"];
			var select = document.getElementById("posChange");
			for (var i = 0; i < choices.length; i++) {
				var opt = choices[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
		} else if (selected.equals("RB")) {
			var cbrb = infoList(findSpot(currSpot).getRbs(), findSpot(currSpot));
			var select = document.getElementById("posSelect");
			for (var i = 0; i < cbrb.length; i++) {
				var opt = cbrb[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			currbox = cbrb;

			var choices = ["ALL", "QB", "RB", "WR", "TE", "FLEX", "DST"];
			var select = document.getElementById("posChange");
			for (var i = 0; i < choices.length; i++) {
				var opt = choices[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}

		} else if (selected.equals("WR")) {
			var cbwr = infoList(findSpot(currSpot).getWrs(), findSpot(currSpot));
			var select = document.getElementById("posSelect");
			for (var i = 0; i < cbwr.length; i++) {
				var opt = cbwr[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			currbox = cbwr;

			var choices = ["ALL", "QB", "RB", "WR", "TE", "FLEX", "DST"];
			var select = document.getElementById("posChange");
			for (var i = 0; i < choices.length; i++) {
				var opt = choices[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}

		} else if (selected.equals("TE")) {
			var cbte = infoList(findSpot(currSpot).getTes(), findSpot(currSpot));
			var select = document.getElementById("posSelect");
			for (var i = 0; i < cbte.length; i++) {
				var opt = cbte[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			currbox = cbte;

			var choices = ["ALL", "QB", "RB", "WR", "TE", "FLEX", "DST"];
			var select = document.getElementById("posChange");
			for (var i = 0; i < choices.length; i++) {
				var opt = choices[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}

		} else if (selected.equals("FLEX")) {
			var cbflex = infoList(findSpot(currSpot).getFlex(), findSpot(currSpot));
			var select = document.getElementById("posSelect");
			for (var i = 0; i < cbflex.length; i++) {
				var opt = cbflex[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			currbox = cbflex;

			var choices = ["ALL", "QB", "RB", "WR", "TE", "FLEX", "DST"];
			var select = document.getElementById("posChange");
			for (var i = 0; i < choices.length; i++) {
				var opt = choices[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}

		} else if (selected.equals("ALL")) {
			var cball = infoList(findSpot(currSpot).getAll(), findSpot(currSpot));
			var select = document.getElementById("posSelect");
			for (var i = 0; i < cball.length; i++) {
				var opt = cball[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			currbox = cball;

			var choices = ["ALL", "QB", "RB", "WR", "TE", "FLEX", "DST"];
			var select = document.getElementById("posChange");
			for (var i = 0; i < choices.length; i++) {
				var opt = choices[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}

		} else if (selected.equals("DST")) {
			var cbdst = infoList(findSpot(currSpot).getQbs(), findSpot(currSpot));
			var select = document.getElementById("posSelect");
			for (var i = 0; i < cbdst.length; i++) {
				var opt = cbdst[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			currbox = cbdst;

			var choices = ["ALL", "QB", "RB", "WR", "TE", "FLEX", "DST"];
			var select = document.getElementById("posChange");
			for (var i = 0; i < choices.length; i++) {
				var opt = choices[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
		}
	}

	selectedPlayer(playerString) {
		var splitUp = playerString.split();
		var playerName = splitUp[1] + " " + splitUp[2];
		var currPlayer = findPlayer(playerName);
		if (currPlayer == null){
			playerName = splitUp[1];
			currPlayer = findPlayer(playerName);
		}
		var team = currPlayer.getTeam();
		var currDrafter = findSpot(currSpot);
		var pos = currPlayer.getPosition();

		if (buttText.matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
			currPlayer.setSpotDrafted(findPlayer(buttText).getSpotDrafted());
		} else {
			currPlayer.setSpotDrafted(parseFloat(buttText));
		}
		
		team1.remove(playerName, pos);
		team2.remove(playerName, pos);
		team3.remove(playerName, pos);
		team4.remove(playerName, pos);
		team5.remove(playerName, pos);
		team6.remove(playerName, pos);
		team7.remove(playerName, pos);
		team8.remove(playerName, pos);
		team9.remove(playerName, pos);
		team10.remove(playerName, pos);

		document.getElementById(currSpot).innerText = playerName;
		currDrafter.drafted(currPlayer);

		if (pos.equals("QB1") || pos.equals("QB2")){
			currDrafter.addQbStack(team);
			document.getElementById(currSpot).style.backgroundColor = "pink"
		} else if (pos.equals("RB")){
			currDrafter.addHandcuff(team);
			document.getElementById(currSpot).style.backgroundColor = "green"
		} else if (pos.equals("WR")){
			currDrafter.addMultRec(team);
			currDrafter.addRecStack(team);
			document.getElementById(currSpot).style.backgroundColor = "blue"
		} else if (pos.equals("TE")){
			currDrafter.addMultRec(team);
			currDrafter.addRecStack(team);
			document.getElementById(currSpot).style.backgroundColor = "orange"
		} else if (pos.equals("DST")) {
			document.getElementById(currSpot).style.backgroundColor = "gray"
		}

		if (draftStarted == true && currDrafter.isClaimed() == true
			&& currDrafter.getButton(round).equals(Math.floor(parseFloat(currSpot)))) {
			drafting();
		}
	}

	removePlayer(){
		drafter = findSpot(currSpot);
		playerToRemove = draft.findDraftedPlayer(currSpot);
		pos = playerToRemove.getPosition();
		
		draft.removeDrafted(currSpot);
		butt.setText("" + playerToRemove.getSpotDrafted());
		butt.setBackground(myWhite);
		
		team1.addBackIn(playerToRemove);
		team2.addBackIn(playerToRemove);
		team3.addBackIn(playerToRemove);
		team4.addBackIn(playerToRemove);
		team5.addBackIn(playerToRemove);
		team6.addBackIn(playerToRemove);
		team7.addBackIn(playerToRemove);
		team8.addBackIn(playerToRemove);
		team9.addBackIn(playerToRemove);
		team10.addBackIn(playerToRemove);
	}

	// return a list of string names from a Player array
	nameList(p) {
		s = [];
		for (var i = 0; i < p.length; i++) {
			s.push(p[i].getName());
		}
		return s;
	}

	// pass in a spot number or player already drafted, returns the drafter that's
	// drafting at that spot
	findSpot(s) {
		for (var i = 0; i < 10; i++) {
			d = drafters[i].findDraftSpot(s);
			// System.out.println(i + " " + d);
			if (d != null) {
				return drafters[i];
			}
		}
		return null;
	}

	// given a fantasy team name, return the drafter
	findDrafter(s) {
		for (var i = 0; i < 10; i++) {
			if (drafters[i].getName().equals(s)) {
				return drafters[i];
			}
		}
		return null;
	}

	// return a player given their name and position
	findPlayer(s, pos) {
		play = dst[0];
		if (pos.equals("QB")) {
			for (var i = 0; i < qbs.length; i++) {
				if (qbs[i].getName().equals(s)) {
					play = qbs[i];
				}
			}
		} else if (pos.equals("RB")) {
			for (var i = 0; i < rbs.length; i++) {
				if (rbs[i].getName().equals(s)) {
					play = rbs[i];
				}
			}
		} else if (pos.equals("WR")) {
			for (var i = 0; i < wrs.length; i++) {
				if (wrs[i].getName().equals(s)) {
					play = wrs[i];
				}
			}
		} else if (pos.equals("TE")) {
			for (var i = 0; i < tes.length; i++) {
				if (tes[i].getName().equals(s)) {
					play = tes[i];
				}
			}
		} else if (pos.equals("DST")) {
			for (var i = 0; i < dst.length; i++) {
				if (dst[i].getName().equals(s)) {
					play = dst[i];
				}
			}
		}
		return play;
	}

	randomSelect(currDrafter) {
		buttText = document.getElementById(currSpot);
		temp = infoList(findSpot(buttText).getAll(), findSpot(buttText));
		
		value = Math.random() * 5;
		if (currDrafter.enoughQbs() == true && currDrafter.enoughTes() && currDrafter.enoughDst()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (!temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					&& !temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					&& !temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.enoughQbs() == true && currDrafter.enoughTes()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (!temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					&& !temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.enoughQbs() == true && currDrafter.enoughDst()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (!temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					&& !temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.enoughTes() && currDrafter.enoughDst()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (!temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					&& !temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.enoughQbs() == true) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (!temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.enoughTes()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (!temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")) {
					temp[five] = temp[i];
					five++;
	
				}
			}
		} else if (currDrafter.enoughDst()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (!temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
	
				}
			}
		}
	
		if (currDrafter.getDraftedSize() == 12 && currDrafter.notenoughtDst() && currDrafter.notenoughtQbs()
			&& currDrafter.notenoughtTes()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					|| temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					|| temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.getDraftedSize() == 13 && currDrafter.notenoughtDst() && currDrafter.notenoughtQbs()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					|| temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.getDraftedSize() == 13 && currDrafter.notenoughtDst() && currDrafter.notenoughtTes()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					|| temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.getDraftedSize() == 13 && currDrafter.notenoughtQbs() && currDrafter.notenoughtTes()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")
					|| temp[i].matches(
						"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.getDraftedSize() == 14 && currDrafter.notenoughtDst()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
	
				if (temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [A-Za-z]+[ A-Za-z]* - DST - BYE: ([6-9]|1[0-4]) - Schedule: [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?, [A-Za-z]+[ A-Za-z]*\\??\\!?")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.getDraftedSize() == 14 && currDrafter.notenoughtQbs()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - QB[1-2] - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")) {
					temp[five] = temp[i];
					five++;
				}
			}
		} else if (currDrafter.getDraftedSize() == 14 && currDrafter.notenoughtTes()) {
			var five = 0;
			for (var i = 0; five < 5; i++) {
				if (temp[i].matches(
					"([1-9]|1[0-9]|2[0-9]|3[0-9]).(0[0-9]|1) [a-zA-Z-.]+ [a-zA-Z-]+ - TE - [A-Za-z49]+[ A-Za-z]*\\??\\!? - BYE\\??: ([6-9]|1[0-4])")) {
					temp[five] = temp[i];
					five++;
				}
			}
		}
		var selected = temp[value];
		selectedPlayer(selected); 
	}

	// this simulates the draft itself by calling randomSelect a number of times
	// until the nearest claimed spot and then continues after the drafter makes
	// their
	// pick
	drafting() {
		// daCount will keep track of the pick number from 1 to 150
		while (daCount <= 150) {
			// teamIndex tracks which team is currently up, if it's 1 than team 1 is up
			if (teamIndex == 1 && !team1.isClaimed()) {
				this.currSpot = team1.getButton(round);
				randomSelect(team1);
				if (daCount % 10 == 1) {
					teamIndex = 2;
				} else {
					// round keeps track of the current round of the draft we are in
					round++;
				}
				daCount++;
			} else if (teamIndex == 1 && team1.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex = 1;
					round++;
				} else {
					teamIndex = 2;
				}
				// if the current team is claimed and does not have someone drafted
				// at this spot yet, then break the loop to allow the team to make their pick.
				if (!team1.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 2 && !team2.isClaimed()) {
				this.currSpot = team2.getButton(round);
				randomSelect(team2);
				if (daCount % 10 == 2) {
					teamIndex = 3;
				} else {
					teamIndex = 1;
				}
				daCount++;
			} else if (teamIndex == 2 && team2.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team2.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 3 && !team3.isClaimed()) {
				this.currSpot = team3.getButton(round);
				randomSelect(team3);
				if (daCount % 10 == 3) {
					teamIndex = 4;
				} else {
					teamIndex = 2;
				}
				daCount++;
			} else if (teamIndex == 3 && team3.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team3.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 4 && !team4.isClaimed()) {
				this.currSpot = team4.getButton(round);
				randomSelect(team4);
				if (daCount % 10 == 4) {
					teamIndex = 5;
				} else {
					teamIndex = 3;
				}
				daCount++;
			} else if (teamIndex == 4 && team4.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team4.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 5 && !team5.isClaimed()) {
				this.currSpot = team5.getButton(round);
				randomSelect(team5);
				if (daCount % 10 == 5) {
					teamIndex = 6;
				} else {
					teamIndex = 4;
				}
				daCount++;
			} else if (teamIndex == 5 && team5.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team5.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 6 && !team6.isClaimed()) {
				this.currSpot = team6.getButton(round);
				randomSelect(team6);
				if (daCount % 10 == 6) {
					teamIndex = 7;
				} else {
					teamIndex = 5;
				}
				daCount++;
			} else if (teamIndex == 6 && team6.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team6.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 7 && !team7.isClaimed()) {
				this.currSpot = team7.getButton(round);
				randomSelect(team7);
				if (daCount % 10 == 7) {
					teamIndex = 8;
				} else {
					teamIndex = 6;
				}
				daCount++;
			} else if (teamIndex == 7 && team7.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team7.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 8 && !team8.isClaimed()) {
				this.currSpot = team8.getButton(round);
				randomSelect(team8);
				if (daCount % 10 == 8) {
					teamIndex = 9;
				} else {
					teamIndex = 7;
				}
				daCount++;
			} else if (teamIndex == 8 && team8.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team8.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 9 && !team9.isClaimed()) {
				this.currSpot = team9.getButton(round);
				randomSelect(team9);
				if (daCount % 10 == 9) {
					teamIndex = 10;
				} else {
					teamIndex = 8;
				}
				daCount++;
			} else if (teamIndex == 9 && team9.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex++;
				}
				if (!team9.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
			if (teamIndex == 10 && !team10.isClaimed()) {
				this.currSpot = team10.getButton(round);
				randomSelect(team10);
				if (daCount % 10 == 1) {
					teamIndex = 9;
				} else {
					round++;
				}
				daCount++;
			} else if (teamIndex == 10 && team10.isClaimed()) {
				daCount++;
				if (round % 2 == 0) {
					teamIndex--;
				} else {
					teamIndex = 10;
					if (round != 15) {
						round++;
					}
				}
				if (!team10.getButton(round).matches("[a-zA-Z-.]+ [a-zA-Z-]+")) {
					break;
				}
			}
		}
	}

	playerInfo(){
		var buttText = document.getElementById(currSpot);
		var player = findPlayer(buttText);
		var pos = player.getPosition();
		var team = currPlayer.getTeam();
		var popup = document.getElementById("info");
 		popup.classList.toggle("show");

		if(pos.equals("QB1") || pos.equals("QB2")){

		} else if (pos.equals("RB")){

		} else if (pos.equals("WR")){
			
		} else if (pos.equals("TE")){
			
		} else if (pos.equals("DSR")){
			
		}
	}

}