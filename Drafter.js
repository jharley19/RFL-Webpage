
class Drafter {
	teamButton;
	name;
	qbs;
	rbs;
	wrs;
	tes;
	flex;
	all;
	dst;

	claim;

	drafted;
	draftedQb;
	draftedRb;
	draftedWr;
	draftedTe;
	draftedDst;

	qbStack;
	recStack;
	handcuff;
	multRec;

	constructor(teamIn, nameIn, qbsIn, rbsIn, wrsIn, tesIn,
		flexIn, allIn, dstIn) {
		teamButton = teamIn;
		name = nameIn;
		qbs = qbsIn;
		rbs = rbsIn;
		wrs = wrsIn;
		tes = tesIn;
		flex = flexIn;
		dst = dstIn;
		all = allIn;
		qbStack = [];
		recStack = [];
		handcuff = [];
		multRec = [];
		drafted = [];
		draftedQb = [];
		draftedRb = [];
		draftedWr = [];
		draftedTe = [];
		draftedDst = [];
		claim = false;
	}

	addButton(butt) {
		teamButton.push(butt);
	}

	getButton(round) {
		return teamButton[round];
	}

	getQbs() {
		return qbs;
	}

	getRbs() {
		return rbs;
	}

	getWrs() {
		return wrs;
	}

	getTes() {
		return tes;
	}

	getFlex() {
		return flex;
	}

	getName() {
		return name;
	}

	setQbs(qbsIn) {
		qbs = qbsIn;
	}

	setRbs(qbsIn) {
		rbs = qbsIn;
	}

	setWrs(qbsIn) {
		wrs = qbsIn;
	}

	setTes(qbsIn) {
		tes = qbsIn;
	}

	setFlex(qbsIn) {
		flex = qbsIn;
	}

	getMyTeam() {
		return drafted;
	}

	drafted(p) {
		drafted.add(p);
		if (p.getPosition() == "QB1" || p.getPosition() == "QB2") {
			draftedQb.add(p);
		} else if (p.getPosition() == "RB") {
			draftedRb.add(p);
		} else if (p.getPosition() == "WR") {
			draftedWr.add(p);
		} else if (p.getPosition() == "TE") {
			draftedTe.add(p);
		} else if (p.getPosition() == "DST") {
			draftedDst.add(p);
		}
	}

	byeByeBye(pos) {
		if (pos.equals("QB")) {
			if (draftedQb.isEmpty() || atLeastTwo("QB")) {
				return -1;
			}
			else {
				return draftedQb.get(0).getBye();
			}
		} else if (pos.equals("RB")) {
			if (draftedRb.isEmpty() || atLeastTwo("RB")) {
				return -1;
			}
			else {
				return draftedRb.get(0).getBye();
			}
		} else if (pos.equals("WR")) {
			if (draftedWr.isEmpty() || atLeastTwo("WR")) {
				return -1;
			}
			else {
				return draftedWr.get(0).getBye();
			}
		} else if (pos.equals("TE")) {
			if (draftedTe.isEmpty() || atLeastTwo("TE")) {
				return -1;
			}
			else {
				return draftedTe.get(0).getBye();
			}
		}
		return -1;
	}

	atLeastTwo(pos) {
		if (pos.equals("QB")) {
			var bye1 = draftedQb.get(0).getBye();
			for (var i = 1; i < draftedQb.size(); i++) {
				if (draftedQb.get(i).getBye() != bye1) {
					return true;
				}
			}
		} else if (pos.equals("RB")) {
			var bye1 = draftedRb.get(0).getBye();
			for (var i = 1; i < draftedRb.size(); i++) {
				if (draftedRb.get(i).getBye() != bye1) {
					return true;
				}
			}
		} else if (pos.equals("WR")) {
			var bye1 = draftedWr.get(0).getBye();
			for (var i = 1; i < draftedWr.size(); i++) {
				if (draftedWr.get(i).getBye() != bye1) {
					return true;
				}
			}
		} else if (pos.equals("TE")) {
			var bye1 = draftedTe.get(0).getBye();
			for (var i = 1; i < draftedTe.size(); i++) {
				if (draftedTe.get(i).getBye() != bye1) {
					return true;
				}
			}
		}
		return false;
	}

	changeName(newName) {
		name = newName;
	}

	setDst(newpos) {
		dst = newpos;
	}

	addQbStack(t) {
		qbStack.add(t);
	}

	addHandcuff(t) {
		handcuff.add(t);
	}

	addRecStack(t) {
		recStack.add(t);
	}

	addMultRec(t) {
		multRec.add(t);
	}

	removeQbStack(t) {
		qbStack.remove(t);
	}

	removeHandcuff(t) {
		handcuff.remove(t);
	}

	removeRecStack(t) {
		recStack.remove(t);
	}

	removeMultRec(t) {
		multRec.remove(t);
	}

	getQbStack() {
		return qbStack;
	}

	getRecStack() {
		return recStack;
	}

	getMultRec() {
		return multRec;
	}

	getHandcuff() {
		return handcuff;
	}

