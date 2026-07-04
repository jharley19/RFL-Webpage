
	let players = [];
	let qbs = [];
	let rbs = [];
	let wrs = [];
	let tes = [];
	let flex = [];
	let dst = [];

	function initializePlayers() {
		fetch('./adp-data.json')
			.then(function(res) {
				if (!res.ok) throw new Error('Failed to load adp-data.json');
				return res.json();
			})
			.then(function(data) {
				if (!data || !Array.isArray(data.players)) return;
				data.players.forEach(function(p) {
					if (p.position === 'PK') return;
					var pos = p.position === 'DEF' ? 'DST' : p.position;
					var player = {
						name: p.name,
						pos: pos,
						team: p.team,
						adp: p.adp_formatted,
						bye: p.bye,
						draftedAt: 0.00
					};
					players.push(player);
					if (pos === 'QB') qbs.push(player);
					else if (pos === 'RB') { rbs.push(player); flex.push(player); }
					else if (pos === 'WR') { wrs.push(player); flex.push(player); }
					else if (pos === 'TE') { tes.push(player); flex.push(player); }
					else if (pos === 'DST') dst.push(player);
				});
				displayAll();
			})
			.catch(function(err) { console.error('Player load error:', err); });
	}


	
	let team1Picks = ['1.01','2.1','3.01','4.1','5.01','6.1','7.01','8.1','9.01','10.1','11.01','12.1','13.01','14.1','15.01'];
	let team2Picks = ['1.02','2.09','3.02','4.09','5.02','6.09','7.02','8.09','9.02','10.09','11.02','12.09','13.02','14.09','15.02'];
	let team3Picks = ['1.03','2.08','3.03','4.08','5.03','6.08','7.03','8.08','9.03','10.08','11.03','12.08','13.03','14.08','15.03'];
	let team4Picks = ['1.04','2.07','3.04','4.07','5.04','6.07','7.04','8.07','9.04','10.07','11.04','12.07','13.04','14.07','15.04'];
	let team5Picks = ['1.05','2.06','3.05','4.06','5.05','6.06','7.05','8.06','9.05','10.06','11.05','12.06','13.05','14.06','15.05'];
	let team6Picks = ['1.06','2.05','3.06','4.05','5.06','6.05','7.06','8.05','9.06','10.05','11.06','12.05','13.06','14.05','15.06'];
	let team7Picks = ['1.07','2.04','3.07','4.04','5.07','6.04','7.07','8.04','9.07','10.04','11.07','12.04','13.07','14.04','15.07'];
	let team8Picks = ['1.08','2.03','3.08','4.03','5.08','6.03','7.08','8.03','9.08','10.03','11.08','12.03','13.08','14.03','15.08'];
	let team9Picks = ['1.09','2.02','3.09','4.02','5.09','6.02','7.09','8.02','9.09','10.02','11.09','12.02','13.09','14.02','15.09'];
	let team10Picks = ['1.1','2.01','3.1','4.01','5.1','6.01','7.1','8.01','9.1','10.01','11.1','12.01','13.1','14.01','15.1'];

	let team1 = [];
	let team2 = [];
	let team3 = [];
	let team4 = [];
	let team5 = [];
	let team6 = [];
	let team7 = [];
	let team8 = [];
	let team9 = [];
	let team10 = [];

	let drafters = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10];
	let drafterPicks = [team1Picks, team2Picks, team3Picks, team4Picks, team5Picks, team6Picks, team7Picks, team8Picks, team9Picks, team10Picks];
	var myteam = "empty";
	var draftStarted = false;
	var myteamID;
	var currSpot; 
	var daCount;
	var teamIndex;
	var round = 1;

	var all = false;
	var qb = false;
	var rb = false;
	var wr = false;
	var te = false;
	var flexx = false;
	var dstt = false;

	var autoset = false;
	var autopickedteam = [];
	var currSpot = 'empty';




	function startFunction() {
		if (!draftStarted){
			
			document.getElementById("start").innerText = "Drafting...";
			draftStarted = true;
			currSpot = '1.01';
			daCount = 1;
			teamIndex = 1;
			
			drafting();
		}
	}

	function teamFunction(teamId){
		if (myteam === "empty" && draftStarted == false) {
			let newTeam = prompt("Please enter your team's name");
			if(newTeam != null){
				myteamID = teamId;
				let temp = document.getElementById(teamId).innerHTML.split(" ");
				myteam = temp[temp.length-1];
				document.getElementById(teamId).innerText = newTeam;
				document.getElementById(teamId).style.backgroundColor = 'darkgrey';
				displayRoster();
				chooseDisplay();
			}
		} else if (myteam !== "empty" && draftStarted == false){
			let newTeam = prompt("Please enter your team's name");
			if(newTeam != null){
				if (confirm("Are you sure you want to change teams?")) {
					document.getElementById(myteamID).innerText = myteamID	
					document.getElementById(myteamID).style.backgroundColor = '';
					myteamID = teamId;
					let temp = document.getElementById(teamId).innerHTML.split(" ");
					myteam = temp[temp.length-1];
					document.getElementById(teamId).innerText = newTeam;
					document.getElementById(teamId).style.backgroundColor = 'darkgrey';
					displayRoster();
					chooseDisplay();
				}
			}
		}
	}

	function posFunction(curr) {
		// if no player set yet
		
		if(curr != currSpot){
			if (document.getElementById(curr).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
				if(window.confirm("Are you sure you want to remove this player?")){
					document.getElementById(curr).style.backgroundColor = '';
					
					let removedName = document.getElementById(curr).value;
					var removedObj; 
					var teamNumber;
					
					
					if(team1.some(x=> x.name == removedName)){		
						removedObj = team1.find(x=> x.name == removedName);
						team1 = team1.filter( x => x.name != removedName);
						teamNumber = 1;
					} else if(team2.some(x=> x.name== removedName)){
						removedObj = team2.find(x => x.name == removedName);
						team2 = team2.filter( x => x.name != removedName);
						teamNumber = 2;
					} else if(team3.some(x=> x.name == removedName)){
						removedObj = team3.find(x => x.name == removedName);
						team3 = team3.filter( x => x.name != removedName);
						teamNumber = 3;
					} else if(team4.some(x=> x.name == removedName)){
						removedObj = team4.find(x => x.name == removedName);
						team4 = team4.filter( x => x.name != removedName);
						teamNumber = 4;
					} else if(team5.some(x=> x.name == removedName)){
						removedObj = team5.find(x => x.name == removedName);
						team5 = team5.filter( x => x.name != removedName);
						teamNumber = 5;
					} else if(team6.some(x=> x.name == removedName)){
						removedObj = team6.find(x => x.name == removedName);
						team6 = team6.filter( x => x.name != removedName);
						teamNumber = 6;
					} else if(team7.some(x=> x.name == removedName)){
						removedObj = team7.find(x => x.name == removedName);
						team7 = team7.filter( x => x.name != removedName);
						teamNumber = 7;
					} else if(team8.some(x=> x.name == removedName)){
						removedObj = team8.find(x => x.name == removedName);
						team8 = team8.filter( x => x.name != removedName);
						teamNumber = 8;
					} else if(team9.some(x=> x.name == removedName)){
						removedObj = team9.find(x => x.name == removedName);
						team9 = team9.filter( x => x.name != removedName);
						teamNumber = 9;
					} else if(team10.some(x=> x.name == removedName)){
						removedObj = team10.find(x => x.name == removedName);
						team10 = team10.filter( x => x.name != removedName);
						teamNumber = 10;
					} 
				
					if (!removedObj) return;
					if (removedObj.pos == "QB"){
						players.push(removedObj);
						qbs.push(removedObj);
					} else if (removedObj.pos == "RB"){
						players.push(removedObj);
						rbs.push(removedObj);
						flex.push(removedObj);
					} else if (removedObj.pos == "WR"){
						players.push(removedObj);
						wrs.push(removedObj);
						flex.push(removedObj);
					} else if (removedObj.pos == "TE"){
						players.push(removedObj);
						tes.push(removedObj);
						flex.push(removedObj);
					} else if (removedObj.pos == "DST"){
						players.push(removedObj);
						dst.push(removedObj);
						flex.push(removedObj);
					}

					if(teamNumber == myteam){
						//removedObj = team10.find(x => x.name == removedName);
						drafters[myteam-1] = drafters[myteam-1].filter( x => x.name != removedName);
					}
					

					document.getElementById(curr).innerText = removedObj.draftedAt;
					document.getElementById(curr).value = removedObj.draftedAt;
					sortPlayers();
					displayRoster();
					chooseDisplay();
					
				}
			} else {
				if(window.confirm("Select a Player to be drafted at this spot below.")){
					autoset = true; 
					autocurrspot = curr;
					
					
					
				
				}
			}
		}
	}

	
	function displayRoster(){
		
		var curr;
		var rosta;
		var myqbs
		var myrbs;
		var mywrs;
		var mytes;		
		var mydst;
		if(myteam != "empty"){	
			curr = drafters[myteam-1];
			rosta = "<table><tr><th>Position</th><th>Name</th><th>Team</th><th>Bye</th></tr>";
			curr = curr.sort(function(a, b){return a.draftedAt - b.draftedAt});
			myqbs = curr.filter(x => x.pos == "QB");
			myrbs = curr.filter(x => x.pos == "RB");
			mywrs = curr.filter(x => x.pos == "WR");
			mytes = curr.filter(x => x.pos == "TE");		
			mydst = curr.filter(x => x.pos == "DST");
		} else {
			rosta = "<table><tr><th>Position</th><th>Name</th><th>Team</th><th>Bye</th></tr>";
			myqbs = [];
			myrbs = [];
			mywrs = [];
			mytes = [];		
			mydst = [];
		}
			if(myqbs.length > 0){
				rosta += '<tr><td>QB</td><td>' + myqbs[0].name + '</td><td>' + myqbs[0].team + '</td><td>' + myqbs[0].bye +'</td></tr>';
				myqbs.shift();
			} else {
				rosta += '<tr><td>QB</td><td></td><td></td><td></td></tr>';
			} if(myrbs.length > 1){
				rosta += '<tr><td>RB</td><td>' + myrbs[0].name + '</td><td>' + myrbs[0].team + '</td><td>' + myrbs[0].bye +'</td></tr>';
				rosta += '<tr><td>RB</td><td>' + myrbs[1].name + '</td><td>' + myrbs[1].team + '</td><td>' + myrbs[1].bye +'</td></tr>';
				myrbs.shift();
				myrbs.shift();
			} else if (myrbs.length == 1){
				rosta += '<tr><td>RB</td><td>' + myrbs[0].name + '</td><td>' + myrbs[0].team + '</td><td>' + myrbs[0].bye +'</td></tr>';
				rosta += '<tr><td>RB</td><td></td><td></td><td></td></tr>';
				myrbs.shift();
			} else {
				rosta += '<tr><td>RB</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>RB</td><td></td><td></td><td></td></tr>';
			} if(mywrs.length > 1){
				rosta += '<tr><td>WR</td><td>' + mywrs[0].name + '</td><td>' + mywrs[0].team + '</td><td>' + mywrs[0].bye +'</td></tr>';
				rosta += '<tr><td>WR</td><td>' + mywrs[1].name + '</td><td>' + mywrs[1].team + '</td><td>' + mywrs[1].bye +'</td></tr>';
				mywrs.shift();
				mywrs.shift();
			} else if (mywrs.length == 1){
				rosta += '<tr><td>WR</td><td>' + mywrs[0].name + '</td><td>' + mywrs[0].team + '</td><td>' + mywrs[0].bye +'</td></tr>';
				rosta += '<tr><td>WR</td><td></td><td></td><td></td></tr>';
				mywrs.shift();
			} else {
				rosta += '<tr><td>WR</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>WR</td><td></td><td></td><td></td></tr>';
			} if(mytes.length > 0){
				rosta += '<tr><td>TE</td><td>' + mytes[0].name + '</td><td>' + mytes[0].team + '</td><td>' + mytes[0].bye +'</td></tr>';
				mytes.shift();
			} else {
				rosta += '<tr><td>TE</td><td></td><td></td><td></td></tr>';
			}
			let myfle = myrbs.concat(mywrs);
			let myflex = myfle.concat(mytes);
			if(myflex.length > 1){
				let f1 = curr.find(x => myflex.includes(x));
				let tempCurr = curr.filter(x => x !== f1);
				let f2 = tempCurr.find(x => myflex.includes(x));
				rosta += '<tr><td>FLEX</td><td>' + f1.name + '</td><td>' + f1.team + '</td><td>' + f1.bye +'</td></tr>';
				rosta += '<tr><td>FLEX</td><td>' + f2.name + '</td><td>' + f2.team + '</td><td>' + f2.bye +'</td></tr>';
				myflex = myflex.filter(x => x !== f1);
				myflex = myflex.filter(x => x !== f2);

			} else if (myflex.length == 1){
				rosta += '<tr><td>FLEX</td><td>' + myflex[0].name + '</td><td>' + myflex[0].team + '</td><td>' + myflex[0].bye +'</td></tr>';
				rosta += '<tr><td>FLEX</td><td></td><td></td><td></td></tr>';
				myflex.shift();
			} else {
				rosta += '<tr><td>FLEX</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>FLEX</td><td></td><td></td><td></td></tr>';
			} if(mydst.length > 0){
				rosta += '<tr><td>DST</td><td>' + mydst[0].name + '</td><td>' + mydst[0].team + '</td><td>' + mydst[0].bye +'</td></tr>';
				mydst.shift();
			} else {
				rosta += '<tr><td>DST</td><td></td><td></td><td></td></tr>';
			}
			let mya = myqbs.concat(myflex);
			let myall = mya.concat(mydst);



			if(myall.length >= 6){
				for(let i = 0; i < myall.length; i+=1){
					rosta += '<tr><td>BENCH</td><td>' + myall[i].name + '</td><td>' + myall[i].team + '</td><td>' + myall[i].bye +'</td></tr>';
				}			
			} else if (myall.length == 5){
				rosta += '<tr><td>BENCH</td><td>' + myall[0].name + '</td><td>' + myall[0].team + '</td><td>' + myall[0].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[1].name + '</td><td>' + myall[1].team + '</td><td>' + myall[1].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[2].name + '</td><td>' + myall[2].team + '</td><td>' + myall[2].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[3].name + '</td><td>' + myall[3].team + '</td><td>' + myall[3].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[4].name + '</td><td>' + myall[4].team + '</td><td>' + myall[4].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
			} else if (myall.length == 4){
				rosta += '<tr><td>BENCH</td><td>' + myall[0].name + '</td><td>' + myall[0].team + '</td><td>' + myall[0].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[1].name + '</td><td>' + myall[1].team + '</td><td>' + myall[1].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[2].name + '</td><td>' + myall[2].team + '</td><td>' + myall[2].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[3].name + '</td><td>' + myall[3].team + '</td><td>' + myall[3].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
			} else if (myall.length == 3){
				rosta += '<tr><td>BENCH</td><td>' + myall[0].name + '</td><td>' + myall[0].team + '</td><td>' + myall[0].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[1].name + '</td><td>' + myall[1].team + '</td><td>' + myall[1].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[2].name + '</td><td>' + myall[2].team + '</td><td>' + myall[2].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
			} else if (myall.length == 2){
				rosta += '<tr><td>BENCH</td><td>' + myall[0].name + '</td><td>' + myall[0].team + '</td><td>' + myall[0].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td>' + myall[1].name + '</td><td>' + myall[1].team + '</td><td>' + myall[1].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
			} else if (myall.length == 1){
				rosta += '<tr><td>BENCH</td><td>' + myall[0].name + '</td><td>' + myall[0].team + '</td><td>' + myall[0].bye +'</td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
			} else {
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
				rosta += '<tr><td>BENCH</td><td></td><td></td><td></td></tr>';
			}

			rosta += "</table>";
			document.getElementById("roster").innerHTML =  rosta;
		
	}

	function displayAll() {
		

		if(!draftStarted){
			sortPlayers();
		}
		let select = "<button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		select += "<button id='dst' onclick='displayDST()'>DST</button><br/><select size = 6 name = 'players' id='select'>";
		if(myteam == "empty"){
			players.forEach( x => select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>');
		}
		else{
		var qbTeams = [];
		var rbTeams = [];
		var recTeams = [];

		drafters[myteam-1].forEach(makeArrays)
			
		function makeArrays(p){
			if(p.pos == "QB"){
				qbTeams.push(p.team);
			} else if(p.pos == "RB"){
				rbTeams.push(p.team);
			} else if(p.pos == "TE" || p.pos == "WR"){
				recTeams.push(p.team);
			}
		}

		players.forEach(stackDetector);
		function stackDetector(x){
			if(x.pos == "QB" && recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK </option>';
			} else if (x.pos == "RB" && rbTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' HANDCUFF </option>';
			} else if( (x.pos == "WR" || x.pos == "TE") && qbTeams.some(r => r == x.team) && recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK but CROWDED</option>';
			} else if( (x.pos == "WR" || x.pos == "TE") && qbTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK</option>';
			} else if( (x.pos == "WR" || x.pos == "TE") && recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' CROWDED</option>';
			} else {
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>';
			}
		}
	}
		select += "</select> <br/> <button id='draft' onclick='playerDrafted()'>Draft</button>";
		document.getElementById("playerList").innerHTML =  select;

		displayRoster();
		
		
		// let select = "<table><tr><td><button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		// select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		// select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		// select += "<button id='dst' onclick='displayDST()'>DST</button></td></tr><tr><td><select size = 6 name = 'players' id='select'>";
		// players.forEach( x=> select += '<option value="'+x.name+'"> '+x.adp+'   -   '+x.name+'   -  '+x.pos+' -  '+x.team+'</option>');
		// select += "</select></td><td><table class='roster'><tr><td>Position</td><td>Name</td><td>Round Seleif(draftStarted){cted</td></tr></table></td></tr><tr><td><button id='draft' onclick='playerDrafted()'>Draft</button></td></tr></table>";
		// document.getElementById("playerList").innerHTML =  select;

		resetColor();
		document.getElementById('all').style.backgroundColor = 'darkgrey';
		all = true;
		qb = false;
		rb = false;
		wr = false;
		te = false;
		flexx = false;
		dstt = false;
	  }

	  function displayQB() {
		let select = "<button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		select += "<button id='dst' onclick='displayDST()'>DST</button><br/><select size = 6 name = 'players' id='select'>";
		
		if( myteam == "empty"){
			qbs.forEach( x => select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>');
		}
		else{
		var recTeams = [];

		drafters[myteam-1].forEach(makeArrays)
			
		function makeArrays(p){
			if(p.pos == "TE" || p.pos == "WR"){
				recTeams.push(p.team);
			}
		}

		qbs.forEach(stackDetector);
		function stackDetector(x){
			if(recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK </option>';
			} else {
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>';
			}
		}
	}

		select += "</select> <br/> <button id='draft' onclick='playerDrafted()'>Draft</button>";
		document.getElementById("playerList").innerHTML =  select;
		displayRoster();
		resetColor();
		document.getElementById('qb').style.backgroundColor = 'darkgrey';
		all = false;
		qb = true;
		rb = false;
		wr = false;
		te = false;
		flexx = false;
		dstt = false;
		
	  }

	  function displayRB() {
		let select = "<button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		select += "<button id='dst' onclick='displayDST()'>DST</button><br/><select size = 6 name = 'players' id='select'>";
		
		if(myteam == "empty"){
			rbs.forEach( x => select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>');
		}
		else {
		var rbTeams = [];

		drafters[myteam-1].forEach(makeArrays)
			
		function makeArrays(p){
			if(p.pos == "RB"){
				rbTeams.push(p.team);
			} 
		}

		rbs.forEach(stackDetector);
		function stackDetector(x){
			if (rbTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' HANDCUFF </option>';
			} else {
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>';
			}
		}
	}

		select += "</select> <br/> <button id='draft' onclick='playerDrafted()'>Draft</button>";
		document.getElementById("playerList").innerHTML =  select;
		displayRoster();
		resetColor();
		document.getElementById('rb').style.backgroundColor = 'darkgrey';
		all = false;
		qb = false;
		rb = true;
		wr = false;
		te = false;
		flexx = false;
		dstt = false;
		
	  }

	  function displayWR() {
		let select = "<button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		select += "<button id='dst' onclick='displayDST()'>DST</button><br/><select size = 6 name = 'players' id='select'>";
		
		if(myteam == "empty"){
			wrs.forEach( x => select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>');
		}
		else{
		var qbTeams = [];
		var recTeams = [];

		drafters[myteam-1].forEach(makeArrays)
			
		function makeArrays(p){
			if(p.pos == "QB"){
				qbTeams.push(p.team);
			} else if(p.pos == "TE" || p.pos == "WR"){
				recTeams.push(p.team);
			}
		}

		wrs.forEach(stackDetector);
		function stackDetector(x){
			if(qbTeams.some(r => r == x.team) && recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK but CROWDED</option>';
			} else if( qbTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK</option>';
			} else if( recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' CROWDED</option>';
			} else {
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>';
			}
		}
	}

		select += "</select> <br/> <button id='draft' onclick='playerDrafted()'>Draft</button>";
		document.getElementById("playerList").innerHTML =  select;
		displayRoster();
		resetColor();
		document.getElementById('wr').style.backgroundColor = 'darkgrey';
		all = false;
		qb = false;
		rb = false;
		wr = true;
		te = false;
		flexx = false;
		dstt = false;
		
	  }

	  function displayTE() {
		let select = "<button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		select += "<button id='dst' onclick='displayDST()'>DST</button><br/><select size = 6 name = 'players' id='select'>";
		
		if(myteam == "empty"){
			tes.forEach( x => select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>');
		}
		else{
		var qbTeams = [];
		var recTeams = [];

		drafters[myteam-1].forEach(makeArrays)
			
		function makeArrays(p){
			if(p.pos == "QB"){
				qbTeams.push(p.team);
			} else if(p.pos == "TE" || p.pos == "WR"){
				recTeams.push(p.team);
			}
		}

		tes.forEach(stackDetector);
		function stackDetector(x){
			if(qbTeams.some(r => r == x.team) && recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK but CROWDED</option>';
			} else if( qbTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK</option>';
			} else if( recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' CROWDED</option>';
			} else {
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>';
			}
		}
	}

		select += "</select> <br/> <button id='draft' onclick='playerDrafted()'>Draft</button>";
		document.getElementById("playerList").innerHTML =  select;
		displayRoster();
		resetColor();
		document.getElementById('te').style.backgroundColor = 'darkgrey';
		all = false;
		qb = false;
		rb = false;
		wr = false;
		te = true;
		flexx = false;
		dstt = false;
		
	  }

	  function displayFLEX() {
		let select = "<button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		select += "<button id='dst' onclick='displayDST()'>DST</button><br/><select size = 6 name = 'players' id='select'>";
		if(myteam == "empty"){
			flex.forEach( x => select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>');
		}
		else{
		var qbTeams = [];
		var rbTeams = [];
		var recTeams = [];

		drafters[myteam-1].forEach(makeArrays)
			
		function makeArrays(p){
			if(p.pos == "QB"){
				qbTeams.push(p.team);
			} else if(p.pos == "RB"){
				rbTeams.push(p.team);
			} else if(p.pos == "TE" || p.pos == "WR"){
				recTeams.push(p.team);
			}
		}

		flex.forEach(stackDetector);
		function stackDetector(x){
			if (x.pos == "RB" && rbTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' HANDCUFF </option>';
			} else if( (x.pos == "WR" || x.pos == "TE") && qbTeams.some(r => r == x.team) && recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK but CROWDED</option>';
			} else if( (x.pos == "WR" || x.pos == "TE") && qbTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' STACK</option>';
			} else if( (x.pos == "WR" || x.pos == "TE") && recTeams.some(r => r == x.team)){
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+' CROWDED</option>';
			} else {
				select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>';
			}
		}
	}
		select += "</select> <br/> <button id='draft' onclick='playerDrafted()'>Draft</button>";
		document.getElementById("playerList").innerHTML =  select;
		displayRoster();
		resetColor();
		document.getElementById('flex').style.backgroundColor = 'darkgrey';
		all = false;
		qb = false;
		rb = false;
		wr = false;
		te = false;
		flexx = true;
		dstt = false;
		
	  }

	  function displayDST() {
		let select = "<button id='all' onclick='displayAll()'>ALL</button><button id='qb' onclick='displayQB()'>QB</button>";
		select += "<button id='rb' onclick='displayRB()'>RB</button><button id='wr' onclick='displayWR()'>WR</button>";
		select += "<button id='te' onclick='displayTE()'>TE</button><button id='flex' onclick='displayFLEX()'>FLEX</button>";
		select += "<button id='dst' onclick='displayDST()'>DST</button><br/><select size = 6 name = 'players' id='select'>";
		dst.forEach( x=> select += '<option value="'+x.name+'"> '+x.adp+' - '+x.name+' - '+x.pos+' - '+x.team+' - Bye '+x.bye+'</option>');
		select += "</select> <br/> <button id='draft' onclick='playerDrafted()'>Draft</button>";
		document.getElementById("playerList").innerHTML =  select;
		displayRoster();
		resetColor();
		document.getElementById('dst').style.backgroundColor = 'darkgrey';
		all = false;
		qb = false;
		rb = false;
		wr = false;
		te = false;
		flexx = false;
		dstt = true;
		
	  }

	  function chooseDisplay(){
		  if(all){
			  displayAll();
		  } else if (qb){
			  displayQB();
		  } else if (rb){
			  displayRB();
		  } else if (wr){
			  displayWR();
		  } else if(te){
			  displayTE();
		  } else if (flexx){
			  displayFLEX();
		  } else if (dstt){
			  displayDST();
		  } 
	  }

	  function resetColor(){
		if(all){
			document.getElementById('all').style.backgroundColor = '';
		} else if (qb){
			document.getElementById('qb').style.backgroundColor = '';
		} else if (rb){
			document.getElementById('rb').style.backgroundColor = '';
		} else if (wr){
			document.getElementById('wr').style.backgroundColor = '';
		} else if(te){
			document.getElementById('te').style.backgroundColor = '';
		} else if (flexx){
			document.getElementById('flex').style.backgroundColor = '';
		} else if (dstt){
			document.getElementById('dst').style.backgroundColor = '';
		} 
	}
	  

	  function playerDrafted(){
			
			if(draftStarted || autoset){
				let e = document.getElementById('select');
				let pd = e.options[e.selectedIndex].text;
				let arr = pd.split(" - ");
				let draftedPlayer = arr[1];
				
				
				let picked = players.find( x => x.name == draftedPlayer);

				if(autoset){
					picked.draftedAt = autocurrspot;
					
					if(draftStarted){
						if(drafterPicks[myteam-1].some(x=> x == autocurrspot)){
							drafters[myteam-1].push(picked);
							displayRoster();
						}
					}
					else if(team1Picks.some(x=> x  == autocurrspot)){
						team1.push(picked);
					} else if(team2Picks.some(x=> x == autocurrspot)){
						team2.push(picked);
					} else if(team3Picks.some(x=> x == autocurrspot)){
						team3.push(picked);
					} else if(team4Picks.some(x=> x == autocurrspot)){
						team4.push(picked);
					} else if(team5Picks.some(x=> x == autocurrspot)){
						team5.push(picked);
					} else if(team6Picks.some(x=> x== autocurrspot)){
						team6.push(picked);
					} else if(team7Picks.some(x=> x== autocurrspot)){
						team7.push(picked);
					} else if(team8Picks.some(x=> x== autocurrspot)){
						team8.push(picked);
					} else if(team9Picks.some(x=> x== autocurrspot)){
						team9.push(picked);
					} else if(team10Picks.some(x=> x== autocurrspot)){
						team10.push(picked);
					} 

					
					
					document.getElementById(autocurrspot).innerHTML =  draftedPlayer;
					document.getElementById(autocurrspot).value =  draftedPlayer;
					if(picked.pos == "QB"){
						document.getElementById(autocurrspot).style.backgroundColor = 'pink';
					} else if (picked.pos == "RB"){
						document.getElementById(autocurrspot).style.backgroundColor = 'lightgreen';
					}else if (picked.pos == "WR"){
						document.getElementById(autocurrspot).style.backgroundColor = 'lightblue';
					} else if (picked.pos == "TE"){
						document.getElementById(autocurrspot).style.backgroundColor = 'orange';
					} else if (picked.pos == "DST"){
						document.getElementById(autocurrspot).style.backgroundColor = 'brown';
					}
				} else {
					picked.draftedAt = currSpot;
					
					drafters[myteam-1].push(picked);
					document.getElementById(currSpot).innerHTML =  draftedPlayer;
					document.getElementById(currSpot).value =  draftedPlayer;
					if(picked.pos == "QB"){
						document.getElementById(currSpot).style.backgroundColor = 'pink';
					} else if (picked.pos == "RB"){
						document.getElementById(currSpot).style.backgroundColor = 'lightgreen';
					}else if (picked.pos == "WR"){
						document.getElementById(currSpot).style.backgroundColor = 'lightblue';
					} else if (picked.pos == "TE"){
						document.getElementById(currSpot).style.backgroundColor = 'orange';
					} else if (picked.pos == "DST"){
						document.getElementById(currSpot).style.backgroundColor = 'brown';
					}
				}
				
				players = players.filter( x => x.name != draftedPlayer);
				qbs = qbs.filter( x => x.name != draftedPlayer);
				rbs = rbs.filter( x => x.name != draftedPlayer);
				wrs = wrs.filter( x => x.name != draftedPlayer);
				tes = tes.filter( x => x.name != draftedPlayer);
				flex = flex.filter( x => x.name != draftedPlayer);
				dst = dst.filter( x => x.name != draftedPlayer);

				if(autoset == false){
					if (round % 2 == 0 && teamIndex == 1) {
								teamIndex = 1;
								round+=1;
								currSpot = String(round) + ".01";
					} else if (teamIndex == 1) {
								teamIndex = 2;
								currSpot = String(round) + ".02";
					} else if (round % 2 == 0 && teamIndex == 2) {
								teamIndex-=1;
								currSpot = String(round) + ".10";
					} else if (teamIndex == 2) {
								teamIndex+=1;
								currSpot = String(round) + ".03";
					} else if (round % 2 == 0 && teamIndex == 3) {
								teamIndex-=1;
								currSpot = String(round) + ".09";
					} else if (teamIndex == 3) {
								teamIndex+=1;
								currSpot = String(round) + ".04";
					} else if (round % 2 == 0 && teamIndex == 4) {
								teamIndex-=1;
								currSpot = String(round) + ".08";
					} else if(teamIndex == 4) {
								teamIndex+=1;
								currSpot = String(round) + ".05";
					} else if (round % 2 == 0 && teamIndex == 5) {
								teamIndex-=1;
								currSpot = String(round) + ".07";
					} else if (teamIndex == 5) {
								teamIndex+=1;
								currSpot = String(round) + ".06";
					} else if (round % 2 == 0 && teamIndex == 6) {
								teamIndex-=1;
								currSpot = String(round) + ".06";
					} else if (teamIndex == 6) {
								teamIndex+=1;
								currSpot = String(round) + ".07";
					} else if (round % 2 == 0 && teamIndex == 7) {
								teamIndex-=1;
								currSpot = String(round) + ".05";
					} else if (teamIndex == 7) {
								teamIndex+=1;
								currSpot = String(round) + ".08";
					} else if (round % 2 == 0 && teamIndex == 8) {
								teamIndex-=1;
								currSpot = String(round) + ".04";
					} else if (teamIndex == 8) {
								teamIndex+=1;
								currSpot = String(round) + ".09";
					} else if (round % 2 == 0 && teamIndex == 9) {
								teamIndex-=1;
								currSpot = String(round) + ".03";
					} else if (teamIndex == 9) {
								teamIndex+=1;
								currSpot = String(round) + ".10";
					} else if (round % 2 == 0 && teamIndex == 10) {
								teamIndex-=1;
								currSpot = String(round) + ".02";
					} else if (teamIndex == 10) {
								teamIndex = 10;
								if (round != 15) {
									round+=1;
									currSpot = String(round) + ".10";
								} 
					}
					chooseDisplay();
					drafting();
				} else {
					autoset =false;
					
					chooseDisplay();
				}
			}
	  }

	  function drafting(){

			while (daCount <= 150) {
				// teamIndex tracks which team is currently up, if it's 1 than team 1 is up
				
				if (teamIndex == 1 && myteam != '1') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 2;
						currSpot = String(round) + ".02";
					} else {
						// round keeps track of the current round of the draft we are in
						round+=1;
						currSpot = String(round) + ".01";
					}
					daCount+=1;
				} else if (teamIndex == 1 && myteam == '1') {
					daCount+=1;
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 2;
							currSpot = String(round) + ".02";
						} else {
							// round keeps track of the current round of the draft we are in
							round+=1;
							currSpot = String(round) + ".01";
						}
					}
					
					// if the current team is claimed and does not have someone drafted
					// at this spot yet, then break the loop to allow the team to make their pick.	
					
				} else if (teamIndex == 2 && myteam != '2') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 3;
						currSpot = String(round) + ".03";
					} else {
						teamIndex = 1;
						currSpot = String(round) + ".10";
					}
					daCount+=1;
				} else if (teamIndex == 2 && myteam == '2') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 3;
							currSpot = String(round) + ".03";
						} else {
							teamIndex = 1;
							currSpot = String(round) + ".10";
						}
					}
					
					
				} else if (teamIndex == 3 && myteam != '3') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 4;
						currSpot = String(round) + ".04";
					} else {
						teamIndex = 2;
						currSpot = String(round) + ".09";
					}
					daCount+=1;
				} else if (teamIndex == 3 && myteam == '3') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 4;
							currSpot = String(round) + ".04";
						} else {
							teamIndex = 2;
							currSpot = String(round) + ".09";
						}
					}
					
				} else if (teamIndex == 4 && myteam != '4') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 5;
						currSpot = String(round) + ".05";
					} else {
						teamIndex = 3;
						currSpot = String(round) + ".08";
					}
					daCount+=1;
				} else if (teamIndex == 4 && myteam == '4') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 5;
							currSpot = String(round) + ".05";
						} else {
							teamIndex = 3;
							currSpot = String(round) + ".08";
						}
					}
	
				} else if (teamIndex == 5 && myteam != '5') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 6;
						currSpot = String(round) + ".06";
					} else {
						teamIndex = 4;
						currSpot = String(round) + ".07";
					}
					daCount+=1;
				} else if (teamIndex == 5 && myteam == '5') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 6;
							currSpot = String(round) + ".06";
						} else {
							teamIndex = 4;
							currSpot = String(round) + ".07";
						}
					}
			
				} else if (teamIndex == 6 && myteam != '6') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 7;
						currSpot = String(round) + ".07";
					} else {
						teamIndex = 5;
						currSpot = String(round) + ".06";
					}
					daCount+=1;
				} else if (teamIndex == 6 && myteam == '6') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 7;
							currSpot = String(round) + ".07";
						} else {
							teamIndex = 5;
							currSpot = String(round) + ".06";
						}
					}
					
				} else if (teamIndex == 7 && myteam != '7') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 8;
						currSpot = String(round) + ".08";
					} else {
						teamIndex = 6;
						currSpot = String(round) + ".05";
					}
					daCount+=1;
				} else if (teamIndex == 7 && myteam == '7') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 8;
							currSpot = String(round) + ".08";
						} else {
							teamIndex = 6;
							currSpot = String(round) + ".05";
						}
					}
			
				} else if (teamIndex == 8 && myteam != '8') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 9;
						currSpot = String(round) + ".09";
					} else {
						teamIndex = 7;
						currSpot = String(round) + ".04";
					}
					daCount+=1;
				} else if (teamIndex == 8 && myteam == '8') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 9;
							currSpot = String(round) + ".09";
						} else {
							teamIndex = 7;
							currSpot = String(round) + ".04";
						}
					}
					
				}else if (teamIndex == 9 && myteam != '9') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					if (round % 2 == 1) {
						teamIndex = 10;
						currSpot = String(round) + ".10";
					} else {
						teamIndex = 8;
						currSpot = String(round) + ".03";
					}
					daCount+=1;
				} else if (teamIndex == 9 && myteam == '9') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (round % 2 == 1) {
							teamIndex = 10;
							currSpot = String(round) + ".10";
						} else {
							teamIndex = 8;
							currSpot = String(round) + ".03";
						}
					}
					
				}else if (teamIndex == 10 && myteam != '10') {
					if(!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")){
						randomSelect();
					}
					
					if (Number(round) == 15){
						chooseDisplay();
						break;
					}
					if (round % 2 == 0) {
						teamIndex = 9;
						currSpot = String(round) + ".02";
					} else {
						round+=1;
						currSpot = String(round) + ".01";
					} 
					daCount+=1;
				} else if (teamIndex == 10 && myteam == '10') {
					daCount+=1;
					
					if (!document.getElementById(currSpot).value.match("[a-zA-Z-.]+ [a-zA-Z-]+")) {
						chooseDisplay();
						break;
					} else {
						if (Number(round) == 15){
							chooseDisplay();
							break;
						}
						if (round % 2 == 0) {
							teamIndex = 9;
							currSpot = String(round) + ".02";
						} else {
							round+=1;
							currSpot = String(round) + ".01";
						} 
					}
					
				}
			}
	  }

	  function randomSelect(){
			
		let value = Math.floor(Math.random() * 5);
		let qbb = false;
		let currTeam = drafters[teamIndex-1];
		let temp = [null,null,null,null,null];

		if (currTeam.length == 12 && enoughDst(currTeam) == false && enoughQbs(currTeam) == false && enoughTes(currTeam)== false) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos == "QB" || players[i].pos == "TE" || players[i].pos == "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
			
		} else if (currTeam.length == 13 && enoughDst(currTeam) == false && enoughQbs(currTeam)== false) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos == "QB" ||  players[i].pos == "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
			
		} else if (currTeam.length == 13 && enoughDst(currTeam) == false && enoughTes(currTeam) == false) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos == "TE" || players[i].pos == "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
			
		} else if (currTeam.length == 13 && enoughQbs(currTeam) == false && enoughTes(currTeam) == false) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos == "QB" || players[i].pos == "TE") {
					temp[five] = players[i];
					five+=1;
				}
			}
			
		} else if (currTeam.length == 14 && enoughDst(currTeam) == false) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos == "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
			
		} else if (currTeam.length == 14 && enoughQbs(currTeam) == false) {
		
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos == "QB") {
					temp[five] = players[i];
					five+=1;
				}
			}
			
		} else if (currTeam.length == 14 && enoughTes(currTeam) == false) {

			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos == "TE") {
					temp[five] = players[i];
					five+=1;
				}
			}
			
		} else if (enoughQbs(currTeam) && enoughTes(currTeam) && enoughDst(currTeam)) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos != "QB" && players[i].pos != "TE" && players[i].pos != "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
		} else if (enoughQbs(currTeam) && enoughTes(currTeam)) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos != "QB" && players[i].pos != "TE") {
					temp[five] = players[i];
					five+=1;
				}
			}
		} else if (enoughQbs(currTeam) && enoughDst(currTeam)) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos != "QB" && players[i].pos != "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
		} else if (enoughTes(currTeam) && enoughDst(currTeam)) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos != "TE" && players[i].pos != "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
		} else if (enoughQbs(currTeam)) {
			let five = 0;
			
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos != 'QB') {
					
					temp[five] = players[i];
					five+=1;
				}
			}
			
			
		} else if (enoughTes(currTeam)) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos != "TE") {
					temp[five] = players[i];
					five+=1;
				}
			}
		} else if (enoughDst(currTeam)) {
			let five = 0;
			for (let i = 0; five < 5; i+=1) {
				if (players[i].pos != "DST") {
					temp[five] = players[i];
					five+=1;
				}
			}
		} else {
			
			let five = 0;
			for (let i = 0; five < 5; i+=1) {	
				temp[five] = players[i];
				five+=1;
			}
			
		}
		
		
		let selected = temp[value] || temp.find(function(x){ return x !== null; });
		if (!selected) return;
		selected.draftedAt = currSpot;
		currTeam.push(selected);
		let draftedPlayer = selected.name;
		document.getElementById(currSpot).innerHTML =  draftedPlayer;
		document.getElementById(currSpot).value =  draftedPlayer;
		if(selected.pos == "QB"){
				document.getElementById(currSpot).style.backgroundColor = 'pink';
			} else if (selected.pos == "RB"){
				document.getElementById(currSpot).style.backgroundColor = 'lightgreen';
			}else if (selected.pos == "WR"){
				document.getElementById(currSpot).style.backgroundColor = 'lightblue';
			} else if (selected.pos == "TE"){
				document.getElementById(currSpot).style.backgroundColor = 'orange';
			} else if (selected.pos == "DST"){
				document.getElementById(currSpot).style.backgroundColor = 'brown';
			}
			
		players = players.filter( x => x.name != draftedPlayer);
		qbs = qbs.filter( x => x.name != draftedPlayer);
		rbs = rbs.filter( x => x.name != draftedPlayer);
		wrs = wrs.filter( x => x.name != draftedPlayer);
		tes = tes.filter( x => x.name != draftedPlayer);
		flex = flex.filter( x => x.name != draftedPlayer);
		dst = dst.filter( x => x.name != draftedPlayer);
	  }

	  function enoughQbs(currTeam){
		let myQbs = currTeam.filter(x => x.pos == "QB");
		return myQbs.length >= 2;
	  }

	  function enoughTes(currTeam){
		let myTes = currTeam.filter(x => x.pos == "TE");
		return myTes.length >= 2;
	  }

	  function enoughDst(currTeam){
		let myDst = currTeam.filter(x => x.pos == "DST");
		return myDst.length >= 1;
	  }


		function sortPlayers(){
			players.sort(function(a, b){return parseFloat(a.adp||999) - parseFloat(b.adp||999)});
			qbs.sort(function(a, b){return parseFloat(a.adp||999) - parseFloat(b.adp||999)});
			rbs.sort(function(a, b){return parseFloat(a.adp||999) - parseFloat(b.adp||999)});
			wrs.sort(function(a, b){return parseFloat(a.adp||999) - parseFloat(b.adp||999)});
			tes.sort(function(a, b){return parseFloat(a.adp||999) - parseFloat(b.adp||999)});
			flex.sort(function(a, b){return parseFloat(a.adp||999) - parseFloat(b.adp||999)});
			dst.sort(function(a, b){return a.adp - b.adp});
		}
		

	  
