const express = require("express");
const router = express.Router();
const Voting = require("../models/voting");

router.get("/", async (req, res, next) => {
	try {
		const votes = await Voting.tallyVotes();
		res.status(200).json(votes);
	} catch (err) {
		next(err);
	}
});

// dynamic route
router.post("/:pizzaName", async (req, res, next) => {
	//POST request come with a body, which is attached to req.body, and this is data that is being explicitly sent to this endpoint or route.
	//to parse that req.body as JSON we need to laverage another request middleware. this middleware comes from express and it works like this . . . ( go to server.js (1) )
	// console.log(req.params); // the name of the path paramenters we define, in this case pizzaName, will be attache to req.params ( req is a request object that express wraps for us)

	// console.log(req.body);

	try {
		const pizzaName = req.params.pizzaName;
		const user = req.body.user;
		const votes = await Voting.recordVote(pizzaName, user);

		res.status(200).json(votes); // this stops the request and seds req.params back
	} catch (err) {
		next(err);
	}
});

module.exports = router; // by foing this we are allowing any other part of our application access to this router which stores the single route that we defined, which serves up the voting pole that we arbitrarly defined
