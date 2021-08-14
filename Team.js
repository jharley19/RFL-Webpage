
class Team{
	  name;
	   bye;
	  qb1;
	 qb2;
	  rb;
	 rec;  

	
	constructor( n,  b,  week1In,  week2In
			,  week3In) {
		name = n;
		bye = b;
	}

	  addQb1( q) {
		qb1 = q;
	}

	  addQb2( q) {
		qb2 = q;
	}

	  addRb( q) {
		rb.add(q);
	}

	  addRec( q) {
		rec.add(q);
	}

	  getQb1() {
		return qb1;
	}

	  getQb2() {
		return qb2;
	}

	getRb() {
		return rb;
	}

	getRec() {
		return rec;
	}

	  getName() {
		return name;
	}

	  getBye() {
		return bye;
	}
	
}