	findDraftSpot(s) {
		// System.out.println(s);
		for (var i = 1; i < team.size(); i++) {
			// System.out.println("get text: " + team.get(i).getText() + " s: " + s);
			if (team.get(i).getText().equals(s)) {
				return this;
			}
		}
		for (var i = 0; i < drafted.size(); i++) {
			// System.out.println("get text: " + drafted.get(i).getName());
			if (drafted.get(i).getName().equals(s)) {
				return this;
			}
		}
		return null;
	}

	remove(s, p) {
		// System.out.println(s);
		if (p.equals("QB1") || p.equals("QB2")) {
			newpos = [qbs.length - 1];
			var j = 0;
			for (var i = 0; i < qbs.length; i++) {
				if (!qbs[i].getName().equals(s)) {
					newpos[j] = qbs[i];
					j++;
				}
			}
			qbs = newpos;
		}
		else if (p.equals("RB")) {
			newpos = new Player[rbs.length - 1];
			var j = 0;
			for (var i = 0; i < rbs.length; i++) {
				if (!rbs[i].getName().equals(s)) {
					newpos[j] = rbs[i];
					j++;
				}
			}
			rbs = newpos;
		}
		else if (p.equals("WR")) {
			newpos = new Player[wrs.length - 1];
			var j = 0;
			for (var i = 0; i < wrs.length; i++) {
				if (!wrs[i].getName().equals(s)) {
					newpos[j] = wrs[i];
					j++;
				}
			}
			wrs = newpos;
		}
		else if (p.equals("TE")) {
			newpos = new Player[tes.length - 1];
			var j = 0;
			for (var i = 0; i < tes.length; i++) {
				if (!tes[i].getName().equals(s)) {
					newpos[j] = tes[i];
					j++;
				}
			}
			tes = newpos;
		}
		else if (p.equals("DST")) {
			newpos = new Player[dst.length - 1];
			var j = 0;
			for (var i = 0; i < dst.length; i++) {
				if (!dst[i].getName().equals(s)) {
					newpos[j] = dst[i];
					j++;
				}
			}
			dst = newpos;
		}
		if (p.equals("RB") || p.equals("WR") || p.equals("TE")) {
			newpos = new Player[flex.length - 1];
			var j = 0;
			for (var i = 0; i < flex.length; i++) {
				if (!flex[i].getName().equals(s)) {
					newpos[j] = flex[i];
					j++;
				}
			}
			flex = newpos;
		}
		newpos = [all.length - 1];
		var j = 0;
		for (var i = 0; i < all.length; i++) {
			if (!all[i].getName().equals(s)) {
				newpos[j] = all[i];
				j++;
			}
		}
		all = newpos;
	}

	removeDrafted(s) {
		play = findDraftedPlayer(s);
		drafted.remove(play);
		if (play.getPosition().equals("QB1") || play.getPosition().equals("QB2")) {
			draftedQb.remove(play);
		} else if (play.getPosition().equals("RB")) {
			draftedRb.remove(play);
		} else if (play.getPosition().equals("WR")) {
			draftedWr.remove(play);
		} else if (play.getPosition().equals("TE")) {
			draftedTe.remove(play);
		} else if (play.getPosition().equals("DST")) {
			draftedDst.remove(play);
		}
	}

	hasQbStack(team2) {
		return qbStack.contains(team2);
	}

	hasMultRec(team2) {
		return multRec.contains(team2);
	}

	hasRecStack(team2) {
		return recStack.contains(team2);
	}

	hasHandcuff(team2) {
		return handcuff.contains(team2);
	}

	hasDst() {
		for (var i = 0; i < drafted.size(); i++) {
			if (drafted.get(i).getPosition().equals("DST")) {
				return true;
			}
		}
		return false;
	}

	findDraftedPlayer(text) {
		for (var i = 0; i < drafted.size(); i++) {
			if (drafted.get(i).getName().equals(text)) {
				return drafted.get(i);
			}
		}
		return null;
	}

