const voting = {
	pepperoni: [],
	cheese: [],
	hawaiian: [],
};

class Voting {
	static async tallyVotes() {
		// handling calculating the final results for our poll
		const votingResults = {
			pepperoni: voting.pepperoni.length,
			cheese: voting.cheese.length,
			hawaiian: voting.hawaiian.length,
		};

		//and return those results
		return votingResults;
	}

	static async recordVote(pizzaName, user) {
		// if pizza name is in voting const, then add one to that name.
		// increment the pizzaName thta was voted for
		if (voting[pizzaName]) {
			if (!voting[pizzaName].includes(user)) {
				voting[pizzaName].push(user);
			}
		}
		// and return th efinal results
		return Voting.tallyVotes();
	}
}

module.exports = Voting;
