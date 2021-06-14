class GiftExchnage {
	static async pairs(users) {
		// Math.floor(Math.random() * users.length);

		// let l = users.length;
		// console.log(l);
		let randomPair1 = Math.floor(Math.random() * users.length);

		console.log(randomPair1);
	}

	static async traditional(users) {}
}

module.exports = GiftExchnage;
