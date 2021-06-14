const express = require("express");
const router = express.Router();
const GiftExchnage = require("../models/giftExchange");

router.get("/", async (req, res, next) => {
	res.status(200).json({
		gift: "surprise",
	});
});

router.post("/pairs", async (req, res, next) => {
	//getting the list of names
	const users = req.body.names;

	// calling pairs method in giftExchange.js
	pairs = await GiftExchnage.pairs(users);

	res.status(200).json(pairs);
});

router.post("/traditional", async (req, res, next) => {
	// GiftExchnage.traditional(users);
});

module.exports = router;
