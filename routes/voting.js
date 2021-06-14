const express = require("express");
const router = express.Router();

const voting = {
	pepperoni: 0,
	cheese: 0,
	hawaiian: 0,
};
router.get("/", async (req, res, next) => {
	res.status(200).json(voting);
});

router.post("/:pizzaName", async (req, res, next) => {
	console.log(req.params); // the name of the path paramenters we define, in this case pizzaName, will be attache to req.params ( req is a request object that express wraps for us)

	// if pizza name is in voting const, then add one to that name.
	const pizzaName = req.params.pizzaName;

	if (voting[pizzaName] || voting[pizzaName] == 0) {
		voting[pizzaName] += 1;
	}

	res.status(200).json(voting); // this stops the request and seds req.params back
});

module.exports = router; // by foing this we are allowing any other part of our application access to this router which stores the single route that we defined, which serves up the voting pole that we arbitrarly defined
