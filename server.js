const express = require("express");
const morgan = require("morgan");
const giftExchnage = require("./routes/giftExchange");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/gift-exchange", giftExchnage); //! this is a route too

app.get((req, res, next) => {
	res.status(200).json({ ping: "pong" });
});

const port = 3000;

app.listen(port, () => {
	console.log(`🚀 Server listening on port ${port}`);
});
