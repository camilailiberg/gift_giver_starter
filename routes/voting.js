const express = require("express");
const router = express.Router();
const Voting = require("../models/voting");

router.get("/", async (req, res, next) => {
	const votes = await Voting.tallyVotes();
	res.status(200).json(votes);
});

router.post("/:pizzaName", async (req, res, next) => {
	console.log(req.params); // the name of the path paramenters we define, in this case pizzaName, will be attache to req.params ( req is a request object that express wraps for us)

	const pizzaName = req.params.pizzaName;

	const votes = await Voting.recordVote(pizzaName);

	res.status(200).json(votes); // this stops the request and seds req.params back
});

module.exports = router; // by foing this we are allowing any other part of our application access to this router which stores the single route that we defined, which serves up the voting pole that we arbitrarly defined