	addBackIn(p) {
		if (p.getPosition().equals("QB1") || p.getPosition().equals("QB2")) {
			newpos = new Player[qbs.length + 1];
			for (var i = 0; i < qbs.length; i++) {
				newpos[i] = qbs[i];
			}
			newpos[qbs.length] = p;
			qbs = newpos;

			newpos2 = new Player[all.length + 1];
			for (var i = 0; i < all.length; i++) {
				newpos2[i] = all[i];
			}
			newpos2[all.length] = p;
			all = newpos2;
		} else if (p.getPosition().equals("RB")) {
			newpos = new Player[rbs.length + 1];
			for (var i = 0; i < rbs.length; i++) {
				newpos[i] = rbs[i];
			}
			newpos[rbs.length] = p;
			rbs = newpos;

			newpos1 = new Player[flex.length + 1];
			for (var i = 0; i < flex.length; i++) {
				newpos1[i] = flex[i];
			}
			newpos1[flex.length] = p;
			flex = newpos1;

			newpos2 = new Player[all.length + 1];
			for (var i = 0; i < all.length; i++) {
				newpos2[i] = all[i];
			}
			newpos2[all.length] = p;
			all = newpos2;
		} else if (p.getPosition().equals("WR")) {
			newpos = new Player[wrs.length + 1];
			for (var i = 0; i < wrs.length; i++) {
				newpos[i] = wrs[i];
			}
			newpos[wrs.length] = p;
			wrs = newpos;

			newpos1 = new Player[flex.length + 1];
			for (var i = 0; i < flex.length; i++) {
				newpos1[i] = flex[i];
			}
			newpos1[flex.length] = p;
			flex = newpos1;

			newpos2 = new Player[all.length + 1];
			for (var i = 0; i < all.length; i++) {
				newpos2[i] = all[i];
			}
			newpos2[all.length] = p;
			all = newpos2;
		} else if (p.getPosition().equals("TE")) {
			newpos = new Player[tes.length + 1];
			for (var i = 0; i < tes.length; i++) {
				newpos[i] = tes[i];
			}
			newpos[tes.length] = p;
			tes = newpos;

			newpos1 = new Player[flex.length + 1];
			for (var i = 0; i < flex.length; i++) {
				newpos1[i] = flex[i];
			}
			newpos1[flex.length] = p;
			flex = newpos1;

			newpos2 = new Player[all.length + 1];
			for (var i = 0; i < all.length; i++) {
				newpos2[i] = all[i];
			}
			newpos2[all.length] = p;
			all = newpos2;
		} else if (p.getPosition().equals("DST")) {
			newpos = new Player[dst.length + 1];
			for (var i = 0; i < dst.length; i++) {
				newpos[i] = dst[i];
			}
			newpos[dst.length] = p;
			dst = newpos;

			newpos2 = new Player[all.length + 1];
			for (var i = 0; i < all.length; i++) {
				newpos2[i] = all[i];
			}
			newpos2[all.length] = p;
			all = newpos2;
		}
	}

	getDst() {
		return dst;
	}

	getEarliestRb(temp) {
		rb1 = null;
		for (var i = 0; i < temp.size(); i++) {
			if (temp.get(i).getPosition().equals("RB")) {
				rb1 = temp.get(i);
				break;
			}
		}
		return rb1;
	}

	getEarliestWr(temp) {
		wr1 = null;
		for (var i = 0; i < temp.size(); i++) {
			if (temp.get(i).getPosition().equals("WR")) {
				wr1 = temp.get(i);
				break;
			}
		}
		return wr1;
	}

	isFull() {
		return drafted.size() == 15;
	}


	getAll() {
		// TODO Auto-generated method stub
		return all;
	}

	claimed() {
		claim = true;
	}

	unclaim() {
		claim = false;
	}

	isClaimed() {
		return claim;
	}

	enoughQbs() {
		var count = 0;
		for (var i = 0; i < drafted.size(); i++) {
			if (drafted.get(i).getPosition().equals("QB1") || drafted.get(i).getPosition().equals("QB2")) {
				count++;
			}
		}

		if (count == 2) {
			return true;
		}

		return false;
	}

	enoughTes() {
		var count = 0;
		for (var i = 0; i < drafted.size(); i++) {
			//System.out.println(drafted.get(i).getName());
			if (drafted.get(i).getPosition().equals("TE")) {
				count++;
			}
		}

		if (count == 2) {
			return true;
		}

		return false;
	}
	enoughDst() {
		for (var i = 0; i < drafted.size(); i++) {
			//System.out.println(drafted.get(i).getName());
			if (drafted.get(i).getPosition().equals("DST")) {
				return true;
			}
		}

		return false;
	}

	notenoughtQbs() {
		for (var i = 0; i < drafted.size(); i++) {

			if (drafted.get(i).getPosition().equals("QB1") || drafted.get(i).getPosition().equals("QB2")) {
				return false;
			}
		}
		return true;
	}

	notenoughtTes() {
		for (var i = 0; i < drafted.size(); i++) {

			if (drafted.get(i).getPosition().equals("TE")) {
				return false;
			}
		}
		return true;
	}

	notenoughtDst() {
		for (var i = 0; i < drafted.size(); i++) {

			if (drafted.get(i).getPosition().equals("DST")) {
				return false;
			}
		}
		return true;
	}

	getDraftedSize() {
		return drafted.size();
	}


	getDraftedAll() {
		allList = new Player[getDraftedSize()];
		for (var i = 0; i < draftedQb.size(); i++) {
			allList[i] = draftedQb.get(i);
		}
		for (var i = 0; i < draftedRb.size(); i++) {
			allList[i + draftedQb.size()] = draftedRb.get(i);
		}
		for (var i = 0; i < draftedWr.size(); i++) {
			allList[draftedRb.size() + i + draftedQb.size()] = draftedWr.get(i);
		}
		for (var i = 0; i < draftedTe.size(); i++) {
			allList[i + draftedRb.size() + draftedWr.size() + draftedQb.size()] = draftedTe.get(i);
		}
		for (var i = 0; i < draftedDst.size(); i++) {
			allList[i + draftedRb.size() + draftedWr.size() + draftedQb.size() + draftedTe.size()] = draftedDst.get(i);
		}
		return allList;
	}
}
