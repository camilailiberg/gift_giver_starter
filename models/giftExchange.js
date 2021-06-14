class GiftExchnage {
	// This will pass the list of users that implements an algorithm responsible for randomly pairing users together.
	// The Math.random function in JavaScript should be useful here.
	// Make sure this method returns an array of arrays. Each nested array should contain a pair of randomly matched users.
	static async pairs(users, res) {
		// array that will hold indexes that have alredy been paired together
		let alreadyPaired = [];
		// array of pairs that will be returned
		let retu = [];

		// while not every name has a pair
		while (alreadyPaired.length != users.length) {
			// choose a random number from 0 to users.length - 1
			let randomPair1 = Math.floor(Math.random() * users.length);
			// while the random number generated had already been generated before
			while (alreadyPaired.includes(randomPair1)) {
				randomPair1 = Math.floor(Math.random() * users.length); // generate a new random number
			}
			// add it to alreadyPaired
			alreadyPaired.push(randomPair1);

			// choose another random number
			let randomPair2 = Math.floor(Math.random() * users.length);
			// while the random number generated had already been generated before
			while (alreadyPaired.includes(randomPair2)) {
				randomPair2 = Math.floor(Math.random() * users.length); // generate a new random number
			}
			// add it to alredyPaired
			alreadyPaired.push(randomPair2);

			//add pair to array of pairs
			retu.push([users[randomPair1], users[randomPair2]]);
		}

		res.status(200).json(retu);
	}

	static async traditional(users) {}
}

module.exports = GiftExchnage;
