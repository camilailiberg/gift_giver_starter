const express = require("express");
const { traditional } = require("../models/giftExchange");
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
	let pairs = await GiftExchnage.pairs(users);

	res.status(200).json(pairs);
});

router.post("/traditional", async (req, res, next) => {
	const users = req.body.names;

	let traditional = await GiftExchnage.traditional(users);

	res.status(200).json(traditional);
});

module.exports = router;
