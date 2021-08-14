
class Player {
	   name; 
	   rookie;
	   position;
	   notes; 
	  drafted = false;
	  myteam; 
	  adp; 
	  week1; 
	  week2; 
	  week3;
	  bye; 
	  spotDrafted = 16.01;
	  tier = -1; 
	  draftedTo = ""; 
	
	  falcons = new Team("Falcons", 6, "Eagles!", "Buccaneers?", "Giants!");
	  sas = new Team("Sas", 6, "Packers?", "Panthers", "Patriots!");
	  jets = new Team("Jets", 6, "Panthers", "Patriots!", "Broncos!");
	  niners = new Team("49ers", 6, "Lions!", "Eagles!", "Packers?");
	
	  bills = new Team("Bills", 7, "Steelers?", "Dolphins", "Football Team");
	  cowboys = new Team("Cowboys", 7, "Buccaneers?", "Chargers", "Eagles!");
	  jaguars = new Team("Jaguars", 7, "Texans!", "Broncos!", "Cardinals");
	  chargers = new Team("Chargers", 7, "Football Team", "Cowboys", "Chiefs?");
	  vikings = new Team("Vikings", 7, "Bengals!", "Cardinals", "Seahawks?");
	  steelers = new Team("Steelers", 7, "Bills?", "Raiders", "Bengals!");
	
	  ravens = new Team("Ravens", 8, "Raiders", "Chiefs?", "Lions!");
	  raiders = new Team("Raiders", 8, "Ravens?", "Steelers?", "Dolphins");
	
	  lions = new Team("Lions", 9, "49ers!", "Packers?", "Ravens?");
	  seahawks = new Team("Seahawks", 9, "Colts?", "Titans?", "Vikings");
	  buccaneers = new Team("Buccaneers", 9, "Cowboys", "Falcons?", "Rams");
	  football = new Team("Football Team", 9, "Chargers", "Giants!", "Bills?");
	
	  bears = new Team("Bears", 10, "Rams", "Bengals!", "Browns");
	  bengals = new Team("Bengals", 10, "Vikings", "Bears", "Steelers?");
	  texans = new Team("Texans", 10, "Jaguars!", "Browns", "Panthers");
	  giants = new Team("Giants", 10, "Broncos!", "Football Team", "Falcons?");
	
	  rams = new Team("Rams", 11, "Bears", "Colts?", "Buccaneers?");
	  broncos = new Team("Broncos", 11, "Giants!", "Jaguars!", "Jets!");
	
	  cardinals = new Team("Cardinals", 12, "Titans?", "Vikings", "Jaguars!");
	   chiefs = new Team("Chiefs", 12, "Browns", "Ravens?", "Chargers");
	
	  panthers = new Team("Panthers", 13, "Jets!", "Sas", "Texans!");
	  browns = new Team("Browns", 13, "Chiefs?", "Texans!", "Bears");
	  packers = new Team("Packers", 13, "Sas", "Lions!", "49ers!");
	  titans = new Team("Titans", 13, "Cardinals", "Seahawks?", "Colts?");
	
	  colts = new Team("Colts", 14, "Seahawks?", "Rams", "Titans?");
	  dolphins = new Team("Dolphins", 14, "Patriots!", "Bills?", "Raiders");
	  patriots = new Team("Patriots", 14, "Dolphins", "Jets!", "Sas");
	  eagles = new Team("Eagles", 14, "Falcons?", "49ers!", "Cowboys");
	
	 team = { rams, buccaneers, ravens, steelers, patriots, dolphins, bills, sas,
			giants, chiefs, colts, chargers, football, jaguars, niners, seahawks, eagles, jets,
			vikings, raiders, texans, packers, titans, lions, broncos, cowboys, browns, bengals, bears,
			panthers, falcons, cardinals };
	
	constructor( n,  pos,  rook,  no,  club,  adpIn,  tierIn) {
		name = n;
		position = pos; 
		rookie = rook;
		notes = no; 
		myteam = club;
		adp = adpIn; 
		tier = tierIn;
		
		for ( i = 0; i < team.length; i++) {
			if (team[i].getName().equals(club)) {
				bye = team[i].getBye();
			}
		}

		if (club.charAt(club.length()-1) == '!') {
			newTeam(club.sub(0, club.length()-1));
		}
		else {
		newTeam(club);
		}
	}
	
	 constructor( n,  b,  week1In,  week2In
			,  week3In,  adpIn) {
		notes = "";
		position = "DST";
		rookie = false;
		name = n;
		bye = b;
		week1 = week1In;
		week2 = week2In;
		week3 = week3In;
		adp = adpIn; 
	}
	
	 constructor( n,  pos,  rook,  no,  club,  adpIn,  tierIn,  draftedToIn) {
		name = n;
		position = pos; 
		rookie = rook;
		notes = no; 
		myteam = club;
		adp = adpIn; 
		tier = tierIn;
		draftedTo = draftedToIn; 
		
		for ( var i = 0; i < team.length; i++) {
			if (team[i].getName().equals(club)) {
				bye = team[i].getBye();
			}
		}

		if (club.charAt(club.length()-1) == '!') {
			newTeam(club.sub(0, club.length()-1));
		}
		else {
		newTeam(club);
		}
	}
	
	 constructor( n,  b,  week1In,  week2In
			,  week3In,  adpIn,  draftedToIn) {
		notes = "";
		position = "DST";
		rookie = false;
		name = n;
		bye = b;
		week1 = week1In;
		week2 = week2In;
		week3 = week3In;
		adp = adpIn; 
		draftedTo = draftedToIn; 
	}
	
	  getTier() {
		return tier; 
	}
	  getName() {
		return name;
	}
	
	  isRookie() {
		return rookie;
	}
	
	  getPosition() {
		return position;
	}
	
	  getNotes() {
		return notes;
	}
	
	  isDrafted() {
		return drafted;
	}
	
	  offTheBoard() {
		drafted = true; 
	}
	
	  setSpotDrafted( spot) {
		spotDrafted = spot; 
	}
	
	  getSpotDrafted() {
		return spotDrafted; 
	}

	  newTeam( club) {
		for ( i = 0; i < team.length; i++) {
			if (team[i].getName().equals(club)) {
			 
				if ("QB1".equals(position)) {
					team[i].addQb1(this);
				}
				else if ("QB2".equals(position)) {
					team[i].addQb2(this);
				}
				else if ("RB".equals(position)) {
					team[i].addRb(this);
				}
				else if ("WR".equals(position)) {
					team[i].addRec(this);
				}
				else if ("TE".equals(position)) {
					team[i].addRec(this);
				}
			}
		}
	}
	findTeamName( s) {
		for ( i = 0; i < team.length; i++) {
			if(team[i].getName().equals(s)) {
				return team[i];
			}
		}
		return null;
	}

	getTeam() {
		if (myteam.charAt(myteam.length()-1) == '!') {
			return findTeamName(myteam.sub(0, myteam.length()-1));
		}
		else {
		
		return findTeamName(myteam);
		}
	}
	
	  getTeamName() {
		return myteam;
	}
	
	  getMatchups() {
		return week1 + ", " + week2 + ", " + week3;
	}
	
	  getWeek1() {
		return week1;
	}
	
	  getWeek2() {
		return week2;
	}
	
	  getWeek3() {
		return week3;
	}
	
	  getAdp() {
		return adp; 
	}
	
	  getBye()  {
		return bye; 
	}
	
	  getDraftedTo() {
		return draftedTo;
	}
	
	compareToo(u) {
		 d2 = new (u.getAdp());
		 d1 = new (getAdp());
	    return d1.compareTo(d2);
	  }
	
}
