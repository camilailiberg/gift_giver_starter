const express = require("express");
const router = express.Router();
const GiftExchnage = require("../models/giftExchange");

router.get("/", async (req, res, next) => {
	res.status(200).json({
		gift: "surprise",
	});
});

router.post("/pairs", async (req, res, next) => {
	pairs(users);
});

router.post("/traditional", async (req, res, next) => {
	traditional(users);
});

module.exports = router;
