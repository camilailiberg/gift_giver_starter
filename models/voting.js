const voting = {
	pepperoni: 0,
	cheese: 0,
	hawaiian: 0,
};

class Voting {
	static async tallyVotes() {
		// handling calculating the final results for our poll
		//and return those results
		return voting;
	}

	static async recordVote(pizzaName) {
		// if pizza name is in voting const, then add one to that name.
		// increment the pizzaName thta was voted for
		if (voting[pizzaName] || voting[pizzaName] == 0) {
			voting[pizzaName] += 1;
		}
		// and return th efinal results
		return Voting.tallyVotes();
	}
}

module.exports = Voting;
