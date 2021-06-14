class ExpressError extends Error {
	constructor(message, status) {
		super();
		this.message = message;
		this.status = status;
	}
}

class NotFoundError extends ExpressError {
	constructor(message = "Not Found") {
		super(message, 404);
	}
}

class BadRequestError extends ExpressError {
	constructor(message = "Bad Request") {
		super(message, 400);
	}
}

module.exports = {
	// when key and value have the same name, we don't need to write it like this:
	// ExpressError: ExpressError,
	ExpressError,
	NotFoundError,
	BadRequestError,
};
