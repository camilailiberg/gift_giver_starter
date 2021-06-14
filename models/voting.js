/*
const Errors = require("../utils/errors")

we can do:
const BadRequesrError = Errors.BadRequestError
const NotFoundError = Errors.NotFoundError
const ExpressError = Errors.ExpressError
but there is a better way called object distructuring
*/

const { BadRequestError, NotFoundError } = require("../utils/errors");

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
		if (!user) {
			throw new BadRequestError(
				"You must have a user in the request body to vote"
			);
		}
		if (!voting[pizzaName]) {
			throw new NotFoundError("That pizza nae is not par of the poll");
		}
		if (voting[pizzaName].includes(user)) {
			throw new BadRequestError("That user has already voted for that pizza");
		}

		voting[pizzaName].push(user);

		/*
		with all of the errir handling we added we don;t need this anymore.

		if pizza name is in voting const, then add one to that name.
		increment the pizzaName thta was voted for
		if (voting[pizzaName]) {
			if (!voting[pizzaName].includes(user)) {
				voting[pizzaName].push(user);
			}
		}

		*/
		// and return th efinal results
		return Voting.tallyVotes();
	}
}

module.exports = Voting;
